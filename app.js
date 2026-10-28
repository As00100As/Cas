let progress = {};
let current = { topic:null, level:0, lesson:0, view:'home' };
let quizState = null;
let challengeState = { hint1:false, hint2:false, solution:false };
let projectState = {};

function defaultProgressFor(topicId){
  const t = TOPICS.find(x=>x.id===topicId);
  const completed = {}; const quizPassed = {};
  t.levels.forEach((lv,i)=>{ completed[i]=[]; quizPassed[i]=false; });
  return { unlockedLevel:0, completed, quizPassed };
}

async function loadProgress(){
  try{
    const r = await window.storage.get('kodestan-v2-progress');
    if(r && r.value) progress = JSON.parse(r.value);
  }catch(e){ progress = {}; }
  TOPICS.forEach(t=>{ if(!progress[t.id]) progress[t.id] = defaultProgressFor(t.id); });
  render();
}
async function saveProgress(){
  try{ await window.storage.set('kodestan-v2-progress', JSON.stringify(progress)); }catch(e){}
}

function isLevelUnlocked(topicId, levelIdx){ return levelIdx <= progress[topicId].unlockedLevel; }
function isLessonDone(topicId, levelIdx, lessonIdx){ return progress[topicId].completed[levelIdx].includes(lessonIdx); }
function markLessonDone(topicId, levelIdx, lessonIdx){
  const arr = progress[topicId].completed[levelIdx];
  if(!arr.includes(lessonIdx)) arr.push(lessonIdx);
  saveProgress();
}
function topicTotalUnits(t){ return t.levels.reduce((s,lv)=>s+lv.lessons.length,0)+t.levels.length; }
function topicDoneUnits(t){
  const p = progress[t.id]; let done=0;
  t.levels.forEach((lv,i)=>{ done += p.completed[i].length; if(p.quizPassed[i]) done+=1; });
  return done;
}
function topicPct(t){ return Math.round(100*topicDoneUnits(t)/topicTotalUnits(t)); }
function overallPct(){
  let done=0,total=0;
  TOPICS.forEach(t=>{ done+=topicDoneUnits(t); total+=topicTotalUnits(t); });
  return total? Math.round(100*done/total):0;
}
function faNum(n){ return String(n).replace(/[0-9]/g, d=>"۰۱۲۳۴۵۶۷۸۹"[d]); }

/* ================= NAV ================= */
function renderTopicNav(){
  const nav = document.getElementById('topicNav');
  nav.innerHTML = TOPICS.map(t=>`
    <button class="pill ${current.topic===t.id?'active':''}" onclick="selectTopic('${t.id}')">
      <span>${t.icon}</span><span>${t.name}</span><span class="badge">${faNum(topicPct(t))}٪</span>
    </button>`).join('');

  const levelNav = document.getElementById('levelNav');
  if(!current.topic){ levelNav.innerHTML=''; levelNav.style.display='none'; return; }
  levelNav.style.display='flex';
  const t = TOPICS.find(x=>x.id===current.topic);
  levelNav.innerHTML = t.levels.map((lv,i)=>{
    const unlocked = isLevelUnlocked(t.id,i);
    const active = current.level===i && (current.view==='lesson'||current.view==='quiz');
    const passed = progress[t.id].quizPassed[i];
    return `<button class="pill ${active?'active':''} ${unlocked?'':'locked'}" ${unlocked?`onclick="openLevel('${t.id}',${i})"`:''}>
      <span>${unlocked ? (passed?'✓':(i+1)) : '🔒'}</span><span>${LEVEL_NAMES[i]}</span>
    </button>`;
  }).join('');
  if(t.project || t.projects){
    levelNav.innerHTML += `<button class="pill ${current.view==='project'?'active':''}" onclick="openProject('${t.id}')"><span>🚀</span><span>${t.projects?'پروژه‌ها':'پروژه'}</span></button>`;
  }

  document.getElementById('overallPct').textContent = faNum(overallPct())+'٪';
  document.getElementById('overallBar').style.width = overallPct()+'%';
}
function selectTopic(id){
  current = { topic:id, level:0, lesson:0, view:'home' };
  render();
  window.scrollTo(0,0);
}
function openLevel(topicId, levelIdx){
  current = { topic:topicId, level:levelIdx, lesson:0, view:'lesson' };
  render();
  window.scrollTo(0,0);
}
function openLevelChallenge(topicId, levelIdx){
  current = { topic:topicId, level:levelIdx, lesson:0, view:'challenge' };
  challengeState = { hint1:false, hint2:false, solution:false };
  render();
  window.scrollTo(0,0);
}
function openProject(topicId){
  current = { topic:topicId, level:current.topic===topicId?current.level:0, lesson:0, view:'project' };
  projectState = {};
  render();
  window.scrollTo(0,0);
}
function goHome(){
  current = { topic:null, level:0, lesson:0, view:'home' };
  render();
  window.scrollTo(0,0);
}

