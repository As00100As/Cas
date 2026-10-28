(window.COURSES=window.COURSES||[]).push({
 "id": "js",
 "name": "جاوااسکریپت",
 "icon": "⚡",
 "kind": "web",
 "desc": "تعامل، منطق و پویایی صفحات وب",
 "levels": [
  {
   "lessons": [
    {
     "title": "متغیرها و انواع داده",
     "content": "<p>در جاوااسکریپت با <code class='inline'>let</code> و <code class='inline'>const</code> متغیر تعریف می‌کنیم. <code class='inline'>const</code> برای مقادیر ثابت و <code class='inline'>let</code> برای مقادیری که تغییر می‌کنند.</p><p>انواع داده اصلی: <code class='inline'>string</code> (متن)، <code class='inline'>number</code> (عدد)، <code class='inline'>boolean</code> (true/false)، <code class='inline'>array</code> (آرایه) و <code class='inline'>object</code> (شیء).</p>",
     "code": {
      "html": "<h2>خروجی را در تب کنسول (پایین صفحه) ببینید</h2>",
      "css": "",
      "js": "const name = 'سارا';\nlet age = 25;\nconst isStudent = true;\nconst skills = ['HTML', 'CSS', 'JS'];\n\nconsole.log(name, age, isStudent);\nconsole.log(skills);"
     },
     "exercise": "یک متغیر برای شهر خودتان و یک آرایه از سه غذای مورد علاقه بسازید و با console.log چاپ کنید."
    },
    {
     "title": "شرط‌ها و حلقه‌ها",
     "content": "<p><code class='inline'>if / else</code> برای تصمیم‌گیری بر اساس شرط استفاده می‌شود. حلقهٔ <code class='inline'>for</code> برای تکرار یک بخش کد چند بار به کار می‌رود؛ <code class='inline'>while</code> تا زمانی که شرط برقرار باشد تکرار می‌کند.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const score = 75;\nif (score >= 90) {\n  console.log('عالی');\n} else if (score >= 60) {\n  console.log('قبول');\n} else {\n  console.log('نیاز به تلاش بیشتر');\n}\n\nfor (let i = 1; i <= 5; i++) {\n  console.log('شمارش:', i);\n}"
     },
     "exercise": "با یک حلقهٔ for اعداد ۱ تا ۱۰ را چاپ کنید، ولی فقط اعداد زوج را نشان دهید (با if)."
    },
    {
     "title": "عملگرها: حسابی، مقایسه‌ای و منطقی",
     "content": "<p>عملگرهای حسابی: <code class='inline'>+ - * / %</code> (باقی‌ماندهٔ تقسیم). عملگرهای مقایسه‌ای: <code class='inline'>==</code> فقط مقدار رو مقایسه می‌کنه (با تبدیل نوع خودکار — خطرناک!)، ولی <code class='inline'>===</code> مقدار و نوع رو هردو مقایسه می‌کنه — همیشه از <code class='inline'>===</code> استفاده کن. عملگرهای منطقی: <code class='inline'>&&</code> (و)، <code class='inline'>||</code> (یا)، <code class='inline'>!</code> (نقیض).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "console.log(5 == '5');   // true (فقط مقدار)\nconsole.log(5 === '5');  // false (نوع فرق داره: number vs string)\nconsole.log(10 % 3);     // 1 (باقی‌مانده)\n\nconst age = 20;\nconst hasTicket = true;\nconsole.log(age >= 18 && hasTicket); // true فقط اگه هر دو شرط برقرار باشن\nconsole.log(age < 10 || hasTicket);  // true چون حداقل یکی برقراره"
     },
     "exercise": "با === (نه ==) بررسی کن آیا عدد 100 و رشتهٔ '100' برابرند یا نه، و نتیجه رو با کامنت توضیح بده."
    },
    {
     "title": "رشته‌ها: Template Literals و متدهای پرکاربرد",
     "content": "<p><b>Template Literal</b> (با بک‌تیک `` ` ``) اجازه می‌ده متغیر رو مستقیم داخل رشته با <code class='inline'>${'{'}variable{'}'}</code> بنویسی — خواناتر از جمع‌کردن رشته‌ها با +. متدهای پرکاربرد رشته: <code class='inline'>.toUpperCase()</code>/<code class='inline'>.toLowerCase()</code>، <code class='inline'>.trim()</code> (حذف فاصلهٔ اضافه)، <code class='inline'>.includes()</code> (آیا شامل یک بخش هست)، <code class='inline'>.slice()</code> (برش رشته).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const name = 'سارا';\nconst age = 25;\n\n// روش قدیمی:\nconsole.log('سلام ' + name + '، سن تو ' + age + ' ساله.');\n\n// روش بهتر با Template Literal:\nconsole.log(`سلام ${name}، سن تو ${age} ساله.`);\n\nconst email = '  Test@Example.com  ';\nconsole.log(email.trim().toLowerCase());\nconsole.log(email.includes('@'));"
     },
     "exercise": "با Template Literal یک جمله بساز که سه متغیر (نام، شغل، شهر) رو در یک خط ترکیب کنه."
    },
    {
     "title": "آرایه‌ها: متدهای پایه",
     "content": "<p>متدهای اصلی آرایه: <code class='inline'>.push()</code> افزودن به انتها، <code class='inline'>.pop()</code> حذف از انتها، <code class='inline'>.length</code> تعداد عضوها (property نه متد)، <code class='inline'>.includes()</code> بررسی وجود یک مقدار، <code class='inline'>.indexOf()</code> پیداکردن اندیس یک مقدار (اگه نباشه -1 برمی‌گردونه).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const cart = ['کتاب', 'دفتر'];\ncart.push('خودکار');\nconsole.log(cart);\nconsole.log('تعداد اقلام:', cart.length);\n\ncart.pop();\nconsole.log('بعد از حذف آخری:', cart);\n\nconsole.log('کتاب توی سبده؟', cart.includes('کتاب'));\nconsole.log('اندیس دفتر:', cart.indexOf('دفتر'));"
     },
     "exercise": "یک آرایهٔ خالی از نام دوستانت بساز، سه اسم با push اضافه کن، بعد بررسی کن آیا یک اسم خاص توی آرایه هست یا نه (با includes)."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی let و const چیست؟",
     "options": [
      "let فقط برای عدد است",
      "const مقدار ثابت است و دوباره مقداردهی نمی‌شود",
      "تفاوتی ندارند",
      "const فقط برای رشته است"
     ],
     "answer": 1,
     "explain": "const یک بار مقداردهی می‌شود و دیگر قابل تغییر نیست (برای object/array محتوا قابل تغییر است ولی خودِ متغیر نه)."
    },
    {
     "q": "کدام حلقه برای تکرار با تعداد مشخص مناسب‌تر است؟",
     "options": [
      "if",
      "for",
      "switch",
      "const"
     ],
     "answer": 1,
     "explain": "حلقهٔ for برای تعداد تکرار مشخص با شمارنده طراحی شده است."
    },
    {
     "q": "تفاوت == و === در جاوااسکریپت چیست؟",
     "options": [
      "تفاوتی ندارند",
      "=== نوع و مقدار را هردو مقایسه می‌کند، == فقط مقدار (با تبدیل خودکار نوع)",
      "== سریع‌تر است",
      "=== فقط برای عدد است"
     ],
     "answer": 1,
     "explain": "به همین دلیل توصیه می‌شود همیشه از === استفاده شود تا رفتار غیرمنتظره پیش نیاید."
    },
    {
     "q": "Template Literal با چه کاراکتری نوشته می‌شود؟",
     "options": [
      "کوتیشن تکی ' '",
      "کوتیشن دوتایی \" \"",
      "بک‌تیک ` `",
      "براکت [ ]"
     ],
     "answer": 2,
     "explain": "بک‌تیک اجازهٔ استفاده از ${variable} داخل رشته را می‌دهد."
    },
    {
     "q": "متد push روی آرایه چه کاری انجام می‌دهد؟",
     "options": [
      "یک عضو از ابتدا حذف می‌کند",
      "یک عضو به انتهای آرایه اضافه می‌کند",
      "آرایه را خالی می‌کند",
      "آرایه را برعکس می‌کند"
     ],
     "answer": 1,
     "explain": "push مقدار جدید را به انتهای آرایه اضافه می‌کند و طول جدید را برمی‌گرداند."
    }
   ],
   "challenge": {
    "task": "یک آرایه از قیمت چند محصول بساز (اعداد). با یک حلقهٔ for، مجموع کل قیمت‌ها رو حساب کن و چاپش کن. بعد با === بررسی کن آیا مجموع بیشتر از یک عدد مشخص (مثلاً ۵۰۰۰۰۰) هست یا نه و پیام مناسب (با Template Literal) چاپ کن.",
    "hint1": "یک متغیر total = 0 قبل از حلقه تعریف کن، داخل حلقه total += prices[i] رو بنویس.",
    "hint2": "برای پیام نهایی از Template Literal استفاده کن: `مجموع خرید شما: ${total} تومان است.`",
    "solution": "const prices = [120000, 45000, 89000, 250000];\nlet total = 0;\nfor (let i = 0; i < prices.length; i++) {\n  total += prices[i];\n}\nconsole.log(`مجموع خرید شما: ${total} تومان است.`);\nif (total > 500000) {\n  console.log('تبریک! ارسال رایگان شامل حالت می‌شه.');\n} else {\n  console.log('برای ارسال رایگان کمی بیشتر خرید کن.');\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "توابع و آرایه‌ها",
     "content": "<p>تابع بلوکی از کد قابل استفادهٔ مجدد است: <code class='inline'>function jam(a, b) { return a + b; }</code>. آرایه‌ها متدهای پرکاربردی دارند مثل <code class='inline'>map</code>، <code class='inline'>filter</code> و <code class='inline'>forEach</code>.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "function jam(a, b) {\n  return a + b;\n}\nconsole.log(jam(3, 4));\n\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(doubled);\nconsole.log(evens);"
     },
     "exercise": "تابعی بنویسید که یک آرایه از قیمت‌ها بگیرد و با map قیمت‌ها را ۱۰٪ تخفیف دهد."
    },
    {
     "title": "DOM و رویدادها",
     "content": "<p>DOM (Document Object Model) نمایش درختی صفحهٔ HTML است که جاوااسکریپت می‌تواند آن را تغییر دهد. با <code class='inline'>document.querySelector</code> عنصر را انتخاب و با <code class='inline'>addEventListener</code> به رویدادهایی مثل کلیک گوش می‌دهیم.</p>",
     "code": {
      "html": "<button id=\"btn\">کلیک کن</button>\n<p id=\"out\">هنوز کلیک نشده</p>",
      "css": "",
      "js": "const btn = document.getElementById('btn');\nconst out = document.getElementById('out');\nlet count = 0;\nbtn.addEventListener('click', () => {\n  count++;\n  out.textContent = 'تعداد کلیک: ' + count;\n});"
     },
     "exercise": "دکمه‌ای بسازید که با هر کلیک رنگ پس‌زمینه صفحه را عوض کند."
    },
    {
     "title": "کار با فرم‌ها و ذخیره‌سازی محلی (LocalStorage)",
     "content": "<p>می‌توان مقدار ورودی‌های فرم را با <code class='inline'>input.value</code> خواند و با <code class='inline'>event.preventDefault()</code> از ارسال پیش‌فرض فرم (رفرش صفحه) جلوگیری کرد.</p><p><code class='inline'>localStorage</code> داده را حتی بعد از بستن مرورگر نگه می‌دارد (مثلاً برای ذخیرهٔ تنظیمات کاربر)؛ <code class='inline'>sessionStorage</code> مشابه آن است ولی با بستن تب پاک می‌شود. هر دو فقط رشته ذخیره می‌کنند، پس برای شیء/آرایه از <code class='inline'>JSON.stringify</code> و <code class='inline'>JSON.parse</code> استفاده می‌شود.</p>",
     "code": {
      "html": "<input id=\"nameInput\" placeholder=\"اسمت رو بنویس\">\n<button id=\"saveBtn\">ذخیره</button>\n<p id=\"greet\"></p>",
      "css": "",
      "js": "const store=(()=>{try{localStorage.setItem('_t','1');localStorage.removeItem('_t');return localStorage}catch(e){const m={};return{getItem:k=>(k in m?m[k]:null),setItem:(k,v)=>{m[k]=String(v)},removeItem:k=>{delete m[k]}}}})();\nconst input = document.getElementById('nameInput');\nconst greet = document.getElementById('greet');\n\nconst saved = store.getItem('myName');\nif (saved) greet.textContent = 'سلام دوباره، ' + saved + '!';\n\ndocument.getElementById('saveBtn').addEventListener('click', () => {\n  store.setItem('myName', input.value);\n  greet.textContent = 'ذخیره شد! رفرش کن تا ببینی هنوز هست.';\n});"
     },
     "exercise": "یک لیست کار (todo) بسازید که با هر تغییر، کل لیست را به‌صورت JSON در localStorage ذخیره کند."
    },
    {
     "title": "Scope، Hoisting و Destructuring/Spread/Rest",
     "content": "<p><b>Scope</b> محدودهٔ دیدن یک متغیر است: متغیر تعریف‌شده با <code class='inline'>let/const</code> داخل یک بلوک <code class='inline'>{ }</code> فقط همان‌جا در دسترس است. <b>Hoisting</b> یعنی تعریف تابع/متغیر در حافظه «بالا کشیده می‌شود»، ولی مقداردهی نه — به همین دلیل استفاده از یک متغیر <code class='inline'>let</code> قبل از تعریفش خطا می‌دهد.</p><p><b>Destructuring</b> راهی کوتاه برای استخراج مقدار از آرایه/شیء است؛ <b>Spread (...)</b> عناصر را «باز» می‌کند (کپی یا ترکیب آرایه/شیء) و <b>Rest (...)</b> بقیهٔ آرگومان‌ها را در یک آرایه جمع می‌کند.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const user = { name: 'نیلا', age: 28, city: 'تهران' };\nconst { name, city } = user; // destructuring\nconsole.log(name, city);\n\nconst nums = [1, 2, 3];\nconst moreNums = [...nums, 4, 5]; // spread\nconsole.log(moreNums);\n\nfunction sumAll(...values) { // rest\n  return values.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));"
     },
     "exercise": "یک شیء product با name و price بسازید و با destructuring هر دو مقدار را در یک خط استخراج کنید."
    },
    {
     "title": "Objects عمیق‌تر: متد، this و به‌روزرسانی",
     "content": "<p>شیء می‌تواند علاوه بر داده، <b>متد</b> (تابع داخل شیء) هم داشته باشد. داخل یک متد، <code class='inline'>this</code> اشاره به همان شیء دارد. برای اضافه/تغییر یک ویژگی: <code class='inline'>obj.newProp = value</code>؛ برای حذف: <code class='inline'>delete obj.prop</code>.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const car = {\n  brand: 'Toyota',\n  speed: 0,\n  accelerate(amount) {\n    this.speed += amount;\n    console.log(`${this.brand} الان با سرعت ${this.speed} می‌ره`);\n  }\n};\n\ncar.accelerate(20);\ncar.accelerate(30);\n\ncar.color = 'قرمز'; // اضافه‌کردن ویژگی جدید\nconsole.log(car);"
     },
     "exercise": "یک شیء counter بساز با ویژگی count=0 و دو متد increase() و decrease() که مقدار count رو با this تغییر بدن."
    },
    {
     "title": "آرایهٔ پیشرفته: reduce، find و sort",
     "content": "<p><code class='inline'>.reduce()</code> یک آرایه رو به یک مقدار واحد «تجمیع» می‌کنه (مثل جمع‌کردن قیمت‌ها). <code class='inline'>.find()</code> اولین عضوی که شرط رو برآورده می‌کنه برمی‌گردونه (نه یک آرایه، فقط یک مقدار). <code class='inline'>.sort()</code> آرایه رو مرتب می‌کنه — برای اعداد باید یک تابع مقایسه بدی، وگرنه به‌صورت رشته‌ای مرتب می‌کنه (که برای اعداد اشتباهه)!</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "const cart = [\n  { name: 'کتاب', price: 120000 },\n  { name: 'هدفون', price: 450000 },\n  { name: 'ماوس', price: 90000 }\n];\n\nconst total = cart.reduce((sum, item) => sum + item.price, 0);\nconsole.log('مجموع:', total);\n\nconst expensive = cart.find(item => item.price > 400000);\nconsole.log('گران‌ترین (اولی که پیدا شد):', expensive);\n\nconst sorted = [...cart].sort((a, b) => a.price - b.price);\nconsole.log('مرتب‌شده بر اساس قیمت:', sorted);"
     },
     "exercise": "با reduce میانگین قیمت آرایهٔ cart رو حساب کن (مجموع تقسیم بر تعداد)."
    },
    {
     "title": "Arrow Function و تفاوتش با function عادی",
     "content": "<p><b>Arrow Function</b> (<code class='inline'>(a, b) => a + b</code>) سینتکس کوتاه‌تری برای نوشتن تابع است. تفاوت مهم: arrow function مقدار <code class='inline'>this</code> خودش رو نداره — از محیط اطرافش (lexical scope) به ارث می‌بره. به همین دلیل داخل متدهای شیء که به this نیاز دارن، باید از function عادی استفاده کرد، نه arrow.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "// تابع عادی\nfunction add(a, b) {\n  return a + b;\n}\n\n// همون با arrow function\nconst addArrow = (a, b) => a + b;\n\nconsole.log(add(2, 3), addArrow(2, 3));\n\nconst obj = {\n  name: 'تست',\n  normalMethod() {\n    console.log('normal this:', this.name); // درست کار می‌کنه\n  },\n  arrowMethod: () => {\n    console.log('arrow this:', this.name); // undefined! چون this رو از بیرون گرفته\n  }\n};\nobj.normalMethod();\nobj.arrowMethod();"
     },
     "exercise": "سه تابع جمع، تفریق و ضرب رو با سینتکس arrow function بنویس (هر کدوم یک خط)."
    }
   ],
   "quiz": [
    {
     "q": "متد map روی آرایه چه کاری انجام می‌دهد؟",
     "options": [
      "آرایه را حذف می‌کند",
      "برای هر عضو یک تابع اجرا کرده و آرایهٔ جدید برمی‌گرداند",
      "فقط طول آرایه را برمی‌گرداند",
      "آرایه را مرتب می‌کند"
     ],
     "answer": 1,
     "explain": "map یک آرایهٔ جدید با همان طول ولی مقادیر تبدیل‌شده برمی‌گرداند."
    },
    {
     "q": "برای گوش‌دادن به کلیک روی یک دکمه از چه چیزی استفاده می‌کنیم؟",
     "options": [
      "btn.click()",
      "btn.addEventListener('click', fn)",
      "btn.onLoad()",
      "document.click"
     ],
     "answer": 1,
     "explain": "addEventListener تابعی را برای رویداد مشخص ثبت می‌کند."
    },
    {
     "q": "متد reduce روی آرایه چه کاری انجام می‌دهد؟",
     "options": [
      "آرایه را کوتاه می‌کند",
      "آرایه را به یک مقدار واحد تجمیع می‌کند",
      "فقط اولین عضو را برمی‌گرداند",
      "آرایه را برعکس می‌کند"
     ],
     "answer": 1,
     "explain": "reduce با یک تابع و مقدار اولیه، همهٔ اعضا را به یک نتیجهٔ نهایی می‌رساند."
    },
    {
     "q": "برای مرتب‌سازی صحیح آرایه‌ای از اعداد با sort چه باید کرد؟",
     "options": [
      "هیچ کاری، پیش‌فرض کافیست",
      "یک تابع مقایسه مثل (a,b)=>a-b به آن پاس داد",
      "فقط برای رشته کار می‌کند",
      "از reduce استفاده کرد"
     ],
     "answer": 1,
     "explain": "بدون تابع مقایسه، sort اعداد را به‌صورت رشته‌ای (و اشتباه) مرتب می‌کند."
    },
    {
     "q": "تفاوت اصلی Arrow Function با function عادی در چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Arrow Function مقدار this خودش را ندارد و از محیط اطراف به ارث می‌برد",
      "Arrow Function کندتر است",
      "فقط Arrow Function می‌تواند آرگومان بگیرد"
     ],
     "answer": 1,
     "explain": "همین موضوع باعث می‌شود برای متدهای شیء که به this نیاز دارند، function عادی مناسب‌تر باشد."
    }
   ],
   "challenge": {
    "task": "یک آرایه از اشیاء دانش‌آموز بساز (هرکدوم name و score). با reduce میانگین نمرات رو حساب کن، با find اولین دانش‌آموزی که نمره‌اش بالای ۱۸ هست رو پیدا کن، و با sort آرایه رو از بیشترین به کمترین نمره مرتب کن.",
    "hint1": "برای reduce: sum را با مقدار اولیه ۰ شروع کن و هر بار score رو بهش اضافه کن، در آخر تقسیم بر length.",
    "hint2": "برای sort نزولی (بیشترین اول): از (a,b) => b.score - a.score استفاده کن (نه a.score - b.score).",
    "solution": "const students = [\n  { name: 'سارا', score: 19 },\n  { name: 'علی', score: 14 },\n  { name: 'مریم', score: 20 }\n];\n\nconst avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;\nconsole.log('میانگین:', avg);\n\nconst topStudent = students.find(s => s.score > 18);\nconsole.log('اولین نمرهٔ بالای ۱۸:', topStudent);\n\nconst sorted = [...students].sort((a, b) => b.score - a.score);\nconsole.log('مرتب‌شده نزولی:', sorted);"
   }
  },
  {
   "lessons": [
    {
     "title": "برنامه‌نویسی ناهمزمان: Promise، Async/Await و Fetch",
     "content": "<p>عملیات‌هایی مثل درخواست شبکه زمان می‌برند و نباید صفحه را قفل کنند؛ برای همین از <code class='inline'>Promise</code> استفاده می‌شود. کلیدواژهٔ <code class='inline'>async/await</code> کد ناهمزمان را شبیه کد همزمان و خواناتر می‌کند. <code class='inline'>fetch</code> برای گرفتن داده از یک آدرس (API) استفاده می‌شود.</p>",
     "code": {
      "html": "<p>در کنسول خروجی را ببینید (fetch در این پیش‌نمایش ممکن است به دلیل محدودیت شبکه کار نکند، ولی ساختار کد صحیح است).</p>",
      "css": "",
      "js": "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function run() {\n  console.log('شروع...');\n  await delay(500);\n  console.log('نیم ثانیه گذشت!');\n}\nrun();"
     },
     "exercise": "تابعی async بنویسید که سه پیام را با فاصلهٔ زمانی چاپ کند."
    },
    {
     "title": "از Callback تا Promise: چرا async/await به‌وجود آمد",
     "content": "<p>قبل از Promise، کد ناهمزمان با <b>Callback</b> نوشته می‌شد: تابعی که وقتی کار تمام شد صدا زده می‌شود. مشکل این روش با چند مرحلهٔ پشت‌سرهم، تودرتو و ناخوانا شدن کد بود (معروف به <i>Callback Hell</i>).</p><p><b>Promise</b> این مشکل را حل کرد: یک شیء که نمایندهٔ «نتیجه‌ای در آینده» است و سه حالت دارد: در انتظار (pending)، موفق (fulfilled) یا ناموفق (rejected). زنجیرهٔ <code class='inline'>.then()</code> جایگزین تودرتوشدن callbackها شد، و <code class='inline'>async/await</code> در نهایت همان Promise را خواناتر کرد.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "// روش قدیمی: callback تودرتو\nfunction getUserCallback(id, callback) {\n  setTimeout(() => callback({ id, name: 'کاربر ' + id }), 300);\n}\ngetUserCallback(1, (user) => {\n  console.log('روش callback:', user.name);\n});\n\n// روش جدید: Promise + then\nfunction getUserPromise(id) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ id, name: 'کاربر ' + id }), 300);\n  });\n}\ngetUserPromise(2).then(user => console.log('روش promise:', user.name));"
     },
     "exercise": "تابع getUserPromise را طوری تغییر دهید که اگر id منفی بود، به‌جای resolve از reject با یک پیام خطا استفاده کند، و با .catch() خطا را بگیرید."
    },
    {
     "title": "مفاهیم شیءگرایی در جاوااسکریپت (Class)",
     "content": "<p>با <code class='inline'>class</code> می‌توان قالب‌هایی برای ساخت آبجکت‌های مشابه تعریف کرد. سازنده (<code class='inline'>constructor</code>) هنگام ساخت نمونه اجرا می‌شود و متدها رفتار آبجکت را تعریف می‌کنند.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    return 'سلام، من ' + this.name + ' هستم.';\n  }\n}\n\nconst p1 = new Person('علی', 30);\nconsole.log(p1.greet());\nconsole.log(p1.age);"
     },
     "exercise": "یک کلاس Book با ویژگی‌های title و author و متدی به نام info بسازید که یک جمله دربارهٔ کتاب برگرداند."
    },
    {
     "title": "وراثت با extends و Prototype",
     "content": "<p>یک کلاس می‌تواند با <code class='inline'>extends</code> ویژگی‌ها و متدهای کلاس دیگری را به ارث ببرد؛ <code class='inline'>super()</code> داخل constructor فرزند، constructor والد رو صدا می‌زنه. زیرِ سطح class، جاوااسکریپت از سیستمی به نام <b>Prototype</b> استفاده می‌کنه — هر آبجکت به یک آبجکت دیگه (prototype) وصله و اگه متدی رو روی خودش نداشته باشه، اونجا دنبالش می‌گرده؛ class فقط یک سینتکس تمیزتر روی همین مکانیزمه.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  makeSound() {\n    return 'صدای نامشخص';\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // constructor والد رو صدا می‌زنه\n    this.breed = breed;\n  }\n  makeSound() { // Override\n    return `${this.name} (${this.breed}): واق واق!`;\n  }\n}\n\nconst d = new Dog('رکس', 'ژرمن شپرد');\nconsole.log(d.makeSound());\nconsole.log(d instanceof Animal); // true — چون از Animal ارث برده"
     },
     "exercise": "یک کلاس Vehicle با متد describe() بساز، بعد کلاس Car رو با extends از آن بساز که describe() رو با اطلاعات بیشتر override کنه."
    },
    {
     "title": "Event Loop و Call Stack (مفهومی)",
     "content": "<p>جاوااسکریپت <b>تک‌رشته‌ای (single-threaded)</b> است — فقط یک کار رو در آن واحد اجرا می‌کنه. <b>Call Stack</b> پشته‌ای از توابعیه که در حال اجرا هستن. وقتی کد به یک عملیات ناهمزمان (مثل setTimeout یا fetch) می‌رسه، اون رو به مرورگر می‌سپاره و ادامه می‌ده؛ وقتی اون عملیات تموم شد، نتیجه‌اش به «صف» می‌ره و <b>Event Loop</b> بعد از خالی‌شدن Call Stack، اون رو اجرا می‌کنه. برای همینه که یک setTimeout(fn, 0) هم بلافاصله اجرا نمی‌شه — باید صبر کنه Call Stack خالی بشه.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "console.log('۱ - شروع');\n\nsetTimeout(() => {\n  console.log('۳ - این توی صف می‌ره، حتی با تاخیر ۰');\n}, 0);\n\nconsole.log('۲ - پایان کد همزمان');\n\n// ترتیب چاپ: ۱, ۲, ۳ — نه ۱, ۳, ۲!\n// چون setTimeout همیشه صبر می‌کنه Call Stack خالی بشه"
     },
     "exercise": "پیش‌بینی کن اگه سه تا console.log با یکی setTimeout(fn, 0) وسطشون بنویسی، ترتیب چاپ چی می‌شه؛ بعد کد رو اجرا کن و ببین درست حدس زدی یا نه."
    },
    {
     "title": "Error Handling: try/catch در جاوااسکریپت",
     "content": "<p>مثل پایتون، جاوااسکریپت هم <code class='inline'>try/catch</code> داره: کدی که ممکنه خطا بده داخل try، و مدیریت خطا داخل catch. <code class='inline'>throw</code> اجازه می‌ده خودتون یک خطای سفارشی «پرتاب» کنید. این خصوصاً برای اعتبارسنجی ورودی کاربر یا مدیریت خطای fetch خیلی مهمه.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "function divide(a, b) {\n  if (b === 0) {\n    throw new Error('تقسیم بر صفر مجاز نیست!');\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 2));\n  console.log(divide(5, 0)); // اینجا خطا پرتاب می‌شه\n} catch (error) {\n  console.log('خطا گرفته شد:', error.message);\n} finally {\n  console.log('این خط همیشه اجرا می‌شه.');\n}"
     },
     "exercise": "تابعی بنویس که سن بگیره و اگه منفی بود throw new Error بزنه؛ بیرون از تابع با try/catch خطا رو بگیر و پیام مناسب چاپ کن."
    }
   ],
   "quiz": [
    {
     "q": "async/await برای چه استفاده می‌شود؟",
     "options": [
      "استایل‌دهی صفحه",
      "نوشتن خواناتر کد ناهمزمان (Promise)",
      "ساخت جدول",
      "تعریف متغیر ثابت"
     ],
     "answer": 1,
     "explain": "async/await روی Promise ساخته شده و کد را شبیه کد ترتیبی می‌کند."
    },
    {
     "q": "fetch معمولاً برای چه کاری به کار می‌رود؟",
     "options": [
      "گرفتن داده از یک آدرس/سرور",
      "تعریف تابع",
      "حذف عنصر از DOM",
      "ساخت آرایه"
     ],
     "answer": 0,
     "explain": "fetch یک درخواست HTTP می‌فرستد و Promise برمی‌گرداند."
    },
    {
     "q": "super() داخل constructor یک کلاس فرزند چه کاری می‌کند؟",
     "options": [
      "کلاس والد را حذف می‌کند",
      "constructor کلاس والد را صدا می‌زند",
      "یک متد جدید می‌سازد",
      "هیچ‌کاری نمی‌کند"
     ],
     "answer": 1,
     "explain": "این تضمین می‌کند ویژگی‌های تعریف‌شده در constructor والد هم مقداردهی شوند."
    },
    {
     "q": "چرا setTimeout(fn, 0) بلافاصله اجرا نمی‌شود؟",
     "options": [
      "باگ مرورگر است",
      "باید صبر کند Call Stack خالی شود؛ Event Loop آن را بعد اجرا می‌کند",
      "0 میلی‌ثانیه یعنی هرگز",
      "فقط در Node.js این‌طور است"
     ],
     "answer": 1,
     "explain": "کد همزمان همیشه قبل از کدهای صف‌شده (مثل setTimeout) اجرا می‌شود."
    },
    {
     "q": "throw new Error(...) چه کاری انجام می‌دهد؟",
     "options": [
      "یک warning در کنسول می‌نویسد",
      "یک خطای سفارشی پرتاب می‌کند که با catch قابل گرفتن است",
      "برنامه را می‌بندد",
      "یک تابع جدید می‌سازد"
     ],
     "answer": 1,
     "explain": "throw اجرای عادی را متوقف کرده و کنترل را به نزدیک‌ترین catch منتقل می‌کند."
    }
   ],
   "challenge": {
    "task": "تابعی بساز به اسم fetchUserSafe(id) که با fetch از یک API فرضی (یا واقعی مثل jsonplaceholder.typicode.com/users/[id]) داده بگیره. با try/catch مدیریت کن که اگه fetch با خطا مواجه شد (مثلاً قطعی اینترنت)، پیام «خطا در دریافت اطلاعات کاربر» چاپ بشه به‌جای کرش‌کردن.",
    "hint1": "چون fetch یک Promise برمی‌گردونه، تابعت باید async باشه تا بتونی از await استفاده کنی.",
    "hint2": "هم response.ok رو چک کن (برای خطاهای HTTP مثل 404) هم try/catch بذار (برای خطاهای شبکه)؛ این دو با هم فرق دارن.",
    "solution": "async function fetchUserSafe(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n    if (!response.ok) {\n      throw new Error('کاربر پیدا نشد یا خطای سرور');\n    }\n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.log('خطا در دریافت اطلاعات کاربر:', error.message);\n    return null;\n  }\n}\n\nfetchUserSafe(1);"
   }
  },
  {
   "lessons": [
    {
     "title": "الگوی مدیریت وضعیت (State Management) در فرانت‌اند بزرگ",
     "content": "<p>در سایت‌های بزرگ، ده‌ها بخش رابط کاربری باید از یک «داده مشترک» باخبر شوند (مثلاً سبد خرید). به‌جای پاس‌دادن دستی متغیرها بین توابع، از الگوی <b>store</b> با <code class='inline'>subscribe/publish</code> استفاده می‌شود: هر بخش UI که به داده علاقه دارد، «subscribe» می‌کند و هر وقت داده تغییر کرد، خودکار باخبر می‌شود.</p>",
     "code": {
      "html": "<button id=\"inc\">+ افزودن به سبد</button>\n<p id=\"view\">تعداد اقلام سبد: 0</p>",
      "css": "",
      "js": "function createStore(initial) {\n  let state = initial;\n  const listeners = [];\n  return {\n    getState: () => state,\n    setState: (updater) => {\n      state = updater(state);\n      listeners.forEach(fn => fn(state));\n    },\n    subscribe: (fn) => listeners.push(fn)\n  };\n}\n\nconst cartStore = createStore({ count: 0 });\n\ncartStore.subscribe((state) => {\n  document.getElementById('view').textContent = 'تعداد اقلام سبد: ' + state.count;\n});\n\ndocument.getElementById('inc').addEventListener('click', () => {\n  cartStore.setState(s => ({ count: s.count + 1 }));\n});"
     },
     "exercise": "به store یک متد reset اضافه کنید که تعداد را صفر کند و یک دکمهٔ «خالی‌کردن سبد» به صفحه اضافه کنید."
    },
    {
     "title": "شروع React با CDN — تفکر کامپوننت‌محور واقعی",
     "content": "<p>React رابط کاربری را به‌صورت «تابعی از state» می‌سازد: وقتی state تغییر کند، React خودش صفحه را به‌روز می‌کند. برای تجربه‌کردن سریع نیازی به Node نیست؛ کافی است React و ReactDOM را از CDN بارگذاری کنید (در پروژهٔ واقعی و بزرگ، برای بیلد و بستن فایل‌ها به Node.js و ابزارهایی مثل Vite نیاز خواهید داشت).</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "function Counter() {\n  const [count, setCount] = React.useState(0);\n  return React.createElement('div', { style: { fontFamily: 'sans-serif' } },\n    React.createElement('p', null, 'تعداد کلیک: ' + count),\n    React.createElement('button', { onClick: () => setCount(count + 1) }, 'کلیک کن')\n  );\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(React.createElement(Counter));"
     },
     "exercise": "یک کامپوننت Toggle بسازید که با کلیک بین دو حالت «روشن» و «خاموش» جابه‌جا شود (با useState از نوع boolean)."
    },
    {
     "title": "Closures: چرا store pattern کار می‌کرد؟",
     "content": "<p><b>Closure</b> وقتی اتفاق می‌افته که یک تابع، به متغیرهای محدودهٔ (scope) بیرونی خودش دسترسی داشته باشه، حتی بعد از اینکه اون تابع بیرونی تمام شده. این دقیقاً همون چیزیه که در درس «مدیریت وضعیت» استفاده کردیم: متغیر <code class='inline'>state</code> داخل <code class='inline'>createStore</code> تعریف شده بود، ولی توابع <code class='inline'>getState/setState</code> که برگردونده شدن، هنوز بهش دسترسی دارن — چون یک closure روی state تشکیل شده. این پایهٔ خیلی از الگوهای مهم جاوااسکریپته (از جمله همون store، و همچنین private variableها).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "function createCounter() {\n  let count = 0; // این متغیر private می‌مونه، از بیرون قابل‌دسترسی نیست\n  return {\n    increment() { count++; return count; },\n    reset() { count = 0; }\n  };\n}\n\nconst counter1 = createCounter();\nconsole.log(counter1.increment()); // 1\nconsole.log(counter1.increment()); // 2\n\nconst counter2 = createCounter(); // یک closure کاملاً جدا و مستقل\nconsole.log(counter2.increment()); // 1 (نه 3!)"
     },
     "exercise": "توضیح بده چرا counter1 و counter2 در مثال بالا مستقل از هم هستن و روی هم تاثیر نمی‌ذارن، با اینکه از یک تابع ساخته شدن."
    },
    {
     "title": "ماژول‌های ES: import و export",
     "content": "<p>در پروژه‌های واقعی، کد به فایل‌های جدا (ماژول) تقسیم می‌شه تا قابل نگه‌داری باشه. با <code class='inline'>export</code> یک تابع/متغیر رو از یک فایل «صادر» می‌کنی و با <code class='inline'>import</code> در فایل دیگه استفاده‌اش می‌کنی. برای استفاده در مرورگر، تگ script باید <code class='inline'>type=\"module\"</code> داشته باشه.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "// math.js (فایل جدا در پروژهٔ واقعی):\nexport function add(a, b) {\n  return a + b;\n}\nexport const PI = 3.14159;\n\n// main.js (فایل دیگه):\n// import { add, PI } from './math.js';\n// console.log(add(2, 3));\n// console.log(PI);\n\n// نکته: در این پیش‌نمایش تک‌فایلی، import/export واقعی بین فایل جدا قابل تست نیست —\n// ولی سینتکس بالا دقیقاً همونیه که در پروژهٔ واقعی خودتون استفاده می‌کنید."
     },
     "exercise": "توضیح بده چرا تقسیم‌کردن کد به چند فایل ماژول (به‌جای یک فایل هزار خطی) نگه‌داری پروژه رو راحت‌تر می‌کنه."
    },
    {
     "title": "Map، Set و WeakMap",
     "content": "<p><code class='inline'>Map</code> کلید-مقدار است ولی کلیدش می‌تواند هر نوعی باشد (حتی آبجکت) و ترتیب درج را حفظ می‌کند. <code class='inline'>Set</code> فقط مقادیر یکتا نگه می‌دارد؛ حذف تکراری‌های آرایه با <code class='inline'>[...new Set(arr)]</code>. <code class='inline'>WeakMap</code> کلیدها را ضعیف نگه می‌دارد تا Garbage Collector بتواند آن‌ها را پاک کند.</p>",
     "exercise": "با Map تعداد تکرار هر کلمه در یک جمله را بشمار.",
     "code": {
      "html": "",
      "css": "",
      "js": "const uniq=[...new Set([1,2,2,3,3])];\nconsole.log(uniq);\nconst m=new Map();\nfor(const w of 'a b a c a b'.split(' ')) m.set(w,(m.get(w)||0)+1);\nconsole.log([...m]);"
     }
    },
    {
     "title": "Iterator و Generator",
     "content": "<p>هر چیزی که با <code class='inline'>for...of</code> پیمایش شود یک iterable است. <b>Generator</b> (<code class='inline'>function*</code>) تابعی است که با <code class='inline'>yield</code> وسط اجرا مکث می‌کند و بعداً ادامه می‌دهد؛ برای دنبالهٔ بی‌نهایت یا پردازش تنبل داده عالی است.</p>",
     "exercise": "یک generator بنویس که اعداد فیبوناچی را یکی‌یکی بدهد.",
     "code": {
      "html": "",
      "css": "",
      "js": "function* count(n){\n  for(let i=1;i<=n;i++) yield i*i;\n}\nfor(const v of count(4)) console.log(v);"
     }
    },
    {
     "title": "Regex و Date: متن و زمان در جاوااسکریپت",
     "content": "<p>Regex الگوهای متنی را پیدا می‌کند: <code class='inline'>test</code> فقط درست/غلط می‌دهد و <code class='inline'>match</code>/<code class='inline'>matchAll</code> خود تطبیق‌ها را. گروه‌های نام‌دار با <code class='inline'>(?&lt;name&gt;...)</code> خواناترند. برای زمان، <code class='inline'>Date</code> و <code class='inline'>Intl.DateTimeFormat</code> قالب‌بندی محلی (حتی تاریخ شمسی با <code class='inline'>fa-IR</code>) را بدون کتابخانه می‌دهند.</p>",
     "exercise": "با regex یک شمارهٔ موبایل ایران را اعتبارسنجی کن و تاریخ امروز را به شمسی چاپ کن.",
     "code": {
      "html": "",
      "css": "",
      "js": "const m='2026-10-02'.match(/(?<y>\\d{4})-(?<m>\\d\\d)-(?<d>\\d\\d)/);\nconsole.log(m.groups);\nconsole.log(/^09\\d{9}$/.test('09123456789'));\nconsole.log(new Intl.DateTimeFormat('fa-IR',{dateStyle:'long'}).format(new Date()));"
     }
    },
    {
     "title": "تست‌نویسی و Proxy",
     "content": "<p>تست خودکار یعنی کدی که درستی کد دیگر را بررسی می‌کند؛ ساده‌ترین شکلش <code class='inline'>console.assert</code> است و در پروژه‌ها از Vitest یا Jest استفاده می‌شود. اصل کار: ورودی مشخص، خروجی مورد انتظار. <code class='inline'>Proxy</code> هم هر دسترسی به یک آبجکت (get/set) را رهگیری می‌کند؛ پایهٔ reactivity در Vue است.</p>",
     "exercise": "برای تابع add چهار تست بنویس و با Proxy هر خواندن یک فیلد را لاگ کن.",
     "code": {
      "html": "",
      "css": "",
      "js": "const add=(a,b)=>a+b;\nconsole.assert(add(2,3)===5,'add failed');\nconst p=new Proxy({x:1},{get(t,k){console.log('read',k);return t[k]}});\nconsole.log(p.x);"
     }
    },
    {
     "title": "Closure، Scope، Hoisting و TDZ",
     "content": "<p>Closure یعنی تابع به متغیرهای محیط تعریفش دسترسی دارد حتی بعد از پایان آن محیط؛ پایه‌ی state خصوصی. <code class='inline'>var</code> دامنه‌ی تابع و hoist شده است، ولی <code class='inline'>let/const</code> دامنه‌ی بلوک دارند و پیش از تعریف در «ناحیه‌ی مرده‌ی زمانی» (TDZ) خطا می‌دهند. مثال کلاسیک حلقه با <code class='inline'>var</code> همهٔ callbackها را یک مقدار می‌دهد.<div class='code-block'><div class='cb-head'>closure.js</div><pre><code>function makeCounter() {\n  let n = 0;\n  return { inc: () => ++n, get: () => n };\n}\nconst a = makeCounter(), b = makeCounter();\na.inc(); a.inc(); b.inc();\nconsole.log(a.get(), b.get());\nfor (var i = 0; i &lt; 3; i++) setTimeout(() => process.stdout.write(\"v\" + i + \" \"), 0);\nfor (let j = 0; j &lt; 3; j++) setTimeout(() => process.stdout.write(\"l\" + j + \" \"), 0);\nsetTimeout(() => console.log(), 5);\ntry { console.log(x); let x = 1; } catch (e) { console.log(e.name); }\n</code></pre></div></p>",
     "exercise": "چرا خروجی حلقه‌ی var برای همه ۳ است؟ توضیح بده و با IIFE اصلاح کن."
    },
    {
     "title": "Prototype، this و فیلدهای خصوصی",
     "content": "<p>هر شیء یک زنجیره‌ی prototype دارد؛ <code class='inline'>class</code> قند نحوی روی همان است. مقدار <code class='inline'>this</code> به شیوه‌ی فراخوانی بستگی دارد، نه جایی که تابع نوشته شده (<code class='inline'>call</code>، <code class='inline'>apply</code>، <code class='inline'>bind</code>) ولی arrow function this را از دامنه‌ی بیرون می‌گیرد. فیلد <code class='inline'>#x</code> واقعاً خصوصی است و از بیرون قابل‌دسترس نیست.<div class='code-block'><div class='cb-head'>proto.js</div><pre><code>class Account {\n  #balance = 0;\n  static count = 0;\n  constructor() { Account.count++; }\n  deposit(v) { this.#balance += v; return this; }\n  get balance() { return this.#balance; }\n}\nconst a = new Account().deposit(50);\nconsole.log(a.balance, Account.count, Object.getPrototypeOf(a) === Account.prototype);\nconst obj = { n: 1, f() { return this.n; } };\nconst g = obj.f;\nconsole.log(obj.f(), g.call({ n: 7 }), obj.f.bind({ n: 9 })());\n</code></pre></div></p>",
     "exercise": "چرا جدا کردن متد از شیء this را گم می‌کند؟ با bind اصلاح کن."
    },
    {
     "title": "Event Loop: Microtask در برابر Macrotask",
     "content": "<p>اول کد همگام، بعد همهٔ microtaskها (Promise، <code class='inline'>queueMicrotask</code>)، بعد یک macrotask (<code class='inline'>setTimeout</code>، رویداد I/O) و دوباره microtaskها. در Node، <code class='inline'>nextTick</code> قبل از Promise اجرا می‌شود و <code class='inline'>setImmediate</code> متعلق به Node است (در مرورگر نیست). حلقه‌ی بی‌پایان microtask رندر را قفل می‌کند.<div class='code-block'><div class='cb-head'>loop.js</div><pre><code>console.log(\"1 sync\");\nsetTimeout(() => console.log(\"5 timeout\"), 0);\nsetImmediate(() => console.log(\"6 immediate\"));\nPromise.resolve().then(() => console.log(\"3 promise\"));\nqueueMicrotask(() => console.log(\"4 microtask\"));\nprocess.nextTick(() => console.log(\"2 nextTick\"));\n</code></pre></div></p>",
     "exercise": "ترتیب خروجی را پیش‌بینی و بعد اجرا کن."
    },
    {
     "title": "ترکیب Promiseها و لغو با AbortController",
     "content": "<p><code class='inline'>all</code> با اولین خطا شکست می‌خورد، <code class='inline'>allSettled</code> همه را گزارش می‌دهد، <code class='inline'>race</code> اولین نتیجه (موفق یا ناموفق) و <code class='inline'>any</code> اولین موفق را می‌گیرد. Promise به‌خودی‌خود قابل‌لغو نیست؛ <code class='inline'>AbortController</code> سیگنال لغو می‌دهد (fetch آن را می‌شناسد). همیشه خطای async را با <code class='inline'>try/catch</code> بگیر.<div class='code-block'><div class='cb-head'>promises.js</div><pre><code>const wait = (ms, v, fail) => new Promise((res, rej) => setTimeout(() => fail ? rej(new Error(v)) : res(v), ms));\n(async () => {\n  console.log(await Promise.all([wait(10, \"a\"), wait(5, \"b\")]));\n  console.log((await Promise.allSettled([wait(1, \"ok\"), wait(1, \"bad\", true)])).map(r => r.status));\n  console.log(await Promise.race([wait(20, \"slow\"), wait(5, \"fast\")]));\n  console.log(await Promise.any([wait(1, \"x\", true), wait(5, \"y\")]));\n  const ac = new AbortController();\n  const p = new Promise((_, rej) => ac.signal.addEventListener(\"abort\", () => rej(ac.signal.reason)));\n  setTimeout(() => ac.abort(new Error(\"لغو شد\")), 5);\n  try { await p; } catch (e) { console.log(e.message); }\n})();\n</code></pre></div></p>",
     "exercise": "یک fetch با timeout سه‌ثانیه‌ای بنویس که لغو شود."
    },
    {
     "title": "Async Iterator و for await",
     "content": "<p><code class='inline'>async function*</code> مقدارها را به‌صورت ناهمگام و تنبل تولید می‌کند و با <code class='inline'>for await</code> مصرف می‌شود (جریان داده، صفحه‌بندی API). هر شیء با <code class='inline'>[Symbol.iterator]</code> قابل‌پیمایش (spread و for...of) است. این پایه‌ی Streamهای وب و Node است.<div class='code-block'><div class='cb-head'>iter.js</div><pre><code>async function* ticks(n) {\n  for (let i = 1; i &lt;= n; i++) {\n    await new Promise(r => setTimeout(r, 2));\n    yield i;\n  }\n}\n(async () => {\n  let sum = 0;\n  for await (const t of ticks(4)) sum += t;\n  console.log(sum);\n  const it = { from: 1, to: 3, [Symbol.iterator]() { let c = this.from, t = this.to; return { next: () => c &lt;= t ? { value: c++, done: false } : { value: undefined, done: true } }; } };\n  console.log([...it]);\n})();\n</code></pre></div></p>",
     "exercise": "یک generator بنویس که صفحه‌های یک API را یکی‌یکی تحویل بدهد."
    },
    {
     "title": "تغییرناپذیری و کپی عمیق",
     "content": "<p>spread (<code class='inline'>{...o}</code>) کپی سطحی است و آبجکت‌های تو‌در‌تو مشترک می‌مانند. <code class='inline'>structuredClone</code> کپی عمیق می‌دهد (Date، Map، Set را درست) ولی تابع را نه. <code class='inline'>Object.freeze</code> سطحی است. متدهای غیرمخرب (<code class='inline'>toSorted</code>، <code class='inline'>with</code>، <code class='inline'>toSpliced</code>) آرایه را جهش نمی‌دهند و برای state در React مهم‌اند.<div class='code-block'><div class='cb-head'>immutable.js</div><pre><code>const orig = { a: 1, nested: { b: 2 }, d: new Date(0) };\nconst shallow = { ...orig };\nconst deep = structuredClone(orig);\nshallow.nested.b = 99;\nconsole.log(orig.nested.b, deep.nested.b, deep.d instanceof Date);\nconst frozen = Object.freeze({ x: 1 });\nfrozen.x = 2;\nconsole.log(frozen.x);\nconst arr = [3, 1, 2];\nconsole.log(arr.toSorted(), arr, arr.with(0, 9));\n</code></pre></div></p>",
     "exercise": "state یک سبد خرید را بدون جهش آرایه به‌روز کن."
    },
    {
     "title": "ماژول ES: import پویا، Tree Shaking و Cycle",
     "content": "<p>ماژول‌های ESM ایستا تحلیل می‌شوند و باندلر کد استفاده‌نشده را حذف می‌کند (Tree Shaking). <code class='inline'>import()</code> پویا بخش سنگین را هنگام نیاز بارگذاری می‌کند (Code Splitting). export نام‌دار برای Tree Shaking بهتر از default است. وابستگی حلقوی بین ماژول‌ها باگ‌های ظریف ایجاد می‌کند؛ ساختار را تغییر بده.</p>",
     "exercise": "یک صفحه را با import پویا طوری بنویس که ماژول چارت فقط با کلیک بارگذاری شود."
    },
    {
     "title": "Symbol، Proxy و Reflect",
     "content": "<p><code class='inline'>Symbol</code> کلید یکتا و پنهان می‌سازد و پروتکل‌های زبان را باز می‌کند (<code class='inline'>Symbol.iterator</code>، <code class='inline'>Symbol.toPrimitive</code>). <code class='inline'>Proxy</code> عملیات شیء را رهگیری و <code class='inline'>Reflect</code> همان عملیات پیش‌فرض را فراخوانی می‌کند؛ پایه‌ی reactivity (Vue) و اعتبارسنجی. Proxy هزینه‌ی عملکرد دارد، پس در مسیرهای داغ نگذار.</p>",
     "exercise": "با Proxy یک شیء تنظیمات بساز که کلید ناشناخته را خطا بدهد."
    },
    {
     "title": "عملکرد: Debounce، Throttle و Memoization",
     "content": "<p>Debounce اجرا را تا توقف رویدادها به تعویق می‌اندازد (جست‌وجوی هنگام تایپ)، Throttle حداکثر یک‌بار در هر بازه (اسکرول). Memoization نتیجه‌ی توابع خالص را کش می‌کند. کار سنگین را به Web Worker ببر تا رشته‌ی اصلی قفل نشود و رندر را با <code class='inline'>requestAnimationFrame</code> هماهنگ کن.<div class='code-block'><div class='cb-head'>perf.js</div><pre><code>function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }\nfunction throttle(fn, ms) { let last = 0; return (...a) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...a); } }; }\nfunction memo(fn) { const c = new Map(); return n => c.has(n) ? c.get(n) : (c.set(n, fn(n)), c.get(n)); }\nlet calls = 0;\nconst d = debounce(() => calls++, 10);\nd(); d(); d();\nconst fib = memo(n => n &lt; 2 ? n : fib(n - 1) + fib(n - 2));\nconsole.log(fib(60));\nconst th = throttle(() => calls += 10, 1000); th(); th();\nsetTimeout(() => console.log(calls), 30);\n</code></pre></div></p>",
     "exercise": "جست‌وجوی زنده را با debounce ۳۰۰ میلی‌ثانیه و لغو درخواست قبلی بنویس."
    },
    {
     "title": "نشت حافظه، WeakMap و WeakRef",
     "content": "<p>نشت‌های رایج: listener که حذف نمی‌شود، timer فراموش‌شده، closure نگه‌دارنده و کش بدون سقف. <code class='inline'>WeakMap</code>/<code class='inline'>WeakRef</code> اشاره‌ی ضعیف می‌دهند تا GC بتواند شیء را آزاد کند. همیشه تابع «لغو اشتراک» برگردان. با Heap Snapshot در DevTools دو عکس مقایسه کن.<div class='code-block'><div class='cb-head'>leak.js</div><pre><code>const cache = new WeakMap();\nlet key = { id: 1 };\ncache.set(key, \"داده\");\nconsole.log(cache.has(key));\nconst ref = new WeakRef({ big: \"x\".repeat(10) });\nconsole.log(typeof ref.deref());\nclass Emitter {\n  #h = new Map();\n  on(e, f) { (this.#h.get(e) ?? this.#h.set(e, new Set()).get(e)).add(f); return () => this.#h.get(e).delete(f); }\n  emit(e, ...a) { this.#h.get(e)?.forEach(f => f(...a)); }\n}\nconst em = new Emitter();\nconst off = em.on(\"x\", v => console.log(\"got\", v));\nem.emit(\"x\", 1); off(); em.emit(\"x\", 2);\n</code></pre></div></p>",
     "exercise": "یک نشت listener بساز و با Heap Snapshot پیدا کن."
    },
    {
     "title": "الگوهای طراحی در JS: Observer، Module، Factory",
     "content": "<p>Observer/Pub-Sub اجزا را بدون وابستگی مستقیم ارتباط می‌دهد (EventTarget، Emitter). Module با closure یا ماژول ES API عمومی کوچک می‌سازد. Factory شیء را بدون <code class='inline'>new</code> مستقیم می‌سازد و Strategy رفتار را به‌صورت تابع تزریق می‌کند. الگو را وقتی لازم است بگذار، نه برای تزئین.</p>",
     "exercise": "یک سیستم رویداد با on/off/once بنویس."
    },
    {
     "title": "امنیت و تست در JavaScript",
     "content": "<p>XSS را با <code class='inline'>textContent</code>، escape و Content-Security-Policy مهار کن و <code class='inline'>eval</code> و <code class='inline'>innerHTML</code> با ورودی کاربر نداشته باش. وابستگی‌ها را با <code class='inline'>npm audit</code> بررسی کن (Supply-Chain). تست با Vitest/Jest: تابع‌های خالص و منطق را تست واحد، DOM را با Testing Library و مسیرهای کامل را با Playwright. تست باید رفتار را بسنجد نه پیاده‌سازی را.</p>",
     "exercise": "برای تابع debounce با fake timers تست بنویس."
    },
    {
     "title": "مرتب‌سازی فارسی: Intl.Collator و PluralRules",
     "content": "<p><code>arr.sort()</code> پیش‌فرض بر اساس کد یونیکد مقایسه می‌کند، نه الفبای زبان؛ پس «پ» و «چ» و «ژ» و «گ» جای درست نمی‌گیرند و اعداد رشته‌ای ۱۰ قبل از ۲ می‌آید. <code>Intl.Collator('fa')</code> قواعد زبان را می‌داند و گزینه‌ی <code>numeric: true</code> اعداد را عددی مرتب می‌کند. <code>Intl.PluralRules</code> برای جمع‌بندی صحیح (one/other) و <code>Intl.ListFormat</code> برای «الف، ب و ج» است.</p><pre dir=\"ltr\"><code>const col = new Intl.Collator(&#x27;fa&#x27;, { numeric: true, sensitivity: &#x27;base&#x27; });\n[&#x27;گ&#x27;,&#x27;پ&#x27;,&#x27;الف&#x27;,&#x27;ب&#x27;].sort(col.compare);\nnew Intl.ListFormat(&#x27;fa&#x27;, { type:&#x27;conjunction&#x27; }).format([&#x27;سیب&#x27;,&#x27;موز&#x27;,&#x27;گیلاس&#x27;]);</code></pre>",
     "exercise": "کلمه‌های لاتین و فارسی را در یک آرایه مرتب کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst w=['گربه','پرنده','الف','بابا','چای','ژاله','تهران','سیب'];\nlog('sort پیش‌فرض :',[...w].sort().join(' '));\nlog('Collator fa   :',[...w].sort(new Intl.Collator('fa').compare).join(' '));\nconst f=['فایل ۱۰','فایل ۲','فایل ۱'];\nlog('رشته‌ای       :',[...f].sort().join(' | '));\nlog('numeric       :',[...f].sort(new Intl.Collator('fa',{numeric:true}).compare).join(' | '));\nlog('ListFormat    :',new Intl.ListFormat('fa',{type:'conjunction'}).format(['سیب','موز','گیلاس']));\nlog('PluralRules en:',[0,1,2].map(n=>new Intl.PluralRules('en').select(n)).join(','));"
     }
    },
    {
     "title": "متدهای مدرن آرایه و شیء: toSorted، with، groupBy، at",
     "content": "<p>متدهای قدیمی <code>sort</code>، <code>reverse</code> و <code>splice</code> آرایه‌ی اصلی را تغییر می‌دهند (mutation) و در React/Redux باگ می‌سازند. نسخه‌های غیرمخرب: <code>toSorted</code>، <code>toReversed</code>، <code>toSpliced</code> و <code>with(i,v)</code>. بقیه: <code>at(-1)</code>، <code>findLast</code>، <code>Object.groupBy</code>، <code>Map.groupBy</code> و <code>structuredClone</code>. و Setهای <code>union/intersection/difference</code>.</p><pre dir=\"ltr\"><code>const a = [3,1,2];\nconst b = a.toSorted();          // a دست‌نخورده\na.with(0, 99);                   // کپی با تغییر\na.at(-1);  a.findLast(x=&gt;x&gt;1);\nObject.groupBy(users, u =&gt; u.role);</code></pre>",
     "exercise": "با groupBy کاربران را بر اساس شهر دسته‌بندی کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst a=[3,1,2];const b=a.toSorted();\nlog('a بعد toSorted:',a.join(),'| b:',b.join());\nlog('with:',a.with(0,99).join(),'| a:',a.join());\nlog('at(-1):',a.at(-1),'| findLast(>1):',a.findLast(x=>x>1));\nconst users=[{n:'علی',r:'admin'},{n:'سارا',r:'user'},{n:'رضا',r:'user'}];\nconst g=Object.groupBy(users,u=>u.r);\nlog('groupBy:',JSON.stringify(Object.fromEntries(Object.entries(g).map(([k,v])=>[k,v.map(u=>u.n)]))));\nconst A=new Set([1,2,3]),B=new Set([2,3,4]);\nlog('union:',[...A.union(B)].join(),'| intersection:',[...A.intersection(B)].join(),'| difference:',[...A.difference(B)].join());"
     }
    },
    {
     "title": "عملگرهای مدرن: ?.، ??، ??= و جداکننده‌ی عددی",
     "content": "<p><code>a?.b</code> اگر a تهی بود <code>undefined</code> می‌دهد (به‌جای خطا). <code>a ?? b</code> فقط برای <code>null/undefined</code> جایگزین می‌شود، برخلاف <code>||</code> که صفر و رشته‌ی خالی را هم «falsy» می‌داند و باگ می‌سازد (مثلاً تعداد ۰). عملگرهای انتساب منطقی: <code>||=</code>، <code>&amp;&amp;=</code>، <code>??=</code>. و <code>1_000_000</code> برای خوانایی.</p><pre dir=\"ltr\"><code>const qty = input.qty ?? 1;        // 0 معتبر است\nuser?.address?.city;               // بدون TypeError\nopts.retries ??= 3;\nconst big = 1_000_000;</code></pre>",
     "exercise": "مقدار ?? را با || در ورودی صفر مقایسه کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst o={qty:0,name:'',addr:null};\nlog('qty || 1  =',o.qty||1,'  ← باگ: صفر نادیده شد');\nlog('qty ?? 1  =',o.qty??1,'  ← درست');\nlog('name || \"ناشناس\" =',JSON.stringify(o.name||'ناشناس'),'| name ?? =',JSON.stringify(o.name??'ناشناس'));\nlog('addr?.city =',o.addr?.city,'| بدون ?. خطا می‌داد');\nconst c={};c.retries??=3;c.retries??=9;log('??= →',c.retries);\nlet n=0;n||=5;n&&=n+1;log('||= و &&= →',n);\nlog('1_000_000 + 1 =',1_000_000+1);\ntry{null.x}catch(e){log('خطای بدون ?. :',e.constructor.name)}"
     }
    },
    {
     "title": "دقت عددی: Floating Point، BigInt و پول",
     "content": "<p>جاوااسکریپت اعداد را به‌صورت IEEE-754 دوبل ذخیره می‌کند: <code>0.1 + 0.2 !== 0.3</code> و اعداد صحیح بالای <code>2^53−1</code> دقیق نیستند. برای پول: عدد را به <b>کوچک‌ترین واحد</b> (ریال/سنت) به‌صورت عدد صحیح نگه دار، یا از <code>BigInt</code> (<code>123n</code>) برای اعداد بسیار بزرگ استفاده کن. برای مقایسه از <code>Math.abs(a-b) &lt; Number.EPSILON</code>. <code>toFixed</code> رشته برمی‌گرداند و گرد کردن آن همیشه شهودی نیست.</p><pre dir=\"ltr\"><code>0.1 + 0.2 === 0.3                  // false\nNumber.MAX_SAFE_INTEGER + 2        // اشتباه\n9007199254740993n                  // BigInt دقیق\nconst rial = Math.round(19.99 * 100);   // 1999 صحیح</code></pre>",
     "exercise": "قیمت ۰٫۱ + ۰٫۲ دلار را با عدد صحیح سنت جمع بزن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nlog('0.1+0.2 =',0.1+0.2,'| ===0.3؟',0.1+0.2===0.3);\nlog('با EPSILON برابر؟',Math.abs(0.1+0.2-0.3)<Number.EPSILON);\nlog('MAX_SAFE:',Number.MAX_SAFE_INTEGER,'| +2 =',Number.MAX_SAFE_INTEGER+2);\nlog('BigInt  :',(BigInt(Number.MAX_SAFE_INTEGER)+2n).toString());\nlog('1.005.toFixed(2) =',(1.005).toFixed(2),'(انتظار 1.01)');\nconst cents=Math.round(0.1*100)+Math.round(0.2*100);\nlog('پول با سنت صحیح:',cents,'سنت =',(cents/100).toFixed(2));\nlog('تفاوت نوع: typeof 1n =',typeof 1n,'| 1n+1 →',(()=>{try{return 1n+1}catch(e){return e.constructor.name}})());"
     }
    },
    {
     "title": "Tagged Template و String.raw: قالب‌های امن",
     "content": "<p>تابع می‌تواند قبل از literal قالبی بیاید: <code>tag`سلام ${name}`</code>. تابع، آرایه‌ی بخش‌های ثابت (<code>strings</code>) و مقادیر را جدا می‌گیرد؛ پس می‌توان مقادیر را به‌صورت خودکار escape کرد (جلوگیری از XSS)، SQL پارامتری ساخت (<code>sql`...`</code>) یا استایل نوشت (styled-components). <code>String.raw</code> بک‌اسلش‌ها را تفسیر نمی‌کند (مسیر فایل، regex).</p><pre dir=\"ltr\"><code>const html = (s, ...v) =&gt; s.reduce((a, str, i) =&gt;\n  a + str + (i &lt; v.length ? esc(v[i]) : &#x27;&#x27;), &#x27;&#x27;);\nhtml`&lt;p&gt;${userInput}&lt;/p&gt;`;</code></pre>",
     "exercise": "یک تگ sql بساز که مقادیر را در آرایه‌ی params جدا کند.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst esc=s=>String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\nconst html=(s,...v)=>s.reduce((a,str,i)=>a+str+(i<v.length?esc(v[i]):''),'');\nconst evil='<img src=x onerror=alert(1)>';\nlog(html`<p>${evil}</p>`);\nconst sql=(s,...v)=>({text:s.reduce((a,str,i)=>a+str+(i<v.length?'$'+(i+1):''),''),params:v});\nconst id=7,name=\"x' OR '1'='1\";\nlog(JSON.stringify(sql`SELECT * FROM u WHERE id=${id} AND n=${name}`));\nlog('String.raw:',String.raw`C:\\new\\table`,'| معمولی:','C:\\\\new'.length);"
     }
    },
    {
     "title": "ArrayBuffer، TypedArray و TextEncoder: بایت‌ها در جاوااسکریپت",
     "content": "<p>داده‌ی دودویی (تصویر، صوت، پروتکل) با <code>ArrayBuffer</code> و نمای آن (<code>Uint8Array</code>, <code>Float32Array</code>, <code>DataView</code>) پردازش می‌شود. <code>TextEncoder</code> رشته را به بایت‌های UTF-8 تبدیل می‌کند: حروف فارسی ۲ بایت دارند و ایموجی ۴ بایت، پس <code>str.length</code> با اندازه‌ی واقعی (بایت) فرق دارد. این برای محدودیت حجم، Base64 و هش اهمیت دارد. ترتیب بایت (endianness) را در DataView صریح بدهید.</p><pre dir=\"ltr\"><code>const enc = new TextEncoder().encode(&#x27;سلام&#x27;);   // Uint8Array\nconst buf = new ArrayBuffer(8);\nconst dv = new DataView(buf);\ndv.setUint16(0, 258, true);   // little-endian</code></pre>",
     "exercise": "طول بایتی یک جمله‌ی فارسی و انگلیسی را مقایسه کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst t=['salam','سلام','😀'];\nfor(const s of t)log(JSON.stringify(s).padEnd(10),'length='+s.length,'| بایت UTF-8='+new TextEncoder().encode(s).length);\nconst buf=new ArrayBuffer(4),dv=new DataView(buf);\ndv.setUint16(0,258,true);\nlog('little-endian بایت‌ها:',[...new Uint8Array(buf).slice(0,2)].join(','));\ndv.setUint16(0,258,false);\nlog('big-endian بایت‌ها   :',[...new Uint8Array(buf).slice(0,2)].join(','));\nconst f=new Float32Array([0.1]);log('Float32 0.1 →',f[0],'(دقت کمتر از Float64)');\nlog('رفت‌وبرگشت:',new TextDecoder().decode(new TextEncoder().encode('سلام دنیا')));"
     }
    },
    {
     "title": "Web Worker: کار سنگین بدون قفل کردن رابط",
     "content": "<p>جاوااسکریپت تک‌ریسمانی است؛ یک حلقه‌ی سنگین رابط را منجمد می‌کند. <b>Web Worker</b> کد را در ریسمان جدا اجرا می‌کند و با <code>postMessage</code> پیام می‌فرستد (داده کپی می‌شود با structured clone؛ برای حجم زیاد <b>transferable</b> مثل ArrayBuffer منتقل می‌شود نه کپی). Worker به DOM دسترسی ندارد. برای نمونه بدون فایل جدا: Blob + <code>URL.createObjectURL</code>.</p><pre dir=\"ltr\"><code>const code = `onmessage = e =&gt; postMessage(heavy(e.data))`;\nconst url = URL.createObjectURL(new Blob([code]));\nconst w = new Worker(url);\nw.onmessage = e =&gt; console.log(e.data);\nw.postMessage(1e8);</code></pre>",
     "exercise": "عدد ورودی را بزرگ‌تر کن و ببین رابط همچنان آزاد است.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "(async()=>{\nconst out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst code=`onmessage=e=>{let s=0;for(let i=0;i<e.data;i++)s+=i%7;postMessage(s)}`;\nconst w=new Worker(URL.createObjectURL(new Blob([code])));\nlet ticks=0;const iv=setInterval(()=>ticks++,10);\nconst res=await new Promise(r=>{w.onmessage=e=>r(e.data);w.postMessage(2e7)});\nclearInterval(iv);\nlog('نتیجه‌ی Worker:',res);\nlog('تیک‌های UI در زمان محاسبه:',ticks,'(>0 یعنی رابط آزاد بود)');\nconst ab=new ArrayBuffer(1024);const w2=new Worker(URL.createObjectURL(new Blob(['onmessage=e=>postMessage(e.data.byteLength)'])));\nw2.postMessage(ab,[ab]);\nlog('بعد از transfer طول ابتدایی بافر:',ab.byteLength,'(منتقل شد، نه کپی)');\nw.terminate();w2.terminate();\n})();"
     }
    },
    {
     "title": "Observerها: Intersection، Resize و Mutation",
     "content": "<p>به‌جای polling و رویداد scroll: <code>IntersectionObserver</code> دیده‌شدن عنصر در viewport را خبر می‌دهد (lazy-load، infinite scroll، آنالیتیکس)، <code>ResizeObserver</code> تغییر اندازه‌ی عنصر (نه فقط پنجره) را می‌گیرد، و <code>MutationObserver</code> تغییرات DOM را. همه ناهمزمان و دسته‌ای‌اند و هزینه‌شان از scroll listener کمتر است. بعد از استفاده <code>disconnect()</code> کن.</p><pre dir=\"ltr\"><code>const io = new IntersectionObserver(entries =&gt; {\n  for (const e of entries) if (e.isIntersecting) { load(e.target); io.unobserve(e.target); }\n}, { rootMargin: &#x27;200px&#x27; });\nio.observe(img);</code></pre>",
     "exercise": "threshold را 0.5 کن و تغییر را ببین.",
     "code": {
      "html": "<div id=\"box\" style=\"width:100px;height:40px;background:#334155\"></div><div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "(async()=>{\nconst out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst box=document.getElementById('box');\nconst ev=[];\nconst ro=new ResizeObserver(es=>{ev.push('resize→'+Math.round(es[0].contentRect.width))});ro.observe(box);\nconst mo=new MutationObserver(ms=>ev.push('mutation×'+ms.length));mo.observe(box,{childList:true,attributes:true});\nconst io=new IntersectionObserver(es=>ev.push('visible='+es[0].isIntersecting));io.observe(box);\nawait sleep(60);\nbox.style.width='200px';await sleep(60);\nbox.append(document.createElement('i'));box.setAttribute('data-x','1');await sleep(60);\nlog(ev.join('\\n'));\nro.disconnect();mo.disconnect();io.disconnect();\n})();"
     }
    },
    {
     "title": "کنترل هم‌زمانی: Promise.allSettled و Pool محدود",
     "content": "<p><code>Promise.all</code> با اولین خطا رد می‌شود؛ <code>allSettled</code> همه‌ی نتایج را (موفق/ناموفق) می‌دهد؛ <code>any</code> اولین موفق را؛ <code>race</code> اولین پایان را. اما ارسال ۱۰۰۰ درخواست هم‌زمان با <code>Promise.all(urls.map(fetch))</code> سرور و مرورگر را خفه می‌کند. الگوی درست: <b>pool</b> با حداکثر N کار هم‌زمان. همچنین <code>Promise.withResolvers()</code> برای ساخت promise با resolve بیرونی.</p><pre dir=\"ltr\"><code>async function pool(tasks, limit) {\n  const res = []; let i = 0;\n  const run = async () =&gt; { while (i &lt; tasks.length) { const k = i++; res[k] = await tasks[k](); } };\n  await Promise.all(Array.from({length: limit}, run));\n  return res;\n}</code></pre>",
     "exercise": "limit را ۱ کن و مدت کل را ببین.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "(async()=>{\nconst out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nlet active=0,maxActive=0;\nconst task=(n,ms,fail)=>async()=>{active++;maxActive=Math.max(maxActive,active);await sleep(ms);active--;if(fail)throw new Error('x'+n);return n};\nasync function pool(tasks,limit){const res=[];let i=0;const run=async()=>{while(i<tasks.length){const k=i++;res[k]=await tasks[k]()}};await Promise.all(Array.from({length:limit},run));return res}\nconst t0=performance.now();\nconst r=await pool(Array.from({length:8},(_,i)=>task(i,40)),3);\nlog('نتایج:',r.join(),'| حداکثر هم‌زمان:',maxActive,'| زمان≈',Math.round(performance.now()-t0),'ms (حدود 3 دور×40)');\nconst s=await Promise.allSettled([task(1,5)(),task(2,5,true)(),task(3,5)()]);\nlog('allSettled:',s.map(x=>x.status).join(','));\ntry{await Promise.all([task(1,5)(),task(2,5,true)()])}catch(e){log('Promise.all رد شد با',e.message)}\nlog('any:',await Promise.any([sleep(30).then(()=>'کند'),sleep(5).then(()=>'تند')]));\nconst {promise,resolve}=Promise.withResolvers();setTimeout(()=>resolve('بیرونی'),5);log('withResolvers:',await promise);\n})();"
     }
    },
    {
     "title": "EventTarget و CustomEvent: رویدادهای خودت را بساز",
     "content": "<p>هر شیء می‌تواند رویداد داشته باشد: <code>class Bus extends EventTarget</code>. <code>CustomEvent</code> داده را در <code>detail</code> می‌برد. گزینه‌های <code>addEventListener</code>: <code>once</code> (یک بار)، <code>passive</code> (به مرورگر می‌گوید preventDefault نمی‌زنم؛ برای scroll روان) و <code>signal</code> (با یک <code>AbortController</code> همه‌ی listenerها را یکجا حذف کن، بدون نیاز به نگه‌داشتن reference). این الگو نشت listener را از بین می‌برد.</p><pre dir=\"ltr\"><code>const ac = new AbortController();\nbus.addEventListener(&#x27;login&#x27;, fn, { signal: ac.signal });\nwindow.addEventListener(&#x27;scroll&#x27;, onScroll, { passive: true, signal: ac.signal });\nac.abort();   // حذف همه</code></pre>",
     "exercise": "یک listener با once بساز و دو بار dispatch کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nclass Bus extends EventTarget{emit(t,d){return this.dispatchEvent(new CustomEvent(t,{detail:d}))}}\nconst bus=new Bus(),ac=new AbortController();let n=0;\nbus.addEventListener('ping',e=>{n++;log('ping با',JSON.stringify(e.detail))},{signal:ac.signal});\nbus.addEventListener('once',()=>log('once اجرا شد'),{once:true});\nbus.emit('ping',{a:1});bus.emit('once');bus.emit('once');\nac.abort();bus.emit('ping',{a:2});\nlog('تعداد ping پس از abort:',n,'(باید 1)');\nconst p=new Event('x',{cancelable:true});bus.addEventListener('x',e=>e.preventDefault());\nlog('preventDefault روی cancelable → dispatch برمی‌گرداند:',bus.dispatchEvent(p));"
     }
    },
    {
     "title": "یونیکد و فارسی: normalize، Segmenter و ی/ک عربی",
     "content": "<p>رشته‌ی «یکسان» ظاهری ممکن است بایت‌های متفاوت داشته باشد: «ی» فارسی (U+06CC) و «ي» عربی (U+064A)، «ک» (U+06A9) و «ك» (U+0643)، و ارقام فارسی/عربی/لاتین. این جستجو و مقایسه را می‌شکند. قبل از ذخیره/جستجو <b>نرمال‌سازی</b> کن. <code>str.normalize('NFC')</code> ترکیب‌های یونیکد را یکسان می‌کند. <code>length</code> واحد UTF-16 است؛ برای شمارش حرف‌های دیده‌شده (grapheme) از <code>Intl.Segmenter</code> استفاده کن (ایموجی ترکیبی، حروف با اعراب).</p><pre dir=\"ltr\"><code>const fa = s =&gt; s.replace(/ي/g,&#x27;ی&#x27;).replace(/ك/g,&#x27;ک&#x27;)\n  .replace(/[٠-٩]/g,d=&gt;&#x27;٠١٢٣٤٥٦٧٨٩&#x27;.indexOf(d))\n  .replace(/[۰-۹]/g,d=&gt;&#x27;۰۱۲۳۴۵۶۷۸۹&#x27;.indexOf(d));</code></pre>",
     "exercise": "ZWNJ (نیم‌فاصله) را هم حذف کن و جستجو را مقایسه کن.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst a='علي',b='علی';\nlog('ظاهراً یکی:',a===b?'برابرند':'برابر نیستند','| کدها:',[...a].map(c=>c.codePointAt(0).toString(16)).join(' '),'vs',[...b].map(c=>c.codePointAt(0).toString(16)).join(' '));\nconst fa=s=>s.replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d));\nlog('بعد نرمال‌سازی:',fa(a)===fa(b));\nlog('ارقام:',fa('۱۲۳ ٤٥٦ 789'));\nconst e='é',e2='e\\u0301';\nlog('NFC یکسان؟',e===e2,'→',e.normalize('NFC')===e2.normalize('NFC'));\nconst fam='👨‍👩‍👧';\nlog('length =',fam.length,'| grapheme =',[...new Intl.Segmenter('fa',{granularity:'grapheme'}).segment(fam)].length);"
     }
    },
    {
     "title": "Streams API: پردازش جریانی داده",
     "content": "<p>به‌جای بارگیری کل پاسخ در حافظه، داده را تکه‌تکه پردازش کن: <code>ReadableStream</code> (منبع)، <code>TransformStream</code> (تبدیل) و <code>WritableStream</code> (مقصد). <code>response.body</code> یک ReadableStream است. با <code>pipeThrough</code> می‌توان فشرده‌سازی (<code>CompressionStream('gzip')</code>)، رمزگشایی متن (<code>TextDecoderStream</code>) و تبدیل سفارشی را زنجیر کرد. مزیت: حافظه‌ی ثابت، شروع زودتر پردازش، و backpressure خودکار.</p><pre dir=\"ltr\"><code>const res = await fetch(url);\nconst reader = res.body.pipeThrough(new TextDecoderStream()).getReader();\nfor (;;) { const {done, value} = await reader.read(); if (done) break; handle(value); }</code></pre>",
     "exercise": "تبدیلی بساز که هر خط را بزرگ‌حروف کند.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "(async()=>{\nconst out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nfunction source(){let i=0;return new ReadableStream({pull(c){if(i<5)c.enqueue('بخش'+(++i)+'\\n');else c.close()}})}\nconst upper=new TransformStream({transform(chunk,c){c.enqueue(chunk.trim()+'✓')}});\nconst chunks=[];\nawait source().pipeThrough(upper).pipeTo(new WritableStream({write(ch){chunks.push(ch.trim())}}));\nlog('تکه‌ها:',chunks.join(' | '));\nconst gz=new Blob([('سلام '.repeat(500))]).stream().pipeThrough(new CompressionStream('gzip'));\nconst size=(await new Response(gz).arrayBuffer()).byteLength;\nlog('اصلی',new TextEncoder().encode('سلام '.repeat(500)).length,'بایت → gzip',size,'بایت');\nconst rd=new Blob(['سلام دنیا']).stream().pipeThrough(new TextDecoderStream()).getReader();\nlet txt='';for(;;){const {done,value}=await rd.read();if(done)break;txt+=value}\nlog('رمزگشایی جریانی:',txt);\n})();"
     }
    },
    {
     "title": "برنامه‌نویسی تابعی: compose، pipe، curry و partial",
     "content": "<p>توابع خالص (بدون اثر جانبی) ترکیب‌پذیر و تست‌پذیرند. <code>pipe(f,g,h)(x)</code> یعنی <code>h(g(f(x)))</code> از چپ به راست؛ <code>compose</code> برعکس. <b>Curry</b> تابع چندپارامتری را به زنجیره‌ای از توابع تک‌پارامتری تبدیل می‌کند و <b>partial</b> چند پارامتر را از قبل ثابت می‌کند. این الگوها در پردازش داده (map/filter/reduce)، ماژول‌های validation و middleware کاربرد دارند. هشدار: ایجاد توابع بسیار تو در تو بدون نام، دیباگ را سخت می‌کند.</p><pre dir=\"ltr\"><code>const pipe = (...f) =&gt; x =&gt; f.reduce((a, fn) =&gt; fn(a), x);\nconst curry = fn =&gt; function c(...a){ return a.length &gt;= fn.length ? fn(...a) : (...b) =&gt; c(...a, ...b) };\nconst add = curry((a,b,c) =&gt; a+b+c);\nadd(1)(2)(3); add(1,2)(3);</code></pre>",
     "exercise": "یک pipe بنویس که رشته را trim، lowercase و slugify کند.",
     "code": {
      "html": "<div id=\"out\"></div>",
      "css": "body{font-family:system-ui,sans-serif;padding:12px;background:#0f172a;color:#e2e8f0;margin:0}#out{background:#020617;padding:8px;border-radius:6px;white-space:pre-wrap;direction:ltr;font-family:monospace}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};const sleep=ms=>new Promise(r=>setTimeout(r,ms));\nconst pipe=(...f)=>x=>f.reduce((a,fn)=>fn(a),x);\nconst compose=(...f)=>x=>f.reduceRight((a,fn)=>fn(a),x);\nconst curry=fn=>function c(...a){return a.length>=fn.length?fn(...a):(...b)=>c(...a,...b)};\nconst add=curry((a,b,c)=>a+b+c);\nlog('curry:',add(1)(2)(3),add(1,2)(3),add(1)(2,3));\nconst inc=x=>x+1,dbl=x=>x*2;\nlog('pipe(inc,dbl)(5) =',pipe(inc,dbl)(5),'| compose(inc,dbl)(5) =',compose(inc,dbl)(5));\nconst slug=pipe(s=>s.trim(),s=>s.toLowerCase(),s=>s.replace(/\\s+/g,'-'),s=>s.replace(/[^a-z0-9-]/g,''));\nlog('slug:',slug('  Hello World JS  '));\nconst partial=(fn,...a)=>(...b)=>fn(...a,...b);\nlog('partial:',partial(Math.max,10)(3,7));\nconst users=[{a:20},{a:35},{a:17}];\nconst adults=pipe(u=>u.filter(x=>x.a>=18),u=>u.map(x=>x.a),u=>u.reduce((s,x)=>s+x,0));\nlog('جمع سن بزرگسالان:',adults(users));"
     }
    }
   ],
   "quiz": [
    {
     "q": "الگوی subscribe/publish در مدیریت وضعیت چه مشکلی را حل می‌کند؟",
     "options": [
      "سرعت اینترنت را زیاد می‌کند",
      "بخش‌های مختلف UI را بدون وابستگی مستقیم از تغییر داده باخبر می‌کند",
      "حجم فایل CSS را کم می‌کند",
      "جایگزین HTML می‌شود"
     ],
     "answer": 1,
     "explain": "هر بخش فقط subscribe می‌کند و نیازی نیست بداند داده از کجا تغییر کرده است."
    },
    {
     "q": "React.useState چه چیزی برمی‌گرداند؟",
     "options": [
      "فقط مقدار فعلی state",
      "آرایه‌ای شامل مقدار فعلی و تابعی برای تغییر آن",
      "یک عنصر HTML",
      "یک Promise"
     ],
     "answer": 1,
     "explain": "خروجی useState یک آرایهٔ دوعضوی [state, setState] است."
    },
    {
     "q": "Closure دقیقاً چه چیزی را ممکن می‌کند؟",
     "options": [
      "اجرای سریع‌تر کد",
      "دسترسی یک تابع به متغیرهای scope بیرونی‌اش، حتی بعد از پایان آن تابع بیرونی",
      "تعریف کلاس",
      "حذف متغیرها از حافظه"
     ],
     "answer": 1,
     "explain": "این ویژگی پایهٔ الگوهایی مثل private variable و pattern هایی مثل store است."
    },
    {
     "q": "برای استفاده از import/export در مرورگر، تگ script باید چه ویژگی‌ای داشته باشد؟",
     "options": [
      "defer",
      "async",
      "type=\"module\"",
      "نیازی به ویژگی خاصی نیست"
     ],
     "answer": 2,
     "explain": "type=\"module\" به مرورگر می‌گوید این فایل از سینتکس ماژول ES استفاده می‌کند."
    },
    {
     "q": "برای ساخت و بیلد یک اپلیکیشن واقعی و بزرگ React معمولاً به چه چیزی نیاز داریم؟",
     "options": [
      "فقط یک فایل HTML ساده",
      "Node.js و ابزار بیلدی مثل Vite/webpack",
      "فقط CSS پیشرفته",
      "هیچ ابزار خاصی لازم نیست"
     ],
     "answer": 1,
     "explain": "در مقیاس واقعی، Node.js برای مدیریت پکیج‌ها و ابزار بیلد برای بهینه‌سازی و باندل‌کردن کد لازم است."
    },
    {
     "q": "برای حذف تکراری‌های یک آرایه کدام درست است؟",
     "options": [
      "[...new Set(arr)]",
      "arr.unique()",
      "Map(arr)",
      "arr.clean()"
     ],
     "answer": 0,
     "explain": "Set فقط مقادیر یکتا نگه می‌دارد."
    },
    {
     "q": "yield در generator چه می‌کند؟",
     "options": [
      "تابع را پایان می‌دهد",
      "اجرا را مکث می‌کند و مقدار می‌دهد",
      "خطا می‌اندازد",
      "تابع را حذف می‌کند"
     ],
     "answer": 1,
     "explain": "بعداً اجرا ادامه می‌یابد."
    },
    {
     "q": "Proxy برای چه استفاده می‌شود؟",
     "options": [
      "رهگیری get/set یک آبجکت",
      "ساخت CSS",
      "اتصال به دیتابیس",
      "فشرده‌سازی"
     ],
     "answer": 0,
     "explain": "پایهٔ reactivity در Vue است."
    },
    {
     "q": "در Node کدام زودتر اجرا می‌شود؟",
     "options": [
      "process.nextTick",
      "setTimeout",
      "setImmediate",
      "همه همزمان"
     ],
     "answer": 0,
     "explain": "nextTick قبل از microtaskهای Promise اجرا می‌شود."
    },
    {
     "q": "structuredClone چه چیزی را درست کپی می‌کند؟",
     "options": [
      "Date، Map و Set",
      "توابع",
      "DOM",
      "هیچ‌چیز"
     ],
     "answer": 0,
     "explain": "ولی تابع را کپی نمی‌کند."
    },
    {
     "q": "Promise.any چه می‌کند؟",
     "options": [
      "اولین موفق را می‌دهد",
      "اولین نتیجه (حتی خطا)",
      "همه را می‌دهد",
      "هیچ"
     ],
     "answer": 0,
     "explain": "فقط اگر همه رد شوند خطا می‌دهد."
    },
    {
     "q": "Debounce برای چیست؟",
     "options": [
      "اجرا بعد از توقف رویدادها",
      "اجرای هر ثانیه",
      "حذف رویداد",
      "کش"
     ],
     "answer": 0,
     "explain": "مثلاً جست‌وجوی هنگام تایپ."
    },
    {
     "q": "چرا برای مرتب‌سازی کلمات فارسی از Intl.Collator استفاده می‌کنیم؟",
     "options": [
      "sort پیش‌فرض بر اساس کد یونیکد است نه الفبای فارسی",
      "چون سریع‌تر است",
      "چون حروف را حذف می‌کند",
      "چون فقط روی اعداد کار می‌کند"
     ],
     "answer": 0,
     "explain": "Collator قواعد الفبای زبان را می‌داند و numeric:true اعداد را عددی مرتب می‌کند."
    },
    {
     "q": "تفاوت ?? با || چیست؟",
     "options": [
      "?? فقط برای null و undefined جایگزین می‌کند",
      "?? برای صفر هم جایگزین می‌کند",
      "هیچ تفاوتی ندارند",
      "|| فقط برای اعداد است"
     ],
     "answer": 0,
     "explain": "|| مقدارهای falsy مثل 0 و رشته‌ی خالی را هم جایگزین می‌کند و باگ می‌سازد."
    },
    {
     "q": "چرا در Pool هم‌زمانی تعداد کارها را محدود می‌کنیم؟",
     "options": [
      "تا سرور و مرورگر با درخواست‌های هم‌زمان زیاد خفه نشوند",
      "تا نتیجه ترتیبی نباشد",
      "تا Promise رد نشود",
      "تا حافظه افزایش یابد"
     ],
     "answer": 0,
     "explain": "محدودیت هم‌زمانی بار را کنترل می‌کند و فشار را روی منابع کم می‌کند."
    },
    {
     "q": "چرا «علي» با «علی» برابر نیست؟",
     "options": [
      "ی عربی (U+064A) و ی فارسی (U+06CC) کد متفاوت دارند",
      "چون طولشان فرق دارد",
      "چون یکی ارقام دارد",
      "چون normalize ندارند"
     ],
     "answer": 0,
     "explain": "قبل از ذخیره یا جستجو باید ی/ک و ارقام را نرمال‌سازی کرد."
    }
   ],
   "challenge": {
    "task": "یک برنامهٔ «لیست کارها» (Todo List) بساز: کاربر متن بنویسه و اینتر بزنه یا دکمه رو بزنه، آیتم به لیست اضافه بشه؛ هر آیتم یک دکمهٔ حذف داشته باشه؛ و کل لیست توی localStorage ذخیره بشه تا با رفرش صفحه از بین نره.",
    "hint1": "یک آرایه از رشته‌ها رو به‌عنوان state نگه دار. هر بار که آرایه تغییر کرد، یک تابع render() صدا بزن که کل لیست رو دوباره توی DOM بسازه.",
    "hint2": "برای حذف، به هر li یک data-index بده یا از closure استفاده کن تا بدونی کدوم آیتم حذف بشه. بعد از هر تغییر، localStorage.setItem('todos', JSON.stringify(state)) رو صدا بزن.",
    "solution": "اسکلت پیشنهادی (نه پیاده‌سازی کامل):\n\nlet todos = JSON.parse(localStorage.getItem('todos') || '[]');\n\nfunction render() {\n  list.innerHTML = '';\n  todos.forEach((text, i) => {\n    const li = document.createElement('li');\n    li.textContent = text;\n    const del = document.createElement('button');\n    del.textContent = 'حذف';\n    del.onclick = () => { todos.splice(i, 1); save(); };\n    li.appendChild(del);\n    list.appendChild(li);\n  });\n}\nfunction save() {\n  localStorage.setItem('todos', JSON.stringify(todos));\n  render();\n}\nrender();"
   }
  }
 ],
 "covers": [
  "Variables, Data Types, Operators, Conditions, Loops",
  "Functions, Arrays, Objects",
  "Scope, Hoisting, Destructuring, Spread/Rest",
  "DOM: Selecting, Events, Forms, LocalStorage",
  "Callback, Promise, async/await, Fetch/API",
  "Closures, Prototype, Classes, this",
  "Event Loop, Call Stack (مفهومی)"
 ],
 "projects": [
  {
   "title": "Calculator",
   "brief": "یک ماشین‌حساب کاربردی با دکمه‌های عدد و عملگر. باید عملیات پایه (جمع، تفریق، ضرب، تقسیم) رو درست انجام بده و خطاهایی مثل تقسیم بر صفر رو مدیریت کنه.",
   "requirements": [
    "نمایشگر باید عدد وارد‌شده و نتیجه رو نشون بده",
    "دکمهٔ Clear برای پاک‌کردن",
    "کیبورد هم باید کار کنه (نه فقط کلیک ماوس)"
   ],
   "hints": [
    "state رو به‌صورت رشته نگه دار (مثل واقعی‌ترین ماشین‌حساب‌ها) نه عدد، تا وسط تایپ اعشار مشکل نده."
   ]
  },
  {
   "title": "Todo App",
   "brief": "نسخهٔ کامل‌تر چالش این مرحله: علاوه بر افزودن/حذف، امکان تیک‌زدن «انجام‌شد» و فیلتر (همه/انجام‌شده/باقی‌مانده) رو هم اضافه کن.",
   "requirements": [
    "هر آیتم state انجام‌شده/نشده داشته باشه",
    "فیلترها با دکمه قابل تعویض باشن",
    "تعداد آیتم‌های باقی‌مانده نمایش داده بشه"
   ],
   "hints": [
    "فیلتر رو به‌عنوان یک متغیر جدا نگه دار (all/active/done) و فقط موقع render() بر اساسش فیلتر کن، نه اینکه داده رو پاک کنی."
   ]
  },
  {
   "title": "Weather App",
   "brief": "اپلیکیشنی که اسم شهر رو می‌گیره و با fetch از یک API آب‌وهوای عمومی (رایگان) وضعیت هوا رو نشون می‌ده.",
   "requirements": [
    "مدیریت خطا اگر شهر پیدا نشد یا اینترنت قطع بود",
    "نمایش Loading حین دریافت اطلاعات",
    "استفاده از async/await، نه callback"
   ],
   "hints": [
    "یک API رایگان بدون نیاز به کلید پیدا کن (مثلاً Open-Meteo) و مستندات fetch اون رو بخون."
   ]
  },
  {
   "title": "Dashboard",
   "brief": "یک داشبورد ساده که چند کارت آماری (مثلاً تعداد فروش، کاربران، درآمد) و یک جدول داده رو نشون می‌ده؛ داده‌ها از یک آرایهٔ JS ثابت میان (نیازی به سرور واقعی نیست).",
   "requirements": [
    "چیدمان Grid برای کارت‌ها",
    "جدول قابل مرتب‌سازی با کلیک روی هدر ستون‌ها",
    "حداقل یک فیلتر یا جستجو روی جدول"
   ],
   "hints": [
    "منطق مرتب‌سازی جدول رو جدا از رندر بنویس؛ یک تابع sortBy(field) که آرایه رو مرتب کنه و دوباره render صدا بزنه."
   ]
  },
  {
   "title": "فروشگاه آنلاین (Frontend)",
   "brief": "صفحهٔ محصولات یک فروشگاه با امکان افزودن به سبد خرید، نمایش تعداد و مجموع قیمت در سبد، و صفحهٔ جدای سبد خرید.",
   "requirements": [
    "state سبد خرید باید بین تغییر صفحه‌ها (اگر SPA ساده‌ست) حفظ بشه",
    "امکان افزایش/کاهش تعداد هر محصول در سبد",
    "مجموع قیمت به‌صورت خودکار به‌روزرسانی بشه"
   ],
   "hints": [
    "این پروژه بهترین بهانه‌ست برای تمرین الگوی store که توی سطح پیشرفته یاد گرفتی — از همون subscribe/publish استفاده کن."
   ]
  }
 ]
});
