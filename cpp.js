(window.COURSES=window.COURSES||[]).push({
 "id": "cpp",
 "name": "++C — پایه تا فوق‌پیشرفته",
 "icon": "➕",
 "kind": "theory",
 "desc": "C به‌علاوهٔ شیءگرایی — زبان اصلی موتورهای بازی، نرم‌افزارهای مالی پرسرعت و سیستم‌های بزرگ",
 "covers": [
  "Syntax، Variable، Condition، Loop، Function، Array، String",
  "Pointer/Reference، Struct، Class، Constructor/Destructor، OOP",
  "Inheritance، Polymorphism، Template، STL، Exception Handling",
  "Modern C++: Lambda، Smart Pointer، RAII، Move Semantics",
  "Multithreading، Design Patterns، Performance",
  "Memory Model، Graphics (OpenGL/Vulkan)، Unreal Engine"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "Syntax، متغیرها و Overload کردن تابع",
     "content": "<p>سینتکس پایهٔ C++ (متغیر، if/else، حلقه) تقریباً عین C است. یک قابلیت مهم C++ که در C نیست: <b>Function Overloading</b> — می‌توانید چند تابع با یک اسم ولی پارامترهای متفاوت تعریف کنید؛ کامپایلر بر اساس تعداد/نوع آرگومان‌ها تصمیم می‌گیرد کدام را صدا بزند.</p><div class='code-block'><div class='cb-head'>overload.cpp</div><pre><code>int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\n\nint main() {\n    cout << add(2, 3) << endl;       // نسخهٔ int\n    cout << add(2.5, 3.1) << endl;   // نسخهٔ double\n    return 0;\n}</code></pre></div>",
     "exercise": "یک تابع multiply بنویس که هم نسخهٔ int بگیره هم نسخهٔ سه‌پارامتری (برای ضرب سه عدد) — این یعنی دو Overload مختلف."
    },
    {
     "title": "حلقه‌ها، آرایه و Range-based For",
     "content": "<p>علاوه بر حلقهٔ for معمولی، C++11 به بعد <b>Range-based For</b> اضافه کرد که پیمایش آرایه/کالکشن را ساده‌تر می‌کند — دیگر نیازی به شمارنده و اندیس دستی نیست.</p><div class='code-block'><div class='cb-head'>range_for.cpp</div><pre><code>int numbers[5] = {10, 20, 30, 40, 50};\n\n// روش قدیمی:\nfor (int i = 0; i < 5; i++) cout << numbers[i] << \" \";\n\n// روش مدرن:\nfor (int n : numbers) cout << n << \" \";</code></pre></div>",
     "exercise": "با range-based for، مجموع اعضای یک آرایه از ۵ عدد رو حساب کن."
    },
    {
     "title": "std::string: رشته‌های واقعی (نه آرایهٔ char)",
     "content": "<p>برخلاف C که رشته فقط آرایه‌ای از char بود، C++ نوع <code class='inline'>std::string</code> واقعی دارد — با متدهای آماده مثل <code class='inline'>.length()</code>، <code class='inline'>.substr()</code>، و عملگر <code class='inline'>+</code> برای اتصال دو رشته (که در C باید با strcat دستی انجام می‌شد).</p><div class='code-block'><div class='cb-head'>string.cpp</div><pre><code>string first = \"سارا\";\nstring last = \"احمدی\";\nstring full = first + \" \" + last;\ncout << full << \" - طول: \" << full.length() << endl;</code></pre></div>",
     "exercise": "دو رشته برای اسم و فامیل بساز، بهم بچسبونشون، و طول نتیجه رو چاپ کن."
    }
   ],
   "quiz": [
    {
     "q": "Function Overloading یعنی چه؟",
     "options": [
      "حذف یک تابع",
      "تعریف چند تابع با یک اسم ولی پارامترهای متفاوت",
      "تغییر اسم تابع",
      "اجرای هم‌زمان چند تابع"
     ],
     "answer": 1,
     "explain": "کامپایلر بر اساس نوع/تعداد آرگومان تصمیم می‌گیرد کدام نسخه اجرا شود."
    },
    {
     "q": "Range-based For نسبت به حلقهٔ for معمولی چه مزیتی دارد؟",
     "options": [
      "سریع‌تر اجرا می‌شود",
      "پیمایش آرایه/کالکشن را بدون نیاز به شمارنده و اندیس دستی ساده می‌کند",
      "فقط برای رشته کار می‌کند",
      "جایگزین کامل هر حلقه‌ای است"
     ],
     "answer": 1,
     "explain": "این ویژگی از C++11 به بعد کد را خواناتر می‌کند."
    },
    {
     "q": "std::string نسبت به رشتهٔ سبک C چه مزیتی دارد؟",
     "options": [
      "حجم کمتر",
      "متدهای آماده (مثل length/substr) و اتصال آسان با +",
      "فقط برای اعداد",
      "سریع‌تر کامپایل می‌شود"
     ],
     "answer": 1,
     "explain": "std::string مدیریت حافظه و عملیات رایج رشته را خودکار انجام می‌دهد."
    }
   ],
   "challenge": {
    "task": "تابعی به اسم describe بنویس که دو Overload داشته باشه: یکی که یک int بگیره و بگه 'عدد صحیح: X'، یکی که یک string بگیره و بگه 'متن: X'. با هردو نوع صداش بزن.",
    "hint1": "دو تابع با یک اسم describe ولی امضای پارامتر متفاوت (int در برابر string) تعریف کن.",
    "hint2": "از std::to_string برای تبدیل عدد به رشته در ساخت پیام خروجی استفاده کن.",
    "solution": "void describe(int x) {\n    cout << \"عدد صحیح: \" << x << endl;\n}\nvoid describe(string x) {\n    cout << \"متن: \" << x << endl;\n}\n\nint main() {\n    describe(42);\n    describe(string(\"سلام\"));\n    return 0;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Reference: نام مستعار برای یک متغیر",
     "content": "<p><b>Reference</b> (با <code class='inline'>&amp;</code> در تعریف پارامتر) نام مستعاری برای یک متغیر موجود می‌سازد — برخلاف Pointer، نیازی به Dereference (<code class='inline'>*</code>) ندارد و نمی‌تواند NULL باشد. پاس‌دادن با Reference به تابع اجازه می‌دهد تابع مقدار اصلی را تغییر دهد، بدون سربار کپی‌کردن (مهم برای آبجکت‌های بزرگ).</p><div class='code-block'><div class='cb-head'>reference.cpp</div><pre><code>void increment(int &x) {\n    x = x + 1; // مستقیم روی متغیر اصلی اثر می‌ذاره\n}\n\nint main() {\n    int a = 5;\n    increment(a);\n    cout << a << endl; // 6\n    return 0;\n}</code></pre></div>",
     "exercise": "توضیح بده اگه increment رو بدون & (یعنی void increment(int x)) می‌نوشتی، چرا مقدار a توی main تغییر نمی‌کرد."
    },
    {
     "title": "Struct در برابر Class",
     "content": "<p>در C++، <code class='inline'>struct</code> و <code class='inline'>class</code> عملاً یک چیزند با یک تفاوت پیش‌فرض: اعضای struct به‌طور پیش‌فرض <code class='inline'>public</code> هستند، اعضای class به‌طور پیش‌فرض <code class='inline'>private</code>. قرارداد رایج: struct برای داده‌های ساده (بدون منطق پیچیده)، class برای آبجکت‌هایی با رفتار و کپسوله‌سازی.</p>",
     "exercise": "یک struct Point با x و y بساز و یک class BankAccount با یک متغیر private balance و یک متد public getBalance() — تفاوت دسترسی رو با کامپایل امتحان کن."
    },
    {
     "title": "Constructor و Destructor",
     "content": "<p><b>Constructor</b> (هم‌نام کلاس) هنگام ساخت هر نمونهٔ جدید خودکار اجرا می‌شود — برای مقداردهی اولیه. <b>Destructor</b> (با <code class='inline'>~</code> قبل از اسم کلاس) هنگام از‌بین‌رفتن آبجکت خودکار اجرا می‌شود — برای پاک‌سازی (مثل آزادکردن حافظه‌ای که با new گرفته شده).</p><div class='code-block'><div class='cb-head'>constructor.cpp</div><pre><code>class Logger {\npublic:\n    Logger() { cout << \"Logger ساخته شد\" << endl; }\n    ~Logger() { cout << \"Logger نابود شد\" << endl; }\n};\n\nint main() {\n    Logger l;\n    cout << \"در حال کار...\" << endl;\n    return 0; // اینجا دقیقاً destructor خودکار صدا زده می‌شه\n}</code></pre></div>",
     "exercise": "یک کلاس FileHandler بساز که توی constructor بگه 'فایل باز شد' و توی destructor بگه 'فایل بسته شد' — این الگو (RAII) رو بعداً عمیق‌تر می‌بینی."
    },
    {
     "title": "Encapsulation و Inheritance",
     "content": "<p><b>Encapsulation</b> یعنی پنهان‌کردن جزئیات داخلی یک کلاس (با private) و فقط نمایش یک رابط عمومی (public methods) — کاربر کلاس نباید نگران پیاده‌سازی داخلی باشد. <b>Inheritance</b> اجازه می‌دهد یک کلاس فرزند، ویژگی/متدهای کلاس والد را به ارث ببرد و فقط تفاوت‌ها را اضافه کند.</p><div class='code-block'><div class='cb-head'>inheritance.cpp</div><pre><code>class Animal {\npublic:\n    string name;\n    Animal(string n) : name(n) {}\n    void eat() { cout << name << \" داره غذا می‌خوره\" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(string n) : Animal(n) {} // صدازدن constructor والد\n    void bark() { cout << name << \": واق واق!\" << endl; }\n};\n\nint main() {\n    Dog d(\"رکس\");\n    d.eat();  // ارث‌برده از Animal\n    d.bark(); // مخصوص Dog\n    return 0;\n}</code></pre></div>",
     "exercise": "یک کلاس Cat هم از Animal مشتق کن با یک متد meow() مخصوص خودش."
    },
    {
     "title": "Polymorphism با Virtual Function",
     "content": "<p>برای این‌که یک متد در کلاس فرزند واقعاً «جایگزین» رفتار والد بشه (نه فقط یک متد جدا)، باید در والد با کلیدواژهٔ <code class='inline'>virtual</code> علامت‌گذاری شود. این باعث می‌شود وقتی از طریق یک Pointer/Reference به والد، متد صدا زده می‌شود، نسخهٔ واقعی فرزند اجرا شود — این هستهٔ Polymorphism در C++ است.</p><div class='code-block'><div class='cb-head'>polymorphism.cpp</div><pre><code>class Shape {\npublic:\n    virtual double area() { return 0; }\n};\n\nclass Circle : public Shape {\npublic:\n    double radius;\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n};\n\nint main() {\n    Shape *s = new Circle(5);\n    cout << s->area() << endl; // مساحت دایره، نه 0!\n    delete s;\n    return 0;\n}</code></pre></div>",
     "exercise": "توضیح بده اگه کلمهٔ virtual رو از area() توی Shape حذف کنی، خروجی s->area() چی می‌شه و چرا (نکته: بدون virtual، Polymorphism کار نمی‌کنه)."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت پیش‌فرض بین struct و class در C++ چیست؟",
     "options": [
      "تفاوتی ندارند",
      "اعضای struct پیش‌فرض public، اعضای class پیش‌فرض private هستند",
      "struct نمی‌تواند متد داشته باشد",
      "class فقط برای اعداد است"
     ],
     "answer": 1,
     "explain": "این تنها تفاوت فنی پیش‌فرض بین این دو کلیدواژه در C++ است."
    },
    {
     "q": "Destructor چه زمانی خودکار اجرا می‌شود؟",
     "options": [
      "هنگام ساخت آبجکت",
      "هنگام از‌بین‌رفتن (نابودی) آبجکت",
      "هر ثانیه یک‌بار",
      "هرگز خودکار اجرا نمی‌شود"
     ],
     "answer": 1,
     "explain": "Destructor برای پاک‌سازی منابع هنگام پایان عمر آبجکت استفاده می‌شود."
    },
    {
     "q": "کلیدواژهٔ virtual در یک متد والد چه نقشی دارد؟",
     "options": [
      "متد را حذف می‌کند",
      "اجازه می‌دهد نسخهٔ کلاس فرزند از طریق Pointer/Reference والد هم اجرا شود (Polymorphism)",
      "سرعت را زیاد می‌کند",
      "فقط برای Destructor است"
     ],
     "answer": 1,
     "explain": "بدون virtual، همیشه نسخهٔ والد اجرا می‌شود، حتی اگر آبجکت واقعی از نوع فرزند باشد."
    },
    {
     "q": "Reference (با &) نسبت به Pointer چه تفاوتی دارد؟",
     "options": [
      "تفاوتی ندارند",
      "Reference نیازی به Dereference ندارد و نمی‌تواند NULL باشد",
      "Reference کندتر است",
      "Pointer فقط برای اعداد است"
     ],
     "answer": 1,
     "explain": "Reference نام مستعار مستقیم برای یک متغیر موجود است."
    }
   ],
   "challenge": {
    "task": "یک کلاس پایهٔ Employee با متد virtual به اسم calculateSalary() (که 0 برمی‌گردونه) بساز. دو کلاس فرزند FullTimeEmployee و PartTimeEmployee بساز که این متد رو override کنن (مثلاً حقوق ثابت در برابر حقوق ساعتی). بعد یک آرایه/لیست از Pointer به Employee بساز که هم فرزندها رو نگه داره و با یه حلقه calculateSalary همه رو صدا بزن.",
    "hint1": "برای نگه‌داشتن انواع مختلف فرزند در یک لیست، باید از Pointer به کلاس پایه (Employee*) استفاده کنی، نه خودِ آبجکت.",
    "hint2": "یادت نره calculateSalary توی Employee رو virtual تعریف کنی، وگرنه Polymorphism کار نمی‌کنه و همیشه نسخهٔ پایه (0) اجرا می‌شه.",
    "solution": "class Employee {\npublic:\n    virtual double calculateSalary() { return 0; }\n};\nclass FullTimeEmployee : public Employee {\npublic:\n    double calculateSalary() override { return 5000; }\n};\nclass PartTimeEmployee : public Employee {\npublic:\n    double hours;\n    PartTimeEmployee(double h) : hours(h) {}\n    double calculateSalary() override { return hours * 20; }\n};\n\nint main() {\n    Employee* staff[2];\n    staff[0] = new FullTimeEmployee();\n    staff[1] = new PartTimeEmployee(80);\n    for (int i = 0; i < 2; i++) cout << staff[i]->calculateSalary() << endl;\n    return 0;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Template: نوشتن کد مستقل از نوع داده",
     "content": "<p><b>Template</b> اجازه می‌دهد یک تابع یا کلاس بدون مشخص‌کردن نوع دقیق داده نوشته شود — کامپایلر برای هر نوعی که واقعاً استفاده می‌شود، نسخهٔ مخصوص می‌سازد. این معادل C++ همان Generics در TypeScript/جاواست.</p><div class='code-block'><div class='cb-head'>template.cpp</div><pre><code>template &lt;typename T&gt;\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << getMax(3, 7) << endl;       // با int\n    cout << getMax(2.5, 1.1) << endl;   // با double\n    cout << getMax(string(\"ب\"), string(\"آ\")) << endl; // با string\n    return 0;\n}</code></pre></div>",
     "exercise": "یک تابع Template به اسم getMin بنویس (برعکس getMax) و با int و double تستش کن."
    },
    {
     "title": "STL: vector، map و set",
     "content": "<p><b>STL (Standard Template Library)</b> مجموعه‌ای از ساختمان‌داده‌ها و الگوریتم‌های آمادهٔ C++ است. <code class='inline'>vector</code> آرایهٔ پویا (شبیه لیست پایتون)، <code class='inline'>map</code> کلید-مقدار مرتب (شبیه dict)، <code class='inline'>set</code> مجموعهٔ بدون تکرار و مرتب.</p><div class='code-block'><div class='cb-head'>stl.cpp</div><pre><code>#include &lt;vector&gt;\n#include &lt;map&gt;\n#include &lt;set&gt;\n\nvector&lt;int&gt; nums = {5, 2, 8, 1};\nnums.push_back(10);\n\nmap&lt;string, int&gt; ages;\nages[\"سارا\"] = 25;\nages[\"علی\"] = 30;\n\nset&lt;int&gt; uniqueNums = {3, 1, 2, 3, 1}; // فقط {1, 2, 3} می‌مونه\n\nfor (int n : nums) cout << n << \" \";\ncout << endl << ages[\"سارا\"] << endl;\ncout << uniqueNums.size() << endl; // 3</code></pre></div>",
     "exercise": "یک vector از قیمت‌ها بساز، یک map از اسم محصول به قیمت، و یک set که فقط دسته‌بندی‌های یکتا رو نگه داره."
    },
    {
     "title": "Iterator و Algorithm",
     "content": "<p><b>Iterator</b> راهی عمومی برای پیمایش هر کالکشن STL است (بدون دانستن جزئیات داخلی‌اش). کتابخانهٔ <code class='inline'>&lt;algorithm&gt;</code> توابع آمادهٔ زیادی دارد: <code class='inline'>sort()</code>، <code class='inline'>find()</code>، <code class='inline'>count()</code> که مستقیم روی iterator ها کار می‌کنند.</p><div class='code-block'><div class='cb-head'>algorithm.cpp</div><pre><code>#include &lt;algorithm&gt;\n#include &lt;vector&gt;\n\nvector&lt;int&gt; nums = {5, 2, 8, 1, 9};\nsort(nums.begin(), nums.end()); // 1 2 5 8 9\n\nauto it = find(nums.begin(), nums.end(), 8);\nif (it != nums.end()) cout << \"پیدا شد!\" << endl;</code></pre></div>",
     "exercise": "یک vector از نمرات بساز، با sort مرتبش کن (نزولی با sort(v.rbegin(), v.rend())) و با find چک کن نمرهٔ ۲۰ توش هست یا نه."
    },
    {
     "title": "Exception Handling: try/catch/throw",
     "content": "<p>برای مدیریت خطاهای زمان اجرا، کد ریسک‌دار را در <code class='inline'>try</code> می‌گذارید، خطا را با <code class='inline'>throw</code> پرتاب می‌کنید، و در <code class='inline'>catch</code> می‌گیرید — دقیقاً همان الگویی که در پایتون و جاوااسکریپت دیدید.</p><div class='code-block'><div class='cb-head'>exception.cpp</div><pre><code>double safeDivide(double a, double b) {\n    if (b == 0) throw runtime_error(\"تقسیم بر صفر ممکن نیست\");\n    return a / b;\n}\n\nint main() {\n    try {\n        cout << safeDivide(10, 0) << endl;\n    } catch (const runtime_error &e) {\n        cout << \"خطا: \" << e.what() << endl;\n    }\n    return 0;\n}</code></pre></div>",
     "exercise": "تابع safeDivide رو طوری تغییر بده که اگه b منفی بود هم یه خطای دیگه throw کنه ('عدد منفی مجاز نیست')."
    },
    {
     "title": "Smart Pointer و RAII",
     "content": "<p>در C++ قدیمی، فراموش‌کردن <code class='inline'>delete</code> بعد از <code class='inline'>new</code> دقیقاً همان Memory Leak آشنای C بود. <b>Smart Pointer</b> این مشکل را حل می‌کند: <code class='inline'>unique_ptr</code> (فقط یک مالک، خودکار پاک می‌شود) و <code class='inline'>shared_ptr</code> (چند مالک، وقتی آخرین مالک از بین رفت پاک می‌شود) هرگز نیاز به delete دستی ندارند. این الگو، <b>RAII</b> (Resource Acquisition Is Initialization) نام دارد: منبع در constructor گرفته و در destructor خودکار آزاد می‌شود.</p><div class='code-block'><div class='cb-head'>smartptr.cpp</div><pre><code>#include &lt;memory&gt;\n\nclass Resource {\npublic:\n    Resource() { cout << \"منبع گرفته شد\" << endl; }\n    ~Resource() { cout << \"منبع آزاد شد\" << endl; }\n};\n\nint main() {\n    unique_ptr&lt;Resource&gt; r = make_unique&lt;Resource&gt;();\n    cout << \"در حال استفاده...\" << endl;\n    return 0; // اینجا خودکار Resource پاک می‌شه، بدون delete دستی!\n}</code></pre></div>",
     "exercise": "توضیح بده چرا unique_ptr نسبت به new/delete دستی، جلوی Memory Leak رو تضمینی‌تر می‌گیره (نکته: حتی اگه یه exception وسط کد پرتاب بشه)."
    }
   ],
   "quiz": [
    {
     "q": "Template در C++ چه امکانی می‌دهد؟",
     "options": [
      "حذف نوع داده",
      "نوشتن تابع/کلاس مستقل از نوع دقیق داده، با تولید نسخهٔ مخصوص هر نوع توسط کامپایلر",
      "افزایش سرعت اجرا به‌تنهایی",
      "جایگزین کلاس است"
     ],
     "answer": 1,
     "explain": "این معادل Generics در زبان‌های دیگر است."
    },
    {
     "q": "vector در STL معادل کدام ساختار در پایتون است؟",
     "options": [
      "dict",
      "list (آرایهٔ پویا)",
      "set",
      "tuple"
     ],
     "answer": 1,
     "explain": "هر دو آرایهٔ پویا با اندازهٔ قابل‌تغییر هستند."
    },
    {
     "q": "unique_ptr چه مشکلی را حل می‌کند؟",
     "options": [
      "کندی کامپایل",
      "نیاز به delete دستی و ریسک Memory Leak را از بین می‌برد",
      "نوشتن Template را ساده می‌کند",
      "جایگزین vector است"
     ],
     "answer": 1,
     "explain": "unique_ptr هنگام خروج از scope خودکار حافظه را آزاد می‌کند."
    },
    {
     "q": "RAII به چه معناست؟",
     "options": [
      "یک نوع حلقه",
      "الگویی که در آن منبع در constructor گرفته و در destructor خودکار آزاد می‌شود",
      "یک کتابخانهٔ گرافیکی",
      "نوعی Template"
     ],
     "answer": 1,
     "explain": "این الگو پایهٔ مدیریت امن منابع در C++ مدرن است."
    },
    {
     "q": "throw در C++ برای چه استفاده می‌شود؟",
     "options": [
      "تعریف تابع",
      "پرتاب یک خطا/استثنا برای مدیریت در catch",
      "حذف متغیر",
      "ساخت حلقه"
     ],
     "answer": 1,
     "explain": "throw یک Exception ایجاد می‌کند که نزدیک‌ترین catch مناسب آن را می‌گیرد."
    }
   ],
   "challenge": {
    "task": "یک کلاس Template به اسم Box<T> بساز که یک مقدار از نوع T نگه داره، با متد getValue() و setValue(). یک vector<Box<int>> بساز، چندتا Box توش بذار، و با range-based for مقادیرشون رو چاپ کن. اگه توی setValue مقدار منفی داده شد (فقط برای Box<int> منطقی)، یک exception پرتاب کن.",
    "hint1": "class Template اینطوری تعریف می‌شه: template<typename T> class Box { T value; public: ... };",
    "hint2": "برای throw کردن exception، از throw runtime_error(\"...\") استفاده کن و توی main با try/catch بگیرش.",
    "solution": "template <typename T>\nclass Box {\n    T value;\npublic:\n    void setValue(T v) { value = v; }\n    T getValue() { return value; }\n};\n\nint main() {\n    vector<Box<int>> boxes(3);\n    for (int i = 0; i < 3; i++) boxes[i].setValue(i * 10);\n    for (auto &b : boxes) cout << b.getValue() << \" \";\n    return 0;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Lambda Expression: تابع بی‌نام درجا",
     "content": "<p><b>Lambda</b> یک تابع کوچک بی‌نام است که می‌توانید مستقیم در محل استفاده تعریف کنید — بسیار پرکاربرد با الگوریتم‌های STL (مثل شرط سفارشی برای sort). سینتکس: <code class='inline'>[capture](پارامتر) { بدنه }</code>.</p><div class='code-block'><div class='cb-head'>lambda.cpp</div><pre><code>vector&lt;int&gt; nums = {5, 2, 8, 1, 9};\n\n// مرتب‌سازی نزولی با lambda به‌جای تابع جدا:\nsort(nums.begin(), nums.end(), [](int a, int b) {\n    return a > b;\n});\n\nfor (int n : nums) cout << n << \" \"; // 9 8 5 2 1</code></pre></div>",
     "exercise": "یک lambda بنویس که چک کنه یک عدد زوجه، و با count_if از <algorithm> تعداد اعداد زوج توی یه vector رو بشمار."
    },
    {
     "title": "Move Semantics و Rvalue Reference",
     "content": "<p>وقتی یک آبجکت بزرگ (مثل یک vector با میلیون‌ها عضو) از یک تابع برمی‌گردد یا منتقل می‌شود، کپی‌کردن کامل آن گران است. <b>Move Semantics</b> (با <code class='inline'>&amp;&amp;</code>، Rvalue Reference) اجازه می‌دهد به‌جای کپی، «مالکیت» منابع داخلی مستقیم منتقل شود — منبع اصلی خالی می‌شود و مقصد آن را می‌گیرد، بدون کپی واقعی داده.</p><div class='code-block'><div class='cb-head'>move.cpp</div><pre><code>vector&lt;int&gt; createBigVector() {\n    vector&lt;int&gt; v(1000000, 1);\n    return v; // کامپایلرهای مدرن اینجا خودکار move می‌کنن، نه کپی\n}\n\nvector&lt;int&gt; a = createBigVector();\nvector&lt;int&gt; b = std::move(a); // انتقال صریح مالکیت، a خالی می‌شه</code></pre></div>",
     "exercise": "توضیح بده بعد از std::move(a)، استفاده از a دیگه چرا امن نیست (چون محتواش منتقل شده، نه کپی شده)."
    },
    {
     "title": "Multithreading با std::thread",
     "content": "<p>C++11 پشتیبانی بومی از Thread اضافه کرد: <code class='inline'>std::thread</code> یک تابع را در یک رشتهٔ اجرای جداگانه (هم‌زمان با بقیهٔ برنامه) اجرا می‌کند. <code class='inline'>.join()</code> منتظر تمام‌شدن آن Thread می‌ماند.</p><div class='code-block'><div class='cb-head'>thread.cpp</div><pre><code>#include &lt;thread&gt;\n\nvoid printNumbers() {\n    for (int i = 1; i <= 5; i++) cout << i << \" \";\n}\n\nint main() {\n    thread t(printNumbers); // شروع اجرای هم‌زمان\n    cout << \"در حال کار در thread اصلی...\" << endl;\n    t.join(); // منتظر تمام‌شدن t\n    return 0;\n}</code></pre></div>",
     "exercise": "توضیح بده اگه t.join() رو صدا نزنی و برنامه زودتر تموم بشه، چه ریسکی برای thread هنوز درحال‌اجرا پیش میاد."
    },
    {
     "title": "Design Pattern: Singleton و Factory (مفهومی)",
     "content": "<p><b>Singleton</b> تضمین می‌کند از یک کلاس فقط یک نمونه در کل برنامه وجود داشته باشد (مثل یک اتصال دیتابیس مشترک). <b>Factory</b> منطق ساخت آبجکت‌های مختلف را در یک تابع/کلاس جدا متمرکز می‌کند — کد صدازننده فقط «چه چیزی» می‌خواهد را می‌گوید، نه «چطور» ساخته می‌شود.</p><div class='code-block'><div class='cb-head'>singleton.cpp</div><pre><code>class Logger {\nprivate:\n    static Logger* instance;\n    Logger() {} // constructor خصوصی — از بیرون نمی‌شه new کرد\npublic:\n    static Logger* getInstance() {\n        if (instance == nullptr) instance = new Logger();\n        return instance;\n    }\n    void log(string msg) { cout << \"[LOG] \" << msg << endl; }\n};\nLogger* Logger::instance = nullptr;</code></pre></div>",
     "exercise": "توضیح بده چرا constructor خصوصی (private) کردن، دقیقاً همون چیزیه که جلوی ساخت چند نمونه از Logger رو می‌گیره."
    },
    {
     "title": "مسیر گرافیک و موتور بازی: OpenGL، Vulkan و Unreal Engine",
     "content": "<p>C++ زبان اصلی تقریباً همهٔ موتورهای بازی بزرگ (Unreal Engine، بخش‌های سنگین Unity) است — به‌خاطر کنترل دقیق حافظه و عملکرد نزدیک به سخت‌افزار. <b>OpenGL</b> و جانشین مدرن‌ترش <b>Vulkan</b> کتابخانه‌های گرافیک سطح‌پایین هستند (شبیه WebGL که در Three.js دیدید، ولی برای اپلیکیشن‌های Native نه مرورگر). <b>Unreal Engine</b> با C++ برنامه‌نویسی می‌شود و برای بازی‌های AAA و شبیه‌سازی‌های صنعتی استفاده می‌شود.</p>",
     "exercise": "با توجه به چیزی که در Three.js دیدی (که WebGL رو ساده می‌کرد)، توضیح بده Unreal Engine چطور نقش مشابهی برای OpenGL/Vulkan در دنیای C++ بازی‌سازی داره."
    },
    {
     "title": "مدیریت پروژه با CMake و Concepts/Ranges (C++20)",
     "content": "<p>CMake استاندارد ساخت پروژه‌های C++ است. در C++20، <b>Concepts</b> محدودیت Templateها را خوانا می‌کند و <b>Ranges</b> زنجیرهٔ عملیات روی کالکشن را ساده می‌کند (<code class='inline'>v | filter | transform</code>).</p><div class='code-block'><div class='cb-head'>CMakeLists.txt</div><pre><code>cmake_minimum_required(VERSION 3.20)\nproject(app)\nset(CMAKE_CXX_STANDARD 20)\nadd_executable(app main.cpp)</code></pre></div>",
     "exercise": "یک تابع template با concept بنویس که فقط اعداد را بپذیرد."
    },
    {
     "title": "RAII و Smart Pointer",
     "content": "<p>RAII یعنی عمر منبع به عمر شیء گره بخورد: سازنده می‌گیرد، مخرب آزاد می‌کند، حتی هنگام استثنا. <code class='inline'>unique_ptr</code> مالکیت انحصاری (بدون هزینه)، <code class='inline'>shared_ptr</code> مالکیت مشترک با شمارنده و <code class='inline'>weak_ptr</code> مشاهده‌گر بدون مالکیت است (شکستن حلقه‌ی ارجاع). <code class='inline'>new/delete</code> مستقیم ننویس؛ از <code class='inline'>make_unique</code> استفاده کن.<div class='code-block'><div class='cb-head'>raii.cpp</div><pre><code>#include &lt;iostream>\n#include &lt;memory>\nstruct Res { Res(){std::cout&lt;&lt;\"ساخته\\n\";} ~Res(){std::cout&lt;&lt;\"آزاد\\n\";} };\nint main(){\n  { auto p = std::make_unique&lt;Res>(); }\n  auto s = std::make_shared&lt;int>(5);\n  std::weak_ptr&lt;int> w = s;\n  std::cout &lt;&lt; s.use_count() &lt;&lt; \" \" &lt;&lt; (w.lock() ? \"زنده\" : \"مرده\") &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "یک کلاس FileHandle با RAII بنویس که فایل را خودکار ببندد."
    },
    {
     "title": "Move Semantics و Perfect Forwarding",
     "content": "<p>Move به‌جای کپی گران، منبع را «منتقل» می‌کند: شیء مبدأ در وضعیت معتبر ولی نامشخص می‌ماند. عملگرهای move را <code class='inline'>noexcept</code> کن تا vector هنگام رشد از آن‌ها استفاده کند. <code class='inline'>std::forward</code> در قالب‌ها دسته‌ی مقدار (lvalue/rvalue) را حفظ می‌کند (Perfect Forwarding). قانون صفر/پنج را رعایت کن.<div class='code-block'><div class='cb-head'>move.cpp</div><pre><code>#include &lt;iostream>\n#include &lt;string>\n#include &lt;utility>\n#include &lt;vector>\nstruct Buf {\n  std::vector&lt;int> d;\n  Buf(size_t n): d(n) {}\n  Buf(Buf&amp;&amp; o) noexcept : d(std::move(o.d)) { std::cout &lt;&lt; \"move\\n\"; }\n  Buf(const Buf&amp; o) : d(o.d) { std::cout &lt;&lt; \"copy\\n\"; }\n};\ntemplate&lt;class T> auto fwd(T&amp;&amp; x){ return Buf(std::forward&lt;T>(x)); }\nint main(){\n  Buf a(1000);\n  Buf b = std::move(a);\n  Buf c(b);\n  std::cout &lt;&lt; a.d.size() &lt;&lt; \" \" &lt;&lt; b.d.size() &lt;&lt; \" \" &lt;&lt; c.d.size() &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "کلاس Buffer را بنویس و تعداد کپی و move را در vector شمارش کن."
    },
    {
     "title": "Template و Concepts (C++20)",
     "content": "<p>Template کد عمومی در زمان کامپایل تولید می‌کند ولی پیام خطاهایش طولانی بود. <b>Concept</b> نیازمندی نوع را صریح می‌کند (<code class='inline'>std::integral</code> یا <code class='inline'>requires</code>) و خطا را خوانا. به‌جای SFINAE از Concept و <code class='inline'>if constexpr</code> استفاده کن.<div class='code-block'><div class='cb-head'>concept.cpp</div><pre><code>#include &lt;concepts>\n#include &lt;iostream>\ntemplate&lt;std::integral T>\nT twice(T x){ return x * 2; }\ntemplate&lt;typename T>\nconcept Printable = requires(T t){ std::cout &lt;&lt; t; };\ntemplate&lt;Printable T> void show(const T&amp; t){ std::cout &lt;&lt; t &lt;&lt; \"\\n\"; }\nint main(){\n  std::cout &lt;&lt; twice(21) &lt;&lt; \"\\n\";\n  show(\"سلام\");\n  // twice(1.5);  // خطای کامپایل: double یک integral نیست\n}\n</code></pre></div></p>",
     "exercise": "یک concept برای «نوعی که + دارد» بنویس و روی تابع جمع بگذار."
    },
    {
     "title": "الگوریتم‌های STL و Ranges",
     "content": "<p>به‌جای حلقه‌ی دستی از الگوریتم‌ها استفاده کن (<code class='inline'>sort</code>، <code class='inline'>find_if</code>، <code class='inline'>accumulate</code>). Ranges (C++20) با <code class='inline'>|</code> تنبل و قابل‌ترکیب‌اند: filter و transform بدون ساخت کانتینر میانی. <code class='inline'>lower_bound</code> فقط روی دادهٔ مرتب معنی دارد.<div class='code-block'><div class='cb-head'>ranges.cpp</div><pre><code>#include &lt;algorithm>\n#include &lt;iostream>\n#include &lt;ranges>\n#include &lt;vector>\nint main(){\n  std::vector&lt;int> v{5,2,8,1,9,4};\n  auto r = v | std::views::filter([](int x){return x%2==0;})\n             | std::views::transform([](int x){return x*x;});\n  for(int x : r) std::cout &lt;&lt; x &lt;&lt; \" \";\n  std::cout &lt;&lt; \"\\n\";\n  std::ranges::sort(v);\n  auto it = std::ranges::lower_bound(v, 5);\n  std::cout &lt;&lt; *it &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "از لیست اعداد مربع‌های فرد را با Ranges بساز."
    },
    {
     "title": "Lambda، Closure و std::function",
     "content": "<p>Lambda شیء تابعی است که متغیرها را با <code class='inline'>[=]</code> کپی یا <code class='inline'>[&]</code> مرجع می‌گیرد؛ مرجع به متغیر محلی خارج از عمرش آویزان (dangling) می‌شود. <code class='inline'>mutable</code> اجازه‌ی تغییر نسخه‌ی گرفته‌شده را می‌دهد. <code class='inline'>std::function</code> انعطاف دارد ولی هزینه‌ی type erasure؛ در قالب‌ها از پارامتر template بگیر.<div class='code-block'><div class='cb-head'>lambda.cpp</div><pre><code>#include &lt;functional>\n#include &lt;iostream>\nauto counter(){ return [n=0]() mutable { return ++n; }; }\nint main(){\n  auto c = counter();\n  std::cout &lt;&lt; c() &lt;&lt; c() &lt;&lt; c() &lt;&lt; \"\\n\";\n  std::function&lt;int(int)> f = [](int x){ return x + 1; };\n  std::cout &lt;&lt; f(41) &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "یک lambda بنویس که شمارنده را با init-capture نگه دارد."
    },
    {
     "title": "constexpr و consteval: محاسبه در زمان کامپایل",
     "content": "<p><code class='inline'>constexpr</code> تابع را قابل‌اجرا در زمان کامپایل می‌کند و <code class='inline'>consteval</code> اجرا در زمان کامپایل را اجباری. جدول‌ها و ثابت‌ها را کامپایلر محاسبه می‌کند و <code class='inline'>static_assert</code> درستی را همان‌جا بررسی می‌کند. هزینه‌ی زمان اجرا صفر می‌شود.<div class='code-block'><div class='cb-head'>constexpr.cpp</div><pre><code>#include &lt;array>\n#include &lt;iostream>\nconstexpr int fact(int n){ return n &lt;= 1 ? 1 : n * fact(n-1); }\nconsteval int sq(int x){ return x * x; }\nconstexpr auto table(){\n  std::array&lt;int,5> a{};\n  for(int i=0;i&lt;5;i++) a[i] = fact(i);\n  return a;\n}\nint main(){\n  static_assert(fact(5) == 120);\n  constexpr auto t = table();\n  std::cout &lt;&lt; t[4] &lt;&lt; \" \" &lt;&lt; sq(7) &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "جدول سینوس ۳۶۰ درجه را در زمان کامپایل بساز."
    },
    {
     "title": "Variadic Template و Fold Expression",
     "content": "<p><code class='inline'>typename... Ts</code> هر تعداد پارامتر نوع‌دار می‌پذیرد. Fold Expression (<code class='inline'>(xs + ...)</code>) بسته را با یک عملگر تجمیع می‌کند و دیگر بازگشت لازم نیست. پایه‌ی <code class='inline'>std::tuple</code>، <code class='inline'>make_unique</code> و فرمت‌کردن‌های نوع‌امن.<div class='code-block'><div class='cb-head'>variadic.cpp</div><pre><code>#include &lt;iostream>\ntemplate&lt;typename... Ts>\nauto sum(Ts... xs){ return (xs + ...); }\ntemplate&lt;typename... Ts>\nvoid print(const Ts&amp;... xs){ ((std::cout &lt;&lt; xs &lt;&lt; ' '), ...); std::cout &lt;&lt; \"\\n\"; }\nint main(){\n  std::cout &lt;&lt; sum(1,2,3,4) &lt;&lt; \"\\n\";\n  print(\"a\", 1, 2.5);\n}\n</code></pre></div></p>",
     "exercise": "تابع log(args...) بنویس که همه را با فاصله چاپ کند."
    },
    {
     "title": "optional، variant، string_view و span",
     "content": "<p><code class='inline'>optional</code> مقدار ممکن‌نبودن را در نوع نشان می‌دهد. <code class='inline'>variant</code> یک Union نوع‌امن است و با <code class='inline'>visit</code> مدیریت می‌شود. <code class='inline'>string_view</code> و <code class='inline'>span</code> نمای غیرمالک بدون کپی‌اند؛ مراقب باش منبع زودتر از نما نمیرد.<div class='code-block'><div class='cb-head'>views.cpp</div><pre><code>#include &lt;iostream>\n#include &lt;optional>\n#include &lt;string_view>\n#include &lt;variant>\n#include &lt;span>\n#include &lt;vector>\nstd::optional&lt;int> parse(std::string_view s){\n  if(s.empty() || s[0]&lt;'0' || s[0]>'9') return std::nullopt;\n  return s[0]-'0';\n}\nint total(std::span&lt;const int> v){ int t=0; for(int x: v) t+=x; return t; }\nint main(){\n  std::variant&lt;int,std::string> v = std::string(\"متن\");\n  std::visit([](auto&amp;&amp; x){ std::cout &lt;&lt; x &lt;&lt; \"\\n\"; }, v);\n  std::cout &lt;&lt; parse(\"7\").value_or(-1) &lt;&lt; \" \" &lt;&lt; parse(\"x\").value_or(-1) &lt;&lt; \"\\n\";\n  std::vector&lt;int> d{1,2,3};\n  std::cout &lt;&lt; total(d) &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "تابع parse را با optional بنویس و خطا را با variant نمایش بده."
    },
    {
     "title": "همزمانی مدرن: jthread، atomic و async",
     "content": "<p><code class='inline'>std::jthread</code> خودش join می‌کند و stop_token دارد. شمارنده‌ی ساده را با <code class='inline'>atomic</code> و ساختار پیچیده را با <code class='inline'>mutex</code> + <code class='inline'>lock_guard</code>/<code class='inline'>scoped_lock</code> (جلوگیری از deadlock) محافظت کن. <code class='inline'>async</code>/<code class='inline'>future</code> نتیجه‌ی کار را برمی‌گرداند. با ThreadSanitizer مسابقه‌ی داده را پیدا کن.<div class='code-block'><div class='cb-head'>thread.cpp</div><pre><code>#include &lt;atomic>\n#include &lt;future>\n#include &lt;iostream>\n#include &lt;mutex>\n#include &lt;thread>\n#include &lt;vector>\nint main(){\n  std::atomic&lt;int> n{0};\n  std::vector&lt;std::jthread> ts;\n  for(int i=0;i&lt;4;i++) ts.emplace_back([&amp;]{ for(int k=0;k&lt;100000;k++) n++; });\n  ts.clear();\n  std::cout &lt;&lt; n &lt;&lt; \"\\n\";\n  auto f = std::async(std::launch::async, []{ return 6*7; });\n  std::cout &lt;&lt; f.get() &lt;&lt; \"\\n\";\n}\n</code></pre></div></p>",
     "exercise": "یک Thread Pool ساده با صف و condition_variable بنویس."
    },
    {
     "title": "کارایی و حافظه: Cache، vector و اندازه‌گیری",
     "content": "<p>روی سخت‌افزار مدرن دسترسی پیوسته‌ی حافظه (cache-friendly) از پیچیدگی نظری مهم‌تر است: <code class='inline'>vector</code> تقریباً همیشه از <code class='inline'>list</code> سریع‌تر است. <code class='inline'>reserve</code> بازتخصیص را کم می‌کند، <code class='inline'>emplace_back</code> ساخت درجا را. قبل از بهینه‌سازی با <code class='inline'>perf</code> یا Google Benchmark اندازه بگیر و با <code class='inline'>-O2</code> تست کن.</p>",
     "exercise": "vector و list را روی ۱ میلیون عنصر مقایسه و علتش را توضیح بده."
    },
    {
     "title": "مدیریت خطا: استثنا، noexcept و تضمین امنیت",
     "content": "<p>با RAII، استثنا امن است. سطوح تضمین: پایه (بدون نشت)، قوی (commit یا rollback) و بدون-پرتاب (<code class='inline'>noexcept</code>). مخرب نباید استثنا پرتاب کند. در مسیرهای پرسرعت یا بدون استثنا از کد خطا یا <code class='inline'>std::expected</code> (C++23) استفاده کن و استثنا را برای حالت‌های واقعاً استثنایی بگذار.</p>",
     "exercise": "تابعی با تضمین قوی برای افزودن به دو کانتینر بنویس."
    },
    {
     "title": "ساخت و ابزار: CMake، Sanitizer و clang-tidy",
     "content": "<p>CMake تنظیمات استاندارد، وابستگی‌ها (<code class='inline'>FetchContent</code>) و تست‌ها (<code class='inline'>ctest</code>) را مدیریت می‌کند. همیشه با <code class='inline'>-Wall -Wextra -Wpedantic</code> و در CI با Address/UB/Thread Sanitizer بساز. <code class='inline'>clang-tidy</code> و <code class='inline'>clang-format</code> کیفیت و سبک را یکدست می‌کنند. ماژول‌های C++20 زمان کامپایل را کم می‌کنند ولی هنوز در حال بلوغ‌اند.</p>",
     "exercise": "یک پروژه را با CMake و جاگذاری Sanitizer در CI راه بینداز."
    },
    {
     "title": "دسته‌های مقدار: lvalue، rvalue و ارجاع‌های پیشرو",
     "content": "<p>هر عبارت در C++ یک <b>دسته‌ی مقدار</b> دارد: <code>lvalue</code> (نام‌دار و آدرس‌پذیر)، <code>prvalue</code> (موقت)، <code>xvalue</code> (در حال انتقال، مثل <code>std::move(x)</code>). <code>T&amp;</code> به lvalue، <code>T&amp;&amp;</code> به rvalue وصل می‌شود، و <code>const T&amp;</code> به هر دو. در قالب، <code>T&amp;&amp;</code> یک <b>forwarding reference</b> است و <code>std::forward&lt;T&gt;</code> دسته‌ی اصلی را حفظ می‌کند. نکته‌ی مهم: متغیری از نوع <code>T&amp;&amp;</code> خودش یک lvalue است چون نام دارد.</p><div class='code-block'><div class='cb-head'>values.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;utility&gt;\n\nvoid f(int&amp;)        { std::cout &lt;&lt; &quot;lvalue\\n&quot;; }\nvoid f(int&amp;&amp;)       { std::cout &lt;&lt; &quot;rvalue\\n&quot;; }\ntemplate&lt;class T&gt; void wrapper_bad(T&amp;&amp; x)  { f(x); }                    // x نام دارد → lvalue\ntemplate&lt;class T&gt; void wrapper_good(T&amp;&amp; x) { f(std::forward&lt;T&gt;(x)); }   // دسته حفظ می‌شود\n\nint main() {\n    int a = 1;\n    f(a); f(2); f(std::move(a));\n    std::cout &lt;&lt; &quot;--- بدون forward\\n&quot;;\n    wrapper_bad(a); wrapper_bad(2);\n    std::cout &lt;&lt; &quot;--- با forward\\n&quot;;\n    wrapper_good(a); wrapper_good(2);\n\n    std::string s = &quot;hello&quot;;\n    std::string t = std::move(s);          // s به حالت معتبر ولی نامشخص می‌رود\n    std::cout &lt;&lt; &quot;t=&quot; &lt;&lt; t &lt;&lt; &quot; s.size()=&quot; &lt;&lt; s.size() &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>lvalue\nrvalue\nrvalue\n--- بدون forward\nlvalue\nlvalue\n--- با forward\nlvalue\nrvalue\nt=hello s.size()=0</code></pre></div>",
     "exercise": "یک تابع make_pair_like بنویس که آرگومان‌ها را کامل forward کند."
    },
    {
     "title": "اشاره‌گرهای هوشمند: unique_ptr، shared_ptr و weak_ptr",
     "content": "<p><code>unique_ptr</code> مالکیت انحصاری و بدون سربار است (فقط قابل انتقال). <code>shared_ptr</code> مالکیت مشترک با شمارنده‌ی ارجاع دارد؛ با <code>make_shared</code> بساز. چرخه‌ی <code>shared_ptr</code> (دو شیء که هم‌دیگر را نگه می‌دارند) <b>نشت</b> می‌کند؛ یک سمت را <code>weak_ptr</code> کن. <code>weak_ptr::lock()</code> یا شیء زنده را می‌دهد یا تهی. قاعده: پیش‌فرض <code>unique_ptr</code>، <code>shared_ptr</code> فقط با دلیل، و <code>new/delete</code> خام را کنار بگذار.</p><div class='code-block'><div class='cb-head'>smart.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;memory&gt;\n\nstruct Node {\n    std::string name;\n    std::shared_ptr&lt;Node&gt; next;\n    std::weak_ptr&lt;Node&gt; prev;               // سمت برگشت weak: چرخه نمی‌سازد\n    explicit Node(std::string n) : name(std::move(n)) { std::cout &lt;&lt; &quot;ساخت &quot; &lt;&lt; name &lt;&lt; &quot;\\n&quot;; }\n    ~Node() { std::cout &lt;&lt; &quot;حذف &quot; &lt;&lt; name &lt;&lt; &quot;\\n&quot;; }\n};\nint main() {\n    auto u = std::make_unique&lt;int&gt;(42);\n    auto u2 = std::move(u);\n    std::cout &lt;&lt; &quot;u تهی؟ &quot; &lt;&lt; (u == nullptr) &lt;&lt; &quot;  *u2=&quot; &lt;&lt; *u2 &lt;&lt; &quot;\\n&quot;;\n\n    {\n        auto a = std::make_shared&lt;Node&gt;(&quot;A&quot;);\n        auto b = std::make_shared&lt;Node&gt;(&quot;B&quot;);\n        a-&gt;next = b; b-&gt;prev = a;\n        std::cout &lt;&lt; &quot;use_count(a)=&quot; &lt;&lt; a.use_count() &lt;&lt; &quot; use_count(b)=&quot; &lt;&lt; b.use_count() &lt;&lt; &quot;\\n&quot;;\n        if (auto p = b-&gt;prev.lock()) std::cout &lt;&lt; &quot;prev of B = &quot; &lt;&lt; p-&gt;name &lt;&lt; &quot;\\n&quot;;\n    }\n    std::cout &lt;&lt; &quot;بیرون از بلوک: هر دو حذف شدند\\n&quot;;\n\n    std::weak_ptr&lt;int&gt; w;\n    { auto s = std::make_shared&lt;int&gt;(5); w = s; std::cout &lt;&lt; &quot;expired؟ &quot; &lt;&lt; w.expired() &lt;&lt; &quot;\\n&quot;; }\n    std::cout &lt;&lt; &quot;expired؟ &quot; &lt;&lt; w.expired() &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>u تهی؟ 1  *u2=42\nساخت A\nساخت B\nuse_count(a)=1 use_count(b)=2\nprev of B = A\nحذف A\nحذف B\nبیرون از بلوک: هر دو حذف شدند\nexpired؟ 0\nexpired؟ 1</code></pre></div>",
     "exercise": "با گذاشتن shared_ptr در هر دو سمت، نشت را با ASan ببین."
    },
    {
     "title": "قاعده‌ی صفر/سه/پنج و مدیریت منبع",
     "content": "<p>اگر کلاسی منبع خام (حافظه، فایل) را مدیریت می‌کند، باید <b>پنج</b> عضو ویژه را درست بنویسی: مخرب، سازنده‌ی کپی، انتساب کپی، سازنده‌ی انتقال، انتساب انتقال (قاعده‌ی پنج). بهتر: <b>قاعده‌ی صفر</b> — از اعضای RAII (<code>vector</code>، <code>unique_ptr</code>) استفاده کن تا کامپایلر همه را درست تولید کند. انتقال را <code>noexcept</code> کن تا <code>vector</code> هنگام رشد از انتقال به‌جای کپی استفاده کند. انتساب را در برابر خودانتسابی ایمن بنویس.</p><div class='code-block'><div class='cb-head'>rule5.cpp — g++ -std=c++20 -Wall -Wextra -fsanitize=address,undefined</div><pre><code>#include &lt;algorithm&gt;\n#include &lt;iostream&gt;\n#include &lt;utility&gt;\n\nclass Buffer {\n    int* data_; size_t n_;\npublic:\n    explicit Buffer(size_t n) : data_(new int[n]()), n_(n) { std::cout &lt;&lt; &quot;ctor(&quot; &lt;&lt; n &lt;&lt; &quot;)\\n&quot;; }\n    ~Buffer() { delete[] data_; }\n    Buffer(const Buffer&amp; o) : data_(new int[o.n_]), n_(o.n_) { std::copy(o.data_, o.data_ + n_, data_); std::cout &lt;&lt; &quot;copy\\n&quot;; }\n    Buffer&amp; operator=(const Buffer&amp; o) {\n        if (this != &amp;o) { Buffer tmp(o); swap(tmp); }       // copy-and-swap\n        std::cout &lt;&lt; &quot;copy-assign\\n&quot;; return *this;\n    }\n    Buffer(Buffer&amp;&amp; o) noexcept : data_(std::exchange(o.data_, nullptr)), n_(std::exchange(o.n_, 0)) { std::cout &lt;&lt; &quot;move\\n&quot;; }\n    Buffer&amp; operator=(Buffer&amp;&amp; o) noexcept {\n        if (this != &amp;o) { delete[] data_; data_ = std::exchange(o.data_, nullptr); n_ = std::exchange(o.n_, 0); }\n        std::cout &lt;&lt; &quot;move-assign\\n&quot;; return *this;\n    }\n    void swap(Buffer&amp; o) noexcept { std::swap(data_, o.data_); std::swap(n_, o.n_); }\n    size_t size() const { return n_; }\n};\nBuffer make() { return Buffer(3); }\nint main() {\n    Buffer a(4);\n    Buffer b = a;              // کپی\n    Buffer c = std::move(a);   // انتقال\n    b = make();                // انتساب انتقال\n    c = b;                     // انتساب کپی\n    std::cout &lt;&lt; &quot;sizes: a=&quot; &lt;&lt; a.size() &lt;&lt; &quot; b=&quot; &lt;&lt; b.size() &lt;&lt; &quot; c=&quot; &lt;&lt; c.size() &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>ctor(4)\ncopy\nmove\nctor(3)\nmove-assign\ncopy\ncopy-assign\nsizes: a=0 b=3 c=3</code></pre></div>",
     "exercise": "همین کلاس را با std::vector<int> بازنویسی کن (قاعده‌ی صفر)."
    },
    {
     "title": "توابع مجازی، vtable، override و برش شیء",
     "content": "<p>تابع <code>virtual</code> رفتار را در زمان اجرا بر اساس نوع <b>واقعی</b> شیء انتخاب می‌کند (از طریق vtable). قواعد: کلاس پایه‌ی چندریخت باید مخرب <code>virtual</code> داشته باشد وگرنه حذف از طریق اشاره‌گر پایه UB است؛ در مشتق همیشه <code>override</code> بنویس تا خطای امضا را کامپایلر بگیرد؛ <code>= 0</code> کلاس را انتزاعی می‌کند. <b>برش شیء (slicing):</b> کپی مشتق به‌صورت مقدار در پایه، بخش مشتق را دور می‌اندازد و چندریختی را از بین می‌برد؛ همیشه با اشاره‌گر/ارجاع کار کن.</p><div class='code-block'><div class='cb-head'>virt.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;memory&gt;\n#include &lt;vector&gt;\n\nstruct Shape {\n    virtual ~Shape() = default;                       // مخرب مجازی\n    virtual double area() const = 0;\n    virtual const char* name() const { return &quot;shape&quot;; }\n};\nstruct Rect : Shape {\n    double w, h; Rect(double w, double h) : w(w), h(h) {}\n    double area() const override { return w * h; }\n    const char* name() const override { return &quot;rect&quot;; }\n};\nstruct Circle : Shape {\n    double r; explicit Circle(double r) : r(r) {}\n    double area() const override { return 3.14159265 * r * r; }\n    const char* name() const override { return &quot;circle&quot;; }\n};\n\nstruct Base { virtual const char* who() const { return &quot;Base&quot;; } };\nstruct Derived : Base { int extra = 5; const char* who() const override { return &quot;Derived&quot;; } };\n\nint main() {\n    std::vector&lt;std::unique_ptr&lt;Shape&gt;&gt; v;\n    v.push_back(std::make_unique&lt;Rect&gt;(2, 3));\n    v.push_back(std::make_unique&lt;Circle&gt;(1));\n    for (auto&amp; s : v) std::cout &lt;&lt; s-&gt;name() &lt;&lt; &quot; area=&quot; &lt;&lt; s-&gt;area() &lt;&lt; &quot;\\n&quot;;\n\n    Derived d; Base sliced = d;                       // برش\n    Base&amp; ref = d;\n    std::cout &lt;&lt; &quot;sliced: &quot; &lt;&lt; sliced.who() &lt;&lt; &quot; | ref: &quot; &lt;&lt; ref.who() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;sizeof(Base)=&quot; &lt;&lt; sizeof(Base) &lt;&lt; &quot; sizeof(Derived)=&quot; &lt;&lt; sizeof(Derived) &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>rect area=6\ncircle area=3.14159\nsliced: Base | ref: Derived\nsizeof(Base)=8 sizeof(Derived)=16</code></pre></div>",
     "exercise": "یک کلاس Triangle اضافه کن و در حلقه بدون تغییر دیگر کد کار کند."
    },
    {
     "title": "سربارگذاری عملگر و عملگر سه‌طرفه <=> (C++20)",
     "content": "<p>سربارگذاری عملگر باید معنای <b>مورد انتظار</b> را حفظ کند. در C++20 با <code>auto operator&lt;=&gt;(const T&amp;) const = default;</code> همه‌ی عملگرهای مقایسه (<code>&lt; &gt; &lt;= &gt;=</code>) و با <code>operator==</code> پیش‌فرض، برابری تولید می‌شود؛ ترتیب فیلدها ترتیب مقایسه است. عملگر جریان <code>&lt;&lt;</code> را به‌صورت تابع غیرعضو (friend) بنویس. <code>operator[]</code>، <code>operator()</code> (functor) و تبدیل <code>explicit operator bool</code> رایج هستند. عملگرهای <code>&amp;&amp;</code>، <code>||</code> و <code>,</code> را سربارگذاری نکن (ارزیابی کوتاه‌مدار از بین می‌رود).</p><div class='code-block'><div class='cb-head'>ops.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;compare&gt;\n#include &lt;iostream&gt;\n#include &lt;set&gt;\n#include &lt;string&gt;\n\nstruct Version {\n    int major, minor, patch;\n    auto operator&lt;=&gt;(const Version&amp;) const = default;   // ترتیب: major, minor, patch\n    bool operator==(const Version&amp;) const = default;\n    friend std::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const Version&amp; v) {\n        return os &lt;&lt; v.major &lt;&lt; &#x27;.&#x27; &lt;&lt; v.minor &lt;&lt; &#x27;.&#x27; &lt;&lt; v.patch;\n    }\n};\nstruct Vec2 {\n    double x, y;\n    Vec2 operator+(const Vec2&amp; o) const { return {x + o.x, y + o.y}; }\n    Vec2&amp; operator+=(const Vec2&amp; o) { x += o.x; y += o.y; return *this; }\n    Vec2 operator*(double k) const { return {x * k, y * k}; }\n    friend Vec2 operator*(double k, const Vec2&amp; v) { return v * k; }\n};\nstruct Counter { int n = 0; int operator()() { return ++n; } };\n\nint main() {\n    Version a{1, 2, 3}, b{1, 10, 0};\n    std::cout &lt;&lt; a &lt;&lt; &quot; &lt; &quot; &lt;&lt; b &lt;&lt; &quot; ؟ &quot; &lt;&lt; (a &lt; b) &lt;&lt; &quot;  ==؟ &quot; &lt;&lt; (a == b) &lt;&lt; &quot;\\n&quot;;\n    std::set&lt;Version&gt; s{{2,0,0}, {1,0,0}, {1,5,0}};       // به لطف &lt;=&gt; مرتب می‌شود\n    for (auto&amp; v : s) std::cout &lt;&lt; v &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n    Vec2 p{1, 2}; p += Vec2{3, 4}; Vec2 q = 2 * p;\n    std::cout &lt;&lt; &quot;q=(&quot; &lt;&lt; q.x &lt;&lt; &quot;,&quot; &lt;&lt; q.y &lt;&lt; &quot;)\\n&quot;;\n    Counter c; c(); c();\n    std::cout &lt;&lt; &quot;counter=&quot; &lt;&lt; c.n &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>1.2.3 &lt; 1.10.0 ؟ 1  ==؟ 0\n1.0.0 1.5.0 2.0.0 \nq=(8,12)\ncounter=2</code></pre></div>",
     "exercise": "operator<=> را برای struct با std::string و int بنویس."
    },
    {
     "title": "انتخاب کانتینر STL و باطل‌شدن iteratorها",
     "content": "<p>پیش‌فرض: <code>vector</code> (حافظه‌ی پیوسته و کش‌دوست). <code>deque</code> درج در دو سر؛ <code>list</code> فقط وقتی iteratorهای پایدار و درج/حذف میانی با iterator موجود لازم باشد؛ <code>map/set</code> ترتیب (O(log n))؛ <code>unordered_map</code> جست‌وجوی میانگین O(1). <b>باطل‌شدن:</b> درج در <code>vector</code> که ظرفیت را رد کند همه‌ی iteratorها/ارجاع‌ها را نامعتبر می‌کند؛ حذف حین پیمایش را با idiom <code>it = c.erase(it)</code> یا erase-remove (<code>std::erase_if</code> در C++20) انجام بده. <code>reserve</code> از بازتخصیص جلوگیری می‌کند. <code>map::operator[]</code> کلید غایب را می‌سازد؛ برای خواندن از <code>find/at</code> استفاده کن.</p><div class='code-block'><div class='cb-head'>containers.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;map&gt;\n#include &lt;unordered_map&gt;\n#include &lt;vector&gt;\n\nint main() {\n    std::vector&lt;int&gt; v = {1, 2, 3};\n    const int* first = &amp;v[0];\n    std::cout &lt;&lt; &quot;capacity قبل: &quot; &lt;&lt; v.capacity() &lt;&lt; &quot;\\n&quot;;\n    v.insert(v.end(), {4, 5, 6, 7});               // احتمالاً بازتخصیص\n    std::cout &lt;&lt; &quot;capacity بعد: &quot; &lt;&lt; v.capacity()\n              &lt;&lt; &quot; | آدرس عنصر اول تغییر کرد؟ &quot; &lt;&lt; (first != &amp;v[0]) &lt;&lt; &quot; (اشاره‌گر قدیمی معتبر نیست)\\n&quot;;\n\n    std::vector&lt;int&gt; w = {1, 2, 3, 4, 5, 6, 7, 8};\n    std::erase_if(w, [](int x) { return x % 2 == 0; });        // C++20\n    for (int x : w) std::cout &lt;&lt; x &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n\n    std::map&lt;std::string, int&gt; m;\n    (void)m[&quot;ghost&quot;];                                           // ساخت ناخواسته\n    std::cout &lt;&lt; &quot;map size بعد از خواندن با []: &quot; &lt;&lt; m.size() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;contains(&#x27;x&#x27;)؟ &quot; &lt;&lt; m.contains(&quot;x&quot;) &lt;&lt; &quot; size=&quot; &lt;&lt; m.size() &lt;&lt; &quot;\\n&quot;;\n\n    std::unordered_map&lt;int, int&gt; um; um.reserve(100);\n    for (int i = 0; i &lt; 50; i++) um[i] = i * i;\n    std::cout &lt;&lt; &quot;um[7]=&quot; &lt;&lt; um.at(7) &lt;&lt; &quot; buckets&gt;=100؟ &quot; &lt;&lt; (um.bucket_count() &gt;= 100) &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>capacity قبل: 3\ncapacity بعد: 7 | آدرس عنصر اول تغییر کرد؟ 1 (اشاره‌گر قدیمی معتبر نیست)\n1 3 5 7 \nmap size بعد از خواندن با []: 1\ncontains(&#x27;x&#x27;)؟ 0 size=1\num[7]=49 buckets&gt;=100؟ 1</code></pre></div>",
     "exercise": "با list و vector یک benchmark ساده برای درج میانی بنویس."
    },
    {
     "title": "std::string، SSO و دام‌های string_view",
     "content": "<p><code>std::string</code> رشته‌های کوتاه (معمولاً تا ~15 کاراکتر در libstdc++) را بدون تخصیص heap و درون خود شیء نگه می‌دارد (<b>SSO</b>). <code>string_view</code> فقط «نگاه» به داده‌ی دیگری است: بسیار ارزان ولی <b>مالک نیست</b>. خطاهای رایج: برگرداندن <code>string_view</code> از رشته‌ی موقت، ساخت <code>string_view</code> از نتیجه‌ی تابعی که <code>string</code> برمی‌گرداند و نگه‌داشتن آن، و فرض اینکه به <code>\\\\0</code> ختم می‌شود (برای API های C از <code>std::string</code> استفاده کن). پارامتر ورودی فقط‌خواندنی را <code>string_view</code> بگیر.</p><div class='code-block'><div class='cb-head'>sso.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;string_view&gt;\n\nstatic bool starts_with_http(std::string_view s) { return s.substr(0, 4) == &quot;http&quot;; }\nstatic std::string make() { return &quot;a temporary string that is long enough&quot;; }\n\nint main() {\n    std::string small = &quot;short&quot;, big(40, &#x27;x&#x27;);\n    auto in_object = [](const std::string&amp; s) {\n        auto p = reinterpret_cast&lt;const char*&gt;(&amp;s);\n        return s.data() &gt;= p &amp;&amp; s.data() &lt; p + sizeof(s);\n    };\n    std::cout &lt;&lt; &quot;sizeof(string)=&quot; &lt;&lt; sizeof(std::string) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;کوتاه داخل خود شیء؟ &quot; &lt;&lt; in_object(small) &lt;&lt; &quot; | بلند؟ &quot; &lt;&lt; in_object(big) &lt;&lt; &quot;\\n&quot;;\n\n    std::cout &lt;&lt; starts_with_http(&quot;https://x.ir&quot;) &lt;&lt; starts_with_http(std::string(&quot;ftp://a&quot;)) &lt;&lt; &quot;\\n&quot;;\n\n    std::string_view v = &quot;hello world&quot;;\n    std::cout &lt;&lt; v.substr(0, 5) &lt;&lt; &quot;|&quot; &lt;&lt; v.size() &lt;&lt; &quot;|&quot; &lt;&lt; v.find(&quot;world&quot;) &lt;&lt; &quot;\\n&quot;;\n    v.remove_prefix(6);\n    std::cout &lt;&lt; &quot;بعد remove_prefix: &quot; &lt;&lt; v &lt;&lt; &quot;\\n&quot;;\n\n    std::string s = make();\n    std::string_view ok = s;                    // s زنده است → امن\n    std::cout &lt;&lt; &quot;امن: &quot; &lt;&lt; ok.substr(0, 10) &lt;&lt; &quot;\\n&quot;;\n    // std::string_view bad = make();           // ← خطر: موقت بلافاصله از بین می‌رود (dangling)\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>sizeof(string)=32\nکوتاه داخل خود شیء؟ 1 | بلند؟ 0\n10\nhello|11|6\nبعد remove_prefix: world\nامن: a temporar</code></pre></div>",
     "exercise": "تابعی بنویس که یک string_view به‌همراه جداکننده بگیرد و vector<string_view> برگرداند."
    },
    {
     "title": "std::format: قالب‌بندی ایمن‌نوع (C++20)",
     "content": "<p><code>std::format</code> (هدر <code>&lt;format&gt;</code>) جایگزین ایمن‌نوع <code>printf</code> است و بر اساس <code>{}</code> کار می‌کند: <code>{:&gt;8}</code> راست‌چین، <code>{:&lt;8}</code> چپ‌چین، <code>{:^8}</code> وسط، <code>{:08.3f}</code> اعشار، <code>{:#x}</code> مبنای ۱۶، <code>{0} {1} {0}</code> اندیس‌دار. نوع/تعداد اشتباه در زمان کامپایل خطا می‌دهد (بر خلاف printf). قالب برای نوع خودت را با تخصیص <code>std::formatter&lt;T&gt;</code> می‌سازی. به‌جای <code>ostringstream</code> کند و پرحرف استفاده می‌شود.</p><div class='code-block'><div class='cb-head'>fmt.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;format&gt;\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\nstruct Point { int x, y; };\ntemplate &lt;&gt; struct std::formatter&lt;Point&gt; : std::formatter&lt;std::string&gt; {\n    auto format(const Point&amp; p, std::format_context&amp; ctx) const {\n        return std::formatter&lt;std::string&gt;::format(std::format(&quot;({}, {})&quot;, p.x, p.y), ctx);\n    }\n};\nint main() {\n    std::cout &lt;&lt; std::format(&quot;[{:&gt;8}] [{:&lt;8}] [{:^8}]\\n&quot;, &quot;ab&quot;, &quot;ab&quot;, &quot;ab&quot;);\n    std::cout &lt;&lt; std::format(&quot;[{:08.3f}] [{:+d}] [{:#x}] [{:#b}]\\n&quot;, 3.14159, 42, 255, 5);\n    std::cout &lt;&lt; std::format(&quot;{0}-{1}-{0}\\n&quot;, &quot;a&quot;, &quot;b&quot;);\n    std::cout &lt;&lt; std::format(&quot;{:*^11}\\n&quot;, &quot;mid&quot;);\n    std::cout &lt;&lt; std::format(&quot;نقطه: {}\\n&quot;, Point{3, 4});\n    std::string s = std::format(&quot;{:&gt;6.2f}%&quot;, 12.3456);\n    std::cout &lt;&lt; s &lt;&lt; &quot; (طول &quot; &lt;&lt; s.size() &lt;&lt; &quot;)\\n&quot;;\n    // std::format(&quot;{:d}&quot;, &quot;text&quot;);   // ← خطای زمان کامپایل\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>[      ab] [ab      ] [   ab   ]\n[0003.142] [+42] [0xff] [0b101]\na-b-a\n****mid****\nنقطه: (3, 4)\n 12.35% (طول 7)</code></pre></div>",
     "exercise": "یک جدول متنی با ستون‌های هم‌تراز با format چاپ کن."
    },
    {
     "title": "نوشتن iterator سفارشی",
     "content": "<p>برای اینکه کانتینر شما با <code>for (auto x : c)</code> و الگوریتم‌ها کار کند، باید <code>begin()</code> و <code>end()</code> بدهد که iterator برمی‌گردانند. حداقل: <code>operator*</code>، <code>operator++</code>، <code>operator==</code> و تعریف <code>using</code>های <code>value_type</code>، <code>difference_type</code> و <code>iterator_category</code> (یا مفهوم C++20 <code>std::forward_iterator</code>). با <code>static_assert(std::forward_iterator&lt;It&gt;)</code> درستی را در زمان کامپایل بررسی کن. iterator شناور (مثل range بدون حافظه) نشان می‌دهد که داده لازم نیست واقعاً ذخیره شود.</p><div class='code-block'><div class='cb-head'>iter.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;algorithm&gt;\n#include &lt;iostream&gt;\n#include &lt;iterator&gt;\n#include &lt;numeric&gt;\n\nclass Range {                      // عدد از a تا b با گام s، بدون ذخیره‌ی داده\n    int a_, b_, s_;\npublic:\n    Range(int a, int b, int s = 1) : a_(a), b_(b), s_(s) {}\n    class It {\n        int v_, s_;\n    public:\n        using value_type = int; using difference_type = std::ptrdiff_t;\n        using iterator_category = std::forward_iterator_tag;\n        using pointer = const int*; using reference = int;\n        It() : v_(0), s_(1) {}\n        It(int v, int s) : v_(v), s_(s) {}\n        int operator*() const { return v_; }\n        It&amp; operator++() { v_ += s_; return *this; }\n        It operator++(int) { It t = *this; ++*this; return t; }\n        bool operator==(const It&amp; o) const { return v_ == o.v_; }\n    };\n    It begin() const { return It(a_, s_); }\n    It end()   const { int n = b_ &gt; a_ ? (b_ - a_ + s_ - 1) / s_ : 0; return It(a_ + n * s_, s_); }   // اولین مقدار «بعد از آخر»\n};\nstatic_assert(std::forward_iterator&lt;Range::It&gt;);\n\nint main() {\n    for (int x : Range(0, 10, 3)) std::cout &lt;&lt; x &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n    Range r(1, 6);\n    std::cout &lt;&lt; &quot;مجموع: &quot; &lt;&lt; std::accumulate(r.begin(), r.end(), 0) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;find 4: &quot; &lt;&lt; (std::find(r.begin(), r.end(), 4) != r.end()) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;count_if زوج: &quot; &lt;&lt; std::count_if(r.begin(), r.end(), [](int x){ return x % 2 == 0; }) &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>0 3 6 9 \nمجموع: 15\nfind 4: 1\ncount_if زوج: 2</code></pre></div>",
     "exercise": "با sentinel جدا (end از نوع دیگر) و مفهوم std::input_iterator بازنویسی کن."
    },
    {
     "title": "noexcept، ضمانت‌های استثنا و move_if_noexcept",
     "content": "<p>سه سطح ضمانت: <b>پایه</b> (نشت و خرابی ندارد)، <b>قوی</b> (اگر شکست خورد، حالت قبل برمی‌گردد — commit-or-rollback)، <b>بدون‌پرتاب</b> (<code>noexcept</code>). <code>noexcept</code> هم مستند و هم برای بهینه‌سازی است: <code>vector::push_back</code> هنگام رشد فقط اگر انتقال <code>noexcept</code> باشد از انتقال استفاده می‌کند؛ وگرنه برای حفظ ضمانت قوی <b>کپی</b> می‌کند. مخرب‌ها به‌طور پیش‌فرض noexcept هستند؛ پرتاب از مخرب هنگام unwinding یعنی <code>std::terminate</code>. الگوی قوی: کار را روی کپی انجام بده و در پایان با <code>swap</code> (noexcept) جایگزین کن.</p><div class='code-block'><div class='cb-head'>noex.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n#include &lt;stdexcept&gt;\n#include &lt;type_traits&gt;\n#include &lt;vector&gt;\n\nstruct Slow {                           // انتقال noexcept نیست\n    Slow() = default;\n    Slow(const Slow&amp;) { std::cout &lt;&lt; &quot;  copy\\n&quot;; }\n    Slow(Slow&amp;&amp;) { std::cout &lt;&lt; &quot;  move(!noexcept)\\n&quot;; }\n};\nstruct Fast {\n    Fast() = default;\n    Fast(const Fast&amp;) { std::cout &lt;&lt; &quot;  copy\\n&quot;; }\n    Fast(Fast&amp;&amp;) noexcept { std::cout &lt;&lt; &quot;  move(noexcept)\\n&quot;; }\n};\ntemplate&lt;class T&gt; void grow(const char* name) {\n    std::cout &lt;&lt; name &lt;&lt; &quot;: is_nothrow_move=&quot; &lt;&lt; std::is_nothrow_move_constructible_v&lt;T&gt; &lt;&lt; &quot;\\n&quot;;\n    std::vector&lt;T&gt; v; v.reserve(1); v.emplace_back();\n    std::cout &lt;&lt; &quot; رشد:\\n&quot;; v.emplace_back();      // بازتخصیص → انتقال یا کپی؟\n}\nint main() {\n    grow&lt;Slow&gt;(&quot;Slow&quot;);\n    grow&lt;Fast&gt;(&quot;Fast&quot;);\n\n    std::vector&lt;int&gt; a{1, 2, 3};\n    try {\n        std::vector&lt;int&gt; tmp = a;                     // کار روی کپی\n        tmp.push_back(4);\n        throw std::runtime_error(&quot;شکست وسط کار&quot;);\n        a.swap(tmp);                                  // commit (نرسید)\n    } catch (const std::exception&amp; e) {\n        std::cout &lt;&lt; e.what() &lt;&lt; &quot; | a هنوز سالم: size=&quot; &lt;&lt; a.size() &lt;&lt; &quot;\\n&quot;;\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>Slow: is_nothrow_move=0\n رشد:\n  copy\nFast: is_nothrow_move=1\n رشد:\n  move(noexcept)\nشکست وسط کار | a هنوز سالم: size=3</code></pre></div>",
     "exercise": "کلاسی بنویس که انتساب آن ضمانت قوی با copy-and-swap بدهد."
    },
    {
     "title": "CRTP: چندریختی ایستا بدون vtable",
     "content": "<p>در <b>Curiously Recurring Template Pattern</b> کلاس مشتق خودش را به‌عنوان آرگومان قالب پایه می‌دهد: <code>struct D : Base&lt;D&gt;</code>. پایه با <code>static_cast&lt;D&amp;&gt;(*this)</code> متد مشتق را صدا می‌زند؛ تصمیم در <b>زمان کامپایل</b> گرفته می‌شود، فراخوانی قابل inline است و سربارِ vtable ندارد. کاربرد: افزودن قابلیت مشترک (مقایسه، چاپ، شمارش نمونه) به کلاس‌ها. محدودیت: نمی‌توان انواع مختلف را در یک کانتینر ناهمگن نگه داشت. در C++20 گاهی با <code>concepts</code> و «explicit object parameter» (C++23) ساده‌تر می‌شود.</p><div class='code-block'><div class='cb-head'>crtp.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;iostream&gt;\n\ntemplate &lt;class D&gt;\nstruct Printable {\n    void print() const { std::cout &lt;&lt; &quot;[&quot; &lt;&lt; static_cast&lt;const D&amp;&gt;(*this).describe() &lt;&lt; &quot;]\\n&quot;; }\n};\ntemplate &lt;class D&gt;\nstruct Comparable {\n    friend bool operator&lt;(const D&amp; a, const D&amp; b) { return a.key() &lt; b.key(); }\n    friend bool operator&gt;(const D&amp; a, const D&amp; b) { return b &lt; a; }\n};\ntemplate &lt;class D&gt;\nstruct InstanceCounter {\n    static inline int count = 0;\n    InstanceCounter() { ++count; }\n    InstanceCounter(const InstanceCounter&amp;) { ++count; }\n    ~InstanceCounter() { --count; }\n};\nstruct User : Printable&lt;User&gt;, Comparable&lt;User&gt;, InstanceCounter&lt;User&gt; {\n    int id; explicit User(int i) : id(i) {}\n    std::string describe() const { return &quot;user#&quot; + std::to_string(id); }\n    int key() const { return id; }\n};\nstruct Order : Printable&lt;Order&gt;, InstanceCounter&lt;Order&gt; {\n    std::string describe() const { return &quot;order&quot;; }\n};\nint main() {\n    User a(1), b(2);\n    a.print(); Order{}.print();\n    std::cout &lt;&lt; &quot;a&lt;b: &quot; &lt;&lt; (a &lt; b) &lt;&lt; &quot; a&gt;b: &quot; &lt;&lt; (a &gt; b) &lt;&lt; &quot;\\n&quot;;\n    { User c(3); std::cout &lt;&lt; &quot;User تعداد در بلوک: &quot; &lt;&lt; InstanceCounter&lt;User&gt;::count &lt;&lt; &quot;\\n&quot;; }\n    std::cout &lt;&lt; &quot;User تعداد بعد: &quot; &lt;&lt; InstanceCounter&lt;User&gt;::count &lt;&lt; &quot;  Order: &quot; &lt;&lt; InstanceCounter&lt;Order&gt;::count &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>[user#1]\n[order]\na&lt;b: 1 a&gt;b: 0\nUser تعداد در بلوک: 3\nUser تعداد بعد: 2  Order: 0</code></pre></div>",
     "exercise": "با CRTP یک Clonable بنویس که clone() برگرداند."
    },
    {
     "title": "Type Erasure: std::function و std::any",
     "content": "<p><b>پاک‌سازی نوع</b> یعنی رابط یکسان روی انواع نامرتبط بدون ارث‌بری. <code>std::function&lt;R(Args...)&gt;</code> هر callable (تابع، lambda، functor) با آن امضا را نگه می‌دارد؛ هزینه‌اش یک فراخوانی غیرمستقیم و گاهی تخصیص heap است. <code>std::any</code> هر مقدار قابل‌کپی را می‌گیرد و فقط با <code>any_cast&lt;T&gt;</code> به‌نوع دقیق برمی‌گردد (نوع اشتباه → استثنا <code>bad_any_cast</code>). برای مجموعه‌ی <b>بسته</b> از انواع، <code>std::variant</code> سریع‌تر و ایمن‌تر است. می‌توانی الگوی خودت را با یک پایه‌ی مجازی داخلی + قالب پیاده کنی (مثل <code>Shape</code> غیر ارثی).</p><div class='code-block'><div class='cb-head'>erase.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;any&gt;\n#include &lt;functional&gt;\n#include &lt;iostream&gt;\n#include &lt;memory&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\n\nint twice(int x) { return 2 * x; }\nstruct Adder { int k; int operator()(int x) const { return x + k; } };\n\nclass AnyDrawable {                                    // type erasure دست‌ساز\n    struct Concept { virtual ~Concept() = default; virtual void draw() const = 0; };\n    template &lt;class T&gt; struct Model : Concept {\n        T obj; explicit Model(T o) : obj(std::move(o)) {}\n        void draw() const override { obj.draw(); }\n    };\n    std::unique_ptr&lt;Concept&gt; p_;\npublic:\n    template &lt;class T&gt; AnyDrawable(T o) : p_(std::make_unique&lt;Model&lt;T&gt;&gt;(std::move(o))) {}\n    void draw() const { p_-&gt;draw(); }\n};\nstruct Circle { void draw() const { std::cout &lt;&lt; &quot;دایره\\n&quot;; } };\nstruct Label  { std::string t; void draw() const { std::cout &lt;&lt; &quot;برچسب: &quot; &lt;&lt; t &lt;&lt; &quot;\\n&quot;; } };   // بدون پایه‌ی مشترک!\n\nint main() {\n    std::vector&lt;std::function&lt;int(int)&gt;&gt; fs = { twice, Adder{10}, [](int x) { return x * x; } };\n    for (auto&amp; f : fs) std::cout &lt;&lt; f(5) &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n    std::vector&lt;std::any&gt; bag = { 7, std::string(&quot;hi&quot;), 3.5 };\n    for (auto&amp; a : bag) std::cout &lt;&lt; (a.type() == typeid(int) ? &quot;int&quot; : a.type() == typeid(std::string) ? &quot;string&quot; : &quot;other&quot;) &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\nint: &quot; &lt;&lt; std::any_cast&lt;int&gt;(bag[0]) &lt;&lt; &quot;\\n&quot;;\n    try { std::any_cast&lt;double&gt;(bag[0]); } catch (const std::bad_any_cast&amp;) { std::cout &lt;&lt; &quot;bad_any_cast گرفته شد\\n&quot;; }\n    std::vector&lt;AnyDrawable&gt; shapes; shapes.emplace_back(Circle{}); shapes.emplace_back(Label{&quot;سلام&quot;});\n    for (auto&amp; s : shapes) s.draw();\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>10 15 25 \nint string other \nint: 7\nbad_any_cast گرفته شد\nدایره\nبرچسب: سلام</code></pre></div>",
     "exercise": "یک EventBus ساده با map<string, vector<function<void(int)>>> بساز."
    },
    {
     "title": "کوروتین‌های C++20: تولیدکننده‌ی تنبل (Generator)",
     "content": "<p>کوروتین تابعی است که می‌تواند <b>متوقف و دوباره ادامه</b> یابد. سه کلیدواژه: <code>co_yield</code> (تولید مقدار و توقف)، <code>co_await</code> (انتظار) و <code>co_return</code>. نوع بازگشتی باید یک <b>promise_type</b> داشته باشد که رفتار را تعیین می‌کند. C++20 فقط مکانیزم را می‌دهد؛ <code>std::generator</code> در C++23 آمد. کوروتین قاب (frame) خود را معمولاً روی heap می‌گیرد؛ باید مخرب Handle آن را <code>destroy()</code> کند. کاربرد: دنباله‌های بی‌نهایت تنبل، parserها و برنامه‌نویسی ناهمگام.</p><div class='code-block'><div class='cb-head'>coro.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;coroutine&gt;\n#include &lt;iostream&gt;\n#include &lt;utility&gt;\n\ntemplate &lt;class T&gt;\nclass Generator {\npublic:\n    struct promise_type {\n        T value;\n        Generator get_return_object() { return Generator{std::coroutine_handle&lt;promise_type&gt;::from_promise(*this)}; }\n        std::suspend_always initial_suspend() noexcept { return {}; }\n        std::suspend_always final_suspend() noexcept { return {}; }\n        std::suspend_always yield_value(T v) { value = std::move(v); return {}; }\n        void return_void() {}\n        void unhandled_exception() { std::terminate(); }\n    };\n    explicit Generator(std::coroutine_handle&lt;promise_type&gt; h) : h_(h) {}\n    Generator(Generator&amp;&amp; o) noexcept : h_(std::exchange(o.h_, {})) {}\n    ~Generator() { if (h_) h_.destroy(); }\n    bool next() { h_.resume(); return !h_.done(); }\n    const T&amp; value() const { return h_.promise().value; }\nprivate:\n    std::coroutine_handle&lt;promise_type&gt; h_;\n};\n\nGenerator&lt;long&gt; fib() {                 // بی‌نهایت ولی تنبل\n    long a = 0, b = 1;\n    while (true) { co_yield a; long t = a + b; a = b; b = t; }\n}\nGenerator&lt;int&gt; countdown(int n) {\n    for (int i = n; i &gt; 0; --i) co_yield i;\n}\nint main() {\n    auto g = fib();\n    for (int i = 0; i &lt; 12 &amp;&amp; g.next(); ++i) std::cout &lt;&lt; g.value() &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n    auto c = countdown(5);\n    while (c.next()) std::cout &lt;&lt; c.value() &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;پرتاب!\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>0 1 1 2 3 5 8 13 21 34 55 89 \n5 4 3 2 1 پرتاب!</code></pre></div>",
     "exercise": "یک generator بنویس که اعداد اول را تولید کند."
    },
    {
     "title": "std::chrono: زمان، مدت و اندازه‌گیری دقیق",
     "content": "<p><code>&lt;chrono&gt;</code> سه مفهوم دارد: <b>duration</b> (مدت)، <b>time_point</b> (نقطه) و <b>clock</b>. برای اندازه‌گیری عملکرد فقط <code>steady_clock</code> (یکنواخت و غیرقابل‌تغییر) را به کار ببر نه <code>system_clock</code> (ممکن است با NTP جابجا شود). تبدیل مدت‌ها نوع‌ایمن است: <code>duration_cast&lt;milliseconds&gt;</code>، و literalهای <code>1s</code>, <code>250ms</code>, <code>2h</code>. تبدیل اعشاری با <code>duration&lt;double&gt;</code> گرد نمی‌کند. در C++20 تقویم و منطقه‌ی زمانی (<code>year_month_day</code>) هم اضافه شد. هنگام benchmark بهینه‌ساز می‌تواند کار را حذف کند؛ نتیجه را مصرف کن.</p><div class='code-block'><div class='cb-head'>chrono.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;chrono&gt;\n#include &lt;iostream&gt;\n#include &lt;numeric&gt;\n#include &lt;vector&gt;\nusing namespace std::chrono_literals;\n\nint main() {\n    auto d = 1h + 30min + 15s;\n    std::cout &lt;&lt; &quot;ثانیه: &quot; &lt;&lt; std::chrono::duration_cast&lt;std::chrono::seconds&gt;(d).count() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;دقیقه (اعشاری): &quot; &lt;&lt; std::chrono::duration&lt;double, std::ratio&lt;60&gt;&gt;(d).count() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;250ms در µs: &quot; &lt;&lt; std::chrono::duration_cast&lt;std::chrono::microseconds&gt;(250ms).count() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;ms &lt; 1s ؟ &quot; &lt;&lt; (999ms &lt; 1s) &lt;&lt; &quot;\\n&quot;;\n\n    std::vector&lt;int&gt; v(5&#x27;000&#x27;000, 1);\n    auto t0 = std::chrono::steady_clock::now();\n    long long sum = std::accumulate(v.begin(), v.end(), 0LL);\n    auto t1 = std::chrono::steady_clock::now();\n    auto ms = std::chrono::duration&lt;double, std::milli&gt;(t1 - t0).count();\n    std::cout &lt;&lt; &quot;sum=&quot; &lt;&lt; sum &lt;&lt; &quot; (نتیجه مصرف شد) زمان مثبت؟ &quot; &lt;&lt; (ms &gt;= 0) &lt;&lt; &quot;\\n&quot;;\n\n    std::chrono::year_month_day ymd{std::chrono::year{2026}, std::chrono::month{10}, std::chrono::day{10}};\n    std::cout &lt;&lt; &quot;تاریخ معتبر؟ &quot; &lt;&lt; ymd.ok() &lt;&lt; &quot; سال=&quot; &lt;&lt; int(ymd.year()) &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>ثانیه: 5415\nدقیقه (اعشاری): 90.25\n250ms در µs: 250000\nms &lt; 1s ؟ 1\nsum=5000000 (نتیجه مصرف شد) زمان مثبت؟ 1\nتاریخ معتبر؟ 1 سال=2026</code></pre></div>",
     "exercise": "تابع timeit(fn, n) بنویس که میانگین زمان n اجرا را برگرداند."
    },
    {
     "title": "std::filesystem: کار با مسیر و دایرکتوری",
     "content": "<p><code>&lt;filesystem&gt;</code> مسیر را به‌عنوان نوع <code>fs::path</code> مدل می‌کند: عملگر <code>/</code> برای ترکیب، <code>stem()</code>, <code>extension()</code>, <code>parent_path()</code>. عملیات: <code>create_directories</code>, <code>exists</code>, <code>file_size</code>, <code>copy</code>, <code>rename</code>, <code>remove_all</code> و پیمایش <code>directory_iterator</code> / <code>recursive_directory_iterator</code>. اکثر توابع نسخه‌ی <code>error_code&amp;</code> دارند که استثنا نمی‌اندازد. ترتیب پیمایش دایرکتوری نامشخص است؛ برای خروجی ثابت مرتب کن. در برابر مسیرهایی با <code>..</code> و symlink هنگام پردازش ورودی کاربر مراقب باش (path traversal).</p><div class='code-block'><div class='cb-head'>fs.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;algorithm&gt;\n#include &lt;filesystem&gt;\n#include &lt;fstream&gt;\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\nnamespace fs = std::filesystem;\n\nint main() {\n    fs::path root = fs::temp_directory_path() / &quot;cpp_fs_demo&quot;;\n    fs::remove_all(root);\n    fs::create_directories(root / &quot;src&quot; / &quot;util&quot;);\n    std::ofstream(root / &quot;src&quot; / &quot;main.cpp&quot;) &lt;&lt; &quot;int main(){}&quot;;\n    std::ofstream(root / &quot;src&quot; / &quot;util&quot; / &quot;a.h&quot;) &lt;&lt; &quot;#pragma once\\n&quot;;\n    std::ofstream(root / &quot;README.md&quot;) &lt;&lt; &quot;hello&quot;;\n\n    fs::path p = root / &quot;src&quot; / &quot;main.cpp&quot;;\n    std::cout &lt;&lt; p.filename() &lt;&lt; &quot; stem=&quot; &lt;&lt; p.stem() &lt;&lt; &quot; ext=&quot; &lt;&lt; p.extension() &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;حجم: &quot; &lt;&lt; fs::file_size(p) &lt;&lt; &quot; بایت\\n&quot;;\n\n    std::vector&lt;std::string&gt; names;\n    for (auto&amp; e : fs::recursive_directory_iterator(root))\n        names.push_back(fs::relative(e.path(), root).generic_string() + (e.is_directory() ? &quot;/&quot; : &quot;&quot;));\n    std::sort(names.begin(), names.end());\n    for (auto&amp; n : names) std::cout &lt;&lt; &quot;  &quot; &lt;&lt; n &lt;&lt; &quot;\\n&quot;;\n\n    std::error_code ec;\n    fs::rename(root / &quot;nope&quot;, root / &quot;x&quot;, ec);\n    std::cout &lt;&lt; &quot;rename ناموجود: &quot; &lt;&lt; (ec ? &quot;خطا&quot; : &quot;موفق&quot;) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;حذف‌شده‌ها: &quot; &lt;&lt; fs::remove_all(root) &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>&quot;main.cpp&quot; stem=&quot;main&quot; ext=&quot;.cpp&quot;\nحجم: 12 بایت\n  README.md\n  src/\n  src/main.cpp\n  src/util/\n  src/util/a.h\nrename ناموجود: خطا\nحذف‌شده‌ها: 6</code></pre></div>",
     "exercise": "همه‌ی فایل‌های .cpp یک پوشه را با حجم کل بشمار."
    },
    {
     "title": "type_traits، if constexpr و SFINAE مدرن",
     "content": "<p><code>&lt;type_traits&gt;</code> ویژگی‌های نوع را در زمان کامپایل می‌پرسد: <code>is_integral_v</code>, <code>is_same_v</code>, <code>remove_cvref_t</code>, <code>conditional_t</code>. <code>if constexpr</code> شاخه‌ی نادرست را <b>اصلاً کامپایل نمی‌کند</b> (در قالب)، پس یک تابع می‌تواند برای انواع متفاوت کد متفاوت داشته باشد بدون overload. SFINAE قدیمی (<code>enable_if</code>) با <code>requires</code> و concepts جایگزین شده و پیام‌های خطا خواناتر است. با <code>static_assert</code> قراردادهای نوع را مستند کن. <code>decltype</code> و <code>auto</code> نوع بازگشتی را استنتاج می‌کنند.</p><div class='code-block'><div class='cb-head'>traits.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;concepts&gt;\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;type_traits&gt;\n#include &lt;vector&gt;\n\ntemplate &lt;class T&gt;\nstd::string describe(const T&amp; v) {\n    if constexpr (std::is_integral_v&lt;T&gt;)             return &quot;عدد صحیح &quot; + std::to_string(v);\n    else if constexpr (std::is_floating_point_v&lt;T&gt;)  return &quot;اعشاری &quot; + std::to_string(v);\n    else if constexpr (std::is_same_v&lt;T, std::string&gt;) return &quot;رشته &#x27;&quot; + v + &quot;&#x27;&quot;;\n    else                                              return &quot;نوع ناشناخته&quot;;\n}\ntemplate &lt;class C&gt; requires requires(C c) { c.begin(); c.end(); }\nauto count_all(const C&amp; c) { size_t n = 0; for (auto it = c.begin(); it != c.end(); ++it) ++n; return n; }\n\ntemplate &lt;std::integral T&gt; T half(T x) { return x / 2; }\ntemplate &lt;class T&gt; using Plain = std::remove_cvref_t&lt;T&gt;;\n\nint main() {\n    std::cout &lt;&lt; describe(42) &lt;&lt; &quot; | &quot; &lt;&lt; describe(2.5) &lt;&lt; &quot; | &quot; &lt;&lt; describe(std::string(&quot;x&quot;)) &lt;&lt; &quot; | &quot; &lt;&lt; describe(&#x27;c&#x27;) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;count_all: &quot; &lt;&lt; count_all(std::vector&lt;int&gt;{1, 2, 3}) &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;half(9)=&quot; &lt;&lt; half(9) &lt;&lt; &quot;\\n&quot;;\n    // half(2.5);   // ← خطای زمان کامپایل: concept برآورده نشد\n    static_assert(std::is_same_v&lt;Plain&lt;const int&amp;&gt;, int&gt;);\n    static_assert(std::is_same_v&lt;std::conditional_t&lt;(sizeof(int) &gt; 2), long, short&gt;, long&gt;);\n    std::cout &lt;&lt; &quot;static_assertها گذشتند\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>عدد صحیح 42 | اعشاری 2.500000 | رشته &#x27;x&#x27; | عدد صحیح 99\ncount_all: 3\nhalf(9)=4\nstatic_assertها گذشتند</code></pre></div>",
     "exercise": "concept بنویس که نوع «قابل چاپ با <<» را تشخیص دهد."
    },
    {
     "title": "Structured Binding، CTAD و دستورهای مقدار اولیه",
     "content": "<p><b>Structured binding</b> (<code>auto [a, b] = pair</code>) عضوهای tuple/pair/struct/آرایه را با نام باز می‌کند؛ با <code>auto&amp;</code> ارجاع می‌گیرد نه کپی. <b>CTAD</b> نوع قالب را از سازنده استنتاج می‌کند: <code>std::pair p{1, 2.0}</code>, <code>std::vector v{1,2,3}</code>. <code>if (init; cond)</code> و <code>switch (init; x)</code> متغیر را به دامنه‌ی خود محدود می‌کنند (مثلاً <code>if (auto it = m.find(k); it != m.end())</code>). <code>[[nodiscard]]</code> نادیده‌گرفتن نتیجه را هشدار می‌دهد، و <code>std::optional</code> به‌جای مقدار جادویی (-1) به کار می‌رود.</p><div class='code-block'><div class='cb-head'>modern.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>#include &lt;array&gt;\n#include &lt;iostream&gt;\n#include &lt;map&gt;\n#include &lt;optional&gt;\n#include &lt;string&gt;\n#include &lt;tuple&gt;\n#include &lt;vector&gt;\n\nstruct Config { std::string host; int port; bool tls; };\n[[nodiscard]] std::optional&lt;int&gt; parse_port(const std::string&amp; s) {\n    try { return std::stoi(s); } catch (...) { return std::nullopt; }\n}\nstd::tuple&lt;int, int&gt; minmax_of(const std::vector&lt;int&gt;&amp; v) {\n    int lo = v[0], hi = v[0];\n    for (int x : v) { if (x &lt; lo) lo = x; if (x &gt; hi) hi = x; }\n    return {lo, hi};\n}\nint main() {\n    Config c{&quot;example.ir&quot;, 443, true};\n    auto [host, port, tls] = c;\n    std::cout &lt;&lt; host &lt;&lt; &quot;:&quot; &lt;&lt; port &lt;&lt; &quot; tls=&quot; &lt;&lt; tls &lt;&lt; &quot;\\n&quot;;\n    auto [lo, hi] = minmax_of({4, 9, 1, 7});\n    std::cout &lt;&lt; &quot;min=&quot; &lt;&lt; lo &lt;&lt; &quot; max=&quot; &lt;&lt; hi &lt;&lt; &quot;\\n&quot;;\n\n    std::map&lt;std::string, int&gt; ages{{&quot;ali&quot;, 30}, {&quot;sara&quot;, 25}};\n    for (auto&amp; [name, age] : ages) age += 1;                         // ارجاع: مقدار اصلی تغییر می‌کند\n    for (const auto&amp; [name, age] : ages) std::cout &lt;&lt; name &lt;&lt; &quot;=&quot; &lt;&lt; age &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; &quot;\\n&quot;;\n\n    if (auto it = ages.find(&quot;sara&quot;); it != ages.end()) std::cout &lt;&lt; &quot;sara پیدا شد: &quot; &lt;&lt; it-&gt;second &lt;&lt; &quot;\\n&quot;;\n    if (auto p = parse_port(&quot;8080&quot;); p) std::cout &lt;&lt; &quot;port=&quot; &lt;&lt; *p &lt;&lt; &quot;\\n&quot;;\n    std::cout &lt;&lt; &quot;نامعتبر: &quot; &lt;&lt; parse_port(&quot;abc&quot;).value_or(-1) &lt;&lt; &quot;\\n&quot;;\n\n    std::pair pr{1, 2.5}; std::array arr{1, 2, 3}; std::vector vv{1.5, 2.5};     // CTAD\n    std::cout &lt;&lt; pr.second &lt;&lt; &quot; &quot; &lt;&lt; arr.size() &lt;&lt; &quot; &quot; &lt;&lt; vv.size() &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>example.ir:443 tls=1\nmin=1 max=9\nali=31 sara=26 \nsara پیدا شد: 26\nport=8080\nنامعتبر: -1\n2.5 3 2</code></pre></div>",
     "exercise": "تابعی بنویس که struct را به‌صورت tuple برگرداند و با structured binding بخوان."
    },
    {
     "title": "الگوی PIMPL: پنهان‌سازی پیاده‌سازی و کاهش وابستگی",
     "content": "<p>در <b>Pimpl</b> (pointer to implementation) کلاس عمومی فقط یک <code>unique_ptr&lt;Impl&gt;</code> دارد و <code>Impl</code> در فایل .cpp تعریف می‌شود. مزیت‌ها: تغییر اعضای خصوصی فایل‌های وابسته را دوباره کامپایل نمی‌کند (کامپایل سریع‌تر)، سازگاری باینری (ABI) پایدار برای کتابخانه‌ها، و پنهان‌ماندن وابستگی‌های سنگین از header. تله‌ی کلاسیک: <code>unique_ptr</code> با نوع ناقص نیاز دارد مخرب و انتقال را <b>در .cpp</b> تعریف کنی (بعد از کامل‌شدن Impl). هزینه: یک تخصیص heap و یک غیرمستقیم‌سازی. در این درس هر دو «فایل» را در یک مثال نشان می‌دهیم.</p><div class='code-block'><div class='cb-head'>pimpl.cpp — g++ -std=c++20 -Wall -Wextra -O0</div><pre><code>// ===== widget.h (چیزی که مشتری می‌بیند) =====\n#include &lt;iostream&gt;\n#include &lt;memory&gt;\n#include &lt;string&gt;\n\nclass Widget {\npublic:\n    Widget(std::string name);\n    ~Widget();                                  // اعلان؛ تعریف در .cpp\n    Widget(Widget&amp;&amp;) noexcept;\n    Widget&amp; operator=(Widget&amp;&amp;) noexcept;\n    void click();\n    int clicks() const;\nprivate:\n    struct Impl;                                // نوع ناقص\n    std::unique_ptr&lt;Impl&gt; p_;\n};\n\n// ===== widget.cpp (پنهان از مشتری) =====\nstruct Widget::Impl {\n    std::string name; int clicks = 0;           // تغییر این فیلدها header را عوض نمی‌کند\n};\nWidget::Widget(std::string n) : p_(std::make_unique&lt;Impl&gt;(Impl{std::move(n), 0})) {}\nWidget::~Widget() = default;                    // اینجا Impl کامل است\nWidget::Widget(Widget&amp;&amp;) noexcept = default;\nWidget&amp; Widget::operator=(Widget&amp;&amp;) noexcept = default;\nvoid Widget::click() { ++p_-&gt;clicks; std::cout &lt;&lt; p_-&gt;name &lt;&lt; &quot; کلیک شد\\n&quot;; }\nint Widget::clicks() const { return p_-&gt;clicks; }\n\nint main() {\n    Widget w(&quot;دکمه&quot;);\n    w.click(); w.click();\n    Widget moved = std::move(w);\n    std::cout &lt;&lt; &quot;تعداد: &quot; &lt;&lt; moved.clicks() &lt;&lt; &quot; | sizeof(Widget)=&quot; &lt;&lt; sizeof(Widget) &lt;&lt; &quot; (فقط یک اشاره‌گر)\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>دکمه کلیک شد\nدکمه کلیک شد\nتعداد: 2 | sizeof(Widget)=8 (فقط یک اشاره‌گر)</code></pre></div>",
     "exercise": "یک کلاس Logger با Pimpl بنویس و هدر و پیاده‌سازی را جدا کن."
    },
    {
     "title": "std::atomic و ترتیب حافظه (memory_order)",
     "content": "<p>متغیر <code>std::atomic&lt;T&gt;</code> خواندن/نوشتن بدون data race می‌دهد. <code>fetch_add</code> و <code>compare_exchange_strong/weak</code> عملیات اتمی‌اند (CAS اساس الگوریتم‌های lock-free است). ترتیب‌ها: <code>seq_cst</code> (پیش‌فرض و امن‌ترین)، <code>acquire/release</code> (انتشار داده بین دو thread: نویسنده release، خواننده acquire) و <code>relaxed</code> (فقط اتمی‌بودن، بدون ترتیب؛ مناسب شمارنده‌ی آماری). دو thread که یک <code>int</code> معمولی را افزایش دهند UB است. اتمی‌بودن ≠ ترکیب‌پذیری: <code>if (x.load()==0) x.store(1)</code> دو عمل است و race دارد؛ از CAS استفاده کن.</p><div class='code-block'><div class='cb-head'>atomic.cpp — g++ -std=c++20 -Wall -Wextra -O1 -pthread -fsanitize=thread</div><pre><code>#include &lt;atomic&gt;\n#include &lt;iostream&gt;\n#include &lt;thread&gt;\n#include &lt;vector&gt;\n\nstd::atomic&lt;long&gt; counter{0};\nstd::atomic&lt;bool&gt; ready{false};\nint payload = 0;                                  // غیر اتمی؛ با release/acquire منتشر می‌شود\n\nint main() {\n    std::vector&lt;std::thread&gt; ts;\n    for (int i = 0; i &lt; 4; i++)\n        ts.emplace_back([] { for (int k = 0; k &lt; 100000; k++) counter.fetch_add(1, std::memory_order_relaxed); });\n    for (auto&amp; t : ts) t.join();\n    std::cout &lt;&lt; &quot;counter = &quot; &lt;&lt; counter &lt;&lt; &quot; (باید 400000)\\n&quot;;\n\n    std::thread producer([] { payload = 42; ready.store(true, std::memory_order_release); });\n    std::thread consumer([] {\n        while (!ready.load(std::memory_order_acquire)) std::this_thread::yield();\n        std::cout &lt;&lt; &quot;payload = &quot; &lt;&lt; payload &lt;&lt; &quot;\\n&quot;;                 // تضمین: 42\n    });\n    producer.join(); consumer.join();\n\n    std::atomic&lt;int&gt; x{5};\n    int expected = 5;\n    bool ok = x.compare_exchange_strong(expected, 9);\n    std::cout &lt;&lt; &quot;CAS اول: &quot; &lt;&lt; ok &lt;&lt; &quot; x=&quot; &lt;&lt; x &lt;&lt; &quot;\\n&quot;;\n    expected = 5;\n    ok = x.compare_exchange_strong(expected, 11);\n    std::cout &lt;&lt; &quot;CAS دوم: &quot; &lt;&lt; ok &lt;&lt; &quot; expected به &quot; &lt;&lt; expected &lt;&lt; &quot; به‌روز شد\\n&quot;;\n    std::cout &lt;&lt; &quot;lock_free؟ &quot; &lt;&lt; x.is_lock_free() &lt;&lt; &quot;\\n&quot;;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با g++ 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>counter = 400000 (باید 400000)\npayload = 42\nCAS اول: 1 x=9\nCAS دوم: 0 expected به 9 به‌روز شد\nlock_free؟ 1</code></pre></div>",
     "exercise": "یک spinlock با atomic_flag بساز و با ThreadSanitizer تست کن."
    }
   ],
   "quiz": [
    {
     "q": "Lambda Expression در C++ چیست؟",
     "options": [
      "یک کلاس جدید",
      "یک تابع بی‌نام قابل‌تعریف مستقیم در محل استفاده",
      "یک نوع داده",
      "یک ساختمان داده"
     ],
     "answer": 1,
     "explain": "Lambda برای توابع کوچک و موقت (مثل شرط sort) بسیار پرکاربرد است."
    },
    {
     "q": "Move Semantics چه مشکلی را حل می‌کند؟",
     "options": [
      "کندی کامپایل",
      "کپی‌کردن گران‌قیمت آبجکت‌های بزرگ هنگام انتقال مالکیت را حذف می‌کند",
      "نیاز به Template را از بین می‌برد",
      "جایگزین Pointer است"
     ],
     "answer": 1,
     "explain": "به‌جای کپی کامل، فقط مالکیت منابع داخلی منتقل می‌شود."
    },
    {
     "q": "چرا constructor خصوصی (private) در الگوی Singleton استفاده می‌شود؟",
     "options": [
      "برای سرعت",
      "برای جلوگیری از ساخت مستقیم نمونه‌های جدید از بیرون کلاس",
      "اجباری در C++ است",
      "تاثیری ندارد"
     ],
     "answer": 1,
     "explain": "این تضمین می‌کند فقط از طریق getInstance بتوان به نمونه دسترسی داشت."
    },
    {
     "q": "چرا C++ زبان غالب موتورهای بازی بزرگ است؟",
     "options": [
      "جدیدترین زبان است",
      "کنترل دقیق حافظه و عملکرد نزدیک به سخت‌افزار می‌دهد",
      "یادگیری‌اش ساده‌تر است",
      "فقط برای بازی طراحی شده"
     ],
     "answer": 1,
     "explain": "بازی‌های سنگین به کنترل عملکرد در سطح پایین نیاز دارند."
    },
    {
     "q": "RAII یعنی چه؟",
     "options": [
      "عمر منبع به عمر شیء گره می‌خورد",
      "حذف دستی",
      "کش",
      "Template"
     ],
     "answer": 0,
     "explain": "مخرب منبع را آزاد می‌کند."
    },
    {
     "q": "چرا move constructor را noexcept می‌کنیم؟",
     "options": [
      "تا vector هنگام رشد از move استفاده کند",
      "سرعت پردازنده",
      "رنگ",
      "رمزنگاری"
     ],
     "answer": 0,
     "explain": "وگرنه برای ایمنی کپی می‌کند."
    },
    {
     "q": "Concept چه کاری می‌کند؟",
     "options": [
      "نیازمندی نوع Template را صریح می‌کند",
      "حافظه آزاد می‌کند",
      "فایل می‌خواند",
      "رشته می‌سازد"
     ],
     "answer": 0,
     "explain": "پیام خطا را خوانا می‌کند."
    },
    {
     "q": "کدام یک مالکیت ندارد؟",
     "options": [
      "weak_ptr",
      "unique_ptr",
      "shared_ptr",
      "vector"
     ],
     "answer": 0,
     "explain": "فقط مشاهده می‌کند."
    },
    {
     "q": "در wrapper قالبی void w(T&& x){ f(x); } چرا نسخه‌ی rvalue تابع f صدا زده نمی‌شود؟",
     "options": [
      "x نام دارد پس lvalue است؛ باید std::forward<T>(x) به کار رود",
      "T&& همیشه lvalue است",
      "f نباید overload داشته باشد",
      "کامپایلر ناتوان است"
     ],
     "answer": 0,
     "explain": "متغیر نام‌دار حتی با نوع T&& یک lvalue است؛ forward دسته‌ی اصلی را بازمی‌گرداند."
    },
    {
     "q": "چرا انتقال را noexcept می‌کنیم؟",
     "options": [
      "تا vector هنگام رشد از انتقال به‌جای کپی استفاده کند",
      "تا کد کوتاه‌تر شود",
      "چون اجباری است",
      "تا مخرب صدا زده نشود"
     ],
     "answer": 0,
     "explain": "برای حفظ ضمانت قوی، vector فقط با انتقال noexcept از move استفاده می‌کند."
    },
    {
     "q": "چرا در shared_ptrهای حلقوی یک سمت را weak_ptr می‌کنیم؟",
     "options": [
      "تا شمارنده‌ی ارجاع هرگز صفر نشدن (نشت) رخ ندهد",
      "تا سریع‌تر شود",
      "تا thread-safe شود",
      "weak_ptr حافظه‌ی کمتری دارد"
     ],
     "answer": 0,
     "explain": "چرخه‌ی شمارنده‌ها را بالای صفر نگه می‌دارد و شیء هرگز حذف نمی‌شود."
    },
    {
     "q": "if constexpr در قالب چه تفاوتی با if دارد؟",
     "options": [
      "شاخه‌ی نادرست اصلاً کامپایل نمی‌شود",
      "در زمان اجرا سریع‌تر است",
      "فقط برای عدد کار می‌کند",
      "هیچ تفاوتی ندارد"
     ],
     "answer": 0,
     "explain": "شاخه‌ی حذف‌شده برای آن نوع نیازی به معتبر بودن ندارد."
    }
   ],
   "challenge": {
    "task": "یک Factory ساده بساز: یک تابع createShape(string type) که بر اساس ورودی ('circle' یا 'square')، یک Pointer به کلاس پایهٔ Shape (که قبلاً ساختی) از نوع فرزند مناسب برگردونه. از یک lambda هم برای مرتب‌کردن یه vector از Shape ها بر اساس area() استفاده کن.",
    "hint1": "تابع createShape باید یک if/else روی رشتهٔ ورودی داشته باشه و new Circle(...) یا new Square(...) رو برگردونه (به‌عنوان Shape*).",
    "hint2": "برای sort با lambda، شرطش باید دو تا Shape* بگیره و بر اساس ->area() مقایسه کنه: [](Shape* a, Shape* b) { return a->area() < b->area(); }",
    "solution": "Shape* createShape(string type) {\n    if (type == \"circle\") return new Circle(5);\n    else return new Square(4);\n}\n\nint main() {\n    vector<Shape*> shapes;\n    shapes.push_back(createShape(\"circle\"));\n    shapes.push_back(createShape(\"square\"));\n    sort(shapes.begin(), shapes.end(), [](Shape* a, Shape* b) {\n        return a->area() < b->area();\n    });\n    for (auto s : shapes) cout << s->area() << \" \";\n    return 0;\n}"
   }
  }
 ],
 "project": {
  "title": "سیستم مدیریت کتابخانه با OOP و STL کامل",
  "brief": "یک سیستم مدیریت کتابخانه بساز: کلاس Book (عنوان، نویسنده، موجودی)، کلاس Library که با vector<Book> لیست کتاب‌ها رو نگه داره. عملیات: افزودن کتاب، جستجو با STL algorithm (find_if)، امانت‌دادن (کاهش موجودی، با Exception اگه موجودی صفر بود)، و گزارش کتاب‌های موجود با lambda برای فیلتر.",
  "requirements": [
   "کلاس Book با encapsulation درست (فیلدهای private، متدهای public)",
   "استفاده از vector برای نگه‌داری لیست کتاب‌ها، نه آرایهٔ ثابت",
   "جستجو با std::find_if و یک lambda به‌عنوان شرط",
   "Exception Handling برای حالت 'کتاب موجود نیست' هنگام امانت‌دادن",
   "استفاده از smart pointer (unique_ptr یا shared_ptr) اگه از new برای ساخت Book استفاده می‌کنی"
  ],
  "hints": [
   "اول بدون STL/Exception فقط با یک آرایهٔ ساده و OOP کار کن تا منطق برنامه درست باشه، بعد یکی‌یکی STL و Exception رو اضافه کن."
  ]
 }
});