/* ================= RENDER ================= */
function render(){
  renderTopicNav();
  const content = document.getElementById('content');
  if(current.view==='home'){ content.innerHTML = renderHome(); return; }
  const t = TOPICS.find(x=>x.id===current.topic);
  if(current.view==='lesson'){ content.innerHTML = renderLesson(t); wirePlayground(t); }
  else if(current.view==='quiz'){ content.innerHTML = renderQuiz(t); }
  else if(current.view==='challenge'){ content.innerHTML = renderChallenge(t); }
  else if(current.view==='project'){ content.innerHTML = renderProjectPage(t); }
}

function renderHome(){
  if(current.topic){
    const t = TOPICS.find(x=>x.id===current.topic);
    const chips = (t.covers||[]).map(c=>`<span class="pill" style="cursor:default;">${c}</span>`).join('');
    return `<div class="hero">
      <h1>${t.icon} ${t.name}</h1>
      <p>${t.desc}</p>
    </div>
    <div class="card">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:10px;color:var(--muted);">این مرحله شامل:</div>
      <div class="pill-row" style="margin-bottom:20px;">${chips}</div>
      <div style="text-align:center;">
        <p style="margin:0 0 16px;">برای شروع، یکی از مراحل بالا را انتخاب کن.</p>
        <button class="btn btn-p" onclick="openLevel('${t.id}',${progress[t.id].unlockedLevel})">شروع / ادامهٔ یادگیری ▶</button>
      </div>
    </div>`;
  }
  return `
  <div class="hero">
    <h1><span class="hero-num">${faNum(TOPICS.length)}</span> مرحله تا فول‌استک واقعی</h1>
    <p>از آماده‌سازی ابزار تا HTML، CSS، JavaScript، طراحی UI/UX، Git، TypeScript، React، Three.js، Node.js، Database، امنیت، پرداخت، موبایل و هوش مصنوعی — با چالش، Hint مرحله‌ای، پروژهٔ واقعی و آزمون پس از هر مرحله. جواب پروژه‌ها از اول داده نمی‌شود؛ فقط راهنمایی.</p>
  </div>
  <div class="home-grid">
    ${TOPICS.map(t=>`
      <button class="home-card" onclick="selectTopic('${t.id}')">
        <span class="icon">${t.icon}</span>
        <div class="name">${t.name}</div>
        <div class="desc">${t.desc}</div>
        <div class="bar"><span style="width:${topicPct(t)}%"></span></div>
      </button>`).join('')}
  </div>`;
}

