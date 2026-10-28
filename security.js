(window.COURSES=window.COURSES||[]).push({
 "id": "security",
 "name": "امنیت Backend",
 "icon": "🛡️",
 "kind": "sql",
 "desc": "سناریوهای واقعی حمله و دفاع — در یک محیط کاملاً امن و آفلاین",
 "covers": [
  "Authentication, Password Hashing, JWT",
  "CORS, CSRF, XSS",
  "SQL Injection (حمله و دفاع زنده)",
  "Rate Limiting, Input Validation",
  "Environment Variables, Security Headers"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "احراز هویت: Hash کردن پسورد و JWT",
     "content": "<p>هرگز پسورد کاربر را خام ذخیره نکنید — کتابخانه‌ای مثل <b>bcrypt</b> آن را <b>Hash</b> می‌کند (یک‌طرفه، غیرقابل بازگشت). برای اینکه کاربر بعد از لاگین «شناخته‌شده» بماند، سرور یک <b>JWT (JSON Web Token)</b> صادر می‌کند که کاربر در درخواست‌های بعدی همراه خودش می‌فرستد.</p><div class='code-block'><div class='cb-head'>auth.js</div><pre><code>const bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\n\nasync function register(email, plainPassword) {\n  const hashed = await bcrypt.hash(plainPassword, 10);\n  // hashed رو ذخیره کن، نه plainPassword رو\n  return hashed;\n}\n\nfunction createToken(userId) {\n  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });\n}</code></pre></div>",
     "exercise": "توضیح بده اگر دیتابیس یک سایت هک بشه ولی پسوردها Hash شده باشن، چرا هکر بازم نمی‌تونه مستقیم لاگین کنه."
    }
   ],
   "quiz": [
    {
     "q": "چرا پسورد کاربر باید Hash شود، نه رمزنگاری (Encryption) دوطرفه؟",
     "options": [
      "Hash سریع‌تر است",
      "Hash یک‌طرفه است و حتی سرور هم نمی‌تواند پسورد اصلی را برگرداند، امنیت بیشتری در نشت داده می‌دهد",
      "تفاوتی ندارد",
      "Hash فقط برای فایل‌هاست"
     ],
     "answer": 1,
     "explain": "چون Hash برگشت‌ناپذیر است، حتی نشت دیتابیس هم پسورد اصلی کاربران را افشا نمی‌کند."
    },
    {
     "q": "JWT معمولاً کجا نگه‌داری و چگونه استفاده می‌شود؟",
     "options": [
      "فقط روی سرور و هرگز فرستاده نمی‌شود",
      "کلاینت آن را نگه می‌دارد و در درخواست‌های بعدی برای اثبات هویت می‌فرستد",
      "داخل دیتابیس محصولات ذخیره می‌شود",
      "جایگزین HTTPS است"
     ],
     "answer": 1,
     "explain": "کاربر بعد از لاگین توکن را دریافت و در هدر درخواست‌های بعدی ارسال می‌کند."
    },
    {
     "q": "مقدار expiresIn در ساخت JWT چه کاربردی دارد؟",
     "options": [
      "حجم توکن را کم می‌کند",
      "مدت اعتبار توکن را مشخص می‌کند تا برای همیشه معتبر نماند",
      "رمز عبور را عوض می‌کند",
      "سرعت سرور را افزایش می‌دهد"
     ],
     "answer": 1,
     "explain": "محدودکردن عمر توکن یک لایهٔ امنیتی مهم است — اگر توکن لو برود، عمر محدودی دارد."
    }
   ],
   "challenge": {
    "task": "دو سناریوی احراز هویت رو با هم مقایسه کن (به‌صورت متنی): سناریوی اول با Session (کوکی + ذخیرهٔ سرور)، سناریوی دوم با JWT. برای هر کدوم بنویس چطور خروج (logout) کاربر پیاده‌سازی می‌شه، و چرا این کار توی JWT سخت‌تره.",
    "hint1": "در Session، logout یعنی سرور اون session رو از حافظه/دیتابیس خودش پاک می‌کنه — ساده و فوری.",
    "hint2": "در JWT، توکن خودش حاوی همهٔ اطلاعاته و سرور چیزی ذخیره نمی‌کنه؛ پس نمی‌تونه یه توکن خاص رو 'باطل' اعلام کنه مگر با نگه‌داشتن یک لیست سیاه (blacklist) که خودش نوعی state سمت سرور می‌شه.",
    "solution": "Session-based: سرور یک شناسهٔ session توی دیتابیس/حافظه نگه می‌داره و به کاربر یک کوکی می‌ده. Logout = پاک‌کردن اون session از سرور؛ فوری و قطعی.\n\nJWT-based: توکن خودش حاوی اطلاعاته و سرور هیچ‌چیزی ذخیره نمی‌کنه (stateless). Logout واقعی سخته چون توکن تا وقتی expire نشه، معتبره — راه‌حل رایج: نگه‌داشتن یک 'blacklist' کوتاه از توکن‌های باطل‌شده تا زمان انقضاشون، که خودش کمی state برمی‌گردونه."
   }
  },
  {
   "lessons": [
    {
     "title": "Session در برابر JWT: کدام را کی انتخاب کنیم؟",
     "content": "<p>روش قدیمی‌تر احراز هویت، <b>Session</b> است: سرور اطلاعات کاربر لاگین‌شده را در حافظه/دیتابیس خودش نگه می‌دارد و فقط یک شناسه به مرورگر (در قالب کوکی) می‌دهد. <b>JWT</b> برعکس، <b>Stateless</b> است — همهٔ اطلاعات لازم داخل خودِ توکن است و سرور چیزی ذخیره نمی‌کند؛ این باعث می‌شود JWT برای سیستم‌هایی با چند سرور (بدون نیاز به اشتراک‌گذاری session بین سرورها) مناسب‌تر باشد، ولی Session برای کنترل دقیق‌تر (مثل logout فوری همهٔ دستگاه‌ها) ساده‌تر است.</p>",
     "exercise": "برای یک اپلیکیشن بانکی که امنیت بالا و کنترل دقیق نشست‌ها مهم است، کدام روش (Session یا JWT) رو انتخاب می‌کنی؟ دلیلت رو بنویس."
    },
    {
     "title": "احراز هویت دو مرحله‌ای (MFA) — مفهومی",
     "content": "<p><b>Multi-Factor Authentication (MFA)</b> یعنی علاوه بر پسورد (چیزی که می‌دانید)، یک لایهٔ دوم هم لازم است: کدی که به گوشی می‌رسد (چیزی که دارید) یا اثر انگشت (چیزی که هستید). حتی اگر پسورد لو برود، بدون آن لایهٔ دوم، مهاجم نمی‌تواند وارد شود. پیاده‌سازی رایج: تولید یک کد ۶رقمی موقت (TOTP) با کتابخانه‌ای مثل <code class='inline'>speakeasy</code> که با اپ‌هایی مثل Google Authenticator سازگار است.</p>",
     "exercise": "فکر کن یک اپ ایمیل می‌سازی. توضیح بده چرا فعال‌کردن MFA به‌صورت پیش‌فرض برای همهٔ کاربران، شاید تجربهٔ کاربری بدی بده، ولی برای بخش تنظیمات حساب (تغییر پسورد) اجباری‌کردنش منطقی باشه."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی JWT با Session چیست؟",
     "options": [
      "تفاوتی ندارند",
      "JWT بدون‌حالت (stateless) است و سرور چیزی ذخیره نمی‌کند؛ Session روی سرور نگه‌داری می‌شود",
      "Session فقط برای موبایل است",
      "JWT کندتر است"
     ],
     "answer": 1,
     "explain": "این تفاوت معماری، مزایا و محدودیت‌های متفاوتی برای هر روش ایجاد می‌کند."
    },
    {
     "q": "چرا لغو فوری یک JWT خاص (قبل از انقضایش) سخت‌تر از Session است؟",
     "options": [
      "JWT اصلاً قابل لغو نیست",
      "چون سرور اطلاعاتی دربارهٔ توکن‌های صادرشده ذخیره نمی‌کند (stateless)",
      "چون JWT رمزنگاری‌شده است",
      "تفاوتی وجود ندارد"
     ],
     "answer": 1,
     "explain": "برای لغو زودهنگام JWT معمولاً به یک blacklist نیاز است که کمی state برمی‌گرداند."
    },
    {
     "q": "MFA (احراز هویت چندمرحله‌ای) چه چیزی را تضمین می‌کند؟",
     "options": [
      "پسورد قوی‌تری ساخته می‌شود",
      "حتی با لو رفتن پسورد، بدون لایهٔ دوم امکان ورود نیست",
      "سرعت لاگین بیشتر می‌شود",
      "نیازی به پسورد نیست"
     ],
     "answer": 1,
     "explain": "MFA یک لایهٔ امنیتی اضافه فراتر از دانستن پسورد ایجاد می‌کند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "دیدن SQL Injection با چشم خودت (زنده و بی‌خطر)",
     "content": "<p><b>SQL Injection</b> یعنی وقتی ورودی کاربر مستقیم و بدون فیلتر داخل متن کوئری چسبانده می‌شود، کاربر می‌تواند با یک ورودی هوشمندانه، ساختار کوئری را عوض کند. پایین یک جدول کاربران با یک ادمین «مخفی» ساختیم و یک کوئری لاگین ناامن نوشتیم که ورودی رو مستقیم می‌چسبونه. دکمهٔ اجرا رو بزن و ببین همهٔ کاربرها (از جمله ادمین) بدون دونستن پسورد برگردونده می‌شن — این دقیقاً همون حمله‌ایه که روی سایت‌های واقعی و ناامن اتفاق می‌افته.</p>",
     "sql": "-- جدول کاربران با یک ادمین «مخفی»\nCREATE TABLE users (id INTEGER, username TEXT, password TEXT, role TEXT);\nINSERT INTO users VALUES (1,'ali','1234','user');\nINSERT INTO users VALUES (2,'admin','SuperSecret99','admin');\n\n-- این شبیه‌سازی یه کوئری لاگین ناامنه که فرض می‌کنیم ورودی کاربر مستقیم چسبیده شده:\n-- ورودی فرضی کاربر در فیلد پسورد: ' OR '1'='1\nSELECT * FROM users\nWHERE username = 'ali' AND password = '' OR '1'='1';\n\n-- ببین چند نفر برگشت! حتی ادمین هم برگشت، بدون این‌که پسوردش رو بدونیم.",
     "exercise": "کوئری رو تغییر بده تا با یه ورودی متفاوت (مثلاً ' OR role='admin' -- ) فقط رکورد ادمین برگرده — بدون دونستن پسوردش."
    },
    {
     "title": "دفاع: Parameterized Query و اعتبارسنجی ورودی",
     "content": "<p>راه‌حل واقعی، <b>Parameterized Query</b> است: مقدار ورودی کاربر هرگز مستقیم داخل متن SQL نوشته نمی‌شود؛ به‌جایش جای‌خالی (placeholder) گذاشته می‌شود و مقدار جدا فرستاده می‌شود — این‌طوری حتی اگر کاربر بنویسد <code class='inline'>' OR '1'='1</code>، فقط به‌عنوان یک رشتهٔ متنی عادی (نه بخشی از دستور SQL) در نظر گرفته می‌شود.</p><p>در کنارش، <b>CORS</b> مشخص می‌کند کدام دامنه‌ها اجازهٔ صدازدن API شما را دارند، <b>CSRF</b> جلوی اجرای درخواست‌های ناخواسته از سایت دیگری را می‌گیرد، <b>XSS</b> جلوی اجرای کد جاوااسکریپت مخرب در صفحه را می‌گیرد (با escape‌کردن ورودی کاربر قبل از نمایش) و <b>Rate Limiting</b> جلوی تلاش‌های مکرر و خودکار (مثل حدس‌زدن پسورد) را می‌گیرد.</p><div class='code-block'><div class='cb-head'>مقایسه</div><pre><code>// ❌ ناامن — چسباندن مستقیم\nconst q = \"SELECT * FROM users WHERE username = '\" + input + \"'\";\n\n// ✅ امن — پارامتری (Node + pg)\npool.query('SELECT * FROM users WHERE username = $1', [input]);</code></pre></div>",
     "exercise": "توضیح بده چرا در نسخهٔ پارامتری، حتی اگر input برابر با ' OR '1'='1 باشد، دیگر نمی‌تواند ساختار کوئری را تغییر دهد."
    }
   ],
   "quiz": [
    {
     "q": "SQL Injection معمولاً از کجا امکان‌پذیر می‌شود؟",
     "options": [
      "از کندی اینترنت",
      "از چسباندن مستقیم ورودی کاربر داخل متن کوئری SQL",
      "از استفاده از HTTPS",
      "از داشتن Index زیاد"
     ],
     "answer": 1,
     "explain": "وقتی ورودی خام کاربر بدون جداسازی وارد متن SQL شود، می‌تواند ساختار کوئری را تغییر دهد."
    },
    {
     "q": "چرا Parameterized Query جلوی SQL Injection را می‌گیرد؟",
     "options": [
      "چون سریع‌تر اجرا می‌شود",
      "چون ورودی کاربر همیشه به‌عنوان یک مقدار داده (نه بخشی از دستور SQL) در نظر گرفته می‌شود",
      "چون رمزنگاری می‌شود",
      "چون دیتابیس را عوض می‌کند"
     ],
     "answer": 1,
     "explain": "جداسازی «متن کوئری» از «مقدار ورودی» باعث می‌شود ورودی نتواند دستور را تغییر دهد."
    },
    {
     "q": "Rate Limiting در امنیت API چه کاربردی دارد؟",
     "options": [
      "سرعت سایت را برای همه کاربران بیشتر می‌کند",
      "جلوی تعداد درخواست‌های بیش‌ازحد از یک منبع (مثل حدس‌زدن مکرر پسورد) را می‌گیرد",
      "جایگزین HTTPS است",
      "فقط برای تصاویر استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "با محدودکردن تعداد درخواست در بازهٔ زمانی، حملات brute-force و اسپم کاهش می‌یابند."
    }
   ],
   "challenge": {
    "task": "توی همون سندباکس SQL این مرحله، یه جدول admins(id, username, password) بساز، یه رکورد ادمین بذار توش، و دو نسخه از یه کوئری «جست‌وجو بر اساس اسم» بنویس: یکی که آسیب‌پذیر باشه (چسباندن مستقیم یه رشته که خودت شبیه‌سازی می‌کنی) و یکی که در قالب توضیح متنی بگی چطور با Parameterized Query امن می‌شه.",
    "hint1": "برای شبیه‌سازی «ورودی کاربر»، یه متغیر رشته‌ای در نظر بگیر (روی کاغذ/کامنت) و ببین اگه مستقیم داخل WHERE چسبونده بشه چه کوئری نهایی‌ای ساخته می‌شه.",
    "hint2": "تمرکز کن روی این سؤال: اگه ورودی شامل تک‌کوتیشن (') باشه، اون تک‌کوتیشن چطور «می‌شکنه» رشتهٔ اصلی کوئری رو و باقی متن چطور به‌عنوان دستور SQL اجرا می‌شه؟",
    "solution": "مثال: اگه کوئری اصلی این باشه:\nSELECT * FROM admins WHERE username = '<ورودی کاربر>'\n\nو ورودی کاربر ' OR '1'='1 باشه، کوئری نهایی می‌شه:\nSELECT * FROM admins WHERE username = '' OR '1'='1'\n\nکه چون '1'='1' همیشه درسته، همهٔ ردیف‌ها برمی‌گردن. راه‌حل امن اینه که به‌جای چسباندن مستقیم، از placeholder استفاده کنیم (مثل $1 در pg یا ? در sqlite) تا ورودی کاربر همیشه به‌عنوان یک مقدار ساده در نظر گرفته بشه، نه بخشی از دستور SQL."
   }
  },
  {
   "lessons": [
    {
     "title": "مدیریت Secrets و Security Headers",
     "content": "<p>هیچ‌وقت کلید API، رمز دیتابیس یا JWT Secret را مستقیم در کد ننویسید — همیشه در <b>Environment Variables</b> (فایل <code class='inline'>.env</code>، که هرگز روی Git پابلیک نمی‌شود) نگه‌دارید.</p><p><b>Security Headers</b> (مثل <code class='inline'>Content-Security-Policy</code> یا <code class='inline'>X-Frame-Options</code>) به مرورگر می‌گویند چه منابعی مجاز به اجرا هستند و از حملاتی مثل Clickjacking جلوگیری می‌کنند. کتابخانه‌ای مثل <b>helmet</b> در Express این هدرها را به‌صورت خودکار تنظیم می‌کند.</p>",
     "exercise": "یک فایل .gitignore فرضی بنویس که مطمئن بشی فایل .env هیچ‌وقت وارد Git نمی‌شه."
    },
    {
     "title": "HTTPS و TLS: چرا هر سایت باید قفل سبز داشته باشد",
     "content": "<p><b>HTTPS</b> نسخهٔ رمزنگاری‌شدهٔ HTTP است — با پروتکل <b>TLS</b> داده بین مرورگر و سرور رمزنگاری می‌شود تا حتی اگر کسی ترافیک شبکه را ببیند (مثلاً روی وای‌فای عمومی)، نتواند رمز عبور یا اطلاعات کارت بانکی را بخواند. بدون HTTPS، حملهٔ <b>Man-in-the-Middle</b> (شخص میانی) به‌راحتی امکان‌پذیر است. امروز گواهی‌های رایگان (مثل Let's Encrypt) این کار را برای همه‌کس رایگان و ساده کرده‌اند.</p>",
     "exercise": "توضیح بده روی یک وای‌فای عمومی و ناامن (مثل کافه)، چرا واردشدن به یک سایت بدون HTTPS برای وارد کردن رمز عبور خطرناکه."
    },
    {
     "title": "چک‌لیست امنیتی قبل از انتشار",
     "content": "<p>قبل از این‌که یک API یا سایت واقعی رو منتشر کنید، این چک‌لیست حداقلی رو مرور کنید:</p><ul><li>✅ همهٔ پسوردها Hash شده‌اند (bcrypt)</li><li>✅ همهٔ کوئری‌های دیتابیس Parameterized هستند</li><li>✅ HTTPS فعال است</li><li>✅ اطلاعات حساس در environment variables هستند، نه در کد</li><li>✅ Rate Limiting روی route های حساس (لاگین) فعال است</li><li>✅ Security Headers (با helmet) تنظیم شده‌اند</li><li>✅ ورودی‌های کاربر Validate می‌شوند</li><li>✅ فایل .env در .gitignore است</li></ul>",
     "exercise": "از این چک‌لیست، برای یکی از پروژه‌های قبلی خودت (توی این بوت‌کمپ) بررسی کن چند مورد رو رعایت کردی و کدوم‌ها رو فراموش کرده بودی."
    },
    {
     "title": "XSS و CSRF: دو حملهٔ کلاسیک وب",
     "content": "<p><b>XSS</b> یعنی مهاجم اسکریپت خودش را در صفحهٔ شما اجرا کند. دفاع: خروجی کاربر را escape کن، به‌جای <code class='inline'>innerHTML</code> از <code class='inline'>textContent</code> استفاده کن و Content-Security-Policy بگذار. <b>CSRF</b> یعنی سایت دیگری با کوکی کاربر درخواست جعلی بفرستد. دفاع: کوکی <code class='inline'>SameSite</code>، توکن CSRF و بررسی Origin.</p>",
     "exercise": "یک فرم نظرات بساز که ورودی <script> در آن اجرا نشود."
    },
    {
     "title": "Rate Limiting، CORS و ثبت وقایع امنیتی",
     "content": "<p>Rate Limiting تعداد درخواست هر IP یا کاربر را محدود می‌کند و جلوی حدس‌زدن رمز (Brute Force) را می‌گیرد. CORS را روی دامنه‌های مجاز تنظیم کن، نه <code class='inline'>*</code>. ورودهای ناموفق و تغییر دسترسی را ثبت کن (بدون نوشتن رمز در لاگ) تا حمله دیده شود.</p>",
     "exercise": "برای مسیر login محدودیت ۵ تلاش در دقیقه تعریف کن."
    },
    {
     "title": "OWASP Top 10: نقشهٔ آسیب‌پذیری‌ها",
     "content": "<p>OWASP فهرست رایج‌ترین ضعف‌های وب است: کنترل دسترسی ناقص، خطای رمزنگاری، Injection، طراحی ناامن، پیکربندی غلط، کامپوننت قدیمی، خطای احراز هویت، یکپارچگی نرم‌افزار، نبود لاگ و SSRF. قبل از انتشار، پروژه را با این فهرست بررسی کن.</p>",
     "exercise": "پروژه‌ات را با پنج مورد اول فهرست چک کن."
    },
    {
     "title": "امنیت وابستگی‌ها و Secrets",
     "content": "<p>کتابخانه‌های قدیمی بزرگ‌ترین منبع آسیب‌پذیری‌اند: با <code class='inline'>npm audit</code> یا <code class='inline'>pip-audit</code> بررسی کن و به‌روز نگه دار. کلید و رمز را هرگز در Git نگذار؛ اگر لو رفت، فوراً بچرخان (rotate) و فقط حذف از تاریخچه کافی نیست.</p>",
     "exercise": "یک پروژه را با npm audit بسنج و یک مورد را رفع کن."
    },
    {
     "title": "SQL Injection عمیق: Blind، Time-based و Prepared Statement",
     "content": "<p>در Blind SQLi نتیجه مستقیم دیده نمی‌شود؛ مهاجم از تفاوت پاسخ (درست/غلط) یا تأخیر زمانی (<code class='inline'>SLEEP</code>) داده را بیت‌به‌بیت استخراج می‌کند. تنها دفاع اصلی Prepared Statement است؛ escape دستی یا لیست سیاه کافی نیست.<div class='code-block'><div class='cb-head'>safe.js</div><pre><code>// ناامن\ndb.query(`SELECT * FROM u WHERE id=${id}`);\n// امن\ndb.query('SELECT * FROM u WHERE id=$1', [id]);</code></pre></div></p>",
     "exercise": "یک کوئری ناامن را پیدا کن و با پارامتر امن بازنویسی کن."
    },
    {
     "title": "حمله به JWT: alg=none و Key Confusion",
     "content": "<p>اگر سرور الگوریتم را از هدر توکن بخواند، مهاجم می‌تواند <code class='inline'>alg:none</code> بگذارد یا توکن RS256 را با کلید عمومی به‌عنوان رمز HS256 امضا کند. دفاع: الگوریتم را سمت سرور ثابت کن، <code class='inline'>exp</code> و <code class='inline'>aud</code> را بررسی کن و Refresh Token را با چرخش (rotation) و ابطال تکراری استفاده کن.</p>",
     "exercise": "اعتبارسنجی JWT را طوری بنویس که فقط RS256 بپذیرد."
    },
    {
     "title": "OAuth2 و OIDC: Authorization Code با PKCE",
     "content": "<p>برای اپ‌های SPA و موبایل، Implicit Flow منسوخ است. جریان درست: Authorization Code + PKCE؛ کلاینت یک <code class='inline'>code_verifier</code> تصادفی می‌سازد، هش آن (<code class='inline'>code_challenge</code>) را می‌فرستد و در تبادل توکن اصل را ارائه می‌دهد. پارامتر <code class='inline'>state</code> جلوی CSRF را می‌گیرد.</p>",
     "exercise": "نمودار توالی ورود با گوگل را با PKCE بکش."
    },
    {
     "title": "SSRF و متادیتای ابری",
     "content": "<p>SSRF یعنی سرور را فریب بدهند به آدرس دلخواه درخواست بزند (مثلاً <code class='inline'>169.254.169.254</code> برای دزدیدن کلیدهای ابری). دفاع: لیست سفید دامنه، رد IPهای خصوصی پس از DNS resolve، غیرفعال‌کردن redirect و استفاده از IMDSv2.</p>",
     "exercise": "تابعی بنویس که URL ورودی را قبل از fetch اعتبارسنجی کند."
    },
    {
     "title": "ذخیره‌ی امن رمز: Argon2، Salt و Pepper",
     "content": "<p>هش سریع (MD5/SHA) برای رمز ممنوع است. از Argon2id یا bcrypt با پارامتر هزینه استفاده کن؛ salt یکتا خودکار است و pepper یک کلید سراسری خارج از دیتابیس است. مقایسه را با تابع زمان‌ثابت انجام بده.<div class='code-block'><div class='cb-head'>hash.py</div><pre><code>from argon2 import PasswordHasher\nph = PasswordHasher()\nh = ph.hash('pass')\nph.verify(h, 'pass')</code></pre></div></p>",
     "exercise": "رمزها را از SHA256 به Argon2 مهاجرت بده."
    },
    {
     "title": "نشست و کوکی امن",
     "content": "<p>کوکی نشست باید <code class='inline'>HttpOnly</code> (غیرقابل‌خواندن برای JS)، <code class='inline'>Secure</code> و <code class='inline'>SameSite=Lax/Strict</code> باشد. بعد از ورود، شناسه‌ی نشست را بچرخان (جلوی Session Fixation) و برای خروج، سمت سرور نشست را باطل کن.</p>",
     "exercise": "کوکی یک اپ را بررسی و پرچم‌های ناقص را اصلاح کن."
    },
    {
     "title": "امنیت آپلود فایل",
     "content": "<p>پسوند و Content-Type را فقط از کاربر نپذیر؛ محتوای واقعی (magic bytes) را بررسی کن، نام را تصادفی کن، خارج از webroot ذخیره کن، حجم را محدود کن و در صورت امکان اسکن ویروس بزن. فایل SVG می‌تواند XSS داشته باشد.</p>",
     "exercise": "یک اندپوینت آپلود فقط-تصویر با بررسی magic bytes بنویس."
    },
    {
     "title": "Deserialization ناامن و Prototype Pollution",
     "content": "<p>بازگردانی داده‌ی ناامن (pickle پایتون، Java serialization) می‌تواند به اجرای کد برسد؛ از JSON با شِما استفاده کن. در JS، ادغام آبجکت کاربر با <code class='inline'>__proto__</code> کل برنامه را آلوده می‌کند: کلیدهای <code class='inline'>__proto__</code> و <code class='inline'>constructor</code> را مسدود یا از <code class='inline'>Object.create(null)</code> استفاده کن.</p>",
     "exercise": "تابع merge را طوری بنویس که از Prototype Pollution مصون باشد."
    },
    {
     "title": "هدرهای امنیتی: HSTS، CSP و بقیه",
     "content": "<p>HSTS مرورگر را به HTTPS مجبور می‌کند. CSP منبع مجاز اسکریپت را محدود می‌کند و XSS را مهار می‌کند. <code class='inline'>X-Content-Type-Options: nosniff</code> و <code class='inline'>frame-ancestors</code> جلوی Clickjacking و حدس نوع فایل را می‌گیرند. با Helmet یا معادل در فریم‌ورک فعال کن.</p>",
     "exercise": "هدرهای یک سایت را با securityheaders.com بسنج و ضعف‌ها را رفع کن."
    },
    {
     "title": "IDOR/BOLA و مدل‌های دسترسی (RBAC/ABAC)",
     "content": "<p>IDOR یعنی تغییر شناسه در URL (<code class='inline'>/orders/5</code> به <code class='inline'>/orders/6</code>) دسترسی به داده‌ی دیگران بدهد. دفاع: در هر درخواست مالکیت منبع را سمت سرور بررسی کن. RBAC بر اساس نقش و ABAC بر اساس ویژگی‌ها (کاربر، منبع، زمان) تصمیم می‌گیرد.</p>",
     "exercise": "یک اندپوینت را طوری بنویس که فقط مالک سفارش بتواند ببیند."
    },
    {
     "title": "مدل‌سازی تهدید با STRIDE",
     "content": "<p>قبل از کدنویسی، سیستم را روی نمودار جریان داده بکش و برای هر مؤلفه شش تهدید را بررسی کن: جعل هویت، دست‌کاری، انکار، افشای اطلاعات، ممانعت از سرویس و ارتقای سطح دسترسی. برای هر مورد یک کنترل مشخص ثبت کن.</p>",
     "exercise": "برای یک اپ پرداخت جدول STRIDE بساز."
    },
    {
     "title": "لاگ، تشخیص نفوذ و پاسخ به رخداد",
     "content": "<p>لاگ ساختاریافته با شناسه‌ی درخواست و کاربر نگه دار (بدون رمز و توکن). هشدار برای الگوهای مشکوک (ورود ناموفق متعدد، دسترسی غیرعادی) بگذار. طرح پاسخ: شناسایی، مهار، ریشه‌یابی، بازیابی و درس‌آموخته.</p>",
     "exercise": "یک runbook یک‌صفحه‌ای برای افشای کلید API بنویس."
    },
    {
     "title": "SQL Injection عملی: ناامن در برابر Prepared Statement",
     "content": "<p>در این مثال زنده، ورودی <code class='inline'>' OR '1'='1</code> شرط را همیشه درست می‌کند و بدون رمز وارد می‌شود. وقتی ورودی با الحاق رشته وارد کوئری شود، داده به «کد» تبدیل می‌شود. با Prepared Statement (پارامتر <code class='inline'>?</code>) ساختار کوئری و داده جدا می‌مانند و حمله بی‌اثر است.</p>",
     "exercise": "روی خروجی تغییر بده و ببین چه ورودی‌هایی ناامن را می‌شکنند.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE u(name TEXT, pw TEXT)\")\ndb.execute(\"INSERT INTO u VALUES('admin','secret')\")\n\ndef login_unsafe(name, pw):\n    q = f\"SELECT * FROM u WHERE name='{name}' AND pw='{pw}'\"\n    return db.execute(q).fetchone() is not None\n\ndef login_safe(name, pw):\n    q = \"SELECT * FROM u WHERE name=? AND pw=?\"\n    return db.execute(q, (name, pw)).fetchone() is not None\n\nattack = \"' OR '1'='1\"\nprint(\"ناامن:\", login_unsafe(\"admin\", attack))\nprint(\"امن:\", login_safe(\"admin\", attack))",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "ذخیره‌ی رمز: هش کند، salt و مقایسه‌ی زمان‌ثابت",
     "content": "<p>رمز را با تابع هش کند و دارای salt ذخیره کن (PBKDF2، scrypt، bcrypt یا Argon2id)، نه SHA256 ساده. salt یکتا از حمله‌ی جدول‌های آماده جلوگیری می‌کند و تعداد تکرار زیاد حدس‌زدن را گران می‌کند. مقایسه را با <code class='inline'>hmac.compare_digest</code> (زمان‌ثابت) انجام بده تا از اختلاف زمان اطلاعات نشت نکند.</p>",
     "exercise": "تعداد تکرار را تغییر بده و زمان هش را اندازه بگیر.",
     "py": "import hashlib, hmac, os\n\ndef hash_pw(pw, salt=None, n=200_000):\n    salt = salt or os.urandom(16)\n    h = hashlib.pbkdf2_hmac(\"sha256\", pw.encode(), salt, n)\n    return salt, n, h\n\ndef verify(pw, salt, n, h):\n    new = hashlib.pbkdf2_hmac(\"sha256\", pw.encode(), salt, n)\n    return hmac.compare_digest(new, h)\n\ns, n, h = hash_pw(\"pass123\")\nprint(verify(\"pass123\", s, n, h), verify(\"wrong\", s, n, h))\nprint(len(h), h != hash_pw(\"pass123\")[2])"
    },
    {
     "title": "امضای توکن (JWT) از صفر و حمله‌ی alg=none",
     "content": "<p>JWT سه بخش دارد: هدر، بدنه و امضا. امضای HS256 یک HMAC است. تأیید‌کننده باید الگوریتم مجاز را خودش ثابت کند و هدر توکن را باور نکند، وگرنه مهاجر توکن با <code class='inline'>alg:none</code> و بدون امضا می‌سازد. همیشه امضا، انقضا (<code class='inline'>exp</code>) و مخاطب (<code class='inline'>aud</code>) را بررسی کن. در عمل از کتابخانه‌ی معتبر استفاده کن؛ این مثال فقط برای فهم است.</p>",
     "exercise": "توکنی بساز که مخاطب (aud) هم بررسی شود.",
     "py": "import base64, hmac, hashlib, json, time\n\ndef b64(b): return base64.urlsafe_b64encode(b).rstrip(b\"=\").decode()\ndef unb64(s): return base64.urlsafe_b64decode(s + \"=\" * (-len(s) % 4))\n\ndef sign(payload, key):\n    head = b64(json.dumps({\"alg\": \"HS256\", \"typ\": \"JWT\"}).encode())\n    body = b64(json.dumps(payload).encode())\n    sig = hmac.new(key, f\"{head}.{body}\".encode(), hashlib.sha256).digest()\n    return f\"{head}.{body}.{b64(sig)}\"\n\ndef verify(token, key):\n    head, body, sig = token.split(\".\")\n    if json.loads(unb64(head)).get(\"alg\") != \"HS256\":\n        raise ValueError(\"الگوریتم غیرمجاز\")\n    good = hmac.new(key, f\"{head}.{body}\".encode(), hashlib.sha256).digest()\n    if not hmac.compare_digest(good, unb64(sig)):\n        raise ValueError(\"امضا نامعتبر\")\n    data = json.loads(unb64(body))\n    if data[\"exp\"] < time.time():\n        raise ValueError(\"منقضی\")\n    return data\n\nkey = b\"k\" * 32\nt = sign({\"sub\": \"ali\", \"exp\": time.time() + 60}, key)\nprint(verify(t, key)[\"sub\"])\nnone = b64(b'{\"alg\":\"none\"}') + \".\" + b64(b'{\"sub\":\"admin\",\"exp\":9999999999}') + \".\"\ntry:\n    verify(none, key)\nexcept Exception as e:\n    print(\"رد شد:\", e)"
    },
    {
     "title": "امضای Webhook و جلوگیری از Replay",
     "content": "<p>فرستنده بدنه را با کلید مشترک HMAC می‌کند و گیرنده امضا را دوباره حساب و مقایسه می‌کند. تغییر حتی یک بایت امضا را بی‌اعتبار می‌کند. برای جلوگیری از Replay (ارسال دوباره‌ی درخواست معتبر قدیمی) زمان‌مهر را داخل امضا بگذار و درخواست‌های خارج از بازه (مثلاً ۵ دقیقه) را رد کن، یا شناسه‌ی یکتا را ذخیره کن.</p>",
     "exercise": "یک webhook پرداخت را با تأیید امضا و بازه‌ی زمانی بنویس.",
     "py": "import hmac, hashlib, time\n\nSECRET = b\"whsec\"\ndef sign(body, ts): return hmac.new(SECRET, f\"{ts}.\".encode() + body, hashlib.sha256).hexdigest()\n\ndef verify(body, ts, sig, now=None, tol=300):\n    now = now or time.time()\n    if abs(now - ts) > tol:\n        return False  # replay قدیمی\n    return hmac.compare_digest(sign(body, ts), sig)\n\nbody = b'{\"paid\":true}'\nts = int(time.time())\nsig = sign(body, ts)\nprint(verify(body, ts, sig))\nprint(verify(b'{\"paid\":false}', ts, sig))\nprint(verify(body, ts - 1000, sign(body, ts - 1000)))"
    },
    {
     "title": "جلوگیری از SSRF با بررسی IP",
     "content": "<p>SSRF یعنی مهاجم سرور را وادار کند به آدرس داخلی (متادیتای ابری <code class='inline'>169.254.169.254</code>، <code class='inline'>127.0.0.1</code>، شبکه‌ی خصوصی) درخواست بزند. دفاع: فقط http/https، آدرس را resolve کن و همه‌ی IPهای حاصل را بررسی کن (خصوصی، loopback، link-local)، redirect را کنترل کن و در حالت ایده‌آل فقط لیست سفید دامنه. این کد به DNS واقعی نیاز دارد و در محیط مرورگر کامل کار نمی‌کند.</p>",
     "exercise": "چرا بررسی نام دامنه‌ی متنی کافی نیست؟ (DNS Rebinding) توضیح بده."
    },
    {
     "title": "Path Traversal: محدودکردن دسترسی به فایل",
     "content": "<p>ورودی کاربر <code class='inline'>../../etc/passwd</code> می‌تواند خارج از پوشه‌ی مجاز بخواند. دفاع: مسیر را <code class='inline'>resolve()</code> کن (حذف <code class='inline'>..</code> و symlink) و بررسی کن هنوز زیر پوشه‌ی پایه است. بهتر: فایل را با شناسه‌ی داخلی ذخیره کن نه نام ورودی کاربر.</p>",
     "exercise": "نام فایل آپلودی را به شناسه‌ی تصادفی تبدیل کن.",
     "py": "from pathlib import Path\nimport tempfile, os\n\nbase = Path(tempfile.mkdtemp()).resolve()\n(base / \"ok.txt\").write_text(\"hi\")\n\ndef safe_open(user_path):\n    p = (base / user_path).resolve()\n    if base not in p.parents and p != base:\n        raise PermissionError(\"خارج از پوشه‌ی مجاز\")\n    return p.read_text()\n\nprint(safe_open(\"ok.txt\"))\nfor bad in (\"../etc/passwd\", \"/etc/passwd\", \"a/../../x\"):\n    try:\n        safe_open(bad)\n    except PermissionError as e:\n        print(\"رد:\", bad)\n    except FileNotFoundError:\n        print(\"یافت نشد\")"
    },
    {
     "title": "XSS: escape خروجی و Content-Security-Policy",
     "content": "<p>XSS وقتی رخ می‌دهد که ورودی کاربر به‌صورت HTML اجرایی نمایش داده شود. escape باید متناسب با زمینه (متن HTML، صفت، URL، JS) باشد؛ قالب‌های مدرن این کار را پیش‌فرض انجام می‌دهند. Content-Security-Policy لایه‌ی دوم است: فقط اسکریپت از منبع خودی و بدون inline. CSP جایگزین escape نیست.</p>",
     "exercise": "ورودی نظرات را در سه زمینه‌ی مختلف escape کن.",
     "py": "import html\n\ncomment = \"<script>alert('xss')</script> سلام\"\nprint(html.escape(comment))\npage = f\"<p>{html.escape(comment)}</p>\"\nprint(\"<script>\" in page)\n\ncsp = \"default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'\"\nprint(csp.split(\";\")[1].strip())"
    },
    {
     "title": "محدودکننده‌ی نرخ: Token Bucket",
     "content": "<p>Token Bucket با نرخ ثابت توکن می‌سازد و هر درخواست یکی مصرف می‌کند؛ ظرفیت (burst) اجازه‌ی پرش کوتاه می‌دهد ولی میانگین نرخ را محدود نگه می‌دارد. در چند سروری، شمارنده را در Redis با عملیات اتمی نگه دار. کلید را بر اساس کاربر یا IP (و حساس‌ترین مسیرها مثل login سخت‌گیرانه‌تر) انتخاب کن و کد ۴۲۹ و <code class='inline'>Retry-After</code> برگردان.</p>",
     "exercise": "نرخ را برای مسیر login پایین‌تر از بقیه‌ی مسیرها تنظیم کن.",
     "py": "import time\n\nclass TokenBucket:\n    def __init__(self, rate, burst):\n        self.rate, self.burst = rate, burst\n        self.tokens, self.t = burst, time.monotonic()\n    def allow(self):\n        now = time.monotonic()\n        self.tokens = min(self.burst, self.tokens + (now - self.t) * self.rate)\n        self.t = now\n        if self.tokens >= 1:\n            self.tokens -= 1\n            return True\n        return False\n\nb = TokenBucket(rate=1, burst=3)\nprint([b.allow() for _ in range(5)])\ntime.sleep(1.1)\nprint(b.allow())"
    },
    {
     "title": "حفاظت CSRF با توکن وابسته به نشست",
     "content": "<p>CSRF یعنی سایت دیگر با کوکی کاربر درخواست جعلی بفرستد. توکن CSRF را از شناسه‌ی نشست با HMAC بساز و در هر درخواست تغییر وضعیت بررسی کن؛ مهاجم آن را نمی‌داند. لایه‌های کمکی: کوکی <code class='inline'>SameSite=Lax/Strict</code>، بررسی هدر Origin و استفاده از متد غیر GET برای تغییرات.</p>",
     "exercise": "توکن CSRF را در یک فرم و در API بررسی کن.",
     "py": "import secrets, hmac, hashlib\n\nSESSION_KEY = secrets.token_bytes(32)\ndef csrf_token(session_id):\n    return hmac.new(SESSION_KEY, session_id.encode(), hashlib.sha256).hexdigest()\n\ndef check(session_id, token):\n    return hmac.compare_digest(csrf_token(session_id), token)\n\ntok = csrf_token(\"sess-1\")\nprint(check(\"sess-1\", tok), check(\"sess-2\", tok), check(\"sess-1\", \"x\" * 64))"
    },
    {
     "title": "مدیریت Secret و چرخش کلید",
     "content": "<p>Secret را در کد یا Git نگه ندار؛ از متغیر محیطی، مدیر Secret (Vault، AWS Secrets Manager، Azure Key Vault) و دسترسی حداقلی استفاده کن. کلیدها باید قابل چرخش باشند: نسخه‌ی کلید را در خروجی ذخیره کن تا هنگام چرخش، داده‌ی قدیمی با کلید قدیمی هنوز خوانده شود. رمزنگاری پوششی (Envelope Encryption): داده با کلید داده و آن کلید با کلید اصلی رمز می‌شود. دسترسی به Secret را لاگ کن.</p>",
     "exercise": "برنامه‌ریزی چرخش کلید JWT را بدون قطع کاربران بنویس."
    },
    {
     "title": "تشخیص تهدید: پنجره‌ی لغزان ورودهای ناموفق",
     "content": "<p>تشخیص نفوذ با الگوها شروع می‌شود: چند ورود ناموفق از یک IP در بازه‌ی کوتاه (Brute Force) یا یک حساب از چند IP (Credential Stuffing). پنجره‌ی لغزان تعداد را در بازه‌ی اخیر می‌شمارد. واکنش: تأخیر تصاعدی، CAPTCHA، قفل موقت و هشدار. لاگ رویدادها را ساخت‌یافته و بدون رمز نگه دار.</p>",
     "exercise": "قاعده‌ی قفل موقت حساب پس از ۵ شکست را به کد اضافه کن.",
     "py": "from collections import defaultdict, deque\n\nclass LoginGuard:\n    def __init__(self, limit=5, window=60):\n        self.limit, self.window = limit, window\n        self.fails = defaultdict(deque)\n    def fail(self, ip, now):\n        q = self.fails[ip]\n        q.append(now)\n        while q and now - q[0] > self.window:\n            q.popleft()\n        return len(q) >= self.limit\n\ng = LoginGuard()\nres = [g.fail(\"1.2.3.4\", t) for t in range(6)]\nprint(res)\nprint(g.fail(\"1.2.3.4\", 200), g.fail(\"9.9.9.9\", 0))"
    }
   ],
   "quiz": [
    {
     "q": "فایل .env معمولاً برای چه استفاده می‌شود؟",
     "options": [
      "ذخیرهٔ استایل CSS",
      "نگه‌داری اطلاعات حساس مثل کلید API خارج از کد اصلی",
      "کامپایل کد",
      "تعریف کامپوننت‌های React"
     ],
     "answer": 1,
     "explain": "جداکردن Secretها از کد باعث می‌شود در صورت انتشار عمومی کد، اطلاعات حساس لو نروند."
    },
    {
     "q": "کتابخانهٔ helmet در Express چه کاری انجام می‌دهد؟",
     "options": [
      "اتصال به دیتابیس",
      "تنظیم خودکار Security Headers برای محافظت در برابر برخی حملات رایج",
      "فشرده‌سازی تصاویر",
      "ساخت کامپوننت UI"
     ],
     "answer": 1,
     "explain": "helmet مجموعه‌ای از هدرهای امنیتی HTTP را به‌صورت پیش‌فرض فعال می‌کند."
    },
    {
     "q": "فایل .env باید در کدام فایل پروژه لیست شود تا وارد Git نشود؟",
     "options": [
      "package.json",
      ".gitignore",
      "README.md",
      "index.html"
     ],
     "answer": 1,
     "explain": ".gitignore به Git می‌گوید کدام فایل‌ها/پوشه‌ها هرگز نباید commit شوند."
    },
    {
     "q": "HTTPS دقیقاً چه چیزی را تأمین می‌کند؟",
     "options": [
      "سرعت بیشتر سایت",
      "رمزنگاری ارتباط بین مرورگر و سرور برای جلوگیری از شنود",
      "حذف نیاز به پسورد",
      "ذخیرهٔ خودکار داده"
     ],
     "answer": 1,
     "explain": "HTTPS با TLS از خواندن یا دستکاری داده توسط شخص ثالث در مسیر شبکه جلوگیری می‌کند."
    },
    {
     "q": "حملهٔ Man-in-the-Middle چه زمانی راحت‌تر امکان‌پذیر است؟",
     "options": [
      "وقتی از HTTPS استفاده می‌شود",
      "وقتی ارتباط رمزنگاری‌نشده (HTTP ساده) روی شبکه‌ای ناامن مثل وای‌فای عمومی باشد",
      "هیچ‌وقت ممکن نیست",
      "فقط روی موبایل"
     ],
     "answer": 1,
     "explain": "بدون رمزنگاری، هرکسی روی همان شبکه می‌تواند ترافیک را بخواند یا دستکاری کند."
    },
    {
     "q": "XSS یعنی چه؟",
     "options": [
      "اجرای اسکریپت مهاجم در صفحهٔ شما",
      "حذف دیتابیس",
      "کندی شبکه",
      "خطای CSS"
     ],
     "answer": 0,
     "explain": "با escape و CSP جلوی آن گرفته می‌شود."
    },
    {
     "q": "اگر کلید API در Git لو رفت اولین کار چیست؟",
     "options": [
      "چرخاندن (rotate) کلید",
      "حذف کامیت و ادامه",
      "هیچ‌کاری",
      "تغییر رنگ README"
     ],
     "answer": 0,
     "explain": "کلید لو رفته دیگر امن نیست."
    },
    {
     "q": "برای دفاع در برابر SQL Injection مهم‌ترین کار چیست؟",
     "options": [
      "Prepared Statement",
      "لیست سیاه کلمات",
      "فقط HTTPS",
      "حذف فاصله‌ها"
     ],
     "answer": 0,
     "explain": "ورودی و کد کوئری را جدا می‌کند."
    },
    {
     "q": "PKCE برای چه است؟",
     "options": [
      "امن‌کردن Authorization Code در کلاینت‌های عمومی",
      "فشرده‌سازی توکن",
      "رمزنگاری دیتابیس",
      "کش"
     ],
     "answer": 0,
     "explain": "جلوی سرقت code را می‌گیرد."
    },
    {
     "q": "کدام ویژگی کوکی از خواندن توسط JS جلوگیری می‌کند؟",
     "options": [
      "HttpOnly",
      "Secure",
      "Path",
      "Domain"
     ],
     "answer": 0,
     "explain": "XSS نمی‌تواند آن را بخواند."
    },
    {
     "q": "IDOR یعنی چه؟",
     "options": [
      "دسترسی به منبع دیگران با تغییر شناسه",
      "خطای CSS",
      "کندی دیتابیس",
      "قفل‌شدن فایل"
     ],
     "answer": 0,
     "explain": "مالکیت باید سمت سرور بررسی شود."
    },
    {
     "q": "چرا مقایسه‌ی رمز با compare_digest انجام می‌شود؟",
     "options": [
      "زمان‌ثابت است و نشت زمانی ندارد",
      "سریع‌تر است",
      "رمز را حذف می‌کند",
      "رنگ"
     ],
     "answer": 0,
     "explain": "جلوی حملات زمان‌سنجی را می‌گیرد."
    },
    {
     "q": "حمله‌ی alg=none چگونه دفع می‌شود؟",
     "options": [
      "الگوریتم مجاز را سمت سرور ثابت کنیم",
      "به هدر توکن اعتماد کنیم",
      "exp را حذف کنیم",
      "کلید را کوتاه کنیم"
     ],
     "answer": 0,
     "explain": "هدر توکن ورودی نامعتبر است."
    },
    {
     "q": "SSRF را چگونه کم می‌کنیم؟",
     "options": [
      "بررسی IPهای resolve‌شده و لیست سفید",
      "فقط نام دامنه را ببینیم",
      "هیچ",
      "فقط HTTPS"
     ],
     "answer": 0,
     "explain": "IPهای خصوصی و link-local رد شوند."
    },
    {
     "q": "Token Bucket چه چیزی را کنترل می‌کند؟",
     "options": [
      "نرخ درخواست با اجازه‌ی burst",
      "اندازه‌ی فایل",
      "رنگ",
      "DNS"
     ],
     "answer": 0,
     "explain": "میانگین نرخ را محدود می‌کند."
    }
   ],
   "challenge": {
    "task": "چک‌لیست امنیتی این درس رو برای یک API فرضی «فروشگاه آنلاین» که خودت (فرضاً) ساختی مرور کن؛ برای هر مورد از چک‌لیست، یک جملهٔ کوتاه بنویس که دقیقاً چطور توی این پروژه اون مورد رو رعایت می‌کردی (مثلاً برای Rate Limiting، کدوم route ها رو محدود می‌کردی و چرا).",
    "hint1": "برای هر ایتم چک‌لیست، به یک route یا بخش مشخص از فروشگاه فکر کن (لاگین، ثبت سفارش، تغییر پسورد) که اون مورد امنیتی بیشترین اهمیت رو داره.",
    "hint2": "مثلاً برای Rate Limiting: route لاگین بیشترین نیاز رو داره، چون هدف اصلی حملات brute-force حدس‌زدن پسورده.",
    "solution": "نمونه (برای دو مورد از چک‌لیست):\n\n۱. Rate Limiting: روی route POST /login حداکثر ۵ تلاش در ۱۵ دقیقه از هر IP مجاز می‌کردم، چون این route هدف اصلی حملات حدس پسوردِ خودکاره.\n\n۲. Parameterized Query: همهٔ کوئری‌های جست‌وجوی محصول (که ورودی کاربر مثل کلمهٔ جست‌وجو داخلشونه) رو با $1 پارامتری می‌نوشتم، نه چسباندن مستقیم رشته."
   }
  }
 ]
});
