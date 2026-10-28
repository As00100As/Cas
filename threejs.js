(window.COURSES=window.COURSES||[]).push({
 "id": "threejs",
 "name": "Three.js / WebGL",
 "icon": "🧊",
 "kind": "web",
 "desc": "گرافیک سه‌بعدی واقعی توی مرورگر — همین‌جا رندر می‌شه",
 "covers": [
  "Scene، Camera، Renderer",
  "Geometry، Material، Light",
  "انیمیشن با requestAnimationFrame",
  "Raycaster و تعامل با موس",
  "Texture، Group",
  "WebGL خام، مقدمهٔ WebGPU"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "Three.js چیست: چرا به‌جای WebGL خام از آن استفاده می‌کنیم",
     "content": "<p><b>WebGL</b> رابط برنامه‌نویسی مرورگر برای گرافیک سه‌بعدی شتاب‌دهی‌شده با کارت گرافیک است — ولی نوشتن مستقیم با آن بسیار پرجزئیات و پیچیده است (نیاز به نوشتن Shader با دست). <b>Three.js</b> یک کتابخانه است که این پیچیدگی را در پس یک API ساده و شیءگرا (Scene، Camera، Mesh) پنهان می‌کند — همان‌طور که Express روی http خام یا jQuery (قدیم) روی DOM خام لایه می‌گذاشت.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\nconst material = new THREE.MeshBasicMaterial({ color: 0x4F46E5 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n\ncamera.position.z = 3;\nrenderer.render(scene, camera);"
     },
     "exercise": "رنگ مکعب رو با تغییر مقدار color توی MeshBasicMaterial عوض کن (یه کد hex دیگه امتحان کن)."
    },
    {
     "title": "سه پایهٔ هر صحنه: Scene، Camera و Renderer",
     "content": "<p>هر برنامهٔ Three.js سه جزء اصلی دارد: <b>Scene</b> (فضایی که همهٔ اشیا، نورها و... در آن قرار می‌گیرند)، <b>Camera</b> (زاویهٔ دیدی که صحنه از آن رندر می‌شود — معمولاً <code class='inline'>PerspectiveCamera</code> برای دید سه‌بعدی واقع‌گرایانه) و <b>Renderer</b> (موتوری که صحنه را از دید دوربین به یک <code class='inline'>&lt;canvas&gt;</code> واقعی روی صفحه تبدیل می‌کند).</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nscene.background = new THREE.Color(0x111122);\n\nconst camera = new THREE.PerspectiveCamera(60, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.set(2, 2, 4); // دوربین رو کمی کج و دورتر می‌ذاریم\ncamera.lookAt(0, 0, 0);\n\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst sphere = new THREE.Mesh(\n  new THREE.SphereGeometry(1, 32, 32),\n  new THREE.MeshBasicMaterial({ color: 0x22C55E, wireframe: true })\n);\nscene.add(sphere);\n\nrenderer.render(scene, camera);"
     },
     "exercise": "مقدار camera.position.set(...) رو تغییر بده (مثلاً بیشتر دورش کن یا از یه زاویهٔ دیگه بذارش) و ببین دید صحنه چطور عوض می‌شه."
    },
    {
     "title": "انیمیشن با requestAnimationFrame",
     "content": "<p>برای متحرک‌کردن یک صحنه، باید مدام آن را دوباره رندر کنید — با تغییر کوچک هر بار (مثل چرخش کمی بیشتر). <code class='inline'>requestAnimationFrame</code> تابع مرورگری است که یک تابع را درست قبل از رسم فریم بعدی صدا می‌زند (معمولاً ۶۰ بار در ثانیه) — نسبت به <code class='inline'>setInterval</code> برای انیمیشن بسیار مناسب‌تر است چون با نرخ رفرش صفحه‌نمایش هماهنگ می‌شود.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 3;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst cube = new THREE.Mesh(\n  new THREE.BoxGeometry(1, 1, 1),\n  new THREE.MeshBasicMaterial({ color: 0xF59E0B })\n);\nscene.add(cube);\n\nfunction animate() {\n  requestAnimationFrame(animate); // خودشو دوباره صدا می‌زنه، فریم به فریم\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.015;\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "سرعت چرخش مکعب رو با تغییر مقادیر += توی rotation.x و rotation.y زیاد یا کم کن."
    }
   ],
   "quiz": [
    {
     "q": "چرا از Three.js به‌جای WebGL خام استفاده می‌کنیم؟",
     "options": [
      "WebGL کندتر است",
      "Three.js پیچیدگی WebGL خام (مثل نوشتن Shader دستی) را پشت یک API ساده پنهان می‌کند",
      "WebGL فقط برای موبایل است",
      "تفاوتی ندارند"
     ],
     "answer": 1,
     "explain": "Three.js لایه‌ای شیءگرا و آسان‌تر روی WebGL خام قرار می‌دهد."
    },
    {
     "q": "Camera در Three.js چه نقشی دارد؟",
     "options": [
      "رنگ صحنه را تعیین می‌کند",
      "زاویهٔ دیدی که صحنه از آن رندر می‌شود را مشخص می‌کند",
      "نور صحنه را کنترل می‌کند",
      "فقط برای انیمیشن است"
     ],
     "answer": 1,
     "explain": "Camera مثل چشم بیننده در فضای سه‌بعدی عمل می‌کند."
    },
    {
     "q": "چرا requestAnimationFrame برای انیمیشن بهتر از setInterval است؟",
     "options": [
      "سریع‌تر تایپ می‌شود",
      "با نرخ رفرش صفحه‌نمایش هماهنگ می‌شود و روان‌تر و بهینه‌تر است",
      "setInterval اصلاً کار نمی‌کند",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "requestAnimationFrame توسط مرورگر برای انیمیشن بهینه‌سازی شده است."
    }
   ],
   "challenge": {
    "task": "یک صحنه بساز با سه شکل مختلف (مثلاً یک BoxGeometry، یک SphereGeometry و یک ConeGeometry) که هرکدوم رنگ متفاوت داشته باشن و در موقعیت‌های x متفاوت (کنار هم) قرار بگیرن؛ همه‌شون هم‌زمان دور خودشون بچرخن.",
    "hint1": "برای جابه‌جاکردن هرکدوم کنار هم، بعد از ساختن mesh، مقدار mesh.position.x رو برای هرکدوم متفاوت تنظیم کن (مثلاً -2، 0، 2).",
    "hint2": "داخل تابع animate، برای هر سه شیء جدا rotation.y += مقدار کوچیک رو صدا بزن.",
    "solution": "const shapes = [\n  new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0xEF4444})),\n  new THREE.Mesh(new THREE.SphereGeometry(0.6,16,16), new THREE.MeshBasicMaterial({color:0x22C55E})),\n  new THREE.Mesh(new THREE.ConeGeometry(0.6,1,16), new THREE.MeshBasicMaterial({color:0x3B82F6}))\n];\nshapes[0].position.x = -2;\nshapes[1].position.x = 0;\nshapes[2].position.x = 2;\nshapes.forEach(s => scene.add(s));\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  shapes.forEach(s => { s.rotation.y += 0.02; });\n  renderer.render(scene, camera);\n}\nanimate();"
   }
  },
  {
   "lessons": [
    {
     "title": "نور (Light) و متریال (Material): چرا بعضی اشیا سایه‌دار می‌شن",
     "content": "<p><code class='inline'>MeshBasicMaterial</code> (که تا الان دیدیم) به نور واکنش نشان نمی‌دهد — همیشه یک‌رنگ صاف است. متریال‌های واقع‌گرایانه‌تر مثل <code class='inline'>MeshStandardMaterial</code> یا <code class='inline'>MeshPhongMaterial</code> به نور نیاز دارند تا اصلاً دیده شوند — بدون نور، کاملاً سیاه به‌نظر می‌رسند. انواع نور رایج: <code class='inline'>AmbientLight</code> (نور یکنواخت همه‌جا، بدون سایه)، <code class='inline'>PointLight</code> (مثل یک لامپ، از یک نقطه به همه‌جهت)، <code class='inline'>DirectionalLight</code> (مثل نور خورشید، موازی).</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.set(2,2,3);\ncamera.lookAt(0,0,0);\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst light = new THREE.PointLight(0xffffff, 1.2);\nlight.position.set(3, 3, 3);\nscene.add(light);\nscene.add(new THREE.AmbientLight(0x404040)); // یه‌کم نور پایه که کاملاً سیاه نشه\n\nconst sphere = new THREE.Mesh(\n  new THREE.SphereGeometry(1, 32, 32),\n  new THREE.MeshStandardMaterial({ color: 0x4F46E5 })\n);\nscene.add(sphere);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  sphere.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "خط scene.add(new THREE.AmbientLight(...)) رو کامنت کن و ببین بدون اون نور پایه، سمت تاریک کره چقدر تاریک‌تر می‌شه."
    },
    {
     "title": "Geometry های آماده: از مکعب تا Torus",
     "content": "<p>Three.js شکل‌های هندسی آمادهٔ زیادی دارد: <code class='inline'>BoxGeometry</code> (مکعب)، <code class='inline'>SphereGeometry</code> (کره)، <code class='inline'>ConeGeometry</code> (مخروط)، <code class='inline'>CylinderGeometry</code> (استوانه)، <code class='inline'>TorusGeometry</code> (دونات/حلقه). هرکدام پارامترهای متفاوتی برای اندازه و «وضوح» (تعداد قطعات = Segments، هرچه بیشتر، گردتر ولی سنگین‌تر) دارند.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 4;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.AmbientLight(0xffffff, 0.8));\n\nconst torus = new THREE.Mesh(\n  new THREE.TorusGeometry(1, 0.4, 16, 100),\n  new THREE.MeshStandardMaterial({ color: 0xEC4899 })\n);\nscene.add(torus);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  torus.rotation.x += 0.01;\n  torus.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "TorusGeometry رو با CylinderGeometry(0.7, 0.7, 1.5, 32) عوض کن و ببین چه شکلی می‌سازه."
    },
    {
     "title": "Raycaster: تشخیص کلیک روی یک شیء سه‌بعدی",
     "content": "<p>موس یک مختصهٔ دوبعدی (x, y) روی صفحه دارد، ولی صحنهٔ شما سه‌بعدی است — چطور بفهمیم کاربر روی کدام شیء کلیک کرده؟ <code class='inline'>Raycaster</code> یک «پرتو» نامرئی از دوربین، از نقطهٔ کلیک به داخل صحنه می‌فرستد و اولین شیئی که به آن برخورد می‌کند را برمی‌گرداند.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 3;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst cube = new THREE.Mesh(\n  new THREE.BoxGeometry(1,1,1),\n  new THREE.MeshBasicMaterial({ color: 0x4F46E5 })\n);\nscene.add(cube);\nrenderer.render(scene, camera);\n\nconst raycaster = new THREE.Raycaster();\nconst mouse = new THREE.Vector2();\n\nrenderer.domElement.addEventListener('click', (event) => {\n  const rect = renderer.domElement.getBoundingClientRect();\n  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;\n  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;\n\n  raycaster.setFromCamera(mouse, camera);\n  const hits = raycaster.intersectObject(cube);\n  if (hits.length > 0) {\n    cube.material.color.set(Math.random() * 0xffffff);\n    renderer.render(scene, camera);\n  }\n});"
     },
     "exercise": "توضیح بده چرا مختصات موس باید از پیکسل واقعی صفحه (مثل ۳۰۰px) به بازهٔ -۱ تا ۱ تبدیل بشه قبل از این‌که به Raycaster داده بشه."
    }
   ],
   "quiz": [
    {
     "q": "چرا MeshBasicMaterial به نور واکنش نشان نمی‌دهد؟",
     "options": [
      "باگ Three.js است",
      "طراحی‌اش همین است — همیشه یک‌رنگ صاف بدون محاسبهٔ نور نمایش می‌دهد",
      "فقط برای موبایل کار می‌کند",
      "نیاز به Raycaster دارد"
     ],
     "answer": 1,
     "explain": "برای واکنش به نور باید از موادی مثل MeshStandardMaterial استفاده کرد."
    },
    {
     "q": "Segments بیشتر در یک Geometry (مثل SphereGeometry) چه تاثیری دارد؟",
     "options": [
      "رنگ را تغییر می‌دهد",
      "شکل را گردتر و صاف‌تر می‌کند ولی سنگین‌تر برای رندر می‌شود",
      "نور را خاموش می‌کند",
      "هیچ تاثیری ندارد"
     ],
     "answer": 1,
     "explain": "Segments بیشتر یعنی مثلث‌های بیشتر برای تقریب شکل، پس دقت بصری بالاتر با هزینهٔ محاسباتی بیشتر."
    },
    {
     "q": "Raycaster برای چه استفاده می‌شود؟",
     "options": [
      "روشن‌کردن صحنه",
      "تشخیص این‌که کدام شیء سه‌بعدی زیر نقطهٔ کلیک/موس قرار دارد",
      "تغییر رنگ خودکار",
      "بارگذاری تکسچر"
     ],
     "answer": 1,
     "explain": "یک پرتو مجازی از دوربین به سمت نقطهٔ کلیک فرستاده می‌شود تا برخورد با اشیا بررسی شود."
    }
   ],
   "challenge": {
    "task": "یک صحنهٔ Three.js بساز که یک مکعب مرکزی داشته باشه (با MeshStandardMaterial و یک PointLight) و با کلیک روی مکعب (با Raycaster)، رنگش تصادفی عوض بشه؛ مکعب هم هم‌زمان مدام بچرخه.",
    "hint1": "باید هم تابع animate (برای چرخش مداوم) و هم event listener کلیک (برای Raycaster) رو با هم داشته باشی — این دو مستقل از هم کار می‌کنن.",
    "hint2": "برای رنگ تصادفی: cube.material.color.set(Math.random() * 0xffffff) دقیقاً کاریه که لازم داری.",
    "solution": "// ترکیب دو درسی که دیدی: انیمیشن (چرخش مداوم) + Raycaster (کلیک)\n// نور + متریال Standard + چرخش در animate() + click listener با Raycaster\n// همون کدهایی که توی دو درس قبل دیدی رو با هم ترکیب کن؛\n// نکتهٔ کلیدی: renderer.render باید هم داخل animate() صدا زده بشه (برای چرخش مداوم)\n// و هم داخل click handler اگه انیمیشن در حال اجرا نباشه (که اینجا چون animate() مدام در حاله، نیازی به رندر اضافه نیست)"
   }
  },
  {
   "lessons": [
    {
     "title": "Texture: پوشاندن سطح یک شیء با یک تصویر",
     "content": "<p><b>Texture</b> یک تصویر است که روی سطح یک Geometry «کشیده» می‌شود — مثل کاغذکادو دور یک جعبه. Three.js می‌تواند تکسچر را از یک فایل تصویر بارگذاری کند یا حتی از یک <code class='inline'>&lt;canvas&gt;</code> که خودتان با کد رسم کرده‌اید (که این‌جا برای اجتناب از وابستگی به اینترنت خارجی از همین روش استفاده می‌کنیم).</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\n\n// ساخت یه تکسچر ساده با کد (به‌جای دانلود عکس از اینترنت):\nconst canvas = document.createElement('canvas');\ncanvas.width = 128; canvas.height = 128;\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = '#4F46E5'; ctx.fillRect(0,0,128,128);\nctx.fillStyle = '#fff'; ctx.font = '20px sans-serif';\nctx.fillText('کدستان', 10, 70);\nconst texture = new THREE.CanvasTexture(canvas);\n\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 3;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst cube = new THREE.Mesh(\n  new THREE.BoxGeometry(1.5,1.5,1.5),\n  new THREE.MeshBasicMaterial({ map: texture })\n);\nscene.add(cube);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "متن و رنگ داخل canvas رو عوض کن (مثلاً اسم خودت رو بنویس) و ببین روی مکعب چطور نمایش داده می‌شه."
    },
    {
     "title": "Group: کنترل چند شیء به‌عنوان یک واحد",
     "content": "<p><code class='inline'>THREE.Group</code> چند Mesh را در یک «کانتینر» جمع می‌کند تا بتوانید همه را با هم جابه‌جا/بچرخانید — بدون این‌که برای هرکدام جدا کد بنویسید. مثال کلاسیک: یک سیستم خورشیدی ساده که سیاره دور ستاره می‌چرخد.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.set(0, 3, 6);\ncamera.lookAt(0,0,0);\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst sun = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xF59E0B }));\nscene.add(sun);\n\nconst orbitGroup = new THREE.Group(); // این گروه دور خورشید می‌چرخه\nconst planet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), new THREE.MeshBasicMaterial({ color: 0x3B82F6 }));\nplanet.position.x = 2.5;\norbitGroup.add(planet);\nscene.add(orbitGroup);\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  orbitGroup.rotation.y += 0.02; // چرخوندن کل گروه = چرخش سیاره دور خورشید\n  planet.rotation.y += 0.05; // چرخش خود سیاره دور خودش\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "یک سیارهٔ دوم با فاصله و سرعت چرخش متفاوت به سیستم اضافه کن (یک Group جدید بساز)."
    },
    {
     "title": "Responsive کردن صحنه با Resize",
     "content": "<p>اگه اندازهٔ پنجره یا کانتینر تغییر کنه، صحنه باید خودشو تطبیق بده — وگرنه کشیده/فشرده به‌نظر می‌رسه. باید هم <code class='inline'>camera.aspect</code> رو آپدیت کنید (و <code class='inline'>camera.updateProjectionMatrix()</code> رو صدا بزنید) هم اندازهٔ <code class='inline'>renderer</code> رو.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 3;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\nconst cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({ color: 0x22C55E }));\nscene.add(cube);\n\nwindow.addEventListener('resize', () => {\n  camera.aspect = container.clientWidth / container.clientHeight;\n  camera.updateProjectionMatrix(); // اجباریه بعد از تغییر aspect\n  renderer.setSize(container.clientWidth, container.clientHeight);\n});\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();"
     },
     "exercise": "توضیح بده اگه camera.updateProjectionMatrix() رو بعد از تغییر camera.aspect صدا نزنیم، چرا تغییر خودش به‌تنهایی اثری نداره."
    },
    {
     "title": "سیستم ذرات با Points",
     "content": "<p>برای هزاران ذره (برف، ستاره، دود) هر ذره را Mesh جدا نمی‌سازیم؛ یک <code class='inline'>BufferGeometry</code> با آرایهٔ مختصات و <code class='inline'>THREE.Points</code> با <code class='inline'>PointsMaterial</code> کافی است. اندازه با <code class='inline'>size</code> تنظیم می‌شود.</p>",
     "exercise": "ذرات را طوری تغییر بده که به‌آرامی پایین بیایند.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight,0.1,1000);\ncamera.position.z=4;\nconst renderer=new THREE.WebGLRenderer();\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nconst g=new THREE.BufferGeometry();const a=[];\nfor(let i=0;i<2000;i++)a.push((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6);\ng.setAttribute('position',new THREE.Float32BufferAttribute(a,3));\nconst p=new THREE.Points(g,new THREE.PointsMaterial({color:0x8B7CF6,size:0.03}));scene.add(p);\nfunction animate(){requestAnimationFrame(animate);p.rotation.y+=0.002;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "بهینه‌سازی عملکرد: InstancedMesh و dispose",
     "content": "<p>هر Mesh یک Draw Call است و صدها Mesh صحنه را کند می‌کند. <code class='inline'>InstancedMesh</code> صدها نسخه از یک شکل را در یک Draw Call رسم می‌کند. نکات دیگر: <code class='inline'>setPixelRatio(Math.min(devicePixelRatio,2))</code>، و آزادسازی حافظه با <code class='inline'>geometry.dispose()</code> و <code class='inline'>material.dispose()</code> وقتی شیء حذف می‌شود.</p>",
     "exercise": "تعداد نمونه‌ها را به ۳۰۰۰ برسان و روان‌بودن را بسنج.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight,0.1,1000);\ncamera.position.z=4;\nconst renderer=new THREE.WebGLRenderer();\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nconst N=300,m=new THREE.InstancedMesh(new THREE.BoxGeometry(.15,.15,.15),new THREE.MeshNormalMaterial(),N);\nconst d=new THREE.Object3D();\nfor(let i=0;i<N;i++){d.position.set((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4);d.updateMatrix();m.setMatrixAt(i,d.matrix);}\nscene.add(m);\nfunction animate(){requestAnimationFrame(animate);m.rotation.y+=0.004;renderer.render(scene,camera);}\nanimate();"
     }
    }
   ],
   "quiz": [
    {
     "q": "Texture در Three.js چه کاری انجام می‌دهد؟",
     "options": [
      "نور صحنه را کم می‌کند",
      "یک تصویر را روی سطح یک Geometry اعمال می‌کند",
      "دوربین را می‌چرخاند",
      "صدا پخش می‌کند"
     ],
     "answer": 1,
     "explain": "Texture ظاهر سطحی اشیا را با یک تصویر واقعی‌تر می‌کند."
    },
    {
     "q": "THREE.Group چه امکانی می‌دهد؟",
     "options": [
      "حذف چند شیء هم‌زمان",
      "کنترل و تبدیل (مثل چرخش) چند شیء به‌عنوان یک واحد واحد",
      "تغییر رنگ خودکار",
      "بارگذاری فایل صوتی"
     ],
     "answer": 1,
     "explain": "Group یک کانتینر برای گروه‌بندی و تبدیل هم‌زمان چند Mesh است."
    },
    {
     "q": "بعد از تغییر camera.aspect هنگام resize، چرا باید updateProjectionMatrix() صدا زده شود؟",
     "options": [
      "اختیاری است و تاثیری ندارد",
      "بدون آن، ماتریس تصویربرداری دوربین با مقدار جدید aspect به‌روزرسانی نمی‌شود",
      "برای تغییر رنگ صحنه لازم است",
      "فقط برای موبایل لازم است"
     ],
     "answer": 1,
     "explain": "تغییر مستقیم aspect به‌تنهایی محاسبات داخلی دوربین را به‌روز نمی‌کند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "زیر پوستهٔ Three.js: WebGL خام چه شکلی است",
     "content": "<p>برای درک این‌که Three.js چقدر کار سختی را ساده کرده، ببینید نوشتن حتی یک مثلث رنگی با WebGL خام چقدر کد لازم دارد: باید یک <b>Shader</b> (برنامه‌ای که مستقیم روی کارت گرافیک اجرا می‌شود، به زبان GLSL) بنویسید، بافرها را دستی مدیریت کنید، و uniform/attribute ها را وصل کنید.</p><div class='code-block'><div class='cb-head'>مقایسه: WebGL خام (فقط بخشی از کد لازم برای یک مثلث)</div><pre><code>const gl = canvas.getContext('webgl');\nconst vertexShaderSource = `\n  attribute vec2 position;\n  void main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n  }\n`;\nconst fragmentShaderSource = `\n  void main() {\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n  }\n`;\n// ... و حدود ۳۰ خط دیگر فقط برای کامپایل‌کردن shader ها و رسم یک مثلث ساده</code></pre></div><p>همین کار در Three.js فقط چند خط <code class='inline'>Mesh</code> و <code class='inline'>Material</code> است — همون کد پایین رو ببین که یه مثلث رنگی می‌سازه، مقایسه‌اش کن با کد بالا.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:250px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container = document.getElementById('canvas-container');\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);\ncamera.position.z = 3;\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth, container.clientHeight);\ncontainer.appendChild(renderer.domElement);\n\n// همین ۵-۶ خط، معادل همون ~۴۰ خط WebGL خامه:\nconst triangleShape = new THREE.Shape();\ntriangleShape.moveTo(0, 1);\ntriangleShape.lineTo(-1, -1);\ntriangleShape.lineTo(1, -1);\nconst geometry = new THREE.ShapeGeometry(triangleShape);\nconst material = new THREE.MeshBasicMaterial({ color: 0xEF4444 });\nscene.add(new THREE.Mesh(geometry, material));\n\nrenderer.render(scene, camera);"
     },
     "exercise": "توضیح بده چرا برای اکثر پروژه‌های واقعی (بازی، ویژوالایزیشن داده)، استفاده از Three.js منطقی‌تر از نوشتن WebGL خام است، ولی چرا موتورهای بازی حرفه‌ای بزرگ هنوز از دسترسی نزدیک‌تر به WebGL/GPU استفاده می‌کنن."
    },
    {
     "title": "مقدمه‌ای بر WebGPU: آیندهٔ گرافیک وب",
     "content": "<p><b>WebGPU</b> جانشین جدیدتر و قدرتمندتر WebGL است — دسترسی مستقیم‌تر و کارآمدتری به کارت گرافیک می‌دهد (شبیه Vulkan/Metal/DirectX 12 در دنیای نیتیو)، مخصوصاً برای محاسبات موازی سنگین (نه فقط گرافیک، بلکه محاسبات AI/ML هم در مرورگر). هنوز پشتیبانی همه‌جانبه در همهٔ مرورگرها ندارد، ولی Three.js نسخهٔ آزمایشی <code class='inline'>WebGPURenderer</code> را هم دارد.</p>",
     "code": {
      "html": "<div id=\"result\" style=\"font-family:sans-serif;padding:10px;\"></div>",
      "css": "",
      "js": "const result = document.getElementById('result');\nif (navigator.gpu) {\n  result.textContent = '✅ این مرورگر از WebGPU پشتیبانی می‌کند!';\n} else {\n  result.textContent = '❌ این مرورگر هنوز از WebGPU پشتیبانی نمی‌کند (یا نیاز به فعال‌سازی دستی دارد).';\n}"
     },
     "exercise": "این کد رو توی مرورگر خودت اجرا کن (نتیجه رو توی همین سایت می‌بینی) و بگو نتیجه چی بود؛ بعد جست‌وجو کن کدوم مرورگرها امروز از WebGPU پشتیبانی می‌کنن."
    },
    {
     "title": "سایه‌ها (Shadows)",
     "content": "<p>برای سایه سه چیز لازم است: فعال‌کردن در renderer (<code class='inline'>renderer.shadowMap.enabled</code>)، نوری که سایه بیندازد (<code class='inline'>light.castShadow</code>) و اشیایی که سایه می‌اندازند یا می‌گیرند (<code class='inline'>castShadow</code> / <code class='inline'>receiveShadow</code>).</p>",
     "exercise": "یک کره روی یک صفحه بگذار که سایهٔ نرم بیندازد.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight,0.1,1000);\ncamera.position.set(2,2,3);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nrenderer.shadowMap.enabled=true;\nconst light=new THREE.DirectionalLight(0xffffff,1);\nlight.position.set(3,5,2);light.castShadow=true;scene.add(light);\nscene.add(new THREE.AmbientLight(0x404040));\nconst ball=new THREE.Mesh(new THREE.SphereGeometry(0.7,32,32),new THREE.MeshStandardMaterial({color:0x4F46E5}));\nball.position.y=0.7;ball.castShadow=true;scene.add(ball);\nconst floor=new THREE.Mesh(new THREE.PlaneGeometry(6,6),new THREE.MeshStandardMaterial({color:0xcccccc}));\nfloor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);\nrenderer.render(scene,camera);"
     }
    },
    {
     "title": "مدل‌های سه‌بعدی (GLTF) و OrbitControls",
     "content": "<p>در پروژه‌های واقعی اشیا را در Blender می‌سازند و به شکل <b>.glb/.gltf</b> با <code class='inline'>GLTFLoader</code> بارگذاری می‌کنند. <code class='inline'>OrbitControls</code> هم اجازهٔ چرخاندن و زوم دوربین با ماوس را می‌دهد. این دو در نسخهٔ ماژولی Three.js از پوشهٔ <code class='inline'>examples/jsm</code> وارد می‌شوند.</p><div class='code-block'><div class='cb-head'>app.js</div><pre><code>import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';\n\nconst controls = new OrbitControls(camera, renderer.domElement);\nnew GLTFLoader().load('model.glb', (gltf) =&gt; scene.add(gltf.scene));</code></pre></div>",
     "exercise": "یک مدل رایگان .glb دانلود کن و با OrbitControls در صحنه نمایش بده."
    },
    {
     "title": "ShaderMaterial: نوشتن شیدر شخصی با GLSL",
     "content": "<p>شیدر برنامه‌ای است که روی GPU اجرا می‌شود. <b>Vertex Shader</b> موقعیت هر نقطه را حساب می‌کند و <b>Fragment Shader</b> رنگ هر پیکسل را. با <code class='inline'>ShaderMaterial</code> و <code class='inline'>uniforms</code> می‌توانی زمان یا ورودی دیگر را به GPU بدهی و جلوه‌های سفارشی بسازی. Post-processing (مثل Bloom) هم با <code class='inline'>EffectComposer</code> روی تصویر نهایی شیدر اجرا می‌کند.</p>",
     "exercise": "رنگ شیدر بالا را طوری عوض کن که فقط بین دو رنگ دلخواه جابه‌جا شود.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight,0.1,1000);\ncamera.position.z=2.5;\nconst renderer=new THREE.WebGLRenderer();\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nconst mat=new THREE.ShaderMaterial({uniforms:{t:{value:0}},\nvertexShader:'varying vec3 n;void main(){n=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',\nfragmentShader:'varying vec3 n;uniform float t;void main(){gl_FragColor=vec4(0.5+0.5*sin(n*3.0+t),1.0);}'});\nconst m=new THREE.Mesh(new THREE.SphereGeometry(1,48,48),mat);scene.add(m);\nfunction animate(){requestAnimationFrame(animate);mat.uniforms.t.value+=0.03;m.rotation.y+=0.01;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "فیزیک در Three.js با cannon-es و LoadingManager",
     "content": "<p>Three.js فیزیک ندارد؛ کتابخانه‌ای مثل cannon-es یا Rapier دنیای فیزیکی جدا می‌سازد و هر فریم موقعیت اجسام را به Meshها کپی می‌کنی. <code class='inline'>LoadingManager</code> هم درصد بارگذاری مدل‌ها و تکسچرها را می‌دهد تا صفحه‌ی لودینگ بسازی.</p>",
     "exercise": "یک توپ فیزیکی بساز که روی زمین بپرد."
    },
    {
     "title": "سلسله‌مراتب صحنه: Object3D، Group و ماتریس‌ها",
     "content": "<p>هر شیء یک Object3D است و تبدیل (position/rotation/scale) آن نسبت به والد حساب می‌شود. با <code class='inline'>Group</code> چند شیء را یک‌جا حرکت بده. تبدیل نهایی از ضرب ماتریس‌ها (<code class='inline'>matrixWorld</code>) به دست می‌آید. برای مختصات جهانی از <code class='inline'>getWorldPosition</code> و برای تغییر والد بدون پرش از <code class='inline'>attach</code> استفاده کن.</p>",
     "exercise": "یک منظومه‌ی شمسی با Group تو‌در‌تو بساز که ماه دور زمین بچرخد."
    },
    {
     "title": "متریال PBR: roughness، metalness و Tone Mapping",
     "content": "<p><code class='inline'>MeshStandardMaterial</code> با دو پارامتر اصلی کار می‌کند: <code class='inline'>roughness</code> (زبری) و <code class='inline'>metalness</code> (فلزی‌بودن). <code class='inline'>MeshPhysicalMaterial</code> لایه شفاف (clearcoat)، شیشه (transmission) و شفافیت‌های دیگر را اضافه می‌کند. با <code class='inline'>renderer.toneMapping = ACESFilmicToneMapping</code> و <code class='inline'>outputColorSpace = SRGBColorSpace</code> (در نسخه‌های جدید؛ در r128 که دموهای این آکادمی استفاده می‌کنند معادلش <code class='inline'>renderer.outputEncoding = THREE.sRGBEncoding</code> است) رنگ‌ها واقع‌گرایانه می‌شوند.</p>",
     "exercise": "یک کره‌ی فلزی و یک کره‌ی شیشه‌ای با تنظیمات متفاوت مقایسه کن."
    },
    {
     "title": "نورپردازی پیشرفته: IBL و تنظیم سایه",
     "content": "<p>نور محیطی واقعی با HDRI (Image-Based Lighting) و <code class='inline'>PMREMGenerator</code> ساخته می‌شود و بیشترین تأثیر را در واقع‌گرایی دارد. برای سایه: <code class='inline'>shadow.mapSize</code> را بالا ببر، دوربین سایه را به اندازه‌ی صحنه محدود کن و <code class='inline'>shadow.bias</code> را برای حذف لکه‌های Shadow Acne تنظیم کن.<div class='code-block'><div class='cb-head'>ibl.js</div><pre><code>const pmrem = new THREE.PMREMGenerator(renderer);\nnew RGBELoader().load('studio.hdr', (tex) => {\n  scene.environment = pmrem.fromEquirectangular(tex).texture;\n});</code></pre></div></p>",
     "exercise": "با یک HDRI صحنه را روشن کن و سایه‌ی بدون لکه بگیر."
    },
    {
     "title": "تکسچر: UV، Mipmap، فشرده‌سازی KTX2 و Color Space",
     "content": "<p>UV مختصات نگاشت تصویر روی مدل است. Mipmap نسخه‌های کوچک‌تر را برای فاصله‌ی دور می‌سازد و <code class='inline'>anisotropy</code> وضوح در زاویه‌های کج را بهتر می‌کند. تکسچر JPG/PNG در GPU بدون فشرده‌سازی می‌ماند؛ با KTX2/Basis حجم حافظه چندبرابر کم می‌شود. تکسچر رنگی باید <code class='inline'>SRGBColorSpace</code> (در r128: <code class='inline'>texture.encoding = THREE.sRGBEncoding</code>) و تکسچر داده (normal, roughness) خطی باشد.</p>",
     "exercise": "حجم GPU یک صحنه را با تبدیل تکسچرها به KTX2 مقایسه کن."
    },
    {
     "title": "پایپ‌لاین GLTF: Draco، Meshopt و بهینه‌سازی",
     "content": "<p>مدل خام Blender سنگین است. با <code class='inline'>gltf-transform</code> یا <code class='inline'>gltfpack</code> هندسه را با Draco/Meshopt فشرده، تکسچرها را کوچک و گره‌های اضافه را حذف کن. DracoLoader و KTX2Loader را در GLTFLoader ثبت کن. هدف عملی برای وب: زیر چند مگابایت و چند صد درخواست رسم پایین.</p>",
     "exercise": "یک مدل را از ۲۰ مگابایت به زیر ۳ مگابایت برسان و کیفیت را مقایسه کن."
    },
    {
     "title": "انیمیشن: AnimationMixer، اسکلت و Morph Target",
     "content": "<p>فایل GLTF کلیپ‌های انیمیشن دارد. <code class='inline'>AnimationMixer</code> آن‌ها را اجرا می‌کند و <code class='inline'>clock.getDelta()</code> هر فریم به آن داده می‌شود. با <code class='inline'>crossFadeTo</code> بین کلیپ‌ها (راه‌رفتن به دویدن) نرم جابه‌جا شو. Morph Target برای حالت‌های چهره و Skeletal برای بدن.</p>",
     "exercise": "شخصیتی با دو کلیپ بساز که با کلید بین آن‌ها crossfade شود."
    },
    {
     "title": "Raycasting و انتخاب شیء",
     "content": "<p><code class='inline'>Raycaster</code> از دوربین تا موقعیت ماوس پرتو می‌فرستد و اشیای برخوردی را برمی‌گرداند. مختصات ماوس باید به بازه‌ی −۱ تا ۱ نرمال شود. برای صحنه‌های بزرگ از BVH (three-mesh-bvh) یا GPU Picking استفاده کن و فقط روی اشیای قابل‌انتخاب بررسی کن.</p>",
     "exercise": "با کلیک رنگ شیء انتخاب‌شده را عوض و هنگام hover نشانگر نشان بده."
    },
    {
     "title": "Post-Processing: EffectComposer، Bloom و SSAO",
     "content": "<p><code class='inline'>EffectComposer</code> صحنه را روی یک تصویر رندر می‌کند و سپس Passها را زنجیر می‌کند: RenderPass، UnrealBloomPass (درخشش)، SSAO (سایه‌ی تماسی) و OutputPass. هر Pass هزینه‌ی GPU دارد؛ روی موبایل کم و ضروری بگذار و رزولوشن را پایین بیاور.</p>",
     "exercise": "جلوه‌ی Bloom روی اشیای نئونی بساز و هزینه‌ی FPS آن را اندازه بگیر."
    },
    {
     "title": "شیدر پیشرفته: Noise، onBeforeCompile و Uniform",
     "content": "<p>به‌جای نوشتن ShaderMaterial از صفر، با <code class='inline'>material.onBeforeCompile</code> می‌توانی کد یک MeshStandardMaterial را تغییر بدهی و نورپردازی PBR را نگه داری. Noise (Simplex/Perlin) برای آب، ابر و تغییر شکل رأس‌ها به کار می‌رود. uniformها را فقط هنگام تغییر به‌روز کن و محاسبه‌ی سنگین را در vertex shader بگذار نه fragment.</p>",
     "exercise": "موج روی یک صفحه با noise و uniform زمان بساز."
    },
    {
     "title": "Instancing، LOD و Culling",
     "content": "<p>هر Mesh یک Draw Call است. <code class='inline'>InstancedMesh</code> هزاران نسخه را در یک Draw Call رسم می‌کند. <code class='inline'>LOD</code> بسته به فاصله مدل ساده‌تر نشان می‌دهد و Frustum Culling اشیای بیرون از دید را حذف می‌کند. <code class='inline'>BatchedMesh</code> (فقط در نسخه‌های جدید Three.js، نه r128) هندسه‌های متفاوت را هم ادغام می‌کند.</p>",
     "exercise": "یک جنگل ۵۰۰۰ درختی با Instancing و LOD بساز."
    },
    {
     "title": "پروفایل عملکرد و نشت حافظه",
     "content": "<p>با <code class='inline'>renderer.info</code> تعداد Draw Call، مثلث و تکسچر را ببین و با Chrome Performance و Spector.js گلوگاه را پیدا کن. هنگام حذف شیء، <code class='inline'>geometry.dispose()</code>، <code class='inline'>material.dispose()</code> و <code class='inline'>texture.dispose()</code> را صدا بزن. DPR را تطبیقی کن (مثلاً با افت FPS پایین بیاور) و رندر را هنگام پنهان‌بودن تب متوقف کن.</p>",
     "exercise": "یک صحنه‌ی ۶۰ فریمی را روی موبایل میان‌رده به ۶۰ FPS برسان."
    },
    {
     "title": "React Three Fiber و drei",
     "content": "<p>R3F صحنه Three.js را با کامپوننت‌های React توصیف می‌کند؛ رویدادها و state روی همان درخت هستند. drei ابزارهای آماده دارد (OrbitControls، Environment، useGLTF). <code class='inline'>useFrame</code> هر فریم اجرا می‌شود؛ state را در ref نگه دار نه useState تا رندر React هر فریم فعال نشود.<div class='code-block'><div class='cb-head'>Scene.jsx</div><pre><code>&lt;Canvas camera={{ position: [3,3,3] }}>\n  &lt;Environment preset='city' />\n  &lt;mesh>&lt;boxGeometry />&lt;meshStandardMaterial color='orange' />&lt;/mesh>\n  &lt;OrbitControls />\n&lt;/Canvas></code></pre></div></p>",
     "exercise": "یک نمایشگر محصول سه‌بعدی با R3F و بارگذاری GLB بساز."
    },
    {
     "title": "Clock و حرکت مستقل از نرخ فریم",
     "content": "<p>اگر هر فریم <code class='inline'>rotation.y += 0.01</code> بنویسی، روی مانیتور ۱۴۴ هرتزی بیش از ۴ برابر سریع‌تر از ۳۰ فریم می‌چرخد. راه درست ضرب سرعت در زمان فریم است: <code class='inline'>THREE.Clock</code> با <code class='inline'>getDelta()</code> ثانیه‌های گذشته از فریم قبل را می‌دهد. در تست عددی، چرخش نیم‌دور در ثانیه در ۳۰ و ۱۴۴ فریم هر دو بعد از ۲ ثانیه دقیقاً ۶.۲۸۳۲ رادیان شد.</p>",
     "exercise": "سرعت چرخش را بر حسب «دور در دقیقه» تعریف کن و با تغییر FPS در DevTools یکسان‌بودنش را ببین.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst cube=new THREE.Mesh(new THREE.BoxGeometry(1.5,1.5,1.5),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\nscene.add(cube);\nconst clock=new THREE.Clock();\nfunction animate(){\n  requestAnimationFrame(animate);\n  const dt=clock.getDelta();          // ثانیه از فریم قبل\n  cube.rotation.y+=Math.PI*dt;         // نیم‌دور در ثانیه، مستقل از FPS\n  renderer.render(scene,camera);\n}\nanimate();"
     }
    },
    {
     "title": "نرم‌سازی حرکت (Damping) با lerp نمایی",
     "content": "<p><code class='inline'>position.lerp(target, 0.1)</code> در هر فریم حرکت نرم می‌دهد ولی به FPS وابسته است: در تست عددی بعد از نیم‌ثانیه در ۳۰ فریم به ۷.۹ و در ۱۴۴ فریم به ۹.۹۹۵ رسید. فرمول درست <code class='inline'>k = 1 - Math.exp(-λ·dt)</code> است که در هر دو حالت به همان ۹.۸۱۶۸ می‌رسد. ماوس را روی صحنه حرکت بده: توپ با تأخیر نرم دنبالش می‌آید.</p>",
     "exercise": "ثابت λ را از ۲ تا ۲۰ تغییر بده و حس «سفتی» را مقایسه کن.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst ball=new THREE.Mesh(new THREE.SphereGeometry(0.4,32,32),new THREE.MeshStandardMaterial({color:0xF5B841}));\nscene.add(ball);\nconst target=new THREE.Vector3();\ncontainer.addEventListener('pointermove',e=>{\n  const r=container.getBoundingClientRect();\n  target.set(((e.clientX-r.left)/r.width-0.5)*6,-((e.clientY-r.top)/r.height-0.5)*4,0);\n});\nconst clock=new THREE.Clock();\nfunction animate(){\n  requestAnimationFrame(animate);\n  const dt=clock.getDelta();\n  const k=1-Math.exp(-8*dt);          // نرم‌سازی مستقل از FPS\n  ball.position.lerp(target,k);\n  renderer.render(scene,camera);\n}\nanimate();"
     }
    },
    {
     "title": "دوربین Orthographic و نمای ایزومتریک",
     "content": "<p>دوربین Perspective اشیای دور را کوچک می‌کند، ولی <code class='inline'>OrthographicCamera</code> اندازه را مستقل از فاصله نگه می‌دارد: برای بازی‌های ایزومتریک، نقشه، رابط‌های دوبعدی‌نما و نمودارهای سه‌بعدی مناسب است. پنجره دید را با left/right/top/bottom می‌دهی و باید نسبت تصویر را رعایت کنی وگرنه شکل‌ها کشیده می‌شوند. زاویهٔ دید ایزومتریک با قرار دادن دوربین روی (۶، ۶، ۶) ساخته می‌شود.</p>",
     "exercise": "با تغییر مقدار s بزرگ‌نمایی را کنترل کن و پنجره را برای صفحهٔ عمودی (موبایل) تنظیم کن.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nscene.background=new THREE.Color(0x1b1d2b);\nconst w=container.clientWidth,h=container.clientHeight,s=4,asp=w/h;\nconst camera=new THREE.OrthographicCamera(-s*asp,s*asp,s,-s,0.1,100);\ncamera.position.set(6,6,6);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setSize(w,h);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.GridHelper(8,8,0x8B7CF6,0x3a3d57));\nscene.add(new THREE.AmbientLight(0xffffff,0.6));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(4,8,3);scene.add(dl);\nfor(let i=0;i<5;i++){\n  const hgt=0.5+i*0.4;\n  const b=new THREE.Mesh(new THREE.BoxGeometry(1,hgt,1),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\n  b.position.set(i-2,hgt/2,0);scene.add(b);\n}\nrenderer.render(scene,camera);"
     }
    },
    {
     "title": "مه (Fog)، پس‌زمینه و حس عمق",
     "content": "<p><code class='inline'>scene.fog = new THREE.Fog(color, near, far)</code> اشیا را با فاصله به رنگ مه محو می‌کند و عمق را القا می‌کند، و در عین حال سرعت رندر را کمی بهتر می‌کند چون می‌توان دوربین را کوتاه‌تر گرفت. رنگ مه را برابر پس‌زمینه بگذار تا لبهٔ صحنه محو شود. <code class='inline'>FogExp2</code> مه نمایی با تراکم یکنواخت می‌دهد. توجه: ShaderMaterial سفارشی مه را خودکار نمی‌گیرد.</p>",
     "exercise": "رنگ مه را عوض کن (مثلاً صبحگاهی نارنجی) و near/far را برای حس غروب تنظیم کن.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst bg=new THREE.Color(0x1b1d2b);\nscene.background=bg;\nscene.fog=new THREE.Fog(bg,4,16);\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(0,1.5,5);camera.lookAt(0,0.5,-8);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nfor(let i=0;i<12;i++){\n  const b=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\n  b.position.set((i%2?1:-1)*1.2,0.5,-i*1.5);scene.add(b);\n}\nrenderer.render(scene,camera);"
     }
    },
    {
     "title": "ساخت هندسه با دست: BufferGeometry و Vertex Color",
     "content": "<p>همهٔ Geometryهای آماده در نهایت آرایه‌ای از مختصات‌اند. با <code class='inline'>Float32Array</code> هر رأس را خودت می‌نویسی (هر سه عدد = یک رأس، هر سه رأس = یک مثلث) و ویژگی رنگ را با <code class='inline'>setAttribute('color', ...)</code> می‌دهی؛ <code class='inline'>vertexColors:true</code> رنگ را بین رأس‌ها درون‌یابی می‌کند. این پایهٔ ساخت زمین، نمودار سه‌بعدی و ویرایشگرها است. جهت رأس‌ها (پادساعتگرد) تعیین می‌کند کدام روی مثلث دیده می‌شود (<code class='inline'>side</code>).</p>",
     "exercise": "یک مربع بساز (دو مثلث) و هر گوشه‌اش را رنگ متفاوت بده.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst g=new THREE.BufferGeometry();\nconst pos=new Float32Array([\n  -1,-1,0,   1,-1,0,   0,1,0,\n   1,-1,0,   2,1,0,    0,1,0\n]);\nconst col=new Float32Array([\n  1,0.3,0.3,  0.3,1,0.3,  0.3,0.3,1,\n  0.3,1,0.3,  1,1,0.3,    0.3,0.3,1\n]);\ng.setAttribute('position',new THREE.BufferAttribute(pos,3));\ng.setAttribute('color',new THREE.BufferAttribute(col,3));\ng.computeVertexNormals();\nconst mesh=new THREE.Mesh(g,new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.DoubleSide}));\nscene.add(mesh);\nfunction animate(){requestAnimationFrame(animate);mesh.rotation.y+=0.01;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "برچسب‌های متنی با Sprite و CanvasTexture",
     "content": "<p>متن در Three.js مستقیم ساخته نمی‌شود. ساده‌ترین راه: متن را روی <code class='inline'>&lt;canvas&gt;</code> دوبعدی بکش، آن را <code class='inline'>CanvasTexture</code> کن و روی <code class='inline'>Sprite</code> بگذار؛ Sprite همیشه رو به دوربین است. برای فارسی از فونت سیستمی/وب‌فونت بارگذاری‌شده استفاده کن و بعد از بارگذاری فونت بوم را دوباره بکش. برای تعداد زیاد برچسب یا متن واضح‌تر، SDF (کتابخانهٔ troika-three-text) یا برچسب HTML روی صحنه بهتر است.</p>",
     "exercise": "برای هر گوی یک برچسب بساز که با نزدیک‌شدن دوربین بزرگ نشود.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nfunction label(text){\n  const c=document.createElement('canvas');c.width=256;c.height=64;\n  const x=c.getContext('2d');\n  x.fillStyle='rgba(0,0,0,0.6)';x.fillRect(0,0,256,64);\n  x.fillStyle='#fff';x.font='bold 32px sans-serif';x.textAlign='center';x.textBaseline='middle';\n  x.fillText(text,128,32);\n  const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c)}));\n  sp.scale.set(2,0.5,1);\n  return sp;\n}\nconst names=['قهوه','چای','شیر'];\nnames.forEach((n,i)=>{\n  const s=new THREE.Mesh(new THREE.SphereGeometry(0.5,24,24),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\n  s.position.x=(i-1)*2.2;scene.add(s);\n  const l=label(n);l.position.set(s.position.x,1.1,0);scene.add(l);\n});\nrenderer.render(scene,camera);"
     }
    },
    {
     "title": "منحنی و حرکت روی مسیر",
     "content": "<p><code class='inline'>CatmullRomCurve3</code> از چند نقطه یک منحنی نرم می‌سازد. دو روش نمونه‌برداری: <code class='inline'>getPoint(t)</code> بر اساس پارامتر منحنی (سرعت ناهموار) و <code class='inline'>getPointAt(t)</code> بر اساس طول کمان (سرعت یکنواخت). برای ترسیم خط، نقاط را به <code class='inline'>BufferGeometry.setFromPoints</code> بده. برای جهت‌دادن جسم، <code class='inline'>getTangentAt</code> را بخوان و <code class='inline'>lookAt</code> کن. پایهٔ مسیر دوربین سینمایی و ریل‌ها است.</p>",
     "exercise": "جسمی بساز که روی منحنی حرکت کند و همیشه رو به جهت حرکت باشد.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst curve=new THREE.CatmullRomCurve3([\n  new THREE.Vector3(-3,0,0),new THREE.Vector3(-1,2,1),\n  new THREE.Vector3(1,-1,-1),new THREE.Vector3(3,1,0)\n]);\nscene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)),new THREE.LineBasicMaterial({color:0x8B7CF6})));\nconst dot=new THREE.Mesh(new THREE.SphereGeometry(0.15,16,16),new THREE.MeshStandardMaterial({color:0xF5B841}));\nscene.add(dot);\nconst clock=new THREE.Clock();\nfunction animate(){\n  requestAnimationFrame(animate);\n  const t=(clock.getElapsedTime()/4)%1;     // ۴ ثانیه برای یک دور\n  dot.position.copy(curve.getPointAt(t));     // سرعت یکنواخت روی مسیر\n  renderer.render(scene,camera);\n}\nanimate();"
     }
    },
    {
     "title": "رندر خارج از صفحه: WebGLRenderTarget",
     "content": "<p>گاهی باید صحنه را به‌جای صفحه در یک «تکسچر» رندر کنی: آینه، دوربین امنیتی، نقشهٔ کوچک (minimap)، یا پیش‌پردازش. <code class='inline'>WebGLRenderTarget</code> این کار را می‌کند و <code class='inline'>rt.texture</code> را مثل هر تکسچر روی ماده می‌گذاری. بعد از رندر در هدف باید <code class='inline'>setRenderTarget(null)</code> بزنی تا رندر بعدی به صفحه برود. هر هدف حافظهٔ GPU می‌خورد، پس اندازه و تعدادش را کم نگه دار و در پایان <code class='inline'>dispose</code> کن.</p>",
     "exercise": "یک آینهٔ ساده بساز که صحنه را از زاویهٔ دیگر نشان دهد.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst rt=new THREE.WebGLRenderTarget(256,256);\nconst inner=new THREE.Scene();\ninner.background=new THREE.Color(0x222244);\ninner.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst tor=new THREE.Mesh(new THREE.TorusKnotGeometry(0.6,0.2,64,12),new THREE.MeshStandardMaterial({color:0xF5B841}));\ninner.add(tor);\nconst innerCam=new THREE.PerspectiveCamera(50,1,0.1,10);innerCam.position.z=3;\nconst screen=new THREE.Mesh(new THREE.PlaneGeometry(3,3),new THREE.MeshBasicMaterial({map:rt.texture}));\nscene.add(screen);\nfunction animate(){\n  requestAnimationFrame(animate);\n  tor.rotation.x+=0.02;tor.rotation.y+=0.03;\n  renderer.setRenderTarget(rt);renderer.render(inner,innerCam);\n  renderer.setRenderTarget(null);renderer.render(scene,camera);\n}\nanimate();"
     }
    },
    {
     "title": "ابزار دیباگ: Helper و renderer.info",
     "content": "<p>قبل از جست‌وجوی باگ، ببین. <code class='inline'>AxesHelper</code> محورها، <code class='inline'>GridHelper</code> زمین، <code class='inline'>BoxHelper</code> کادر اشیا و <code class='inline'>CameraHelper</code> مخروط دید دوربین را نشان می‌دهند، و <code class='inline'>wireframe:true</code> مش را. <code class='inline'>renderer.info</code> تعداد Draw Call، مثلث و حافظه (geometries/textures) را زنده می‌دهد: اگر تعدادشان بی‌دلیل زیاد شود نشت دارد. این کدها را فقط در حالت توسعه فعال کن.</p>",
     "exercise": "با renderer.info نشان بده اضافه‌کردن ۱۰۰ مکعب جدا چند Draw Call اضافه می‌کند.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>\n<div id=\"info\" style=\"font:12px monospace;padding:4px\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nscene.add(new THREE.AxesHelper(2));\nscene.add(new THREE.GridHelper(10,10));\nconst m=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({color:0x8B7CF6,wireframe:true}));\nm.position.y=0.5;scene.add(m);\nscene.add(new THREE.BoxHelper(m,0xffff00));\nconst info=document.getElementById('info');\nfunction animate(){\n  requestAnimationFrame(animate);\n  m.rotation.y+=0.01;\n  renderer.render(scene,camera);\n  info.textContent='Draw Calls: '+renderer.info.render.calls+' | Triangles: '+renderer.info.render.triangles;\n}\nanimate();"
     }
    },
    {
     "title": "برخورد ساده با Box3 و Sphere",
     "content": "<p>برای بسیاری از بازی‌ها فیزیک کامل لازم نیست. <code class='inline'>Box3.setFromObject</code> جعبهٔ محصورکنندهٔ یک شیء را می‌سازد (AABB) و <code class='inline'>intersectsBox</code> / <code class='inline'>intersectsSphere</code> برخورد را می‌سنجد؛ ارزان و سریع است ولی با چرخش جعبه بزرگ‌تر می‌شود. برای تعداد زیاد شیء از ساختار فضایی (شبکه یا BVH) استفاده کن تا همهٔ جفت‌ها بررسی نشوند. برای واکنش واقعی از موتور فیزیک (cannon-es/Rapier) کمک بگیر.</p>",
     "exercise": "وقتی توپ به دیوار می‌خورد بازگردانده شود (جهت را عوض کن).",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,3,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst wall=new THREE.Mesh(new THREE.BoxGeometry(1,2,1),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\nwall.position.set(1.5,1,0);scene.add(wall);\nconst ball=new THREE.Mesh(new THREE.SphereGeometry(0.5,24,24),new THREE.MeshStandardMaterial({color:0x44cc88}));\nscene.add(ball);\nconst wallBox=new THREE.Box3();\nconst clock=new THREE.Clock();\nfunction animate(){\n  requestAnimationFrame(animate);\n  const t=clock.getElapsedTime();\n  ball.position.set(Math.sin(t)*3,0.5,0);\n  wallBox.setFromObject(wall);\n  const hit=wallBox.intersectsSphere(new THREE.Sphere(ball.position,0.5));\n  ball.material.color.set(hit?0xff4444:0x44cc88);\n  renderer.render(scene,camera);\n}\nanimate();"
     }
    },
    {
     "title": "استحکام: پشتیبانی WebGL، resize، context lost و کاهش حرکت",
     "content": "<p>کد تولیدی باید شکست را مدیریت کند: ۱) اگر WebGL نیست پیام جایگزین نشان بده. ۲) تغییر اندازه را با <code class='inline'>ResizeObserver</code> بر کانتینر (نه فقط <code class='inline'>window</code>) مدیریت کن و <code class='inline'>updateProjectionMatrix</code> بزن. ۳) رویداد <code class='inline'>webglcontextlost</code> را مهار (<code class='inline'>preventDefault</code>) و بعد از <code class='inline'>webglcontextrestored</code> منابع را بازسازی کن. ۴) به <code class='inline'>prefers-reduced-motion</code> احترام بگذار. ۵) با <code class='inline'>setPixelRatio(min(dpr,2))</code> بار GPU را محدود کن.</p>",
     "exercise": "صفحه‌ای بساز که با خاموش‌شدن WebGL (flags مرورگر) پیام مناسب نشان دهد.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nfunction supportsWebGL(){\n  try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'));}catch(e){return false;}\n}\nif(!supportsWebGL()){\n  container.textContent='مرورگر شما WebGL را پشتیبانی نمی‌کند.';\n}else{\n  const scene=new THREE.Scene();\n  const camera=new THREE.PerspectiveCamera(60,1,0.1,100);camera.position.z=4;\n  const renderer=new THREE.WebGLRenderer({antialias:true});\n  renderer.setPixelRatio(Math.min(devicePixelRatio,2));\n  container.appendChild(renderer.domElement);\n  scene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\n  const m=new THREE.Mesh(new THREE.IcosahedronGeometry(1,1),new THREE.MeshStandardMaterial({color:0x8B7CF6,flatShading:true}));\n  scene.add(m);\n  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;\n  function resize(){\n    const w=container.clientWidth,h=container.clientHeight;\n    camera.aspect=w/h;camera.updateProjectionMatrix();\n    renderer.setSize(w,h);\n    renderer.render(scene,camera);\n  }\n  new ResizeObserver(resize).observe(container);\n  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();});\n  function animate(){\n    if(!reduce){m.rotation.y+=0.01;}\n    renderer.render(scene,camera);\n    requestAnimationFrame(animate);\n  }\n  resize();animate();\n}"
     }
    },
    {
     "title": "ساختار پروژهٔ واقعی: Vite، بارگذاری دارایی و پاکسازی",
     "content": "<p>پروژهٔ واقعی با <code class='inline'>npm install three</code> و Vite ساخته می‌شود و از ماژول‌های ES استفاده می‌کند (import از <code class='inline'>three</code> و <code class='inline'>three/examples/jsm/...</code>)، نه تگ script. دارایی‌ها را با <code class='inline'>LoadingManager</code> مدیریت کن تا درصد بارگذاری را نشان بدهی. کد را به کلاس‌های جدا بشکن (Renderer، Scene، Loop) و هنگام خروج از صفحه یا تعویض صحنه، همه‌ی geometry، material و texture را <code class='inline'>dispose()</code> کن و حلقهٔ <code class='inline'>requestAnimationFrame</code> را لغو کن. مثال‌های این آکادمی نسخهٔ r128 با CDN هستند؛ بعضی API‌ها در نسخه‌های جدید تغییر کرده (مثلاً <code class='inline'>outputEncoding</code> به <code class='inline'>outputColorSpace</code>).</p>",
     "exercise": "یک صحنه را به پروژهٔ Vite منتقل کن و نشت حافظه را هنگام تعویض صحنه بررسی کن."
    },
    {
     "title": "OrbitControls: چرخاندن دوربین با موس",
     "content": "<p><b>OrbitControls</b> به کاربر اجازه می‌دهد با موس/لمس دور صحنه بچرخد، زوم کند و جابه‌جا شود. در نسخه‌ی r128 از فایل <code>examples/js/controls/OrbitControls.js</code> بارگذاری می‌شود (بعد از three.min.js) و به‌صورت <code>THREE.OrbitControls</code> در دسترس است. با <code>enableDamping</code> حرکت نرم می‌شود، ولی آن‌گاه باید در هر فریم <code>controls.update()</code> صدا بزنی. محدودیت‌ها: <code>minDistance/maxDistance</code> و <code>maxPolarAngle</code> (جلوگیری از رفتن زیر زمین). برای کارایی، اگر صحنه‌ی ایستا است و فقط با کنترل تغییر می‌کند، رندر را در رویداد <code>change</code> انجام بده.</p>",
     "exercise": "حداکثر زاویه‌ی عمودی را طوری محدود کن که دوربین زیر صفحه‌ی زمین نرود.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<script src=\"https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst mesh=new THREE.Mesh(new THREE.TorusKnotGeometry(0.8,0.28,100,16),new THREE.MeshStandardMaterial({color:0x8B7CF6}));\nscene.add(mesh);\nscene.add(new THREE.GridHelper(10,10));\nconst controls=new THREE.OrbitControls(camera,renderer.domElement);\ncontrols.enableDamping=true;controls.minDistance=2;controls.maxDistance=10;\ncontrols.maxPolarAngle=Math.PI/2-0.05;\nfunction animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "پارالاکس دوربین با حرکت موس",
     "content": "<p>بدون OrbitControls هم می‌توان با موس حس عمق ساخت: موقعیت موس را به بازه‌ی <code>-1..1</code> نرمال کن و دوربین را به‌سمت آن مقدار حرکت بده. برای نرمی از <b>درون‌یابی (lerp)</b> استفاده کن: <code>cam.x += (target - cam.x) * 0.05</code>. بعد از جابه‌جایی همیشه <code>camera.lookAt</code> را دوباره صدا بزن. مختصات موس را نسبت به کانتینر (نه کل پنجره) بگیر تا در صفحات با طرح‌بندی واقعی درست کار کند. نکته‌ی تجربه‌ی کاربری: کاربران با تنظیم «کاهش حرکت» (<code>prefers-reduced-motion</code>) را در نظر بگیر و پارالاکس را خاموش کن.</p>",
     "exercise": "حساسیت پارالاکس را با یک متغیر قابل‌تنظیم کن و با prefers-reduced-motion خاموشش کن.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nfor(let i=0;i<5;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(0.8,0.8,0.8),new THREE.MeshStandardMaterial({color:0x8B7CF6+i*2000}));m.position.set(i-2,0,-i*0.8);scene.add(m);}\nconst mouse={x:0,y:0};\ncontainer.addEventListener('pointermove',e=>{const r=container.getBoundingClientRect();mouse.x=((e.clientX-r.left)/r.width)*2-1;mouse.y=-(((e.clientY-r.top)/r.height)*2-1);});\nconst reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;\nfunction animate(){requestAnimationFrame(animate);\n  if(!reduce){camera.position.x+=(mouse.x*1.5-camera.position.x)*0.05;camera.position.y+=(mouse.y*1+2-camera.position.y)*0.05;}\n  camera.lookAt(0,0,-1.5);renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "EdgesGeometry و Wireframe: خطوط روی سطح",
     "content": "<p><code>wireframe:true</code> در ماده همه‌ی مثلث‌ها را نشان می‌دهد (برای دیباگ مش خوب است ولی شلوغ). برای نمایش فقط <b>لبه‌های تیز</b> از <code>EdgesGeometry(geometry, thresholdAngle)</code> و <code>LineSegments</code> استفاده کن؛ زاویه‌ی آستانه تعیین می‌کند کدام یال‌ها لبه حساب شوند. ترکیب رایج: سطح تو‌پُر با رنگ ملایم + خطوط تیره روی لبه‌ها برای ظاهر «طراحی فنی». توجه: خط‌ها در WebGL همیشه ضخامت ۱ پیکسل دارند (<code>linewidth</code> در بیشتر مرورگرها اثر ندارد)؛ برای خط ضخیم از <code>Line2</code> استفاده کن.</p>",
     "exercise": "thresholdAngle را از ۱ تا ۸۰ تغییر بده و ببین روی کره چه می‌شود.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst geo=new THREE.IcosahedronGeometry(1.2,1);\nconst solid=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0x5b4bd5,flatShading:true,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1}));\nconst edges=new THREE.LineSegments(new THREE.EdgesGeometry(geo,15),new THREE.LineBasicMaterial({color:0xffffff}));\nconst g=new THREE.Group();g.add(solid,edges);scene.add(g);\nfunction animate(){requestAnimationFrame(animate);g.rotation.y+=0.01;g.rotation.x+=0.004;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "CanvasTexture: ساخت بافت رویه‌ای با Canvas 2D",
     "content": "<p>لازم نیست همیشه فایل تصویر بارگذاری کنی. می‌توانی با یک <code>&lt;canvas&gt;</code> معمولی چیزی بکشی (متن، شطرنجی، گرادیان، نمودار زنده) و با <code>new THREE.CanvasTexture(canvas)</code> آن را بافت کنی. اگر بعداً روی canvas دوباره کشیدی باید <code>texture.needsUpdate = true</code> بگذاری. برای متن واضح، اندازه‌ی canvas را توان ۲ (مثل ۵۱۲) بگیر و <code>encoding</code>/<code>anisotropy</code> را تنظیم کن. کاربردها: برچسب روی اشیا، نمایشگر داخل صحنه، نقشه‌ی رنگ رویه‌ای. هزینه: آپلود بافت به GPU در هر به‌روزرسانی؛ پس تغییر را در هر فریم انجام نده مگر لازم باشد.</p>",
     "exercise": "متن «کدستان» را روی یک صفحه با canvas بنویس و روی یک صفحه‌ی سه‌بعدی بچسبان.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');\nfor(let i=0;i<8;i++)for(let j=0;j<8;j++){x.fillStyle=(i+j)%2?'#5b4bd5':'#f8f7ff';x.fillRect(i*64,j*64,64,64);}\nx.fillStyle='#14122b';x.font='bold 64px sans-serif';x.textAlign='center';x.fillText('Kodestan',256,275);\nconst tex=new THREE.CanvasTexture(c);tex.anisotropy=renderer.capabilities.getMaxAnisotropy();\nconst box=new THREE.Mesh(new THREE.BoxGeometry(2,2,2),new THREE.MeshStandardMaterial({map:tex}));\nscene.add(box);\nfunction animate(){requestAnimationFrame(animate);box.rotation.y+=0.01;box.rotation.x+=0.005;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "Raycaster: هایلایت با رفتن موس روی شیء",
     "content": "<p>برای دانستن اینکه موس روی کدام شیء است، از <code>THREE.Raycaster</code> یک پرتو از دوربین به‌سمت موس می‌فرستیم: <code>raycaster.setFromCamera(mouseNDC, camera)</code> و سپس <code>intersectObjects(objects)</code> فهرست برخوردها را به‌ترتیب فاصله برمی‌گرداند (اولی نزدیک‌ترین). مختصات موس باید نرمال‌شده (<code>-1..1</code>، با محور Y معکوس) و نسبت به canvas باشد. نکته‌ی عملکرد: هر ماده را جدا بساز تا تغییر رنگ یکی روی بقیه اثر نگذارد، و تغییر حالت را فقط وقتی شیء زیر موس عوض شد انجام بده، نه در هر رویداد. در پایان <code>cursor</code> را به pointer تغییر بده تا کاربر بداند قابل‌کلیک است.</p>",
     "exercise": "با کلیک روی هر مکعب، آن را بزرگ‌تر کن (scale) و با کلیک دوباره برگردان.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst cubes=[];\nfor(let i=0;i<4;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({color:0x5b4bd5}));m.position.x=(i-1.5)*1.6;scene.add(m);cubes.push(m);}\nconst ray=new THREE.Raycaster(),ndc=new THREE.Vector2(9,9);let hot=null;\nrenderer.domElement.addEventListener('pointermove',e=>{const r=renderer.domElement.getBoundingClientRect();ndc.set(((e.clientX-r.left)/r.width)*2-1,-((e.clientY-r.top)/r.height)*2+1);});\nfunction animate(){requestAnimationFrame(animate);\n  ray.setFromCamera(ndc,camera);const hit=ray.intersectObjects(cubes)[0];const obj=hit?hit.object:null;\n  if(obj!==hot){if(hot)hot.material.color.set(0x5b4bd5);if(obj)obj.material.color.set(0xF5B841);hot=obj;renderer.domElement.style.cursor=obj?'pointer':'default';}\n  cubes.forEach(c=>c.rotation.y+=0.01);renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "میدان ستاره‌ای با Points و تونل حرکت",
     "content": "<p>هزاران ذره را با یک <code>THREE.Points</code> و <code>BufferGeometry</code> می‌کشیم؛ یک draw call به‌جای هزاران مش. موقعیت‌ها را در یک <code>Float32Array</code> (سه عدد برای هر نقطه) می‌ریزیم و با <code>setAttribute('position', new BufferAttribute(arr,3))</code> می‌دهیم. برای حرکت بی‌پایان، ستاره‌ها را به‌سمت دوربین می‌آوریم و وقتی عبور کردند به عمق برمی‌گردانیم. بعد از تغییر آرایه <code>geometry.attributes.position.needsUpdate=true</code> لازم است. اندازه‌ی نقطه با <code>size</code> و <code>sizeAttenuation</code> کنترل می‌شود. برای ۱۰۰ هزار ذره همین روش روی GPU خوب است؛ اگر حرکت پیچیده می‌خواهی منطق را به شیدر ببر.</p>",
     "exercise": "سرعت را با اسکرول موس تغییر بده و رنگ ستاره‌ها را تصادفی کن (vertexColors).",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst N=1500,pos=new Float32Array(N*3);\nfor(let i=0;i<N;i++){pos[i*3]=(Math.random()-.5)*20;pos[i*3+1]=(Math.random()-.5)*20;pos[i*3+2]=-Math.random()*40;}\nconst geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\nscene.add(new THREE.Points(geo,new THREE.PointsMaterial({color:0xffffff,size:0.06})));\ncamera.position.set(0,0,5);camera.lookAt(0,0,0);let speed=0.15;\naddEventListener('wheel',e=>{speed=Math.max(0,Math.min(1,speed+e.deltaY*-0.0005));});\nfunction animate(){requestAnimationFrame(animate);\n  for(let i=0;i<N;i++){pos[i*3+2]+=speed;if(pos[i*3+2]>5)pos[i*3+2]=-40;}\n  geo.attributes.position.needsUpdate=true;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "MeshPhysicalMaterial: پوشش شفاف و شیشه",
     "content": "<p><code>MeshPhysicalMaterial</code> از ماده‌ی استاندارد گسترش یافته و پدیده‌های فیزیکی بیشتری دارد: <b>clearcoat</b> (لایه‌ی لاک روی سطح مثل رنگ خودرو)، <code>clearcoatRoughness</code>، <code>sheen</code>، <code>transmission</code> (شفافیت شیشه‌ای واقعی با شکست نور) و <code>ior</code> (ضریب شکست). این ویژگی‌ها بدون <b>نقشه‌ی محیطی (environment map)</b> کم‌اثرند چون بازتاب‌ها چیزی برای نشان دادن ندارند؛ در r128 می‌توان با <code>PMREMGenerator</code> یک محیط ساخت. هزینه‌ی رندر بیشتر است (transmission یک پاس اضافه می‌خواهد)، پس فقط روی شیء اصلی استفاده کن و روی موبایل با احتیاط.</p>",
     "exercise": "clearcoat را از ۰ تا ۱ تغییر بده و تفاوت بازتاب را ببین.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst mat=new THREE.MeshPhysicalMaterial({color:0xc2185b,metalness:0.2,roughness:0.35,clearcoat:1,clearcoatRoughness:0.1});\nconst ball=new THREE.Mesh(new THREE.SphereGeometry(1.2,64,64),mat);scene.add(ball);\nconst pl=new THREE.PointLight(0xffffff,1.2);pl.position.set(-3,3,3);scene.add(pl);\nfunction animate(){requestAnimationFrame(animate);ball.rotation.y+=0.01;renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "انیمیشن فنری (Spring) به‌جای lerp ساده",
     "content": "<p>lerp یکنواخت و بی‌جان است؛ <b>فنر</b> مثل حرکت واقعی کمی از هدف رد می‌شود و برمی‌گردد. مدل ساده: <code>force = (target - x) * stiffness</code>؛ سرعت <code>v += force * dt</code>؛ میرایی <code>v *= damping</code>؛ <code>x += v * dt</code>. stiffness (سفتی) بزرگ‌تر یعنی سریع‌تر، damping نزدیک ۱ یعنی نوسان بیشتر. حتماً از <code>dt</code> (Clock) استفاده کن و آن را سقف بگذار (مثلاً ۰٫۰۳) تا با پرش فریم‌ها انفجار عددی نشود. همین الگو برای دکمه‌ها، دوربین و UI سه‌بعدی حس طبیعی می‌دهد.</p>",
     "exercise": "با کلیک، هدف فنر را جابه‌جا کن و با تغییر stiffness و damping رفتار را مقایسه کن.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nconst ball=new THREE.Mesh(new THREE.SphereGeometry(0.4,32,32),new THREE.MeshStandardMaterial({color:0xF5B841}));scene.add(ball);\nlet x=-2,v=0,target=2;const k=40,damping=0.92,clock=new THREE.Clock();\nrenderer.domElement.addEventListener('pointerdown',()=>{target=-target;});\nfunction animate(){requestAnimationFrame(animate);\n  const dt=Math.min(clock.getDelta(),0.03);\n  v+=(target-x)*k*dt;v*=damping;x+=v*dt;ball.position.x=x;\n  renderer.render(scene,camera);}\nanimate();"
     }
    },
    {
     "title": "چرخه‌ی شب و روز: نور، رنگ آسمان و مه",
     "content": "<p>با یک متغیر زمان <code>t</code> (۰ تا ۱) می‌توان نور جهت‌دار را روی قوس آسمان حرکت داد و شدت و رنگ آن، رنگ پس‌زمینه و مه را متناسب عوض کرد. موقعیت خورشید: <code>x=cos(a)*R, y=sin(a)*R</code>. وقتی <code>y</code> منفی شد شب است؛ شدت را با <code>Math.max(0,sin(a))</code> کم کن. رنگ‌ها را با <code>Color.lerpColors</code> بین روز و شب درون‌یابی کن و <code>scene.background</code> و <code>scene.fog.color</code> را هماهنگ نگه دار تا افق ناهمگون دیده نشود. اگر سایه می‌خواهی <code>renderer.shadowMap.enabled</code> و <code>castShadow/receiveShadow</code> لازم است. این الگوی ساده پایه‌ی اغلب صحنه‌های فضای باز است.</p>",
     "exercise": "سرعت چرخه را با یک اسلایدر HTML کنترل کن و ستاره‌ها را فقط در شب نشان بده.",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"><\\/script>\n<div id=\"canvas-container\" style=\"width:100%;height:300px;\"></div>",
      "css": "body{margin:0;overflow:hidden;}",
      "js": "const container=document.getElementById('canvas-container');\nconst scene=new THREE.Scene();\nconst camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1,100);\ncamera.position.set(3,2.5,5);camera.lookAt(0,0,0);\nconst renderer=new THREE.WebGLRenderer({antialias:true});\nrenderer.setPixelRatio(Math.min(devicePixelRatio,2));\nrenderer.setSize(container.clientWidth,container.clientHeight);\ncontainer.appendChild(renderer.domElement);\nscene.add(new THREE.HemisphereLight(0xffffff,0x444466,1));\nconst dl=new THREE.DirectionalLight(0xffffff,0.8);dl.position.set(3,5,2);scene.add(dl);\nscene.fog=new THREE.Fog(0x87ceeb,5,20);\nconst ground=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0x3a7d44}));ground.rotation.x=-Math.PI/2;ground.position.y=-1;scene.add(ground);\nconst house=new THREE.Mesh(new THREE.BoxGeometry(1.5,1.2,1.5),new THREE.MeshStandardMaterial({color:0xe0c9a6}));house.position.y=-0.4;scene.add(house);\nconst day=new THREE.Color(0x87ceeb),night=new THREE.Color(0x0b1026),sky=new THREE.Color();\nconst clock=new THREE.Clock();let t=0;\nfunction animate(){requestAnimationFrame(animate);\n  t+=clock.getDelta()*0.15;const a=t%(Math.PI*2),s=Math.sin(a);\n  dl.position.set(Math.cos(a)*8,s*8,3);dl.intensity=Math.max(0,s)*1.1;\n  const k=THREE.MathUtils.clamp(s*2+0.5,0,1);sky.lerpColors(night,day,k);\n  scene.background=sky;scene.fog.color.copy(sky);\n  renderer.render(scene,camera);}\nanimate();"
     }
    }
   ],
   "quiz": [
    {
     "q": "چرا نوشتن مستقیم با WebGL خام نسبت به Three.js پیچیده‌تر است؟",
     "options": [
      "WebGL کندتر است",
      "نیاز به نوشتن Shader دستی (GLSL) و مدیریت دستی بافرهاست",
      "WebGL فقط برای بازی است",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "Three.js این جزئیات سطح‌پایین را در پس یک API ساده پنهان می‌کند."
    },
    {
     "q": "WebGPU نسبت به WebGL چه مزیتی دارد؟",
     "options": [
      "فقط ظاهر بهتری دارد",
      "دسترسی مستقیم‌تر و کارآمدتر به کارت گرافیک، مناسب محاسبات موازی سنگین (از جمله AI)",
      "فقط برای موبایل است",
      "جایگزین HTML شده است"
     ],
     "answer": 1,
     "explain": "WebGPU برای محاسبات مدرن GPU (گرافیک و غیرگرافیک) طراحی شده است."
    },
    {
     "q": "navigator.gpu در جاوااسکریپت چه چیزی را بررسی می‌کند؟",
     "options": [
      "سرعت اینترنت",
      "اینکه آیا مرورگر از WebGPU پشتیبانی می‌کند یا نه",
      "حافظهٔ کارت گرافیک",
      "نسخهٔ سیستم‌عامل"
     ],
     "answer": 1,
     "explain": "اگر navigator.gpu وجود نداشته باشد (undefined)، آن مرورگر هنوز WebGPU را پشتیبانی نمی‌کند."
    },
    {
     "q": "برای سایه سه‌بعدی چه لازم است؟",
     "options": [
      "فقط Material",
      "shadowMap فعال، نور با castShadow، اشیا با cast/receiveShadow",
      "فقط Camera",
      "فایل GLTF"
     ],
     "answer": 1,
     "explain": "هر سه بخش لازم است."
    },
    {
     "q": "Fragment Shader چه چیزی را حساب می‌کند؟",
     "options": [
      "موقعیت رأس",
      "رنگ هر پیکسل",
      "سرعت شبکه",
      "صدا"
     ],
     "answer": 1,
     "explain": "Vertex Shader موقعیت و Fragment Shader رنگ را حساب می‌کند."
    },
    {
     "q": "برای واقع‌گرایی بیشتر کدام تأثیر بیشتری دارد؟",
     "options": [
      "نور محیطی HDRI (IBL)",
      "افزودن رنگ",
      "کوچک کردن canvas",
      "حذف سایه"
     ],
     "answer": 0,
     "explain": "محیط واقعی بازتاب و نور را درست می‌کند."
    },
    {
     "q": "InstancedMesh چه کاری می‌کند؟",
     "options": [
      "هزاران نسخه را در یک Draw Call رسم می‌کند",
      "صدا پخش می‌کند",
      "فایل می‌خواند",
      "شبکه را کند می‌کند"
     ],
     "answer": 0,
     "explain": "تعداد Draw Call را کم می‌کند."
    },
    {
     "q": "تکسچر normal map باید در چه فضای رنگی باشد؟",
     "options": [
      "خطی (غیر sRGB)",
      "sRGB",
      "فرقی ندارد",
      "سیاه‌وسفید"
     ],
     "answer": 0,
     "explain": "داده است، نه رنگ."
    },
    {
     "q": "در R3F وضعیتی که هر فریم تغییر می‌کند را کجا نگه دارد؟",
     "options": [
      "ref",
      "useState",
      "localStorage",
      "props"
     ],
     "answer": 0,
     "explain": "useState باعث رندر مجدد React می‌شود."
    },
    {
     "q": "چرا rotation.y += 0.01 در هر فریم مشکل دارد؟",
     "options": [
      "سرعت به نرخ فریم وابسته می‌شود",
      "همیشه کند است",
      "خطا می‌دهد",
      "رنگ را عوض می‌کند"
     ],
     "answer": 0,
     "explain": "باید در delta time ضرب شود."
    },
    {
     "q": "getPointAt با getPoint چه فرقی دارد؟",
     "options": [
      "بر اساس طول کمان، سرعت یکنواخت",
      "سریع‌تر است",
      "فقط 2D است",
      "هیچ"
     ],
     "answer": 0,
     "explain": "getPoint سرعت ناهموار می‌دهد."
    },
    {
     "q": "بعد از رندر در WebGLRenderTarget چه باید کرد؟",
     "options": [
      "setRenderTarget(null)",
      "dispose کل صحنه",
      "reload",
      "هیچ"
     ],
     "answer": 0,
     "explain": "تا رندر بعدی به صفحه برود."
    },
    {
     "q": "Orthographic چه ویژگی‌ای دارد؟",
     "options": [
      "اندازه مستقل از فاصله",
      "اشیای دور کوچک می‌شوند",
      "فقط برای نور",
      "سایه ندارد"
     ],
     "answer": 0,
     "explain": "برای نمای ایزومتریک مناسب است."
    },
    {
     "q": "بعد از فعال‌کردن enableDamping در OrbitControls چه باید کرد؟",
     "options": [
      "در هر فریم controls.update() صدا بزنیم",
      "هیچ کاری",
      "renderer را حذف کنیم",
      "camera را null کنیم"
     ],
     "answer": 0,
     "explain": "میرایی فقط با update() در هر فریم اعمال می‌شود."
    },
    {
     "q": "اگر روی canvas دوباره بکشیم، برای CanvasTexture چه لازم است؟",
     "options": [
      "texture.needsUpdate = true",
      "scene.clear()",
      "renderer.dispose()",
      "هیچ"
     ],
     "answer": 0,
     "explain": "بدون آن، GPU بافت قدیمی را نگه می‌دارد."
    },
    {
     "q": "Raycaster پرتو را از کجا می‌فرستد؟",
     "options": [
      "از دوربین به‌سمت مختصات نرمال‌شده‌ی موس",
      "از مرکز صحنه",
      "از نور",
      "از canvas به سرور"
     ],
     "answer": 0,
     "explain": "setFromCamera(ndc, camera) پرتو را می‌سازد."
    },
    {
     "q": "چرا برای Points از BufferGeometry استفاده می‌کنیم؟",
     "options": [
      "یک draw call برای هزاران ذره",
      "رنگ بهتر",
      "صدا",
      "ذخیره‌سازی"
     ],
     "answer": 0,
     "explain": "کارایی: همه‌ی نقاط در یک فراخوانی رسم می‌شوند."
    }
   ]
  }
 ],
 "project": {
  "title": "گالری سه‌بعدی تعاملی",
  "brief": "یک صحنهٔ سه‌بعدی بساز که ۴-۵ شکل مختلف (با Geometry های متفاوت) رو مثل یه گالری کنار هم بچینه؛ با کلیک روی هرکدوم، اطلاعاتی (مثل نام شکل) توی یه بخش HTML کنار صحنه نمایش داده بشه؛ دوربین هم به‌آرومی دور کل صحنه بچرخه.",
  "requirements": [
   "حداقل ۴ Geometry متفاوت با متریال و نور مناسب",
   "Raycaster برای تشخیص کلیک روی هر شکل و نمایش نامش",
   "چرخش خودکار دوربین دور صحنه (نه فقط چرخش خود اشیا)",
   "Responsive بودن نسبت به تغییر اندازهٔ صفحه"
  ],
  "hints": [
   "برای چرخش خودکار دوربین دور مرکز صحنه، توی animate() مقدار زاویه رو افزایش بده و camera.position.x/z رو با Math.cos/Math.sin بر اساس اون زاویه محاسبه کن، بعد camera.lookAt(0,0,0) رو صدا بزن."
  ]
 }
});
