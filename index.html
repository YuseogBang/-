[esg_valuation_pro.html](https://github.com/user-attachments/files/28178460/esg_valuation_pro.html)
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"/>
<title>ESG M&A Valuation Engine — Pro</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
:root{
  --bg:#050810;--surface:#0a0f1e;--surface2:#0f172a;
  --border:rgba(99,120,180,0.18);--border-bright:rgba(99,120,180,0.38);
  --accent:#3b82f6;--accent2:#06b6d4;--red:#f43f5e;--green:#22c55e;--gold:#f59e0b;
  --text:#e2e8f0;--text-dim:#64748b;--text-bright:#f8fafc;
  --mono:'DM Mono',monospace;--head:'Syne',sans-serif;--body:'Inter',sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:var(--body);font-size:13px;line-height:1.6;min-height:100vh;overflow-x:hidden;}
body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px);background-size:44px 44px;pointer-events:none;z-index:0;}
.app{position:relative;z-index:1;max-width:1320px;margin:0 auto;padding:24px 20px 60px;}

/* HEADER */
.header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);padding-bottom:14px;margin-bottom:24px;}
.header-logo{font-family:var(--head);font-size:14px;font-weight:800;letter-spacing:0.06em;color:var(--text-bright);display:flex;align-items:center;gap:10px;}
.logo-badge{width:28px;height:28px;border-radius:7px;background:linear-gradient(135deg,#3b82f6,#06b6d4);display:grid;place-items:center;font-size:11px;font-weight:800;color:#fff;}
.header-tags{display:flex;gap:6px;}
.htag{font-family:var(--mono);font-size:10px;padding:3px 8px;border-radius:4px;border:1px solid var(--border);color:var(--text-dim);}

/* TABS */
.tabs{display:flex;gap:0;margin-bottom:22px;border-bottom:1px solid var(--border);}
.tab{font-family:var(--head);font-size:11px;font-weight:700;padding:8px 18px;cursor:pointer;color:var(--text-dim);border-bottom:2px solid transparent;transition:all .2s;letter-spacing:0.05em;text-transform:uppercase;}
.tab.active{color:var(--accent);border-bottom-color:var(--accent);}
.tab:hover:not(.active){color:var(--text);}
.tab-panel{display:none;}
.tab-panel.active{display:block;animation:fadeUp .3s ease both;}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}

/* LAYOUT */
.layout{display:grid;gap:18px;align-items:start;}
.l-left-right{grid-template-columns:360px 1fr;}
.l-2col{grid-template-columns:1fr 1fr;}
.l-3col{grid-template-columns:1fr 1fr 1fr;}

/* CARD */
.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;}
.card+.card{margin-top:14px;}
.card-title{font-family:var(--head);font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);margin-bottom:14px;display:flex;align-items:center;gap:8px;}
.card-title-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0;}

/* SECTION LABEL */
.sec-label{font-family:var(--mono);font-size:10px;color:var(--accent2);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;margin-top:14px;}
.sec-label:first-child{margin-top:0;}

/* FIELDS */
.field{margin-bottom:9px;}
.field label{font-size:11px;color:var(--text);display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;}
.field label .val{font-family:var(--mono);font-size:11px;color:var(--accent2);font-weight:500;}
input[type=number]{width:100%;padding:5px 8px;border-radius:6px;border:1px solid var(--border);background:var(--surface2);color:var(--text-bright);font-family:var(--mono);font-size:12px;outline:none;transition:border-color .2s;}
input[type=number]:focus{border-color:var(--accent);}
input[type=range]{width:100%;-webkit-appearance:none;height:4px;border-radius:99px;background:var(--surface2);outline:none;cursor:pointer;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:13px;height:13px;border-radius:50%;background:var(--accent);cursor:pointer;box-shadow:0 0 0 3px rgba(59,130,246,0.2);transition:box-shadow .2s;}
input[type=range]::-webkit-slider-thumb:hover{box-shadow:0 0 0 6px rgba(59,130,246,0.25);}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:8px;}

/* BTN */
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:7px;border:none;cursor:pointer;font-family:var(--head);font-size:11px;font-weight:700;letter-spacing:0.05em;transition:all .2s;}
.btn-primary{background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;box-shadow:0 4px 14px rgba(59,130,246,0.3);}
.btn-primary:hover{box-shadow:0 6px 20px rgba(59,130,246,0.45);transform:translateY(-1px);}
.btn-secondary{background:var(--surface2);color:var(--text);border:1px solid var(--border-bright);}
.btn-secondary:hover{border-color:var(--accent);color:var(--accent);}
.btn-row{display:flex;gap:8px;margin-top:12px;justify-content:flex-end;}
.preset-row{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;}
.preset-btn{font-family:var(--mono);font-size:10px;padding:3px 9px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--text-dim);cursor:pointer;transition:all .15s;}
.preset-btn:hover{border-color:var(--accent2);color:var(--accent2);}
.preset-btn.active{border-color:var(--accent);color:var(--accent);background:rgba(59,130,246,0.1);}

