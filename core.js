/* هستهٔ داده: LEVEL_NAMES و TOPICS از فایل‌های data/courses ساخته می‌شود */
const LEVEL_NAMES = ["مبتدی", "متوسط", "پیشرفته", "فوق پیشرفته"];
const TOPICS = window.COURSES;
/* ===== v4fix pyodide packages ===== */
(function(){const MAP={numpy:'numpy',pandas:'pandas',sqlite3:'sqlite3',scipy:'scipy',sklearn:'scikit-learn',matplotlib:'matplotlib'};
for(const t of TOPICS)for(const l of (t.levels||[]))for(const x of l.lessons){if(!x.py)continue;const need=new Set(x.packages||[]);
for(const m of x.py.matchAll(/^\s*(?:import|from)\s+([A-Za-z_]\w*)/gm)){if(MAP[m[1]])need.add(MAP[m[1]]);}
if(need.size)x.packages=[...need];}})();
/* ===== v4fix2 playground compat ===== */
(function(){
for(const t of TOPICS)for(const l of (t.levels||[]))for(const x of l.lessons){
  const c=x.code; if(!c||!c.js) continue;
  // localStorage inside sandboxed iframe throws: use a safe store
  if(/\blocalStorage\b/.test(c.js)&&!/const store=/.test(c.js)&&/ذخیره‌سازی محلی/.test(x.title)){
    c.js="const store=(()=>{try{localStorage.setItem('_t','1');localStorage.removeItem('_t');return localStorage}catch(e){const m={};return{getItem:k=>(k in m?m[k]:null),setItem:(k,v)=>{m[k]=String(v)},removeItem:k=>{delete m[k]}}}})();\n"+c.js.replace(/\blocalStorage\./g,'store.');
  }
  // `top` is a read-only window global: renaming avoids a redeclaration SyntaxError
  if(/\bconst top\s*=/.test(c.js)) c.js=c.js.replace(/\bconst top\s*=/g,'const topEl=').replace(/\btop\.(id|className)/g,'topEl.$1');
  // top-level await is invalid in a classic script: wrap in an async IIFE
  try{ new Function(c.js); }catch(e){
    if(e instanceof SyntaxError && /await/.test(e.message)) c.js="(async()=>{\n"+c.js+"\n})();";
  }
}
})();
