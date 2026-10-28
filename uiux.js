(window.COURSES=window.COURSES||[]).push({
 "id": "uiux",
 "name": "طراحی UI/UX",
 "icon": "🎯",
 "kind": "theory",
 "desc": "قبل از نوشتن کد، باید بدونی چرا داری این چیزو این‌شکلی طراحی می‌کنی",
 "covers": [
  "UI در برابر UX، Design Thinking",
  "تئوری رنگ، Typography، Spacing/Grid",
  "Wireframe، Mockup، Prototype",
  "اصول Usability و Heuristics نیلسن",
  "Design System، Figma پایه",
  "تست کاربر (User Testing) و بازخورد"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "UI در برابر UX: دو چیز متفاوت که با هم اشتباه گرفته می‌شن",
     "content": "<p><b>UI (User Interface)</b> ظاهر است: رنگ، فونت، دکمه، چیدمان. <b>UX (User Experience)</b> احساس و تجربهٔ کلی کاربر در استفاده از محصول است: آیا پیداکردن دکمهٔ خرید راحت بود؟ آیا فرآیند ثبت‌نام گیج‌کننده بود؟ یک سایت می‌تواند UI زیبا ولی UX افتضاح داشته باشد (مثلاً دکمهٔ خرید قایم شده زیر ۵ تا پاپ‌آپ).</p><p>فرآیند <b>Design Thinking</b> معمولاً این مراحل را دارد: <b>Empathize</b> (فهمیدن نیاز واقعی کاربر) → <b>Define</b> (تعریف دقیق مسئله) → <b>Ideate</b> (تولید ایده) → <b>Prototype</b> (ساخت نمونهٔ اولیه) → <b>Test</b> (تست با کاربر واقعی).</p>",
     "exercise": "یک اپلیکیشن که استفاده کردی و از UX بدش شاکی بودی رو مثال بزن (نه فقط ظاهرش، بلکه تجربهٔ واقعی استفاده). دقیقاً کجاش گیج‌کننده بود؟"
    },
    {
     "title": "تئوری رنگ و کاربردش در طراحی",
     "content": "<p>رنگ‌ها احساس منتقل می‌کنند: آبی معمولاً اعتماد (بانک‌ها)، قرمز فوریت/هشدار (تخفیف، خطا)، سبز موفقیت/تایید. یک پالت رنگی حرفه‌ای معمولاً شامل: <b>رنگ اصلی (Primary)</b>، <b>رنگ ثانویه (Secondary)</b>، و <b>رنگ‌های خنثی (Neutral)</b> برای متن/پس‌زمینه است. <b>کنتراست</b> کافی بین متن و پس‌زمینه، هم برای خوانایی هم برای دسترسی‌پذیری (Accessibility) حیاتی است — استاندارد WCAG حداقل نسبت کنتراست ۴.۵:۱ برای متن معمولی را توصیه می‌کند.</p>",
     "exercise": "سه اپ/سایت معروف رو در نظر بگیر (مثلاً یک بانک، یک فروشگاه، یک شبکهٔ اجتماعی) و رنگ اصلی هرکدوم رو بنویس. حدس بزن چرا اون رنگ رو انتخاب کردن."
    },
    {
     "title": "Typography و Spacing: جزئیاتی که حس حرفه‌ای‌بودن می‌سازن",
     "content": "<p>استفاده از بیش از ۲ فونت متفاوت در یک صفحه معمولاً به‌هم‌ریخته به‌نظر می‌رسد. <b>سلسله‌مراتب بصری (Visual Hierarchy)</b> با اندازهٔ فونت متفاوت (h1 بزرگ‌تر از h2، h2 بزرگ‌تر از متن معمولی) به کاربر می‌گوید کدام بخش مهم‌تر است. <b>Spacing</b> (فاصلهٔ یکنواخت بین عناصر، معمولاً بر اساس واحد ۴ یا ۸ پیکسل) باعث می‌شود صفحه منظم و «نفس‌کشیدنی» به‌نظر برسد — نه شلوغ و فشرده.</p>",
     "exercise": "یک صفحهٔ (وب یا اپ) که به‌نظرت خیلی شلوغ/بی‌نظمه رو پیدا کن و بنویس دقیقاً کدوم اصل (فونت زیاد؟ فاصلهٔ نامنظم؟ کنتراست کم؟) رو رعایت نکرده."
    },
    {
     "title": "سلسله‌مراتب بصری و چیدمان",
     "content": "<p>چشم کاربر ابتدا بزرگ‌ترین، پررنگ‌ترین و پرکنتراست‌ترین چیز را می‌بیند. با <b>اندازه، وزن، رنگ و فضای خالی</b> مشخص کن چه چیزی مهم‌تر است. چیدمان را روی شبکهٔ ۸ پیکسلی بساز و عناصر مرتبط را نزدیک هم بگذار (قانون مجاورت).",
     "exercise": "یک صفحهٔ فرود را طوری بازطراحی کن که فقط یک دکمهٔ اصلی در نگاه اول دیده شود."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی UI و UX چیست؟",
     "options": [
      "تفاوتی ندارند",
      "UI ظاهر است، UX تجربهٔ کلی استفاده از محصول است",
      "UX فقط رنگ‌هاست",
      "UI فقط برای موبایل است"
     ],
     "answer": 1,
     "explain": "یک محصول می‌تواند UI زیبا ولی UX ضعیف داشته باشد یا برعکس."
    },
    {
     "q": "استاندارد WCAG حداقل نسبت کنتراست پیشنهادی برای متن معمولی را چقدر می‌داند؟",
     "options": [
      "1:1",
      "4.5:1",
      "10:1",
      "بدون استاندارد"
     ],
     "answer": 1,
     "explain": "این حداقل برای خوانایی مناسب برای اکثر کاربران، از جمله افراد کم‌بینا، لازم است."
    },
    {
     "q": "سلسله‌مراتب بصری (Visual Hierarchy) با چه ابزاری معمولاً ایجاد می‌شود؟",
     "options": [
      "فقط رنگ قرمز",
      "اندازهٔ متفاوت فونت‌ها برای نشان‌دادن اهمیت نسبی محتوا",
      "حذف تمام تصاویر",
      "استفاده از یک رنگ برای همه‌چیز"
     ],
     "answer": 1,
     "explain": "عناصر مهم‌تر معمولاً بزرگ‌تر یا پررنگ‌تر نمایش داده می‌شوند تا چشم کاربر را هدایت کنند."
    }
   ],
   "challenge": {
    "task": "یک پالت رنگی کامل برای یک اپلیکیشن فرضی «مدیریت مالی شخصی» طراحی کن: یک رنگ اصلی، یک رنگ ثانویه، رنگ موفقیت (برای واریز)، رنگ هشدار (برای هزینهٔ زیاد)، و دو رنگ خنثی برای متن/پس‌زمینه. برای هر رنگ کد Hex پیشنهادی و دلیل انتخابش رو بنویس.",
    "hint1": "برای یک اپ مالی، معمولاً آبی یا سبز تیره حس اعتماد و امنیت می‌ده؛ قرمز رو فقط برای هشدار/کسری نگه دار، نه برای عناصر معمولی.",
    "hint2": "رنگ‌های خنثی (خاکستری‌های مختلف) بیشترین سطح صفحه رو می‌پوشونن؛ رنگ اصلی رو فقط برای دکمه‌های کلیدی و لینک‌ها استفاده کن، نه همه‌جا.",
    "solution": "نمونه:\nرنگ اصلی: #1E3A8A (آبی تیره) — حس اعتماد و ثبات مالی\nرنگ ثانویه: #0EA5E9 (آبی روشن) — برای دکمه‌های ثانویه و لینک‌ها\nموفقیت (واریز): #16A34A (سبز)\nهشدار (هزینهٔ زیاد): #DC2626 (قرمز)\nخنثی تیره (متن): #1F2937\nخنثی روشن (پس‌زمینه): #F9FAFB"
   }
  },
  {
   "lessons": [
    {
     "title": "Wireframe، Mockup و Prototype: سه سطح از واقعی‌بودن",
     "content": "<p><b>Wireframe</b> طرح خیلی ساده و بدون رنگ/جزئیات است — فقط نشان می‌دهد چه چیزی کجاست (جعبه‌های خاکستری). <b>Mockup</b> نسخهٔ باکیفیت‌تر با رنگ، فونت و تصاویر واقعی است ولی هنوز غیرقابل‌کلیک. <b>Prototype</b> نسخه‌ای قابل‌تعامل است (می‌توانید دکمه بزنید و بین صفحات حرکت کنید) بدون نوشتن حتی یک خط کد واقعی — معمولاً با ابزارهایی مثل Figma ساخته می‌شود.</p><p>چرا این مراحل قبل از کد نویسی مهم‌اند؟ چون تغییردادن یک Wireframe چند دقیقه طول می‌کشد؛ تغییردادن یک اپلیکیشن کدشدهٔ کامل، روزها.</p>",
     "exercise": "برای یک صفحهٔ ورود (Login) ساده، توضیح بده (به‌صورت متنی) که Wireframe‌اش چه جعبه‌هایی داره، بدون فکرکردن به رنگ یا فونت."
    },
    {
     "title": "اصول Usability: ۱۰ اصل نیلسن (خلاصه)",
     "content": "<p>Jakob Nielsen ۱۰ اصل کاربردپذیری تعریف کرده که هنوز استاندارد صنعت است. چندتای کلیدی:</p><ul><li><b>نمایان‌بودن وضعیت سیستم:</b> کاربر باید بداند الان چه اتفاقی می‌افتد (مثل نشانگر Loading)</li><li><b>تطابق با دنیای واقعی:</b> از زبان و نمادهای آشنا برای کاربر استفاده کن، نه اصطلاحات فنی</li><li><b>کنترل و آزادی کاربر:</b> همیشه راه «برگشت» یا «لغو» وجود داشته باشد</li><li><b>ثبات و استانداردها:</b> یک دکمه در کل اپ باید همیشه یک شکل و رفتار داشته باشد</li><li><b>پیشگیری از خطا:</b> بهتر از نمایش پیام خطا، جلوی وقوعش رو بگیر (مثلاً دکمهٔ حذف رو با تاییدیه)</li></ul>",
     "exercise": "یک اپ که استفاده می‌کنی رو بررسی کن و بگو کدوم یکی از این ۵ اصل رو خوب رعایت کرده و کدوم رو نه."
    },
    {
     "title": "تجربهٔ موبایل و میکرواینتراکشن",
     "content": "<p>در موبایل ابتدا اولویت‌ها را مشخص کن (Mobile First)، دکمه‌ها را در دسترس شست بگذار و فرم‌ها را کوتاه نگه دار. <b>میکرواینتراکشن‌ها</b> بازخورد کوچک‌اند: تغییر دکمه هنگام لمس، تیک موفقیت، اسکلتون هنگام بارگذاری. مدتشان معمولاً ۱۰۰ تا ۳۰۰ میلی‌ثانیه است و باید معنی داشته باشند، نه تزئین.",
     "exercise": "برای دکمهٔ ارسال یک فرم، چهار حالت (عادی، لمس، در حال ارسال، موفق) طراحی کن."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت Wireframe و Mockup چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Wireframe ساختار خام بدون جزئیات بصری است؛ Mockup نسخهٔ باکیفیت با رنگ و فونت واقعی است",
      "Mockup قابل کلیک است ولی Wireframe نه",
      "Wireframe فقط برای موبایل است"
     ],
     "answer": 1,
     "explain": "Wireframe روی چیدمان تمرکز دارد؛ Mockup روی ظاهر نهایی."
    },
    {
     "q": "چرا ساخت Prototype قبل از کدنویسی صرفه‌جویی در وقت می‌کند؟",
     "options": [
      "نمی‌کند، فقط وقت تلف می‌شود",
      "تغییر یک طرح غیرکدی بسیار سریع‌تر از تغییر یک اپلیکیشن کدشده است",
      "Prototype جایگزین کد است",
      "فقط برای نمایش به مشتری است"
     ],
     "answer": 1,
     "explain": "مشکلات طراحی را قبل از سرمایه‌گذاری زمان در کدنویسی کشف می‌کنید."
    },
    {
     "q": "کدام مورد جزو اصول Usability نیلسن است؟",
     "options": [
      "استفاده از حداکثر تعداد رنگ ممکن",
      "نمایان‌بودن وضعیت سیستم برای کاربر (مثل نشانگر Loading)",
      "حذف تمام دکمه‌های برگشت/لغو",
      "استفاده از اصطلاحات فنی پیچیده"
     ],
     "answer": 1,
     "explain": "کاربر باید همیشه بداند سیستم در چه وضعیتی است."
    }
   ],
   "challenge": {
    "task": "برای یک اپ فرضی «رزرو باشگاه ورزشی»، یک Wireframe متنی (توضیح جعبه‌به‌جعبه) برای صفحهٔ اصلی بنویس که شامل: هدر با لوگو/منو، یک بخش برای انتخاب کلاس ورزشی، دکمهٔ رزرو، و نمایش کلاس‌های رزروشدهٔ قبلی باشه. بعد توضیح بده کدوم اصل از ۵ اصل نیلسنی که خوندی رو در طراحیت رعایت کردی.",
    "hint1": "برای هر بخش، فقط بگو 'کجا' و 'چی' — نه رنگ و فونت. مثلاً: 'بالای صفحه یک نوار با لوگو سمت راست و ۳ آیتم منو سمت چپ'.",
    "hint2": "برای اصل نیلسنی، به 'کنترل و آزادی کاربر' فکر کن — مثلاً امکان لغو رزرو، یا 'پیشگیری از خطا' — مثل تاییدیه قبل از رزرو نهایی.",
    "solution": "Wireframe متنی:\n- هدر: لوگو (راست) + منو (چپ: خانه، کلاس‌ها، رزروهای من)\n- بخش اصلی: گرید کارت‌های کلاس (نام کلاس، ساعت، ظرفیت باقی‌مانده) هرکدوم با دکمهٔ 'رزرو'\n- بعد از کلیک رزرو: یک modal تاییدیه ('مطمئنی می‌خوای این کلاس رو رزرو کنی؟')\n- پایین صفحه: بخش 'رزروهای من' با دکمهٔ لغو کنار هرکدوم\n\nاصل رعایت‌شده: پیشگیری از خطا (تاییدیهٔ قبل از رزرو نهایی) + کنترل و آزادی کاربر (امکان لغو رزرو در هر زمان)."
   }
  },
  {
   "lessons": [
    {
     "title": "مقدمات کار با Figma",
     "content": "<p><b>Figma</b> محبوب‌ترین ابزار طراحی UI/UX است — رایگان، مبتنی بر مرورگر، و امکان همکاری هم‌زمان چند طراح روی یک فایل را دارد. مفاهیم پایه: <b>Frame</b> (بوم طراحی، معادل صفحه یا کامپوننت)، <b>Component</b> (عنصر قابل‌استفادهٔ مجدد، مثل یک دکمه که همه‌جای پروژه یکسان بماند)، <b>Auto Layout</b> (چیدمان خودکار شبیه Flexbox که با تغییر محتوا خودش اندازه‌ها را تنظیم می‌کند).</p>",
     "exercise": "اگه به Figma دسترسی داری، یک Frame با یک دکمهٔ ساده (مستطیل + متن) بساز و یک بار به‌عنوان Component ذخیره‌اش کن. اگه دسترسی نداری، توضیح بده Component در Figma چه شباهتی به یک React Component داره."
    },
    {
     "title": "Design System: زبان طراحی یکپارچه برای کل محصول",
     "content": "<p>یک <b>Design System</b> مجموعه‌ای از قوانین و کامپوننت‌های آماده (رنگ‌ها، فونت‌ها، دکمه‌ها، فاصله‌ها) است که تضمین می‌کند کل تیم (طراح و برنامه‌نویس) از یک زبان بصری واحد استفاده کنند — دقیقاً همان چیزی که در درس CSS Variables دیدید (رنگ‌های یکبار تعریف‌شده)، اینجا در سطح طراحی تعریف می‌شود. شرکت‌های بزرگ Design System های عمومی دارند (مثل Material Design گوگل، Human Interface Guidelines اپل).</p>",
     "exercise": "توضیح بده چرا داشتن یک Design System برای یک تیم ۱۰نفرهٔ طراح/برنامه‌نویس، جلوی «هر صفحه یه رنگ آبی متفاوت» رو می‌گیره."
    },
    {
     "title": "تست کاربر (User Testing) و بازخورد",
     "content": "<p>هیچ‌قدر هم که طراح باتجربه باشید، نمی‌توانید حدس بزنید کاربر واقعی کجا گیر می‌کند — باید <b>تست</b> کنید. روش ساده: چند کاربر واقعی (حتی ۵ نفر کافی است طبق تحقیقات نیلسن) را بگذارید بدون راهنمایی از یک Prototype استفاده کنند و ببینید کجا مکث می‌کنند یا اشتباه می‌زنند. این خیلی ارزان‌تر از کشف مشکل بعد از انتشار محصول است.</p>",
     "exercise": "فکر کن یه اپ رزرو غذا طراحی کردی. یک سناریوی تست کاربر بنویس (مثلاً 'یک پیتزا سفارش بده و به مرحلهٔ پرداخت برسه') که بهت نشون بده UX واقعاً خوبه یا نه."
    },
    {
     "title": "تحقیق کاربر و Persona",
     "content": "<p>طراحی خوب با حدس شروع نمی‌شود. با <b>مصاحبه</b>، <b>پرسشنامه</b> و مشاهدهٔ رفتار واقعی، مشکل کاربر را پیدا کن. خروجی را در <b>Persona</b> خلاصه کن: یک کاربر نمونه با هدف، دغدغه و مهارت فنی. بعد هر تصمیم طراحی را با این سؤال بسنج: «این به درد Persona ما می‌خورد؟»",
     "exercise": "برای یک اپ سفارش غذا یک Persona بساز و سه نیازش را بنویس."
    },
    {
     "title": "دسترسی‌پذیری در طراحی (WCAG)",
     "content": "<p>استاندارد WCAG چهار اصل دارد: قابل‌درک، قابل‌استفاده، قابل‌فهم و مقاوم. در عمل: کنتراست متن حداقل ۴.۵ به ۱، هدف‌های لمسی حداقل ۴۴ پیکسل، عدم تکیهٔ صرف بر رنگ (مثلاً خطا فقط با قرمز)، و قابل‌استفاده بودن کامل با کیبورد.",
     "exercise": "کنتراست رنگ‌های یک طراحی را با یک ابزار Contrast Checker بسنج و اصلاح کن."
    },
    {
     "title": "معماری اطلاعات (Information Architecture)",
     "content": "<p>IA یعنی چینش محتوا طوری که کاربر راحت پیدایش کند. ابزارها: <b>Card Sorting</b> (از کاربر بخواه کارت‌ها را گروه‌بندی کند)، <b>Sitemap</b> (نقشهٔ صفحات) و <b>User Flow</b> (مسیر رسیدن به یک هدف). قاعدهٔ کلی: عمق ناوبری کم، برچسب‌های ساده و منوی ثابت.</p>",
     "exercise": "برای کافه‌ای با منو و رزرو یک sitemap و user flow رزرو میز بکش."
    },
    {
     "title": "Design Tokens و تحویل به برنامه‌نویس",
     "content": "<p><b>Design Token</b> یعنی ثبت تصمیم‌های طراحی (رنگ، فاصله، فونت، شعاع) به‌صورت نام‌دار: <code class='inline'>color-primary</code> به‌جای کد رنگ. در Figma به Variables و در کد به CSS Variables تبدیل می‌شود. برای تحویل: اسم لایه‌ها منظم، حالت‌های hover/disabled/error مشخص و Spec فاصله‌ها آماده باشد.</p>",
     "exercise": "برای یک پروژه ۶ توکن رنگ و ۴ توکن فاصله تعریف کن."
    },
    {
     "title": "طراحی فرم و ثبت‌نام بدون اصطکاک",
     "content": "<p>فرم کوتاه‌تر یعنی تبدیل بیشتر. فقط فیلد ضروری بپرس، برچسب بالای فیلد بگذار، خطا را کنار همان فیلد و با راه‌حل نشان بده، نوع کیبورد را متناسب انتخاب کن و ورود با شبکه اجتماعی یا کد یک‌بارمصرف را در نظر بگیر.</p>",
     "exercise": "فرم ثبت‌نام ۸ فیلدی را به ۳ فیلد کاهش بده و توجیه کن."
    },
    {
     "title": "A/B تست و تصمیم بر اساس داده",
     "content": "<p>دو نسخه (A و B) را همزمان به گروه‌های تصادفی نشان بده و فقط یک چیز را تغییر بده. قبل از شروع، معیار موفقیت و حجم نمونه را مشخص کن و آزمایش را زود متوقف نکن. نتیجه‌ی معنادار آماری لازم است، نه فقط عدد بزرگ‌تر.</p>",
     "exercise": "یک فرضیه برای تغییر دکمه‌ی CTA و معیار موفقیتش بنویس."
    },
    {
     "title": "Double Diamond و فرایند طراحی محصول",
     "content": "<p>فرایند Double Diamond دو مرحله‌ی «باز و بسته» دارد: مسئله را کشف و تعریف کن (Discover و Define) و سپس راه‌حل را کشف و تحویل بده (Develop و Deliver). خطای رایج پرش مستقیم به راه‌حل است. هر مرحله خروجی مشخص دارد: بینش پژوهش، بیانیه‌ی مسئله، ایده‌ها و نمونه، و راه‌حل آزمایش‌شده. فرایند خطی نیست و بر اساس یافته‌ها برمی‌گردی.</p>",
     "exercise": "فرایند طراحی یک اپ رزرو نوبت را در چهار مرحله با خروجی هر مرحله بنویس."
    },
    {
     "title": "روش‌های پژوهش کاربر: مصاحبه، پرسشنامه، مشاهده",
     "content": "<p>پرسش «چرا» با مصاحبه‌ی نیمه‌ساختاریافته و «چقدر» با پرسشنامه پاسخ داده می‌شود. سؤال باز و بی‌جهت‌گیری بپرس («آخرین بار چطور رزرو کردی؟» نه «از رزرو آنلاین خوشت می‌آید؟»). مشاهده‌ی میدانی و دفترچه‌ی خاطرات رفتار واقعی را نشان می‌دهد که با گفتار فرق دارد. سوگیری تأییدی را با ضبط و تحلیل مشترک کنترل کن و یافته‌ها را با Affinity Map گروه‌بندی کن.</p>",
     "exercise": "هشت سؤال بی‌جهت‌گیری برای مصاحبه با کاربران یک کافه بنویس."
    },
    {
     "title": "تست قابلیت استفاده: روش و معیارها",
     "content": "<p>با ۵ کاربر هدفمند حدود ۸۵٪ مشکلات رایج پیدا می‌شود؛ بهتر چند دور کوچک تا یک دور بزرگ. روش «بلندفکرکردن» (Think-aloud) استدلال کاربر را نشان می‌دهد و تو دخالت نمی‌کنی. معیارها: نرخ موفقیت کار، زمان انجام، تعداد خطا و امتیاز رضایت (SUS). مشکلات را با شدت (بحرانی، جدی، جزئی) و فراوانی اولویت‌بندی کن و بازآزمایی کن.</p>",
     "exercise": "یک سناریوی تست برای فرآیند ثبت‌نام با ۳ وظیفه و معیار موفقیت بنویس."
    },
    {
     "title": "Journey Map و Service Blueprint",
     "content": "<p>Journey Map مراحل تجربه‌ی کاربر (آگاهی تا وفاداری) را با کار، فکر، احساس و نقطه‌ی درد نشان می‌دهد و فرصت‌ها را پیدا می‌کند. Service Blueprint لایه‌ی پشت صحنه (کارمندان، سیستم‌ها، فرایندها) را هم اضافه می‌کند تا ببینی کجا تجربه‌ی جلو صحنه خراب می‌شود. هر دو را بر پایه‌ی داده‌ی واقعی بساز، نه حدس تیم.</p>",
     "exercise": "Journey Map سفارش آنلاین غذا را با سه نقطه‌ی درد بکش."
    },
    {
     "title": "قوانین UX: Fitts، Hick، Miller، Jakob",
     "content": "<p><b>Fitts</b>: زمان رسیدن به هدف با فاصله زیاد و اندازه‌ی کوچک بیشتر می‌شود، پس دکمه‌ی مهم را بزرگ و نزدیک بگذار. <b>Hick</b>: زمان تصمیم با تعداد گزینه‌ها زیاد می‌شود، پس گزینه‌ها را کم و گروه‌بندی کن. <b>Miller</b>: حافظه‌ی کوتاه‌مدت محدود است، پس اطلاعات را تکه‌تکه بده. <b>Jakob</b>: کاربران انتظار دارند سایت تو مثل سایت‌های دیگر کار کند، پس الگوی آشنا را نشکن مگر دلیل قوی داشته باشی.</p>",
     "exercise": "فرم ۱۲ فیلدی را با این قوانین سه‌مرحله‌ای کن و توجیه کن."
    },
    {
     "title": "سیستم بصری: شبکه، مقیاس نوشتار و کنتراست رنگ",
     "content": "<p>فاصله‌ها را از یک مقیاس ثابت (مثلاً ۴/۸/۱۶/۲۴) و اندازه‌ی متن را از مقیاس نوشتاری (۱.۲۵ برابر) انتخاب کن تا طراحی یکدست شود. کنتراست متن و پس‌زمینه باید حداقل ۴.۵ به ۱ (متن بزرگ ۳ به ۱) باشد. نکته‌ی جالب: بنفش <code class='inline'>#8B7CF6</code> روی سفید فقط حدود ۳.۳ به ۱ است و برای متن عادی ناموفق؛ برای دکمه‌ی بزرگ قابل‌قبول و برای متن کوچک باید تیره‌تر شود. با ابزار زیر دو رنگ دلخواه را بسنج.</p>",
     "exercise": "پالت یک برند را بساز و برای هر جفت متن/پس‌زمینه نسبت کنتراست را گزارش کن.",
     "code": {
      "html": "<label>متن <input id='fg' type='color' value='#8b7cf6'></label> <label>پس‌زمینه <input id='bg' type='color' value='#ffffff'></label><div id='box'>نمونه متن</div><p id='out'></p>",
      "css": "#box{padding:12px;border-radius:8px;margin:8px 0;font-weight:600}label{margin-inline-end:12px}",
      "js": "function lum(hex){\n  const c=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255)\n    .map(v=>v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4));\n  return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2];\n}\nfunction ratio(a,b){\n  const [x,y]=[lum(a),lum(b)].sort((p,q)=>q-p);\n  return (x+0.05)/(y+0.05);\n}\n\nconst fg=document.getElementById('fg'),bg=document.getElementById('bg'),out=document.getElementById('out'),box=document.getElementById('box');\nfunction upd(){const r=ratio(fg.value,bg.value);box.style.color=fg.value;box.style.background=bg.value;out.textContent=r.toFixed(2)+':1 — '+(r>=7?'AAA':r>=4.5?'AA':r>=3?'فقط متن بزرگ':'ناموفق');}\nfg.oninput=bg.oninput=upd;upd();"
     }
    },
    {
     "title": "حاکمیت سیستم طراحی: مستندسازی، نسخه‌بندی و مشارکت",
     "content": "<p>سیستم طراحی فقط کتابخانه‌ی کامپوننت نیست؛ اصول، توکن‌ها، الگوها و قواعد استفاده است. هر کامپوننت باید مستند (کاربرد، حالت‌ها، دسترسی‌پذیری، نمونه‌ی درست و غلط) و نسخه‌دار (Semantic Versioning) باشد. فرایند مشارکت و بازبینی تعریف کن، تغییرات را با Changelog اعلام کن و میزان استفاده را بسنج. ابزار: Figma Variables، Storybook و Style Dictionary.</p>",
     "exercise": "فرایند افزودن یک کامپوننت جدید به سیستم طراحی را از درخواست تا انتشار بنویس."
    },
    {
     "title": "دسترسی‌پذیری پیشرفته: WCAG 2.2 و تجربه‌ی screen reader",
     "content": "<p>WCAG 2.2 نکات تازه دارد: اندازه‌ی هدف لمسی حداقل ۲۴ پیکسل، فوکوس نباید پشت عناصر چسبان پنهان شود، جایگزین برای کشیدن (Drag) و پرهیز از ورود مکرر اطلاعات. علاوه بر ابزار خودکار (که فقط بخشی از مشکلات را می‌گیرند) با screen reader (NVDA، VoiceOver) و فقط کیبورد تست کن. ترتیب خواندن، نام کنترل‌ها و اعلام تغییر پویا را بررسی کن. دسترسی شناختی (زبان ساده، خطاهای قابل‌فهم) را فراموش نکن.</p>",
     "exercise": "یک جریان ورود را فقط با کیبورد و screen reader تست و مشکلات را ثبت کن."
    },
    {
     "title": "الگوهای موبایل: ناحیه‌ی شست، ژست و ناوبری",
     "content": "<p>بیشتر کاربران گوشی را با یک دست نگه می‌دارند: کنترل‌های اصلی را در ناحیه‌ی شست (پایین صفحه) بگذار. هدف لمسی حداقل ۴۴ پیکسل. ناوبری پایین (Tab Bar) برای ۳ تا ۵ بخش اصلی و ژست‌ها (کشیدن) همیشه یک جایگزین دکمه‌ای داشته باشند. حالت‌های بارگذاری (اسکلتون)، خالی و خطا را طراحی کن و ورودی کیبورد را با نوع ورودی درست کم‌زحمت کن.</p>",
     "exercise": "صفحه‌ی اصلی یک اپ را برای کاربر یک‌دست بازطراحی کن."
    },
    {
     "title": "طراحی داشبورد و نمایش داده",
     "content": "<p>نمودار را بر اساس پرسش انتخاب کن: روند (خطی)، مقایسه (میله‌ای)، ترکیب (پای فقط برای چند بخش)، همبستگی (پراکنش). نسبت داده به جوهر (Data-ink) را بالا ببر: شبکه‌ی سنگین و افکت سه‌بعدی حذف. مهم‌ترین عدد را بزرگ و بالا بگذار، رنگ را معنادار (نه تزئینی) و برای کم‌بینایان بر رنگ تنها تکیه نکن. فیلتر و بازه‌ی زمانی را در دسترس بگذار.</p>",
     "exercise": "داشبورد فروش یک کافه را با ۴ شاخص و دو نمودار طراحی کن."
    },
    {
     "title": "نگارش UX و تایپوگرافی فارسی (RTL)",
     "content": "<p>میکروکپی خوب کوتاه، روشن و انسانی است: دکمه با فعل عملی («ثبت سفارش» نه «تأیید»)، خطا با راه‌حل («رمز حداقل ۸ نویسه باشد») نه سرزنش. برای فارسی: نیم‌فاصله، ارقام یکدست (فارسی یا لاتین)، فونت خوانا با ارتفاع خط ۱.۷ تا ۱.۹، چیدمان آینه‌ای RTL (آیکن‌های جهت‌دار را برعکس کن) و ترکیب متن لاتین با bdi. متن واقعی را زود در طراحی بگذار، نه Lorem ipsum.</p>",
     "exercise": "پنج پیام خطای ضعیف را به نسخه‌ی روشن و کمک‌کننده بازنویسی کن."
    },
    {
     "title": "اخلاق طراحی، Dark Pattern و UX هوش مصنوعی",
     "content": "<p>Dark Pattern رفتار کاربر را به ضرر خودش هدایت می‌کند (لغو اشتراک پنهان، شمارش معکوس جعلی، پیش‌انتخاب گران‌تر). از آن‌ها پرهیز کن و کنترل و شفافیت بده. در رابط‌های هوش مصنوعی: محدودیت‌ها را صادقانه نشان بده، منبع و میزان اطمینان را بگو، امکان ویرایش و بازگردانی بده، خطا را قابل‌پیش‌بینی کن و داده‌ی کاربر را فقط با رضایت روشن به‌کار ببر.</p>",
     "exercise": "یک جریان لغو اشتراک صادقانه (بدون Dark Pattern) طراحی کن."
    },
    {
     "title": "کنتراست رنگ و محاسبه‌ی نسبت WCAG",
     "content": "<p>خوانایی متن به <b>نسبت کنتراست</b> بین رنگ متن و پس‌زمینه بستگی دارد. فرمول WCAG: ابتدا هر کانال sRGB را خطی می‌کنیم، سپس <b>روشنایی نسبی</b> <code>L = 0.2126R + 0.7152G + 0.0722B</code> و در پایان <code>(L_روشن + 0.05) / (L_تیره + 0.05)</code>. آستانه‌ها: <b>AA</b> برای متن عادی ۴٫۵:۱ و متن بزرگ (۱۸pt یا ۱۴pt ضخیم) ۳:۱؛ <b>AAA</b> برای متن عادی ۷:۱؛ اجزای UI و آیکن‌های معنادار ۳:۱. خاکستری روشن روی سفید، متن روی عکس و placeholder کم‌رنگ شایع‌ترین خطاها هستند. در دموی زیر دو رنگ را عوض کن و نتیجه را ببین.</p>",
     "code": {
      "html": "<label>متن <input type=\"color\" id=\"fg\" value=\"#777777\"></label>\n<label>پس‌زمینه <input type=\"color\" id=\"bg\" value=\"#ffffff\"></label>\n<div id=\"sample\">نمونه‌ی متن برای بررسی خوانایی</div>\n<p id=\"out\"></p>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#sample{padding:16px;margin:10px 0;border-radius:8px;font-size:18px}\n.ok{color:#0a7a3d}.bad{color:#b3261e}",
      "js": "const lin = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };\nconst lum = hex => { const n = parseInt(hex.slice(1), 16); return 0.2126*lin(n >> 16) + 0.7152*lin((n >> 8) & 255) + 0.0722*lin(n & 255); };\nfunction ratio(a, b) { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); }\nfunction update() {\n  const fg = document.getElementById('fg').value, bg = document.getElementById('bg').value;\n  const s = document.getElementById('sample'); s.style.color = fg; s.style.background = bg;\n  const r = ratio(fg, bg);\n  const mark = (ok, t) => `<span class=\"${ok ? 'ok' : 'bad'}\">${ok ? '✓' : '✗'} ${t}</span>`;\n  document.getElementById('out').innerHTML = `نسبت: <b>${r.toFixed(2)}:1</b><br>` +\n    mark(r >= 4.5, 'AA متن عادی (۴٫۵)') + ' · ' + mark(r >= 3, 'AA متن بزرگ/UI (۳)') + ' · ' + mark(r >= 7, 'AAA (۷)');\n  window.__ratio = r;\n}\ndocument.getElementById('fg').oninput = document.getElementById('bg').oninput = update;\nupdate();"
     },
     "exercise": "رنگ برند خودت را روی سفید بسنج و نزدیک‌ترین رنگ تیره‌تر که AA را بگذراند پیدا کن."
    },
    {
     "title": "قانون Fitts: اندازه و فاصله‌ی هدف کلیک",
     "content": "<p>قانون <b>Fitts</b>: زمان رسیدن به هدف با فاصله زیاد و اندازه‌ی کوچک بیشتر می‌شود: <code>T = a + b·log₂(D/W + 1)</code>. کاربرد طراحی: دکمه‌های مهم را <b>بزرگ</b> و نزدیک به محل فعلی دست/نشانگر بگذار، لبه‌ها و گوشه‌های صفحه (در دسکتاپ) اهداف «بی‌نهایت بزرگ‌اند» چون نشانگر متوقف می‌شود، فاصله‌ی کافی بین عمل‌های مخرب و عمل‌های عادی بگذار تا اشتباه کلیک نشود. <b>ID = log₂(D/W+1)</b> را «شاخص دشواری» می‌گویند. در دمو، اندازه و فاصله را عوض کن و ببین شاخص دشواری چطور تغییر می‌کند.</p>",
     "code": {
      "html": "<label>اندازه W: <input type=\"range\" id=\"w\" min=\"16\" max=\"120\" value=\"40\"></label>\n<label>فاصله D: <input type=\"range\" id=\"d\" min=\"50\" max=\"600\" value=\"300\"></label>\n<div id=\"stage\"><div id=\"start\">شروع</div><div id=\"target\">هدف</div></div>\n<p id=\"id\"></p>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#stage{position:relative;height:150px;background:#f3f4f6;border-radius:8px;margin:10px 0;direction:ltr}\n#start{position:absolute;left:8px;top:55px;width:40px;height:40px;background:#9ca3af;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;border-radius:6px}\n#target{position:absolute;top:0;background:#8B7CF6;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:12px}",
      "js": "const w = document.getElementById('w'), d = document.getElementById('d'), t = document.getElementById('target');\nfunction update() {\n  const W = +w.value, D = +d.value;\n  t.style.width = t.style.height = W + 'px';\n  t.style.left = Math.min(D, 480) + 'px'; t.style.top = (75 - W / 2) + 'px';\n  const id = Math.log2(D / W + 1);\n  window.__id = id;\n  document.getElementById('id').innerHTML = `شاخص دشواری = log₂(${D}/${W}+1) = <b>${id.toFixed(2)}</b> بیت — ${id < 2 ? 'آسان' : id < 3.5 ? 'متوسط' : 'دشوار'}`;\n}\nw.oninput = d.oninput = update; update();"
     },
     "exercise": "دو طرح فرم را با دکمه‌ی «حذف» نزدیک/دور از «ذخیره» مقایسه کن."
    },
    {
     "title": "حالت Focus و ناوبری با کیبورد",
     "content": "<p>کاربران کیبورد، صفحه‌خوان و حتی افراد با دست‌لرزه فقط با <kbd>Tab</kbd> کار می‌کنند. اگر <b>focus مرئی نباشد</b> گم می‌شوند؛ حذف <code>outline</code> بدون جایگزین یکی از بدترین خطاهاست (WCAG 2.4.7). از <code>:focus-visible</code> استفاده کن: حلقه‌ی focus فقط برای کیبورد دیده می‌شود نه برای کلیک ماوس. قواعد: ترتیب Tab منطقی (با DOM یکسان باشد؛ از <code>tabindex</code> مثبت پرهیز کن)، همه‌ی عمل‌ها با <code>Enter/Space</code> کار کنند، لینک «پرش به محتوا» (<i>skip link</i>) برای رد کردن منوی تکراری، و <b>تله‌ی کیبورد</b> (keyboard trap) نداشته باش. در دمو با Tab حرکت کن.</p>",
     "code": {
      "html": "<a class=\"skip\" href=\"#main\">پرش به محتوای اصلی</a>\n<nav><a href=\"#a\">خانه</a> <a href=\"#b\">دوره‌ها</a> <a href=\"#c\">تماس</a></nav>\n<main id=\"main\" tabindex=\"-1\"><button id=\"b1\">ثبت‌نام</button> <button id=\"b2\">لغو</button>\n<p id=\"log\">فوکوس: —</p></main>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\na,button{padding:8px 14px;border-radius:6px;margin:4px;border:1px solid #8B7CF6;background:#fff;color:#4c3fb5;text-decoration:none;display:inline-block;cursor:pointer}\n:focus{outline:none}\n:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}\n.skip{position:absolute;top:-60px;background:#111;color:#fff;border-color:#111}\n.skip:focus{top:8px}",
      "js": "document.addEventListener('focusin', e => {\n  const el = e.target;\n  document.getElementById('log').textContent = 'فوکوس: ' + (el.textContent.trim() || el.id);\n});\ndocument.getElementById('b1').addEventListener('keydown', e => { if (e.key === 'Enter') e.target.textContent = 'ثبت شد ✓'; });"
     },
     "exercise": "با Tab کل یک سایت را بپیمای و ببین کجا focus گم می‌شود."
    },
    {
     "title": "Skeleton Screen در برابر Spinner",
     "content": "<p>Spinner فقط می‌گوید «صبر کن»؛ <b>Skeleton</b> شکل صفحه‌ی آینده را نشان می‌دهد و <b>زمان را کوتاه‌تر حس</b> می‌کند (perceived performance) و از پرش چیدمان (layout shift) جلوگیری می‌کند. قواعد: برای بارگذاری زیر ~۱ ثانیه چیزی نشان نده (چشمک بد است)؛ ۱ تا ۱۰ ثانیه Skeleton؛ بیشتر از آن نوار پیشرفت با درصد/توضیح. اندازه‌ی Skeleton باید با محتوای واقعی یکی باشد. برای صفحه‌خوان <code>aria-busy=\"true\"</code> و یک <code>role=\"status\"</code> بگذار. انیمیشن shimmer را با <code>prefers-reduced-motion</code> خاموش کن.</p>",
     "code": {
      "html": "<button id=\"load\">بارگذاری کارت‌ها</button>\n<div id=\"list\" aria-busy=\"false\"></div>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n.card{display:flex;gap:12px;padding:12px;border:1px solid #e5e7eb;border-radius:10px;margin:8px 0;min-height:64px}\n.av{width:48px;height:48px;border-radius:50%;background:#8B7CF6;flex:none}\n.sk .av,.sk .l{background:linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%);background-size:200% 100%;animation:sh 1.2s infinite}\n.l{height:12px;border-radius:6px;margin:8px 0;background:#d1d5db}.l.s{width:60%}\n@keyframes sh{to{background-position:-200% 0}}\n@media (prefers-reduced-motion:reduce){.sk .av,.sk .l{animation:none}}",
      "js": "const list = document.getElementById('list');\nconst cardHTML = (name, bio, sk) => `<div class=\"card ${sk ? 'sk' : ''}\"><div class=\"av\"></div><div style=\"flex:1\">` +\n  (sk ? '<div class=\"l\"></div><div class=\"l s\"></div>' : `<b>${name}</b><div>${bio}</div>`) + '</div></div>';\ndocument.getElementById('load').onclick = () => {\n  list.setAttribute('aria-busy', 'true');\n  list.innerHTML = cardHTML('', '', true).repeat(3);\n  setTimeout(() => {\n    list.innerHTML = ['علی|مهندس نرم‌افزار', 'سارا|طراح UX', 'رضا|تحلیلگر داده'].map(s => cardHTML(...s.split('|'), false)).join('');\n    list.setAttribute('aria-busy', 'false');\n  }, 600);\n};"
     },
     "exercise": "یک Skeleton برای جدول بساز و CLS (پرش) را قبل و بعد مقایسه کن."
    },
    {
     "title": "Empty State: وقتی هیچ داده‌ای نیست",
     "content": "<p>صفحه‌ی خالی فرصت است نه خطا. یک Empty State خوب سه کار می‌کند: <b>توضیح</b> می‌دهد چرا خالی است («هنوز پروژه‌ای نساخته‌ای»)، <b>ارزش</b> بخش را یادآوری می‌کند و <b>یک عمل واضح</b> می‌دهد (دکمه‌ی «ساخت اولین پروژه»). سه نوع: <i>اولین استفاده</i> (آموزش بده)، <i>نتیجه‌ی خالی جست‌وجو</i> (پیشنهاد جایگزین/پاک‌کردن فیلتر)، <i>خطا</i> (علت + تلاش مجدد). از «No data» خشک پرهیز کن. تصویر کمک می‌کند ولی متن و دکمه الزامی‌اند. در دمو بین حالت‌ها جابه‌جا شو.</p>",
     "code": {
      "html": "<input id=\"q\" placeholder=\"جست‌وجوی پروژه...\" style=\"padding:8px;width:70%\">\n<ul id=\"items\"></ul>\n<div id=\"empty\" hidden></div>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#empty{text-align:center;padding:28px;border:2px dashed #d1d5db;border-radius:12px;margin-top:12px}\n#empty .ic{font-size:40px}\n#empty button{margin-top:10px;padding:8px 16px;border:0;border-radius:8px;background:#8B7CF6;color:#fff;cursor:pointer}\nul{padding:0 18px}",
      "js": "let projects = [];\nconst q = document.getElementById('q'), ul = document.getElementById('items'), empty = document.getElementById('empty');\nfunction render() {\n  const term = q.value.trim();\n  const shown = projects.filter(p => p.includes(term));\n  ul.innerHTML = shown.map(p => `<li>${p}</li>`).join('');\n  empty.hidden = shown.length > 0;\n  if (shown.length) return;\n  empty.innerHTML = projects.length === 0\n    ? '<div class=\"ic\">📁</div><b>هنوز پروژه‌ای نساخته‌ای</b><p>پروژه‌ها کارهای تو را یکجا نگه می‌دارند.</p><button id=\"create\">ساخت اولین پروژه</button>'\n    : `<div class=\"ic\">🔍</div><b>نتیجه‌ای برای «${term}» پیدا نشد</b><p>املا را بررسی کن یا فیلتر را پاک کن.</p><button id=\"clear\">پاک‌کردن جست‌وجو</button>`;\n  const c = document.getElementById('create'); if (c) c.onclick = () => { projects.push('پروژه‌ی اول'); render(); };\n  const x = document.getElementById('clear'); if (x) x.onclick = () => { q.value = ''; render(); };\n}\nq.oninput = render; render();"
     },
     "exercise": "Empty State خطای شبکه را هم اضافه کن (با دکمه‌ی تلاش مجدد)."
    },
    {
     "title": "اعتبارسنجی فرم: زمان و پیام درست خطا",
     "content": "<p>اعتبارسنجی بد کاربر را عصبانی می‌کند. قواعد: ۱) خطا را <b>کنار همان فیلد</b> نشان بده نه فقط بالای فرم؛ ۲) <b>بعد از ترک فیلد</b> (blur) اعتبارسنجی کن، نه با هر کلید (اولین حرف ایمیل هنوز غلط است!) و بعد از اولین خطا هنگام تایپ فوراً پاک کن؛ ۳) پیام راهنما بده نه سرزنش: «ایمیل باید شامل @ باشد» نه «ورودی نامعتبر»؛ ۴) رنگ تنها کافی نیست: آیکن و متن؛ ۵) برای دسترسی: <code>aria-invalid</code>، <code>aria-describedby</code> به پیام و <code>role=\"alert\"</code> یا <code>aria-live</code>؛ ۶) هنگام ارسال با خطا، focus را روی اولین فیلد خطادار ببر؛ ۷) داده‌ی کاربر را پاک نکن.</p>",
     "code": {
      "html": "<form id=\"f\" novalidate>\n  <label>ایمیل<br><input id=\"email\" type=\"email\" aria-describedby=\"e-err\"></label>\n  <div id=\"e-err\" class=\"err\" role=\"alert\"></div>\n  <label>رمز (حداقل ۸ نویسه)<br><input id=\"pw\" type=\"password\" aria-describedby=\"p-err\"></label>\n  <div id=\"p-err\" class=\"err\" role=\"alert\"></div>\n  <button>ثبت‌نام</button><p id=\"done\"></p>\n</form>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\ninput{padding:8px;margin:4px 0;border:2px solid #d1d5db;border-radius:6px}\ninput[aria-invalid=true]{border-color:#b3261e}\n.err{color:#b3261e;min-height:1.4em;font-size:14px}\n.err:not(:empty)::before{content:'⚠ '}\nbutton{padding:8px 16px;background:#8B7CF6;color:#fff;border:0;border-radius:6px}",
      "js": "const rules = {\n  email: v => !v ? 'ایمیل را وارد کن' : !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(v) ? 'ایمیل باید به شکل name@site.com باشد' : '',\n  pw: v => v.length < 8 ? `رمز ${8 - v.length} نویسه‌ی دیگر لازم دارد` : ''\n};\nconst errId = { email: 'e-err', pw: 'p-err' };\nfunction check(id, show = true) {\n  const el = document.getElementById(id), msg = rules[id](el.value);\n  el.setAttribute('aria-invalid', msg ? 'true' : 'false');\n  if (show) document.getElementById(errId[id]).textContent = msg;\n  return !msg;\n}\nfor (const id in rules) {\n  const el = document.getElementById(id);\n  el.addEventListener('blur', () => check(id));                                   // بعد از ترک فیلد\n  el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') check(id); });  // رفع خطا زنده\n}\ndocument.getElementById('f').addEventListener('submit', e => {\n  e.preventDefault();\n  const bad = Object.keys(rules).filter(id => !check(id));\n  if (bad.length) document.getElementById(bad[0]).focus();                        // اولین خطا\n  else document.getElementById('done').textContent = 'ثبت شد ✓';\n});"
     },
     "exercise": "پیام خطای رمز را با نوار قدرت رمز ترکیب کن."
    },
    {
     "title": "الگوی Undo به‌جای تأیید: Toast قابل‌برگشت",
     "content": "<p>پنجره‌ی «مطمئنی؟» برای هر حذف، کاربر را به کلیک‌کردن بی‌فکر عادت می‌دهد (confirm fatigue). الگوی بهتر برای عمل‌های <b>قابل‌برگشت</b>: همان لحظه انجام بده و یک <b>Toast با «واگرد»</b> چند ثانیه نشان بده؛ حذف واقعی پس از پایان زمان. این روش سریع‌تر و ایمن‌تر است (Gmail «Undo send»). تأیید فقط برای عمل‌های <b>برگشت‌ناپذیر و پرخطر</b> (حذف حساب، پرداخت) و با متن مشخص («حذف پروژه‌ی X») نه «بله/خیر». Toast باید <code>role=\"status\"</code> داشته باشد، ≥ ۵ ثانیه بماند، با hover/focus متوقف شود و روی اقدام مهم تنها راه رسیدن نباشد.</p>",
     "code": {
      "html": "<ul id=\"mails\"><li data-id=\"1\">پیام ۱ <button class=\"del\">حذف</button></li><li data-id=\"2\">پیام ۲ <button class=\"del\">حذف</button></li></ul>\n<div id=\"toast\" role=\"status\" hidden></div>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\nli{padding:8px;border-bottom:1px solid #eee;list-style:none}\n.del{float:left;border:0;background:#fee2e2;color:#b3261e;border-radius:6px;padding:4px 10px}\n#toast{position:fixed;bottom:12px;right:12px;background:#111;color:#fff;padding:10px 14px;border-radius:8px}\n#toast button{margin-right:10px;background:none;border:0;color:#a5b4fc;text-decoration:underline;cursor:pointer}",
      "js": "const toast = document.getElementById('toast'); let pending = null;\ndocument.getElementById('mails').addEventListener('click', e => {\n  if (!e.target.classList.contains('del')) return;\n  const li = e.target.closest('li'); li.hidden = true;                       // فوراً مخفی می‌شود\n  clearTimeout(pending?.timer);\n  toast.hidden = false; toast.innerHTML = `پیام ${li.dataset.id} حذف شد <button id=\"undo\">واگرد</button>`;\n  pending = { li, timer: setTimeout(() => { li.remove(); toast.hidden = true; window.__committed = li.dataset.id; }, 400) };\n  document.getElementById('undo').onclick = () => { clearTimeout(pending.timer); li.hidden = false; toast.hidden = true; };\n});"
     },
     "exercise": "زمان توقف Toast را با hover روی آن متوقف کن."
    },
    {
     "title": "مودال دسترس‌پذیر: تله‌ی فوکوس، Esc و بازگشت فوکوس",
     "content": "<p>مودال باید برای کیبورد و صفحه‌خوان درست کار کند: <b>۱)</b> <code>role=\"dialog\"</code> و <code>aria-modal=\"true\"</code> و عنوان با <code>aria-labelledby</code>؛ <b>۲)</b> هنگام باز شدن focus به داخل (اولین عنصر یا خود پنجره) برود؛ <b>۳)</b> <b>تله‌ی فوکوس</b>: Tab/Shift+Tab فقط بین عناصر داخل بچرخد؛ <b>۴)</b> <kbd>Esc</kbd> ببندد؛ <b>۵)</b> هنگام بسته شدن focus به <b>دکمه‌ی بازکننده</b> برگردد؛ <b>۶)</b> پشت‌زمینه غیرقابل‌تعامل (<code>inert</code>) و اسکرول قفل شود. در HTML مدرن عنصر <code>&lt;dialog&gt;</code> با <code>showModal()</code> بیشتر این‌ها را خودش انجام می‌دهد؛ ترجیح بده.</p>",
     "code": {
      "html": "<button id=\"open\">باز کردن تنظیمات</button>\n<dialog id=\"dlg\" aria-labelledby=\"t\">\n  <h3 id=\"t\">تنظیمات</h3>\n  <label>نام <input id=\"name\"></label>\n  <button id=\"save\">ذخیره</button> <button id=\"close\">بستن</button>\n</dialog>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\ndialog{border:0;border-radius:12px;padding:20px;box-shadow:0 10px 40px #0005;min-width:260px}\ndialog::backdrop{background:#0006}\nbutton,input{padding:8px;margin:4px}",
      "js": "const dlg = document.getElementById('dlg'), opener = document.getElementById('open');\nopener.onclick = () => { dlg.showModal(); document.getElementById('name').focus(); };\ndocument.getElementById('close').onclick = () => dlg.close();\ndlg.addEventListener('close', () => opener.focus());              // بازگرداندن فوکوس\ndlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });   // کلیک روی backdrop"
     },
     "exercise": "تله‌ی فوکوس دستی را برای <div role=dialog> بدون استفاده از dialog بنویس."
    },
    {
     "title": "مقیاس نوشتار روان با clamp()",
     "content": "<p>به‌جای چند breakpoint برای اندازه‌ی فونت، <code>clamp(min, ترجیحی, max)</code> مقدار را <b>روان</b> بین دو حد تغییر می‌دهد: <code>font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem)</code>. بخش وسط ترکیب <code>rem</code> و <code>vw</code> است تا با بزرگ‌کردن فونت مرورگر هم کار کند (فقط <code>vw</code> خالص دسترس‌پذیری را می‌شکند، WCAG 1.4.4). <b>مقیاس ماژولار</b>: هر سطح ضرب ثابت (مثلاً ۱٫۲۵) در سطح قبل: ۱، ۱٫۲۵، ۱٫۵۶، ۱٫۹۵... خط فاصله‌ی متن بدنه ≈ ۱٫۵ تا ۱٫۷ و عرض خط ۴۵ تا ۷۵ نویسه (در فارسی ۴۰–۶۰). دموی زیر عرض کانتینر را عوض می‌کند و اندازه‌ی محاسبه‌شده را نشان می‌دهد.</p>",
     "code": {
      "html": "<label>عرض صفحه: <input type=\"range\" id=\"w\" min=\"320\" max=\"1200\" value=\"600\"> <span id=\"wv\"></span>px</label>\n<div id=\"frame\"><h1>تیتر اصلی</h1><h2>زیرعنوان</h2><p>متن بدنه که با عرض صفحه به‌آرامی تغییر اندازه می‌دهد.</p></div>\n<pre id=\"sizes\"></pre>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#frame{border:1px dashed #9ca3af;padding:8px;container-type:inline-size;margin:8px auto;direction:rtl}\n#frame h1{font-size:clamp(1.5rem,1rem + 3cqi,3rem);margin:.2em 0}\n#frame h2{font-size:clamp(1.2rem,.9rem + 2cqi,2rem);margin:.2em 0}\n#frame p{font-size:clamp(1rem,.9rem + .6cqi,1.25rem);max-width:60ch}\npre{background:#f3f4f6;padding:8px;direction:ltr}",
      "js": "const w = document.getElementById('w'), frame = document.getElementById('frame');\nfunction update() {\n  frame.style.width = w.value + 'px'; document.getElementById('wv').textContent = w.value;\n  const px = s => parseFloat(getComputedStyle(frame.querySelector(s)).fontSize).toFixed(1) + 'px';\n  document.getElementById('sizes').textContent = `h1: ${px('h1')}  h2: ${px('h2')}  p: ${px('p')}`;\n}\nw.oninput = update; update();"
     },
     "exercise": "مقیاس ماژولار ۱٫۲ و ۱٫۵ را با clamp مقایسه کن."
    },
    {
     "title": "شبکه‌ی ۸ نقطه‌ای و ریتم فاصله‌گذاری",
     "content": "<p>فاصله‌های اتفاقی (۱۳px، ۱۷px، ۲۲px) صفحه را «ناخوانا و نامرتب» می‌کنند. <b>سیستم ۸ نقطه‌ای</b>: همه‌ی فاصله‌ها و اندازه‌ها مضرب ۴ یا ۸ (۴، ۸، ۱۶، ۲۴، ۳۲، ۴۸، ۶۴). مزایا: تصمیم سریع‌تر، تناسب با اندازه‌ی پیکسل صفحه‌ها، هماهنگی طراح و برنامه‌نویس. قاعده‌ی <b>نزدیکی</b> (Gestalt): چیزهای مرتبط نزدیک‌تر و گروه‌های جدا دورتر. فاصله‌ی داخل کارت کمتر از فاصله‌ی بین کارت‌ها. توکن‌های فاصله را با متغیر CSS تعریف کن: <code>--space-1: 4px; --space-2: 8px...</code> و عدد جادویی ننویس. دمو: لایه‌ی شبکه را روشن و فاصله‌ها را ممیزی کن.</p>",
     "code": {
      "html": "<label><input type=\"checkbox\" id=\"grid\"> نمایش شبکه‌ی ۸px</label>\n<div id=\"wrap\"><div class=\"card\"><h4>عنوان کارت</h4><p>توضیح کوتاه</p></div><div class=\"card\"><h4>کارت دوم</h4><p>توضیح کوتاه</p></div></div>\n<p id=\"audit\"></p>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n:root{--s1:4px;--s2:8px;--s3:16px;--s4:24px;--s5:32px}\n#wrap{display:flex;gap:var(--s4);padding:var(--s4);position:relative}\n#wrap.on{background-image:linear-gradient(#8B7CF633 1px,transparent 1px),linear-gradient(90deg,#8B7CF633 1px,transparent 1px);background-size:8px 8px}\n.card{flex:1;padding:var(--s3);border:1px solid #d1d5db;border-radius:var(--s2);background:#fff}\n.card h4{margin:0 0 var(--s2)}.card p{margin:0}",
      "js": "const wrap = document.getElementById('wrap');\ndocument.getElementById('grid').onchange = e => wrap.classList.toggle('on', e.target.checked);\nfunction audit() {\n  const bad = [];\n  document.querySelectorAll('#wrap, .card, .card *').forEach(el => {\n    const cs = getComputedStyle(el);\n    ['paddingTop','paddingRight','paddingBottom','paddingLeft','marginTop','marginBottom','columnGap'].forEach(p => {\n      const v = parseFloat(cs[p]); if (v && v % 4 !== 0) bad.push(`${el.tagName.toLowerCase()}.${p}=${v}`);\n    });\n  });\n  window.__bad = bad;\n  document.getElementById('audit').textContent = bad.length ? 'خارج از شبکه: ' + bad.join(', ') : '✓ همه‌ی فاصله‌ها مضرب ۴px هستند';\n}\naudit();"
     },
     "exercise": "یک صفحه‌ی خودت را ممیزی کن و ۵ فاصله‌ی خارج از شبکه پیدا کن."
    },
    {
     "title": "تم تیره با Design Token و prefers-color-scheme",
     "content": "<p>تم تیره فقط «برعکس‌کردن رنگ‌ها» نیست. روش درست: <b>توکن معنایی</b> (<code>--surface</code>، <code>--text</code>، <code>--border</code>) را به رنگ‌های خام وصل کن و در تم تیره فقط مقدار توکن‌ها را عوض کن. پس‌زمینه‌ی تیره را سیاه خالص نگیر (<code>#121212</code>)، متن را سفید خالص نه (<code>#e5e7eb</code>) تا خیرگی نباشد؛ رنگ‌های اشباع‌شده را کمی کم‌رنگ کن؛ عمق را با روشن‌تر کردن سطح نشان بده نه سایه‌ی سنگین. حتماً <code>color-scheme: light dark</code> بگذار تا کنترل‌های مرورگر هم بچرخند، به <code>prefers-color-scheme</code> احترام بگذار و انتخاب دستی کاربر را ذخیره کن (سه حالت: روشن/تیره/سیستم). کنتراست را در هر دو تم بسنج.</p>",
     "code": {
      "html": "<button data-theme=\"light\">روشن</button> <button data-theme=\"dark\">تیره</button> <button data-theme=\"system\">سیستم</button>\n<div class=\"card\"><h3>کارت نمونه</h3><p>متن با توکن‌های معنایی</p><a href=\"#\">لینک</a></div>\n<p id=\"state\"></p>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n:root{color-scheme:light dark;--bg:#fff;--surface:#f3f4f6;--text:#111827;--link:#4c3fb5;--border:#d1d5db}\n@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#121212;--surface:#1e1e1e;--text:#e5e7eb;--link:#a5b4fc;--border:#374151}}\n:root[data-theme=dark]{--bg:#121212;--surface:#1e1e1e;--text:#e5e7eb;--link:#a5b4fc;--border:#374151}\nbody{background:var(--bg);color:var(--text)}\n.card{background:var(--surface);border:1px solid var(--border);padding:16px;border-radius:10px;margin:12px 0}\na{color:var(--link)}\nbutton{padding:6px 12px}",
      "js": "function apply(mode) {\n  if (mode === 'system') document.documentElement.removeAttribute('data-theme');\n  else document.documentElement.dataset.theme = mode;\n  const eff = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();\n  document.getElementById('state').textContent = `حالت: ${mode} — رنگ پس‌زمینه: ${eff}`;\n}\ndocument.querySelectorAll('[data-theme]').forEach(b => { if (b.tagName === 'BUTTON') b.onclick = () => apply(b.dataset.theme); });"
     },
     "exercise": "ذخیره‌ی انتخاب کاربر را با localStorage اضافه کن (با try/catch)."
    },
    {
     "title": "ناحیه‌ی لمس ≥ 44px و فاصله‌ی بین اهداف",
     "content": "<p>انگشت دقت ماوس را ندارد. دستورالعمل‌ها: Apple ۴۴×۴۴pt، Material ۴۸×۴۸dp، WCAG 2.2 (معیار 2.5.8) حداقل <b>۲۴×۲۴ CSS px</b> با فاصله. نکته: <b>ناحیه‌ی لمس</b> می‌تواند از <b>شکل دیده‌شده</b> بزرگ‌تر باشد؛ آیکن ۲۰px را با padding یا شبه‌عنصر به ۴۴px برسان. بین اهداف مجاور ≥ ۸px فاصله بده تا لمس اشتباه نشود، و عمل‌های مخرب را از عمل‌های پرتکرار دور کن. دموی زیر «ناحیه‌ی لمس واقعی» هر عنصر را اندازه می‌گیرد و خطاها را گزارش می‌کند.</p>",
     "code": {
      "html": "<div id=\"bar\"><button class=\"ic\" aria-label=\"جست‌وجو\">🔍</button><button class=\"ic small\" aria-label=\"اعلان\">🔔</button><button class=\"ic fixed\" aria-label=\"پروفایل\">👤</button></div>\n<ul id=\"report\"></ul>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#bar{display:flex;gap:8px;align-items:center}\n.ic{border:1px solid #d1d5db;background:#fff;border-radius:8px;font-size:18px;min-width:44px;min-height:44px}\n.ic.small{min-width:0;min-height:0;padding:0;width:24px;height:24px;font-size:12px}\n.ic.fixed{position:relative;min-width:0;min-height:0;width:24px;height:24px;padding:0;font-size:12px}\n.ic.fixed::after{content:'';position:absolute;inset:-10px}",
      "js": "const rows = [];\ndocument.querySelectorAll('#bar .ic').forEach(b => {\n  const r = b.getBoundingClientRect(); let w = r.width, h = r.height;\n  const after = getComputedStyle(b, '::after');                       // ناحیه‌ی لمس گسترده با شبه‌عنصر\n  if (after.content !== 'none' && after.position === 'absolute') {\n    const inset = Math.abs(parseFloat(after.top)); if (inset) { w += 2 * inset; h += 2 * inset; }\n  }\n  rows.push({ name: b.getAttribute('aria-label'), w: Math.round(w), h: Math.round(h), ok: w >= 44 && h >= 44 });\n});\nwindow.__rows = rows;\ndocument.getElementById('report').innerHTML = rows.map(r => `<li>${r.ok ? '✓' : '✗'} ${r.name}: ${r.w}×${r.h}px</li>`).join('');"
     },
     "exercise": "دکمه‌های یک اپ موبایل را اندازه بگیر و سه مورد زیر ۴۴px را پیدا کن."
    },
    {
     "title": "Wizard و نشانگر پیشرفت چندمرحله‌ای",
     "content": "<p>فرم طولانی را به <b>مراحل کوتاه</b> بشکن؛ کاربر هر مرحله را قابل‌دستیابی می‌بیند. اصول: نشان بده «مرحله‌ی ۲ از ۴» و عنوان هر مرحله، دکمه‌های «قبلی/بعدی» پایدار و هم‌جا، داده‌ی مراحل قبلی حفظ شود، اعتبارسنجی همان مرحله قبل از رفتن به بعد، و امکان برگشت بدون از دست رفتن داده. برای دسترسی: <code>aria-current=\"step\"</code> روی مرحله‌ی فعلی و <code>&lt;progress&gt;</code> یا <code>role=\"progressbar\"</code> با <code>aria-valuenow</code>. نوار پیشرفتی که «دروغ» بگوید (مثلاً ۹۰٪ ثابت می‌ماند) بدتر از نبودنش است. مراحل اختیاری را مشخص کن.</p>",
     "code": {
      "html": "<ol id=\"steps\"><li>اطلاعات</li><li>آدرس</li><li>تأیید</li></ol>\n<progress id=\"bar\" max=\"3\" value=\"1\" aria-label=\"پیشرفت\"></progress>\n<section id=\"panel\"></section>\n<button id=\"prev\">قبلی</button> <button id=\"next\">بعدی</button>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#steps{display:flex;gap:12px;padding:0;list-style:none}\n#steps li{padding:6px 12px;border-radius:20px;background:#e5e7eb}\n#steps li[aria-current=step]{background:#8B7CF6;color:#fff;font-weight:bold}\n#steps li.done{background:#bbf7d0}\n#panel{padding:16px;border:1px solid #e5e7eb;margin:8px 0;border-radius:8px;min-height:60px}\nprogress{width:100%}",
      "js": "const labels = ['نام شما: <input id=\"nm\">', 'شهر: <input id=\"ct\">', 'خلاصه‌ی اطلاعات'];\nconst data = {}; let step = 0;\nfunction render() {\n  document.querySelectorAll('#steps li').forEach((li, i) => {\n    li.toggleAttribute('aria-current', i === step); if (i === step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');\n    li.classList.toggle('done', i < step);\n  });\n  const bar = document.getElementById('bar'); bar.value = step + 1;\n  document.getElementById('panel').innerHTML = step < 2 ? labels[step]\n    : `${data.nm || '—'} از ${data.ct || '—'}`;\n  const f = document.querySelector('#panel input'); if (f) { f.value = data[f.id] || ''; f.oninput = () => data[f.id] = f.value; f.focus(); }\n  document.getElementById('prev').disabled = step === 0;\n  document.getElementById('next').textContent = step === 2 ? 'ارسال' : 'بعدی';\n}\ndocument.getElementById('next').onclick = () => {\n  const f = document.querySelector('#panel input');\n  if (f && !f.value.trim()) { f.setAttribute('aria-invalid', 'true'); return; }          // اعتبارسنجی هر مرحله\n  if (step < 2) { step++; render(); }\n};\ndocument.getElementById('prev').onclick = () => { if (step > 0) { step--; render(); } };\nrender();"
     },
     "exercise": "مرحله‌ی اختیاری با دکمه‌ی «رد کردن» اضافه کن."
    },
    {
     "title": "تب‌ها با ARIA و حرکت با کلیدهای جهت (Roving Tabindex)",
     "content": "<p>الگوی WAI-ARIA برای <b>تب‌ها</b>: کانتینر <code>role=\"tablist\"</code>، هر تب <code>role=\"tab\"</code> با <code>aria-selected</code> و <code>aria-controls</code> و پنل <code>role=\"tabpanel\"</code> با <code>aria-labelledby</code>. رفتار کیبورد: فقط تب فعال در ترتیب Tab است (<b>roving tabindex</b>: <code>tabindex=0</code> فعال و <code>-1</code> بقیه)؛ با <kbd>←/→</kbd> بین تب‌ها حرکت (در RTL جهت‌ها برعکس دیده می‌شود)، <kbd>Home/End</kbd> اول/آخر، و Tab بعدی به داخل پنل می‌رود. تب‌ها برای <b>محتوای هم‌سطح</b> است؛ برای ناوبری بین صفحه از لینک استفاده کن. حداکثر ۵–۶ تب.</p>",
     "code": {
      "html": "<div role=\"tablist\" aria-label=\"بخش‌ها\" id=\"tl\">\n  <button role=\"tab\" id=\"t1\" aria-controls=\"p1\" aria-selected=\"true\" tabindex=\"0\">مرور</button>\n  <button role=\"tab\" id=\"t2\" aria-controls=\"p2\" aria-selected=\"false\" tabindex=\"-1\">برنامه</button>\n  <button role=\"tab\" id=\"t3\" aria-controls=\"p3\" aria-selected=\"false\" tabindex=\"-1\">نظرات</button>\n</div>\n<div role=\"tabpanel\" id=\"p1\" aria-labelledby=\"t1\">محتوای مرور</div>\n<div role=\"tabpanel\" id=\"p2\" aria-labelledby=\"t2\" hidden>محتوای برنامه</div>\n<div role=\"tabpanel\" id=\"p3\" aria-labelledby=\"t3\" hidden>محتوای نظرات</div>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n[role=tablist]{display:flex;border-bottom:2px solid #e5e7eb}\n[role=tab]{border:0;background:none;padding:10px 16px;cursor:pointer}\n[role=tab][aria-selected=true]{border-bottom:3px solid #8B7CF6;font-weight:bold;margin-bottom:-2px}\n[role=tabpanel]{padding:14px}\n:focus-visible{outline:3px solid #f59e0b}",
      "js": "const tabs = [...document.querySelectorAll('[role=tab]')];\nfunction select(i, focus) {\n  tabs.forEach((t, j) => {\n    t.setAttribute('aria-selected', j === i); t.tabIndex = j === i ? 0 : -1;\n    document.getElementById(t.getAttribute('aria-controls')).hidden = j !== i;\n  });\n  if (focus) tabs[i].focus();\n}\ntabs.forEach((t, i) => {\n  t.onclick = () => select(i, false);\n  t.onkeydown = e => {\n    const n = tabs.length; let k = null;\n    if (e.key === 'ArrowRight') k = (i - 1 + n) % n;          // در RTL «راست» = قبلی\n    else if (e.key === 'ArrowLeft') k = (i + 1) % n;\n    else if (e.key === 'Home') k = 0; else if (e.key === 'End') k = n - 1;\n    if (k !== null) { e.preventDefault(); select(k, true); }\n  };\n});"
     },
     "exercise": "فعال‌سازی خودکار (focus = select) را با فعال‌سازی دستی (Enter) مقایسه کن."
    },
    {
     "title": "Accordion و aria-expanded: الگوی افشای تدریجی",
     "content": "<p>Accordion محتوای ثانویه را تا زمانی که لازم شود پنهان می‌کند (<b>progressive disclosure</b>) و صفحه را کوتاه نگه می‌دارد؛ مناسب FAQ و تنظیمات، نامناسب برای محتوایی که اکثر کاربران باید ببینند. پیاده‌سازی درست: هر عنوان یک <code>&lt;button&gt;</code> داخل <code>&lt;h3&gt;</code> با <code>aria-expanded</code> و <code>aria-controls</code>؛ پنل با <code>hidden</code>. عنصر بومی <code>&lt;details&gt;/&lt;summary&gt;</code> همین را بدون JS می‌دهد. نشانگر (فلش ▾/▸) جهت را نشان بدهد، کل ردیف قابل‌کلیک باشد و حالت باز بودن در URL/حالت حفظ شود وقتی مهم است. «باز کردن همه» برای صفحه‌های طولانی مفید است.</p>",
     "code": {
      "html": "<div id=\"acc\">\n  <h3><button aria-expanded=\"false\" aria-controls=\"a1\">ارسال چقدر طول می‌کشد؟</button></h3><div id=\"a1\" hidden>۲ تا ۴ روز کاری.</div>\n  <h3><button aria-expanded=\"false\" aria-controls=\"a2\">آیا بازگشت کالا ممکن است؟</button></h3><div id=\"a2\" hidden>تا ۷ روز با حفظ بسته‌بندی.</div>\n</div>\n<button id=\"all\">باز کردن همه</button>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\nh3{margin:0;border-bottom:1px solid #e5e7eb}\nh3 button{all:unset;display:flex;justify-content:space-between;width:100%;padding:12px 4px;cursor:pointer;box-sizing:border-box}\nh3 button::after{content:'▾';transition:transform .2s}\nh3 button[aria-expanded=true]::after{transform:rotate(180deg)}\n#acc div{padding:10px 4px;color:#374151}\n#all{margin-top:10px}\nh3 button:focus-visible{outline:3px solid #f59e0b}",
      "js": "const btns = [...document.querySelectorAll('#acc h3 button')];\nconst set = (b, open) => { b.setAttribute('aria-expanded', open); document.getElementById(b.getAttribute('aria-controls')).hidden = !open; };\nbtns.forEach(b => b.onclick = () => set(b, b.getAttribute('aria-expanded') !== 'true'));\ndocument.getElementById('all').onclick = e => {\n  const anyClosed = btns.some(b => b.getAttribute('aria-expanded') !== 'true');\n  btns.forEach(b => set(b, anyClosed)); e.target.textContent = anyClosed ? 'بستن همه' : 'باز کردن همه';\n};"
     },
     "exercise": "نسخه‌ی تک‌باز (فقط یک پنل همزمان) را بنویس و با details/summary مقایسه کن."
    },
    {
     "title": "Tooltip و Popover: کمک متنی قابل‌دسترس",
     "content": "<p>Tooltip برای <b>توضیح کوتاه</b> یک عنصر (نام آیکن) است نه برای محتوای مهم یا تعاملی. قواعد: با <b>hover و focus</b> هر دو ظاهر شود (کیبورد!)، با <kbd>Esc</kbd> بسته شود، اشاره‌گر بتواند روی خود tooltip برود بی‌آنکه ببندد (WCAG 1.4.13)، با <code>aria-describedby</code> به عنصر وصل شود و <code>role=\"tooltip\"</code> داشته باشد، و در موبایل (بدون hover) جایگزین داشته باشد. اگر محتوا لینک/دکمه دارد، <b>Popover</b> است: دکمه‌ی بازکننده با <code>aria-expanded</code>. API مدرن <code>popover</code> در HTML (<code>popovertarget</code>) بدون JS لایه‌ی بالا، Esc و بستن با کلیک بیرون را می‌دهد.</p>",
     "code": {
      "html": "<button id=\"hb\" aria-describedby=\"tip\">🗑</button>\n<span id=\"tip\" role=\"tooltip\" hidden>حذف دائمی پروژه</span>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#tip{background:#111;color:#fff;padding:6px 10px;border-radius:6px;font-size:13px;margin-right:8px}\n#hb{padding:8px 12px}",
      "js": "const b = document.getElementById('hb'), tip = document.getElementById('tip'); let hide;\nconst show = () => { clearTimeout(hide); tip.hidden = false; };\nconst hideNow = () => { hide = setTimeout(() => tip.hidden = true, 120); };      // تأخیر: ماوس می‌تواند روی tooltip برود\nb.addEventListener('mouseenter', show); b.addEventListener('mouseleave', hideNow);\nb.addEventListener('focus', show); b.addEventListener('blur', hideNow);\ntip.addEventListener('mouseenter', show); tip.addEventListener('mouseleave', hideNow);\ndocument.addEventListener('keydown', e => { if (e.key === 'Escape') { clearTimeout(hide); tip.hidden = true; } });"
     },
     "exercise": "همین را با ویژگی popover بومی HTML بازنویسی کن."
    },
    {
     "title": "جدول داده: مرتب‌سازی، هم‌ترازی اعداد و هدر چسبان",
     "content": "<p>جدول خوب داده را <b>مقایسه‌پذیر</b> می‌کند. قواعد: اعداد <b>راست‌چین</b> (در LTR) یا هم‌تراز با ممیز و با ارقام هم‌عرض (<code>font-variant-numeric: tabular-nums</code>) تا رقم‌ها زیر هم بیفتند؛ متن هم‌جهت زبان؛ هدر چسبان (<code>position: sticky; top: 0</code>)؛ ردیف‌ها با فاصله یا راه‌راه کم‌رنگ؛ ستون قابل‌مرتب‌سازی با <code>aria-sort=\"ascending|descending\"</code> و دکمه داخل <code>&lt;th&gt;</code>؛ واحد در عنوان ستون نه تکرار در هر سلول؛ جدول را برای <code>scope</code> و <code>&lt;caption&gt;</code> علامت بزن. در موبایل: اسکرول افقی با ستون اول چسبان یا تبدیل به کارت. مرتب‌سازی را پایدار (stable) کن و پیش‌فرض معنادار بده.</p>",
     "code": {
      "html": "<table id=\"t\"><caption>فروش ماهانه (میلیون تومان)</caption>\n<thead><tr><th scope=\"col\"><button data-k=\"name\">محصول</button></th><th scope=\"col\" aria-sort=\"none\"><button data-k=\"sales\">فروش</button></th></tr></thead>\n<tbody></tbody></table>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\ntable{border-collapse:collapse;width:100%;max-width:360px}\nth,td{padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right}\nth{position:sticky;top:0;background:#f9fafb}\ntd:last-child,th:last-child{text-align:left;font-variant-numeric:tabular-nums}\nth button{all:unset;cursor:pointer;font-weight:bold}\nth[aria-sort=ascending] button::after{content:' ▲'}th[aria-sort=descending] button::after{content:' ▼'}",
      "js": "const rows = [{ name: 'کتاب', sales: 1250 }, { name: 'قلم', sales: 98 }, { name: 'دفتر', sales: 4300 }, { name: 'کیف', sales: 765 }];\nlet key = null, dir = 1;\nconst fmt = n => n.toLocaleString('en-US');\nfunction render() {\n  const data = [...rows].sort((a, b) => key ? (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * dir : 0);\n  document.querySelector('#t tbody').innerHTML = data.map(r => `<tr><td>${r.name}</td><td>${fmt(r.sales)}</td></tr>`).join('');\n  document.querySelectorAll('#t th').forEach(th => {\n    const k = th.querySelector('button').dataset.k;\n    th.setAttribute('aria-sort', k === key ? (dir === 1 ? 'ascending' : 'descending') : 'none');\n  });\n}\ndocument.querySelectorAll('#t th button').forEach(b => b.onclick = () => {\n  if (key === b.dataset.k) dir = -dir; else { key = b.dataset.k; dir = 1; }\n  render();\n});\nrender();"
     },
     "exercise": "مرتب‌سازی چندستونه (Shift+کلیک) را اضافه کن."
    },
    {
     "title": "جست‌وجوی روان: Debounce، هایلایت و حالت بدون نتیجه",
     "content": "<p>جست‌وجو یکی از پرکاربردترین الگوهاست. نکات UX: <b>debounce</b> (۲۰۰–۳۰۰ms) تا با هر کلید درخواست نفرستی؛ لغو درخواست قبلی (<code>AbortController</code>) برای جلوگیری از «پاسخ کهنه»؛ نتایج را <b>هایلایت</b> کن؛ <code>role=\"search\"</code> و <code>aria-live=\"polite\"</code> برای اعلام «۳ نتیجه»؛ پیمایش با ↑↓ و Enter در پیشنهادها (combobox)؛ حفظ query در URL؛ حالت بدون نتیجه با پیشنهاد؛ فارسی‌سازی: نرمال‌سازی «ي/ی»، «ك/ک» و ارقام فارسی/عربی قبل از مقایسه وگرنه «کتاب» و «كتاب» پیدا نمی‌شود. در دمو debounce و نرمال‌سازی کار می‌کنند.</p>",
     "code": {
      "html": "<div role=\"search\"><input id=\"q\" type=\"search\" placeholder=\"جست‌وجوی دوره...\" style=\"padding:8px;width:90%\"></div>\n<p id=\"status\" aria-live=\"polite\"></p><ul id=\"res\"></ul>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\nmark{background:#fde68a}\nul{padding:0 20px}\n#status{color:#4b5563;font-size:14px}",
      "js": "const courses = ['جاوااسکریپت پیشرفته', 'کتابخانه‌ی React', 'پایتون برای علم داده', 'طراحی UI/UX', 'پایگاه داده‌ی SQL'];\nconst norm = s => s.replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).toLowerCase();\nconst esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));\nlet timer, calls = 0;\nfunction search(term) {\n  calls++;\n  const t = norm(term.trim());\n  const hits = t ? courses.filter(c => norm(c).includes(t)) : [];\n  document.getElementById('res').innerHTML = hits.map(c => {\n    const i = norm(c).indexOf(t);\n    return `<li>${esc(c.slice(0, i))}<mark>${esc(c.slice(i, i + t.length))}</mark>${esc(c.slice(i + t.length))}</li>`;\n  }).join('');\n  document.getElementById('status').textContent = !t ? '' : hits.length ? `${hits.length} نتیجه` : `نتیجه‌ای برای «${term}» نیست`;\n  window.__calls = calls;\n}\ndocument.getElementById('q').addEventListener('input', e => { clearTimeout(timer); timer = setTimeout(() => search(e.target.value), 200); });"
     },
     "exercise": "با fetch و AbortController پاسخ‌های کهنه را لغو کن."
    },
    {
     "title": "احترام به prefers-reduced-motion و انیمیشن مفید",
     "content": "<p>انیمیشن باید <b>معنا</b> بدهد (نشان‌دادن رابطه، بازخورد، توجه) نه تزئین. مدت: ۱۰۰–۳۰۰ms برای تعامل‌های کوچک، تا ۵۰۰ms برای تغییرات بزرگ؛ easing طبیعی (<code>ease-out</code> برای ورود). فقط <code>transform</code> و <code>opacity</code> را انیمیت کن (GPU، بدون reflow). برای افراد با اختلال دهلیزی یا میگرن، حرکت زیاد (پارالاکس، زوم، چرخش) آزاردهنده است؛ <code>@media (prefers-reduced-motion: reduce)</code> را رعایت کن: حرکت را حذف یا با محو ساده جایگزین کن، پخش خودکار ویدیو/کاروسل را متوقف کن. هرگز چیزی را که بیش از ۳ بار در ثانیه چشمک می‌زند نساز (WCAG 2.3.1). در دمو شبیه‌سازی کاهش حرکت را ببین.</p>",
     "code": {
      "html": "<label><input type=\"checkbox\" id=\"reduce\"> شبیه‌سازی «کاهش حرکت»</label>\n<div id=\"box\">کارت</div><button id=\"go\">نمایش</button>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#box{width:120px;padding:16px;background:#8B7CF6;color:#fff;border-radius:10px;margin:14px 0;opacity:0;transform:translateY(24px);transition:transform .3s ease-out,opacity .3s ease-out}\n#box.in{opacity:1;transform:none}\n.reduced #box{transform:none;transition:opacity .15s}\n@media (prefers-reduced-motion:reduce){#box{transform:none;transition:opacity .15s}}",
      "js": "const root = document.documentElement;\ndocument.getElementById('reduce').onchange = e => root.classList.toggle('reduced', e.target.checked);\ndocument.getElementById('go').onclick = () => document.getElementById('box').classList.toggle('in');\nconst mq = matchMedia('(prefers-reduced-motion: reduce)');\nwindow.__sysReduce = mq.matches;"
     },
     "exercise": "سه انیمیشن سایت خودت را بررسی کن: کدام معنادار است و کدام تزئینی؟"
    },
    {
     "title": "نقش‌های اعلان: alert، status و ترتیب اولویت",
     "content": "<p>صفحه‌خوان تغییرات پویا را خودش نمی‌گوید؛ باید <b>live region</b> تعریف کنی. <code>role=\"status\"</code> (معادل <code>aria-live=\"polite\"</code>) برای پیام‌های غیرفوری (ذخیره شد)؛ <code>role=\"alert\"</code> (<code>assertive</code>) فقط برای خطاهای فوری — چون گفتار فعلی را قطع می‌کند. ناحیه باید <b>از قبل در DOM باشد</b> و بعد متنش عوض شود (درج یک‌باره‌ی کل عنصر گاهی اعلام نمی‌شود). سلسله‌مراتب بصری: خطا (قرمز + ⚠)، هشدار (زرد)، موفقیت (سبز + ✓)، اطلاع (آبی + ℹ)؛ رنگ تنها کافی نیست. پیام باید <b>چه شد، چرا، چه کنم</b> را بگوید. اعلان‌های دائم را تعداد محدود کن (اعلان‌بارانی = نادیده‌گرفتن همه).</p>",
     "code": {
      "html": "<button data-kind=\"success\">ذخیره</button> <button data-kind=\"error\">خطا</button> <button data-kind=\"info\">اطلاع</button>\n<div id=\"polite\" role=\"status\"></div>\n<div id=\"assertive\" role=\"alert\"></div>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#polite,#assertive{margin-top:8px;padding:10px;border-radius:8px;min-height:20px}\n#polite:not(:empty){background:#dcfce7;color:#14532d}\n#assertive:not(:empty){background:#fee2e2;color:#7f1d1d;font-weight:bold}\nbutton{padding:6px 12px}",
      "js": "const msgs = {\n  success: ['polite', '✓ تغییرات ذخیره شد.'],\n  info: ['polite', 'ℹ همگام‌سازی در پس‌زمینه انجام می‌شود.'],\n  error: ['assertive', '⚠ ذخیره نشد: اتصال اینترنت قطع است. دوباره تلاش کن.']\n};\ndocument.querySelectorAll('button[data-kind]').forEach(b => b.onclick = () => {\n  document.getElementById('polite').textContent = ''; document.getElementById('assertive').textContent = '';\n  const [region, text] = msgs[b.dataset.kind];\n  setTimeout(() => document.getElementById(region).textContent = text, 30);     // تغییر متن ناحیه‌ی از پیش موجود\n});"
     },
     "exercise": "پیام خطای شبکه را با «چه شد/چرا/چه کنم» بازنویسی کن."
    },
    {
     "title": "Onboarding و افشای تدریجی: اولین تجربه‌ی کاربر",
     "content": "<p>کاربر جدید نمی‌خواهد «تور ۸ مرحله‌ای» ببیند؛ می‌خواهد زودتر به <b>«آها!»</b> برسد (Aha moment). اصول: ۱) کوتاه‌ترین مسیر تا اولین ارزش (حذف ثبت‌نام اجباری اولیه)؛ ۲) <b>افشای تدریجی</b>: قابلیت‌ها را همان لحظه‌ی نیاز نشان بده نه همه در روز اول؛ ۳) راهنمای <b>متنی</b> (coach mark) روی عنصر واقعی به‌جای اسلاید توضیحی؛ ۴) چک‌لیست شروع با پیشرفت (اثر Zeigarnik و انگیزه‌ی تکمیل)؛ ۵) «رد کردن» همیشه ممکن باشد و بعداً قابل‌بازگشت؛ ۶) داده‌ی نمونه به‌جای صفحه‌ی خالی؛ ۷) اندازه‌گیری: نرخ تکمیل و زمان تا اولین عمل ارزشمند. در دمو چک‌لیست شروع با پیشرفت را می‌بینی.</p>",
     "code": {
      "html": "<div id=\"ob\"><b>شروع سریع</b> <span id=\"pct\"></span>\n<progress id=\"pg\" max=\"3\" value=\"0\"></progress>\n<ul id=\"todo\"></ul><button id=\"skip\">بعداً</button></div>\n<button id=\"act-profile\">تکمیل پروفایل</button> <button id=\"act-project\">ساخت پروژه</button> <button id=\"act-invite\">دعوت همکار</button>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n#ob{border:1px solid #e5e7eb;border-radius:12px;padding:12px;margin-bottom:12px}\n#todo{list-style:none;padding:0}\n#todo li::before{content:'○ ';color:#9ca3af}\n#todo li.done::before{content:'✓ ';color:#16a34a}\n#todo li.done{color:#6b7280;text-decoration:line-through}\nprogress{width:100%}",
      "js": "const tasks = { profile: 'تکمیل پروفایل', project: 'ساخت اولین پروژه', invite: 'دعوت یک همکار' };\nconst done = new Set();\nfunction render() {\n  document.getElementById('todo').innerHTML = Object.entries(tasks).map(([k, v]) => `<li class=\"${done.has(k) ? 'done' : ''}\">${v}</li>`).join('');\n  document.getElementById('pg').value = done.size;\n  document.getElementById('pct').textContent = `${Math.round(done.size / 3 * 100)}٪`;\n  if (done.size === 3) document.getElementById('ob').innerHTML = '<b>🎉 همه چیز آماده است!</b>';\n}\nObject.keys(tasks).forEach(k => document.getElementById('act-' + k).onclick = () => { done.add(k); render(); });\ndocument.getElementById('skip').onclick = () => document.getElementById('ob').hidden = true;\nrender();"
     },
     "exercise": "چک‌لیست شروع را برای محصول خودت با ۳ عمل ارزشمند طراحی کن."
    },
    {
     "title": "طراحی برای کوررنگی: رنگ تنها حامل معنا نباشد",
     "content": "<p>حدود ۸٪ مردان درجه‌ای از کوررنگی (بیشتر قرمز-سبز) دارند. قاعده‌ی WCAG 1.4.1: <b>رنگ تنها وسیله‌ی انتقال اطلاعات نباشد</b>. هر وضعیت را با یک نشانه‌ی دیگر هم نشان بده: آیکن (✓ ✗ ⚠)، متن، الگو/بافت در نمودار، شکل متفاوت نقطه‌ها، زیرخط لینک‌ها، برچسب مستقیم روی نمودار به‌جای فقط راهنمای رنگی. پالت‌های امن: آبی/نارنجی (Okabe-Ito) به‌جای قرمز/سبز. با شبیه‌سازهای کوررنگی (DevTools → Rendering → Emulate vision deficiencies) و حالت خاکستری آزمون کن. در دمو یک جدول وضعیت با و بدون نشانه‌ی غیررنگی و فیلتر شبیه‌ساز کوررنگی دیده می‌شود.</p>",
     "code": {
      "html": "<label><input type=\"checkbox\" id=\"sim\"> شبیه‌سازی کوررنگی قرمز-سبز (خاکستری‌شدن)</label>\n<table id=\"tb\"><tr><th>سرویس</th><th>فقط رنگ</th><th>رنگ + نشانه</th></tr>\n<tr><td>وب</td><td><i class=\"dot ok\"></i></td><td><i class=\"dot ok\"></i> ✓ سالم</td></tr>\n<tr><td>پرداخت</td><td><i class=\"dot bad\"></i></td><td><i class=\"dot bad\"></i> ✗ خطا</td></tr></table>",
      "css": "body{font-family:sans-serif;direction:rtl;padding:12px;line-height:1.7}\n.dot{display:inline-block;width:14px;height:14px;border-radius:50%;vertical-align:middle}\n.ok{background:#16a34a}.bad{background:#dc2626}\ntable{border-collapse:collapse}td,th{padding:8px 14px;border-bottom:1px solid #e5e7eb}\n.gray{filter:grayscale(1)}",
      "js": "document.getElementById('sim').onchange = e => document.getElementById('tb').classList.toggle('gray', e.target.checked);\nconst lum = rgb => { const m = rgb.match(/\\d+/g).map(Number); return 0.2126*m[0] + 0.7152*m[1] + 0.0722*m[2]; };\nconst ok = lum(getComputedStyle(document.querySelector('.ok')).backgroundColor);\nconst bad = lum(getComputedStyle(document.querySelector('.bad')).backgroundColor);\nwindow.__lumDiff = Math.abs(ok - bad);\nconst rows = document.querySelectorAll('#tb tr');\nwindow.__textMarks = [...rows].slice(1).map(r => /[✓✗]/.test(r.cells[2].textContent));"
     },
     "exercise": "نمودار دو‌رنگ خودت را با الگو یا برچسب مستقیم بدون وابستگی به رنگ بازطراحی کن."
    }
   ],
   "quiz": [
    {
     "q": "Component در Figma چه شباهتی به Component در React دارد؟",
     "options": [
      "هیچ شباهتی ندارند",
      "هر دو عنصر قابل‌استفادهٔ مجدد هستند که یک‌بار تعریف و در جاهای مختلف استفاده می‌شوند",
      "Component در Figma فقط متن است",
      "React از Figma استفاده می‌کند"
     ],
     "answer": 1,
     "explain": "این تشابه مفهومی باعث می‌شود انتقال از طراحی به کد روان‌تر شود."
    },
    {
     "q": "هدف اصلی یک Design System چیست؟",
     "options": [
      "کندکردن روند طراحی",
      "یکپارچگی بصری در کل محصول با قوانین و کامپوننت‌های مشترک",
      "حذف نیاز به طراح",
      "فقط برای شرکت‌های بزرگ کاربرد دارد"
     ],
     "answer": 1,
     "explain": "Design System از پراکندگی و ناهماهنگی بصری بین بخش‌های مختلف محصول جلوگیری می‌کند."
    },
    {
     "q": "طبق تحقیقات نیلسن، تست با چند کاربر معمولاً برای کشف بیشتر مشکلات کلیدی کافی است؟",
     "options": [
      "۱ نفر",
      "حدود ۵ نفر",
      "۱۰۰ نفر",
      "هزاران نفر"
     ],
     "answer": 1,
     "explain": "مطالعات نشان داده تست با ۵ کاربر معمولاً اکثر مشکلات اصلی usability را آشکار می‌کند."
    },
    {
     "q": "Persona چیست؟",
     "options": [
      "یک کاربر نمونه با هدف و دغدغه",
      "نوع فونت",
      "نقشهٔ سایت",
      "رنگ اصلی"
     ],
     "answer": 0,
     "explain": "تصمیم‌های طراحی با آن سنجیده می‌شود."
    },
    {
     "q": "حداقل کنتراست پیشنهادی WCAG برای متن عادی چقدر است؟",
     "options": [
      "۱.۵ به ۱",
      "۳ به ۱",
      "۴.۵ به ۱",
      "۱۰ به ۱"
     ],
     "answer": 2,
     "explain": "سطح AA این مقدار را می‌خواهد."
    },
    {
     "q": "چه چیزی را در A/B تست تغییر می‌دهیم؟",
     "options": [
      "فقط یک متغیر در هر آزمایش",
      "همه چیز",
      "هیچ‌چیز",
      "فقط رنگ"
     ],
     "answer": 0,
     "explain": "وگرنه نمی‌دانی کدام تغییر مؤثر بود."
    },
    {
     "q": "قانون Hick چه می‌گوید؟",
     "options": [
      "هرچه گزینه بیشتر، زمان تصمیم بیشتر",
      "هدف بزرگ‌تر سریع‌تر",
      "حافظه محدود است",
      "رنگ مهم است"
     ],
     "answer": 0,
     "explain": "گزینه‌ها را کم و گروه‌بندی کن."
    },
    {
     "q": "کنتراست حداقل برای متن عادی چقدر است؟",
     "options": [
      "۴.۵ به ۱",
      "۲ به ۱",
      "۱.۵ به ۱",
      "۱۰۰ به ۱"
     ],
     "answer": 0,
     "explain": "برای متن بزرگ ۳ به ۱."
    },
    {
     "q": "چند کاربر برای یک دور تست قابلیت استفاده معمولاً کافی است؟",
     "options": [
      "حدود ۵ نفر",
      "۱ نفر",
      "۵۰۰ نفر",
      "هیچ"
     ],
     "answer": 0,
     "explain": "بهتر چند دور کوچک تا یک دور بزرگ."
    },
    {
     "q": "کدام Dark Pattern است؟",
     "options": [
      "لغو اشتراک عمداً پنهان",
      "دکمه‌ی روشن",
      "پیام خطای واضح",
      "اسکلتون بارگذاری"
     ],
     "answer": 0,
     "explain": "کاربر را به ضرر خودش هدایت می‌کند."
    },
    {
     "q": "نسبت کنتراست حداقل WCAG AA برای متن عادی چقدر است؟",
     "options": [
      "۴٫۵:۱",
      "۲:۱",
      "۳:۱",
      "۱۲:۱"
     ],
     "answer": 0,
     "explain": "متن بزرگ ۳:۱ و AAA برای متن عادی ۷:۱ است."
    },
    {
     "q": "چرا حذف outline بدون جایگزین مشکل‌ساز است؟",
     "options": [
      "کاربر کیبورد نمی‌فهمد focus کجاست",
      "کند می‌شود",
      "رنگ‌ها عوض می‌شود",
      "SEO آسیب می‌بیند"
     ],
     "answer": 0,
     "explain": "از :focus-visible استفاده کن تا حلقه فقط برای کیبورد دیده شود."
    },
    {
     "q": "برای عمل قابل‌برگشت (مثل حذف پیام) کدام الگو بهتر از پنجره‌ی «مطمئنی؟» است؟",
     "options": [
      "انجام فوری + Toast با «واگرد»",
      "سه تأیید پشت سر هم",
      "مخفی‌کردن دکمه",
      "هیچ بازخوردی ندادن"
     ],
     "answer": 0,
     "explain": "تأیید فقط برای عمل‌های برگشت‌ناپذیر و پرخطر."
    },
    {
     "q": "در roving tabindex کدام تب tabindex=0 دارد؟",
     "options": [
      "فقط تب فعال",
      "همه‌ی تب‌ها",
      "هیچ‌کدام",
      "اولین تب همیشه"
     ],
     "answer": 0,
     "explain": "بقیه -1 هستند و با کلیدهای جهت جابه‌جا می‌شوید."
    }
   ]
  }
 ],
 "project": {
  "title": "طراحی کامل UX یک اپلیکیشن از صفر",
  "brief": "یک اپلیکیشن فرضی (مثلاً اپ سفارش غذا، اپ یادداشت‌برداری، یا هر ایده‌ای که دوست داری) رو از صفر طراحی کن: از تعریف مسئله تا Wireframe تا (در صورت دسترسی) یک Mockup ساده در Figma.",
  "requirements": [
   "یک پاراگراف که مسئلهٔ اصلی کاربر و چرایی نیاز به این اپ رو توضیح بده (مرحلهٔ Empathize/Define)",
   "Wireframe متنی یا دستی حداقل ۳ صفحهٔ اصلی اپ",
   "یک پالت رنگی و انتخاب فونت با دلیل",
   "بررسی طراحی‌ات در برابر حداقل ۳ اصل از ۱۰ اصل نیلسن"
  ],
  "hints": [
   "از رقبا الهام بگیر (نه کپی) — سه اپ مشابه رو نصب کن و ببین چطور همین مسئله رو حل کردن، بعد ببین کجا می‌تونی بهتر عمل کنی."
  ]
 }
});
