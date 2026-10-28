(window.COURSES=window.COURSES||[]).push({
 "id": "csharp",
 "name": "#C — پایه تا فوق‌پیشرفته",
 "icon": "🎮",
 "kind": "theory",
 "desc": "زبان مایکروسافت — از اپلیکیشن سازمانی با ASP.NET تا ساخت بازی با Unity",
 "covers": [
  "Syntax، Variable، Condition، Loop، Function، Array، String",
  "OOP: Class/Object، Constructor، Inheritance، Interface، Polymorphism",
  "Collections، Generics، LINQ، Delegates، Events، async/await",
  ".NET Runtime، Garbage Collector، Dependency Injection",
  "ASP.NET Core، REST API، Entity Framework Core، Microservices",
  "مسیر بازی‌سازی: Unity، 2D/3D، Physics، Shader"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "اولین برنامهٔ C# و مقایسه با جاوااسکریپت",
     "content": "<p>C# زبان اصلی پلتفرم <b>.NET</b> است — از اپلیکیشن دسکتاپ تا سرور تا بازی (با Unity). سینتکس آن به جاوا/C++ نزدیک است. هر برنامه باید در یک <code class='inline'>class</code> با متد <code class='inline'>Main</code> شروع شود.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"سلام از C#!\");\n    }\n}</code></pre></div><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>dotnet run</code></pre></div>",
     "exercise": "توضیح بده چرا حتی یک برنامهٔ خیلی ساده در C# باید داخل یک class نوشته بشه — این با پایتون/جاوااسکریپت (که می‌شه مستقیم کد نوشت) چه فرقی داره؟"
    },
    {
     "title": "متغیرها، انواع داده و رشته‌ها",
     "content": "<p>C# مثل C++ تایپ ایستا دارد (<code class='inline'>int</code>، <code class='inline'>double</code>، <code class='inline'>bool</code>، <code class='inline'>string</code>)، ولی کلمهٔ کلیدی <code class='inline'>var</code> اجازه می‌دهد کامپایلر نوع را از روی مقدار حدس بزند (هنوز Static Typing است، فقط نوشتنش کوتاه‌تر می‌شود). <b>String Interpolation</b> با <code class='inline'>$\"...\"</code> شبیه f-string پایتون یا template literal جاوااسکریپت است.</p><div class='code-block'><div class='cb-head'>vars.cs</div><pre><code>var name = \"سارا\"; // نوعش خودکار string تشخیص داده می‌شه\nint age = 25;\nConsole.WriteLine($\"سلام {name}, سن: {age}\");</code></pre></div>",
     "exercise": "با string interpolation یک جمله بساز که اسم و شهرت رو با هم نشون بده."
    },
    {
     "title": "شرط، حلقه و آرایه",
     "content": "<p>ساختار if/else، switch، for/while در C# تقریباً مثل جاوا و C++ است. آرایه با <code class='inline'>[]</code> تعریف می‌شود؛ <code class='inline'>foreach</code> معادل range-based for برای پیمایش راحت است.</p><div class='code-block'><div class='cb-head'>loops.cs</div><pre><code>int[] numbers = {10, 20, 30, 40};\nint sum = 0;\nforeach (int n in numbers) {\n    sum += n;\n}\nConsole.WriteLine($\"مجموع: {sum}\");</code></pre></div>",
     "exercise": "با foreach، بزرگ‌ترین عدد یک آرایه رو پیدا کن (بدون استفاده از متد آماده Max)."
    }
   ],
   "quiz": [
    {
     "q": "هر برنامهٔ C# باید حداقل کجا شروع شود؟",
     "options": [
      "مستقیم در فایل، بدون کلاس",
      "داخل یک class با متد Main",
      "داخل یک تابع global",
      "هرجایی"
     ],
     "answer": 1,
     "explain": "C# زبانی کاملاً شیءگراست؛ حتی نقطهٔ ورود هم باید داخل یک کلاس باشد."
    },
    {
     "q": "var در C# چه کاری انجام می‌دهد؟",
     "options": [
      "نوع را حذف می‌کند (مثل جاوااسکریپت)",
      "به کامپایلر اجازه می‌دهد نوع را از روی مقدار حدس بزند؛ هنوز Static Typing است",
      "فقط برای رشته است",
      "معادل dynamic است و نوع در زمان اجرا بررسی می‌شود"
     ],
     "answer": 1,
     "explain": "نوع همچنان در زمان کامپایل مشخص و ثابت است، فقط نوشتنش کوتاه‌تر شده."
    },
    {
     "q": "foreach در C# چه کاربردی دارد؟",
     "options": [
      "تعریف کلاس",
      "پیمایش راحت یک آرایه/کالکشن بدون شمارندهٔ دستی",
      "حذف عضو از آرایه",
      "تعریف متغیر جدید"
     ],
     "answer": 1,
     "explain": "معادل range-based for در C++ یا for...of در جاوااسکریپت است."
    }
   ],
   "challenge": {
    "task": "آرایه‌ای از نمرات دانش‌آموزان بساز. با foreach: میانگین رو حساب کن، و برای هر نمره بگو 'قبول' یا 'مردود' (با string interpolation در خروجی).",
    "hint1": "برای میانگین، مجموع رو با یه حلقه جمع بزن، بعد بر طول آرایه (Length) تقسیم کن.",
    "hint2": "از یه حلقهٔ foreach دوم (یا همون اول) برای چاپ وضعیت هر دانش‌آموز استفاده کن.",
    "solution": "int[] grades = {14, 8, 19, 11, 6};\nint sum = 0;\nforeach (int g in grades) sum += g;\ndouble avg = (double)sum / grades.Length;\nConsole.WriteLine($\"میانگین: {avg}\");\nforeach (int g in grades) {\n    string status = g >= 10 ? \"قبول\" : \"مردود\";\n    Console.WriteLine($\"{g} -> {status}\");\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Class، Object و Constructor",
     "content": "<p>تعریف کلاس در C# شبیه جاوا/C++ است. <code class='inline'>Property</code> ویژگی خاص C# است — راهی خلاصه برای تعریف getter/setter بدون نوشتن متد جدا.</p><div class='code-block'><div class='cb-head'>Person.cs</div><pre><code>class Person {\n    public string Name { get; set; } // Property\n    public int Age { get; set; }\n\n    public Person(string name, int age) {\n        Name = name;\n        Age = age;\n    }\n\n    public void Greet() {\n        Console.WriteLine($\"سلام، من {Name} هستم\");\n    }\n}\n\nvar p = new Person(\"علی\", 30);\np.Greet();</code></pre></div>",
     "exercise": "یک کلاس Product با Property های Name و Price بساز و یک متد Discount(percent) که قیمت تخفیف‌خورده رو برگردونه."
    },
    {
     "title": "Inheritance و Interface",
     "content": "<p>Inheritance با <code class='inline'>:</code> تعریف می‌شود. <code class='inline'>Interface</code> یک قرارداد است — لیستی از متدها که هر کلاسی آن را «پیاده‌سازی» می‌کند باید همه را داشته باشد، بدون این‌که خودِ Interface پیاده‌سازی بدهد.</p><div class='code-block'><div class='cb-head'>interface.cs</div><pre><code>interface IShape {\n    double Area();\n}\n\nclass Circle : IShape {\n    public double Radius;\n    public Circle(double r) { Radius = r; }\n    public double Area() => Math.PI * Radius * Radius;\n}\n\nIShape shape = new Circle(5);\nConsole.WriteLine(shape.Area());</code></pre></div>",
     "exercise": "یک Interface IAnimal با متد MakeSound() بساز و دو کلاس Dog و Cat که اون رو پیاده‌سازی کنن."
    },
    {
     "title": "Polymorphism با virtual/override",
     "content": "<p>مشابه C++، برای Polymorphism واقعی باید متد والد <code class='inline'>virtual</code> باشد و فرزند آن را با <code class='inline'>override</code> بازنویسی کند.</p><div class='code-block'><div class='cb-head'>polymorphism.cs</div><pre><code>class Animal {\n    public virtual void Speak() => Console.WriteLine(\"صدای نامشخص\");\n}\nclass Dog : Animal {\n    public override void Speak() => Console.WriteLine(\"واق واق!\");\n}\n\nAnimal a = new Dog();\na.Speak(); // واق واق! - نسخهٔ فرزند اجرا می‌شه</code></pre></div>",
     "exercise": "توضیح بده اگه override رو از Speak توی Dog حذف کنی، خروجی a.Speak() چی می‌شه (نکته: بدون override، متد فرزند 'جایگزین' نمی‌شه، فقط 'پنهان' می‌شه)."
    }
   ],
   "quiz": [
    {
     "q": "Property در C# چه کاری را ساده می‌کند؟",
     "options": [
      "تعریف کلاس",
      "نوشتن getter/setter بدون متد جداگانه",
      "حذف متغیر",
      "تعریف Interface"
     ],
     "answer": 1,
     "explain": "{ get; set; } به‌صورت خودکار دسترسی کنترل‌شده به یک فیلد می‌دهد."
    },
    {
     "q": "Interface در C# چیست؟",
     "options": [
      "یک کلاس کامل با پیاده‌سازی",
      "قراردادی از متدها که کلاس‌های پیاده‌سازی‌کننده باید همه را داشته باشند",
      "نوع داده",
      "حلقهٔ خاص"
     ],
     "answer": 1,
     "explain": "Interface فقط امضای متدها را مشخص می‌کند، نه بدنهٔ آن‌ها."
    },
    {
     "q": "برای Polymorphism واقعی در C#، متد فرزند باید با چه کلیدواژه‌ای بازنویسی شود؟",
     "options": [
      "new",
      "override",
      "virtual",
      "static"
     ],
     "answer": 1,
     "explain": "override به‌همراه virtual در والد، رفتار چندریختی واقعی می‌سازد."
    }
   ],
   "challenge": {
    "task": "یک Interface IPayable با متد CalculatePay() بساز. دو کلاس Employee و Freelancer که این Interface رو پیاده‌سازی کنن (حقوق ثابت در برابر بر اساس ساعت). یک List<IPayable> بساز و با foreach حقوق همه رو چاپ کن.",
    "hint1": "برای نگه‌داشتن انواع مختلف در یک لیست مشترک، از نوع Interface (List<IPayable>) استفاده کن، نه نوع کلاس مشخص.",
    "hint2": "از using System.Collections.Generic; برای دسترسی به List<> استفاده کن.",
    "solution": "interface IPayable { double CalculatePay(); }\nclass Employee : IPayable {\n    public double CalculatePay() => 5000;\n}\nclass Freelancer : IPayable {\n    public double Hours;\n    public Freelancer(double h) { Hours = h; }\n    public double CalculatePay() => Hours * 25;\n}\n\nList<IPayable> staff = new List<IPayable> { new Employee(), new Freelancer(80) };\nforeach (var s in staff) Console.WriteLine(s.CalculatePay());"
   }
  },
  {
   "lessons": [
    {
     "title": "Collections و Generics",
     "content": "<p><code class='inline'>List&lt;T&gt;</code> معادل آرایهٔ پویا (مثل vector در C++)، <code class='inline'>Dictionary&lt;K,V&gt;</code> معادل map/dict است. <code class='inline'>&lt;T&gt;</code> همان Generics است — کد مستقل از نوع دقیق داده.</p><div class='code-block'><div class='cb-head'>collections.cs</div><pre><code>List&lt;string&gt; names = new List&lt;string&gt; { \"سارا\", \"علی\" };\nnames.Add(\"مریم\");\n\nDictionary&lt;string, int&gt; ages = new Dictionary&lt;string, int&gt;();\nages[\"سارا\"] = 25;\nages[\"علی\"] = 30;\n\nforeach (var name in names) Console.WriteLine(name);\nConsole.WriteLine(ages[\"سارا\"]);</code></pre></div>",
     "exercise": "یک Dictionary از اسم محصول به قیمت بساز، سه محصول اضافه کن، و مجموع قیمت‌ها رو با یه حلقه حساب کن."
    },
    {
     "title": "LINQ: کوئری‌نویسی روی کالکشن‌ها",
     "content": "<p><b>LINQ</b> (Language Integrated Query) اجازه می‌دهد روی هر کالکشن، عملیاتی شبیه SQL (فیلتر، مرتب‌سازی، انتخاب) با سینتکس خیلی خلاصه بنویسید — شبیه ترکیب map/filter در جاوااسکریپت.</p><div class='code-block'><div class='cb-head'>linq.cs</div><pre><code>List&lt;int&gt; numbers = new List&lt;int&gt; { 5, 12, 8, 20, 3 };\n\nvar bigNumbers = numbers.Where(n => n > 10).ToList();\nvar doubled = numbers.Select(n => n * 2).ToList();\nvar sorted = numbers.OrderBy(n => n).ToList();\n\nConsole.WriteLine(string.Join(\", \", bigNumbers));</code></pre></div>",
     "exercise": "با LINQ، از یه لیست نمرات، فقط نمرات بالای ۱۵ رو فیلتر کن و مرتبشون کن (Where + OrderBy)."
    },
    {
     "title": "Delegate و Event",
     "content": "<p><b>Delegate</b> نوعی «Pointer به تابع» در C# است — متغیری که یک تابع را نگه می‌دارد. <b>Event</b> روی Delegate ساخته شده و الگوی Publisher/Subscriber را پیاده‌سازی می‌کند: وقتی یک اتفاق رخ می‌دهد، همهٔ توابعی که «مشترک» شده‌اند خودکار صدا زده می‌شوند — مثل addEventListener در جاوااسکریپت.</p><div class='code-block'><div class='cb-head'>event.cs</div><pre><code>class Button {\n    public event Action OnClick;\n    public void Click() {\n        OnClick?.Invoke(); // اگه کسی subscribe کرده، صداش بزن\n    }\n}\n\nvar btn = new Button();\nbtn.OnClick += () => Console.WriteLine(\"دکمه کلیک شد!\");\nbtn.Click();</code></pre></div>",
     "exercise": "دو تا هندلر مختلف رو به OnClick اضافه کن (با +=) و ببین با یه بار Click()، هر دو اجرا می‌شن."
    },
    {
     "title": "async/await: برنامه‌نویسی ناهمزمان",
     "content": "<p>مشابه جاوااسکریپت، C# با <code class='inline'>async</code>/<code class='inline'>await</code> کد ناهمزمان (مثل درخواست شبکه) را می‌نویسد. تابع async باید <code class='inline'>Task</code> یا <code class='inline'>Task&lt;T&gt;</code> برگرداند.</p><div class='code-block'><div class='cb-head'>async.cs</div><pre><code>async Task&lt;string&gt; FetchDataAsync() {\n    await Task.Delay(1000); // شبیه‌سازی تاخیر شبکه\n    return \"داده دریافت شد\";\n}\n\nasync Task Main() {\n    Console.WriteLine(\"شروع...\");\n    string result = await FetchDataAsync();\n    Console.WriteLine(result);\n}</code></pre></div>",
     "exercise": "توضیح بده چرا await Task.Delay(1000) کل برنامه رو برای ۱ ثانیه 'فریز' نمی‌کنه، برخلاف چیزی که شاید فکر کنی."
    }
   ],
   "quiz": [
    {
     "q": "List<T> در C# چه چیزی است؟",
     "options": [
      "آرایهٔ اندازهٔ ثابت",
      "آرایهٔ پویا با Generics، مشابه vector در C++",
      "نوعی Dictionary",
      "یک Interface"
     ],
     "answer": 1,
     "explain": "اندازهٔ List<T> می‌تواند در زمان اجرا رشد کند."
    },
    {
     "q": "LINQ برای چه استفاده می‌شود؟",
     "options": [
      "تعریف کلاس",
      "کوئری‌گرفتن (فیلتر، مرتب‌سازی، انتخاب) از کالکشن‌ها با سینتکس خلاصه",
      "اتصال به دیتابیس مستقیم",
      "تعریف Interface"
     ],
     "answer": 1,
     "explain": "Where/Select/OrderBy از متدهای رایج LINQ هستند."
    },
    {
     "q": "Event در C# بر پایهٔ کدام مفهوم ساخته شده؟",
     "options": [
      "Interface",
      "Delegate (نوعی Pointer به تابع)",
      "Generic",
      "LINQ"
     ],
     "answer": 1,
     "explain": "Event لایه‌ای امن‌تر روی Delegate برای الگوی Publisher/Subscriber است."
    },
    {
     "q": "چرا await Task.Delay(1000) کل برنامه را فریز نمی‌کند؟",
     "options": [
      "اصلاً تاخیری ایجاد نمی‌کند",
      "به‌صورت ناهمزمان اجرا می‌شود و رشتهٔ اصلی برنامه آزاد می‌ماند",
      "فقط در تست کار می‌کند",
      "تفاوتی با Thread.Sleep ندارد"
     ],
     "answer": 1,
     "explain": "async/await اجازه می‌دهد برنامه حین انتظار، کارهای دیگر را هم انجام دهد."
    }
   ],
   "challenge": {
    "task": "یک کلاس Notifier بساز با یک Event به اسم OnMessage (از نوع Action<string>). یک متد Broadcast(string msg) که Event رو Invoke کنه. دو هندلر مختلف subscribe کن (یکی که پیام رو با Console.WriteLine چاپ کنه، یکی که طولش رو چاپ کنه) و با یه Broadcast هر دو رو تست کن.",
    "hint1": "Action<string> یک Delegate آماده است که یک پارامتر string می‌گیره و چیزی برنمی‌گردونه.",
    "hint2": "برای subscribe چند هندلر به یک Event، فقط چندبار با += اضافه کن؛ همه به‌ترتیب اجرا می‌شن.",
    "solution": "class Notifier {\n    public event Action<string> OnMessage;\n    public void Broadcast(string msg) {\n        OnMessage?.Invoke(msg);\n    }\n}\n\nvar n = new Notifier();\nn.OnMessage += (msg) => Console.WriteLine($\"پیام: {msg}\");\nn.OnMessage += (msg) => Console.WriteLine($\"طول: {msg.Length}\");\nn.Broadcast(\"سلام دنیا\");"
   }
  },
  {
   "lessons": [
    {
     "title": ".NET Runtime و Garbage Collector",
     "content": "<p>کد C# به زبان میانی <b>IL (Intermediate Language)</b> کامپایل می‌شود و روی <b>.NET Runtime (CLR)</b> اجرا می‌شود — شبیه بایت‌کد جاوا روی JVM. <b>Garbage Collector</b> حافظهٔ آبجکت‌هایی که دیگر استفاده نمی‌شوند را خودکار آزاد می‌کند — برخلاف C++ که خودتان با delete/smart pointer مدیریت می‌کردید.</p>",
     "exercise": "با توجه به چیزی که در C++ (Smart Pointer/RAII) و جاوااسکریپت (Garbage Collector مرورگر) دیدی، توضیح بده Garbage Collector در C# چه دردسری رو که در C++ داشتی از بین می‌بره."
    },
    {
     "title": "Dependency Injection (مفهومی)",
     "content": "<p><b>Dependency Injection (DI)</b> الگویی است که به‌جای این‌که یک کلاس خودش وابستگی‌هایش (مثلاً یک سرویس دیتابیس) را بسازد، آن‌ها را از بیرون «تزریق» می‌کند (معمولاً از طریق constructor). این باعث می‌شود تست‌کردن و تعویض پیاده‌سازی‌ها بدون تغییردادن کد اصلی ممکن شود — پایهٔ معماری ASP.NET Core.</p><div class='code-block'><div class='cb-head'>di.cs</div><pre><code>interface IEmailService { void Send(string to); }\nclass EmailService : IEmailService {\n    public void Send(string to) => Console.WriteLine($\"ایمیل به {to} ارسال شد\");\n}\n\nclass UserController {\n    private readonly IEmailService _emailService;\n    // به‌جای new EmailService() داخل خود کلاس، از بیرون تزریق می‌شه:\n    public UserController(IEmailService emailService) {\n        _emailService = emailService;\n    }\n}</code></pre></div>",
     "exercise": "توضیح بده اگه UserController خودش new EmailService() می‌ساخت (به‌جای گرفتنش از constructor)، چرا تست‌کردن UserController بدون فرستادن ایمیل واقعی سخت‌تر می‌شد."
    },
    {
     "title": "ASP.NET Core و REST API",
     "content": "<p><b>ASP.NET Core</b> فریم‌ورک وب مایکروسافت است — معادل C# برای Express.js. با Attribute هایی مثل <code class='inline'>[HttpGet]</code> مسیرهای API را تعریف می‌کنید.</p><div class='code-block'><div class='cb-head'>UsersController.cs</div><pre><code>[ApiController]\n[Route(\"api/[controller]\")]\npublic class UsersController : ControllerBase {\n    [HttpGet]\n    public IActionResult GetAll() {\n        return Ok(new[] { \"سارا\", \"علی\" });\n    }\n\n    [HttpGet(\"{id}\")]\n    public IActionResult GetById(int id) {\n        return Ok(new { Id = id, Name = \"کاربر نمونه\" });\n    }\n}</code></pre></div>",
     "exercise": "توضیح بده Attribute های [HttpGet] و [Route] دقیقاً چه نقشی دارن — با چیزی که در Express (app.get('/users', ...)) دیدی مقایسه کن."
    },
    {
     "title": "Entity Framework Core: ORM برای دیتابیس",
     "content": "<p><b>Entity Framework Core (EF Core)</b> یک ORM (Object-Relational Mapper) است — به‌جای نوشتن SQL خام، با کلاس‌های C# معمولی با دیتابیس کار می‌کنید؛ EF Core خودش SQL لازم را می‌سازد. این شبیه Mongoose/Sequelize در دنیای Node است.</p><div class='code-block'><div class='cb-head'>efcore.cs</div><pre><code>public class Product {\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public decimal Price { get; set; }\n}\n\npublic class AppDbContext : DbContext {\n    public DbSet&lt;Product&gt; Products { get; set; }\n}\n\n// استفاده:\nvar products = dbContext.Products.Where(p => p.Price > 100000).ToList();</code></pre></div>",
     "exercise": "توضیح بده چرا نوشتن dbContext.Products.Where(...) با LINQ، خواناتر از نوشتن مستقیم SQL خام برای همون کوئری‌ست — با درسی که قبلاً از SQL خام دیدی مقایسه کن."
    },
    {
     "title": "مسیر بازی‌سازی: C# در Unity",
     "content": "<p><b>Unity</b> یکی از محبوب‌ترین موتورهای بازی است و اسکریپت‌نویسی‌اش با C# انجام می‌شود. یک <code class='inline'>MonoBehaviour</code> کلاس پایهٔ هر «رفتار» قابل‌اتصال به یک آبجکت در صحنه است؛ متدهای ویژه‌ای مثل <code class='inline'>Start()</code> (یک‌بار در شروع) و <code class='inline'>Update()</code> (هر فریم) توسط خودِ Unity صدا زده می‌شوند.</p><div class='code-block'><div class='cb-head'>PlayerMovement.cs (در پروژهٔ Unity)</div><pre><code>using UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour {\n    public float speed = 5f;\n\n    void Update() {\n        float move = Input.GetAxis(\"Horizontal\") * speed * Time.deltaTime;\n        transform.Translate(move, 0, 0);\n    }\n}</code></pre></div><p>مسیر کامل: C# → Unity → بازی‌های 2D → 3D → Physics (برخورد/جاذبه) → Animation → Shader (جلوه‌های بصری) → Multiplayer.</p>",
     "exercise": "توضیح بده چرا کد حرکت بازیکن باید داخل Update() (که هر فریم اجرا می‌شه) نوشته بشه، نه داخل Start() (که فقط یک‌بار اجرا می‌شه)."
    },
    {
     "title": "Testing و Clean Architecture در .NET",
     "content": "<p>در .NET تست‌ها با xUnit نوشته می‌شوند: <code class='inline'>[Fact]</code> یک تست است و <code class='inline'>Assert.Equal</code> نتیجه را می‌سنجد. معماری لایه‌ای (Controller، Service، Repository) و تزریق وابستگی تست را آسان می‌کند.</p><div class='code-block'><div class='cb-head'>MathTests.cs</div><pre><code>public class MathTests {\n  [Fact]\n  public void Add_Works() => Assert.Equal(5, Calc.Add(2, 3));\n}</code></pre></div>",
     "exercise": "سرویسی بنویس که Repository را از طریق interface بگیرد و تست کن."
    },
    {
     "title": "async/await در عمق: Task، لغو و ValueTask",
     "content": "<p><code class='inline'>async</code> متد را به ماشین حالت تبدیل می‌کند و رشته را هنگام انتظار آزاد می‌گذارد. هرگز <code class='inline'>.Result</code> یا <code class='inline'>.Wait()</code> نزن (Deadlock). لغو را با <code class='inline'>CancellationToken</code> از بالا تا پایین عبور بده. <code class='inline'>ValueTask</code> برای مسیرهای پرتکرار که اغلب همگام تمام می‌شوند تخصیص حافظه را کم می‌کند. در کتابخانه‌ها <code class='inline'>ConfigureAwait(false)</code> بگذار.<div class='code-block'><div class='cb-head'>Async.cs</div><pre><code>public async Task&lt;string> GetAsync(string url, CancellationToken ct)\n{\n    using var http = new HttpClient();\n    var res = await http.GetAsync(url, ct);\n    res.EnsureSuccessStatusCode();\n    return await res.Content.ReadAsStringAsync(ct);\n}</code></pre></div></p>",
     "exercise": "درخواست را با timeout سه‌ثانیه‌ای و لغو بنویس."
    },
    {
     "title": "LINQ در عمق: اجرای تنبل و IQueryable",
     "content": "<p>اکثر عملگرهای LINQ تنبل‌اند: تا وقتی <code class='inline'>ToList</code>، <code class='inline'>Count</code> یا حلقه نباشد اجرا نمی‌شوند و ممکن است چندبار اجرا شوند. <code class='inline'>IEnumerable</code> در حافظه فیلتر می‌کند ولی <code class='inline'>IQueryable</code> عبارت را به SQL ترجمه می‌کند؛ پس فیلتر را قبل از <code class='inline'>ToList</code> بگذار. از <code class='inline'>GroupBy</code>، <code class='inline'>Join</code> و <code class='inline'>Aggregate</code> برای گزارش استفاده کن.<div class='code-block'><div class='cb-head'>Linq.cs</div><pre><code>var top = orders\n    .Where(o => o.Total > 100)\n    .GroupBy(o => o.CustomerId)\n    .Select(g => new { g.Key, Sum = g.Sum(o => o.Total) })\n    .OrderByDescending(x => x.Sum)\n    .Take(5)\n    .ToList();</code></pre></div></p>",
     "exercise": "یک کوئری EF را بنویس که فیلتر در SQL اجرا شود، نه در حافظه."
    },
    {
     "title": "Record، Pattern Matching و Switch Expression",
     "content": "<p><code class='inline'>record</code> نوع داده‌ی تغییرناپذیر با برابری مقداری و <code class='inline'>with</code> برای کپی تغییریافته است. Pattern Matching (نوعی، ویژگی، رابطه‌ای، لیست) و switch expression شرط‌های تو در تو را خوانا می‌کنند و کامپایلر کامل‌بودن را بررسی می‌کند.<div class='code-block'><div class='cb-head'>Records.cs</div><pre><code>public record Order(int Id, decimal Total, string Status);\n\nstatic string Describe(Order o) => o switch\n{\n    { Status: \"Paid\", Total: > 1000 } => \"مهم\",\n    { Status: \"Paid\" } => \"عادی\",\n    { Status: \"Cancelled\" } => \"لغو\",\n    _ => \"نامشخص\"\n};</code></pre></div></p>",
     "exercise": "وضعیت‌های یک سفارش را با switch expression مدل کن."
    },
    {
     "title": "Generics، Constraint و Variance",
     "content": "<p><code class='inline'>where T : class, new()</code> یا <code class='inline'>where T : INumber&lt;T&gt;</code> قابلیت‌های لازم نوع را مشخص می‌کند. Variance: <code class='inline'>out T</code> (covariance، فقط خروجی) و <code class='inline'>in T</code> (contravariance، فقط ورودی) در اینترفیس‌ها اجازه‌ی جایگزینی امن می‌دهد (<code class='inline'>IEnumerable&lt;out T&gt;</code>). Generic Math در .NET 7+ عملگرها را روی نوع عمومی ممکن کرده است.</p>",
     "exercise": "یک Repository&lt;T&gt; عمومی با constraint بنویس."
    },
    {
     "title": "حافظه و GC: نسل‌ها، Span و IDisposable",
     "content": "<p>GC سه نسل دارد (0، 1، 2)؛ شیء‌های کوتاه‌عمر ارزان‌اند و بزرگ‌ها (LOH) گران. <code class='inline'>struct</code> مقداری و روی Stack است ولی کپی‌شدنی. <code class='inline'>Span&lt;T&gt;</code> برش بدون تخصیص می‌دهد و <code class='inline'>ArrayPool</code> بافر را بازیافت می‌کند. منبع غیرمدیریتی (فایل، سوکت) را با <code class='inline'>using</code> و <code class='inline'>IDisposable</code> آزاد کن.</p>",
     "exercise": "یک پارسر را با Span بدون تخصیص رشته‌ی میانی بنویس."
    },
    {
     "title": "Entity Framework Core: عملکرد و الگوهای درست",
     "content": "<p>برای خواندن فقط <code class='inline'>AsNoTracking()</code> بگذار. N+1 را با <code class='inline'>Include</code> یا پروجکشن <code class='inline'>Select</code> حل کن و فقط ستون‌های لازم را بخوان. تغییرات را دسته‌ای <code class='inline'>SaveChanges</code> کن. مهاجرت‌ها با <code class='inline'>dotnet ef migrations add</code> مدیریت می‌شوند. برای همزمانی خوش‌بینانه از ستون <code class='inline'>RowVersion</code> استفاده کن.<div class='code-block'><div class='cb-head'>Ef.cs</div><pre><code>var list = await db.Orders\n    .AsNoTracking()\n    .Where(o => o.UserId == id)\n    .Select(o => new { o.Id, o.Total })\n    .ToListAsync(ct);</code></pre></div></p>",
     "exercise": "کوئری یک گزارش را با پروجکشن بازنویسی و تعداد SQL را بشمار."
    },
    {
     "title": "Minimal API و Middleware Pipeline",
     "content": "<p>درخواست از زنجیره‌ی Middleware عبور می‌کند و ترتیب ثبت مهم است (استثنا، HTTPS، احراز هویت، مجوز، endpoint). Minimal API با کد کم endpoint می‌سازد و Filterها اعتبارسنجی را مشترک می‌کنند. خروجی را با <code class='inline'>Results</code> و کد وضعیت درست بده و از <code class='inline'>ProblemDetails</code> برای خطا استفاده کن.<div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>var app = WebApplication.CreateBuilder(args).Build();\napp.MapGet(\"/orders/{id:int}\", async (int id, AppDb db) =>\n    await db.Orders.FindAsync(id) is { } o ? Results.Ok(o) : Results.NotFound());\napp.Run();</code></pre></div></p>",
     "exercise": "یک Middleware بنویس که زمان هر درخواست را لاگ کند."
    },
    {
     "title": "Dependency Injection: Lifetime و اشتباهات",
     "content": "<p>سه عمر: Transient (هر بار جدید)، Scoped (هر درخواست) و Singleton (یک‌بار). خطای رایج «Captive Dependency»: Singleton که Scoped (مثل DbContext) را نگه می‌دارد. برای دسترسی از Singleton به Scoped از <code class='inline'>IServiceScopeFactory</code> استفاده کن. به‌جای <code class='inline'>new</code>، وابستگی را از سازنده بگیر تا قابل‌تست باشد.</p>",
     "exercise": "یک سرویس Singleton را طوری بنویس که با DbContext درست کار کند."
    },
    {
     "title": "احراز هویت و مجوز: JWT و Policy",
     "content": "<p>با <code class='inline'>AddAuthentication().AddJwtBearer()</code> توکن اعتبارسنجی می‌شود (Issuer، Audience، امضا، انقضا را حتماً فعال کن). مجوز را با Policy و Claim بنویس: <code class='inline'>RequireClaim</code> یا <code class='inline'>IAuthorizationHandler</code> برای قوانین پیچیده (مالکیت منبع). کلید را از Secret Manager یا Key Vault بخوان.</p>",
     "exercise": "یک policy بنویس که فقط مالک سفارش به آن دسترسی داشته باشد."
    },
    {
     "title": "همزمانی: Channel، Parallel و SemaphoreSlim",
     "content": "<p><code class='inline'>Channel&lt;T&gt;</code> صف تولیدکننده/مصرف‌کننده‌ی async با پشتیبانی Backpressure است. <code class='inline'>Parallel.ForEachAsync</code> با <code class='inline'>MaxDegreeOfParallelism</code> کار را موازی و محدود می‌کند و <code class='inline'>SemaphoreSlim</code> همزمانی را کنترل می‌کند. در async از <code class='inline'>lock</code> استفاده نکن (به‌جای آن SemaphoreSlim). ساختارهای <code class='inline'>ConcurrentDictionary</code> را برای دسترسی مشترک بشناس.</p>",
     "exercise": "۱۰۰ درخواست را با حداکثر ۵ همزمانی انجام بده."
    },
    {
     "title": "تست: xUnit، Moq و WebApplicationFactory",
     "content": "<p>xUnit با <code class='inline'>[Fact]</code> و <code class='inline'>[Theory]</code> (چند ورودی). وابستگی‌های بیرونی را با Moq/NSubstitute شبیه‌سازی کن. <code class='inline'>WebApplicationFactory</code> کل API را در حافظه بالا می‌آورد و تست یکپارچه می‌دهد و با Testcontainers دیتابیس واقعی در Docker. تست‌ها باید مستقل و سریع باشند.<div class='code-block'><div class='cb-head'>Test.cs</div><pre><code>[Theory]\n[InlineData(2, 3, 5)]\n[InlineData(-1, 1, 0)]\npublic void Add_Works(int a, int b, int expected)\n    => Assert.Equal(expected, Calc.Add(a, b));</code></pre></div></p>",
     "exercise": "یک تست یکپارچه برای یک endpoint با دیتابیس موقت بنویس."
    },
    {
     "title": "کارایی و استقرار: BenchmarkDotNet، لاگ و Docker",
     "content": "<p>قبل از بهینه‌سازی با <b>BenchmarkDotNet</b> اندازه بگیر. لاگ ساختاریافته با Serilog/ILogger و ردیابی با OpenTelemetry مشکل را در تولید پیدا می‌کند. Docker چندمرحله‌ای (sdk برای build، aspnet برای اجرا)، endpoint سلامت (<code class='inline'>MapHealthChecks</code>) و Native AOT برای شروع سریع و حافظه‌ی کم در سرویس‌های کوچک.</p>",
     "exercise": "یک Dockerfile چندمرحله‌ای برای API بنویس."
    },
    {
     "title": "Nullable Reference Types: پایان NullReferenceException",
     "content": "<p>از C# 8 به بعد می‌شود به کامپایلر گفت کدام ارجاع‌ها <b>می‌توانند null باشند</b>. با <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> در csproj، <code>string</code> یعنی «هرگز null» و <code>string?</code> یعنی «ممکن است null». کامپایلر اگر قبل از بررسی null به مقدار <code>string?</code> دسترسی بدهی هشدار می‌دهد. ابزارها: <code>?.</code> (دسترسی امن)، <code>??</code> (مقدار پیش‌فرض)، <code>??=</code> (انتساب اگر null)، و عملگر <code>!</code> («می‌دانم null نیست»؛ با احتیاط، چون هشدار را فقط خاموش می‌کند و محافظ نیست). برای ورودی عمومی هم <code>ArgumentNullException.ThrowIfNull(x)</code> بنویس. هشدارهای nullable را به خطا تبدیل کن (<code>TreatWarningsAsErrors</code>) تا در پروژه‌ی جدید رعایت شود.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>#nullable enable\nstring? name = GetNameOrNull();\nConsole.WriteLine(name?.Length ?? 0);          // دسترسی امن + پیش‌فرض\n\nstring Greet(string? n) =&gt; $&quot;سلام {n ?? &quot;مهمان&quot;}&quot;;\n\nvoid Save(User user)\n{\n    ArgumentNullException.ThrowIfNull(user);     // اعتبارسنجی ورودی\n    // ...\n}\nrecord User(string Name, string? Email);          // Email اختیاری است</code></pre></div>",
     "exercise": "یک پروژه‌ی قدیمی را با Nullable فعال کن و ۵ هشدار را درست رفع کن."
    },
    {
     "title": "رشته‌ها در عمق: درون‌یابی، StringBuilder و Span",
     "content": "<p>رشته در .NET <b>تغییرناپذیر</b> است؛ هر <code>+</code> یا <code>Replace</code> رشته‌ی جدید می‌سازد و در حلقه حافظه و GC را سنگین می‌کند. برای ساخت تدریجی از <code>StringBuilder</code> استفاده کن. درون‌یابی <code>$\"...\"</code> خوانا است و با <code>{x:F2}</code> و <code>{n,8}</code> قالب‌بندی می‌کند؛ رشته‌ی خام <code>\"\"\"...\"\"\"</code> (C# 11) متن چندخطی و JSON را بدون escape می‌دهد. مقایسه را با <code>StringComparison.OrdinalIgnoreCase</code> انجام بده (نه <code>ToLower()</code>) تا تخصیص اضافه و خطای فرهنگ (مثل ترکی I) نداشته باشی. برای تجزیه‌ی بدون تخصیص از <code>ReadOnlySpan&lt;char&gt;</code> و <code>AsSpan()</code> بهره بگیر.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>using System.Text;\n\nvar sb = new StringBuilder();\nfor (int i = 0; i &lt; 5; i++) sb.Append(i).Append(&#x27;,&#x27;);\nsb.Length--;                                    // حذف ویرگول آخر\nConsole.WriteLine(sb);                          // 0,1,2,3,4\n\ndecimal price = 12345.678m;\nConsole.WriteLine($&quot;قیمت: {price:N2}  [{5,6}]  [{&quot;ab&quot;,-6}]&quot;);\n\nbool same = string.Equals(&quot;Ali&quot;, &quot;ALI&quot;, StringComparison.OrdinalIgnoreCase);\n\nReadOnlySpan&lt;char&gt; span = &quot;key=value&quot;.AsSpan();\nint eq = span.IndexOf(&#x27;=&#x27;);\nReadOnlySpan&lt;char&gt; key = span[..eq];            // بدون کپی و تخصیص\nConsole.WriteLine(key.ToString());</code></pre></div>",
     "exercise": "تابعی بنویس که ۱۰۰۰۰ عدد را با StringBuilder به یک رشته‌ی CSV تبدیل کند و با الحاق + مقایسه کن."
    },
    {
     "title": "استثناها در C#: فیلتر، سفارشی‌سازی و بازپرتاب درست",
     "content": "<p><code>try/catch/finally</code> ساختار پایه است ولی جزئیات مهم‌اند. <b>فیلتر استثنا</b> (<code>catch (HttpRequestException e) when (e.StatusCode == 404)</code>) بدون باز کردن stack فقط وقتی شرط برقرار است catch می‌کند. برای بازپرتاب از <code>throw;</code> استفاده کن نه <code>throw e;</code> چون دومی stack trace اصلی را پاک می‌کند. استثنای سفارشی را از <code>Exception</code> مشتق کن و سه سازنده‌ی استاندارد (خالی، پیام، پیام + inner) بده. استثنا برای <b>شرایط غیرمنتظره</b> است نه جریان عادی (برای «شاید نباشد» از <code>TryParse</code> و الگوی <code>Try...</code> استفاده کن؛ پرتاب گران است). همیشه <code>InnerException</code> را حفظ کن. <code>using</code> منابع را حتی با استثنا آزاد می‌کند. در برنامه‌های وب یک نقطه‌ی مرکزی برای تبدیل استثنا به پاسخ (middleware) بگذار.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>public class InsufficientFundsException : Exception\n{\n    public decimal Balance { get; }\n    public decimal Needed { get; }\n    public InsufficientFundsException(decimal balance, decimal needed)\n        : base($&quot;موجودی {balance} کافی نیست؛ {needed} لازم است&quot;) =&gt; (Balance, Needed) = (balance, needed);\n}\n\ntry { Withdraw(50); }\ncatch (InsufficientFundsException e) when (e.Needed - e.Balance &lt; 100)\n{\n    Console.WriteLine(&quot;کمبود جزئی: &quot; + e.Message);\n}\ncatch (Exception)\n{\n    throw;                      // بازپرتاب با حفظ stack trace (نه throw e;)\n}\n\nif (!int.TryParse(input, out var n)) { /* مسیر عادی بدون استثنا */ }</code></pre></div>",
     "exercise": "استثنای InsufficientFundsException با فیلد Balance و Needed بساز و در catch با فیلتر بررسی کن."
    },
    {
     "title": "yield و IEnumerable: دنباله‌های تنبل",
     "content": "<p>متد با <code>yield return</code> یک <b>iterator</b> می‌سازد: کد تا وقتی کسی دنباله را نخواند اجرا نمی‌شود و هر بار فقط یک عنصر تولید می‌کند. نتیجه: حافظه‌ی ثابت برای دنباله‌های بزرگ یا بی‌نهایت، و ترکیب‌پذیری با LINQ. تله‌ی کلاسیک: <b>اجرای چندباره</b> — هر بار که روی <code>IEnumerable</code> تنبل پیمایش کنی، کار از نو انجام می‌شود (مثلاً کوئری دیتابیس دوباره)؛ اگر لازم است یک‌بار <code>ToList()</code> بزن. اعتبارسنجی آرگومان در متد iterator تا اولین پیمایش به تعویق می‌افتد؛ برای اعتبارسنجی فوری متد را به دو بخش (بیرونی بدون yield + تابع محلی iterator) بشکن. <code>IAsyncEnumerable&lt;T&gt;</code> و <code>await foreach</code> همین را برای جریان ناهمگام می‌دهد.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>static IEnumerable&lt;long&gt; Fibonacci()\n{\n    long a = 0, b = 1;\n    while (true) { yield return a; (a, b) = (b, a + b); }     // بی‌نهایت ولی تنبل\n}\nvar first10 = Fibonacci().Take(10).ToList();\nConsole.WriteLine(string.Join(&quot;, &quot;, first10));\n\nstatic IEnumerable&lt;int&gt; Numbers(int n)\n{\n    if (n &lt; 0) throw new ArgumentOutOfRangeException(nameof(n));   // اینجا فوراً اعتبارسنجی نمی‌شود!\n    return Iterator(n);\n    static IEnumerable&lt;int&gt; Iterator(int n) { for (int i = 0; i &lt; n; i++) yield return i; }\n}</code></pre></div>",
     "exercise": "یک generator بنویس که اعداد اول را تنبل تولید کند و با Take(10) استفاده کن."
    },
    {
     "title": "Extension Method: افزودن متد به نوع‌های موجود",
     "content": "<p>متد الحاقی به‌ظاهر روی نوعی که نمی‌توانی تغییرش بدهی (مثل <code>string</code> یا <code>IEnumerable</code>) «متد اضافه می‌کند». شرایط: کلاس <code>static</code>، متد <code>static</code> و پارامتر اول با <code>this</code>. در واقع یک تابع static است که با ظاهر متد فراخوانی می‌شود؛ پس روی null هم می‌توان صدایش زد (اگر خودت بررسی نکنی NullReference می‌گیری). تمام LINQ همین‌طور نوشته شده. قواعد خوب: نام و فضای‌نام روشن، رفتار طبیعی، و متد instance هم‌نام همیشه برنده است. زیاده‌روی نکن: افزونه‌ی «همه‌چیز» روی <code>string</code> کشف‌پذیری را خراب می‌کند. برای بازنویسی تعریف نوع خودت از متد عادی یا سازنده بهره بگیر.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>public static class StringExtensions\n{\n    public static string Truncate(this string s, int max) =&gt;\n        s.Length &lt;= max ? s : s[..max] + &quot;…&quot;;\n\n    public static bool IsNullOrBlank(this string? s) =&gt; string.IsNullOrWhiteSpace(s);\n}\npublic static class EnumerableExtensions\n{\n    public static IEnumerable&lt;IEnumerable&lt;T&gt;&gt; Chunked&lt;T&gt;(this IEnumerable&lt;T&gt; src, int size) =&gt;\n        src.Chunk(size);        // از .NET 6 داخلی هم هست؛ نمونه‌ی ساخت دستی هم ممکن است\n}\nConsole.WriteLine(&quot;یک عنوان خیلی بلند برای نمایش&quot;.Truncate(10));</code></pre></div>",
     "exercise": "متد الحاقی ToSlug برای string بنویس که عنوان فارسی/انگلیسی را به آدرس تبدیل کند."
    },
    {
     "title": "برابری و مقایسه: IEquatable، IComparable و عملگرها",
     "content": "<p>برابری پیش‌فرض نوع‌های مرجع بر اساس <b>آدرس</b> است و نوع‌های ارزشی بر اساس بازتاب (کند). برای رفتار درست: <code>IEquatable&lt;T&gt;</code> را پیاده کن، <code>Equals(object)</code> و <code>GetHashCode()</code> را هماهنگ override کن (قاعده‌ی طلایی: اشیاء برابر ⇒ hash برابر؛ در غیر این صورت در <code>Dictionary/HashSet</code> گم می‌شوند)، و در صورت نیاز عملگرهای <code>==</code> و <code>!=</code>. <code>record</code> همه‌ی این‌ها را خودکار می‌دهد (برابری مقداری). برای مرتب‌سازی <code>IComparable&lt;T&gt;</code> و <code>CompareTo</code> یا یک <code>IComparer&lt;T&gt;</code> جدا. از <code>HashCode.Combine(a, b)</code> برای hash استفاده کن. فیلدهای قابل‌تغییر را در hash نگذار.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>public sealed class Point : IEquatable&lt;Point&gt;, IComparable&lt;Point&gt;\n{\n    public int X { get; }\n    public int Y { get; }\n    public Point(int x, int y) =&gt; (X, Y) = (x, y);\n\n    public bool Equals(Point? o) =&gt; o is not null &amp;&amp; X == o.X &amp;&amp; Y == o.Y;\n    public override bool Equals(object? obj) =&gt; Equals(obj as Point);\n    public override int GetHashCode() =&gt; HashCode.Combine(X, Y);\n    public int CompareTo(Point? o) =&gt; o is null ? 1 : (X, Y).CompareTo((o.X, o.Y));\n    public static bool operator ==(Point? a, Point? b) =&gt; a is null ? b is null : a.Equals(b);\n    public static bool operator !=(Point? a, Point? b) =&gt; !(a == b);\n}\nvar set = new HashSet&lt;Point&gt; { new(1, 2) };\nConsole.WriteLine(set.Contains(new Point(1, 2)));   // True</code></pre></div>",
     "exercise": "کلاس Money با Amount و Currency بساز که برابری و مرتب‌سازی (فقط هم‌ارز) داشته باشد."
    },
    {
     "title": "struct، record struct و کلاس: انتخاب نوع درست",
     "content": "<p><b>class</b> نوع مرجعی روی heap است و کپی‌شدنش فقط آدرس را کپی می‌کند؛ <b>struct</b> نوع ارزشی است که معمولاً روی stack یا درون شیء دیگر قرار می‌گیرد و به‌صورت مقدار کپی می‌شود (بدون فشار GC). قاعده: struct برای داده‌ی <b>کوچک (≤ ۱۶ بایت)، تغییرناپذیر و مفهومی مقدار</b> (نقطه، مبلغ، رنگ). struct بزرگ یا تغییرپذیر باگ می‌سازد (کپی‌های پنهان). <code>readonly struct</code> کامپایلر را مطمئن می‌کند و کپی دفاعی حذف می‌شود. <code>record struct</code> (C# 10) برابری مقداری و <code>with</code> را برای struct می‌دهد. <code>record class</code> برای مدل‌های داده‌ی تغییرناپذیر مرجعی. از boxing (تبدیل struct به object/اینترفیس) در حلقه‌های داغ پرهیز کن.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>public readonly record struct Money(decimal Amount, string Currency)\n{\n    public Money Add(Money o) =&gt;\n        Currency == o.Currency ? this with { Amount = Amount + o.Amount }\n                               : throw new InvalidOperationException(&quot;ارز متفاوت&quot;);\n}\npublic record class Customer(string Name, string Email);   // مرجعی، تغییرناپذیر، برابری مقداری\n\nvar a = new Money(100, &quot;IRR&quot;);\nvar b = a with { Amount = 250 };         // کپی با تغییر\nConsole.WriteLine($&quot;{a} / {b} / {a == new Money(100, &quot;IRR&quot;)}&quot;);</code></pre></div>",
     "exercise": "یک نوع Temperature را یک‌بار با class و یک‌بار با readonly record struct بنویس و تفاوت کپی را نشان بده."
    },
    {
     "title": "Property پیشرفته: init، required و Backing Field",
     "content": "<p>Property به‌جای فیلد عمومی بساز تا بعداً بتوانی منطق اضافه کنی. <code>{ get; set; }</code> خودکار، <code>{ get; init; }</code> فقط هنگام ساخت قابل‌انتساب (برای شیء تغییرناپذیر)، <code>required</code> (C# 11) سازنده/مقداردهنده‌ی اولیه را مجبور می‌کند مقدار بدهد. <code>field</code> (C# 13 preview/14) به backing field خودکار دسترسی می‌دهد؛ تا آن زمان فیلد خصوصی دستی بنویس. property محاسبه‌شده <code>=&gt;</code> هر بار حساب می‌شود (سنگین نباشد). property را همیشه به‌صورت <b>سریع و بدون عارضه‌ی جانبی</b> نگه دار؛ کار گران را متد بساز. <code>init</code> با <code>with</code> در record هم کار می‌کند. برای DTO و مدل پیکربندی <code>required</code> + <code>init</code> ترکیب عالی است.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>public class Order\n{\n    public required Guid Id { get; init; }\n    public required string CustomerEmail { get; init; }\n    public IReadOnlyList&lt;OrderLine&gt; Lines { get; init; } = [];\n\n    private decimal _discount;\n    public decimal Discount\n    {\n        get =&gt; _discount;\n        set =&gt; _discount = value is &lt; 0 or &gt; 1 ? throw new ArgumentOutOfRangeException(nameof(value)) : value;\n    }\n    public decimal Total =&gt; Lines.Sum(l =&gt; l.Price * l.Qty) * (1 - _discount);   // محاسبه‌شده\n}\npublic record OrderLine(string Sku, decimal Price, int Qty);\n\nvar o = new Order { Id = Guid.NewGuid(), CustomerEmail = &quot;a@x.ir&quot; };   // required: بدون این‌ها خطای کامپایل</code></pre></div>",
     "exercise": "کلاس Order با required Id و init Items و property محاسبه‌شده‌ی Total بنویس."
    },
    {
     "title": "JSON با System.Text.Json: سریال‌سازی، گزینه‌ها و تله‌ها",
     "content": "<p><code>System.Text.Json</code> کتابخانه‌ی استاندارد و سریع JSON است. <code>JsonSerializer.Serialize/Deserialize</code> با <code>JsonSerializerOptions</code>: <code>PropertyNamingPolicy = JsonNamingPolicy.CamelCase</code>، <code>WriteIndented</code>، <code>DefaultIgnoreCondition = WhenWritingNull</code>. به‌طور پیش‌فرض <b>حساس به حروف</b> است (<code>PropertyNameCaseInsensitive = true</code> برای ورودی خارجی). فیلدها و propertyهای غیرعمومی نادیده گرفته می‌شوند. تبدیل enum به رشته با <code>JsonStringEnumConverter</code>. برای رفتار خاص <code>JsonConverter&lt;T&gt;</code> سفارشی یا اتریبیوت‌های <code>[JsonPropertyName]</code>، <code>[JsonIgnore]</code>. ورودی نامعتبر <code>JsonException</code> می‌دهد؛ ورودی خارجی را همیشه در try/catch بگیر. برای کارایی بالا Source Generator (<code>JsonSerializerContext</code>) بدون reflection و سازگار با AOT است.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>using System.Text.Json;\nusing System.Text.Json.Serialization;\n\nvar options = new JsonSerializerOptions(JsonSerializerDefaults.Web)    // camelCase + case-insensitive\n{\n    WriteIndented = true,\n    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,\n    Converters = { new JsonStringEnumConverter() }\n};\nvar json = JsonSerializer.Serialize(new Product(&quot;قلم&quot;, 1500, Status.Active, null), options);\nConsole.WriteLine(json);\n\ntry { var p = JsonSerializer.Deserialize&lt;Product&gt;(&quot;{ not json }&quot;, options); }\ncatch (JsonException e) { Console.WriteLine(&quot;ورودی خراب: &quot; + e.Message); }\n\npublic enum Status { Active, Archived }\npublic record Product(string Name, decimal Price, Status Status, string? Note);</code></pre></div>",
     "exercise": "یک JSON با کلیدهای snake_case را به رکورد C# بخوان (PropertyNamingPolicy = SnakeCaseLower)."
    },
    {
     "title": "HttpClient درست: IHttpClientFactory و تله‌ی Socket Exhaustion",
     "content": "<p>ساخت <code>new HttpClient()</code> برای هر درخواست و dispose آن باعث <b>تمام‌شدن سوکت‌ها</b> (TIME_WAIT) می‌شود؛ نگه‌داشتن یک نمونه‌ی ثابت برای همیشه هم تغییرات DNS را نمی‌بیند. راه‌حل استاندارد: <code>IHttpClientFactory</code> که اتصال‌ها را با چرخش handler مدیریت می‌کند. استفاده‌ی <b>Typed Client</b> (کلاسی که <code>HttpClient</code> را تزریق می‌گیرد و پایه‌ی URL/هدرها را یکجا تنظیم می‌کند) تمیزترین الگو است. نکته‌ها: همیشه <code>Timeout</code> و <code>CancellationToken</code>، فراخوانی <code>EnsureSuccessStatusCode()</code> یا بررسی دستی کد وضعیت، <code>ReadFromJsonAsync&lt;T&gt;</code> برای خواندن مستقیم JSON، و مقاومت با Polly (retry، circuit breaker) از طریق <code>AddStandardResilienceHandler()</code>.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>// Program.cs\nbuilder.Services.AddHttpClient&lt;WeatherClient&gt;(c =&gt;\n{\n    c.BaseAddress = new Uri(&quot;https://api.example.com/&quot;);\n    c.Timeout = TimeSpan.FromSeconds(3);\n}).AddStandardResilienceHandler();\n\npublic class WeatherClient(HttpClient http)\n{\n    public async Task&lt;Forecast?&gt; GetAsync(string city, CancellationToken ct)\n    {\n        using var resp = await http.GetAsync($&quot;forecast?city={Uri.EscapeDataString(city)}&quot;, ct);\n        resp.EnsureSuccessStatusCode();\n        return await resp.Content.ReadFromJsonAsync&lt;Forecast&gt;(cancellationToken: ct);\n    }\n}\npublic record Forecast(string City, double TempC);</code></pre></div>",
     "exercise": "یک Typed Client برای API هواشناسی بنویس و timeout سه‌ثانیه‌ای به آن بده."
    },
    {
     "title": "Reflection و Attribute: کاوش و فراداده در زمان اجرا",
     "content": "<p>Reflection (<code>System.Reflection</code>) نوع‌ها، اعضا و اتریبیوت‌ها را در زمان اجرا می‌خواند و اعضا را فراخوانی می‌کند؛ پایه‌ی DI، ORM، سریال‌سازی و فریم‌ورک‌های تست. <b>Attribute</b> فراداده‌ای است که به نوع/عضو می‌چسبد و با <code>GetCustomAttribute&lt;T&gt;()</code> خوانده می‌شود؛ با ارث‌بری از <code>Attribute</code> و <code>[AttributeUsage]</code> می‌سازی. هزینه: کندتر از فراخوانی مستقیم، شکستن بررسی نوع زمان کامپایل، و ناسازگاری با Trimming/Native AOT. راه‌حل‌ها: نتیجه‌ی reflection را کش کن، <code>Delegate</code> کامپایل‌شده یا Expression Tree بساز، یا Source Generator (کد در زمان کامپایل). از دسترسی به اعضای خصوصی جز در ابزار/تست اجتناب کن.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>using System.Reflection;\n\n[AttributeUsage(AttributeTargets.Property)]\npublic sealed class RequiredFieldAttribute : Attribute { }\n\npublic class Signup\n{\n    [RequiredField] public string? Email { get; set; }\n    [RequiredField] public string? Name { get; set; }\n    public string? Note { get; set; }\n}\nstatic IEnumerable&lt;string&gt; Validate(object o) =&gt;\n    o.GetType().GetProperties()\n     .Where(p =&gt; p.GetCustomAttribute&lt;RequiredFieldAttribute&gt;() is not null &amp;&amp; p.GetValue(o) is null)\n     .Select(p =&gt; $&quot;{p.Name} الزامی است&quot;);\n\nConsole.WriteLine(string.Join(&quot; | &quot;, Validate(new Signup { Name = &quot;علی&quot; })));</code></pre></div>",
     "exercise": "اتریبیوت [Required] بساز و یک اعتبارسنج ساده بنویس که propertyهای null را گزارش دهد."
    },
    {
     "title": "پیکربندی: appsettings، Options Pattern و رازها",
     "content": "<p>ASP.NET Core پیکربندی را از چند منبع با اولویت می‌خواند: <code>appsettings.json</code> ← <code>appsettings.{Environment}.json</code> ← متغیرهای محیطی ← آرگومان خط فرمان (و در توسعه <b>User Secrets</b>). <b>Options Pattern</b>: بخش پیکربندی را به یک کلاس نوع‌دار bind کن (<code>services.Configure&lt;SmtpOptions&gt;(config.GetSection(\"Smtp\"))</code>) و با <code>IOptions&lt;T&gt;</code> (یک‌بار)، <code>IOptionsSnapshot&lt;T&gt;</code> (هر درخواست) یا <code>IOptionsMonitor&lt;T&gt;</code> (با تغییر زنده) تزریق کن. با <code>ValidateDataAnnotations().ValidateOnStart()</code> پیکربندی غلط را در <b>شروع برنامه</b> بگیر نه در اولین استفاده. رازها (رمز دیتابیس، کلیدها) هرگز در appsettings و git نباشند: Secret Manager، متغیر محیطی یا Key Vault.</p><div class='code-block'><div class='cb-head'>Program.cs + SmtpOptions.cs</div><pre><code>public class SmtpOptions\n{\n    [Required] public string Host { get; set; } = &quot;&quot;;\n    [Range(1, 65535)] public int Port { get; set; } = 587;\n}\nbuilder.Services.AddOptions&lt;SmtpOptions&gt;()\n    .Bind(builder.Configuration.GetSection(&quot;Smtp&quot;))\n    .ValidateDataAnnotations()\n    .ValidateOnStart();                      // خطای پیکربندی همان لحظه‌ی شروع\n\npublic class Mailer(IOptions&lt;SmtpOptions&gt; opt)\n{\n    private readonly SmtpOptions _o = opt.Value;\n    public string Describe() =&gt; $&quot;{_o.Host}:{_o.Port}&quot;;\n}</code></pre></div>",
     "exercise": "کلاس SmtpOptions با Host و Port معتبر بساز و برنامه را طوری تنظیم کن که با مقدار نادرست شروع نشود."
    },
    {
     "title": "لاگ‌گیری با ILogger: ساختاریافته و سطح‌ها",
     "content": "<p>از <code>ILogger&lt;T&gt;</code> تزریق‌شده استفاده کن نه <code>Console.WriteLine</code>. سطح‌ها: Trace، Debug، Information، Warning، Error، Critical. <b>قالب پیام ساختاریافته</b>: <code>_logger.LogInformation(\"سفارش {OrderId} ثبت شد\", id)</code> (نه درون‌یابی رشته؛ چون Serilog/Seq/Elastic می‌توانند روی <code>OrderId</code> جست‌وجو کنند و رشته‌سازی بی‌مورد انجام نمی‌شود). <code>LogError(ex, \"...\")</code> استثنا را کامل ثبت می‌کند. برای کارایی در مسیر داغ از <code>[LoggerMessage]</code> (source generator) استفاده کن. <b>Scope</b> (<code>BeginScope</code>) شناسه‌ی ارتباط (CorrelationId) را به همه‌ی پیام‌های یک درخواست می‌افزاید. داده‌ی حساس (رمز، توکن، کارت) را لاگ نکن. سطح هر دسته را از appsettings تنظیم کن.</p><div class='code-block'><div class='cb-head'>OrderService.cs</div><pre><code>public partial class OrderService(ILogger&lt;OrderService&gt; logger)\n{\n    public void Place(Guid orderId, int userId)\n    {\n        using (logger.BeginScope(new Dictionary&lt;string, object&gt; { [&quot;CorrelationId&quot;] = Guid.NewGuid() }))\n        {\n            logger.LogInformation(&quot;سفارش {OrderId} برای کاربر {UserId} ثبت شد&quot;, orderId, userId);\n            try { /* ... */ }\n            catch (Exception ex) { logger.LogError(ex, &quot;ثبت سفارش {OrderId} شکست خورد&quot;, orderId); throw; }\n        }\n    }\n    [LoggerMessage(Level = LogLevel.Warning, Message = &quot;موجودی کم: {Sku} فقط {Left} عدد&quot;)]\n    partial void LogLowStock(string sku, int left);          // بدون تخصیص در مسیر داغ\n}</code></pre></div>",
     "exercise": "لاگ ساختاریافته‌ی ورود کاربر را با CorrelationId در Scope بنویس."
    },
    {
     "title": "سرویس پس‌زمینه: BackgroundService و IHostedService",
     "content": "<p>برای کارهای دوره‌ای یا طولانی (پاک‌سازی، پردازش صف، ارسال ایمیل) در ASP.NET Core از <code>BackgroundService</code> استفاده کن: متد <code>ExecuteAsync(CancellationToken)</code> را override کن و <code>AddHostedService&lt;T&gt;()</code> بزن. قواعد: ۱) حلقه را با <code>stoppingToken</code> کنترل کن تا خاموشی تمیز باشد؛ ۲) <b>استثنا</b> داخل حلقه را بگیر و لاگ کن، وگرنه سرویس (و از .NET 6 کل host) می‌ایستد؛ ۳) سرویس singleton است، پس برای سرویس‌های scoped (مثل DbContext) در هر دور یک <code>IServiceScopeFactory.CreateScope()</code> بساز؛ ۴) <code>PeriodicTimer</code> جایگزین تمیز <code>Task.Delay</code> در حلقه است. برای زمان‌بندی پیچیده یا چندنمونه‌ای از Hangfire/Quartz استفاده کن؛ در چند نمونه کار تکراری اجرا می‌شود مگر قفل توزیع‌شده بگذاری.</p><div class='code-block'><div class='cb-head'>ExpirePendingService.cs</div><pre><code>public class ExpirePendingService(IServiceScopeFactory scopes, ILogger&lt;ExpirePendingService&gt; log) : BackgroundService\n{\n    protected override async Task ExecuteAsync(CancellationToken ct)\n    {\n        using var timer = new PeriodicTimer(TimeSpan.FromSeconds(60));\n        while (await timer.WaitForNextTickAsync(ct))\n        {\n            try\n            {\n                using var scope = scopes.CreateScope();                 // DbContext scoped است\n                var db = scope.ServiceProvider.GetRequiredService&lt;AppDb&gt;();\n                var n = await db.Orders.Where(o =&gt; o.Status == &quot;pending&quot; &amp;&amp; o.CreatedAt &lt; DateTime.UtcNow.AddHours(-2))\n                                       .ExecuteUpdateAsync(s =&gt; s.SetProperty(o =&gt; o.Status, &quot;expired&quot;), ct);\n                if (n &gt; 0) log.LogInformation(&quot;{Count} سفارش منقضی شد&quot;, n);\n            }\n            catch (Exception ex) when (ex is not OperationCanceledException)\n            {\n                log.LogError(ex, &quot;خطا در کار پس‌زمینه&quot;);                // سرویس نمی‌میرد\n            }\n        }\n    }\n}\n// Program.cs: builder.Services.AddHostedService&lt;ExpirePendingService&gt;();</code></pre></div>",
     "exercise": "سرویسی بنویس که هر ۶۰ ثانیه سفارش‌های pending قدیمی را منقضی کند."
    },
    {
     "title": "SignalR: ارتباط لحظه‌ای (چت و اعلان)",
     "content": "<p>SignalR ارتباط دوطرفه‌ی لحظه‌ای را ساده می‌کند: خودش بهترین انتقال (WebSocket، سپس SSE، سپس Long Polling) را انتخاب می‌کند. سمت سرور یک <code>Hub</code> می‌نویسی؛ متدهای Hub را کلاینت صدا می‌زند و سرور با <code>Clients.All/Group/User</code> به کلاینت‌ها پیام می‌فرستد. گروه‌ها برای اتاق‌ها. با <code>[Authorize]</code> روی Hub احراز هویت؛ توکن JWT برای WebSocket از query string (<code>access_token</code>) می‌آید. برای مقیاس چند سرور باید <b>backplane</b> (Redis یا Azure SignalR) بگذاری وگرنه پیام به کلاینت‌های سرور دیگر نمی‌رسد. محدودیت اندازه‌ی پیام و نرخ ارسال را تنظیم کن. در کلاینت جاوااسکریپت <code>@microsoft/signalr</code> با <code>withAutomaticReconnect()</code>.</p><div class='code-block'><div class='cb-head'>ChatHub.cs</div><pre><code>public class ChatHub : Hub\n{\n    public async Task JoinRoom(string room)\n    {\n        await Groups.AddToGroupAsync(Context.ConnectionId, room);\n        await Clients.Group(room).SendAsync(&quot;system&quot;, $&quot;{Context.UserIdentifier ?? &quot;کاربر&quot;} وارد شد&quot;);\n    }\n    public async Task SendMessage(string room, string text)\n    {\n        if (string.IsNullOrWhiteSpace(text) || text.Length &gt; 500) throw new HubException(&quot;پیام نامعتبر&quot;);\n        await Clients.Group(room).SendAsync(&quot;message&quot;, Context.UserIdentifier, text);\n    }\n}\n// Program.cs\nbuilder.Services.AddSignalR();      // برای چند سرور: .AddStackExchangeRedis(...)\napp.MapHub&lt;ChatHub&gt;(&quot;/hubs/chat&quot;);</code></pre></div>",
     "exercise": "Hub اتاق چت با JoinRoom و SendMessage بنویس و فقط اعضای اتاق پیام بگیرند."
    },
    {
     "title": "مدیریت خطای سراسری در API: ProblemDetails و IExceptionHandler",
     "content": "<p>APIهای مدرن خطا را با قالب استاندارد <b>RFC 9457 Problem Details</b> برمی‌گردانند: <code>{ type, title, status, detail, traceId }</code>. در .NET 8 با <code>IExceptionHandler</code> یک نقطه‌ی مرکزی می‌سازی که استثنا را به پاسخ مناسب تبدیل می‌کند: <code>NotFoundException</code> → ۴۰۴، <code>ValidationException</code> → ۴۰۰ با فهرست خطاها، <code>ConflictException</code> → ۴۰۹ و بقیه → ۵۰۰ <b>بدون نشت جزئیات داخلی</b> (stack trace فقط در Development). ثبت لاگ کامل با <code>traceId</code> مشترک تا پشتیبانی بتواند خطای کاربر را پیدا کند. <code>builder.Services.AddProblemDetails()</code> و <code>app.UseExceptionHandler()</code> را فعال کن. کنترلرها نباید try/catch تکراری داشته باشند.</p><div class='code-block'><div class='cb-head'>GlobalExceptionHandler.cs</div><pre><code>public class GlobalExceptionHandler(ILogger&lt;GlobalExceptionHandler&gt; log, IHostEnvironment env) : IExceptionHandler\n{\n    public async ValueTask&lt;bool&gt; TryHandleAsync(HttpContext ctx, Exception ex, CancellationToken ct)\n    {\n        var (status, title) = ex switch\n        {\n            NotFoundException   =&gt; (404, &quot;یافت نشد&quot;),\n            ConflictException   =&gt; (409, &quot;تداخل&quot;),\n            ArgumentException   =&gt; (400, &quot;ورودی نامعتبر&quot;),\n            _                   =&gt; (500, &quot;خطای داخلی سرور&quot;)\n        };\n        if (status == 500) log.LogError(ex, &quot;خطای مدیریت‌نشده {TraceId}&quot;, ctx.TraceIdentifier);\n        ctx.Response.StatusCode = status;\n        await ctx.Response.WriteAsJsonAsync(new ProblemDetails\n        {\n            Status = status, Title = title,\n            Detail = status == 500 &amp;&amp; !env.IsDevelopment() ? null : ex.Message,\n            Extensions = { [&quot;traceId&quot;] = ctx.TraceIdentifier }\n        }, ct);\n        return true;\n    }\n}\n// builder.Services.AddExceptionHandler&lt;GlobalExceptionHandler&gt;(); builder.Services.AddProblemDetails(); app.UseExceptionHandler();</code></pre></div>",
     "exercise": "یک ConflictException بساز که به پاسخ ۴۰۹ با ProblemDetails تبدیل شود."
    },
    {
     "title": "اعتبارسنجی ورودی: DataAnnotations و FluentValidation",
     "content": "<p>هرگز به ورودی کاربر اعتماد نکن. ساده‌ترین راه <b>DataAnnotations</b>: <code>[Required]</code>, <code>[StringLength]</code>, <code>[Range]</code>, <code>[EmailAddress]</code> روی DTO. در Minimal API باید خودت اعتبارسنجی را صدا بزنی یا فیلتر بنویسی؛ کنترلرهای <code>[ApiController]</code> خودکار ۴۰۰ می‌دهند. برای قوانین پیچیده و وابسته به چند فیلد <b>FluentValidation</b> خواناتر است: <code>RuleFor(x =&gt; x.Email).NotEmpty().EmailAddress()</code>، شرط‌ها، پیام‌های سفارشی و تست‌پذیری عالی. اعتبارسنجی را در <b>دو لایه</b> انجام بده: شکل ورودی (فرمت، طول) در لایه‌ی API و قوانین کسب‌وکار (موجودی کافی، یکتا بودن) در لایه‌ی سرویس/دامنه. پیام خطا به زبان کاربر و با نام فیلد برگردان. از <b>Mass Assignment</b> (bind کردن مدل دیتابیس مستقیم) پرهیز کن؛ DTO جدا بگیر.</p><div class='code-block'><div class='cb-head'>CreateUserValidator.cs</div><pre><code>public record CreateUserRequest(string Email, string Password, int Age);\n\npublic class CreateUserValidator : AbstractValidator&lt;CreateUserRequest&gt;\n{\n    public CreateUserValidator()\n    {\n        RuleFor(x =&gt; x.Email).NotEmpty().EmailAddress().WithMessage(&quot;ایمیل معتبر وارد کن&quot;);\n        RuleFor(x =&gt; x.Password).MinimumLength(8).Matches(&quot;[0-9]&quot;).WithMessage(&quot;رمز باید ≥ ۸ نویسه و شامل عدد باشد&quot;);\n        RuleFor(x =&gt; x.Age).InclusiveBetween(13, 120);\n    }\n}\napp.MapPost(&quot;/users&quot;, async (CreateUserRequest req, IValidator&lt;CreateUserRequest&gt; v) =&gt;\n{\n    var r = await v.ValidateAsync(req);\n    return r.IsValid ? Results.Created(&quot;/users/1&quot;, null) : Results.ValidationProblem(r.ToDictionary());\n});</code></pre></div>",
     "exercise": "قانون: تاریخ پایان بعد از تاریخ شروع باشد را با FluentValidation بنویس."
    },
    {
     "title": "EF Core Migrations: تکامل امن شمای دیتابیس",
     "content": "<p>Migration تغییرات مدل را به اسکریپت نسخه‌دار تبدیل می‌کند: <code>dotnet ef migrations add AddOrderStatus</code> فایل می‌سازد و <code>dotnet ef database update</code> آن را اعمال می‌کند. قواعد حرفه‌ای: ۱) migration را <b>commit</b> کن و هرگز بعد از اعمال روی محیط مشترک ویرایشش نکن (migration جدید بساز)؛ ۲) قبل از اعمال روی production اسکریپت SQL را مرور کن (<code>dotnet ef migrations script</code> یا <code>--idempotent</code>)؛ ۳) تغییرهای مخرب (حذف ستون) را در چند مرحله انجام بده (expand/contract) تا نسخه‌ی قدیم برنامه در زمان استقرار نشکند؛ ۴) <code>Database.Migrate()</code> هنگام شروع برنامه برای چند نمونه همزمان خطرناک است؛ استقرار جدا یا bundle (<code>dotnet ef migrations bundle</code>) بهتر است؛ ۵) داده‌ی اولیه را با <code>HasData</code> یا اسکریپت جدا؛ ۶) برای تغییر پرحجم از SQL خام در migration استفاده کن.</p><div class='code-block'><div class='cb-head'>Migrations</div><pre><code>// تغییر مدل\npublic class Order { public int Id { get; set; } public string Status { get; set; } = &quot;pending&quot;; }\n\n# ایجاد و اعمال\ndotnet ef migrations add AddOrderStatus\ndotnet ef migrations script --idempotent -o deploy.sql     # مرور قبل از تولید\ndotnet ef database update\n\n// نمونه‌ی migration دومرحله‌ای (expand/contract)\nmigrationBuilder.AddColumn&lt;string&gt;(&quot;Status&quot;, &quot;Orders&quot;, nullable: true);\nmigrationBuilder.Sql(&quot;UPDATE Orders SET Status = &#x27;pending&#x27; WHERE Status IS NULL&quot;);\nmigrationBuilder.AlterColumn&lt;string&gt;(&quot;Status&quot;, &quot;Orders&quot;, nullable: false, defaultValue: &quot;pending&quot;);</code></pre></div>",
     "exercise": "یک ستون NOT NULL با مقدار پیش‌فرض را در دو migration (افزودن nullable، پر کردن، سپس NOT NULL) پیاده کن."
    },
    {
     "title": "کش در ASP.NET Core: IMemoryCache، توزیع‌شده و HybridCache",
     "content": "<p><code>IMemoryCache</code> کش داخل پردازه است (سریع، اما برای هر نمونه جدا). <code>IDistributedCache</code> (Redis/SQL) بین نمونه‌ها مشترک است ولی با هزینه‌ی شبکه و سریال‌سازی. <b>HybridCache</b> (.NET 9) هر دو را ترکیب می‌کند و مهم‌تر <b>Stampede protection</b> دارد: وقتی ۱۰۰ درخواست همزمان کلید خالی را می‌خواهند فقط یکی تابع تولیدکننده را اجرا می‌کند. قواعد: برای هر کلید <b>انقضا</b> بگذار (مطلق/لغزان)؛ کلیدها را ساختارمند و نسخه‌دار بساز (<code>user:{id}:v2</code>)؛ هنگام تغییر داده کلید را باطل کن (tag-based در HybridCache)؛ داده‌ی مخصوص کاربر را در کش مشترک بدون کلید کاربر نگذار (نشت)؛ و از کش کردن خطا/نتیجه‌ی خالی برای مدت طولانی بپرهیز. پاسخ HTTP هم با <code>ResponseCache</code>/Output Caching قابل‌کش است.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>builder.Services.AddHybridCache();\n\napp.MapGet(&quot;/products/{id:int}&quot;, async (int id, HybridCache cache, AppDb db, CancellationToken ct) =&gt;\n    await cache.GetOrCreateAsync($&quot;product:{id}:v1&quot;,\n        async token =&gt; await db.Products.FindAsync([id], token),      // فقط یک درخواست تولید می‌کند\n        new HybridCacheEntryOptions { Expiration = TimeSpan.FromMinutes(10), LocalCacheExpiration = TimeSpan.FromMinutes(2) },\n        tags: [&quot;products&quot;], cancellationToken: ct));\n\napp.MapPut(&quot;/products/{id:int}&quot;, async (int id, ProductDto dto, HybridCache cache, AppDb db) =&gt;\n{\n    /* ...به‌روزرسانی... */\n    await cache.RemoveByTagAsync(&quot;products&quot;);                          // ابطال گروهی\n    return Results.NoContent();\n});</code></pre></div>",
     "exercise": "محصول را با HybridCache و تگ products کش کن و هنگام به‌روزرسانی با RemoveByTagAsync باطلش کن."
    },
    {
     "title": "Rate Limiting داخلی ASP.NET Core",
     "content": "<p>از .NET 7 میان‌افزار <code>Microsoft.AspNetCore.RateLimiting</code> داخلی است. چهار الگوریتم: <b>Fixed window</b>، <b>Sliding window</b>، <b>Token bucket</b> و <b>Concurrency</b> (محدودیت تعداد درخواست همزمان). محدودیت با <code>AddRateLimiter</code> تعریف و با <code>RequireRateLimiting(\"policy\")</code> روی endpoint اعمال می‌شود. با <code>PartitionedRateLimiter</code> می‌توانی به‌ازای هر کاربر/IP/API key سهمیه‌ی جدا بدهی (مهم: پشت reverse proxy باید IP واقعی را از <code>X-Forwarded-For</code> با <code>UseForwardedHeaders</code> بگیری وگرنه همه یک IP‌اند). پاسخ <code>429</code> با هدر <code>Retry-After</code> بده. این محدودیت داخل حافظه‌ی هر نمونه است؛ برای محدودیت سراسری چندنمونه‌ای از Redis/gateway استفاده کن. endpointهای ورود و بازیابی رمز را سخت‌گیرانه‌تر محدود کن.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>builder.Services.AddRateLimiter(o =&gt;\n{\n    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;\n    o.AddPolicy(&quot;login&quot;, ctx =&gt; RateLimitPartition.GetFixedWindowLimiter(\n        ctx.Connection.RemoteIpAddress?.ToString() ?? &quot;unknown&quot;,\n        _ =&gt; new FixedWindowRateLimiterOptions { PermitLimit = 5, Window = TimeSpan.FromMinutes(1) }));\n    o.AddPolicy(&quot;api&quot;, ctx =&gt; RateLimitPartition.GetTokenBucketLimiter(\n        ctx.User.Identity?.Name ?? &quot;anon&quot;,\n        _ =&gt; new TokenBucketRateLimiterOptions { TokenLimit = 100, TokensPerPeriod = 100, ReplenishmentPeriod = TimeSpan.FromMinutes(1) }));\n});\napp.UseRateLimiter();\napp.MapPost(&quot;/login&quot;, Login).RequireRateLimiting(&quot;login&quot;);</code></pre></div>",
     "exercise": "سیاست جدا برای /login (۵ در دقیقه به‌ازای IP) و عمومی (۱۰۰ در دقیقه به‌ازای کاربر) بنویس."
    },
    {
     "title": "OpenAPI و مستندسازی API: Swagger، نسخه و قرارداد",
     "content": "<p>قرارداد API باید ماشین‌خوان و همیشه به‌روز باشد. ASP.NET Core سند <b>OpenAPI</b> می‌سازد (در .NET 9 با <code>AddOpenApi()</code> و <code>MapOpenApi()</code>؛ پیش‌تر با Swashbuckle). با <code>.WithSummary()</code>, <code>.Produces&lt;T&gt;(200)</code>, <code>.ProducesProblem(404)</code> پاسخ‌های ممکن را مستند کن تا کلاینت‌ها بتوانند خودکار کد تولید کنند (NSwag، openapi-generator). نسخه‌بندی: مسیر (<code>/v1/</code>) یا هدر؛ تغییر شکننده = نسخه‌ی جدید. در تولید، UI مستندات را فقط برای شبکه‌ی داخلی یا با احراز هویت در دسترس بگذار. سند OpenAPI را در CI با ابزار تشخیص تغییر شکننده مقایسه کن و در تست قرارداد به‌کار ببر.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>builder.Services.AddOpenApi();\nvar app = builder.Build();\nif (app.Environment.IsDevelopment()) app.MapOpenApi();          // /openapi/v1.json\n\napp.MapPost(&quot;/users&quot;, CreateUser)\n   .WithName(&quot;CreateUser&quot;)\n   .WithSummary(&quot;ساخت کاربر جدید&quot;)\n   .Produces&lt;UserDto&gt;(StatusCodes.Status201Created)\n   .ProducesValidationProblem()\n   .ProducesProblem(StatusCodes.Status409Conflict)\n   .WithTags(&quot;Users&quot;);</code></pre></div>",
     "exercise": "برای endpoint ساخت کاربر پاسخ‌های 201 و 400 و 409 را مستند کن."
    },
    {
     "title": "تست یکپارچه با Testcontainers: دیتابیس واقعی در تست",
     "content": "<p>تست با دیتابیس in-memory یا SQLite رفتار PostgreSQL/SQL Server واقعی را (ایندکس، قیدها، تراکنش، SQL خاص) تقلید نمی‌کند و باگ‌های تولید را می‌پوشاند. <b>Testcontainers</b> برای هر اجرای تست یک کانتینر Docker واقعی بالا می‌آورد و بعد حذف می‌کند. با xUnit از <code>IAsyncLifetime</code> یا <code>IClassFixture</code> استفاده کن تا کانتینر یک‌بار برای کل کلاس بالا بیاید. ترکیب با <code>WebApplicationFactory&lt;Program&gt;</code>: سرویس DbContext را با connection string کانتینر جایگزین کن و migration را اجرا کن. برای ایزوله‌سازی داده بین تست‌ها هر تست داده‌ی خودش را بسازد یا از ابزار ریست (Respawn) استفاده شود. تست‌های کند را در CI موازی و با نشانه (Trait) جدا کن. به Docker در CI نیاز دارد.</p><div class='code-block'><div class='cb-head'>UserRepoTests.cs</div><pre><code>public class DbFixture : IAsyncLifetime\n{\n    private readonly PostgreSqlContainer _pg = new PostgreSqlBuilder().WithImage(&quot;postgres:16-alpine&quot;).Build();\n    public string ConnectionString =&gt; _pg.GetConnectionString();\n    public async Task InitializeAsync() =&gt; await _pg.StartAsync();\n    public async Task DisposeAsync() =&gt; await _pg.DisposeAsync();\n}\npublic class UserRepoTests(DbFixture fx) : IClassFixture&lt;DbFixture&gt;\n{\n    [Fact]\n    public async Task Duplicate_email_violates_unique_constraint()\n    {\n        await using var db = new AppDb(new DbContextOptionsBuilder&lt;AppDb&gt;().UseNpgsql(fx.ConnectionString).Options);\n        await db.Database.MigrateAsync();\n        db.Users.Add(new User { Email = &quot;a@x.ir&quot; }); await db.SaveChangesAsync();\n        db.Users.Add(new User { Email = &quot;a@x.ir&quot; });\n        await Assert.ThrowsAsync&lt;DbUpdateException&gt;(() =&gt; db.SaveChangesAsync());\n    }\n}</code></pre></div>",
     "exercise": "یک تست یکپارچه بنویس که قید یکتای ایمیل را در PostgreSQL واقعی بررسی کند."
    },
    {
     "title": "Resilience با Polly: Retry، Timeout و Circuit Breaker",
     "content": "<p>فراخوانی سرویس بیرونی خطا می‌دهد. <b>Polly</b> (و در .NET 8+ <code>Microsoft.Extensions.Http.Resilience</code>) الگوهای تاب‌آوری را فراهم می‌کند: <b>Retry</b> با backoff نمایی + jitter فقط برای خطاهای <i>گذرا</i> و عملیات idempotent؛ <b>Timeout</b> برای هر تلاش و کل؛ <b>Circuit Breaker</b> که پس از شکست پیاپی مدار را باز می‌کند و درخواست‌ها را سریع رد می‌کند؛ <b>Bulkhead</b> برای محدودکردن همزمانی؛ <b>Fallback</b> برای مقدار جایگزین. <code>AddStandardResilienceHandler()</code> ترکیب معقولی از همه را روی HttpClient می‌گذارد. ترتیب مهم است (Timeout کل ← Retry ← Circuit Breaker ← Timeout هر تلاش). Retry روی POST غیر idempotent خطرناک است مگر با Idempotency-Key. متریک‌ها (تعداد retry و باز شدن مدار) را مانیتور کن.</p><div class='code-block'><div class='cb-head'>Program.cs</div><pre><code>builder.Services.AddHttpClient(&quot;payments&quot;)\n    .AddResilienceHandler(&quot;pay-pipeline&quot;, b =&gt;\n    {\n        b.AddTimeout(TimeSpan.FromSeconds(5));                     // ... (ترتیب مهم است)\n        b.AddRetry(new HttpRetryStrategyOptions\n        {\n            MaxRetryAttempts = 3,\n            BackoffType = DelayBackoffType.Exponential,\n            UseJitter = true,\n            ShouldHandle = args =&gt; ValueTask.FromResult(\n                args.Outcome.Result?.StatusCode is &gt;= HttpStatusCode.InternalServerError or HttpStatusCode.RequestTimeout)\n        });\n        b.AddCircuitBreaker(new HttpCircuitBreakerStrategyOptions { FailureRatio = 0.5, MinimumThroughput = 10,\n            BreakDuration = TimeSpan.FromSeconds(30) });\n    });</code></pre></div>",
     "exercise": "یک pipeline سفارشی با retry سه‌باره‌ی نمایی و timeout پنج‌ثانیه‌ای برای HttpClient بنویس."
    },
    {
     "title": "CQRS و MediatR: جداکردن فرمان و پرس‌وجو",
     "content": "<p><b>CQRS</b> (Command Query Responsibility Segregation) عملیات را به دو دسته می‌شکند: <b>Command</b> (تغییر وضعیت، بدون بازگرداندن داده‌ی گزارشی) و <b>Query</b> (خواندن، بدون عارضه‌ی جانبی). فایده: هر کدام مدل و بهینه‌سازی خودش را دارد (خواندن می‌تواند مستقیم SQL/Dapper باشد، نوشتن از دامنه‌ی غنی)، کنترلرها لاغر می‌شوند و منطق کاربرد در کلاس‌های کوچک و تست‌پذیر (Handler) قرار می‌گیرد. <b>MediatR</b> (یا پیاده‌سازی دستی) درخواست را به Handler مناسب می‌رساند و <b>Pipeline Behavior</b> برای مسائل مشترک (اعتبارسنجی، لاگ، تراکنش) می‌دهد. هشدار: برای CRUD ساده اضافه‌کاری است؛ فقط وقتی پیچیدگی دامنه توجیه کند استفاده کن. مراقب Handlerهایی که یکدیگر را صدا می‌زنند (spaghetti) باش. MediatR در نسخه‌های جدید تجاری شده؛ جایگزین‌ها (Wolverine، Mediator) هم هست.</p><div class='code-block'><div class='cb-head'>Handlers.cs</div><pre><code>public record CreateOrderCommand(Guid CustomerId, List&lt;OrderLineDto&gt; Lines) : IRequest&lt;Guid&gt;;\npublic record GetOrderQuery(Guid Id) : IRequest&lt;OrderDto?&gt;;\n\npublic class CreateOrderHandler(AppDb db) : IRequestHandler&lt;CreateOrderCommand, Guid&gt;\n{\n    public async Task&lt;Guid&gt; Handle(CreateOrderCommand cmd, CancellationToken ct)\n    {\n        var order = Order.Create(cmd.CustomerId, cmd.Lines);     // منطق در دامنه\n        db.Orders.Add(order); await db.SaveChangesAsync(ct);\n        return order.Id;\n    }\n}\npublic class GetOrderHandler(AppDb db) : IRequestHandler&lt;GetOrderQuery, OrderDto?&gt;\n{\n    public Task&lt;OrderDto?&gt; Handle(GetOrderQuery q, CancellationToken ct) =&gt;\n        db.Orders.AsNoTracking().Where(o =&gt; o.Id == q.Id).Select(o =&gt; new OrderDto(o.Id, o.Total)).FirstOrDefaultAsync(ct);\n}\napp.MapPost(&quot;/orders&quot;, async (CreateOrderCommand c, ISender s) =&gt; Results.Created($&quot;/orders/{await s.Send(c)}&quot;, null));</code></pre></div>",
     "exercise": "فرمان CreateOrder و پرس‌وجوی GetOrderById را با Handler جدا بنویس."
    }
   ],
   "quiz": [
    {
     "q": "Garbage Collector در .NET چه کاری انجام می‌دهد؟",
     "options": [
      "کامپایل کد",
      "آزادسازی خودکار حافظهٔ آبجکت‌های استفاده‌نشده",
      "اجرای تست",
      "اتصال به دیتابیس"
     ],
     "answer": 1,
     "explain": "برخلاف C++، در C# نیازی به آزادسازی دستی حافظهٔ heap نیست."
    },
    {
     "q": "هدف اصلی Dependency Injection چیست؟",
     "options": [
      "افزایش سرعت اجرا",
      "کاهش وابستگی مستقیم بین کلاس‌ها و ساده‌ترکردن تست/تعویض پیاده‌سازی",
      "حذف نیاز به Interface",
      "فشرده‌سازی کد"
     ],
     "answer": 1,
     "explain": "وابستگی‌ها از بیرون تزریق می‌شوند، نه این‌که خود کلاس آن‌ها را بسازد."
    },
    {
     "q": "Entity Framework Core چه نقشی دارد؟",
     "options": [
      "فریم‌ورک وب است",
      "ORM ای که کلاس‌های C# را به جدول‌های دیتابیس متصل می‌کند، بدون نیاز به SQL خام",
      "موتور بازی است",
      "کتابخانهٔ گرافیکی است"
     ],
     "answer": 1,
     "explain": "EF Core خودش SQL لازم را از روی کوئری‌های LINQ می‌سازد."
    },
    {
     "q": "در یک اسکریپت Unity، متد Update() چه زمانی اجرا می‌شود؟",
     "options": [
      "فقط یک‌بار در شروع بازی",
      "هر فریم (بارها در ثانیه)",
      "فقط هنگام کلیک",
      "هرگز خودکار اجرا نمی‌شود"
     ],
     "answer": 1,
     "explain": "Update برای منطقی که باید پیوسته بررسی/اجرا شود (مثل حرکت بازیکن) استفاده می‌شود."
    },
    {
     "q": "[Fact] در xUnit چیست؟",
     "options": [
      "علامت یک تست",
      "نوع داده",
      "کلاس پایه",
      "اتصال دیتابیس"
     ],
     "answer": 0,
     "explain": "متد را به‌عنوان تست معرفی می‌کند."
    },
    {
     "q": "چرا .Result روی Task خطرناک است؟",
     "options": [
      "می‌تواند Deadlock بسازد",
      "سریع‌تر است",
      "نوع را عوض می‌کند",
      "هیچ"
     ],
     "answer": 0,
     "explain": "از await استفاده کن."
    },
    {
     "q": "IQueryable چه فرقی با IEnumerable دارد؟",
     "options": [
      "عبارت را به SQL ترجمه می‌کند",
      "فقط برای رشته است",
      "حافظه ندارد",
      "همگام است"
     ],
     "answer": 0,
     "explain": "فیلتر در دیتابیس اجرا می‌شود."
    },
    {
     "q": "Captive Dependency چیست؟",
     "options": [
      "Singleton که Scoped نگه می‌دارد",
      "خطای CSS",
      "نشت شبکه",
      "نوع generic"
     ],
     "answer": 0,
     "explain": "DbContext عمرش بیش از حد می‌شود."
    },
    {
     "q": "برای فقط‌خواندنی در EF چه بگذاریم؟",
     "options": [
      "AsNoTracking",
      "AsTracking",
      "Include",
      "Attach"
     ],
     "answer": 0,
     "explain": "ردیابی را حذف و سرعت را بالا می‌برد."
    },
    {
     "q": "در C# چرا به‌جای throw e از throw استفاده می‌کنیم؟",
     "options": [
      "stack trace اصلی حفظ می‌شود",
      "سریع‌تر است",
      "استثنا را پنهان می‌کند",
      "هیچ فرقی نیست"
     ],
     "answer": 0,
     "explain": "throw e ردپای اصلی را از نقطه‌ی بازپرتاب بازنویسی می‌کند."
    },
    {
     "q": "چرا new HttpClient() برای هر درخواست مشکل‌ساز است؟",
     "options": [
      "Socket Exhaustion",
      "کند بودن JSON",
      "نبود HTTPS",
      "استفاده از حافظه‌ی ثابت"
     ],
     "answer": 0,
     "explain": "از IHttpClientFactory یا Typed Client استفاده کن."
    },
    {
     "q": "ValidateOnStart در Options Pattern چه می‌کند؟",
     "options": [
      "پیکربندی نامعتبر را هنگام شروع برنامه رد می‌کند",
      "لاگ می‌نویسد",
      "کش می‌کند",
      "اتصال می‌گیرد"
     ],
     "answer": 0,
     "explain": "خطای پیکربندی زود و آشکار دیده می‌شود."
    },
    {
     "q": "مزیت Testcontainers نسبت به دیتابیس in-memory چیست؟",
     "options": [
      "رفتار واقعی دیتابیس (قیدها، SQL خاص) را آزمایش می‌کند",
      "سریع‌تر است",
      "بدون Docker کار می‌کند",
      "نیاز به migration ندارد"
     ],
     "answer": 0,
     "explain": "باگ‌هایی که فقط در دیتابیس واقعی دیده می‌شوند را می‌گیرد."
    }
   ],
   "challenge": {
    "task": "یک Interface IRepository<T> با متدهای GetAll() و Add(T item) بساز. یک کلاس ProductRepository که این Interface رو برای Product پیاده‌سازی کنه (با یک List<Product> داخلی). یک کلاس ProductService بساز که ProductRepository رو از طریق constructor (Dependency Injection) بگیره و یک متد GetExpensiveProducts() داشته باشه که با LINQ محصولات بالای یک قیمت رو برگردونه.",
    "hint1": "IRepository<T> یک Interface Generic است: interface IRepository<T> { List<T> GetAll(); void Add(T item); }",
    "hint2": "ProductService نباید مستقیم new ProductRepository() بسازه — باید از constructor بگیرتش (همون الگوی DI که دیدی).",
    "solution": "interface IRepository<T> {\n    List<T> GetAll();\n    void Add(T item);\n}\n\nclass ProductRepository : IRepository<Product> {\n    private List<Product> _products = new List<Product>();\n    public List<Product> GetAll() => _products;\n    public void Add(Product item) => _products.Add(item);\n}\n\nclass ProductService {\n    private readonly IRepository<Product> _repo;\n    public ProductService(IRepository<Product> repo) { _repo = repo; }\n    public List<Product> GetExpensiveProducts() =>\n        _repo.GetAll().Where(p => p.Price > 100000).ToList();\n}"
   }
  }
 ],
 "project": {
  "title": "API فروشگاه با ASP.NET Core و EF Core",
  "brief": "یک REST API کامل برای مدیریت محصولات بساز: کلاس Product، DbContext با EF Core، و یک Controller با عملیات CRUD کامل (GET همه، GET با id، POST، PUT، DELETE).",
  "requirements": [
   "استفاده از [ApiController] و Attribute های مسیر ([HttpGet], [HttpPost] و...)",
   "کلاس Product با Property های مناسب",
   "DbContext با DbSet<Product> برای اتصال به دیتابیس",
   "استفاده از LINQ برای فیلتر/جستجو در حداقل یک endpoint",
   "Dependency Injection برای تزریق DbContext به Controller (الگوی استاندارد ASP.NET Core)"
  ],
  "hints": [
   "مستندات رسمی Microsoft Learn برای ASP.NET Core بهترین منبع برای دیدن یک پروژهٔ نمونهٔ کامل و به‌روز است."
  ]
 }
});
