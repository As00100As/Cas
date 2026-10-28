(window.COURSES=window.COURSES||[]).push({
 "id": "python",
 "name": "پایتون",
 "icon": "🐍",
 "kind": "python",
 "desc": "زبانی ساده و قدرتمند — با یک محیط اجرای واقعی همین‌جا توی مرورگر",
 "covers": [
  "Variables, Data Types, Print/Input, Strings, f-strings",
  "Conditions, Loops (for/while)",
  "List, Dict, Tuple, Slicing, Comprehension",
  "Functions, Modules (math/random/datetime)",
  "OOP: Class, Inheritance, Polymorphism",
  "Exception Handling (try/except)",
  "Decorators, Generators",
  "فایل، CSV، JSON، Context Manager، *args/**kwargs"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "متغیرها، انواع داده و خروجی",
     "content": "<p>در پایتون برای چاپ خروجی از <code class='inline'>print()</code> و برای گرفتن ورودی از <code class='inline'>input()</code> استفاده می‌شود. پایتون نیازی به تعیین نوع متغیر ندارد (Dynamic Typing) — نوع داده از روی مقدار تشخیص داده می‌شود. انواع پایه: <code class='inline'>str</code> (متن)، <code class='inline'>int</code> (عدد صحیح)، <code class='inline'>float</code> (اعشاری)، <code class='inline'>bool</code> (True/False). با <code class='inline'>type(x)</code> می‌توانید نوع یک متغیر را ببینید.</p>",
     "py": "name = \"مریم\"\nage = 22\nheight = 1.68\nis_student = True\n\nprint(\"سلام،\", name)\nprint(\"سن:\", age, \"| نوع:\", type(age))\nprint(\"قد:\", height, \"| نوع:\", type(height))\nprint(\"دانشجو؟\", is_student)",
     "exercise": "دو متغیر برای شهر و شغل خودتان بسازید، نوع هرکدام رو با type() چاپ کنید، و یک جملهٔ کامل با print() بنویسید."
    },
    {
     "title": "رشته‌ها: عملیات و f-string",
     "content": "<p>رشته‌ها (string) با متدهای زیادی قابل پردازش‌اند: <code class='inline'>.upper()</code>/<code class='inline'>.lower()</code> برای تغییر بزرگی حروف، <code class='inline'>.strip()</code> برای حذف فاصله‌های اضافه، <code class='inline'>.split()</code> برای تبدیل به لیست، <code class='inline'>.replace()</code> برای جایگزینی. برای ترکیب متن و متغیر، به‌جای جمع‌کردن رشته‌ها، از <b>f-string</b> استفاده کنید: <code class='inline'>f\"سلام {name}\"</code> — خواناتر و سریع‌تر است.</p>",
     "py": "name = \"Ali\"\nscore = 18.5\n\nprint(f\"نام: {name}, نمره: {score}\")\nprint(f\"نام با حروف بزرگ: {name.upper()}\")\n\nsentence = \"   یادگیری پایتون آسان است   \"\nprint(sentence.strip())\nwords = sentence.strip().split()\nprint(\"تعداد کلمات:\", len(words))",
     "exercise": "یک رشته با فاصله‌های اضافه در ابتدا/انتها بسازید، آن را strip و split کنید، بعد با f-string تعداد کلماتش رو چاپ کنید."
    },
    {
     "title": "شرط‌ها: if / elif / else",
     "content": "<p>ساختار شرطی با <code class='inline'>if / elif / else</code> نوشته می‌شود. تورفتگی (indentation — معمولاً ۴ فاصله) در پایتون اجباری است و بلوک کد را مشخص می‌کند؛ برخلاف جاوااسکریپت که از آکولاد استفاده می‌کند.</p>",
     "py": "score = 82\nif score >= 90:\n    print(\"عالی\")\nelif score >= 60:\n    print(\"قبول\")\nelse:\n    print(\"مردود\")\n\n# شرط ترکیبی با and/or\nage = 20\nhas_license = True\nif age >= 18 and has_license:\n    print(\"می‌تونی رانندگی کنی\")",
     "exercise": "با if/elif/else یک برنامهٔ ساده بنویس که یک عدد بگیره (فرضی، مستقیم توی کد) و بگه مثبت، منفی یا صفره."
    },
    {
     "title": "حلقه‌ها: for، while و break/continue",
     "content": "<p>حلقهٔ <code class='inline'>for</code> معمولاً روی <code class='inline'>range()</code> یا یک لیست تکرار می‌شود. حلقهٔ <code class='inline'>while</code> تا وقتی شرط برقرار باشد ادامه پیدا می‌کند — مراقب حلقهٔ بی‌نهایت باشید! <code class='inline'>break</code> حلقه را کامل متوقف می‌کند، <code class='inline'>continue</code> فقط تکرار فعلی را رد می‌کند و به بعدی می‌رود.</p>",
     "py": "for i in range(1, 6):\n    if i == 4:\n        continue  # از ۴ رد می‌شه\n    print(\"شماره:\", i)\n\ncount = 0\nwhile count < 3:\n    print(\"شمارش while:\", count)\n    count += 1\n\nfor i in range(10):\n    if i == 5:\n        break  # حلقه کامل متوقف می‌شه\n    print(\"تا قبل از ۵:\", i)",
     "exercise": "با یک حلقهٔ for اعداد ۱ تا ۵۰ رو چاپ کن، ولی وقتی به ۲۵ رسیدی با break حلقه رو متوقف کن."
    },
    {
     "title": "match/case: جایگزین مدرن switch",
     "content": "<p>از پایتون ۳.۱۰ به بعد، دستور <code class='inline'>match/case</code> یک روش خواناتر برای مقایسهٔ یک مقدار با چند حالت مختلف است — شبیه switch در زبان‌های دیگر، ولی قوی‌تر (می‌تواند الگوها را هم تشخیص دهد، نه فقط مقدار دقیق). علامت <code class='inline'>_</code> حالت پیش‌فرض (مثل default) است.</p>",
     "py": "def describe_day(day):\n    match day:\n        case 1 | 7:\n            return \"آخر هفته\"\n        case 2 | 3 | 4 | 5 | 6:\n            return \"روز کاری\"\n        case _:\n            return \"روز نامعتبر\"\n\nprint(describe_day(1))\nprint(describe_day(3))\nprint(describe_day(10))",
     "exercise": "با match/case تابعی بنویس که یک نمره (۰ تا ۲۰) بگیره و بر اساس بازه (۰-۹، ۱۰-۱۳، ۱۴-۱۷، ۱۸-۲۰) یک رتبه برگردونه."
    }
   ],
   "quiz": [
    {
     "q": "برای چاپ متن در پایتون از چه دستوری استفاده می‌شود؟",
     "options": [
      "echo()",
      "console.log()",
      "print()",
      "output()"
     ],
     "answer": 2,
     "explain": "print() تابع استاندارد چاپ خروجی در پایتون است."
    },
    {
     "q": "در پایتون بلوک کد چگونه مشخص می‌شود؟",
     "options": [
      "با آکولاد {}",
      "با تورفتگی (indentation)",
      "با کاما",
      "با سمی‌کالن"
     ],
     "answer": 1,
     "explain": "پایتون از فاصله‌گذاری برای مشخص‌کردن بلوک‌های کد استفاده می‌کند، نه آکولاد."
    },
    {
     "q": "f-string در پایتون برای چه استفاده می‌شود؟",
     "options": [
      "تعریف تابع",
      "ترکیب متن و متغیر به‌شکل خوانا",
      "حلقه‌زدن",
      "تعریف کلاس"
     ],
     "answer": 1,
     "explain": "f\"...{var}...\" راهی مدرن و خوانا برای قراردادن مقدار متغیر داخل رشته است."
    },
    {
     "q": "تفاوت break و continue در حلقه چیست؟",
     "options": [
      "تفاوتی ندارند",
      "break کل حلقه رو متوقف می‌کنه، continue فقط تکرار فعلی رو رد می‌کنه",
      "continue کل حلقه رو متوقف می‌کنه",
      "break فقط برای while است"
     ],
     "answer": 1,
     "explain": "break خروج کامل از حلقه است؛ continue پرش به تکرار بعدی."
    },
    {
     "q": "range(1, 6) چند مقدار تولید می‌کند؟",
     "options": [
      "۴",
      "۵",
      "۶",
      "نامحدود"
     ],
     "answer": 1,
     "explain": "range(1,6) اعداد ۱ تا ۵ را تولید می‌کند (۵ عدد)، عدد پایانی جزو بازه نیست."
    }
   ],
   "challenge": {
    "task": "برنامه‌ای بنویس که یک لیست از نمرات (مستقیم توی کد تعریفشون کن) رو با for بررسی کنه و برای هر نمره بگه قبول (>=10) یا مردود، و در آخر تعداد قبولی‌ها رو با یک شمارنده چاپ کنه.",
    "hint1": "یک متغیر شمارنده مثل passed_count = 0 قبل از حلقه تعریف کن.",
    "hint2": "داخل حلقه، برای هر نمره یک if بذار؛ اگه >= 10 بود، هم پیام قبول رو چاپ کن هم passed_count رو یکی زیاد کن (+= 1).",
    "solution": "grades = [8, 15, 19, 5, 12]\npassed_count = 0\n\nfor g in grades:\n    if g >= 10:\n        print(g, \"-> قبول\")\n        passed_count += 1\n    else:\n        print(g, \"-> مردود\")\n\nprint(\"تعداد قبولی‌ها:\", passed_count)"
   }
  },
  {
   "lessons": [
    {
     "title": "لیست‌ها: ساخت، اندیس، Slicing و متدها",
     "content": "<p>لیست مجموعه‌ای مرتب و قابل‌تغییر است: <code class='inline'>[1,2,3]</code>. با اندیس (شروع از ۰) به عضوها دسترسی داری، و با <b>Slicing</b> (<code class='inline'>list[1:3]</code>) یک بخش از لیست رو می‌گیری. متدهای پرکاربرد: <code class='inline'>.append()</code> (افزودن به انتها)، <code class='inline'>.remove()</code> (حذف بر اساس مقدار)، <code class='inline'>.sort()</code> (مرتب‌سازی)، <code class='inline'>.reverse()</code>.</p>",
     "py": "fruits = [\"سیب\", \"موز\", \"پرتقال\"]\nfruits.append(\"انگور\")\nprint(fruits)\nprint(\"دومی:\", fruits[1])\nprint(\"دوتای وسط:\", fruits[1:3])\n\nnumbers = [5, 2, 9, 1]\nnumbers.sort()\nprint(\"مرتب‌شده:\", numbers)\nnumbers.remove(9)\nprint(\"بعد از حذف ۹:\", numbers)",
     "exercise": "یک لیست از ۵ عدد دلخواه بساز، آن‌ها رو مرتب کن، بزرگ‌ترین دو تا رو با slicing (از انتها) چاپ کن."
    },
    {
     "title": "دیکشنری و تاپل",
     "content": "<p><b>دیکشنری</b> جفت‌های کلید-مقدار است: <code class='inline'>{'name':'علی'}</code>؛ با <code class='inline'>dict['key']</code> یا <code class='inline'>dict.get('key')</code> مقدار رو می‌خونی. <b>تاپل</b> شبیه لیست است ولی غیرقابل‌تغییر (immutable): <code class='inline'>(1,2)</code> — برای داده‌هایی که نباید عوض بشن (مثل مختصات).</p>",
     "py": "student = {\"name\": \"رضا\", \"grades\": [18, 20, 17]}\nprint(student[\"name\"])\nprint(\"میانگین:\", sum(student[\"grades\"]) / len(student[\"grades\"]))\n\nfor key, value in student.items():\n    print(key, \"->\", value)\n\npoint = (10, 20)\nx, y = point  # unpacking\nprint(f\"x={x}, y={y}\")",
     "exercise": "دیکشنری‌ای برای یک کتاب با کلیدهای title، author و price بسازید، بعد با یک حلقهٔ for روی .items() همهٔ کلید/مقدارهاش رو چاپ کنید."
    },
    {
     "title": "Set: مجموعهٔ بدون تکرار",
     "content": "<p><b>Set</b> مثل لیست است ولی هیچ عضو تکراری قبول نمی‌کند و ترتیب اعضا مشخص نیست — عالی برای حذف تکراری‌ها یا عملیات ریاضی مجموعه‌ها. عملگرهای <code class='inline'>&amp;</code> (اشتراک)، <code class='inline'>|</code> (اجتماع) و <code class='inline'>-</code> (تفاضل) مستقیم روی Setها کار می‌کنند.</p>",
     "py": "fruits = [\"سیب\", \"موز\", \"سیب\", \"پرتقال\", \"موز\"]\nunique_fruits = set(fruits)\nprint(unique_fruits)  # فقط اعضای یکتا\n\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(\"اشتراک:\", a & b)\nprint(\"اجتماع:\", a | b)\nprint(\"تفاضل a-b:\", a - b)",
     "exercise": "یک لیست از اسم‌های تکراری بساز، با set تبدیلش کن به اعضای یکتا، و تعداد اعضای یکتا رو با len() چاپ کن."
    },
    {
     "title": "توابع: پارامتر، مقدار پیش‌فرض و بازگشت مقدار",
     "content": "<p>تابع با <code class='inline'>def</code> تعریف می‌شود. پارامترها می‌توانند مقدار پیش‌فرض داشته باشند (<code class='inline'>def greet(name=\"دوست\")</code>) که اگر چیزی پاس داده نشود استفاده می‌شود. <code class='inline'>return</code> مقدار خروجی تابع رو مشخص می‌کنه — بدون return، تابع مقدار None برمی‌گردونه.</p>",
     "py": "def area_rect(width, height):\n    return width * height\n\nprint(\"مساحت:\", area_rect(4, 5))\n\ndef greet(name=\"دوست\"):\n    return f\"سلام {name}!\"\n\nprint(greet())\nprint(greet(\"لیلا\"))\n\ndef is_even(n):\n    return n % 2 == 0\n\nprint(is_even(7), is_even(8))",
     "exercise": "تابعی به نام bmi بنویس که وزن (کیلوگرم) و قد (متر) بگیره و شاخص تودهٔ بدنی (وزن / قد به توان ۲) رو برگردونه."
    },
    {
     "title": "ماژول‌های استاندارد و List Comprehension",
     "content": "<p>پایتون کتابخانهٔ استاندارد غنی داره: <code class='inline'>math</code> (توابع ریاضی)، <code class='inline'>random</code> (اعداد تصادفی)، <code class='inline'>datetime</code> (تاریخ/زمان). با <code class='inline'>import</code> آن‌ها را وارد می‌کنیم. <b>List Comprehension</b> راهی فشرده برای ساخت لیست از یک حلقه است: <code class='inline'>[x*2 for x in range(5)]</code> به‌جای نوشتن حلقهٔ کامل.</p>",
     "py": "import math, random\n\nprint(\"جذر ۱۶:\", math.sqrt(16))\nprint(\"عدد تصادفی بین ۱ تا ۱۰:\", random.randint(1, 10))\n\n# روش معمولی:\nsquares = []\nfor x in range(5):\n    squares.append(x ** 2)\nprint(\"روش معمولی:\", squares)\n\n# همون کار با List Comprehension:\nsquares2 = [x ** 2 for x in range(5)]\nprint(\"روش فشرده:\", squares2)\n\n# با شرط:\nevens = [x for x in range(10) if x % 2 == 0]\nprint(\"زوج‌ها:\", evens)",
     "exercise": "با List Comprehension، لیستی از مکعب اعداد ۱ تا ۱۰ بساز، ولی فقط مکعب اعدادی که خودشون زوج هستن."
    }
   ],
   "quiz": [
    {
     "q": "برای دسترسی به بخشی از یک لیست (نه یک عضو تنها) از چه چیزی استفاده می‌کنیم؟",
     "options": [
      "Indexing ساده",
      "Slicing (مثل list[1:3])",
      "دیکشنری",
      "تاپل"
     ],
     "answer": 1,
     "explain": "Slicing یک زیرلیست بین دو اندیس مشخص برمی‌گرداند."
    },
    {
     "q": "کدام ساختار داده در پایتون غیرقابل‌تغییر (immutable) است؟",
     "options": [
      "list",
      "dict",
      "tuple",
      "set"
     ],
     "answer": 2,
     "explain": "tuple پس از ساخته‌شدن قابل تغییر نیست."
    },
    {
     "q": "اگر تابعی return نداشته باشد، چه مقداری برمی‌گرداند؟",
     "options": [
      "0",
      "رشتهٔ خالی",
      "None",
      "خطا می‌دهد"
     ],
     "answer": 2,
     "explain": "در نبود return صریح، پایتون به‌طور خودکار None برمی‌گرداند."
    },
    {
     "q": "[x*2 for x in range(5)] چه چیزی می‌سازد؟",
     "options": [
      "یک عدد تنها",
      "یک دیکشنری",
      "یک لیست با استفاده از List Comprehension",
      "یک تابع"
     ],
     "answer": 2,
     "explain": "این سینتکس فشردهٔ ساخت لیست از یک حلقه است."
    },
    {
     "q": "برای استفاده از توابع ریاضی مثل sqrt چه ماژولی باید import شود؟",
     "options": [
      "random",
      "math",
      "datetime",
      "os"
     ],
     "answer": 1,
     "explain": "ماژول math توابع ریاضی مثل sqrt و pi را فراهم می‌کند."
    }
   ],
   "challenge": {
    "task": "یک دیکشنری برای فروشگاه بساز که کلیدهاش اسم محصول و مقدارهاش قیمت باشه (حداقل ۵ محصول). با یک List Comprehension، لیستی از اسم محصولاتی بساز که قیمتشون بالای یک عدد مشخص (مثلاً ۱۰۰۰۰۰) هست.",
    "hint1": "برای پیمایش دیکشنری و دسترسی هم‌زمان به کلید و مقدار، از .items() استفاده کن.",
    "hint2": "List comprehension با شرط این شکلیه: [کلید for کلید, مقدار in dict.items() if شرط]",
    "solution": "products = {\"لپ‌تاپ\": 25000000, \"موس\": 80000, \"کیبورد\": 150000, \"مانیتور\": 6000000, \"هدفون\": 90000}\n\nexpensive = [name for name, price in products.items() if price > 100000]\nprint(\"محصولات گران‌تر از ۱۰۰,۰۰۰:\", expensive)"
   }
  },
  {
   "lessons": [
    {
     "title": "برنامه‌نویسی شیءگرا: کلاس و شیء",
     "content": "<p>کلاس‌ها با <code class='inline'>class</code> تعریف می‌شوند و قالبی برای ساخت آبجکت‌های مشابه هستند. متد <code class='inline'>__init__</code> سازندهٔ کلاس است و هنگام ساخت هر نمونهٔ جدید اجرا می‌شود؛ <code class='inline'>self</code> اشاره به خودِ همان نمونه دارد.</p>",
     "py": "class Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n\n    def make_sound(self):\n        return f\"{self.name} می‌گوید {self.sound}\"\n\ncat = Animal(\"گربه\", \"میو\")\ndog = Animal(\"سگ\", \"واق\")\nprint(cat.make_sound())\nprint(dog.make_sound())",
     "exercise": "یک کلاس Book با ویژگی‌های title و author و متدی به نام info بسازید که یک جملهٔ کامل دربارهٔ کتاب برگرداند."
    },
    {
     "title": "وراثت (Inheritance) و Polymorphism",
     "content": "<p><b>وراثت</b> اجازه می‌دهد یک کلاس (فرزند) ویژگی‌ها و متدهای کلاس دیگری (والد) را به ارث ببرد و فقط چیزهای جدید یا متفاوت را اضافه کند — با <code class='inline'>class Dog(Animal):</code>. <b>Polymorphism</b> یعنی کلاس‌های فرزند می‌توانند یک متد مشترک را <b>Override</b> (بازنویسی) کنند تا رفتار متفاوتی داشته باشد، درحالی‌که همان اسم متد صدا زده می‌شود.</p>",
     "py": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def make_sound(self):\n        return \"صدای نامشخص\"\n\nclass Dog(Animal):\n    def make_sound(self):  # Override\n        return f\"{self.name}: واق واق!\"\n\nclass Cat(Animal):\n    def make_sound(self):  # Override\n        return f\"{self.name}: میو!\"\n\nanimals = [Dog(\"رکس\"), Cat(\"پیشی\")]\nfor a in animals:\n    print(a.make_sound())  # هرکدوم رفتار خودشو داره",
     "exercise": "یک کلاس Shape با متد area() بساز که None برگردونه، بعد دو کلاس فرزند Circle و Square بساز که area() رو override کنن."
    },
    {
     "title": "Magic Methods و Abstraction",
     "content": "<p><b>Magic Methods</b> (یا Dunder Methods، چون با دو زیرخط شروع/تمام می‌شوند مثل <code class='inline'>__init__</code>) رفتار پیش‌فرض پایتون برای یک کلاس را سفارشی می‌کنند: <code class='inline'>__str__</code> نحوهٔ نمایش با print را تعیین می‌کند، <code class='inline'>__len__</code> رفتار len() را، <code class='inline'>__eq__</code> رفتار == را. <b>Abstraction</b> یعنی تعریف یک کلاس پایهٔ انتزاعی (با ماژول <code class='inline'>abc</code>) که خودش قابل نمونه‌سازی نیست و فقط الگویی برای فرزندان است — فرزندان مجبورند متدهای Abstract را پیاده‌سازی کنند.</p>",
     "py": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\n    def __str__(self):\n        return f\"شکل با مساحت {self.area()}\"\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(s)  # خودکار __str__ صدا زده می‌شه\n\n# Shape() # این خط خطا می‌ده، چون Shape انتزاعیه",
     "exercise": "به کلاس Square یک متد __eq__ اضافه کن که دو مربع رو بر اساس side مساوی بدونه، بعد دو Square با side یکسان بساز و با == مقایسه‌شون کن."
    },
    {
     "title": "Exception Handling: try/except/finally",
     "content": "<p>وقتی کد ممکن است خطا بدهد (مثلاً تقسیم بر صفر یا تبدیل رشته به عدد اشتباه)، به‌جای کرش کردن کل برنامه، با <code class='inline'>try/except</code> خطا را «می‌گیریم» و مدیریت می‌کنیم. <code class='inline'>finally</code> همیشه اجرا می‌شود، چه خطا رخ بدهد چه ندهد — مناسب برای پاک‌سازی (مثل بستن فایل).</p>",
     "py": "def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        print(\"خطا: تقسیم بر صفر ممکن نیست!\")\n        return None\n    finally:\n        print(\"عملیات تقسیم تمام شد.\")\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))",
     "exercise": "تابعی بنویس که یک رشته رو به عدد صحیح تبدیل کنه (با int())؛ اگه رشته عدد معتبر نبود (مثل 'abc')، با try/except یک پیام خطای مناسب چاپ کن به‌جای کرش‌کردن برنامه."
    },
    {
     "title": "دکوریتورها (Decorators) و جنریتورها (Generators)",
     "content": "<p><b>دکوریتور</b> تابعی است که تابع دیگر را می‌گیرد و رفتار آن را بدون تغییر مستقیم کدش، اضافه یا تغییر می‌دهد — پرکاربرد برای لاگ‌گیری یا اندازه‌گیری زمان اجرا. با علامت <code class='inline'>@</code> روی تابع اعمال می‌شود. <b>جنریتور</b> با کلیدواژهٔ <code class='inline'>yield</code> مقادیر را یکی‌یکی و با صرفه‌جویی در حافظه تولید می‌کند.</p>",
     "py": "def log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f\"در حال اجرای {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_call\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))\n\ndef count_up(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor num in count_up(5):\n    print(\"عدد:\", num)",
     "exercise": "یک دکوریتور timer بسازید که زمان اجرای تابع را با ماژول time اندازه بگیرد و چاپ کند."
    }
   ],
   "quiz": [
    {
     "q": "متد __init__ در یک کلاس پایتون چه نقشی دارد؟",
     "options": [
      "حذف نمونه",
      "سازندهٔ کلاس؛ هنگام ساخت نمونه اجرا می‌شود",
      "چاپ خروجی",
      "وارد کردن ماژول"
     ],
     "answer": 1,
     "explain": "__init__ مقادیر اولیهٔ نمونهٔ کلاس را تنظیم می‌کند."
    },
    {
     "q": "Override کردن یک متد در کلاس فرزند به چه معناست؟",
     "options": [
      "حذف متد از کلاس والد",
      "تعریف دوبارهٔ همان متد در فرزند با رفتار متفاوت",
      "تغییر اسم متد",
      "غیرممکن کردن استفاده از متد"
     ],
     "answer": 1,
     "explain": "فرزند می‌تواند متد ارث‌برده‌شده را با پیاده‌سازی خودش جایگزین کند."
    },
    {
     "q": "try/except برای چه استفاده می‌شود؟",
     "options": [
      "تعریف کلاس",
      "مدیریت خطاهای احتمالی بدون کرش‌کردن برنامه",
      "ساخت حلقه",
      "تعریف تابع"
     ],
     "answer": 1,
     "explain": "کدی که ممکن است خطا بدهد داخل try قرار می‌گیرد و except خطا را مدیریت می‌کند."
    },
    {
     "q": "yield در یک تابع چه چیزی می‌سازد؟",
     "options": [
      "یک لیست معمولی",
      "یک generator که مقادیر را یکی‌یکی تولید می‌کند",
      "یک عدد اعشاری",
      "یک کلاس جدید"
     ],
     "answer": 1,
     "explain": "generator به‌جای ساخت کل خروجی در حافظه، هر مقدار را در لحظهٔ نیاز تولید می‌کند."
    },
    {
     "q": "finally در try/except چه زمانی اجرا می‌شود؟",
     "options": [
      "فقط اگر خطا رخ دهد",
      "فقط اگر خطا رخ ندهد",
      "همیشه، چه خطا رخ بدهد چه ندهد",
      "هرگز"
     ],
     "answer": 2,
     "explain": "finally برای کدی است که باید در هر صورت اجرا شود، مثل پاک‌سازی منابع."
    }
   ],
   "challenge": {
    "task": "یک کلاس BankAccount بساز با ویژگی balance (موجودی)، متد deposit(amount) برای واریز و متد withdraw(amount) برای برداشت. اگه مبلغ برداشت بیشتر از موجودی بود، به‌جای منفی‌شدن موجودی، با try/except (یا if) خطای «موجودی کافی نیست» بده.",
    "hint1": "withdraw باید چک کنه amount <= self.balance؛ اگه نبود، پیام خطا چاپ کن و موجودی رو تغییر نده.",
    "hint2": "می‌تونی برای حالت پیشرفته‌تر، به‌جای if، یک raise ValueError(\"...\") بزنی و بیرون از متد با try/except بگیریش.",
    "solution": "class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            print(\"خطا: موجودی کافی نیست!\")\n            return\n        self.balance -= amount\n\nacc = BankAccount(1000)\nacc.deposit(500)\nacc.withdraw(2000)\nprint(\"موجودی نهایی:\", acc.balance)"
   }
  },
  {
   "lessons": [
    {
     "title": "کار با فایل واقعی (در فایل‌سیستم مجازی مرورگر)",
     "content": "<p>پایتون با <code class='inline'>open()</code> فایل باز می‌کند: حالت <code class='inline'>'w'</code> برای نوشتن (فایل جدید یا بازنویسی)، <code class='inline'>'r'</code> برای خواندن، <code class='inline'>'a'</code> برای افزودن به انتها. استفاده از <code class='inline'>with open(...) as f:</code> بهتر است چون فایل را خودکار (حتی در صورت خطا) می‌بندد — این یک <b>Context Manager</b> است. این‌جا واقعاً روی یک فایل‌سیستم مجازی (در حافظهٔ مرورگر) کار می‌کنیم.</p>",
     "py": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"سلام دنیا!\\n\")\n    f.write(\"این خط دوم است.\\n\")\n\nwith open(\"notes.txt\", \"r\") as f:\n    content = f.read()\n    print(content)\n\nwith open(\"notes.txt\", \"a\") as f:\n    f.write(\"این خط اضافه‌شده است.\\n\")\n\nwith open(\"notes.txt\", \"r\") as f:\n    for line in f:\n        print(\"خط:\", line.strip())",
     "exercise": "یک فایل tasks.txt بساز و ۳ کار (task) توش بنویس، هر کدوم توی یک خط؛ بعد فایل رو بخون و تعداد خط‌ها (کارها) رو چاپ کن."
    },
    {
     "title": "کار با CSV و JSON",
     "content": "<p>ماژول <code class='inline'>csv</code> برای خواندن/نوشتن فایل‌های جدولی است؛ <code class='inline'>csv.DictReader</code> هر ردیف را به‌صورت دیکشنری با کلید = نام ستون برمی‌گرداند. ماژول <code class='inline'>json</code> برای تبدیل بین دیکشنری پایتون و متن JSON استفاده می‌شود — <code class='inline'>json.dumps()</code> به متن، <code class='inline'>json.loads()</code> از متن.</p>",
     "py": "import csv, json\n\n# نوشتن CSV\nwith open(\"students.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"name\", \"score\"])\n    writer.writerow([\"سارا\", 18])\n    writer.writerow([\"علی\", 15])\n\n# خواندن CSV\nwith open(\"students.csv\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row[\"name\"], \"->\", row[\"score\"])\n\n# JSON\ndata = {\"name\": \"رضا\", \"age\": 25}\njson_text = json.dumps(data, ensure_ascii=False)\nprint(\"به JSON:\", json_text)\nback = json.loads(json_text)\nprint(\"از JSON:\", back[\"name\"])",
     "exercise": "دیکشنری‌ای برای یک محصول (name, price, in_stock) بساز، با json.dumps به متن تبدیلش کن و چاپش کن، بعد دوباره با json.loads برگردونش به دیکشنری."
    },
    {
     "title": "*args، **kwargs و Unpacking پیشرفته",
     "content": "<p>وقتی نمی‌دانید تابع چند آرگومان می‌گیرد، از <code class='inline'>*args</code> (آرگومان‌های موقعیتی نامحدود، به‌صورت تاپل) و <code class='inline'>**kwargs</code> (آرگومان‌های کلیدی نامحدود، به‌صورت دیکشنری) استفاده کنید.</p>",
     "py": "def sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3, 4))\nprint(sum_all(10, 20))\n\ndef print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\nprint_info(name=\"لیلا\", age=30, city=\"تهران\")\n\n# ترکیب هردو:\ndef describe(title, *args, **kwargs):\n    print(\"عنوان:\", title)\n    print(\"موارد اضافه:\", args)\n    print(\"جزئیات:\", kwargs)\n\ndescribe(\"محصول\", \"جدید\", \"محبوب\", price=100000, color=\"قرمز\")",
     "exercise": "تابعی به نام make_pizza بنویس که یک اندازه (size) و بعد *toppings (تاپینگ‌های نامحدود) بگیره و یک جمله دربارهٔ پیتزای سفارش‌داده‌شده چاپ کنه."
    },
    {
     "title": "Regular Expressions (Regex): جست‌وجوی الگو در متن",
     "content": "<p>ماژول <code class='inline'>re</code> اجازه می‌دهد الگوهای پیچیده در متن پیدا کنید — مثلاً چک‌کردن فرمت ایمیل یا استخراج شماره‌تلفن از یک متن بزرگ. <code class='inline'>re.match</code> از ابتدای رشته چک می‌کند، <code class='inline'>re.findall</code> همهٔ موارد منطبق را پیدا می‌کند.</p>",
     "py": "import re\n\ntext = \"تماس با سارا: 09123456789 یا علی: 09351234567\"\nphones = re.findall(r\"09\\d{9}\", text)\nprint(\"شماره‌های پیدا‌شده:\", phones)\n\nemail = \"test@example.com\"\nif re.match(r\"^[\\w.]+@[\\w]+\\.[a-z]+$\", email):\n    print(\"ایمیل معتبره\")\nelse:\n    print(\"ایمیل نامعتبره\")",
     "exercise": "یک الگوی regex بنویس که کدپستی ۱۰رقمی رو از یه متن پیدا کنه (فرض کن کدپستی همیشه دقیقاً ۱۰ رقم پشت‌سرهمه)."
    },
    {
     "title": "Threading، Multiprocessing و Async/Await در پایتون",
     "content": "<p>پایتون به‌خاطر <b>GIL (Global Interpreter Lock)</b> نمی‌تواند چند Thread را واقعاً هم‌زمان روی چند هستهٔ CPU اجرا کند — برای این‌کار به <code class='inline'>multiprocessing</code> (چند Process کاملاً مستقل) نیاز دارید. <code class='inline'>threading</code> برای کارهای I/O-bound (مثل منتظرماندن برای شبکه) مفید است، نه محاسبات سنگین CPU. <code class='inline'>asyncio</code> با <code class='inline'>async/await</code> (دقیقاً مثل جاوااسکریپت) راه سومی برای همزمانی بدون نیاز به Thread واقعی است — مناسب برای هزاران اتصال شبکهٔ هم‌زمان.</p>",
     "py": "import asyncio\n\nasync def fetch_data(name, delay):\n    print(f\"شروع {name}\")\n    await asyncio.sleep(delay)  # شبیه‌سازی تاخیر شبکه\n    print(f\"پایان {name}\")\n    return f\"داده از {name}\"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_data(\"سرور۱\", 1),\n        fetch_data(\"سرور۲\", 1)\n    )\n    print(results)\n\nawait main()",
     "exercise": "توضیح بده چرا asyncio.gather با دو تاخیر ۱ ثانیه‌ای، کل برنامه رو در حدود ۱ ثانیه (نه ۲ ثانیه) تموم می‌کنه — این چه ارتباطی با Promise.all در جاوااسکریپت داره؟"
    },
    {
     "title": "Type Hints و dataclass",
     "content": "<p>Type hint نوع‌ها را مستند می‌کند و ابزارهایی مثل mypy و ویرایشگر را وارد کار می‌کند. <code class='inline'>@dataclass</code> کلاس‌های داده‌ای را بدون نوشتن <code class='inline'>__init__</code> و <code class='inline'>__repr__</code> می‌سازد.</p>",
     "exercise": "یک dataclass برای Product بنویس و لیستی از آن‌ها را بر اساس قیمت مرتب کن.",
     "py": "from dataclasses import dataclass\n\n@dataclass\nclass User:\n    name: str\n    age: int = 18\n\ndef greet(u: User) -> str:\n    return f\"سلام {u.name}\"\n\nprint(User(\"علی\"))\nprint(greet(User(\"سارا\", 25)))"
    },
    {
     "title": "محیط مجازی، pip و تست با pytest",
     "content": "<p>هر پروژه باید محیط مجازی خودش را داشته باشد تا وابستگی‌ها قاطی نشوند: <code class='inline'>python -m venv .venv</code> و بعد فعال‌سازی. پکیج‌ها با <code class='inline'>pip install</code> نصب می‌شوند و با <code class='inline'>pip freeze &gt; requirements.txt</code> ثبت. تست‌ها در فایل‌های <code class='inline'>test_*.py</code> با <code class='inline'>assert</code> نوشته و با دستور <code class='inline'>pytest</code> اجرا می‌شوند.</p>",
     "exercise": "برای تابع add یک فایل test_add.py با دو assert بنویس و pytest را اجرا کن."
    },
    {
     "title": "بسته‌بندی پروژه: pyproject.toml، ساختار پکیج و انتشار",
     "content": "<p>پروژهٔ حرفه‌ای ساختار ثابت دارد: پوشهٔ <code class='inline'>src/نام_پکیج/</code> با <code class='inline'>__init__.py</code>، پوشهٔ <code class='inline'>tests/</code> و فایل <code class='inline'>pyproject.toml</code> که نام، نسخه و وابستگی‌ها را نگه می‌دارد. با <code class='inline'>pip install -e .</code> پکیج خودت را محلی نصب می‌کنی و با <code class='inline'>python -m build</code> و <code class='inline'>twine upload</code> روی PyPI منتشر می‌کنی. ابزارهای کیفیت: <code class='inline'>ruff</code> (لینت/فرمت) و <code class='inline'>mypy</code> (نوع‌ها).</p>",
     "exercise": "یک پکیج کوچک به اسم mytools بساز و محلی با pip install -e نصبش کن."
    },
    {
     "title": "Descriptor و Property در عمق",
     "content": "<p>Descriptor شیئی با <code class='inline'>__get__</code>/<code class='inline'>__set__</code> است که دسترسی به صفت را کنترل می‌کند؛ <code class='inline'>property</code> و متدها همین مکانیزم‌اند. با <code class='inline'>__set_name__</code> نام صفت را می‌گیرد. برای اعتبارسنجی قابل‌استفاده‌ی مجدد عالی است.</p>",
     "exercise": "یک Descriptor بنویس که فقط رشته‌ی غیرخالی بپذیرد.",
     "py": "class Positive:\n    def __set_name__(self, owner, name):\n        self.n = \"_\" + name\n    def __get__(self, obj, cls):\n        return getattr(obj, self.n)\n    def __set__(self, obj, v):\n        if v <= 0:\n            raise ValueError(\"باید مثبت باشد\")\n        setattr(obj, self.n, v)\n\nclass Item:\n    price = Positive()\n    def __init__(self, price):\n        self.price = price\n\nprint(Item(10).price)\ntry:\n    Item(-1)\nexcept ValueError as e:\n    print(\"خطا:\", e)"
    },
    {
     "title": "Metaclass و __init_subclass__",
     "content": "<p>هر کلاس نمونه‌ای از یک metaclass (پیش‌فرض <code class='inline'>type</code>) است. بیشتر نیازها (ثبت خودکار زیرکلاس‌ها، اعتبارسنجی) با <code class='inline'>__init_subclass__</code> ساده‌تر برآورده می‌شود؛ metaclass را فقط برای تغییر ساخت خود کلاس به کار ببر.</p>",
     "exercise": "یک سیستم افزونه بنویس که زیرکلاس‌ها را خودکار ثبت کند.",
     "py": "registry = {}\nclass Plugin:\n    def __init_subclass__(cls, **kw):\n        super().__init_subclass__(**kw)\n        registry[cls.__name__] = cls\n\nclass A(Plugin): pass\nclass B(Plugin): pass\nprint(sorted(registry))\n\nMeta = type(\"Dyn\", (), {\"x\": 1})\nprint(Meta().x)"
    },
    {
     "title": "دکوراتور پیشرفته: پارامتردار، wraps و کلاسی",
     "content": "<p>دکوراتور تابعی است که تابع می‌گیرد و جایگزین برمی‌گرداند. برای پارامتر، یک لایه‌ی بیرونی اضافه می‌شود. همیشه <code class='inline'>functools.wraps</code> بگذار تا نام و docstring حفظ شود. دکوراتور برای cache، retry، لاگ و کنترل دسترسی ایده‌آل است.</p>",
     "exercise": "دکوراتوری بنویس که زمان اجرای تابع را لاگ کند.",
     "py": "import functools, time\n\ndef retry(times=3):\n    def deco(fn):\n        @functools.wraps(fn)\n        def wrap(*a, **k):\n            for i in range(times):\n                try:\n                    return fn(*a, **k)\n                except Exception as e:\n                    print(\"تلاش\", i + 1, \"ناموفق:\", e)\n            raise RuntimeError(\"همه‌ی تلاش‌ها شکست خورد\")\n        return wrap\n    return deco\n\nn = {\"c\": 0}\n@retry(3)\ndef flaky():\n    n[\"c\"] += 1\n    if n[\"c\"] < 3:\n        raise ValueError(\"خطا\")\n    return \"موفق\"\n\nprint(flaky(), flaky.__name__)"
    },
    {
     "title": "Generator، Coroutine و itertools",
     "content": "<p>Generator با <code class='inline'>yield</code> داده را تنبل تولید می‌کند و حافظه‌ی ثابت می‌گیرد. <code class='inline'>itertools</code> ابزار ترکیب دنباله‌هاست: <code class='inline'>islice</code>، <code class='inline'>chain</code>، <code class='inline'>groupby</code> (روی داده‌ی مرتب)، <code class='inline'>product</code>. <code class='inline'>yield from</code> زیر-generator را واگذار می‌کند.</p>",
     "exercise": "با itertools همه‌ی ترکیب‌های دو عنصری یک لیست را بساز.",
     "py": "import itertools\n\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nprint(list(itertools.islice(fib(), 10)))\nprint(list(itertools.chain([1, 2], [3])))\nfor k, g in itertools.groupby(\"aabbbc\"):\n    print(k, len(list(g)))"
    },
    {
     "title": "Context Manager پیشرفته با contextlib",
     "content": "<p><code class='inline'>@contextmanager</code> ساخت context manager را با یک generator ساده می‌کند؛ بخش بعد از yield حتی هنگام خطا اجرا می‌شود (در finally). <code class='inline'>suppress</code> خطای مشخص را نادیده می‌گیرد و <code class='inline'>ExitStack</code> تعداد پویا منبع را مدیریت می‌کند.</p>",
     "exercise": "context manager بنویس که تراکنش را در خطا rollback کند.",
     "py": "from contextlib import contextmanager, suppress\nimport time\n\n@contextmanager\ndef timer(name):\n    t = time.perf_counter()\n    try:\n        yield\n    finally:\n        print(name, \"گذشت\", round(time.perf_counter() - t, 3))\n\nwith timer(\"جمع\"):\n    sum(range(100000))\nwith suppress(KeyError):\n    {}[\"x\"]\nprint(\"ادامه\")"
    },
    {
     "title": "asyncio در عمق: Task، TaskGroup و Cancellation",
     "content": "<p><code class='inline'>asyncio.create_task</code> کار را همزمان شروع می‌کند و <code class='inline'>gather</code> منتظر چند کار می‌ماند. در Python 3.11+، <code class='inline'>TaskGroup</code> خطاها را درست مدیریت و بقیه را لغو می‌کند. لغو با <code class='inline'>CancelledError</code> می‌رسد و باید منابع را آزاد کنی. کد مسدودکننده را در <code class='inline'>asyncio.to_thread</code> بگذار.<div class='code-block'><div class='cb-head'>tg.py</div><pre><code>async with asyncio.TaskGroup() as tg:\n    a = tg.create_task(fetch(1))\n    b = tg.create_task(fetch(2))\nprint(a.result(), b.result())</code></pre></div></p>",
     "exercise": "۱۰۰ درخواست HTTP را با محدودیت همزمانی (Semaphore) انجام بده."
    },
    {
     "title": "همزمانی: GIL، Thread، Process و Async",
     "content": "<p>GIL اجازه نمی‌دهد دو رشته بایت‌کد پایتون را همزمان اجرا کنند. نتیجه: برای I/O (شبکه، فایل) thread/asyncio کافی است، برای CPU سنگین <code class='inline'>multiprocessing</code> یا <code class='inline'>concurrent.futures.ProcessPoolExecutor</code>. پایتون ۳.۱۳ حالت بدون-GIL آزمایشی دارد.</p>",
     "exercise": "یک پردازش CPU را با Process Pool موازی و سرعت را مقایسه کن."
    },
    {
     "title": "حافظه و عملکرد: slots، lru_cache و پروفایل",
     "content": "<p><code class='inline'>__slots__</code> دیکشنری هر نمونه را حذف و حافظه کم می‌کند. <code class='inline'>lru_cache</code> نتیجهٔ توابع خالص را کش می‌کند. قبل از بهینه‌سازی، با <code class='inline'>cProfile</code> و <code class='inline'>timeit</code> اندازه بگیر؛ معمولاً الگوریتم و ساختار داده مهم‌تر از ریزبهینه‌سازی است.</p>",
     "exercise": "یک تابع کند را پروفایل و گلوگاه را رفع کن.",
     "py": "import functools, timeit\n\n@functools.lru_cache(maxsize=None)\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\n\nprint(fib(80))\n\nclass P:\n    __slots__ = (\"x\", \"y\")\n    def __init__(self, x, y):\n        self.x, self.y = x, y\nprint(hasattr(P(1, 2), \"__dict__\"))\nprint(timeit.timeit(\"sum(range(1000))\", number=1000) > 0)"
    },
    {
     "title": "Typing پیشرفته: Protocol، Generic و TypedDict",
     "content": "<p><code class='inline'>Protocol</code> ساختارِ لازم را بدون وراثت توصیف می‌کند (duck typing ایستا). <code class='inline'>Generic[T]</code> کلاس‌ها و توابع عمومی می‌سازد، <code class='inline'>TypedDict</code> شکل دیکشنری را مشخص می‌کند و <code class='inline'>ParamSpec</code> دکوراتورها را نوع‌دار می‌کند. با mypy یا pyright در CI اجرا کن.</p>",
     "exercise": "یک Protocol برای «چیزی که close دارد» بنویس و با mypy بسنج."
    },
    {
     "title": "Pattern Matching و dataclass پیشرفته",
     "content": "<p><code class='inline'>match/case</code> ساختار داده را تطبیق و تجزیه می‌کند (ساختار، نوع، شرط guard). <code class='inline'>dataclass</code> با <code class='inline'>frozen</code>، <code class='inline'>slots</code>، <code class='inline'>order</code> و <code class='inline'>field</code> کلاس داده‌ی ایمن و سبک می‌دهد؛ <code class='inline'>frozen</code> نمونه را hashable می‌کند.</p>",
     "exercise": "با match/case یک پارسر دستورهای ساده (move x y, quit) بنویس.",
     "py": "from dataclasses import dataclass, field\n\n@dataclass(frozen=True, slots=True, order=True)\nclass Point:\n    x: int\n    y: int = 0\n    tags: tuple = field(default=())\n\ndef where(p):\n    match p:\n        case Point(0, 0): return \"مبدأ\"\n        case Point(x, 0): return f\"روی محور x ({x})\"\n        case Point(x, y) if x == y: return \"روی قطر\"\n        case _: return \"جای دیگر\"\n\nfor p in (Point(0), Point(3), Point(2, 2), Point(1, 5)):\n    print(where(p))"
    },
    {
     "title": "تست پیشرفته: Fixture، Parametrize و Hypothesis",
     "content": "<p><code class='inline'>pytest.fixture</code> منابع مشترک تست را با scope می‌سازد، <code class='inline'>parametrize</code> یک تست را با چند ورودی اجرا می‌کند و <code class='inline'>monkeypatch</code>/<code class='inline'>unittest.mock</code> وابستگی‌ها را جایگزین می‌کنند. Hypothesis ورودی‌های تصادفی هوشمند می‌سازد و موارد مرزی را پیدا می‌کند.</p>",
     "exercise": "برای یک تابع مرتب‌سازی با Hypothesis ویژگی «خروجی مرتب است» را بسنج."
    },
    {
     "title": "collections: Counter، defaultdict، deque و namedtuple",
     "content": "<p>ماژول <code>collections</code> ساختارهای تخصصی دارد: <b>Counter</b> (شمارش فراوانی، <code>most_common</code>)، <b>defaultdict</b> (مقدار پیش‌فرض خودکار؛ دیگر نیازی به <code>if key not in d</code> نیست)، <b>deque</b> (صف دوطرفه با افزودن/حذف O(1) از دو سر و <code>maxlen</code> برای پنجره‌ی لغزان) و <b>namedtuple</b> (تاپل با نام فیلد). <code>list.pop(0)</code> هزینه‌ی O(n) دارد ولی <code>deque.popleft()</code> O(1) است.</p>",
     "exercise": "با deque(maxlen=3) میانگین متحرک سه‌تایی بساز.",
     "py": "from collections import Counter, defaultdict, deque, namedtuple\n\ntext = \"سیب موز سیب گیلاس موز سیب\"\nc = Counter(text.split())\nprint(c.most_common(2))\n\ngroups = defaultdict(list)\nfor w in [\"apple\", \"avocado\", \"banana\", \"blueberry\", \"cherry\"]:\n    groups[w[0]].append(w)\nprint(dict(groups))\n\nd = deque(maxlen=3)\nfor x in range(1, 6):\n    d.append(x)\n    print(list(d), \"میانگین =\", sum(d) / len(d))\n\nPoint = namedtuple(\"Point\", \"x y\")\np = Point(2, 3)\nprint(p, p.x + p.y, p._replace(x=10), p._asdict())"
    },
    {
     "title": "heapq و bisect: صف اولویت و جست‌وجوی دودویی",
     "content": "<p><code>heapq</code> یک heap کمینه روی لیست می‌سازد: <code>heappush/heappop</code> در O(log n). برای «k بزرگ‌ترین» از <code>nlargest</code> استفاده کن (سریع‌تر از sort کامل). برای صف اولویت با اولویت‌های برابر، یک شمارنده در تاپل بگذار تا مقایسه‌ی اشیاء لازم نشود. <code>bisect</code> روی لیست <b>مرتب‌شده</b> با جست‌وجوی دودویی جای درج را در O(log n) پیدا می‌کند (<code>insort</code> درج مرتب).</p>",
     "exercise": "با bisect نمره‌ها را به درجه‌ی A/B/C تبدیل کن.",
     "py": "import heapq, bisect\nfrom itertools import count\n\ntasks, tie = [], count()\nfor pri, name in [(2, \"گزارش\"), (1, \"باگ بحرانی\"), (3, \"مستندات\"), (1, \"دیپلوی\")]:\n    heapq.heappush(tasks, (pri, next(tie), name))\nwhile tasks:\n    pri, _, name = heapq.heappop(tasks)\n    print(pri, name)\n\nnums = [7, 2, 9, 4, 11, 5]\nprint(\"3 بزرگ:\", heapq.nlargest(3, nums), \"| 2 کوچک:\", heapq.nsmallest(2, nums))\n\nbreaks, grades = [60, 70, 80, 90], \"FDCBA\"\nfor score in [55, 60, 75, 89, 90, 100]:\n    print(score, grades[bisect.bisect(breaks, score)])\n\na = [1, 3, 5]\nbisect.insort(a, 4)\nprint(a)"
    },
    {
     "title": "functools: partial، singledispatch، cached_property و total_ordering",
     "content": "<p><code>partial</code> بخشی از آرگومان‌ها را ثابت می‌کند. <code>singledispatch</code> تابع را بر اساس <b>نوع</b> آرگومان اول چندریختی می‌کند (جایگزین زنجیره‌ی <code>isinstance</code>). <code>cached_property</code> مقدار را یک بار حساب و روی نمونه ذخیره می‌کند. <code>total_ordering</code> با تعریف <code>__eq__</code> و یکی از <code>__lt__</code> و ...، بقیه‌ی مقایسه‌ها را می‌سازد. <code>reduce</code> برای تجمیع.</p>",
     "exercise": "یک singledispatch برای نوع bool اضافه کن (bool زیرکلاس int است).",
     "py": "from functools import partial, reduce, singledispatch, cached_property, total_ordering\n\npower = lambda base, exp: base ** exp\nsquare = partial(power, exp=2)\nprint(square(7), reduce(lambda a, b: a * b, range(1, 6)))\n\n@singledispatch\ndef fmt(x): return f\"شیء: {x!r}\"\n@fmt.register\ndef _(x: int): return f\"عدد صحیح: {x:,}\"\n@fmt.register\ndef _(x: list): return f\"لیست با {len(x)} عضو\"\nprint(fmt(1234567), fmt([1, 2]), fmt(3.5))\n\nclass Report:\n    calls = 0\n    @cached_property\n    def total(self):\n        Report.calls += 1\n        return sum(range(1000))\nr = Report(); r.total; r.total\nprint(\"محاسبه چند بار؟\", Report.calls)\n\n@total_ordering\nclass Ver:\n    def __init__(self, n): self.n = tuple(map(int, n.split(\".\")))\n    def __eq__(self, o): return self.n == o.n\n    def __lt__(self, o): return self.n < o.n\nprint(Ver(\"1.2.10\") > Ver(\"1.2.9\"), Ver(\"2.0\") >= Ver(\"1.9.9\"))"
    },
    {
     "title": "Decimal و Fraction: دقت در پول و کسر",
     "content": "<p>اعداد <code>float</code> دودویی‌اند و <code>0.1+0.2</code> دقیقاً ۰٫۳ نیست. برای پول از <code>decimal.Decimal</code> با <b>رشته</b> بسازید (نه از float). با <code>quantize</code> و حالت گرد کردن (مثل <code>ROUND_HALF_UP</code>) نتیجه قابل پیش‌بینی می‌شود. <code>fractions.Fraction</code> کسر دقیق می‌دهد. توجه: گردکردن پیش‌فرض پایتون (<code>round</code>) «به نزدیک‌ترین زوج» است (banker's rounding).</p>",
     "exercise": "مالیات ۹٪ را روی ۱۹٫۹۹ حساب و به دو رقم گرد کن.",
     "py": "from decimal import Decimal, ROUND_HALF_UP, getcontext\nfrom fractions import Fraction\n\nprint(0.1 + 0.2, Decimal(\"0.1\") + Decimal(\"0.2\"))\nprint(\"از float:\", Decimal(0.1))\nprice = Decimal(\"19.99\")\ntax = (price * Decimal(\"0.09\")).quantize(Decimal(\"0.01\"), rounding=ROUND_HALF_UP)\nprint(\"مالیات:\", tax, \"جمع:\", price + tax)\nprint(\"round(2.5)=\", round(2.5), \"| round(3.5)=\", round(3.5), \"(banker's)\")\nprint(Decimal(\"2.5\").quantize(Decimal(\"1\"), rounding=ROUND_HALF_UP))\nprint(Fraction(1, 3) + Fraction(1, 6), float(Fraction(1, 3)))\ngetcontext().prec = 30\nprint(Decimal(1) / Decimal(7))"
    },
    {
     "title": "datetime، timedelta و منطقه‌ی زمانی",
     "content": "<p>تاریخ «ساده» (naive) منطقه‌ی زمانی ندارد و مقایسه‌اش با تاریخ «آگاه» (aware) خطا می‌دهد. قاعده: داخل سیستم همیشه <b>UTC</b> نگه دار (<code>datetime.now(timezone.utc)</code>) و فقط هنگام نمایش به منطقه‌ی کاربر تبدیل کن. <code>timedelta</code> تفاوت زمان است. <code>isoformat/fromisoformat</code> برای تبادل داده و <code>strftime</code> برای نمایش. محاسبه‌ی «ماه بعد» با timedelta درست نیست (ماه‌ها طول متفاوت دارند).</p>",
     "exercise": "فاصله‌ی دو تاریخ را به روز و ساعت بنویس.",
     "py": "from datetime import datetime, timedelta, timezone\n\nutc = datetime(2026, 10, 3, 12, 0, tzinfo=timezone.utc)\ntehran = timezone(timedelta(hours=3, minutes=30))\nprint(\"UTC   :\", utc.isoformat())\nprint(\"تهران :\", utc.astimezone(tehran).isoformat())\n\nnaive = datetime(2026, 10, 3, 12, 0)\ntry:\n    naive < utc\nexcept TypeError as e:\n    print(\"خطا:\", e)\n\nd = datetime.fromisoformat(\"2026-01-31\")\nprint(\"۳۰ روز بعد:\", (d + timedelta(days=30)).date())\ndelta = datetime(2026, 12, 25) - datetime(2026, 10, 3)\nprint(\"فاصله:\", delta.days, \"روز |\", delta.total_seconds() / 3600, \"ساعت\")\nprint(utc.strftime(\"%Y/%m/%d %H:%M\"), \"| روز هفته:\", utc.strftime(\"%A\"), utc.weekday())"
    },
    {
     "title": "logging حرفه‌ای: سطح، Formatter و Handler",
     "content": "<p><code>print</code> برای تولید کافی نیست. <code>logging</code> سطح (DEBUG..CRITICAL)، قالب، مقصد (فایل/کنسول) و فیلتر دارد. هر ماژول <code>logging.getLogger(__name__)</code> می‌گیرد و پیکربندی فقط یک بار در نقطه‌ی ورود انجام می‌شود. <b>قاعده:</b> از <code>logger.info('x=%s', x)</code> استفاده کن نه f-string (قالب‌بندی تنبل)؛ و برای خطا <code>logger.exception</code> که traceback را ثبت می‌کند. اطلاعات حساس (رمز/توکن) را هرگز لاگ نکن.</p>",
     "exercise": "سطح handler را WARNING کن و ببین کدام پیام‌ها می‌مانند.",
     "py": "import logging, io\n\nstream = io.StringIO()\nhandler = logging.StreamHandler(stream)\nhandler.setFormatter(logging.Formatter(\"%(levelname)-8s %(name)s: %(message)s\"))\nlog = logging.getLogger(\"shop.orders\")\nlog.setLevel(logging.DEBUG)\nlog.addHandler(handler)\nlog.propagate = False\n\nlog.debug(\"جزئیات: %s\", {\"id\": 7})\nlog.info(\"سفارش %d ثبت شد\", 7)\nlog.warning(\"موجودی کم: %s\", \"قهوه\")\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    log.exception(\"خطا در محاسبه\")\nout = stream.getvalue().splitlines()\nprint(\"\\n\".join(out[:4]))\nprint(\"... خطوط traceback:\", len(out) - 4)\nprint(\"سطح مؤثر:\", logging.getLevelName(log.getEffectiveLevel()))"
    },
    {
     "title": "enum: Enum، IntEnum، Flag و StrEnum",
     "content": "<p>به‌جای «رشته‌ی جادویی» مثل <code>'pending'</code> از <code>Enum</code> استفاده کن: غلط املایی خطا می‌دهد و IDE تکمیل می‌کند. <code>IntEnum</code> با اعداد مقایسه می‌شود، <code>StrEnum</code> (۳٫۱۱+) مثل رشته رفتار می‌کند (JSON و دیتابیس) و <code>Flag</code> ترکیب بیتی دسترسی‌ها (<code>READ | WRITE</code>) را می‌دهد. <code>auto()</code> مقدار خودکار می‌سازد و با <code>Status(value)</code> از مقدار به عضو برمی‌گردی.</p>",
     "exercise": "یک Flag برای دسترسی‌های خواندن/نوشتن/اجرا بساز.",
     "py": "from enum import Enum, IntEnum, Flag, StrEnum, auto\n\nclass Status(StrEnum):\n    PENDING = auto()\n    PAID = auto()\nprint(Status.PAID, Status(\"pending\"), Status.PAID == \"paid\")\n\nclass Level(IntEnum):\n    LOW = 1; HIGH = 3\nprint(Level.HIGH > Level.LOW, Level.HIGH + 1)\n\nclass Perm(Flag):\n    R = auto(); W = auto(); X = auto()\np = Perm.R | Perm.W\nprint(p, Perm.W in p, Perm.X in p, [m.name for m in Perm if m in p])\n\ntry:\n    Status(\"nope\")\nexcept ValueError as e:\n    print(\"خطا:\", e)\nprint(list(Status), Status.__members__.keys())"
    },
    {
     "title": "کپی، تغییرپذیری و تله‌های is در برابر ==",
     "content": "<p>متغیر در پایتون «نام» است که به شیء اشاره می‌کند. <code>b = a</code> کپی نمی‌سازد. <code>copy.copy</code> (کپی سطحی) فقط لایه‌ی اول را کپی می‌کند و <code>deepcopy</code> همه را. دو تله‌ی کلاسیک: ۱) پارامتر پیش‌فرض تغییرپذیر (<code>def f(x=[])</code>) که بین فراخوانی‌ها مشترک می‌ماند؛ ۲) <code>[[0]*3]*3</code> که سه ردیف یکسان می‌سازد. <code>==</code> برابری مقدار، <code>is</code> برابری هویت شیء است؛ فقط برای <code>None</code> از <code>is</code> استفاده کن.</p>",
     "exercise": "تابع را طوری درست کن که با x=None کار کند.",
     "py": "import copy\n\na = [[1, 2], [3]]\nb = a\nc = copy.copy(a)\nd = copy.deepcopy(a)\na[0].append(99)\nprint(\"b:\", b, \"| سطحی:\", c, \"| عمیق:\", d)\n\ndef bad(x, acc=[]):\n    acc.append(x); return acc\nprint(bad(1), bad(2), \"← مشترک!\")\ndef good(x, acc=None):\n    acc = [] if acc is None else acc\n    acc.append(x); return acc\nprint(good(1), good(2))\n\ngrid = [[0] * 2] * 2\ngrid[0][0] = 5\nprint(\"تله:\", grid)\nok = [[0] * 2 for _ in range(2)]\nok[0][0] = 5\nprint(\"درست:\", ok)\n\nx, y = [1], [1]\nprint(x == y, x is y, id(x) == id(y))"
    },
    {
     "title": "بایت و باینری: bytes، bytearray، memoryview و struct",
     "content": "<p><code>str</code> متن است و <code>bytes</code> دنباله‌ی بایت. تبدیل با <code>encode/decode</code> و نام کدگذاری (UTF-8). <code>bytes</code> تغییرناپذیر و <code>bytearray</code> تغییرپذیر است. <code>memoryview</code> بدون کپی روی بافر برش می‌زند (برای فایل‌های بزرگ). <code>struct.pack/unpack</code> داده‌ی دودویی با قالب ثابت (پروتکل شبکه، فرمت فایل) می‌سازد: <code>&lt;</code> little-endian، <code>&gt;</code> big-endian، <code>I</code> عدد ۴ بایتی، <code>H</code> دو بایتی.</p>",
     "exercise": "یک هدر ۸ بایتی با نسخه و طول بسته‌بندی کن.",
     "py": "import struct\n\ns = \"سلام\"\nb = s.encode(\"utf-8\")\nprint(len(s), len(b), b, b.decode(\"utf-8\"))\ntry:\n    b.decode(\"ascii\")\nexcept UnicodeDecodeError as e:\n    print(\"خطای ascii:\", e.reason)\n\nba = bytearray(b\"hello\")\nba[0] = ord(\"J\")\nprint(ba, bytes(ba))\n\nbig = bytes(range(10))\nmv = memoryview(big)[2:6]\nprint(list(mv), \"بدون کپی:\", mv.obj is big)\n\nhdr = struct.pack(\">HHI\", 1, 2, 3000)\nprint(hdr.hex(), struct.calcsize(\">HHI\"), struct.unpack(\">HHI\", hdr))\nprint(struct.pack(\"<I\", 1).hex(), struct.pack(\">I\", 1).hex())"
    },
    {
     "title": "argparse: ساخت ابزار خط فرمان",
     "content": "<p>ابزار خط فرمان حرفه‌ای آرگومان‌ها را با <code>argparse</code> می‌گیرد: آرگومان موضعی، گزینه‌ی <code>--flag</code>، نوع (<code>type=int</code>)، <code>choices</code>، <code>default</code>، <code>action='store_true'</code> و زیرفرمان‌ها (<code>add_subparsers</code>) مثل <code>git commit</code>. <code>parse_args(list)</code> برای تست بدون خط فرمان واقعی. در خطا پیام کمک خودکار چاپ و با کد خروج ۲ تمام می‌شود.</p>",
     "exercise": "یک زیرفرمان delete با آرگومان id اضافه کن.",
     "py": "import argparse\n\ndef build():\n    p = argparse.ArgumentParser(prog=\"todo\")\n    p.add_argument(\"-v\", \"--verbose\", action=\"store_true\")\n    sub = p.add_subparsers(dest=\"cmd\", required=True)\n    add = sub.add_parser(\"add\")\n    add.add_argument(\"title\")\n    add.add_argument(\"--prio\", type=int, choices=[1, 2, 3], default=2)\n    sub.add_parser(\"list\")\n    return p\n\np = build()\nprint(p.parse_args([\"-v\", \"add\", \"خرید\", \"--prio\", \"1\"]))\nprint(p.parse_args([\"list\"]))\nimport io, contextlib\ntry:\n    with contextlib.redirect_stderr(io.StringIO()):\n        p.parse_args([\"add\", \"x\", \"--prio\", \"9\"])\nexcept SystemExit as e:\n    print(\"خروج با کد\", e.code, \"(prio نامعتبر)\")"
    },
    {
     "title": "unittest و mock: تست بدون وابستگی خارجی",
     "content": "<p>تست خوب سریع و ایزوله است. وابستگی‌های کند یا غیرقطعی (شبکه، ساعت، دیتابیس) را با <code>unittest.mock</code> جایگزین کن: <code>Mock</code> رفتار ساختگی، <code>patch</code> جایگزینی موقت یک نام (در محلی که <b>استفاده می‌شود</b> نه محل تعریف)، <code>side_effect</code> برای خطا یا چند مقدار پشت‌سرهم، و <code>assert_called_once_with</code> برای راستی‌آزمایی تعامل. تست را روی «رفتار» بنویس نه جزئیات پیاده‌سازی.</p>",
     "exercise": "تستی بنویس که خطای شبکه را شبیه‌سازی کند.",
     "py": "import unittest\nfrom unittest.mock import patch, Mock\n\ndef get_price(client, sku):\n    r = client.fetch(sku)\n    if r is None:\n        raise LookupError(sku)\n    return round(r[\"price\"] * 1.09, 2)\n\nclass T(unittest.TestCase):\n    def test_tax(self):\n        c = Mock(); c.fetch.return_value = {\"price\": 100}\n        self.assertEqual(get_price(c, \"A1\"), 109.0)\n        c.fetch.assert_called_once_with(\"A1\")\n    def test_missing(self):\n        c = Mock(); c.fetch.return_value = None\n        with self.assertRaises(LookupError):\n            get_price(c, \"ZZ\")\n    def test_side_effect(self):\n        c = Mock(); c.fetch.side_effect = [{\"price\": 10}, TimeoutError()]\n        self.assertEqual(get_price(c, \"a\"), 10.9)\n        with self.assertRaises(TimeoutError):\n            get_price(c, \"a\")\n    def test_patch_time(self):\n        with patch(\"time.time\", return_value=1000.0):\n            import time\n            self.assertEqual(time.time(), 1000.0)\n\nsuite = unittest.defaultTestLoader.loadTestsFromTestCase(T)\nimport io\nres = unittest.TextTestRunner(verbosity=0, stream=io.StringIO()).run(suite)\nprint(\"اجرا:\", res.testsRun, \"| شکست:\", len(res.failures), \"| خطا:\", len(res.errors))"
    },
    {
     "title": "مرتب‌سازی پیشرفته: key، operator و پایداری",
     "content": "<p><code>sorted</code> و <code>list.sort</code> <b>پایدار</b> (stable) هستند: اعضای برابر ترتیب اولیه را حفظ می‌کنند. پس می‌توان چند کلید را با چند مرتب‌سازی پشت‌سرهم (از کم‌اهمیت به پراهمیت) اعمال کرد. <code>key</code> یک تابع است؛ <code>operator.itemgetter</code>/<code>attrgetter</code> سریع‌ترند. برای کلید چندگانه با جهت‌های متفاوت: تاپل با علامت منفی برای اعداد. <code>cmp_to_key</code> مقایسه‌گر قدیمی را تبدیل می‌کند.</p>",
     "exercise": "بر اساس طول نام نزولی و سپس الفبایی مرتب کن.",
     "py": "from operator import itemgetter, attrgetter\nfrom functools import cmp_to_key\n\nrows = [\n    {\"name\": \"سارا\", \"dept\": \"فنی\", \"age\": 30},\n    {\"name\": \"علی\",  \"dept\": \"مالی\", \"age\": 25},\n    {\"name\": \"رضا\",  \"dept\": \"فنی\", \"age\": 25},\n    {\"name\": \"نیما\", \"dept\": \"مالی\", \"age\": 30},\n]\nr = sorted(rows, key=itemgetter(\"dept\", \"age\"))\nprint([x[\"name\"] for x in r])\nr = sorted(rows, key=lambda x: (x[\"dept\"], -x[\"age\"]))\nprint(\"dept↑ age↓:\", [x[\"name\"] for x in r])\n\n# پایداری: ابتدا کلید فرعی، سپس اصلی\ns = sorted(rows, key=itemgetter(\"name\"))\ns = sorted(s, key=itemgetter(\"age\"))\nprint(\"پایدار:\", [(x[\"age\"], x[\"name\"]) for x in s])\n\ncmp = lambda a, b: (len(a) > len(b)) - (len(a) < len(b))\nprint(sorted([\"ccc\", \"a\", \"bb\"], key=cmp_to_key(cmp)))\nprint(max(rows, key=itemgetter(\"age\"))[\"name\"], min(rows, key=lambda x: x[\"age\"])[\"name\"])"
    },
    {
     "title": "زنجیره‌ی استثنا: raise from، add_note و ExceptionGroup",
     "content": "<p>وقتی خطای سطح پایین را به خطای معنادار بالاتر تبدیل می‌کنی، <code>raise NewError(...) from e</code> علت را در <code>__cause__</code> نگه می‌دارد تا traceback کامل بماند. <code>raise ... from None</code> زنجیره را پنهان می‌کند. از پایتون ۳٫۱۱: <code>e.add_note()</code> یادداشت متنی اضافه می‌کند و <code>ExceptionGroup</code> با <code>except*</code> چند خطای هم‌زمان (مثلاً در asyncio.TaskGroup) را جداگانه مدیریت می‌کند. خطای سفارشی را از <code>Exception</code> بساز نه <code>BaseException</code>.</p>",
     "exercise": "یک خطای سفارشی ConfigError بساز و علتش را حفظ کن.",
     "py": "class ConfigError(Exception): pass\n\ndef load(txt):\n    try:\n        return int(txt)\n    except ValueError as e:\n        raise ConfigError(f\"مقدار نامعتبر: {txt!r}\") from e\n\ntry:\n    load(\"abc\")\nexcept ConfigError as e:\n    print(e, \"| علت:\", type(e.__cause__).__name__)\n\ntry:\n    try:\n        1 / 0\n    except ZeroDivisionError as e:\n        e.add_note(\"هنگام محاسبه‌ی نرخ\")\n        raise\nexcept ZeroDivisionError as e:\n    print(e.__notes__)\n\ntry:\n    raise ExceptionGroup(\"چند خطا\", [ValueError(\"الف\"), TypeError(\"ب\"), ValueError(\"ج\")])\nexcept* ValueError as g:\n    print(\"ValueError ها:\", [str(x) for x in g.exceptions])\nexcept* TypeError as g:\n    print(\"TypeError ها:\", [str(x) for x in g.exceptions])"
    },
    {
     "title": "یونیکد در پایتون: unicodedata و نرمال‌سازی فارسی",
     "content": "<p><code>str</code> پایتون ۳ یونیکد است، ولی «ی» عربی (U+064A) با «ی» فارسی (U+06CC) و «ک» عربی (U+0643) با «ک» فارسی (U+06A9) فرق دارند؛ جست‌وجو و مقایسه را می‌شکند. <code>unicodedata.normalize('NFC', s)</code> شکل ترکیبی را یکسان می‌کند، <code>unicodedata.name(ch)</code> نام کاراکتر را می‌دهد، و <code>str.translate</code> با جدول نگاشت، یکسان‌سازی سریع (ی/ک/ارقام) را انجام می‌دهد. ZWNJ (نیم‌فاصله، U+200C) کاراکتر نامرئی مهم است.</p>",
     "exercise": "تابع normalize را طوری توسعه بده که نیم‌فاصله را هم به فاصله تبدیل کند.",
     "py": "import unicodedata\n\na, b = \"علي\", \"علی\"\nprint(a == b, [hex(ord(c)) for c in a], [hex(ord(c)) for c in b])\nprint(unicodedata.name(\"ي\"), \"|\", unicodedata.name(\"ی\"))\n\ntable = str.maketrans({\"ي\": \"ی\", \"ك\": \"ک\", **{c: str(i) for i, c in enumerate(\"۰۱۲۳۴۵۶۷۸۹\")},\n                       **{c: str(i) for i, c in enumerate(\"٠١٢٣٤٥٦٧٨٩\")}})\ndef norm(s): return unicodedata.normalize(\"NFC\", s).translate(table)\nprint(norm(a) == norm(b), norm(\"۱۲۳ ٤٥٦\"))\n\nzw = \"می\\u200cخواهم\"\nprint(len(zw), zw, \"|\", \"\\u200c\" in zw, zw.replace(\"\\u200c\", \" \"))\nprint(unicodedata.category(\"a\"), unicodedata.category(\"1\"), unicodedata.category(\"\\u200c\"))\ne1, e2 = \"é\", \"e\\u0301\"\nprint(e1 == e2, unicodedata.normalize(\"NFC\", e2) == e1, len(e2))"
    },
    {
     "title": "graphlib: مرتب‌سازی توپولوژیک و وابستگی‌ها",
     "content": "<p>وقتی کارها به هم وابسته‌اند (نصب بسته‌ها، ترتیب ساخت، migrationها)، ترتیب اجرا باید وابستگی‌ها را رعایت کند: <b>مرتب‌سازی توپولوژیک</b>. ماژول <code>graphlib.TopologicalSorter</code> این را انجام می‌دهد و در صورت <b>حلقه</b> خطای <code>CycleError</code> می‌دهد. با <code>prepare()</code> و <code>get_ready()</code> / <code>done()</code> کارهای مستقل را هم‌زمان قابل‌اجرا می‌یابی (موازی‌سازی).</p>",
     "exercise": "یک وابستگی حلقه‌ای اضافه کن و خطا را ببین.",
     "py": "from graphlib import TopologicalSorter, CycleError\n\ndeps = {\n    \"app\": {\"lib\", \"db\"},\n    \"lib\": {\"core\"},\n    \"db\": {\"core\"},\n    \"core\": set(),\n}\nts = TopologicalSorter(deps)\nprint(\"ترتیب:\", list(ts.static_order()))\n\nts = TopologicalSorter(deps)\nts.prepare()\nwave = 1\nwhile ts.is_active():\n    ready = sorted(ts.get_ready())\n    print(\"موج\", wave, \"(هم‌زمان قابل اجرا):\", ready)\n    ts.done(*ready)\n    wave += 1\n\nbad = TopologicalSorter({\"a\": {\"b\"}, \"b\": {\"c\"}, \"c\": {\"a\"}})\ntry:\n    list(bad.static_order())\nexcept CycleError as e:\n    print(\"حلقه:\", e.args[1])"
    },
    {
     "title": "doctest: مستندات اجرا‌شدنی",
     "content": "<p>مثال‌های داخل docstring که با <code>&gt;&gt;&gt;</code> شروع می‌شوند را <code>doctest</code> اجرا و خروجی را مقایسه می‌کند؛ یعنی مستندات همیشه با کد هم‌خوان می‌مانند. برای توابع کوچک و خالص عالی است، ولی جایگزین تست‌های کامل نیست. اجرا: <code>python -m doctest file.py</code> یا <code>doctest.testmod()</code>. نکته: خروجی باید دقیق باشد (فاصله‌ها)، و <code>ELLIPSIS</code> یا <code>NORMALIZE_WHITESPACE</code> انعطاف می‌دهد.</p>",
     "exercise": "یک مثال غلط بنویس و پیام شکست doctest را بخوان.",
     "py": "import doctest, io, contextlib\n\ndef slugify(s):\n    '''\n    >>> slugify(\"Hello World\")\n    'hello-world'\n    >>> slugify(\"  a  b \")\n    'a-b'\n    >>> slugify(\"\")\n    ''\n    '''\n    return \"-\".join(s.lower().split())\n\ndef broken(x):\n    '''\n    >>> broken(2)\n    5\n    '''\n    return x * 2\n\nbuf = io.StringIO()\nwith contextlib.redirect_stdout(buf):\n    r1 = doctest.run_docstring_examples(slugify, {\"slugify\": slugify}, verbose=False)\nprint(\"slugify بدون خروجی خطا:\", buf.getvalue() == \"\")\n\nfinder = doctest.DocTestFinder()\nrunner = doctest.DocTestRunner(verbose=False)\nbuf = io.StringIO()\nfor t in finder.find(broken, \"broken\", globs={\"broken\": broken}):\n    runner.run(t, out=buf.write)\nprint(\"شکست:\", runner.failures, \"از\", runner.tries)\nprint(buf.getvalue().strip().splitlines()[-3:])"
    }
   ],
   "quiz": [
    {
     "q": "استفاده از with open(...) as f نسبت به open() ساده چه مزیتی دارد؟",
     "options": [
      "سریع‌تر است",
      "فایل را خودکار (حتی در صورت خطا) می‌بندد",
      "فقط برای CSV کار می‌کند",
      "نیازی به بستن فایل نیست چون فایلی باز نمی‌شود"
     ],
     "answer": 1,
     "explain": "with یک Context Manager است که تضمین می‌کند فایل در پایان بلوک بسته شود."
    },
    {
     "q": "json.dumps() چه کاری انجام می‌دهد؟",
     "options": [
      "یک فایل JSON را می‌خواند",
      "یک دیکشنری پایتون را به متن JSON تبدیل می‌کند",
      "یک متن JSON را به دیکشنری تبدیل می‌کند",
      "یک فایل CSV می‌سازد"
     ],
     "answer": 1,
     "explain": "dumps یعنی dump to string — تبدیل داده به رشتهٔ JSON."
    },
    {
     "q": "*args در تعریف یک تابع به چه معناست؟",
     "options": [
      "فقط یک آرگومان اجباری",
      "تعداد نامحدودی آرگومان موقعیتی که به‌صورت تاپل جمع می‌شوند",
      "آرگومان کلیدی",
      "نوع داده‌ای خاص"
     ],
     "answer": 1,
     "explain": "*args به تابع اجازه می‌دهد هر تعداد آرگومان موقعیتی بگیرد."
    },
    {
     "q": "csv.DictReader برای هر ردیف چه خروجی‌ای می‌دهد؟",
     "options": [
      "یک رشتهٔ خام",
      "یک دیکشنری با کلید برابر نام ستون‌ها",
      "یک عدد",
      "یک تاپل بدون کلید"
     ],
     "answer": 1,
     "explain": "این باعث می‌شود با نام ستون (مثل row['name']) به مقدار دسترسی داشته باشید، نه با اندیس."
    },
    {
     "q": "چرا در پایتون برای محاسبات سنگین CPU از multiprocessing به‌جای threading استفاده می‌شود؟",
     "options": [
      "threading اصلاً وجود ندارد",
      "به‌خاطر GIL، چند Thread نمی‌توانند واقعاً هم‌زمان روی چند هستهٔ CPU اجرا شوند",
      "multiprocessing سریع‌تر نوشته می‌شود",
      "تفاوتی ندارند"
     ],
     "answer": 1,
     "explain": "multiprocessing با Processهای کاملاً مستقل این محدودیت را دور می‌زند."
    },
    {
     "q": "@dataclass چه کاری می‌کند؟",
     "options": [
      "__init__ و __repr__ را خودکار می‌سازد",
      "سرعت را زیاد می‌کند",
      "فایل می‌خواند",
      "تست می‌نویسد"
     ],
     "answer": 0,
     "explain": "برای کلاس‌های داده‌ای مناسب است."
    },
    {
     "q": "ساختار استاندارد پکیج پایتونی کدام فایل را لازم دارد؟",
     "options": [
      "pyproject.toml",
      "index.html",
      "package.json",
      "Makefile.js"
     ],
     "answer": 0,
     "explain": "نام، نسخه و وابستگی‌ها آنجا ثبت می‌شود."
    },
    {
     "q": "Descriptor چیست؟",
     "options": [
      "شیئی که دسترسی به صفت را با __get__/__set__ کنترل می‌کند",
      "نوع داده",
      "ماژول",
      "دکوراتور"
     ],
     "answer": 0,
     "explain": "property هم یک Descriptor است."
    },
    {
     "q": "برای CPU سنگین کدام بهتر است؟",
     "options": [
      "multiprocessing",
      "thread",
      "asyncio",
      "sleep"
     ],
     "answer": 0,
     "explain": "GIL رشته‌ها را محدود می‌کند."
    },
    {
     "q": "wraps چه کاری می‌کند؟",
     "options": [
      "نام و docstring تابع اصلی را حفظ می‌کند",
      "سرعت را زیاد می‌کند",
      "خطا می‌گیرد",
      "نوع را عوض می‌کند"
     ],
     "answer": 0,
     "explain": "برای دکوراتورها لازم است."
    },
    {
     "q": "Protocol در typing چیست؟",
     "options": [
      "توصیف ساختار بدون وراثت",
      "نوع عددی",
      "ماژول تست",
      "دیتابیس"
     ],
     "answer": 0,
     "explain": "duck typing ایستا."
    },
    {
     "q": "چرا برای صف با حذف از ابتدا deque بهتر از list است؟",
     "options": [
      "popleft در deque از مرتبه‌ی O(1) است ولی pop(0) در list از O(n)",
      "چون deque مرتب است",
      "چون deque کوچک‌تر است",
      "چون list صف نمی‌پذیرد"
     ],
     "answer": 0,
     "explain": "لیست با حذف از ابتدا همه‌ی عناصر را جابه‌جا می‌کند."
    },
    {
     "q": "برای پول در پایتون Decimal را چگونه بسازیم؟",
     "options": [
      "از رشته: Decimal('19.99')",
      "از float: Decimal(19.99)",
      "از عدد منفی",
      "با round"
     ],
     "answer": 0,
     "explain": "ساختن از float خطای دودویی را وارد می‌کند؛ از رشته بساز."
    },
    {
     "q": "کدام تله‌ی پارامتر پیش‌فرض را می‌سازد؟",
     "options": [
      "def f(x, acc=[])",
      "def f(x, acc=None)",
      "def f(x, acc=0)",
      "def f(x, acc='')"
     ],
     "answer": 0,
     "explain": "لیست پیش‌فرض یک بار ساخته می‌شود و بین فراخوانی‌ها مشترک می‌ماند."
    },
    {
     "q": "raise NewError(...) from e چه کاری می‌کند؟",
     "options": [
      "علت اصلی را در __cause__ نگه می‌دارد",
      "خطا را نادیده می‌گیرد",
      "برنامه را متوقف می‌کند",
      "traceback را حذف می‌کند"
     ],
     "answer": 0,
     "explain": "زنجیره‌ی علت‌ها دیباگ را ساده‌تر می‌کند."
    }
   ],
   "challenge": {
    "task": "برنامه‌ای بنویس که یک لیست از دیکشنری‌های محصول (name, price) بسازه، اون رو با json.dumps به یک متن JSON تبدیل کنه و چاپش کنه، بعد همون فایل رو با csv.writer هم به‌صورت یک فایل CSV بنویسه و دوباره با DictReader بخونتش.",
    "hint1": "برای نوشتن چند محصول در csv.writer، باید روی لیست دیکشنری‌ها حلقه بزنی و هر بار writerow صدا بزنی (یا از csv.DictWriter استفاده کنی).",
    "hint2": "csv.DictWriter نیاز به fieldnames داره (لیست اسم ستون‌ها) و متد writeheader() برای نوشتن سطر اول.",
    "solution": "import csv, json\n\nproducts = [{\"name\": \"کتاب\", \"price\": 120000}, {\"name\": \"دفتر\", \"price\": 30000}]\n\nprint(json.dumps(products, ensure_ascii=False))\n\nwith open(\"products.csv\", \"w\", newline=\"\") as f:\n    writer = csv.DictWriter(f, fieldnames=[\"name\", \"price\"])\n    writer.writeheader()\n    for p in products:\n        writer.writerow(p)\n\nwith open(\"products.csv\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row)"
   }
  }
 ],
 "project": {
  "title": "مدیریت کتابخانهٔ شخصی (CLI)",
  "brief": "برنامه‌ای بساز که لیست کتاب‌های شخصی رو مدیریت کنه: افزودن کتاب (نام، نویسنده، وضعیت خونده‌شده/نشده)، نمایش لیست، جستجو بر اساس نویسنده، و ذخیره/بازیابی لیست از یک فایل JSON یا CSV تا با بستن برنامه از بین نره.",
  "requirements": [
   "از کلاس Book (OOP) برای نمایش هر کتاب استفاده کن",
   "حداقل ۴ عملیات: افزودن، نمایش همه، جستجو، ذخیره در فایل",
   "با try/except جلوی خطاهای احتمالی (مثل فایل ناموجود هنگام اولین اجرا) رو بگیر",
   "از List Comprehension حداقل یک‌بار برای فیلترکردن کتاب‌ها استفاده کن"
  ],
  "hints": [
   "اول فقط با یک لیست ساده در حافظه کار کن تا منطق برنامه درست کار کنه، بعد قابلیت ذخیره در فایل رو اضافه کن."
  ]
 }
});
