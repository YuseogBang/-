<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>AI ESG 실사 기반 M&A 밸류에이션 모델</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    :root {
      --bg: #020617;
      --card: #020617;
      --accent: #22c55e;
      --accent-soft: rgba(34, 197, 94, 0.12);
      --accent-text: #bbf7d0;
      --text-main: #f9fafb;
      --text-sub: #9ca3af;
      --border: #1f2937;
      --danger: #ef4444;
      --warn: #f97316;
      --info: #38bdf8;
    }
    * {
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    }
    body {
      margin: 0;
      background: radial-gradient(circle at top left, #020617 0, #020617 45%, #000 100%);
      color: var(--text-main);
      line-height: 1.6;
    }
    a { color: inherit; text-decoration: none; }

    .page {
      max-width: 1160px;
      margin: 0 auto;
      padding: 32px 18px 44px 18px;
    }

    /* HEADER */
    .hero {
      display: grid;
      grid-template-columns: minmax(0,1.2fr) minmax(0,0.9fr);
      gap: 20px;
      margin-bottom: 32px;
      align-items: flex-start;
    }
    .hero-kicker {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: #6b7280;
    }
    .hero h1 {
      margin: 10px 0 8px 0;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .hero h1 span {
      background: linear-gradient(to right, #22c55e, #a855f7);
      -webkit-background-clip: text;
      color: transparent;
    }
    .hero-desc {
      font-size: 14px;
      color: var(--text-sub);
      max-width: 540px;
    }
    .tag-row {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .tag {
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid rgba(75,85,99,0.9);
      font-size: 11px;
      background: rgba(15,23,42,0.85);
      color: #e5e7eb;
    }
    .hero-right {
      padding: 14px 16px;
      border-radius: 18px;
      border: 1px solid rgba(55,65,81,0.9);
      background: radial-gradient(circle at top left, rgba(15,23,42,0.98) 0, rgba(15,23,42,0.96) 60%);
      box-shadow: 0 22px 60px rgba(15,23,42,0.9);
      font-size: 13px;
    }
    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 9px;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.45);
      font-size: 11px;
      color: #e5e7eb;
      margin-bottom: 8px;
    }
    .hero-pill-dot {
      width: 7px; height: 7px;
      border-radius: 999px;
      background: var(--accent);
      box-shadow: 0 0 0 6px rgba(34,197,94,0.25);
    }
    .hero-right ul {
      margin: 4px 0 4px 16px;
      padding: 0;
      color: var(--text-sub);
    }
    .hero-right li { margin-bottom: 2px; }

    /* COMMON SECTION */
    .section {
      margin-bottom: 32px;
    }
    .section-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #6b7280;
      margin-bottom: 6px;
    }
    .section-title {
      font-size: 19px;
      font-weight: 600;
      margin-bottom: 6px;
    }
    .section-sub {
      font-size: 13px;
      color: var(--text-sub);
      max-width: 640px;
    }

    /* MODEL LAYOUT */
    .model-card {
      margin-top: 14px;
      padding: 16px 16px 18px 16px;
      border-radius: 18px;
      border: 1px solid rgba(55,65,81,0.95);
      background: radial-gradient(circle at top left, #020617 0, #020617 60%);
      box-shadow: 0 24px 56px rgba(15,23,42,0.98);
    }
    .model-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .model-title {
      font-size: 15px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .model-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--accent);
      box-shadow: 0 0 0 6px rgba(34,197,94,0.35);
    }
    .model-tag {
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.55);
      color: #e5e7eb;
    }
    .model-layout {
      display: grid;
      grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr);
      gap: 16px;
      margin-top: 6px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 10px;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-bottom: 8px;
    }
    label {
      font-size: 12px;
      color: #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    label span.hint {
      font-size: 11px;
      color: #9ca3af;
      font-weight: 400;
    }
    input[type="number"], input[type="range"] { width: 100%; }
    input[type="number"] {
      padding: 5px 7px;
      border-radius: 8px;
      border: 1px solid #1f2937;
      background: rgba(15,23,42,0.9);
      color: #e5e7eb;
      font-size: 12px;
      outline: none;
    }
    input[type="number"]:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px rgba(34,197,94,0.5);
    }
    input[type="range"] {
      -webkit-appearance: none;
      height: 6px;
      border-radius: 999px;
      background: #1f2937;
      outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--accent);
      cursor: pointer;
      box-shadow: 0 0 0 5px rgba(34,197,94,0.25);
    }
    .range-value {
      font-size: 11px;
      color: #a5b4fc;
    }

    .btn-row {
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
      gap: 8px;
      flex-wrap: wrap;
    }
    button {
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.5);
      background: radial-gradient(circle at top left, #22c55e 0, #15803d 45%, #052e16 100%);
      color: #ecfdf5;
      font-size: 12px;
      padding: 6px 13px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 14px 30px rgba(22,163,74,0.45);
    }
    button.secondary {
      background: rgba(15,23,42,0.95);
      border-color: rgba(148,163,184,0.7);
      box-shadow: none;
    }
    button span.icon { font-size: 14px; }
    button:active {
      transform: translateY(1px);
      box-shadow: 0 6px 18px rgba(22,163,74,0.35);
    }

    .metric-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 8px;
      margin-top: 8px;
    }
    .metric {
      padding: 8px 9px;
      border-radius: 12px;
      border: 1px solid rgba(55,65,81,0.9);
      background: rgba(15,23,42,0.95);
      font-size: 12px;
    }
    .metric-label {
      font-size: 11px;
      color: #9ca3af;
      margin-bottom: 2px;
    }
    .metric-value-big {
      font-size: 18px;
      font-weight: 600;
    }
    .metric-sub {
      font-size: 11px;
      color: #9ca3af;
    }
    .gap-positive { color: var(--accent); }
    .gap-negative { color: var(--danger); }

    .chart-container {
      margin-top: 8px;
      background: radial-gradient(circle at top left, rgba(15,23,42,0.9) 0, rgba(15,23,42,0.96) 60%);
      border-radius: 12px;
      border: 1px solid rgba(55,65,81,0.9);
      padding: 8px 8px 10px 8px;
    }
    .chart-title {
      font-size: 11px;
      color: #9ca3af;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .legend-pill {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 999px;
      border: 1px solid rgba(75,85,99,0.9);
      color: #e5e7eb;
    }
    .legend-peer { border-color: rgba(148,163,184,0.8); color: #e5e7eb; }
    .legend-buyer { border-color: rgba(59,130,246,0.8); color: #bfdbfe; }
    .legend-seller { border-color: rgba(248,113,113,0.8); color: #fecaca; }

    .code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 11px;
      padding: 2px 4px;
      border-radius: 4px;
      background: rgba(15,23,42,0.85);
      border: 1px solid rgba(55,65,81,0.9);
    }

    /* PEER LIST */
    .peer-card {
      margin-top: 8px;
      padding: 8px 10px;
      border-radius: 12px;
      border: 1px solid rgba(55,65,81,0.9);
      background: rgba(15,23,42,0.9);
      font-size: 12px;
    }
    .peer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .peer-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .peer-pill {
      padding: 3px 7px;
      border-radius: 999px;
      border: 1px solid rgba(75,85,99,0.9);
      cursor: pointer;
      font-size: 11px;
      color: #e5e7eb;
      background: rgba(15,23,42,0.95);
    }
    .peer-pill.active {
      border-color: var(--accent);
      background: rgba(22,163,74,0.18);
    }
    .peer-detail {
      margin-top: 6px;
      font-size: 11px;
      color: var(--text-sub);
    }

    /* ESG RISK SUMMARY */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 10px;
      margin-top: 10px;
    }
    .risk-card {
      padding: 8px 9px;
      border-radius: 12px;
      border: 1px solid rgba(55,65,81,0.9);
      background: rgba(15,23,42,0.9);
      font-size: 12px;
    }
    .risk-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 4px;
      color: #9ca3af;
    }
    .risk-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 4px;
    }
    .risk-chip {
      font-size: 10px;
      padding: 2px 5px;
      border-radius: 999px;
      border: 1px solid rgba(75,85,99,0.9);
      color: #e5e7eb;
      background: rgba(15,23,42,0.95);
    }

    /* RISK NARRATIVE SECTION */
    .two-col {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,1fr);
      gap: 16px;
      margin-top: 12px;
    }
    .text-card {
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid rgba(55,65,81,0.9);
      background: rgba(15,23,42,0.9);
      font-size: 13px;
    }
    .text-card h3 {
      font-size: 14px;
      margin: 0 0 4px 0;
    }
    .text-card p { margin-bottom: 6px; }
    .text-card ul {
      margin: 4px 0 4px 16px;
      padding: 0;
      color: var(--text-sub);
      font-size: 12px;
    }
    .text-card li { margin-bottom: 2px; }

    .footer-note {
      font-size: 11px;
      color: #6b7280;
      margin-top: 16px;
      border-top: 1px solid rgba(31,41,55,0.8);
      padding-top: 8px;
    }

    @media (max-width: 960px) {
      .hero,
      .model-layout,
      .two-col {
        grid-template-columns: minmax(0,1fr);
      }
      .page {
        padding: 22px 14px 32px 14px;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- HERO -->
    <section class="hero">
      <div>
        <div class="hero-kicker">AI ESG DUE DILIGENCE SERVICE</div>
        <h1>
          AI가 ESG 실사를 대신하고,<br />
          <span>딜 멀티플과 밸류에이션 갭</span>까지 보여줍니다.
        </h1>
        <p class="hero-desc">
          회계자료·공시·공공데이터를 AI가 자동으로 훑어 ESG 리스크를 찾아내고, 
          인수자(BUY-SIDE)·피인수자(SELL-SIDE)·중립(PEER) 관점에서 EV/EBITDA 멀티플과 밸류에이션 갭을 동시에 계산하는 모델입니다.
        </p>
        <div class="tag-row">
          <div class="tag">피어 EV/EBITDA 실시간 연동</div>
          <div class="tag">BUY vs SELL 멀티플</div>
          <div class="tag">ESG E/S/G 리스크 통합</div>
          <div class="tag">AI ESG 실사 리스크 공개</div>
        </div>
      </div>
      <aside class="hero-right">
        <div class="hero-pill">
          <span class="hero-pill-dot"></span>
          우리 서비스 한 줄 정의
        </div>
        <p>
          우리는 ESG 실사를 <strong>AI가 자동으로 해주는 서비스</strong>를 만듭니다.
          AI가 회사의 회계자료·공시·공공데이터를 훑어서 위험 요소를 찾아내고,
          그 결과를 사는 쪽·파는 쪽·중립(피어) 관점에서 동시에 보여줍니다.
        </p>
        <ul>
          <li>BUY-SIDE: 리스크를 넓게 보고 가격을 깎을 근거를 확보.</li>
          <li>SELL-SIDE: ESG 개선·플랫폼 시너지 스토리로 프리미엄을 주장.</li>
          <li>PEER: 같은 업종 피어 EV/EBITDA를 기반으로 중립 앵커를 제공.</li>
        </ul>
      </aside>
    </section>

    <!-- MODEL -->
    <section class="section">
      <div class="section-label">Model Playground</div>
      <div class="section-title">피어 멀티플 연동 M&A 밸류에이션 & 밸류에이션 갭</div>
      <p class="section-sub">
        타깃 기업의 재무와 ESG 리스크를 입력하면, 피어 EV/EBITDA에 연동해 BUY-SIDE·SELL-SIDE 멀티플을 계산하고, 
        최종적으로 <strong>밸류에이션 갭(배수·금액)</strong>을 보여줍니다.
      </p>

      <div class="model-card">
        <div class="model-header">
          <div class="model-title">
            <span class="model-dot"></span>
            ESG 기반 EV/EBITDA 멀티플 엔진
          </div>
          <div class="model-tag">실시간 피어 연동 · 데모</div>
        </div>

        <div class="model-layout">
          <!-- LEFT: INPUT -->
          <div>
            <div class="section-label">INPUT · 타깃 기업 & ESG 지표</div>

            <div class="grid-2">
              <div class="field">
                <label>
                  타깃 기업 EBITDA (억원)
                  <span class="hint">마지막 12개월 기준</span>
                </label>
                <input type="number" id="ebitda" value="100" min="0" step="1" />
              </div>
              <div class="field">
                <label>
                  피어 평균 EV/EBITDA (배)
                  <span class="hint" id="peerMultipleLabel">자동 계산</span>
                </label>
                <input type="number" id="peerMultipleOverride" value="" min="0" step="0.1" placeholder="직접 입력 시 피어 평균 무시" />
              </div>
            </div>

            <div class="section-label" style="margin-top:6px;">핵심 ESG 리스크 (최근 3년)</div>
            <div class="grid-2">
              <div class="field">
                <label>
                  E 리스크 지표
                  <span class="hint">중대 환경사고·법규 위반 등</span>
                </label>
                <input type="number" id="eRisk" value="2" min="0" step="1" />
              </div>
              <div class="field">
                <label>
                  S 리스크 지표
                  <span class="hint">중대재해·노동분쟁 등</span>
                </label>
                <input type="number" id="sRisk" value="1" min="0" step="1" />
              </div>
              <div class="field">
                <label>
                  G 리스크 지표
                  <span class="hint">반부패·공정위 제재 등</span>
                </label>
                <input type="number" id="gRisk" value="0" min="0" step="1" />
              </div>
              <div class="field">
                <label>
                  최근 ESG 긍정 이벤트
                  <span class="hint">인증·개선·투자 등 개수</span>
                </label>
                <input type="number" id="esgPositive" value="1" min="0" step="1" />
              </div>
            </div>

            <div class="section-label" style="margin-top:6px;">K‑ESG 기반 E/S/G 점수 요약</div>
            <p style="font-size:12px; color:#9ca3af; margin-bottom:4px;">
              실제 프로젝트에서는 K‑ESG 61개 지표를 사용하지만, 데모에서는 0~100 점수로 축약합니다.
            </p>
            <div class="grid-2">
              <div class="field">
                <label>
                  E 점수
                  <span class="range-value" id="eScoreLabel">70</span>
                </label>
                <input type="range" id="eScore" min="0" max="100" value="70" />
              </div>
              <div class="field">
                <label>
                  S 점수
                  <span class="range-value" id="sScoreLabel">65</span>
                </label>
                <input type="range" id="sScore" min="0" max="100" value="65" />
              </div>
              <div class="field">
                <label>
                  G 점수
                  <span class="range-value" id="gScoreLabel">60</span>
                </label>
                <input type="range" id="gScore" min="0" max="100" value="60" />
              </div>
              <div class="field">
                <label>
                  파일럿 가중치: E 비중 (%)
                  <span class="range-value" id="eWeightLabel">50</span>
                </label>
                <input type="range" id="eWeight" min="40" max="60" value="50" />
                <p style="font-size:11px; color:#9ca3af;">
                  나머지 50%는 S/G가 60:40 비율로 나눕니다. (예: E 50, S 30, G 20)
                </p>
              </div>
            </div>

            <div class="btn-row">
              <button id="calcBtn">
                <span class="icon">⚙️</span>
                멀티플 & 밸류에이션 갭 계산
              </button>
              <button id="peerResetBtn" class="secondary">
                <span class="icon">📊</span>
                피어 리스트 기준으로 초기화
              </button>
            </div>

            <!-- PEER LIST -->
            <div class="peer-card">
              <div class="peer-header">
                <span style="font-size:11px; color:#9ca3af;">피어 그룹 EV/EBITDA</span>
                <span style="font-size:11px; color:#e5e7eb;">
                  평균 <span class="code" id="peerAvgLabel">0.0x</span>
                </span>
              </div>
              <div class="peer-list" id="peerList">
                <!-- JS에서 채움 -->
              </div>
              <div class="peer-detail" id="peerDetail">
                피어를 클릭하면 개별 멀티플과 간단한 설명이 여기에 표시됩니다.
              </div>
            </div>
          </div>

          <!-- RIGHT: OUTPUT -->
          <div>
            <div class="section-label">OUTPUT · BUY/SELL 멀티플 & 밸류에이션 갭</div>

            <div class="metric-row">
              <div class="metric">
                <div class="metric-label">PEER · 중립 EV/EBITDA</div>
                <div class="metric-value-big" id="peerMultipleDisplay">0.0x</div>
                <div class="metric-sub">
                  피어 리스트 평균 또는 직접 입력값
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">BUY-SIDE EV/EBITDA</div>
                <div class="metric-value-big" id="buyerMultiple">0.0x</div>
                <div class="metric-sub" id="buyerMultipleDesc">
                  ESG 리스크를 반영한 인수자 기준 멀티플
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">SELL-SIDE EV/EBITDA</div>
                <div class="metric-value-big" id="sellerMultiple">0.0x</div>
                <div class="metric-sub" id="sellerMultipleDesc">
                  ESG 개선·스토리 프리미엄을 반영한 멀티플
                </div>
              </div>
            </div>

            <div class="metric-row" style="margin-top:8px;">
              <div class="metric">
                <div class="metric-label">BUY-SIDE 밸류에이션</div>
                <div class="metric-value-big" id="buyerValue">0 억원</div>
                <div class="metric-sub">
                  BUY 멀티플 × EBITDA
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">SELL-SIDE 밸류에이션</div>
                <div class="metric-value-big" id="sellerValue">0 억원</div>
                <div class="metric-sub">
                  SELL 멀티플 × EBITDA
                </div>
              </div>
              <div class="metric">
                <div class="metric-label">밸류에이션 갭 (SELL - BUY)</div>
                <div class="metric-value-big" id="valueGap">0 억원</div>
                <div class="metric-sub" id="gapDesc">
                  ESG 조건·구조조정으로 줄여야 할 간극
                </div>
              </div>
            </div>

            <div class="chart-container">
              <div class="chart-title">
                <span>EV/EBITDA 멀티플 · PEER vs BUY vs SELL</span>
                <div style="display:flex; gap:4px;">
                  <span class="legend-pill legend-peer">PEER</span>
                  <span class="legend-pill legend-buyer">BUY-SIDE</span>
                  <span class="legend-pill legend-seller">SELL-SIDE</span>
                </div>
              </div>
              <canvas id="multipleChart" height="150"></canvas>
            </div>

            <div class="section-label" style="margin-top:8px;">E/S/G 리스크 요약</div>
            <div class="risk-grid">
              <div class="risk-card">
                <div class="risk-title">E RISK</div>
                <p style="font-size:12px; color:#9ca3af;">
                  중대 환경사고·환경 법규 위반, 온실가스 감축 이행 실패 등.
                </p>
                <div class="risk-chip-row">
                  <span class="risk-chip">E 리스크 지표: <span id="eRiskLabel">2</span></span>
                  <span class="risk-chip">E 점수: <span id="eScoreOut">70</span></span>
                </div>
              </div>
              <div class="risk-card">
                <div class="risk-title">S RISK</div>
                <p style="font-size:12px; color:#9ca3af;">
                  중대재해·산재율·노동분쟁, 지역사회 민원 등.
                </p>
                <div class="risk-chip-row">
                  <span class="risk-chip">S 리스크 지표: <span id="sRiskLabel">1</span></span>
                  <span class="risk-chip">S 점수: <span id="sScoreOut">65</span></span>
                </div>
              </div>
              <div class="risk-card">
                <div class="risk-title">G RISK</div>
                <p style="font-size:12px; color:#9ca3af;">
                  반부패·공정위 제재, 이사회 독립성 부족, 내부통제 미비 등.
                </p>
                <div class="risk-chip-row">
                  <span class="risk-chip">G 리스크 지표: <span id="gRiskLabel">0</span></span>
                  <span class="risk-chip">G 점수: <span id="gScoreOut">60</span></span>
                </div>
              </div>
            </div>

            <p style="font-size:11px; color:#9ca3af; margin-top:8px;">
              BUY-SIDE는 ESG 리스크를 근거로 피어 멀티플에서 할인(discount)하고, 
              SELL-SIDE는 ESG 개선·시너지 스토리를 근거로 프리미엄(premium)을 요구합니다. 
              이 모델은 그 둘 사이의 <strong>멀티플 갭과 밸류에이션 갭</strong>을 시각화하는 도구입니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI SERVICE RISK NARRATIVE -->
    <section class="section">
      <div class="section-label">AI ESG Service · Risk & Governance</div>
      <div class="section-title">AI ESG 실사가 만들어내는 새로운 두 가지 리스크</div>
      <p class="section-sub">
        ESG 실사를 AI가 대신해 주는 순간, 과거에는 없던 새로운 리스크도 함께 등장합니다.
        우리는 이 두 가지 리스크를 서비스 설계 단계에서부터 공개하고, 대응 방안을 구조에 녹입니다.
      </p>

      <div class="two-col">
        <div class="text-card">
          <h3>리스크 1 · '중요하다'는 판단을 누가 정하는가</h3>
          <p>
            AI 실사의 핵심은 <strong>"이 회사에서 무엇이 중요한 위험인지"</strong> 골라주는 것입니다.
            예를 들어 어떤 소각 회사의 장부에 환경 복구 비용이 0원으로 적혀 있으면,
            AI는 이를 &ldquo;이상치&rdquo;로 보고 중요한 위험이라고 표시합니다.
          </p>
          <p>
            문제는, 무엇을 '중요하다'고 볼지 그 기준을 <strong>우리(서비스 제공자)가 설계</strong>한다는 점입니다.
            사는 쪽은 위험을 넓게 잡고 싶어 하고, 파는 쪽은 위험을 좁게 잡고 싶어 합니다.
            우리 기준이 어느 한쪽으로 조금만 기울어도, &ldquo;중립 보고서&rdquo;라는 라벨 아래 그 편향이 시장에 그대로 퍼질 수 있습니다.
          </p>
          <p><strong>대응 방안</strong></p>
          <ul>
            <li><strong>기준의 출처를 공개</strong>합니다. AI가 어떤 항목을 중요하다고 판단할 때마다, 그 근거(예: SASB·K‑ESG·피어 평균)를 함께 표시합니다.</li>
            <li>거래 시작 전에 <strong>양측이 기준에 합의·잠금</strong>합니다. 어떤 항목을 볼지, 비중을 어떻게 둘지 사는 쪽·파는 쪽이 먼저 합의하고 고정합니다.</li>
            <li>기준 자체를 <strong>외부에 감사</strong>받습니다. 회계법인·학계 등 제3자가 정기적으로 기준을 검증해, 우리조차 임의로 바꾸지 못하게 합니다.</li>
          </ul>
        </div>

        <div class="text-card">
          <h3>리스크 2 · AI가 못 본 것이 '문제 없음'으로 둔갑한다</h3>
          <p>
            AI의 강점은 흩어진 데이터를 빠르게 모아 분석하는 것입니다. 하지만 그 강점이 <strong>&ldquo;데이터가 없는 영역을 가려버리는&rdquo;</strong> 함정이 됩니다.
            보고서가 깔끔하게 나오면, 사람들은 &ldquo;여기 안 적힌 건 문제 없는 것&rdquo;이라고 착각하기 쉽습니다.
          </p>
          <p>
            실제로는 데이터가 없어서 못 본 것일 수 있습니다. 예를 들어 재무·공시 데이터는 잘 잡히지만,
            실제 대기오염물질 배출량, 현장 산업재해, 지역 주민 민원은 공개 데이터가 부족해 보고서에 안 뜰 수 있습니다.
            이때 &ldquo;AI 보고서에 없네 = 깨끗하다&rdquo;라고 읽으면 거짓 안심입니다.
          </p>
          <p><strong>대응 방안</strong></p>
          <ul>
            <li>'데이터 없음'과 '위험 없음'을 절대 같은 것으로 표시하지 않고, <strong>① 위험 있음 ② 위험 없음 ③ 판단 불가</strong>를 명확히 구분합니다.</li>
            <li><strong>'데이터 공백 지도'</strong>를 함께 제공합니다. 이 회사에서 우리가 들여다보지 못한 영역과, 추가로 봐야 할 데이터 출처를 시각화합니다.</li>
            <li>공백 영역에는 자동으로 <strong>'추가 조사 필요'</strong> 경고를 띄우고, 사람이 현장에서 점검해야 한다는 메시지를 시스템이 스스로 내보냅니다.</li>
          </ul>
        </div>
      </div>

      <p class="footer-note">
        이 데모는 AI ESG 실사 결과를 멀티플·밸류에이션으로 직관화하는 동시에, 
        AI가 만들어낼 수 있는 편향과 정보 공백을 숨기지 않고 드러내는 서비스 철학을 보여주기 위한 목적의 프로토타입입니다.
      </p>
    </section>
  </div>

  <script>
    // ---------------------- 피어 데이터 (예시) ----------------------
    const peers = [
      {
        id: "peer1",
        name: "폐기물 A사",
        multiple: 9.5,
        note: "수도권 소각/매립, 안정적 장기 계약 보유"
      },
      {
        id: "peer2",
        name: "환경 인프라 B사",
        multiple: 10.2,
        note: "WtE(폐기물 에너지화)·소각 복합 포트폴리오"
      },
      {
        id: "peer3",
        name: "지자체 위탁 C사",
        multiple: 8.7,
        note: "지방 위탁 중심, 규제 리스크 낮으나 성장성 제한"
      },
      {
        id: "peer4",
        name: "종합 환경 D사",
        multiple: 11.4,
        note: "폐기물 + 수처리 + 재활용, ESG 투자 활발"
      }
    ];

    // ---------------------- INPUT 요소 ----------------------
    const ebitdaEl = document.getElementById("ebitda");
    const peerMultipleOverrideEl = document.getElementById("peerMultipleOverride");
    const peerMultipleLabelEl = document.getElementById("peerMultipleLabel");
    const peerAvgLabelEl = document.getElementById("peerAvgLabel");
    const peerMultipleDisplayEl = document.getElementById("peerMultipleDisplay");

    const eRiskEl = document.getElementById("eRisk");
    const sRiskEl = document.getElementById("sRisk");
    const gRiskEl = document.getElementById("gRisk");
    const esgPositiveEl = document.getElementById("esgPositive");

    const eScoreEl = document.getElementById("eScore");
    const sScoreEl = document.getElementById("sScore");
    const gScoreEl = document.getElementById("gScore");
    const eWeightEl = document.getElementById("eWeight");

    const eScoreLabelEl = document.getElementById("eScoreLabel");
    const sScoreLabelEl = document.getElementById("sScoreLabel");
    const gScoreLabelEl = document.getElementById("gScoreLabel");
    const eWeightLabelEl = document.getElementById("eWeightLabel");

    const eRiskLabelEl = document.getElementById("eRiskLabel");
    const sRiskLabelEl = document.getElementById("sRiskLabel");
    const gRiskLabelEl = document.getElementById("gRiskLabel");
    const eScoreOutEl = document.getElementById("eScoreOut");
    const sScoreOutEl = document.getElementById("sScoreOut");
    const gScoreOutEl = document.getElementById("gScoreOut");

    const buyerMultipleEl = document.getElementById("buyerMultiple");
    const sellerMultipleEl = document.getElementById("sellerMultiple");
    const buyerValueEl = document.getElementById("buyerValue");
    const sellerValueEl = document.getElementById("sellerValue");
    const valueGapEl = document.getElementById("valueGap");
    const gapDescEl = document.getElementById("gapDesc");

    const peerListEl = document.getElementById("peerList");
    const peerDetailEl = document.getElementById("peerDetail");

    const calcBtn = document.getElementById("calcBtn");
    const peerResetBtn = document.getElementById("peerResetBtn");

    // ---------------------- 유틸 ----------------------
    function formatPrice(v) {
      if (isNaN(v)) return "0 억원";
      return v.toLocaleString("ko-KR") + " 억원";
    }
    function formatMultiple(v) {
      if (isNaN(v)) return "0.0x";
      return v.toFixed(1) + "x";
    }

    function updateScoreLabels() {
      eScoreLabelEl.textContent = eScoreEl.value;
      sScoreLabelEl.textContent = sScoreEl.value;
      gScoreLabelEl.textContent = gScoreEl.value;
      eWeightLabelEl.textContent = eWeightEl.value;
      eRiskLabelEl.textContent = eRiskEl.value;
      sRiskLabelEl.textContent = sRiskEl.value;
      gRiskLabelEl.textContent = gRiskEl.value;
      eScoreOutEl.textContent = eScoreEl.value;
      sScoreOutEl.textContent = sScoreEl.value;
      gScoreOutEl.textContent = gScoreEl.value;
    }

    function calcEsqScore() {
      const e = parseFloat(eScoreEl.value);
      const s = parseFloat(sScoreEl.value);
      const g = parseFloat(gScoreEl.value);
      const eW = parseFloat(eWeightEl.value); // 40~60
      const remain = 100 - eW;
      const sW = remain * 0.6;
      const gW = remain * 0.4;
      const eWeighted = e * (eW / 100);
      const sWeighted = s * (sW / 100);
      const gWeighted = g * (gW / 100);
      const total = eWeighted + sWeighted + gWeighted;
      return { totalScore: total, eWeighted, sWeighted, gWeighted, eW, sW, gW };
    }

    function calcPeerAverage() {
      const sum = peers.reduce((acc, p) => acc + p.multiple, 0);
      const avg = sum / peers.length;
      return avg;
    }

    // ---------------------- 피어 UI 초기화 ----------------------
    function initPeerList() {
      const avg = calcPeerAverage();
      peerAvgLabelEl.textContent = formatMultiple(avg);
      peerMultipleLabelEl.textContent = "피어 평균: " + formatMultiple(avg);
      peerMultipleDisplayEl.textContent = formatMultiple(avg);

      peers.forEach((p, idx) => {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = "peer-pill" + (idx === 0 ? " active" : "");
        pill.textContent = p.name + " · " + p.multiple.toFixed(1) + "x";
        pill.dataset.peerId = p.id;
        pill.addEventListener("click", () => {
          document.querySelectorAll(".peer-pill").forEach(el => el.classList.remove("active"));
          pill.classList.add("active");
          peerDetailEl.textContent = `${p.name} · EV/EBITDA ${p.multiple.toFixed(1)}x — ${p.note}`;
        });
        peerListEl.appendChild(pill);
        if (idx === 0) {
          peerDetailEl.textContent = `${p.name} · EV/EBITDA ${p.multiple.toFixed(1)}x — ${p.note}`;
        }
      });
    }

    // ---------------------- Chart.js ----------------------
    const ctx = document.getElementById("multipleChart").getContext("2d");
    const multipleChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["PEER", "BUY-SIDE", "SELL-SIDE"],
        datasets: [
          {
            label: "EV/EBITDA",
            data: [0, 0, 0],
            backgroundColor: [
              "rgba(148,163,184,0.8)",
              "rgba(59,130,246,0.8)",
              "rgba(248,113,113,0.8)"
            ]
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: "#e5e7eb" },
            grid: { color: "rgba(55,65,81,0.7)" }
          },
          x: {
            ticks: { color: "#e5e7eb" },
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    // ---------------------- 메인 계산 엔진 ----------------------
    function recalc() {
      const ebitda = parseFloat(ebitdaEl.value || "0");
      const eRisk = parseFloat(eRiskEl.value || "0");
      const sRisk = parseFloat(sRiskEl.value || "0");
      const gRisk = parseFloat(gRiskEl.value || "0");
      const esgPositive = parseFloat(esgPositiveEl.value || "0");
      const { totalScore } = calcEsqScore();

      // 피어 멀티플: override가 있으면 그걸 사용, 없으면 평균
      const override = parseFloat(peerMultipleOverrideEl.value);
      const peerMultiple = isNaN(override) ? calcPeerAverage() : override;
      peerMultipleDisplayEl.textContent = formatMultiple(peerMultiple);

      // BUY-SIDE: E/S/G 리스크 기반 할인 (예시 계수)
      const beta_eRisk = -0.4; // 리스크 1단위당 -0.4배
      const beta_sRisk = -0.3;
      const beta_gRisk = -0.2;
      const beta_esgScore = 0.01; // 전체 ESG 점수가 높으면 약간 프리미엄

      let buyerMultiple =
        peerMultiple +
        beta_eRisk * eRisk +
        beta_sRisk * sRisk +
        beta_gRisk * gRisk +
        beta_esgScore * (totalScore - 70) / 10;

      if (buyerMultiple < peerMultiple * 0.5) buyerMultiple = peerMultiple * 0.5;
      if (buyerMultiple > peerMultiple * 1.1) buyerMultiple = peerMultiple * 1.1;

      // SELL-SIDE: ESG 긍정 이벤트 + 스토리 기반 프리미엄 (예시)
      let sellerMultiple =
        peerMultiple +
        0.02 * (totalScore - 70) / 10 +
        0.3 * esgPositive -
        0.2 * eRisk; // 리스크가 너무 크면 프리미엄 축소

      if (sellerMultiple < peerMultiple * 0.7) sellerMultiple = peerMultiple * 0.7;
      if (sellerMultiple > peerMultiple * 1.3) sellerMultiple = peerMultiple * 1.3;

      const buyerValue = ebitda * buyerMultiple;
      const sellerValue = ebitda * sellerMultiple;
      const gap = sellerValue - buyerValue;

      buyerMultipleEl.textContent = formatMultiple(buyerMultiple);
      sellerMultipleEl.textContent = formatMultiple(sellerMultiple);
      buyerValueEl.textContent = formatPrice(buyerValue);
      sellerValueEl.textContent = formatPrice(sellerValue);
      valueGapEl.textContent = formatPrice(gap);

      if (gap > 0) {
        gapDescEl.textContent =
          "피인수자 요구 가치가 더 높음 · Earn-out·구조조정·계약 조건으로 갭 축소 필요";
        valueGapEl.classList.remove("gap-positive");
        valueGapEl.classList.add("gap-negative");
      } else if (gap < 0) {
        gapDescEl.textContent =
          "인수자 지불 의향 가치가 더 높음 · 매도자에게 유리한 협상 구간";
        valueGapEl.classList.remove("gap-negative");
        valueGapEl.classList.add("gap-positive");
      } else {
        gapDescEl.textContent =
          "양측 밸류에이션이 일치 · 가격보다는 조건 설계가 핵심";
        valueGapEl.classList.remove("gap-negative","gap-positive");
      }

      // 차트 업데이트
      multipleChart.data.datasets[0].data = [peerMultiple, buyerMultiple, sellerMultiple];
      multipleChart.update();
    }

    // ---------------------- 이벤트 ----------------------
    calcBtn.addEventListener("click", recalc);
    peerResetBtn.addEventListener("click", () => {
      peerMultipleOverrideEl.value = "";
      recalc();
    });

    [eScoreEl, sScoreEl, gScoreEl, eWeightEl,
     eRiskEl, sRiskEl, gRiskEl, esgPositiveEl,
     ebitdaEl, peerMultipleOverrideEl].forEach((el) => {
      el.addEventListener("input", () => {
        updateScoreLabels();
        recalc();
      });
    });

    // 초기화
    initPeerList();
    updateScoreLabels();
    recalc();
  </script>
</body>
</html>
