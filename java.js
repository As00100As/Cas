(window.COURSES=window.COURSES||[]).push({
 "id": "java",
 "name": "Java — پایه تا فوق‌پیشرفته",
 "icon": "☕",
 "kind": "theory",
 "desc": "Write Once, Run Anywhere — زبان اصلی سیستم‌های سازمانی بزرگ، اندروید و بانکداری",
 "covers": [
  "Syntax، Variable، Condition، Loop، Method، Array، String",
  "OOP: Class/Object، Inheritance، Polymorphism، Interface",
  "Collections، Generics، Lambda، Stream API",
  "JVM، JDK/JRE، Garbage Collection، Threads/Concurrency",
  "Maven/Gradle، JUnit، Spring Boot، REST API، Hibernate/JPA",
  "JVM Internals، Microservices، Caching، معماری سیستم‌های بزرگ"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "اولین برنامهٔ Java و فلسفهٔ 'Write Once, Run Anywhere'",
     "content": "<p>برخلاف C/C++ که مستقیم به کد ماشین مخصوص هر سیستم‌عامل کامپایل می‌شوند، جاوا به <b>Bytecode</b> کامپایل می‌شود — کدی میانی که روی هر سیستمی با <b>JVM (Java Virtual Machine)</b> نصب‌شده اجرا می‌شود. همین یعنی «یک‌بار بنویس، همه‌جا اجرا کن». هر برنامه باید در یک <code class='inline'>class</code> با متد <code class='inline'>main</code> باشد؛ اسم فایل باید دقیقاً با اسم کلاس یکی باشد.</p><div class='code-block'><div class='cb-head'>HelloWorld.java</div><pre><code>public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"سلام از جاوا!\");\n    }\n}</code></pre></div><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>javac HelloWorld.java   // کامپایل به Bytecode (.class)\njava HelloWorld         // اجرا روی JVM</code></pre></div>",
     "exercise": "توضیح بده فرق javac (کامپایلر) و java (اجراکننده) چیه — چرا جاوا به دو دستور جدا نیاز داره، برخلاف اجرای مستقیم پایتون؟"
    },
    {
     "title": "متغیرها، انواع داده و String",
     "content": "<p>جاوا هم مثل C++/C# تایپ ایستا دارد. نکتهٔ مهم: <code class='inline'>String</code> در جاوا یک Object است (نه نوع پایه)، ولی به‌خاطر استفادهٔ زیاد، رفتار خاصی دارد (Immutable — تغییرناپذیر؛ هر «تغییر» در واقع یک String جدید می‌سازد).</p><div class='code-block'><div class='cb-head'>Variables.java</div><pre><code>int age = 25;\ndouble price = 19.99;\nString name = \"سارا\";\nboolean isActive = true;\n\nString greeting = \"سلام \" + name + \"!\";\nSystem.out.println(greeting);\nSystem.out.println(\"طول رشته: \" + name.length());</code></pre></div>",
     "exercise": "توضیح بده چرا String در جاوا Immutable (تغییرناپذیر) است — وقتی می‌نویسید name = name + \"!\", دقیقاً چه اتفاقی توی حافظه می‌افته؟"
    },
    {
     "title": "شرط، حلقه، آرایه و Method",
     "content": "<p>ساختار if/switch/for/while تقریباً مثل C#/C++ است. در جاوا به توابع، <b>Method</b> می‌گویند و همیشه باید داخل یک کلاس تعریف شوند (برخلاف C که تابع می‌تواند مستقل باشد).</p><div class='code-block'><div class='cb-head'>Methods.java</div><pre><code>public class MathUtils {\n    public static int square(int x) {\n        return x * x;\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int n : numbers) {\n            System.out.println(n + \"^2 = \" + square(n));\n        }\n    }\n}</code></pre></div>",
     "exercise": "یک Method isPrime بنویس که چک کنه یک عدد اول هست یا نه، و با یه حلقه اعداد اول بین ۱ تا ۲۰ رو چاپ کن."
    }
   ],
   "quiz": [
    {
     "q": "Bytecode در جاوا چیست؟",
     "options": [
      "کد منبع خام",
      "کد میانی که JVM آن را روی هر سیستم‌عاملی اجرا می‌کند",
      "نوعی متغیر",
      "یک کتابخانه"
     ],
     "answer": 1,
     "explain": "همین لایهٔ میانی باعث 'Write Once, Run Anywhere' می‌شود."
    },
    {
     "q": "چرا String در جاوا Immutable (تغییرناپذیر) است؟",
     "options": [
      "برای کندکردن برنامه",
      "برای امنیت و بهینه‌سازی حافظه؛ هر تغییر یک String جدید می‌سازد نه تغییر روی همان حافظه",
      "اشتباه طراحی است",
      "فقط در نسخه‌های قدیمی این‌طور بود"
     ],
     "answer": 1,
     "explain": "این ویژگی به اشتراک‌گذاری امن String بین بخش‌های مختلف برنامه کمک می‌کند."
    },
    {
     "q": "در جاوا، متدها (توابع) باید کجا تعریف شوند؟",
     "options": [
      "مستقل، بیرون از هر کلاسی",
      "همیشه داخل یک کلاس",
      "فقط داخل main",
      "در یک فایل جدا از کلاس"
     ],
     "answer": 1,
     "explain": "جاوا زبانی کاملاً شیءگراست؛ هیچ تابع مستقلی بیرون از کلاس وجود ندارد."
    }
   ],
   "challenge": {
    "task": "یک کلاس Calculator بساز با متدهای static add، subtract، multiply و divide (هرکدوم دو تا int می‌گیرن). توی divide، اگه مقسوم‌علیه صفر بود، به‌جای کرش کردن، یه پیام خطا چاپ کن و صفر برگردون.",
    "hint1": "چون همه‌شون static هستن، می‌تونی مستقیم از main با Calculator.add(...) صداشون بزنی، بدون ساختن Object.",
    "hint2": "برای چک صفر توی divide، یه if ساده قبل از تقسیم بذار.",
    "solution": "public class Calculator {\n    public static int add(int a, int b) { return a + b; }\n    public static int subtract(int a, int b) { return a - b; }\n    public static int multiply(int a, int b) { return a * b; }\n    public static int divide(int a, int b) {\n        if (b == 0) {\n            System.out.println(\"خطا: تقسیم بر صفر\");\n            return 0;\n        }\n        return a / b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(5, 3));\n        System.out.println(divide(10, 0));\n    }\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Class، Object و Constructor",
     "content": "<p>تعریف کلاس در جاوا با فیلدهای <code class='inline'>private</code> و متدهای <code class='inline'>public</code> (Getter/Setter) الگوی رایج Encapsulation است.</p><div class='code-block'><div class='cb-head'>Person.java</div><pre><code>public class Person {\n    private String name;\n    private int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() { return name; }\n    public void greet() {\n        System.out.println(\"سلام، من \" + name + \" هستم\");\n    }\n}\n\nPerson p = new Person(\"علی\", 30);\np.greet();</code></pre></div>",
     "exercise": "یک کلاس BankAccount بساز با فیلد private balance، constructor، و متدهای public deposit/withdraw/getBalance."
    },
    {
     "title": "Inheritance و Interface",
     "content": "<p>Inheritance با <code class='inline'>extends</code>، پیاده‌سازی Interface با <code class='inline'>implements</code>. برخلاف C++ (که Multiple Inheritance کلاس دارد)، جاوا فقط از یک کلاس Inheritance اجازه می‌دهد ولی می‌تواند چند Interface را همزمان implement کند.</p><div class='code-block'><div class='cb-head'>Animal.java</div><pre><code>interface Soundable {\n    void makeSound();\n}\n\nclass Animal {\n    protected String name;\n    Animal(String name) { this.name = name; }\n}\n\nclass Dog extends Animal implements Soundable {\n    Dog(String name) { super(name); } // صدازدن constructor والد\n    public void makeSound() {\n        System.out.println(name + \": واق واق!\");\n    }\n}</code></pre></div>",
     "exercise": "توضیح بده چرا جاوا اجازهٔ Inheritance از چند کلاس رو نمی‌ده ولی اجازهٔ implements چند Interface رو می‌ده — این چه مشکلی (مثل Diamond Problem در C++) رو حل می‌کنه؟"
    },
    {
     "title": "Polymorphism و Abstract Class",
     "content": "<p>هر متد غیر-static در جاوا به‌طور پیش‌فرض Polymorphic است (برخلاف C++ که نیاز به virtual دارد) — با <code class='inline'>@Override</code> صریح می‌کنید که این متد، بازنویسی متد والد است. <code class='inline'>abstract class</code> کلاسی است که نمی‌توان مستقیم از آن Object ساخت؛ فقط الگویی برای فرزندان است.</p><div class='code-block'><div class='cb-head'>Shape.java</div><pre><code>abstract class Shape {\n    abstract double area();\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { radius = r; }\n    @Override\n    double area() { return Math.PI * radius * radius; }\n}\n\nShape s = new Circle(5);\nSystem.out.println(s.area());</code></pre></div>",
     "exercise": "یه کلاس abstract به اسم Vehicle بساز با متد abstract fuelType()، و دو فرزند Car و Motorcycle که این متد رو پیاده‌سازی کنن."
    }
   ],
   "quiz": [
    {
     "q": "در جاوا از یک کلاس چند کلاس دیگر می‌تواند Inheritance داشته باشد؟",
     "options": [
      "فقط یک کلاس",
      "چند کلاس هم‌زمان",
      "هیچ‌کدام، فقط Interface",
      "نامحدود"
     ],
     "answer": 0,
     "explain": "جاوا Single Inheritance برای کلاس دارد، ولی implements چند Interface را اجازه می‌دهد."
    },
    {
     "q": "abstract class در جاوا چه ویژگی‌ای دارد؟",
     "options": [
      "می‌توان مستقیم از آن Object ساخت",
      "نمی‌توان مستقیم از آن Object ساخت؛ فقط الگویی برای فرزندان است",
      "معادل Interface است",
      "فقط برای اعداد استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "abstract class برای تعریف یک قالب مشترک با برخی جزئیات پیاده‌سازی‌شده و برخی نشده استفاده می‌شود."
    },
    {
     "q": "@Override در جاوا چه کاربردی دارد؟",
     "options": [
      "حذف یک متد",
      "صریح‌کردن این‌که یک متد، بازنویسی متد کلاس والد است (و کمک به تشخیص خطای کامپایل)",
      "تعریف Interface",
      "ساخت Object جدید"
     ],
     "answer": 1,
     "explain": "اگر امضای متد اشتباه باشد، @Override باعث خطای کامپایل می‌شود، نه یک باگ خاموش."
    }
   ],
   "challenge": {
    "task": "یک Interface Payable با متد double calculatePay() بساز. دو کلاس Employee و Contractor که implements کنن (حقوق ثابت در برابر بر اساس پروژه). یک آرایه از Payable بساز که هر دو نوع رو نگه داره و با یه حلقه حقوق همه رو چاپ کنه.",
    "hint1": "چون Payable یک Interface هست، می‌تونی Payable[] staff = new Payable[2]; بسازی و توش هم Employee هم Contractor بذاری.",
    "hint2": "برای هر کلاس، حتماً باید متد calculatePay() رو @Override کنی چون از Interface میاد.",
    "solution": "interface Payable {\n    double calculatePay();\n}\nclass Employee implements Payable {\n    public double calculatePay() { return 5000; }\n}\nclass Contractor implements Payable {\n    double projectFee;\n    Contractor(double fee) { projectFee = fee; }\n    public double calculatePay() { return projectFee; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Payable[] staff = { new Employee(), new Contractor(15000) };\n        for (Payable p : staff) System.out.println(p.calculatePay());\n    }\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Collections: ArrayList، HashMap و HashSet",
     "content": "<p><code class='inline'>ArrayList&lt;T&gt;</code> آرایهٔ پویا (مثل List در C#/vector در C++)، <code class='inline'>HashMap&lt;K,V&gt;</code> کلید-مقدار، <code class='inline'>HashSet&lt;T&gt;</code> مجموعهٔ بدون تکرار — همگی از Generics استفاده می‌کنند.</p><div class='code-block'><div class='cb-head'>Collections.java</div><pre><code>import java.util.*;\n\nList&lt;String&gt; names = new ArrayList&lt;&gt;();\nnames.add(\"سارا\");\nnames.add(\"علی\");\n\nMap&lt;String, Integer&gt; ages = new HashMap&lt;&gt;();\nages.put(\"سارا\", 25);\nages.put(\"علی\", 30);\n\nfor (String name : names) {\n    System.out.println(name + \": \" + ages.get(name));\n}</code></pre></div>",
     "exercise": "یک HashMap از اسم محصول به قیمت بساز، سه محصول اضافه کن، و با یه حلقه روی .entrySet() همهٔ کلید/مقدارها رو چاپ کن."
    },
    {
     "title": "Lambda Expression و Functional Interface",
     "content": "<p>از جاوا ۸ به بعد، <b>Lambda</b> اجازه می‌دهد یک <b>Functional Interface</b> (Interface با فقط یک متد abstract) را با سینتکس خیلی کوتاه پیاده‌سازی کنید — بدون نوشتن یک کلاس کامل.</p><div class='code-block'><div class='cb-head'>Lambda.java</div><pre><code>import java.util.function.Function;\n\nFunction&lt;Integer, Integer&gt; square = x -> x * x;\nSystem.out.println(square.apply(5)); // 25\n\nList&lt;Integer&gt; nums = new ArrayList&lt;&gt;(List.of(5, 2, 8, 1));\nnums.sort((a, b) -> b - a); // مرتب‌سازی نزولی با lambda\nSystem.out.println(nums);</code></pre></div>",
     "exercise": "یک Lambda از نوع Function<String, Integer> بساز که طول یک رشته رو برگردونه، و باهاش طول چند اسم رو چاپ کن."
    },
    {
     "title": "Stream API: پردازش تابعی کالکشن‌ها",
     "content": "<p><b>Stream API</b> اجازه می‌دهد عملیات‌های فیلتر/تبدیل/جمع را زنجیره‌ای و خوانا روی کالکشن‌ها بنویسید — شبیه ترکیب map/filter/reduce در جاوااسکریپت یا LINQ در C#.</p><div class='code-block'><div class='cb-head'>Stream.java</div><pre><code>List&lt;Integer&gt; numbers = List.of(5, 12, 8, 20, 3, 15);\n\nList&lt;Integer&gt; result = numbers.stream()\n    .filter(n -> n > 10)\n    .map(n -> n * 2)\n    .sorted()\n    .collect(Collectors.toList());\n\nSystem.out.println(result); // [24, 30, 40]</code></pre></div>",
     "exercise": "با Stream API، از یه لیست نمرات، فقط نمرات بالای ۱۵ رو فیلتر کن و میانگینشون رو با .average() حساب کن."
    },
    {
     "title": "JVM، JDK/JRE و Garbage Collection",
     "content": "<p><b>JDK (Java Development Kit)</b> شامل ابزارهای توسعه (کامپایلر javac) است؛ <b>JRE (Java Runtime Environment)</b> فقط برای اجرا (بدون کامپایلر) لازم است؛ <b>JVM</b> موتوری است که Bytecode را واقعاً اجرا می‌کند. مثل C#، جاوا هم <b>Garbage Collector</b> خودکار دارد — نیازی به آزادسازی دستی حافظه نیست.</p>",
     "exercise": "توضیح بده چرا برای فقط اجرای یک برنامهٔ جاوا (نه توسعهٔ آن) کافیه JRE نصب باشه، ولی برای نوشتن و کامپایل‌کردن به JDK نیاز داری."
    },
    {
     "title": "Threads و Concurrency",
     "content": "<p>جاوا از ابتدا پشتیبانی قوی از Thread داشته است. <code class='inline'>Runnable</code> یک Interface است که کار Thread را تعریف می‌کند؛ <code class='inline'>ExecutorService</code> راه مدرن‌تر برای مدیریت مجموعه‌ای از Thread ها (Thread Pool) بدون مدیریت دستی هرکدام است.</p><div class='code-block'><div class='cb-head'>Threads.java</div><pre><code>Runnable task = () -> {\n    for (int i = 0; i < 3; i++) System.out.println(\"در حال کار: \" + i);\n};\n\nThread t = new Thread(task);\nt.start();\nt.join(); // منتظر تمام‌شدن</code></pre></div>",
     "exercise": "توضیح بده چرا استفاده از ExecutorService با یک Thread Pool ثابت، نسبت به ساختن دستی صدها Thread جدید، برای یک سرور با بار زیاد بهتره."
    }
   ],
   "quiz": [
    {
     "q": "ArrayList در جاوا چه چیزی است؟",
     "options": [
      "آرایهٔ اندازهٔ ثابت",
      "آرایهٔ پویا با Generics که می‌تواند در زمان اجرا رشد کند",
      "نوعی HashMap",
      "یک Interface بدون پیاده‌سازی"
     ],
     "answer": 1,
     "explain": "مشابه List<T> در C# یا vector در C++."
    },
    {
     "q": "Functional Interface در جاوا چیست؟",
     "options": [
      "یک کلاس عادی",
      "Interface ای با دقیقاً یک متد abstract، قابل پیاده‌سازی با Lambda",
      "نوعی حلقه",
      "یک نوع داده"
     ],
     "answer": 1,
     "explain": "این ویژگی امکان استفاده از Lambda به‌جای نوشتن کلاس کامل را می‌دهد."
    },
    {
     "q": "تفاوت JDK و JRE چیست؟",
     "options": [
      "تفاوتی ندارند",
      "JDK شامل ابزارهای توسعه (از جمله کامپایلر) است؛ JRE فقط برای اجراست",
      "JRE برای توسعه است",
      "JDK فقط روی لینوکس کار می‌کند"
     ],
     "answer": 1,
     "explain": "برای فقط اجرای برنامه، JRE کافی است؛ برای نوشتن و کامپایل، JDK لازم است."
    },
    {
     "q": "Stream API در جاوا برای چه استفاده می‌شود؟",
     "options": [
      "مدیریت فایل",
      "پردازش زنجیره‌ای و تابعی کالکشن‌ها (فیلتر، تبدیل، جمع)",
      "اتصال به دیتابیس",
      "تعریف Thread"
     ],
     "answer": 1,
     "explain": "عملیاتی مثل filter/map/collect زنجیره‌ای روی داده اجرا می‌شوند."
    }
   ],
   "challenge": {
    "task": "یک لیست از آبجکت‌های Product (با فیلدهای name و price) بساز. با Stream API: محصولاتی که قیمتشون بالای یک عدد مشخصه رو فیلتر کن، فقط اسمشون رو با map استخراج کن، و توی یک List<String> جمع‌شون کن (collect).",
    "hint1": "products.stream().filter(p -> p.getPrice() > 100000).map(Product::getName).collect(Collectors.toList())",
    "hint2": "برای این کار، کلاس Product باید یه متد getPrice() و getName() داشته باشه (الگوی Getter معمولی).",
    "solution": "class Product {\n    String name; double price;\n    Product(String n, double p) { name = n; price = p; }\n    String getName() { return name; }\n    double getPrice() { return price; }\n}\n\nList<Product> products = List.of(\n    new Product(\"لپ‌تاپ\", 25000000),\n    new Product(\"موس\", 80000)\n);\n\nList<String> expensiveNames = products.stream()\n    .filter(p -> p.getPrice() > 100000)\n    .map(Product::getName)\n    .collect(Collectors.toList());\nSystem.out.println(expensiveNames);"
   }
  },
  {
   "lessons": [
    {
     "title": "Maven/Gradle و JUnit",
     "content": "<p><b>Maven</b> و <b>Gradle</b> ابزارهای مدیریت پروژه و وابستگی جاوا هستند (معادل npm در Node) — با یک فایل تنظیمات (pom.xml برای Maven)، کتابخانه‌های مورد نیاز خودکار دانلود می‌شوند. <b>JUnit</b> استاندارد تست‌نویسی جاواست، شبیه pytest در پایتون.</p><div class='code-block'><div class='cb-head'>CalculatorTest.java</div><pre><code>import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass CalculatorTest {\n    @Test\n    void testAdd() {\n        assertEquals(5, Calculator.add(2, 3));\n    }\n}</code></pre></div>",
     "exercise": "برای متد isPrime که قبلاً نوشتی، یک تست JUnit بنویس که چک کنه isPrime(7) درست باشه و isPrime(8) غلط."
    },
    {
     "title": "Spring و Spring Boot",
     "content": "<p><b>Spring</b> بزرگ‌ترین اکوسیستم فریم‌ورک جاواست؛ <b>Spring Boot</b> راه‌اندازی آن را با تنظیمات پیش‌فرض هوشمند ساده می‌کند. Spring از Dependency Injection (که در C# هم دیدید) به‌شدت استفاده می‌کند — با Annotation هایی مثل <code class='inline'>@Autowired</code>.</p><div class='code-block'><div class='cb-head'>UserController.java</div><pre><code>@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService; // تزریق خودکار توسط Spring\n\n    @GetMapping\n    public List&lt;User&gt; getAll() {\n        return userService.findAll();\n    }\n}</code></pre></div>",
     "exercise": "توضیح بده @Autowired چطور همون کاری رو می‌کنه که constructor injection توی C# (که قبلاً دیدی) انجام می‌داد."
    },
    {
     "title": "REST API با Spring Boot",
     "content": "<p>با Annotation های <code class='inline'>@GetMapping</code>، <code class='inline'>@PostMapping</code>، <code class='inline'>@PutMapping</code>، <code class='inline'>@DeleteMapping</code> یک API کامل REST می‌سازید — دقیقاً همان الگویی که در Express، ASP.NET Core و FastAPI دیدید، فقط با سینتکس Annotation-محور جاوا.</p><div class='code-block'><div class='cb-head'>ProductController.java</div><pre><code>@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n    private List&lt;Product&gt; products = new ArrayList&lt;&gt;();\n\n    @PostMapping\n    public Product create(@RequestBody Product product) {\n        products.add(product);\n        return product;\n    }\n\n    @GetMapping(\"/{id}\")\n    public Product getById(@PathVariable int id) {\n        return products.get(id);\n    }\n}</code></pre></div>",
     "exercise": "توضیح بده @RequestBody و @PathVariable هرکدوم داده رو از کجای درخواست HTTP می‌گیرن (بدنهٔ درخواست در برابر بخشی از URL)."
    },
    {
     "title": "Hibernate/JPA: ORM جاوا",
     "content": "<p><b>JPA (Java Persistence API)</b> استاندارد ORM جاواست؛ <b>Hibernate</b> پیاده‌سازی رایج آن است. با Annotation هایی مثل <code class='inline'>@Entity</code> کلاس‌های جاوا مستقیم به جدول‌های دیتابیس متصل می‌شوند — دقیقاً معادل Entity Framework (C#) یا SQLAlchemy (پایتون) یا Mongoose (Node).</p><div class='code-block'><div class='cb-head'>Product.java</div><pre><code>@Entity\n@Table(name = \"products\")\npublic class Product {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private double price;\n    // getters/setters...\n}\n\n// در Repository:\nList&lt;Product&gt; expensiveOnes = productRepository.findByPriceGreaterThan(100000);</code></pre></div>",
     "exercise": "با توجه به چیزهایی که در C# (Entity Framework) و پایتون (SQLAlchemy) دیدی، توضیح بده الگوی مشترک بین این سه ORM (نوشتن کلاس معمولی به‌جای SQL خام) دقیقاً چیه."
    },
    {
     "title": "JVM Internals، Microservices و Caching",
     "content": "<p>در مقیاس بزرگ‌تر: <b>JVM Tuning</b> یعنی تنظیم دقیق حافظهٔ Heap و رفتار Garbage Collector برای عملکرد بهتر زیر بار سنگین. <b>Microservices</b> یعنی به‌جای یک اپلیکیشن یکپارچهٔ بزرگ (Monolith)، سیستم را به سرویس‌های کوچک و مستقل (که هرکدام می‌توانند جدا Deploy و Scale شوند) تقسیم می‌کنید. <b>Caching</b> (با ابزارهایی مثل Redis) نتایج پرتکرار را در حافظهٔ سریع نگه می‌دارد تا از محاسبه/کوئری تکراری جلوگیری شود — پایهٔ معماری سیستم‌های بزرگ سازمانی (بانک‌ها، شرکت‌های بزرگ فناوری) که معمولاً با جاوا/Spring ساخته می‌شوند.</p>",
     "exercise": "توضیح بده چرا یک شرکت بزرگ با میلیون‌ها کاربر، به‌جای یک اپلیکیشن Monolith بزرگ، ترجیح می‌ده سیستمش رو به Microservices مستقل تقسیم کنه — به مقیاس‌پذیری جداگانهٔ هر بخش فکر کن."
    },
    {
     "title": "تست با Mockito و طراحی SOLID",
     "content": "<p>Mockito وابستگی‌ها (مثل Repository) را در تست شبیه‌سازی می‌کند. اصول SOLID (مسئولیت واحد، باز/بسته، جایگزینی لیسکوف، تفکیک اینترفیس، وارونگی وابستگی) کد را قابل تست و قابل‌توسعه می‌کند.</p><div class='code-block'><div class='cb-head'>UserServiceTest.java</div><pre><code>@Test void findsUser() {\n  var repo = mock(UserRepo.class);\n  when(repo.find(1)).thenReturn(new User(1,\"علی\"));\n  assertEquals(\"علی\", new UserService(repo).name(1));\n}</code></pre></div>",
     "exercise": "یک کلاس را که چند مسئولیت دارد طبق SRP به دو کلاس بشکن."
    },
    {
     "title": "Record، Sealed و Pattern Matching (Java 21)",
     "content": "<p><code class='inline'>record</code> کلاس داده‌ی تغییرناپذیر با equals/hashCode/toString خودکار است. <code class='inline'>sealed</code> فهرست زیرکلاس‌های مجاز را می‌بندد و <code class='inline'>switch</code> الگو کامل‌بودن را بررسی می‌کند؛ هنگام افزودن نوع جدید، کامپایلر جاهای فراموش‌شده را نشان می‌دهد. Record Pattern ساختار را مستقیم باز می‌کند.<div class='code-block'><div class='cb-head'>Shapes.java</div><pre><code>public class J1 {\n  sealed interface Shape permits Circle, Rect {}\n  record Circle(double r) implements Shape {}\n  record Rect(double w, double h) implements Shape {}\n\n  static double area(Shape s) {\n    return switch (s) {\n      case Circle c -> Math.PI * c.r() * c.r();\n      case Rect(double w, double h) -> w * h;\n    };\n  }\n  public static void main(String[] args) {\n    System.out.printf(\"%.2f %.2f%n\", area(new Circle(1)), area(new Rect(2, 3)));\n    System.out.println(new Rect(2, 3));\n  }\n}\n</code></pre></div></p>",
     "exercise": "یک مدل Result = Ok | Error با sealed و switch بنویس."
    },
    {
     "title": "Stream و Collector در عمق",
     "content": "<p>Stream تنبل است و فقط با عملیات پایانی (<code class='inline'>collect</code>، <code class='inline'>toList</code>) اجرا می‌شود. <code class='inline'>groupingBy</code> با collector پایین‌دستی گزارش‌های پیچیده می‌سازد، <code class='inline'>flatMap</code> ساختار تو‌در‌تو را تخت می‌کند. از <code class='inline'>parallel()</code> فقط با داده‌ی بزرگ و عملیات بدون حالت جانبی استفاده کن؛ در بیشتر موارد کندتر است. حالت تغییرپذیر داخل lambda ممنوع است.<div class='code-block'><div class='cb-head'>Streams.java</div><pre><code>import java.util.*;\nimport java.util.stream.*;\npublic class J2 {\n  record Order(String city, int total) {}\n  public static void main(String[] args) {\n    var orders = List.of(new Order(\"A\", 10), new Order(\"A\", 20), new Order(\"B\", 5));\n    Map&lt;String, Integer> sum = orders.stream()\n        .collect(Collectors.groupingBy(Order::city, TreeMap::new, Collectors.summingInt(Order::total)));\n    System.out.println(sum);\n    var top = orders.stream().max(Comparator.comparingInt(Order::total)).orElseThrow();\n    System.out.println(top);\n    System.out.println(Stream.of(List.of(1,2), List.of(3)).flatMap(List::stream).map(x -> x * x).toList());\n  }\n}\n</code></pre></div></p>",
     "exercise": "فروش هر شهر را گروه‌بندی کن و پرفروش‌ترین را پیدا کن."
    },
    {
     "title": "Generics: PECS، Wildcard و Type Erasure",
     "content": "<p>قاعده‌ی PECS: <b>P</b>roducer <code class='inline'>extends</code>، <b>C</b>onsumer <code class='inline'>super</code>. اگر لیست فقط می‌دهد از <code class='inline'>? extends T</code> و اگر فقط می‌گیرد از <code class='inline'>? super T</code> استفاده کن. نوع‌های generic در زمان اجرا پاک می‌شوند (Type Erasure)، پس <code class='inline'>new T()</code> و <code class='inline'>instanceof List&lt;String&gt;</code> ممکن نیست.<div class='code-block'><div class='cb-head'>Pecs.java</div><pre><code>import java.util.*;\npublic class J3 {\n  static double sum(Collection&lt;? extends Number> src) { double t = 0; for (Number n : src) t += n.doubleValue(); return t; }\n  static void fill(List&lt;? super Integer> dst) { dst.add(1); dst.add(2); }\n  public static void main(String[] args) {\n    System.out.println(sum(List.of(1, 2.5, 3L)));\n    List&lt;Number> nums = new ArrayList&lt;>(); fill(nums);\n    System.out.println(nums);\n  }\n}\n</code></pre></div></p>",
     "exercise": "تابع copy(src, dst) را با PECS بنویس."
    },
    {
     "title": "ExecutorService و CompletableFuture",
     "content": "<p>به‌جای ساخت رشته‌ی دستی از Executor استفاده کن و آن را ببند (<code class='inline'>try-with-resources</code> در Java 21). <code class='inline'>CompletableFuture</code> کارهای ناهمگام را زنجیر می‌کند: <code class='inline'>thenApply</code>، <code class='inline'>thenCombine</code>، <code class='inline'>exceptionally</code>. استخر پیش‌فرض (<code class='inline'>commonPool</code>) را با کار مسدودکننده پر نکن.<div class='code-block'><div class='cb-head'>Async.java</div><pre><code>import java.util.concurrent.*;\npublic class J4 {\n  public static void main(String[] args) throws Exception {\n    try (var ex = Executors.newFixedThreadPool(4)) {\n      CompletableFuture&lt;Integer> a = CompletableFuture.supplyAsync(() -> 20, ex);\n      CompletableFuture&lt;Integer> b = CompletableFuture.supplyAsync(() -> 22, ex);\n      System.out.println(a.thenCombine(b, Integer::sum).get());\n      var f = CompletableFuture.supplyAsync(() -> { throw new IllegalStateException(\"خطا\"); }, ex)\n          .exceptionally(e -> -1);\n      System.out.println(f.get());\n    }\n  }\n}\n</code></pre></div></p>",
     "exercise": "سه سرویس را موازی صدا بزن و نتایج را ترکیب کن."
    },
    {
     "title": "Virtual Thread و همزمانی ساخت‌یافته",
     "content": "<p>Virtual Thread (Java 21) رشته‌ی سبک JVM است: میلیون‌ها مورد می‌شود ساخت و هنگام انتظار I/O رشته‌ی سیستم‌عامل را آزاد می‌کند. سبک ساده‌ی «یک رشته به ازای هر درخواست» دوباره مقیاس‌پذیر می‌شود. برای کار CPU سنگین مفید نیست و استخر نکن؛ هر کار یک Virtual Thread جدید بگیرد. از <code class='inline'>synchronized</code> طولانی هنگام I/O پرهیز کن (pinning).<div class='code-block'><div class='cb-head'>Virtual.java</div><pre><code>import java.util.concurrent.*;\nimport java.util.concurrent.atomic.*;\npublic class J5 {\n  public static void main(String[] args) throws Exception {\n    var count = new AtomicInteger();\n    try (var ex = Executors.newVirtualThreadPerTaskExecutor()) {\n      for (int i = 0; i &lt; 10_000; i++) ex.submit(() -> { Thread.sleep(10); count.incrementAndGet(); return null; });\n    }\n    System.out.println(count.get());\n  }\n}\n</code></pre></div></p>",
     "exercise": "۱۰ هزار فراخوانی شبکه را با Virtual Thread بنویس و با استخر ثابت مقایسه کن."
    },
    {
     "title": "مدل حافظه‌ی جاوا: volatile، synchronized و Atomic",
     "content": "<p>Java Memory Model «happens-before» را تعریف می‌کند: بدون آن یک رشته ممکن است تغییرات رشته‌ی دیگر را نبیند. <code class='inline'>volatile</code> دیده‌شدن را تضمین می‌کند ولی اتمی‌بودن <code class='inline'>count++</code> را نه. <code class='inline'>synchronized</code> و <code class='inline'>ReentrantLock</code> انحصار و دیده‌شدن می‌دهند و <code class='inline'>AtomicInteger</code>/<code class='inline'>LongAdder</code> برای شمارنده بهترند. آبجکت‌های تغییرناپذیر ایمن‌ترین راه‌اند.</p>",
     "exercise": "نشان بده چرا volatile int با ++ نتیجه‌ی غلط می‌دهد."
    },
    {
     "title": "داخل JVM: ناحیه‌های حافظه و Garbage Collector",
     "content": "<p>حافظه شامل Heap (نسل جوان و پیر)، Metaspace (متادیتای کلاس) و Stack هر رشته است. G1 پیش‌فرض و متعادل است، ZGC/Shenandoah مکث بسیار کم برای حافظه‌ی بزرگ می‌دهند. پرچم‌های مهم: <code class='inline'>-Xms -Xmx</code> (هم‌اندازه در تولید)، <code class='inline'>-XX:MaxRAMPercentage</code> برای کانتینر. قبل از تنظیم، لاگ GC را بخوان.</p>",
     "exercise": "لاگ GC یک برنامه را بررسی و فراوانی و مدت مکث را گزارش کن."
    },
    {
     "title": "پروفایل و عیب‌یابی: JFR، jcmd و Heap Dump",
     "content": "<p>JFR (Java Flight Recorder) با سربار کم اجرای واقعی را ضبط می‌کند و با JDK Mission Control باز می‌شود. <code class='inline'>jcmd</code> و <code class='inline'>jstack</code> وضعیت رشته‌ها و Deadlock را نشان می‌دهند. برای نشت حافظه <code class='inline'>jmap -dump</code> یا <code class='inline'>-XX:+HeapDumpOnOutOfMemoryError</code> و تحلیل با Eclipse MAT: دنبال مسیر نگه‌دارنده (GC Root) بگرد.</p>",
     "exercise": "یک نشت ساختگی بساز و با MAT ریشه‌اش را پیدا کن."
    },
    {
     "title": "Spring Boot: DI، پیکربندی و REST",
     "content": "<p>Spring Container اشیا را می‌سازد و تزریق از سازنده (نه فیلد) را توصیه می‌کند. پیکربندی با <code class='inline'>application.yml</code> و Profile برای هر محیط و <code class='inline'>@ConfigurationProperties</code> نوع‌امن. در REST از DTO جدا از Entity، <code class='inline'>@Valid</code> برای اعتبارسنجی و <code class='inline'>@ControllerAdvice</code> برای مدیریت یکنواخت خطا استفاده کن.<div class='code-block'><div class='cb-head'>OrderController.java</div><pre><code>@RestController\n@RequestMapping(\"/orders\")\nclass OrderController {\n  private final OrderService svc;\n  OrderController(OrderService svc) { this.svc = svc; }\n\n  @GetMapping(\"/{id}\")\n  OrderDto get(@PathVariable long id) { return svc.find(id); }\n}</code></pre></div></p>",
     "exercise": "یک endpoint با اعتبارسنجی ورودی و پاسخ خطای یکنواخت بنویس."
    },
    {
     "title": "Spring Data JPA و Hibernate: N+1 و تراکنش",
     "content": "<p>N+1 هنگام خواندن رابطه‌ها در حلقه رخ می‌دهد؛ با <code class='inline'>JOIN FETCH</code>، <code class='inline'>@EntityGraph</code> یا پروجکشن حل کن. رابطه‌ها را Lazy بگذار. <code class='inline'>@Transactional</code> را روی لایه‌ی سرویس بگذار و بدان که فراخوانی داخل همان کلاس پروکسی را دور می‌زند. برای همزمانی خوش‌بینانه از <code class='inline'>@Version</code> استفاده کن و SQL تولیدی را لاگ و بررسی کن.</p>",
     "exercise": "یک N+1 را با @EntityGraph رفع کن و تعداد کوئری‌ها را بشمار."
    },
    {
     "title": "Spring Security و JWT",
     "content": "<p>زنجیره‌ی <code class='inline'>SecurityFilterChain</code> مشخص می‌کند کدام مسیر چه دسترسی می‌خواهد. توکن JWT را با Resource Server اعتبارسنجی کن (امضا، exp، aud). رمز را با BCrypt/Argon2 هش کن. مجوز دقیق را با <code class='inline'>@PreAuthorize</code> و بررسی مالکیت منبع بنویس (جلوگیری از IDOR) و CSRF را برای API بدون کوکی آگاهانه غیرفعال کن.</p>",
     "exercise": "یک endpoint فقط-ادمین و یک endpoint فقط-مالک بنویس."
    },
    {
     "title": "تست و ساخت: JUnit 5، Mockito، Testcontainers و Gradle",
     "content": "<p>JUnit 5 با <code class='inline'>@ParameterizedTest</code> و Mockito برای شبیه‌سازی وابستگی. تست یکپارچه با <code class='inline'>@SpringBootTest</code> و دیتابیس واقعی با Testcontainers. ساخت با Gradle یا Maven و Dependency Locking. برای شروع سریع و حافظه‌ی کم، GraalVM Native Image و برای استقرار Docker لایه‌ای (Jib) را بشناس.</p>",
     "exercise": "یک تست یکپارچه با Postgres موقت و Testcontainers بنویس."
    },
    {
     "title": "switch expression، Text Block و متدهای مدرن String",
     "content": "<p>از Java 14 به بعد <b>switch expression</b> مقدار برمی‌گرداند (<code>case A, B -&gt; ...</code>)، بدون fall-through و با بررسی کامل‌بودن برای enum. <code>yield</code> در بلوک مقدار می‌دهد. <b>Text Block</b> (<code>\"\"\" ... \"\"\"</code>) رشته‌های چندخطی را بدون escape می‌نویسد و تورفتگی مشترک را حذف می‌کند. متدهای مفید: <code>isBlank</code>, <code>strip</code>, <code>repeat</code>, <code>lines</code>, <code>formatted</code>. <code>var</code> نوع محلی را استنتاج می‌کند (فقط برای متغیر محلی).</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    enum Day { SAT, SUN, MON, TUE, WED, THU, FRI }\n    public static void main(String[] args) {\n        for (Day d : new Day[]{Day.SAT, Day.MON, Day.FRI}) {\n            String kind = switch (d) {\n                case SAT, SUN -&gt; &quot;آخر هفته&quot;;\n                case FRI -&gt; { String t = &quot;جمعه&quot;; yield t + &quot; (تعطیل رسمی)&quot;; }\n                default -&gt; &quot;کاری&quot;;\n            };\n            System.out.println(d + &quot; → &quot; + kind);\n        }\n        String json = &quot;&quot;&quot;\n            {\n              &quot;name&quot;: &quot;کدستان&quot;,\n              &quot;level&quot;: 3\n            }\n            &quot;&quot;&quot;;\n        System.out.print(json);\n        System.out.println(&quot;lines=&quot; + json.lines().count());\n        var s = &quot;  \\t hello  &quot;;\n        System.out.println(&quot;[&quot; + s.strip() + &quot;] blank? &quot; + &quot;   &quot;.isBlank() + &quot; &quot; + &quot;ab&quot;.repeat(3));\n        System.out.println(&quot;سلام %s، نمره %.1f&quot;.formatted(&quot;علی&quot;, 18.5));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>SAT → آخر هفته\nMON → کاری\nFRI → جمعه (تعطیل رسمی)\n{\n  &quot;name&quot;: &quot;کدستان&quot;,\n  &quot;level&quot;: 3\n}\nlines=4\n[hello] blank? true ababab\nسلام علی، نمره 18.5</code></pre></div>",
     "exercise": "یک switch expression بنویس که ماه را به فصل تبدیل کند."
    },
    {
     "title": "Pattern Matching: instanceof، switch و Record Patterns (Java 21)",
     "content": "<p><code>obj instanceof String s</code> هم نوع را می‌سنجد و هم متغیر <code>s</code> را بدون cast می‌سازد. در Java 21 <b>switch الگو</b> (pattern switch) روی نوع، با <code>when</code> (guard) و <code>null</code> کار می‌کند؛ برای <code>sealed</code> کامپایلر کامل‌بودن شاخه‌ها را بررسی می‌کند. <b>Record pattern</b> رکورد را مستقیم باز می‌کند: <code>case Point(int x, int y)</code> و حتی تو در تو. ترتیب case مهم است: الگوی عمومی‌تر نباید جلوتر از خاص‌تر بیاید (خطای کامپایل).</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>public class Main {\n    sealed interface Shape permits Circle, Rect, Group {}\n    record Circle(double r) implements Shape {}\n    record Rect(double w, double h) implements Shape {}\n    record Group(Shape a, Shape b) implements Shape {}\n\n    static double area(Shape s) {\n        return switch (s) {\n            case Circle c -&gt; Math.PI * c.r() * c.r();\n            case Rect(double w, double h) -&gt; w * h;           // record pattern\n            case Group(Shape a, Shape b) -&gt; area(a) + area(b);  // تو در تو\n        };                                                      // بدون default: sealed کامل است\n    }\n    static String describe(Object o) {\n        return switch (o) {\n            case null -&gt; &quot;تهی&quot;;\n            case Integer i when i &gt; 100 -&gt; &quot;عدد بزرگ &quot; + i;\n            case Integer i -&gt; &quot;عدد &quot; + i;\n            case String str when str.isEmpty() -&gt; &quot;رشته‌ی خالی&quot;;\n            case String str -&gt; &quot;رشته &quot; + str.length();\n            default -&gt; &quot;ناشناخته &quot; + o.getClass().getSimpleName();\n        };\n    }\n    public static void main(String[] args) {\n        Object o = &quot;hello&quot;;\n        if (o instanceof String s &amp;&amp; s.length() &gt; 3) System.out.println(&quot;instanceof: &quot; + s.toUpperCase());\n        System.out.printf(&quot;%.2f%n&quot;, area(new Group(new Circle(1), new Rect(2, 3))));\n        for (Object x : new Object[]{5, 500, &quot;&quot;, &quot;abc&quot;, null, 2.5}) System.out.println(describe(x));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>instanceof: HELLO\n9.14\nعدد 5\nعدد بزرگ 500\nرشته‌ی خالی\nرشته 3\nتهی\nناشناخته Double</code></pre></div>",
     "exercise": "یک sealed interface برای عبارت ریاضی (Num, Add, Mul) بساز و evaluate را با pattern switch بنویس."
    },
    {
     "title": "Optional: استفاده‌ی درست و خطاهای رایج",
     "content": "<p><code>Optional&lt;T&gt;</code> یعنی «شاید مقدار نباشد» و فقط برای <b>مقدار بازگشتی</b> طراحی شده — نه فیلد، نه پارامتر. به‌جای <code>if (o.isPresent()) o.get()</code> از <code>map</code>, <code>flatMap</code>, <code>filter</code>, <code>orElse</code>, <code>orElseGet</code>, <code>orElseThrow</code> و <code>ifPresentOrElse</code> استفاده کن. تله: <code>orElse(expensive())</code> همیشه ارزیابی می‌شود؛ برای محاسبه‌ی گران <code>orElseGet</code>. هرگز <code>Optional</code> تهی (<code>null</code>) برنگردان. <code>Optional.of(null)</code> استثنا می‌دهد؛ <code>ofNullable</code> امن است.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    record User(String name, String email) {}\n    static final Map&lt;Integer, User&gt; DB = Map.of(1, new User(&quot;ali&quot;, &quot;ali@x.ir&quot;), 2, new User(&quot;sara&quot;, null));\n\n    static Optional&lt;User&gt; find(int id) { return Optional.ofNullable(DB.get(id)); }\n    static String expensive() { System.out.println(&quot;  (expensive اجرا شد)&quot;); return &quot;default&quot;; }\n\n    public static void main(String[] args) {\n        for (int id : new int[]{1, 2, 3}) {\n            String mail = find(id)\n                .map(User::email)                         // اگر email تهی باشد نتیجه‌ی map هم empty است\n                .map(String::toUpperCase)\n                .orElse(&quot;بدون ایمیل&quot;);\n            System.out.println(id + &quot; → &quot; + mail);\n        }\n        System.out.println(&quot;orElse:&quot;);\n        find(1).map(User::name).orElse(expensive());      // همیشه صدا زده می‌شود\n        System.out.println(&quot;orElseGet:&quot;);\n        find(1).map(User::name).orElseGet(Main::expensive); // تنبل\n        find(3).ifPresentOrElse(u -&gt; System.out.println(&quot;پیدا&quot;), () -&gt; System.out.println(&quot;پیدا نشد&quot;));\n        try { find(3).orElseThrow(() -&gt; new NoSuchElementException(&quot;کاربر 3 نیست&quot;)); }\n        catch (NoSuchElementException e) { System.out.println(&quot;خطا: &quot; + e.getMessage()); }\n        try { Optional.of(null); } catch (NullPointerException e) { System.out.println(&quot;Optional.of(null) → NPE&quot;); }\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>1 → ALI@X.IR\n2 → بدون ایمیل\n3 → بدون ایمیل\norElse:\n  (expensive اجرا شد)\norElseGet:\nپیدا نشد\nخطا: کاربر 3 نیست\nOptional.of(null) → NPE</code></pre></div>",
     "exercise": "زنجیره‌ای بنویس که از کاربر → آدرس → شهر را با flatMap بخواند."
    },
    {
     "title": "قرارداد equals و hashCode و دام‌های HashMap",
     "content": "<p>اگر <code>a.equals(b)</code> درست است باید <code>a.hashCode() == b.hashCode()</code> باشد؛ نقض آن باعث می‌شود شیء در <code>HashMap</code>/<code>HashSet</code> گم شود. <code>equals</code> باید بازتابی، متقارن، متعدی و سازگار باشد و با <code>null</code> false بدهد. کلید را <b>تغییرناپذیر</b> نگه دار؛ تغییر فیلدهای دخیل در hashCode بعد از درج آن را غیرقابل‌پیدا می‌کند. <code>record</code> این دو را خودکار درست می‌سازد. <code>Objects.equals</code> و <code>Objects.hash</code> کمک می‌کنند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    static class Bad {                         // equals دارد ولی hashCode ندارد\n        final int id; Bad(int id) { this.id = id; }\n        @Override public boolean equals(Object o) { return o instanceof Bad b &amp;&amp; b.id == id; }\n    }\n    static class Good {\n        final int id; Good(int id) { this.id = id; }\n        @Override public boolean equals(Object o) { return o instanceof Good g &amp;&amp; g.id == id; }\n        @Override public int hashCode() { return Integer.hashCode(id); }\n    }\n    static class Mutable {\n        int v; Mutable(int v) { this.v = v; }\n        @Override public boolean equals(Object o) { return o instanceof Mutable m &amp;&amp; m.v == v; }\n        @Override public int hashCode() { return v; }\n    }\n    record P(int x, int y) {}\n    public static void main(String[] args) {\n        Set&lt;Bad&gt; bad = new HashSet&lt;&gt;(); bad.add(new Bad(1));\n        System.out.println(&quot;Bad: equals=&quot; + new Bad(1).equals(new Bad(1)) + &quot; ولی contains=&quot; + bad.contains(new Bad(1)));\n        Set&lt;Good&gt; good = new HashSet&lt;&gt;(); good.add(new Good(1));\n        System.out.println(&quot;Good contains=&quot; + good.contains(new Good(1)));\n\n        Set&lt;Mutable&gt; ms = new HashSet&lt;&gt;(); Mutable m = new Mutable(5); ms.add(m);\n        m.v = 6;                                // تغییر کلید بعد از درج\n        System.out.println(&quot;Mutable: contains(m)=&quot; + ms.contains(m) + &quot; size=&quot; + ms.size() + &quot; (گم شد!)&quot;);\n        System.out.println(&quot;record: &quot; + new P(1, 2).equals(new P(1, 2)) + &quot; &quot; + new P(1, 2));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>Bad: equals=true ولی contains=false\nGood contains=true\nMutable: contains(m)=false size=1 (گم شد!)\nrecord: true P[x=1, y=2]</code></pre></div>",
     "exercise": "کلاس Money با equals/hashCode بنویس و در HashMap آزمایش کن."
    },
    {
     "title": "تغییرناپذیری و کپی دفاعی",
     "content": "<p>شیء <b>immutable</b> (مثل <code>String</code>، <code>LocalDate</code>) ذاتاً thread-safe و امن به‌عنوان کلید است. قواعد ساخت: کلاس <code>final</code>، فیلدها <code>private final</code>، بدون setter، و <b>کپی دفاعی</b> برای فیلدهای تغییرپذیر هم در سازنده و هم در getter. <code>List.of</code>/<code>Map.of</code> کاملاً immutable‌اند؛ <code>Collections.unmodifiableList</code> فقط «نمای» فقط‌خواندنی است و اگر لیست اصلی تغییر کند، نما هم تغییر می‌کند. <code>List.copyOf</code> کپی immutable می‌سازد. در رکورد، فیلد لیستی را در سازنده‌ی compact کپی کن.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    record Team(String name, List&lt;String&gt; members) {\n        Team { members = List.copyOf(members); }          // کپی دفاعی (immutable)\n    }\n    static final class Leaky {\n        private final List&lt;String&gt; items;\n        Leaky(List&lt;String&gt; items) { this.items = items; }  // کپی نمی‌کند!\n        List&lt;String&gt; items() { return items; }\n    }\n    public static void main(String[] args) {\n        List&lt;String&gt; src = new ArrayList&lt;&gt;(List.of(&quot;ali&quot;, &quot;sara&quot;));\n        Team t = new Team(&quot;A&quot;, src);\n        src.add(&quot;hack&quot;);\n        System.out.println(&quot;Team بعد از تغییر src: &quot; + t.members());\n        try { t.members().add(&quot;x&quot;); } catch (UnsupportedOperationException e) { System.out.println(&quot;members() immutable است&quot;); }\n\n        Leaky l = new Leaky(src);\n        src.clear();\n        System.out.println(&quot;Leaky تحت تأثیر قرار گرفت: &quot; + l.items());\n\n        List&lt;String&gt; base = new ArrayList&lt;&gt;(List.of(&quot;a&quot;));\n        List&lt;String&gt; view = Collections.unmodifiableList(base);\n        base.add(&quot;b&quot;);\n        System.out.println(&quot;view فقط نماست: &quot; + view + &quot; | copyOf مستقل: &quot; + List.copyOf(base));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>Team بعد از تغییر src: [ali, sara]\nmembers() immutable است\nLeaky تحت تأثیر قرار گرفت: []\nview فقط نماست: [a, b] | copyOf مستقل: [a, b]</code></pre></div>",
     "exercise": "کلاس Period immutable با Date تغییرپذیر را با کپی دفاعی بنویس."
    },
    {
     "title": "استثناها: try-with-resources، suppressed و زنجیره‌ی علت",
     "content": "<p>منبعی که <code>AutoCloseable</code> است را در <code>try (...)</code> بگذار تا بسته‌شدنش تضمین شود (به ترتیب معکوس). اگر هم بدنه و هم <code>close</code> استثنا بدهند، استثنای بدنه اصلی می‌ماند و دیگری در <code>getSuppressed()</code> ثبت می‌شود (برخلاف <code>finally</code> که استثنای اصلی را گم می‌کند). استثنای سطح‌پایین را با <b>علت</b> بپیچ: <code>new ServiceException(\"...\", e)</code> تا stack اصلی حفظ شود. <b>checked</b> برای خطاهای قابل‌بازیابی و <b>unchecked</b> برای اشتباه برنامه‌نویس. <code>catch (Exception e) {}</code> خالی ممنوع است.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>public class Main {\n    static class Res implements AutoCloseable {\n        final String n; final boolean failClose;\n        Res(String n, boolean failClose) { this.n = n; this.failClose = failClose; System.out.println(&quot;باز: &quot; + n); }\n        @Override public void close() { System.out.println(&quot;بسته: &quot; + n); if (failClose) throw new IllegalStateException(&quot;close شکست: &quot; + n); }\n    }\n    static class ServiceException extends Exception {\n        private static final long serialVersionUID = 1L;\n        ServiceException(String m, Throwable cause) { super(m, cause); }\n    }\n    @SuppressWarnings(&quot;try&quot;)\n    static void load() throws ServiceException {\n        try (Res a = new Res(&quot;A&quot;, false); Res b = new Res(&quot;B&quot;, true)) {\n            System.out.println(&quot;در بدنه&quot;);\n            throw new RuntimeException(&quot;بدنه شکست&quot;);\n        } catch (RuntimeException e) {\n            throw new ServiceException(&quot;load ناموفق&quot;, e);\n        }\n    }\n    @SuppressWarnings(&quot;finally&quot;)\n    static int bad() { try { throw new RuntimeException(&quot;اصلی&quot;); } finally { return 1; } }   // استثنا را می‌بلعد!\n    public static void main(String[] args) {\n        try { load(); }\n        catch (ServiceException e) {\n            System.out.println(&quot;گرفته شد: &quot; + e.getMessage());\n            System.out.println(&quot;علت: &quot; + e.getCause().getMessage());\n            for (Throwable s : e.getCause().getSuppressed()) System.out.println(&quot;suppressed: &quot; + s.getMessage());\n        }\n        System.out.println(&quot;bad() = &quot; + bad() + &quot; (استثنا گم شد)&quot;);\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>باز: A\nباز: B\nدر بدنه\nبسته: B\nبسته: A\nگرفته شد: load ناموفق\nعلت: بدنه شکست\nsuppressed: close شکست: B\nbad() = 1 (استثنا گم شد)</code></pre></div>",
     "exercise": "منبع سوم اضافه کن و ترتیب بسته‌شدن را بررسی کن."
    },
    {
     "title": "اینترفیس‌ها: default، static، private و رابط‌های تابعی",
     "content": "<p>اینترفیس می‌تواند متد <code>default</code> (پیاده‌سازی پیش‌فرض)، <code>static</code> و <code>private</code> داشته باشد؛ این امکان تکامل API بدون شکستن پیاده‌سازها را می‌دهد. اگر دو اینترفیس متد default هم‌نام بدهند، کلاس باید صریحاً override کند (<code>A.super.hello()</code>). <b>رابط تابعی</b> دقیقاً یک متد انتزاعی دارد و با lambda/method reference استفاده می‌شود: <code>Function</code>, <code>Predicate</code>, <code>Supplier</code>, <code>Consumer</code>, <code>BiFunction</code>, <code>UnaryOperator</code>. با <code>@FunctionalInterface</code> قصد را مستند کن. ترکیب: <code>f.andThen(g)</code>, <code>p.negate().and(q)</code>.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.function.*;\n\npublic class Main {\n    interface Greeter {\n        String name();\n        default String greet() { return prefix() + name(); }\n        private String prefix() { return &quot;سلام، &quot;; }\n        static Greeter of(String n) { return () -&gt; n; }\n    }\n    interface A { default String hi() { return &quot;A&quot;; } }\n    interface B { default String hi() { return &quot;B&quot;; } }\n    static class C implements A, B { public String hi() { return A.super.hi() + &quot;+&quot; + B.super.hi(); } }\n\n    @FunctionalInterface interface TriFunction&lt;X, Y, Z, R&gt; { R apply(X x, Y y, Z z); }\n\n    public static void main(String[] args) {\n        System.out.println(Greeter.of(&quot;علی&quot;).greet());\n        System.out.println(new C().hi());\n        Function&lt;Integer, Integer&gt; inc = x -&gt; x + 1, dbl = x -&gt; x * 2;\n        System.out.println(&quot;andThen: &quot; + inc.andThen(dbl).apply(5) + &quot; | compose: &quot; + inc.compose(dbl).apply(5));\n        Predicate&lt;String&gt; empty = String::isEmpty;\n        Predicate&lt;String&gt; longer = s -&gt; s.length() &gt; 3;\n        System.out.println(empty.negate().and(longer).test(&quot;abcd&quot;) + &quot; &quot; + empty.or(longer).test(&quot;ab&quot;));\n        Supplier&lt;Double&gt; rnd = () -&gt; 4.0;\n        BiFunction&lt;Integer, Integer, Integer&gt; add = Integer::sum;\n        TriFunction&lt;Integer, Integer, Integer, Integer&gt; vol = (a, b, c) -&gt; a * b * c;\n        System.out.println(rnd.get() + &quot; &quot; + add.apply(2, 3) + &quot; &quot; + vol.apply(2, 3, 4));\n        UnaryOperator&lt;String&gt; up = String::toUpperCase;\n        System.out.println(up.apply(&quot;done&quot;));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>سلام، علی\nA+B\nandThen: 12 | compose: 11\ntrue false\n4.0 5 24\nDONE</code></pre></div>",
     "exercise": "رابط تابعی Validator با متد default برای ترکیب (and) بنویس."
    },
    {
     "title": "enum پیشرفته: فیلد، متد، رفتار هر ثابت و EnumMap",
     "content": "<p>enum در Java یک کلاس کامل است: فیلد، سازنده (خصوصی)، متد، پیاده‌سازی اینترفیس و حتی <b>متد مخصوص هر ثابت</b> (constant-specific body). <code>values()</code>, <code>valueOf</code>, <code>ordinal()</code>, <code>name()</code> را دارد. ثابت‌ها singleton هستند و با <code>==</code> مقایسه می‌شوند. برای نگاشت با کلید enum از <code>EnumMap</code> (آرایه‌ی داخلی؛ سریع و ترتیب‌دار) و برای مجموعه از <code>EnumSet</code> (بیت‌ماسک) استفاده کن. به <code>ordinal()</code> برای ذخیره‌سازی وابسته نشو (جابجایی ثابت‌ها داده را خراب می‌کند).</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    enum Op {\n        ADD(&quot;+&quot;) { double apply(double a, double b) { return a + b; } },\n        MUL(&quot;*&quot;) { double apply(double a, double b) { return a * b; } },\n        DIV(&quot;/&quot;) { double apply(double a, double b) {\n            if (b == 0) throw new ArithmeticException(&quot;تقسیم بر صفر&quot;); return a / b; } };\n        final String symbol;\n        Op(String s) { this.symbol = s; }\n        abstract double apply(double a, double b);\n        static Op bySymbol(String s) {\n            for (Op o : values()) if (o.symbol.equals(s)) return o;\n            throw new IllegalArgumentException(&quot;نماد ناشناخته: &quot; + s);\n        }\n    }\n    enum Level { LOW, MID, HIGH }\n    public static void main(String[] args) {\n        for (Op o : Op.values()) System.out.println(o + &quot; (&quot; + o.symbol + &quot;) 6,3 → &quot; + o.apply(6, 3));\n        System.out.println(Op.bySymbol(&quot;*&quot;).apply(4, 5));\n        try { Op.DIV.apply(1, 0); } catch (ArithmeticException e) { System.out.println(e.getMessage()); }\n\n        EnumMap&lt;Level, Integer&gt; count = new EnumMap&lt;&gt;(Level.class);\n        for (Level l : new Level[]{Level.HIGH, Level.LOW, Level.HIGH}) count.merge(l, 1, Integer::sum);\n        System.out.println(count);                                // به ترتیب تعریف enum\n        EnumSet&lt;Level&gt; s = EnumSet.range(Level.MID, Level.HIGH);\n        System.out.println(s + &quot; contains LOW؟ &quot; + s.contains(Level.LOW));\n        System.out.println(Level.valueOf(&quot;MID&quot;).ordinal() + &quot; &quot; + Op.ADD.getClass() + &quot; &quot; + Op.ADD.getDeclaringClass());\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>ADD (+) 6,3 → 9.0\nMUL (*) 6,3 → 18.0\nDIV (/) 6,3 → 2.0\n20.0\nتقسیم بر صفر\n{LOW=1, HIGH=2}\n[MID, HIGH] contains LOW؟ false\n1 class Main$Op$1 class Main$Op</code></pre></div>",
     "exercise": "enum وضعیت سفارش با گذارهای مجاز (canTransitionTo) بنویس."
    },
    {
     "title": "کلاس‌های تو در تو، ناشناس و ثبات متغیر در lambda",
     "content": "<p>چهار نوع: <b>static nested</b> (بدون ارجاع به بیرونی)، <b>inner</b> (غیر static؛ ارجاع ضمنی به شیء بیرونی و امکان نشت حافظه)، <b>local</b> و <b>anonymous</b>. متغیر محلی که lambda یا کلاس ناشناس می‌گیرد باید <b>effectively final</b> باشد (مقدار آن گرفته می‌شود نه خود متغیر). تفاوت <code>this</code>: در lambda همان کلاس اطراف، در کلاس ناشناس خودش. برای حالت تغییرپذیر از آرایه‌ی تک‌عنصری یا <code>AtomicInteger</code> استفاده می‌شود. در عمل، static nested را ترجیح بده مگر ارجاع به بیرونی لازم باشد.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class Main {\n    private final String owner = &quot;Main-instance&quot;;\n    class Inner { String who() { return &quot;Inner می‌بیند: &quot; + owner; } }          // ارجاع ضمنی به Main.this\n    static class Nested { String who() { return &quot;Nested مستقل&quot;; } }\n\n    Runnable viaLambda()   { return () -&gt; System.out.println(&quot;lambda this.owner = &quot; + this.owner); }\n    Runnable viaAnonymous() {\n        return new Runnable() {\n            String owner = &quot;anon-instance&quot;;\n            public void run() { System.out.println(&quot;anonymous this.owner = &quot; + this.owner + &quot; | Main.this.owner = &quot; + Main.this.owner); }\n        };\n    }\n    public static void main(String[] args) {\n        Main m = new Main();\n        Main.Inner in = m.new Inner();\n        System.out.println(in.who() + &quot; | &quot; + new Nested().who());\n        m.viaLambda().run(); m.viaAnonymous().run();\n\n        int base = 10;                                  // effectively final\n        // base++;                                      // ← اگر فعال شود lambda خطای کامپایل می‌دهد\n        List&lt;Runnable&gt; rs = new ArrayList&lt;&gt;();\n        for (int i = 0; i &lt; 3; i++) { int copy = i; rs.add(() -&gt; System.out.print((base + copy) + &quot; &quot;)); }\n        rs.forEach(Runnable::run); System.out.println();\n\n        AtomicInteger counter = new AtomicInteger();\n        List.of(1, 2, 3).forEach(x -&gt; counter.addAndGet(x));\n        int[] box = {0}; List.of(4, 5).forEach(x -&gt; box[0] += x);\n        System.out.println(&quot;counter=&quot; + counter + &quot; box=&quot; + box[0]);\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>Inner می‌بیند: Main-instance | Nested مستقل\nlambda this.owner = Main-instance\nanonymous this.owner = anon-instance | Main.this.owner = Main-instance\n10 11 12 \ncounter=6 box=9</code></pre></div>",
     "exercise": "نشت حافظه‌ی ناشی از inner class غیر static را شرح بده."
    },
    {
     "title": "java.time: تاریخ، زمان و منطقه‌ی زمانی",
     "content": "<p>کلاس‌های قدیمی <code>Date/Calendar</code> تغییرپذیر و پرخطا بودند. <code>java.time</code> (از Java 8) <b>immutable</b> و واضح است: <code>LocalDate</code> (تاریخ)، <code>LocalTime</code>، <code>LocalDateTime</code> (بدون منطقه)، <code>ZonedDateTime</code> (با منطقه)، <code>Instant</code> (نقطه‌ی روی محور زمان، UTC)، <code>Duration</code> (ثانیه/نانو) و <code>Period</code> (سال/ماه/روز). برای ذخیره‌سازی و API از <code>Instant</code> یا UTC استفاده کن و فقط هنگام نمایش به منطقه‌ی کاربر تبدیل کن. فرمت با <code>DateTimeFormatter</code> (ایمن در برابر thread برخلاف SimpleDateFormat). تقویم ایران با <code>Asia/Tehran</code> (و در صورت نیاز تقویم جلالی از کتابخانه) کار می‌کند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.time.*;\nimport java.time.format.DateTimeFormatter;\nimport java.time.temporal.ChronoUnit;\nimport java.time.temporal.TemporalAdjusters;\n\npublic class Main {\n    public static void main(String[] args) {\n        LocalDate d = LocalDate.of(2026, 10, 10);\n        System.out.println(d + &quot; &quot; + d.getDayOfWeek() + &quot; leap=&quot; + d.isLeapYear());\n        System.out.println(&quot;30 روز بعد: &quot; + d.plusDays(30) + &quot; | آخر ماه: &quot; + d.with(TemporalAdjusters.lastDayOfMonth()));\n        System.out.println(&quot;تا ۲۰۲۷-۰۱-۰۱: &quot; + ChronoUnit.DAYS.between(d, LocalDate.of(2027, 1, 1)) + &quot; روز&quot;);\n        System.out.println(Period.between(LocalDate.of(2000, 3, 15), d));\n\n        ZonedDateTime tehran = ZonedDateTime.of(2026, 10, 10, 17, 19, 0, 0, ZoneId.of(&quot;Asia/Tehran&quot;));\n        System.out.println(&quot;تهران: &quot; + tehran);\n        System.out.println(&quot;UTC:   &quot; + tehran.withZoneSameInstant(ZoneOffset.UTC));\n        System.out.println(&quot;نیویورک: &quot; + tehran.withZoneSameInstant(ZoneId.of(&quot;America/New_York&quot;)).toLocalTime());\n\n        Instant t = tehran.toInstant();\n        System.out.println(&quot;epoch ثانیه: &quot; + t.getEpochSecond());\n        Duration dur = Duration.between(t, t.plus(90, ChronoUnit.MINUTES));\n        System.out.println(dur + &quot; = &quot; + dur.toMinutes() + &quot; دقیقه&quot;);\n\n        DateTimeFormatter f = DateTimeFormatter.ofPattern(&quot;yyyy/MM/dd HH:mm&quot;);\n        System.out.println(tehran.format(f) + &quot; ← &quot; + LocalDateTime.parse(&quot;2026/10/10 08:05&quot;, f));\n        try { LocalDate.of(2026, 2, 30); } catch (DateTimeException e) { System.out.println(&quot;نامعتبر: &quot; + e.getMessage()); }\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>2026-10-10 SATURDAY leap=false\n30 روز بعد: 2026-11-09 | آخر ماه: 2026-10-31\nتا ۲۰۲۷-۰۱-۰۱: 83 روز\nP26Y6M25D\nتهران: 2026-10-10T17:19+03:30[Asia/Tehran]\nUTC:   2026-10-10T13:49Z\nنیویورک: 09:49\nepoch ثانیه: 1791640140\nPT1H30M = 90 دقیقه\n2026/10/10 17:19 ← 2026-10-10T08:05\nنامعتبر: Invalid date &#x27;FEBRUARY 30&#x27;</code></pre></div>",
     "exercise": "تفاوت زمان‌های ۲ شهر را با ZonedDateTime حساب کن."
    },
    {
     "title": "NIO.2: Path، Files و پیمایش دایرکتوری",
     "content": "<p><code>java.nio.file</code> جایگزین مدرن <code>java.io.File</code> است: <code>Path</code> (نمایش مسیر؛ <code>resolve</code>, <code>relativize</code>, <code>normalize</code>)، و <code>Files</code> با متدهای ساده: <code>readString</code>, <code>writeString</code>, <code>readAllLines</code>, <code>lines</code> (stream تنبل؛ باید بسته شود!)، <code>walk</code>, <code>copy</code>, <code>move</code>, <code>delete</code>. نوشتن اتمی: ابتدا در فایل موقت بنویس و با <code>ATOMIC_MOVE</code> جایگزین کن. <code>Files.walk</code> و <code>Files.lines</code> منبع باز نگه می‌دارند → <code>try-with-resources</code>. همیشه encoding را (UTF-8) صریح بده. ورودی کاربر را با <code>normalize</code> و <code>startsWith(base)</code> در برابر path traversal بررسی کن.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.*;\nimport java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path root = Files.createTempDirectory(&quot;nio_demo&quot;);\n        Path f = root.resolve(&quot;notes/a.txt&quot;);\n        Files.createDirectories(f.getParent());\n        Files.writeString(f, &quot;سلام\\nدنیا\\nکدستان\\n&quot;, StandardCharsets.UTF_8);\n        Files.writeString(root.resolve(&quot;b.txt&quot;), &quot;x&quot;);\n\n        System.out.println(Files.readAllLines(f, StandardCharsets.UTF_8));\n        try (Stream&lt;String&gt; lines = Files.lines(f)) { System.out.println(&quot;خطوط بلند: &quot; + lines.filter(s -&gt; s.length() &gt; 4).count()); }\n        try (Stream&lt;Path&gt; w = Files.walk(root)) {\n            System.out.println(w.filter(Files::isRegularFile).map(p -&gt; root.relativize(p).toString()).sorted().collect(Collectors.toList()));\n        }\n        Path tmp = Files.createTempFile(root, &quot;save&quot;, &quot;.tmp&quot;);                // نوشتن اتمی\n        Files.writeString(tmp, &quot;نسخه‌ی جدید&quot;);\n        Files.move(tmp, root.resolve(&quot;b.txt&quot;), StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(&quot;b.txt = &quot; + Files.readString(root.resolve(&quot;b.txt&quot;)));\n\n        Path evil = root.resolve(&quot;../../etc/passwd&quot;).normalize();\n        System.out.println(&quot;traversal امن؟ &quot; + evil.startsWith(root));\n        try { Files.readString(root.resolve(&quot;nope&quot;)); } catch (NoSuchFileException e) { System.out.println(&quot;NoSuchFileException&quot;); }\n        try (Stream&lt;Path&gt; w = Files.walk(root)) { w.sorted(Comparator.reverseOrder()).forEach(p -&gt; p.toFile().delete()); }\n        System.out.println(&quot;پاک شد؟ &quot; + !Files.exists(root));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>[سلام, دنیا, کدستان]\nخطوط بلند: 1\n[b.txt, notes/a.txt]\nb.txt = نسخه‌ی جدید\ntraversal امن؟ false\nNoSuchFileException\nپاک شد؟ true</code></pre></div>",
     "exercise": "همه‌ی فایل‌های .java یک پوشه را با اندازه‌ی کل بشمار."
    },
    {
     "title": "Collectors پیشرفته: groupingBy، partitioningBy و teeing",
     "content": "<p>Collector نتیجه‌ی stream را جمع می‌کند. <code>groupingBy(key, downstream)</code> نگاشت دسته‌بندی می‌سازد و downstream می‌تواند <code>counting</code>, <code>summingInt</code>, <code>averagingDouble</code>, <code>mapping</code>, <code>maxBy</code> یا <code>TreeMap::new</code> باشد. <code>partitioningBy</code> دقیقاً دو گروه true/false می‌دهد (هر دو کلید همیشه هستند). <code>teeing</code> (Java 12) یک stream را همزمان به دو collector می‌دهد و نتیجه را ترکیب می‌کند. <code>toMap</code> روی کلید تکراری استثنا می‌دهد مگر merge function بدهی. <code>Collectors.joining(\", \", \"[\", \"]\")</code> برای رشته.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\nimport java.util.stream.*;\nimport static java.util.stream.Collectors.*;\n\npublic class Main {\n    record Emp(String name, String dept, int salary) {}\n    static void show(Object o) { System.out.println(o); }\n    public static void main(String[] args) {\n        List&lt;Emp&gt; es = List.of(new Emp(&quot;ali&quot;, &quot;dev&quot;, 100), new Emp(&quot;sara&quot;, &quot;dev&quot;, 140),\n            new Emp(&quot;reza&quot;, &quot;ops&quot;, 90), new Emp(&quot;nima&quot;, &quot;ops&quot;, 110), new Emp(&quot;mina&quot;, &quot;hr&quot;, 80));\n        show(es.stream().collect(groupingBy(Emp::dept, TreeMap::new, counting())));\n        show(es.stream().collect(groupingBy(Emp::dept, TreeMap::new, averagingInt(Emp::salary))));\n        show(es.stream().collect(groupingBy(Emp::dept, TreeMap::new, mapping(Emp::name, joining(&quot;/&quot;)))));\n        show(es.stream().collect(partitioningBy(e -&gt; e.salary() &gt;= 100, counting())));\n        var stats = es.stream().collect(teeing(summingInt(Emp::salary), counting(), (sum, n) -&gt; sum + &quot;/&quot; + n + &quot;=&quot; + sum / n));\n        System.out.println(&quot;teeing: &quot; + stats);\n        Map&lt;String, Optional&lt;Emp&gt;&gt; top = es.stream().collect(groupingBy(Emp::dept, TreeMap::new, maxBy(Comparator.comparingInt(Emp::salary))));\n        top.forEach((d, e) -&gt; System.out.println(d + &quot; → &quot; + e.get().name()));\n        try { es.stream().collect(toMap(Emp::dept, Emp::name)); }\n        catch (IllegalStateException e) { System.out.println(&quot;toMap تکراری: &quot; + e.getMessage()); }\n        show(es.stream().collect(toMap(Emp::dept, Emp::salary, Integer::sum, TreeMap::new)));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>{dev=2, hr=1, ops=2}\n{dev=120.0, hr=80.0, ops=100.0}\n{dev=ali/sara, hr=mina, ops=reza/nima}\n{false=2, true=3}\nteeing: 520/5=104\ndev → sara\nhr → mina\nops → nima\ntoMap تکراری: Duplicate key dev (attempted merging values ali and sara)\n{dev=240, hr=80, ops=200}</code></pre></div>",
     "exercise": "نام پردرآمدترین فرد هر بخش را با collectingAndThen بگیر."
    },
    {
     "title": "Comparator: مرتب‌سازی چندکلیده و پایداری",
     "content": "<p><code>Comparator.comparing(keyFn)</code> و زنجیره‌ی <code>thenComparing</code> مرتب‌سازی چندکلیده را خوانا می‌کند؛ <code>reversed()</code> و <code>nullsFirst/nullsLast</code> هم موجودند. برای نوع اولیه از <code>comparingInt</code> استفاده کن (بدون boxing). <b>تله:</b> <code>(a, b) -&gt; a - b</code> برای اعداد بزرگ سرریز می‌کند؛ از <code>Integer.compare</code> بهره بگیر. مرتب‌سازی اشیاء در Java (<code>List.sort</code>, TimSort) <b>پایدار</b> است: عناصر هم‌کلید ترتیب نسبی خود را حفظ می‌کنند. comparator باید با equals سازگار باشد وگرنه در <code>TreeSet</code> عناصر ناپدید می‌شوند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    record P(String name, int age, String city) {}\n    public static void main(String[] args) {\n        List&lt;P&gt; ps = new ArrayList&lt;&gt;(List.of(new P(&quot;sara&quot;, 30, &quot;tehran&quot;), new P(&quot;ali&quot;, 25, &quot;shiraz&quot;),\n            new P(&quot;reza&quot;, 30, &quot;tabriz&quot;), new P(&quot;nima&quot;, 25, &quot;tehran&quot;), new P(&quot;mina&quot;, 30, null)));\n        ps.sort(Comparator.comparingInt(P::age).reversed().thenComparing(P::name));\n        ps.forEach(p -&gt; System.out.print(p.name() + &quot;(&quot; + p.age() + &quot;) &quot;));\n        System.out.println();\n\n        ps.sort(Comparator.comparing(P::city, Comparator.nullsLast(Comparator.naturalOrder())));\n        System.out.println(&quot;پایدار + null آخر: &quot; + ps.stream().map(P::name).toList());\n\n        int a = Integer.MAX_VALUE, b = -1;\n        System.out.println(&quot;a-b سرریز: &quot; + (a - b) + &quot; | Integer.compare: &quot; + Integer.compare(a, b));\n\n        TreeSet&lt;P&gt; byAge = new TreeSet&lt;&gt;(Comparator.comparingInt(P::age));   // فقط سن → هم‌سن‌ها یکی می‌شوند!\n        byAge.addAll(ps);\n        System.out.println(&quot;TreeSet اندازه: &quot; + byAge.size() + &quot; از &quot; + ps.size());\n        String[] words = {&quot;banana&quot;, &quot;Apple&quot;, &quot;cherry&quot;};\n        Arrays.sort(words, String.CASE_INSENSITIVE_ORDER);\n        System.out.println(Arrays.toString(words));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>mina(30) reza(30) sara(30) ali(25) nima(25) \nپایدار + null آخر: [ali, reza, sara, nima, mina]\na-b سرریز: -2147483648 | Integer.compare: 1\nTreeSet اندازه: 2 از 5\n[Apple, banana, cherry]</code></pre></div>",
     "exercise": "مرتب‌سازی را با Collator فارسی/محلی بررسی کن."
    },
    {
     "title": "Iterator و ConcurrentModificationException",
     "content": "<p>حذف/درج در کلکسیون هنگام پیمایش با <code>for-each</code> استثنای <code>ConcurrentModificationException</code> می‌دهد (رفتار fail-fast بر اساس <code>modCount</code>). راه‌های امن: <code>Iterator.remove()</code>، <code>removeIf</code>، ساخت لیست جدید با stream، یا کلکسیون‌های هم‌روند (<code>CopyOnWriteArrayList</code>, <code>ConcurrentHashMap</code>) که چنین استثنایی نمی‌دهند. این استثنا فقط تشخیص <i>best-effort</i> است و ضمانت thread-safety نیست. <code>ListIterator</code> دوطرفه است و <code>set/add</code> دارد. <code>Iterable</code> را پیاده کن تا شیء تو در for-each قابل استفاده شود.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\npublic class Main {\n    static class Countdown implements Iterable&lt;Integer&gt; {\n        final int from; Countdown(int f) { from = f; }\n        public Iterator&lt;Integer&gt; iterator() {\n            return new Iterator&lt;&gt;() {\n                int cur = from;\n                public boolean hasNext() { return cur &gt; 0; }\n                public Integer next() { if (cur &lt;= 0) throw new NoSuchElementException(); return cur--; }\n            };\n        }\n    }\n    public static void main(String[] args) {\n        List&lt;Integer&gt; l = new ArrayList&lt;&gt;(List.of(1, 2, 3, 4, 5, 6));\n        try { for (Integer x : l) if (x % 2 == 0) l.remove(x); }\n        catch (ConcurrentModificationException e) { System.out.println(&quot;CME: حذف حین for-each&quot;); }\n\n        l = new ArrayList&lt;&gt;(List.of(1, 2, 3, 4, 5, 6));\n        for (Iterator&lt;Integer&gt; it = l.iterator(); it.hasNext();) if (it.next() % 2 == 0) it.remove();\n        System.out.println(&quot;Iterator.remove: &quot; + l);\n        l = new ArrayList&lt;&gt;(List.of(1, 2, 3, 4, 5, 6)); l.removeIf(x -&gt; x &gt; 3);\n        System.out.println(&quot;removeIf: &quot; + l);\n\n        List&lt;Integer&gt; cow = new CopyOnWriteArrayList&lt;&gt;(List.of(1, 2, 3));\n        for (Integer x : cow) if (x == 2) cow.add(99);\n        System.out.println(&quot;CopyOnWrite: &quot; + cow);\n\n        ListIterator&lt;Integer&gt; li = new ArrayList&lt;&gt;(List.of(10, 20, 30)).listIterator();\n        while (li.hasNext()) { int v = li.next(); li.set(v + 1); }\n        while (li.hasPrevious()) System.out.print(li.previous() + &quot; &quot;);\n        System.out.println(&quot;← برعکس با ListIterator&quot;);\n        for (int x : new Countdown(3)) System.out.print(x + &quot; &quot;);\n        System.out.println();\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>CME: حذف حین for-each\nIterator.remove: [1, 3, 5]\nremoveIf: [1, 2, 3]\nCopyOnWrite: [1, 2, 3, 99]\n31 21 11 ← برعکس با ListIterator\n3 2 1</code></pre></div>",
     "exercise": "همین حذف را با ConcurrentHashMap.keySet هم امتحان کن."
    },
    {
     "title": "ExecutorService، Future و Callable",
     "content": "<p>ساخت مستقیم <code>Thread</code> مقیاس‌پذیر نیست. <code>ExecutorService</code> (از <code>Executors</code>) استخر thread می‌سازد؛ <code>submit(Callable)</code> یک <code>Future</code> برمی‌گرداند و <code>get()</code> نتیجه یا استثنا (<code>ExecutionException</code>) را می‌دهد. <code>invokeAll</code> همه را اجرا و منتظر می‌ماند؛ <code>invokeAny</code> اولین موفق را می‌گیرد. <b>همیشه</b> <code>shutdown()</code> و <code>awaitTermination</code> بزن وگرنه برنامه خاتمه نمی‌یابد. اندازه‌ی استخر: CPU-bound ≈ تعداد هسته‌ها، I/O-bound بزرگ‌تر (یا thread مجازی در Java 21). Java 19+ اجازه‌ی <code>try (var ex = ...)</code> دارد (ExecutorService اکنون AutoCloseable است).</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\nimport java.util.concurrent.*;\n\npublic class Main {\n    static long fib(int n) { return n &lt; 2 ? n : fib(n - 1) + fib(n - 2); }\n    public static void main(String[] args) throws Exception {\n        try (ExecutorService ex = Executors.newFixedThreadPool(4)) {          // close = shutdown + await\n            List&lt;Callable&lt;String&gt;&gt; jobs = new ArrayList&lt;&gt;();\n            for (int n : new int[]{20, 25, 30})\n                jobs.add(() -&gt; &quot;fib(&quot; + n + &quot;)=&quot; + fib(n));\n            for (Future&lt;String&gt; f : ex.invokeAll(jobs)) System.out.println(f.get());\n\n            Future&lt;Integer&gt; bad = ex.submit(() -&gt; { if (true) throw new IllegalStateException(&quot;boom&quot;); return 1; });\n            try { bad.get(); }\n            catch (ExecutionException e) { System.out.println(&quot;استثنا از thread دیگر: &quot; + e.getCause()); }\n\n            Future&lt;String&gt; slow = ex.submit(() -&gt; { Thread.sleep(5000); return &quot;late&quot;; });\n            try { slow.get(100, TimeUnit.MILLISECONDS); }\n            catch (TimeoutException e) { System.out.println(&quot;timeout؛ لغو: &quot; + slow.cancel(true)); }\n\n            String first = ex.invokeAny(List.of(() -&gt; { Thread.sleep(300); return &quot;کند&quot;; }, () -&gt; &quot;سریع&quot;));\n            System.out.println(&quot;invokeAny: &quot; + first);\n        }\n        System.out.println(&quot;استخر بسته شد&quot;);\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>fib(20)=6765\nfib(25)=75025\nfib(30)=832040\nاستثنا از thread دیگر: java.lang.IllegalStateException: boom\ntimeout؛ لغو: true\ninvokeAny: سریع\nاستخر بسته شد</code></pre></div>",
     "exercise": "۱۰۰ وظیفه را با استخر ۴تایی اجرا و زمان کل را اندازه بگیر."
    },
    {
     "title": "همگام‌سازی: synchronized، ReentrantLock و ConcurrentHashMap",
     "content": "<p><code>count++</code> اتمی نیست (خواندن-افزودن-نوشتن). <code>synchronized</code> یک قفل ضمنی روی شیء می‌گیرد و <b>visibility</b> را هم تضمین می‌کند (happens-before). <code>ReentrantLock</code> قابلیت‌های بیشتر دارد: <code>tryLock</code> با زمان‌سنج، قفل قابل‌وقفه، و <code>Condition</code>؛ باید در <code>finally</code> آزاد شود. <code>ConcurrentHashMap</code> با قفل ریزدانه همزمانی بالا می‌دهد و عملیات اتمی <code>merge</code>, <code>compute</code>, <code>putIfAbsent</code> دارد؛ ترکیب «get سپس put» ناایمن است. ترتیب ثابت گرفتن قفل‌ها از <b>deadlock</b> جلوگیری می‌کند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\nimport java.util.concurrent.*;\nimport java.util.concurrent.locks.ReentrantLock;\n\npublic class Main {\n    static int unsafe = 0, safe = 0;\n    static final Object LOCK = new Object();\n    static final ReentrantLock rl = new ReentrantLock();\n    static int viaLock = 0;\n\n    public static void main(String[] args) throws Exception {\n        int T = 4, N = 50_000;\n        ExecutorService ex = Executors.newFixedThreadPool(T);\n        CountDownLatch done = new CountDownLatch(T);\n        ConcurrentHashMap&lt;String, Integer&gt; words = new ConcurrentHashMap&lt;&gt;();\n        for (int t = 0; t &lt; T; t++) ex.execute(() -&gt; {\n            for (int i = 0; i &lt; N; i++) {\n                unsafe++;                                   // data race\n                synchronized (LOCK) { safe++; }\n                rl.lock(); try { viaLock++; } finally { rl.unlock(); }\n                words.merge(i % 2 == 0 ? &quot;even&quot; : &quot;odd&quot;, 1, Integer::sum);   // اتمی\n            }\n            done.countDown();\n        });\n        done.await(); ex.shutdown();\n        System.out.println(&quot;مورد انتظار: &quot; + T * N);\n        System.out.println(&quot;synchronized: &quot; + safe + &quot; | ReentrantLock: &quot; + viaLock);\n        System.out.println(&quot;بدون قفل کمتر یا مساوی است؟ &quot; + (unsafe &lt;= T * N) + &quot; (معمولاً کمتر)&quot;);\n        System.out.println(&quot;CHM merge: &quot; + new TreeMap&lt;&gt;(words));\n        System.out.println(&quot;tryLock وقتی آزاد است: &quot; + rl.tryLock(10, TimeUnit.MILLISECONDS));\n        rl.unlock();\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>مورد انتظار: 200000\nsynchronized: 200000 | ReentrantLock: 200000\nبدون قفل کمتر یا مساوی است؟ true (معمولاً کمتر)\nCHM merge: {even=100000, odd=100000}\ntryLock وقتی آزاد است: true</code></pre></div>",
     "exercise": "deadlock ساده با دو قفل بساز و با ترتیب ثابت رفعش کن."
    },
    {
     "title": "Atomic، LongAdder و ThreadLocal",
     "content": "<p>کلاس‌های <code>java.util.concurrent.atomic</code> عملیات بدون قفل با CAS می‌دهند: <code>AtomicInteger.incrementAndGet</code>, <code>compareAndSet</code>, <code>updateAndGet</code>. تحت رقابت شدید، <code>LongAdder</code> با پخش شمارنده روی چند سلول سریع‌تر است (برای آمار؛ مجموع با <code>sum()</code> لحظه‌ای تقریبی). <code>ThreadLocal&lt;T&gt;</code> برای هر thread نسخه‌ی مجزا نگه می‌دارد (مثلاً شیء غیر thread-safe مثل SimpleDateFormat)؛ در استخر thread حتماً <code>remove()</code> بزن وگرنه نشت و نشت داده بین درخواست‌ها رخ می‌دهد. <code>volatile</code> فقط visibility می‌دهد نه اتمی‌بودن ترکیب.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.concurrent.*;\nimport java.util.concurrent.atomic.*;\n\npublic class Main {\n    static final ThreadLocal&lt;StringBuilder&gt; BUF = ThreadLocal.withInitial(StringBuilder::new);\n    public static void main(String[] args) throws Exception {\n        AtomicInteger ai = new AtomicInteger();\n        LongAdder adder = new LongAdder();\n        ExecutorService ex = Executors.newFixedThreadPool(4);\n        for (int t = 0; t &lt; 4; t++) ex.execute(() -&gt; { for (int i = 0; i &lt; 100_000; i++) { ai.incrementAndGet(); adder.increment(); } });\n        ex.shutdown(); ex.awaitTermination(10, TimeUnit.SECONDS);\n        System.out.println(&quot;Atomic=&quot; + ai.get() + &quot; LongAdder=&quot; + adder.sum());\n\n        AtomicInteger x = new AtomicInteger(5);\n        System.out.println(&quot;CAS(5→9): &quot; + x.compareAndSet(5, 9) + &quot; | CAS(5→1): &quot; + x.compareAndSet(5, 1) + &quot; | x=&quot; + x);\n        System.out.println(&quot;updateAndGet: &quot; + x.updateAndGet(v -&gt; v * 2));\n\n        Thread a = new Thread(() -&gt; { BUF.get().append(&quot;A&quot;); System.out.println(&quot;thread A: &quot; + BUF.get()); });\n        Thread b = new Thread(() -&gt; { BUF.get().append(&quot;B&quot;); System.out.println(&quot;thread B: &quot; + BUF.get()); });\n        a.start(); a.join(); b.start(); b.join();\n        BUF.get().append(&quot;main&quot;);\n        System.out.println(&quot;main:     &quot; + BUF.get());\n        BUF.remove();                                         // در استخر thread الزامی\n        AtomicReference&lt;String&gt; ref = new AtomicReference&lt;&gt;(&quot;v1&quot;);\n        System.out.println(ref.compareAndSet(&quot;v1&quot;, &quot;v2&quot;) + &quot; &quot; + ref.get());\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>Atomic=400000 LongAdder=400000\nCAS(5→9): true | CAS(5→1): false | x=9\nupdateAndGet: 18\nthread A: A\nthread B: B\nmain:     main\ntrue v2</code></pre></div>",
     "exercise": "شمارنده‌ی rate limiter ساده با AtomicLong بنویس."
    },
    {
     "title": "Reflection و Annotation سفارشی",
     "content": "<p><b>Reflection</b> کلاس‌ها را در زمان اجرا می‌کاود: <code>getDeclaredFields</code>, <code>getMethods</code>, <code>newInstance</code> (از طریق <code>getDeclaredConstructor().newInstance()</code>), <code>invoke</code>. فریم‌ورک‌ها (Spring، Jackson، JUnit) با همین‌ها کار می‌کنند. <b>Annotation</b> فراداده است؛ با <code>@Retention(RUNTIME)</code> در زمان اجرا خوانده می‌شود و <code>@Target</code> محل مجاز را مشخص می‌کند. هزینه‌ها: کندتر، شکستن encapsulation، از دست رفتن بررسی نوع در کامپایل و محدودیت ماژول‌ها (<code>InaccessibleObjectException</code>). ساخت یک validator مینیمال نشان می‌دهد Spring Validation چطور کار می‌کند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.lang.annotation.*;\nimport java.lang.reflect.*;\nimport java.util.*;\n\npublic class Main {\n    @Retention(RetentionPolicy.RUNTIME) @Target(ElementType.FIELD) @interface NotBlank { String message() default &quot;خالی است&quot;; }\n    @Retention(RetentionPolicy.RUNTIME) @Target(ElementType.FIELD) @interface Range { int min(); int max(); }\n\n    static class SignUp {\n        @NotBlank(message = &quot;نام لازم است&quot;) String name;\n        @Range(min = 18, max = 99) int age;\n        SignUp(String n, int a) { name = n; age = a; }\n    }\n    static List&lt;String&gt; validate(Object o) throws IllegalAccessException {\n        List&lt;String&gt; errs = new ArrayList&lt;&gt;();\n        for (Field f : o.getClass().getDeclaredFields()) {\n            f.setAccessible(true);\n            Object v = f.get(o);\n            NotBlank nb = f.getAnnotation(NotBlank.class);\n            if (nb != null &amp;&amp; (v == null || v.toString().isBlank())) errs.add(f.getName() + &quot;: &quot; + nb.message());\n            Range r = f.getAnnotation(Range.class);\n            if (r != null &amp;&amp; ((int) v &lt; r.min() || (int) v &gt; r.max())) errs.add(f.getName() + &quot;: باید بین &quot; + r.min() + &quot; و &quot; + r.max() + &quot; باشد&quot;);\n        }\n        return errs;\n    }\n    public static void main(String[] args) throws Exception {\n        System.out.println(validate(new SignUp(&quot;علی&quot;, 30)));\n        System.out.println(validate(new SignUp(&quot; &quot;, 12)));\n\n        Class&lt;?&gt; c = Class.forName(&quot;java.util.ArrayList&quot;);\n        Object list = c.getDeclaredConstructor().newInstance();\n        Method add = c.getMethod(&quot;add&quot;, Object.class);\n        add.invoke(list, &quot;reflect&quot;); add.invoke(list, &quot;ion&quot;);\n        System.out.println(list + &quot; size=&quot; + c.getMethod(&quot;size&quot;).invoke(list));\n        System.out.println(Modifier.isPublic(c.getModifiers()) + &quot; &quot; + c.getSuperclass().getSimpleName());\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>[]\n[name: نام لازم است, age: باید بین 18 و 99 باشد]\n[reflect, ion] size=2\ntrue AbstractList</code></pre></div>",
     "exercise": "annotation @Column برای نگاشت ساده‌ی کلاس به SQL (CREATE TABLE) بنویس."
    },
    {
     "title": "Sequenced Collections (Java 21) و بهبودهای مجموعه‌ها",
     "content": "<p>Java 21 با اینترفیس‌های <code>SequencedCollection</code>, <code>SequencedSet</code>, <code>SequencedMap</code> ترتیب برخورد را یکدست کرد: <code>getFirst()</code>, <code>getLast()</code>, <code>addFirst/addLast</code>, <code>removeFirst/Last</code> و <code>reversed()</code> (نمای معکوس، نه کپی) روی <code>List</code>, <code>Deque</code>, <code>LinkedHashSet</code>, <code>LinkedHashMap</code> و <code>TreeSet/Map</code> کار می‌کند. قبلاً گرفتن آخرین عنصر List با <code>get(size()-1)</code> و برای LinkedHashSet تقریباً ناممکن بود. نمای <code>reversed()</code> به مجموعه‌ی اصلی وصل است. مجموعه‌ی بدون ترتیب (<code>HashSet</code>) این ویژگی را ندارد.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List&lt;String&gt; l = new ArrayList&lt;&gt;(List.of(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;));\n        System.out.println(l.getFirst() + &quot; &quot; + l.getLast());\n        l.addFirst(&quot;z&quot;); l.addLast(&quot;end&quot;);\n        System.out.println(l + &quot; | reversed: &quot; + l.reversed());\n        List&lt;String&gt; rev = l.reversed();\n        rev.add(&quot;X&quot;);                                           // نما است → به l هم اضافه می‌شود (در ابتدا)\n        System.out.println(&quot;بعد از add روی نما: &quot; + l);\n\n        LinkedHashSet&lt;Integer&gt; s = new LinkedHashSet&lt;&gt;(List.of(3, 1, 2));\n        System.out.println(&quot;first=&quot; + s.getFirst() + &quot; last=&quot; + s.getLast());\n        s.addFirst(2);                                          // جابه‌جا به ابتدا\n        System.out.println(s);\n\n        LinkedHashMap&lt;String, Integer&gt; m = new LinkedHashMap&lt;&gt;();\n        m.put(&quot;one&quot;, 1); m.put(&quot;two&quot;, 2); m.putFirst(&quot;zero&quot;, 0);\n        System.out.println(m + &quot; | آخرین: &quot; + m.lastEntry() + &quot; | معکوس: &quot; + m.reversed());\n        TreeSet&lt;Integer&gt; t = new TreeSet&lt;&gt;(List.of(5, 1, 9));\n        System.out.println(t.getFirst() + &quot;..&quot; + t.getLast() + &quot; &quot; + t.reversed());\n        try { List.of(1, 2).addFirst(0); } catch (UnsupportedOperationException e) { System.out.println(&quot;immutable: UnsupportedOperationException&quot;); }\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>a c\n[z, a, b, c, end] | reversed: [end, c, b, a, z]\nبعد از add روی نما: [X, z, a, b, c, end]\nfirst=3 last=2\n[2, 3, 1]\n{zero=0, one=1, two=2} | آخرین: two=2 | معکوس: {two=2, one=1, zero=0}\n1..9 [9, 5, 1]\nimmutable: UnsupportedOperationException</code></pre></div>",
     "exercise": "یک LRU cache با LinkedHashMap و removeEldestEntry بساز."
    },
    {
     "title": "Dynamic Proxy: AOP دست‌ساز",
     "content": "<p><code>java.lang.reflect.Proxy</code> در زمان اجرا شیئی می‌سازد که یک یا چند <b>اینترفیس</b> را پیاده می‌کند و همه‌ی فراخوانی‌ها را به یک <code>InvocationHandler</code> می‌فرستد. این پایه‌ی AOP در Spring است: لاگ، تراکنش (<code>@Transactional</code>)، کش، احراز دسترسی و اندازه‌گیری زمان بدون تغییر کلاس اصلی. محدودیت: فقط اینترفیس (برای کلاس از CGLIB/ByteBuddy استفاده می‌شود). مراقب باش استثنای هدف داخل <code>InvocationTargetException</code> پیچیده می‌شود و باید <code>getCause()</code> را پرتاب کنی. متدهای <code>toString/hashCode/equals</code> هم از handler می‌گذرند.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import java.lang.reflect.*;\nimport java.util.*;\n\npublic class Main {\n    interface Account { int balance(); void withdraw(int n); }\n    static class RealAccount implements Account {\n        int b = 100;\n        public int balance() { return b; }\n        public void withdraw(int n) { if (n &gt; b) throw new IllegalStateException(&quot;موجودی کافی نیست&quot;); b -= n; }\n    }\n    @SuppressWarnings(&quot;unchecked&quot;)\n    static &lt;T&gt; T logging(T target, Class&lt;T&gt; iface, List&lt;String&gt; log) {\n        return (T) Proxy.newProxyInstance(iface.getClassLoader(), new Class&lt;?&gt;[]{iface}, (proxy, m, args) -&gt; {\n            long t0 = System.nanoTime();\n            log.add(&quot;→ &quot; + m.getName() + (args == null ? &quot;()&quot; : Arrays.toString(args)));\n            try {\n                Object r = m.invoke(target, args);\n                log.add(&quot;← &quot; + m.getName() + &quot; = &quot; + r);\n                return r;\n            } catch (InvocationTargetException e) {\n                log.add(&quot;✗ &quot; + m.getName() + &quot; : &quot; + e.getCause().getMessage());\n                throw e.getCause();                              // استثنای واقعی را بیرون بده\n            } finally { log.add(&quot;   زمان مثبت: &quot; + (System.nanoTime() - t0 &gt;= 0)); }\n        });\n    }\n    public static void main(String[] args) {\n        List&lt;String&gt; log = new ArrayList&lt;&gt;();\n        Account acc = logging(new RealAccount(), Account.class, log);\n        acc.withdraw(30);\n        System.out.println(&quot;balance: &quot; + acc.balance());\n        try { acc.withdraw(500); } catch (IllegalStateException e) { System.out.println(&quot;گرفته شد: &quot; + e.getMessage()); }\n        log.forEach(System.out::println);\n        System.out.println(&quot;پروکسی؟ &quot; + Proxy.isProxyClass(acc.getClass()));\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>balance: 70\nگرفته شد: موجودی کافی نیست\n→ withdraw[30]\n← withdraw = null\n   زمان مثبت: true\n→ balance()\n← balance = 70\n   زمان مثبت: true\n→ withdraw[500]\n✗ withdraw : موجودی کافی نیست\n   زمان مثبت: true\nپروکسی؟ true</code></pre></div>",
     "exercise": "یک پروکسی کش بنویس که نتیجه‌ی متدهای بدون آرگومان را نگه دارد."
    },
    {
     "title": "HTTP: سرور داخلی و HttpClient (Java 11+)",
     "content": "<p>JDK خودش کلاینت HTTP مدرن دارد: <code>HttpClient</code> (<code>java.net.http</code>) با HTTP/2، <code>send</code> همگام و <code>sendAsync</code> (CompletableFuture). درخواست با <code>HttpRequest.newBuilder(uri).header(...).POST(BodyPublishers.ofString(..))</code>؛ پاسخ با <code>BodyHandlers.ofString()</code>. برای آزمایش بدون اینترنت، <code>com.sun.net.httpserver.HttpServer</code> یک سرور سبک داخل JDK است. همیشه <b>timeout</b> بگذار (<code>connectTimeout</code> و <code>request.timeout</code>)، کد وضعیت را بررسی کن (4xx/5xx استثنا نمی‌دهد) و در برنامه‌ی واقعی یک نمونه‌ی <code>HttpClient</code> را مشترک نگه دار.</p><div class='code-block'><div class='cb-head'>Main.java — javac/java 21</div><pre><code>import com.sun.net.httpserver.HttpServer;\nimport java.net.InetSocketAddress;\nimport java.net.URI;\nimport java.net.http.*;\nimport java.nio.charset.StandardCharsets;\nimport java.time.Duration;\nimport java.util.concurrent.CompletableFuture;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        HttpServer server = HttpServer.create(new InetSocketAddress(&quot;127.0.0.1&quot;, 0), 0);\n        server.createContext(&quot;/hello&quot;, ex -&gt; {\n            byte[] body = (&quot;سلام &quot; + ex.getRequestMethod()).getBytes(StandardCharsets.UTF_8);\n            ex.getResponseHeaders().add(&quot;Content-Type&quot;, &quot;text/plain; charset=utf-8&quot;);\n            ex.sendResponseHeaders(200, body.length);\n            try (var os = ex.getResponseBody()) { os.write(body); }\n        });\n        server.createContext(&quot;/echo&quot;, ex -&gt; {\n            byte[] in = ex.getRequestBody().readAllBytes();\n            ex.sendResponseHeaders(201, in.length);\n            try (var os = ex.getResponseBody()) { os.write(in); }\n        });\n        server.start();\n        int port = server.getAddress().getPort();\n        String base = &quot;http://127.0.0.1:&quot; + port;\n\n        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(2)).build();\n        HttpResponse&lt;String&gt; r1 = client.send(HttpRequest.newBuilder(URI.create(base + &quot;/hello&quot;)).timeout(Duration.ofSeconds(2)).build(),\n            HttpResponse.BodyHandlers.ofString());\n        System.out.println(r1.statusCode() + &quot; &quot; + r1.body() + &quot; | CT=&quot; + r1.headers().firstValue(&quot;content-type&quot;).orElse(&quot;?&quot;));\n\n        HttpResponse&lt;String&gt; r2 = client.send(HttpRequest.newBuilder(URI.create(base + &quot;/echo&quot;))\n            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\\&quot;a\\&quot;:1}&quot;)).build(), HttpResponse.BodyHandlers.ofString());\n        System.out.println(r2.statusCode() + &quot; &quot; + r2.body());\n\n        CompletableFuture&lt;Integer&gt; async = client.sendAsync(HttpRequest.newBuilder(URI.create(base + &quot;/missing&quot;)).build(),\n            HttpResponse.BodyHandlers.ofString()).thenApply(HttpResponse::statusCode);\n        System.out.println(&quot;ناموجود → &quot; + async.get() + &quot; (بدون استثنا؛ باید کد را چک کرد)&quot;);\n        server.stop(0);\n    }\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>200 سلام GET | CT=text/plain; charset=utf-8\n201 {&quot;a&quot;:1}\nناموجود → 404 (بدون استثنا؛ باید کد را چک کرد)</code></pre></div>",
     "exercise": "endpoint JSON بساز و با sendAsync سه درخواست موازی بفرست."
    }
   ],
   "quiz": [
    {
     "q": "Maven/Gradle در جاوا چه نقشی دارند؟",
     "options": [
      "اجرای تست",
      "مدیریت پروژه و وابستگی‌ها (معادل npm در Node)",
      "کامپایل به Bytecode",
      "موتور گرافیکی"
     ],
     "answer": 1,
     "explain": "این ابزارها کتابخانه‌های لازم را خودکار دانلود و مدیریت می‌کنند."
    },
    {
     "q": "@Autowired در Spring چه کاری انجام می‌دهد؟",
     "options": [
      "حذف یک کلاس",
      "تزریق خودکار وابستگی (Dependency Injection)",
      "تعریف route",
      "اتصال به فایل"
     ],
     "answer": 1,
     "explain": "Spring خودش نمونهٔ مناسب را می‌سازد و به فیلد/constructor تزریق می‌کند."
    },
    {
     "q": "Hibernate/JPA چه نقشی دارد؟",
     "options": [
      "فریم‌ورک وب است",
      "ORM ای که کلاس‌های جاوا را به جدول‌های دیتابیس متصل می‌کند",
      "کتابخانهٔ تست است",
      "ابزار مدیریت وابستگی است"
     ],
     "answer": 1,
     "explain": "معادل Entity Framework در C# یا SQLAlchemy در پایتون."
    },
    {
     "q": "هدف اصلی معماری Microservices چیست؟",
     "options": [
      "ساده‌ترکردن کد",
      "تقسیم سیستم به سرویس‌های کوچک و مستقل که جدا Deploy/Scale می‌شوند",
      "حذف نیاز به دیتابیس",
      "کندترکردن توسعه"
     ],
     "answer": 1,
     "explain": "این معماری امکان مقیاس‌پذیری و توسعهٔ مستقل هر بخش را می‌دهد."
    },
    {
     "q": "Mockito برای چیست؟",
     "options": [
      "شبیه‌سازی وابستگی‌ها در تست",
      "ساخت UI",
      "اتصال به دیتابیس",
      "کامپایل"
     ],
     "answer": 0,
     "explain": "Mockها جایگزین Repository واقعی می‌شوند."
    },
    {
     "q": "قاعده‌ی PECS یعنی چه؟",
     "options": [
      "Producer extends، Consumer super",
      "فقط extends",
      "فقط super",
      "هیچ"
     ],
     "answer": 0,
     "explain": "برای wildcard در generics."
    },
    {
     "q": "Virtual Thread برای چه مناسب است؟",
     "options": [
      "کار I/O سنگین با همزمانی زیاد",
      "CPU سنگین",
      "رسم گرافیک",
      "کامپایل"
     ],
     "answer": 0,
     "explain": "هنگام انتظار I/O رشته‌ی سیستم را آزاد می‌کند."
    },
    {
     "q": "volatile چه چیزی را تضمین نمی‌کند؟",
     "options": [
      "اتمی‌بودن count++",
      "دیده‌شدن تغییر",
      "ترتیب نسبی",
      "هیچ"
     ],
     "answer": 0,
     "explain": "برای شمارنده Atomic بهتر است."
    },
    {
     "q": "N+1 را چطور حل می‌کنیم؟",
     "options": [
      "JOIN FETCH یا EntityGraph",
      "افزایش RAM",
      "حذف رابطه",
      "sleep"
     ],
     "answer": 0,
     "explain": "رابطه‌ها را یک‌جا می‌خواند."
    },
    {
     "q": "در Java اگر equals را override کنیم ولی hashCode را نه، چه می‌شود؟",
     "options": [
      "شیء در HashSet/HashMap با کلید برابر پیدا نمی‌شود",
      "برنامه کامپایل نمی‌شود",
      "equals کار نمی‌کند",
      "هیچ مشکلی ندارد"
     ],
     "answer": 0,
     "explain": "اشیاء برابر باید hashCode برابر داشته باشند وگرنه در سطل اشتباه جست‌وجو می‌شوند."
    },
    {
     "q": "تفاوت orElse و orElseGet در Optional چیست؟",
     "options": [
      "orElse آرگومان را همیشه ارزیابی می‌کند، orElseGet فقط در صورت خالی بودن",
      "هیچ تفاوتی ندارند",
      "orElseGet استثنا می‌دهد",
      "orElse فقط برای عدد است"
     ],
     "answer": 0,
     "explain": "برای محاسبه‌ی گران از orElseGet با Supplier استفاده کن."
    },
    {
     "q": "چرا حذف عنصر در for-each روی ArrayList ConcurrentModificationException می‌دهد؟",
     "options": [
      "modCount تغییر کرده و iterator fail-fast است",
      "به‌خاطر thread دیگر",
      "چون لیست immutable است",
      "چون remove ممنوع است"
     ],
     "answer": 0,
     "explain": "از Iterator.remove یا removeIf استفاده کن."
    },
    {
     "q": "Collections.unmodifiableList با List.copyOf چه فرقی دارد؟",
     "options": [
      "unmodifiableList فقط نمای لیست اصلی است و با تغییر آن عوض می‌شود",
      "هیچ فرقی ندارند",
      "copyOf تغییرپذیر است",
      "unmodifiableList کپی می‌گیرد"
     ],
     "answer": 0,
     "explain": "copyOf یک کپی immutable مستقل می‌سازد."
    }
   ],
   "challenge": {
    "task": "یک @Entity به اسم Order با فیلدهای id، customerName و totalPrice بساز (روی کاغذ/متن). یک Repository Interface (که JpaRepository رو extends می‌کنه) با یک متد سفارشی findByCustomerName بساز. یک Controller با یک GET endpoint که سفارش‌های یک مشتری خاص رو برگردونه.",
    "hint1": "در Spring Data JPA، فقط با نوشتن امضای متد (مثل findByCustomerName) توی Repository Interface، خودِ Spring پیاده‌سازیش رو خودکار می‌سازه — نیازی به نوشتن کد SQL یا حتی بدنهٔ متد نیست!",
    "hint2": "Controller باید customerName رو از URL (با @PathVariable یا @RequestParam) بگیره و به Repository پاس بده.",
    "solution": "@Entity\npublic class Order {\n    @Id @GeneratedValue\n    private Long id;\n    private String customerName;\n    private double totalPrice;\n}\n\npublic interface OrderRepository extends JpaRepository<Order, Long> {\n    List<Order> findByCustomerName(String customerName);\n}\n\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @GetMapping(\"/customer/{name}\")\n    public List<Order> getByCustomer(@PathVariable String name) {\n        return orderRepository.findByCustomerName(name);\n    }\n}"
   }
  }
 ],
 "project": {
  "title": "API مدیریت کارمندان با Spring Boot و JPA",
  "brief": "یک REST API کامل برای مدیریت کارمندان بساز: Entity Employee (name, position, salary)، Repository با JPA، Controller با عملیات CRUD کامل، و حداقل ۲ تست JUnit برای Service Layer.",
  "requirements": [
   "استفاده از @Entity برای مدل و JpaRepository برای دسترسی به داده",
   "Controller با @RestController و Annotation های مسیر مناسب (@GetMapping و...)",
   "یک Service Layer جدا (بین Controller و Repository) برای منطق کسب‌وکار",
   "حداقل ۲ تست JUnit",
   "استفاده از Stream API حداقل در یک عملیات (مثلاً فیلتر کارمندان بر اساس حقوق)"
  ],
  "hints": [
   "ساختار استاندارد Spring Boot سه لایه داره: Controller (دریافت درخواست) → Service (منطق) → Repository (دیتابیس) — این جدا‌سازی رو حتی توی یه پروژهٔ کوچیک هم رعایت کن."
  ]
 }
});
