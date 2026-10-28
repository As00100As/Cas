(window.COURSES=window.COURSES||[]).push({
 "id": "database",
 "name": "Database",
 "icon": "🗄️",
 "kind": "sql",
 "desc": "بدون دیتابیس، بک‌اند واقعی ناقص است — اینجا کوئری واقعی می‌نویسی و اجرا می‌کنی",
 "covers": [
  "Database, Table, Row, Column, PK/FK",
  "CRUD: SELECT, INSERT, UPDATE, DELETE",
  "JOIN, Index, Transactions",
  "PostgreSQL در Node (کتابخانهٔ pg)",
  "MongoDB و مقایسهٔ SQL در برابر NoSQL"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "ساخت جدول، INSERT و SELECT",
     "content": "<p>یک دیتابیس رابطه‌ای از <b>جدول (Table)</b> تشکیل شده؛ هر جدول از <b>ستون (Column)</b> و <b>ردیف (Row)</b> ساخته می‌شود. <code class='inline'>CREATE TABLE</code> جدول می‌سازد، <code class='inline'>INSERT INTO</code> ردیف اضافه می‌کند و <code class='inline'>SELECT</code> داده می‌خواند. این‌بار واقعاً روی یک دیتابیس واقعی (SQLite در مرورگر) کوئری اجرا می‌کنی — دکمهٔ اجرا رو بزن و نتیجه رو ببین.</p>",
     "sql": "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  age INTEGER\n);\n\nINSERT INTO users (id, name, age) VALUES (1, 'سارا', 25);\nINSERT INTO users (id, name, age) VALUES (2, 'علی', 31);\nINSERT INTO users (id, name, age) VALUES (3, 'مریم', 19);\n\nSELECT * FROM users;",
     "exercise": "دو کاربر دیگه با INSERT اضافه کن، بعد فقط ستون‌های name و age رو (نه id) با SELECT بخون."
    },
    {
     "title": "فیلتر با WHERE، مرتب‌سازی و UPDATE",
     "content": "<p><code class='inline'>WHERE</code> ردیف‌ها را فیلتر می‌کند، <code class='inline'>ORDER BY</code> مرتب می‌کند و <code class='inline'>UPDATE</code> مقدار موجود را تغییر می‌دهد. حتماً قبل از اجرای UPDATE واقعی، شرط WHERE رو درست بنویس — وگرنه همهٔ ردیف‌ها تغییر می‌کنند!</p>",
     "sql": "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);\nINSERT INTO users VALUES (1,'سارا',25), (2,'علی',31), (3,'مریم',19);\n\nSELECT * FROM users WHERE age > 20 ORDER BY age DESC;\n\nUPDATE users SET age = 26 WHERE name = 'سارا';\nSELECT * FROM users;",
     "exercise": "یک UPDATE بدون شرط WHERE بنویس و ببین چه اتفاقی برای همهٔ ردیف‌ها می‌افته — بعد با اضافه‌کردن WHERE درستش کن."
    }
   ],
   "quiz": [
    {
     "q": "کدام دستور SQL برای اضافه‌کردن یک ردیف جدید استفاده می‌شود؟",
     "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "CREATE"
     ],
     "answer": 1,
     "explain": "INSERT INTO یک ردیف جدید به جدول اضافه می‌کند."
    },
    {
     "q": "اگر UPDATE بدون WHERE بنویسیم چه اتفاقی می‌افتد؟",
     "options": [
      "خطا می‌دهد",
      "هیچ ردیفی تغییر نمی‌کند",
      "همهٔ ردیف‌های جدول تغییر می‌کنند",
      "فقط ردیف اول تغییر می‌کند"
     ],
     "answer": 2,
     "explain": "بدون WHERE، شرط فیلتری وجود ندارد و UPDATE روی تمام ردیف‌ها اعمال می‌شود — یکی از رایج‌ترین اشتباهات خطرناک SQL."
    },
    {
     "q": "PRIMARY KEY در یک جدول چه نقشی دارد؟",
     "options": [
      "رنگ ردیف را مشخص می‌کند",
      "هر ردیف را به‌طور یکتا شناسایی می‌کند",
      "نوع ستون را تعیین می‌کند",
      "فقط برای متن استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "Primary Key تضمین می‌کند هیچ دو ردیفی مقدار یکسان در آن ستون نداشته باشند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "JOIN بین دو جدول",
     "content": "<p><code class='inline'>JOIN</code> داده از دو جدول مرتبط را در یک نتیجه ترکیب می‌کند — مثلاً کاربران و سفارش‌هایشان. این پایهٔ تقریباً هر اپلیکیشن واقعی است، چون داده معمولاً در چند جدول جدا نگه داشته می‌شود (به‌جای تکرار همه‌چیز در یک جدول).</p>",
     "sql": "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER, product TEXT, price INTEGER);\n\nINSERT INTO users VALUES (1,'سارا'), (2,'علی');\nINSERT INTO orders VALUES (1,1,'کتاب',120000), (2,1,'هدفون',450000), (3,2,'ماوس',90000);\n\nSELECT users.name, orders.product, orders.price\nFROM orders\nJOIN users ON orders.user_id = users.id;",
     "exercise": "یک ستون به orders برای تاریخ (date TEXT) اضافه کن (جدول رو دوباره با CREATE بساز) و کوئری JOIN رو طوری تغییر بده که فقط سفارش‌های بالای ۱۰۰۰۰۰ تومان رو نشون بده (با WHERE)."
    },
    {
     "title": "Index و Transaction (مفهومی)",
     "content": "<p><b>Index</b> مثل فهرست کتاب است: جست‌وجو روی ستونی که Index دارد، به‌جای بررسی همهٔ ردیف‌ها، خیلی سریع‌تر انجام می‌شود — مهم برای جدول‌های بزرگ.</p><p><b>Transaction</b> چند دستور SQL را به یک «واحد» تبدیل می‌کند: یا همه با هم انجام می‌شوند (COMMIT) یا هیچ‌کدام (ROLLBACK) — مثلاً در انتقال پول بین دو حساب، نباید فقط از یکی کم شود بدون اینکه به دیگری اضافه شود.</p>",
     "sql": "CREATE TABLE accounts (id INTEGER PRIMARY KEY, name TEXT, balance INTEGER);\nINSERT INTO accounts VALUES (1,'حساب A',1000), (2,'حساب B',500);\n\nCREATE INDEX idx_name ON accounts(name);\n\nBEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 200 WHERE id = 1;\nUPDATE accounts SET balance = balance + 200 WHERE id = 2;\nCOMMIT;\n\nSELECT * FROM accounts;",
     "exercise": "تصور کن بعد از خط اول UPDATE، برنامه کرش کنه. توضیح بده چرا استفاده از Transaction اینجا جلوی گم‌شدن پول رو می‌گیره."
    },
    {
     "title": "طراحی جدول و نرمال‌سازی",
     "content": "<p>نرمال‌سازی یعنی هر داده فقط یک‌جا ذخیره شود. <b>فرم اول:</b> هر سلول یک مقدار. <b>فرم دوم:</b> هر ستون وابسته به کل کلید. <b>فرم سوم:</b> ستون‌ها فقط به کلید وابسته باشند، نه به ستون دیگر. مثلاً نام مشتری را در جدول سفارش‌ها تکرار نکن؛ جدول <code class='inline'>customers</code> بساز و با <code class='inline'>customer_id</code> (کلید خارجی) وصل کن.</p>",
     "exercise": "جدول نامرتب «سفارش‌ها» را به سه جدول نرمال تبدیل کن."
    }
   ],
   "quiz": [
    {
     "q": "JOIN برای چه استفاده می‌شود؟",
     "options": [
      "حذف یک جدول",
      "ترکیب داده از دو یا چند جدول مرتبط",
      "تغییر نام ستون",
      "افزایش سرعت اینترنت"
     ],
     "answer": 1,
     "explain": "JOIN داده‌های مرتبط در جدول‌های مختلف را در یک نتیجه کنار هم می‌آورد."
    },
    {
     "q": "Index چه تأثیری روی جست‌وجو دارد؟",
     "options": [
      "جست‌وجو را کندتر می‌کند",
      "جست‌وجو روی آن ستون را سریع‌تر می‌کند",
      "داده را حذف می‌کند",
      "فقط ظاهری است و تأثیری ندارد"
     ],
     "answer": 1,
     "explain": "Index از بررسی ردیف‌به‌ردیف جلوگیری کرده و جست‌وجو را تسریع می‌کند."
    },
    {
     "q": "Transaction در دیتابیس چه تضمینی می‌دهد؟",
     "options": [
      "داده همیشه رمزنگاری می‌شود",
      "یا همهٔ دستورات با هم انجام می‌شوند یا هیچ‌کدام",
      "سرعت دیتابیس بیشتر می‌شود",
      "جدول‌ها خودکار Index می‌گیرند"
     ],
     "answer": 1,
     "explain": "این ویژگی (اتمیک‌بودن) از ناقص‌ماندن عملیات‌های چندمرحله‌ای جلوگیری می‌کند."
    },
    {
     "q": "نرمال‌سازی یعنی چه؟",
     "options": [
      "هر داده فقط یک‌جا ذخیره شود",
      "حذف همهٔ جدول‌ها",
      "رمزنگاری",
      "ساخت Index"
     ],
     "answer": 0,
     "explain": "تکرار داده را کم می‌کند."
    }
   ],
   "challenge": {
    "task": "جدول products (id, name, price, category) و جدول sales (id, product_id, quantity) بساز. یک کوئری بنویس که برای هر محصول، مجموع درآمدش (price × مجموع quantity فروخته‌شده) رو نشون بده، مرتب‌شده از بیشترین به کمترین.",
    "hint1": "اول با JOIN دو جدول رو وصل کن. برای «مجموع» به تابع SUM() نیاز داری، و برای گروه‌بندی بر اساس محصول به GROUP BY.",
    "hint2": "فرمول ستون محاسبه‌شده: SUM(sales.quantity * products.price). این رو با AS یک اسم بده تا بشه با ORDER BY مرتبش کرد.",
    "solution": "SELECT products.name,\n       SUM(sales.quantity * products.price) AS revenue\nFROM sales\nJOIN products ON sales.product_id = products.id\nGROUP BY products.name\nORDER BY revenue DESC;"
   }
  },
  {
   "lessons": [
    {
     "title": "PostgreSQL در دنیای واقعی و اتصال از Node",
     "content": "<p>SQLite (که همین الان توی مرورگرت اجرا شد) برای یادگیری عالیه، ولی اپلیکیشن‌های واقعی معمولاً از <b>PostgreSQL</b> (یا MySQL) روی یک سرور جدا استفاده می‌کنند. از Node با کتابخانهٔ <code class='inline'>pg</code> به آن وصل می‌شوید.</p><p><b>نکتهٔ امنیتی حیاتی:</b> هیچ‌وقت مقدار ورودی کاربر را مستقیم داخل رشتهٔ SQL نچسبانید — همیشه از <b>Parameterized Query</b> (کوئری پارامتری) استفاده کنید تا در برابر SQL Injection (که در مرحلهٔ امنیت می‌بینید) امن بمانید.</p><div class='code-block'><div class='cb-head'>db.js</div><pre><code>const { Pool } = require('pg');\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\n\nasync function getUserByEmail(email) {\n  // امن: از $1 به‌جای چسباندن مستقیم استفاده می‌کنیم\n  const result = await pool.query(\n    'SELECT * FROM users WHERE email = $1',\n    [email]\n  );\n  return result.rows[0];\n}</code></pre></div>",
     "exercise": "توضیح بده چرا نوشتن `'SELECT * FROM users WHERE email = ' + email` (چسباندن مستقیم) خطرناک‌تر از استفاده از $1 و پارامتر جداست."
    },
    {
     "title": "Migrations: مدیریت تغییرات ساختار دیتابیس",
     "content": "<p>وقتی چند نفر روی یک پروژه کار می‌کنند یا سرویس در حال اجراست، نمی‌شود مستقیم و دستی ساختار جدول‌ها را در دیتابیس تولید تغییر داد. <b>Migration</b> فایلی است که تغییرات ساختار دیتابیس (اضافه‌کردن ستون، ساخت جدول) را به‌صورت کد و با تاریخچه ثبت می‌کند — قابل اجرا روی هر محیطی (توسعه، تست، تولید) به‌ترتیب و قابل Rollback (برگشت) در صورت مشکل.</p><div class='code-block'><div class='cb-head'>migrations/002_add_phone_to_users.js</div><pre><code>exports.up = function(knex) {\n  return knex.schema.table('users', table => {\n    table.string('phone');\n  });\n};\n\nexports.down = function(knex) {\n  return knex.schema.table('users', table => {\n    table.dropColumn('phone');\n  });\n};</code></pre></div>",
     "exercise": "توضیح بده چرا تغییر مستقیم و دستی جدول‌های دیتابیس تولید (production) بدون migration، برای یک تیم چندنفره خطرناکه."
    },
    {
     "title": "Connection Pooling: چرا برای هر کوئری اتصال جدید نمی‌سازیم",
     "content": "<p>باز و بستن یک اتصال به دیتابیس، عملیات نسبتاً کندیه. <b>Connection Pool</b> (همون <code class='inline'>new Pool()</code> که در pg دیدید) تعدادی اتصال از پیش‌باز نگه می‌داره و بین درخواست‌های مختلف به اشتراک می‌ذاره — به‌جای باز/بستن مکرر. این باعث می‌شه سرور بتونه تعداد بیشتری درخواست هم‌زمان رو با هزینهٔ کمتر مدیریت کنه.</p><div class='code-block'><div class='cb-head'>db.js</div><pre><code>const { Pool } = require('pg');\n\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 20, // حداکثر تعداد اتصال هم‌زمان در pool\n  idleTimeoutMillis: 30000\n});\n\n// هر query خودکار یک اتصال آزاد از pool برمی‌داره و بعد برمی‌گردونه\nmodule.exports = pool;</code></pre></div>",
     "exercise": "توضیح بده چرا max: 20 در تنظیمات Pool مهمه — اگه این عدد خیلی کم باشه (یا خیلی زیاد) چه مشکلی پیش میاد؟"
    }
   ],
   "quiz": [
    {
     "q": "چرا اپلیکیشن‌های واقعی معمولاً به‌جای SQLite از PostgreSQL روی سرور استفاده می‌کنند؟",
     "options": [
      "SQLite رایگان نیست",
      "PostgreSQL برای همزمانی بالا و مقیاس واقعی مناسب‌تر است",
      "SQLite فقط برای موبایل است",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "SQLite عالی برای یادگیری/اپ‌های کوچک است، ولی PostgreSQL برای بار همزمان بالا و ویژگی‌های سرور-محور ساخته شده."
    },
    {
     "q": "Parameterized Query (مثل استفاده از $1) چه ریسکی را کاهش می‌دهد؟",
     "options": [
      "کندی شبکه",
      "SQL Injection",
      "حجم دیتابیس",
      "تعداد جدول‌ها"
     ],
     "answer": 1,
     "explain": "وقتی ورودی کاربر جدا از متن کوئری فرستاده می‌شود، امکان تزریق کد SQL از بین می‌رود."
    },
    {
     "q": "کتابخانهٔ pg در Node برای چه استفاده می‌شود؟",
     "options": [
      "ساخت رابط کاربری",
      "اتصال و اجرای کوئری روی PostgreSQL",
      "فشرده‌سازی تصویر",
      "تعریف کامپوننت React"
     ],
     "answer": 1,
     "explain": "pg رابط استاندارد Node برای صحبت با یک دیتابیس PostgreSQL است."
    },
    {
     "q": "Migration در مدیریت دیتابیس چه مشکلی را حل می‌کند؟",
     "options": [
      "سرعت کوئری را افزایش می‌دهد",
      "تغییرات ساختار دیتابیس را به‌صورت کد، قابل ردیابی و قابل Rollback مدیریت می‌کند",
      "جایگزین SQL می‌شود",
      "فقط برای MongoDB است"
     ],
     "answer": 1,
     "explain": "Migration تغییرات schema را مثل کد نسخه‌بندی می‌کند، نه تغییر دستی و بی‌ردپا."
    },
    {
     "q": "هدف اصلی Connection Pooling چیست؟",
     "options": [
      "رمزنگاری داده",
      "اشتراک‌گذاری تعدادی اتصال از پیش‌باز به‌جای باز/بستن مکرر برای هر کوئری",
      "حذف نیاز به دیتابیس",
      "افزایش امنیت رمز عبور"
     ],
     "answer": 1,
     "explain": "Pool هزینهٔ باز/بستن مکرر اتصال را حذف کرده و عملکرد را بهبود می‌دهد."
    }
   ],
   "challenge": {
    "task": "دو migration بنویس (روی کاغذ/متن): اولی جدول reviews (id, product_id, rating, comment) رو می‌سازه؛ دومی یک ستون verified (boolean, پیش‌فرض false) بهش اضافه می‌کنه. برای هر دو migration، هم تابع up و هم down رو بنویس.",
    "hint1": "برای ساخت جدول جدید در up، از knex.schema.createTable استفاده کن؛ در down همون جدول رو dropTable کن.",
    "hint2": "برای ستون جدید در migration دوم، up باید column رو اضافه کنه (table.boolean) و down باید dropColumn کنه.",
    "solution": "// migration 1: create reviews table\nexports.up = function(knex) {\n  return knex.schema.createTable('reviews', table => {\n    table.increments('id');\n    table.integer('product_id');\n    table.integer('rating');\n    table.text('comment');\n  });\n};\nexports.down = function(knex) {\n  return knex.schema.dropTable('reviews');\n};\n\n// migration 2: add verified column\nexports.up = function(knex) {\n  return knex.schema.table('reviews', table => {\n    table.boolean('verified').defaultTo(false);\n  });\n};\nexports.down = function(knex) {\n  return knex.schema.table('reviews', table => {\n    table.dropColumn('verified');\n  });\n};"
   }
  },
  {
   "lessons": [
    {
     "title": "MongoDB و انتخاب بین SQL و NoSQL",
     "content": "<p><b>MongoDB</b> داده را نه در جدول، بلکه در «سند» (Document) شبیه JSON ذخیره می‌کند و اسکیمای آن انعطاف‌پذیرتر است. سؤال «SQL یا NoSQL؟» یک قانون ثابت ندارد:</p><ul><li>داده‌ی رابطه‌ای پیچیده با نیاز به Transaction دقیق (مثل بانکداری) → <b>SQL</b> (Postgres/MySQL)</li><li>داده‌ای که ساختارش زیاد تغییر می‌کند یا حجم/سرعت نوشتن خیلی بالاست (مثل لاگ‌ها، فید شبکهٔ اجتماعی) → <b>NoSQL</b> (MongoDB)</li></ul><div class='code-block'><div class='cb-head'>models/User.js (Mongoose)</div><pre><code>const mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  tags: [String] // آرایه، بدون نیاز به جدول جدا\n});\n\nmodule.exports = mongoose.model('User', userSchema);</code></pre></div>",
     "exercise": "برای یک اپلیکیشن فرضی «شبکهٔ اجتماعی» تصمیم بگیر داده‌های پروفایل کاربر رو با SQL نگه‌داری یا MongoDB، و دلیلت رو بنویس."
    },
    {
     "title": "کوئری‌نویسی در MongoDB",
     "content": "<p>برخلاف SQL که با جمله می‌نویسید (SELECT ... WHERE)، در MongoDB با متدهای جاوااسکریپتی و آبجکت کار می‌کنید. <code class='inline'>find()</code> معادل SELECT، <code class='inline'>insertOne()</code> معادل INSERT، <code class='inline'>updateOne()</code> معادل UPDATE است. عملگرهایی مثل <code class='inline'>$gt</code> (بزرگ‌تر از)، <code class='inline'>$in</code> (داخل یک لیست) برای فیلتر استفاده می‌شوند.</p><div class='code-block'><div class='cb-head'>queries.js (با Mongoose)</div><pre><code>// معادل: SELECT * FROM users WHERE age > 18\nconst adults = await User.find({ age: { $gt: 18 } });\n\n// معادل: SELECT * FROM users WHERE city IN ('تهران', 'شیراز')\nconst users = await User.find({ city: { $in: ['تهران', 'شیراز'] } });\n\n// معادل: UPDATE users SET verified = true WHERE email = '...'\nawait User.updateOne({ email: 'ali@test.com' }, { verified: true });\n\n// معادل: DELETE FROM users WHERE email = '...'\nawait User.deleteOne({ email: 'ali@test.com' });</code></pre></div>",
     "exercise": "معادل MongoDB این کوئری SQL رو بنویس: SELECT * FROM products WHERE price < 100000 AND category = 'shoes'"
    },
    {
     "title": "Aggregation Pipeline: گزارش‌گیری در MongoDB",
     "content": "<p>وقتی نیاز به عملیات پیچیده‌تر از یک find ساده دارید (مثل گروه‌بندی، جمع‌زدن، مرتب‌سازی هم‌زمان — معادل GROUP BY در SQL)، از <b>Aggregation Pipeline</b> استفاده می‌کنید: مجموعه‌ای از «مراحل» که داده به‌ترتیب از آن‌ها عبور می‌کند.</p><div class='code-block'><div class='cb-head'>aggregation.js</div><pre><code>// معادل: SELECT category, SUM(price) FROM products GROUP BY category\nconst report = await Product.aggregate([\n  { $group: { _id: '$category', totalPrice: { $sum: '$price' } } },\n  { $sort: { totalPrice: -1 } }\n]);\nconsole.log(report);\n// [{ _id: 'shoes', totalPrice: 4500000 }, { _id: 'bags', totalPrice: 2100000 }]</code></pre></div>",
     "exercise": "توضیح بده مرحلهٔ $group در مثال بالا دقیقاً چه کاری انجام می‌ده و چرا به این ترتیب بعد از اون $sort اومده."
    },
    {
     "title": "Index در MongoDB",
     "content": "<p>دقیقاً مثل SQL، بدون Index، MongoDB برای هر کوئری باید کل مجموعه (Collection) رو بررسی کنه (Collection Scan) — که برای دیتای بزرگ بسیار کنده. با <code class='inline'>createIndex()</code> روی فیلدی که زیاد جست‌وجو می‌کنید (مثل email)، سرعت جست‌وجو به‌شدت بالا می‌ره.</p><div class='code-block'><div class='cb-head'>index.js</div><pre><code>// ساخت index روی فیلد email (و یکتا هم بودنش رو تضمین می‌کنه)\nawait User.collection.createIndex({ email: 1 }, { unique: true });\n\n// حالا این کوئری خیلی سریع‌تر اجرا می‌شه:\nawait User.findOne({ email: 'ali@test.com' });</code></pre></div>",
     "exercise": "توضیح بده چرا unique:true روی index ایمیل، هم به سرعت کمک می‌کنه هم جلوی ثبت دو کاربر با یک ایمیل تکراری رو می‌گیره."
    },
    {
     "title": "Redis و Caching",
     "content": "<p>Redis دیتابیس کلید-مقدار در حافظه است و صدها برابر سریع‌تر از دیسک جواب می‌دهد. الگوی رایج <b>Cache-Aside</b>: اول Redis را بخوان؛ اگر نبود از دیتابیس بخوان و با TTL در Redis بگذار. مشکل اصلی، قدیمی‌شدن داده است، پس هنگام تغییر، کلید را پاک کن.</p><div class='code-block'><div class='cb-head'>cache.js</div><pre><code>const cached = await redis.get(`user:${id}`);\nif (cached) return JSON.parse(cached);\nconst user = await db.user.findById(id);\nawait redis.set(`user:${id}`, JSON.stringify(user), 'EX', 60);\nreturn user;</code></pre></div>",
     "exercise": "برای لیست محصولات یک cache با TTL ۳۰ ثانیه طراحی کن."
    },
    {
     "title": "ایندکس در عمق: B-Tree، Composite و Covering",
     "content": "<p>ایندکس B-Tree جست‌وجو را از اسکن کل جدول به لگاریتمی می‌رساند. در ایندکس چندستونی ترتیب ستون‌ها مهم است (قاعدهٔ چپ‌ترین پیشوند). Covering Index همهٔ ستون‌های لازم را دارد و به جدول مراجعه نمی‌کند. ایندکس اضافه سرعت نوشتن را کم می‌کند.<div class='code-block'><div class='cb-head'>idx.sql</div><pre><code>CREATE INDEX idx_orders_user_date\n  ON orders (user_id, created_at DESC)\n  INCLUDE (total);</code></pre></div></p>",
     "exercise": "برای کوئری «آخرین ۱۰ سفارش یک کاربر» بهترین ایندکس را طراحی کن."
    },
    {
     "title": "خواندن Query Plan با EXPLAIN ANALYZE",
     "content": "<p><code class='inline'>EXPLAIN ANALYZE</code> برنامهٔ واقعی و زمان هر مرحله را نشان می‌دهد. نشانه‌های مشکل: <code class='inline'>Seq Scan</code> روی جدول بزرگ، تفاوت زیاد بین تعداد ردیف تخمینی و واقعی (آمار قدیمی؛ <code class='inline'>ANALYZE</code> بزن) و Sort روی دیسک. ابتدا اندازه بگیر، بعد ایندکس بساز.</p>",
     "exercise": "یک کوئری کند را با EXPLAIN ANALYZE بررسی و ۵ برابر سریع‌تر کن."
    },
    {
     "title": "تراکنش و سطوح ایزولیشن",
     "content": "<p>ACID یعنی اتمی‌بودن، سازگاری، ایزولیشن و ماندگاری. سطوح ایزولیشن: Read Committed (پیش‌فرض Postgres)، Repeatable Read و Serializable. هرچه بالاتر، ناهنجاری‌هایی مثل Non-repeatable Read و Phantom Read کمتر ولی احتمال تلاش مجدد بیشتر است. تراکنش را کوتاه نگه دار.</p>",
     "exercise": "سناریوی انتقال پول بین دو حساب را با تراکنش بنویس."
    },
    {
     "title": "MVCC، قفل و Deadlock",
     "content": "<p>MVCC به هر تراکنش یک نمای نسخه‌دار از داده می‌دهد، پس خواننده‌ها نویسنده‌ها را بلاک نمی‌کنند. نوشتن‌های همزمان روی یک ردیف قفل می‌گیرند. Deadlock وقتی است که دو تراکنش در ترتیب متفاوت قفل بگیرند؛ دفاع: ترتیب ثابت دسترسی، تراکنش کوتاه و <code class='inline'>SELECT ... FOR UPDATE SKIP LOCKED</code> برای صف‌ها.</p>",
     "exercise": "یک Deadlock ساختگی بساز و با ترتیب ثابت قفل رفعش کن."
    },
    {
     "title": "Window Function و CTE بازگشتی",
     "content": "<p>Window Function محاسبه روی «پنجره»ای از ردیف‌ها بدون ادغام آن‌هاست: <code class='inline'>ROW_NUMBER</code>، <code class='inline'>RANK</code>، <code class='inline'>LAG</code> و جمع تجمعی. CTE بازگشتی برای داده‌ی درختی (دسته‌بندی، ساختار سازمانی) به کار می‌رود.<div class='code-block'><div class='cb-head'>w.sql</div><pre><code>SELECT user_id, created_at, total,\n  SUM(total) OVER (PARTITION BY user_id ORDER BY created_at) AS running\nFROM orders;</code></pre></div></p>",
     "exercise": "برای هر مشتری رتبهٔ هر سفارش بر اساس مبلغ را حساب کن."
    },
    {
     "title": "Partitioning و Sharding",
     "content": "<p>Partitioning جدول بزرگ را روی یک سرور به قطعات (معمولاً بر اساس زمان) می‌شکند تا کوئری و حذف داده سریع‌تر شود. Sharding داده را روی چند سرور پخش می‌کند و پیچیدگی بالایی دارد (کوئری بین‌شاردی، توزیع نابرابر). اول ایندکس، کش و replica؛ آخر sharding.</p>",
     "exercise": "جدول لاگ را بر اساس ماه Partition کن."
    },
    {
     "title": "Replication، Failover و Read Replica",
     "content": "<p>Replica‌ها نسخهٔ خواندنی دارند و بار گزارش‌گیری را می‌برند. Replication ناهمگام ممکن است عقب باشد (replication lag)، پس خواندن بعد از نوشتن را از primary بخوان. Failover خودکار با ابزارهایی مثل Patroni انجام می‌شود و باید تست شود.</p>",
     "exercise": "سناریوی از کار افتادن primary را قدم‌به‌قدم بنویس."
    },
    {
     "title": "PostgreSQL پیشرفته: JSONB و Full-Text Search",
     "content": "<p>JSONB داده‌ی نیمه‌ساختار را با ایندکس GIN قابل‌جستجو نگه می‌دارد. جستجوی متنی با <code class='inline'>tsvector</code> و <code class='inline'>tsquery</code> و رتبه‌بندی <code class='inline'>ts_rank</code> بدون موتور جداگانه ممکن است. اگر به تحمل غلط املایی و مقیاس بالا نیاز شد، Elasticsearch/OpenSearch.</p>",
     "exercise": "یک جستجوی متنی روی عنوان و توضیح محصولات با ایندکس GIN بساز."
    },
    {
     "title": "MongoDB: Aggregation Pipeline و طراحی شِما",
     "content": "<p>شِما را بر اساس الگوی دسترسی طراحی کن: داده‌ای که با هم خوانده می‌شود Embed کن و داده‌ی بزرگ یا مشترک را Reference. Aggregation Pipeline مرحله‌به‌مرحله پردازش می‌کند: <code class='inline'>$match</code> زود، <code class='inline'>$group</code>، <code class='inline'>$lookup</code>، <code class='inline'>$project</code>. <code class='inline'>$match</code> اول باشد تا از ایندکس استفاده شود.</p>",
     "exercise": "گزارش فروش ماهانه به تفکیک دسته را با pipeline بنویس."
    },
    {
     "title": "Redis پیشرفته: ساختار داده، ماندگاری و Eviction",
     "content": "<p>Redis فقط String نیست: Hash، List، Set، Sorted Set (لیدربورد، rate limit) و Stream. ماندگاری با RDB (عکس دوره‌ای) و AOF (لاگ نوشتن) انجام می‌شود. سیاست <code class='inline'>maxmemory-policy</code> تعیین می‌کند هنگام پر شدن حافظه چه حذف شود (مثلاً <code class='inline'>allkeys-lru</code>).</p>",
     "exercise": "با Sorted Set یک لیدربورد ۱۰ نفره بساز."
    },
    {
     "title": "مهاجرت بدون توقف (Zero-Downtime Migration)",
     "content": "<p>تغییر شِما روی جدول زنده را مرحله‌ای انجام بده (Expand/Contract): ستون جدید را اضافه کن، کد را برای نوشتن در هر دو تغییر بده، داده را به‌تدریج منتقل کن، خواندن را عوض کن و در آخر ستون قدیم را حذف کن. ایندکس را با <code class='inline'>CREATE INDEX CONCURRENTLY</code> بساز تا قفل نشود.</p>",
     "exercise": "تغییر نام یک ستون را بدون توقف سرویس برنامه‌ریزی کن."
    },
    {
     "title": "پشتیبان‌گیری، PITR و پایش",
     "content": "<p>پشتیبان بدون تست بازیابی بی‌ارزش است. علاوه بر dump منطقی، از پشتیبان فیزیکی + آرشیو WAL برای بازگشت به هر لحظه (PITR) استفاده کن و RPO/RTO را مشخص کن. پایش: تأخیر replica، اتصالات، کوئری‌های کند (<code class='inline'>pg_stat_statements</code>) و فضای دیسک.</p>",
     "exercise": "یک بازیابی کامل را روی سرور آزمایشی تمرین کن و زمانش را ثبت کن."
    },
    {
     "title": "ایندکس عملی: SCAN در برابر SEARCH",
     "content": "<p>با <code class='inline'>EXPLAIN QUERY PLAN</code> (در PostgreSQL: <code class='inline'>EXPLAIN ANALYZE</code>) می‌بینی کوئری کل جدول را اسکن می‌کند یا از ایندکس استفاده می‌کند. در نمونه، ایندکس چندستونی <code class='inline'>(user_id, created)</code> هم فیلتر و هم مرتب‌سازی را پوشش می‌دهد. ایندکس بیش‌ازحد سرعت نوشتن و حجم دیسک را بدتر می‌کند؛ فقط برای کوئری‌های واقعاً پرتکرار بساز.</p>",
     "exercise": "یک کوئری گزارش را با و بدون ایندکس مقایسه و طرح اجرا را توضیح بده.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE orders(id INTEGER PRIMARY KEY, user_id INT, total INT, created TEXT);\n\"\"\")\ndb.executemany(\"INSERT INTO orders(user_id,total,created) VALUES(?,?,?)\",\n    [(i % 50, i, f\"2026-01-{i % 28 + 1:02d}\") for i in range(1, 5001)])\nq = \"SELECT total FROM orders WHERE user_id=7 ORDER BY created DESC LIMIT 10\"\nprint(db.execute(\"EXPLAIN QUERY PLAN \" + q).fetchall()[0][3])\ndb.execute(\"CREATE INDEX idx_u_c ON orders(user_id, created DESC)\")\nprint(db.execute(\"EXPLAIN QUERY PLAN \" + q).fetchall()[0][3])",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "Window Function: جمع تجمعی، رتبه و تفاوت با ردیف قبل",
     "content": "<p>Window Function محاسبه را روی «پنجره»ای از ردیف‌ها انجام می‌دهد بدون ادغام آن‌ها (برخلاف GROUP BY): <code class='inline'>SUM() OVER</code> جمع تجمعی، <code class='inline'>RANK()</code> رتبه‌بندی در هر گروه و <code class='inline'>LAG()</code> مقدار ردیف قبل (برای رشد ماه به ماه). <code class='inline'>PARTITION BY</code> گروه و <code class='inline'>ORDER BY</code> ترتیب پنجره را می‌دهد.</p>",
     "exercise": "برای هر شهر ماهی را پیدا کن که بیشترین رشد نسبت به ماه قبل را داشته.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE sales(city TEXT, month INT, amount INT);\nINSERT INTO sales VALUES ('A',1,10),('A',2,30),('A',3,20),('B',1,5),('B',2,15);\n\"\"\")\nrows = db.execute(\"\"\"\nSELECT city, month, amount,\n  SUM(amount) OVER (PARTITION BY city ORDER BY month) AS running,\n  RANK() OVER (PARTITION BY city ORDER BY amount DESC) AS rnk,\n  amount - LAG(amount) OVER (PARTITION BY city ORDER BY month) AS delta\nFROM sales ORDER BY city, month\n\"\"\").fetchall()\nfor r in rows: print(r)",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "CTE بازگشتی: داده‌ی درختی",
     "content": "<p>دسته‌بندی تو‌در‌تو، ساختار سازمانی و کامنت‌های پاسخ‌دار درخت‌اند. <code class='inline'>WITH RECURSIVE</code> از ریشه شروع (عضو لنگر) و در هر دور فرزندان را اضافه می‌کند (عضو بازگشتی). مسیر و عمق را همراه خروجی بساز. همیشه شرط توقف داشته باش؛ داده‌ی حلقوی بازگشت را تا بی‌نهایت می‌برد.</p>",
     "exercise": "همه‌ی زیرمجموعه‌های یک دسته را با CTE بازگشتی پیدا کن.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE cat(id INT PRIMARY KEY, name TEXT, parent INT);\nINSERT INTO cat VALUES (1,'کالا',NULL),(2,'نوشیدنی',1),(3,'قهوه',2),(4,'چای',2),(5,'خوراکی',1);\n\"\"\")\nrows = db.execute(\"\"\"\nWITH RECURSIVE tree(id, name, depth, path) AS (\n  SELECT id, name, 0, name FROM cat WHERE parent IS NULL\n  UNION ALL\n  SELECT c.id, c.name, t.depth+1, t.path || ' > ' || c.name\n  FROM cat c JOIN tree t ON c.parent = t.id\n)\nSELECT depth, path FROM tree ORDER BY path\n\"\"\").fetchall()\nfor r in rows: print(r)",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "تراکنش و Rollback در عمل",
     "content": "<p>تراکنش یعنی چند عملیات یا همه انجام شوند یا هیچ‌کدام. در انتقال پول، اگر کسر موفق و افزودن شکست بخورد باید Rollback شود. قیدهای <code class='inline'>CHECK</code> دیتابیس را آخرین خط دفاع می‌کنند: موجودی منفی را خود دیتابیس رد می‌کند. تراکنش را کوتاه نگه دار و درون آن منتظر کاربر یا شبکه نمان.</p>",
     "exercise": "انتقال بین سه حساب را در یک تراکنش بنویس.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\", isolation_level=None)\ndb.executescript(\"\"\"\nCREATE TABLE acct(id INT PRIMARY KEY, bal INT CHECK(bal >= 0));\nINSERT INTO acct VALUES (1,100),(2,50);\n\"\"\")\ndef transfer(src, dst, amt):\n    db.execute(\"BEGIN\")\n    try:\n        db.execute(\"UPDATE acct SET bal = bal - ? WHERE id=?\", (amt, src))\n        db.execute(\"UPDATE acct SET bal = bal + ? WHERE id=?\", (amt, dst))\n        db.execute(\"COMMIT\")\n        return True\n    except sqlite3.IntegrityError:\n        db.execute(\"ROLLBACK\")\n        return False\nprint(transfer(1, 2, 30), db.execute(\"SELECT * FROM acct\").fetchall())\nprint(transfer(1, 2, 500), db.execute(\"SELECT * FROM acct\").fetchall())",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "مشکل N+1 را ببین و بشمار",
     "content": "<p>N+1: یک کوئری برای لیست و N کوئری برای رابطه‌ی هر ردیف. در نمونه، ۲۰ کاربر ۲۱ کوئری ساخت ولی با JOIN فقط ۱. در ORMها با eager loading (<code class='inline'>selectinload</code>، <code class='inline'>Include</code>، <code class='inline'>JOIN FETCH</code>) حل می‌شود. با شمارنده‌ی کوئری یا لاگ SQL در تست خودکار هشدار بده تا مشکل برنگردد.</p>",
     "exercise": "شمارنده‌ی کوئری را وارد یک تست کن که اگر بیش از ۳ کوئری شد شکست بخورد.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE posts(id INTEGER PRIMARY KEY, user_id INT, title TEXT);\n\"\"\")\ndb.executemany(\"INSERT INTO users(name) VALUES(?)\", [(f\"u{i}\",) for i in range(20)])\ndb.executemany(\"INSERT INTO posts(user_id,title) VALUES(?,?)\", [(i % 20 + 1, f\"p{i}\") for i in range(100)])\nclass Counter:\n    n = 0\ndef run(sql, args=()):\n    Counter.n += 1\n    return db.execute(sql, args)\nusers = run(\"SELECT id FROM users\").fetchall()\nfor (uid,) in users:\n    run(\"SELECT title FROM posts WHERE user_id=?\", (uid,)).fetchall()\nprint(\"N+1:\", Counter.n, \"کوئری\")\nCounter.n = 0\nrun(\"SELECT u.id, p.title FROM users u JOIN posts p ON p.user_id=u.id\").fetchall()\nprint(\"JOIN:\", Counter.n, \"کوئری\")",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "Upsert و کار با JSON در SQL",
     "content": "<p><code class='inline'>INSERT ... ON CONFLICT DO UPDATE</code> (Upsert) در یک عملیات اتمی درج یا به‌روزرسانی می‌کند و شرایط رقابتی «اول بخوان، بعد بنویس» را از بین می‌برد (شمارنده، کش، ثبت‌نام یکتا). ستون JSON برای داده‌ی نیمه‌ساختار مناسب است؛ با <code class='inline'>json_extract</code> (یا <code class='inline'>-&gt;&gt;</code> در PostgreSQL) می‌خوانی ولی فیلدهای پرجست‌وجو را بهتر است ستون واقعی با ایندکس کنی.</p>",
     "exercise": "یک شمارنده‌ی بازدید اتمی با upsert بساز.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE kv(k TEXT PRIMARY KEY, v INT);\n\"\"\")\nfor _ in range(3):\n    db.execute(\"INSERT INTO kv VALUES('hits',1) ON CONFLICT(k) DO UPDATE SET v = v + 1\")\nprint(db.execute(\"SELECT * FROM kv\").fetchall())\ndb.execute(\"CREATE TABLE ev(id INTEGER PRIMARY KEY, data TEXT)\")\ndb.execute(\"INSERT INTO ev(data) VALUES(?)\", ('{\"user\":{\"id\":7,\"tags\":[\"a\",\"b\"]}}',))\nprint(db.execute(\"SELECT json_extract(data,'$.user.id'), json_extract(data,'$.user.tags[1]') FROM ev\").fetchone())",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "قید یکپارچگی: کلید خارجی، CHECK و UNIQUE",
     "content": "<p>قیدها داده‌ی نامعتبر را در سطح دیتابیس رد می‌کنند و به کد برنامه وابسته نیستند: <code class='inline'>FOREIGN KEY</code> (نبود والد)، <code class='inline'>CHECK</code> (مثلاً مبلغ مثبت)، <code class='inline'>UNIQUE</code> (ایمیل تکراری) و <code class='inline'>NOT NULL</code>. <code class='inline'>ON DELETE CASCADE</code> فرزندان را خودکار حذف می‌کند؛ با احتیاط (حذف زنجیره‌ای ناخواسته). در SQLite باید <code class='inline'>PRAGMA foreign_keys=ON</code> را روشن کنی.</p>",
     "exercise": "جدول سفارش را طوری قیدگذاری کن که هیچ سفارش یتیمی ممکن نباشد.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"PRAGMA foreign_keys = ON\")\ndb.executescript(\"\"\"\nCREATE TABLE cust(id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL);\nCREATE TABLE ord(id INTEGER PRIMARY KEY, cust_id INT NOT NULL REFERENCES cust(id) ON DELETE CASCADE,\n                 total INT CHECK(total > 0));\nINSERT INTO cust VALUES (1,'a@b.c');\n\"\"\")\nfor sql in (\"INSERT INTO ord(cust_id,total) VALUES (99,5)\",\n            \"INSERT INTO ord(cust_id,total) VALUES (1,-5)\",\n            \"INSERT INTO cust VALUES (2,'a@b.c')\"):\n    try: db.execute(sql)\n    except sqlite3.IntegrityError as e: print(\"رد شد:\", e)\ndb.execute(\"INSERT INTO ord(cust_id,total) VALUES (1,5)\")\ndb.execute(\"DELETE FROM cust WHERE id=1\")\nprint(db.execute(\"SELECT COUNT(*) FROM ord\").fetchone()[0])",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "قفل خوش‌بینانه با ستون نسخه",
     "content": "<p>وقتی دو کاربر همزمان یک ردیف را ویرایش می‌کنند، آخرین ذخیره‌کننده تغییر دیگری را بی‌صدا پاک می‌کند. در <b>قفل خوش‌بینانه</b> ستون <code class='inline'>ver</code> را در شرط <code class='inline'>UPDATE ... WHERE ver=?</code> می‌گذاری و اگر ردیفی تغییر نکرد (rowcount صفر) یعنی نسخه عوض شده و باید دوباره بخوانی. بدون قفل طولانی و مناسب برخورد کم.</p>",
     "exercise": "فرم ویرایش محصول را با تشخیص تعارض نسخه بساز.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE inv(sku TEXT PRIMARY KEY, qty INT, ver INT DEFAULT 0);\nINSERT INTO inv VALUES ('x', 5, 0);\n\"\"\")\ndef buy(sku, expected_ver):\n    cur = db.execute(\"UPDATE inv SET qty = qty - 1, ver = ver + 1 WHERE sku=? AND ver=? AND qty > 0\",\n                     (sku, expected_ver))\n    return cur.rowcount == 1\nprint(buy(\"x\", 0))      # موفق\nprint(buy(\"x\", 0))      # نسخه قدیمی: رد\nprint(db.execute(\"SELECT qty, ver FROM inv\").fetchone())",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "Bulk Insert و سرعت نوشتن",
     "content": "<p>درج تک‌تک ردیف‌ها هر بار رفت‌وبرگشت و commit جدا می‌خواهد. <code class='inline'>executemany</code>، تراکنش واحد برای کل دسته یا <code class='inline'>COPY</code> در PostgreSQL ده‌ها برابر سریع‌تر است. ایندکس‌ها را برای بارگذاری بسیار بزرگ موقتاً حذف و بعد بساز، و دسته‌ها را به اندازه‌ی منطقی (چند هزار ردیف) نگه دار.</p>",
     "exercise": "۱ میلیون ردیف را به روش‌های مختلف درج و زمانشان را مقایسه کن.",
     "py": "import sqlite3, time\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE t(id INTEGER PRIMARY KEY, v INT)\")\nt = time.perf_counter()\nfor i in range(20000):\n    db.execute(\"INSERT INTO t(v) VALUES(?)\", (i,))\nsingle = time.perf_counter() - t\ndb.execute(\"DELETE FROM t\")\nt = time.perf_counter()\ndb.executemany(\"INSERT INTO t(v) VALUES(?)\", [(i,) for i in range(20000)])\nbatch = time.perf_counter() - t\nprint(db.execute(\"SELECT COUNT(*) FROM t\").fetchone()[0], batch < single)",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "JOIN، NULL و ضدجوین",
     "content": "<p><code class='inline'>INNER JOIN</code> فقط جفت‌های مطابق را برمی‌گرداند و <code class='inline'>LEFT JOIN</code> همه‌ی ردیف‌های چپ را (با NULL برای نبود). «کدام ردیف‌ها مطابق ندارند؟» را با <code class='inline'>NOT EXISTS</code> (ضدجوین) می‌نویسی. NULL «ناشناخته» است: <code class='inline'>NULL = NULL</code> درست نیست و باید از <code class='inline'>IS NULL</code> استفاده کنی؛ <code class='inline'>NOT IN</code> با NULL در لیست نتیجه‌ی غیرمنتظره می‌دهد.</p>",
     "exercise": "مشتریانی که هرگز سفارش نداده‌اند را با دو روش پیدا کن.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"\"\"\nCREATE TABLE a(id INT, v TEXT); CREATE TABLE b(id INT, w TEXT);\nINSERT INTO a VALUES (1,'x'),(2,'y'),(3,'z');\nINSERT INTO b VALUES (1,'p'),(1,'q'),(4,'r');\n\"\"\")\nprint(\"INNER\", db.execute(\"SELECT a.id, w FROM a JOIN b USING(id)\").fetchall())\nprint(\"LEFT \", db.execute(\"SELECT a.id, w FROM a LEFT JOIN b USING(id) ORDER BY a.id\").fetchall())\nprint(\"ضدجوین\", db.execute(\"SELECT id FROM a WHERE NOT EXISTS (SELECT 1 FROM b WHERE b.id=a.id)\").fetchall())\nprint(\"NULL مقایسه:\", db.execute(\"SELECT NULL = NULL, NULL IS NULL\").fetchone())",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "مدل‌سازی داده: ابعاد، فکت و سازگاری گزارش",
     "content": "<p>برای گزارش‌گیری، مدل ستاره‌ای جدول <b>فکت</b> (رویدادها: فروش) را با جدول‌های <b>بُعد</b> (مشتری، محصول، تاریخ) ترکیب می‌کند. داده‌ی عملیاتی (OLTP) نرمال و داده‌ی تحلیلی (OLAP) معمولاً غیرنرمال برای سرعت خواندن است. گزارش سنگین را روی replica یا انبار داده اجرا کن تا سیستم اصلی کند نشود. همیشه تعریف هر شاخص (فروش خالص یا ناخالص) را مستند کن.</p>",
     "exercise": "مدل ستاره‌ای برای یک فروشگاه آنلاین طراحی کن."
    },
    {
     "title": "امنیت و دسترسی در دیتابیس",
     "content": "<p>اصل حداقل دسترسی: کاربر برنامه فقط <code class='inline'>SELECT/INSERT/UPDATE</code> لازم را داشته باشد، نه DROP یا مدیریت. کاربر مهاجرت (DDL) جدا از کاربر اجرا باشد. ارتباط را با TLS رمز کن، پسورد را در مدیر Secret نگه دار، داده‌ی حساس را رمزگذاری ستونی کن و برای دسترسی به ردیف‌ها (چندمستأجره) از Row-Level Security استفاده کن. کوئری را فقط پارامتری اجرا کن.</p>",
     "exercise": "دو نقش دیتابیس (برنامه و مهاجرت) با حداقل مجوز تعریف کن."
    }
   ],
   "quiz": [
    {
     "q": "MongoDB داده را چگونه ذخیره می‌کند؟",
     "options": [
      "در جدول‌های سخت‌گیرانه مثل SQL",
      "در سندهای (Document) شبیه JSON با اسکیمای انعطاف‌پذیر",
      "فقط در فایل متنی ساده",
      "دقیقاً مثل PostgreSQL"
     ],
     "answer": 1,
     "explain": "مدل سندمحور MongoDB به آن اجازه می‌دهد ساختار داده منعطف‌تری داشته باشد."
    },
    {
     "q": "برای داده‌ای با نیاز شدید به Transaction دقیق (مثل تراکنش بانکی)، کدام گزینه معمولاً مناسب‌تر است؟",
     "options": [
      "MongoDB",
      "یک دیتابیس رابطه‌ای مثل PostgreSQL",
      "فایل CSV",
      "LocalStorage مرورگر"
     ],
     "answer": 1,
     "explain": "دیتابیس‌های رابطه‌ای پشتیبانی قوی‌تر و بالغ‌تری از Transactionهای دقیق دارند."
    },
    {
     "q": "کدام سناریو برای NoSQL/MongoDB مناسب‌تر است؟",
     "options": [
      "حسابداری بانکی با نیاز به دقت مطلق",
      "داده‌ای با ساختار متغیر و نوشتن حجیم مثل لاگ یا فید شبکهٔ اجتماعی",
      "سیستم رزرو بلیط با قفل هم‌زمانی سخت‌گیرانه",
      "هیچ‌کدام"
     ],
     "answer": 1,
     "explain": "انعطاف اسکیما و سرعت نوشتن بالا از نقاط قوت NoSQL در این نوع سناریوهاست."
    },
    {
     "q": "Aggregation Pipeline در MongoDB معادل کدام مفهوم در SQL است؟",
     "options": [
      "فقط SELECT ساده",
      "GROUP BY و توابع تجمعی مثل SUM",
      "CREATE TABLE",
      "DELETE"
     ],
     "answer": 1,
     "explain": "مراحل aggregation برای گروه‌بندی، جمع‌زدن و پردازش پیچیده‌تر داده استفاده می‌شود."
    },
    {
     "q": "بدون Index، یک کوئری MongoDB روی یک مجموعهٔ بزرگ چه کاری انجام می‌دهد؟",
     "options": [
      "خطا می‌دهد",
      "کل مجموعه را بررسی می‌کند (Collection Scan) که کند است",
      "خودکار Index می‌سازد",
      "داده را حذف می‌کند"
     ],
     "answer": 1,
     "explain": "بدون Index، MongoDB مجبور است تک‌تک اسناد را چک کند."
    },
    {
     "q": "TTL در Redis چیست؟",
     "options": [
      "مدت ماندن کلید قبل از حذف خودکار",
      "نام جدول",
      "نوع داده",
      "آدرس سرور"
     ],
     "answer": 0,
     "explain": "پس از آن زمان کلید پاک می‌شود."
    },
    {
     "q": "در ایندکس چندستونی چه چیزی مهم است؟",
     "options": [
      "ترتیب ستون‌ها",
      "اسم ایندکس",
      "رنگ جدول",
      "تعداد کاربران"
     ],
     "answer": 0,
     "explain": "قاعدهٔ چپ‌ترین پیشوند."
    },
    {
     "q": "نشانهٔ مشکل در EXPLAIN چیست؟",
     "options": [
      "Seq Scan روی جدول بزرگ",
      "Index Scan",
      "تعداد ستون کم",
      "اسم جدول کوتاه"
     ],
     "answer": 0,
     "explain": "اسکن کل جدول کند است."
    },
    {
     "q": "MVCC چه کاری می‌کند؟",
     "options": [
      "خواننده‌ها نویسنده‌ها را بلاک نمی‌کنند",
      "کد را کامپایل می‌کند",
      "داده را رمز می‌کند",
      "جدول را حذف می‌کند"
     ],
     "answer": 0,
     "explain": "هر تراکنش نمای نسخه‌دار می‌بیند."
    },
    {
     "q": "PITR یعنی چه؟",
     "options": [
      "بازگشت به هر لحظه‌ی دلخواه",
      "فشرده‌سازی",
      "ایندکس‌سازی",
      "رمزنگاری"
     ],
     "answer": 0,
     "explain": "پشتیبان فیزیکی به‌علاوه آرشیو WAL."
    },
    {
     "q": "N+1 را با چه چیزی حل می‌کنیم؟",
     "options": [
      "JOIN یا eager loading",
      "افزایش RAM",
      "حذف ایندکس",
      "sleep"
     ],
     "answer": 0,
     "explain": "رابطه‌ها را با یک کوئری می‌خواند."
    },
    {
     "q": "NULL = NULL چه نتیجه‌ای می‌دهد؟",
     "options": [
      "ناشناخته (نه درست)",
      "درست",
      "نادرست همیشه",
      "خطا"
     ],
     "answer": 0,
     "explain": "باید از IS NULL استفاده کرد."
    },
    {
     "q": "قفل خوش‌بینانه چگونه کار می‌کند؟",
     "options": [
      "ستون نسخه در شرط UPDATE",
      "قفل کامل جدول",
      "حذف ردیف",
      "کش"
     ],
     "answer": 0,
     "explain": "rowcount صفر یعنی تعارض."
    },
    {
     "q": "Upsert چه مزیتی دارد؟",
     "options": [
      "درج یا به‌روزرسانی اتمی",
      "فقط حذف",
      "فقط خواندن",
      "ایندکس"
     ],
     "answer": 0,
     "explain": "شرایط رقابتی را از بین می‌برد."
    }
   ],
   "challenge": {
    "task": "با Aggregation Pipeline، گزارشی بساز (روی کاغذ/متن) که برای هر دسته‌بندی محصول (category)، میانگین قیمت (نه مجموع) رو محاسبه کنه و فقط دسته‌هایی که میانگینشون بالای ۵۰۰,۰۰۰ هست رو نشون بده، مرتب‌شده از گران‌ترین.",
    "hint1": "برای میانگین به‌جای $sum از $avg استفاده کن. برای فیلترکردن نتیجهٔ گروه‌بندی‌شده (نه قبل از گروه‌بندی)، به یک مرحلهٔ $match بعد از $group نیاز داری.",
    "hint2": "ترتیب مراحل مهمه: $group اول (برای محاسبهٔ میانگین)، بعد $match (برای فیلتر روی نتیجه)، بعد $sort.",
    "solution": "const report = await Product.aggregate([\n  { $group: { _id: '$category', avgPrice: { $avg: '$price' } } },\n  { $match: { avgPrice: { $gt: 500000 } } },\n  { $sort: { avgPrice: -1 } }\n]);"
   }
  }
 ]
});
