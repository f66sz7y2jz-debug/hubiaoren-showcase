(() => {
  'use strict';
  const mount = document.getElementById('scenario-sections');
  const cite = (id, label) => `<button class="inline-source" data-open-source="${id}">${label} <span aria-hidden="true">↗</span></button>`;
  mount.innerHTML = `
  <section id="cases" class="case-index section-wrap">
    <div class="section-heading"><div><p class="eyebrow">THREE BUSINESS DECISIONS</p><h2>从企业的一句话，<br>走到可以办理的下一步。</h2></div><p>两段新增情境，延伸注册与侵权问题；<br>一段既有记录，回看许可材料的变化。</p></div>
    <div class="case-directory">
      <a class="directory-card" href="#coffee"><span class="directory-no">01</span><span class="directory-type">商标使用与侵权 · 新加坡</span><h3>这批 G7 咖啡，<br>可以进口销售吗？</h3><p>从中国真实案例切片，识别跨法域后需要重做的判断。</p><span class="directory-bottom">判例改编 · 可切换证据条件 <b>↗</b></span></a>
      <a class="directory-card" href="#wine"><span class="directory-no">02</span><span class="directory-type">商标注册与布局 · 菲律宾</span><h3>“红高粱”出海，<br>第一步该怎么走？</h3><p>从一项业务计划，形成申请路径、材料清单与使用安排。</p><span class="directory-bottom">企业情境设定 · 可生成清单 <b>↗</b></span></a>
      <a class="directory-card" href="#demo"><span class="directory-no">03</span><span class="directory-type">品牌许可与管理 · 菲律宾</span><h3>协议补签了，<br>新订单就能推进吗？</h3><p>沿用晴屿项目原始材料，对照补充前后判断与未决事项。</p><span class="directory-bottom">合成案例 · 4 分钟记录回放 <b>↗</b></span></a>
    </div>
    <div class="guide-note"><span>讲解建议</span><p>按“侵权争议 → 注册布局 → 许可管理”展开完整讲解；时间有限时，可任选一个情境深入演示。新增情境的证据切换和申请清单均为编辑讲解。</p></div>
  </section>

  <nav class="case-jumpbar" aria-label="案例快速切换"><a href="#cases">案例目录</a><a href="#coffee">01 咖啡进口</a><a href="#wine">02 红高粱注册</a><a href="#demo">03 晴屿许可</a></nav>
  <section id="coffee" class="case-chapter coffee-section">
    <div class="section-wrap">
      <div class="case-masthead"><span>CASE FILE 01</span><span>商标使用及侵权情景</span><span class="origin-badge">真实判例切片 · 跨法域改编</span></div>
      <div class="case-opening"><div><p class="eyebrow">PHILIPPINES → SINGAPORE</p><h2>同一包咖啡，<br>跨境后就侵权了吗？</h2><p class="opening-description">691.2 千克 G7 三合一速溶咖啡，来自关联集团的菲律宾生产机构，包装完好。B 公司进口到新加坡销售。题干未说明 B 是否获得 A 的单独进口授权。</p><div class="business-question"><span>企业的问题</span><p>“这批货会侵犯 A 公司的商标专用权吗？<br>后续采购前，我们到底要补查什么？”</p></div><a class="scenario-cta" href="#coffee-lab">切换证据，查看判断 <span>↘</span></a></div><figure class="case-illustration"><img src="assets/coffee-route.svg" alt="咖啡货物从菲律宾运往新加坡的示意插画"><figcaption>插画为情境示意，不代表实际涉案包装。</figcaption></figure></div>
      <div class="fact-ribbon"><div><small>行为时间</small><strong>2021 年 1 月</strong></div><div><small>进口数量</small><strong>691.2 千克</strong></div><div><small>权利与销售地</small><strong>新加坡</strong></div><div><small>待核的关键</small><strong>A 是否同意投放市场</strong></div></div>
      <p class="provenance-line">A、B、菲律宾生产地、新加坡注册及销售地沿用用户改编题设；“后续采购”与对话是展示用叙事补充。下述分析不代表真实企业交易已被查证。</p>

      <div class="case-split">
        <div class="case-text"><p class="eyebrow">01 / READ THE BUSINESS FILE</p><h3>先把“同一个集团”，<br>拆成不同的法律问题。</h3><p>题设中的 A 是我国某公司，也是“中原”“G7”商标在新加坡的注册权利人。生产商属于 A 的关联集团，B 则通过一般贸易进口并销售这些咖啡。</p><p>这些事实告诉我们货物从哪里来，却还没有完整回答：这批货是否已经由 A，或者经 A 明示或默示同意，投放了市场？A 的同意针对哪个商标、哪批货物、哪个交易环节？</p><p class="case-keyline">“真品来源”“首次投放市场”“权利人同意”需要分别核对。</p></div>
        <div class="relationship-sheet"><div class="relationship-row"><span class="actor-token">A</span><div><strong>新加坡注册权利人</strong><p>核对注册证明、指定商品、权利状态和同意行为。</p></div></div><div class="relationship-connector">集团关联 ≠ 自动证明对该批次投放的同意</div><div class="relationship-row"><span class="actor-token">厂</span><div><strong>关联集团的菲律宾生产机构</strong><p>核对生产与销售授权、批次、首次销售和付款记录。</p></div></div><div class="relationship-connector">采购与流转链条需要能够对应到同一批货</div><div class="relationship-row"><span class="actor-token">B</span><div><strong>新加坡进口与销售方</strong><p>保留采购、报关、运输、包装及销售宣传资料。</p></div></div></div>
      </div>

      <div class="comparison-block"><div class="subsection-heading"><div><p class="eyebrow">02 / CHANGE THE JURISDICTION</p><h3>案例可以借鉴，法域不能省略。</h3></div>${cite('cncase','回看用户提供的原案')}</div><div class="comparison-scroll"><table class="case-comparison"><caption class="sr-only">中国原案与新加坡改编情境的差异</caption><thead><tr><th scope="col">核对事项</th><th scope="col">用户提供的中国典型案例</th><th scope="col">本页新加坡改编情境</th></tr></thead><tbody><tr><th scope="row">主体与生产地</th><td>越南中原投资公司；越南北江分公司生产</td><td>我国某公司 A；关联集团菲律宾机构生产</td></tr><tr><th scope="row">货物流向</th><td>越南 → 中国，向凭祥友谊关海关申报</td><td>菲律宾 → 新加坡，在新加坡销售</td></tr><tr><th scope="row">材料中的关键事实</th><td>特定时点越南市场合法流通；被告充分举证合法购入来源；不致混淆误认</td><td>包装完好、与菲律宾市场商品一致；A 对该批次投放市场的同意尚未明确</td></tr><tr><th scope="row">结论的来源</th><td>原案法院驳回商标权人的诉讼请求</td><td>按新加坡第 29 条等规则重新核查，不能直接搬用原案结果</td></tr></tbody></table></div><p class="provenance-line">原案案号：（2021）桂14民初58号。此处依据用户提供的广西高院典型案例摘要，不将摘要当作判决全文，也不补造原案裁判日期。</p></div>

      <div class="rule-strip"><div><span class="rule-number">29(1)</span><h4>先看权利用尽</h4><p>商品已由权利人或经其明示、默示同意投放任何市场，原则上可适用权利用尽。缺少单独进口授权，并非当然侵权。</p>${cite('sg29','核对新加坡法条')}</div><div><span class="rule-number">EVIDENCE</span><h4>“同意”需要证据</h4><p>关联关系、合法采购、包装完好，各有证明作用；都不能单独替代对权利人同意投放市场的核查。</p>${cite('sgsamsonite','参考新加坡法院说理')}</div><div><span class="rule-number">29(2)</span><h4>例外有两个累积条件</h4><p>上市后商品状态改变或受损，且商标使用以不公平方式淡化其显著性，才涉及本款例外。不能把两项改成“任一即可”。</p>${cite('sg29','查看例外的条件')}</div></div>

      <div id="coffee-lab" class="evidence-lab"><div class="subsection-heading"><div><p class="eyebrow">03 / FOLLOW THE EVIDENCE</p><h3>补进哪一项证据，判断会改变？</h3></div><span class="simulation-badge">模拟补证 · 非真实新增材料</span></div><p class="lab-intro">默认保留题设中的未知状态。切换选项，只演示事实条件改变后的法律分析，不表示网页已经取得这些证据。</p><div class="lab-grid"><form id="coffee-form" class="evidence-controls"><label for="coffee-consent"><span>01 / A 对首次投放市场的同意</span><select id="coffee-consent" name="consent"><option value="unknown">尚未证明（题设初始状态）</option><option value="yes">假设该批货已由 A 或经 A 同意投放市场</option><option value="no">假设查明未经 A 同意投放</option></select></label><label for="coffee-condition"><span>02 / 上市后商品状态</span><select id="coffee-condition" name="condition"><option value="unknown">包装完好，但商品内容及状态仍待核</option><option value="same">假设已确认未改变、未受损</option><option value="changed">假设已确认改变或受损</option></select></label><label for="coffee-dilution"><span>03 / 不公平淡化商标显著性</span><select id="coffee-dilution" name="dilution"><option value="unknown">现有材料未能确认</option><option value="no">假设经核查不成立</option><option value="yes">假设经核查成立</option></select></label><button class="quiet-button" type="reset">恢复题设条件 ↺</button></form><div id="coffee-result" class="conditional-result" aria-live="polite"></div></div><div class="lab-footnote">本模块只展示第 29 条抗辩的核查逻辑；若不满足其前提，仍须审查第 27 条侵权要件及其他可能抗辩。食品进口监管、标签与税关要求另行核查。</div></div>

      <div class="action-brief"><div><p class="eyebrow">04 / FROM ANALYSIS TO ACTION</p><h3>给业务部门的答复，<br>带上下一步的材料目标。</h3><p>现阶段不能仅凭“同集团生产、包装完好”确定不侵权，也不能因为尚未补证就反过来直接认定侵权。</p></div><ol><li><strong>确认权利与商品</strong><span>取得 A 在新加坡的注册信息，并对应咖啡商品及行为时点。</span></li><li><strong>补齐同意与批次链条</strong><span>由采购、法务协同追索合同、发票、付款、授权或确认材料，把首次销售与这一批货对应起来。</span></li><li><strong>核对状态与宣传</strong><span>保留包装和内容状态资料，检查是否有改装、受损或冒称官方授权等额外事实。</span></li><li><strong>根据证据决定回应</strong><span>证据支持权利用尽时据此回应；关键条件未明时继续补证、协商或评估后续交易。</span></li></ol></div>
    </div>
  </section>

  <section id="wine" class="case-chapter wine-section">
    <div class="section-wrap">
      <div class="case-masthead"><span>CASE FILE 02</span><span>商标注册与市场进入</span><span class="origin-badge">企业情境设定 · 办理路径讲解</span></div>
      <div class="case-opening"><div><p class="eyebrow">CHINA → PHILIPPINES</p><h2>把“红高粱”带出海，<br>先让品牌有一个落点。</h2><p class="opening-description">一家在中国销售“红高粱”酒的企业，面对市场收缩，准备拓展菲律宾业务。产品还没有确定最终的当地名称与包装，中国基础商标、当地在先权利和商品细项也需要先查清。</p><div class="business-question"><span>企业的问题</span><p>“我们在中国已经在卖了，<br>现在怎样在菲律宾注册商标？”</p></div><a class="scenario-cta" href="#wine-planner">选择条件，生成办理清单 <span>↘</span></a></div><figure class="case-illustration"><img src="assets/wine-route.svg" alt="酒瓶和高粱穗从中国走向菲律宾的示意插画"><figcaption>企业名称、包装与筹备细节为展示设定；未指向真实酒企。</figcaption></figure></div>
      <div class="fact-ribbon"><div><small>已知业务</small><strong>中国市场销售酒类</strong></div><div><small>拟用品牌</small><strong>“红高粱”</strong></div><div><small>目标市场</small><strong>菲律宾</strong></div><div><small>尚未确认</small><strong>商标可用性与申请条件</strong></div></div>
      <p class="provenance-line">“在中国卖酒、拟拓展菲律宾”为用户给定情境；其余筹备细节用于展开讲解。没有虚构申请号、检索结果、商标注册证或已完成的使用证据。</p>

      <div class="case-split registration-brief"><div class="case-text"><p class="eyebrow">01 / BUILD THE BRAND BRIEF</p><h3>先问清准备卖什么，<br>再决定保护什么。</h3><p>中国市场已经销售，不等于中国商标已经注册；即使有中国注册，也不能直接替代菲律宾保护。企业应先把主体、标样、商品和经营计划写成一份申请简报。</p><p>“红高粱”可能涉及原料等描述含义；其整体显著性、在先近似标志及其他权利要结合实际标样、指定商品和当地审查判断。本页没有完成在先商标检索，不能承诺该名称可注册。</p>${cite('phclasses','核对分类与可注册性')}</div><div class="brief-grid"><article><span>WHO</span><h4>谁来持有商标</h4><p>企业完整名称、地址、主体资格及权利归属；先和经销商明确注册由谁负责。</p></article><article><span>WHAT</span><h4>申请哪个标志</h4><p>中文文字、拟用拼音／英文、图形或组合标志，逐一确认与实际包装的关系。</p></article><article><span>GOODS</span><h4>酒的具体种类</h4><p>白酒、葡萄酒等与啤酒不能笼统填成同一类；服务项目按真实业务选择。</p></article><article><span>WHEN</span><h4>何时进入市场</h4><p>试销、经销与使用安排应同步规划，申请提交后仍要留存实际使用资料。</p></article></div></div>

      <div class="search-route"><div class="subsection-heading"><div><p class="eyebrow">02 / SEARCH BEFORE FILING</p><h3>检索名称，也检索它的近邻。</h3></div>${cite('phapply','官方申请与检索入口')}</div><div class="search-chips"><span>红高粱</span><span>拼音与拟用英文</span><span>近似读音与含义</span><span>图形与组合标样</span><span>相关商品／服务</span><span>申请中与已注册标志</span></div><p>通过 IPOPHL 提供的商标检索入口及 WIPO 数据工具检索，记录检索日期、标志、商品和状态。数据库没有显示完全相同的名称，也不能等同于没有近似权利或其他驳回事由；发现接近标志时，应比较整体印象及商品关联。</p></div>

      <div id="wine-planner" class="registration-planner"><div class="subsection-heading"><div><p class="eyebrow">03 / CHOOSE YOUR FILING ROUTE</p><h3>把企业条件，变成办理清单。</h3></div><span class="simulation-badge">交互式讲解 · 不提交真实申请</span></div><div class="planner-grid"><form id="wine-form" class="evidence-controls"><label for="wine-goods"><span>准备经营的商品</span><select id="wine-goods"><option value="unknown">酒类细项尚未确认</option><option value="spirits">白酒／葡萄酒／其他非啤酒酒精饮料</option><option value="beer">啤酒</option></select></label><label for="wine-base"><span>中国基础商标状态</span><select id="wine-base"><option value="unknown">尚未查明是否申请或注册</option><option value="none">没有中国基础申请／注册</option><option value="yes">有中国基础申请／注册（仍需核对）</option></select></label><label for="wine-market"><span>本轮布局范围</span><select id="wine-market"><option value="single">主要考虑菲律宾</option><option value="multiple">同时考虑多个马德里成员市场</option></select></label><label class="checkbox-control"><input id="wine-retail" type="checkbox"><span>另有需要保护的零售／批发等服务业务</span></label><button class="quiet-button" type="reset">恢复待核状态 ↺</button></form><div class="planner-result" id="wine-result" aria-live="polite"></div></div><div class="planner-actions"><p>路径提示基于所选条件；名称与在先权利仍待核查。两种途径均不能保证获准注册。</p><button class="button primary" id="download-wine">导出当前办理清单 <span aria-hidden="true">↓</span></button></div></div>

      <div class="filing-options"><article><span class="feature-no">ROUTE A / 直接申请</span><h3>向 IPOPHL 申请</h3><p>可直接寻求菲律宾保护，不以已有中国基础申请或注册为前提。不在菲律宾设有住所或真实有效商业存在的申请人，需按适用要求指定菲律宾居民代理或代表，准备申请人、标样和商品／服务资料。</p><ul><li>先确认申请主体与标样，再拟定规范商品／服务清单。</li><li>以菲律宾要求处理审查意见、异议及后续维护。</li><li>仅布局菲律宾时可优先比较这一路径的办理成本与安排。</li></ul>${cite('phapply','查看直接申请依据')}</article><article><span class="feature-no">ROUTE B / 马德里途径</span><h3>通过原属局指定菲律宾</h3><p>先核对原属局联系与基础申请／注册条件。符合条件的中国申请人可通过中国原属局提交国际申请，指定菲律宾；国际注册不等于自动获得各指定国批准。</p><ul><li>国际申请标志应与基础标志对应，商品／服务范围不得超出基础范围。</li><li>WIPO 处理国际程序，菲律宾仍按本国规则审查。</li><li>前五年与基础商标存在依赖关系；答复当地驳回及使用维护另行安排。</li></ul>${cite('phmadrid','查看马德里路径依据')}</article></div>

      <div class="filing-process"><div class="subsection-heading"><div><p class="eyebrow">04 / KEEP THE PROCESS MOVING</p><h3>提交之后，项目还要继续往前走。</h3></div>${cite('phapply','回看官方办理流程')}</div><ol class="process-steps"><li><span>01</span><h4>申请准备</h4><p>完成标样、主体、商品、检索与代理安排。</p></li><li><span>02</span><h4>提交与缴费</h4><p>按选定路径提交，留存申请号、提交日及缴费记录。</p></li><li><span>03</span><h4>审查与答复</h4><p>跟踪形式与实质审查，按通知期限处理审查意见或驳回理由。</p></li><li><span>04</span><h4>公告与异议</h4><p>进入公告及第三人异议程序；出现异议须分别处理。</p></li><li><span>05</span><h4>注册与维护</h4><p>留存注册信息，安排使用证明、权利监测与续展。</p></li></ol><p class="provenance-line">这是主要业务节点；直接申请与马德里指定的程序、通知主体和时限存在差别。取得申请号不等于获准注册，商标注册也不替代酒类进口、销售或标签许可。</p></div>

      <div class="maintenance-panel"><div class="maintenance-intro"><p class="eyebrow">05 / AFTER THE APPLICATION</p><h3>使用证据，<br>从第一笔业务开始留。</h3><p>菲律宾要求实际使用声明（DAU）及相应证据。企业应在市场进入计划中安排真实使用与资料留存；仅在中国销售的记录，不能直接充当菲律宾实际使用证明。</p>${cite('phdau','核对 DAU 与续展节点')}</div><div><div class="maintenance-table"><div><span>首次 DAU</span><strong>直接申请：申请日起 3 年内</strong><small>马德里：国际注册日／后期指定日起 3 年内。</small></div><div><span>注册后</span><strong>直接注册：注册 5 周年起 1 年内</strong><small>马德里：菲律宾准予保护声明 5 周年起 1 年内。</small></div><div><span>续展时</span><strong>续展之日起 1 年内</strong><small>商标通常每 10 年续展；续展与 DAU 是两项事务。</small></div><div><span>续展中期</span><strong>续展满 5 年后的 1 年内</strong><small>把后续使用证明节点继续写入品牌档案。</small></div></div><p class="maintenance-note">可保存菲律宾销售发票、实际商品标签、当地销售渠道及其他规则认可的使用资料。不能把未发生的销售或样品图制作成使用证明。可否延期、可接受的未使用理由及具体起算，应在实际办理时依据对应程序核对。</p></div></div>

      <div class="action-brief wine-closing"><div><p class="eyebrow">THE HANDOFF</p><h3>给企业的第一份交付，<br>是一张能推进的路线图。</h3><p>注册之前，不把名称可用性说满；申请之后，不把使用维护遗漏。</p></div><ol><li><strong>业务与品牌负责人</strong><span>明确酒的具体类型、拟用标志、包装和市场进入计划。</span></li><li><strong>法务与商标代理</strong><span>完成检索与可注册性分析，选择申请路径、商品范围与主体。</span></li><li><strong>菲律宾渠道负责人</strong><span>配合收集真实当地使用材料，确认进口销售及标签要求。</span></li><li><strong>项目管理人</strong><span>保存官方通知与证据，登记答复、DAU、异议和续展节点。</span></li></ol></div>
    </div>
  </section>`;

  const $ = (id) => document.getElementById(id);
  const coffee = $('coffee-form');
  function renderCoffee() {
    const consent = $('coffee-consent').value;
    const condition = $('coffee-condition').value;
    const dilution = $('coffee-dilution').value;
    let title, body, tone = 'pending';
    if (condition === 'changed' && dilution === 'yes' && consent === 'unknown') {
      title = '同意状态未明，两个例外条件已假设成立。';
      body = '按所选条件，即使后续证实 A 同意该批货投放市场，第 29(2) 条的累积例外仍会限制第 29(1) 条抗辩。同意状态继续保留为待核；最终责任仍须结合侵权要件完整审查。';
      tone = 'attention';
    } else if (consent === 'unknown') {
      title = '先保留未知，不能直接下“不侵权”结论。';
      body = '现有材料没有确认 A 对该批次首次投放市场的同意。关联集团生产和包装完好不足以单独补齐这一前提；材料不足也不等于已经证明侵权。';
    } else if (consent === 'no') {
      title = '第 29(1) 条的这项抗辩前提不成立。';
      body = '在“未经 A 同意投放”的演示假设下，不能依此主张权利用尽。仍须结合商标使用、商品范围等事实审查第 27 条及其他可能抗辩，不能把此状态直接当作侵权判决。';
      tone = 'attention';
    } else if (condition === 'changed' && dilution === 'yes') {
      title = '两个条件同时成立，进入第 29(2) 条例外。';
      body = '即使首次投放得到 A 同意，在所选假设下，上市后商品改变或受损，并且商标使用以不公平方式淡化显著性，因此不能继续依赖第 29(1) 条的通常抗辩。最终责任仍须完整审查。';
      tone = 'attention';
    } else if (condition === 'same' || dilution === 'no') {
      title = '权利用尽的抗辩依据得到支持。';
      body = '在同意投放已证明、且第 29(2) 条两项累积条件不同时成立的演示假设下，原则上不因 B 未取得单独进口授权就构成涉案商标侵权；其他独立使用行为及监管要求仍应另查。';
      tone = 'supported';
    } else {
      title = '同意前提已补齐，例外状态仍待核。';
      const remaining = condition === 'changed' ? '商品改变或受损已在假设中确认，不公平淡化是否成立仍待核' : dilution === 'yes' ? '不公平淡化已在假设中确认，上市后商品是否改变或受损仍待核' : '上市后商品是否改变或受损，以及不公平淡化是否成立，都仍待核';
      body = `第 29(1) 条的基础得到支持；${remaining}。第 29(2) 条要求两项累积条件，不能预先断言例外成立。`;
    }
    const sameAsInitial = consent === 'unknown' && condition === 'unknown' && dilution === 'unknown';
    const trace = [
      ['首次投放同意', { unknown: '未能确认', yes: '假设已证明', no: '假设已否定' }[consent]],
      ['商品改变／受损', { unknown: '未能确认', same: '假设不存在', changed: '假设存在' }[condition]],
      ['不公平淡化', { unknown: '未能确认', no: '假设不成立', yes: '假设成立' }[dilution]]
    ];
    $('coffee-result').className = `conditional-result ${tone}`;
    $('coffee-result').innerHTML = `<span class="result-kicker">${sameAsInitial ? '题设初始状态' : '按所选假设更新'} / 讲解摘要</span><h4>${title}</h4><p>${body}</p><div class="condition-trace">${trace.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>${cite('sg29','查看判断所依据的法条')}`;
  }
  coffee.addEventListener('change', renderCoffee);
  coffee.addEventListener('reset', () => setTimeout(renderCoffee, 0));

  let currentPlan = null;
  function renderWine() {
    const goods = $('wine-goods').value;
    const base = $('wine-base').value;
    const market = $('wine-market').value;
    const retail = $('wine-retail').checked;
    const category = goods === 'unknown' ? '商品细项待核：先确认酒的种类，再拟定分类清单。' : goods === 'beer' ? '第 32 类方向：啤酒。商品名称应按实际产品和当地可接受表述拟定。' : '第 33 类方向：含酒精饮料（啤酒除外），如白酒或葡萄酒。';
    let route, explanation;
    if (base === 'none') {
      route = '可先评估菲律宾直接申请';
      explanation = '直接申请不以中国基础商标为前提。若希望采用马德里途径，需要先满足基础申请／注册及原属局联系等条件。';
    } else if (base === 'unknown') {
      route = '先核对基础权利，同时比较直接申请';
      explanation = '中国市场已有销售并不证明已经申请或注册商标。先查明主体及基础权利；菲律宾直接申请可以独立评估。';
    } else if (market === 'multiple') {
      route = '把马德里途径纳入多国布局比较';
      explanation = '在基础标志、商品范围与原属局联系等资格核实后，可考虑指定菲律宾及其他成员。各国分别审查；同时比较直接申请及后续维护成本。';
    } else {
      route = '直接申请与马德里指定均可比较';
      explanation = '已有基础申请／注册只是条件之一。仅布局菲律宾时，结合申请内容、当地代理、答复及长期维护安排选择，不预设某条路径必然更便宜或更快。';
    }
    const service = retail ? '服务项目：另行核对实际零售／批发等业务是否需要第 35 类及对应服务表述；其不能替代商品类别。' : '服务项目：销售自有商品不自动等于必须同时申请第 35 类；按实际服务及保护目标另作评估。';
    const tasks = [
      '确认申请主体、中文标样及拟用拼音／英文／图形；不默认各个变体共享同一保护范围。',
      goods === 'unknown' ? '由业务确认酒的种类和商品细项，形成分类清单。' : '按选定商品方向拟定可接受的具体商品清单，并完成在先检索与显著性分析。',
      base === 'yes' ? '核对中国基础申请／注册的申请人、标志、商品范围及状态，评估马德里资格和依赖风险。' : '查明中国基础权利状态；并准备菲律宾直接申请的主体及代理资料。',
      '确认菲律宾代理／代表安排，按所选路径准备申请与缴费，不将未提交的材料当作已受理。',
      '制定菲律宾实际使用及留证计划，登记审查通知、DAU 与续展节点。'
    ];
    currentPlan = { route, explanation, category, service, tasks };
    $('wine-result').innerHTML = `<span class="result-kicker">按企业条件形成 / 讲解清单</span><h4>${route}</h4><p>${explanation}</p><div class="category-note"><strong>拟定类别</strong><p>${category}</p><p>${service}</p></div><ol class="generated-tasks">${tasks.map(t => `<li>${t}</li>`).join('')}</ol><div class="result-sources">${cite('phclasses','分类依据')}${cite('phmadrid','路径条件')}</div>`;
  }
  $('wine-form').addEventListener('change', renderWine);
  $('wine-form').addEventListener('reset', () => setTimeout(renderWine, 0));
  $('download-wine').addEventListener('click', () => {
    const p = currentPlan;
    const refs = window.HBR_DATA.sources.filter(s => s.group === 'wine').map(s => `- ${s.title}：${s.url}`).join('\n');
    const content = `# 护标人 · “红高粱”菲律宾商标申请准备清单\n\n企业情境设定 / 编辑讲解\n法律资料核对日期：2026-11-01\n\n本清单按网页中选定条件生成，不表示已完成在先检索、提交申请或取得注册。\n\n## 所选条件\n\n- 商品：${$('wine-goods').selectedOptions[0].text}\n- 中国基础商标：${$('wine-base').selectedOptions[0].text}\n- 市场：${$('wine-market').selectedOptions[0].text}\n- 另有服务业务：${$('wine-retail').checked ? '是，范围待核' : '未选择'}\n\n## 申请路径\n\n${p.route}\n\n${p.explanation}\n\n## 类别与项目\n\n${p.category}\n\n${p.service}\n\n## 下一步\n\n${p.tasks.map((t,i)=>`${i+1}. ${t}`).join('\n')}\n\n## 使用维护\n\n- 首次DAU：直接申请自申请日起3年内；马德里自国际注册日／后期指定日起3年内。\n- 注册5周年DAU：直接注册自注册5周年起1年内；马德里自菲律宾准予保护声明5周年起1年内。\n- 续展DAU：续展之日起1年内。\n- 续展中期DAU：续展5周年起1年内。\n- 商标通常每10年续展，续展与DAU分别管理。具体期限、可否延期及未使用声明条件须按适用程序核对。\n\n## 资料依据\n\n${refs}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/markdown;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = '护标人_红高粱菲律宾商标准备清单.md';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  renderCoffee();
  renderWine();
})();
