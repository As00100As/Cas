(window.COURSES=window.COURSES||[]).push({
 "id": "wordpress",
 "name": "وردپرس — از صفر تا توسعهٔ حرفه‌ای",
 "icon": "📰",
 "kind": "theory",
 "desc": "بیش از ۴۰٪ اینترنت با این سیستم ساخته شده — از استفادهٔ روزمره تا نوشتن پلاگین با PHP",
 "covers": [
  "نصب، پیشخوان، نوشته/صفحه، رسانه",
  "قالب، ویرایشگر گوتنبرگ، منو/ویجت، افزونه",
  "ساختار فایل، PHP پایه، Template Hierarchy، The Loop، Child Theme، Hooks",
  "Custom Post Type، ساخت افزونه، WooCommerce، REST API، امنیت و سرعت"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "وردپرس چیست و چرا این‌قدر همه‌جا استفاده می‌شه",
     "content": "<p><b>وردپرس (WordPress)</b> یک <b>CMS (Content Management System)</b> است — سیستمی که اجازه می‌دهد بدون نوشتن کد از صفر، یک سایت کامل (وبلاگ، فروشگاه، سایت شرکتی) بسازید و مدیریت کنید. بیش از ۴۰٪ کل سایت‌های اینترنت (از وبلاگ‌های شخصی تا سایت‌های خبری بزرگ) با وردپرس ساخته شده‌اند. دو نسخه وجود دارد: <b>WordPress.com</b> (سرویس میزبانی‌شده، محدودتر) و <b>WordPress.org</b> (نرم‌افزار متن‌باز که خودتان روی هاست نصب می‌کنید — همان چیزی که در این دوره یاد می‌گیرید و انعطاف کامل دارد).</p>",
     "exercise": "سه سایت معروف که با وردپرس ساخته شده‌اند رو جست‌وجو کن (می‌تونی با افزونه‌های تشخیص تکنولوژی مثل Wappalyzer چک کنی) و بنویس چرا فکر می‌کنی وردپرس رو انتخاب کردن."
    },
    {
     "title": "نصب وردپرس (لوکال و روی هاست)",
     "content": "<p>وردپرس به سه چیز نیاز دارد: <b>PHP</b> (زبانی که وردپرس با آن نوشته شده)، <b>MySQL/MariaDB</b> (دیتابیس)، و یک <b>وب‌سرور</b> (Apache/Nginx). برای یادگیری، معمولاً یک محیط لوکال نصب می‌کنید (مثل <b>Local by Flywheel</b> یا <b>XAMPP</b>) که همهٔ این‌ها را خودکار فراهم می‌کند — نیازی به هاست واقعی برای شروع نیست.</p><div class='code-block'><div class='cb-head'>مراحل نصب دستی (روی هاست واقعی)</div><pre><code>۱. آپلود فایل‌های وردپرس به هاست (از wordpress.org)\n۲. ساخت دیتابیس MySQL خالی\n۳. اجرای wp-config.php و وارد کردن اطلاعات دیتابیس\n۴. رفتن به سایت و تکمیل فرم نصب (اسم سایت، ایمیل ادمین، پسورد)</code></pre></div>",
     "exercise": "توضیح بده چرا وردپرس هم به PHP نیاز داره هم به دیتابیس — هرکدوم دقیقاً چه نقشی دارن (کد در برابر ذخیرهٔ داده)؟"
    },
    {
     "title": "پیشخوان مدیریت (Dashboard)",
     "content": "<p>بعد از ورود به <code class='inline'>yoursite.com/wp-admin</code>، وارد <b>پیشخوان</b> می‌شوید — مرکز کنترل کل سایت: نوشته‌ها، صفحات، رسانه، نظرات، ظاهر (قالب)، افزونه‌ها، کاربران و تنظیمات، همه از یک منوی کناری قابل‌دسترسی‌اند.</p>",
     "exercise": "اگه یه نصب لوکال داری، وارد پیشخوان شو و لیست کن (فقط با نگاه‌کردن) چند تا از منوهای اصلی سمت چپ رو."
    },
    {
     "title": "نوشته و صفحه: تفاوت Post و Page",
     "content": "<p><b>Post (نوشته)</b> برای محتوای وقت‌دار و به‌ترتیب زمانی است (مثل مقالات وبلاگ) — دارای تاریخ، دسته‌بندی و برچسب. <b>Page (صفحه)</b> برای محتوای ثابت و بدون‌تاریخ است (مثل «دربارهٔ ما»، «تماس با ما») و می‌تواند سلسله‌مراتب (صفحهٔ والد/فرزند) داشته باشد ولی دسته‌بندی ندارد.</p>",
     "exercise": "برای یک سایت فروشگاهی فرضی، بگو کدوم محتواها باید Post باشن (مثلاً اخبار تخفیف) و کدوم‌ها Page (مثلاً 'دربارهٔ ما')."
    },
    {
     "title": "دسته‌بندی، برچسب و کتابخانهٔ رسانه",
     "content": "<p><b>دسته‌بندی (Category)</b> ساختار سلسله‌مراتبی برای گروه‌بندی کلی نوشته‌هاست (مثل 'اخبار'، 'آموزش')؛ <b>برچسب (Tag)</b> بدون سلسله‌مراتب و برای موضوعات جزئی‌تر است (مثل 'پایتون'، 'تخفیف-ویژه'). <b>کتابخانهٔ رسانه (Media Library)</b> همهٔ تصاویر/فایل‌های آپلودشده را در یک‌جا نگه می‌دارد و قابل استفادهٔ مجدد در چند نوشته است.</p>",
     "exercise": "برای یک وبلاگ آموزش برنامه‌نویسی، سه دسته‌بندی و پنج برچسب پیشنهاد بده."
    }
   ],
   "quiz": [
    {
     "q": "وردپرس چه نوع نرم‌افزاری است؟",
     "options": [
      "یک زبان برنامه‌نویسی",
      "یک سیستم مدیریت محتوا (CMS)",
      "یک دیتابیس",
      "یک مرورگر"
     ],
     "answer": 1,
     "explain": "CMS به کاربر اجازه می‌دهد بدون نوشتن کد، محتوای سایت را مدیریت کند."
    },
    {
     "q": "وردپرس برای اجرا به کدام زبان برنامه‌نویسی نیاز دارد؟",
     "options": [
      "Python",
      "PHP",
      "Java",
      "Ruby"
     ],
     "answer": 1,
     "explain": "هستهٔ وردپرس با PHP نوشته شده است."
    },
    {
     "q": "تفاوت اصلی Post و Page چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Post برای محتوای وقت‌دار با دسته‌بندی است؛ Page برای محتوای ثابت بدون دسته‌بندی",
      "Page فقط برای تصاویر است",
      "Post نمی‌تواند ویرایش شود"
     ],
     "answer": 1,
     "explain": "Post زمان‌محور و دسته‌بندی‌شده است؛ Page ایستا و سلسله‌مراتبی است."
    },
    {
     "q": "برای مدیریت کامل سایت وردپرسی به کدام آدرس مراجعه می‌کنید؟",
     "options": [
      "yoursite.com/manage",
      "yoursite.com/wp-admin",
      "yoursite.com/dashboard",
      "yoursite.com/control"
     ],
     "answer": 1,
     "explain": "wp-admin آدرس استاندارد پیشخوان مدیریت وردپرس است."
    },
    {
     "q": "برچسب (Tag) نسبت به دسته‌بندی (Category) چه تفاوتی دارد؟",
     "options": [
      "تفاوتی ندارند",
      "برچسب سلسله‌مراتب ندارد و برای موضوعات جزئی‌تر است",
      "برچسب فقط برای تصاویر است",
      "دسته‌بندی قابل حذف نیست"
     ],
     "answer": 1,
     "explain": "Category ساختار درختی دارد؛ Tag یک برچسب تخت و بدون سلسله‌مراتب است."
    }
   ],
   "challenge": {
    "task": "برای یک سایت فرضی «مجلهٔ آشپزی» تصمیم بگیر: ۴ دسته‌بندی اصلی، ۶ برچسب پرکاربرد، و مشخص کن کدوم صفحات باید Page باشن (حداقل ۳ تا) و چرا نه Post.",
    "hint1": "دسته‌بندی‌ها باید کلی و پایدار باشن (مثل 'غذای ایرانی')، برچسب‌ها جزئی‌تر و قابل‌تکرار بین دسته‌ها (مثل 'کم‌کالری').",
    "hint2": "صفحات ثابت معمولاً چیزهایی هستن که تاریخ‌محور نیستن و توی منوی اصلی سایت می‌مونن (تماس، دربارهٔ ما، سیاست حریم خصوصی).",
    "solution": "دسته‌بندی‌ها: غذای ایرانی، دسر، غذای گیاهی، نوشیدنی\nبرچسب‌ها: کم‌کالری، سریع، مخصوص مهمانی، بدون گلوتن، ماه رمضان، آسان\nPage ها: دربارهٔ ما، تماس با ما، سیاست حریم خصوصی — چون محتوای ثابتی هستن که تاریخ انتشار یا دسته‌بندی براشون معنا نداره."
   }
  },
  {
   "lessons": [
    {
     "title": "قالب (Theme): ظاهر کامل سایت",
     "content": "<p><b>Theme</b> ظاهر و چیدمان کلی سایت را کنترل می‌کند — بدون تغییردادن محتوای واقعی. می‌توانید از هزاران قالب رایگان/پولی (از پیشخوان → ظاهر → قالب‌ها) نصب کنید، یا بعداً خودتان یکی بسازید (سطح ۳). قالب‌های محبوب مثل <b>Astra</b> یا <b>GeneratePress</b> سبک و قابل‌شخصی‌سازی‌اند.</p>",
     "exercise": "دو قالب مختلف وردپرس رو (از دایرکتوری رسمی wordpress.org/themes) با هم مقایسه کن — یکی برای وبلاگ، یکی برای فروشگاه — و بگو چه تفاوت ظاهری/عملکردی می‌بینی."
    },
    {
     "title": "ویرایشگر بلوکی گوتنبرگ (Gutenberg)",
     "content": "<p>ویرایشگر مدرن وردپرس (از نسخهٔ ۵ به بعد) مبتنی بر <b>بلوک (Block)</b> است — هر پاراگراف، تصویر، جدول یا حتی کد جاسازی‌شده یک بلوک جداست که می‌توانید جابه‌جا، استایل‌دهی یا تنظیم کنید، بدون دانستن HTML/CSS. این شبیه ساختن یک صفحه با قطعات لگو است.</p>",
     "exercise": "اگه دسترسی داری، یک نوشتهٔ جدید بساز و از ۳ نوع بلوک متفاوت (پاراگراف، تصویر، لیست) استفاده کن. اگه دسترسی نداری، توضیح بده چرا این مدل بلوکی برای کاربر غیرفنی راحت‌تر از نوشتن HTML خامه."
    },
    {
     "title": "منو و ویجت",
     "content": "<p><b>منو (Menu)</b> ناوبری اصلی سایت (معمولاً بالای صفحه) را می‌سازد — از پیشخوان → ظاهر → منوها، صفحات/دسته‌بندی‌ها را به یک ساختار منو می‌کشید. <b>ویجت (Widget)</b> بلوک‌های کوچک قابل‌قراردادن در نواحی خاص (مثل سایدبار یا فوتر) هستند — مثل جعبهٔ 'آخرین نوشته‌ها' یا فرم جست‌وجو.</p>",
     "exercise": "برای یک سایت وبلاگی، یک ساختار منوی اصلی (۴ آیتم) و دو ویجت مناسب برای سایدبار پیشنهاد بده."
    },
    {
     "title": "افزونه (Plugin): افزودن قابلیت بدون کدنویسی",
     "content": "<p><b>Plugin</b> قابلیت جدید به وردپرس اضافه می‌کند — بدون تغییردادن هستهٔ وردپرس یا قالب. افزونه‌های ضروری رایج: <b>Yoast SEO</b> (بهینه‌سازی سئو داخل هر نوشته)، <b>Contact Form 7</b> (فرم تماس)، <b>WooCommerce</b> (تبدیل سایت به فروشگاه — در سطح ۴ عمیق‌تر می‌بینید)، <b>UpdraftPlus</b> (پشتیبان‌گیری خودکار).</p>",
     "exercise": "با توجه به چیزی که از سئو یاد گرفتی (Meta Description، Schema)، توضیح بده افزونهٔ Yoast SEO دقیقاً چه بخش‌هایی از اون درس رو برای کاربر غیرفنی ساده می‌کنه."
    },
    {
     "title": "صفحهٔ اصلی (Front Page) و تنظیمات خواندن",
     "content": "<p>از پیشخوان → تنظیمات → خواندن، می‌توانید مشخص کنید صفحهٔ اصلی سایت یک صفحهٔ ایستا (Page) باشد یا آخرین نوشته‌ها (رایج برای وبلاگ). این تنظیم پایهٔ تصمیم‌گیری بین یک سایت 'وبلاگ‌محور' و یک سایت 'شرکتی/فروشگاهی' است.</p>",
     "exercise": "برای یک سایت شرکتی (نه وبلاگ)، توضیح بده چرا معمولاً صفحهٔ اصلی رو یه Page ایستا (مثل 'خانه') می‌ذارن، نه آخرین نوشته‌ها."
    }
   ],
   "quiz": [
    {
     "q": "Theme در وردپرس چه چیزی را کنترل می‌کند؟",
     "options": [
      "محتوای متنی نوشته‌ها",
      "ظاهر و چیدمان کلی سایت",
      "دیتابیس",
      "کاربران"
     ],
     "answer": 1,
     "explain": "Theme لایهٔ نمایشی سایت است، مستقل از محتوای واقعی."
    },
    {
     "q": "ویرایشگر گوتنبرگ بر چه مفهومی مبتنی است؟",
     "options": [
      "نوشتن مستقیم HTML",
      "بلوک‌های قابل‌جابه‌جایی و تنظیم برای هر بخش محتوا",
      "فقط متن ساده",
      "نوشتن PHP"
     ],
     "answer": 1,
     "explain": "هر عنصر محتوا (پاراگراف، تصویر، جدول) یک بلوک جداست."
    },
    {
     "q": "Plugin در وردپرس چه کاری انجام می‌دهد؟",
     "options": [
      "ظاهر سایت را عوض می‌کند",
      "قابلیت جدید اضافه می‌کند بدون تغییر هستهٔ وردپرس یا قالب",
      "دیتابیس را حذف می‌کند",
      "فقط برای تصاویر است"
     ],
     "answer": 1,
     "explain": "Pluginها به‌صورت ماژولار قابلیت‌ها را به سایت اضافه می‌کنند."
    },
    {
     "q": "Widget معمولاً کجا استفاده می‌شود؟",
     "options": [
      "فقط در نوشته‌ها",
      "نواحی خاصی مثل سایدبار یا فوتر",
      "فقط در دیتابیس",
      "فقط در افزونه‌ها"
     ],
     "answer": 1,
     "explain": "Widgetها بلوک‌های کوچک قابل‌نمایش در نواحی از پیش‌تعریف‌شدهٔ قالب هستند."
    }
   ],
   "challenge": {
    "task": "برای یک سایت فرضی «آژانس تبلیغاتی»، تصمیم بگیر: صفحهٔ اصلی Page باشه یا آخرین نوشته‌ها؛ ساختار منوی اصلی (۵ آیتم) رو بنویس؛ و ۳ افزونهٔ ضروری (از چیزی که یاد گرفتی) رو با دلیل انتخاب کن.",
    "hint1": "برای یه سایت شرکتی/آژانسی (نه وبلاگ خبری)، معمولاً صفحهٔ اصلی ایستا بهتره چون می‌خوای اول معرفی/خدمات رو نشون بدی.",
    "hint2": "برای افزونه‌ها به نیازهای پایه فکر کن: سئو، فرم تماس، امنیت/پشتیبان‌گیری.",
    "solution": "صفحهٔ اصلی: Page ایستا (چون شرکتیه و می‌خوایم اول خدمات/معرفی رو نشون بدیم، نه فید نوشته)\nمنو: خانه، خدمات، نمونه‌کارها، دربارهٔ ما، تماس با ما\nافزونه‌ها:\n۱. Yoast SEO — برای دیده‌شدن در گوگل\n۲. Contact Form 7 — برای فرم تماس با مشتری\n۳. UpdraftPlus — برای پشتیبان‌گیری خودکار از سایت شرکتی"
   }
  },
  {
   "lessons": [
    {
     "title": "ساختار فایل‌های وردپرس",
     "content": "<p>پوشهٔ نصب وردپرس شامل: <code class='inline'>wp-admin</code> (فایل‌های پیشخوان مدیریت)، <code class='inline'>wp-includes</code> (هستهٔ اصلی وردپرس)، <code class='inline'>wp-content</code> (مهم‌ترین پوشه برای توسعه‌دهنده — شامل <code class='inline'>themes/</code>، <code class='inline'>plugins/</code> و <code class='inline'>uploads/</code>)، و <code class='inline'>wp-config.php</code> (تنظیمات اتصال به دیتابیس و کلیدهای امنیتی).</p>",
     "exercise": "توضیح بده چرا توسعه‌دهنده‌ها تقریباً هیچ‌وقت فایل‌های داخل wp-admin یا wp-includes رو مستقیم تغییر نمی‌دن — فقط داخل wp-content کار می‌کنن."
    },
    {
     "title": "مبانی PHP لازم برای وردپرس",
     "content": "<p>PHP زبانی سمت‌سرور است که مستقیم داخل HTML جاسازی می‌شود (بین <code class='inline'>&lt;?php ?&gt;</code>). سینتکس پایه‌اش به جاوااسکریپت نزدیک است: متغیر با <code class='inline'>$</code> شروع می‌شود، آرایهٔ انجمنی شبیه دیکشنری پایتون است.</p><div class='code-block'><div class='cb-head'>example.php</div><pre><code>&lt;?php\n$name = \"سارا\";\n$age = 25;\n\nfunction greet($name) {\n    return \"سلام \" . $name . \"!\"; // . یعنی اتصال رشته\n}\n\necho greet($name);\n\n$product = [\"title\" => \"کتاب\", \"price\" => 120000];\necho $product[\"title\"];\n?&gt;</code></pre></div>",
     "exercise": "با PHP یک تابع بنویس که یک آرایه از قیمت‌ها بگیره و مجموعشون رو با یه حلقهٔ foreach برگردونه."
    },
    {
     "title": "Template Hierarchy: چطور وردپرس فایل درست رو انتخاب می‌کنه",
     "content": "<p>وقتی کاربر یک صفحه را باز می‌کند، وردپرس بر اساس یک ترتیب مشخص (<b>Template Hierarchy</b>) تصمیم می‌گیرد کدام فایل PHP از قالب را نمایش دهد — مثلاً برای یک نوشتهٔ تکی، اول دنبال <code class='inline'>single-{post-type}.php</code> می‌گردد، اگر نبود <code class='inline'>single.php</code>، اگر آن هم نبود <code class='inline'>index.php</code> (که همیشه باید وجود داشته باشد، آخرین fallback).</p>",
     "exercise": "توضیح بده چرا index.php تنها فایلی است که هر قالب وردپرسی مجبور است داشته باشد (نکته: fallback نهایی)."
    },
    {
     "title": "The Loop: قلب نمایش محتوا",
     "content": "<p><b>The Loop</b> ساختار PHP است که وردپرس با آن نوشته‌ها را واکشی و نمایش می‌دهد — تقریباً در هر فایل قالب تکرار می‌شود.</p><div class='code-block'><div class='cb-head'>index.php (ساده‌شده)</div><pre><code>&lt;?php if (have_posts()) : ?&gt;\n    &lt;?php while (have_posts()) : the_post(); ?&gt;\n        &lt;h2&gt;&lt;?php the_title(); ?&gt;&lt;/h2&gt;\n        &lt;p&gt;&lt;?php the_excerpt(); ?&gt;&lt;/p&gt;\n    &lt;?php endwhile; ?&gt;\n&lt;?php else : ?&gt;\n    &lt;p&gt;هیچ نوشته‌ای پیدا نشد.&lt;/p&gt;\n&lt;?php endif; ?&gt;</code></pre></div>",
     "exercise": "توضیح بده have_posts() و the_post() هرکدوم چه نقشی توی این حلقه دارن — چرا هر دو لازمن؟"
    },
    {
     "title": "ساخت یک Child Theme واقعی",
     "content": "<p>هرگز نباید مستقیم فایل‌های یک قالب دانلودی را تغییر دهید — با هر بروزرسانی قالب، تغییراتتان پاک می‌شود! <b>Child Theme</b> یک قالب جدا و کوچک است که از یک قالب اصلی (Parent) «ارث می‌برد» و فقط تغییرات دلخواه شما را نگه می‌دارد — دقیقاً همان مفهوم Inheritance که در OOP دیدید.</p><div class='code-block'><div class='cb-head'>style.css (در پوشهٔ child theme)</div><pre><code>/*\n Theme Name: My Astra Child\n Template: astra\n*/\n@import url(\"../astra/style.css\");\n\n/* استایل‌های سفارشی خودتون از اینجا به بعد */\nbody { font-family: 'Vazirmatn', sans-serif; }</code></pre></div>",
     "exercise": "توضیح بده چرا Template: astra توی کامنت بالای style.css اهمیت داره — این خط چطور Child Theme رو به Parent وصل می‌کنه."
    },
    {
     "title": "Hooks: Actions و Filters",
     "content": "<p><b>Hooks</b> قلب توسعهٔ حرفه‌ای وردپرس‌اند — راهی برای «قلاب‌کردن» کد شما به نقاط مشخصی از اجرای وردپرس، بدون تغییردادن هستهٔ اصلی. <b>Action</b> کاری انجام می‌دهد (مثل نمایش یک پیام)؛ <b>Filter</b> داده‌ای را می‌گیرد، تغییر می‌دهد و برمی‌گرداند.</p><div class='code-block'><div class='cb-head'>functions.php</div><pre><code>// Action: افزودن یک پیام به انتهای هر نوشته\nfunction add_custom_message($content) {\n    return $content . \"&lt;p&gt;ممنون از خوندن این پست!&lt;/p&gt;\";\n}\nadd_filter('the_content', 'add_custom_message');\n\n// Action سادہ: لاگ‌گرفتن هنگام انتشار پست\nfunction log_new_post($post_id) {\n    error_log(\"پست جدید منتشر شد: \" . $post_id);\n}\nadd_action('publish_post', 'log_new_post');</code></pre></div>",
     "exercise": "توضیح بده تفاوت add_action و add_filter دقیقاً چیه — چرا add_custom_message باید مقدار برگردونه ولی log_new_post نه (نکته: به نام دو تابع بالا نگاه کن)."
    }
   ],
   "quiz": [
    {
     "q": "کدام پوشه در وردپرس محل کار اصلی توسعه‌دهنده (قالب‌ها و افزونه‌ها) است؟",
     "options": [
      "wp-admin",
      "wp-includes",
      "wp-content",
      "wp-config"
     ],
     "answer": 2,
     "explain": "wp-content شامل themes/, plugins/ و uploads/ است."
    },
    {
     "q": "متغیر در PHP با چه کاراکتری شروع می‌شود؟",
     "options": [
      "@",
      "$",
      "#",
      "&"
     ],
     "answer": 1,
     "explain": "مثل $name = 'سارا';"
    },
    {
     "q": "Template Hierarchy در وردپرس چه کاری انجام می‌دهد؟",
     "options": [
      "دیتابیس را مدیریت می‌کند",
      "ترتیبی مشخص می‌کند که وردپرس بر اساس آن فایل PHP مناسب برای نمایش هر صفحه را انتخاب کند",
      "کاربران را احراز هویت می‌کند",
      "افزونه‌ها را نصب می‌کند"
     ],
     "answer": 1,
     "explain": "هر نوع صفحه (تکی، آرشیو، صفحهٔ اصلی) الگوریتم انتخاب فایل خودش را دارد."
    },
    {
     "q": "چرا نباید مستقیم فایل‌های یک قالب دانلودی را تغییر داد؟",
     "options": [
      "اجازه ندارید",
      "با هر بروزرسانی قالب، تغییرات مستقیم پاک می‌شوند؛ باید از Child Theme استفاده کرد",
      "تغییر فایل قالب غیرممکن است",
      "فقط ادمین می‌تواند تغییر بدهد"
     ],
     "answer": 1,
     "explain": "Child Theme تغییرات شما را مستقل و امن از بروزرسانی‌های آینده نگه می‌دارد."
    },
    {
     "q": "تفاوت اصلی Action و Filter در Hooks چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Filter داده را می‌گیرد و تغییریافته برمی‌گرداند؛ Action فقط کاری انجام می‌دهد بدون بازگرداندن داده",
      "Action فقط برای امنیت است",
      "Filter فقط در پلاگین‌ها کار می‌کند"
     ],
     "answer": 1,
     "explain": "این تفاوت در امضای توابعی که به آن‌ها متصل می‌کنید هم منعکس می‌شود."
    }
   ],
   "challenge": {
    "task": "یک Child Theme فرضی برای قالب 'twentytwentyfour' طراحی کن (فایل style.css با کامنت مناسب). بعد با یک Filter (add_filter روی the_title)، هر عنوان نوشته رو با یک ایموجی 📌 قبلش نمایش بده.",
    "hint1": "برای Child Theme، کامنت بالای style.css باید Template: twentytwentyfour رو دقیقاً با اسم پوشهٔ واقعی قالب اصلی مطابقت بده.",
    "hint2": "تابع فیلتر باید عنوان ($title) رو بگیره و رشتهٔ '📌 ' + $title رو برگردونه.",
    "solution": "/* style.css */\n/*\n Theme Name: My TwentyTwentyFour Child\n Template: twentytwentyfour\n*/\n@import url(\"../twentytwentyfour/style.css\");\n\n<?php\n// functions.php\nfunction add_pin_emoji($title) {\n    return \"📌 \" . $title;\n}\nadd_filter('the_title', 'add_pin_emoji');\n?>"
   }
  },
  {
   "lessons": [
    {
     "title": "Custom Post Type و Custom Field",
     "content": "<p>گاهی 'نوشته' و 'صفحه' کافی نیست — مثلاً برای یک سایت فیلم، به نوع محتوای «فیلم» با فیلدهای مخصوص (کارگردان، سال تولید) نیاز دارید. <b>Custom Post Type (CPT)</b> این امکان را می‌دهد. <b>ACF (Advanced Custom Fields)</b> محبوب‌ترین افزونه برای افزودن فیلدهای سفارشی بدون کدنویسی پیچیده است.</p><div class='code-block'><div class='cb-head'>functions.php</div><pre><code>function register_movie_post_type() {\n    register_post_type('movie', [\n        'labels' => ['name' => 'فیلم‌ها'],\n        'public' => true,\n        'has_archive' => true,\n        'supports' => ['title', 'editor', 'thumbnail']\n    ]);\n}\nadd_action('init', 'register_movie_post_type');</code></pre></div>",
     "exercise": "برای یک سایت رستوران، یک Custom Post Type به اسم 'menu_item' (آیتم منو) طراحی کن و بگو چه Custom Field هایی (مثل قیمت، تصویر) براش لازم داری."
    },
    {
     "title": "ساخت یک افزونهٔ ساده از صفر",
     "content": "<p>یک افزونهٔ حداقلی فقط یک فایل PHP با یک کامنت خاص در بالای آن است — وردپرس آن را خودکار شناسایی می‌کند.</p><div class='code-block'><div class='cb-head'>my-first-plugin/my-first-plugin.php</div><pre><code>&lt;?php\n/*\nPlugin Name: افزونهٔ خوش‌آمدگویی من\nDescription: یک پیام خوش‌آمد در بالای سایت نشون می‌ده\nVersion: 1.0\n*/\n\nfunction show_welcome_message() {\n    echo '&lt;div style=\"background:#eee;padding:10px;text-align:center;\"&gt;به سایت ما خوش آمدید!&lt;/div&gt;';\n}\nadd_action('wp_body_open', 'show_welcome_message');</code></pre></div>",
     "exercise": "توضیح بده چرا فقط با گذاشتن این فایل توی پوشهٔ wp-content/plugins، وردپرس خودکار می‌فهمه این یه افزونه‌ست — چه چیزی توی کامنت بالای فایل این کار رو می‌کنه؟"
    },
    {
     "title": "WooCommerce: ساخت فروشگاه آنلاین",
     "content": "<p><b>WooCommerce</b> محبوب‌ترین افزونهٔ فروشگاه‌ساز روی وردپرس است — پس از نصب، Custom Post Type هایی مثل 'محصول' و 'سفارش' اضافه می‌شود، همراه با سبد خرید، پرداخت (که می‌تواند به همان Payment Gateway هایی مثل Stripe که قبلاً یاد گرفتید وصل شود)، و مدیریت موجودی.</p>",
     "exercise": "با توجه به چیزی که دربارهٔ Payment Gateway (Stripe) یاد گرفتی، توضیح بده چرا WooCommerce هم به‌جای پردازش مستقیم کارت بانکی، از یه درگاه واسط استفاده می‌کنه."
    },
    {
     "title": "REST API وردپرس: اتصال به یک Frontend مدرن",
     "content": "<p>وردپرس یک <b>REST API</b> داخلی دارد که محتوا را به‌صورت JSON برمی‌گرداند — دقیقاً مثل API هایی که با Express یا FastAPI ساختید. این امکان می‌دهد وردپرس را فقط به‌عنوان «Backend مدیریت محتوا» (Headless CMS) استفاده کنید و Frontend را با React بسازید.</p><div class='code-block'><div class='cb-head'>مثال درخواست</div><pre><code>GET https://yoursite.com/wp-json/wp/v2/posts\n\n// پاسخ (خلاصه‌شده):\n[\n  { \"id\": 1, \"title\": { \"rendered\": \"اولین پست\" }, \"content\": {...} }\n]</code></pre></div>",
     "exercise": "با توجه به چیزی که در React دیدی (fetch از یک API)، توضیح بده چطور می‌تونی یه کامپوننت React بنویسی که این JSON رو از وردپرس بگیره و لیست عنوان پست‌ها رو نمایش بده."
    },
    {
     "title": "امنیت و بهینه‌سازی سرعت وردپرس",
     "content": "<p>چون وردپرس این‌قدر پرکاربرده، هدف محبوب حملات هم هست. اصول امنیتی پایه: بروزرسانی مداوم هسته/قالب/افزونه‌ها، پسورد قوی و تغییر آدرس پیش‌فرض ورود، افزونه‌های امنیتی (مثل Wordfence)، و پشتیبان‌گیری منظم. برای سرعت: افزونهٔ Caching (مثل WP Super Cache)، فشرده‌سازی تصاویر، و انتخاب هاست مناسب.</p>",
     "exercise": "با توجه به چک‌لیست امنیتی که قبلاً برای بک‌اند یاد گرفتی (پسورد قوی، بروزرسانی، بک‌آپ)، ببین کدوم اصول دقیقاً همون‌جا هم برای وردپرس صدق می‌کنن."
    },
    {
     "title": "بهینه‌سازی سرعت، کش و پشتیبان‌گیری",
     "content": "<p>برای سرعت وردپرس: افزونهٔ کش، فشرده‌سازی تصاویر (WebP)، CDN و حذف افزونه‌های بلااستفاده. همیشه قبل از به‌روزرسانی از فایل‌ها و دیتابیس پشتیبان بگیر و روی نسخهٔ آزمایشی (staging) تست کن. نسخهٔ خودکار پشتیبان روی سرور دیگر نگه دار.</p>",
     "exercise": "با ابزار PageSpeed سایت را بسنج و سه مورد را اصلاح کن."
    },
    {
     "title": "چرخه‌ی درخواست و Hook: Action و Filter",
     "content": "<p>هر درخواست وردپرس از <code class='inline'>wp-load.php</code> شروع می‌شود، هسته و افزونه‌ها بارگذاری و سپس Hookها اجرا می‌شوند. <b>Action</b> کاری را در نقطه‌ای انجام می‌دهد (<code class='inline'>add_action</code>) و <b>Filter</b> داده را تغییر می‌دهد و باید برگرداند (<code class='inline'>add_filter</code>). اولویت و تعداد آرگومان را درست بده. هسته‌ی وردپرس را هرگز ویرایش نکن؛ فقط از Hook استفاده کن.<div class='code-block'><div class='cb-head'>hooks.php</div><pre><code>add_action('init', function () {\n    // ثبت نوع نوشته و ...\n});\n\nadd_filter('the_title', function ($title) {\n    return is_admin() ? $title : $title . ' ✓';\n}, 10, 1);</code></pre></div></p>",
     "exercise": "با یک filter متن «ادامه مطلب» نوشته‌ها را عوض کن."
    },
    {
     "title": "قالب مدرن: Block Theme، theme.json و سلسله‌مراتب",
     "content": "<p>در Block Theme (Full Site Editing) قالب‌ها فایل HTML از بلاک‌اند و تنظیمات طراحی (رنگ، فونت، فاصله) در <code class='inline'>theme.json</code> مرکزی است. سلسله‌مراتب قالب تعیین می‌کند کدام فایل نمایش داده شود (single-post، archive، page-slug). برای فارسی <code class='inline'>dir='rtl'</code> و فونت self-host شده بگذار. Child Theme فقط برای قالب‌های Classic لازم است.</p>",
     "exercise": "یک Block Theme ساده با theme.json و پالت رنگ سفارشی بساز."
    },
    {
     "title": "نوع نوشته‌ی سفارشی، Taxonomy و Meta",
     "content": "<p>با <code class='inline'>register_post_type</code> محتوای ساخت‌یافته (منو، رویداد، دوره) می‌سازی. <code class='inline'>register_taxonomy</code> دسته‌بندی و <code class='inline'>register_post_meta</code> فیلد سفارشی با نوع و sanitize می‌دهد (و <code class='inline'>show_in_rest</code> برای ویرایشگر). به‌جای ذخیره‌ی همه چیز در meta، برای کوئری سنگین جدول سفارشی در نظر بگیر.<div class='code-block'><div class='cb-head'>cpt.php</div><pre><code>add_action('init', function () {\n    register_post_type('menu_item', [\n        'label' => 'آیتم منو',\n        'public' => true,\n        'show_in_rest' => true,\n        'supports' => ['title', 'editor', 'thumbnail'],\n    ]);\n});</code></pre></div></p>",
     "exercise": "نوع نوشته‌ی «آیتم منو» با دسته‌بندی و فیلد قیمت بساز."
    },
    {
     "title": "WP_Query و کش: Transient و Object Cache",
     "content": "<p><code class='inline'>WP_Query</code> را با پارامتر دقیق (<code class='inline'>fields => ids</code>، <code class='inline'>no_found_rows => true</code> وقتی صفحه‌بندی لازم نیست) سبک کن و از <code class='inline'>posts_per_page => -1</code> پرهیز کن. نتیجه‌ی کوئری سنگین را با Transient (<code class='inline'>set_transient</code>) و در سایت‌های پرترافیک با Object Cache پایدار (Redis) کش کن. هنگام ذخیره‌ی نوشته، کش را پاک کن.</p>",
     "exercise": "یک کوئری کند را با Query Monitor پیدا و با کش ۱۰ دقیقه‌ای سریع کن."
    },
    {
     "title": "توسعه‌ی بلاک Gutenberg",
     "content": "<p>هر بلاک با <code class='inline'>block.json</code> (نام، صفت‌ها، فایل‌ها) تعریف و با <code class='inline'>@wordpress/scripts</code> ساخته می‌شود. دو بخش دارد: <code class='inline'>edit</code> (در ویرایشگر) و <code class='inline'>save</code> (HTML ذخیره‌شده) یا بلاک پویا با <code class='inline'>render_callback</code> در PHP. تغییر <code class='inline'>save</code> بلاک‌های قدیمی را خراب می‌کند مگر Deprecation بنویسی.</p>",
     "exercise": "یک بلاک «نقل‌قول» با صفت نویسنده بساز."
    },
    {
     "title": "REST API: Endpoint سفارشی و احراز هویت",
     "content": "<p>با <code class='inline'>register_rest_route</code> endpoint بساز و برای هر مسیر <code class='inline'>permission_callback</code> بگذار (بدون آن هشدار و ریسک امنیتی). ورودی را با <code class='inline'>args</code> و <code class='inline'>sanitize_callback</code> اعتبارسنجی کن. احراز هویت: کوکی + nonce برای ادمین، Application Passwords برای برنامه‌های بیرونی.<div class='code-block'><div class='cb-head'>rest.php</div><pre><code>add_action('rest_api_init', function () {\n    register_rest_route('shop/v1', '/ping', [\n        'methods' => 'GET',\n        'callback' => fn() => ['ok' => true],\n        'permission_callback' => '__return_true',\n    ]);\n});</code></pre></div></p>",
     "exercise": "endpoint ای بنویس که فقط ادمین به آن دسترسی داشته باشد."
    },
    {
     "title": "امنیت کدنویسی: Nonce، Sanitize، Escape و $wpdb",
     "content": "<p>قاعده: <b>ورودی را Sanitize، خروجی را Escape</b> کن (<code class='inline'>sanitize_text_field</code>، <code class='inline'>esc_html</code>، <code class='inline'>esc_attr</code>، <code class='inline'>esc_url</code>). فرم‌ها و درخواست‌های تغییر را با Nonce و <code class='inline'>current_user_can</code> محافظت کن. در SQL مستقیم همیشه <code class='inline'>$wpdb->prepare</code>. فایل PHP را با <code class='inline'>defined('ABSPATH')</code> از اجرای مستقیم حفظ کن.<div class='code-block'><div class='cb-head'>secure.php</div><pre><code>if (! current_user_can('manage_options')) { wp_die('دسترسی ندارید'); }\ncheck_admin_referer('save_settings');\n$name = sanitize_text_field($_POST['name'] ?? '');\n$row = $wpdb->get_row($wpdb->prepare(\n    \"SELECT * FROM {$wpdb->prefix}items WHERE id = %d\", $id));\necho esc_html($name);</code></pre></div></p>",
     "exercise": "یک فرم تنظیمات امن با nonce و بررسی قابلیت بنویس."
    },
    {
     "title": "ساختار افزونه‌ی حرفه‌ای",
     "content": "<p>افزونه را با پیشوند یکتا یا Namespace، فایل‌های جدا (کلاس‌ها با Composer Autoload) و <code class='inline'>register_activation_hook</code> برای ساخت جدول بساز. حذف را با <code class='inline'>uninstall.php</code> تمیز کن. متن‌ها را با <code class='inline'>__()</code> و دامنه‌ی ترجمه آماده کن. اسکریپت را فقط در صفحه‌ی لازم و با <code class='inline'>wp_enqueue_script</code> بارگذاری کن.</p>",
     "exercise": "افزونه‌ای بنویس که هنگام فعال‌سازی جدول بسازد و هنگام حذف پاک کند."
    },
    {
     "title": "عملکرد: کش، CDN، تصویر و دیتابیس",
     "content": "<p>کش صفحه (WP Rocket، LiteSpeed Cache یا Nginx FastCGI)، Object Cache (Redis)، CDN، تصاویر WebP/AVIF با <code class='inline'>loading='lazy'</code> و ابعاد ثابت (کاهش CLS). افزونه‌های سنگین را حذف و دیتابیس را پاک کن (ریویژن‌های قدیمی، transientهای منقضی، autoload زیاد). با Query Monitor و Lighthouse اندازه بگیر و روی TTFB سرور تمرکز کن.</p>",
     "exercise": "TTFB و LCP یک سایت را قبل و بعد از کش اندازه بگیر."
    },
    {
     "title": "توسعه‌ی WooCommerce",
     "content": "<p>با Hookهای اختصاصی (<code class='inline'>woocommerce_before_calculate_totals</code>، <code class='inline'>woocommerce_checkout_process</code>) رفتار سبد و پرداخت را تغییر بده. نوع محصول یا درگاه پرداخت سفارشی را با کلاس‌هایی که از <code class='inline'>WC_Payment_Gateway</code> ارث می‌برند بساز. قالب‌ها را با Override در قالب‌خود تغییر بده، نه ویرایش افزونه. سفارش را با <code class='inline'>wc_get_order</code> و متدهای رسمی بخوان (سازگاری با HPOS).</p>",
     "exercise": "هزینه‌ی ارسال سفارشی بر اساس وزن بساز."
    },
    {
     "title": "WP-CLI، Multisite و استقرار حرفه‌ای",
     "content": "<p>WP-CLI کارها را خودکار می‌کند: <code class='inline'>wp plugin update --all</code>، <code class='inline'>wp search-replace</code> (مهاجرت دامنه با داده‌ی serialized)، <code class='inline'>wp cron event run</code>. کد را در Git و وابستگی‌ها را با Composer (الگوی Bedrock) نگه دار و فقط کد (نه wp-content/uploads) را مستقر کن. Staging را برای تست و Multisite را برای چند سایت با یک نصب بشناس.</p>",
     "exercise": "یک اسکریپت استقرار با WP-CLI و Git بنویس."
    },
    {
     "title": "Headless، تست و پشتیبان‌گیری",
     "content": "<p>در Headless، وردپرس فقط پنل محتوا و API (REST یا WPGraphQL) است و جلوی سایت با Next.js ساخته می‌شود؛ پیش‌نمایش و کش را باید خودت حل کنی. تست: PHPUnit برای منطق افزونه و Playwright برای سناریوی مرورگر. پشتیبان‌گیری خودکار فایل و دیتابیس روی مکان جدا، به‌علاوه‌ی تست بازیابی ماهانه، و به‌روزرسانی ابتدا روی staging.</p>",
     "exercise": "یک سناریوی Playwright برای ثبت سفارش بنویس."
    },
    {
     "title": "Block Patterns و Reusable Blocks: چیدمان‌های آماده",
     "content": "<p><b>Block Pattern</b> مجموعه‌ای از بلوک‌های چیده‌شده است که با یک کلیک در صفحه درج می‌شود (مثل بخش قهرمان، قیمت‌ها، سؤالات متداول). برخلاف Reusable Block (که یک نسخه‌ی مشترک است و تغییرش همه‌جا اثر می‌گذارد) پترن بعد از درج <b>کپی مستقل</b> است. ثبت پترن در قالب/افزونه با <code>register_block_pattern</code> یا فایل‌های PHP در پوشه‌ی <code>/patterns</code> (قالب‌های بلوکی). گروه‌بندی با <code>register_block_pattern_category</code>. محتوای پترن همان مارک‌آپ بلوک (کامنت‌های <code>&lt;!-- wp:... --&gt;</code>) است؛ ساده‌ترین راه تولیدش ساختن در ویرایشگر و کپی «Code editor» است. متن‌ها را ترجمه‌پذیر (<code>__()</code>) بنویس و از رنگ/فاصله‌ی theme.json به‌جای مقدار ثابت استفاده کن تا با تم هماهنگ بماند.</p><div class='code-block'><div class='cb-head'>functions.php</div><pre><code>add_action(&#x27;init&#x27;, function () {\n    register_block_pattern_category(&#x27;mytheme&#x27;, [&#x27;label&#x27; =&gt; __(&#x27;بخش‌های من&#x27;, &#x27;mytheme&#x27;)]);\n    register_block_pattern(&#x27;mytheme/hero&#x27;, [\n        &#x27;title&#x27;      =&gt; __(&#x27;بخش قهرمان&#x27;, &#x27;mytheme&#x27;),\n        &#x27;categories&#x27; =&gt; [&#x27;mytheme&#x27;],\n        &#x27;content&#x27;    =&gt; &#x27;&lt;!-- wp:group {&quot;align&quot;:&quot;full&quot;,&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;var:preset|spacing|80&quot;,&quot;bottom&quot;:&quot;var:preset|spacing|80&quot;}}}} --&gt;\n&lt;div class=&quot;wp-block-group alignfull&quot;&gt;&lt;!-- wp:heading {&quot;level&quot;:1,&quot;textAlign&quot;:&quot;center&quot;} --&gt;\n&lt;h1 class=&quot;wp-block-heading has-text-align-center&quot;&gt;&#x27; . esc_html__(&#x27;عنوان اصلی&#x27;, &#x27;mytheme&#x27;) . &#x27;&lt;/h1&gt;\n&lt;!-- /wp:heading --&gt;&lt;/div&gt;\n&lt;!-- /wp:group --&gt;&#x27;,\n    ]);\n});</code></pre></div>",
     "exercise": "یک پترن «کارت سه‌ستونه‌ی ویژگی‌ها» بساز و در دسته‌ی اختصاصی ثبت کن."
    },
    {
     "title": "ویرایش کامل سایت (FSE) و Global Styles",
     "content": "<p>در قالب‌های بلوکی، ظاهر سایت از <b>Site Editor</b> (نمایش ← ویرایشگر) و فایل <code>theme.json</code> کنترل می‌شود: رنگ‌ها، فونت‌ها، اندازه‌ها، فاصله‌ها و حتی استایل هر بلوک. <b>Global Styles</b> اجازه می‌دهد مدیر بدون کد رنگ و تایپوگرافی را عوض کند و تغییرات در دیتابیس ذخیره شود و روی پیش‌فرض‌های <code>theme.json</code> اعمال شود. ساختار: <code>templates/</code> (قالب صفحه‌ها مثل single، archive)، <code>parts/</code> (هدر و فوتر) و <code>patterns/</code>. مزایا: یک منبع حقیقت برای طراحی، بدون CSS اضافه، و نمایش یکسان در ویرایشگر و سایت. مراقب باش تغییرات مدیر در دیتابیس بر فایل قالب برتری دارند؛ برای بازگشت به پیش‌فرض «Reset» را در ویرایشگر بزن. برای RTL فارسی از <code>settings.typography.fontFamilies</code> و فونت محلی (self-hosted) استفاده کن.</p><div class='code-block'><div class='cb-head'>theme.json</div><pre><code>{\n  &quot;$schema&quot;: &quot;https://schemas.wp.org/trunk/theme.json&quot;,\n  &quot;version&quot;: 3,\n  &quot;settings&quot;: {\n    &quot;color&quot;: { &quot;palette&quot;: [\n      { &quot;slug&quot;: &quot;primary&quot;, &quot;name&quot;: &quot;اصلی&quot;, &quot;color&quot;: &quot;#5b4bd5&quot; },\n      { &quot;slug&quot;: &quot;surface&quot;, &quot;name&quot;: &quot;سطح&quot;, &quot;color&quot;: &quot;#f8f7ff&quot; },\n      { &quot;slug&quot;: &quot;ink&quot;, &quot;name&quot;: &quot;متن&quot;, &quot;color&quot;: &quot;#14122b&quot; }\n    ] },\n    &quot;typography&quot;: { &quot;fontFamilies&quot;: [\n      { &quot;slug&quot;: &quot;vazir&quot;, &quot;name&quot;: &quot;وزیرمتن&quot;, &quot;fontFamily&quot;: &quot;Vazirmatn, system-ui, sans-serif&quot; }\n    ] },\n    &quot;layout&quot;: { &quot;contentSize&quot;: &quot;720px&quot;, &quot;wideSize&quot;: &quot;1100px&quot; }\n  },\n  &quot;styles&quot;: {\n    &quot;color&quot;: { &quot;background&quot;: &quot;var(--wp--preset--color--surface)&quot;, &quot;text&quot;: &quot;var(--wp--preset--color--ink)&quot; },\n    &quot;typography&quot;: { &quot;fontFamily&quot;: &quot;var(--wp--preset--font-family--vazir)&quot;, &quot;lineHeight&quot;: &quot;1.8&quot; }\n  }\n}</code></pre></div>",
     "exercise": "در theme.json یک پالت رنگی ۵ تایی و فونت وزیرمتن را تعریف و در ویرایشگر انتخاب‌پذیر کن."
    },
    {
     "title": "Shortcode: افزودن محتوای پویا درون نوشته",
     "content": "<p>Shortcode برچسبی مثل <code>[latest_posts count=\"3\"]</code> است که وردپرس هنگام نمایش با خروجی PHP جایگزین می‌کند. ثبت با <code>add_shortcode('tag', callback)</code>. callback سه آرگومان می‌گیرد: <code>$atts</code>، <code>$content</code> و <code>$tag</code> و <b>باید مقدار را return کند نه echo</b> (وگرنه خروجی بالای صفحه می‌افتد؛ برای کد HTML طولانی از <code>ob_start()</code> استفاده کن). ویژگی‌ها را با <code>shortcode_atts</code> با پیش‌فرض ترکیب کن و حتماً <b>پاک‌سازی ورودی و escape خروجی</b> انجام بده (<code>absint</code>, <code>esc_html</code>). برای قابلیت‌های جدید، بلوک Gutenberg (دینامیک) مدرن‌تر است ولی shortcode هنوز در ویجت‌ها، Classic Editor و صفحه‌سازها کاربرد دارد. اسکریپت و استایل را فقط وقتی shortcode در صفحه است enqueue کن.</p><div class='code-block'><div class='cb-head'>functions.php</div><pre><code>add_shortcode(&#x27;alert&#x27;, function ($atts, $content = null) {\n    $a = shortcode_atts([&#x27;type&#x27; =&gt; &#x27;info&#x27;], $atts, &#x27;alert&#x27;);\n    $type = in_array($a[&#x27;type&#x27;], [&#x27;info&#x27;, &#x27;warning&#x27;, &#x27;danger&#x27;], true) ? $a[&#x27;type&#x27;] : &#x27;info&#x27;;   // فهرست سفید\n    return sprintf(&#x27;&lt;div class=&quot;alert alert-%s&quot; role=&quot;alert&quot;&gt;%s&lt;/div&gt;&#x27;,\n        esc_attr($type), wp_kses_post(do_shortcode($content)));\n});\n// استفاده: [alert type=&quot;warning&quot;]این یک هشدار است[/alert]</code></pre></div>",
     "exercise": "shortcode [alert type=\"warning\"]متن[/alert] بساز که کادر رنگی نمایش دهد."
    },
    {
     "title": "Settings API: صفحه‌ی تنظیمات افزونه‌ی حرفه‌ای",
     "content": "<p>برای ذخیره‌ی تنظیمات افزونه به‌جای فرم دستی با <code>$_POST</code>، از <b>Settings API</b> استفاده کن که امنیت (nonce)، ذخیره، اعتبارسنجی و پاک‌سازی را استاندارد می‌کند. گام‌ها: ۱) <code>register_setting</code> با <code>sanitize_callback</code>؛ ۲) <code>add_settings_section</code>؛ ۳) <code>add_settings_field</code> با callback رسم ورودی؛ ۴) صفحه‌ی مدیریت با <code>add_options_page</code> یا <code>add_menu_page</code> و داخل آن <code>settings_fields()</code> و <code>do_settings_sections()</code> و <code>submit_button()</code>. مقدار را با <code>get_option('name', default)</code> بخوان. قاعده: قابلیت دسترسی را با <code>current_user_can('manage_options')</code> بررسی کن، همه‌ی ورودی‌ها را sanitize و خروجی‌ها را escape کن. پیشوند یکتا برای نام گزینه‌ها بگذار تا با افزونه‌های دیگر تداخل نکند.</p><div class='code-block'><div class='cb-head'>myplugin.php</div><pre><code>add_action(&#x27;admin_init&#x27;, function () {\n    register_setting(&#x27;myplugin_group&#x27;, &#x27;myplugin_webhook&#x27;, [&#x27;sanitize_callback&#x27; =&gt; &#x27;esc_url_raw&#x27;, &#x27;default&#x27; =&gt; &#x27;&#x27;]);\n    add_settings_section(&#x27;myplugin_main&#x27;, __(&#x27;تنظیمات اصلی&#x27;, &#x27;myplugin&#x27;), &#x27;__return_false&#x27;, &#x27;myplugin&#x27;);\n    add_settings_field(&#x27;myplugin_webhook&#x27;, __(&#x27;آدرس وب‌هوک&#x27;, &#x27;myplugin&#x27;), function () {\n        printf(&#x27;&lt;input type=&quot;url&quot; class=&quot;regular-text&quot; name=&quot;myplugin_webhook&quot; value=&quot;%s&quot;&gt;&#x27;, esc_attr(get_option(&#x27;myplugin_webhook&#x27;, &#x27;&#x27;)));\n    }, &#x27;myplugin&#x27;, &#x27;myplugin_main&#x27;);\n});\nadd_action(&#x27;admin_menu&#x27;, function () {\n    add_options_page(__(&#x27;افزونه‌ی من&#x27;, &#x27;myplugin&#x27;), __(&#x27;افزونه‌ی من&#x27;, &#x27;myplugin&#x27;), &#x27;manage_options&#x27;, &#x27;myplugin&#x27;, function () {\n        if (!current_user_can(&#x27;manage_options&#x27;)) return;\n        echo &#x27;&lt;div class=&quot;wrap&quot;&gt;&lt;h1&gt;&#x27; . esc_html__(&#x27;تنظیمات&#x27;, &#x27;myplugin&#x27;) . &#x27;&lt;/h1&gt;&lt;form method=&quot;post&quot; action=&quot;options.php&quot;&gt;&#x27;;\n        settings_fields(&#x27;myplugin_group&#x27;); do_settings_sections(&#x27;myplugin&#x27;); submit_button();\n        echo &#x27;&lt;/form&gt;&lt;/div&gt;&#x27;;\n    });\n});</code></pre></div>",
     "exercise": "یک گزینه‌ی «آدرس وب‌هوک» با اعتبارسنجی URL به صفحه‌ی تنظیمات افزونه اضافه کن."
    },
    {
     "title": "بلوک Gutenberg پویا با render_callback",
     "content": "<p>بلوک <b>ایستا</b> HTML را هنگام ذخیره در محتوای نوشته می‌گذارد؛ اگر کد بلوک عوض شود نوشته‌های قدیمی «نامعتبر» می‌شوند. بلوک <b>پویا</b> فقط تنظیمات را ذخیره می‌کند و HTML را هر بار با PHP تولید می‌کند (<code>render_callback</code> یا فایل <code>render.php</code>)؛ مناسب لیست آخرین نوشته‌ها، قیمت زنده و هر محتوای وابسته به داده. ساختار استاندارد با <code>block.json</code> (نام، ویژگی‌ها، فایل‌های edit/render) و ثبت با <code>register_block_type(__DIR__ . '/build/my-block')</code>. ابزار رسمی: <code>npx @wordpress/create-block --variant dynamic</code>. در render، ویژگی‌ها را اعتبارسنجی و escape کن و کلاس‌های پوشش را با <code>get_block_wrapper_attributes()</code> بگیر تا تنظیمات استایل بلوک کار کند. نتیجه‌ی کوئری‌های سنگین را کش کن.</p><div class='code-block'><div class='cb-head'>render.php + block.json</div><pre><code>&lt;?php\n// render.php — بلوک «نوشته‌های اخیر»\n$count = isset($attributes[&#x27;count&#x27;]) ? max(1, min(10, (int) $attributes[&#x27;count&#x27;])) : 3;\n$q = new WP_Query([&#x27;posts_per_page&#x27; =&gt; $count, &#x27;ignore_sticky_posts&#x27; =&gt; true, &#x27;no_found_rows&#x27; =&gt; true]);\n?&gt;\n&lt;ul &lt;?php echo get_block_wrapper_attributes(); ?&gt;&gt;\n&lt;?php while ($q-&gt;have_posts()) : $q-&gt;the_post(); ?&gt;\n  &lt;li&gt;&lt;a href=&quot;&lt;?php the_permalink(); ?&gt;&quot;&gt;&lt;?php echo esc_html(get_the_title()); ?&gt;&lt;/a&gt;&lt;/li&gt;\n&lt;?php endwhile; wp_reset_postdata(); ?&gt;\n&lt;/ul&gt;\n// block.json: { &quot;apiVersion&quot;: 3, &quot;name&quot;: &quot;my/recent&quot;, &quot;attributes&quot;: { &quot;count&quot;: { &quot;type&quot;: &quot;number&quot;, &quot;default&quot;: 3 } }, &quot;render&quot;: &quot;file:./render.php&quot; }</code></pre></div>",
     "exercise": "بلوکی بساز که N نوشته‌ی آخر یک دسته را فهرست کند (N و دسته در تنظیمات بلوک)."
    },
    {
     "title": "AJAX در وردپرس: admin-ajax و REST با Nonce",
     "content": "<p>برای درخواست ناهمگام از صفحه به سرور دو راه داری: <b>admin-ajax.php</b> (قدیمی، با <code>wp_ajax_{action}</code> و <code>wp_ajax_nopriv_{action}</code> برای کاربر مهمان) و <b>REST API</b> (مدرن، با <code>register_rest_route</code>). در هر دو: ۱) <b>Nonce</b> بساز (<code>wp_create_nonce</code>) و با <code>wp_localize_script</code> یا <code>wp_add_inline_script</code> به جاوااسکریپت بده و در سرور با <code>check_ajax_referer</code> / <code>wp_verify_nonce</code> بررسی کن (جلوگیری از CSRF)؛ ۲) <code>current_user_can</code> برای عمل‌های مهم؛ ۳) ورودی را sanitize کن؛ ۴) با <code>wp_send_json_success/error</code> پاسخ JSON بده و <code>wp_die()</code> نزن (خودش می‌میرد). برای کارایی، admin-ajax هر بار کل وردپرس را بارگذاری می‌کند؛ endpoint REST سبک‌تر و قابل‌کش‌تر است. Nonce احراز هویت نیست؛ فقط قصد کاربر را تأیید می‌کند.</p><div class='code-block'><div class='cb-head'>like.php + like.js</div><pre><code>// PHP\nadd_action(&#x27;wp_ajax_like_post&#x27;, &#x27;handle_like&#x27;);\nadd_action(&#x27;wp_ajax_nopriv_like_post&#x27;, &#x27;handle_like&#x27;);\nfunction handle_like() {\n    check_ajax_referer(&#x27;like_nonce&#x27;, &#x27;nonce&#x27;);\n    $id = absint($_POST[&#x27;post_id&#x27;] ?? 0);\n    if (!$id || get_post_status($id) !== &#x27;publish&#x27;) wp_send_json_error([&#x27;msg&#x27; =&gt; &#x27;نامعتبر&#x27;], 400);\n    $n = (int) get_post_meta($id, &#x27;_likes&#x27;, true) + 1;\n    update_post_meta($id, &#x27;_likes&#x27;, $n);\n    wp_send_json_success([&#x27;likes&#x27; =&gt; $n]);\n}\nwp_localize_script(&#x27;theme-js&#x27;, &#x27;LikeCfg&#x27;, [&#x27;url&#x27; =&gt; admin_url(&#x27;admin-ajax.php&#x27;), &#x27;nonce&#x27; =&gt; wp_create_nonce(&#x27;like_nonce&#x27;)]);\n\n// JavaScript\nconst body = new URLSearchParams({ action: &#x27;like_post&#x27;, nonce: LikeCfg.nonce, post_id: id });\nconst r = await fetch(LikeCfg.url, { method: &#x27;POST&#x27;, body }); const j = await r.json();\nif (j.success) counter.textContent = j.data.likes;</code></pre></div>",
     "exercise": "دکمه‌ی «لایک» بساز که با fetch و nonce به سرور درخواست بزند و شمارنده را به‌روز کند."
    },
    {
     "title": "WP-Cron: کارهای زمان‌بندی‌شده و تله‌هایش",
     "content": "<p><b>WP-Cron</b> با هر بازدید سایت بررسی می‌کند کاری موعدش رسیده یا نه (نه یک cron واقعی سیستم‌عامل). پس: اگر سایت بازدید کم دارد کار دیر اجرا می‌شود؛ در سایت پربازدید هر بازدید هزینه‌ی بررسی دارد. ثبت کار: <code>wp_schedule_event(time(), 'hourly', 'my_hook')</code> و اتصال تابع با <code>add_action('my_hook', ...)</code>. فواصل سفارشی با فیلتر <code>cron_schedules</code>. قواعد: ۱) زمان‌بندی را فقط یک‌بار انجام بده (با <code>wp_next_scheduled</code> بررسی کن) و هنگام غیرفعال‌سازی افزونه با <code>wp_clear_scheduled_hook</code> پاک کن؛ ۲) کار باید <b>سریع و idempotent</b> باشد؛ ۳) برای دقت و بار کم، <code>DISABLE_WP_CRON</code> را true بگذار و cron واقعی سرور را هر ۵ دقیقه <code>wp-cron.php</code> صدا بزند؛ ۴) برای کارهای سنگین از Action Scheduler (کتابخانه‌ی WooCommerce) با صف و تلاش مجدد استفاده کن.</p><div class='code-block'><div class='cb-head'>cron.php</div><pre><code>register_activation_hook(__FILE__, function () {\n    if (!wp_next_scheduled(&#x27;cleanup_old_drafts&#x27;)) wp_schedule_event(strtotime(&#x27;tomorrow 03:00&#x27;), &#x27;daily&#x27;, &#x27;cleanup_old_drafts&#x27;);\n});\nregister_deactivation_hook(__FILE__, fn() =&gt; wp_clear_scheduled_hook(&#x27;cleanup_old_drafts&#x27;));\n\nadd_action(&#x27;cleanup_old_drafts&#x27;, function () {\n    $old = get_posts([&#x27;post_status&#x27; =&gt; &#x27;draft&#x27;, &#x27;date_query&#x27; =&gt; [[&#x27;before&#x27; =&gt; &#x27;30 days ago&#x27;]], &#x27;fields&#x27; =&gt; &#x27;ids&#x27;, &#x27;numberposts&#x27; =&gt; 100]);\n    foreach ($old as $id) wp_trash_post($id);\n});\n// wp-config.php:  define(&#x27;DISABLE_WP_CRON&#x27;, true);\n// crontab:  */5 * * * *  curl -s https://example.com/wp-cron.php?doing_wp_cron &gt;/dev/null</code></pre></div>",
     "exercise": "کاری بنویس که هر شب نوشته‌های پیش‌نویس قدیمی‌تر از ۳۰ روز را به سطل زباله ببرد."
    },
    {
     "title": "چندزبانه و راست‌چین: i18n، RTL و فونت فارسی در وردپرس",
     "content": "<p>وردپرس برای ترجمه از <b>gettext</b> استفاده می‌کند: همه‌ی رشته‌های نمایشی را در <code>__('متن', 'text-domain')</code> (برگرداندن) یا <code>_e()</code> (چاپ) و برای escape همراه <code>esc_html__()</code>/<code>esc_attr__()</code> بپیچ و <b>text-domain</b> ثابت (نام پوشه‌ی افزونه/قالب) بده. جمع: <code>_n()</code>. با <code>load_plugin_textdomain</code>/<code>load_theme_textdomain</code> فایل <code>.mo</code> بارگذاری می‌شود؛ فایل‌های <code>.pot</code> را با WP-CLI (<code>wp i18n make-pot</code>) تولید و با Poedit ترجمه کن. <b>RTL</b>: وردپرس با <code>is_rtl()</code> زبان راست‌چین را می‌شناسد و اگر قالب <code>style-rtl.css</code> داشته باشد خودش بارگذاری می‌کند؛ بهتر از آن از ویژگی‌های منطقی CSS (<code>margin-inline-start</code>، <code>text-align: start</code>) استفاده کن. فونت فارسی را self-host کن (کش و حریم خصوصی). برای سایت چندزبانه افزونه‌هایی مثل Polylang/WPML؛ تاریخ شمسی با افزونه‌ی مخصوص (WP-Parsidate) یا کتابخانه‌ی <code>IntlDateFormatter</code> با لوکال <code>fa_IR@calendar=persian</code>.</p><div class='code-block'><div class='cb-head'>i18n.php</div><pre><code>// بارگذاری ترجمه\nadd_action(&#x27;init&#x27;, fn() =&gt; load_plugin_textdomain(&#x27;myplugin&#x27;, false, dirname(plugin_basename(__FILE__)) . &#x27;/languages&#x27;));\n\necho esc_html__(&#x27;خوش آمدید&#x27;, &#x27;myplugin&#x27;);\nprintf(_n(&#x27;%d دیدگاه&#x27;, &#x27;%d دیدگاه&#x27;, $n, &#x27;myplugin&#x27;), $n);\n\n/* CSS با ویژگی‌های منطقی (RTL و LTR هر دو درست) */\n.card { margin-inline-start: 1rem; padding-inline: 1rem; text-align: start; border-inline-start: 4px solid var(--wp--preset--color--primary); }\n\n// ساخت فایل pot\n// wp i18n make-pot . languages/myplugin.pot --domain=myplugin</code></pre></div>",
     "exercise": "افزونه‌ی ساده‌ات را کاملاً ترجمه‌پذیر کن و فایل .pot بساز."
    },
    {
     "title": "جدول سفارشی دیتابیس با dbDelta و $wpdb",
     "content": "<p>بیشتر داده‌ها در <code>wp_posts</code> و <code>wp_postmeta</code> جا می‌شوند؛ ولی برای داده‌ی حجیم و رابطه‌ای (لاگ، سفارش‌های سفارشی، رتبه‌بندی) <b>جدول اختصاصی</b> سریع‌تر است. ساخت با <code>dbDelta()</code> هنگام فعال‌سازی افزونه: قالب SQL دقیق لازم دارد (دو فاصله بعد از <code>PRIMARY KEY</code>، هر فیلد در یک خط) و جدول را بدون حذف داده به‌روز می‌کند؛ نسخه‌ی اسکیما را در یک option ذخیره کن و هنگام ارتقا دوباره اجرا کن. نام جدول را با <code>$wpdb-&gt;prefix</code> بساز. پرس‌وجو همیشه با <code>$wpdb-&gt;prepare()</code> (جلوگیری از SQL Injection) و برای درج/به‌روزرسانی با <code>$wpdb-&gt;insert/update</code> که خودش escape می‌کند. ایندکس مناسب بگذار و کوئری‌های سنگین را کش کن (transient). هنگام حذف افزونه (<code>uninstall.php</code>) جدول و گزینه‌ها را پاک کن (با اجازه‌ی کاربر).</p><div class='code-block'><div class='cb-head'>db.php</div><pre><code>register_activation_hook(__FILE__, function () {\n    global $wpdb; $table = $wpdb-&gt;prefix . &#x27;login_log&#x27;; $charset = $wpdb-&gt;get_charset_collate();\n    $sql = &quot;CREATE TABLE $table (\n      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n      user_id BIGINT UNSIGNED NOT NULL,\n      ip VARCHAR(45) NOT NULL,\n      created_at DATETIME NOT NULL,\n      PRIMARY KEY  (id),\n      KEY user_time (user_id, created_at)\n    ) $charset;&quot;;\n    require_once ABSPATH . &#x27;wp-admin/includes/upgrade.php&#x27;;\n    dbDelta($sql);\n});\nadd_action(&#x27;wp_login&#x27;, function ($login, $user) {\n    global $wpdb;\n    $wpdb-&gt;insert($wpdb-&gt;prefix . &#x27;login_log&#x27;, [&#x27;user_id&#x27; =&gt; $user-&gt;ID, &#x27;ip&#x27; =&gt; sanitize_text_field($_SERVER[&#x27;REMOTE_ADDR&#x27;] ?? &#x27;&#x27;), &#x27;created_at&#x27; =&gt; current_time(&#x27;mysql&#x27;, true)]);\n}, 10, 2);\n$rows = $wpdb-&gt;get_results($wpdb-&gt;prepare(&quot;SELECT ip, created_at FROM {$wpdb-&gt;prefix}login_log WHERE user_id = %d ORDER BY id DESC LIMIT 20&quot;, $uid));</code></pre></div>",
     "exercise": "جدول لاگ ورود با user_id، ip و زمان بساز و ۲۰ ورودی آخر یک کاربر را بخوان."
    },
    {
     "title": "نقش‌ها و قابلیت‌ها (Roles & Capabilities)",
     "content": "<p>وردپرس دسترسی را با <b>قابلیت</b> (capability) کنترل می‌کند نه با نام نقش: <code>edit_posts</code>، <code>manage_options</code>، <code>publish_pages</code>. نقش‌ها (مدیر، ویرایشگر، نویسنده، مشارکت‌کننده، مشترک) فقط مجموعه‌ای از قابلیت‌اند. همیشه با <code>current_user_can('capability')</code> بررسی کن، <b>نه</b> <code>$user-&gt;roles</code> (چون نقش‌ها سفارشی می‌شوند). برای شیء مشخص قابلیت متا: <code>current_user_can('edit_post', $post_id)</code>. ساخت نقش با <code>add_role</code> هنگام فعال‌سازی افزونه و حذف با <code>remove_role</code> هنگام حذف. با <code>register_post_type</code> و <code>capability_type</code> می‌توانی مجموعه‌ی قابلیت‌های جدا برای نوع نوشته‌ی سفارشی بسازی. قاعده‌ی کمترین دسترسی: به هر نقش فقط آنچه لازم است. بررسی دسترسی را در <b>هر</b> نقطه‌ی ورود (صفحه‌ی مدیریت، AJAX، REST) انجام بده، نه فقط پنهان‌کردن دکمه.</p><div class='code-block'><div class='cb-head'>roles.php</div><pre><code>register_activation_hook(__FILE__, function () {\n    add_role(&#x27;content_lead&#x27;, __(&#x27;سردبیر محتوا&#x27;, &#x27;myplugin&#x27;), [\n        &#x27;read&#x27; =&gt; true, &#x27;edit_posts&#x27; =&gt; true, &#x27;edit_others_posts&#x27; =&gt; true,\n        &#x27;publish_posts&#x27; =&gt; true, &#x27;upload_files&#x27; =&gt; true,\n    ]);\n});\nregister_deactivation_hook(__FILE__, fn() =&gt; remove_role(&#x27;content_lead&#x27;));\n\n// بررسی دسترسی در نقطه‌ی ورود\nadd_action(&#x27;admin_post_export_report&#x27;, function () {\n    if (!current_user_can(&#x27;edit_others_posts&#x27;)) wp_die(esc_html__(&#x27;اجازه‌ی دسترسی ندارید&#x27;, &#x27;myplugin&#x27;), 403);\n    check_admin_referer(&#x27;export_report&#x27;);\n    // ...\n});</code></pre></div>",
     "exercise": "نقش «سردبیر محتوا» بساز که فقط بتواند نوشته‌ها را ویرایش کند ولی افزونه نصب نکند."
    },
    {
     "title": "تصاویر واکنش‌گرا و بهینه در وردپرس",
     "content": "<p>وردپرس برای هر تصویر آپلودی چند اندازه می‌سازد و در خروجی <code>srcset</code> و <code>sizes</code> می‌گذارد تا مرورگر اندازه‌ی مناسب را بردارد. ابعاد دلخواه با <code>add_image_size('card', 600, 400, true)</code> (برش) تعریف می‌شود (برای تصاویر قدیمی باید بازتولید شوند: <code>wp media regenerate</code>). <code>loading=\"lazy\"</code> به‌صورت پیش‌فرض اضافه می‌شود ولی تصویر اصلی بالای صفحه (LCP) باید <b>lazy نباشد</b> و <code>fetchpriority=\"high\"</code> بگیرد. فرمت‌های مدرن: وردپرس ≥ ۶٫۵ تبدیل به WebP را پشتیبانی می‌کند و AVIF هم موجود است؛ افزونه‌های بهینه‌ساز (ShortPixel/Imagify) و CDN کمک می‌کنند. همیشه <code>alt</code> معنادار بگذار (دسترس‌پذیری و سئو) و <code>width/height</code> را حفظ کن تا CLS نداشته باشی. حجم آپلود را محدود کن و فایل‌های SVG را فقط با پاک‌سازی (sanitize) مجاز کن چون می‌تواند اسکریپت داشته باشد.</p><div class='code-block'><div class='cb-head'>images.php</div><pre><code>add_action(&#x27;after_setup_theme&#x27;, function () {\n    add_theme_support(&#x27;post-thumbnails&#x27;);\n    add_image_size(&#x27;card&#x27;, 600, 400, true);          // برش وسط\n});\n// در قالب: srcset و sizes خودکار\necho wp_get_attachment_image(get_post_thumbnail_id(), &#x27;card&#x27;, false, [\n    &#x27;alt&#x27;   =&gt; esc_attr(get_the_title()),\n    &#x27;sizes&#x27; =&gt; &#x27;(max-width: 700px) 100vw, 600px&#x27;,\n]);\n// تصویر LCP: بدون lazy و با اولویت\necho wp_get_attachment_image($hero_id, &#x27;large&#x27;, false, [&#x27;loading&#x27; =&gt; &#x27;eager&#x27;, &#x27;fetchpriority&#x27; =&gt; &#x27;high&#x27;]);\n// wp media regenerate --only-missing --yes</code></pre></div>",
     "exercise": "اندازه‌ی card را بساز، با WP-CLI بازتولید کن و در قالب با wp_get_attachment_image بنویس."
    },
    {
     "title": "سئوی فنی وردپرس: Schema، Canonical و Sitemap",
     "content": "<p>قبل از افزونه‌ی سئو، پایه‌ی فنی را بشناس. <b>عنوان:</b> <code>add_theme_support('title-tag')</code> تا وردپرس تگ title بسازد. <b>Canonical</b> آدرس اصلی را مشخص می‌کند؛ وردپرس برای نوشته‌ها خودش می‌گذارد ولی برای فیلترها/صفحه‌بندی باید مراقب باشی. <b>نقشه‌ی سایت:</b> از ۵٫۵ داخلی است (<code>/wp-sitemap.xml</code>)؛ افزونه‌هایی مثل Yoast/Rank Math/SEOPress پیشرفته‌تر می‌دهند (فقط یکی را فعال کن تا تداخل نشود). <b>Schema.org</b> داده‌ی ساختاریافته (Article، Product، FAQ، BreadcrumbList) را به‌صورت <code>JSON-LD</code> در head می‌گذارد تا گوگل نتیجه‌ی غنی نشان دهد؛ با <code>wp_head</code> و <code>wp_json_encode</code> تولید کن. موارد مهم دیگر: پیوند یکتا (<code>/%postname%/</code>)، <code>noindex</code> برای صفحات کم‌ارزش (جست‌وجو، برچسب‌های خالی)، سرعت و Core Web Vitals، HTTPS و ریدایرکت ۳۰۱ هنگام تغییر آدرس. «ظاهر سایت برای موتور جست‌وجو» با Search Console پایش شود.</p><div class='code-block'><div class='cb-head'>seo.php</div><pre><code>add_action(&#x27;wp_head&#x27;, function () {\n    if (!is_singular(&#x27;post&#x27;)) return;\n    $data = [\n        &#x27;@context&#x27; =&gt; &#x27;https://schema.org&#x27;, &#x27;@type&#x27; =&gt; &#x27;Article&#x27;,\n        &#x27;headline&#x27; =&gt; get_the_title(),\n        &#x27;datePublished&#x27; =&gt; get_the_date(&#x27;c&#x27;), &#x27;dateModified&#x27; =&gt; get_the_modified_date(&#x27;c&#x27;),\n        &#x27;author&#x27; =&gt; [&#x27;@type&#x27; =&gt; &#x27;Person&#x27;, &#x27;name&#x27; =&gt; get_the_author()],\n        &#x27;image&#x27; =&gt; get_the_post_thumbnail_url(null, &#x27;large&#x27;) ?: null,\n        &#x27;mainEntityOfPage&#x27; =&gt; get_permalink(),\n    ];\n    echo &#x27;&lt;script type=&quot;application/ld+json&quot;&gt;&#x27; . wp_json_encode(array_filter($data), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . &#x27;&lt;/script&gt;&#x27;;\n});</code></pre></div>",
     "exercise": "JSON-LD مقاله را برای single post بساز و در Rich Results Test گوگل بررسی کن."
    },
    {
     "title": "دیباگ در وردپرس: WP_DEBUG، لاگ و Query Monitor",
     "content": "<p>وقتی صفحه‌ی سفید می‌بینی یا کند است، حدس نزن؛ ابزار بگیر. در <code>wp-config.php</code> روی محیط توسعه: <code>WP_DEBUG</code> true، <code>WP_DEBUG_LOG</code> true (نوشتن در <code>wp-content/debug.log</code>) و <code>WP_DEBUG_DISPLAY</code> false (خطا روی صفحه‌ی عمومی نمایش داده نشود). در تولید <code>WP_DEBUG</code> را خاموش کن و لاگ را از دسترس عموم خارج کن (خطر نشت مسیر و اطلاعات). افزونه‌ی <b>Query Monitor</b> کوئری‌های دیتابیس (کند، تکراری)، هوک‌ها، درخواست‌های HTTP، خطاهای PHP و قالب بارگذاری‌شده را نشان می‌دهد؛ مهم‌ترین ابزار پیدا کردن N+1 و کوئری سنگین. برای اشکال‌زدایی کدت <code>error_log()</code> و <code>wp_die(var_export(...))</code> موقت، و <b>Xdebug</b> برای breakpoint. هنگام تعارض افزونه‌ها: همه را غیرفعال و یکی‌یکی روشن کن، و با تم پیش‌فرض (Twenty Twenty-Four) امتحان کن. حالت بازیابی (Recovery Mode) ایمیل ورود موقت می‌فرستد.</p><div class='code-block'><div class='cb-head'>wp-config.php</div><pre><code>// wp-config.php (توسعه)\ndefine(&#x27;WP_DEBUG&#x27;, true);\ndefine(&#x27;WP_DEBUG_LOG&#x27;, true);\ndefine(&#x27;WP_DEBUG_DISPLAY&#x27;, false);\ndefine(&#x27;SAVEQUERIES&#x27;, true);          // برای تحلیل کوئری‌ها (فقط توسعه)\n\n// کمک‌تابع لاگ\nfunction my_log($msg) {\n    if (defined(&#x27;WP_DEBUG&#x27;) &amp;&amp; WP_DEBUG) error_log(&#x27;[myplugin] &#x27; . (is_scalar($msg) ? $msg : wp_json_encode($msg)));\n}\nmy_log([&#x27;step&#x27; =&gt; &#x27;checkout&#x27;, &#x27;user&#x27; =&gt; get_current_user_id()]);</code></pre></div>",
     "exercise": "یک تابع بنویس که فقط در WP_DEBUG پیام لاگ ثبت کند و با Query Monitor کوئری‌های صفحه‌ی اصلی را بررسی کن."
    },
    {
     "title": "مدیریت وابستگی و استقرار: Composer، Git و محیط‌ها",
     "content": "<p>سایت وردپرس حرفه‌ای را مثل یک پروژه‌ی نرم‌افزاری اداره کن: ۱) <b>Git</b>: فقط قالب و افزونه‌ی سفارشی خودت را نگه دار؛ هسته، آپلودها و <code>wp-config.php</code> را ignore کن. ۲) <b>Composer</b>: افزونه‌ها و هسته را از <code>wpackagist</code> یا ساختار <b>Bedrock</b> نصب کن تا نسخه‌ها قفل (<code>composer.lock</code>) و قابل بازتولید باشند. ۳) <b>محیط‌ها</b>: توسعه/آزمایشی/تولید با پیکربندی جدا (<code>WP_ENVIRONMENT_TYPE</code>) و رازها در متغیر محیطی. ۴) <b>استقرار</b> خودکار با CI (GitHub Actions) و rsync/SSH یا ابزار استقرار؛ نه آپلود دستی FTP. ۵) به‌روزرسانی افزونه‌ها اول در staging، با پشتیبان‌گیری قبل از آن. ۶) انتقال دیتابیس بین محیط‌ها با <code>wp search-replace</code> (امن برای داده‌ی serialize). ۷) غیرفعال‌کردن ویرایشگر فایل در پیشخوان: <code>DISALLOW_FILE_EDIT</code>.</p><div class='code-block'><div class='cb-head'>composer.json</div><pre><code>{\n  &quot;name&quot;: &quot;acme/site&quot;,\n  &quot;repositories&quot;: [{ &quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://wpackagist.org&quot; }],\n  &quot;require&quot;: {\n    &quot;johnpbloch/wordpress-core&quot;: &quot;^6.6&quot;,\n    &quot;wpackagist-plugin/query-monitor&quot;: &quot;^3.16&quot;,\n    &quot;wpackagist-plugin/wordpress-seo&quot;: &quot;^23.0&quot;\n  },\n  &quot;extra&quot;: {\n    &quot;wordpress-install-dir&quot;: &quot;web/wp&quot;,\n    &quot;installer-paths&quot;: { &quot;web/app/plugins/{$name}/&quot;: [&quot;type:wordpress-plugin&quot;] }\n  }\n}\n# .gitignore\n/web/wp/\n/web/app/uploads/\n/web/app/plugins/\n.env\n/vendor/</code></pre></div>",
     "exercise": "یک composer.json برای سایت با دو افزونه از wpackagist بنویس و فایل .gitignore مناسب بساز."
    },
    {
     "title": "دسترس‌پذیری قالب: کیبورد، Skip Link و ARIA در وردپرس",
     "content": "<p>قالب باید با صفحه‌خوان و کیبورد کار کند. اقدامات پایه: ۱) <b>Skip link</b> «پرش به محتوا» (<code>&lt;a class=\"skip-link screen-reader-text\" href=\"#content\"&gt;</code>) اولین عنصر body؛ ۲) ساختار عنوان منطقی (یک h1 در هر صفحه)؛ ۳) نقاط عطف: <code>&lt;header&gt;</code>, <code>&lt;nav aria-label=\"منوی اصلی\"&gt;</code>, <code>&lt;main id=\"content\"&gt;</code>, <code>&lt;footer&gt;</code>؛ ۴) حلقه‌ی focus مرئی روی همه‌ی عناصر قابل‌تعامل؛ ۵) منوی کشویی با کیبورد و <code>aria-expanded</code>؛ ۶) <code>alt</code> برای تصاویر و برچسب برای فرم‌ها؛ ۷) کنتراست ≥ ۴٫۵؛ ۸) <code>add_theme_support('html5', [...])</code> برای مارک‌آپ معنادار فرم جست‌وجو و کامنت. کلاس <code>screen-reader-text</code> متن را فقط برای صفحه‌خوان نگه می‌دارد. قالب‌های رسمی وردپرس نمونه‌ی خوبی‌اند. با WAVE و axe و تست دستی (Tab زدن در کل سایت) بررسی کن؛ ابزار خودکار حدود ۳۰–۴۰٪ مشکل‌ها را می‌گیرد.</p><div class='code-block'><div class='cb-head'>header.php + style.css</div><pre><code>&lt;!-- header.php --&gt;\n&lt;body &lt;?php body_class(); ?&gt;&gt;\n&lt;?php wp_body_open(); ?&gt;\n&lt;a class=&quot;skip-link screen-reader-text&quot; href=&quot;#content&quot;&gt;&lt;?php esc_html_e(&#x27;پرش به محتوا&#x27;, &#x27;mytheme&#x27;); ?&gt;&lt;/a&gt;\n&lt;header&gt;\n  &lt;nav aria-label=&quot;&lt;?php esc_attr_e(&#x27;منوی اصلی&#x27;, &#x27;mytheme&#x27;); ?&gt;&quot;&gt;\n    &lt;?php wp_nav_menu([&#x27;theme_location&#x27; =&gt; &#x27;primary&#x27;, &#x27;container&#x27; =&gt; false]); ?&gt;\n  &lt;/nav&gt;\n&lt;/header&gt;\n&lt;main id=&quot;content&quot; tabindex=&quot;-1&quot;&gt;\n\n/* style.css */\n.skip-link:focus { position: fixed; inset-block-start: .5rem; inset-inline-start: .5rem; z-index: 100000; background: #000; color: #fff; padding: .75rem 1rem; }\na:focus-visible, button:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }</code></pre></div>",
     "exercise": "سایت خودت را فقط با کیبورد پیمایش کن و فهرست مشکلات را بنویس."
    },
    {
     "title": "فرم تماس و ایمیل: wp_mail، SMTP و مقابله با اسپم",
     "content": "<p>فرم تماس ساده ظاهراً آسان است ولی دو مشکل دارد: <b>تحویل ایمیل</b> و <b>اسپم</b>. <code>wp_mail()</code> از <code>mail()</code> سرور استفاده می‌کند که اغلب در Spam می‌افتد (یا اصلاً ارسال نمی‌شود). راه‌حل: <b>SMTP</b> معتبر (سرویس تراکنشی مثل Brevo، Mailgun، SES یا SMTP سرویس‌دهنده) با افزونه یا <code>phpmailer_init</code>، و تنظیم <b>SPF/DKIM/DMARC</b> دامنه. امنیت ارسال: <code>From</code> را ثابت و مال دامنه‌ی خودت بگذار و آدرس کاربر را در <code>Reply-To</code> بریز (و حتماً اعتبارسنجی <code>is_email</code> و پاک‌سازی تا از Header Injection جلوگیری کنی). ضد اسپم: Nonce، فیلد honeypot پنهان، محدودیت نرخ، reCAPTCHA/Turnstile و فهرست کلمات. افزونه‌های Contact Form 7/WPForms/Fluent Forms این‌ها را آماده می‌دهند؛ برای یادگیری و کنترل، یک پیاده‌سازی دستی بنویس. پیام‌ها را در دیتابیس هم ذخیره کن تا با خرابی ایمیل از دست نروند.</p><div class='code-block'><div class='cb-head'>contact.php</div><pre><code>add_action(&#x27;admin_post_nopriv_contact&#x27;, &#x27;handle_contact&#x27;);\nadd_action(&#x27;admin_post_contact&#x27;, &#x27;handle_contact&#x27;);\nfunction handle_contact() {\n    if (!wp_verify_nonce($_POST[&#x27;_wpnonce&#x27;] ?? &#x27;&#x27;, &#x27;contact_form&#x27;)) wp_die(&#x27;درخواست نامعتبر&#x27;, 403);\n    if (!empty($_POST[&#x27;website&#x27;])) wp_safe_redirect(home_url(&#x27;/thanks/&#x27;)) &amp;&amp; exit;          // honeypot: فقط ربات پر می‌کند\n    $name  = sanitize_text_field($_POST[&#x27;name&#x27;] ?? &#x27;&#x27;);\n    $email = sanitize_email($_POST[&#x27;email&#x27;] ?? &#x27;&#x27;);\n    $msg   = sanitize_textarea_field($_POST[&#x27;message&#x27;] ?? &#x27;&#x27;);\n    if (!$name || !is_email($email) || mb_strlen($msg) &lt; 10) wp_safe_redirect(add_query_arg(&#x27;err&#x27;, 1, wp_get_referer())) &amp;&amp; exit;\n    wp_insert_post([&#x27;post_type&#x27; =&gt; &#x27;contact_msg&#x27;, &#x27;post_title&#x27; =&gt; $name, &#x27;post_content&#x27; =&gt; $msg, &#x27;post_status&#x27; =&gt; &#x27;private&#x27;, &#x27;meta_input&#x27; =&gt; [&#x27;email&#x27; =&gt; $email]]);\n    wp_mail(get_option(&#x27;admin_email&#x27;), &#x27;پیام جدید از سایت&#x27;, $msg, [&#x27;Reply-To: &#x27; . $name . &#x27; &lt;&#x27; . $email . &#x27;&gt;&#x27;]);\n    wp_safe_redirect(home_url(&#x27;/thanks/&#x27;)); exit;\n}</code></pre></div>",
     "exercise": "فرم تماس با honeypot و nonce بساز که پیام را ایمیل و در دیتابیس ذخیره کند."
    }
   ],
   "quiz": [
    {
     "q": "Custom Post Type برای چه استفاده می‌شود؟",
     "options": [
      "تغییر رنگ سایت",
      "تعریف نوع محتوای جدید غیر از نوشته/صفحهٔ پیش‌فرض، با فیلدهای مخصوص",
      "نصب افزونه",
      "تغییر دیتابیس"
     ],
     "answer": 1,
     "explain": "مثلاً 'فیلم' یا 'محصول' که ساختار متفاوتی از یک نوشتهٔ معمولی دارند."
    },
    {
     "q": "حداقل چه چیزی لازم است تا وردپرس یک فایل PHP را به‌عنوان افزونه بشناسد؟",
     "options": [
      "فقط قرار گرفتن در پوشهٔ درست بدون هیچ محتوایی خاص",
      "یک کامنت مشخص در بالای فایل (Plugin Name و...)",
      "نوشتن کد جاوااسکریپت",
      "اتصال به دیتابیس"
     ],
     "answer": 1,
     "explain": "وردپرس این کامنت هدر را برای شناسایی افزونه می‌خواند."
    },
    {
     "q": "WooCommerce چیست؟",
     "options": [
      "یک قالب رایگان",
      "محبوب‌ترین افزونهٔ فروشگاه‌ساز روی وردپرس",
      "یک زبان برنامه‌نویسی",
      "جایگزین PHP"
     ],
     "answer": 1,
     "explain": "WooCommerce قابلیت کامل فروشگاه آنلاین (محصول، سبد خرید، پرداخت) را اضافه می‌کند."
    },
    {
     "q": "REST API وردپرس چه چیزی برمی‌گرداند؟",
     "options": [
      "فایل HTML کامل",
      "داده به‌صورت JSON، قابل استفاده در هر Frontend مثل React",
      "فقط تصویر",
      "فایل PHP"
     ],
     "answer": 1,
     "explain": "این امکان استفادهٔ Headless از وردپرس (فقط به‌عنوان منبع داده) را می‌دهد."
    },
    {
     "q": "Filter در وردپرس چه می‌کند؟",
     "options": [
      "داده را تغییر می‌دهد و باید برگرداند",
      "فقط لاگ می‌گیرد",
      "فایل حذف می‌کند",
      "هیچ"
     ],
     "answer": 0,
     "explain": "برخلاف Action که کاری انجام می‌دهد."
    },
    {
     "q": "قاعده‌ی ایمنی ورودی/خروجی چیست؟",
     "options": [
      "ورودی Sanitize، خروجی Escape",
      "فقط Escape ورودی",
      "هیچ‌کدام",
      "فقط Sanitize خروجی"
     ],
     "answer": 0,
     "explain": "از XSS و ورودی بد جلوگیری می‌کند."
    },
    {
     "q": "در register_rest_route چه چیزی الزامی است؟",
     "options": [
      "permission_callback",
      "رنگ",
      "تصویر",
      "جدول"
     ],
     "answer": 0,
     "explain": "بدون آن ریسک امنیتی دارد."
    },
    {
     "q": "برای SQL مستقیم چه استفاده کنیم؟",
     "options": [
      "$wpdb->prepare",
      "الحاق رشته",
      "eval",
      "sleep"
     ],
     "answer": 0,
     "explain": "جلوی SQL Injection را می‌گیرد."
    },
    {
     "q": "در Shortcode خروجی را چگونه برگردانیم؟",
     "options": [
      "با return (نه echo)",
      "با echo",
      "با die",
      "با print_r"
     ],
     "answer": 0,
     "explain": "echo خروجی را بالای صفحه می‌اندازد؛ از return یا ob_start استفاده کن."
    },
    {
     "q": "بررسی دسترسی در وردپرس باید با چه چیزی انجام شود؟",
     "options": [
      "current_user_can('capability')",
      "نام نقش کاربر",
      "IP",
      "کوکی"
     ],
     "answer": 0,
     "explain": "نقش‌ها سفارشی می‌شوند؛ قابلیت‌ها معیار درست‌اند."
    },
    {
     "q": "چرا dbDelta هنگام فعال‌سازی افزونه استفاده می‌شود؟",
     "options": [
      "جدول را بدون حذف داده می‌سازد/به‌روز می‌کند",
      "فقط حذف می‌کند",
      "کش می‌کند",
      "ایمیل می‌فرستد"
     ],
     "answer": 0,
     "explain": "برای ارتقای اسکیما در نسخه‌های بعد هم دوباره قابل‌اجراست."
    },
    {
     "q": "تصویر اصلی بالای صفحه (LCP) باید چگونه باشد؟",
     "options": [
      "بدون lazy و با fetchpriority=high",
      "lazy",
      "بدون alt",
      "بسیار بزرگ"
     ],
     "answer": 0,
     "explain": "lazy کردن LCP آن را دیرتر بارگذاری می‌کند."
    }
   ],
   "challenge": {
    "task": "برای یک سایت 'نمایشگاه هنری آنلاین'، یک Custom Post Type به اسم 'artwork' طراحی کن (روی کاغذ/متن، با register_post_type)، سه Custom Field پیشنهادی (مثل هنرمند، سال، قیمت)، و توضیح بده چطور با REST API وردپرس (wp-json/wp/v2/artwork) می‌تونی این آثار رو توی یه صفحهٔ React نمایش بدی.",
    "hint1": "برای register_post_type، حتماً 'show_in_rest' => true رو هم اضافه کن تا این Post Type اصلاً توی REST API قابل‌دسترسی باشه.",
    "hint2": "توی React، دقیقاً همون الگوی fetch + useState + useEffect که قبلاً یاد گرفتی رو برای گرفتن لیست آثار هنری از API وردپرس استفاده کن.",
    "solution": "<?php\nfunction register_artwork_post_type() {\n    register_post_type('artwork', [\n        'labels' => ['name' => 'آثار هنری'],\n        'public' => true,\n        'show_in_rest' => true, // برای دسترسی از REST API\n        'supports' => ['title', 'editor', 'thumbnail']\n    ]);\n}\nadd_action('init', 'register_artwork_post_type');\n?>\n\n// Custom Fields پیشنهادی (با ACF): artist_name, year_created, price\n\n// در React:\n// fetch('https://yoursite.com/wp-json/wp/v2/artwork')\n//   .then(res => res.json())\n//   .then(data => setArtworks(data));"
   }
  }
 ],
 "project": {
  "title": "راه‌اندازی کامل یک سایت وردپرسی واقعی",
  "brief": "یک سایت کامل بساز (لوکال یا روی هاست رایگان): یک سایت وبلاگی یا شرکتی با حداقل ۵ نوشته/صفحه، یک قالب سفارشی‌شده (با Child Theme)، منوی کامل، و حداقل یک Custom Post Type یا افزونهٔ سفارشی که خودت نوشتی.",
  "requirements": [
   "نصب کامل وردپرس (لوکال یا هاست) با حداقل ۵ نوشته/صفحه و دسته‌بندی/برچسب مناسب",
   "یک Child Theme واقعی با حداقل یک استایل سفارشی",
   "منوی اصلی و حداقل یک ویجت در سایدبار/فوتر",
   "یک Custom Post Type یا یک افزونهٔ ساده که خودت با PHP نوشتی (نه فقط نصب یه افزونهٔ آماده)",
   "نصب و تنظیم حداقل یک افزونهٔ سئو (Yoast) روی همهٔ محتوا"
  ],
  "hints": [
   "اول با محتوا و ساختار سایت شروع کن (نوشته‌ها، منو)، بعد بری سراغ توسعه (Child Theme، Custom Post Type) — دقیقاً مثل جدانگه‌داشتن HTML از منطق برنامه که قبلاً یاد گرفتی."
  ]
 }
});
