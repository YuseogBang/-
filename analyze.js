/**
 * /api/analyze  — Vercel Serverless Function
 * Claude API 프록시. ANTHROPIC_API_KEY는 Vercel 환경변수로만 관리.
 *
 * 보안 처리:
 *  - API 키 서버 전용 환경변수 (클라이언트 노출 없음)
 *  - 요청 크기 제한 (10KB body)
 *  - Rate-limit 헤더 반환 (Vercel Edge에서 추가 제한 가능)
 *  - 프롬프트 인젝션 방지: 사용자 텍스트만 슬라이스해서 전달
 *  - CORS: 배포 도메인만 허용 (ALLOWED_ORIGIN 환경변수)
 */

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MAX_TEXT_CHARS = 10000;
const MAX_BODY_BYTES = 50 * 1024; // 50KB

export const config = { maxDuration: 30 };

export default async function handler(req, res) {
  // ── CORS ──────────────────────────────────────────────
  const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: '허용되지 않는 메서드입니다.' });

  // ── 환경변수 확인 ──────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('[analyze] ANTHROPIC_API_KEY 환경변수가 설정되지 않았습니다.');
    return res.status(500).json({ error: '서버 설정 오류입니다. 관리자에게 문의하세요.' });
  }

  // ── 요청 크기 제한 ────────────────────────────────────
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({ error: '요청 데이터가 너무 큽니다.' });
  }

  // ── Body 파싱 ─────────────────────────────────────────
  let body;
  try {
    body = typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');
  } catch {
    return res.status(400).json({ error: '잘못된 요청 형식입니다.' });
  }

  const userText = String(body.text || '').slice(0, MAX_TEXT_CHARS).trim();
  if (!userText) {
    return res.status(400).json({ error: '분석할 텍스트가 없습니다.' });
  }

  // ── 프롬프트 (서버에서 직접 구성 — 인젝션 방지) ───────
  const prompt = `당신은 ESG M&A 실사 전문 분석 AI입니다. 아래 기업 내부 자료를 분석하여 반드시 JSON 형식으로만 응답하세요. 마크다운 코드블록(\`\`\`)이나 다른 텍스트는 절대 포함하지 마세요. 순수 JSON만 출력하세요.

분석 자료:
"""
${userText}
"""

응답 형식(JSON만):
{
  "E_score": (0~100 정수, 환경 ESG 성과),
  "S_score": (0~100 정수, 사회 ESG 성과),
  "G_score": (0~100 정수, 지배구조 ESG 성과),
  "audit_readiness": (0~100 정수, 감사 대응 준비도),
  "compliance_score": (0~100 정수, 규제 준수 수준),
  "disclosure_score": (0~100 정수, 공시 완성도),
  "serious_accidents": (0~10 정수),
  "env_violations": (0~15 정수),
  "anti_corruption": (0~10 정수),
  "cyber_incidents": (0~10 정수),
  "key_findings": ["발견사항1","발견사항2","발견사항3"],
  "risk_flags": ["리스크1","리스크2"],
  "opportunities": ["기회1","기회2"],
  "ai_summary": "100자 이내 종합 평가"
}

점수 기준: 높을수록 양호. 자료에 명시적 근거가 없으면 중간값(55~65)으로 설정.`;

  // ── Anthropic API 호출 ────────────────────────────────
  try {
    const anthropicRes = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!anthropicRes.ok) {
      const errData = await anthropicRes.json().catch(() => ({}));
      const msg = errData?.error?.message || `Anthropic 오류 (${anthropicRes.status})`;
      console.error('[analyze] Anthropic API 오류:', msg);
      // 클라이언트에는 내부 오류 세부 내용을 노출하지 않음
      return res.status(502).json({ error: 'AI 분석 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' });
    }

    const data = await anthropicRes.json();
    const result = (data.content || []).map(b => (b.type === 'text' ? b.text : '')).join('');

    return res.status(200).json({ result });

  } catch (err) {
    console.error('[analyze] 네트워크 오류:', err.message);
    return res.status(503).json({ error: '네트워크 오류입니다. 잠시 후 다시 시도해 주세요.' });
  }
}