/* ── PEER EV PANEL ── */
.peer-panel{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:12px;margin-bottom:12px;}
.peer-header{display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;}
.peer-header-left{display:flex;align-items:center;gap:8px;}
.peer-title{font-family:var(--head);font-size:11px;font-weight:700;color:var(--text);letter-spacing:0.04em;}
.peer-multiple-badge{font-family:var(--head);font-size:18px;font-weight:800;color:var(--gold);}
.peer-multiple-sub{font-family:var(--mono);font-size:9px;color:var(--text-dim);margin-left:4px;}
.peer-toggle{font-size:10px;color:var(--text-dim);padding:2px 8px;border-radius:4px;border:1px solid var(--border);background:var(--surface);transition:all .15s;cursor:pointer;}
.peer-toggle:hover{border-color:var(--accent2);color:var(--accent2);}
.peer-body{overflow:hidden;max-height:0;transition:max-height .35s cubic-bezier(.4,0,.2,1);margin-top:0;}
.peer-body.open{max-height:600px;margin-top:10px;}
.peer-table{width:100%;border-collapse:collapse;font-size:11px;}
.peer-table th{font-family:var(--mono);font-size:9px;color:var(--text-dim);padding:5px 8px;border-bottom:1px solid var(--border);text-align:right;letter-spacing:0.06em;font-weight:400;}
.peer-table th:first-child,.peer-table th:nth-child(2){text-align:left;}
.peer-table td{padding:5px 8px;border-bottom:1px solid rgba(99,120,180,0.07);text-align:right;font-family:var(--mono);font-size:11px;}
.peer-table td:first-child{text-align:left;color:var(--text);font-family:var(--body);}
.peer-table td:nth-child(2){color:var(--text-dim);font-size:10px;}
.peer-table tr:hover td{background:rgba(59,130,246,0.04);}
.peer-table tr.peer-avg td{color:var(--gold);font-weight:600;border-top:1px solid rgba(245,158,11,0.25);}
.peer-bar{height:3px;border-radius:99px;background:var(--surface);overflow:hidden;margin-top:3px;}
.peer-bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--accent),var(--accent2));}
.peer-esg-dot{width:6px;height:6px;border-radius:50%;display:inline-block;margin-right:3px;}
.peer-industry-tag{font-size:9px;padding:1px 5px;border-radius:3px;background:rgba(99,120,180,0.12);color:var(--text-dim);}
.peer-live-badge{font-family:var(--mono);font-size:9px;padding:1px 6px;border-radius:3px;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);color:#4ade80;display:inline-flex;align-items:center;gap:4px;}
.peer-live-dot{width:5px;height:5px;border-radius:50%;background:#4ade80;animation:pulse 1.5s infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.3;}}

/* ── MULTIPLE BRIDGE ── */
.multiple-bridge{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:14px;}
.mb-title{font-family:var(--mono);font-size:10px;color:var(--text-dim);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;}
.mb-flow{display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;}
.mb-step{text-align:center;flex-shrink:0;}
.mb-step-val{font-family:var(--head);font-size:16px;font-weight:800;color:var(--text-bright);}
.mb-step-val.accent{color:var(--accent);}
.mb-step-val.gold{color:var(--gold);}
.mb-step-val.red{color:var(--red);}
.mb-step-val.orange{color:#fb923c;}
.mb-step-label{font-family:var(--mono);font-size:9px;color:var(--text-dim);letter-spacing:0.06em;margin-top:2px;}
.mb-arrow{font-size:14px;color:var(--text-dim);padding:0 6px;flex-shrink:0;padding-bottom:12px;}
.mb-adj-badge{font-family:var(--mono);font-size:10px;padding:2px 6px;border-radius:4px;margin-top:3px;display:inline-block;}
.mb-adj-pos{background:rgba(34,197,94,0.15);color:#4ade80;border:1px solid rgba(34,197,94,0.25);}
.mb-adj-neg{background:rgba(244,63,94,0.15);color:#fda4af;border:1px solid rgba(244,63,94,0.25);}
.mb-adj-neu{background:rgba(99,102,241,0.15);color:#a5b4fc;border:1px solid rgba(99,102,241,0.25);}

/* ── FINAL RESULT CARD ── */
.result-card{border-radius:14px;padding:20px;border:1px solid;margin-bottom:16px;position:relative;overflow:hidden;}
.result-card::before{content:'';position:absolute;inset:0;opacity:0.04;background:radial-gradient(circle at 30% 50%, currentColor 0%, transparent 70%);}
.result-card.buy{border-color:rgba(59,130,246,0.4);background:rgba(59,130,246,0.05);color:var(--accent);}
.result-card.sell{border-color:rgba(251,146,60,0.4);background:rgba(251,146,60,0.05);color:#fb923c;}
.result-card.gap-card{border-color:rgba(34,197,94,0.4);background:rgba(34,197,94,0.05);color:var(--green);}
.result-card.gap-card.neg{border-color:rgba(244,63,94,0.4);background:rgba(244,63,94,0.05);color:var(--red);}
.rc-label{font-family:var(--mono);font-size:10px;opacity:.7;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;}
.rc-value{font-family:var(--head);font-size:32px;font-weight:800;line-height:1;color:inherit;}
.rc-sub{font-size:10px;opacity:.7;margin-top:4px;}
.rc-multiple{font-family:var(--mono);font-size:13px;opacity:.8;margin-top:6px;}

/* ── INDICATOR TABLE ── */
.indicator-group{margin-bottom:12px;}
.ig-header{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;border-radius:8px 8px 0 0;font-family:var(--head);font-size:11px;font-weight:700;letter-spacing:0.06em;}
.ig-e{background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.25);color:#67e8f9;}
.ig-s{background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.25);color:#fb923c;}
.ig-g{background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.25);color:#c4b5fd;}
.ig-score{font-family:var(--mono);font-size:12px;}
.ind-row{display:grid;grid-template-columns:1fr 80px 50px 44px;gap:6px;align-items:center;padding:5px 10px;border:1px solid var(--border);border-top:none;font-size:11px;background:var(--surface2);}
.ind-row:last-child{border-radius:0 0 8px 8px;}
.ind-row:hover{background:rgba(59,130,246,0.04);}
.ind-name{color:var(--text);}
.ind-bar{height:4px;border-radius:99px;background:var(--surface);overflow:hidden;}
.ind-bar-fill{height:100%;border-radius:99px;transition:width .4s ease;}
.fe{background:linear-gradient(90deg,#0891b2,#22d3ee);}
.fs{background:linear-gradient(90deg,#c2410c,#fb923c);}
.fg{background:linear-gradient(90deg,#7c3aed,#c4b5fd);}
.ind-num{font-family:var(--mono);font-size:10px;text-align:right;color:var(--text-dim);}

/* RADAR */
.chart-wrap{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:14px;}
.chart-label{font-family:var(--mono);font-size:10px;color:var(--text-dim);margin-bottom:10px;letter-spacing:0.08em;text-transform:uppercase;}

/* IMPACT */
.impact-row{display:flex;align-items:center;gap:10px;margin-bottom:7px;}
.impact-label{width:160px;font-size:11px;color:var(--text-dim);flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.impact-bar-wrap{flex:1;height:8px;border-radius:99px;background:var(--surface2);position:relative;}
.impact-fill{height:100%;border-radius:99px;transition:width .5s cubic-bezier(.4,0,.2,1);position:relative;}
.impact-fill::after{content:attr(data-v);position:absolute;right:-36px;top:50%;transform:translateY(-50%);font-family:var(--mono);font-size:9px;color:var(--text-dim);white-space:nowrap;}
.ip-neg{background:linear-gradient(90deg,#f43f5e,rgba(244,63,94,0.4));}
.ip-pos{background:linear-gradient(90deg,rgba(34,197,94,0.4),#22c55e);}
.ip-neu{background:linear-gradient(90deg,rgba(99,102,241,0.4),#6366f1);}

/* WEIGHT EDITOR */
.weight-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;}
.weight-item{background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px;text-align:center;}
.wi-label{font-size:10px;color:var(--text-dim);margin-bottom:4px;font-family:var(--mono);}
.wi-val{font-family:var(--head);font-size:22px;font-weight:800;}
.wi-e{background:linear-gradient(135deg,#22d3ee,#3b82f6);-webkit-background-clip:text;color:transparent;}
.wi-s{background:linear-gradient(135deg,#fb923c,#f43f5e);-webkit-background-clip:text;color:transparent;}
.wi-g{background:linear-gradient(135deg,#c4b5fd,#818cf8);-webkit-background-clip:text;color:transparent;}

/* SENS TABLE */
.sens-table{width:100%;border-collapse:collapse;font-size:11px;}
.sens-table th{font-family:var(--mono);font-size:9px;color:var(--text-dim);padding:5px 8px;border-bottom:1px solid var(--border);text-align:right;letter-spacing:0.06em;font-weight:400;}
.sens-table th:first-child{text-align:left;}
.sens-table td{padding:5px 8px;border-bottom:1px solid rgba(99,120,180,0.07);text-align:right;font-family:var(--mono);}
.sens-table td:first-child{text-align:left;color:var(--text-dim);}
.cell-pos{color:#4ade80;} .cell-neg{color:#f87171;}
.cell-cur{background:rgba(59,130,246,0.15);color:var(--accent);border-radius:3px;}

/* AI */
.upload-zone{border:2px dashed var(--border-bright);border-radius:12px;padding:28px 20px;text-align:center;cursor:pointer;transition:all .25s;background:var(--surface2);}
.upload-zone:hover,.upload-zone.drag{border-color:var(--accent);background:rgba(59,130,246,0.05);}
.upload-icon{font-size:28px;margin-bottom:6px;}
.upload-text{font-family:var(--head);font-size:13px;font-weight:700;color:var(--text);margin-bottom:3px;}
.upload-sub{font-size:10px;color:var(--text-dim);}
#fileInput{display:none;}
.ai-result{background:var(--surface2);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:16px;margin-top:14px;display:none;}
.ai-result.show{display:block;animation:fadeUp .3s ease both;}
.ai-badge{font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;background:rgba(6,182,212,0.15);border:1px solid rgba(6,182,212,0.35);color:var(--accent2);}
.ai-score-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0;}
.ai-score-item{background:var(--surface);border-radius:7px;padding:9px;text-align:center;border:1px solid var(--border);}
.ai-score-val{font-family:var(--head);font-size:20px;font-weight:800;}
.ai-e{color:#22d3ee;} .ai-s{color:#fb923c;} .ai-g{color:#c4b5fd;}
.ai-findings{font-size:11px;line-height:1.7;color:var(--text-dim);}
.ai-findings strong{color:var(--text);}
.ai-findings ul{padding-left:16px;margin-top:5px;}
.ai-findings li{margin-bottom:2px;}
.spinner{width:11px;height:11px;border:2px solid rgba(6,182,212,0.3);border-top-color:var(--accent2);border-radius:50%;animation:spin .7s linear infinite;display:inline-block;}
@keyframes spin{to{transform:rotate(360deg);}}
.ind-weight-input{width:44px;padding:2px 4px;border-radius:4px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-family:var(--mono);font-size:10px;text-align:center;outline:none;}
.ind-weight-input:focus{border-color:var(--accent);}

::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:var(--surface);}
::-webkit-scrollbar-thumb{background:var(--border-bright);border-radius:3px;}
@media(max-width:960px){.l-left-right,.l-2col,.l-3col{grid-template-columns:1fr;}}
</style>
</head>
<body>
<div class="app">

<div class="header">
  <div class="header-logo">
    <div class="logo-badge">E</div>
    ESG M&A VALUATION ENGINE
  </div>
  <div class="header-tags">
    <div class="htag">K-ESG</div>
    <div class="htag">AI-POWERED</div>
    <div class="htag">실시간 멀티플</div>
  </div>
</div>

<div class="tabs">
  <div class="tab active" onclick="switchTab('simulator')">시뮬레이터</div>
  <div class="tab" onclick="switchTab('weights')">가중치 커스텀</div>
  <div class="tab" onclick="switchTab('ai')">AI 문서 분석</div>
  <div class="tab" onclick="switchTab('sensitivity')">민감도 분석</div>
</div>

<!-- ══════════════════════════════════════════
     TAB 1: SIMULATOR
══════════════════════════════════════════ -->
<div id="tab-simulator" class="tab-panel active">
<div class="layout l-left-right">

<!-- ── LEFT PANEL ── -->
<div>
  <div class="card">
    <div class="card-title"><span class="card-title-dot"></span>기업 기본 정보</div>
    <div class="preset-row">
      <div class="preset-btn active" onclick="loadPreset('custom',this)">직접 입력</div>
      <div class="preset-btn" onclick="loadPreset('construction',this)">건설</div>
      <div class="preset-btn" onclick="loadPreset('mfg',this)">제조</div>
      <div class="preset-btn" onclick="loadPreset('tech',this)">IT/테크</div>
      <div class="preset-btn" onclick="loadPreset('env',this)">환경/폐기물</div>
    </div>
    <div class="field">
      <label>EBITDA (억원) <span class="val" id="lEBITDA">200</span></label>
      <input type="number" id="ebitda" value="200" min="1" step="10" oninput="syncV('ebitda','lEBITDA',true);recalc()"/>
    </div>

    <!-- PEER EV/EBITDA PANEL -->
    <div class="peer-panel">
      <div class="peer-header" onclick="togglePeer()">
        <div class="peer-header-left">
          <span class="peer-title">피어 EV/EBITDA</span>
          <span class="peer-multiple-badge" id="peerMultipleDisplay">8.2x</span>
          <span class="peer-multiple-sub">(피어 중앙값)</span>
          <span class="peer-live-badge"><span class="peer-live-dot"></span>LIVE</span>
        </div>
        <span class="peer-toggle" id="peerToggleBtn">▾ 피어 보기</span>
      </div>
      <div class="peer-body" id="peerBody">
        <div style="font-family:var(--mono);font-size:9px;color:var(--text-dim);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
          <span>피어 그룹 · 실시간 연동 시뮬레이션</span>
          <span id="lastUpdated" style="color:rgba(99,120,180,0.6);">업데이트: —</span>
        </div>
        <table class="peer-table">
          <thead>
            <tr>
              <th>기업명</th><th>업종</th><th>EV/EBITDA</th><th>ESG등급</th><th>시가총액</th><th>EV</th>
            </tr>
          </thead>
          <tbody id="peerTableBody"></tbody>
        </table>
        <div style="margin-top:10px;">
          <div class="field">
            <label>멀티플 조정 방식 <span class="val" id="lMultipleMode">중앙값</span></label>
            <select id="multipleMode" style="width:100%;background:var(--surface);border:1px solid var(--border);color:var(--text);padding:5px 8px;border-radius:6px;font-size:11px;outline:none;" onchange="syncSelect();recalc()">
              <option value="median">피어 중앙값</option>
              <option value="mean">피어 평균값</option>
              <option value="q1">1사분위 (보수적)</option>
              <option value="q3">3사분위 (낙관적)</option>
              <option value="custom">직접 입력</option>
            </select>
          </div>
          <div class="field" id="customMultipleField" style="display:none;">
            <label>직접 입력 EV/EBITDA <span class="val" id="lCustomM">8.0</span></label>
            <input type="number" id="customMultiple" value="8" min="1" step="0.1" oninput="syncV('customMultiple','lCustomM');recalc()"/>
          </div>
        </div>
      </div>
    </div>

    <div class="sec-label">리스크 지표 (최근 3년)</div>
    <div class="grid-2">
      <div class="field"><label>중대재해 <span class="val" id="lSA">1</span></label>
        <input type="range" id="seriousAccidents" min="0" max="10" value="1" oninput="syncV('seriousAccidents','lSA');recalc()"/></div>
      <div class="field"><label>환경위반 <span class="val" id="lEV">2</span></label>
        <input type="range" id="envViolations" min="0" max="15" value="2" oninput="syncV('envViolations','lEV');recalc()"/></div>
      <div class="field"><label>반부패 <span class="val" id="lAC">0</span></label>
        <input type="range" id="antiCorruption" min="0" max="10" value="0" oninput="syncV('antiCorruption','lAC');recalc()"/></div>
      <div class="field"><label>정보보안 <span class="val" id="lCI">0</span></label>
        <input type="range" id="cyberIncidents" min="0" max="10" value="0" oninput="syncV('cyberIncidents','lCI');recalc()"/></div>
    </div>

    <div class="sec-label">ESG 세부 지표</div>
    <div id="simIndicators"></div>

    <div class="btn-row">
      <button class="btn btn-secondary" onclick="resetAll()">초기화</button>
      <button class="btn btn-primary" onclick="recalc()">⚙ 재계산</button>
    </div>
  </div>
</div>

<!-- ── RIGHT PANEL ── -->
<div>

  <!-- MULTIPLE BRIDGE -->
  <div class="multiple-bridge">
    <div class="mb-title">EV 멀티플 브릿지 (BUY-SIDE 기준)</div>
    <div class="mb-flow" id="mbFlow">
      <!-- JS로 채워짐 -->
    </div>
  </div>

  <!-- FINAL RESULTS -->
  <div class="layout l-3col" style="margin-bottom:14px;">
    <div class="result-card buy">
      <div class="rc-label">BUY-SIDE EV</div>
      <div class="rc-value" id="rcBuyEV">—</div>
      <div class="rc-multiple" id="rcBuyMult">×— EBITDA</div>
      <div class="rc-sub" id="rcBuySub">조정 멀티플: —</div>
    </div>
    <div class="result-card sell">
      <div class="rc-label">SELL-SIDE EV</div>
      <div class="rc-value" id="rcSellEV">—</div>
      <div class="rc-multiple" id="rcSellMult">×— EBITDA</div>
      <div class="rc-sub" id="rcSellSub">요구 멀티플: —</div>
    </div>
    <div class="result-card gap-card" id="rcGapCard">
      <div class="rc-label">밸류에이션 갭</div>
      <div class="rc-value" id="rcGap">—</div>
      <div class="rc-multiple" id="rcGapMult">멀티플 차: —</div>
      <div class="rc-sub" id="rcGapSub">—</div>
    </div>
  </div>

  <!-- CHARTS ROW -->
  <div class="layout l-2col" style="margin-bottom:14px;">
    <div class="chart-wrap">
      <div class="chart-label">ESG 리스크 레이더 (E·S·G × 리스크)</div>
      <canvas id="radarChart" height="190"></canvas>
    </div>
    <div class="chart-wrap">
      <div class="chart-label">멀티플 분해 (BUY vs SELL)</div>
      <canvas id="multChart" height="190"></canvas>
    </div>
  </div>

  <!-- IMPACT BARS -->
  <div class="card">
    <div class="card-title"><span class="card-title-dot"></span>세부 지표별 EV 영향 (억원)</div>
    <div id="impactBars"></div>
  </div>
</div>

</div><!-- /layout -->
</div><!-- /tab-simulator -->

<!-- ══════════════════════════════════════════
     TAB 2: WEIGHTS
══════════════════════════════════════════ -->
<div id="tab-weights" class="tab-panel">
<div class="layout l-2col" style="align-items:start;">
  <div class="card">
    <div class="card-title"><span class="card-title-dot"></span>E/S/G 카테고리 가중치</div>
    <div class="weight-grid" id="catWeightDisplay"></div>
    <div class="sec-label">카테고리 비중 조정</div>
    <div class="field"><label>환경(E) % <span class="val" id="wE">40</span></label>
      <input type="range" id="wEnv" min="10" max="70" value="40" oninput="updateCatWeights();recalc()"/></div>
    <div class="field"><label>사회(S) % <span class="val" id="wS">35</span></label>
      <input type="range" id="wSoc" min="10" max="60" value="35" oninput="updateCatWeights();recalc()"/></div>
    <p style="font-size:10px;color:var(--text-dim);margin-top:3px;">※ 지배구조(G)는 100-E-S로 자동 계산됩니다.</p>
    <div class="sec-label" style="margin-top:16px;">인수자 리스크 β 계수</div>
    <div class="grid-2">
      <div class="field"><label>중대재해 β <span class="val" id="lB1">-8</span></label>
        <input type="range" id="beta1" min="-20" max="0" value="-8" oninput="syncB('beta1','lB1');recalc()"/></div>
      <div class="field"><label>환경위반 β <span class="val" id="lB2">-3</span></label>
        <input type="range" id="beta2" min="-10" max="0" value="-3" oninput="syncB('beta2','lB2');recalc()"/></div>
      <div class="field"><label>반부패 β <span class="val" id="lB3">-2</span></label>
        <input type="range" id="beta3" min="-10" max="0" value="-2" oninput="syncB('beta3','lB3');recalc()"/></div>
      <div class="field"><label>정보보안 β <span class="val" id="lB4">-1</span></label>
        <input type="range" id="beta4" min="-10" max="0" value="-1" oninput="syncB('beta4','lB4');recalc()"/></div>
    </div>
  </div>
  <div class="card">
    <div class="card-title"><span class="card-title-dot"></span>세부 지표 내부 가중치</div>
    <p style="font-size:11px;color:var(--text-dim);margin-bottom:12px;">각 카테고리 내 지표별 기여 비중 설정</p>
    <div id="indicatorWeightEditor"></div>
    <div class="btn-row">
      <button class="btn btn-secondary" onclick="equalizeWeights()">균등 배분</button>
      <button class="btn btn-primary" onclick="recalc()">적용</button>
    </div>
  </div>
</div>
</div>

<!-- ══════════════════════════════════════════
     TAB 3: AI
══════════════════════════════════════════ -->
<div id="tab-ai" class="tab-panel">
<div class="layout l-2col" style="align-items:start;">
  <div>
    <div class="card">
      <div class="card-title"><span class="card-title-dot"></span>내부 자료 AI 분석</div>
      <p style="font-size:11px;color:var(--text-dim);margin-bottom:12px;line-height:1.7;">ESG 보고서·지속가능경영 보고서 등을 업로드하면 AI가 E/S/G 세부 지표를 자동 추출합니다.</p>
      <div class="upload-zone" id="uploadZone" onclick="document.getElementById('fileInput').click()"
           ondragover="event.preventDefault();this.classList.add('drag')"
           ondragleave="this.classList.remove('drag')"
           ondrop="handleDrop(event)">
        <div class="upload-icon">📄</div>
        <div class="upload-text">파일 드래그 또는 클릭</div>
        <div class="upload-sub">PDF · TXT · DOCX · CSV / 최대 10MB</div>
        <input type="file" id="fileInput" accept=".pdf,.txt,.doc,.docx,.csv" onchange="handleFile(event)"/>
      </div>
      <div id="fileStatus" style="margin-top:7px;font-family:var(--mono);font-size:10px;color:var(--text-dim);"></div>
    </div>
    <div class="card">
      <div class="card-title"><span class="card-title-dot"></span>텍스트 직접 입력</div>
      <textarea id="manualText" rows="9" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:11px;padding:10px;outline:none;resize:vertical;font-family:var(--body);line-height:1.6;" placeholder="ESG 보고서 내용을 붙여넣으세요. 예: 온실가스 감축률 12%, 중대재해 2건, 이사회 독립이사 비율 60%..."></textarea>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="analyzeText()">🤖 AI 분석 실행</button>
      </div>
    </div>
  </div>
  <div>
    <div class="ai-result" id="aiResult">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <div class="ai-badge">AI ANALYSIS</div>
        <div style="font-family:var(--head);font-size:13px;font-weight:700;color:var(--text-bright);" id="aiResultTitle">분석 결과</div>
      </div>
      <div class="ai-score-grid">
        <div class="ai-score-item"><div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;">환경(E)</div><div class="ai-score-val ai-e" id="aiE">—</div></div>
        <div class="ai-score-item"><div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;">사회(S)</div><div class="ai-score-val ai-s" id="aiS">—</div></div>
        <div class="ai-score-item"><div style="font-size:10px;color:var(--text-dim);margin-bottom:3px;">지배구조(G)</div><div class="ai-score-val ai-g" id="aiG">—</div></div>
      </div>
      <div class="ai-findings" id="aiFindingsBox"></div>
      <div id="aiApplyRow" style="display:none;">
        <div class="btn-row"><button class="btn btn-primary" onclick="applyAIResults()">📊 시뮬레이터에 적용</button></div>
      </div>
    </div>
    <div class="card" style="margin-top:14px;">
      <div class="card-title"><span class="card-title-dot"></span>분석 히스토리</div>
      <div id="aiHistory" style="font-size:11px;color:var(--text-dim);">분석 내역 없음</div>
    </div>
  </div>
</div>
</div>

<!-- ══════════════════════════════════════════
     TAB 4: SENSITIVITY
══════════════════════════════════════════ -->
<div id="tab-sensitivity" class="tab-panel">
<div class="layout l-2col">
  <div class="card"><div class="card-title"><span class="card-title-dot"></span>중대재해 건수 × BUY EV</div><table class="sens-table" id="sensTable1"></table></div>
  <div class="card"><div class="card-title"><span class="card-title-dot"></span>ESG 점수 × SELL EV·갭</div><table class="sens-table" id="sensTable2"></table></div>
</div>
<div class="card" style="margin-top:14px;">
  <div class="card-title"><span class="card-title-dot"></span>히트맵 — 중대재해 × ESG점수 → BUY EV (억원)</div>
  <div style="overflow-x:auto;"><table class="sens-table" id="heatmapTable" style="min-width:500px;"></table></div>
</div>
</div>

</div><!-- /app -->

<script>
// ═══════════════════════════════════════
//  PEER GROUP DATA  (업종별 피어 세트)
// ═══════════════════════════════════════
const PEER_SETS = {
  custom: [
    { name:'삼성물산',      sector:'건설/종합',   ev:9.1,  esg:'A',  mktcap:35000, ev_val:42000 },
    { name:'현대건설',      sector:'건설',         ev:7.8,  esg:'B+', mktcap:18000, ev_val:22000 },
    { name:'GS건설',        sector:'건설',         ev:6.4,  esg:'B',  mktcap:9000,  ev_val:11000 },
    { name:'DL이앤씨',      sector:'건설',         ev:8.2,  esg:'B+', mktcap:12000, ev_val:14000 },
    { name:'롯데건설',      sector:'건설',         ev:7.3,  esg:'B',  mktcap:8000,  ev_val:9500  },
  ],
  construction: [
    { name:'현대건설',      sector:'건설',         ev:7.8,  esg:'B+', mktcap:18000, ev_val:22000 },
    { name:'GS건설',        sector:'건설',         ev:6.4,  esg:'B',  mktcap:9000,  ev_val:11000 },
    { name:'DL이앤씨',      sector:'건설',         ev:8.2,  esg:'B+', mktcap:12000, ev_val:14000 },
    { name:'HDC현대산업개발',sector:'건설',        ev:5.9,  esg:'B-', mktcap:7000,  ev_val:8200  },
    { name:'롯데건설',      sector:'건설',         ev:7.3,  esg:'B',  mktcap:8000,  ev_val:9500  },
  ],
  mfg: [
    { name:'POSCO홀딩스',   sector:'철강/소재',   ev:5.2,  esg:'A',  mktcap:65000, ev_val:78000 },
    { name:'LG화학',        sector:'화학',         ev:8.7,  esg:'A',  mktcap:55000, ev_val:68000 },
    { name:'롯데케미칼',    sector:'화학',         ev:6.1,  esg:'B+', mktcap:12000, ev_val:15000 },
    { name:'한화솔루션',    sector:'소재/에너지',  ev:9.4,  esg:'A-', mktcap:24000, ev_val:29000 },
    { name:'효성첨단소재',  sector:'소재',         ev:7.8,  esg:'B+', mktcap:9000,  ev_val:11000 },
  ],
  tech: [
    { name:'삼성전자',      sector:'반도체/전자',  ev:10.2, esg:'AA', mktcap:450000,ev_val:510000},
    { name:'SK하이닉스',    sector:'반도체',       ev:8.9,  esg:'A',  mktcap:130000,ev_val:155000},
    { name:'카카오',        sector:'플랫폼',       ev:15.4, esg:'A-', mktcap:32000, ev_val:38000 },
    { name:'네이버',        sector:'플랫폼',       ev:14.1, esg:'A',  mktcap:42000, ev_val:50000 },
    { name:'LG전자',        sector:'가전/전자',    ev:7.6,  esg:'A-', mktcap:38000, ev_val:45000 },
  ],
  env: [
    { name:'코엔텍',        sector:'폐기물처리',   ev:11.2, esg:'B+', mktcap:3200,  ev_val:3800  },
    { name:'에코비트',      sector:'환경관리',     ev:9.8,  esg:'B',  mktcap:2800,  ev_val:3300  },
    { name:'새한환경',      sector:'폐기물',       ev:8.4,  esg:'B',  mktcap:1400,  ev_val:1700  },
    { name:'인선이엔티',    sector:'재활용',       ev:10.1, esg:'B+', mktcap:2100,  ev_val:2500  },
    { name:'와이엔텍',      sector:'소각처리',     ev:9.3,  esg:'B',  mktcap:1600,  ev_val:1900  },
  ],
};

const ESG_INDICATORS = {
  E:[
    {id:'e1',name:'온실가스 배출 저감률',  score:65,weight:25},
    {id:'e2',name:'재생에너지 사용 비율',  score:55,weight:20},
    {id:'e3',name:'용수 재활용률',         score:70,weight:15},
    {id:'e4',name:'환경경영시스템 인증',   score:80,weight:15},
    {id:'e5',name:'폐기물 재활용률',       score:60,weight:15},
    {id:'e6',name:'생물다양성 관리',       score:50,weight:10},
  ],
  S:[
    {id:'s1',name:'산업재해율',            score:60,weight:25},
    {id:'s2',name:'임직원 교육 시간',      score:70,weight:15},
    {id:'s3',name:'여성 임원 비율',        score:45,weight:15},
    {id:'s4',name:'협력사 ESG 관리',       score:55,weight:20},
    {id:'s5',name:'지역사회 기여',         score:65,weight:15},
    {id:'s6',name:'정보보호·개인정보',     score:75,weight:10},
  ],
  G:[
    {id:'g1',name:'이사회 독립성',         score:70,weight:25},
    {id:'g2',name:'감사위원회 운영',       score:65,weight:20},
    {id:'g3',name:'ESG 공시 투명성',       score:60,weight:20},
    {id:'g4',name:'반부패·윤리 경영',      score:75,weight:20},
    {id:'g5',name:'주주권리 보호',         score:55,weight:15},
  ],
};

let catWeights={E:40,S:35,G:25};
let betaCoeffs={sa:-8,ev:-3,ac:-2,ci:-1};
let currentPreset='custom';
let aiPendingScores=null;
let analysisHistory=[];
let radarChart=null,multChartInst=null;
let peerOpen=false;

// ═══════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════
window.onload=()=>{
  renderSimIndicators();
  renderIndicatorWeightEditor();
  updateCatWeights();
  initCharts();
  renderPeerTable('custom');
  simulateLivePeer();
  recalc();
};

// ═══════════════════════════════════════
//  PEER PANEL
// ═══════════════════════════════════════
function togglePeer(){
  peerOpen=!peerOpen;
  document.getElementById('peerBody').classList.toggle('open',peerOpen);
  document.getElementById('peerToggleBtn').textContent=peerOpen?'▴ 접기':'▾ 피어 보기';
}

function renderPeerTable(preset){
  const peers=PEER_SETS[preset]||PEER_SETS.custom;
  const evs=peers.map(p=>p.ev).sort((a,b)=>a-b);
  const median=calcMedian(evs);
  const mean=evs.reduce((s,v)=>s+v,0)/evs.length;
  const q1=evs[Math.floor(evs.length*0.25)];
  const q3=evs[Math.floor(evs.length*0.75)];
  const maxEv=Math.max(...evs);

  const esgColors={'AA':'#4ade80','A':'#22d3ee','A-':'#67e8f9','B+':'#f59e0b','B':'#fb923c','B-':'#f87171'};
  let rows='';
  peers.forEach(p=>{
    const pct=(p.ev/maxEv*100).toFixed(0);
    const esgColor=esgColors[p.esg]||'#94a3b8';
    rows+=`<tr>
      <td>${p.name}</td>
      <td><span class="peer-industry-tag">${p.sector}</span></td>
      <td>
        <strong style="color:var(--gold);">${p.ev.toFixed(1)}x</strong>
        <div class="peer-bar"><div class="peer-bar-fill" style="width:${pct}%"></div></div>
      </td>
      <td><span class="peer-esg-dot" style="background:${esgColor};"></span>${p.esg}</td>
      <td>${(p.mktcap/1000).toFixed(0)}십억</td>
      <td>${(p.ev_val/1000).toFixed(0)}십억</td>
    </tr>`;
  });
  rows+=`<tr class="peer-avg">
    <td colspan="2">피어 통계</td>
    <td>중앙값 ${median.toFixed(1)}x / 평균 ${mean.toFixed(1)}x</td>
    <td></td>
    <td>Q1 ${q1.toFixed(1)}x</td>
    <td>Q3 ${q3.toFixed(1)}x</td>
  </tr>`;
  document.getElementById('peerTableBody').innerHTML=rows;
  document.getElementById('peerMultipleDisplay').textContent=median.toFixed(1)+'x';
  document.getElementById('lastUpdated').textContent='업데이트: '+new Date().toLocaleTimeString('ko-KR');
}

function calcMedian(sorted){
  const m=Math.floor(sorted.length/2);
  return sorted.length%2!==0?sorted[m]:(sorted[m-1]+sorted[m])/2;
}
function calcMean(arr){return arr.reduce((s,v)=>s+v,0)/arr.length;}
function calcQ1(sorted){return sorted[Math.floor(sorted.length*0.25)];}
function calcQ3(sorted){return sorted[Math.floor(sorted.length*0.75)];}

function getPeerMultiple(){
  const mode=document.getElementById('multipleMode').value;
  const peers=PEER_SETS[currentPreset]||PEER_SETS.custom;
  const evs=peers.map(p=>p.ev).sort((a,b)=>a-b);
  if(mode==='custom') return parseFloat(document.getElementById('customMultiple').value)||8;
  if(mode==='mean')   return calcMean(evs);
  if(mode==='q1')     return calcQ1(evs);
  if(mode==='q3')     return calcQ3(evs);
  return calcMedian(evs);
}

function syncSelect(){
  const mode=document.getElementById('multipleMode').value;
  const names={median:'중앙값',mean:'평균값',q1:'Q1(보수)',q3:'Q3(낙관)',custom:'직접입력'};
  document.getElementById('lMultipleMode').textContent=names[mode]||mode;
  document.getElementById('customMultipleField').style.display=mode==='custom'?'block':'none';
}

// 실시간 연동 시뮬레이션: 2초마다 소폭 변동
function simulateLivePeer(){
  setInterval(()=>{
    const peers=PEER_SETS[currentPreset]||PEER_SETS.custom;
    peers.forEach(p=>{ p.ev=Math.max(3,p.ev+(Math.random()-0.5)*0.15); p.ev=Math.round(p.ev*10)/10; });
    renderPeerTable(currentPreset);
    recalc();
  },3000);
}

// ═══════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════
function syncV(iid,lid,comma=false){
  const v=document.getElementById(iid).value;
  document.getElementById(lid).textContent=comma?Number(v).toLocaleString('ko-KR'):v;
}
function syncB(iid,lid){
  const v=document.getElementById(iid).value;
  document.getElementById(lid).textContent=v;
  betaCoeffs[{beta1:'sa',beta2:'ev',beta3:'ac',beta4:'ci'}[iid]]=parseFloat(v);
}
function fmt(v){return Math.round(v).toLocaleString('ko-KR')+' 억원';}
function fmtPct(v){return(v>=0?'+':'')+v.toFixed(2)+'x';}
function fmtPctStr(v){return(v>=0?'+':'')+v.toFixed(1)+'%';}

// ═══════════════════════════════════════
//  TABS
// ═══════════════════════════════════════
function switchTab(name){
  const names=['simulator','weights','ai','sensitivity'];
  document.querySelectorAll('.tab').forEach((t,i)=>t.classList.toggle('active',names[i]===name));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  if(name==='sensitivity') buildSensitivity();
}

// ═══════════════════════════════════════
//  CAT WEIGHTS
// ═══════════════════════════════════════
function updateCatWeights(){
  const eW=parseInt(document.getElementById('wEnv').value);
  const sW=parseInt(document.getElementById('wSoc').value);
  let gW=100-eW-sW; if(gW<5)gW=5;
  catWeights={E:eW,S:sW,G:gW};
  document.getElementById('wE').textContent=eW;
  document.getElementById('wS').textContent=sW;
  document.getElementById('catWeightDisplay').innerHTML=['E','S','G'].map((k,i)=>{
    const cls=['wi-e','wi-s','wi-g'][i];
    const labels={E:'환경(E)',S:'사회(S)',G:'지배구조(G)'};
    return`<div class="weight-item"><div class="wi-label">${labels[k]}</div><div class="wi-val ${cls}">${catWeights[k]}%</div></div>`;
  }).join('');
}

// ═══════════════════════════════════════
//  ESG SCORE
// ═══════════════════════════════════════
function calcCatScore(cat){
  const inds=ESG_INDICATORS[cat];
  const tw=inds.reduce((s,i)=>s+i.weight,0);
  let sc=0;
  inds.forEach(ind=>{
    const el=document.getElementById('ind_'+ind.id);
    sc+=(el?parseFloat(el.value):ind.score)*(ind.weight/tw);
  });
  return sc;
}
function calcESG(){
  const eS=calcCatScore('E'),sS=calcCatScore('S'),gS=calcCatScore('G');
  return{total:eS*(catWeights.E/100)+sS*(catWeights.S/100)+gS*(catWeights.G/100),eS,sS,gS};
}

// ═══════════════════════════════════════
//  MAIN RECALC
// ═══════════════════════════════════════
function recalc(){
  const ebitda=parseFloat(document.getElementById('ebitda').value)||200;
  const sa=parseInt(document.getElementById('seriousAccidents').value)||0;
  const ev=parseInt(document.getElementById('envViolations').value)||0;
  const ac=parseInt(document.getElementById('antiCorruption').value)||0;
  const ci=parseInt(document.getElementById('cyberIncidents').value)||0;

  const baseMult=getPeerMultiple();
  const {total,eS,sS,gS}=calcESG();
  const dev=total-70;

  // BUY-SIDE: 리스크 기반 멀티플 조정 (배수 단위)
  let buyAdjMult=betaCoeffs.sa*sa*0.08+betaCoeffs.ev*ev*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*dev;
  buyAdjMult=Math.max(-baseMult*0.6,Math.min(baseMult*0.15,buyAdjMult));
  const buyMult=Math.max(0.5,baseMult+buyAdjMult);
  const buyEV=ebitda*buyMult;

  // SELL-SIDE: 개선·프리미엄 요구
  let sellAdjMult=0.008*dev-0.06*sa;
  sellAdjMult=Math.max(-baseMult*0.1,Math.min(baseMult*0.25,sellAdjMult));
  const sellMult=Math.max(0.5,baseMult+sellAdjMult);
  const sellEV=ebitda*sellMult;

  const gapEV=sellEV-buyEV;
  const gapMult=sellMult-buyMult;

  // ── MULTIPLE BRIDGE
  updateMBFlow(baseMult,buyAdjMult,sellAdjMult,{sa,ev,ac,ci,dev});

  // ── RESULT CARDS
  document.getElementById('rcBuyEV').textContent=fmt(buyEV);
  document.getElementById('rcBuyMult').textContent='×'+buyMult.toFixed(2)+' EBITDA';
  document.getElementById('rcBuySub').textContent='기준 '+baseMult.toFixed(2)+'x → 조정 '+fmtPct(buyAdjMult);
  document.getElementById('rcSellEV').textContent=fmt(sellEV);
  document.getElementById('rcSellMult').textContent='×'+sellMult.toFixed(2)+' EBITDA';
  document.getElementById('rcSellSub').textContent='기준 '+baseMult.toFixed(2)+'x → 프리미엄 '+fmtPct(sellAdjMult);
  document.getElementById('rcGap').textContent=fmt(Math.abs(gapEV));
  document.getElementById('rcGapMult').textContent='멀티플 차: '+(gapMult>=0?'+':'')+gapMult.toFixed(2)+'x';
  const gapCard=document.getElementById('rcGapCard');
  gapCard.className='result-card gap-card'+(gapEV>0?' neg':'');
  document.getElementById('rcGapSub').textContent=gapEV>0
    ? '매도자 우위 · Earn-out 협상 필요'
    : gapEV<0?'매수자 우위 · 유리한 구간'
    : '가격 합의 구간';

  updateCharts(total,eS,sS,gS,baseMult,buyMult,sellMult,{sa,ev});
  updateImpactBars(ebitda,baseMult,{sa,ev,ac,ci,dev});
  updateSimIndicatorScores(eS,sS,gS);
}

// ═══════════════════════════════════════
//  MULTIPLE BRIDGE FLOW
// ═══════════════════════════════════════
function updateMBFlow(base,buyAdj,sellAdj,{sa,ev,ac,ci,dev}){
  const ebitda=parseFloat(document.getElementById('ebitda').value)||200;
  const parts=[
    {label:'피어 기준 멀티플',val:base,type:'base'},
    {label:`중대재해 (${sa}건)`,val:betaCoeffs.sa*sa*0.08,type:'neg'},
    {label:`환경위반 (${ev}건)`,val:betaCoeffs.ev*ev*0.03,type:'neg'},
    {label:`반부패 (${ac}건)`,val:betaCoeffs.ac*ac*0.02,type:ac>0?'neg':'zero'},
    {label:`정보보안 (${ci}건)`,val:betaCoeffs.ci*ci*0.01,type:ci>0?'neg':'zero'},
    {label:'ESG 점수 조정',val:0.005*dev,type:dev>=0?'pos':'neg'},
    {label:'→ BUY 적용 멀티플',val:Math.max(0.5,base+buyAdj),type:'buy',final:true},
  ];

  let html='';
  parts.forEach((p,i)=>{
    if(p.type==='zero') return;
    const isFinal=p.final;
    const cls=isFinal?'mb-step-val accent':
              p.type==='base'?'mb-step-val':
              p.type==='neg'?'mb-step-val red':
              p.type==='pos'?'mb-step-val' :'mb-step-val accent';
    const valStr=isFinal?p.val.toFixed(2)+'x':
                 p.type==='base'?p.val.toFixed(2)+'x':
                 (p.val>=0?'+':'')+p.val.toFixed(3)+'x';
    const adjCls=p.type==='neg'?'mb-adj-badge mb-adj-neg':p.type==='pos'?'mb-adj-badge mb-adj-pos':isFinal?'mb-adj-badge mb-adj-neu':'';
    if(i>0&&!isFinal) html+=`<div class="mb-arrow">→</div>`;
    if(isFinal) html+=`<div class="mb-arrow" style="color:rgba(99,120,180,0.4);">═</div>`;
    html+=`<div class="mb-step">
      <div class="${isFinal?'mb-step-val accent':cls}">${valStr}</div>
      <div class="mb-step-label">${p.label}</div>
      ${adjCls?`<div class="${adjCls}">${isFinal?fmt(p.val*parseFloat(document.getElementById('ebitda').value||200)):''}</div>`:''}
    </div>`;
  });
  document.getElementById('mbFlow').innerHTML=html;
}

// ═══════════════════════════════════════
//  CHARTS
// ═══════════════════════════════════════
function initCharts(){
  radarChart=new Chart(document.getElementById('radarChart').getContext('2d'),{
    type:'radar',
    data:{
      labels:['환경(E)','사회(S)','지배구조(G)','E 리스크','S 리스크','G 리스크'],
      datasets:[
        {label:'대상기업',data:[0,0,0,0,0,0],backgroundColor:'rgba(59,130,246,0.15)',borderColor:'rgba(59,130,246,0.8)',pointBackgroundColor:'#3b82f6',borderWidth:2},
        {label:'업종평균',data:[70,70,70,70,70,70],backgroundColor:'rgba(99,102,241,0.05)',borderColor:'rgba(99,102,241,0.4)',borderDash:[5,5],borderWidth:1,pointBackgroundColor:'#6366f1'}
      ]
    },
    options:{
      scales:{r:{suggestedMin:0,suggestedMax:100,ticks:{color:'#64748b',backdropColor:'transparent',stepSize:25},grid:{color:'rgba(99,120,180,0.15)'},pointLabels:{color:'#94a3b8',font:{size:9,family:"'DM Mono'"}}}},
      plugins:{legend:{labels:{color:'#64748b',font:{size:10}}}}
    }
  });

  multChartInst=new Chart(document.getElementById('multChart').getContext('2d'),{
    type:'bar',
    data:{
      labels:['피어 기준','BUY 조정분','BUY 멀티플','SELL 조정분','SELL 멀티플'],
      datasets:[{data:[0,0,0,0,0],backgroundColor:['rgba(99,102,241,0.6)','rgba(244,63,94,0.6)','rgba(59,130,246,0.85)','rgba(34,197,94,0.6)','rgba(251,146,60,0.85)'],borderRadius:5}]
    },
    options:{
      scales:{
        y:{ticks:{color:'#64748b',font:{size:10}},grid:{color:'rgba(99,120,180,0.1)'}},
        x:{ticks:{color:'#64748b',font:{size:9}},grid:{display:false}}
      },
      plugins:{legend:{display:false}}
    }
  });
}

function updateCharts(total,eS,sS,gS,base,buyMult,sellMult,{sa,ev}){
  if(!radarChart) return;
  const eRisk=Math.max(0,100-ev*10);
  const sRisk=Math.max(0,100-sa*12);
  // G 리스크: 반부패 + 정보보안 + G 점수 역산
  const ac=parseInt(document.getElementById('antiCorruption').value)||0;
  const ci=parseInt(document.getElementById('cyberIncidents').value)||0;
  const gRisk=Math.max(0,gS-(ac*8+ci*5));

  radarChart.data.datasets[0].data=[eS,sS,gS,eRisk,sRisk,Math.min(100,Math.max(0,gRisk))];
  radarChart.update();

  const buyAdj=buyMult-base;
  const sellAdj=sellMult-base;
  multChartInst.data.datasets[0].data=[base,buyAdj,buyMult,sellAdj,sellMult];
  multChartInst.update();
}

// ═══════════════════════════════════════
//  IMPACT BARS
// ═══════════════════════════════════════
function updateImpactBars(ebitda,base,{sa,ev,ac,ci,dev}){
  const items=[
    {label:'중대재해 영향',ev:ebitda*betaCoeffs.sa*sa*0.08},
    {label:'환경위반 영향',ev:ebitda*betaCoeffs.ev*ev*0.03},
    {label:'반부패 영향', ev:ebitda*betaCoeffs.ac*ac*0.02},
    {label:'정보보안 영향',ev:ebitda*betaCoeffs.ci*ci*0.01},
    {label:'ESG 점수 기여',ev:ebitda*0.005*dev},
  ];
  const maxA=Math.max(...items.map(i=>Math.abs(i.ev)),1);
  document.getElementById('impactBars').innerHTML=items.map(item=>{
    const pct=Math.abs(item.ev)/maxA*100;
    const cls=item.ev>0?'ip-pos':item.ev<0?'ip-neg':'ip-neu';
    const vStr=(item.ev>=0?'+':'')+Math.round(item.ev).toLocaleString('ko-KR')+'억';
    return`<div class="impact-row">
      <div class="impact-label">${item.label}</div>
      <div class="impact-bar-wrap">
        <div class="impact-fill ${cls}" style="width:${pct}%" data-v="${vStr}"></div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════
//  INDICATOR ROWS
// ═══════════════════════════════════════
function renderSimIndicators(){
  const fills={E:'fe',S:'fs',G:'fg'};
  const hdrs={E:'ig-e',S:'ig-s',G:'ig-g'};
  const cnames={E:'환경(E)',S:'사회(S)',G:'지배구조(G)'};
  let html='';
  ['E','S','G'].forEach(cat=>{
    html+=`<div class="indicator-group">
      <div class="ig-header ${hdrs[cat]}">
        <span>${cnames[cat]}</span>
        <span class="ig-score" id="catScore_${cat}">—점</span>
      </div>`;
    ESG_INDICATORS[cat].forEach(ind=>{
      html+=`<div class="ind-row">
        <div class="ind-name">${ind.name}</div>
        <div style="padding:0 2px;"><div class="ind-bar"><div class="ind-bar-fill ${fills[cat]}" id="bar_${ind.id}" style="width:${ind.score}%"></div></div></div>
        <input type="range" id="ind_${ind.id}" min="0" max="100" value="${ind.score}" style="width:48px;"
          oninput="document.getElementById('bar_${ind.id}').style.width=this.value+'%';document.getElementById('num_${ind.id}').textContent=this.value;recalc()"/>
        <div class="ind-num" id="num_${ind.id}">${ind.score}</div>
      </div>`;
    });
    html+='</div>';
  });
  document.getElementById('simIndicators').innerHTML=html;
}
function updateSimIndicatorScores(eS,sS,gS){
  document.getElementById('catScore_E').textContent=eS.toFixed(1)+'점';
  document.getElementById('catScore_S').textContent=sS.toFixed(1)+'점';
  document.getElementById('catScore_G').textContent=gS.toFixed(1)+'점';
}

// ═══════════════════════════════════════
//  WEIGHT EDITOR
// ═══════════════════════════════════════
function renderIndicatorWeightEditor(){
  const cnames={E:'환경(E)',S:'사회(S)',G:'지배구조(G)'};
  let html='';
  ['E','S','G'].forEach(cat=>{
    html+=`<div class="sec-label">${cnames[cat]}</div>`;
    ESG_INDICATORS[cat].forEach(ind=>{
      html+=`<div style="display:grid;grid-template-columns:1fr 50px;gap:8px;align-items:center;margin-bottom:7px;">
        <label style="font-size:11px;color:var(--text-dim);">${ind.name}</label>
        <input type="number" class="ind-weight-input" id="wt_${ind.id}" value="${ind.weight}" min="0" max="100"
          oninput="ESG_INDICATORS['${cat}'].find(i=>i.id==='${ind.id}').weight=parseInt(this.value)||0;recalc()"/>
      </div>`;
    });
  });
  document.getElementById('indicatorWeightEditor').innerHTML=html;
}
function equalizeWeights(){
  ['E','S','G'].forEach(cat=>{
    const n=ESG_INDICATORS[cat].length,w=Math.round(100/n);
    ESG_INDICATORS[cat].forEach(ind=>{ind.weight=w;const el=document.getElementById('wt_'+ind.id);if(el)el.value=w;});
  });
  recalc();
}

// ═══════════════════════════════════════
//  PRESETS
// ═══════════════════════════════════════
function loadPreset(name,btn){
  document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentPreset=name;
  renderPeerTable(name);
  if(name==='custom') return;

  const presets={
    construction:{ebitda:300,sa:3,ev:4,ac:1,ci:0,E:[50,40,60,70,55,45],S:[45,60,40,50,60,65],G:[65,60,55,70,50]},
    mfg:         {ebitda:250,sa:1,ev:3,ac:0,ci:1,E:[60,50,65,75,65,55],S:[65,70,50,60,65,70],G:[70,65,60,75,60]},
    tech:        {ebitda:500,sa:0,ev:1,ac:0,ci:2,E:[75,70,80,85,75,70],S:[75,80,70,65,70,85],G:[80,75,80,85,70]},
    env:         {ebitda:150,sa:2,ev:5,ac:0,ci:0,E:[55,65,70,80,75,60],S:[55,65,45,65,70,60],G:[60,60,65,70,55]},
  };
  const p=presets[name];
  document.getElementById('ebitda').value=p.ebitda;
  document.getElementById('lEBITDA').textContent=p.ebitda.toLocaleString('ko-KR');
  ['seriousAccidents','envViolations','antiCorruption','cyberIncidents'].forEach((id,i)=>{
    const vals=[p.sa,p.ev,p.ac,p.ci];
    document.getElementById(id).value=vals[i];
  });
  ['lSA','lEV','lAC','lCI'].forEach((id,i)=>document.getElementById(id).textContent=[p.sa,p.ev,p.ac,p.ci][i]);
  ['E','S','G'].forEach(cat=>{
    const sc=cat==='E'?p.E:cat==='S'?p.S:p.G;
    ESG_INDICATORS[cat].forEach((ind,i)=>{
      const el=document.getElementById('ind_'+ind.id);
      if(el&&sc[i]!=null){el.value=sc[i];const b=document.getElementById('bar_'+ind.id);if(b)b.style.width=sc[i]+'%';const n=document.getElementById('num_'+ind.id);if(n)n.textContent=sc[i];}
    });
  });
  recalc();
}

function resetAll(){
  document.getElementById('ebitda').value=200;document.getElementById('lEBITDA').textContent='200';
  ['seriousAccidents','envViolations','antiCorruption','cyberIncidents'].forEach(id=>document.getElementById(id).value=0);
  ['lSA','lEV','lAC','lCI'].forEach(id=>document.getElementById(id).textContent='0');
  ['E','S','G'].forEach(cat=>ESG_INDICATORS[cat].forEach(ind=>{
    const el=document.getElementById('ind_'+ind.id);if(el){el.value=70;const b=document.getElementById('bar_'+ind.id);if(b)b.style.width='70%';const n=document.getElementById('num_'+ind.id);if(n)n.textContent=70;}
  }));
  recalc();
}

// ═══════════════════════════════════════
//  SENSITIVITY
// ═══════════════════════════════════════
function buildSensitivity(){
  const ebitda=parseFloat(document.getElementById('ebitda').value)||200;
  const base=getPeerMultiple();
  const evVal=parseInt(document.getElementById('envViolations').value)||0;
  const ac=parseInt(document.getElementById('antiCorruption').value)||0;
  const ci=parseInt(document.getElementById('cyberIncidents').value)||0;
  const curSA=parseInt(document.getElementById('seriousAccidents').value)||0;
  const {total}=calcESG();

  let t1=`<thead><tr><th>중대재해</th><th>BUY 멀티플</th><th>BUY EV</th><th>vs현재</th></tr></thead><tbody>`;
  const curBuyM=Math.max(0.5,base+betaCoeffs.sa*curSA*0.08+betaCoeffs.ev*evVal*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*(total-70));
  for(let s=0;s<=8;s++){
    const adj=betaCoeffs.sa*s*0.08+betaCoeffs.ev*evVal*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*(total-70);
    const m=Math.max(0.5,base+adj);
    const v=ebitda*m;
    const diff=(m-curBuyM)*ebitda;
    const isCur=s===curSA;
    t1+=`<tr><td>${s}건</td><td class="${adj>=0?'cell-pos':'cell-neg'} ${isCur?'cell-cur':''}">${m.toFixed(2)}x</td><td class="${isCur?'cell-cur':''}">${Math.round(v).toLocaleString()}억</td><td class="${diff>=0?'cell-pos':'cell-neg'}">${diff>=0?'+':''}${Math.round(diff).toLocaleString()}억</td></tr>`;
  }
  document.getElementById('sensTable1').innerHTML=t1+'</tbody>';

  let t2=`<thead><tr><th>ESG점수</th><th>SELL 멀티플</th><th>SELL EV</th><th>갭</th></tr></thead><tbody>`;
  for(let sc=40;sc<=90;sc+=5){
    const sAdj=Math.max(-base*0.1,Math.min(base*0.25,0.008*(sc-70)-0.06*curSA));
    const bAdj=betaCoeffs.sa*curSA*0.08+betaCoeffs.ev*evVal*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*(sc-70);
    const sm=Math.max(0.5,base+sAdj),bm=Math.max(0.5,base+bAdj);
    const sv=ebitda*sm,bv=ebitda*bm,gap=sv-bv;
    const isCur=Math.abs(sc-total)<3;
    t2+=`<tr><td class="${isCur?'cell-cur':''}">${sc}점</td><td>${sm.toFixed(2)}x</td><td>${Math.round(sv).toLocaleString()}억</td><td class="${gap>0?'cell-neg':'cell-pos'}">${gap>=0?'+':''}${Math.round(gap).toLocaleString()}억</td></tr>`;
  }
  document.getElementById('sensTable2').innerHTML=t2+'</tbody>';

  const saVals=[0,1,2,3,4,5],esgVals=[40,50,60,70,80,90];
  const allV=[];
  saVals.forEach(s=>esgVals.forEach(e=>{const m=Math.max(0.5,base+betaCoeffs.sa*s*0.08+betaCoeffs.ev*evVal*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*(e-70));allV.push(ebitda*m);}));
  const minV=Math.min(...allV),maxV=Math.max(...allV);
  let hm=`<thead><tr><th>SA↓ ESG→</th>${esgVals.map(v=>`<th>${v}</th>`).join('')}</tr></thead><tbody>`;
  saVals.forEach(s=>{
    hm+=`<tr><td>${s}건</td>`;
    esgVals.forEach(e=>{
      const m=Math.max(0.5,base+betaCoeffs.sa*s*0.08+betaCoeffs.ev*evVal*0.03+betaCoeffs.ac*ac*0.02+betaCoeffs.ci*ci*0.01+0.005*(e-70));
      const v=ebitda*m,t=(v-minV)/(maxV-minV);
      const r=Math.round(244*(1-t)+59*t),g=Math.round(63*(1-t)+130*t),b=Math.round(94*(1-t)+246*t);
      const isCur=s===curSA&&Math.abs(e-total)<5;
      hm+=`<td style="background:rgba(${r},${g},${b},0.28);${isCur?'outline:1px solid #3b82f6;':''}">${Math.round(v).toLocaleString()}</td>`;
    });
    hm+='</tr>';
  });
  document.getElementById('heatmapTable').innerHTML=hm+'</tbody>';
}

// ═══════════════════════════════════════
//  AI ANALYSIS
// ═══════════════════════════════════════
async function handleFile(event){
  const file=event.target.files[0];if(!file)return;
  document.getElementById('fileStatus').textContent=`📎 ${file.name} (${(file.size/1024).toFixed(1)}KB) 로드됨`;
  const text=await new Promise(res=>{const r=new FileReader();r.onload=e=>res(e.target.result);r.readAsText(file);});
  document.getElementById('manualText').value=text.slice(0,4000);
}
function handleDrop(e){
  e.preventDefault();document.getElementById('uploadZone').classList.remove('drag');
  const file=e.dataTransfer.files[0];if(file){const fe={target:{files:[file]}};handleFile(fe);}
}
async function analyzeText(){
  const text=document.getElementById('manualText').value.trim();
  if(!text){alert('분석할 텍스트를 입력하세요.');return;}
  const res=document.getElementById('aiResult');res.classList.add('show');
  document.getElementById('aiResultTitle').textContent='AI 분석 중...';
  ['aiE','aiS','aiG'].forEach(id=>document.getElementById(id).textContent='...');
  document.getElementById('aiFindingsBox').innerHTML=`<div style="display:flex;align-items:center;gap:8px;color:var(--accent2);font-family:var(--mono);font-size:11px;"><span class="spinner"></span>Claude가 ESG 지표를 추출하고 있습니다...</div>`;
  document.getElementById('aiApplyRow').style.display='none';

  const prompt=`당신은 ESG M&A 실사 전문 애널리스트입니다. 다음 기업 문서를 분석하여 ESG 지표를 평가해주세요.

문서:
${text.slice(0,3000)}

다음 JSON 형식으로만 응답 (코드블록·기타 텍스트 없이):
{"E_score":0~100,"S_score":0~100,"G_score":0~100,"serious_accidents":0~10,"env_violations":0~15,"anti_corruption":0~10,"cyber_incidents":0~10,"indicators":{"e1":0~100,"e2":0~100,"e3":0~100,"e4":0~100,"e5":0~100,"e6":0~100,"s1":0~100,"s2":0~100,"s3":0~100,"s4":0~100,"s5":0~100,"s6":0~100,"g1":0~100,"g2":0~100,"g3":0~100,"g4":0~100,"g5":0~100},"key_findings":["발견1","발견2","발견3"],"risk_flags":["리스크1","리스크2"],"opportunities":["기회1","기회2"]}`;

  try{
    const response=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:prompt}]})});
    const data=await response.json();
    const raw=data.content.map(c=>c.text||'').join('');
    const parsed=JSON.parse(raw.replace(/```json|```/g,'').trim());
    displayAIResults(parsed);
  }catch(err){
    document.getElementById('aiFindingsBox').innerHTML=`<p style="color:var(--red);">분석 오류: ${err.message}</p>`;
  }
}
function displayAIResults(data){
  document.getElementById('aiResultTitle').textContent='AI ESG 분석 완료';
  document.getElementById('aiE').textContent=data.E_score;
  document.getElementById('aiS').textContent=data.S_score;
  document.getElementById('aiG').textContent=data.G_score;
  let html='';
  if(data.key_findings?.length) html+=`<strong>📌 주요 발견사항</strong><ul>${data.key_findings.map(f=>`<li>${f}</li>`).join('')}</ul>`;
  if(data.risk_flags?.length)   html+=`<strong style="color:var(--red);">⚠️ 리스크</strong><ul>${data.risk_flags.map(f=>`<li>${f}</li>`).join('')}</ul>`;
  if(data.opportunities?.length)html+=`<strong style="color:#4ade80;">✅ 기회</strong><ul>${data.opportunities.map(f=>`<li>${f}</li>`).join('')}</ul>`;
  document.getElementById('aiFindingsBox').innerHTML=html;
  document.getElementById('aiApplyRow').style.display='block';
  aiPendingScores=data;
  analysisHistory.unshift({time:new Date().toLocaleTimeString('ko-KR'),E:data.E_score,S:data.S_score,G:data.G_score});
  document.getElementById('aiHistory').innerHTML=analysisHistory.slice(0,5).map(h=>`<div style="display:flex;gap:12px;padding:5px 0;border-bottom:1px solid var(--border);"><span style="color:var(--text-dim);font-family:var(--mono);">${h.time}</span><span>E:<span style="color:#22d3ee;">${h.E}</span></span><span>S:<span style="color:#fb923c;">${h.S}</span></span><span>G:<span style="color:#c4b5fd;">${h.G}</span></span></div>`).join('');
}
function applyAIResults(){
  if(!aiPendingScores) return;
  const d=aiPendingScores;
  const map=[['seriousAccidents',d.serious_accidents||0,'lSA'],['envViolations',d.env_violations||0,'lEV'],['antiCorruption',d.anti_corruption||0,'lAC'],['cyberIncidents',d.cyber_incidents||0,'lCI']];
  map.forEach(([id,val,lid])=>{document.getElementById(id).value=val;document.getElementById(lid).textContent=val;});
  if(d.indicators) Object.entries(d.indicators).forEach(([id,score])=>{const el=document.getElementById('ind_'+id);if(el){el.value=score;const b=document.getElementById('bar_'+id);if(b)b.style.width=score+'%';const n=document.getElementById('num_'+id);if(n)n.textContent=score;}});
  switchTab('simulator');
  setTimeout(recalc,200);
}
</script>
</body>
</html>
