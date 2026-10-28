(window.COURSES=window.COURSES||[]).push({
 "id": "css",
 "name": "CSS",
 "icon": "🎨",
 "kind": "web",
 "desc": "ظاهر، چیدمان و انیمیشن صفحات",
 "levels": [
  {
   "lessons": [
    {
     "title": "انتخابگرها، رنگ و فونت",
     "content": "<p>CSS برای استایل‌دهی به HTML است. یک قاعدهٔ CSS از یک <b>انتخابگر (selector)</b> و یک بلوک <code class='inline'>{ }</code> شامل ویژگی‌ها تشکیل شده: <code class='inline'>p { color: blue; }</code>.</p><p>انتخابگرهای رایج: انتخاب با تگ (<code class='inline'>p</code>)، کلاس (<code class='inline'>.title</code>) و شناسه (<code class='inline'>#header</code>). می‌توانید فونت را با <code class='inline'>font-family</code> و اندازه را با <code class='inline'>font-size</code> تنظیم کنید.</p>",
     "code": {
      "html": "<h1 class=\"title\">سلام</h1>\n<p id=\"intro\">این یک پاراگراف است.</p>",
      "css": ".title { color: #8B7CF6; font-family: sans-serif; }\n#intro { color: #555; font-size: 18px; }",
      "js": ""
     },
     "exercise": "رنگ پس‌زمینه body را تغییر دهید و برای h1 یک font-size بزرگ‌تر تعریف کنید."
    },
    {
     "title": "باکس مدل (Box Model)",
     "content": "<p>هر عنصر HTML یک جعبهٔ مستطیلی است که از داخل به بیرون شامل: <b>content</b>، <b>padding</b> (فاصلهٔ داخلی)، <b>border</b> (حاشیه) و <b>margin</b> (فاصلهٔ بیرونی) می‌شود.</p><p>با <code class='inline'>box-sizing: border-box;</code> عرض و ارتفاع شامل padding و border هم می‌شود که محاسبات چیدمان را ساده‌تر می‌کند.</p>",
     "code": {
      "html": "<div class=\"box\">محتوا</div>",
      "css": ".box {\n  width: 200px;\n  padding: 20px;\n  border: 3px solid #8B7CF6;\n  margin: 30px;\n  background: #eee;\n  box-sizing: border-box;\n}",
      "js": ""
     },
     "exercise": "سه باکس با پس‌زمینه‌های متفاوت بسازید و با margin بین آن‌ها فاصله ایجاد کنید."
    },
    {
     "title": "Position: static، relative، absolute، fixed، sticky",
     "content": "<p>ویژگی <code class='inline'>position</code> نحوهٔ قرارگیری عنصر رو کنترل می‌کنه: <code class='inline'>static</code> پیش‌فرضه (رفتار عادی). <code class='inline'>relative</code> عنصر رو نسبت به جای اصلی خودش جابه‌جا می‌کنه (با top/left و...) بدون اینکه از جریان صفحه خارج بشه. <code class='inline'>absolute</code> عنصر رو کاملاً از جریان صفحه خارج و نسبت به نزدیک‌ترین والد positioned قرار می‌ده. <code class='inline'>fixed</code> نسبت به کل صفحه ثابت می‌مونه (حتی موقع اسکرول). <code class='inline'>sticky</code> ترکیبیه: تا یک نقطه عادیه، بعدش می‌چسبه.</p>",
     "code": {
      "html": "<div class=\"parent\">\n  <div class=\"badge\">جدید</div>\n  <p>محتوای کارت محصول...</p>\n</div>",
      "css": ".parent {\n  position: relative;\n  border: 1px solid #ccc;\n  padding: 20px;\n  height: 100px;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  background: #F5B841;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n}",
      "js": ""
     },
     "exercise": "یک کارت محصول بساز با یک برچسب «تخفیف» که با position: absolute گوشهٔ بالا-راست کارت بچسبه."
    },
    {
     "title": "Display: block، inline، inline-block و none",
     "content": "<p>هر عنصر HTML یک مقدار پیش‌فرض <code class='inline'>display</code> داره: <code class='inline'>block</code> (مثل div، p — کل عرض رو می‌گیره و خط جدید می‌سازه)، <code class='inline'>inline</code> (مثل span، a — فقط به اندازهٔ محتوا جا می‌گیره، width/height روش اثر نداره)، <code class='inline'>inline-block</code> (مثل inline رفتار می‌کنه ولی width/height قبول می‌کنه)، و <code class='inline'>none</code> که عنصر رو کاملاً از صفحه حذف می‌کنه (نه فقط مخفی — جاش هم گرفته نمی‌شه).</p>",
     "code": {
      "html": "<span class=\"tag\">برچسب ۱</span>\n<span class=\"tag\">برچسب ۲</span>\n<div class=\"hidden\">این عنصر دیده نمی‌شود</div>",
      "css": ".tag {\n  display: inline-block;\n  background: #eee;\n  padding: 6px 12px;\n  margin: 4px;\n  border-radius: 20px;\n  width: 100px;\n  text-align: center;\n}\n.hidden {\n  display: none;\n}",
      "js": ""
     },
     "exercise": "توضیح بده چرا اگه .tag رو از inline-block به inline تغییر بدی، ویژگی width دیگه اثری نداره."
    },
    {
     "title": "استایل متن: text-align، line-height، letter-spacing",
     "content": "<p><code class='inline'>text-align</code> چینش افقی متن (left/center/right/justify) رو تعیین می‌کنه. <code class='inline'>line-height</code> فاصلهٔ بین خطوط رو کنترل می‌کنه — برای خوانایی بهتر پاراگراف‌ها معمولاً بین ۱.۵ تا ۱.۸ خوبه. <code class='inline'>letter-spacing</code> فاصلهٔ بین حروف رو تنظیم می‌کنه (برای عنوان‌های بزرگ کاربرد داره). <code class='inline'>text-decoration</code> برای زیرخط/خط‌روی‌متن استفاده می‌شه.</p>",
     "code": {
      "html": "<h2 class=\"title\">عنوان با فاصلهٔ حروف</h2>\n<p class=\"body-text\">این یک پاراگراف طولانی است که برای خوانایی بهتر به line-height مناسب نیاز دارد تا خطوط بیش‌ازحد به هم نچسبند.</p>\n<a href=\"#\" class=\"link\">لینک بدون زیرخط</a>",
      "css": ".title {\n  text-align: center;\n  letter-spacing: 2px;\n}\n.body-text {\n  line-height: 1.8;\n  text-align: justify;\n}\n.link {\n  text-decoration: none;\n  color: #8B7CF6;\n}",
      "js": ""
     },
     "exercise": "یک پاراگراف با line-height: 1 (چسبیده) بساز و کنارش همون پاراگراف با line-height: 1.8 (باز) تا تفاوت رو ببینی."
    },
    {
     "title": "پس‌زمینه: تصویر، گرادیان و موقعیت",
     "content": "<p><code class='inline'>background-image</code> تصویر پس‌زمینه می‌ذاره؛ <code class='inline'>background-size: cover</code> تصویر رو طوری بزرگ/کوچیک می‌کنه که کل ناحیه رو بدون کش‌اومدن پر کنه. <code class='inline'>linear-gradient()</code> بدون نیاز به هیچ تصویری، گرادیان رنگی می‌سازه — سبک‌تر و انعطاف‌پذیرتر از تصویر.</p>",
     "code": {
      "html": "<div class=\"hero-img\">با تصویر</div>\n<div class=\"hero-gradient\">با گرادیان</div>",
      "css": ".hero-img {\n  height: 120px;\n  background-image: url('https://via.placeholder.com/400x120');\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n.hero-gradient {\n  height: 120px;\n  background: linear-gradient(135deg, #8B7CF6, #5FD3A0);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",
      "js": ""
     },
     "exercise": "یک گرادیان با سه رنگ (نه دو تا) بساز با linear-gradient و زاویه‌اش رو عوض کن تا جهت‌های مختلف رو ببینی."
    },
    {
     "title": "واحدها: px، %، em، rem، vh/vw",
     "content": "<p><code class='inline'>px</code> واحد مطلق (ثابت) است. <code class='inline'>%</code> نسبت به والد است. <code class='inline'>em</code> نسبت به فونت‌سایز والد است (و می‌تواند در تودرتویی تجمعی و گیج‌کننده بشه). <code class='inline'>rem</code> همیشه نسبت به فونت‌سایز عنصر ریشه (html) است — برای همین قابل‌پیش‌بینی‌تر و پرکاربردتره. <code class='inline'>vh</code>/<code class='inline'>vw</code> نسبت به ارتفاع/عرض کل صفحهٔ نمایش هستند.</p>",
     "code": {
      "html": "<div class=\"full-height\">این ۵۰٪ ارتفاع صفحه‌ست (vh)</div>\n<p class=\"rem-text\">این متن با rem اندازه‌گیری شده</p>",
      "css": "html { font-size: 16px; }\n.full-height {\n  height: 50vh;\n  background: #eee;\n}\n.rem-text {\n  font-size: 1.5rem; /* یعنی 24px، چون ریشه 16px است */\n}",
      "js": ""
     },
     "exercise": "توضیح بده چرا استفاده از rem برای فونت‌سایز، نسبت به px، برای کاربرانی که فونت مرورگرشون رو بزرگ‌تر می‌کنن (accessibility) بهتره."
    }
   ],
   "quiz": [
    {
     "q": "برای انتخاب عنصری با class=\"card\" کدام انتخابگر درست است؟",
     "options": [
      "#card",
      "card",
      ".card",
      "*card"
     ],
     "answer": 2,
     "explain": "نقطه برای انتخاب بر اساس کلاس استفاده می‌شود."
    },
    {
     "q": "ترتیب لایه‌های باکس مدل از داخل به بیرون کدام است؟",
     "options": [
      "margin, border, padding, content",
      "content, padding, border, margin",
      "padding, content, margin, border",
      "content, margin, border, padding"
     ],
     "answer": 1,
     "explain": "محتوا در مرکز است و به‌ترتیب padding، border و margin آن را احاطه می‌کنند."
    },
    {
     "q": "کدام مقدار position عنصر رو نسبت به کل صفحه، حتی موقع اسکرول، ثابت نگه می‌داره؟",
     "options": [
      "relative",
      "absolute",
      "fixed",
      "static"
     ],
     "answer": 2,
     "explain": "fixed عنصر رو از جریان صفحه خارج و نسبت به viewport ثابت می‌کنه."
    },
    {
     "q": "تفاوت اصلی rem با em چیست؟",
     "options": [
      "تفاوتی ندارند",
      "rem همیشه نسبت به فونت‌سایز ریشه (html) است، em نسبت به والد مستقیم",
      "em فقط برای موبایل است",
      "rem واحد رنگ است"
     ],
     "answer": 1,
     "explain": "همین موضوع باعث می‌شه rem در پروژه‌های بزرگ قابل‌پیش‌بینی‌تر باشه."
    },
    {
     "q": "display: none با visibility: hidden چه فرقی دارد؟",
     "options": [
      "تفاوتی ندارند",
      "display:none جای عنصر رو هم می‌گیره، ولی visibility:hidden فقط نامرئیش می‌کنه و جاش می‌مونه",
      "visibility:hidden سریع‌تره",
      "display:none فقط برای متن است"
     ],
     "answer": 1,
     "explain": "با display:none عنصر کاملاً از چیدمان صفحه حذف می‌شه؛ با visibility:hidden فضاش خالی می‌مونه."
    }
   ],
   "challenge": {
    "task": "یک کارت محصول بساز: تصویر (با background یا img)، یک برچسب «تخفیف ۲۰٪» که با position: absolute گوشهٔ بالا بچسبه، عنوان محصول با text-align و letter-spacing مناسب، قیمت، و همه با واحد rem برای فونت‌سایزها.",
    "hint1": "کارت اصلی رو position: relative بذار تا برچسب بتونه absolute نسبت بهش موقعیت بگیره.",
    "hint2": "برای واحدها: html { font-size: 16px; } بذار، بعد فونت‌سایزها رو با rem بنویس (مثلاً 1.2rem برای عنوان).",
    "solution": ".card { position: relative; border: 1px solid #eee; border-radius: 10px; overflow: hidden; }\n.discount-badge { position: absolute; top: 10px; right: 10px; background: #F5B841; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; }\n.card h3 { font-size: 1.2rem; text-align: center; letter-spacing: 0.5px; }\n.card .price { font-size: 1.4rem; text-align: center; color: #4F46E5; }"
   }
  },
  {
   "lessons": [
    {
     "title": "چیدمان با Flexbox",
     "content": "<p>Flexbox برای چیدمان یک‌بعدی (سطری یا ستونی) عناصر است. با <code class='inline'>display: flex;</code> روی والد فعال می‌شود.</p><p>ویژگی‌های مهم: <code class='inline'>justify-content</code> (چیدمان افقی)، <code class='inline'>align-items</code> (چیدمان عمودی) و <code class='inline'>gap</code> (فاصله بین آیتم‌ها). <code class='inline'>flex-direction: column</code> جهت را به ستونی تغییر می‌دهد.</p>",
     "code": {
      "html": "<div class=\"row\">\n  <div class=\"item\">۱</div>\n  <div class=\"item\">۲</div>\n  <div class=\"item\">۳</div>\n</div>",
      "css": ".row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  background: #f2f2f2;\n  padding: 10px;\n}\n.item {\n  background: #8B7CF6;\n  color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n}",
      "js": ""
     },
     "exercise": "با flex-direction: column سه آیتم را زیر هم بچینید و آن‌ها را وسط‌چین کنید."
    },
    {
     "title": "چیدمان دوبعدی با CSS Grid",
     "content": "<p>Grid برای چیدمان دوبعدی (سطر و ستون هم‌زمان) کاربرد دارد. با <code class='inline'>display: grid;</code> و <code class='inline'>grid-template-columns</code> تعداد و عرض ستون‌ها را تعیین می‌کنید.</p><p>مثال: <code class='inline'>grid-template-columns: repeat(3, 1fr);</code> یعنی سه ستون هم‌عرض. واحد <code class='inline'>fr</code> یعنی یک واحد از فضای باقی‌مانده.</p>",
     "code": {
      "html": "<div class=\"grid\">\n  <div>۱</div><div>۲</div><div>۳</div>\n  <div>۴</div><div>۵</div><div>۶</div>\n</div>",
      "css": ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.grid div {\n  background: #5FD3A0;\n  padding: 24px;\n  text-align: center;\n  border-radius: 8px;\n}",
      "js": ""
     },
     "exercise": "چیدمان را به ۲ ستون تغییر دهید و برای یکی از خانه‌ها با grid-column: span 2; دو ستون اشغال کنید."
    },
    {
     "title": "Pseudo-classes: :hover، :focus، :nth-child",
     "content": "<p>Pseudo-class یک وضعیت خاص عنصر رو هدف می‌گیره، بدون نیاز به کلاس اضافه توی HTML: <code class='inline'>:hover</code> وقتی ماوس روشه، <code class='inline'>:focus</code> وقتی روی input کلیک/تب شده، <code class='inline'>:first-child</code>/<code class='inline'>:last-child</code> اولین/آخرین فرزند، و <code class='inline'>:nth-child(2)</code> یا <code class='inline'>:nth-child(odd)</code> برای انتخاب فرزندان بر اساس موقعیتشون.</p>",
     "code": {
      "html": "<ul class=\"list\">\n  <li>آیتم ۱</li>\n  <li>آیتم ۲</li>\n  <li>آیتم ۳</li>\n  <li>آیتم ۴</li>\n</ul>\n<input placeholder=\"روی من فوکوس کن\">",
      "css": ".list li:nth-child(odd) {\n  background: #f5f5f5;\n}\n.list li:hover {\n  background: #8B7CF6;\n  color: #fff;\n}\ninput:focus {\n  outline: 2px solid #8B7CF6;\n  background: #f0eefe;\n}",
      "js": ""
     },
     "exercise": "یک جدول با ۵ ردیف بساز و با nth-child(even) ردیف‌های زوج رو رنگ متفاوت بده (الگوی zebra-striping معروف)."
    },
    {
     "title": "Pseudo-elements: ::before و ::after",
     "content": "<p>Pseudo-element یک «عنصر مجازی» قبل یا بعد از محتوای واقعی عنصر می‌سازه، بدون نیاز به تگ اضافه توی HTML. همیشه به <code class='inline'>content</code> نیاز داره (حتی خالی: <code class='inline'>content: \"\"</code>). کاربردهای رایج: آیکون تزئینی، شماره‌گذاری خودکار، یا افکت‌های تزئینی مثل خط زیر عنوان.</p>",
     "code": {
      "html": "<h2 class=\"section-title\">بخش ویژگی‌ها</h2>\n<p class=\"quote\">این یک نقل‌قول است</p>",
      "css": ".section-title::after {\n  content: \"\";\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #8B7CF6;\n  margin-top: 8px;\n}\n.quote::before {\n  content: \"❝ \";\n  color: #8B7CF6;\n  font-size: 1.5em;\n}",
      "js": ""
     },
     "exercise": "با ::before یک شمارهٔ خودکار (مثل «۱. ») قبل از هر h3 در صفحه اضافه کن (راهنمایی: از counter-increment استفاده کن یا فقط یک ایموجی/نماد ثابت بذار)."
    },
    {
     "title": "Flexbox پیشرفته: wrap، grow/shrink/basis",
     "content": "<p><code class='inline'>flex-wrap: wrap</code> اجازه می‌ده آیتم‌ها وقتی جا نشدن، به خط بعد برن (پیش‌فرض nowrap است و باعث سرریز می‌شه). <code class='inline'>flex-grow</code> مشخص می‌کنه یک آیتم چقدر فضای اضافی رو نسبت به بقیه بگیره، <code class='inline'>flex-shrink</code> چقدر جمع بشه وقتی جا کمه، و <code class='inline'>flex-basis</code> اندازهٔ اولیه قبل از توزیع فضای اضافی.</p>",
     "code": {
      "html": "<div class=\"row\">\n  <div class=\"box grow\">رشد بیشتر (grow:2)</div>\n  <div class=\"box\">عادی (grow:1)</div>\n  <div class=\"box\">عادی (grow:1)</div>\n</div>",
      "css": ".row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.box {\n  flex: 1 1 150px; /* grow shrink basis */\n  background: #8B7CF6;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n}\n.grow {\n  flex-grow: 2;\n}",
      "js": ""
     },
     "exercise": "سه باکس با flex-basis: 200px بساز که وقتی صفحه کوچیک می‌شه (کمتر از عرض کافی) با flex-wrap به خط بعد برن."
    },
    {
     "title": "Grid پیشرفته: grid-template-areas و auto-fit",
     "content": "<p><code class='inline'>grid-template-areas</code> اجازه می‌ده چیدمان صفحه رو مثل یک نقشهٔ بصری (با اسم) تعریف کنی — خیلی خواناتر از حساب‌کردن شماره ستون/سطر. ترکیب <code class='inline'>repeat(auto-fit, minmax(200px, 1fr))</code> یک گرید کاملاً ریسپانسیو می‌سازه که خودش تعداد ستون‌ها رو بر اساس عرض صفحه تنظیم می‌کنه — بدون حتی یک media query!</p>",
     "code": {
      "html": "<div class=\"layout\">\n  <header>هدر</header>\n  <nav>منو</nav>\n  <main>محتوا</main>\n  <footer>فوتر</footer>\n</div>",
      "css": ".layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"footer footer\";\n  grid-template-columns: 150px 1fr;\n  gap: 10px;\n}\nheader { grid-area: header; background:#8B7CF6; color:#fff; padding:10px; }\nnav { grid-area: nav; background:#eee; padding:10px; }\nmain { grid-area: main; background:#f9f9f9; padding:10px; }\nfooter { grid-area: footer; background:#333; color:#fff; padding:10px; }",
      "js": ""
     },
     "exercise": "یک گرید کارت محصول بساز با grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) و چند کارت داخلش بذار؛ عرض پیش‌نمایش رو تغییر بده (با تغییر اندازهٔ پنجره) و ببین چطور خودکار تعداد ستون‌ها عوض می‌شه."
    }
   ],
   "quiz": [
    {
     "q": "کدام ویژگی آیتم‌های flex را در محور اصلی (افقی به‌صورت پیش‌فرض) می‌چیند؟",
     "options": [
      "align-items",
      "justify-content",
      "flex-wrap",
      "gap"
     ],
     "answer": 1,
     "explain": "justify-content چیدمان در راستای محور اصلی flex را کنترل می‌کند."
    },
    {
     "q": "واحد fr در CSS Grid چه معنایی دارد؟",
     "options": [
      "پیکسل ثابت",
      "درصد از صفحه",
      "یک واحد از فضای باقی‌مانده",
      "فونت ریسپانسیو"
     ],
     "answer": 2,
     "explain": "fr سهمی نسبی از فضای آزاد گرید را نشان می‌دهد."
    },
    {
     "q": "pseudo-element ::before همیشه به کدام ویژگی نیاز دارد تا نمایش داده شود؟",
     "options": [
      "color",
      "content",
      "display",
      "width"
     ],
     "answer": 1,
     "explain": "بدون content (حتی خالی)، ::before/::after اصلاً رندر نمی‌شوند."
    },
    {
     "q": "flex-wrap: wrap چه تاثیری دارد؟",
     "options": [
      "آیتم‌ها را کوچک می‌کند",
      "اجازه می‌دهد آیتم‌هایی که جا نمی‌شوند به خط بعد بروند",
      "رنگ آیتم‌ها را عوض می‌کند",
      "حذف gap"
     ],
     "answer": 1,
     "explain": "پیش‌فرض nowrap باعث سرریز می‌شود؛ wrap اجازهٔ شکستن به خط جدید را می‌دهد."
    },
    {
     "q": "repeat(auto-fit, minmax(200px, 1fr)) در Grid چه کاری می‌کند؟",
     "options": [
      "همیشه دقیقاً ۲ ستون می‌سازد",
      "تعداد ستون‌ها را خودکار بر اساس عرض صفحه تنظیم می‌کند، بدون media query",
      "فقط برای موبایل کار می‌کند",
      "سرعت را افزایش می‌دهد"
     ],
     "answer": 1,
     "explain": "این الگو یک گرید کاملاً ریسپانسیو با حداقل عرض تضمین‌شده برای هر ستون می‌سازد."
    }
   ],
   "challenge": {
    "task": "یک صفحهٔ بلاگ ساده با grid-template-areas بساز: header بالا، یک sidebar کوچیک سمت راست، محتوای اصلی وسط، و footer پایین. داخل محتوای اصلی هم چند کارت پست با Flexbox (wrap) بچین.",
    "hint1": "اول روی کاغذ نقشهٔ areas رو بکش (چهار ناحیه: header/sidebar/main/footer)، بعد grid-template-areas رو دقیقاً مطابق همون بنویس.",
    "hint2": "برای اینکه header و footer کل عرض رو بگیرن، توی grid-template-areas اسمشون رو توی هر دو ستون تکرار کن (مثل \"header header\").",
    "solution": ".layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"main sidebar\"\n    \"footer footer\";\n  grid-template-columns: 1fr 200px;\n  gap: 15px;\n}\n.posts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.post-card { flex: 1 1 250px; }"
   }
  },
  {
   "lessons": [
    {
     "title": "ریسپانسیو و Media Query",
     "content": "<p>طراحی ریسپانسیو یعنی صفحه در اندازه‌های مختلف صفحه‌نمایش (موبایل، تبلت، دسکتاپ) درست دیده شود. <code class='inline'>@media</code> اجازه می‌دهد استایل‌های شرطی بر اساس عرض صفحه بنویسید.</p>",
     "code": {
      "html": "<div class=\"card\">این کارت را کوچک و بزرگ کنید</div>",
      "css": ".card {\n  background: #8B7CF6;\n  color: #fff;\n  padding: 40px;\n  font-size: 20px;\n}\n@media (max-width: 480px) {\n  .card { background: #F5B841; font-size: 14px; padding: 15px; }\n}",
      "js": ""
     },
     "exercise": "یک media query برای max-width: 600px بنویسید که چیدمان grid درس قبل را تک‌ستونه کند."
    },
    {
     "title": "ترنزیشن و انیمیشن",
     "content": "<p><code class='inline'>transition</code> تغییر نرم یک ویژگی هنگام تعامل (مثل hover) ایجاد می‌کند. <code class='inline'>@keyframes</code> برای ساخت انیمیشن‌های پیچیده‌تر با چند مرحله استفاده می‌شود.</p>",
     "code": {
      "html": "<button class=\"btn\">هاور کن</button>\n<div class=\"box\"></div>",
      "css": ".btn {\n  padding: 12px 24px;\n  background: #8B7CF6;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  transition: transform .2s ease, background .2s ease;\n}\n.btn:hover { transform: scale(1.08); background: #5E52D6; }\n.box {\n  width: 50px; height: 50px; margin-top:20px;\n  background: #5FD3A0; border-radius: 8px;\n  animation: bounce 1.2s infinite ease-in-out;\n}\n@keyframes bounce {\n  0%,100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}",
      "js": ""
     },
     "exercise": "روی دکمه یک transition برای box-shadow اضافه کنید تا هنگام هاور سایه بیفتد."
    },
    {
     "title": "توابع CSS: calc()، clamp()، min() و max()",
     "content": "<p><code class='inline'>calc()</code> اجازه می‌ده محاسبات ریاضی با واحدهای مختلف رو ترکیب کنی: <code class='inline'>width: calc(100% - 40px)</code>. <code class='inline'>clamp(min, ideal, max)</code> یک مقدار رو بین یک حداقل و حداکثر نگه می‌داره ولی می‌ذاره وسطش به‌صورت ریسپانسیو (معمولاً با vw) تغییر کنه — عالی برای فونت‌سایز ریسپانسیو بدون media query!</p>",
     "code": {
      "html": "<h1 class=\"responsive-title\">این عنوان با تغییر عرض صفحه اندازه‌اش عوض می‌شه</h1>\n<div class=\"sidebar\">سایدبار با عرض محاسبه‌شده</div>",
      "css": ".responsive-title {\n  font-size: clamp(1.2rem, 4vw, 2.5rem);\n}\n.sidebar {\n  width: calc(100% - 40px);\n  max-width: 300px;\n  margin: 0 auto;\n  background: #eee;\n  padding: 20px;\n}",
      "js": ""
     },
     "exercise": "با clamp() یک فونت‌سایز برای یک پاراگراف تعریف کن که بین ۱۴px و ۲۰px بمونه ولی وسطش با vw تغییر کنه."
    },
    {
     "title": "معماری CSS: نام‌گذاری با BEM",
     "content": "<p>وقتی پروژه بزرگ می‌شه، کلاس‌های عمومی مثل <code class='inline'>.card</code> یا <code class='inline'>.title</code> راحت با هم تداخل پیدا می‌کنن. <b>BEM</b> (Block__Element--Modifier) یک قرارداد نام‌گذاریه: <code class='inline'>.card</code> (بلوک اصلی)، <code class='inline'>.card__title</code> (عنصر داخل بلوک، با دو زیرخط)، <code class='inline'>.card--featured</code> (حالت متفاوت بلوک، با دو خط‌تیره). این باعث می‌شه فقط با دیدن اسم کلاس بفهمی دقیقاً کجای ساختاره.</p>",
     "code": {
      "html": "<div class=\"card card--featured\">\n  <h3 class=\"card__title\">محصول ویژه</h3>\n  <p class=\"card__price\">۲۵۰,۰۰۰ تومان</p>\n  <button class=\"card__button\">افزودن به سبد</button>\n</div>",
      "css": ".card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; }\n.card--featured { border-color: #F5B841; box-shadow: 0 0 0 2px #F5B84133; }\n.card__title { font-size: 1.2rem; margin: 0 0 8px; }\n.card__price { color: #8B7CF6; font-weight: bold; }\n.card__button { background: #8B7CF6; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; }",
      "js": ""
     },
     "exercise": "همون کارت رو یک کلاس card--outofstock (به‌عنوان یک modifier جدید) اضافه کن که پس‌زمینه رو خاکستری و دکمه رو غیرفعال (opacity کم) نشون بده."
    },
    {
     "title": "Media Query پیشرفته: prefers-color-scheme",
     "content": "<p>علاوه بر عرض صفحه، media query می‌تونه به تنظیمات سیستم‌عامل کاربر هم واکنش نشون بده: <code class='inline'>prefers-color-scheme: dark</code> تشخیص می‌ده کاربر حالت تاریک سیستمش رو فعال کرده و می‌تونه خودکار تم سایت رو تغییر بده — بدون نیاز به دکمه یا جاوااسکریپت!</p>",
     "code": {
      "html": "<div class=\"box\">این باکس با تم سیستم شما هماهنگ می‌شه (تست کن با تغییر تنظیمات دستگاه)</div>",
      "css": ".box {\n  padding: 20px;\n  background: #fff;\n  color: #111;\n}\n@media (prefers-color-scheme: dark) {\n  .box {\n    background: #111;\n    color: #fff;\n  }\n}",
      "js": ""
     },
     "exercise": "توضیح بده چه زمانی prefers-color-scheme بهتر از یک دکمهٔ دستی برای تغییر تمه، و چه زمانی برعکس (دکمهٔ دستی) بهتره."
    }
   ],
   "quiz": [
    {
     "q": "media query دقیقاً چه کاری انجام می‌دهد؟",
     "options": [
      "سرعت سایت را بالا می‌برد",
      "استایل‌ها را بر اساس شرایطی مثل عرض صفحه اعمال می‌کند",
      "فونت را دانلود می‌کند",
      "تصاویر را فشرده می‌کند"
     ],
     "answer": 1,
     "explain": "با media query می‌توان استایل متفاوت برای اندازه‌های مختلف صفحه تعریف کرد."
    },
    {
     "q": "برای انیمیشن چندمرحله‌ای از کدام قاعده استفاده می‌شود؟",
     "options": [
      "@transition",
      "@keyframes",
      "@animate",
      "@media"
     ],
     "answer": 1,
     "explain": "@keyframes مراحل مختلف انیمیشن را تعریف می‌کند."
    },
    {
     "q": "clamp(1rem, 3vw, 2rem) چه کاری انجام می‌دهد؟",
     "options": [
      "مقدار را همیشه دقیقاً 3vw می‌کند",
      "مقدار را بین یک حداقل و حداکثر نگه می‌دارد و وسط را ریسپانسیو می‌کند",
      "فقط برای رنگ کار می‌کند",
      "معادل calc است"
     ],
     "answer": 1,
     "explain": "clamp سه مقدار می‌گیرد: حداقل، مقدار ایده‌آل (معمولاً ریسپانسیو)، و حداکثر."
    },
    {
     "q": "در قرارداد نام‌گذاری BEM، دو زیرخط (__) نشان‌دهندهٔ چیست؟",
     "options": [
      "یک بلوک جدید",
      "یک عنصر داخل بلوک",
      "یک حالت متفاوت (modifier)",
      "کامنت CSS"
     ],
     "answer": 1,
     "explain": "مثلاً card__title یعنی عنصر title داخل بلوک card."
    },
    {
     "q": "prefers-color-scheme: dark چه چیزی را تشخیص می‌دهد؟",
     "options": [
      "سرعت اینترنت کاربر",
      "اینکه کاربر حالت تاریک سیستم‌عاملش را فعال کرده",
      "نوع مرورگر",
      "اندازهٔ صفحه‌نمایش"
     ],
     "answer": 1,
     "explain": "این media query به تنظیم تم سیستم‌عامل کاربر واکنش نشان می‌دهد."
    }
   ],
   "challenge": {
    "task": "همون کارت‌های محصول قبلی رو با قرارداد BEM بازنویسی کن (اگه هنوز نکردی)، فونت‌سایز عنوانشون رو با clamp() ریسپانسیو کن، و یک نسخهٔ dark mode با prefers-color-scheme براشون اضافه کن.",
    "hint1": "اول تمام کلاس‌ها رو به فرمت BEM (block__element--modifier) تبدیل کن، بعد بقیهٔ ویژگی‌ها رو اضافه کن.",
    "hint2": "برای dark mode، رنگ‌های پس‌زمینه/متن کارت رو داخل یک @media (prefers-color-scheme: dark) بازنویسی کن، نه اینکه کل کارت رو دوباره بسازی.",
    "solution": ".card__title { font-size: clamp(1rem, 2.5vw, 1.4rem); }\n@media (prefers-color-scheme: dark) {\n  .card { background: #1a1a1a; color: #eee; border-color: #333; }\n  .card__price { color: #a78bfa; }\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "متغیرهای CSS (Custom Properties) و تم‌بندی پویا",
     "content": "<p>متغیر CSS با <code class='inline'>--نام: مقدار;</code> تعریف و با <code class='inline'>var(--نام)</code> استفاده می‌شود. سایت‌های بزرگ از این متغیرها برای تم رنگی (مثل حالت تاریک/روشن) و مقیاس‌پذیری طراحی استفاده می‌کنند.</p><p>می‌توان مقدار متغیر را با جاوااسکریپت هم عوض کرد: <code class='inline'>document.documentElement.style.setProperty('--بگ', '#000')</code> — و کل صفحه بلافاصله به‌روزرسانی می‌شود.</p>",
     "code": {
      "html": "<button id=\"toggle\">تغییر تم</button>\n<div class=\"card\">این کارت از متغیرهای CSS استفاده می‌کند</div>",
      "css": ":root {\n  --bg: #ffffff;\n  --fg: #111111;\n  --accent: #8B7CF6;\n}\nbody { background: var(--bg); color: var(--fg); transition: .3s; }\n.card {\n  border: 2px solid var(--accent);\n  padding: 20px;\n  border-radius: 10px;\n  margin-top: 16px;\n}\n#toggle {\n  background: var(--accent); color: #fff; border: none;\n  padding: 10px 18px; border-radius: 8px;\n}",
      "js": "let dark = false;\ndocument.getElementById('toggle').addEventListener('click', () => {\n  dark = !dark;\n  document.documentElement.style.setProperty('--bg', dark ? '#111' : '#fff');\n  document.documentElement.style.setProperty('--fg', dark ? '#fff' : '#111');\n});"
     },
     "exercise": "یک متغیر --radius بسازید و شعاع گردی کارت را با آن کنترل کنید؛ سپس با دکمه بین دو مقدار متفاوت جابه‌جا شوید."
    },
    {
     "title": "جلوه‌های بصری در سطح اپل: Transform سه‌بعدی و clip-path",
     "content": "<p>سایت‌هایی مثل اپل با <code class='inline'>transform: perspective() rotateY()</code> عمق سه‌بعدی می‌سازند و با <code class='inline'>clip-path</code> شکل عنصر را به فرم‌های دلخواه (چندضلعی، دایره، مورب) می‌برند.</p><p>ترکیب این‌ها با <code class='inline'>transition</code> باعث می‌شود عناصر هنگام هاور یا اسکرول به‌شکل نرم و لوکس تغییر کنند — بدون نیاز به هیچ کتابخانهٔ اضافه‌ای.</p>",
     "code": {
      "html": "<div class=\"tilt-card\">هاور کن روی من</div>\n<div class=\"banner\">بنر با برش مورب</div>",
      "css": ".tilt-card {\n  width: 220px; padding: 40px; margin: 20px auto;\n  background: linear-gradient(135deg,#8B7CF6,#5E52D6);\n  color: #fff; text-align: center; border-radius: 14px;\n  transform: perspective(600px) rotateY(0deg);\n  transition: transform .4s ease;\n}\n.tilt-card:hover { transform: perspective(600px) rotateY(15deg) scale(1.03); }\n.banner {\n  margin-top: 20px; padding: 50px 20px; text-align:center; color:#fff;\n  background: #111;\n  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n}",
      "js": ""
     },
     "exercise": "روی tilt-card علاوه بر rotateY یک rotateX هم اضافه کنید و ببینید حس عمق چطور تغییر می‌کند."
    },
    {
     "title": "Mobile First: از کوچک به بزرگ فکر کن",
     "content": "<p><b>Mobile First</b> یعنی استایل پایه رو برای موبایل (کوچیک‌ترین صفحه) می‌نویسی، بعد با <code class='inline'>min-width</code> media query، برای صفحه‌های بزرگ‌تر گسترشش می‌دی. این برخلاف روش قدیمی‌تر (Desktop First) با <code class='inline'>max-width</code> است. مزیت: چون اکثر بازدیدها موبایلی‌ان، مرورگر موبایل مجبور نیست CSS اضافی دسکتاپ رو پردازش کنه، و کدت طبیعتاً ساده‌تر شروع می‌شه.</p>",
     "code": {
      "html": "<div class=\"grid\">\n  <div class=\"card\">۱</div>\n  <div class=\"card\">۲</div>\n  <div class=\"card\">۳</div>\n</div>",
      "css": "/* پایه: موبایل — یک ستون */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n\n/* از این عرض به بالا: تبلت — دو ستون */\n@media (min-width: 600px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n\n/* از این عرض به بالا: دسکتاپ — سه ستون */\n@media (min-width: 1000px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}",
      "js": ""
     },
     "exercise": "همین گرید رو با روش Desktop First (شروع از سه ستون و کم‌کردن با max-width) بازنویسی کن و مقایسه کن کدوم خواناتره."
    },
    {
     "title": "دیباگ کردن CSS با DevTools",
     "content": "<p>وقتی استایل اون‌طور که فکر می‌کردی اعمال نشد، DevTools (F12) بهترین دوستته: تب <b>Elements</b> نشون می‌ده دقیقاً کدوم قوانین CSS روی یک عنصر اعمال شدن (و کدوم‌ها خط‌خورده چون قانون قوی‌تری بازنویسیشون کرده — این به <b>Specificity</b> یا اولویت انتخابگرها مربوطه). می‌تونی همون‌جا مقدار رو موقتاً تغییر بدی تا سریع تست کنی، بدون اینکه فایل واقعی رو عوض کنی.</p><p>قانون کلی Specificity (از قوی به ضعیف): id > class > تگ. یک استایل inline (روی خود تگ با style=) از همه قوی‌تره.</p>",
     "code": {
      "html": "<p id=\"special\" class=\"text\">این متن رنگش چیه؟</p>",
      "css": "p { color: black; }\n.text { color: blue; }\n#special { color: red; } /* این برنده می‌شه چون id قوی‌تره */",
      "js": ""
     },
     "exercise": "سه قانون متناقض برای رنگ یک پاراگراف (با تگ، کلاس، id) بنویس و پیش‌بینی کن کدوم اعمال می‌شه؛ بعد با اجرای کد تست کن درست حدس زدی یا نه."
    },
    {
     "title": "Performance و Accessibility در CSS",
     "content": "<p>چند نکتهٔ عملکردی: انیمیشن روی <code class='inline'>transform</code> و <code class='inline'>opacity</code> نسبت به ویژگی‌هایی مثل <code class='inline'>width</code> یا <code class='inline'>top</code> بسیار سریع‌تر است (چون مرورگر مجبور به محاسبهٔ دوبارهٔ کل چیدمان صفحه — Reflow — نیست).</p><p>برای دسترسی‌پذیری: <code class='inline'>:focus-visible</code> فقط وقتی با کیبورد فوکوس می‌شه استایل نشون می‌ده (نه با کلیک ماوس) — بهتر از حذف کامل outline. و <code class='inline'>prefers-reduced-motion</code> برای کاربرانی که حساسیت به حرکت دارن، انیمیشن رو کم/خاموش می‌کنه.</p>",
     "code": {
      "html": "<button class=\"btn\">دکمهٔ من</button>\n<div class=\"spinner\"></div>",
      "css": ".btn:focus-visible {\n  outline: 3px solid #8B7CF6;\n  outline-offset: 2px;\n}\n.spinner {\n  width: 30px; height: 30px; margin-top: 20px;\n  border: 3px solid #eee; border-top-color: #8B7CF6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin { to { transform: rotate(360deg); } }\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner { animation: none; }\n}",
      "js": ""
     },
     "exercise": "توضیح بده چرا انیمیشن‌کردن transform سریع‌تر از انیمیشن‌کردن مستقیم left/top برای جابه‌جایی یک عنصره."
    },
    {
     "title": "Container Queries: ریسپانسیو بر اساس والد، نه صفحه",
     "content": "<p>Media Query به عرض کل صفحه نگاه می‌کند، ولی <b>Container Query</b> به عرض والد. با <code class='inline'>container-type: inline-size</code> والد را «کانتینر» کنید و با <code class='inline'>@container</code> استایل بدهید. کامپوننت هرجا گذاشته شود خودش را تطبیق می‌دهد.</p>",
     "exercise": "یک کارت بساز که در کانتینر باریک عمودی و در کانتینر عریض افقی شود.",
     "code": {
      "html": "<div class=\"wrap\"><div class=\"card\"><b>عنوان</b><span>متن کارت</span></div></div>",
      "css": ".wrap{container-type:inline-size;resize:horizontal;overflow:auto;width:420px;border:1px dashed #888;padding:8px}\n.card{display:flex;flex-direction:column;gap:6px}\n@container (min-width:360px){\n  .card{flex-direction:row;gap:16px}\n}",
      "js": ""
     }
    },
    {
     "title": "سلکتورهای مدرن: :has()، :is() و :where()",
     "content": "<p><code class='inline'>:has()</code> «سلکتور والد» است: <code class='inline'>.card:has(img)</code> فقط کارت‌هایی را انتخاب می‌کند که تصویر دارند. <code class='inline'>:is()</code> سلکتورهای تکراری را کوتاه می‌کند و <code class='inline'>:where()</code> همین کار را با specificity صفر انجام می‌دهد؛ برای استایل‌های پایه عالی است.</p>",
     "exercise": "با :has() کاری کن که فرمی که input نامعتبر دارد قاب قرمز بگیرد.",
     "code": {
      "html": "<div class=\"card\"><p>بدون تصویر</p></div>\n<div class=\"card\"><p>با تصویر</p><img alt=\"\" width=\"30\" height=\"30\"></div>",
      "css": ".card{padding:12px;margin:8px;border:1px solid #888}\n.card:has(img){border-color:#8B7CF6;background:#8B7CF622}\n:is(h1,h2,h3):where(.x){margin:0}",
      "js": ""
     }
    },
    {
     "title": "Cascade Layers: کنترل ترتیب استایل‌ها با @layer",
     "content": "<p>با <code class='inline'>@layer</code> ترتیب اولویت گروه‌های استایل (reset، پایه، کامپوننت، ابزار) را مشخص می‌کنی و دیگر به جنگ specificity نیاز نیست. لایه‌ای که دیرتر تعریف شود برنده است، حتی با سلکتور ساده‌تر.</p>",
     "exercise": "استایل‌ها را در سه لایهٔ reset، base و components تقسیم کن.",
     "code": {
      "html": "<p class=\"x\" id=\"y\">متن</p>",
      "css": "@layer base, theme;\n@layer base{ #y{color:red} }\n@layer theme{ p{color:#8B7CF6} } /* برنده است */",
      "js": ""
     }
    },
    {
     "title": "انیمیشن وابسته به اسکرول و View Transitions",
     "content": "<p>با <code class='inline'>animation-timeline: scroll()</code> یا <code class='inline'>view()</code> انیمیشن به‌جای زمان به اسکرول گره می‌خورد، بدون JavaScript (مثلاً نوار پیشرفت مطالعه). <b>View Transitions API</b> هم تغییر بین دو حالت صفحه را خودکار نرم می‌کند: <code class='inline'>document.startViewTransition()</code>.</p>",
     "exercise": "یک نوار پیشرفت بالای صفحه بساز که با اسکرول پر شود.",
     "code": {
      "html": "<div class=\"bar\"></div>\n<div style=\"height:900px;padding-top:30px\">اسکرول کن ↓</div>",
      "css": ".bar{position:fixed;top:0;left:0;height:6px;width:100%;background:#8B7CF6;transform-origin:left;animation:g linear;animation-timeline:scroll()}\n@keyframes g{from{transform:scaleX(0)}to{transform:scaleX(1)}}",
      "js": ""
     }
    },
    {
     "title": "Cascade در عمق: Specificity، Origin و revert-layer",
     "content": "<p>وزن یک قاعده از چند عامل می‌آید: اهمیت (<code class='inline'>!important</code>)، لایه (<code class='inline'>@layer</code>)، ویژگی سلکتور (id > class > تگ) و ترتیب. <code class='inline'>:where()</code> وزن صفر دارد و برای ریست عالی است، <code class='inline'>:is()</code> وزن بالاترین آرگومان را می‌گیرد. <code class='inline'>revert-layer</code> مقدار را به لایه‌ی پایین‌تر برمی‌گرداند. از <code class='inline'>!important</code> جز در ابزارهای کمکی پرهیز کن.</p>",
     "exercise": "دلیل برنده‌شدن یک قاعده را در DevTools بخوان و بدون !important اصلاح کن.",
     "code": {
      "html": "<p class='t' id='x'>متن</p>",
      "css": "@layer base, ui;\n@layer ui{ .t{color:crimson} }\n@layer base{ #x{color:navy} }\n:where(p){margin:0}",
      "js": ""
     }
    },
    {
     "title": "Grid پیشرفته: auto-fit، Subgrid و نواحی نام‌دار",
     "content": "<p><code class='inline'>repeat(auto-fit, minmax(180px, 1fr))</code> شبکه‌ی ریسپانسیو بدون Media Query می‌سازد. <code class='inline'>grid-template-areas</code> چیدمان را خوانا می‌کند. <code class='inline'>subgrid</code> اجازه می‌دهد فرزند از خطوط شبکه‌ی والد استفاده کند (هم‌ترازی عنوان و دکمه‌ی کارت‌ها). <code class='inline'>grid-auto-flow: dense</code> حفره‌ها را پر می‌کند.</p>",
     "exercise": "گالری کارت‌هایی بساز که عنوان و دکمه‌شان با subgrid هم‌تراز باشد.",
     "code": {
      "html": "<div class='g'><div class='c'>الف</div><div class='c'>ب</div><div class='c'>ج</div><div class='c'>د</div></div>",
      "css": ".g{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px}\n.c{padding:16px;background:#8B7CF622;border:1px solid #8B7CF6;border-radius:8px}",
      "js": ""
     }
    },
    {
     "title": "Flexbox در عمق: Shrink/Grow و min-width:auto",
     "content": "<p>اندازه‌ی نهایی از <code class='inline'>flex-basis</code> شروع می‌شود، سپس فضای اضافه با <code class='inline'>flex-grow</code> پخش یا کمبود با <code class='inline'>flex-shrink</code> کم می‌شود. دلیل رایج سرریز متن: فرزند فلکس <code class='inline'>min-width:auto</code> دارد و کوچک‌تر از محتوایش نمی‌شود؛ با <code class='inline'>min-width:0</code> یا <code class='inline'>overflow:hidden</code> رفعش کن. <code class='inline'>gap</code> بهتر از margin است.</p>",
     "exercise": "یک ردیف با متن بسیار بلند بساز که بیرون نزند.",
     "code": {
      "html": "<div class='r'><div class='a'>متن‌بسیار‌طولانی‌متن‌بسیار‌طولانی‌متن‌بسیار‌طولانی</div><div class='b'>ثابت</div></div>",
      "css": ".r{display:flex;gap:8px;width:260px;border:1px dashed #888}\n.a{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.b{flex:none;padding:0 8px;background:#8B7CF622}",
      "js": ""
     }
    },
    {
     "title": "Custom Property پیشرفته: @property و تم‌سازی",
     "content": "<p>متغیر CSS با <code class='inline'>var(--x, fallback)</code> خوانده می‌شود و روی عناصر فرزند به ارث می‌رسد. <code class='inline'>@property</code> نوع و مقدار اولیه می‌دهد و در نتیجه خود متغیر قابل‌انیمیشن می‌شود (مثلاً زاویه‌ی گرادیان). برای تم تاریک از <code class='inline'>color-scheme</code> و <code class='inline'>light-dark()</code> استفاده کن.</p>",
     "exercise": "گرادیانی بساز که زاویه‌اش با @property انیمیشن شود.",
     "code": {
      "html": "<div class='b'></div>",
      "css": "@property --a{syntax:'<angle>';inherits:false;initial-value:0deg}\n.b{width:120px;height:80px;border-radius:12px;background:conic-gradient(from var(--a),#8B7CF6,#22d3ee,#8B7CF6);animation:spin 3s linear infinite}\n@keyframes spin{to{--a:360deg}}",
      "js": ""
     }
    },
    {
     "title": "رنگ مدرن: oklch، color-mix و Relative Color",
     "content": "<p><code class='inline'>oklch(L C H)</code> فضای رنگی ادراکی است: روشنایی یکسان یعنی ظاهر روشنایی یکسان، پس پالت یکنواخت می‌سازی. <code class='inline'>color-mix(in oklch, red 30%, blue)</code> رنگ‌ها را ترکیب می‌کند و Relative Color (<code class='inline'>oklch(from var(--c) calc(l + .1) c h)</code>) از یک رنگ پایه سایه‌ها را مشتق می‌کند. کنتراست را همیشه بسنج.</p>",
     "exercise": "از یک رنگ پایه پالت ۵ پله‌ای با oklch بساز.",
     "code": {
      "html": "<div class='s'><i></i><i></i><i></i><i></i><i></i></div>",
      "css": ".s{display:flex}\n.s i{width:48px;height:48px}\n.s i:nth-child(1){background:oklch(.9 .1 280)}\n.s i:nth-child(2){background:oklch(.75 .15 280)}\n.s i:nth-child(3){background:oklch(.6 .2 280)}\n.s i:nth-child(4){background:oklch(.45 .2 280)}\n.s i:nth-child(5){background:color-mix(in oklch,oklch(.3 .2 280) 80%,black)}",
      "js": ""
     }
    },
    {
     "title": "تایپوگرافی سیال و بارگذاری فونت",
     "content": "<p>با <code class='inline'>clamp(1rem, 2.5vw, 2rem)</code> اندازه‌ی متن بین حداقل و حداکثر روان تغییر می‌کند. <code class='inline'>text-wrap: balance</code> عنوان‌ها را متوازن می‌شکند و <code class='inline'>pretty</code> تک‌کلمه‌ی انتهای پاراگراف را کم می‌کند. فونت متغیر چند وزن را در یک فایل می‌دهد. <code class='inline'>font-display: swap</code> و preload فونت اصلی CLS و LCP را بهتر می‌کنند.</p>",
     "exercise": "عنوانی بساز که اندازه‌اش با clamp روان شود و متوازن بشکند.",
     "code": {
      "html": "<h2 class='h'>یک عنوان نسبتاً بلند برای نمایش شکستن متوازن متن</h2>",
      "css": ".h{font-size:clamp(1.1rem,4vw,2rem);text-wrap:balance;max-width:28ch;line-height:1.3}",
      "js": ""
     }
    },
    {
     "title": "ویژگی‌های منطقی و راست‌به‌چپ (RTL)",
     "content": "<p>به‌جای <code class='inline'>left/right</code> از ویژگی‌های منطقی استفاده کن: <code class='inline'>margin-inline-start</code>، <code class='inline'>padding-inline</code>، <code class='inline'>inset-inline-end</code>، <code class='inline'>border-start-end-radius</code>. با تغییر <code class='inline'>dir</code> چیدمان خودکار برمی‌گردد. آیکن‌های جهت‌دار (فلش) را آینه کن و اعداد/لاتین داخل متن فارسی را با <code class='inline'>unicode-bidi</code> مدیریت کن.</p>",
     "exercise": "یک کارت بساز که با تغییر dir بین فارسی و انگلیسی درست برگردد.",
     "code": {
      "html": "<div dir='rtl' class='k'>آیکن و متن</div>",
      "css": ".k{display:flex;gap:8px;padding-inline:16px 8px;border-inline-start:4px solid #8B7CF6;background:#8B7CF611}",
      "js": ""
     }
    },
    {
     "title": "انیمیشن: Transition، @starting-style و دسترسی",
     "content": "<p>فقط <code class='inline'>transform</code> و <code class='inline'>opacity</code> را انیمیت کن تا روی GPU و بدون reflow باشد. <code class='inline'>@starting-style</code> حالت اولیه‌ی عنصر تازه‌ظاهرشده را می‌دهد تا بدون JS fade-in داشته باشد. <code class='inline'>prefers-reduced-motion</code> را رعایت کن: حرکت زیاد برای بعضی کاربران آزاردهنده است.</p>",
     "exercise": "جعبه‌ای بساز که هنگام ظاهرشدن fade-in شود و حرکت را برای کاربر حساس خاموش کند.",
     "code": {
      "html": "<button class='m'>سلام</button>",
      "css": ".m{padding:12px 20px;border:0;border-radius:8px;background:#8B7CF6;color:#fff;transition:transform .2s,opacity .2s}\n.m:hover{transform:translateY(-3px)}\n@media (prefers-reduced-motion:reduce){.m{transition:none}}",
      "js": ""
     }
    },
    {
     "title": "ابزار چیدمان: aspect-ratio، sticky و scroll-snap",
     "content": "<p><code class='inline'>aspect-ratio: 16/9</code> نسبت را بدون hack نگه می‌دارد، <code class='inline'>object-fit: cover</code> تصویر را بدون کشیدگی می‌پوشاند. <code class='inline'>position: sticky</code> سربرگ را هنگام اسکرول می‌چسباند و <code class='inline'>scroll-snap-type</code> کاروسل بدون JS می‌دهد. <code class='inline'>overscroll-behavior: contain</code> اسکرول مودال را از صفحه جدا می‌کند.</p>",
     "exercise": "یک کاروسل افقی با scroll-snap بساز.",
     "code": {
      "html": "<div class='sn'><div>۱</div><div>۲</div><div>۳</div></div>",
      "css": ".sn{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;width:240px}\n.sn div{flex:0 0 100%;scroll-snap-align:center;aspect-ratio:16/9;display:grid;place-items:center;background:#8B7CF622;border-radius:10px}",
      "js": ""
     }
    },
    {
     "title": "معماری ریسپانسیو: واحدهای Container و Viewport پویا",
     "content": "<p>واحدهای <code class='inline'>cqi</code> و <code class='inline'>cqw</code> اندازه را نسبت به کانتینر می‌دهند. در موبایل <code class='inline'>100vh</code> نوار آدرس را حساب نمی‌کند؛ از <code class='inline'>dvh</code> (پویا)، <code class='inline'>svh</code> و <code class='inline'>lvh</code> استفاده کن. طراحی ذاتی (<code class='inline'>min()</code>، <code class='inline'>clamp()</code>، <code class='inline'>fit-content</code>) به Breakpoint کمتری نیاز دارد.</p>",
     "exercise": "یک بخش تمام‌صفحه بساز که در موبایل با نوار آدرس درست کار کند.",
     "code": {
      "html": "<section class='hero'>هیرو</section>",
      "css": ".hero{min-height:100svh;display:grid;place-items:center;background:linear-gradient(135deg,#8B7CF6,#22d3ee);color:#fff;font-size:clamp(1.2rem,5cqi,2rem)}",
      "js": ""
     }
    },
    {
     "title": "معماری CSS: Nesting بومی، BEM و مدیریت مقیاس",
     "content": "<p>Nesting بومی (<code class='inline'>&</code>) بدون پیش‌پردازنده ساختار را مرتب می‌کند. نام‌گذاری BEM (<code class='inline'>.card__title--big</code>) تداخل را کم می‌کند و می‌توانی از Utility، CSS Modules یا Tailwind استفاده کنی؛ نکته انتخاب یک روش و ثبات است. وزن سلکتور را پایین و تخت نگه دار و لایه‌ها را برای ترتیب به‌کار ببر.</p>",
     "exercise": "یک کامپوننت دکمه با حالت‌ها را با nesting و BEM بنویس.",
     "code": {
      "html": "<button class='btn btn--big'>دکمه</button>",
      "css": ".btn{padding:8px 16px;border:0;border-radius:8px;background:#8B7CF6;color:#fff;\n  &:hover{filter:brightness(1.1)}\n  &.btn--big{padding:14px 28px;font-size:1.1rem}\n}",
      "js": ""
     }
    },
    {
     "title": "عملکرد رندر: content-visibility، contain و Reflow",
     "content": "<p><code class='inline'>content-visibility: auto</code> رندر بخش‌های بیرون از دید را تا لازم‌شدن عقب می‌اندازد (با <code class='inline'>contain-intrinsic-size</code> اندازه‌ی تقریبی بده). <code class='inline'>contain</code> اثر تغییر را محدود می‌کند. از خواندن/نوشتن پشت‌سرهم ابعاد در JS (Layout Thrashing) پرهیز کن و <code class='inline'>will-change</code> را کم و موقت به کار ببر. با Performance در DevTools اندازه بگیر.</p>",
     "exercise": "صفحه‌ای با ۵۰۰ بخش بساز و اثر content-visibility را اندازه بگیر.",
     "code": {
      "html": "<section class='sec'>بخش بلند</section>",
      "css": ".sec{content-visibility:auto;contain-intrinsic-size:auto 600px;border-bottom:1px solid #8884;padding:16px}",
      "js": ""
     }
    },
    {
     "title": "دسترسی‌پذیری در CSS: focus-visible و forced-colors",
     "content": "<p>هرگز <code class='inline'>outline:none</code> بدون جایگزین نگذار؛ <code class='inline'>:focus-visible</code> حلقه‌ی فوکوس را فقط برای کیبورد نشان می‌دهد. کنتراست حداقل ۴.۵ به ۱ و اندازه‌ی لمسی ۴۴px. در <code class='inline'>forced-colors: active</code> (حالت کنتراست بالا ویندوز) از رنگ سیستم استفاده کن و مرز ببخش. <code class='inline'>prefers-color-scheme</code> و <code class='inline'>prefers-contrast</code> را رعایت کن.</p>",
     "exercise": "حلقه‌ی فوکوس واضح و سازگار با حالت کنتراست بالا طراحی کن.",
     "code": {
      "html": "<a href='#' class='lk'>لینک</a> <button class='bt'>دکمه</button>",
      "css": ".lk:focus-visible,.bt:focus-visible{outline:3px solid #22d3ee;outline-offset:3px}\n@media (forced-colors:active){.bt{border:1px solid ButtonText}}",
      "js": ""
     }
    },
    {
     "title": "Margin Collapsing و BFC: چرا margin فرزند از والد بیرون می‌زند",
     "content": "<p>حاشیه‌ی عمودی دو بلاک مجاور <b>ادغام</b> می‌شود: بزرگ‌ترین مقدار می‌ماند، نه مجموع. حتی margin-top فرزند اول می‌تواند از والد «بیرون بزند» اگر والد border، padding یا context جدا نداشته باشد. راه‌حل مدرن: <code>display: flow-root</code> که یک Block Formatting Context می‌سازد (بدون عوارض <code>overflow:hidden</code>). Flex و Grid هرگز margin را ادغام نمی‌کنند.</p><pre dir=\"ltr\"><code>.a{margin-bottom:20px}.b{margin-top:30px}   /* فاصله = 30 نه 50 */\n.parent{display:flow-root}                    /* margin فرزند داخل می‌ماند */</code></pre>",
     "exercise": "والد را border:1px بده و رفتار را ببین.",
     "code": {
      "html": "<div class=\"a\">A</div><div class=\"b\">B</div><div id=\"p1\" class=\"p\"><div class=\"c\">فرزند</div></div><div id=\"p2\" class=\"p fr\"><div class=\"c\">فرزند</div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.a,.b,.p{background:#1e293b}.a{margin-bottom:20px;height:20px}.b{margin-top:30px;height:20px}.p{margin-top:40px;height:40px}.c{margin-top:25px;height:10px;background:#38bdf8}.fr{display:flow-root}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst r=s=>document.querySelector(s).getBoundingClientRect();\nlog('فاصله‌ی A تا B:',Math.round(r('.b').top-r('.a').bottom),'(باید 30، نه 50)');\nconst gap1=r('#p1 .c').top-r('#p1').top, gap2=r('#p2 .c').top-r('#p2').top;\nlog('بدون flow-root: فاصله‌ی فرزند تا والد =',Math.round(gap1),'(margin بیرون زده)');\nlog('با flow-root   : فاصله‌ی فرزند تا والد =',Math.round(gap2),'(داخل ماند)');"
     }
    },
    {
     "title": "Stacking Context: چرا z-index بزرگ کار نمی‌کند",
     "content": "<p><code>z-index</code> فقط داخل «بافت پشته» (stacking context) معنا دارد. بافت جدید با این‌ها ساخته می‌شود: <code>position</code> همراه z-index، <code>opacity &lt; 1</code>، <code>transform</code>، <code>filter</code>، <code>isolation: isolate</code>، <code>will-change</code> و ... عنصری با z-index:9999 داخل والدی با z-index:1 هرگز بالای عنصر دیگری با z-index:2 نمی‌رود. دیباگ: به والدها نگاه کن، نه عدد.</p><pre dir=\"ltr\"><code>.parent{position:relative; z-index:1}   /* بافت جدید */\n.child{z-index:9999}                     /* فقط داخل parent */\n.modal-root{isolation:isolate}           /* بافت بدون z-index */</code></pre>",
     "exercise": "به والد اول isolation:isolate بده و تغییر را ببین.",
     "code": {
      "html": "<div class=\"stage\"><div class=\"p1\"><div class=\"kid\" id=\"kid\">9999</div></div><div class=\"p2\" id=\"other\">2</div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.stage{position:relative;height:80px}.p1{position:absolute;left:0;top:0;width:100px;height:60px;z-index:1;background:#1d4ed8}.kid{position:absolute;left:60px;top:10px;width:80px;height:40px;z-index:9999;background:#16a34a}.p2{position:absolute;left:90px;top:0;width:100px;height:60px;z-index:2;background:#b91c1c}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst k=document.getElementById('kid').getBoundingClientRect();\nconst x=k.left+k.width-5,y=k.top+k.height/2;   // نقطه‌ای از kid که روی other هم هست\nconst topEl=document.elementFromPoint(x,y);\nlog('عنصر بالایی در آن نقطه:',topEl.id||topEl.className,'(باید other باشد)');\ndocument.querySelector('.p1').style.zIndex='auto';document.querySelector('.p1').style.position='static';\ndocument.querySelector('.kid').style.position='absolute';\nconst t2=document.elementFromPoint(x,y);\nlog('بعد از حذف بافت والد:',t2.id||t2.className);"
     }
    },
    {
     "title": "اندازه‌گذاری ذاتی: min-content، max-content و fit-content",
     "content": "<p>اندازه‌ی ذاتی یعنی عرض بر اساس محتوا: <code>min-content</code> (باریک‌ترین حالت بدون سرریز؛ طولانی‌ترین کلمه)، <code>max-content</code> (همه‌ی متن در یک خط) و <code>fit-content</code> (حداکثر تا فضای موجود). در Grid ستون <code>minmax(min-content, 1fr)</code> و <code>auto-fit</code> بر همین پایه‌اند. نتیجه: لیبل‌ها یا بج‌هایی که دقیقاً به اندازه‌ی متن‌اند.</p><pre dir=\"ltr\"><code>.badge{width:fit-content}\n.col{width:min-content}   /* باریک‌ترین */\n.row{width:max-content}   /* بدون شکستن */</code></pre>",
     "exercise": "یک کلمه‌ی بلندتر بگذار و اثرش را روی min-content ببین.",
     "code": {
      "html": "<div class=\"box\" id=\"mn\" style=\"width:min-content\">سلام دنیای برنامه‌نویسی مدرن</div><div class=\"box\" id=\"mx\" style=\"width:max-content\">سلام دنیای برنامه‌نویسی مدرن</div><div class=\"wrap\"><div class=\"box\" id=\"fc\" style=\"width:fit-content\">سلام</div><div class=\"box\" id=\"fc2\" style=\"width:fit-content\">سلام دنیای برنامه‌نویسی مدرن و بسیار طولانی که از فضا بیشتر است و باید بشکند</div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.box{background:#1e293b;margin:4px 0}.wrap{width:300px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst w=id=>Math.round(document.getElementById(id).getBoundingClientRect().width);\nlog('min-content:',w('mn'),'px');\nlog('max-content:',w('mx'),'px');\nlog('fit-content کوتاه:',w('fc'),'px (به اندازه‌ی متن)');\nlog('fit-content بلند :',w('fc2'),'px (حداکثر 300)');\nlog('ترتیب درست؟',w('mn')<w('mx')&&w('fc')<w('fc2')&&w('fc2')<=300);"
     }
    },
    {
     "title": "text-wrap: balance و pretty: شکست خط زیباتر",
     "content": "<p>تیترهای چندخطی اغلب یک کلمه‌ی تنها در خط آخر دارند. <code>text-wrap: balance</code> طول خط‌ها را متعادل می‌کند (برای تیتر، حداکثر چند خط) و <code>text-wrap: pretty</code> از «یتیم» شدن آخرین خط در پاراگراف جلوگیری می‌کند. هزینه‌ی محاسبه دارد، پس برای متن‌های کوتاه استفاده می‌شود. مرورگرهای قدیمی ساده نادیده می‌گیرند (بهبود تدریجی).</p><pre dir=\"ltr\"><code>h1,h2,h3{ text-wrap: balance }\np{ text-wrap: pretty }</code></pre>",
     "exercise": "عرض ظرف را عوض کن و تفاوت خط‌ها را ببین.",
     "code": {
      "html": "<h2 id=\"a\" class=\"h\">این یک تیتر نسبتاً بلند فارسی برای آزمایش شکست خط است</h2><h2 id=\"b\" class=\"h bal\">این یک تیتر نسبتاً بلند فارسی برای آزمایش شکست خط است</h2><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.h{width:330px;margin:6px 0;font-size:20px;background:#1e293b}.bal{text-wrap:balance}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nfunction lines(el){const r=document.createRange();r.selectNodeContents(el);const m=new Map();\n  for(const q of r.getClientRects()){const k=Math.round(q.top);m.set(k,Math.max(m.get(k)||0,q.right-q.left))}\n  return [...m.values()].map(Math.round)}\nlog('پشتیبانی:',CSS.supports('text-wrap','balance'));\nlog('بدون balance → عرض خط‌ها:',lines(document.getElementById('a')).join(' / '));\nlog('با balance    → عرض خط‌ها:',lines(document.getElementById('b')).join(' / '));"
     }
    },
    {
     "title": "شمارنده‌های CSS و لیست‌های فارسی",
     "content": "<p>شمارنده‌ها شماره‌گذاری خودکار بدون HTML اضافه‌اند: <code>counter-reset</code> مقدار اولیه، <code>counter-increment</code> افزایش و <code>counter()</code> داخل <code>content</code>. برای شماره‌ی فارسی <code>list-style-type: persian</code> یا <code>counter(x, persian)</code>. تو در تو: <code>counters(item, \".\")</code> برای 1.2.3. شماره‌های تزئینی را در CSS نگه دار، محتوای معنایی را در HTML (<code>&lt;ol&gt;</code>).</p><pre dir=\"ltr\"><code>ol{ counter-reset: item; list-style: none }\nli::before{ counter-increment: item;\n            content: counters(item, &quot;.&quot;, persian) &quot; ) &quot; }\nol ol{ counter-reset: item }</code></pre>",
     "exercise": "شمارنده را از ۱۰ شروع کن (counter-reset: item 9).",
     "code": {
      "html": "<ol id=\"o\"><li>مقدمه<ol><li>تاریخچه</li><li>اهداف</li></ol></li><li>روش</li></ol><ol id=\"p\" style=\"list-style-type:persian\"><li>اول</li><li>دوم</li></ol><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}#o{counter-reset:item;list-style:none;padding:0}#o li{counter-increment:item;margin:4px 0}#o li::before{content:counters(item,'.') ') ';color:#38bdf8}#o ol{counter-reset:item;list-style:none}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst items=[...document.querySelectorAll('#o li')];\nfunction num(li){const parts=[];let cur=li;while(cur&&cur.id!=='o'){if(cur.tagName==='LI'){parts.unshift([...cur.parentElement.children].indexOf(cur)+1)}cur=cur.parentElement}return parts.join('.')}\nlog('شماره‌گذاری مورد انتظار:',items.map(num).join(' | '));\nlog('list-style-type لیست فارسی:',getComputedStyle(document.getElementById('p')).listStyleType);\nlog('counter-reset روی #o:',getComputedStyle(document.getElementById('o')).counterReset);\nlog('counter-increment روی li:',getComputedStyle(items[0]).counterIncrement);"
     }
    },
    {
     "title": "light-dark() و color-scheme: تم روشن/تاریک بدون تکرار",
     "content": "<p><code>color-scheme: light dark</code> به مرورگر می‌گوید صفحه هر دو تم را پشتیبانی می‌کند (کنترل‌ها، scrollbar و رنگ پیش‌فرض خودکار هماهنگ می‌شوند). تابع <code>light-dark(روشن, تاریک)</code> مقدار را بر اساس تم فعال انتخاب می‌کند و دیگر نیازی به دو بلوک <code>@media (prefers-color-scheme)</code> نیست. برای دکمه‌ی دستی، مقدار <code>color-scheme</code> را روی ریشه عوض کن.</p><pre dir=\"ltr\"><code>:root{ color-scheme: light dark }\nbody{ background: light-dark(#fff, #0b1220);\n      color:      light-dark(#0b1220, #e2e8f0) }\n[data-theme=dark]{ color-scheme: dark }</code></pre>",
     "exercise": "یک متغیر --accent بساز که در دو تم رنگ متفاوت بدهد.",
     "code": {
      "html": "<div id=\"t\">نمونه</div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}:root{color-scheme:light dark}#t{padding:10px;background:light-dark(#f1f5f9,#1e293b);color:light-dark(#0f172a,#f8fafc)}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst t=document.getElementById('t');\nfor(const s of ['light','dark']){document.documentElement.style.colorScheme=s;\n  const c=getComputedStyle(t);log(s.padEnd(5),'→ پس‌زمینه',c.backgroundColor,'| متن',c.color)}\nlog('پشتیبانی از light-dark:',CSS.supports('color','light-dark(red,blue)'));"
     }
    },
    {
     "title": "Anchor Positioning: تولتیپ بدون جاوااسکریپت",
     "content": "<p>تا پیش از این، قرار دادن تولتیپ کنار دکمه نیازمند محاسبه‌ی موقعیت در JS یا کتابخانه بود. با <b>Anchor Positioning</b>: به دکمه <code>anchor-name: --btn</code> بده و عنصر شناور را با <code>position-anchor</code> و تابع <code>anchor()</code> یا <code>position-area</code> کنارش بگذار. <code>position-try-fallbacks</code> هنگام سرریز از لبه‌ی صفحه جای دیگری انتخاب می‌کند. چون ویژگی نسبتاً جدید است، با <code>@supports</code> و فال‌بک بنویس.</p><pre dir=\"ltr\"><code>.btn{ anchor-name: --btn }\n.tip{ position: fixed; position-anchor: --btn;\n      position-area: top;          /* بالای دکمه */\n      position-try-fallbacks: flip-block; }\n@supports not (anchor-name: --x){ .tip{ /* فال‌بک */ } }</code></pre>",
     "exercise": "position-area را bottom کن.",
     "code": {
      "html": "<div style=\"height:140px;padding-top:70px;padding-left:80px\"><button class=\"btn\" id=\"b\">دکمه</button><div class=\"tip\" id=\"tip\">راهنما</div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.btn{anchor-name:--btn}.tip{position:fixed;position-anchor:--btn;position-area:top;background:#facc15;color:#000;padding:2px 8px;margin:4px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst ok=CSS.supports('anchor-name','--x');\nlog('Anchor Positioning پشتیبانی می‌شود؟',ok);\nif(ok){\n  \n  const b=document.getElementById('b').getBoundingClientRect(),t=document.getElementById('tip').getBoundingClientRect();\n  log('تولتیپ بالای دکمه است؟',t.bottom<=b.top+8,'| وسط‌چین افقی؟',Math.abs((t.left+t.width/2)-(b.left+b.width/2))<3);\n}else log('فال‌بک: موقعیت با JS یا کتابخانه (Floating UI)');"
     }
    },
    {
     "title": "@scope: دامنه‌ی استایل بدون BEM",
     "content": "<p><code>@scope (.card) to (.card-slot)</code> استایل‌ها را فقط داخل <code>.card</code> اعمال می‌کند و در «حفره»ی <code>.card-slot</code> متوقف می‌شود (donut scope). برخلاف نام‌گذاری BEM، لازم نیست هر کلاس پیشوند بگیرد. در scope، <code>:scope</code> خود ریشه است. نکته‌ی Specificity: انتخابگرهای داخل scope وزن اضافه نمی‌گیرند، اما «نزدیکی به ریشه‌ی scope» در cascade ملاک است.</p><pre dir=\"ltr\"><code>@scope (.card) to (.slot){\n  p{ color: tomato }\n  :scope{ border: 1px solid }\n}</code></pre>",
     "exercise": "to(...) را بردار و ببین رنگ در slot هم عوض می‌شود.",
     "code": {
      "html": "<div class=\"card\"><p id=\"in\">داخل کارت</p><div class=\"slot\"><p id=\"slot\">داخل slot</p></div></div><p id=\"out2\">بیرون کارت</p><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}@scope (.card) to (.slot){p{color:rgb(255,99,71)}}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst c=id=>getComputedStyle(document.getElementById(id)).color;\nlog('پشتیبانی از @scope:',typeof CSSScopeRule!=='undefined');\nlog('داخل کارت :',c('in'));\nlog('داخل slot :',c('slot'),'(نباید tomato باشد)');\nlog('بیرون کارت:',c('out2'));"
     }
    },
    {
     "title": "Media Featureهای کمتر دیده‌شده: hover، pointer و range syntax",
     "content": "<p>فقط عرض صفحه مهم نیست. <code>(hover: hover)</code> و <code>(pointer: fine)</code> تشخیص ماوس در برابر لمس‌اند؛ hover را فقط برای دستگاه دارای hover واقعی فعال کن تا روی موبایل «گیر» نکند. <code>(prefers-reduced-motion)</code>، <code>(prefers-contrast)</code>، <code>(forced-colors)</code>، <code>(orientation)</code> و <code>(resolution)</code> هم هست. سینتکس بازه‌ای: <code>@media (600px &lt;= width &lt; 900px)</code> خواناتر از min/max است.</p><pre dir=\"ltr\"><code>@media (hover: hover) and (pointer: fine){ .card:hover{ transform: translateY(-2px) } }\n@media (prefers-reduced-motion: reduce){ *{ animation: none !important } }\n@media (600px &lt;= width &lt; 900px){ .grid{ grid-template-columns: repeat(2,1fr) } }</code></pre>",
     "exercise": "عرض پنجره را عوض کن و خروجی‌ها را ببین.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst q=s=>matchMedia(s).matches;\nlog('hover:',q('(hover: hover)'),'| any-hover:',q('(any-hover: hover)'));\nlog('pointer fine:',q('(pointer: fine)'),'| coarse:',q('(pointer: coarse)'));\nlog('reduced-motion:',q('(prefers-reduced-motion: reduce)'),'| dark:',q('(prefers-color-scheme: dark)'));\nlog('orientation:',q('(orientation: landscape)')?'landscape':'portrait');\nconst w=innerWidth;\nlog('عرض:',w,'| بازه‌ی (400px <= width < 5000px):',q('(400px <= width < 5000px)'),'| معادل min/max:',q('(min-width:400px) and (max-width:4999.98px)'));"
     }
    },
    {
     "title": "CSS چاپ: @page، break-inside و ظاهر مخصوص چاپ",
     "content": "<p>گزارش و فاکتور باید خوب چاپ یا PDF شوند. <code>@media print</code> منوها و دکمه‌ها را حذف می‌کند، رنگ پس‌زمینه را ساده می‌کند و لینک‌ها را با <code>a[href]::after{content:\" (\" attr(href) \")\"}</code> نشان می‌دهد. <code>@page { size: A4; margin: 15mm }</code> اندازه و حاشیه را تعیین می‌کند. <code>break-inside: avoid</code> از شکستن کارت/ردیف جدول بین دو صفحه جلوگیری می‌کند و <code>break-before: page</code> صفحه‌ی جدید می‌سازد.</p><pre dir=\"ltr\"><code>@page{ size: A4; margin: 15mm }\n@media print{\n  nav,.no-print{ display:none }\n  .card,tr{ break-inside: avoid }\n  h2{ break-after: avoid }\n}</code></pre>",
     "exercise": "یک @page :first با حاشیه‌ی بزرگ‌تر اضافه کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}@page{size:A4;margin:15mm}@media print{nav{display:none}.card{break-inside:avoid}}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nlet page=0,media=0,names=[];\nfor(const s of document.styleSheets){for(const r of s.cssRules){\n  if(r instanceof CSSPageRule){page++;names.push('@page{'+r.style.cssText.trim()+'}')}\n  if(r instanceof CSSMediaRule&&r.conditionText==='print')media++;}}\nlog('قاعده‌های @page:',page,names.join(' '));\nlog('بلوک‌های @media print:',media);\nlog('break-inside پشتیبانی:',CSS.supports('break-inside','avoid'));"
     }
    },
    {
     "title": "کنترل‌های فرم: accent-color، field-sizing و :user-invalid",
     "content": "<p><code>accent-color</code> رنگ چک‌باکس، رادیو، range و progress بومی را بدون ساخت مجدد عوض می‌کند. <code>field-sizing: content</code> باعث می‌شود textarea و input با محتوا رشد کنند (بدون JS). <code>:user-invalid</code> و <code>:user-valid</code> فقط بعد از تعامل کاربر فعال می‌شوند، برخلاف <code>:invalid</code> که از اول قرمز است. <code>caret-color</code>، <code>::placeholder</code> و <code>appearance</code> بقیه‌ی ظاهر را کنترل می‌کنند.</p><pre dir=\"ltr\"><code>input[type=checkbox]{ accent-color: #22c55e }\ntextarea{ field-sizing: content; min-height: 3lh }\ninput:user-invalid{ border-color: crimson }</code></pre>",
     "exercise": "max-height بگذار تا رشد textarea محدود شود.",
     "code": {
      "html": "<textarea id=\"ta\" rows=\"2\"></textarea><input type=\"checkbox\" id=\"cb\" checked><input id=\"em\" type=\"email\" required><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}textarea{field-sizing:content;width:200px;display:block}#cb{accent-color:#22c55e}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst ta=document.getElementById('ta');\nlog('field-sizing پشتیبانی:',CSS.supports('field-sizing','content'));\nconst h0=ta.getBoundingClientRect().height;\nta.value='خط\\nخط\\nخط\\nخط\\nخط\\nخط';\nconst h1=ta.getBoundingClientRect().height;\nlog('ارتفاع textarea خالی:',Math.round(h0),'| بعد از ۶ خط:',Math.round(h1),'| رشد کرد؟',h1>h0);\nlog('accent-color:',getComputedStyle(document.getElementById('cb')).accentColor);\nlog(':user-invalid پشتیبانی:',CSS.supports('selector(:user-invalid)'));"
     }
    },
    {
     "title": "Motion Path: حرکت روی مسیر با offset-path",
     "content": "<p><code>offset-path</code> مسیر حرکت (<code>path()</code>، <code>circle()</code>، <code>ray()</code>) را تعیین می‌کند و <code>offset-distance</code> مکان روی مسیر (۰٪ تا ۱۰۰٪) است. با <code>offset-rotate: auto</code> عنصر در جهت مسیر می‌چرخد. انیمیشن‌کردن <code>offset-distance</code> ساده‌تر و روان‌تر از محاسبه‌ی مختصات در JS است و روی کامپوزیتور اجرا می‌شود.</p><pre dir=\"ltr\"><code>.dot{ offset-path: path(&#x27;M0 80 C 60 0, 140 0, 200 80&#x27;);\n      offset-rotate: auto;\n      animation: go 3s linear infinite }\n@keyframes go{ to{ offset-distance: 100% } }</code></pre>",
     "exercise": "offset-rotate را 0deg کن.",
     "code": {
      "html": "<div class=\"track\"><div class=\"dot\" id=\"d\"></div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}.track{position:relative;height:100px;width:220px}.dot{width:10px;height:10px;background:#38bdf8;offset-path:path('M0 80 C 60 0, 140 0, 200 80');offset-rotate:auto;offset-distance:0%}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst d=document.getElementById('d'),pts=[];\nfor(const p of [0,25,50,75,100]){d.style.offsetDistance=p+'%';const r=d.getBoundingClientRect();pts.push([p,Math.round(r.left),Math.round(r.top)])}\npts.forEach(([p,x,y])=>log(p+'%','→ x='+x,'y='+y));\nconst ys=pts.map(p=>p[2]);\nlog('نقطه‌ی وسط بالاتر از دو سر مسیر؟',ys[2]<ys[0]&&ys[2]<ys[4]);"
     }
    },
    {
     "title": "انیمیشن به اندازه‌ی auto: interpolate-size",
     "content": "<p>سال‌ها <code>transition: height</code> از <code>0</code> به <code>auto</code> کار نمی‌کرد، چون auto عدد نیست. حالا با <code>interpolate-size: allow-keywords</code> (روی ریشه یا عنصر) انتقال از/به <code>auto</code>, <code>min-content</code> و ... ممکن است؛ همچنین تابع <code>calc-size(auto, size + 20px)</code>. راه قدیم: <code>grid-template-rows: 0fr → 1fr</code> برای آکاردئون. همیشه فال‌بک آماده داشته باش.</p><pre dir=\"ltr\"><code>:root{ interpolate-size: allow-keywords }\n.panel{ height: 0; overflow: hidden; transition: height .3s }\n.panel.open{ height: auto }\n\n/* فال‌بک قدیمی */\n.wrap{ display:grid; grid-template-rows:0fr; transition:grid-template-rows .3s }\n.wrap.open{ grid-template-rows:1fr }</code></pre>",
     "exercise": "مدت انتقال را ۵۰۰ms کن.",
     "code": {
      "html": "<div class=\"panel\" id=\"p\"><div style=\"height:120px\">محتوا</div></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}:root{interpolate-size:allow-keywords}.panel{height:0;overflow:hidden;transition:height .4s linear;background:#1e293b}",
      "js": "(async()=>{\nconst out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst p=document.getElementById('p');\nconst ok=CSS.supports('interpolate-size','allow-keywords');\nlog('interpolate-size پشتیبانی:',ok);\np.getBoundingClientRect();\np.style.height='auto';\nawait sleep(120);\nconst mid=Math.round(p.getBoundingClientRect().height);\nawait sleep(500);\nconst end=Math.round(p.getBoundingClientRect().height);\nlog('میانه‌ی انتقال:',mid,'px | پایان:',end,'px');\nlog(ok?(mid>0&&mid<end?'✓ از 0 تا auto نرم انیمیت شد':'⚠ بررسی کن'):'بدون پشتیبانی: ارتفاع پرید (فال‌بک grid لازم است)');\n})();"
     }
    }
   ],
   "quiz": [
    {
     "q": "متغیر CSS با کدام سینتکس تعریف می‌شود؟",
     "options": [
      "$نام: مقدار;",
      "--نام: مقدار;",
      "@نام: مقدار;",
      "#نام: مقدار;"
     ],
     "answer": 1,
     "explain": "متغیرهای بومی CSS با دو خط تیره شروع می‌شوند، مثل --brand-color."
    },
    {
     "q": "var(--accent) در CSS چه کاری انجام می‌دهد؟",
     "options": [
      "یک فایل جدید می‌سازد",
      "مقدار متغیر CSS تعریف‌شده را فرا می‌خواند",
      "انیمیشن اجرا می‌کند",
      "المان را حذف می‌کند"
     ],
     "answer": 1,
     "explain": "var() مقدار ذخیره‌شده در یک Custom Property را برمی‌گرداند."
    },
    {
     "q": "در روش Mobile First، media query معمولاً با کدام ویژگی نوشته می‌شود؟",
     "options": [
      "max-width",
      "min-width",
      "max-height",
      "aspect-ratio"
     ],
     "answer": 1,
     "explain": "از کوچک شروع می‌شود و با min-width برای صفحات بزرگ‌تر گسترش می‌یابد."
    },
    {
     "q": "طبق قوانین Specificity در CSS، کدام یک قوی‌تر است؟",
     "options": [
      "انتخاب با تگ (p)",
      "انتخاب با کلاس (.text)",
      "انتخاب با id (#special)",
      "هر سه برابرند"
     ],
     "answer": 2,
     "explain": "ترتیب قدرت: inline style > id > class > تگ."
    },
    {
     "q": "چرا انیمیشن‌کردن transform معمولاً سریع‌تر از width/top است؟",
     "options": [
      "transform رنگی‌تر است",
      "transform نیازی به محاسبهٔ دوبارهٔ چیدمان کل صفحه (Reflow) ندارد",
      "width اصلاً انیمیشن نمی‌شود",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "transform و opacity توسط GPU و بدون Reflow پردازش می‌شوند."
    },
    {
     "q": "Container Query به چه چیزی نگاه می‌کند؟",
     "options": [
      "عرض کل صفحه",
      "عرض عنصر والد (کانتینر)",
      "ارتفاع مرورگر",
      "سرعت اینترنت"
     ],
     "answer": 1,
     "explain": "با container-type کانتینر تعریف می‌شود."
    },
    {
     "q": ":has() چه کاری می‌کند؟",
     "options": [
      "فقط hover را تشخیص می‌دهد",
      "عنصری را بر اساس فرزندانش انتخاب می‌کند",
      "رنگ را عوض می‌کند",
      "فونت را بارگذاری می‌کند"
     ],
     "answer": 1,
     "explain": "مثل سلکتور والد عمل می‌کند."
    },
    {
     "q": "در @layer کدام لایه برنده است؟",
     "options": [
      "اولین تعریف‌شده",
      "آخرین تعریف‌شده",
      "همیشه base",
      "بستگی به id دارد"
     ],
     "answer": 1,
     "explain": "لایهٔ دیرتر اولویت دارد."
    },
    {
     "q": "کدام وزن specificity صفر دارد؟",
     "options": [
      ":where()",
      ":is()",
      "#id",
      ".class"
     ],
     "answer": 0,
     "explain": "برای ریست استایل ایده‌آل است."
    },
    {
     "q": "چرا فرزند فلکس متن بلند را بیرون می‌ریزد؟",
     "options": [
      "min-width:auto پیش‌فرض",
      "flex-grow",
      "gap",
      "color"
     ],
     "answer": 0,
     "explain": "با min-width:0 رفع می‌شود."
    },
    {
     "q": "برای ارتفاع کامل در موبایل کدام واحد بهتر است؟",
     "options": [
      "svh/dvh",
      "100vh",
      "px",
      "em"
     ],
     "answer": 0,
     "explain": "نوار آدرس را در نظر می‌گیرد."
    },
    {
     "q": ":focus-visible چه می‌کند؟",
     "options": [
      "فوکوس را فقط برای کیبورد نشان می‌دهد",
      "رنگ را عوض می‌کند",
      "فونت را بزرگ می‌کند",
      "حذف می‌کند"
     ],
     "answer": 0,
     "explain": "برای دسترسی‌پذیری مهم است."
    },
    {
     "q": "کدام راه margin فرزند را داخل والد نگه می‌دارد بدون برش محتوا؟",
     "options": [
      "display: flow-root روی والد",
      "overflow: hidden روی والد",
      "position: fixed",
      "float: none"
     ],
     "answer": 0,
     "explain": "flow-root یک BFC می‌سازد بدون عوارض overflow:hidden."
    },
    {
     "q": "چرا عنصری با z-index:9999 گاهی زیر عنصر با z-index:2 می‌ماند؟",
     "options": [
      "والدش یک stacking context با z-index پایین‌تر ساخته",
      "چون z-index حداکثر 100 است",
      "چون opacity ندارد",
      "چون position static است"
     ],
     "answer": 0,
     "explain": "z-index فقط داخل stacking context والد مقایسه می‌شود."
    },
    {
     "q": "text-wrap: balance بیشتر برای چه چیزی مناسب است؟",
     "options": [
      "تیترهای کوتاه چندخطی",
      "متن‌های طولانی مقاله",
      "جدول‌ها",
      "تصاویر"
     ],
     "answer": 0,
     "explain": "balance طول خط‌ها را متعادل می‌کند و برای متن‌های کوتاه به‌صرفه است."
    },
    {
     "q": "چرا hover را داخل (hover: hover) می‌گذاریم؟",
     "options": [
      "تا روی لمسی حالت hover گیر نکند",
      "تا سریع‌تر لود شود",
      "برای پشتیبانی IE",
      "تا رنگ‌ها عوض شود"
     ],
     "answer": 0,
     "explain": "دستگاه‌های لمسی hover واقعی ندارند و حالت hover می‌تواند بعد از لمس باقی بماند."
    }
   ],
   "challenge": {
    "task": "همون profile.html که توی چالش HTML ساختی رو الان استایل بده: باید کاملاً ریسپانسیو باشه (موبایل و دسکتاپ، با رویکرد Mobile First)، از Flexbox یا Grid برای چیدمان استفاده کنی، یک حالت دارک‌مود با CSS Variables داشته باشه که با یک دکمه فعال/غیرفعال بشه، و روی دکمه‌ها :focus-visible درست تعریف شده باشه.",
    "hint1": "اول متغیرهای رنگ رو توی :root تعریف کن (--bg, --text, --accent). چیدمان کلی صفحه رو با Flexbox column بچین (این حالت پایهٔ موبایله).",
    "hint2": "برای دارک‌مود، یک کلاس dark به body اضافه کن و مقادیر متغیرها رو داخل .dark { } بازنویسی کن. برای ریسپانسیو، با min-width (نه max-width) برای دسکتاپ گسترشش بده.",
    "solution": "ساختار پیشنهادی:\n\n:root { --bg:#fff; --text:#111; --accent:#4F46E5; }\nbody.dark { --bg:#111; --text:#eee; }\nbody { background:var(--bg); color:var(--text); transition:.3s; }\n\n.container { display:flex; flex-direction:column; gap:20px; }\n@media (min-width:768px) {\n  .container { flex-direction:row; }\n}\nbutton:focus-visible { outline: 2px solid var(--accent); }\n\n// جاوااسکریپت دکمه:\n// document.getElementById('toggle').onclick = () => document.body.classList.toggle('dark');"
   }
  }
 ],
 "covers": [
  "Selector, Color, Background, Font, Box Model",
  "Display, Position, Flexbox, Grid",
  "Responsive Design, Media Query",
  "Animation, Transition, Transform, Pseudo-class/element",
  "Custom Properties (Variables)",
  "Mobile First, Component Design",
  "Performance, Accessibility, Design System"
 ],
 "project": {
  "title": "ساخت یک Landing Page حرفه‌ای و Responsive",
  "brief": "یک صفحهٔ فرود (Landing Page) کامل برای یک محصول یا سرویس فرضی بساز: هدر با منو، بخش Hero با دکمهٔ CTA، بخش ویژگی‌ها (سه ستونه با Grid)، بخش نظرات مشتریان (Flexbox)، و فوتر. باید در موبایل، تبلت و دسکتاپ درست دیده بشه.",
  "requirements": [
   "حداقل ۳ breakpoint مختلف با media query",
   "از Grid برای بخش ویژگی‌ها و از Flexbox برای هدر/منو استفاده کن",
   "یک انیمیشن یا transition ظریف روی دکمه‌ها یا کارت‌ها",
   "بدون هیچ فریم‌ورک CSS (Bootstrap/Tailwind) — فقط CSS خالص خودت",
   "رنگ‌ها و فاصله‌ها با CSS Variables تعریف بشن، نه مقدار ثابت پخش‌شده در کد"
  ],
  "hints": [
   "اول ساختار HTML رو کامل و معنادار بساز، بعد استایل بده — هیچ‌وقت هم‌زمان روی هر دو کار نکن.",
   "با موبایل شروع کن (Mobile First) و با media query برای صفحه‌های بزرگ‌تر گسترشش بده، نه برعکس."
  ]
 }
});
