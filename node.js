(window.COURSES=window.COURSES||[]).push({
 "id": "node",
 "name": "Node.js (بک‌اند)",
 "icon": "🟩",
 "kind": "theory",
 "desc": "ساخت سرور، API و دیتابیس برای اپلیکیشن‌های واقعی",
 "levels": [
  {
   "lessons": [
    {
     "title": "Node.js چیست و چرا برای بک‌اند؟",
     "content": "<p>Node.js محیطی اجرایی است که به جاوااسکریپت اجازه می‌دهد خارج از مرورگر، روی سرور اجرا شود. یعنی می‌توانید با همان زبانی که فرانت‌اند می‌نویسید (JS)، بک‌اند (سروری که داده را پردازش و ذخیره می‌کند) هم بسازید.</p><p>ویژگی کلیدی Node، مدل <b>غیرمسدودکننده و رویدادمحور (non-blocking, event-driven)</b> است: هزاران درخواست هم‌زمان را بدون قفل‌شدن مدیریت می‌کند، چون کارهای کند (مثل خواندن فایل یا دیتابیس) را در پس‌زمینه انجام می‌دهد و منتظرشان نمی‌ماند.</p><p><b>npm</b> (Node Package Manager) مخزن عظیمی از کتابخانه‌های آماده است که با <code class='inline'>npm install</code> نصب می‌شوند.</p>",
     "exercise": "سه نوع اپلیکیشن واقعی که با Node.js ساخته می‌شوند (مثلاً API فروشگاه، چت بلادرنگ) را نام ببرید."
    },
    {
     "title": "اولین سرور با ماژول http",
     "content": "<p>پیش از استفاده از فریم‌ورک‌ها، خودِ Node یک ماژول داخلی به نام <code class='inline'>http</code> دارد که با آن می‌توان یک سرور وب ابتدایی ساخت. این کد روی سیستم شما (نه در مرورگر) با دستور <code class='inline'>node server.js</code> اجرا می‌شود.</p><div class='code-block'><div class='cb-head'>server.js</div><pre><code>const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });\n  res.end('سلام از سرور Node.js!');\n});\n\nserver.listen(3000, () => {\n  console.log('سرور روی پورت 3000 در حال اجراست');\n});</code></pre></div><p>پس از اجرا، با مرورگر به آدرس <code class='inline'>http://localhost:3000</code> سر بزنید تا پیام را ببینید.</p>",
     "exercise": "این کد را روی سیستم خودتان (با Node نصب‌شده) اجرا کنید و پیام سرور را به دلخواه خودتان تغییر دهید."
    },
    {
     "title": "npm و package.json",
     "content": "<p>هر پروژهٔ Node یک فایل <code class='inline'>package.json</code> دارد که هویت پروژه (اسم، ورژن)، اسکریپت‌های اجرایی (<code class='inline'>scripts</code>) و لیست وابستگی‌ها (<code class='inline'>dependencies</code>) را نگه می‌دارد. با <code class='inline'>npm init -y</code> این فایل ساخته می‌شود؛ با <code class='inline'>npm install express</code> یک کتابخانه نصب و خودکار به dependencies اضافه می‌شود. <code class='inline'>devDependencies</code> ابزارهایی هستند که فقط در توسعه لازم‌اند (نه در نسخهٔ نهایی محصول)، مثل nodemon.</p><div class='code-block'><div class='cb-head'>package.json</div><pre><code>{\n  \"name\": \"my-api\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"node server.js\",\n    \"dev\": \"nodemon server.js\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  },\n  \"devDependencies\": {\n    \"nodemon\": \"^3.0.0\"\n  }\n}</code></pre></div>",
     "exercise": "توضیح بده فرق npm install (بدون آرگومان) با npm install express چیه، و package-lock.json چه نقشی داره."
    },
    {
     "title": "ماژول‌ها: require/module.exports و ماژول‌های داخلی",
     "content": "<p>در Node هر فایل یک ماژول جداست. با <code class='inline'>module.exports</code> چیزی رو از یک فایل «بیرون» می‌دید و با <code class='inline'>require()</code> در فایل دیگه وارد می‌کنید. Node چند ماژول داخلی مهم داره: <code class='inline'>path</code> (کار با مسیر فایل‌ها، مستقل از سیستم‌عامل) و <code class='inline'>fs</code> (کار با فایل‌سیستم).</p><div class='code-block'><div class='cb-head'>math.js</div><pre><code>function add(a, b) {\n  return a + b;\n}\nmodule.exports = { add };</code></pre></div><div class='code-block'><div class='cb-head'>app.js</div><pre><code>const { add } = require('./math');\nconst path = require('path');\n\nconsole.log(add(2, 3));\nconsole.log(path.join(__dirname, 'files', 'data.txt'));</code></pre></div>",
     "exercise": "یک ماژول به اسم greetings.js بساز که یک تابع sayHello(name) رو export کنه، بعد توی app.js اون رو import و صدا بزن."
    },
    {
     "title": "File System (fs): خواندن و نوشتن فایل ناهمزمان",
     "content": "<p>ماژول <code class='inline'>fs</code> برای کار با فایل‌هاست. نسخهٔ <code class='inline'>fs.promises</code> با async/await کار می‌کند (بهتر از نسخهٔ callback قدیمی‌تر) — هرگز از نسخهٔ Sync (مثل <code class='inline'>readFileSync</code>) در یک سرور واقعی زیر بار زیاد استفاده نکنید، چون کل سرور رو بلاک می‌کنه.</p><div class='code-block'><div class='cb-head'>files.js</div><pre><code>const fs = require('fs/promises');\n\nasync function saveLog(message) {\n  await fs.appendFile('log.txt', message + '\\n');\n}\n\nasync function readLogs() {\n  const content = await fs.readFile('log.txt', 'utf-8');\n  return content.split('\\n');\n}\n\nsaveLog('کاربر جدید ثبت‌نام کرد').then(() => readLogs()).then(console.log);</code></pre></div>",
     "exercise": "توضیح بده چرا استفاده از readFileSync داخل یک route هندلر Express، در یک سرور با هزاران کاربر هم‌زمان، می‌تونه فاجعه‌بار باشه."
    }
   ],
   "quiz": [
    {
     "q": "مهم‌ترین ویژگی مدل اجرایی Node.js چیست؟",
     "options": [
      "فقط یک درخواست را در هر لحظه می‌پذیرد",
      "غیرمسدودکننده و رویدادمحور است و درخواست‌های هم‌زمان زیادی را مدیریت می‌کند",
      "فقط برای فرانت‌اند است",
      "نیازی به جاوااسکریپت ندارد"
     ],
     "answer": 1,
     "explain": "مدل non-blocking باعث می‌شود Node بدون قفل‌شدن، درخواست‌های زیادی را هم‌زمان مدیریت کند."
    },
    {
     "q": "npm چیست؟",
     "options": [
      "یک مرورگر وب",
      "مدیر بستهٔ Node.js برای نصب کتابخانه‌ها",
      "زبان برنامه‌نویسی جدید",
      "دیتابیس داخلی Node"
     ],
     "answer": 1,
     "explain": "npm بزرگ‌ترین مخزن کتابخانه‌های جاوااسکریپت را در اختیار توسعه‌دهنده قرار می‌دهد."
    },
    {
     "q": "ماژول http در کد سرور Node برای چه استفاده می‌شود؟",
     "options": [
      "اتصال به دیتابیس",
      "ساخت سرور وب ابتدایی و مدیریت درخواست/پاسخ",
      "استایل‌دهی صفحه",
      "تعریف کامپوننت React"
     ],
     "answer": 1,
     "explain": "http.createServer پایه‌ای‌ترین راه برای پذیرفتن درخواست‌های HTTP در Node است."
    },
    {
     "q": "devDependencies در package.json برای چه نوع بسته‌هایی است؟",
     "options": [
      "بسته‌هایی که در نسخهٔ نهایی محصول هم لازم‌اند",
      "ابزارهایی که فقط هنگام توسعه لازم‌اند (مثل nodemon)",
      "بسته‌های خراب",
      "هیچ‌کدام"
     ],
     "answer": 1,
     "explain": "devDependencies برای ابزارهای کمکی توسعه است، نه چیزی که در production اجرا می‌شود."
    },
    {
     "q": "چرا استفاده از نسخهٔ Sync توابع fs (مثل readFileSync) در یک سرور Express توصیه نمی‌شود؟",
     "options": [
      "کندتر تایپ می‌شود",
      "کل رشتهٔ اجرای Node را در طول عملیات فایل بلاک می‌کند",
      "خطا می‌دهد",
      "اصلاً کار نمی‌کند"
     ],
     "answer": 1,
     "explain": "عملیات Sync رشتهٔ اصلی Node را متوقف می‌کند و همهٔ درخواست‌های دیگر منتظر می‌مانند."
    }
   ],
   "challenge": {
    "task": "یک ماژول logger.js بساز که یک تابع log(message) داشته باشه؛ این تابع باید هم پیام رو با console.log چاپ کنه و هم با fs.promises.appendFile به یک فایل app.log اضافه کنه (با await). بعد توی یک فایل جدا این ماژول رو import و چندبار صداش بزن.",
    "hint1": "module.exports = { log } رو در پایان logger.js بذار؛ تابع log باید async باشه چون داخلش await فراخوانی می‌شه.",
    "hint2": "موقع appendFile، یادت نره یک '\\n' به انتهای پیام اضافه کنی تا هر پیام توی یک خط جدا بیفته.",
    "solution": "// logger.js\nconst fs = require('fs/promises');\n\nasync function log(message) {\n  console.log(message);\n  await fs.appendFile('app.log', message + '\\n');\n}\n\nmodule.exports = { log };\n\n// app.js\nconst { log } = require('./logger');\nlog('سرور روشن شد').then(() => log('یک درخواست جدید آمد'));"
   }
  },
  {
   "lessons": [
    {
     "title": "فریم‌ورک Express: مسیرها و میدلور",
     "content": "<p><b>Express</b> محبوب‌ترین فریم‌ورک Node برای ساخت سرور و API است؛ نوشتن مسیرها (routes) را بسیار ساده‌تر از ماژول خام http می‌کند.</p><p><b>Middleware</b> تابعی است که بین دریافت درخواست و ارسال پاسخ اجرا می‌شود — مثلاً برای لاگ‌گیری، بررسی احراز هویت یا خواندن بدنهٔ JSON درخواست.</p><div class='code-block'><div class='cb-head'>app.js</div><pre><code>const express = require('express');\nconst app = express();\napp.use(express.json()); // میدلور خواندن JSON\n\napp.get('/', (req, res) => {\n  res.send('صفحهٔ اصلی API');\n});\n\napp.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id, name: 'کاربر نمونه' });\n});\n\napp.listen(3000, () => console.log('سرور Express فعال شد'));</code></pre></div>",
     "exercise": "یک مسیر جدید GET با آدرس /about بسازید که یک پیام JSON دربارهٔ سایت خودتان برگرداند."
    },
    {
     "title": "ساخت REST API کامل (CRUD)",
     "content": "<p>یک API استاندارد REST معمولاً چهار عملیات پایه (CRUD) دارد: <b>Create</b> (POST)، <b>Read</b> (GET)، <b>Update</b> (PUT/PATCH) و <b>Delete</b> (DELETE). این ساختار همان چیزی است که پشت اکثر اپلیکیشن‌های واقعی (فروشگاه، شبکهٔ اجتماعی) قرار دارد.</p><div class='code-block'><div class='cb-head'>routes/todos.js</div><pre><code>let todos = [{ id: 1, text: 'یادگیری Node' }];\n\napp.get('/todos', (req, res) => res.json(todos));\n\napp.post('/todos', (req, res) => {\n  const todo = { id: Date.now(), text: req.body.text };\n  todos.push(todo);\n  res.status(201).json(todo);\n});\n\napp.put('/todos/:id', (req, res) => {\n  const todo = todos.find(t => t.id == req.params.id);\n  if (todo) todo.text = req.body.text;\n  res.json(todo);\n});\n\napp.delete('/todos/:id', (req, res) => {\n  todos = todos.filter(t => t.id != req.params.id);\n  res.status(204).end();\n});</code></pre></div>",
     "exercise": "یک فیلد done (boolean) به مدل todo اضافه کنید و یک مسیر PATCH برای تغییر فقط همان فیلد بسازید."
    },
    {
     "title": "Route Parameters در برابر Query Strings",
     "content": "<p><code class='inline'>req.params</code> برای بخش‌های ثابتِ ساختار URL است (مثل شناسهٔ منبع: <code class='inline'>/users/:id</code>)؛ <code class='inline'>req.query</code> برای پارامترهای اختیاری بعد از <code class='inline'>?</code> است (مثل فیلتر/صفحه‌بندی: <code class='inline'>/products?category=shoes&page=2</code>). این تفاوت طراحی API خوب رو مشخص می‌کنه: چیزی که هویت منبع رو مشخص می‌کنه (params)، چیزی که فقط نتیجه رو فیلتر می‌کنه (query).</p><div class='code-block'><div class='cb-head'>routes.js</div><pre><code>app.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id });\n});\n\napp.get('/products', (req, res) => {\n  const { category, page = 1 } = req.query;\n  res.json({ category, page: Number(page) });\n});\n// درخواست: GET /products?category=shoes&page=2</code></pre></div>",
     "exercise": "یک مسیر GET /search طراحی کن که با query string یک کلمهٔ q و یک limit اختیاری بگیره (مثل /search?q=book&limit=5)."
    },
    {
     "title": "Middleware سفارشی و مدیریت خطای متمرکز",
     "content": "<p>می‌توانید Middleware خودتان را بنویسید — تابعی با سه پارامتر <code class='inline'>(req, res, next)</code> که با صدازدن <code class='inline'>next()</code> اجازه می‌دهد درخواست به مرحلهٔ بعد برود. Middleware مخصوص خطا چهار پارامتر دارد <code class='inline'>(err, req, res, next)</code> و باید در انتهای همهٔ route ها تعریف شود تا خطاهای پیش‌بینی‌نشده را یک‌جا مدیریت کند — به‌جای try/catch پراکنده در هر route.</p><div class='code-block'><div class='cb-head'>app.js</div><pre><code>function logger(req, res, next) {\n  console.log(`${req.method} ${req.url}`);\n  next(); // بدون این خط، درخواست هیچ‌وقت جواب داده نمی‌شود!\n}\napp.use(logger);\n\napp.get('/crash', (req, res) => {\n  throw new Error('یک خطای عمدی');\n});\n\n// میدلور خطا، همیشه آخر:\napp.use((err, req, res, next) => {\n  console.error(err.message);\n  res.status(500).json({ error: 'مشکلی پیش آمد' });\n});</code></pre></div>",
     "exercise": "توضیح بده اگه توی یک middleware، next() رو صدا نزنی، برای کاربری که درخواست فرستاده چه اتفاقی می‌افته."
    },
    {
     "title": "سازمان‌دهی مسیرها با Router",
     "content": "<p>وقتی تعداد route ها زیاد می‌شه، نوشتن همه‌شون توی یک فایل app.js شلوغ و غیرقابل‌نگهداری می‌شه. <code class='inline'>express.Router()</code> اجازه می‌ده route های مرتبط (مثلاً همهٔ route های کاربران) رو توی یک فایل جدا بنویسید و بعد با <code class='inline'>app.use()</code> به اپ اصلی وصل کنید.</p><div class='code-block'><div class='cb-head'>routes/users.js</div><pre><code>const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.json({ msg: 'لیست کاربران' }));\nrouter.get('/:id', (req, res) => res.json({ id: req.params.id }));\n\nmodule.exports = router;</code></pre></div><div class='code-block'><div class='cb-head'>app.js</div><pre><code>const usersRouter = require('./routes/users');\napp.use('/users', usersRouter);\n// حالا GET /users و GET /users/5 هر دو کار می‌کنن</code></pre></div>",
     "exercise": "یک Router جدا برای products بساز (فایل routes/products.js) با دو مسیر GET / و GET /:id، و به app اصلی با app.use('/products', ...) وصلش کن."
    }
   ],
   "quiz": [
    {
     "q": "Middleware در Express چه نقشی دارد؟",
     "options": [
      "فقط رنگ صفحه را تغییر می‌دهد",
      "کدی است که بین دریافت درخواست و ارسال پاسخ اجرا می‌شود (مثل لاگ یا احراز هویت)",
      "دیتابیس می‌سازد",
      "فقط برای فایل‌های CSS است"
     ],
     "answer": 1,
     "explain": "میدلورها زنجیره‌ای از پردازش‌ها را روی هر درخواست اجرا می‌کنند."
    },
    {
     "q": "کدام متد HTTP معمولاً برای ساخت (Create) یک منبع جدید استفاده می‌شود؟",
     "options": [
      "GET",
      "POST",
      "DELETE",
      "HEAD"
     ],
     "answer": 1,
     "explain": "POST برای ارسال داده و ایجاد منبع جدید در سرور به کار می‌رود."
    },
    {
     "q": "در الگوی CRUD، حرف U به کدام عملیات اشاره دارد؟",
     "options": [
      "Upload",
      "Update (به‌روزرسانی)",
      "Undo",
      "Upgrade"
     ],
     "answer": 1,
     "explain": "CRUD مخفف Create, Read, Update, Delete است."
    },
    {
     "q": "تفاوت اصلی req.params و req.query چیست؟",
     "options": [
      "تفاوتی ندارند",
      "params بخش ثابت مسیر URL (مثل شناسه) و query پارامترهای اختیاری بعد از ? هستند",
      "query فقط برای POST است",
      "params فقط عدد قبول می‌کند"
     ],
     "answer": 1,
     "explain": "params هویت منبع را مشخص می‌کند؛ query برای فیلتر/تنظیمات اختیاری نتیجه است."
    },
    {
     "q": "اگر داخل یک middleware تابع next() صدا زده نشود چه اتفاقی می‌افتد؟",
     "options": [
      "درخواست سریع‌تر پردازش می‌شود",
      "درخواست معلق می‌ماند و هیچ پاسخی برای کاربر ارسال نمی‌شود",
      "سرور کرش می‌کند",
      "خطایی رخ نمی‌دهد"
     ],
     "answer": 1,
     "explain": "next() کنترل را به middleware/route بعدی می‌دهد؛ بدون آن، چرخهٔ درخواست کامل نمی‌شود."
    }
   ],
   "challenge": {
    "task": "یک Router جدا برای comments بساز با route های GET / (لیست کامنت‌ها)، POST / (افزودن کامنت جدید با req.body.text)، و DELETE /:id. یک middleware سفارشی هم بنویس که قبل از همهٔ route های comments، طول req.body.text رو چک کنه و اگه بیشتر از ۲۰۰ کاراکتر بود با status 400 خطا برگردونه (به‌جای رسیدن به route اصلی).",
    "hint1": "middleware اعتبارسنجی رو فقط روی route های POST نیاز داری؛ می‌تونی به‌عنوان آرگومان دوم مستقیم به همون route بدیش: router.post('/', validateComment, handler).",
    "hint2": "برای رد کردن درخواست به‌جای next()، از return res.status(400).json({error:'...'}) استفاده کن — این باعث می‌شه اصلاً به handler اصلی نرسه.",
    "solution": "const router = express.Router();\nlet comments = [];\n\nfunction validateComment(req, res, next) {\n  if (req.body.text && req.body.text.length > 200) {\n    return res.status(400).json({ error: 'کامنت خیلی طولانیه' });\n  }\n  next();\n}\n\nrouter.get('/', (req, res) => res.json(comments));\nrouter.post('/', validateComment, (req, res) => {\n  const comment = { id: Date.now(), text: req.body.text };\n  comments.push(comment);\n  res.status(201).json(comment);\n});\nrouter.delete('/:id', (req, res) => {\n  comments = comments.filter(c => c.id != req.params.id);\n  res.status(204).end();\n});\n\nmodule.exports = router;"
   }
  },
  {
   "lessons": [
    {
     "title": "اتصال به دیتابیس (MongoDB) و مدل‌سازی داده",
     "content": "<p>در اپلیکیشن واقعی، داده باید در یک دیتابیس (نه در حافظهٔ موقت) ذخیره شود تا با ری‌استارت سرور از بین نرود. <b>MongoDB</b> یک دیتابیس سندی (NoSQL) محبوب است و <b>Mongoose</b> کتابخانه‌ای است که کار با آن را در Node ساده می‌کند.</p><div class='code-block'><div class='cb-head'>models/User.js</div><pre><code>const mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\n\nmodule.exports = mongoose.model('User', userSchema);</code></pre></div><p>برای دیتابیس‌های رابطه‌ای (SQL) مثل PostgreSQL یا MySQL، معمولاً از ابزارهایی مثل <b>Prisma</b> یا <b>Sequelize</b> استفاده می‌شود.</p>",
     "exercise": "یک Schema برای Product با فیلدهای name، price و inStock (boolean) طراحی کنید."
    },
    {
     "title": "احراز هویت با JWT و رمزنگاری پسورد",
     "content": "<p>هرگز نباید پسورد کاربر را به‌صورت خام ذخیره کرد. کتابخانهٔ <b>bcrypt</b> پسورد را هش (hash) می‌کند. برای این‌که کاربر بعد از ورود «شناخته‌شده» بماند، از <b>JWT (JSON Web Token)</b> استفاده می‌شود: توکنی که سرور صادر می‌کند و کاربر در درخواست‌های بعدی آن را ارسال می‌کند تا هویتش تأیید شود.</p><div class='code-block'><div class='cb-head'>auth.js</div><pre><code>const bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\n\nasync function register(email, plainPassword) {\n  const hashed = await bcrypt.hash(plainPassword, 10);\n  // ذخیرهٔ hashed در دیتابیس به‌جای پسورد خام\n  return hashed;\n}\n\nfunction createToken(userId) {\n  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });\n}</code></pre></div>",
     "exercise": "توضیح دهید چرا ذخیرهٔ مستقیم پسورد کاربر (بدون هش) در دیتابیس یک ریسک امنیتی جدی است."
    },
    {
     "title": "متغیرهای محیطی با dotenv",
     "content": "<p>اطلاعات حساس (رمز دیتابیس، JWT Secret، کلید API) هرگز نباید مستقیم در کد نوشته بشن. کتابخانهٔ <code class='inline'>dotenv</code> اجازه می‌ده این مقادیر رو در یک فایل <code class='inline'>.env</code> (که در <code class='inline'>.gitignore</code> قرار می‌گیره و هرگز commit نمی‌شه) نگه دارید و در کد با <code class='inline'>process.env</code> بهشون دسترسی داشته باشید.</p><div class='code-block'><div class='cb-head'>.env</div><pre><code>DATABASE_URL=postgres://user:pass@localhost/mydb\nJWT_SECRET=a-very-long-random-string\nPORT=3000</code></pre></div><div class='code-block'><div class='cb-head'>server.js</div><pre><code>require('dotenv').config();\n\nconst PORT = process.env.PORT || 3000;\nconst dbUrl = process.env.DATABASE_URL;\n\napp.listen(PORT, () => console.log(`سرور روی پورت ${PORT}`));</code></pre></div>",
     "exercise": "یک فایل .env فرضی با سه متغیر (PORT، JWT_SECRET، DATABASE_URL) بنویس، و یک خط .gitignore که مطمئن بشه این فایل هیچ‌وقت commit نمی‌شه."
    },
    {
     "title": "Middleware احراز هویت: محافظت از Route ها",
     "content": "<p>برای این‌که فقط کاربرانِ لاگین‌کرده به یک route (مثل پروفایل یا داشبورد ادمین) دسترسی داشته باشند، یک middleware احراز هویت می‌نویسیم: توکن JWT رو از هدر درخواست می‌خونه، اعتبارش رو چک می‌کنه، و اگه معتبر بود اجازهٔ عبور می‌ده؛ وگرنه با status 401 رد می‌کنه.</p><div class='code-block'><div class='cb-head'>middleware/auth.js</div><pre><code>const jwt = require('jsonwebtoken');\n\nfunction requireAuth(req, res, next) {\n  const authHeader = req.headers.authorization; // 'Bearer xxxxx'\n  const token = authHeader && authHeader.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'توکن ارسال نشده' });\n\n  try {\n    const payload = jwt.verify(token, process.env.JWT_SECRET);\n    req.userId = payload.userId; // برای استفاده در route بعدی\n    next();\n  } catch (err) {\n    return res.status(401).json({ error: 'توکن نامعتبر است' });\n  }\n}\n\nmodule.exports = requireAuth;</code></pre></div><div class='code-block'><div class='cb-head'>app.js</div><pre><code>const requireAuth = require('./middleware/auth');\napp.get('/profile', requireAuth, (req, res) => {\n  res.json({ userId: req.userId });\n});</code></pre></div>",
     "exercise": "توضیح بده چرا middleware احراز هویت رو به‌جای کدنویسی داخل هر route جدا، یک‌بار می‌نویسیم و به route های مختلف اضافه می‌کنیم (اصل DRY: Don't Repeat Yourself)."
    },
    {
     "title": "اعتبارسنجی ورودی (Validation)",
     "content": "<p>هیچ‌وقت نباید مستقیم به داده‌ای که از کاربر می‌آید (req.body) اعتماد کرد — ممکن است ناقص، اشتباه یا حتی مخرب باشد. کتابخانه‌هایی مثل <b>express-validator</b> یا <b>Joi</b> قوانین اعتبارسنجی (اجباری‌بودن، فرمت ایمیل، طول رشته) را تعریف و قبل از رسیدن به منطق اصلی، درخواست‌های نامعتبر را رد می‌کنند.</p><div class='code-block'><div class='cb-head'>validation.js (با Joi)</div><pre><code>const Joi = require('joi');\n\nconst userSchema = Joi.object({\n  name: Joi.string().min(2).required(),\n  email: Joi.string().email().required(),\n  age: Joi.number().integer().min(0).optional()\n});\n\napp.post('/users', (req, res) => {\n  const { error } = userSchema.validate(req.body);\n  if (error) return res.status(400).json({ error: error.details[0].message });\n  // ادامهٔ منطق ثبت کاربر...\n});</code></pre></div>",
     "exercise": "یک Joi schema برای یک محصول (product) با فیلدهای name (رشتهٔ اجباری) و price (عدد مثبت اجباری) طراحی کن."
    }
   ],
   "quiz": [
    {
     "q": "چرا از Mongoose برای کار با MongoDB استفاده می‌شود؟",
     "options": [
      "برای طراحی رابط کاربری",
      "برای تعریف ساختار داده (Schema) و سادگی تعامل با دیتابیس",
      "برای فشرده‌سازی تصاویر",
      "جایگزین Node.js است"
     ],
     "answer": 1,
     "explain": "Mongoose لایه‌ای برای مدل‌سازی داده و اعتبارسنجی روی MongoDB فراهم می‌کند."
    },
    {
     "q": "bcrypt در فرآیند احراز هویت چه کاری انجام می‌دهد؟",
     "options": [
      "پسورد را هش می‌کند تا به‌صورت خام ذخیره نشود",
      "سرعت سرور را بالا می‌برد",
      "ایمیل کاربر را اعتبارسنجی می‌کند",
      "توکن JWT می‌سازد"
     ],
     "answer": 0,
     "explain": "هش‌کردن باعث می‌شود حتی در صورت نشت دیتابیس، پسورد واقعی کاربران فاش نشود."
    },
    {
     "q": "JWT معمولاً برای چه استفاده می‌شود؟",
     "options": [
      "ذخیرهٔ تصاویر",
      "اثبات هویت کاربر در درخواست‌های بعدی بدون نیاز به لاگین مجدد در هر بار",
      "فشرده‌سازی داده",
      "استایل‌دهی به صفحه"
     ],
     "answer": 1,
     "explain": "کاربر پس از ورود، توکن JWT را دریافت و در درخواست‌های بعدی ارسال می‌کند."
    },
    {
     "q": "چرا از dotenv و فایل .env برای اطلاعات حساس استفاده می‌کنیم؟",
     "options": [
      "برای زیباترشدن کد",
      "برای جداکردن اطلاعات حساس از کد و جلوگیری از commit شدن آن‌ها روی Git",
      "چون Node بدون آن اجرا نمی‌شود",
      "برای افزایش سرعت"
     ],
     "answer": 1,
     "explain": "فایل .env در .gitignore قرار می‌گیرد و هیچ‌وقت وارد مخزن کد نمی‌شود."
    },
    {
     "q": "هدف اصلی یک middleware اعتبارسنجی (Validation) چیست؟",
     "options": [
      "زیباتر کردن پاسخ JSON",
      "رد کردن درخواست‌های ناقص/نامعتبر قبل از رسیدن به منطق اصلی",
      "اتصال به دیتابیس",
      "افزایش سرعت سرور"
     ],
     "answer": 1,
     "explain": "اعتبارسنجی زودهنگام از رسیدن داده‌های خراب یا مخرب به عمق برنامه جلوگیری می‌کند."
    }
   ],
   "challenge": {
    "task": "یک middleware به اسم requireRole(role) بساز که خودش یک middleware برمی‌گردونه (Higher-Order Function) — این middleware باید چک کنه req.userRole (که فرض کن قبلاً توسط requireAuth ست شده) برابر با role ورودی هست یا نه؛ اگه نبود، با status 403 رد کنه. بعد یک route فرضی /admin بساز که فقط با requireRole('admin') قابل‌دسترسیه.",
    "hint1": "چون requireRole باید یک آرگومان (role) بگیره ولی middleware واقعی امضای (req,res,next) داره، باید یک تابع که یک تابع برمی‌گردونه بنویسی: function requireRole(role) { return function(req,res,next) {...} }",
    "hint2": "برای رد درخواست، status(403) استفاده کن (نه 401؛ چون 403 یعنی 'می‌دونیم کی هستی ولی اجازه نداری'، برخلاف 401 که یعنی 'اصلاً معلوم نیست کی هستی').",
    "solution": "function requireRole(role) {\n  return function(req, res, next) {\n    if (req.userRole !== role) {\n      return res.status(403).json({ error: 'دسترسی غیرمجاز' });\n    }\n    next();\n  };\n}\n\napp.get('/admin', requireAuth, requireRole('admin'), (req, res) => {\n  res.json({ msg: 'به پنل ادمین خوش آمدید' });\n});"
   }
  },
  {
   "lessons": [
    {
     "title": "ارتباط بلادرنگ با WebSocket (Socket.io)",
     "content": "<p>HTTP معمولی برای هر تعامل نیاز به یک درخواست جدید دارد. برای ویژگی‌هایی مثل چت زنده یا اعلان لحظه‌ای، از <b>WebSocket</b> استفاده می‌شود: یک اتصال بازِ دوطرفه بین کاربر و سرور که هر دو طرف می‌توانند در هر لحظه پیام بفرستند. <b>Socket.io</b> محبوب‌ترین کتابخانهٔ Node برای این کار است.</p><div class='code-block'><div class='cb-head'>server.js</div><pre><code>const { Server } = require('socket.io');\nconst io = new Server(3001);\n\nio.on('connection', (socket) => {\n  console.log('کاربر جدید وصل شد');\n  socket.on('chat-message', (msg) => {\n    io.emit('chat-message', msg); // ارسال به همهٔ کاربران\n  });\n});</code></pre></div>",
     "exercise": "توضیح دهید چرا برای یک اپلیکیشن چت زنده، WebSocket نسبت به ارسال درخواست HTTP هر چند ثانیه (polling) بهتر است."
    },
    {
     "title": "تست، Docker و آماده‌سازی برای دیپلوی",
     "content": "<p>پیش از انتشار یک سرویس واقعی: با ابزارهایی مثل <b>Jest</b> تست‌های خودکار می‌نویسیم تا مطمئن شویم تغییرات جدید چیزی را خراب نکرده‌اند؛ اطلاعات حساس (کلید API، رمز دیتابیس) را به‌جای نوشتن مستقیم در کد، در متغیرهای محیطی (<b>environment variables</b>) قرار می‌دهیم؛ و با <b>Docker</b> اپلیکیشن را همراه تمام وابستگی‌هایش در یک «بستهٔ» قابل‌اجرا روی هر سروری بسته‌بندی می‌کنیم.</p><div class='code-block'><div class='cb-head'>Dockerfile (نمونه)</div><pre><code>FROM node:20\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]</code></pre></div><p>ابزارهایی مثل <b>PM2</b> هم اطمینان می‌دهند سرور Node در صورت کرش، خودکار دوباره بالا بیاید.</p>",
     "exercise": "فهرست کنید چه اطلاعات حساسی در یک پروژهٔ Node واقعی باید در environment variables قرار گیرند، نه در کد."
    },
    {
     "title": "Logging حرفه‌ای با Morgan/Winston",
     "content": "<p>در توسعه، <code class='inline'>console.log</code> کافیه؛ ولی در یک سرور واقعی زیر بار، نیاز به <b>لاگ‌گیری ساختاریافته</b> دارید: کتابخانهٔ <code class='inline'>morgan</code> خودکار هر درخواست HTTP رو لاگ می‌کنه (متد، مسیر، کد وضعیت، زمان پاسخ)؛ <code class='inline'>winston</code> برای لاگ‌های سفارشی‌تر با سطح‌بندی (info, warn, error) و ذخیره در فایل یا سرویس مانیتورینگ استفاده می‌شه.</p><div class='code-block'><div class='cb-head'>app.js</div><pre><code>const morgan = require('morgan');\napp.use(morgan('combined')); // هر درخواست رو خودکار لاگ می‌کنه\n\n// خروجی نمونه:\n// ::1 - - [10/Sep/2026] \"GET /users HTTP/1.1\" 200 154 - 12.4 ms</code></pre></div>",
     "exercise": "توضیح بده چرا در یک سرور واقعی با هزاران درخواست در روز، فقط console.log کافی نیست و به یک سیستم لاگ ساختاریافته نیاز داریم."
    },
    {
     "title": "CI/CD: تست و دیپلوی خودکار",
     "content": "<p><b>CI (Continuous Integration)</b> یعنی هر بار که کد push می‌شه، خودکار تست‌ها اجرا بشن تا مطمئن بشیم چیزی خراب نشده. <b>CD (Continuous Deployment)</b> یعنی اگه تست‌ها قبول شدن، خودکار نسخهٔ جدید روی سرور دیپلوی بشه — بدون نیاز به کار دستی. <b>GitHub Actions</b> ابزار رایج برای تعریف این pipeline است.</p><div class='code-block'><div class='cb-head'>.github/workflows/ci.yml</div><pre><code>name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 20\n      - run: npm install\n      - run: npm test</code></pre></div>",
     "exercise": "توضیح بده چرا اجرای خودکار تست‌ها قبل از دیپلوی، از این‌که یک باگ مستقیم به کاربران واقعی برسه جلوگیری می‌کنه."
    },
    {
     "title": "مقیاس‌پذیری: Cluster و Load Balancing (مفهومی)",
     "content": "<p>Node به‌طور پیش‌فرض تک‌رشته‌ای (single-threaded) است — فقط از یک هستهٔ پردازنده استفاده می‌کند. برای استفاده از چند هسته، ماژول <code class='inline'>cluster</code> چند نمونه (worker) از سرور را روی هستهٔ‌های مختلف اجرا می‌کند. در مقیاس بزرگ‌تر، یک <b>Load Balancer</b> (مثل Nginx) درخواست‌ها را بین چند سرور مختلف پخش می‌کند تا هیچ‌کدام بیش‌ازحد بار نگیرد.</p><div class='code-block'><div class='cb-head'>cluster.js (مفهومی)</div><pre><code>const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isPrimary) {\n  const cpuCount = os.cpus().length;\n  for (let i = 0; i < cpuCount; i++) cluster.fork();\n} else {\n  require('./server'); // هر worker یک نمونهٔ کامل از سرور است\n}</code></pre></div>",
     "exercise": "توضیح بده چرا یک سایت پرترافیک به Load Balancer نیاز داره، حتی اگه هر سرورش از cluster هم استفاده کنه."
    },
    {
     "title": "Stream و Worker Thread",
     "content": "<p>برای فایل‌های بزرگ، همه‌چیز را در حافظه نخوان؛ <b>Stream</b> داده را تکه‌تکه پردازش می‌کند. کارهای سنگین CPU (فشرده‌سازی، پردازش تصویر) رشتهٔ اصلی را قفل می‌کنند؛ آن‌ها را به <code class='inline'>worker_threads</code> بسپار.</p><div class='code-block'><div class='cb-head'>copy.js</div><pre><code>const fs = require('fs');\nfs.createReadStream('big.mp4')\n  .pipe(fs.createWriteStream('copy.mp4'))\n  .on('finish', () => console.log('تمام'));</code></pre></div>",
     "exercise": "یک فایل CSV بزرگ را با stream خط‌به‌خط بخوان."
    },
    {
     "title": "تست API با Jest و Supertest",
     "content": "<p>Supertest بدون بالا آوردن سرور واقعی به مسیرهای Express درخواست می‌فرستد و Jest نتیجه را بررسی می‌کند. هر مسیر را با حالت موفق و حالت خطا (ورودی اشتباه، بدون توکن) تست کن.</p><div class='code-block'><div class='cb-head'>api.test.js</div><pre><code>const request = require('supertest');\nconst app = require('./app');\n\ntest('GET /health', async () => {\n  const res = await request(app).get('/health');\n  expect(res.status).toBe(200);\n});\n\ntest('POST /users بدون ایمیل خطا می‌دهد', async () => {\n  const res = await request(app).post('/users').send({});\n  expect(res.status).toBe(400);\n});</code></pre></div>",
     "exercise": "برای مسیر login سه تست (موفق، رمز اشتباه، بدون فیلد) بنویس."
    },
    {
     "title": "Event Loop در عمق: فازها، Microtask و nextTick",
     "content": "<p>Event Loop چند فاز دارد: timers، pending، poll، check (<code class='inline'>setImmediate</code>) و close. بین هر مرحله، صف <code class='inline'>process.nextTick</code> و بعد Promiseها (microtask) خالی می‌شوند. nextTick زیاد می‌تواند I/O را گرسنه نگه دارد. ترتیب اجرا را بشناس تا باگ‌های زمان‌بندی را بفهمی.<div class='code-block'><div class='cb-head'>order.js</div><pre><code>setTimeout(()=>console.log('timeout'),0);\nsetImmediate(()=>console.log('immediate'));\nPromise.resolve().then(()=>console.log('promise'));\nprocess.nextTick(()=>console.log('tick'));</code></pre></div></p>",
     "exercise": "خروجی کد بالا را پیش‌بینی و سپس اجرا کن."
    },
    {
     "title": "Stream پیشرفته: Backpressure، pipeline و Transform",
     "content": "<p>وقتی نوشتن کندتر از خواندن است، <code class='inline'>write()</code> مقدار false برمی‌گرداند و باید منتظر رویداد <code class='inline'>drain</code> بمانی (Backpressure). <code class='inline'>stream.pipeline</code> خطا و پاکسازی را درست مدیریت می‌کند و از <code class='inline'>.pipe</code> امن‌تر است. با <code class='inline'>Transform</code> می‌توانی داده را در جریان پردازش کنی (CSV به JSON).<div class='code-block'><div class='cb-head'>pipe.js</div><pre><code>import { pipeline } from 'node:stream/promises';\nawait pipeline(\n  fs.createReadStream('in.csv'),\n  parseCsv(), toJson(),\n  fs.createWriteStream('out.json')\n);</code></pre></div></p>",
     "exercise": "یک فایل ۱ گیگابایتی را با حافظه‌ی ثابت پردازش کن."
    },
    {
     "title": "Cluster، Worker Thread و child_process",
     "content": "<p>Node تک‌رشته‌ای است. <code class='inline'>cluster</code> چند پردازش از یک سرور HTTP می‌سازد تا همه‌ی هسته‌ها استفاده شوند. <code class='inline'>worker_threads</code> کار سنگین CPU را داخل همان پردازش با حافظه‌ی اشتراکی (SharedArrayBuffer) انجام می‌دهد. <code class='inline'>child_process</code> برنامهٔ بیرونی را اجرا می‌کند. انتخاب: I/O سنگین → cluster، CPU سنگین → worker.</p>",
     "exercise": "یک endpoint تولید PDF را به worker منتقل کن و تفاوت سرعت را ببین."
    },
    {
     "title": "پروفایل حافظه و پیداکردن نشت",
     "content": "<p>با <code class='inline'>node --inspect</code> و Chrome DevTools دو Heap Snapshot بگیر و مقایسه کن؛ آبجکت‌هایی که فقط زیاد می‌شوند نشت‌اند. منابع رایج: Cache بدون سقف، Listener که حذف نمی‌شود، closureهای نگه‌دارنده و Timer فراموش‌شده. برای cache از LRU با حداکثر اندازه استفاده کن.</p>",
     "exercise": "یک نشت ساختگی بساز و با Heap Snapshot ریشه‌اش را پیدا کن."
    },
    {
     "title": "مدیریت خطا و خاموشی تمیز",
     "content": "<p>خطای عملیاتی (شبکه قطع، ورودی بد) قابل‌انتظار است و باید مدیریت شود؛ خطای برنامه‌نویسی (باگ) یعنی وضعیت نامعتبر و بهتر است پردازش لاگ بگیرد و ری‌استارت شود. <code class='inline'>unhandledRejection</code> را لاگ کن. با SIGTERM سرور را تمیز ببند: اتصال جدید نپذیر، درخواست‌های در حال انجام را تمام کن، اتصال دیتابیس را ببند و بعد خارج شو.<div class='code-block'><div class='cb-head'>shutdown.js</div><pre><code>process.on('SIGTERM', async () => {\n  server.close(async () => {\n    await db.end();\n    process.exit(0);\n  });\n});</code></pre></div></p>",
     "exercise": "Graceful shutdown را با تست ارسال SIGTERM بررسی کن."
    },
    {
     "title": "معماری لایه‌ای و Fastify",
     "content": "<p>کد را به Controller (HTTP)، Service (منطق) و Repository (داده) تقسیم کن تا قابل‌تست باشد و وابستگی‌ها تزریق شوند. Fastify با Schema (JSON Schema) هم اعتبارسنجی و هم سریال‌سازی بسیار سریع می‌دهد و معمولاً چند برابر Express توان دارد. پلاگین‌ها و Hookها ساختار ماژولار می‌سازند.</p>",
     "exercise": "یک API را از Express به Fastify با Schema منتقل کن و سرعت را مقایسه کن."
    },
    {
     "title": "اعتبارسنجی ورودی و مدیریت پیکربندی",
     "content": "<p>هر ورودی (body, query, header) را با شِما (Zod/Joi/JSON Schema) اعتبارسنجی کن و فقط داده‌ی تمیز را به لایه‌های پایین بده. پیکربندی را در متغیر محیطی نگه دار، هنگام شروع اعتبارسنجی کن (اگر ناقص بود برنامه بالا نیاید) و هرگز Secret را در Git نگذار.</p>",
     "exercise": "فایل config را بساز که با نبود متغیر ضروری شروع را متوقف کند."
    },
    {
     "title": "احراز هویت تولیدی: Refresh Rotation و Session Redis",
     "content": "<p>Access Token کوتاه‌عمر (۱۵ دقیقه) و Refresh Token چرخشی بده؛ هر استفاده توکن جدید می‌دهد و استفاده‌ی دوباره از توکن قدیمی یعنی سرقت و باید کل خانواده ابطال شود. نشست‌ها را در Redis نگه دار تا قابل ابطال باشند. رمز را با Argon2 هش کن و ورود ناموفق را محدود کن.</p>",
     "exercise": "جریان Refresh Token با تشخیص استفاده‌ی مجدد را پیاده کن."
    },
    {
     "title": "صف کار با BullMQ: تلاش مجدد و Idempotency",
     "content": "<p>کارهای کند یا ناپایدار (ایمیل، ویدئو، وب‌هوک) را به صف Redis (BullMQ) بسپار. <code class='inline'>attempts</code> و <code class='inline'>backoff</code> نمایی تلاش مجدد را مدیریت می‌کنند و Dead Letter Queue کارهای شکست‌خورده را نگه می‌دارد. هر کار باید Idempotent باشد چون ممکن است دو بار اجرا شود.</p>",
     "exercise": "کار ارسال ایمیل را idempotent با شناسه‌ی یکتا بنویس."
    },
    {
     "title": "کش و کنترل ترافیک",
     "content": "<p>کش چندلایه: حافظه‌ی پردازش، Redis و CDN. هدرهای <code class='inline'>Cache-Control</code> و <code class='inline'>ETag</code> کش مرورگر را کنترل می‌کنند. برای جلوگیری از Cache Stampede (هجوم همزمان هنگام انقضا) از قفل یا انقضای تصادفی استفاده کن. Rate Limit را با Sliding Window در Redis بساز.</p>",
     "exercise": "Cache با حفاظت Stampede برای یک endpoint پرتکرار بنویس."
    },
    {
     "title": "تست در Node: node:test، Supertest و Testcontainers",
     "content": "<p>Node اجراکننده‌ی تست داخلی (<code class='inline'>node:test</code>) دارد. API را با Supertest و دیتابیس واقعی در Docker (Testcontainers) تست کن تا به رفتار واقعی نزدیک‌تر باشد. فقط مرزهای بیرونی (پرداخت، ایمیل) را mock کن و تست‌ها را مستقل و موازی بنویس.</p>",
     "exercise": "یک تست یکپارچه با Postgres موقت در Docker بنویس."
    },
    {
     "title": "مشاهده‌پذیری و استقرار: pino، OpenTelemetry و Docker",
     "content": "<p>لاگ JSON ساختاریافته با <code class='inline'>pino</code> و شناسهٔ همبستگی هر درخواست بگذار. OpenTelemetry Trace و Metric را برای پیداکردن گلوگاه ارائه می‌دهد. Docker چندمرحله‌ای، کاربر غیر root، endpoint سلامت و استقرار Rolling یا Blue/Green کار را بدون توقف می‌کند. PM2 فقط برای سرور ساده مناسب است.</p>",
     "exercise": "یک Dockerfile سبک غیر root با healthcheck بنویس."
    },
    {
     "title": "AsyncLocalStorage: زمینه‌ی درخواست بدون پاس‌دادن پارامتر",
     "content": "<p>برای لاگ هر درخواست با <b>شناسه‌ی همبستگی</b> (request id) لازم نیست آن را از همه‌ی توابع رد کنی. <code>AsyncLocalStorage</code> یک «زمینه» می‌سازد که در تمام زنجیره‌ی async همان درخواست (حتی بعد از <code>await</code> و timer) در دسترس است و بین درخواست‌های هم‌زمان قاطی نمی‌شود. در middleware <code>als.run(store, next)</code> را صدا بزن. هزینه‌ی کمی دارد ولی برای لاگ و trace استاندارد است.</p><div class='code-block'><div class='cb-head'>als.mjs — اجرا: node als.mjs</div><pre><code>import { AsyncLocalStorage } from &#x27;node:async_hooks&#x27;;\nimport { setTimeout as sleep } from &#x27;node:timers/promises&#x27;;\n\nconst als = new AsyncLocalStorage();\nconst log = (msg) =&gt; console.log(`[req ${als.getStore()?.id ?? &#x27;—&#x27;}] ${msg}`);\n\nasync function deepService() {\n  await sleep(10);\n  log(&#x27;در عمق سرویس&#x27;);\n}\n\nasync function handle(id, ms) {\n  await als.run({ id }, async () =&gt; {\n    log(&#x27;شروع&#x27;);\n    await sleep(ms);\n    await deepService();\n    log(&#x27;پایان&#x27;);\n  });\n}\n\nawait Promise.all([handle(&#x27;A&#x27;, 30), handle(&#x27;B&#x27;, 5)]);\nlog(&#x27;بیرون از زمینه&#x27;);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>[req A] شروع\n[req B] شروع\n[req B] در عمق سرویس\n[req B] پایان\n[req A] در عمق سرویس\n[req A] پایان\n[req —] بیرون از زمینه</code></pre></div>",
     "exercise": "یک فیلد userId هم به store اضافه کن."
    },
    {
     "title": "EventEmitter: خطای error، نشت listener و once",
     "content": "<p><code>EventEmitter</code> اساس بسیاری از APIهای Node است. سه نکته‌ی حیاتی: ۱) اگر رویداد <code>'error'</code> emit شود و listener نداشته باشد، <b>پردازه کرش می‌کند</b>؛ ۲) افزودن listener در حلقه یا هر درخواست بدون حذف، نشت حافظه می‌سازد (هشدار پیش‌فرض بعد از ۱۰ تا)؛ ۳) <code>once</code> برای رویداد یک‌بار‌مصرف و <code>events.once(emitter,'x')</code> برای await. listenerها همگام اجرا می‌شوند.</p><div class='code-block'><div class='cb-head'>ee.mjs — اجرا: node ee.mjs</div><pre><code>import { EventEmitter, once } from &#x27;node:events&#x27;;\n\nconst bus = new EventEmitter();\ntry { bus.emit(&#x27;error&#x27;, new Error(&#x27;بدون listener&#x27;)); }\ncatch (e) { console.log(&#x27;بدون listener خطا پرتاب شد:&#x27;, e.message); }\n\nbus.on(&#x27;error&#x27;, (e) =&gt; console.log(&#x27;مدیریت شد:&#x27;, e.message));\nbus.emit(&#x27;error&#x27;, new Error(&#x27;با listener&#x27;));\n\nbus.once(&#x27;ready&#x27;, () =&gt; console.log(&#x27;once اجرا شد&#x27;));\nbus.emit(&#x27;ready&#x27;); bus.emit(&#x27;ready&#x27;);\nconsole.log(&#x27;تعداد listener ready:&#x27;, bus.listenerCount(&#x27;ready&#x27;));\n\nsetTimeout(() =&gt; bus.emit(&#x27;done&#x27;, 42), 10);\nconst [value] = await once(bus, &#x27;done&#x27;);\nconsole.log(&#x27;await once →&#x27;, value);\n\nconst h = () =&gt; {};\nbus.on(&#x27;x&#x27;, h); bus.off(&#x27;x&#x27;, h);\nconsole.log(&#x27;بعد از off:&#x27;, bus.listenerCount(&#x27;x&#x27;), &#x27;| سقف هشدار:&#x27;, EventEmitter.defaultMaxListeners);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>بدون listener خطا پرتاب شد: بدون listener\nمدیریت شد: با listener\nonce اجرا شد\nتعداد listener ready: 0\nawait once → 42\nبعد از off: 0 | سقف هشدار: 10</code></pre></div>",
     "exercise": "هشدار نشت را با ۱۱ listener ببین."
    },
    {
     "title": "AbortSignal.timeout و fetch مقاوم در Node",
     "content": "<p>درخواست بدون مهلت می‌تواند برای همیشه معلق بماند. <code>AbortSignal.timeout(ms)</code> مهلت خودکار می‌دهد و <code>AbortSignal.any([...])</code> چند سیگنال (مهلت + لغو کاربر) را ترکیب می‌کند. خطای مهلت <code>TimeoutError</code> است و لغو دستی <code>AbortError</code>. برای تلاش مجدد فقط خطاهای شبکه و ۵xx را تکرار کن و با backoff. در Node 22، <code>fetch</code> داخلی (undici) است.</p><div class='code-block'><div class='cb-head'>fetch_abort.mjs — اجرا: node fetch_abort.mjs</div><pre><code>import http from &#x27;node:http&#x27;;\n\nlet hits = 0;\nconst server = http.createServer((req, res) =&gt; {\n  hits++;\n  if (req.url === &#x27;/slow&#x27;) return;                  // هرگز پاسخ نمی‌دهد\n  if (req.url === &#x27;/flaky&#x27; &amp;&amp; hits &lt; 3) { res.writeHead(503); return res.end(); }\n  res.end(&#x27;ok&#x27;);\n}).listen(0);\nconst base = `http://127.0.0.1:${server.address().port}`;\n\ntry { await fetch(base + &#x27;/slow&#x27;, { signal: AbortSignal.timeout(100) }); }\ncatch (e) { console.log(&#x27;مهلت:&#x27;, e.name); }\n\nconst ac = new AbortController();\nsetTimeout(() =&gt; ac.abort(), 50);\ntry { await fetch(base + &#x27;/slow&#x27;, { signal: AbortSignal.any([ac.signal, AbortSignal.timeout(1000)]) }); }\ncatch (e) { console.log(&#x27;لغو دستی:&#x27;, e.name); }\n\nasync function getWithRetry(url, tries = 4) {\n  for (let i = 0; i &lt; tries; i++) {\n    const r = await fetch(url, { signal: AbortSignal.timeout(500) });\n    if (r.status &lt; 500) return r;\n    await new Promise(r =&gt; setTimeout(r, 20 * 2 ** i));\n  }\n  throw new Error(&#x27;تلاش‌ها تمام شد&#x27;);\n}\nhits = 0;\nconst r = await getWithRetry(base + &#x27;/flaky&#x27;);\nconsole.log(&#x27;بعد از&#x27;, hits, &#x27;تلاش:&#x27;, r.status, await r.text());\nserver.closeAllConnections(); server.close();</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>مهلت: TimeoutError\nلغو دستی: AbortError\nبعد از 3 تلاش: 200 ok</code></pre></div>",
     "exercise": "یک سقف کل زمان (deadline) برای همه‌ی تلاش‌ها بگذار."
    },
    {
     "title": "crypto داخلی: HMAC، timingSafeEqual، AES-GCM و scrypt",
     "content": "<p>بدون هیچ پکیجی، ماژول <code>node:crypto</code> ابزار امنیتی کامل دارد. <b>قواعد:</b> مقایسه‌ی امضا/توکن با <code>timingSafeEqual</code> (نه <code>===</code>)؛ رمزنگاری با <b>AES-256-GCM</b> (محرمانگی + اصالت) و <code>iv</code> تصادفی ۱۲ بایتی که هرگز با یک کلید تکرار نمی‌شود؛ هش رمز با <code>scrypt</code> (هش کند) نه SHA؛ تصادفی امن با <code>randomBytes</code>/<code>randomUUID</code>، نه <code>Math.random</code>. کلید را در کد نگذار.</p><div class='code-block'><div class='cb-head'>crypto_demo.mjs — اجرا: node crypto_demo.mjs</div><pre><code>import { createHmac, timingSafeEqual, randomBytes, createCipheriv, createDecipheriv, scryptSync, randomUUID } from &#x27;node:crypto&#x27;;\n\nconst sig = createHmac(&#x27;sha256&#x27;, &#x27;secret&#x27;).update(&#x27;payload&#x27;).digest();\nconst ok = (a, b) =&gt; a.length === b.length &amp;&amp; timingSafeEqual(a, b);\nconsole.log(&#x27;HMAC درست:&#x27;, ok(sig, createHmac(&#x27;sha256&#x27;, &#x27;secret&#x27;).update(&#x27;payload&#x27;).digest()));\nconsole.log(&#x27;HMAC غلط :&#x27;, ok(sig, createHmac(&#x27;sha256&#x27;, &#x27;secret&#x27;).update(&#x27;payloaD&#x27;).digest()));\n\nconst key = randomBytes(32);\nfunction encrypt(text) {\n  const iv = randomBytes(12);\n  const c = createCipheriv(&#x27;aes-256-gcm&#x27;, key, iv);\n  const enc = Buffer.concat([c.update(text, &#x27;utf8&#x27;), c.final()]);\n  return { iv, enc, tag: c.getAuthTag() };\n}\nfunction decrypt({ iv, enc, tag }) {\n  const d = createDecipheriv(&#x27;aes-256-gcm&#x27;, key, iv); d.setAuthTag(tag);\n  return Buffer.concat([d.update(enc), d.final()]).toString(&#x27;utf8&#x27;);\n}\nconst box = encrypt(&#x27;سلام محرمانه&#x27;);\nconsole.log(&#x27;رمزگشایی:&#x27;, decrypt(box));\nbox.enc[0] ^= 1;\ntry { decrypt(box); } catch { console.log(&#x27;دست‌کاری شناسایی شد (tag نامعتبر)&#x27;); }\n\nconst salt = randomBytes(16);\nconst h = scryptSync(&#x27;رمز&#x27;, salt, 32).toString(&#x27;hex&#x27;);\nconsole.log(&#x27;scrypt طول هش:&#x27;, h.length, &#x27;| یکتا:&#x27;, randomUUID().length);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>HMAC درست: true\nHMAC غلط : false\nرمزگشایی: سلام محرمانه\nدست‌کاری شناسایی شد (tag نامعتبر)\nscrypt طول هش: 64 | یکتا: 36</code></pre></div>",
     "exercise": "iv را ثابت کن و توضیح بده چرا خطرناک است."
    },
    {
     "title": "نوشتن اتمی فایل: temp + rename و fsync",
     "content": "<p>اگر هنگام نوشتن مستقیم روی فایل پیکربندی برق برود یا پردازه کرش کند، فایل نصفه می‌ماند. الگوی امن: ۱) در یک فایل <b>موقت</b> کنار مقصد بنویس، ۲) <code>fsync</code> تا روی دیسک برسد، ۳) <code>rename</code> اتمی (روی یک فایل‌سیستم، یا قدیمی یا جدید کامل را می‌بینی). برای جلوگیری از رقابت، نام موقت یکتا بساز. خواندن هم‌زمان هرگز نیمه‌فایل نمی‌بیند.</p><div class='code-block'><div class='cb-head'>atomic.mjs — اجرا: node atomic.mjs</div><pre><code>import { open, rename, readFile, rm, mkdtemp } from &#x27;node:fs/promises&#x27;;\nimport { tmpdir } from &#x27;node:os&#x27;;\nimport { join } from &#x27;node:path&#x27;;\nimport { randomUUID } from &#x27;node:crypto&#x27;;\n\nasync function writeAtomic(path, data) {\n  const tmp = `${path}.${randomUUID()}.tmp`;\n  const fh = await open(tmp, &#x27;w&#x27;);\n  try { await fh.writeFile(data); await fh.sync(); }\n  finally { await fh.close(); }\n  await rename(tmp, path);\n}\n\nconst dir = await mkdtemp(join(tmpdir(), &#x27;at-&#x27;));\nconst file = join(dir, &#x27;config.json&#x27;);\nawait writeAtomic(file, JSON.stringify({ v: 1 }));\nawait Promise.all([1, 2, 3, 4, 5].map(v =&gt; writeAtomic(file, JSON.stringify({ v }))));\nconst final = JSON.parse(await readFile(file, &#x27;utf8&#x27;));\nconsole.log(&#x27;فایل سالم و کامل است؛ v =&#x27;, typeof final.v, &#x27;(یکی از نوشتن‌ها)&#x27;);\nawait rm(dir, { recursive: true });</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>فایل سالم و کامل است؛ v = number (یکی از نوشتن‌ها)</code></pre></div>",
     "exercise": "نوشتن را روی نیمه قطع کن و اثر را مقایسه کن."
    },
    {
     "title": "Buffer: subarray مشترک، کدگذاری و تله‌ها",
     "content": "<p><code>Buffer</code> بایت خام است. تله‌ی بزرگ: <code>buf.slice()</code> و <code>subarray()</code> <b>کپی نمی‌سازند</b> و حافظه را با بافر اصلی مشترک می‌گذارند؛ تغییر یکی دیگری را عوض می‌کند. برای کپی از <code>Buffer.from(buf)</code> یا <code>copy</code> استفاده کن. <code>Buffer.alloc</code> صفرشده و امن است؛ <code>allocUnsafe</code> سریع ولی ممکن است داده‌ی قدیمی داشته باشد. کدگذاری‌ها: <code>hex</code>، <code>base64</code> و <code>base64url</code> (برای JWT/URL). طول رشته با طول بایت فرق دارد (فارسی ۲ بایت).</p><div class='code-block'><div class='cb-head'>buf.mjs — اجرا: node buf.mjs</div><pre><code>const a = Buffer.from(&#x27;hello&#x27;);\nconst view = a.subarray(0, 2);\nview[0] = 74;                       // &#x27;J&#x27;\nconsole.log(&#x27;اشتراک حافظه:&#x27;, a.toString(), &#x27;(اصلی هم تغییر کرد)&#x27;);\nconst copy = Buffer.from(a.subarray(0, 2)); copy[0] = 88;\nconsole.log(&#x27;بعد از کپی مستقل:&#x27;, a.toString());\n\nconsole.log(&#x27;طول رشته/بایت:&#x27;, &#x27;سلام&#x27;.length, Buffer.byteLength(&#x27;سلام&#x27;));\nconst b = Buffer.from(&#x27;ab?&gt;~&#x27;, &#x27;utf8&#x27;);\nconsole.log(&#x27;base64   :&#x27;, b.toString(&#x27;base64&#x27;));\nconsole.log(&#x27;base64url:&#x27;, b.toString(&#x27;base64url&#x27;));\nconsole.log(&#x27;hex      :&#x27;, b.toString(&#x27;hex&#x27;));\n\nconsole.log(&#x27;alloc صفر:&#x27;, Buffer.alloc(4));\nconst parts = Buffer.concat([Buffer.from(&#x27;جزء۱|&#x27;), Buffer.from(&#x27;جزء۲&#x27;)]);\nconsole.log(&#x27;concat:&#x27;, parts.toString());\nconsole.log(&#x27;مقایسه:&#x27;, Buffer.compare(Buffer.from(&#x27;a&#x27;), Buffer.from(&#x27;b&#x27;)), Buffer.from(&#x27;x&#x27;).equals(Buffer.from(&#x27;x&#x27;)));</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>اشتراک حافظه: Jello (اصلی هم تغییر کرد)\nبعد از کپی مستقل: Jello\nطول رشته/بایت: 4 8\nbase64   : YWI/Pn4=\nbase64url: YWI_Pn4\nhex      : 61623f3e7e\nalloc صفر: &lt;Buffer 00 00 00 00&gt;\nconcat: جزء۱|جزء۲\nمقایسه: -1 true</code></pre></div>",
     "exercise": "با readUInt32BE یک عدد را از بافر بخوان."
    },
    {
     "title": "سرور http خام سخت‌شده: سقف بدنه و مهلت‌ها",
     "content": "<p>بدون فریم‌ورک هم می‌توان امن نوشت اما باید خودت محدودیت بگذاری: <b>سقف حجم بدنه</b> (وگرنه یک کلاینت گیگابایت می‌فرستد)، مهلت‌ها (<code>headersTimeout</code>، <code>requestTimeout</code>، <code>keepAliveTimeout</code>) برای مقابله با Slowloris، و پاسخ درست <code>413</code>/<code>400</code>. بدنه را به‌صورت جریانی بخوان و وقتی از سقف گذشت <b>قطع کن</b>، نه اینکه همه را در حافظه جمع کنی. JSON خراب را هم با <code>400</code> جواب بده نه کرش.</p><div class='code-block'><div class='cb-head'>hardened.mjs — اجرا: node hardened.mjs</div><pre><code>import http from &#x27;node:http&#x27;;\n\nconst MAX = 1024;\nconst server = http.createServer(async (req, res) =&gt; {\n  let size = 0; const chunks = [];\n  for await (const c of req) {\n    size += c.length;\n    if (size &gt; MAX) { res.writeHead(413).end(&#x27;بدنه بزرگ است&#x27;); req.destroy(); return; }\n    chunks.push(c);\n  }\n  try {\n    const data = JSON.parse(Buffer.concat(chunks).toString() || &#x27;{}&#x27;);\n    res.writeHead(200, { &#x27;content-type&#x27;: &#x27;application/json&#x27; }).end(JSON.stringify({ keys: Object.keys(data) }));\n  } catch { res.writeHead(400).end(&#x27;JSON نامعتبر&#x27;); }\n});\nserver.requestTimeout = 5000; server.headersTimeout = 2000; server.keepAliveTimeout = 3000;\nawait new Promise(r =&gt; server.listen(0, r));\nconst url = `http://127.0.0.1:${server.address().port}`;\nconst post = (body) =&gt; fetch(url, { method: &#x27;POST&#x27;, body }).then(async r =&gt; `${r.status} ${await r.text()}`);\n\nconsole.log(&#x27;معتبر   :&#x27;, await post(&#x27;{&quot;a&quot;:1,&quot;b&quot;:2}&#x27;));\nconsole.log(&#x27;خراب    :&#x27;, await post(&#x27;{bad&#x27;));\nconsole.log(&#x27;بزرگ    :&#x27;, await post(&#x27;x&#x27;.repeat(5000)).catch(e =&gt; &#x27;اتصال قطع شد: &#x27; + e.cause?.code));\nserver.closeAllConnections(); server.close();</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>معتبر   : 200 {&quot;keys&quot;:[&quot;a&quot;,&quot;b&quot;]}\nخراب    : 400 JSON نامعتبر\nبزرگ    : 413 بدنه بزرگ است</code></pre></div>",
     "exercise": "سقف را برای مسیر آپلود جدا بگذار."
    },
    {
     "title": "ESM در برابر CommonJS: interop، exports و import.meta",
     "content": "<p>Node دو سیستم ماژول دارد. <code>.mjs</code> یا <code>\"type\":\"module\"</code> یعنی ESM؛ <code>.cjs</code> یا پیش‌فرض یعنی CommonJS. در ESM <code>require</code>، <code>__dirname</code> و <code>__filename</code> نیست؛ از <code>import.meta.url</code> و <code>import.meta.dirname</code> (Node 20.11+) استفاده کن. ESM می‌تواند CJS را import کند (خروجی = <code>module.exports</code> به‌عنوان default) ولی CJS فقط با <code>import()</code> پویا ESM می‌خواند (یا در Node 22 با <code>require(esm)</code> محدود). فیلد <code>exports</code> در package.json سطح عمومی بسته را قفل می‌کند.</p><div class='code-block'><div class='cb-head'>interop.mjs — اجرا: node interop.mjs</div><pre><code>import { writeFileSync, mkdtempSync } from &#x27;node:fs&#x27;;\nimport { join } from &#x27;node:path&#x27;;\nimport { tmpdir } from &#x27;node:os&#x27;;\nimport { pathToFileURL } from &#x27;node:url&#x27;;\n\nconst dir = mkdtempSync(join(tmpdir(), &#x27;mod-&#x27;));\nwriteFileSync(join(dir, &#x27;lib.cjs&#x27;), &#x27;module.exports = { add: (a,b)=&gt;a+b, name: &quot;cjs&quot; };&#x27;);\nwriteFileSync(join(dir, &#x27;lib.mjs&#x27;), &#x27;export const add = (a,b)=&gt;a+b; export default &quot;esm-default&quot;;&#x27;);\n\nconst cjs = await import(pathToFileURL(join(dir, &#x27;lib.cjs&#x27;)));\nconsole.log(&#x27;CJS default:&#x27;, typeof cjs.default.add, &#x27;| نام:&#x27;, cjs.default.name);\nconst esm = await import(pathToFileURL(join(dir, &#x27;lib.mjs&#x27;)));\nconsole.log(&#x27;ESM named:&#x27;, esm.add(2, 3), &#x27;| default:&#x27;, esm.default);\n\nconsole.log(&#x27;__dirname در ESM:&#x27;, typeof __dirname);\nconsole.log(&#x27;import.meta.url شروع می‌شود با file:&#x27;, import.meta.url.startsWith(&#x27;file:&#x27;));\nconsole.log(&#x27;import.meta.dirname:&#x27;, typeof import.meta.dirname);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>CJS default: function | نام: cjs\nESM named: 5 | default: esm-default\n__dirname در ESM: undefined\nimport.meta.url شروع می‌شود با file: true\nimport.meta.dirname: string</code></pre></div>",
     "exercise": "require را در ESM امتحان کن و خطا را ببین."
    },
    {
     "title": "SharedArrayBuffer و Atomics: حافظه‌ی مشترک بین Workerها",
     "content": "<p>معمولاً Workerها داده را کپی می‌کنند. با <code>SharedArrayBuffer</code> چند thread یک حافظه را می‌بینند؛ اما خواندن/نوشتن عادی <b>race condition</b> می‌سازد (دو thread هم‌زمان <code>x++</code> می‌کنند و افزایش گم می‌شود). <code>Atomics.add</code>، <code>Atomics.compareExchange</code> و <code>Atomics.wait/notify</code> عملیات اتمی و همگام‌سازی می‌دهند. فقط وقتی لازم است که کپی هزینه‌ی واقعی دارد (آرایه‌های بزرگ عددی)؛ در غیر این صورت پیام‌رسانی ساده‌تر و امن‌تر است.</p><div class='code-block'><div class='cb-head'>atomics.mjs — اجرا: node atomics.mjs</div><pre><code>import { Worker, isMainThread, workerData, parentPort } from &#x27;node:worker_threads&#x27;;\n\nif (isMainThread) {\n  const sab = new SharedArrayBuffer(8);\n  const arr = new Int32Array(sab);            // [0]=اتمی  [1]=غیراتمی\n  const N = 100000, W = 4;\n  const workers = Array.from({ length: W }, () =&gt; new Worker(new URL(import.meta.url), { workerData: { sab, N } }));\n  await Promise.all(workers.map(w =&gt; new Promise(r =&gt; w.on(&#x27;exit&#x27;, r))));\n  console.log(&#x27;مورد انتظار :&#x27;, N * W);\n  console.log(&#x27;Atomics.add :&#x27;, arr[0]);\n  console.log(&#x27;x++ معمولی  :&#x27;, arr[1], arr[1] === N * W ? &#x27;(این بار شانس آورد)&#x27; : &#x27;← افزایش‌ها گم شد!&#x27;);\n} else {\n  const a = new Int32Array(workerData.sab);\n  for (let i = 0; i &lt; workerData.N; i++) { Atomics.add(a, 0, 1); a[1]++; }\n  parentPort?.close();\n}</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>مورد انتظار : 400000\nAtomics.add : 400000\nx++ معمولی  : 390820 ← افزایش‌ها گم شد!</code></pre></div>",
     "exercise": "تعداد workerها را ۸ کن و گم‌شدن را ببین."
    },
    {
     "title": "ساخت CLI با util.parseArgs و کد خروج",
     "content": "<p>ابزار خط فرمان حرفه‌ای آرگومان را تجزیه می‌کند، <code>--help</code> می‌دهد و <b>کد خروج درست</b> برمی‌گرداند (۰ موفق، غیرصفر شکست) تا اسکریپت‌ها و CI بتوانند نتیجه را بخوانند. Node 18.3+ <code>util.parseArgs</code> دارد (بدون وابستگی): گزینه‌ها با <code>type</code>، <code>short</code>، <code>default</code> و آرگومان موضعی. خطای کاربر را روی <code>stderr</code> چاپ کن و <code>process.exitCode = 2</code> بگذار (به‌جای <code>process.exit</code> که بافر خروجی را ممکن است قطع کند).</p><div class='code-block'><div class='cb-head'>cli.mjs — اجرا: node cli.mjs</div><pre><code>import { parseArgs } from &#x27;node:util&#x27;;\n\nfunction run(argv) {\n  let parsed;\n  try {\n    parsed = parseArgs({\n      args: argv, allowPositionals: true, strict: true,\n      options: {\n        verbose: { type: &#x27;boolean&#x27;, short: &#x27;v&#x27;, default: false },\n        count:   { type: &#x27;string&#x27;,  short: &#x27;n&#x27;, default: &#x27;1&#x27; },\n      },\n    });\n  } catch (e) { return { code: 2, out: &#x27;خطا: &#x27; + e.message }; }\n  const n = Number(parsed.values.count);\n  if (!Number.isInteger(n) || n &lt; 1) return { code: 2, out: &#x27;count باید عدد صحیح مثبت باشد&#x27; };\n  const [cmd = &#x27;help&#x27;, ...rest] = parsed.positionals;\n  if (cmd === &#x27;greet&#x27;) return { code: 0, out: Array(n).fill(`سلام ${rest[0] ?? &#x27;دنیا&#x27;}`).join(&#x27; | &#x27;) + (parsed.values.verbose ? &#x27; [verbose]&#x27; : &#x27;&#x27;) };\n  return { code: 1, out: &#x27;دستور ناشناخته: &#x27; + cmd };\n}\nfor (const a of [[&#x27;greet&#x27;, &#x27;علی&#x27;, &#x27;-n&#x27;, &#x27;2&#x27;, &#x27;-v&#x27;], [&#x27;greet&#x27;], [&#x27;nope&#x27;], [&#x27;greet&#x27;, &#x27;--bad&#x27;], [&#x27;greet&#x27;, &#x27;-n&#x27;, &#x27;x&#x27;]])\n  console.log(JSON.stringify(a).padEnd(32), &#x27;→&#x27;, run(a));</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>[&quot;greet&quot;,&quot;علی&quot;,&quot;-n&quot;,&quot;2&quot;,&quot;-v&quot;]    → { code: 0, out: &#x27;سلام علی | سلام علی [verbose]&#x27; }\n[&quot;greet&quot;]                        → { code: 0, out: &#x27;سلام دنیا&#x27; }\n[&quot;nope&quot;]                         → { code: 1, out: &#x27;دستور ناشناخته: nope&#x27; }\n[&quot;greet&quot;,&quot;--bad&quot;]                → {\n  code: 2,\n  out: `خطا: Unknown option &#x27;--bad&#x27;. To specify a positional argument starting with a &#x27;-&#x27;, place it at the end of the command after &#x27;--&#x27;, as in &#x27;-- &quot;--bad&quot;`\n}\n[&quot;greet&quot;,&quot;-n&quot;,&quot;x&quot;]               → { code: 2, out: &#x27;count باید عدد صحیح مثبت باشد&#x27; }</code></pre></div>",
     "exercise": "یک زیرفرمان version اضافه کن."
    },
    {
     "title": "حمله‌ی Path Traversal در سرو فایل ثابت",
     "content": "<p>اگر مسیر فایل را از ورودی کاربر بسازی، <code>../../etc/passwd</code> می‌تواند به بیرون از پوشه‌ی مجاز برسد. دفاع درست: ۱) مسیر را <b>decode</b> و با <code>path.resolve(root, input)</code> نرمال کن، ۲) بررسی کن نتیجه با <code>root + path.sep</code> شروع شود (نه فقط <code>startsWith(root)</code>؛ چون <code>/srv/pub-evil</code> هم با <code>/srv/pub</code> شروع می‌شود)، ۳) بایت null (<code>%00</code>) را رد کن، ۴) فایل لینک نمادین (symlink) را با <code>realpath</code> بررسی کن. ساده‌تر: نام فایل را از فهرست مجاز بگیر.</p><div class='code-block'><div class='cb-head'>safe_path.mjs — اجرا: node safe_path.mjs</div><pre><code>import path from &#x27;node:path&#x27;;\n\nconst ROOT = path.resolve(&#x27;/srv/public&#x27;);\n\nfunction safeResolve(urlPath) {\n  let p;\n  try { p = decodeURIComponent(urlPath); } catch { return null; }\n  if (p.includes(&#x27;\\0&#x27;)) return null;\n  const full = path.resolve(ROOT, &#x27;.&#x27; + path.sep + p);\n  return full === ROOT || full.startsWith(ROOT + path.sep) ? full : null;\n}\n\nfor (const input of [&#x27;index.html&#x27;, &#x27;img/a.png&#x27;, &#x27;../etc/passwd&#x27;, &#x27;..%2f..%2fetc/passwd&#x27;,\n                     &#x27;/etc/passwd&#x27;, &#x27;a/../../secret&#x27;, &#x27;../public-evil/x&#x27;, &#x27;ok%00.png&#x27;])\n  console.log(input.padEnd(22), &#x27;→&#x27;, safeResolve(input) ?? &#x27;رد شد ✗&#x27;);\n\nconsole.log(&#x27;اشتباه رایج startsWith ساده:&#x27;, &#x27;/srv/public-evil/x&#x27;.startsWith(ROOT));</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>index.html             → /srv/public/index.html\nimg/a.png              → /srv/public/img/a.png\n../etc/passwd          → رد شد ✗\n..%2f..%2fetc/passwd   → رد شد ✗\n/etc/passwd            → /srv/public/etc/passwd\na/../../secret         → رد شد ✗\n../public-evil/x       → رد شد ✗\nok%00.png              → رد شد ✗\nاشتباه رایج startsWith ساده: true</code></pre></div>",
     "exercise": "symlink را هم با fs.realpath بررسی کن."
    },
    {
     "title": "Prototype Pollution: ادغام ناامن اشیاء",
     "content": "<p>در جاوااسکریپت، نوشتن روی <code>__proto__</code> یا <code>constructor.prototype</code> همه‌ی اشیاء را آلوده می‌کند. تابع <code>merge</code> بازگشتی که کلیدهای ورودی کاربر را کورکورانه کپی می‌کند، با JSON مثل <code>{\"__proto__\":{\"isAdmin\":true}}</code> این را ممکن می‌سازد (چون <code>JSON.parse</code> کلید <code>__proto__</code> را مثل یک کلید عادی می‌سازد). دفاع: کلیدهای <code>__proto__</code>/<code>constructor</code>/<code>prototype</code> را رد کن، از <code>Object.create(null)</code> یا <code>Map</code> استفاده کن، <code>Object.hasOwn</code> بررسی کن، یا با <code>--disable-proto=delete</code> اجرا کن. ورودی را با schema (Zod/Ajv) محدود کن.</p><div class='code-block'><div class='cb-head'>pollution.mjs — اجرا: node pollution.mjs</div><pre><code>function badMerge(t, s) {\n  for (const k in s) {\n    if (s[k] &amp;&amp; typeof s[k] === &#x27;object&#x27;) { t[k] ??= {}; badMerge(t[k], s[k]); }\n    else t[k] = s[k];\n  }\n  return t;\n}\nfunction goodMerge(t, s) {\n  for (const k of Object.keys(s)) {\n    if (k === &#x27;__proto__&#x27; || k === &#x27;constructor&#x27; || k === &#x27;prototype&#x27;) continue;\n    if (s[k] &amp;&amp; typeof s[k] === &#x27;object&#x27;) { t[k] = Object.hasOwn(t, k) ? t[k] : {}; goodMerge(t[k], s[k]); }\n    else t[k] = s[k];\n  }\n  return t;\n}\nconst evil = JSON.parse(&#x27;{&quot;__proto__&quot;: {&quot;isAdmin&quot;: true}}&#x27;);\n\nbadMerge({}, evil);\nconsole.log(&#x27;کاربر تازه‌ی بی‌ربط isAdmin؟&#x27;, ({}).isAdmin, &#x27;← آلوده شد!&#x27;);\ndelete Object.prototype.isAdmin;\n\ngoodMerge({}, evil);\nconsole.log(&#x27;بعد از merge امن:&#x27;, ({}).isAdmin);\n\nconst safe = Object.create(null); safe.x = 1;\nconsole.log(&#x27;بدون پروتوتایپ:&#x27;, Object.getPrototypeOf(safe), &#x27;| toString:&#x27;, safe.toString);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>کاربر تازه‌ی بی‌ربط isAdmin؟ true ← آلوده شد!\nبعد از merge امن: undefined\nبدون پروتوتایپ: null | toString: undefined</code></pre></div>",
     "exercise": "یک اعتبارسنج که کلیدهای مجاز را whitelist کند بنویس."
    },
    {
     "title": "ReDoS: وقتی Regex سرور را قفل می‌کند",
     "content": "<p>برخی عبارات منظم با ورودی بدساخت دچار <b>عقب‌گرد فاجعه‌بار</b> (catastrophic backtracking) می‌شوند: زمان نمایی، و چون Node تک‌ریسمانی است <b>کل سرور</b> می‌ایستد. الگوی خطرناک: گروه تکرارشونده‌ی تو در تو مثل <code>(a+)+$</code> یا <code>(\\w+\\s?)*$</code>. دفاع: الگو را بازنویسی کن (بدون تکرار تو در تو و مبهم)، طول ورودی را قبل از regex محدود کن، از موتور خطی (مثل RE2) یا parser مناسب استفاده کن، و regex را در Worker با مهلت اجرا کن. همیشه با ورودی بدساخت تست کن.</p><div class='code-block'><div class='cb-head'>redos.mjs — اجرا: node redos.mjs</div><pre><code>const evil = (n) =&gt; &#x27;a&#x27;.repeat(n) + &#x27;!&#x27;;\nconst vulnerable = /^(a+)+$/;\nconst safe = /^a+$/;\n\nfunction time(re, s) {\n  const t = process.hrtime.bigint();\n  re.test(s);\n  return Number(process.hrtime.bigint() - t) / 1e6;\n}\nfor (const n of [16, 20, 24, 26]) {\n  console.log(`n=${n}`.padEnd(6), &#x27;آسیب‌پذیر:&#x27;, time(vulnerable, evil(n)).toFixed(1).padStart(8), &#x27;ms&#x27;,\n              &#x27;| امن:&#x27;, time(safe, evil(n)).toFixed(3), &#x27;ms&#x27;);\n}\nconsole.log(&#x27;طول ورودی را قبل از regex محدود کن: &#x27;, evil(5000).length &gt; 200 ? &#x27;رد (۴۰۰)&#x27; : &#x27;ok&#x27;);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>n=16   آسیب‌پذیر:      4.4 ms | امن: 0.074 ms\nn=20   آسیب‌پذیر:     11.7 ms | امن: 0.148 ms\nn=24   آسیب‌پذیر:    141.6 ms | امن: 0.010 ms\nn=26   آسیب‌پذیر:    598.7 ms | امن: 0.012 ms\nطول ورودی را قبل از regex محدود کن:  رد (۴۰۰)</code></pre></div>",
     "exercise": "الگوی آسیب‌پذیر را بدون تکرار تو در تو بازنویسی کن."
    },
    {
     "title": "Server-Sent Events با http خام",
     "content": "<p><b>SSE</b> برای ارسال یک‌طرفه‌ی رویداد از سرور به مرورگر (اعلان، پیشرفت کار، قیمت زنده) ساده‌تر از WebSocket است: یک پاسخ HTTP با <code>Content-Type: text/event-stream</code> که باز می‌ماند. هر پیام <code>data: ...\\n\\n</code> است؛ <code>id:</code> برای ادامه بعد از قطع (هدر <code>Last-Event-ID</code>) و <code>event:</code> برای نوع. مرورگر با <code>EventSource</code> خودکار وصل می‌شود. نکته: هنگام قطع اتصال کلاینت (<code>req.on('close')</code>) timer را پاک کن؛ و پشت پروکسی بافر را خاموش کن (<code>X-Accel-Buffering: no</code>).</p><div class='code-block'><div class='cb-head'>sse.mjs — اجرا: node sse.mjs</div><pre><code>import http from &#x27;node:http&#x27;;\n\nconst server = http.createServer((req, res) =&gt; {\n  res.writeHead(200, { &#x27;content-type&#x27;: &#x27;text/event-stream&#x27;, &#x27;cache-control&#x27;: &#x27;no-cache&#x27;, connection: &#x27;keep-alive&#x27; });\n  let n = Number(req.headers[&#x27;last-event-id&#x27;] ?? 0);\n  const timer = setInterval(() =&gt; {\n    n++; res.write(`id: ${n}\\nevent: tick\\ndata: ${JSON.stringify({ n })}\\n\\n`);\n    if (n % 3 === 0) { clearInterval(timer); res.end(); }\n  }, 10);\n  req.on(&#x27;close&#x27;, () =&gt; clearInterval(timer));\n});\nawait new Promise(r =&gt; server.listen(0, r));\nconst url = `http://127.0.0.1:${server.address().port}`;\n\nasync function readAll(headers) {\n  const r = await fetch(url, { headers });\n  let text = &#x27;&#x27;;\n  for await (const chunk of r.body) text += Buffer.from(chunk).toString();\n  return text.trim().split(&#x27;\\n\\n&#x27;).map(b =&gt; b.split(&#x27;\\n&#x27;).filter(l =&gt; l.startsWith(&#x27;id:&#x27;) || l.startsWith(&#x27;data:&#x27;)).join(&#x27; &#x27;));\n}\nconsole.log(&#x27;اتصال اول    :&#x27;, await readAll({}));\nconsole.log(&#x27;ادامه از id=3:&#x27;, await readAll({ &#x27;last-event-id&#x27;: &#x27;3&#x27; }));\nserver.closeAllConnections(); server.close();</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>اتصال اول    : [ &#x27;id: 1 data: {&quot;n&quot;:1}&#x27;, &#x27;id: 2 data: {&quot;n&quot;:2}&#x27;, &#x27;id: 3 data: {&quot;n&quot;:3}&#x27; ]\nادامه از id=3: [ &#x27;id: 4 data: {&quot;n&quot;:4}&#x27;, &#x27;id: 5 data: {&quot;n&quot;:5}&#x27;, &#x27;id: 6 data: {&quot;n&quot;:6}&#x27; ]</code></pre></div>",
     "exercise": "یک heartbeat کامنت (: ping) هر ۱۵ ثانیه اضافه کن."
    },
    {
     "title": "تأخیر حلقه‌ی رویداد: perf_hooks و monitorEventLoopDelay",
     "content": "<p>سلامت یک سرور Node را «تأخیر حلقه‌ی رویداد» (event loop lag) نشان می‌دهد: وقتی کد همگام سنگین اجرا می‌شود، timerها و درخواست‌ها دیر سرویس می‌گیرند. <code>perf_hooks.monitorEventLoopDelay()</code> یک هیستوگرام می‌دهد (میانگین، p99، حداکثر). هشدار تولیدی: اگر p99 بیش از چند ده میلی‌ثانیه شد، دنبال کار همگام (JSON.parse بزرگ، regex، حلقه‌ی CPU) بگرد و آن را به Worker ببر. <code>performance.mark/measure</code> هم بخش‌های کد را زمان می‌گیرد. نکته: صدا زدن <code>h.reset()</code> درست قبل از یک بلوک همگام، نمونه‌ی اول را از دست می‌دهد؛ برای هر فاز یک هیستوگرام جدا بساز.</p><div class='code-block'><div class='cb-head'>lag.mjs — اجرا: node lag.mjs</div><pre><code>import { monitorEventLoopDelay, performance } from &#x27;node:perf_hooks&#x27;;\nimport { setTimeout as sleep } from &#x27;node:timers/promises&#x27;;\n\nconst h = monitorEventLoopDelay({ resolution: 5 });\nh.enable();\nawait sleep(100);                              // حالت عادی\nconst calm = h.max / 1e6;\n\nconst t0 = performance.now();\nconst end = t0 + 150; while (performance.now() &lt; end) {}   // مسدودکننده‌ی ۱۵۰ms\nawait sleep(60);\nconst busy = h.max / 1e6;\nh.disable();\nconsole.log(&#x27;حداکثر تأخیر در حالت عادی :&#x27;, calm &lt; 40 ? &#x27;کم (&lt;40ms)&#x27; : calm.toFixed(0) + &#x27;ms&#x27;);\nconsole.log(&#x27;حداکثر تأخیر با کار همگام  :&#x27;, busy &gt; 100 ? &#x27;زیاد (&gt;100ms)&#x27; : busy.toFixed(0) + &#x27;ms&#x27;);\n\nperformance.mark(&#x27;a&#x27;);\nawait sleep(20);\nperformance.mark(&#x27;b&#x27;);\nconst m = performance.measure(&#x27;کار&#x27;, &#x27;a&#x27;, &#x27;b&#x27;);\nconsole.log(&#x27;measure ≈20ms؟&#x27;, m.duration &gt; 15 &amp;&amp; m.duration &lt; 60);</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>حداکثر تأخیر در حالت عادی : کم (&lt;40ms)\nحداکثر تأخیر با کار همگام  : زیاد (&gt;100ms)\nmeasure ≈20ms؟ true</code></pre></div>",
     "exercise": "یک هشدار وقتی p99 از ۵۰ms گذشت بساز."
    },
    {
     "title": "execFile در برابر exec: تزریق دستور",
     "content": "<p><code>child_process.exec(cmd)</code> رشته را به <b>shell</b> می‌دهد؛ اگر ورودی کاربر در آن باشد، با <code>; rm -rf</code> یا <code>$(...)</code> دستور دلخواه اجرا می‌شود (Command Injection). <code>execFile(file, [args])</code> و <code>spawn</code> بدون shell آرگومان‌ها را جدا می‌دهند و هیچ تفسیر مت‌اکاراکتری ندارند. قواعد: هرگز <code>shell: true</code> با ورودی کاربر، آرگومان‌ها آرایه، فهرست مجاز برای دستور، مهلت و سقف خروجی (<code>timeout</code>، <code>maxBuffer</code>)، و حداقل دسترسی.</p><div class='code-block'><div class='cb-head'>inject.mjs — اجرا: node inject.mjs</div><pre><code>import { exec, execFile } from &#x27;node:child_process&#x27;;\nimport { promisify } from &#x27;node:util&#x27;;\nconst pExec = promisify(exec), pFile = promisify(execFile);\n\nconst userInput = &#x27;hello; echo INJECTED&#x27;;\n\nconst bad = await pExec(`echo ${userInput}`);\nconsole.log(&#x27;exec     →&#x27;, JSON.stringify(bad.stdout.trim()), &#x27;← دستور دوم هم اجرا شد!&#x27;);\n\nconst good = await pFile(&#x27;echo&#x27;, [userInput]);\nconsole.log(&#x27;execFile →&#x27;, JSON.stringify(good.stdout.trim()), &#x27;← فقط متن چاپ شد&#x27;);\n\ntry { await pFile(&#x27;sleep&#x27;, [&#x27;5&#x27;], { timeout: 100 }); }\ncatch (e) { console.log(&#x27;مهلت:&#x27;, e.killed ? &#x27;پردازه کشته شد&#x27; : e.code); }</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه (Node 22)</div><pre><code>exec     → &quot;hello\\nINJECTED&quot; ← دستور دوم هم اجرا شد!\nexecFile → &quot;hello; echo INJECTED&quot; ← فقط متن چاپ شد\nمهلت: پردازه کشته شد</code></pre></div>",
     "exercise": "فهرست مجاز دستورها را پیاده کن."
    }
   ],
   "quiz": [
    {
     "q": "WebSocket نسبت به HTTP معمولی چه مزیتی برای چت زنده دارد؟",
     "options": [
      "امن‌تر است ولی کندتر",
      "یک اتصال بازِ دوطرفه ایجاد می‌کند که پیام‌ها را بی‌درنگ رد و بدل می‌کند",
      "فقط برای تصاویر است",
      "نیازی به سرور ندارد"
     ],
     "answer": 1,
     "explain": "برخلاف HTTP که برای هر پیام نیاز به یک درخواست جدید دارد، WebSocket اتصال را باز نگه می‌دارد."
    },
    {
     "q": "هدف اصلی نوشتن تست خودکار (مثل Jest) چیست؟",
     "options": [
      "زیباتر کردن رابط کاربری",
      "اطمینان از این‌که تغییرات جدید کد قبلی را خراب نکرده‌اند",
      "افزایش سرعت اینترنت",
      "جایگزینی دیتابیس"
     ],
     "answer": 1,
     "explain": "تست‌های خودکار به‌صورت مداوم صحت عملکرد برنامه را بررسی می‌کنند."
    },
    {
     "q": "چرا کلید API یا رمز دیتابیس باید در environment variables باشد، نه مستقیم در کد؟",
     "options": [
      "کد را کندتر می‌کند",
      "برای جلوگیری از افشای اطلاعات حساس هنگام انتشار عمومی کد (مثلاً روی GitHub)",
      "تفاوتی ندارد",
      "باعث خطای اجرا می‌شود"
     ],
     "answer": 1,
     "explain": "اگر اطلاعات حساس مستقیم در کد باشد و کد جایی منتشر شود، آن اطلاعات لو می‌روند."
    },
    {
     "q": "CI (Continuous Integration) اصلی‌ترین هدفش چیست؟",
     "options": [
      "زیباترکردن کد",
      "اجرای خودکار تست‌ها هنگام push برای جلوگیری از ورود باگ",
      "تعویض دیتابیس",
      "افزایش سرعت اینترنت"
     ],
     "answer": 1,
     "explain": "CI تضمین می‌کند تغییرات جدید قبل از رسیدن به کاربر، خودکار تست شوند."
    },
    {
     "q": "ماژول cluster در Node برای چه استفاده می‌شود؟",
     "options": [
      "اتصال به دیتابیس",
      "استفاده از چند هستهٔ پردازنده با اجرای چند worker هم‌زمان",
      "استایل‌دهی",
      "فشرده‌سازی تصویر"
     ],
     "answer": 1,
     "explain": "Node به‌صورت پیش‌فرض تک‌هسته‌ای است؛ cluster این محدودیت را برطرف می‌کند."
    },
    {
     "q": "Stream چه مزیتی دارد؟",
     "options": [
      "داده را تکه‌تکه پردازش می‌کند و حافظه کم مصرف می‌شود",
      "رنگ لاگ را عوض می‌کند",
      "کد را رمزنگاری می‌کند",
      "سرعت اینترنت را زیاد می‌کند"
     ],
     "answer": 0,
     "explain": "برای فایل‌های بزرگ مناسب است."
    },
    {
     "q": "Backpressure یعنی چه؟",
     "options": [
      "کنترل سرعت جریان وقتی مصرف‌کننده کندتر است",
      "فشرده‌سازی",
      "رمزنگاری",
      "کش"
     ],
     "answer": 0,
     "explain": "با drain و pipeline مدیریت می‌شود."
    },
    {
     "q": "برای کار سنگین CPU کدام بهتر است؟",
     "options": [
      "worker_threads",
      "setTimeout",
      "console.log",
      "نصب پکیج"
     ],
     "answer": 0,
     "explain": "رشته‌ی اصلی را قفل نمی‌کند."
    },
    {
     "q": "استفاده‌ی مجدد از Refresh Token قدیمی یعنی چه؟",
     "options": [
      "احتمال سرقت و ابطال خانواده‌ی توکن",
      "حالت عادی",
      "خطای CSS",
      "کش"
     ],
     "answer": 0,
     "explain": "Rotation همین را تشخیص می‌دهد."
    },
    {
     "q": "Cache Stampede چیست؟",
     "options": [
      "هجوم همزمان به منبع هنگام انقضای کش",
      "پر شدن دیسک",
      "خطای DNS",
      "کند شدن CSS"
     ],
     "answer": 0,
     "explain": "با قفل یا انقضای تصادفی کم می‌شود."
    },
    {
     "q": "AsyncLocalStorage برای چه کاری مناسب است؟",
     "options": [
      "نگه‌داشتن زمینه‌ی هر درخواست (مثل request id) در زنجیره‌ی async",
      "ذخیره‌ی دائمی داده",
      "اجرای کد در thread جدا",
      "کش کردن پاسخ‌ها"
     ],
     "answer": 0,
     "explain": "زمینه بعد از await هم باقی می‌ماند و بین درخواست‌های هم‌زمان قاطی نمی‌شود."
    },
    {
     "q": "چرا execFile از exec امن‌تر است؟",
     "options": [
      "آرگومان‌ها را بدون shell می‌دهد و تزریق دستور ممکن نیست",
      "سریع‌تر است",
      "خروجی رنگی دارد",
      "فقط روی ویندوز کار می‌کند"
     ],
     "answer": 0,
     "explain": "exec رشته را به shell می‌دهد و ; و $() را تفسیر می‌کند."
    },
    {
     "q": "برای نوشتن امن فایل پیکربندی کدام الگو درست است؟",
     "options": [
      "نوشتن در فایل موقت، fsync و سپس rename",
      "نوشتن مستقیم روی فایل",
      "حذف و ساخت دوباره",
      "نوشتن با appendFile"
     ],
     "answer": 0,
     "explain": "rename اتمی است و خواننده نیمه‌فایل نمی‌بیند."
    },
    {
     "q": "چرا startsWith(ROOT) به‌تنهایی برای جلوگیری از Path Traversal کافی نیست؟",
     "options": [
      "چون /srv/public-evil هم با /srv/public شروع می‌شود",
      "چون startsWith کند است",
      "چون مسیر ویندوز ندارد",
      "چون فقط حروف کوچک را می‌پذیرد"
     ],
     "answer": 0,
     "explain": "باید ROOT + path.sep را بررسی کرد."
    }
   ],
   "challenge": {
    "task": "یک فایل .github/workflows/ci.yml بنویس (روی کاغذ/متن) که علاوه بر نصب و تست، یک مرحلهٔ جدید هم داشته باشه که فقط وقتی روی برنچ main باشه، پیامی مثل 'آماده برای دیپلوی' چاپ کنه (فرض کن این مرحلهٔ دیپلوی واقعی رو ساده‌سازی کردیم).",
    "hint1": "در GitHub Actions می‌تونی با `if: github.ref == 'refs/heads/main'` یک step رو فقط برای برنچ main اجرا کنی.",
    "hint2": "step جدید رو بعد از step های install و test اضافه کن، چون دیپلوی باید بعد از موفقیت تست‌ها اتفاق بیفته.",
    "solution": "name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 20\n      - run: npm install\n      - run: npm test\n      - name: آماده‌سازی دیپلوی\n        if: github.ref == 'refs/heads/main'\n        run: echo \"آماده برای دیپلوی\""
   }
  }
 ],
 "covers": [
  "Node.js چیست، Event Loop، non-blocking I/O",
  "npm, package.json, Modules, File System",
  "http Module، Express.js، Routing، Middleware، Router",
  "REST API کامل (CRUD)، Validation",
  "Environment Variables، Auth Middleware",
  "WebSocket (Socket.io)",
  "Logging، CI/CD، Docker، Cluster"
 ]
});
