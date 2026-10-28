(window.COURSES=window.COURSES||[]).push({
 "id": "typescript",
 "name": "TypeScript",
 "icon": "🔷",
 "kind": "theory",
 "desc": "همون جاوااسکریپت، ولی با یک لایهٔ ایمنی که جلوی خیلی از باگ‌ها رو قبل از اجرا می‌گیره",
 "covers": [
  "چرا TypeScript، Type Annotation پایه",
  "Interface و Type Alias",
  "Union Types، Optional Properties",
  "Generics",
  "Type با توابع و آرایه‌ها",
  "tsconfig و کامپایل به JS"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "چرا TypeScript؟ مشکلی که حل می‌کند",
     "content": "<p>در جاوااسکریپت خالص، این کد کاملاً «قانونی» است ولی در زمان اجرا کرش می‌کند: <code class='inline'>function add(a, b) { return a + b; } add(\"5\", 10)</code> — نتیجه <code class='inline'>\"510\"</code> می‌شود (رشته)، نه ۱۵! جاوااسکریپت تا لحظهٔ اجرا متوجه این اشتباه نمی‌شود.</p><p><b>TypeScript</b> یک لایهٔ روی جاوااسکریپت است که <b>Type (نوع)</b> متغیرها را از قبل مشخص می‌کند؛ اگر جایی نوع اشتباه پاس بدهید، همان لحظهٔ نوشتن کد (نه هنگام اجرا روی کاربر واقعی!) خطا می‌گیرید. مرورگرها TypeScript را مستقیم اجرا نمی‌کنند — باید به جاوااسکریپت <b>کامپایل (Transpile)</b> شود.</p>",
     "exercise": "مثال add(\"5\", 10) رو در نظر بگیر. توضیح بده اگه این باگ توی یه فرم پرداخت واقعی اتفاق بیفته (جمع‌زدن قیمت‌ها)، چه ضرری می‌تونه بزنه."
    },
    {
     "title": "Type Annotation پایه",
     "content": "<p>با <code class='inline'>: نوع</code> بعد از اسم متغیر یا پارامتر، نوع آن را مشخص می‌کنید. انواع پایه: <code class='inline'>string</code>، <code class='inline'>number</code>، <code class='inline'>boolean</code>، <code class='inline'>any</code> (غیرفعال‌کردن چک نوع — تا حد ممکن ازش دوری کنید!) و <code class='inline'>void</code> (برای توابعی که چیزی برنمی‌گردانند).</p><div class='code-block'><div class='cb-head'>example.ts</div><pre><code>let username: string = \"سارا\";\nlet age: number = 25;\nlet isActive: boolean = true;\n\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\nadd(\"5\", 10); // خطای کامپایل: Argument of type 'string' is not assignable to parameter of type 'number'</code></pre></div>",
     "exercise": "یک تابع calculateDiscount بنویس که price (number) و percent (number) بگیره و مبلغ نهایی رو با نوع مشخص برگردونه."
    },
    {
     "title": "Interface: تعریف شکل یک آبجکت",
     "content": "<p><code class='inline'>interface</code> شکل (ساختار) یک آبجکت را تعریف می‌کند — چه فیلدهایی، با چه نوعی، اجباری هستند. این باعث می‌شود اگر جایی یک فیلد را فراموش کنید یا نوع اشتباه بدهید، بلافاصله متوجه شوید.</p><div class='code-block'><div class='cb-head'>types.ts</div><pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction greetUser(user: User): string {\n  return `سلام ${user.name}!`;\n}\n\ngreetUser({ id: 1, name: \"علی\", email: \"ali@test.com\" }); // درست\ngreetUser({ id: 1, name: \"علی\" }); // خطا: email گم شده</code></pre></div>",
     "exercise": "یک interface به اسم Product با فیلدهای name (string)، price (number) و inStock (boolean) بساز، و یک تابع که یک Product بگیره و توضیحش رو چاپ کنه."
    }
   ],
   "quiz": [
    {
     "q": "مشکل اصلی‌ای که TypeScript حل می‌کند چیست؟",
     "options": [
      "کندبودن جاوااسکریپت",
      "خطاهای مربوط به نوع داده که در جاوااسکریپت فقط هنگام اجرا کشف می‌شوند",
      "نبود CSS",
      "عدم پشتیبانی از موبایل"
     ],
     "answer": 1,
     "explain": "TypeScript این خطاها را در زمان نوشتن کد (قبل از رسیدن به کاربر) نشان می‌دهد."
    },
    {
     "q": "چرا استفادهٔ زیاد از نوع any در TypeScript توصیه نمی‌شود؟",
     "options": [
      "کند است",
      "چک نوع را برای آن متغیر کاملاً غیرفعال می‌کند و مزیت اصلی TypeScript را از بین می‌برد",
      "خطا می‌دهد",
      "فقط برای رشته است"
     ],
     "answer": 1,
     "explain": "any یعنی 'هر نوعی مجاز است' — دقیقاً همان مشکلی که TypeScript قرار است حل کند."
    },
    {
     "q": "interface در TypeScript چه کاری انجام می‌دهد؟",
     "options": [
      "یک تابع اجرا می‌کند",
      "شکل و ساختار مورد انتظار یک آبجکت را تعریف می‌کند",
      "یک فایل CSS می‌سازد",
      "کد را کامپایل می‌کند"
     ],
     "answer": 1,
     "explain": "interface قراردادی است که مشخص می‌کند یک آبجکت باید چه فیلدهایی با چه نوعی داشته باشد."
    }
   ],
   "challenge": {
    "task": "یک interface به اسم Order بساز با فیلدهای id (number)، items (آرایه‌ای از string)، totalPrice (number) و isPaid (boolean). بعد یک تابع printOrderSummary بنویس که یک Order بگیره و یک خلاصهٔ متنی از سفارش برگردونه.",
    "hint1": "برای آرایه از string در TypeScript، نوعش رو string[] بنویس.",
    "hint2": "تابع باید پارامترش رو با : Order تایپ کنه، و خروجی هم با : string مشخص بشه.",
    "solution": "interface Order {\n  id: number;\n  items: string[];\n  totalPrice: number;\n  isPaid: boolean;\n}\n\nfunction printOrderSummary(order: Order): string {\n  const status = order.isPaid ? \"پرداخت‌شده\" : \"در انتظار پرداخت\";\n  return `سفارش #${order.id}: ${order.items.length} کالا، مبلغ ${order.totalPrice}, وضعیت: ${status}`;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Union Types و Optional Properties",
     "content": "<p><b>Union Type</b> (با <code class='inline'>|</code>) اجازه می‌دهد یک متغیر یکی از چند نوع مشخص باشد — مثلاً یک وضعیت سفارش که فقط می‌تواند یکی از چند مقدار مشخص باشد (نه هر رشتهٔ دلخواه). با <code class='inline'>?</code> بعد از اسم فیلد در interface، آن فیلد <b>اختیاری (Optional)</b> می‌شود.</p><div class='code-block'><div class='cb-head'>types.ts</div><pre><code>type OrderStatus = \"pending\" | \"shipped\" | \"delivered\";\n\ninterface Order {\n  id: number;\n  status: OrderStatus;\n  trackingCode?: string; // اختیاریه، ممکنه هنوز صادر نشده باشه\n}\n\nconst order: Order = { id: 1, status: \"pending\" }; // درست، بدون trackingCode\nconst order2: Order = { id: 2, status: \"canceled\" }; // خطا: 'canceled' جزو OrderStatus نیست</code></pre></div>",
     "exercise": "یک Union Type به اسم PaymentMethod بساز که فقط \"card\"، \"cash\" یا \"crypto\" باشه، و یک interface Payment که ازش استفاده کنه."
    },
    {
     "title": "Generics: نوشتن کد قابل استفاده مجدد با هر نوع",
     "content": "<p><b>Generics</b> اجازه می‌دهند یک تابع یا کلاس بدون از دست‌دادن ایمنی نوع، با انواع مختلف کار کند. به‌جای نوشتن یک تابع جدا برای هر نوع (getFirstString, getFirstNumber)، یک تابع Generic با <code class='inline'>&lt;T&gt;</code> می‌نویسید که با هر نوعی کار می‌کند.</p><div class='code-block'><div class='cb-head'>generics.ts</div><pre><code>function getFirstItem<T>(items: T[]): T {\n  return items[0];\n}\n\nconst firstNum = getFirstItem<number>([1, 2, 3]); // نوع: number\nconst firstStr = getFirstItem<string>([\"a\", \"b\"]); // نوع: string\n// TypeScript خودش هم می‌تونه T رو حدس بزنه، بدون این‌که صریح بنویسیدش:\nconst firstBool = getFirstItem([true, false]); // نوع: boolean</code></pre></div>",
     "exercise": "یک تابع Generic به اسم wrapInArray بنویس که هر نوع مقداری بگیره و یک آرایهٔ تک‌عضوی از همون نوع برگردونه."
    },
    {
     "title": "استفاده از تایپ در آرایه، تابع و tsconfig",
     "content": "<p>آرایه‌ها با <code class='inline'>نوع[]</code> یا <code class='inline'>Array&lt;نوع&gt;</code> تایپ می‌شوند. برای تنظیم قوانین کامپایل (کدام نسخهٔ JS خروجی بگیرد، سخت‌گیری چقدر باشد)، فایل <code class='inline'>tsconfig.json</code> استفاده می‌شود. دستور <code class='inline'>tsc</code> فایل‌های .ts را به .js کامپایل می‌کند.</p><div class='code-block'><div class='cb-head'>tsconfig.json</div><pre><code>{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"strict\": true,\n    \"outDir\": \"./dist\"\n  }\n}</code></pre></div><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>npx tsc\n# همهٔ فایل‌های .ts رو بر اساس tsconfig.json به .js تبدیل می‌کنه</code></pre></div>",
     "exercise": "توضیح بده گزینهٔ strict: true در tsconfig.json چه فایده‌ای داره و چرا برای پروژه‌های جدی معمولاً روشن نگهش می‌دارن."
    }
   ],
   "quiz": [
    {
     "q": "Union Type (با |) در TypeScript چه کاربردی دارد؟",
     "options": [
      "ترکیب دو فایل",
      "محدودکردن یک متغیر به چند نوع/مقدار مشخص",
      "حذف نوع",
      "تعریف کلاس"
     ],
     "answer": 1,
     "explain": "مثلاً یک وضعیت که فقط می‌تواند یکی از چند مقدار مشخص باشد، نه هر رشتهٔ دلخواه."
    },
    {
     "q": "علامت ? بعد از اسم یک فیلد در interface به چه معناست؟",
     "options": [
      "فیلد اجباری است",
      "فیلد اختیاری است",
      "فیلد را حذف می‌کند",
      "نوع رشته است"
     ],
     "answer": 1,
     "explain": "با ? مشخص می‌کنید آن فیلد ممکن است وجود نداشته باشد."
    },
    {
     "q": "Generics (مثل <T>) در TypeScript چه مشکلی را حل می‌کنند؟",
     "options": [
      "کندی کد",
      "نیاز به نوشتن نسخهٔ جدا از یک تابع برای هر نوع داده",
      "نبود CSS",
      "خطای شبکه"
     ],
     "answer": 1,
     "explain": "Generics اجازه می‌دهند یک تابع با حفظ ایمنی نوع، با انواع مختلف کار کند."
    },
    {
     "q": "دستور tsc چه کاری انجام می‌دهد؟",
     "options": [
      "اجرای مستقیم فایل TypeScript در مرورگر",
      "کامپایل (تبدیل) فایل‌های .ts به .js",
      "نصب پکیج جدید",
      "ساخت دیتابیس"
     ],
     "answer": 1,
     "explain": "مرورگرها TypeScript را مستقیم نمی‌فهمند؛ tsc آن را به جاوااسکریپت معمولی تبدیل می‌کند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "Class در TypeScript: Access Modifiers",
     "content": "<p>کلاس‌های TypeScript دقیقاً مثل جاوااسکریپت هستند، به‌علاوهٔ <b>Access Modifiers</b>: <code class='inline'>public</code> (پیش‌فرض، همه‌جا در دسترس)، <code class='inline'>private</code> (فقط داخل خودِ کلاس)، <code class='inline'>protected</code> (کلاس و فرزندانش). این دقیقاً همان مفهومی است که در Java/C#/C++ دیدید.</p><div class='code-block'><div class='cb-head'>class.ts</div><pre><code>class BankAccount {\n  private balance: number;\n\n  constructor(initialBalance: number) {\n    this.balance = initialBalance;\n  }\n\n  deposit(amount: number): void {\n    this.balance += amount;\n  }\n\n  getBalance(): number {\n    return this.balance;\n  }\n}\n\nconst acc = new BankAccount(1000);\nacc.deposit(500);\nconsole.log(acc.getBalance()); // 1500\n// acc.balance; // خطای کامپایل: balance خصوصی است</code></pre></div>",
     "exercise": "یک کلاس Employee بساز با یک فیلد private salary و یک متد public getSalaryWithBonus(bonus: number): number."
    },
    {
     "title": "Type Narrowing و Type Guards",
     "content": "<p>وقتی یک متغیر Union Type دارد (مثل <code class='inline'>string | number</code>)، TypeScript باید بداند در هر لحظه دقیقاً کدام نوع است تا اجازهٔ عملیات مخصوص آن نوع را بدهد — این <b>Type Narrowing</b> است، معمولاً با <code class='inline'>typeof</code> یا <code class='inline'>instanceof</code> انجام می‌شود.</p><div class='code-block'><div class='cb-head'>narrowing.ts</div><pre><code>function printLength(value: string | number) {\n  if (typeof value === \"string\") {\n    console.log(value.length); // اینجا TypeScript می‌دونه value حتماً string ه\n  } else {\n    console.log(value.toFixed(2)); // اینجا می‌دونه number ه\n  }\n}</code></pre></div>",
     "exercise": "یک تابع describe(value: string | boolean) بنویس که با typeof چک کنه و برای string طولش رو، برای boolean خودش رو چاپ کنه."
    },
    {
     "title": "Intersection Types و Utility Types",
     "content": "<p><b>Intersection Type</b> (با <code class='inline'>&amp;</code>) دو نوع را «ترکیب» می‌کند — نتیجه باید همهٔ فیلدهای هر دو را داشته باشد. TypeScript چند <b>Utility Type</b> آماده هم دارد: <code class='inline'>Partial&lt;T&gt;</code> همهٔ فیلدهای T را اختیاری می‌کند، <code class='inline'>Pick&lt;T, K&gt;</code> فقط چند فیلد مشخص را انتخاب می‌کند، <code class='inline'>Omit&lt;T, K&gt;</code> برعکسش.</p><div class='code-block'><div class='cb-head'>utility.ts</div><pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype UserPreview = Pick<User, \"id\" | \"name\">; // فقط id و name\ntype UserUpdate = Partial<User>; // همه اختیاری، برای فرم ویرایش\n\nfunction updateUser(id: number, changes: UserUpdate) {\n  // changes می‌تونه فقط شامل یکی از فیلدها باشه\n}\nupdateUser(1, { name: \"نام جدید\" }); // درسته، بقیه اختیاریه</code></pre></div>",
     "exercise": "با Omit، یک نوع CreateUserInput بساز که همون User باشه ولی بدون فیلد id (چون id رو دیتابیس خودش می‌سازه)."
    }
   ],
   "quiz": [
    {
     "q": "Access Modifier کدام است که فقط داخل خودِ کلاس در دسترس است؟",
     "options": [
      "public",
      "private",
      "static",
      "readonly"
     ],
     "answer": 1,
     "explain": "private کاملاً محدود به همان کلاس است، حتی فرزندان هم دسترسی ندارند."
    },
    {
     "q": "Type Narrowing به چه معناست؟",
     "options": [
      "حذف یک نوع",
      "محدودکردن نوع یک متغیر Union به یک نوع مشخص در یک بخش از کد (مثلاً با typeof)",
      "تعریف کلاس جدید",
      "کامپایل کد"
     ],
     "answer": 1,
     "explain": "این تکنیک به TypeScript کمک می‌کند بداند در هر شاخه از کد، متغیر دقیقاً چه نوعی دارد."
    },
    {
     "q": "Partial<T> چه کاری انجام می‌دهد؟",
     "options": [
      "همهٔ فیلدهای T را حذف می‌کند",
      "همهٔ فیلدهای T را اختیاری می‌کند",
      "یک کلاس جدید می‌سازد",
      "نوع T را دو برابر می‌کند"
     ],
     "answer": 1,
     "explain": "مفید برای مواردی مثل فرم ویرایش که کاربر فقط بعضی فیلدها را تغییر می‌دهد."
    }
   ],
   "challenge": {
    "task": "یک کلاس Product بساز با فیلدهای private name و price، و متد public applyDiscount(percent: number): void که price رو کم کنه. یک Type Guard بنویس که چک کنه یک ورودی از نوع Product هست یا نه (با بررسی وجود فیلد price با in). با Pick، یک نوع ProductSummary فقط با name بساز.",
    "hint1": "برای Type Guard با in: function isProduct(obj: any): obj is Product { return 'price' in obj; }",
    "hint2": "ProductSummary باید این‌طوری تعریف بشه: type ProductSummary = Pick<Product, 'name'>; ولی چون name توی Product private هست، شاید لازم باشه یه interface جدا برای شکل عمومی Product تعریف کنی.",
    "solution": "class Product {\n  private name: string;\n  private price: number;\n  constructor(name: string, price: number) {\n    this.name = name;\n    this.price = price;\n  }\n  applyDiscount(percent: number): void {\n    this.price = this.price * (1 - percent / 100);\n  }\n  getPrice(): number { return this.price; }\n}\n\ninterface ProductShape { name: string; price: number; }\ntype ProductSummary = Pick<ProductShape, \"name\">;"
   }
  },
  {
   "lessons": [
    {
     "title": "Generic Constraints: محدودکردن Generics",
     "content": "<p>گاهی می‌خواهید یک Generic فقط انواعی را قبول کند که یک ویژگی خاص دارند — با <code class='inline'>extends</code> این محدودیت را اعمال می‌کنید.</p><div class='code-block'><div class='cb-head'>constraints.ts</div><pre><code>interface HasLength {\n  length: number;\n}\n\nfunction logLength<T extends HasLength>(item: T): T {\n  console.log(item.length);\n  return item;\n}\n\nlogLength(\"سلام\"); // درسته، string طول داره\nlogLength([1, 2, 3]); // درسته، آرایه هم طول داره\n// logLength(42); // خطا: number طول نداره</code></pre></div>",
     "exercise": "یک تابع Generic findById<T extends { id: number }>(items: T[], id: number): T | undefined بنویس که بین آرایه‌ای از آبجکت‌ها (که همه id دارن) بگرده."
    },
    {
     "title": "Decorators: افزودن رفتار به کلاس/متد",
     "content": "<p><b>Decorator</b> تابعی است که با <code class='inline'>@</code> روی یک کلاس/متد اعمال می‌شود و رفتارش را تغییر می‌دهد — دقیقاً همان مفهوم دکوریتور پایتون، ولی برای کلاس. برای فعال‌کردنش باید <code class='inline'>experimentalDecorators: true</code> در tsconfig تنظیم شود (پرکاربرد در فریم‌ورک‌هایی مثل Angular و NestJS).</p><div class='code-block'><div class='cb-head'>decorator.ts</div><pre><code>function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`صدازدن ${propertyKey} با آرگومان‌ها:`, args);\n    return original.apply(this, args);\n  };\n}\n\nclass Calculator {\n  @LogMethod\n  add(a: number, b: number): number {\n    return a + b;\n  }\n}</code></pre></div>",
     "exercise": "با توجه به چیزی که از دکوریتور پایتون یاد گرفتی، توضیح بده LogMethod بالا دقیقاً چه شباهتی به اون داره — هردو چه الگویی رو پیاده می‌کنن؟"
    },
    {
     "title": "استفاده از TypeScript در پروژهٔ واقعی React",
     "content": "<p>در یک پروژهٔ واقعی React+TypeScript (با ابزار Vite یا Next.js، نه CDN ساده)، Props هر کامپوننت با یک interface تایپ می‌شود — این باعث می‌شود اگر یک prop اجباری را فراموش کنید یا نوع اشتباه بدهید، بلافاصله در ادیتور متوجه شوید، نه بعد از اجرا.</p><div class='code-block'><div class='cb-head'>UserCard.tsx</div><pre><code>interface UserCardProps {\n  name: string;\n  age: number;\n  onSelect?: () => void; // اختیاری\n}\n\nfunction UserCard({ name, age, onSelect }: UserCardProps) {\n  return (\n    &lt;div onClick={onSelect}&gt;\n      &lt;h3&gt;{name}&lt;/h3&gt;\n      &lt;p&gt;{age} سال&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>",
     "exercise": "توضیح بده اگه توی JSX بنویسی <UserCard name=\"سارا\" />‏ (بدون age)، چرا TypeScript همون لحظه بهت خطا می‌ده، برخلاف جاوااسکریپت خالص که ساکت می‌مونه تا زمان اجرا."
    },
    {
     "title": "Mapped و Conditional Types",
     "content": "<p><b>Mapped Type</b> روی کلیدهای یک نوع حلقه می‌زند و نوع جدید می‌سازد؛ Utility Typeهایی مثل <code class='inline'>Partial</code> همین‌طور ساخته شده‌اند. <b>Conditional Type</b> نوع را بر اساس شرط انتخاب می‌کند.</p><div class='code-block'><div class='cb-head'>advanced.ts</div><pre><code>type ReadonlyAll&lt;T&gt; = { readonly [K in keyof T]: T[K] };\n\ntype IsString&lt;T&gt; = T extends string ? 'yes' : 'no';\ntype A = IsString&lt;'x'&gt;; // 'yes'\ntype B = IsString&lt;42&gt;;  // 'no'</code></pre></div>",
     "exercise": "یک Mapped Type بنویس که همهٔ فیلدهای یک interface را nullable کند."
    },
    {
     "title": "unknown، never و Type Assertion",
     "content": "<p><code class='inline'>unknown</code> امن‌تر از <code class='inline'>any</code> است: قبل از استفاده باید نوعش را بررسی کنی. <code class='inline'>never</code> یعنی «هرگز اتفاق نمی‌افتد» و برای بررسی کامل بودن switch روی Union مفید است. <code class='inline'>as</code> به کامپایلر می‌گوید نوع را من بهتر می‌دانم؛ با احتیاط و فقط وقتی مطمئنی.</p><div class='code-block'><div class='cb-head'>safe.ts</div><pre><code>function len(x: unknown) {\n  if (typeof x === 'string') return x.length; // narrowing\n  return 0;\n}\ntype Shape = 'a' | 'b';\nfunction f(s: Shape) {\n  switch (s) {\n    case 'a': return 1;\n    case 'b': return 2;\n    default: { const _x: never = s; return _x; }\n  }\n}</code></pre></div>",
     "exercise": "چرا unknown از any امن‌تر است؟ با یک مثال توضیح بده."
    },
    {
     "title": "فایل‌های .d.ts و اعتبارسنجی در زمان اجرا (Zod)",
     "content": "<p>فایل <code class='inline'>.d.ts</code> فقط نوع‌ها را توصیف می‌کند تا کتابخانه‌های جاوااسکریپتی هم نوع داشته باشند (پکیج‌های <code class='inline'>@types/...</code>). ولی نوع‌ها در زمان اجرا وجود ندارند و داده‌ای که از API می‌آید تضمینی ندارد؛ برای همین از <b>Zod</b> استفاده می‌شود: شِما را یک‌بار می‌نویسی، هم اعتبارسنجی می‌کند و هم نوع را خودش استخراج می‌کند.</p><div class='code-block'><div class='cb-head'>schema.ts</div><pre><code>import { z } from 'zod';\n\nconst User = z.object({ id: z.number(), email: z.string().email() });\ntype User = z.infer&lt;typeof User>;\n\nconst u = User.parse(await (await fetch('/api/me')).json()); // خطا اگر شکل غلط باشد</code></pre></div>",
     "exercise": "یک شمای Zod برای فرم ثبت‌نام (نام، ایمیل، سن حداقل ۱۸) بنویس."
    },
    {
     "title": "Generic پیشرفته: Constraint، Default و infer",
     "content": "<p><code class='inline'>K extends keyof T</code> کلید را به نوع شیء محدود می‌کند و خروجی را دقیق‌تر می‌دهد. پارامتر پیش‌فرض (<code class='inline'>T = string</code>) استفاده را ساده می‌کند و <code class='inline'>infer</code> داخل Conditional Type نوع را از ساختار «بیرون می‌کشد» (مثلاً عنصر آرایه). قانون: Generic فقط وقتی لازم است که رابطه‌ی بین ورودی و خروجی را نشان دهد.<div class='code-block'><div class='cb-head'>generics.ts</div><pre><code>function pick&lt;T, K extends keyof T>(o: T, k: K): T[K] { return o[k]; }\nconst u = { id: 1, name: \"علی\" };\nconst n: string = pick(u, \"name\");\ntype ElementOf&lt;T> = T extends readonly (infer E)[] ? E : never;\ntype E1 = ElementOf&lt;string[]>;\nconst e: E1 = \"x\";\ntype Box&lt;T = string> = { value: T };\nconst b: Box = { value: \"پیش‌فرض\" };\nconsole.log(n, e, b.value);\n</code></pre></div></p>",
     "exercise": "تابع getProp بنویس که نوع خروجی‌اش دقیقاً نوع آن فیلد باشد."
    },
    {
     "title": "Mapped Type با Key Remapping و Template Literal",
     "content": "<p>با <code class='inline'>as</code> در Mapped Type کلیدها را تغییر نام می‌دهی (مثلاً <code class='inline'>getName</code> از <code class='inline'>name</code>) یا فیلتر می‌کنی. Template Literal Type رشته‌ها را در سطح نوع می‌سازد و با <code class='inline'>Capitalize</code> و <code class='inline'>Uppercase</code> ترکیب می‌شود. Conditional Type روی Union توزیع می‌شود (Distributive).<div class='code-block'><div class='cb-head'>mapped.ts</div><pre><code>type Getters&lt;T> = { [K in keyof T as `get${Capitalize&lt;string &amp; K>}`]: () => T[K] };\ntype User = { name: string; age: number };\nconst g: Getters&lt;User> = { getName: () => \"سارا\", getAge: () => 30 };\ntype Nullable&lt;T> = { [K in keyof T]: T[K] | null };\nconst nu: Nullable&lt;User> = { name: null, age: 3 };\ntype IsArray&lt;T> = T extends any[] ? true : false;\nconst t: IsArray&lt;number[]> = true;\nconsole.log(g.getName(), g.getAge(), nu.age, t);\n</code></pre></div></p>",
     "exercise": "نوعی بساز که برای هر فیلد یک setter تولید کند."
    },
    {
     "title": "ساخت Utility Type شخصی",
     "content": "<p><code class='inline'>Partial</code>، <code class='inline'>Pick</code>، <code class='inline'>Omit</code>، <code class='inline'>ReturnType</code> و <code class='inline'>Parameters</code> را بشناس و وقتی کافی نبودند خودت بساز: <code class='inline'>DeepPartial</code>، <code class='inline'>DeepReadonly</code>، <code class='inline'>RequireAtLeastOne</code>. نوع بازگشتی توابع را از خود تابع استخراج کن تا با تغییر پیاده‌سازی هماهنگ بماند.<div class='code-block'><div class='cb-head'>utility.ts</div><pre><code>type DeepPartial&lt;T> = { [K in keyof T]?: T[K] extends object ? DeepPartial&lt;T[K]> : T[K] };\ntype Cfg = { db: { host: string; port: number }; debug: boolean };\nconst c: DeepPartial&lt;Cfg> = { db: { port: 5432 } };\nfunction f() { return { a: 1, b: \"x\" }; }\ntype R = ReturnType&lt;typeof f>;\nconst r: R = f();\ntype P = Pick&lt;Cfg, \"debug\">;\ntype O = Omit&lt;Cfg, \"db\">;\nconst p: P = { debug: true }; const o: O = { debug: false };\nconsole.log(c.db?.port, r.b, p.debug, o.debug);\n</code></pre></div></p>",
     "exercise": "DeepReadonly را بنویس و روی یک پیکربندی تو‌در‌تو امتحان کن."
    },
    {
     "title": "Discriminated Union و بررسی کامل بودن",
     "content": "<p>هر عضو Union یک فیلد برچسب ثابت (<code class='inline'>kind</code>) دارد و TypeScript با switch نوع را باریک می‌کند. شاخه‌ی <code class='inline'>default</code> با نوع <code class='inline'>never</code> کامل‌بودن را تضمین می‌کند: افزودن عضو جدید بدون رسیدگی، خطای کامپایل می‌دهد. این الگو جایگزین کلاس‌های ارث‌بری و پرچم‌های boolean ناسازگار است.<div class='code-block'><div class='cb-head'>union.ts</div><pre><code>type Shape = { kind: \"circle\"; r: number } | { kind: \"rect\"; w: number; h: number };\nfunction area(s: Shape): number {\n  switch (s.kind) {\n    case \"circle\": return Math.PI * s.r ** 2;\n    case \"rect\": return s.w * s.h;\n    default: { const _x: never = s; return _x; }\n  }\n}\nconsole.log(area({ kind: \"rect\", w: 2, h: 3 }).toFixed(1), area({ kind: \"circle\", r: 1 }).toFixed(2));\n</code></pre></div></p>",
     "exercise": "وضعیت‌های بارگذاری (idle، loading، success، error) را با union مدل کن."
    },
    {
     "title": "Narrowing: Type Guard، Assertion و satisfies",
     "content": "<p>Type Guard سفارشی (<code class='inline'>x is string</code>) و Assertion Function (<code class='inline'>asserts</code>) باریک‌سازی را به تابع می‌سپارند. <code class='inline'>satisfies</code> بررسی می‌کند مقدار با یک نوع سازگار است بدون اینکه نوع دقیق مقدار را از دست بدهد (بهتر از annotation کامل). از <code class='inline'>as</code> فقط وقتی مطمئنی استفاده کن.<div class='code-block'><div class='cb-head'>narrow.ts</div><pre><code>function isString(x: unknown): x is string { return typeof x === \"string\"; }\nfunction assertPositive(n: number): asserts n is number { if (n &lt;= 0) throw new Error(\"باید مثبت باشد\"); }\nconst cfg = { port: 80, host: \"x\" } satisfies Record&lt;string, string | number>;\nconst v: unknown = \"متن\";\nif (isString(v)) console.log(v.length);\ntry { assertPositive(-1); } catch (e) { console.log((e as Error).message); }\nconsole.log(cfg.port.toFixed(0));\n</code></pre></div></p>",
     "exercise": "یک Type Guard برای تشخیص پاسخ API معتبر بنویس."
    },
    {
     "title": "Template Literal Type و مسیرهای نوع‌امن",
     "content": "<p>با Template Literal و <code class='inline'>infer</code> می‌توان رشته را در سطح نوع پارس کرد: پارامترهای مسیر <code class='inline'>/users/:id</code> را استخراج کنی و ناوبری نوع‌امن بسازی. نام رویدادها (<code class='inline'>on${Capitalize&lt;E&gt;}</code>) و کلیدهای i18n هم همین‌طورند. مراقب پیچیدگی و کندی کامپایلر باش.<div class='code-block'><div class='cb-head'>routes.ts</div><pre><code>type Params&lt;R extends string> = R extends `${string}:${infer P}/${infer Rest}` ? P | Params&lt;`/${Rest}`> : R extends `${string}:${infer P}` ? P : never;\ntype A = Params&lt;\"/users/:id\">;\nconst a: A = \"id\";\ntype Evt = `on${Capitalize&lt;\"click\" | \"hover\">}`;\nconst e: Evt = \"onClick\";\nconsole.log(a, e);\n</code></pre></div></p>",
     "exercise": "نوعی بساز که پارامترهای یک آدرس را به‌صورت آبجکت نوع‌دار بدهد."
    },
    {
     "title": "as const، readonly و Enum در برابر Union",
     "content": "<p><code class='inline'>as const</code> مقدار را فقط‌خواندنی و با نوع لفظی (literal) نگه می‌دارد و با <code class='inline'>typeof X[number]</code> Union از آرایه می‌سازد. به‌جای <code class='inline'>enum</code> معمولاً Union لفظی یا آبجکت <code class='inline'>as const</code> سبک‌تر و بدون کد زمان اجرا است. <code class='inline'>readonly</code> جلوی جهش تصادفی داده را می‌گیرد.<div class='code-block'><div class='cb-head'>const.ts</div><pre><code>const DIRS = [\"up\", \"down\"] as const;\ntype Dir = typeof DIRS[number];\nconst d: Dir = \"up\";\nconst ro: readonly number[] = [1, 2];\nconst o = { a: 1 } as const;\nconsole.log(d, ro.length, o.a);\n</code></pre></div></p>",
     "exercise": "فهرست نقش‌های کاربر را با as const تعریف و نوعش را استخراج کن."
    },
    {
     "title": "Decorator استاندارد (TypeScript 5)",
     "content": "<p>Decoratorهای استاندارد ECMAScript (بدون <code class='inline'>experimentalDecorators</code>) تابعی‌اند که کلاس یا متد را می‌گیرند و می‌توانند آن را بپیچند: لاگ، کش، اعتبارسنجی. با <code class='inline'>context</code> اطلاعات نام و نوع عضو را می‌گیرند. فریم‌ورک‌های قدیمی (Angular/NestJS) هنوز ممکن است سبک تجربی را بخواهند؛ نسخه‌ی تنظیمات را بررسی کن.</p>",
     "exercise": "یک decorator بنویس که زمان اجرای متد را لاگ کند."
    },
    {
     "title": "Declaration Merging و Module Augmentation",
     "content": "<p>Interfaceهای هم‌نام ادغام می‌شوند و می‌توان نوع کتابخانه‌ی بیرونی را گسترش داد: <code class='inline'>declare module 'express' { interface Request { user?: User } }</code>. نوع‌های سراسری را در فایل <code class='inline'>.d.ts</code> با <code class='inline'>declare global</code> تعریف کن. فایل باید <code class='inline'>export</code> داشته باشد تا ماژول حساب شود و در <code class='inline'>include</code> فایل tsconfig باشد.</p>",
     "exercise": "فیلد user را به Request در Express اضافه کن."
    },
    {
     "title": "tsconfig سخت‌گیرانه و ساختار پروژه",
     "content": "<p><code class='inline'>strict</code> را روشن بگذار و علاوه بر آن <code class='inline'>noUncheckedIndexedAccess</code> (دسترسی به اندیس ممکن است undefined باشد)، <code class='inline'>exactOptionalPropertyTypes</code> و <code class='inline'>noImplicitOverride</code> را فعال کن. <code class='inline'>moduleResolution: bundler/nodenext</code> را متناسب با ابزارت انتخاب کن و برای مونو‌ریپو از Project References (<code class='inline'>composite</code>) استفاده کن.<div class='code-block'><div class='cb-head'>tsconfig.json</div><pre><code>{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"exactOptionalPropertyTypes\": true,\n    \"noImplicitOverride\": true,\n    \"target\": \"ES2022\",\n    \"moduleResolution\": \"bundler\"\n  }\n}</code></pre></div></p>",
     "exercise": "یک پروژه را به strict و noUncheckedIndexedAccess مهاجرت بده و خطاها را رفع کن."
    },
    {
     "title": "الگوهای نوع‌امن: Brand، Result و Event Emitter",
     "content": "<p><b>Brand Type</b> دو عدد هم‌شکل (UserId و OrderId) را از هم جدا می‌کند تا اشتباه جابه‌جا نشوند. <b>Result</b> با Discriminated Union خطا را به‌صورت مقدار برمی‌گرداند و استثنا را برای موارد واقعاً استثنایی نگه می‌دارد. Emitter نوع‌امن با Mapped Type نام رویداد و نوع داده‌اش را قفل می‌کند.<div class='code-block'><div class='cb-head'>patterns.ts</div><pre><code>type Brand&lt;T, B> = T &amp; { readonly __brand: B };\ntype UserId = Brand&lt;number, \"UserId\">;\nconst uid = (n: number) => n as UserId;\nfunction getUser(id: UserId) { return \"user\" + id; }\ntype Result&lt;T, E = Error> = { ok: true; value: T } | { ok: false; error: E };\nfunction parse(s: string): Result&lt;number> {\n  const n = Number(s);\n  return Number.isNaN(n) ? { ok: false, error: new Error(\"نامعتبر\") } : { ok: true, value: n };\n}\nconst r = parse(\"42\");\nconsole.log(getUser(uid(5)), r.ok ? r.value : r.error.message);\ntype Handlers&lt;E> = { [K in keyof E]: (p: E[K]) => void };\ntype Ev = { login: { id: number }; logout: void };\nconst h: Handlers&lt;Ev> = { login: p => console.log(p.id), logout: () => console.log(\"خروج\") };\nh.login({ id: 1 }); h.logout();\n</code></pre></div></p>",
     "exercise": "UserId و OrderId را با Brand جدا کن و اشتباه جابه‌جایی را کامپایل‌خطا کن."
    },
    {
     "title": "Function Overload و Call Signature: یک تابع، چند شکل",
     "content": "<p>گاهی یک تابع بسته به نوع ورودی، نوع خروجی متفاوت دارد (<code>parse('5')</code> عدد، <code>parse(['5'])</code> آرایه). با <b>overload</b> چند «امضا» (signature) بالای پیاده‌سازی می‌نویسی؛ فقط امضاهای بالا از بیرون دیده می‌شوند و پیاده‌سازی باید با همه سازگار باشد. قواعد: خاص‌ترین امضا اول، پیاده‌سازی را در امضاها مخفی بدان، و اگر union ساده کافی است overload ننویس. همچنین «call signature» در type یک شیء قابل‌فراخوانی با ویژگی‌های اضافه را توصیف می‌کند.</p><div class='code-block'><div class='cb-head'>overload.ts — تایپ‌چک: tsc --strict | اجرا: tsx overload.ts</div><pre><code>function parse(x: string): number;\nfunction parse(x: string[]): number[];\nfunction parse(x: string | string[]): number | number[] {\n  return Array.isArray(x) ? x.map(Number) : Number(x);\n}\nconst a = parse(&#x27;5&#x27;);          // number\nconst b = parse([&#x27;1&#x27;, &#x27;2&#x27;]);   // number[]\nconsole.log(a + 1, b.map(n =&gt; n * 2));\n\n// @ts-expect-error  امضای مطابق با number وجود ندارد\nparse(5);\n\ntype Counter = { (): number; reset(): void; count: number };\nfunction makeCounter(): Counter {\n  const c = (() =&gt; ++c.count) as Counter;\n  c.count = 0;\n  c.reset = () =&gt; { c.count = 0; };\n  return c;\n}\nconst c = makeCounter(); c(); c();\nconsole.log(&#x27;count =&#x27;, c.count); c.reset(); console.log(&#x27;بعد reset =&#x27;, c.count);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>6 [ 2, 4 ]\ncount = 2\nبعد reset = 0</code></pre></div>",
     "exercise": "یک overload برای حالت number اضافه کن."
    },
    {
     "title": "Index Signature، Record و noUncheckedIndexedAccess",
     "content": "<p><code>{ [key: string]: number }</code> یعنی هر کلید رشته‌ای مقدار عدد دارد؛ اما TypeScript پیش‌فرض فرض می‌کند آن کلید <b>همیشه وجود دارد</b> و <code>obj.x</code> را <code>number</code> می‌گیرد، نه <code>number | undefined</code> (باگ پنهان). گزینه‌ی <code>noUncheckedIndexedAccess</code> نتیجه‌ی دسترسی با اندیس را <code>| undefined</code> می‌کند و تو را مجبور به بررسی. <code>Record&lt;'a'|'b', T&gt;</code> مجموعه‌ی کلیدهای بسته می‌دهد، و <code>keyof typeof obj</code> کلیدهای یک شیء واقعی را می‌گیرد.</p><div class='code-block'><div class='cb-head'>index.ts — تایپ‌چک: tsc --strict | اجرا: tsx index.ts</div><pre><code>const stock: Record&lt;string, number&gt; = { apple: 3 };\nconst n = stock[&#x27;pear&#x27;];                 // با گزینه‌ی سخت: number | undefined\nconst compileOnly1 = () =&gt; {            // هرگز اجرا نمی‌شود؛ فقط تایپ‌چک می‌شود\n  // @ts-expect-error  ممکن است undefined باشد\n  return n.toFixed(1);\n};\nconsole.log(&#x27;با بررسی:&#x27;, (stock[&#x27;pear&#x27;] ?? 0).toFixed(1));\n\nconst arr = [10, 20, 30];\nconst first = arr[5];                    // number | undefined\nconsole.log(&#x27;خارج از محدوده:&#x27;, first === undefined ? &#x27;undefined&#x27; : first);\n\nconst colors = { red: &#x27;#f00&#x27;, green: &#x27;#0f0&#x27; } as const;\ntype ColorName = keyof typeof colors;    // &#x27;red&#x27; | &#x27;green&#x27;\nfunction hex(c: ColorName) { return colors[c]; }\nconsole.log(hex(&#x27;red&#x27;));\n// @ts-expect-error  blue کلید نیست\nhex(&#x27;blue&#x27;);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>با بررسی: 0.0\nخارج از محدوده: undefined\n#f00</code></pre></div>",
     "exercise": "tsconfig را با و بدون این گزینه مقایسه کن."
    },
    {
     "title": "Assertion Function: asserts و Type Predicate",
     "content": "<p>Type guard (<code>x is T</code>) بولین برمی‌گرداند و در شاخه‌ی <code>if</code> نوع را باریک می‌کند. <b>Assertion function</b> (<code>asserts x is T</code>) به‌جای بولین در صورت نادرستی <b>خطا پرتاب می‌کند</b> و بعد از فراخوانی، نوع در ادامه‌ی تابع باریک می‌ماند؛ برای اعتبارسنجی ورودی و پیش‌شرط‌ها عالی است. شکل <code>asserts condition</code> هم برای assert عمومی هست. یادآوری: این‌ها «ادعا»ی توست؛ اگر پیاده‌سازی غلط باشد، کامپایلر گول می‌خورد.</p><div class='code-block'><div class='cb-head'>asserts.ts — تایپ‌چک: tsc --strict | اجرا: tsx asserts.ts</div><pre><code>function assertString(x: unknown): asserts x is string {\n  if (typeof x !== &#x27;string&#x27;) throw new TypeError(`رشته انتظار می‌رفت، ${typeof x} آمد`);\n}\nfunction assert(cond: unknown, msg: string): asserts cond {\n  if (!cond) throw new Error(msg);\n}\nfunction shout(input: unknown) {\n  assertString(input);\n  return input.toUpperCase();          // اینجا input: string\n}\nconsole.log(shout(&#x27;hi&#x27;));\ntry { shout(42); } catch (e) { console.log(&#x27;خطا:&#x27;, (e as Error).message); }\n\nfunction len(x: string | null) {\n  assert(x !== null, &#x27;null مجاز نیست&#x27;);\n  return x.length;                     // x: string\n}\nconsole.log(len(&#x27;سلام&#x27;));\n\nconst isNonEmpty = &lt;T,&gt;(a: T[]): a is [T, ...T[]] =&gt; a.length &gt; 0;\nconst list: number[] = [1, 2];\nif (isNonEmpty(list)) console.log(&#x27;اولین:&#x27;, list[0].toFixed(0));\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>HI\nخطا: رشته انتظار می‌رفت، number آمد\n4\nاولین: 1</code></pre></div>",
     "exercise": "یک assertion برای عدد مثبت بنویس."
    },
    {
     "title": "واریانس: Covariance، Contravariance و in/out",
     "content": "<p>اگر <code>Cat</code> زیرنوع <code>Animal</code> است، آیا <code>Array&lt;Cat&gt;</code> زیرنوع <code>Array&lt;Animal&gt;</code> است؟ <b>Covariant</b> (خروجی): بله. برای <b>پارامتر تابع</b> برعکس است (<b>contravariant</b>): تابعی که <code>Animal</code> می‌پذیرد می‌تواند جای تابعی بنشیند که <code>Cat</code> می‌پذیرد، نه برعکس. با <code>strictFunctionTypes</code> این برای <i>function property</i> اعمال می‌شود ولی <i>method</i> (بازنویسی کوتاه) bivariant می‌ماند (سوراخ عمدی). حاشیه‌نویسی <code>in</code>/<code>out</code> روی پارامتر نوع (TS 4.7) واریانس را صریح اعلام و بررسی را سریع‌تر می‌کند.</p><div class='code-block'><div class='cb-head'>variance.ts — تایپ‌چک: tsc --strict | اجرا: tsx variance.ts</div><pre><code>class Animal { name = &#x27;a&#x27;; }\nclass Cat extends Animal { meow() { return &#x27;میو&#x27;; } }\n\nconst cats: Cat[] = [new Cat()];\nconst animals: Animal[] = cats;          // covariant: مجاز (ولی ناامن برای نوشتن)\nanimals.push(new Animal());              // ← دیگر همه Cat نیستند!\nconsole.log(&#x27;طول:&#x27;, cats.length, &#x27;| آیا آخری meow دارد؟&#x27;, typeof (cats[1] as Cat).meow);\n\ntype Handler&lt;T&gt; = (x: T) =&gt; void;\nconst onAnimal: Handler&lt;Animal&gt; = a =&gt; console.log(&#x27;حیوان&#x27;, a.name);\nconst onCat: Handler&lt;Cat&gt; = onAnimal;    // ✓ contravariant: مجاز\nonCat(new Cat());\n// @ts-expect-error  برعکس مجاز نیست\nconst bad: Handler&lt;Animal&gt; = (c: Cat) =&gt; c.meow();\n\ninterface Producer&lt;out T&gt; { get(): T }\ninterface Consumer&lt;in T&gt; { put(x: T): void }\nconst p: Producer&lt;Animal&gt; = { get: () =&gt; new Cat() } as Producer&lt;Cat&gt;;\nconsole.log(&#x27;Producer covariant ✓&#x27;, p.get().name);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>طول: 2 | آیا آخری meow دارد؟ undefined\nحیوان a\nProducer covariant ✓ a</code></pre></div>",
     "exercise": "با in out روی یک کلاس Box تجربه کن."
    },
    {
     "title": "نوع‌های بازگشتی: DeepPartial، DeepReadonly و JSON",
     "content": "<p>نوع می‌تواند خودش را صدا بزند. <code>DeepPartial&lt;T&gt;</code> همه‌ی سطوح را اختیاری می‌کند (برای patch)، <code>DeepReadonly&lt;T&gt;</code> همه را readonly، و <code>type Json = string | number | boolean | null | Json[] | { [k: string]: Json }</code> هر JSON معتبر را توصیف می‌کند. مراقب باش تابع و آرایه را درست هندل کنی؛ و عمق خیلی زیاد (limit ~۵۰) ‌کامپایلر را کند می‌کند یا خطای «excessively deep» می‌دهد.</p><div class='code-block'><div class='cb-head'>recursive.ts — تایپ‌چک: tsc --strict | اجرا: tsx recursive.ts</div><pre><code>type DeepPartial&lt;T&gt; = T extends (infer U)[] ? DeepPartial&lt;U&gt;[]\n  : T extends object ? { [K in keyof T]?: DeepPartial&lt;T[K]&gt; } : T;\ntype DeepReadonly&lt;T&gt; = T extends (infer U)[] ? readonly DeepReadonly&lt;U&gt;[]\n  : T extends object ? { readonly [K in keyof T]: DeepReadonly&lt;T[K]&gt; } : T;\n\ninterface Config { server: { host: string; port: number }; tags: string[] }\nconst patch: DeepPartial&lt;Config&gt; = { server: { port: 8080 } };   // ✓ host لازم نیست\nconsole.log(&#x27;patch:&#x27;, JSON.stringify(patch));\n\nconst cfg: DeepReadonly&lt;Config&gt; = { server: { host: &#x27;x&#x27;, port: 1 }, tags: [&#x27;a&#x27;] };\n// @ts-expect-error  readonly است\ncfg.server.port = 2;\n// @ts-expect-error  آرایه readonly است\ncfg.tags.push(&#x27;b&#x27;);\n\ntype Json = string | number | boolean | null | Json[] | { [k: string]: Json };\nconst j: Json = { a: [1, { b: null }], c: &#x27;x&#x27; };\n// @ts-expect-error  undefined در JSON نیست\nconst bad: Json = { a: undefined };\nconsole.log(&#x27;Json معتبر:&#x27;, JSON.stringify(j));\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>patch: {&quot;server&quot;:{&quot;port&quot;:8080}}\nJson معتبر: {&quot;a&quot;:[1,{&quot;b&quot;:null}],&quot;c&quot;:&quot;x&quot;}</code></pre></div>",
     "exercise": "یک DeepRequired بساز."
    },
    {
     "title": "Tupleها و Variadic Tuple Types",
     "content": "<p>Tuple آرایه‌ی با طول و نوع هر خانه‌ی مشخص است. <b>Variadic tuple</b> (TS 4.0) اجازه می‌دهد با spread در نوع، tupleها را ترکیب کنی: <code>[...A, ...B]</code>. کاربرد: نوشتن <code>concat</code>، <code>curry</code> و <code>bind</code> نوع‌امن، گرفتن پارامترهای تابع با <code>Parameters&lt;F&gt;</code>، و label برای خوانایی (<code>[host: string, port: number]</code>). نوع‌های ورودی با <code>readonly</code> هم قابل‌قبول‌ترند.</p><div class='code-block'><div class='cb-head'>tuples.ts — تایپ‌چک: tsc --strict | اجرا: tsx tuples.ts</div><pre><code>type Concat&lt;A extends readonly unknown[], B extends readonly unknown[]&gt; = [...A, ...B];\nfunction concat&lt;A extends unknown[], B extends unknown[]&gt;(a: [...A], b: [...B]): Concat&lt;A, B&gt; {\n  return [...a, ...b];\n}\nconst r = concat([1, &#x27;a&#x27;], [true]);      // [number, string, boolean]\nconsole.log(r);\nconst first: number = r[0];\n// @ts-expect-error  خانه‌ی دوم string است\nconst wrong: number = r[1];\n\ntype Endpoint = [host: string, port: number, secure?: boolean];\nconst e: Endpoint = [&#x27;localhost&#x27;, 3000];\nconsole.log(e.length, e[2] ?? false);\n\nfunction partial&lt;A extends unknown[], R&gt;(fn: (...a: A) =&gt; R, first: A[0]) {\n  return (...rest: A extends [unknown, ...infer T] ? T : never) =&gt; fn(...([first, ...rest] as unknown as A));\n}\nconst add3 = (a: number, b: number, c: number) =&gt; a + b + c;\nconsole.log(partial(add3, 1)(2, 3));\ntype Args = Parameters&lt;typeof add3&gt;;\nconst args: Args = [1, 2, 3];\nconsole.log(&#x27;Parameters:&#x27;, args.length);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>[ 1, &#x27;a&#x27;, true ]\n2 false\n6\nParameters: 3</code></pre></div>",
     "exercise": "Last<T> را با tuple بساز."
    },
    {
     "title": "الگوی Builder با Type-State: نمی‌شود ناقص build کرد",
     "content": "<p>با کمک generics می‌توان «وضعیت ساخت» را در نوع ثبت کرد تا <code>build()</code> فقط وقتی همه‌ی فیلدهای الزامی تنظیم شده‌اند قابل فراخوانی باشد؛ خطای ناقص‌بودن در <b>زمان کامپایل</b> می‌آید نه اجرا. هر متد builder نوع جدیدی برمی‌گرداند که فیلد تنظیم‌شده را به نوع state اضافه می‌کند. این الگو برای ساخت درخواست HTTP، کوئری، و پیکربندی‌های پیچیده مفید است؛ ولی بیش‌ازحد استفاده نکن (پیچیدگی نوع).</p><div class='code-block'><div class='cb-head'>builder.ts — تایپ‌چک: tsc --strict | اجرا: tsx builder.ts</div><pre><code>class RequestBuilder&lt;S extends { url?: true; method?: true }&gt; {\n  declare private readonly state: S;           // ردپای نوع (فقط در زمان کامپایل)\n  private constructor(private data: { url?: string; method?: string }) {}\n  static create() { return new RequestBuilder&lt;{}&gt;({}); }\n  url(u: string) { return new RequestBuilder&lt;S &amp; { url: true }&gt;({ ...this.data, url: u }); }\n  method(m: string) { return new RequestBuilder&lt;S &amp; { method: true }&gt;({ ...this.data, method: m }); }\n  build(this: RequestBuilder&lt;{ url: true; method: true }&gt;) {\n    return `${this.data.method} ${this.data.url}`;\n  }\n}\nconst ok = RequestBuilder.create().url(&#x27;/users&#x27;).method(&#x27;GET&#x27;).build();\nconsole.log(ok);\n// @ts-expect-error  method تنظیم نشده\nRequestBuilder.create().url(&#x27;/users&#x27;).build();\nconsole.log(&#x27;ترتیب آزاد:&#x27;, RequestBuilder.create().method(&#x27;POST&#x27;).url(&#x27;/x&#x27;).build());\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>GET /users\nترتیب آزاد: POST /x</code></pre></div>",
     "exercise": "یک فیلد اجباری body برای POST اضافه کن."
    },
    {
     "title": "Mini-Zod: اعتبارسنجی زمان اجرا با استنتاج نوع",
     "content": "<p>نوع‌های TypeScript در زمان اجرا پاک می‌شوند؛ پس داده‌ی ورودی (JSON شبکه، فرم) بررسی نمی‌شود. کتابخانه‌هایی مثل Zod یک <b>schema</b> مقدار-سطح می‌سازند و نوع را از روی آن <b>استنتاج</b> می‌کنند (<code>z.infer</code>): یک منبع حقیقت برای اعتبارسنجی و نوع. ایده‌ی اصلی: هر schema یک تابع <code>parse(x: unknown): T</code> است و نوع T با <code>infer</code> از ترکیب schemaها ساخته می‌شود. پایین، نسخه‌ی کوچک آن را از صفر می‌سازیم.</p><div class='code-block'><div class='cb-head'>minizod.ts — تایپ‌چک: tsc --strict | اجرا: tsx minizod.ts</div><pre><code>type Schema&lt;T&gt; = { parse(x: unknown): T };\nconst string: Schema&lt;string&gt; = { parse: x =&gt; { if (typeof x !== &#x27;string&#x27;) throw new Error(&#x27;string نیست&#x27;); return x; } };\nconst number: Schema&lt;number&gt; = { parse: x =&gt; { if (typeof x !== &#x27;number&#x27;) throw new Error(&#x27;number نیست&#x27;); return x; } };\nconst array = &lt;T,&gt;(s: Schema&lt;T&gt;): Schema&lt;T[]&gt; =&gt; ({\n  parse: x =&gt; { if (!Array.isArray(x)) throw new Error(&#x27;array نیست&#x27;); return x.map(s.parse); },\n});\nconst object = &lt;S extends Record&lt;string, Schema&lt;any&gt;&gt;&gt;(shape: S): Schema&lt;{ [K in keyof S]: S[K] extends Schema&lt;infer T&gt; ? T : never }&gt; =&gt; ({\n  parse: x =&gt; {\n    if (typeof x !== &#x27;object&#x27; || x === null) throw new Error(&#x27;object نیست&#x27;);\n    const out: any = {};\n    for (const k in shape) out[k] = shape[k]!.parse((x as any)[k]);\n    return out;\n  },\n});\ntype Infer&lt;S&gt; = S extends Schema&lt;infer T&gt; ? T : never;\n\nconst User = object({ name: string, age: number, tags: array(string) });\ntype User = Infer&lt;typeof User&gt;;          // { name: string; age: number; tags: string[] }\n\nconst u: User = User.parse(JSON.parse(&#x27;{&quot;name&quot;:&quot;علی&quot;,&quot;age&quot;:30,&quot;tags&quot;:[&quot;a&quot;]}&#x27;));\nconsole.log(u.name, u.age + 1, u.tags.length);\ntry { User.parse({ name: &#x27;x&#x27;, age: &#x27;30&#x27;, tags: [] }); } catch (e) { console.log(&#x27;رد شد:&#x27;, (e as Error).message); }\nconst compileOnly2 = () =&gt; {\n  // @ts-expect-error  age عدد است\n  return u.age.toUpperCase();\n};\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>علی 31 1\nرد شد: number نیست</code></pre></div>",
     "exercise": "یک optional(schema) اضافه کن."
    },
    {
     "title": "کلاینت API نوع‌امن از روی نقشه‌ی مسیرها",
     "content": "<p>به‌جای تایپ دستی پاسخ هر endpoint، یک <b>نقشه‌ی مسیرها</b> (route map) تعریف کن که برای هر مسیر نوع <code>params</code>، <code>body</code> و <code>response</code> را می‌گوید؛ سپس تابع <code>api(method, path, ...)</code> با استفاده از <code>keyof</code> و generics، ورودی و خروجی را نوع‌امن می‌کند. اشتباه تایپی در مسیر یا فیلد بدنه، در ویرایشگر قرمز می‌شود. همین نقشه را می‌توان بین سرور و کلاینت به اشتراک گذاشت (یا از OpenAPI تولید کرد). این پایه‌ی ابزارهایی مثل tRPC است.</p><div class='code-block'><div class='cb-head'>apiclient.ts — تایپ‌چک: tsc --strict | اجرا: tsx apiclient.ts</div><pre><code>interface Routes {\n  &#x27;GET /users/:id&#x27;:  { params: { id: number };  response: { id: number; name: string } };\n  &#x27;POST /users&#x27;:     { body: { name: string };  response: { id: number } };\n}\ntype Req&lt;K extends keyof Routes&gt; =\n  (Routes[K] extends { params: infer P } ? { params: P } : {}) &amp;\n  (Routes[K] extends { body: infer B } ? { body: B } : {});\n\nasync function api&lt;K extends keyof Routes&gt;(route: K, req: Req&lt;K&gt;): Promise&lt;Routes[K][&#x27;response&#x27;]&gt; {\n  // شبیه‌سازی سرور برای نمایش\n  if (route === &#x27;GET /users/:id&#x27;) return { id: (req as any).params.id, name: &#x27;علی&#x27; } as any;\n  return { id: 99 } as any;\n}\n\nconst u = await api(&#x27;GET /users/:id&#x27;, { params: { id: 1 } });\nconsole.log(u.name.toUpperCase(), u.id + 1);\nconst c = await api(&#x27;POST /users&#x27;, { body: { name: &#x27;سارا&#x27; } });\nconsole.log(&#x27;id جدید:&#x27;, c.id);\n// @ts-expect-error  id باید number باشد\nawait api(&#x27;GET /users/:id&#x27;, { params: { id: &#x27;1&#x27; } });\n// @ts-expect-error  مسیر وجود ندارد\nawait api(&#x27;DELETE /users&#x27;, {});\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>علی 2\nid جدید: 99</code></pre></div>",
     "exercise": "مسیر PUT /users/:id را اضافه کن."
    },
    {
     "title": "Class Mixin: ترکیب رفتار بدون وراثت چندگانه",
     "content": "<p>TypeScript وراثت چندگانه ندارد. <b>Mixin</b> تابعی است که یک کلاس را می‌گیرد و کلاس جدیدی با قابلیت اضافه برمی‌گرداند: <code>const Timestamped = &lt;TBase extends Constructor&gt;(Base: TBase) =&gt; class extends Base {...}</code>. می‌توان چند mixin را زنجیر کرد: <code>class User extends Timestamped(Activatable(Entity))</code>. نکته‌ی نوعی: <code>type Constructor&lt;T = {}&gt; = new (...args: any[]) =&gt; T</code>. مزیت: بازاستفاده بدون سلسله‌مراتب عمیق؛ عیب: دیباگ و خوانایی. اغلب «ترکیب» (composition) با شیء ساده‌تر است.</p><div class='code-block'><div class='cb-head'>mixin.ts — تایپ‌چک: tsc --strict | اجرا: tsx mixin.ts</div><pre><code>type Constructor&lt;T = {}&gt; = new (...args: any[]) =&gt; T;\n\nfunction Timestamped&lt;TBase extends Constructor&gt;(Base: TBase) {\n  return class extends Base { createdAt = &#x27;T0&#x27;; touch() { this.createdAt = &#x27;T1&#x27;; } };\n}\nfunction Activatable&lt;TBase extends Constructor&gt;(Base: TBase) {\n  return class extends Base {\n    active = false;\n    activate() { this.active = true; return this; }\n  };\n}\nclass Entity { constructor(public id: number) {} }\n\nclass User extends Timestamped(Activatable(Entity)) {\n  greet() { return `کاربر ${this.id} ${this.active ? &#x27;فعال&#x27; : &#x27;غیرفعال&#x27;}`; }\n}\nconst u = new User(7);\nconsole.log(u.greet());\nu.activate().touch();\nconsole.log(u.greet(), u.createdAt);\nconst compileOnly3 = () =&gt; {\n  // @ts-expect-error  Entity فقط id دارد\n  return new Entity(1).activate();\n};\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>کاربر 7 غیرفعال\nکاربر 7 فعال T1</code></pre></div>",
     "exercise": "یک mixin برای Serializable بساز."
    },
    {
     "title": "خطا در TypeScript: catch با unknown و کلاس‌های خطا",
     "content": "<p>با <code>useUnknownInCatchVariables</code> (جزو <code>strict</code>) متغیر <code>catch (e)</code> از نوع <code>unknown</code> است، چون در JS هر چیزی را می‌شود <code>throw</code> کرد (حتی رشته). باید قبل از استفاده <b>باریک</b> کنی: <code>e instanceof Error</code>. برای خطاهای دامنه یک کلاس پایه با <code>name</code> و داده‌ی ساخت‌یافته بساز و از <code>cause</code> (ES2022) برای زنجیره‌ی علت استفاده کن. نکته‌ی تله‌ای: هنگام <code>extends Error</code> برای ES5 باید <code>Object.setPrototypeOf</code> بزنی، در ES2015+ لازم نیست.</p><div class='code-block'><div class='cb-head'>errors.ts — تایپ‌چک: tsc --strict | اجرا: tsx errors.ts</div><pre><code>class AppError extends Error {\n  constructor(message: string, readonly code: string, options?: { cause?: unknown }) {\n    super(message, options);\n    this.name = new.target.name;\n  }\n}\nclass NotFound extends AppError {\n  constructor(what: string, options?: { cause?: unknown }) { super(`${what} یافت نشد`, &#x27;E_NOT_FOUND&#x27;, options); }\n}\n\nfunction toMessage(e: unknown): string {\n  if (e instanceof AppError) return `[${e.code}] ${e.message}`;\n  if (e instanceof Error) return e.message;\n  return String(e);\n}\ntry { throw new NotFound(&#x27;کاربر&#x27;, { cause: new Error(&#x27;DB timeout&#x27;) }); }\ncatch (e) {\n  console.log(toMessage(e));\n  if (e instanceof AppError) console.log(&#x27;علت:&#x27;, (e.cause as Error).message, &#x27;| نام:&#x27;, e.name);\n}\ntry { throw &#x27;رشته&#x27;; } catch (e) { console.log(toMessage(e)); }\ntry { const v: any = null; v.x; } catch (e) {\n  // @ts-expect-error  e از نوع unknown است\n  e.message;\n  console.log(toMessage(e).length &gt; 0);\n}\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>[E_NOT_FOUND] کاربر یافت نشد\nعلت: DB timeout | نام: NotFound\nرشته\ntrue</code></pre></div>",
     "exercise": "یک ValidationError با فهرست فیلدها بساز."
    },
    {
     "title": "import type و verbatimModuleSyntax: ماژول‌های درست",
     "content": "<p>Importهایی که فقط نوع‌اند باید در خروجی JS <b>حذف شوند</b> وگرنه ماژول بی‌دلیل بارگذاری می‌شود یا چرخه می‌سازد. <code>import type { X }</code> صریح می‌گوید فقط نوع است. گزینه‌ی <code>verbatimModuleSyntax</code> (جایگزین <code>importsNotUsedAsValues</code>) می‌گوید: هر چه بدون <code>type</code> است در خروجی می‌ماند؛ پس کامپایلر مجبورت می‌کند نوع‌ها را صریح علامت بزنی و رفتار با ابزارهای تک‌فایلی (esbuild/swc، <code>isolatedModules</code>) قابل‌پیش‌بینی می‌شود. <code>export type</code> و <code>declare global</code> برای افزودن به محیط سراسری.</p><div class='code-block'><div class='cb-head'>modules.ts — تایپ‌چک: tsc --strict | اجرا: tsx modules.ts</div><pre><code>// فایل types.ts (فرضی):  export interface User { id: number }  export const DEFAULT_ID = 1;\nimport type { Server } from &#x27;node:http&#x27;;       // فقط نوع؛ در خروجی حذف می‌شود\nimport { createServer } from &#x27;node:http&#x27;;\nimport { type IncomingMessage, STATUS_CODES } from &#x27;node:http&#x27;;   // ترکیبی\n\ndeclare global {\n  interface Array&lt;T&gt; { last(): T | undefined }   // افزودن به محیط سراسری\n}\nArray.prototype.last = function () { return this[this.length - 1]; };\n\nconst s: Server = createServer((_: IncomingMessage, res) =&gt; res.end(&#x27;ok&#x27;));\nconsole.log(typeof s.listen, STATUS_CODES[404]);\nconsole.log([1, 2, 3].last());\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>function Not Found\n3</code></pre></div>",
     "exercise": "verbatimModuleSyntax را روشن کن و import ساده‌ی یک interface را امتحان کن."
    },
    {
     "title": "تست نوع (Type Testing): Equal و ts-expect-error",
     "content": "<p>نوع‌های پیچیده هم باگ دارند و باید «تست» شوند. روش بدون کتابخانه: یک helper برای برابری دقیق نوع‌ها (<code>Equal&lt;A,B&gt;</code>) و تابع <code>assertType&lt;T&gt;(x: T)</code>، و برای رد شدن مورد انتظار <code>// @ts-expect-error</code> (اگر خطایی نباشد خودش خطا می‌دهد، پس تست «قرمز-سبز» است). این تست‌ها در <code>tsc --noEmit</code> اجرا می‌شوند و اجرای واقعی لازم ندارند؛ ابزارهای <code>expect-type</code> و <code>tsd</code> همین را کامل‌تر می‌کنند.</p><div class='code-block'><div class='cb-head'>typetest.ts — تایپ‌چک: tsc --strict | اجرا: tsx typetest.ts</div><pre><code>type Equal&lt;A, B&gt; =\n  (&lt;T&gt;() =&gt; T extends A ? 1 : 2) extends (&lt;T&gt;() =&gt; T extends B ? 1 : 2) ? true : false;\nconst assertType = &lt;_T extends true&gt;() =&gt; {};\n\ntype Pick2&lt;T, K extends keyof T&gt; = { [P in K]: T[P] };\ninterface U { id: number; name: string; age: number }\n\nassertType&lt;Equal&lt;Pick2&lt;U, &#x27;id&#x27; | &#x27;name&#x27;&gt;, { id: number; name: string }&gt;&gt;();\nassertType&lt;Equal&lt;Pick2&lt;U, &#x27;id&#x27;&gt;, Pick&lt;U, &#x27;id&#x27;&gt;&gt;&gt;();\n// @ts-expect-error  این دو برابر نیستند\nassertType&lt;Equal&lt;Pick2&lt;U, &#x27;id&#x27;&gt;, { id: string }&gt;&gt;();\n// @ts-expect-error  any با number برابر نیست\nassertType&lt;Equal&lt;any, number&gt;&gt;();\n\ntype IsNever&lt;T&gt; = [T] extends [never] ? true : false;\nassertType&lt;IsNever&lt;never&gt;&gt;();\nassertType&lt;Equal&lt;IsNever&lt;string&gt;, false&gt;&gt;();\nconsole.log(&#x27;همه‌ی تست‌های نوع در زمان کامپایل گذشتند ✓&#x27;);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>همه‌ی تست‌های نوع در زمان کامپایل گذشتند ✓</code></pre></div>",
     "exercise": "یک تست برای Partial بنویس."
    },
    {
     "title": "نوع‌دهی ناهمزمان: Awaited، Promise.all و AsyncIterable",
     "content": "<p><code>Awaited&lt;T&gt;</code> نوع نهایی بعد از <code>await</code> را می‌دهد (Promise تو در تو را باز می‌کند). <code>Promise.all</code> با tuple ورودی، tuple خروجی با نوع‌های جداگانه می‌دهد؛ ولی با آرایه‌ی ساده نوع union می‌شود. <code>Promise.allSettled</code> نتیجه‌ی <code>PromiseSettledResult</code> می‌دهد که باید با <code>status</code> باریک شود. برای جریان: <code>AsyncIterable&lt;T&gt;</code> و <code>for await</code>. هشدار رایج: فراموش‌کردن <code>await</code> نوع <code>Promise&lt;T&gt;</code> را در شرط می‌گذارد؛ قانون ESLint <code>no-floating-promises</code> کمک می‌کند.</p><div class='code-block'><div class='cb-head'>async.ts — تایپ‌چک: tsc --strict | اجرا: tsx async.ts</div><pre><code>const num = async () =&gt; 1;\nconst str = async () =&gt; &#x27;a&#x27;;\ntype R = Awaited&lt;ReturnType&lt;typeof num&gt;&gt;;      // number\nconst [n, s] = await Promise.all([num(), str()]);   // [number, string]\nconsole.log(n + 1, s.toUpperCase());\n\nconst settled = await Promise.allSettled([num(), Promise.reject(new Error(&#x27;x&#x27;))]);\nfor (const r of settled) {\n  if (r.status === &#x27;fulfilled&#x27;) console.log(&#x27;موفق&#x27;, r.value);\n  else console.log(&#x27;رد شد&#x27;, (r.reason as Error).message);\n}\n\nasync function* ticks(max: number): AsyncGenerator&lt;number, void, void&gt; {\n  for (let i = 1; i &lt;= max; i++) yield i;\n}\nconst seen: number[] = [];\nfor await (const t of ticks(3)) seen.push(t);\nconsole.log(&#x27;جریان:&#x27;, seen);\n\ntype Deep = Awaited&lt;Promise&lt;Promise&lt;string&gt;&gt;&gt;;   // string\nconst d: Deep = &#x27;ok&#x27;;\nconst bad = num();\n// @ts-expect-error  Promise را نمی‌شود مستقیم جمع کرد\nbad + 1;\nconsole.log(d);\nexport {};   // فایل را «ماژول» می‌کند (برای await سطح‌بالا و جلوگیری از تداخل نام‌ها)</code></pre></div><div class='code-block'><div class='cb-head'>خروجی نمونه</div><pre><code>2 A\nموفق 1\nرد شد x\nجریان: [ 1, 2, 3 ]\nok</code></pre></div>",
     "exercise": "یک تابع mapAsync با نوع generic بنویس."
    }
   ],
   "quiz": [
    {
     "q": "Generic Constraint (با extends) چه کاری انجام می‌دهد؟",
     "options": [
      "نوع را حذف می‌کند",
      "Generic را محدود می‌کند که فقط انواع دارای یک ویژگی خاص را قبول کند",
      "کلاس جدید می‌سازد",
      "کامپایل را متوقف می‌کند"
     ],
     "answer": 1,
     "explain": "مثلاً T extends HasLength یعنی T باید حتماً یک فیلد length داشته باشد."
    },
    {
     "q": "Decorator در TypeScript از کدام زبان الهام گرفته شده مفهوماً مشابه است؟",
     "options": [
      "فقط مخصوص TypeScript است و مشابهی ندارد",
      "دکوریتور پایتون (@) با همان ایدهٔ افزودن رفتار بدون تغییر مستقیم کد اصلی",
      "حلقهٔ for",
      "Union Type"
     ],
     "answer": 1,
     "explain": "هر دو یک تابع را می‌گیرند و نسخهٔ 'پوششی' با رفتار اضافه برمی‌گردانند."
    },
    {
     "q": "تایپ‌کردن Props یک کامپوننت React با TypeScript چه مزیتی دارد؟",
     "options": [
      "سرعت رندر بیشتر می‌شود",
      "خطای فراموش‌کردن یک prop اجباری یا دادن نوع اشتباه، همان لحظهٔ نوشتن کد نشان داده می‌شود",
      "نیازی به import ندارید",
      "فقط ظاهری است"
     ],
     "answer": 1,
     "explain": "این خطاها بدون TypeScript فقط هنگام اجرا (و شاید نزد کاربر واقعی) کشف می‌شدند."
    },
    {
     "q": "چرا unknown از any امن‌تر است؟",
     "options": [
      "سریع‌تر است",
      "قبل از استفاده باید نوع بررسی شود",
      "نوع حذف می‌شود",
      "فقط برای کلاس است"
     ],
     "answer": 1,
     "explain": "کامپایلر بدون narrowing اجازهٔ استفاده نمی‌دهد."
    },
    {
     "q": "Zod چه مشکلی را حل می‌کند؟",
     "options": [
      "نوع‌ها در زمان اجرا وجود ندارند",
      "کندی کامپایل",
      "نصب پکیج",
      "فرمت کد"
     ],
     "answer": 0,
     "explain": "داده‌ی ورودی را در زمان اجرا اعتبارسنجی می‌کند."
    },
    {
     "q": "هدف شاخه‌ی default با نوع never چیست؟",
     "options": [
      "اطمینان از رسیدگی به همه‌ی اعضای union",
      "سرعت",
      "حذف union",
      "نوع any"
     ],
     "answer": 0,
     "explain": "عضو جدید بدون رسیدگی خطای کامپایل می‌دهد."
    },
    {
     "q": "satisfies چه فرقی با annotation دارد؟",
     "options": [
      "نوع دقیق مقدار را حفظ می‌کند",
      "نوع را گسترده می‌کند",
      "فقط در JS کار می‌کند",
      "هیچ"
     ],
     "answer": 0,
     "explain": "سازگاری را می‌سنجد بدون گم‌کردن لفظ‌ها."
    },
    {
     "q": "noUncheckedIndexedAccess چه می‌کند؟",
     "options": [
      "دسترسی به اندیس را T|undefined می‌کند",
      "اندیس را حذف می‌کند",
      "سرعت را زیاد می‌کند",
      "هیچ"
     ],
     "answer": 0,
     "explain": "از خطای out-of-bounds جلوگیری می‌کند."
    },
    {
     "q": "Brand Type برای چیست؟",
     "options": [
      "جداکردن نوع‌های هم‌شکل",
      "رنگ‌آمیزی",
      "حذف نوع",
      "اجرا"
     ],
     "answer": 0,
     "explain": "مثلاً UserId از OrderId."
    },
    {
     "q": "گزینه‌ی noUncheckedIndexedAccess چه می‌کند؟",
     "options": [
      "دسترسی با اندیس را number | undefined می‌کند",
      "اندیس‌های منفی را مجاز می‌کند",
      "آرایه‌ها را readonly می‌کند",
      "سرعت کامپایل را بالا می‌برد"
     ],
     "answer": 0,
     "explain": "کلیدی که شاید وجود ندارد باید قبل از استفاده بررسی شود."
    },
    {
     "q": "تفاوت assertion function با type guard چیست؟",
     "options": [
      "assertion در نادرستی خطا پرتاب می‌کند و نوع را باریک می‌ماند",
      "type guard خطا پرتاب می‌کند",
      "هیچ تفاوتی ندارند",
      "assertion فقط روی کلاس‌ها کار می‌کند"
     ],
     "answer": 0,
     "explain": "asserts x is T بعد از فراخوانی نوع را در ادامه‌ی تابع باریک می‌کند."
    },
    {
     "q": "در catch (e) با strict، نوع e چیست؟",
     "options": [
      "unknown",
      "any",
      "Error",
      "never"
     ],
     "answer": 0,
     "explain": "چون در JS هر مقداری قابل throw است؛ باید قبل از استفاده باریکش کنی."
    },
    {
     "q": "چرا برای داده‌ی ورودی شبکه به schema زمان اجرا (مثل Zod) نیاز داریم؟",
     "options": [
      "چون نوع‌های TypeScript در زمان اجرا پاک می‌شوند",
      "چون TypeScript کند است",
      "چون JSON نوع ندارد در JS",
      "چون interface نمی‌تواند ارث ببرد"
     ],
     "answer": 0,
     "explain": "کامپایلر فقط در زمان کامپایل بررسی می‌کند، نه روی داده‌ی واقعی."
    }
   ],
   "challenge": {
    "task": "یک Generic Constraint بنویس: تابع getMaxByField<T extends Record<string, any>>(items: T[], field: string): T که بین آرایه‌ای از آبجکت‌ها، اونی که مقدار بزرگ‌تری توی یه فیلد مشخص داره رو برگردونه (مثلاً بین چندتا Product، گرون‌ترین رو پیدا کنه).",
    "hint1": "باید روی آرایه حلقه بزنی و هر بار item[field] رو با بیشترین مقدار فعلی مقایسه کنی.",
    "hint2": "چون field یک رشتهٔ عمومیه، برای دسترسی به item[field] نیاز به Record<string, any> یا یه Index Signature داری.",
    "solution": "function getMaxByField<T extends Record<string, any>>(items: T[], field: string): T {\n  return items.reduce((max, item) =>\n    item[field] > max[field] ? item : max\n  );\n}\n\nconst products = [{ name: \"A\", price: 100 }, { name: \"B\", price: 300 }];\nconsole.log(getMaxByField(products, \"price\")); // { name: 'B', price: 300 }"
   }
  }
 ],
 "project": {
  "title": "بازنویسی یک پروژهٔ JS با TypeScript",
  "brief": "یکی از پروژه‌های قبلی‌ات (مثلاً Todo App از مرحلهٔ جاوااسکریپت) رو با TypeScript بازنویسی کن — یعنی برای همهٔ متغیرها، پارامترها و مقدار بازگشتی توابع، نوع مشخص کن و حداقل یک interface برای شکل داده (مثل Todo) تعریف کن.",
  "requirements": [
   "حداقل یک interface برای مدل اصلی داده (مثل Todo با id، text، done)",
   "همهٔ توابع باید نوع پارامتر و خروجی مشخص داشته باشن",
   "حداقل یک Union Type برای یک فیلد محدود (مثل فیلتر: 'all' | 'active' | 'done')",
   "کد باید با tsc بدون خطا کامپایل بشه"
  ],
  "hints": [
   "اول همهٔ کد رو به .ts تغییر بده و اجازه بده TypeScript خطاهایی که پیدا می‌کنه رو نشونت بده — این خودش لیستیه از جاهایی که باید نوع اضافه کنی."
  ]
 }
});
