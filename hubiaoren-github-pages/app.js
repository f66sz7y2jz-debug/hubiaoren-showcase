(() => {
  'use strict';
  const data = window.HBR_DATA;
  const $ = (id) => document.getElementById(id);
  const sources = Object.fromEntries(data.sources.map((source) => [source.id, source]));
  const statusNames = { supported: '材料支持', restricted: '约定限制', unknown: '仍待核实', changed: '本次更新' };
  const state = { time: 0, playing: false, stage: -1, source: 'original', check: null, subtitle: -1, recording: false };
  const escape = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const clock = (seconds) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  let lastTime = 0;
  let resumeOnClose = false;
  let nativeFullscreen = false;
  let returnFocus = null;

  $('chapters').innerHTML = data.stages.map((stage, index) => `<button class="chapter" data-chapter="${index}" aria-label="第${index + 1}幕 ${escape(stage.title)}"><span>0${index + 1}</span>${escape(stage.title)}</button>`).join('');

  function materialList() {
    const items = [
      { id: 'original', name: '商标许可协议', date: '2026.09.01 · 原始档案', icon: '契' },
      { id: 'supplement', name: '质量控制补充协议', date: state.stage >= 3 ? '10.24 签署 · 10.25 入档' : '第 4 幕补入', icon: '补' },
      { id: 'law', name: '菲律宾知识产权法典', date: '第150条 · 公共法源', icon: '法' }
    ];
    $('materials').innerHTML = items.map((item) => {
      const locked = item.id === 'supplement' && state.stage < 3;
      return `<button class="material-card ${state.source === item.id ? 'selected' : ''} ${locked ? 'locked' : ''} ${item.id === 'supplement' && state.stage === 3 ? 'new' : ''}" data-source="${item.id}" ${locked ? 'disabled' : ''} aria-label="${escape(item.name)}${locked ? '，第四幕可查看' : ''}"><span class="file-symbol">${item.icon}</span><span><strong>${item.name}</strong><small>${item.date}</small></span></button>`;
    }).join('');
  }

  function checksHtml(items) {
    return `<div class="check-list">${items.map((check) => `<button class="check-row ${check.status} ${state.check === check.id ? 'selected' : ''}" data-check="${check.id}" aria-label="${escape(check.label)}：${escape(check.value)}，查看依据"><span class="check-name">${escape(check.label)}</span><span class="check-value">${escape(check.value)}</span><span class="status-tag ${check.status}">${statusNames[check.status]}</span></button>`).join('')}</div>`;
  }

  function renderStage() {
    const stage = data.stages[state.stage];
    $('stage-kicker').textContent = stage.kicker;
    const headings = [
      '新订单来了，授权也跟上了吗？',
      '先回到企业自己的合同。',
      '同一个问题，需要分开核查。',
      '补上了第四条，其他事项呢？',
      '下一步，企业需要做什么？'
    ];
    let content = '';
    if (state.stage === 0) {
      content = `<h3>${headings[0]}</h3><p class="stage-lead">晴屿茶具 · 菲律宾渠道合作<br>经销商希望借新订单扩大销售，并向下游商家转许可。</p><div class="story-label">企业负责人 <span class="pill">叙事设定</span></div><blockquote class="story-quote">“补充协议已经签了，<br>可以上线电商，<br>也能向下游商家转许可了吗？”</blockquote><div class="story-context"><span class="pill">销售渠道</span><span class="pill">商标使用</span><span class="pill">履行与记录</span></div><p class="story-bottom">真正影响决策的，是<strong>合同约定了什么、实际做了什么，以及档案能证明什么。</strong></p>`;
    } else if (state.stage === 1) {
      content = `<h3>${headings[1]}</h3><p class="stage-lead">2026 年 9 月 1 日，双方签署 SW801 许可协议。<br>把四条约定读完整，才知道新计划能否接着做。</p><div class="clause-list">${[
        ['一', '菲律宾实体零售渠道 · “晴屿”茶具'],
        ['二', '禁止电商销售 · 不得向第三人转许可'],
        ['三', '未附许可记录证明 · 是否记录待确认'],
        ['四', '质量检查与记录管理办法另行商定']
      ].map(([no, text]) => `<button class="clause-button" data-clause="${no}"><span>第${no}条</span><span>${text}</span><span class="clause-arrow">↗</span></button>`).join('')}</div><p class="small-explanation">档案还没有检验或实际检查记录。缺少记录，不能直接写成“从未检查”。</p>`;
    } else if (state.stage === 2) {
      content = `<h3>${headings[2]}</h3><p class="stage-lead">把经营约束与法律核查分开。点击每一项，<br>查看它依赖的企业材料或法律依据。</p>${checksHtml(data.checksBefore)}<p class="small-explanation">质控约定、实际实施与许可记录，是不同的核查事项。</p><button class="button receive-button" id="receive-material">接收质量控制补充协议 <span>→</span></button>`;
    } else if (state.stage === 3) {
      content = `<h3>${headings[3]}</h3><p class="stage-lead">新增协议带来变化，也留下明确的边界。<br>更新的是约定，履行和记录仍需要各自的证明。</p><div class="update-banner"><span>✓</span>仅第四条更新 · 其余条款保留</div>${checksHtml(data.checksAfter)}<p class="update-dates">10.24 签署 / 约定适用 <span>→</span> 10.25 入档<br>补入合同条款，不等于补入实际检查记录。</p>`;
    } else {
      content = `<h3>${headings[4]}</h3><p class="stage-lead">把分析落到可以办理的事项，<br>让每一个后续动作都有明确的材料目标。</p><div class="action-list">${data.actions.map((action, index) => `<article class="action-card"><span class="action-number">0${index + 1}</span><div><strong>${escape(action.title)}</strong><p>${escape(action.body)}</p><button data-action-source="${escape(action.source)}">回看依据 ↗</button></div></article>`).join('')}</div><p class="result-line">本次变化：<strong>质控条款更新</strong>。<br>渠道与转许可限制保留，实际实施及记录状态继续待核。</p>`;
    }
    $('stage-content').innerHTML = content;
    document.querySelectorAll('.chapter').forEach((button, index) => {
      button.classList.toggle('active', index === state.stage);
      button.classList.toggle('done', index < state.stage);
      if (index === state.stage) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    $('previous').disabled = state.stage === 0;
    $('next').disabled = state.stage === 4;
    materialList();
    renderEvidence();
  }

  function evidenceExcerpt(source) {
    const list = state.stage >= 3 ? data.checksAfter : data.checksBefore;
    const check = list.find((item) => item.id === state.check);
    if (check && source.id === 'original') {
      if (check.id === 'channel') return '第一条 甲公司许可乙公司在菲律宾实体零售渠道销售标有“晴屿”文字商标的茶具。\n\n第二条 乙公司不得通过电商销售，不得向第三人转许可。';
      if (check.id === 'sublicense') return '第二条 乙公司不得通过电商销售，不得向第三人转许可。';
      if (check.id === 'recordal') return '第三条 本次档案未附该许可在菲律宾知识产权主管机关的记录证明；是否已经记录尚待确认。';
      if (check.id === 'quality_performance') return '截至2026年10月25日，本次提交的档案中没有产品检验或权利人实际检查记录，不能据此认定从未进行检查。';
      if (check.id === 'quality_terms') return '第四条 质量检查与记录管理办法另行商定，本协议未约定具体质量控制措施。';
    }
    if (source.id === 'supplement') return source.body.split('\n').slice(2).join('\n\n');
    if (source.id === 'law') return '150.1\n… shall provide for effective control by the licensor of the quality of the goods or services …\n\n… if such quality control is not effectively carried out, the license contract shall not be valid.\n\n150.2\nA license contract shall have no effect against third parties until such recording is effected.';
    return source.body.split('\n').slice(3, 7).join('\n\n');
  }

  function renderEvidence() {
    const source = sources[state.source];
    const list = state.stage >= 3 ? data.checksAfter : data.checksBefore;
    const check = list.find((item) => item.id === state.check);
    $('evidence').innerHTML = `<div class="evidence-content"><span class="source-kind">${escape(source.kind)}</span><strong class="evidence-title">${escape(source.title)}</strong><p class="evidence-date">${escape(source.date)}${source.id === 'supplement' ? '<br>2026-10-25 入档' : ''}</p><div class="evidence-body">${escape(evidenceExcerpt(source))}</div>${check ? `<p class="evidence-reason">${escape(check.reason)}</p>` : ''}<p class="evidence-note">${source.id === 'law' ? '英文节选 · 省略处不替代完整原文。中文讲解并非官方译文。' : '既有项目合成材料 · 原文保留。'}</p><button class="source-open" data-open-source="${escape(source.id)}">打开完整原文 <span>↗</span></button></div>`;
  }

  function selectSource(id, check = null) {
    if (!sources[id] || (id === 'supplement' && state.stage < 3)) return;
    state.source = id;
    state.check = check;
    materialList();
    renderEvidence();
    document.querySelectorAll('[data-check]').forEach((button) => button.classList.toggle('selected', button.dataset.check === check));
  }

  function update() {
    const stage = data.stages.findIndex((item) => state.time >= item.start && state.time < item.end);
    const nextStage = stage === -1 ? 4 : stage;
    if (nextStage !== state.stage) {
      state.stage = nextStage;
      state.source = nextStage === 3 ? 'supplement' : nextStage === 2 ? 'law' : 'original';
      state.check = null;
      renderStage();
    }
    const subIndex = data.subtitles.findIndex((item) => state.time >= item.start && state.time < item.end);
    if (subIndex !== state.subtitle) {
      state.subtitle = subIndex;
      $('subtitle').textContent = subIndex >= 0 ? data.subtitles[subIndex].text : '护标人，为企业出海护标。每项判断有依据，每次变化可回查。';
    }
    $('elapsed').textContent = clock(state.time);
    $('seek').value = state.time;
    $('seek').setAttribute('aria-valuetext', `${clock(state.time)}，${data.stages[state.stage].title}`);
    $('seek').style.background = `linear-gradient(to right,var(--green-mid) ${state.time / 240 * 100}%,#e3e6d9 ${state.time / 240 * 100}%)`;
  }

  function play(value) {
    if (value && state.time >= 240) { state.time = 0; update(); }
    state.playing = value;
    lastTime = performance.now();
    $('play-pause').textContent = value ? 'Ⅱ' : '▶';
    $('play-pause').setAttribute('aria-label', value ? '暂停演示' : '播放演示');
    $('play-pause').setAttribute('aria-pressed', String(value));
  }

  function jump(index) {
    const target = Math.max(0, Math.min(data.stages.length - 1, index));
    state.time = data.stages[target].start;
    lastTime = performance.now();
    update();
  }

  function setRecording(value) {
    state.recording = value;
    document.body.classList.toggle('recording', value);
    $('record-mode').textContent = value ? '×' : '⛶';
    $('record-mode').setAttribute('aria-label', value ? '退出录屏模式' : '进入录屏模式');
    $('record-mode').title = value ? '退出录屏模式 Esc' : '录屏模式 F';
    if (value && document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => { nativeFullscreen = true; }).catch(() => {});
    } else if (!value && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    if (!value) $('demo').scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  function openDialog({ title, kind, meta, body, note, url, image }) {
    returnFocus = document.activeElement;
    resumeOnClose = state.playing;
    play(false);
    $('dialog-title').textContent = title;
    $('dialog-kind').textContent = kind;
    $('dialog-meta').textContent = meta;
    $('dialog-body').textContent = body;
    $('dialog-footer').innerHTML = `${escape(note)}${url ? `<br><a href="${escape(url)}" target="_blank" rel="noopener">查看来源网站 ↗</a>` : ''}${image ? `<img src="${escape(image)}" alt="申报书中的护标人原型总览" class="prototype-image">` : ''}`;
    $('source-dialog').showModal();
  }

  function openSource(id) {
    const source = sources[id];
    if (!source) return;
    openDialog({ title: source.title, kind: source.kind, meta: source.date + (id === 'supplement' ? ' 签署 / 约定适用 · 2026-10-25 入档' : ''), body: source.body, note: source.note, url: source.url });
  }

  const sourceEntry = (source, index) => `<button class="source-entry" data-open-source="${source.id}"><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${escape(source.title)}</strong><small>${escape(source.kind)} · ${escape(source.date)}</small></div><span>↗</span></button>`;
  $('source-links').innerHTML = [
    ['coffee', '01 / 咖啡平行进口 · 判例与新加坡法'],
    ['wine', '02 / 红高粱出海 · 菲律宾注册指引'],
    [null, '03 / 晴屿许可 · 企业材料与法律依据']
  ].map(([group, title], i) => `<details class="source-group"${i === 0 ? ' open' : ''}><summary>${title}</summary>${data.sources.filter(source => (source.group || null) === group).map(sourceEntry).join('')}</details>`).join('') + `<button class="source-entry" id="prototype-source"><span>↳</span><div><strong>申报书中的产品原型</strong><small>既有产品画面 · 展示页面依据说明</small></div><span>↗</span></button>`;

  document.addEventListener('click', (event) => {
    const chapter = event.target.closest('[data-chapter]');
    if (chapter) jump(Number(chapter.dataset.chapter));
    const source = event.target.closest('[data-source]');
    if (source && !source.disabled) selectSource(source.dataset.source);
    const check = event.target.closest('[data-check]');
    if (check) {
      const item = (state.stage >= 3 ? data.checksAfter : data.checksBefore).find((entry) => entry.id === check.dataset.check);
      if (item) selectSource(item.source, item.id);
    }
    const open = event.target.closest('[data-open-source]');
    if (open) openSource(open.dataset.openSource);
    const clause = event.target.closest('[data-clause]');
    if (clause) {
      const clauseChecks = { '一': 'channel', '二': 'sublicense', '三': 'recordal', '四': 'quality_terms' };
      selectSource('original', clauseChecks[clause.dataset.clause]);
      openSource('original');
    }
    const action = event.target.closest('[data-action-source]');
    if (action) openSource(action.dataset.actionSource);
    if (event.target.closest('#receive-material')) jump(3);
  });
  $('play-pause').addEventListener('click', () => play(!state.playing));
  $('previous').addEventListener('click', () => jump(state.stage - 1));
  $('next').addEventListener('click', () => jump(state.stage + 1));
  $('restart').addEventListener('click', () => { state.time = 0; play(false); update(); });
  $('seek').addEventListener('input', (event) => { state.time = Number(event.target.value); lastTime = performance.now(); update(); });
  $('record-mode').addEventListener('click', () => setRecording(!state.recording));
  $('start-demo').addEventListener('click', () => { state.time = 0; update(); setRecording(true); play(true); });
  $('open-record').addEventListener('click', () => openDialog({ title: '系统原答状态', kind: '原始记录与编辑讲解', meta: 'SW801 · 菲律宾商标许可项目', body: '系统原答：未取得。\n\n已核对并保留的内容：\n01 / 既有项目中的企业原始材料全文\n02 / 质量控制补充协议全文\n03 / 菲律宾知识产权法典第150条\n\n本页五项核查、行动清单和字幕均为依据上述原文编排的讲解摘要，未冒充模型原答，也未在播放时实时调用模型。', note: '项目材料为合成测试内容；企业新订单和负责人提问为叙事设定。可在具备网络条件时进入护标人实机查看现有项目。' }));
  $('prototype-source').addEventListener('click', () => openDialog({ title: '既有产品原型', kind: '申报书内嵌原图', meta: '产品：护标人 · 团队：东南标局', body: '本展示页沿用申报书中的产品名称与熊猫镖客标志，业务能力依据申报书及既有系统材料整理。\n\n下图是申报书内嵌的原型总览原图。展示页的情境编排与交互界面是独立制作的录屏演示。', note: '图片从用户提供的申报书直接提取，未修改原图。', image: 'assets/prototype-overview.jpeg' }));
  document.querySelector('.dialog-close').addEventListener('click', () => $('source-dialog').close());
  $('source-dialog').addEventListener('click', (event) => { if (event.target === $('source-dialog')) { const rect = event.target.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close(); } });
  $('source-dialog').addEventListener('close', () => { if (resumeOnClose) play(true); resumeOnClose = false; returnFocus?.focus({ preventScroll: true }); });
  document.addEventListener('fullscreenchange', () => { if (nativeFullscreen && !document.fullscreenElement) { nativeFullscreen = false; setRecording(false); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) play(false); });
  document.addEventListener('keydown', (event) => {
    if ($('source-dialog').open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    const rect = $('theater').getBoundingClientRect();
    if (!state.recording && !(rect.top < innerHeight * .6 && rect.bottom > innerHeight * .4)) return;
    if (event.code === 'Space' && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'A') { event.preventDefault(); play(!state.playing); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); jump(state.stage - 1); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); jump(state.stage + 1); }
    else if (event.key.toLowerCase() === 'f') { event.preventDefault(); setRecording(!state.recording); }
    else if (event.key === 'Escape' && state.recording) setRecording(false);
  });

  function frame(now) {
    if (state.playing) {
      state.time = Math.min(240, state.time + (now - lastTime) / 1000);
      update();
      if (state.time >= 240) play(false);
    }
    lastTime = now;
    requestAnimationFrame(frame);
  }
  update();
  requestAnimationFrame(frame);
})();
