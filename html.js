(window.COURSES=window.COURSES||[]).push({
 "id": "html",
 "name": "HTML",
 "icon": "📄",
 "kind": "web",
 "desc": "ساختار و اسکلت هر صفحه وب",
 "levels": [
  {
   "lessons": [
    {
     "title": "آشنایی با HTML و ساختار سند",
     "content": "<p>HTML مخفف <b>HyperText Markup Language</b> است؛ زبانی برای ساخت‌دهیِ محتوای صفحات وب. هر سند HTML با <code class='inline'>&lt;!DOCTYPE html&gt;</code> شروع می‌شود که به مرورگر می‌گوید نسخهٔ HTML5 استفاده شده است.</p><p>سند شامل سه بخش اصلی است: <code class='inline'>&lt;html&gt;</code> عنصر ریشه، <code class='inline'>&lt;head&gt;</code> برای اطلاعات فراداده (عنوان صفحه، فونت‌ها، استایل‌ها) و <code class='inline'>&lt;body&gt;</code> برای محتوایی که کاربر می‌بیند.</p><p>هر عنصر HTML معمولاً یک تگ باز و یک تگ بسته دارد؛ مثلاً <code class='inline'>&lt;p&gt;متن&lt;/p&gt;</code>. بعضی تگ‌ها مثل <code class='inline'>&lt;img&gt;</code> یا <code class='inline'>&lt;br&gt;</code> تک‌تگ هستند و بسته نمی‌شوند.</p>",
     "code": {
      "html": "<!DOCTYPE html>\n<html lang=\"fa\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>اولین صفحه من</title>\n</head>\n<body>\n  <h1>سلام دنیا!</h1>\n  <p>این اولین صفحه HTML من است.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
     },
     "exercise": "عنوان صفحه (title) را به نام خودتان تغییر دهید و یک پاراگراف دیگر دربارهٔ خودتان به body اضافه کنید."
    },
    {
     "title": "تگ‌های متنی، لیست‌ها، لینک و تصویر",
     "content": "<p>برای عنوان‌بندی از <code class='inline'>&lt;h1&gt;</code> تا <code class='inline'>&lt;h6&gt;</code> استفاده می‌شود (h1 مهم‌ترین). متن معمولی داخل <code class='inline'>&lt;p&gt;</code> قرار می‌گیرد.</p><p>لیست‌ها دو نوع‌اند: <code class='inline'>&lt;ul&gt;</code> برای لیست بدون‌شماره و <code class='inline'>&lt;ol&gt;</code> برای لیست شماره‌دار؛ هر آیتم داخل <code class='inline'>&lt;li&gt;</code> نوشته می‌شود.</p><p>برای لینک از <code class='inline'>&lt;a href=\"...\"&gt;</code> و برای نمایش تصویر از <code class='inline'>&lt;img src=\"...\" alt=\"...\"&gt;</code> استفاده کنید. ویژگی <code class='inline'>alt</code> برای دسترسی‌پذیری و سئو مهم است.</p>",
     "code": {
      "html": "<h1>لیست مهارت‌های من</h1>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n<p>برای یادگیری بیشتر به <a href=\"#\">این لینک</a> سر بزنید.</p>",
      "css": "",
      "js": ""
     },
     "exercise": "یک لیست شماره‌دار (ol) از سه هدف یادگیری خودتان بسازید و یک تصویر دلخواه با alt مناسب اضافه کنید."
    },
    {
     "title": "لینک‌ها: مسیر مطلق در برابر نسبی",
     "content": "<p>مقدار <code class='inline'>href</code> می‌تواند <b>مطلق (Absolute)</b> باشد — آدرس کامل مثل <code class='inline'>https://example.com/about</code> — یا <b>نسبی (Relative)</b> — فقط مسیر داخل همان سایت، مثل <code class='inline'>about.html</code> یا <code class='inline'>../images/logo.png</code>.</p><p>برای لینک‌دهی بین صفحات همان سایت همیشه از مسیر نسبی استفاده کنید؛ این‌طوری اگر دامنه عوض شود، لینک‌ها هنوز کار می‌کنند. <code class='inline'>target=\"_blank\"</code> لینک را در تب جدید باز می‌کند.</p>",
     "code": {
      "html": "<a href=\"https://developer.mozilla.org\" target=\"_blank\">مستندات MDN (تب جدید)</a>\n<br>\n<a href=\"about.html\">صفحهٔ دربارهٔ ما (همین سایت)</a>\n<br>\n<a href=\"#top\">برو بالای صفحه</a>",
      "css": "",
      "js": ""
     },
     "exercise": "سه لینک بساز: یکی مطلق به یک سایت خارجی با target=\"_blank\"، یکی نسبی به یک فایل فرضی contact.html، و یکی لینک داخلی به یک بخش از همین صفحه با #."
    },
    {
     "title": "تصاویر: فرمت‌ها، Alt و بهینه‌سازی پایه",
     "content": "<p>فرمت‌های رایج تصویر: <b>JPG</b> برای عکس (فشرده ولی کیفیت کمی افت می‌کند)، <b>PNG</b> برای تصاویر با پس‌زمینهٔ شفاف، <b>SVG</b> برای آیکون/لوگو (برداری، در هر اندازه‌ای تار نمی‌شود)، و <b>WebP</b> که جدیدتر و معمولاً سبک‌تر از JPG/PNG است.</p><p>متن <code class='inline'>alt</code> باید توصیف واقعی تصویر باشد، نه خالی گذاشتن یا تکرار کلمهٔ کلیدی بی‌ربط — این هم به دسترسی‌پذیری کمک می‌کند هم به سئو. ویژگی‌های <code class='inline'>width</code> و <code class='inline'>height</code> از «پرش صفحه» (Layout Shift) هنگام بارگذاری تصویر جلوگیری می‌کنند.</p>",
     "code": {
      "html": "<img src=\"https://via.placeholder.com/300x150\" alt=\"نمودار فروش فصلی شرکت\" width=\"300\" height=\"150\">",
      "css": "",
      "js": ""
     },
     "exercise": "یک تگ img با alt توصیفی واقعی (نه فقط 'عکس') و width/height مشخص بنویس؛ توضیح بده width/height چطور از پرش صفحه جلوگیری می‌کنه."
    },
    {
     "title": "Comments و خوانا نوشتن HTML",
     "content": "<p>کامنت در HTML با <code class='inline'>&lt;!-- متن --&gt;</code> نوشته می‌شود و در صفحهٔ نهایی نمایش داده نمی‌شود؛ برای یادداشت‌گذاری برای خودتان یا هم‌تیمی‌ها مفید است.</p><p>خوانایی کد هم مهم است: تورفتگی (indentation) منظم برای تگ‌های تودرتو، اسم‌گذاری معنادار برای id/class، و جدانگه‌داشتن بخش‌های منطقی صفحه با کامنت — این‌ها باعث می‌شود بعد از چند ماه هم بتوانید کد خودتان را بفهمید.</p>",
     "code": {
      "html": "<!-- بخش هدر سایت -->\n<header>\n  <h1>وبلاگ من</h1>\n</header>\n\n<!-- TODO: بخش نظرات رو بعداً اضافه کن -->\n<main>\n  <p>محتوای اصلی...</p>\n</main>",
      "css": "",
      "js": ""
     },
     "exercise": "یک صفحهٔ ساده با ۳ بخش (header, main, footer) بساز و قبل از هر بخش یک کامنت توضیحی بنویس که بگه اون بخش چیه."
    },
    {
     "title": "Div و Span: کانتینرهای عمومی",
     "content": "<p><code class='inline'>&lt;div&gt;</code> یک کانتینر عمومی <b>بلوکی</b> است (خط جدید ایجاد می‌کند) و برای گروه‌بندی بخش‌های بزرگ‌تر استفاده می‌شود، وقتی هیچ تگ سمانتیک مناسب‌تری (مثل section یا article) وجود ندارد. <code class='inline'>&lt;span&gt;</code> نسخهٔ <b>درون‌خطی (inline)</b> همان ایده است — برای استایل‌دادن به یک تکه کوچک از متن، بدون شکستن خط.</p><p><b>قانون کلی:</b> همیشه اول به دنبال تگ معنادار (header، nav، p، strong و...) باش؛ div و span را وقتی استفاده کن که واقعاً معنای خاصی برای آن بخش وجود ندارد و فقط برای استایل‌دهی گروه‌بندی می‌کنی.</p>",
     "code": {
      "html": "<div class=\"card\">\n  <p>این یک <span style=\"color:red\">کلمهٔ قرمز</span> وسط متنه.</p>\n</div>",
      "css": "",
      "js": ""
     },
     "exercise": "یک div بساز که داخلش دو تا span با رنگ‌های متفاوت باشه، هرکدوم یک کلمه از یک جمله رو رنگی کنه."
    },
    {
     "title": "Blockquote، Hr و Pre",
     "content": "<p><code class='inline'>&lt;blockquote&gt;</code> برای نقل‌قول از منبع دیگر است (مرورگرها معمولاً آن را با تورفتگی نشان می‌دهند). <code class='inline'>&lt;hr&gt;</code> یک خط افقی برای جداکردن موضوعی بخش‌ها رسم می‌کند (نه فقط تزئین). <code class='inline'>&lt;pre&gt;</code> متن را دقیقاً همان‌طور که تایپ شده (با فاصله‌ها و خط‌های جدید) نمایش می‌دهد — عالی برای نمایش کد.</p>",
     "code": {
      "html": "<blockquote>\n  <p>یادگیری هیچ‌وقت متوقف نمی‌شود.</p>\n</blockquote>\n<hr>\n<pre>\nfunction hello() {\n    console.log(\"سلام\");\n}\n</pre>",
      "css": "",
      "js": ""
     },
     "exercise": "یک نقل‌قول از یک شخصیت مورد علاقه‌ات با blockquote بنویس، بعدش یک hr بذار، بعد یک تکه کد نمونه با pre نمایش بده."
    },
    {
     "title": "تاکید متنی: strong، em، mark، small، sub/sup",
     "content": "<p><code class='inline'>&lt;strong&gt;</code> اهمیت معنایی بالا (معمولاً بولد) و <code class='inline'>&lt;em&gt;</code> تاکید معنایی (معمولاً ایتالیک) نشان می‌دهند — این‌ها فقط ظاهری نیستند، به screen readerها هم معنا می‌رسانند (برخلاف صرفاً استایل‌دادن با CSS). <code class='inline'>&lt;mark&gt;</code> متن را هایلایت می‌کند (مثل نتیجهٔ جست‌وجو)، <code class='inline'>&lt;small&gt;</code> برای متن حاشیه‌ای/فرعی است، و <code class='inline'>&lt;sub&gt;</code>/<code class='inline'>&lt;sup&gt;</code> برای زیرنویس و بالانویس (مثل H<sub>2</sub>O یا x<sup>2</sup>) به کار می‌روند.</p>",
     "code": {
      "html": "<p>این <strong>خیلی مهمه</strong> که یادت بمونه.</p>\n<p>این کلمه <em>واقعاً</em> تاکید داره.</p>\n<p>نتیجهٔ جست‌وجو: <mark>HTML</mark> یک زبان نشانه‌گذاری است.</p>\n<p><small>© همهٔ حقوق محفوظ است</small></p>\n<p>فرمول آب: H<sub>2</sub>O</p>",
      "css": "",
      "js": ""
     },
     "exercise": "یک پاراگراف بنویس که توش از strong، em و mark هرکدوم حداقل یک‌بار استفاده شده باشه، و یک فرمول شیمیایی دیگه با sub بنویس."
    },
    {
     "title": "تمرین ترکیبی: صفحهٔ بیوگرافی شخصی",
     "content": "<p>وقتشه چیزهایی که تا اینجا یاد گرفتی رو با هم ترکیب کنی: heading، paragraph، لیست، لینک، تصویر و کامنت — همه در یک صفحه.</p>",
     "code": {
      "html": "<!-- این‌جا خودت شروع کن؛ نمونهٔ زیر یک اسکلت پیشنهادیه -->\n<h1>نام من</h1>\n<img src=\"https://via.placeholder.com/120\" alt=\"عکس پروفایل نام من\" width=\"120\" height=\"120\">\n<p>یک پاراگراف کوتاه دربارهٔ خودت...</p>\n<h2>علایق من</h2>\n<ul>\n  <li>...</li>\n</ul>\n<a href=\"#\">لینک به شبکهٔ اجتماعی من</a>",
      "css": "",
      "js": ""
     },
     "exercise": "صفحهٔ بیوگرافی خودت رو کامل کن: حداقل ۱ heading، ۲ پاراگراف، ۱ لیست، ۱ لینک، ۱ تصویر با alt درست، و ۱ کامنت توضیحی."
    }
   ],
   "quiz": [
    {
     "q": "کدام بخش سند HTML محتوای قابل مشاهده برای کاربر را در بر دارد؟",
     "options": [
      "head",
      "body",
      "title",
      "meta"
     ],
     "answer": 1,
     "explain": "محتوای قابل مشاهده داخل body قرار می‌گیرد؛ head مربوط به فراداده است."
    },
    {
     "q": "کدام تگ برای ساخت لیست بدون شماره استفاده می‌شود؟",
     "options": [
      "<ol>",
      "<li>",
      "<ul>",
      "<list>"
     ],
     "answer": 2,
     "explain": "ul یعنی unordered list؛ هر آیتم آن داخل li نوشته می‌شود."
    },
    {
     "q": "ویژگی alt در تگ img چه کاربردی دارد؟",
     "options": [
      "تغییر رنگ تصویر",
      "توضیح جایگزین برای دسترسی‌پذیری و سئو",
      "تعیین اندازه تصویر",
      "لینک کردن تصویر"
     ],
     "answer": 1,
     "explain": "alt متنی جایگزین است که هنگام نمایش‌ندادن تصویر یا برای screen readerها خوانده می‌شود."
    },
    {
     "q": "لینک نسبی (Relative) نسبت به مطلق (Absolute) چه مزیتی دارد؟",
     "options": [
      "همیشه سریع‌تر بارگذاری می‌شود",
      "اگر دامنهٔ سایت عوض شود، همچنان کار می‌کند",
      "فقط برای تصاویر است",
      "نیازی به href ندارد"
     ],
     "answer": 1,
     "explain": "مسیر نسبی وابسته به دامنه نیست، فقط ساختار داخلی پروژه را دنبال می‌کند."
    },
    {
     "q": "مشخص‌کردن width و height روی تگ img چه فایده‌ای دارد؟",
     "options": [
      "تصویر را رنگی می‌کند",
      "از پرش ناگهانی چیدمان صفحه (Layout Shift) هنگام بارگذاری جلوگیری می‌کند",
      "حجم تصویر را صفر می‌کند",
      "alt را غیرضروری می‌کند"
     ],
     "answer": 1,
     "explain": "مرورگر از قبل فضای تصویر را رزرو می‌کند و صفحه هنگام لود تصویر نمی‌پرد."
    }
   ],
   "challenge": {
    "task": "یک صفحهٔ 'دربارهٔ من' کامل بساز که شامل این‌ها باشه: یک h1 با اسمت، یک تصویر پروفایل با alt درست و width/height، دو پاراگراف (یکی دربارهٔ خودت، یکی دربارهٔ علایقت)، یک لیست از مهارت‌ها، یک لینک به یه سایت خارجی که توی تب جدید باز بشه، و حداقل دو تا کامنت توضیحی. هیچ CSS لازم نیست.",
    "hint1": "اول با کامنت‌ها اسکلت صفحه رو مشخص کن (مثلاً <!-- بخش معرفی -->)، بعد داخل هر بخش تگ‌های مناسب رو اضافه کن.",
    "hint2": "برای لینک تب‌جدید یادت نره target=\"_blank\" بذاری. برای تصویر، حتی اگه عکس واقعی نداری از یه placeholder مثل via.placeholder.com استفاده کن.",
    "solution": "<!-- بخش معرفی -->\n<h1>اسم من</h1>\n<img src=\"https://via.placeholder.com/150\" alt=\"عکس پروفایل اسم من\" width=\"150\" height=\"150\">\n<p>یک پاراگراف دربارهٔ خودم...</p>\n<p>یک پاراگراف دربارهٔ علایقم...</p>\n\n<!-- بخش مهارت‌ها -->\n<h2>مهارت‌ها</h2>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<a href=\"https://github.com\" target=\"_blank\">پروفایل گیت‌هاب من</a>"
   }
  },
  {
   "lessons": [
    {
     "title": "جدول‌ها و فرم‌ها",
     "content": "<p>جدول‌ها با <code class='inline'>&lt;table&gt;</code> ساخته می‌شوند؛ هر ردیف <code class='inline'>&lt;tr&gt;</code>، سلول سرستون <code class='inline'>&lt;th&gt;</code> و سلول عادی <code class='inline'>&lt;td&gt;</code> است.</p><p>فرم‌ها با <code class='inline'>&lt;form&gt;</code> ساخته می‌شوند و شامل ورودی‌هایی مثل <code class='inline'>&lt;input type=\"text\"&gt;</code>، <code class='inline'>&lt;input type=\"email\"&gt;</code>، <code class='inline'>&lt;textarea&gt;</code> و <code class='inline'>&lt;button&gt;</code> هستند. ویژگی <code class='inline'>type</code> نوع ورودی را تعیین می‌کند.</p><p>هر ورودی باید یک <code class='inline'>&lt;label&gt;</code> مرتبط داشته باشد تا هم خوانایی بهتر شود هم دسترسی‌پذیری بالا برود.</p>",
     "code": {
      "html": "<form>\n  <label for=\"name\">نام:</label>\n  <input id=\"name\" type=\"text\" placeholder=\"نام شما\">\n  <br><br>\n  <label for=\"email\">ایمیل:</label>\n  <input id=\"email\" type=\"email\">\n  <br><br>\n  <button type=\"submit\">ارسال</button>\n</form>",
      "css": "",
      "js": ""
     },
     "exercise": "یک جدول ۳ ستونه (نام، سن، شهر) با دو ردیف داده بسازید و یک فرم ساده تماس با فیلد پیام (textarea) اضافه کنید."
    },
    {
     "title": "تگ‌های سمانتیک (Semantic HTML)",
     "content": "<p>تگ‌های سمانتیک به مرورگر و موتورهای جستجو معنای بخش‌های صفحه را می‌گویند: <code class='inline'>&lt;header&gt;</code>، <code class='inline'>&lt;nav&gt;</code>، <code class='inline'>&lt;main&gt;</code>، <code class='inline'>&lt;section&gt;</code>، <code class='inline'>&lt;article&gt;</code>، <code class='inline'>&lt;aside&gt;</code> و <code class='inline'>&lt;footer&gt;</code>.</p><p>استفاده از این تگ‌ها به‌جای <code class='inline'>&lt;div&gt;</code> ساده باعث بهبود سئو و دسترسی‌پذیری می‌شود، چون ساختار صفحه برای ابزارها و ربات‌ها واضح‌تر است.</p>",
     "code": {
      "html": "<header><h1>وبلاگ من</h1></header>\n<nav><a href=\"#\">خانه</a> | <a href=\"#\">مقالات</a></nav>\n<main>\n  <article>\n    <h2>اولین پست</h2>\n    <p>متن پست...</p>\n  </article>\n</main>\n<footer><p>© ۱۴۰۴</p></footer>",
      "css": "",
      "js": ""
     },
     "exercise": "صفحهٔ لیست تمرین قبلی را با header، nav، main و footer سمانتیک بازنویسی کنید."
    },
    {
     "title": "Inputهای پیشرفته‌تر: email، number، date، checkbox، radio",
     "content": "<p>ویژگی <code class='inline'>type</code> روی input رفتار و کیبورد مناسب (به‌خصوص در موبایل) رو تغییر می‌ده: <code class='inline'>email</code> فرمت ایمیل رو چک می‌کنه، <code class='inline'>number</code> فقط عدد قبول می‌کنه، <code class='inline'>date</code> یک تقویم نشون می‌ده. <code class='inline'>checkbox</code> برای انتخاب چندتایی و <code class='inline'>radio</code> (با name مشترک) برای انتخاب یکی از چند گزینه استفاده می‌شه.</p>",
     "code": {
      "html": "<label>ایمیل: <input type=\"email\" required></label><br><br>\n<label>سن: <input type=\"number\" min=\"0\" max=\"120\"></label><br><br>\n<label>تاریخ تولد: <input type=\"date\"></label><br><br>\n<p>علاقه‌مندی‌ها:</p>\n<label><input type=\"checkbox\"> کتاب</label>\n<label><input type=\"checkbox\"> ورزش</label><br><br>\n<p>جنسیت:</p>\n<label><input type=\"radio\" name=\"gender\"> مرد</label>\n<label><input type=\"radio\" name=\"gender\"> زن</label>",
      "css": "",
      "js": ""
     },
     "exercise": "یک فرم نظرسنجی بساز با یک input از نوع number (برای سن)، دو checkbox (علاقه‌مندی) و دو radio با یک name مشترک (برای یک سؤال بله/خیر)."
    },
    {
     "title": "Select و Textarea",
     "content": "<p><code class='inline'>&lt;select&gt;</code> یک منوی کشویی می‌سازه؛ هر گزینه داخل <code class='inline'>&lt;option&gt;</code> نوشته می‌شه. <code class='inline'>&lt;textarea&gt;</code> برای متن چندخطی (مثل پیام تماس) استفاده می‌شه — برخلاف input، تگ بسته داره.</p>",
     "code": {
      "html": "<label for=\"city\">شهر:</label>\n<select id=\"city\">\n  <option value=\"thr\">تهران</option>\n  <option value=\"isf\">اصفهان</option>\n  <option value=\"shz\">شیراز</option>\n</select>\n<br><br>\n<label for=\"msg\">پیام:</label><br>\n<textarea id=\"msg\" rows=\"4\" cols=\"30\" placeholder=\"پیامت رو بنویس...\"></textarea>",
      "css": "",
      "js": ""
     },
     "exercise": "یک select با حداقل ۴ گزینهٔ شهر و یک textarea با placeholder مناسب برای فرم تماس بساز."
    },
    {
     "title": "Audio، Video و iframe",
     "content": "<p><code class='inline'>&lt;audio controls&gt;</code> و <code class='inline'>&lt;video controls&gt;</code> پخش‌کنندهٔ صدا/ویدیوی داخلی مرورگر رو نشون می‌دن؛ ویژگی <code class='inline'>controls</code> دکمه‌های پخش/توقف رو اضافه می‌کنه. <code class='inline'>&lt;iframe&gt;</code> یک صفحهٔ کامل دیگه (مثلاً یه نقشه یا ویدیوی یوتیوب) رو داخل صفحهٔ خودتون embed می‌کنه.</p>",
     "code": {
      "html": "<video controls width=\"280\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  مرورگر شما از ویدیو پشتیبانی نمی‌کند.\n</video>\n<br><br>\n<iframe width=\"280\" height=\"160\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" title=\"ویدیوی نمونه\"></iframe>",
      "css": "",
      "js": ""
     },
     "exercise": "توضیح بده چه زمانی باید از video استفاده کنی (فایل خودت) و چه زمانی از iframe (محتوای یک سرویس دیگه مثل یوتیوب یا گوگل‌مپ)."
    },
    {
     "title": "اعتبارسنجی فرم با HTML خالص",
     "content": "<p>پیش از نوشتن حتی یک خط جاوااسکریپت، HTML خودش ابزار اعتبارسنجی داره: <code class='inline'>required</code> فیلد رو اجباری می‌کنه، <code class='inline'>minlength</code>/<code class='inline'>maxlength</code> طول متن رو محدود می‌کنه، <code class='inline'>pattern</code> یک قالب مشخص (با regex) رو اجباری می‌کنه، و <code class='inline'>min</code>/<code class='inline'>max</code> برای اعداد بازه تعیین می‌کنه. مرورگر خودش قبل از ارسال فرم، این‌ها رو چک و پیام خطای مناسب نشون می‌ده.</p>",
     "code": {
      "html": "<form>\n  <label>نام کاربری (فقط حروف انگلیسی، حداقل ۳ کاراکتر):</label>\n  <input type=\"text\" required minlength=\"3\" pattern=\"[A-Za-z]+\">\n  <br><br>\n  <label>کد پستی (۵ رقم):</label>\n  <input type=\"text\" pattern=\"[0-9]{5}\" required>\n  <br><br>\n  <button type=\"submit\">ثبت‌نام</button>\n</form>",
      "css": "",
      "js": ""
     },
     "exercise": "یک فرم ثبت‌نام بساز با: نام (required)، سن (number با min=18)، و رمز عبور (minlength=8) — همه با اعتبارسنجی خالص HTML، بدون جاوااسکریپت."
    },
    {
     "title": "Fieldset و Legend: گروه‌بندی معنادار فیلدها",
     "content": "<p><code class='inline'>&lt;fieldset&gt;</code> چند ورودی مرتبط را در یک گروه بصری/معنایی قرار می‌دهد (مثلاً «اطلاعات پرداخت»)؛ <code class='inline'>&lt;legend&gt;</code> عنوان آن گروه را مشخص می‌کند. این برای فرم‌های بلند خیلی به خوانایی و دسترسی‌پذیری کمک می‌کند.</p>",
     "code": {
      "html": "<form>\n  <fieldset>\n    <legend>اطلاعات شخصی</legend>\n    <label>نام: <input type=\"text\"></label><br>\n    <label>سن: <input type=\"number\"></label>\n  </fieldset>\n  <fieldset>\n    <legend>اطلاعات تماس</legend>\n    <label>ایمیل: <input type=\"email\"></label>\n  </fieldset>\n</form>",
      "css": "",
      "js": ""
     },
     "exercise": "فرم ثبت‌نام قبلی رو با دوتا fieldset جدا کن: یکی «اطلاعات شخصی» و یکی «امنیت حساب» (شامل رمز عبور)."
    },
    {
     "title": "Details و Summary: آکاردئون بدون جاوااسکریپت",
     "content": "<p><code class='inline'>&lt;details&gt;</code> یک بخش قابل باز/بسته‌شدن می‌سازد که کاربر با کلیک روی <code class='inline'>&lt;summary&gt;</code> (عنوان همیشه‌قابل‌مشاهده) آن را باز یا بسته می‌کند — کاملاً بومی مرورگر، بدون نیاز به هیچ جاوااسکریپتی. عالی برای بخش سؤالات متداول (FAQ).</p>",
     "code": {
      "html": "<details>\n  <summary>این دوره چقدر طول می‌کشد؟</summary>\n  <p>بستگی به سرعت یادگیری خودت داره؛ بین چند هفته تا چند ماه.</p>\n</details>\n<details open>\n  <summary>این یکی از اول بازه (open)</summary>\n  <p>چون attribute مقدار open داره.</p>\n</details>",
      "css": "",
      "js": ""
     },
     "exercise": "سه تا details/summary برای یک بخش FAQ بساز (سه سؤال متفاوت با جوابشون)."
    },
    {
     "title": "Datalist، Progress و Meter",
     "content": "<p><code class='inline'>&lt;datalist&gt;</code> به یک input پیشنهاد خودکار (autocomplete) می‌دهد — کاربر می‌تواند تایپ کند یا از لیست انتخاب کند. <code class='inline'>&lt;progress&gt;</code> پیشرفت یک کار را نشان می‌دهد (مثل درصد آپلود فایل)، و <code class='inline'>&lt;meter&gt;</code> یک مقدار را در یک بازهٔ مشخص (مثلاً امتیاز یا ظرفیت باتری) نشان می‌دهد.</p>",
     "code": {
      "html": "<label>شهر:</label>\n<input list=\"cities\">\n<datalist id=\"cities\">\n  <option value=\"تهران\">\n  <option value=\"اصفهان\">\n  <option value=\"شیراز\">\n</datalist>\n<br><br>\n<label>پیشرفت آپلود:</label>\n<progress value=\"70\" max=\"100\"></progress>\n<br><br>\n<label>امتیاز:</label>\n<meter value=\"8\" min=\"0\" max=\"10\"></meter>",
      "css": "",
      "js": ""
     },
     "exercise": "یک input با datalist برای انتخاب زبان برنامه‌نویسی (حداقل ۴ گزینه) بساز، به‌همراه یک progress که ۴۵٪ پر شده باشه."
    }
   ],
   "quiz": [
    {
     "q": "هر ردیف در جدول HTML با کدام تگ ساخته می‌شود؟",
     "options": [
      "<td>",
      "<row>",
      "<tr>",
      "<th>"
     ],
     "answer": 2,
     "explain": "tr مخفف table row است."
    },
    {
     "q": "کدام تگ برای ناوبری اصلی سایت مناسب‌تر است؟",
     "options": [
      "<div class=\"nav\">",
      "<nav>",
      "<section>",
      "<aside>"
     ],
     "answer": 1,
     "explain": "nav یک تگ سمانتیک اختصاصی برای منوهای ناوبری است."
    },
    {
     "q": "چرا استفاده از تگ‌های سمانتیک به سئو کمک می‌کند؟",
     "options": [
      "سرعت سایت را زیاد می‌کنند",
      "ساختار محتوا را برای موتور جستجو قابل‌فهم‌تر می‌کنند",
      "رنگ صفحه را بهتر می‌کنند",
      "حجم فایل را کم می‌کنند"
     ],
     "answer": 1,
     "explain": "موتورهای جستجو با تگ‌های معنادار بهتر می‌فهمند کدام بخش چه نقشی دارد."
    },
    {
     "q": "برای انتخاب چند گزینه هم‌زمان (نه فقط یکی) از کدام نوع input استفاده می‌شود؟",
     "options": [
      "radio",
      "checkbox",
      "select",
      "date"
     ],
     "answer": 1,
     "explain": "checkbox اجازهٔ انتخاب چندتایی می‌دهد؛ radio فقط یکی از گزینه‌های هم‌نام را قبول می‌کند."
    },
    {
     "q": "ویژگی required روی یک input چه کاری می‌کند؟",
     "options": [
      "فیلد را غیرفعال می‌کند",
      "مرورگر قبل از ارسال فرم، پرشدن آن فیلد را اجباری می‌کند",
      "نوع فیلد را تغییر می‌دهد",
      "استایل فیلد را عوض می‌کند"
     ],
     "answer": 1,
     "explain": "required یکی از ابزارهای اعتبارسنجی بومی HTML است، بدون نیاز به جاوااسکریپت."
    }
   ],
   "challenge": {
    "task": "یک فرم ثبت‌نام رویداد بساز که شامل: نام (text, required)، ایمیل (email, required)، سن (number, min=12، max=100)، select برای انتخاب شهر (حداقل ۴ گزینه)، دو checkbox برای علاقه‌مندی، و textarea برای توضیحات اضافه باشه. همه چیز باید با اعتبارسنجی خالص HTML کار کنه.",
    "hint1": "هر ورودی رو با یک label مرتبط (for/id) شروع کن. برای اعتبارسنجی، فقط کافیه attributeهای required/min/max/pattern رو درست بذاری، جاوااسکریپت لازم نیست.",
    "hint2": "برای select، هر گزینه یک option جداست با یک value منحصربه‌فرد. برای دوتا checkbox جدا (نه radio)، هرکدوم name جدا داشته باشن چون هردو می‌تونن انتخاب بشن.",
    "solution": "<form>\n  <label for=\"name\">نام:</label>\n  <input id=\"name\" type=\"text\" required>\n\n  <label for=\"email\">ایمیل:</label>\n  <input id=\"email\" type=\"email\" required>\n\n  <label for=\"age\">سن:</label>\n  <input id=\"age\" type=\"number\" min=\"12\" max=\"100\">\n\n  <label for=\"city\">شهر:</label>\n  <select id=\"city\">\n    <option>تهران</option>\n    <option>مشهد</option>\n    <option>تبریز</option>\n    <option>شیراز</option>\n  </select>\n\n  <label><input type=\"checkbox\" name=\"music\"> موسیقی</label>\n  <label><input type=\"checkbox\" name=\"art\"> هنر</label>\n\n  <label for=\"notes\">توضیحات:</label>\n  <textarea id=\"notes\"></textarea>\n\n  <button type=\"submit\">ثبت‌نام</button>\n</form>"
   }
  },
  {
   "lessons": [
    {
     "title": "متا تگ‌ها، سئوی پایه و دسترسی‌پذیری",
     "content": "<p>تگ‌های <code class='inline'>&lt;meta&gt;</code> در head اطلاعاتی مثل توضیح صفحه برای گوگل (<code class='inline'>description</code>) یا تنظیم ریسپانسیو (<code class='inline'>viewport</code>) را مشخص می‌کنند.</p><p>برای دسترسی‌پذیری بهتر: از ویژگی‌های <code class='inline'>aria-label</code>، ترتیب منطقی هدینگ‌ها (h1 → h2 → h3) و کنتراست رنگ مناسب استفاده کنید. عناصر تعاملی باید با کیبورد هم قابل استفاده باشند.</p>",
     "code": {
      "html": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"وبلاگ آموزش برنامه‌نویسی\">\n  <title>وبلاگ من</title>\n</head>",
      "css": "",
      "js": ""
     },
     "exercise": "یک متا description مناسب برای صفحهٔ شخصی خودتان بنویسید (حداکثر ۱۵۵ کاراکتر)."
    },
    {
     "title": "HTML5 و ویژگی‌های کاربردی",
     "content": "<p>HTML5 امکانات جدیدی مثل <code class='inline'>&lt;video&gt;</code>، <code class='inline'>&lt;audio&gt;</code> و <code class='inline'>&lt;canvas&gt;</code> (برای رسم گرافیک با جاوااسکریپت) اضافه کرد.</p><p>ویژگی‌های <code class='inline'>data-*</code> اجازه می‌دهند داده‌های سفارشی روی عنصر ذخیره کنید و بعداً با جاوااسکریپت بخوانید؛ این پایهٔ ساخت وب‌اپلیکیشن‌های تعاملی است.</p>",
     "code": {
      "html": "<video controls width=\"300\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>\n<div data-user-id=\"42\" id=\"card\">کارت کاربر</div>",
      "css": "",
      "js": "console.log(document.getElementById('card').dataset.userId);"
     },
     "exercise": "یک عنصر div با ویژگی data-price بسازید و مقدارش را با console.log در جاوااسکریپت چاپ کنید."
    },
    {
     "title": "Open Graph: چطور لینک سایتت توی توییتر/واتساپ قشنگ دیده بشه",
     "content": "<p>وقتی لینک یک سایت رو توی تلگرام، واتساپ یا توییتر می‌فرستید، اون کارت پیش‌نمایش با عکس/عنوان/توضیح از کجا میاد؟ از تگ‌های <b>Open Graph</b> که در head صفحه قرار می‌گیرن.</p>",
     "code": {
      "html": "<head>\n  <meta property=\"og:title\" content=\"وبلاگ آموزش برنامه‌نویسی\">\n  <meta property=\"og:description\" content=\"آموزش HTML، CSS و جاوااسکریپت از صفر\">\n  <meta property=\"og:image\" content=\"https://example.com/cover.jpg\">\n  <meta property=\"og:url\" content=\"https://example.com\">\n</head>",
      "css": "",
      "js": ""
     },
     "exercise": "چهار تگ og برای یک صفحهٔ فرضی محصول (og:title، og:description، og:image، og:url) با محتوای واقعی بنویس."
    },
    {
     "title": "Accessibility عمیق‌تر: نقش‌های ARIA",
     "content": "<p>وقتی یک تگ سمانتیک مناسب وجود نداره (مثلاً یه منوی تب سفارشی با div/button ساخته شده)، ویژگی‌های <b>ARIA</b> به screen readerها کمک می‌کنن نقش و وضعیت عنصر رو بفهمن: <code class='inline'>role=\"button\"</code>، <code class='inline'>aria-expanded=\"true/false\"</code> (باز/بسته بودن یک آکاردئون)، <code class='inline'>aria-hidden=\"true\"</code> (مخفی‌کردن از screen reader ولی نه از چشم).</p><p><b>قانون طلایی:</b> همیشه اول تگ سمانتیک درست (button، nav، و...) رو امتحان کن؛ ARIA فقط وقتی لازمه که واقعاً چاره‌ای نیست.</p>",
     "code": {
      "html": "<button aria-expanded=\"false\" aria-controls=\"panel1\">توضیحات بیشتر</button>\n<div id=\"panel1\" role=\"region\">اینجا محتوای پنهان‌شونده قرار می‌گیرد.</div>",
      "css": "",
      "js": ""
     },
     "exercise": "توضیح بده چرا استفاده از <button> واقعی برای یک دکمه بهتر از <div onclick=...> با role=\"button\" است."
    },
    {
     "title": "HTML Validation و رفع خطاهای رایج",
     "content": "<p>کد نامعتبر HTML (مثل تگ بسته‌نشده، تودرتویی اشتباه، یا ویژگی تکراری) باعث رفتار غیرقابل‌پیش‌بینی در مرورگرهای مختلف می‌شود. ابزار رسمی <b>W3C Markup Validator</b> کد شما را چک می‌کند و خطاها را دقیقاً نشان می‌دهد.</p><p>خطاهای رایج: فراموش‌کردن <code class='inline'>alt</code> روی img، تودرتوکردن اشتباه (مثلاً p داخل p)، استفاده از یک id تکراری در چند عنصر، و فراموش‌کردن بستن تگ‌ها.</p>",
     "code": {
      "html": "<!-- نسخهٔ اشتباه: -->\n<!-- <p>یک متن <p>متن تودرتو</p></p> -->\n\n<!-- نسخهٔ درست: -->\n<p>یک متن</p>\n<p>متن دوم، نه تودرتو</p>",
      "css": "",
      "js": ""
     },
     "exercise": "یک تکه HTML با ۳ خطای عمدی (id تکراری، تگ بسته‌نشده، alt فراموش‌شده) بنویس، بعد خودت هر سه رو پیدا و درست کن."
    },
    {
     "title": "Picture و srcset: تصاویر واقعاً ریسپانسیو",
     "content": "<p>یک img ساده همیشه همون فایل رو برای همه صفحه‌نمایش‌ها می‌فرسته — حتی موبایل کوچیک. با ویژگی <code class='inline'>srcset</code> می‌تونی چند نسخه با عرض‌های مختلف بدی و بذاری مرورگر بر اساس اندازهٔ صفحه، بهترین رو انتخاب کنه. تگ <code class='inline'>&lt;picture&gt;</code> کنترل بیشتری می‌ده: می‌تونی فرمت‌های متفاوت (مثل WebP با fallback به JPG) یا حتی تصویر کاملاً متفاوت برای موبایل تعریف کنی.</p>",
     "code": {
      "html": "<img src=\"small.jpg\" srcset=\"small.jpg 480w, medium.jpg 800w, large.jpg 1200w\" sizes=\"(max-width: 600px) 480px, 800px\" alt=\"منظرهٔ کوهستان\">\n\n<picture>\n  <source srcset=\"photo.webp\" type=\"image/webp\">\n  <source srcset=\"photo.jpg\" type=\"image/jpeg\">\n  <img src=\"photo.jpg\" alt=\"تصویر محصول\">\n</picture>",
      "css": "",
      "js": ""
     },
     "exercise": "توضیح بده چرا فرستادن یک تصویر ۲ مگابایتی به یک گوشی موبایل با صفحهٔ کوچیک، هم برای کاربر هم برای سئو (سرعت صفحه) بده، و srcset چطور این مشکل رو حل می‌کنه."
    },
    {
     "title": "جدول پیشرفته: caption، colgroup، thead/tbody/tfoot",
     "content": "<p>یک جدول حرفه‌ای فقط tr/td نیست: <code class='inline'>&lt;caption&gt;</code> عنوان جدول رو برای screen readerها و خواننده مشخص می‌کنه، <code class='inline'>&lt;thead&gt;</code>/<code class='inline'>&lt;tbody&gt;</code>/<code class='inline'>&lt;tfoot&gt;</code> جدول رو به سربرگ/بدنه/پابرگ معنایی تقسیم می‌کنن (مفید برای جدول‌های بلند و استایل‌دهی)، و <code class='inline'>&lt;colgroup&gt;</code>/<code class='inline'>&lt;col&gt;</code> اجازه می‌ده به کل یک ستون (نه هر سلول جدا) استایل بدی.</p>",
     "code": {
      "html": "<table>\n  <caption>گزارش فروش فصلی</caption>\n  <colgroup>\n    <col style=\"background:#f5f5f5\">\n    <col span=\"2\">\n  </colgroup>\n  <thead>\n    <tr><th>ماه</th><th>فروش</th><th>سود</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>فروردین</td><td>۱۰۰</td><td>۲۰</td></tr>\n    <tr><td>اردیبهشت</td><td>۱۲۰</td><td>۳۰</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>مجموع</td><td>۲۲۰</td><td>۵۰</td></tr>\n  </tfoot>\n</table>",
      "css": "",
      "js": ""
     },
     "exercise": "یک جدول گزارش نمرات با caption، thead (نام/درس/نمره)، tbody (۳ ردیف) و tfoot (میانگین) بساز."
    }
   ],
   "quiz": [
    {
     "q": "کدام متا تگ باعث می‌شود صفحه در موبایل درست نمایش داده شود؟",
     "options": [
      "meta charset",
      "meta viewport",
      "meta description",
      "meta keywords"
     ],
     "answer": 1,
     "explain": "viewport تنظیم می‌کند صفحه بر اساس عرض دستگاه مقیاس شود."
    },
    {
     "q": "ویژگی‌های data-* برای چه استفاده می‌شوند؟",
     "options": [
      "استایل‌دهی",
      "ذخیرهٔ داده سفارشی قابل خواندن با JS",
      "تعیین زبان صفحه",
      "بارگذاری سریع‌تر تصاویر"
     ],
     "answer": 1,
     "explain": "می‌توان با element.dataset به این مقادیر در جاوااسکریپت دسترسی داشت."
    },
    {
     "q": "کدام گزینه به بهبود دسترسی‌پذیری (accessibility) کمک می‌کند؟",
     "options": [
      "استفاده از رنگ‌های کم‌کنتراست",
      "ترتیب منطقی هدینگ‌ها و aria-label",
      "حذف alt از تصاویر",
      "استفاده فقط از div"
     ],
     "answer": 1,
     "explain": "ترتیب صحیح هدینگ‌ها و برچسب‌های aria به ابزارهای کمکی کمک می‌کند صفحه را درست بخوانند."
    },
    {
     "q": "تگ‌های Open Graph (og:*) اصلی‌ترین کاربردشون چیه؟",
     "options": [
      "افزایش سرعت سایت",
      "کنترل ظاهر پیش‌نمایش لینک هنگام اشتراک‌گذاری در شبکه‌های اجتماعی",
      "رمزنگاری داده",
      "تعریف فونت صفحه"
     ],
     "answer": 1,
     "explain": "شبکه‌های اجتماعی از این تگ‌ها برای ساخت کارت پیش‌نمایش لینک استفاده می‌کنند."
    },
    {
     "q": "طبق قانون طلایی ARIA، چه زمانی باید از ویژگی‌های ARIA استفاده کرد؟",
     "options": [
      "همیشه، روی همهٔ عناصر",
      "فقط وقتی تگ سمانتیک مناسبی برای اون نقش وجود نداره",
      "فقط برای تصاویر",
      "هیچ‌وقت، منسوخ شده"
     ],
     "answer": 1,
     "explain": "اول باید سراغ تگ سمانتیک درست رفت؛ ARIA مکمل است نه جایگزین اول."
    }
   ],
   "challenge": {
    "task": "یه صفحهٔ محصول فرضی بساز که کامل برای اشتراک‌گذاری و سئو آماده باشه: title و meta description مناسب، ۴ تگ Open Graph (title/description/image/url)، و یه دکمهٔ 'توضیحات بیشتر' که با aria-expanded وضعیتش رو نشون بده (نیازی به جاوااسکریپت واقعی نیست، فقط attributeها رو درست بذار).",
    "hint1": "اول head رو کامل کن: title، meta description، بعد چهارتا og:. بعد برو سراغ بدنهٔ صفحه.",
    "hint2": "دکمه باید aria-expanded=\"false\" داشته باشه (چون پیش‌فرض بسته‌ست) و aria-controls به id همون پنل اشاره کنه.",
    "solution": "<head>\n  <title>نام محصول | فروشگاه ما</title>\n  <meta name=\"description\" content=\"توضیح کوتاه محصول برای گوگل\">\n  <meta property=\"og:title\" content=\"نام محصول\">\n  <meta property=\"og:description\" content=\"توضیح برای شبکهٔ اجتماعی\">\n  <meta property=\"og:image\" content=\"https://example.com/product.jpg\">\n  <meta property=\"og:url\" content=\"https://example.com/product\">\n</head>\n<body>\n  <h1>نام محصول</h1>\n  <button aria-expanded=\"false\" aria-controls=\"details\">توضیحات بیشتر</button>\n  <div id=\"details\">جزئیات کامل محصول...</div>\n</body>"
   }
  },
  {
   "lessons": [
    {
     "title": "Web Components: ساخت عنصر HTML سفارشی",
     "content": "<p>سایت‌های بزرگ (مثل اپل) رابط کاربری را از قطعات کوچک و مستقل به نام <b>کامپوننت</b> می‌سازند. Web Components استانداردی مرورگرمحور برای همین کار است، بدون نیاز به هیچ فریم‌ورکی.</p><p><code class='inline'>customElements.define('my-tag', class extends HTMLElement {...})</code> یک تگ HTML کاملاً جدید می‌سازد. <b>Shadow DOM</b> (با <code class='inline'>attachShadow</code>) استایل و مارک‌آپ کامپوننت را از بقیهٔ صفحه ایزوله می‌کند تا CSS آن با بقیهٔ سایت تداخل نکند.</p>",
     "code": {
      "html": "<my-badge text=\"پرمیوم\"></my-badge>\n<my-badge text=\"جدید\"></my-badge>",
      "css": "",
      "js": "class MyBadge extends HTMLElement {\n  connectedCallback() {\n    const text = this.getAttribute('text') || 'برچسب';\n    const shadow = this.attachShadow({ mode: 'open' });\n    shadow.innerHTML =\n      '<style>span{background:#8B7CF6;color:#fff;padding:6px 14px;border-radius:20px;font-family:sans-serif;margin-left:6px;display:inline-block;}</style>' +\n      '<span>' + text + '</span>';\n  }\n}\ncustomElements.define('my-badge', MyBadge);"
     },
     "exercise": "یک Web Component به نام my-card بسازید که یک عنوان و یک متن را به‌عنوان attribute بگیرد و آن‌ها را داخل یک کارت با Shadow DOM نمایش دهد."
    },
    {
     "title": "بهینه‌سازی عملکرد و Core Web Vitals در HTML",
     "content": "<p>سایت‌های سنگین (پر از تصویر و ویدیو) برای سریع‌ماندن از چند تکنیک استفاده می‌کنند: <code class='inline'>loading=\"lazy\"</code> روی تصاویر (بارگذاری فقط وقتی نزدیک دیدرس کاربر می‌شوند)، <code class='inline'>defer</code>/<code class='inline'>async</code> روی اسکریپت‌ها (جلوگیری از بلاک‌شدن رندر صفحه)، و <code class='inline'>&lt;link rel=\"preconnect\"&gt;</code> برای برقراری زودهنگام اتصال به سرورهای مهم.</p><p>API مرورگری <code class='inline'>IntersectionObserver</code> اجازه می‌دهد خودتان دقیقاً تشخیص دهید چه زمانی یک عنصر وارد صفحهٔ دید کاربر شده است — پایهٔ لود تنبل (lazy load) سفارشی.</p>",
     "code": {
      "html": "<div style=\"height:200px;overflow:auto;border:1px solid #ccc;padding:10px;\">\n  <div style=\"height:300px;\">اسکرول کن پایین ⬇️</div>\n  <div id=\"target\" style=\"height:100px;background:#5FD3A0;\">هدف مشاهده</div>\n</div>\n<p id=\"status\">در انتظار ورود عنصر هدف به دید...</p>",
      "css": "",
      "js": "const target = document.getElementById('target');\nconst status = document.getElementById('status');\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      status.textContent = '✅ عنصر دیده شد! الان زمان بارگذاری تصویر واقعی است.';\n    }\n  });\n});\nobserver.observe(target);"
     },
     "exercise": "در پروژهٔ واقعی خودتان همهٔ تصاویر پایین صفحه را loading=\"lazy\" کنید و یک preconnect برای فونت گوگل اضافه کنید."
    },
    {
     "title": "Template و Slot در Web Components",
     "content": "<p>تگ <code class='inline'>&lt;template&gt;</code> یک تکه HTML رو تعریف می‌کنه که مرورگر آن را رندر نمی‌کند تا وقتی با جاوااسکریپت کلون و استفاده بشه — عالی برای الگوهای تکرارشونده (مثل کارت محصول). <code class='inline'>&lt;slot&gt;</code> داخل یک Web Component جایی رو مشخص می‌کنه که محتوای دلخواه کاربرِ کامپوننت می‌تونه توش قرار بگیره.</p>",
     "code": {
      "html": "<template id=\"cardTemplate\">\n  <style>.card{border:1px solid #ccc;padding:10px;border-radius:8px;}</style>\n  <div class=\"card\"><slot></slot></div>\n</template>\n<div id=\"output\"></div>",
      "css": "",
      "js": "const tpl = document.getElementById('cardTemplate');\nconst clone = tpl.content.cloneNode(true);\ndocument.getElementById('output').appendChild(clone);"
     },
     "exercise": "یک template بساز که یک کارت با آیکون و متن نشون بده، بعد دو نسخهٔ متفاوت از اون رو با محتوای مختلف clone کن و به صفحه اضافه کن."
    },
    {
     "title": "Lifecycle Callbacks در Custom Elements",
     "content": "<p>یک Custom Element چند متد ویژه داره که مرورگر خودش در لحظات مشخص صداشون می‌زنه: <code class='inline'>connectedCallback</code> (وقتی عنصر به صفحه اضافه می‌شه)، <code class='inline'>disconnectedCallback</code> (وقتی حذف می‌شه)، <code class='inline'>attributeChangedCallback</code> (وقتی یکی از attributeهای مشخص‌شده تغییر می‌کنه).</p>",
     "code": {
      "html": "<my-timer></my-timer>",
      "css": "",
      "js": "class MyTimer extends HTMLElement {\n  connectedCallback() {\n    this.textContent = 'زمان: 0';\n    this.count = 0;\n    this.interval = setInterval(() => {\n      this.count++;\n      this.textContent = 'زمان: ' + this.count;\n    }, 1000);\n  }\n  disconnectedCallback() {\n    clearInterval(this.interval);\n    console.log('تایمر پاک شد و متوقف شد');\n  }\n}\ncustomElements.define('my-timer', MyTimer);"
     },
     "exercise": "توضیح بده چرا پاک‌کردن setInterval داخل disconnectedCallback مهمه و اگه این کار رو نکنیم چه مشکلی (Memory Leak) پیش میاد."
    },
    {
     "title": "Dialog: مودال بومی HTML بدون هیچ کتابخانه",
     "content": "<p>تا چند سال پیش، ساخت یک پنجرهٔ مودال (popup) نیاز به کتابخانه و کد پیچیده داشت. حالا تگ <code class='inline'>&lt;dialog&gt;</code> این کار رو بومی انجام می‌ده: با متد <code class='inline'>.showModal()</code> باز می‌شه (پس‌زمینهٔ صفحه غیرفعال و تیره می‌شه)، و با <code class='inline'>.close()</code> بسته می‌شه. حتی دکمهٔ Esc خودکار کار می‌کنه!</p>",
     "code": {
      "html": "<button id=\"openBtn\">باز کردن مودال</button>\n<dialog id=\"myDialog\">\n  <p>این یک پنجرهٔ مودال بومیه!</p>\n  <button id=\"closeBtn\">بستن</button>\n</dialog>",
      "css": "",
      "js": "const dialog = document.getElementById('myDialog');\ndocument.getElementById('openBtn').onclick = () => dialog.showModal();\ndocument.getElementById('closeBtn').onclick = () => dialog.close();"
     },
     "exercise": "یک dialog بساز که یه فرم تایید (مثل 'مطمئنی می‌خوای حذف کنی؟' با دو دکمهٔ بله/خیر) نشون بده."
    },
    {
     "title": "Script: تفاوت async، defer و type=module",
     "content": "<p>وقتی مرورگر به یک <code class='inline'>&lt;script&gt;</code> می‌رسه، به‌طور پیش‌فرض رندر صفحه رو متوقف می‌کنه تا اسکریپت دانلود و اجرا بشه — این کند‌کنندهٔ صفحه‌ست. <code class='inline'>defer</code> دانلود رو هم‌زمان با رندر انجام می‌ده ولی اجرا رو تا آخر (بعد از پارس‌شدن کامل HTML) نگه می‌داره؛ <code class='inline'>async</code> دانلود هم‌زمان انجام می‌شه ولی به‌محض آماده‌شدن، فوراً (و بدون ترتیب مشخص نسبت به اسکریپت‌های دیگه) اجرا می‌شه. <code class='inline'>type=\"module\"</code> اجازهٔ استفاده از import/export می‌ده و به‌صورت پیش‌فرض مثل defer رفتار می‌کنه.</p>",
     "code": {
      "html": "<!-- ترتیب اجرا حفظ می‌شه، بعد از پارس HTML -->\n<script src=\"a.js\" defer></script>\n<script src=\"b.js\" defer></script>\n\n<!-- هرکدوم زودتر آماده شد، فوراً اجرا می‌شه (بدون ترتیب تضمینی) -->\n<script src=\"analytics.js\" async></script>\n\n<!-- ماژول ES با import/export -->\n<script type=\"module\" src=\"main.js\"></script>",
      "css": "",
      "js": ""
     },
     "exercise": "توضیح بده برای یک اسکریپت آنالیتیکس (که به بقیهٔ کد وابسته نیست) کدوم گزینه بهتره: async یا defer؟ و برای یک اسکریپتی که باید دقیقاً بعد از یک اسکریپت دیگه اجرا بشه؟"
    },
    {
     "title": "Popover API و inert: رابط‌های شناور بدون جاوااسکریپت",
     "content": "<p>با <code class='inline'>popover</code> می‌شود منو یا tooltip ساخت که خودش باز/بسته می‌شود و با Esc یا کلیک بیرون بسته می‌شود. دکمه با <code class='inline'>popovertarget</code> به آن وصل می‌شود. ویژگی <code class='inline'>inert</code> هم یک بخش از صفحه را از کلیک، فوکوس و screen reader غیرفعال می‌کند (مثلاً پشت یک مودال).</p>",
     "exercise": "یک دکمه بساز که یک popover با منوی سه‌گزینه‌ای باز کند.",
     "code": {
      "html": "<button popovertarget=\"m\">منو</button>\n<div id=\"m\" popover>\n  <p>گزینه ۱</p><p>گزینه ۲</p>\n</div>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "ساختار معنایی و Landmark",
     "content": "<p>تگ‌های <code class='inline'>header</code>، <code class='inline'>nav</code>، <code class='inline'>main</code> (فقط یکی)، <code class='inline'>article</code>، <code class='inline'>section</code>، <code class='inline'>aside</code> و <code class='inline'>footer</code> ناحیه‌های صفحه را برای مرورگر، موتور جستجو و screen reader مشخص می‌کنند. عنوان‌ها را بدون پرش سطح (h1 تا h6) و فقط یک h1 بگذار. <code class='inline'>div</code> را فقط وقتی تگ معنایی مناسب نیست به کار ببر.</p>",
     "exercise": "ساختار یک وبلاگ را فقط با تگ‌های معنایی بنویس.",
     "code": {
      "html": "<header><h1>وبلاگ</h1><nav><a href='#'>خانه</a></nav></header><main><article><h2>مقاله</h2><p>متن</p></article><aside>کناره</aside></main><footer>پا</footer>",
      "css": "body{font-family:sans-serif}header,footer,aside,article{border:1px dashed #8B7CF6;margin:4px;padding:6px}",
      "js": ""
     }
    },
    {
     "title": "فرم‌ها در عمق: Constraint Validation و نوع ورودی",
     "content": "<p>نوع‌های <code class='inline'>email</code>، <code class='inline'>tel</code>، <code class='inline'>url</code>، <code class='inline'>number</code>، <code class='inline'>date</code> کیبورد و اعتبارسنجی مناسب می‌دهند. ویژگی‌های <code class='inline'>required</code>، <code class='inline'>pattern</code>، <code class='inline'>min</code>/<code class='inline'>max</code> و <code class='inline'>minlength</code> اعتبارسنجی بومی‌اند و با <code class='inline'>setCustomValidity</code> پیام دلخواه می‌دهی. <code class='inline'>autocomplete</code> و <code class='inline'>inputmode</code> تجربه‌ی موبایل را بهتر می‌کنند. اعتبارسنجی سمت سرور همیشه لازم است.</p>",
     "exercise": "فرم ثبت‌نام با پیام خطای فارسی بنویس.",
     "code": {
      "html": "<form id='f'><label>ایمیل <input type='email' name='e' required autocomplete='email'></label><label>موبایل <input name='m' pattern='09[0-9]{9}' inputmode='numeric' required></label><button>ارسال</button></form>",
      "css": "form{display:grid;gap:8px;max-width:260px}input{padding:6px}",
      "js": "document.getElementById('f').addEventListener('invalid',e=>{e.target.setCustomValidity('مقدار نامعتبر است')},true);document.getElementById('f').addEventListener('input',e=>e.target.setCustomValidity(''));"
     }
    },
    {
     "title": "دسترسی‌پذیری: نام قابل‌دسترس، ARIA و Live Region",
     "content": "<p>قاعده‌ی اول ARIA: اگر تگ بومی هست، ARIA نگذار. هر کنترل «نام قابل‌دسترس» می‌خواهد (<code class='inline'>label</code>، <code class='inline'>aria-label</code>). <code class='inline'>aria-live</code> تغییرات پویا را اعلام می‌کند (پیام موفقیت)، <code class='inline'>aria-expanded</code> وضعیت باز/بسته و <code class='inline'>aria-current</code> صفحه‌ی فعلی را. لینک «پرش به محتوا» و ترتیب منطقی فوکوس لازم است.</p>",
     "exercise": "یک پیام وضعیت بساز که screen reader آن را بخواند.",
     "code": {
      "html": "<button id='b'>ذخیره</button><p id='s' role='status' aria-live='polite'></p>",
      "css": "button{padding:8px 16px}",
      "js": "document.getElementById('b').onclick=()=>{document.getElementById('s').textContent='ذخیره شد'}"
     }
    },
    {
     "title": "Dialog و Details: مودال و آکاردئون بدون کتابخانه",
     "content": "<p><code class='inline'>&lt;dialog&gt;</code> با <code class='inline'>showModal()</code> مودال واقعی می‌سازد: فوکوس را نگه می‌دارد، با Esc بسته می‌شود و پس‌زمینه (<code class='inline'>::backdrop</code>) دارد. <code class='inline'>&lt;details&gt;</code> و <code class='inline'>&lt;summary&gt;</code> آکاردئون بدون JS است و با ویژگی <code class='inline'>name</code> مشترک فقط یکی باز می‌ماند.</p>",
     "exercise": "یک مودال تأیید حذف با dialog بنویس.",
     "code": {
      "html": "<button id='o'>باز کن</button><dialog id='d'><p>مطمئنی؟</p><form method='dialog'><button>بله</button><button>خیر</button></form></dialog><details name='g'><summary>الف</summary>متن الف</details><details name='g'><summary>ب</summary>متن ب</details>",
      "css": "dialog::backdrop{background:#0006}dialog{border-radius:10px}",
      "js": "document.getElementById('o').onclick=()=>document.getElementById('d').showModal()"
     }
    },
    {
     "title": "تصویر ریسپانسیو: srcset، sizes و picture",
     "content": "<p><code class='inline'>srcset</code> چند اندازه‌ی تصویر و <code class='inline'>sizes</code> عرض نمایش را می‌گوید تا مرورگر کم‌حجم‌ترین مناسب را بگیرد. <code class='inline'>&lt;picture&gt;</code> قالب (AVIF/WebP) یا برش متفاوت (Art Direction) می‌دهد. همیشه <code class='inline'>width</code>/<code class='inline'>height</code> بگذار (CLS)، تصویر زیر خط تا را <code class='inline'>loading='lazy'</code> و تصویر اصلی بالای صفحه را <code class='inline'>fetchpriority='high'</code> کن و <code class='inline'>alt</code> مناسب بنویس.</p>",
     "exercise": "یک تصویر را با سه اندازه و WebP بنویس و CLS را صفر کن.",
     "code": {
      "html": "<picture><source type='image/webp' srcset='a-400.webp 400w, a-800.webp 800w' sizes='(max-width:600px) 100vw, 600px'><img src='a-800.jpg' alt='توضیح تصویر' width='800' height='450' loading='lazy' decoding='async'></picture>",
      "css": "img{max-width:100%;height:auto}",
      "js": ""
     }
    },
    {
     "title": "رسانه: video، audio و زیرنویس",
     "content": "<p><code class='inline'>&lt;video controls&gt;</code> با چند <code class='inline'>source</code> و <code class='inline'>poster</code> و <code class='inline'>&lt;track kind='captions'&gt;</code> زیرنویس (WebVTT) را پشتیبانی می‌کند؛ زیرنویس برای دسترسی‌پذیری لازم است. <code class='inline'>preload='metadata'</code> و <code class='inline'>playsinline</code> مصرف داده را کم می‌کنند و پخش خودکار فقط بی‌صدا (<code class='inline'>muted</code>) مجاز است.</p>",
     "exercise": "یک ویدئو با دو قالب و زیرنویس فارسی تعریف کن.",
     "code": {
      "html": "<video controls preload='metadata' playsinline width='260' poster='p.jpg'><source src='v.webm' type='video/webm'><source src='v.mp4' type='video/mp4'><track kind='captions' srclang='fa' label='فارسی' src='fa.vtt' default></video>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "بارگذاری منابع: defer، async، preload و Module",
     "content": "<p>اسکریپت معمولی رندر را مسدود می‌کند. <code class='inline'>defer</code> پس از پارس HTML و به ترتیب اجرا می‌شود، <code class='inline'>async</code> به محض دانلود (بی‌ترتیب) و <code class='inline'>type='module'</code> مثل defer است. <code class='inline'>preload</code> منبع حیاتی (فونت، تصویر اصلی)، <code class='inline'>preconnect</code> اتصال زودهنگام به دامنه‌ی دیگر و <code class='inline'>fetchpriority</code> اولویت را تنظیم می‌کنند. CSS حیاتی را درون‌خطی کن.</p>",
     "exercise": "ترتیب بارگذاری یک صفحه را با DevTools Network بهینه کن.",
     "code": {
      "html": "<link rel='preload' href='font.woff2' as='font' type='font/woff2' crossorigin><link rel='preconnect' href='https://cdn.example.com'><script src='app.js' defer></script>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "متا، Open Graph و داده‌ی اشتراک‌گذاری",
     "content": "<p><code class='inline'>&lt;title&gt;</code> یکتا و <code class='inline'>meta description</code> برای نتیجه‌ی جستجو، <code class='inline'>link rel='canonical'</code> برای صفحه‌ی اصلی در محتوای تکراری، <code class='inline'>meta viewport</code> برای موبایل و <code class='inline'>lang</code> روی html. Open Graph و Twitter Card عنوان، توضیح و تصویر پیش‌نمایش لینک را در شبکه‌های اجتماعی تعیین می‌کنند. تصویر ۱۲۰۰×۶۳۰ پیشنهاد می‌شود.</p>",
     "exercise": "متای کامل یک مقاله را شامل OG و canonical بنویس.",
     "code": {
      "html": "<title>عنوان صفحه</title><meta name='description' content='توضیح کوتاه'><link rel='canonical' href='https://example.com/a'><meta property='og:title' content='عنوان'><meta property='og:image' content='https://example.com/og.jpg'>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "Web Components: Custom Element، Shadow DOM و Slot",
     "content": "<p>با <code class='inline'>customElements.define</code> تگ جدید می‌سازی. Shadow DOM استایل و ساختار را کپسوله می‌کند و <code class='inline'>&lt;slot&gt;</code> محتوای کاربر را درون قالب می‌گذارد. چرخه‌ی عمر: <code class='inline'>connectedCallback</code> و <code class='inline'>attributeChangedCallback</code>. برای فریم‌ورک‌ها هم کاربردی است ولی SSR و فرم‌ها محدودیت دارند.</p>",
     "exercise": "یک تگ &lt;user-card&gt; با slot نام و عکس بساز.",
     "code": {
      "html": "<user-card><span slot='name'>سارا</span></user-card>",
      "css": "",
      "js": "class UserCard extends HTMLElement{connectedCallback(){const r=this.attachShadow({mode:'open'});r.innerHTML=\"<style>div{padding:12px;border:1px solid #8B7CF6;border-radius:8px}</style><div>👤 <slot name='name'></slot></div>\"}}customElements.define('user-card',UserCard);"
     }
    },
    {
     "title": "امنیت HTML: CSP، SRI، sandbox و rel",
     "content": "<p><code class='inline'>rel='noopener noreferrer'</code> روی لینک <code class='inline'>target='_blank'</code> جلوی دسترسی صفحه‌ی مقصد به صفحه‌ی تو را می‌گیرد. <code class='inline'>integrity</code> (SRI) هش اسکریپت CDN را بررسی می‌کند. <code class='inline'>iframe sandbox</code> محتوای نامعتبر را محدود می‌کند و Content-Security-Policy منبع مجاز اسکریپت را می‌بندد. فرم‌های تغییر وضعیت به توکن CSRF نیاز دارند.</p>",
     "exercise": "یک iframe را با sandbox حداقلی و یک اسکریپت CDN را با SRI بنویس.",
     "code": {
      "html": "<a href='https://example.com' target='_blank' rel='noopener noreferrer'>لینک بیرونی</a><iframe sandbox src='about:blank' title='نمونه'></iframe>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "زبان و بین‌المللی‌سازی: lang، dir، bdi و time",
     "content": "<p><code class='inline'>lang='fa'</code> تلفظ screen reader و فونت را درست می‌کند و <code class='inline'>dir='rtl'</code> جهت متن را می‌دهد. <code class='inline'>&lt;bdi&gt;</code> متن با جهت نامعلوم (نام کاربر لاتین) را ایزوله می‌کند تا چیدمان به‌هم نریزد. <code class='inline'>&lt;time datetime='2026-10-02'&gt;</code> تاریخ ماشین‌خوان می‌دهد و <code class='inline'>Intl</code> قالب شمسی را نشان می‌دهد. بخش‌های با زبان دیگر را با <code class='inline'>lang</code> جدا علامت بزن.</p>",
     "exercise": "نام یک کاربر لاتین را در جمله‌ی فارسی با bdi امن کن.",
     "code": {
      "html": "<p dir='rtl' lang='fa'>کاربر <bdi>John Smith</bdi> در تاریخ <time datetime='2026-10-02'>۱۰ مهر ۱۴۰۵</time> ثبت‌نام کرد.</p>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "PWA پایه: Manifest، Service Worker و آفلاین",
     "content": "<p>PWA سایت را قابل‌نصب و آفلاین می‌کند: <code class='inline'>manifest.webmanifest</code> (نام، آیکن‌ها، <code class='inline'>display: standalone</code>)، HTTPS و Service Worker که درخواست‌ها را رهگیری و کش می‌کند. راهبردها: Cache First (دارایی ثابت)، Network First (داده‌ی تازه) و Stale-While-Revalidate. نسخه‌ی کش را مدیریت کن تا کاربر نسخه‌ی قدیمی نماند.</p>",
     "exercise": "یک Service Worker بنویس که صفحه‌ی آفلاین نشان بدهد.",
     "code": {
      "html": "<link rel='manifest' href='/manifest.webmanifest'><meta name='theme-color' content='#8B7CF6'>",
      "css": "",
      "js": ""
     }
    },
    {
     "title": "Form-Associated Custom Elements: کنترل فرمِ سفارشی",
     "content": "<p>یک <code>&lt;star-rating&gt;</code> معمولی در <code>FormData</code> دیده نمی‌شود. با <code>static formAssociated = true</code> و <code>attachInternals()</code> عنصر سفارشی مثل یک input واقعی در فرم شرکت می‌کند: مقدار با <code>setFormValue</code>، اعتبارسنجی با <code>setValidity</code> و حتی <code>required</code>/<code>reset</code>/<code>disabled</code> کار می‌کنند.</p><pre dir=\"ltr\"><code>class StarRating extends HTMLElement {\n  static formAssociated = true;\n  #i = this.attachInternals();\n  set value(v){ this.#i.setFormValue(v);\n    this.#i.setValidity(v ? {} : {valueMissing:true}, &#x27;امتیاز را انتخاب کن&#x27;); }\n}\ncustomElements.define(&#x27;star-rating&#x27;, StarRating);</code></pre>",
     "exercise": "مقدار اولیه‌ی ۳ بده و ببین فرم معتبر می‌شود.",
     "code": {
      "html": "<form id=\"f\"><star-rating name=\"rate\" required></star-rating></form><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nclass StarRating extends HTMLElement{\n  static formAssociated=true; #i=this.attachInternals();\n  connectedCallback(){this.value=''}\n  set value(v){this._v=v;this.#i.setFormValue(v);this.#i.setValidity(v?{}:{valueMissing:true},'امتیاز را انتخاب کن')}\n  get value(){return this._v}\n  get msg(){return this.#i.validationMessage}\n}\ncustomElements.define('star-rating',StarRating);\nconst f=document.getElementById('f'),el=f.querySelector('star-rating');\nlog('قبل از انتخاب → معتبر؟',f.checkValidity(),'| پیام:',el.msg);\nel.value='4';\nlog('بعد از انتخاب → معتبر؟',f.checkValidity(),'| FormData rate =',new FormData(f).get('rate'));"
     }
    },
    {
     "title": "ویژگی‌های سراسری کم‌شناخته: hidden، translate، dir=auto و ...",
     "content": "<p>همه‌ی عناصر ویژگی‌های سراسری دارند که کمتر استفاده می‌شوند: <code>hidden=\"until-found\"</code> (محتوا مخفی ولی با جستجوی Ctrl+F باز می‌شود)، <code>translate=\"no\"</code> (نام برند ترجمه نشود)، <code>dir=\"auto\"</code> (جهت از اولین حرف قوی تعیین می‌شود؛ عالی برای محتوای کاربر)، <code>contenteditable=\"plaintext-only\"</code>، <code>spellcheck</code> و <code>enterkeyhint</code>.</p><pre dir=\"ltr\"><code>&lt;p dir=&quot;auto&quot;&gt;سلام دنیا&lt;/p&gt;          &lt;!-- rtl --&gt;\n&lt;p dir=&quot;auto&quot;&gt;Hello&lt;/p&gt;              &lt;!-- ltr --&gt;\n&lt;span translate=&quot;no&quot;&gt;Kodestan&lt;/span&gt;\n&lt;div hidden=&quot;until-found&quot;&gt;با جستجو باز می‌شود&lt;/div&gt;</code></pre>",
     "exercise": "یک متن عربی/عبری هم با dir=auto اضافه کن.",
     "code": {
      "html": "<p id=\"a\" dir=\"auto\">سلام دنیا</p><p id=\"b\" dir=\"auto\">Hello world</p><span id=\"c\" translate=\"no\">Kodestan</span><div id=\"d\" contenteditable=\"plaintext-only\">ویرایش</div><div id=\"e\" hidden=\"until-found\">پنهان</div><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst $=i=>document.getElementById(i);\nlog('جهت فارسی با dir=auto:',getComputedStyle($('a')).direction);\nlog('جهت انگلیسی با dir=auto:',getComputedStyle($('b')).direction);\nlog('translate پیش‌فرض:',$('a').translate,'| برند:',$('c').translate);\nlog('plaintext-only ویرایش‌پذیر؟',$('d').isContentEditable,'| مقدار:',$('d').contentEditable);\nlog('hidden=until-found →',$('e').hidden,'(مقدار ویژگی:',$('e').getAttribute('hidden')+')');"
     }
    },
    {
     "title": "inputmode، enterkeyhint و autocomplete: کیبورد درست موبایل",
     "content": "<p>نوع ورودی با «کیبورد» فرق دارد. <code>type=\"number\"</code> برای شماره کارت یا کد پیامک بد است (فلش افزایش، حذف صفر اول). بهتر: <code>type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\"</code>. <code>enterkeyhint</code> برچسب کلید Enter را عوض می‌کند (search/send/next/done). <code>autocomplete</code> با توکن‌های استاندارد (<code>one-time-code</code>, <code>email</code>, <code>tel</code>, <code>new-password</code>) به پر شدن خودکار و مدیر رمز کمک می‌کند.</p><pre dir=\"ltr\"><code>&lt;input type=&quot;text&quot; inputmode=&quot;numeric&quot; pattern=&quot;[0-9]*&quot;\n       autocomplete=&quot;one-time-code&quot; enterkeyhint=&quot;done&quot; maxlength=&quot;6&quot;&gt;\n&lt;input type=&quot;email&quot; autocomplete=&quot;email&quot; enterkeyhint=&quot;next&quot;&gt;\n&lt;input type=&quot;password&quot; autocomplete=&quot;new-password&quot;&gt;</code></pre>",
     "exercise": "برای کد ملی ۱۰ رقمی ویژگی‌های مناسب را بنویس.",
     "code": {
      "html": "<input id=\"otp\" type=\"text\" inputmode=\"numeric\" pattern=\"[0-9]*\" autocomplete=\"one-time-code\" enterkeyhint=\"done\" maxlength=\"6\"><input id=\"em\" type=\"email\" autocomplete=\"email\" enterkeyhint=\"next\"><input id=\"pw\" type=\"password\" autocomplete=\"new-password\"><input id=\"q\" type=\"search\" enterkeyhint=\"search\"><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nfor(const id of ['otp','em','pw','q']){const e=document.getElementById(id);\n log(id.padEnd(4),'type='+e.type,'inputMode='+(e.inputMode||'-'),'enterKeyHint='+(e.enterKeyHint||'-'),'autocomplete='+(e.autocomplete||'-'))}\nconst o=document.getElementById('otp');o.value='012345';\nlog('صفر اول حفظ شد؟',o.value==='012345');\nconst n=document.createElement('input');n.type='number';n.value='012345';\nlog('در type=number مقدار:',n.value,'(صفر اول ممکن است در نمایش حذف شود)');\nlog('pattern معتبر برای abc؟',(o.value='abc',o.checkValidity()));"
     }
    },
    {
     "title": "ویژگی‌های فرم: form=، formaction، formnovalidate و output",
     "content": "<p>دکمه یا input می‌تواند خارج از <code>&lt;form&gt;</code> باشد: <code>form=\"id\"</code>. هر دکمه‌ی ارسال می‌تواند رفتار فرم را برای همان کلیک عوض کند: <code>formaction</code>، <code>formmethod</code>، <code>formtarget</code> و <code>formnovalidate</code> (مثل «ذخیره‌ی پیش‌نویس» بدون اعتبارسنجی). <code>&lt;output for=\"...\"&gt;</code> نتیجه‌ی محاسبه را معنادار اعلام می‌کند. در رویداد submit، <code>e.submitter</code> دکمه‌ی فشرده‌شده است.</p><pre dir=\"ltr\"><code>&lt;form id=&quot;post&quot; action=&quot;/publish&quot;&gt;\n  &lt;input name=&quot;title&quot; required&gt;\n  &lt;button&gt;انتشار&lt;/button&gt;\n  &lt;button formaction=&quot;/draft&quot; formnovalidate&gt;ذخیره‌ی پیش‌نویس&lt;/button&gt;\n&lt;/form&gt;\n&lt;button form=&quot;post&quot; formmethod=&quot;get&quot;&gt;ارسال از بیرون فرم&lt;/button&gt;</code></pre>",
     "exercise": "یک دکمه با formtarget=_blank اضافه کن.",
     "code": {
      "html": "<form id=\"post\" action=\"/publish\" method=\"post\"><input name=\"title\" required><button id=\"pub\">انتشار</button><button id=\"dr\" formaction=\"/draft\" formnovalidate>پیش‌نویس</button></form><button id=\"ext\" form=\"post\" formmethod=\"get\">بیرون فرم</button><form oninput=\"o.value=a.valueAsNumber+b.valueAsNumber\"><input id=\"a\" type=\"number\" value=\"2\"> + <input id=\"b\" type=\"number\" value=\"3\"> = <output id=\"o\" name=\"o\" for=\"a b\">5</output></form><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst f=document.getElementById('post');\nf.addEventListener('submit',e=>{e.preventDefault();log('submit با',e.submitter.id,'→ action=',e.submitter.getAttribute('formaction')||f.getAttribute('action'),'method=',e.submitter.getAttribute('formmethod')||f.method)});\ndocument.getElementById('dr').click();   // نباید required جلوی آن را بگیرد\ndocument.getElementById('pub').click();  // required خالی → submit رخ نمی‌دهد\nlog('انتشار با عنوان خالی blocked شد؟ (باید خط submit برای pub نباشد)');\nf.title.value='سلام';document.getElementById('ext').click();\nconst a=document.getElementById('a');a.value=10;a.dispatchEvent(new Event('input',{bubbles:true}));\nlog('output =',document.getElementById('o').value);"
     }
    },
    {
     "title": "آپلود فایل: accept، capture، multiple و FormData",
     "content": "<p><code>accept</code> فقط یک راهنمای مرورگر است و امنیت نیست؛ نوع و اندازه‌ی فایل را باید در سرور هم بررسی کرد. <code>multiple</code> چند فایل می‌گیرد، <code>capture=\"environment\"</code> در موبایل دوربین را باز می‌کند، <code>webkitdirectory</code> پوشه می‌گیرد. در کلاینت می‌توان <code>input.files</code> را خواند، اندازه را چک کرد و با <code>FormData</code> فرستاد. هرگز به <code>file.type</code> اعتماد مطلق نکن؛ از پسوند و محتوا (magic bytes) هم کمک بگیر.</p><pre dir=\"ltr\"><code>&lt;input type=&quot;file&quot; accept=&quot;image/*,.pdf&quot; multiple capture=&quot;environment&quot;&gt;\nconst ok = [...input.files].filter(f =&gt; f.size &lt;= 2*1024*1024);\nconst fd = new FormData(); ok.forEach(f =&gt; fd.append(&#x27;files&#x27;, f));</code></pre>",
     "exercise": "حد اندازه را ۱ بایت کن و ببین همه رد می‌شوند.",
     "code": {
      "html": "<input id=\"fi\" type=\"file\" accept=\"image/*,.pdf\" multiple><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst input=document.getElementById('fi');\nconst dt=new DataTransfer();\ndt.items.add(new File(['x'.repeat(100)],'a.pdf',{type:'application/pdf'}));\ndt.items.add(new File(['y'.repeat(3000)],'big.png',{type:'image/png'}));\ndt.items.add(new File(['z'],'run.exe',{type:'application/x-msdownload'}));\ninput.files=dt.files;\nconst MAX=2000,allowed=/^(image\\/.+|application\\/pdf)$/;\nconst fd=new FormData();\nfor(const f of input.files){\n  const why=!allowed.test(f.type)?'نوع غیرمجاز':f.size>MAX?'حجم زیاد':null;\n  log(f.name.padEnd(8),f.size+'B',why?'✗ '+why:'✓ قبول'); if(!why)fd.append('files',f);\n}\nlog('تعداد فایل در FormData:',fd.getAll('files').length);\nlog('multiple:',input.multiple,'| accept:',input.accept);"
     }
    },
    {
     "title": "جدول‌های پیچیده و دسترسی‌پذیری: scope و headers",
     "content": "<p>در جدول ساده <code>&lt;th scope=\"col\"&gt;</code> و <code>scope=\"row\"</code> کافی است. در جدول با سرستون ادغام‌شده (<code>colspan</code>/<code>rowspan</code>) باید هر <code>th</code> یک <code>id</code> بگیرد و هر <code>td</code> با <code>headers=\"id1 id2\"</code> به آن‌ها وصل شود تا صفحه‌خوان بگوید «فروردین، تهران: ۱۲۰». <code>&lt;caption&gt;</code> نام جدول است و <code>abbr</code> نسخه‌ی کوتاه سرستون را می‌دهد.</p><pre dir=\"ltr\"><code>&lt;th id=&quot;q1&quot; colspan=&quot;2&quot;&gt;فصل ۱&lt;/th&gt;\n&lt;th id=&quot;tehran&quot; scope=&quot;row&quot;&gt;تهران&lt;/th&gt;\n&lt;td headers=&quot;q1 tehran&quot;&gt;۱۲۰&lt;/td&gt;</code></pre>",
     "exercise": "یک ردیف جدید با سلول headers درست اضافه کن.",
     "code": {
      "html": "<table><caption>فروش فصلی</caption><thead><tr><td></td><th id=\"q1\" colspan=\"2\" scope=\"colgroup\">فصل ۱</th></tr><tr><td></td><th id=\"m1\" headers=\"q1\">فروردین</th><th id=\"m2\" headers=\"q1\">اردیبهشت</th></tr></thead><tbody><tr><th id=\"r1\" scope=\"row\">تهران</th><td headers=\"q1 m1 r1\">120</td><td headers=\"q1 m2 r1\">130</td></tr></tbody></table><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nfor(const td of document.querySelectorAll('td[headers]')){\n  const names=td.headers.split(' ').map(id=>document.getElementById(id).textContent);\n  log('«'+td.textContent+'» ←',names.join(' ، '));\n}\nlog('عنوان جدول:',document.querySelector('caption').textContent);\nconst missing=[...document.querySelectorAll('td[headers]')].filter(td=>td.headers.split(' ').some(id=>!document.getElementById(id)));\nlog('headers شکسته:',missing.length);"
     }
    },
    {
     "title": "SVG درون‌خطی و دسترسی‌پذیری",
     "content": "<p>SVG درون‌خطی برخلاف <code>&lt;img&gt;</code> قابل استایل‌دهی و انیمیشن است، ولی برای صفحه‌خوان باید معرفی شود. برای تصویر معنادار: <code>role=\"img\"</code> + <code>&lt;title&gt;</code> + <code>aria-labelledby</code>. برای تزئینی: <code>aria-hidden=\"true\"</code> و <code>focusable=\"false\"</code>. آیکونِ داخل دکمه نباید خودش برچسب بدهد؛ دکمه نام می‌گیرد.</p><pre dir=\"ltr\"><code>&lt;svg role=&quot;img&quot; aria-labelledby=&quot;t d&quot; viewBox=&quot;0 0 10 10&quot;&gt;\n  &lt;title id=&quot;t&quot;&gt;رشد فروش&lt;/title&gt;\n  &lt;desc id=&quot;d&quot;&gt;نمودار خطی صعودی در ۶ ماه&lt;/desc&gt;\n  &lt;path d=&quot;M0 9 L10 1&quot;/&gt;\n&lt;/svg&gt;\n&lt;button aria-label=&quot;بستن&quot;&gt;&lt;svg aria-hidden=&quot;true&quot; focusable=&quot;false&quot;&gt;…&lt;/svg&gt;&lt;/button&gt;</code></pre>",
     "exercise": "برای SVG یک لوگو، role و نام مناسب بنویس.",
     "code": {
      "html": "<svg id=\"chart\" role=\"img\" aria-labelledby=\"t d\" viewBox=\"0 0 10 10\" width=\"60\"><title id=\"t\">رشد فروش</title><desc id=\"d\">نمودار خطی صعودی در ۶ ماه</desc><path d=\"M0 9 L10 1\" stroke=\"#38bdf8\" fill=\"none\"/></svg><button id=\"btn\" aria-label=\"بستن\"><svg id=\"ic\" aria-hidden=\"true\" focusable=\"false\" width=\"14\" height=\"14\"><path d=\"M0 0L14 14M14 0L0 14\" stroke=\"white\"/></svg></button><pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nfunction name(el){const l=el.getAttribute('aria-labelledby');if(l)return l.split(' ').map(i=>document.getElementById(i).textContent).join(' — ');return el.getAttribute('aria-label')||''}\nlog('نام SVG معنادار:',name(document.getElementById('chart')));\nlog('نام دکمه:',name(document.getElementById('btn')));\nlog('آیکون داخل دکمه تزئینی؟',document.getElementById('ic').getAttribute('aria-hidden')==='true');\nconst bad=[...document.querySelectorAll('svg')].filter(s=>s.getAttribute('aria-hidden')!=='true'&&!name(s));\nlog('SVGهای بدون نام و غیرتزئینی:',bad.length);"
     }
    },
    {
     "title": "پارسر HTML: Doctype، Quirks Mode و اصلاح خودکار",
     "content": "<p>مرورگر HTML خراب را رد نمی‌کند؛ طبق الگوریتم دقیق استاندارد آن را <b>تعمیر</b> می‌کند. بدون <code>&lt;!doctype html&gt;</code> سند وارد Quirks Mode می‌شود و مدل جعبه و ارتفاع‌ها فرق می‌کند. <code>&lt;table&gt;</code> خودکار <code>&lt;tbody&gt;</code> می‌گیرد، <code>&lt;p&gt;</code> با شروع بلاک جدید بسته می‌شود و <code>&lt;div&gt;</code> داخل <code>&lt;p&gt;</code> ممکن نیست. تفاوت منبع و DOM را همیشه با DevTools ببین.</p><pre dir=\"ltr\"><code>&lt;!doctype html&gt;        &lt;!-- CSS1Compat --&gt;\n&lt;p&gt;یک&lt;div&gt;دو&lt;/div&gt;     &lt;!-- p بسته می‌شود؛ div برادر است --&gt;\n&lt;table&gt;&lt;tr&gt;&lt;td&gt;x&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;   &lt;!-- tbody اضافه می‌شود --&gt;</code></pre>",
     "exercise": "به <code>textContent</code> یک رشته‌ی <code>&lt;b&gt;</code> بده و خروجی innerHTML را ببین.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst parse=s=>new DOMParser().parseFromString(s,'text/html');\nconst d1=parse('<!doctype html><p>یک<div>دو</div>');\nlog('بدون خطا:',d1.body.innerHTML);\nconst d2=parse('<table><tr><td>x</td></tr></table>');\nlog('جدول:',d2.body.innerHTML);\nlog('doctype دارد → compatMode =',parse('<!doctype html><p>a').compatMode);\nlog('doctype ندارد → compatMode =',parse('<p>a').compatMode);\nconst el=document.createElement('div');\nel.textContent='<b>سلام</b> & خداحافظ';\nlog('textContent امن→ innerHTML =',el.innerHTML);\nel.innerHTML='<b>سلام</b> &amp; خداحافظ';\nlog('innerHTML → textContent =',el.textContent);"
     }
    },
    {
     "title": "HTML ایمیل: جدول، استایل درون‌خطی و Inliner ساده",
     "content": "<p>کلاینت‌های ایمیل (Outlook، Gmail) موتور رندر ضعیفی دارند: <code>flex</code> و <code>grid</code> و اغلب <code>&lt;style&gt;</code> نادیده گرفته می‌شود. قواعد: چیدمان با <code>&lt;table role=\"presentation\"&gt;</code>، عرض حداکثر ۶۰۰px، استایل <b>درون‌خطی</b>، تصویر با <code>alt</code> و عرض صریح، دکمه با لینک استایل‌شده، و نسخه‌ی متنی جدا. ابزار «inliner» قواعد CSS را به ویژگی style هر عنصر منتقل می‌کند.</p><pre dir=\"ltr\"><code>&lt;table role=&quot;presentation&quot; width=&quot;100%&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;\n  &lt;tr&gt;&lt;td align=&quot;center&quot;&gt;\n    &lt;table role=&quot;presentation&quot; width=&quot;600&quot; style=&quot;max-width:600px&quot;&gt;\n      &lt;tr&gt;&lt;td style=&quot;padding:24px;font-family:Tahoma,Arial&quot;&gt;…&lt;/td&gt;&lt;/tr&gt;</code></pre>",
     "exercise": "قاعده‌ی .muted با color:#94a3b8 اضافه کن و در خروجی ببین.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst css={'.btn':'background:#2563eb;color:#fff;padding:10px 20px;text-decoration:none','p':'margin:0 0 12px;font-size:16px'};\nconst doc=new DOMParser().parseFromString('<table role=\"presentation\"><tr><td><p>سلام</p><a class=\"btn\" href=\"https://example.com\">شروع</a></td></tr></table>','text/html');\nfor(const [sel,decl] of Object.entries(css))\n  doc.querySelectorAll(sel).forEach(e=>{e.setAttribute('style',decl+(e.getAttribute('style')?';'+e.getAttribute('style'):''))});\nlog(doc.body.innerHTML);\nlog('هنوز class باقی مانده (بی‌ضرر):',!!doc.querySelector('.btn'));"
     }
    },
    {
     "title": "روابط لینک و ناوبری: canonical، hreflang، base و rel امن",
     "content": "<p>در <code>&lt;head&gt;</code>: <code>rel=\"canonical\"</code> نسخه‌ی اصلی صفحه را مشخص می‌کند (جلوگیری از محتوای تکراری)، <code>rel=\"alternate\" hreflang=\"fa\"</code> نسخه‌ی زبان‌ها را معرفی می‌کند، <code>&lt;base href&gt;</code> همه‌ی لینک‌های نسبی را تغییر می‌دهد (خطرناک!). روی لینک‌ها: <code>target=\"_blank\"</code> همراه <code>rel=\"noopener\"</code> (به‌طور پیش‌فرض در مرورگرهای مدرن ضمنی است)، <code>nofollow</code>، <code>ugc</code> برای محتوای کاربر و <code>sponsored</code> برای لینک تبلیغاتی.</p><pre dir=\"ltr\"><code>&lt;link rel=&quot;canonical&quot; href=&quot;https://example.com/fa/post&quot;&gt;\n&lt;link rel=&quot;alternate&quot; hreflang=&quot;fa&quot; href=&quot;https://example.com/fa/post&quot;&gt;\n&lt;link rel=&quot;alternate&quot; hreflang=&quot;en&quot; href=&quot;https://example.com/en/post&quot;&gt;\n&lt;a href=&quot;https://other.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer ugc&quot;&gt;</code></pre>",
     "exercise": "یک hreflang=x-default اضافه کن.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0}input,button,select,textarea{padding:6px;margin:3px}pre{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap}table{border-collapse:collapse}td,th{border:1px solid #475569;padding:4px 8px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\nconst page=`<head><link rel=\"canonical\" href=\"https://example.com/fa/post\"><link rel=\"alternate\" hreflang=\"fa\" href=\"https://example.com/fa/post\"><link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/en/post\"></head><body><a id=\"a\" href=\"https://other.com\" target=\"_blank\">بدون rel</a><a href=\"https://ok.com\" target=\"_blank\" rel=\"noopener noreferrer\">امن</a><a href=\"/about\">داخلی</a></body>`;\nconst d=new DOMParser().parseFromString(page,'text/html');\nlog('canonical:',d.querySelector('link[rel=canonical]').href);\nlog('زبان‌ها:',[...d.querySelectorAll('link[rel=alternate][hreflang]')].map(l=>l.hreflang).join(', '));\nconst hasSelf=[...d.querySelectorAll('link[rel=alternate][hreflang]')].some(l=>l.href===d.querySelector('link[rel=canonical]').href);\nlog('canonical در hreflang هست؟',hasSelf);\nfor(const a of d.querySelectorAll('a[target=_blank]'))\n  log(a.textContent+':',/noopener/.test(a.rel)?'✓ امن':'⚠ rel=noopener اضافه کن');"
     }
    }
   ],
   "quiz": [
    {
     "q": "Shadow DOM چه مزیتی برای یک Web Component دارد؟",
     "options": [
      "سرعت اینترنت را بالا می‌برد",
      "استایل و مارک‌آپ کامپوننت را از بقیهٔ صفحه ایزوله می‌کند",
      "SEO سایت را غیرفعال می‌کند",
      "فقط در موبایل کار می‌کند"
     ],
     "answer": 1,
     "explain": "Shadow DOM یک مرز کپسوله‌سازی می‌سازد تا CSS و ساختار داخلی کامپوننت با بقیهٔ صفحه تداخل نکند."
    },
    {
     "q": "ویژگی loading=\"lazy\" روی تگ img چه تاثیری دارد؟",
     "options": [
      "کیفیت تصویر را کم می‌کند",
      "بارگذاری تصویر را تا نزدیک‌شدن به دیدرس کاربر به تعویق می‌اندازد",
      "تصویر را حذف می‌کند",
      "اندازهٔ تصویر را بزرگ می‌کند"
     ],
     "answer": 1,
     "explain": "این باعث کاهش حجم بارگذاری اولیهٔ صفحه و سریع‌ترشدن آن می‌شود."
    },
    {
     "q": "customElements.define اصلی‌ترین کاربردش چیست؟",
     "options": [
      "تعریف یک متغیر CSS",
      "ساخت یک تگ HTML کاملاً جدید و سفارشی",
      "حذف یک تگ از صفحه",
      "تعریف یک فونت جدید"
     ],
     "answer": 1,
     "explain": "این متد پایهٔ Web Components برای ساخت عناصر HTML سفارشی و قابل‌استفادهٔ مجدد است."
    },
    {
     "q": "تگ template چه ویژگی خاصی دارد؟",
     "options": [
      "مثل div معمولی رندر می‌شود",
      "محتوایش تا زمانی که با JS کلون نشود، در صفحه نمایش داده نمی‌شود",
      "فقط برای CSS است",
      "به‌صورت خودکار احضار می‌شود"
     ],
     "answer": 1,
     "explain": "محتوای template غیرفعال است تا زمانی که آگاهانه با جاوااسکریپت استفاده شود."
    },
    {
     "q": "disconnectedCallback در یک Custom Element چه زمانی اجرا می‌شود؟",
     "options": [
      "هنگام ساخت اولیهٔ عنصر",
      "وقتی عنصر از صفحه حذف می‌شود",
      "هر ثانیه یک‌بار",
      "هرگز"
     ],
     "answer": 1,
     "explain": "این متد برای پاک‌سازی منابع (مثل توقف تایمرها) هنگام حذف‌شدن عنصر از DOM استفاده می‌شود."
    },
    {
     "q": "ویژگی popover چه کاری انجام می‌دهد؟",
     "options": [
      "تصویر را بزرگ می‌کند",
      "عنصر شناور بدون جاوااسکریپت می‌سازد",
      "فرم را ارسال می‌کند",
      "فونت را عوض می‌کند"
     ],
     "answer": 1,
     "explain": "با popovertarget دکمه، popover را باز و بسته می‌کند."
    },
    {
     "q": "ویژگی inert چه می‌کند؟",
     "options": [
      "عنصر را حذف می‌کند",
      "بخش را از کلیک، فوکوس و screen reader غیرفعال می‌کند",
      "رنگ را خاکستری می‌کند",
      "سرعت را زیاد می‌کند"
     ],
     "answer": 1,
     "explain": "برای پشت مودال مفید است."
    },
    {
     "q": "کدام روش اسکریپت را بدون مسدود کردن رندر و با حفظ ترتیب اجرا می‌کند؟",
     "options": [
      "defer",
      "async",
      "بدون ویژگی",
      "inline"
     ],
     "answer": 0,
     "explain": "بعد از پارس HTML و به ترتیب."
    },
    {
     "q": "dialog با showModal چه می‌کند؟",
     "options": [
      "مودال واقعی با فوکوس و Esc",
      "فقط مخفی می‌کند",
      "فایل می‌خواند",
      "فرم ارسال می‌کند"
     ],
     "answer": 0,
     "explain": "::backdrop هم دارد."
    },
    {
     "q": "rel=noopener برای چیست؟",
     "options": [
      "جلوگیری از دسترسی صفحه‌ی مقصد به window.opener",
      "سرعت",
      "رنگ",
      "SEO"
     ],
     "answer": 0,
     "explain": "با target=_blank لازم است."
    },
    {
     "q": "bdi برای چیست؟",
     "options": [
      "ایزوله‌کردن متن با جهت نامعلوم",
      "ایجاد جدول",
      "رنگ‌آمیزی",
      "لینک"
     ],
     "answer": 0,
     "explain": "نام لاتین در متن فارسی."
    },
    {
     "q": "برای اینکه یک عنصر سفارشی در FormData دیده شود چه لازم است؟",
     "options": [
      "static formAssociated = true و setFormValue",
      "فقط داشتن ویژگی name",
      "قرار دادن آن در Shadow DOM",
      "استفاده از innerHTML"
     ],
     "answer": 0,
     "explain": "Form-associated custom elements با ElementInternals مقدار و اعتبار را به فرم می‌دهند."
    },
    {
     "q": "برای کد پیامکی ۶ رقمی که صفر اول دارد کدام بهتر است؟",
     "options": [
      "type=text با inputmode=numeric",
      "type=number",
      "type=range",
      "type=date"
     ],
     "answer": 0,
     "explain": "type=number ممکن است صفر اول را از دست بدهد و فلش افزایش دارد؛ inputmode فقط کیبورد را عوض می‌کند."
    },
    {
     "q": "کاربرد formnovalidate روی یک دکمه چیست؟",
     "options": [
      "ارسال بدون اعتبارسنجی مثل ذخیره‌ی پیش‌نویس",
      "غیرفعال کردن دکمه",
      "رمزنگاری فرم",
      "تغییر زبان فرم"
     ],
     "answer": 0,
     "explain": "با این ویژگی کلیک روی آن دکمه اعتبارسنجی را رد می‌کند."
    },
    {
     "q": "چرا accept در input فایل برای امنیت کافی نیست؟",
     "options": [
      "فقط راهنمای مرورگر است و کاربر می‌تواند دورش بزند",
      "چون فقط روی موبایل کار می‌کند",
      "چون فایل‌ها را فشرده می‌کند",
      "چون فقط تصویر می‌پذیرد"
     ],
     "answer": 0,
     "explain": "اعتبارسنجی نوع و اندازه باید سمت سرور هم انجام شود."
    }
   ],
   "challenge": {
    "task": "یک صفحهٔ HTML بساز به اسم profile.html که رزومهٔ خودت باشه: باید شامل یک هدر سمانتیک با نام و عنوان شغلی، یک بخش دربارهٔ من (article)، یک جدول برای مهارت‌ها با سطح هرکدوم، یک فرم تماس ساده (نام/ایمیل/پیام)، و متا description مناسب باشه. هیچ CSS ننویس — فقط HTML خالص.",
    "hint1": "با header سمانتیک شروع کن؛ داخلش h1 برای اسم و p برای عنوان شغلی بذار. بعد main رو باز کن و بقیهٔ بخش‌ها رو داخلش بنویس.",
    "hint2": "برای جدول مهارت‌ها: یک ردیف th برای عنوان ستون‌ها (مهارت / سطح)، بعد هر مهارت یک tr با دو td. برای فرم: هر input باید یک label مرتبط با for/id داشته باشه.",
    "solution": "نمونهٔ ساختار (نه کدِ کامل — بقیه‌شو خودت کامل کن):\n\n<header>\n  <h1>نام تو</h1>\n  <p>فرانت‌اند دولوپر</p>\n</header>\n<main>\n  <article>\n    <h2>دربارهٔ من</h2>\n    <p>...</p>\n  </article>\n  <section>\n    <h2>مهارت‌ها</h2>\n    <table>\n      <tr><th>مهارت</th><th>سطح</th></tr>\n      <tr><td>HTML</td><td>خوب</td></tr>\n    </table>\n  </section>\n  <form>\n    <label for=\"n\">نام</label>\n    <input id=\"n\" type=\"text\">\n  </form>\n</main>"
   }
  }
 ],
 "covers": [
  "تگ و Attribute",
  "ساختار Document (html/head/body)",
  "Heading, Paragraph, Link, Image, Lists",
  "Tables, Forms, Inputها, Button, Select",
  "Semantic HTML",
  "Accessibility",
  "Metadata, Open Graph",
  "Web Components",
  "Performance"
 ],
 "project": {
  "title": "ساخت یک وب‌سایت چندصفحه‌ای واقعی (بدون CSS)",
  "brief": "سه صفحهٔ HTML بساز که به هم لینک باشن: index.html (صفحهٔ اصلی)، about.html (دربارهٔ من)، contact.html (فرم تماس). هدف اینه که ساختار معنایی، فرم استاندارد و لینک‌دهی داخلی رو به‌صورت کامل تمرین کنی — بدون هیچ استایلی.",
  "requirements": [
   "هر صفحه یک <title> و meta description منحصربه‌فرد داشته باشه",
   "هر سه صفحه با nav مشترک به هم لینک باشن",
   "from header/main/footer سمانتیک استفاده کن",
   "contact.html یک فرم واقعی با label برای هر ورودی داشته باشه",
   "حداقل یک تصویر با alt مناسب در about.html باشه",
   "کد رو با W3C Validator چک کنی که خطا نداشته باشه"
  ],
  "hints": [
   "اول ساختار پوشه/فایل‌ها رو بساز، بعد nav مشترک رو یک‌بار بنویس و توی هر سه صفحه کپی کن.",
   "برای اعتبارسنجی، کد صفحه رو توی validator.w3.org/#validate_by_input بذار."
  ]
 }
});