function renderLesson(t){
  const lv = t.levels[current.level];
  const lesson = lv.lessons[current.lesson];
  const done = isLessonDone(t.id, current.level, current.lesson);
  const isLast = current.lesson === lv.lessons.length-1;
  const quizPassed = progress[t.id].quizPassed[current.level];

  let pg = '';
  if(t.kind==='web' && lesson.code){
    pg = `
    <div class="pg" id="pgWrap">
      <div class="pg-tabs">
        <button class="pg-tab active" data-tab="html" onclick="switchPgTab('html')">HTML</button>
        <button class="pg-tab" data-tab="css" onclick="switchPgTab('css')">CSS</button>
        <button class="pg-tab" data-tab="js" onclick="switchPgTab('js')">JS</button>
      </div>
      <div class="pg-grid">
        <div class="pg-editor">
          <textarea id="pgHtml" spellcheck="false">${escapeHtml(lesson.code.html||'')}</textarea>
          <textarea id="pgCss" spellcheck="false" style="display:none">${escapeHtml(lesson.code.css||'')}</textarea>
          <textarea id="pgJs" spellcheck="false" style="display:none">${escapeHtml(lesson.code.js||'')}</textarea>
        </div>
        <div class="pg-prev"><iframe id="pgFrame" sandbox="allow-scripts"></iframe></div>
      </div>
      <div class="pg-controls">
        <button class="btn btn-p" onclick="runPlayground()">▶ اجرا</button>
        <button class="btn btn-g" onclick="resetPlayground()">بازنشانی</button>
        <span class="pg-status" id="pgStatus"></span>
      </div>
    </div>`;
  } else if(t.kind==='python' || (t.kind==='theory' && lesson.py)){
    pg = `
    <div class="pg">
      <div class="pg-tabs"><div class="pg-tab active">main.py</div></div>
      <div class="pg-editor"><textarea id="pyCode" spellcheck="false" style="min-height:210px;">${escapeHtml(lesson.py||'')}</textarea></div>
      <div class="pg-out" id="pyOut">خروجی برنامه اینجا نمایش داده می‌شود.</div>
      <div class="pg-controls">
        <button class="btn btn-p" onclick="runPython()">▶ اجرا</button>
        <button class="btn btn-g" onclick="resetPython()">بازنشانی</button>
        <span class="pg-status" id="pyStatus"></span>
      </div>
    </div>`;
  } else if(t.kind==='sql' && lesson.sql!==undefined){
    pg = `
    <div class="pg">
      <div class="pg-tabs"><div class="pg-tab active">query.sql</div></div>
      <div class="pg-editor"><textarea id="sqlCode" spellcheck="false" style="min-height:230px;">${escapeHtml(lesson.sql||'')}</textarea></div>
      <div class="pg-out" id="sqlOut">نتیجهٔ کوئری اینجا نمایش داده می‌شود.</div>
      <div class="pg-controls">
        <button class="btn btn-p" onclick="runSql()">▶ اجرا</button>
        <button class="btn btn-g" onclick="resetSql()">بازنشانی</button>
        <span class="pg-status" id="sqlStatus"></span>
      </div>
    </div>`;
  }

  return `
  <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › ${LEVEL_NAMES[current.level]} › درس ${faNum(current.lesson+1)} از ${faNum(lv.lessons.length)}</div>
  <div class="card">
    <div class="lesson-top">
      <span class="tag">${t.icon} ${t.name} · ${LEVEL_NAMES[current.level]}</span>
      ${done?'<span class="done-tag">✓ تکمیل‌شده</span>':''}
    </div>
    <h1 class="lesson-title">${lesson.title}</h1>
    <div class="lesson-body">${lesson.content||''}</div>
    ${pg}
    <div class="exercise">
      <div class="et">📝 تمرین</div>
      <p>${lesson.exercise||''}</p>
    </div>
    <div class="actions">
      ${current.lesson>0?`<button class="btn btn-g" onclick="prevLesson()">◀ درس قبل</button>`:''}
      <button class="btn btn-p" onclick="completeAndNext()">${done?'ادامه':'تکمیل و ادامه'} ▶</button>
      ${isLast && lv.challenge?`<button class="btn btn-g" onclick="openLevelChallenge('${t.id}',${current.level})">چالش این سطح 🎯</button>`:''}
      ${isLast?`<button class="btn btn-o" onclick="goToQuiz()">${quizPassed?'مرور آزمون':'رفتن به آزمون'} 🎯</button>`:''}
    </div>
  </div>`;
}

function prevLesson(){ if(current.lesson>0){ current.lesson--; render(); window.scrollTo(0,0); } }
function completeAndNext(){
  markLessonDone(current.topic, current.level, current.lesson);
  const t = TOPICS.find(x=>x.id===current.topic);
  const lv = t.levels[current.level];
  if(current.lesson < lv.lessons.length-1){ current.lesson++; render(); }
  else { goToQuiz(); }
  window.scrollTo(0,0);
}
function goToQuiz(){
  current.view='quiz';
  quizState = { qIndex:0, score:0, answered:false, finished:false };
  render();
  window.scrollTo(0,0);
}

/* ---- html/css/js playground ---- */
function switchPgTab(tab){
  document.querySelectorAll('.pg-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('pgHtml').style.display = tab==='html'?'block':'none';
  document.getElementById('pgCss').style.display = tab==='css'?'block':'none';
  document.getElementById('pgJs').style.display = tab==='js'?'block':'none';
}
function runPlayground(){
  const pgHtmlEl = document.getElementById('pgHtml');
  if(!pgHtmlEl) return; // user navigated away before the deferred auto-run fired
  const html = pgHtmlEl.value;
  const css = document.getElementById('pgCss').value;
  const js = document.getElementById('pgJs').value;
  const frame = document.getElementById('pgFrame');
  frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:sans-serif;padding:14px;}${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  const s=document.getElementById('pgStatus'); if(s){ s.textContent='اجرا شد ✓'; setTimeout(()=>{ if(s) s.textContent=''; },1600); }
}
function resetPlayground(){
  const t = TOPICS.find(x=>x.id===current.topic);
  const lesson = t.levels[current.level].lessons[current.lesson];
  document.getElementById('pgHtml').value = lesson.code.html||'';
  document.getElementById('pgCss').value = lesson.code.css||'';
  document.getElementById('pgJs').value = lesson.code.js||'';
}
function wirePlayground(t){ const l=t.levels[current.level]&&t.levels[current.level].lessons[current.lesson]; if(t.kind==='web' && l && l.code) setTimeout(runPlayground,50); }

/* ---- python playground ---- */
function loadPyodideScript(){
  return new Promise((resolve,reject)=>{
    if(window.loadPyodide){ resolve(); return; }
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
    s.onload=resolve; s.onerror=()=>reject(new Error('load-fail'));
    document.head.appendChild(s);
  });
}
function indentPy(code){ return code.split('\n').map(l=>'    '+l).join('\n'); }
async function runPython(){
  const out=document.getElementById('pyOut'); const status=document.getElementById('pyStatus');
  const code=document.getElementById('pyCode').value;
  out.classList.remove('err'); out.textContent='در حال آماده‌سازی محیط پایتون...'; status.textContent='';
  try{
    if(!window.pyodideInstance){
      await loadPyodideScript();
      status.textContent='در حال بارگذاری Pyodide (اولین بار کمی طول می‌کشد)...';
      window.pyodideInstance = await loadPyodide();
    }
    const t = TOPICS.find(x=>x.id===current.topic);
    const lesson = t.levels[current.level].lessons[current.lesson];
    if(lesson.packages && lesson.packages.length){
      status.textContent='در حال بارگذاری کتابخانه‌ها ('+lesson.packages.join(', ')+')... ممکنه کمی طول بکشه';
      await window.pyodideInstance.loadPackage(lesson.packages);
    }
    status.textContent='در حال اجرا...';
    const wrapped = `import sys, io\n_buf = io.StringIO()\n_old = sys.stdout\nsys.stdout = _buf\ntry:\n${indentPy(code)}\nexcept Exception as e:\n    print("خطا:", e)\nsys.stdout = _old\n_buf.getvalue()`;
    const result = await window.pyodideInstance.runPythonAsync(wrapped);
    out.textContent = result && result.length ? result : '(بدون خروجی — از print() استفاده کنید)';
    status.textContent='اجرا شد ✓';
  }catch(err){
    out.classList.add('err');
    out.textContent='اجرای پایتون در این محیط ممکن نشد. اتصال اینترنت را بررسی کنید.\n\n'+err.message;
  }
  setTimeout(()=>{ if(status) status.textContent=''; },2200);
}
function resetPython(){
  const t = TOPICS.find(x=>x.id===current.topic);
  const lesson = t.levels[current.level].lessons[current.lesson];
  document.getElementById('pyCode').value = lesson.py||'';
  document.getElementById('pyOut').textContent = 'خروجی برنامه اینجا نمایش داده می‌شود.';
}

/* ================= QUIZ ================= */
function renderQuiz(t){
  const lv = t.levels[current.level];
  const quiz = lv.quiz;
  if(quizState.finished){
    const pct = Math.round(100*quizState.score/quiz.length);
    const passed = pct>=70;
    if(passed){
      progress[t.id].quizPassed[current.level]=true;
      if(progress[t.id].unlockedLevel<current.level+1 && current.level+1<t.levels.length) progress[t.id].unlockedLevel=current.level+1;
      saveProgress();
    }
    const hasNext = current.level+1<t.levels.length;
    return `
    <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › آزمون ${LEVEL_NAMES[current.level]}</div>
    <div class="card result">
      <div class="score ${passed?'pass':'fail'}">${faNum(pct)}٪</div>
      <div class="msg">${passed ? 'آفرین! این مرحله را با موفقیت گذراندی.'+(hasNext?' مرحلهٔ بعد باز شد 🎉':' این آخرین مرحلهٔ این دوره بود 🏁') : 'برای قبولی به حداقل ۷۰٪ نیاز داری. دوباره تلاش کن!'}</div>
      <div class="row">
        <button class="btn btn-g" onclick="retakeQuiz()">تلاش دوباره</button>
        ${passed && hasNext?`<button class="btn btn-p" onclick="openLevel('${t.id}',${current.level+1})">شروع ${LEVEL_NAMES[current.level+1]}</button>`:''}
        <button class="btn btn-g" onclick="goHome()">بازگشت به خانه</button>
      </div>
    </div>`;
  }
  const qi = quizState.qIndex; const q = quiz[qi];
  const bar = quiz.map((_,i)=>`<span class="${i<qi?'done':(i===qi?'cur':'')}"></span>`).join('');
  return `
  <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › آزمون ${LEVEL_NAMES[current.level]}</div>
  <div class="card">
    <div class="qbar">${bar}</div>
    <div class="qnum">سؤال ${faNum(qi+1)} از ${faNum(quiz.length)}</div>
    <div class="qtext">${q.q}</div>
    <div class="qopts" id="qOpts">${q.options.map((o,i)=>`<button class="qopt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
    <div class="qexplain" id="qExplain">${q.explain}</div>
    <div class="actions"><button class="btn btn-p" id="qNext" style="display:none" onclick="nextQ()">سؤال بعد ▶</button></div>
  </div>`;
}
function answerQuiz(idx){
  if(quizState.answered) return;
  quizState.answered=true;
  const t = TOPICS.find(x=>x.id===current.topic);
  const q = t.levels[current.level].quiz[quizState.qIndex];
  if(idx===q.answer) quizState.score++;
  document.querySelectorAll('#qOpts .qopt').forEach((b,i)=>{
    b.disabled=true;
    if(i===q.answer) b.classList.add('correct');
    else if(i===idx) b.classList.add('wrong');
  });
  document.getElementById('qExplain').classList.add('show');
  document.getElementById('qNext').style.display='inline-block';
}
function nextQ(){
  const t = TOPICS.find(x=>x.id===current.topic);
  const quiz = t.levels[current.level].quiz;
  if(quizState.qIndex<quiz.length-1){ quizState.qIndex++; quizState.answered=false; render(); }
  else { quizState.finished=true; render(); }
  window.scrollTo(0,0);
}
function retakeQuiz(){ quizState={qIndex:0,score:0,answered:false,finished:false}; render(); window.scrollTo(0,0); }

/* ================= CHALLENGE ================= */
function renderChallenge(t){
  const lv = t.levels[current.level];
  const c = lv.challenge;
  return `
  <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › ${LEVEL_NAMES[current.level]} › چالش</div>
  <div class="card">
    <div class="lesson-top"><span class="tag">🎯 چالش ${LEVEL_NAMES[current.level]}</span></div>
    <h1 class="lesson-title">وقتشه خودت بسازی</h1>
    <div class="lesson-body"><p>${c.task}</p></div>
    <div class="actions" style="margin-top:10px;">
      <button class="btn btn-g" onclick="revealHint(1)" ${challengeState.hint1?'disabled':''}>راهنمایی ۱</button>
      <button class="btn btn-g" onclick="revealHint(2)" ${!challengeState.hint1||challengeState.hint2?'disabled':''}>راهنمایی ۲</button>
      <button class="btn btn-o" onclick="revealHint('solution')" ${!challengeState.hint2||challengeState.solution?'disabled':''}>نمایش راه‌حل</button>
    </div>
    ${challengeState.hint1?`<div class="qexplain show" style="margin-top:16px;"><b>راهنمایی ۱:</b> ${c.hint1}</div>`:''}
    ${challengeState.hint2?`<div class="qexplain show" style="margin-top:10px;"><b>راهنمایی ۲:</b> ${c.hint2}</div>`:''}
    ${challengeState.solution?`<div class="code-block" style="margin-top:16px;"><div class="cb-head">راه‌حل پیشنهادی</div><pre><code>${escapeHtml(c.solution)}</code></pre></div>`:''}
    <div class="actions"><button class="btn btn-g" onclick="openLevel('${t.id}',${current.level})">بازگشت به درس‌ها</button></div>
  </div>`;
}
function revealHint(step){
  if(step===1) challengeState.hint1=true;
  else if(step===2) challengeState.hint2=true;
  else challengeState.solution=true;
  render();
}

/* ================= PROJECT ================= */
function renderProjectPage(t){
  const gradingNote = `<div class="exercise" style="margin-top:22px;"><div class="et">✅ بعد از تمام‌شدن</div><p>کدت آماده شد؟ بیارش همین‌جا توی چت با من تا طبق سیستم بررسی واقعی (ساختار، خوانایی، استاندارد، Performance، Security، SEO) دقیق بررسی و نمره‌گذاری کنم — نه فقط «آفرین».</p></div>`;
  if(t.projects){
    return `
    <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › پروژه‌ها</div>
    ${t.projects.map((p,i)=>`
      <div class="card" style="margin-bottom:16px;">
        <div class="lesson-top"><span class="tag">🚀 پروژه ${faNum(i+1)}</span></div>
        <h1 class="lesson-title" style="font-size:20px;">${p.title}</h1>
        <div class="lesson-body"><p>${p.brief}</p></div>
        <div class="lesson-body"><b>نیازمندی‌ها:</b><ul>${p.requirements.map(r=>`<li>${r}</li>`).join('')}</ul></div>
        <div class="qexplain show"><b>راهنمایی:</b> ${p.hints.join(' • ')}</div>
      </div>`).join('')}
    ${gradingNote}
    <div class="actions"><button class="btn btn-g" onclick="goHome()">بازگشت</button></div>`;
  }
  const p = t.project;
  return `
  <div class="crumbs"><a href="#" onclick="goHome();return false;">خانه</a> › <b>${t.name}</b> › پروژه</div>
  <div class="card">
    <div class="lesson-top"><span class="tag">🚀 پروژهٔ ${t.name}</span></div>
    <h1 class="lesson-title">${p.title}</h1>
    <div class="lesson-body"><p>${p.brief}</p></div>
    <div class="lesson-body"><b>نیازمندی‌ها:</b><ul>${p.requirements.map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="qexplain show">${p.hints.map(h=>`<div>💡 ${h}</div>`).join('')}</div>
    ${gradingNote}
    <div class="actions"><button class="btn btn-g" onclick="goHome()">بازگشت</button></div>
  </div>`;
}

/* ================= SQL PLAYGROUND ================= */
function loadSqlJsScript(){
  return new Promise((resolve,reject)=>{
    if(window.initSqlJs){ resolve(); return; }
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js';
    s.onload=resolve; s.onerror=()=>reject(new Error('load-fail'));
    document.head.appendChild(s);
  });
}
function renderSqlResults(results){
  if(!results || !results.length) return '(بدون نتیجه — اگر فقط CREATE/INSERT/UPDATE نوشتی، طبیعیه که جدولی برنگرده)';
  return results.map(r=>{
    const head = '<tr>'+r.columns.map(c=>`<th style="border:1px solid #444;padding:6px 10px;text-align:right;">${c}</th>`).join('')+'</tr>';
    const rows = r.values.map(row=>'<tr>'+row.map(v=>`<td style="border:1px solid #444;padding:6px 10px;">${v===null?'NULL':v}</td>`).join('')+'</tr>').join('');
    return `<table style="border-collapse:collapse;width:100%;margin-bottom:10px;">${head}${rows}</table>`;
  }).join('');
}
async function runSql(){
  const out=document.getElementById('sqlOut'); const status=document.getElementById('sqlStatus');
  const code=document.getElementById('sqlCode').value;
  out.classList.remove('err'); out.innerHTML='در حال آماده‌سازی دیتابیس...'; status.textContent='';
  try{
    if(!window.sqlJsInstance){
      await loadSqlJsScript();
      status.textContent='در حال بارگذاری SQLite (اولین بار کمی طول می‌کشد)...';
      window.sqlJsInstance = await initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${f}` });
    }
    status.textContent='در حال اجرا...';
    const db = new window.sqlJsInstance.Database();
    const results = db.exec(code);
    out.innerHTML = renderSqlResults(results);
    status.textContent='اجرا شد ✓';
  }catch(err){
    out.classList.add('err');
    out.textContent='خطا در اجرای کوئری:\n\n'+err.message;
  }
  setTimeout(()=>{ if(status) status.textContent=''; },2200);
}
function resetSql(){
  const t = TOPICS.find(x=>x.id===current.topic);
  const lesson = t.levels[current.level].lessons[current.lesson];
  document.getElementById('sqlCode').value = lesson.sql||'';
  document.getElementById('sqlOut').textContent = 'نتیجهٔ کوئری اینجا نمایش داده می‌شود.';
}

/* ================= UTIL ================= */
function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

loadProgress();
