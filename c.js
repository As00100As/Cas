(window.COURSES=window.COURSES||[]).push({
 "id": "c",
 "name": "C — پایه تا فوق‌پیشرفته",
 "icon": "🔧",
 "kind": "theory",
 "desc": "نزدیک‌ترین زبان به سخت‌افزار — همون‌جایی که یونیکس، لینوکس و اکثر زبان‌های دیگه ازش ساخته شدن",
 "covers": [
  "Syntax، متغیرها، انواع داده",
  "if/switch، حلقه‌ها، توابع، آرایه/String",
  "Pointer، Struct، Enum، Dynamic Memory",
  "Linked List، Stack/Queue، Tree/Graph، Hash Table",
  "الگوریتم و Bit Manipulation",
  "Process/Thread، System Call، Networking، Embedded، Kernel-level"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "متغیرها و انواع داده",
     "content": "<p>برخلاف پایتون، در C باید نوع هر متغیر را از قبل مشخص کنید (Static Typing). انواع پایه: <code class='inline'>int</code> (عدد صحیح)، <code class='inline'>float</code>/<code class='inline'>double</code> (اعشاری، double دقت بیشتری دارد)، <code class='inline'>char</code> (یک کاراکتر تکی). عملگر <code class='inline'>sizeof()</code> حجم حافظهٔ اشغال‌شده توسط یک نوع را برمی‌گرداند — چیزی که در پایتون اصلاً مطرح نیست، چون آن‌جا حافظه پشت‌صحنه مدیریت می‌شود.</p><div class='code-block'><div class='cb-head'>vars.c</div><pre><code>#include &lt;stdio.h&gt;\n\nint main() {\n    int age = 25;\n    float price = 19.99;\n    char grade = 'A';\n\n    printf(\"سن: %d\\n\", age);\n    printf(\"قیمت: %.2f\\n\", price);\n    printf(\"نمره: %c\\n\", grade);\n    printf(\"حجم int: %lu بایت\\n\", sizeof(int));\n    return 0;\n}</code></pre></div>",
     "exercise": "یک متغیر double برای وزن و یک char برای حرف اول اسمت تعریف کن و هردو رو با printf چاپ کن (با %f و %c)."
    },
    {
     "title": "عملگرها",
     "content": "<p>عملگرهای محاسباتی (<code class='inline'>+ - * / %</code>)، مقایسه‌ای (<code class='inline'>== != &gt; &lt;</code>)، منطقی (<code class='inline'>&amp;&amp; || !</code>) مشابه اکثر زبان‌هاست. نکتهٔ مهم C: تقسیم دو عدد <b>صحیح (int)</b> نتیجهٔ صحیح می‌دهد (اعشار قطع می‌شود) — <code class='inline'>7 / 2</code> نتیجه‌اش <code class='inline'>3</code> است، نه ۳.۵! برای نتیجهٔ اعشاری باید حداقل یکی از دو عدد float باشد.</p><div class='code-block'><div class='cb-head'>ops.c</div><pre><code>int a = 7, b = 2;\nprintf(\"%d\\n\", a / b);        // 3 (قطع اعشار)\nprintf(\"%f\\n\", (float)a / b); // 3.500000\nprintf(\"%d\\n\", a % b);        // 1 (باقیمانده)</code></pre></div>",
     "exercise": "توضیح بده چرا 7/2 در C برابر 3 می‌شه، و چطور با (float) می‌شه نتیجهٔ اعشاری درست گرفت."
    },
    {
     "title": "شرط‌ها: if/else و switch",
     "content": "<p>ساختار if/else شبیه اکثر زبان‌هاست ولی با آکولاد به‌جای indentation. <code class='inline'>switch</code> برای مقایسهٔ یک متغیر با چند مقدار ثابت استفاده می‌شود — فراموش‌نکردن <code class='inline'>break</code> بعد از هر case حیاتی است، وگرنه اجرا به case بعدی هم «سرریز» می‌کند (Fall-through).</p><div class='code-block'><div class='cb-head'>switch.c</div><pre><code>int day = 3;\nswitch (day) {\n    case 1:\n        printf(\"شنبه\\n\");\n        break;\n    case 2:\n        printf(\"یکشنبه\\n\");\n        break;\n    default:\n        printf(\"روز دیگر\\n\");\n}</code></pre></div>",
     "exercise": "توضیح بده اگه break رو از case اول حذف کنی، برای day=1 دقیقاً چی چاپ می‌شه (نکته: fall-through)."
    },
    {
     "title": "حلقه‌ها: for، while و do-while",
     "content": "<p><code class='inline'>for</code> برای تعداد تکرار مشخص، <code class='inline'>while</code> برای تکرار تا وقتی شرط برقرار است، و <code class='inline'>do-while</code> شبیه while است ولی حداقل یک‌بار بدنه را قبل از چک‌کردن شرط اجرا می‌کند.</p><div class='code-block'><div class='cb-head'>loops.c</div><pre><code>for (int i = 0; i < 5; i++) {\n    printf(\"%d \", i);\n}\nprintf(\"\\n\");\n\nint n = 0;\ndo {\n    printf(\"حداقل یک‌بار اجرا می‌شه: %d\\n\", n);\n    n++;\n} while (n < 0); // شرط از اول غلطه ولی بازم یک‌بار اجرا شد</code></pre></div>",
     "exercise": "توضیح بده تفاوت while و do-while دقیقاً کجاست — یک مثال بزن که خروجی این دو با هم فرق کنه."
    },
    {
     "title": "توابع، آرایه و String",
     "content": "<p>تابع در C باید نوع بازگشتی مشخص داشته باشد (<code class='inline'>void</code> یعنی چیزی برنمی‌گرداند). <b>آرایه</b> بلوکی پیوسته از حافظه با اندازهٔ ثابت است. C اصلاً نوع <code class='inline'>string</code> مجزا ندارد — رشته فقط یک آرایه از <code class='inline'>char</code> است که با یک بایت صفر (<code class='inline'>'\\0'</code>) خاتمه می‌یابد.</p><div class='code-block'><div class='cb-head'>func_arr.c</div><pre><code>int square(int x) {\n    return x * x;\n}\n\nint main() {\n    int numbers[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d^2 = %d\\n\", numbers[i], square(numbers[i]));\n    }\n\n    char name[] = \"علی\"; // خودکار با '\\0' تمام می‌شه\n    printf(\"اسم: %s\\n\", name);\n    return 0;\n}</code></pre></div>",
     "exercise": "یک تابع sum_array بنویس که یک آرایهٔ int و طولش رو بگیره و مجموع اعضا رو برگردونه."
    }
   ],
   "quiz": [
    {
     "q": "چرا در C باید نوع هر متغیر را از قبل مشخص کرد؟",
     "options": [
      "اختیاری است",
      "C زبانی با تایپ ایستا (Static Typing) است",
      "فقط برای اعداد لازم است",
      "برای زیبایی کد است"
     ],
     "answer": 1,
     "explain": "برخلاف پایتون، کامپایلر C باید از قبل بداند هر متغیر چقدر حافظه نیاز دارد."
    },
    {
     "q": "نتیجهٔ 7/2 در C (وقتی هر دو int هستند) چیست؟",
     "options": [
      "3.5",
      "3",
      "4",
      "خطا"
     ],
     "answer": 1,
     "explain": "تقسیم دو عدد صحیح در C نتیجهٔ صحیح می‌دهد؛ قسمت اعشاری قطع می‌شود."
    },
    {
     "q": "فراموش‌کردن break در یک case از switch چه نتیجه‌ای دارد؟",
     "options": [
      "خطای کامپایل",
      "اجرا به case بعدی هم سرریز می‌کند (Fall-through)",
      "برنامه متوقف می‌شود",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "بدون break، کنترل اجرا به case‌های بعدی هم می‌رود."
    },
    {
     "q": "رشته (String) در C اساساً چیست؟",
     "options": [
      "یک نوع دادهٔ مجزا مثل پایتون",
      "آرایه‌ای از char که با بایت صفر ('\\0') خاتمه می‌یابد",
      "یک شیء کامل با متدهای آماده",
      "یک عدد صحیح"
     ],
     "answer": 1,
     "explain": "C نوع رشتهٔ مجزا ندارد؛ رشته قراردادی روی آرایهٔ کاراکتر است."
    },
    {
     "q": "تفاوت while و do-while چیست؟",
     "options": [
      "تفاوتی ندارند",
      "do-while حداقل یک‌بار بدنه را قبل از چک‌کردن شرط اجرا می‌کند",
      "while سریع‌تر است",
      "do-while فقط برای اعداد است"
     ],
     "answer": 1,
     "explain": "do-while شرط را بعد از اولین اجرا چک می‌کند."
    }
   ],
   "challenge": {
    "task": "برنامه‌ای بنویس که یک آرایه از ۱۰ عدد صحیح بگیره (مستقیم توی کد تعریفشون کن)، با یک تابع جدا بزرگ‌ترین عدد رو پیدا کنه، و با تابع دیگه‌ای میانگین اعداد رو حساب کنه. هر دو نتیجه رو با printf چاپ کن.",
    "hint1": "تابع find_max باید یک آرایهٔ int و طولش رو بگیره (چون در C آرایه طول خودش رو 'یادش نیست')، و یک int برگردونه.",
    "hint2": "برای میانگین، باید مجموع رو روی یک float یا با تبدیل صریح (float) تقسیم کنی تا اعشار قطع نشه.",
    "solution": "#include <stdio.h>\n\nint find_max(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    return max;\n}\n\nfloat average(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) sum += arr[i];\n    return (float)sum / size;\n}\n\nint main() {\n    int nums[10] = {4,8,15,16,23,42,7,2,9,11};\n    printf(\"بیشترین: %d\\n\", find_max(nums, 10));\n    printf(\"میانگین: %.2f\\n\", average(nums, 10));\n    return 0;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "Pointer: قلب واقعی زبان C",
     "content": "<p>یک <b>Pointer</b> متغیری است که به‌جای یک مقدار، <b>آدرس حافظهٔ</b> یک متغیر دیگر را نگه می‌دارد. عملگر <code class='inline'>&amp;</code> «آدرس» یک متغیر را می‌دهد؛ عملگر <code class='inline'>*</code> (Dereference) مقدار موجود در آن آدرس را می‌خواند. این مفهوم پایهٔ تقریباً همهٔ چیزهای پیشرفتهٔ C (آرایهٔ پویا، ساختمان داده، پاس‌دادن به تابع بدون کپی) است.</p><div class='code-block'><div class='cb-head'>pointer.c</div><pre><code>int x = 10;\nint *p = &x;   // p آدرس x رو نگه می‌داره\n\nprintf(\"مقدار x: %d\\n\", x);\nprintf(\"آدرس x: %p\\n\", (void*)&x);\nprintf(\"مقدار p (که همون آدرس x هست): %p\\n\", (void*)p);\nprintf(\"مقدار در آدرسی که p بهش اشاره می‌کنه: %d\\n\", *p);\n\n*p = 20; // تغییر مقدار از طریق pointer\nprintf(\"مقدار جدید x: %d\\n\", x); // حالا 20 شده!</code></pre></div>",
     "exercise": "توضیح بده چرا تغییر *p باعث تغییر خودِ x شد — این دقیقاً چه ارتباطی بین p و x نشون می‌ده؟"
    },
    {
     "title": "Struct و Enum",
     "content": "<p><code class='inline'>struct</code> اجازه می‌دهد چند متغیر با نوع‌های متفاوت را در یک واحد بسته‌بندی کنید — شبیه یک آبجکت سادهٔ بدون متد. <code class='inline'>enum</code> مجموعه‌ای از ثابت‌های نام‌دار (خواناتر از استفادهٔ اعداد خام) تعریف می‌کند.</p><div class='code-block'><div class='cb-head'>struct.c</div><pre><code>enum Status { PENDING, SHIPPED, DELIVERED };\n\nstruct Order {\n    int id;\n    float price;\n    enum Status status;\n};\n\nint main() {\n    struct Order o1 = {101, 250000, PENDING};\n    printf(\"سفارش #%d، قیمت %.0f، وضعیت: %d\\n\", o1.id, o1.price, o1.status);\n    o1.status = SHIPPED;\n    return 0;\n}</code></pre></div>",
     "exercise": "یک struct به اسم Student با فیلدهای name (آرایهٔ char)، age (int) و gpa (float) بساز و یک نمونه ازش با مقدار اولیه بساز و چاپش کن."
    },
    {
     "title": "Pointer به Function",
     "content": "<p>حتی خودِ توابع هم در حافظه آدرس دارند — می‌توان یک Pointer به تابع ساخت و آن را مثل متغیر پاس داد. این پایهٔ الگوهایی مثل Callback (که در جاوااسکریپت هم دیدید) در C است.</p><div class='code-block'><div class='cb-head'>funcptr.c</div><pre><code>int add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\n\nint calculate(int a, int b, int (*operation)(int, int)) {\n    return operation(a, b); // صدا زدن تابعی که از بیرون پاس داده شده\n}\n\nint main() {\n    printf(\"جمع: %d\\n\", calculate(3, 4, add));\n    printf(\"ضرب: %d\\n\", calculate(3, 4, multiply));\n    return 0;\n}</code></pre></div>",
     "exercise": "یک تابع subtract بساز و از calculate برای صدازدنش استفاده کن."
    },
    {
     "title": "کار با فایل: fopen، fread/fwrite، fclose",
     "content": "<p>کار با فایل در C دستی‌تر از پایتون است: <code class='inline'>fopen(نام, حالت)</code> فایل را باز می‌کند (<code class='inline'>\"w\"</code> نوشتن، <code class='inline'>\"r\"</code> خواندن، <code class='inline'>\"a\"</code> افزودن)، <code class='inline'>fprintf</code>/<code class='inline'>fscanf</code> برای نوشتن/خواندن متنی، و همیشه باید <code class='inline'>fclose</code> را در پایان صدا بزنید تا منابع آزاد شوند.</p><div class='code-block'><div class='cb-head'>file.c</div><pre><code>FILE *f = fopen(\"data.txt\", \"w\");\nif (f == NULL) {\n    printf(\"خطا در باز کردن فایل\\n\");\n    return 1;\n}\nfprintf(f, \"سلام از C\\n\");\nfclose(f);\n\nFILE *f2 = fopen(\"data.txt\", \"r\");\nchar buffer[100];\nfgets(buffer, 100, f2);\nprintf(\"خونده‌شده: %s\", buffer);\nfclose(f2);</code></pre></div>",
     "exercise": "توضیح بده چرا چک‌کردن f == NULL بعد از fopen مهمه — اگه فایل قابل باز شدن نباشه (مثلاً دسترسی نداشته باشی) و این چک رو نداشته باشی، چه اتفاقی می‌افته؟"
    },
    {
     "title": "Dynamic Memory: malloc، calloc، realloc، free",
     "content": "<p>آرایهٔ معمولی اندازهٔ ثابتی دارد که در زمان کامپایل مشخص می‌شود. برای حافظه‌ای که اندازه‌اش را فقط در زمان اجرا می‌دانید (مثلاً بر اساس ورودی کاربر)، از <b>Dynamic Memory</b> در Heap استفاده می‌کنید: <code class='inline'>malloc(بایت)</code> حافظه تخصیص می‌دهد (مقداردهی‌نشده)، <code class='inline'>calloc</code> مشابه ولی صفر می‌کند، <code class='inline'>realloc</code> اندازهٔ حافظهٔ قبلی را تغییر می‌دهد. <b>حیاتی‌ترین قانون:</b> هر <code class='inline'>malloc</code> باید دقیقاً یک <code class='inline'>free</code> داشته باشد — فراموش‌کردنش یعنی <b>Memory Leak</b>.</p><div class='code-block'><div class='cb-head'>dynamic.c</div><pre><code>int n = 5;\nint *arr = malloc(n * sizeof(int));\nif (arr == NULL) { printf(\"خطای حافظه\\n\"); return 1; }\n\nfor (int i = 0; i < n; i++) arr[i] = i * i;\nfor (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\nprintf(\"\\n\");\n\nfree(arr); // حیاتی! وگرنه Memory Leak\narr = NULL; // جلوگیری از استفادهٔ تصادفی بعد از free</code></pre></div>",
     "exercise": "توضیح بده Memory Leak دقیقاً چیه و چرا توی یه برنامهٔ سرور که ماه‌ها روشنه (نه یه اسکریپت کوچیک)، این مشکل فاجعه‌بارتره."
    }
   ],
   "quiz": [
    {
     "q": "عملگر & روی یک متغیر چه چیزی برمی‌گرداند؟",
     "options": [
      "مقدار متغیر",
      "آدرس حافظهٔ آن متغیر",
      "نوع متغیر",
      "اندازهٔ متغیر"
     ],
     "answer": 1,
     "explain": "& عملگر 'آدرس' است."
    },
    {
     "q": "عملگر * روی یک Pointer (Dereference) چه کاری انجام می‌دهد؟",
     "options": [
      "Pointer را حذف می‌کند",
      "مقدار موجود در آدرسی که Pointer به آن اشاره دارد را می‌خواند/می‌نویسد",
      "آدرس جدید می‌سازد",
      "نوع Pointer را تغییر می‌دهد"
     ],
     "answer": 1,
     "explain": "Dereference به شما دسترسی به مقدار واقعی پشت آدرس را می‌دهد."
    },
    {
     "q": "چرا هر malloc باید یک free مقابل داشته باشد؟",
     "options": [
      "اختیاری است",
      "وگرنه آن حافظه هرگز آزاد نمی‌شود (Memory Leak)",
      "free سرعت را زیاد می‌کند",
      "malloc خودش را پاک می‌کند"
     ],
     "answer": 1,
     "explain": "بدون free، حافظهٔ تخصیص‌یافته تا پایان برنامه اشغال می‌ماند."
    },
    {
     "q": "struct در C چه کاربردی دارد؟",
     "options": [
      "تعریف حلقه",
      "بسته‌بندی چند متغیر با نوع‌های متفاوت در یک واحد",
      "تعریف Pointer",
      "مدیریت فایل"
     ],
     "answer": 1,
     "explain": "struct شبیه یک رکورد/آبجکت ساده بدون متد است."
    },
    {
     "q": "چرا باید بعد از fopen مقدار بازگشتی را با NULL مقایسه کرد؟",
     "options": [
      "اختیاری است",
      "برای اطمینان از باز شدن موفق فایل قبل از استفاده از آن",
      "fopen هرگز NULL برنمی‌گرداند",
      "فقط برای فایل‌های بزرگ لازم است"
     ],
     "answer": 1,
     "explain": "اگر فایل باز نشود، استفاده از یک Pointer NULL باعث کرش برنامه می‌شود."
    }
   ],
   "challenge": {
    "task": "یک آرایهٔ پویا با malloc بساز که اندازه‌اش رو (فرضاً) یه متغیر n مشخص کنه، پرش کن با مربع اعداد ۰ تا n-1، چاپش کن، بعد با realloc اندازه‌ش رو دوبرابر کن و نصف دوم رو هم پر کن، در آخر free کن.",
    "hint1": "realloc(ptr, new_size) حافظهٔ قبلی رو حفظ می‌کنه و فقط اضافه‌ش می‌کنه؛ همیشه نتیجه رو توی یه متغیر جدید بگیر تا اگه realloc شکست خورد، Pointer اصلی رو گم نکنی.",
    "hint2": "بعد از realloc، فقط ایندکس‌های جدید (از n تا 2n-1) نیاز به مقداردهی دارن؛ ایندکس‌های قبلی دست‌نخورده می‌مونن.",
    "solution": "int n = 5;\nint *arr = malloc(n * sizeof(int));\nfor (int i = 0; i < n; i++) arr[i] = i * i;\n\nint *temp = realloc(arr, 2 * n * sizeof(int));\nif (temp == NULL) { printf(\"خطای realloc\\n\"); free(arr); return 1; }\narr = temp;\n\nfor (int i = n; i < 2*n; i++) arr[i] = i * i;\nfor (int i = 0; i < 2*n; i++) printf(\"%d \", arr[i]);\nprintf(\"\\n\");\n\nfree(arr);"
   }
  },
  {
   "lessons": [
    {
     "title": "Linked List از صفر",
     "content": "<p><b>Linked List</b> ساختمان‌داده‌ای است که هر عنصر (Node) هم یک مقدار و هم یک Pointer به عنصر بعدی نگه می‌دارد — برخلاف آرایه، اندازه‌اش می‌تواند در زمان اجرا به‌راحتی رشد کند (بدون نیاز به realloc کل بلوک).</p><div class='code-block'><div class='cb-head'>linkedlist.c</div><pre><code>struct Node {\n    int data;\n    struct Node *next;\n};\n\nstruct Node* create_node(int value) {\n    struct Node *n = malloc(sizeof(struct Node));\n    n->data = value;\n    n->next = NULL;\n    return n;\n}\n\nint main() {\n    struct Node *head = create_node(10);\n    head->next = create_node(20);\n    head->next->next = create_node(30);\n\n    struct Node *current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n    return 0;\n}</code></pre></div>",
     "exercise": "یک تابع بنویس که یک Linked List رو بگیره و مجموع همهٔ data هاش رو برگردونه (با پیمایش تا NULL)."
    },
    {
     "title": "Stack و Queue",
     "content": "<p><b>Stack</b> ساختاری LIFO (آخرین ورودی، اولین خروجی) است — مثل یک پشتهٔ بشقاب. <b>Queue</b> ساختاری FIFO (اولین ورودی، اولین خروجی) است — مثل صف نانوایی. هر دو معمولاً روی آرایه یا Linked List پیاده‌سازی می‌شوند.</p><div class='code-block'><div class='cb-head'>stack.c (روی آرایه)</div><pre><code>#define MAX 100\nint stack[MAX];\nint top = -1;\n\nvoid push(int value) {\n    if (top == MAX - 1) { printf(\"Stack پره\\n\"); return; }\n    stack[++top] = value;\n}\n\nint pop() {\n    if (top == -1) { printf(\"Stack خالیه\\n\"); return -1; }\n    return stack[top--];\n}\n\nint main() {\n    push(1); push(2); push(3);\n    printf(\"%d\\n\", pop()); // 3 - آخرین ورودی\n    printf(\"%d\\n\", pop()); // 2\n    return 0;\n}</code></pre></div>",
     "exercise": "با همین منطق، یک Queue ساده (با enqueue/dequeue روی آرایه) بساز که FIFO باشه، نه LIFO."
    },
    {
     "title": "Tree، Graph و Hash Table (مفهومی)",
     "content": "<p><b>Tree (درخت)</b> ساختاری سلسله‌مراتبی است — هر Node می‌تواند چند فرزند داشته باشد (مثل Binary Search Tree که هر Node حداکثر دو فرزند دارد و مرتب است). <b>Graph</b> عمومی‌تر است — Node ها می‌توانند به هر ترتیبی به هم وصل باشند (مثل شبکهٔ اجتماعی یا نقشهٔ جاده). <b>Hash Table</b> با یک تابع Hash، هر کلید را به یک اندیس آرایه تبدیل می‌کند تا جست‌وجو در زمان تقریباً ثابت (O(1)) انجام شود — پایهٔ dict در پایتون و Map در جاوااسکریپت دقیقاً همین است.</p>",
     "exercise": "توضیح بده چرا Hash Table برای جست‌وجوی سریع بهتر از پیمایش یک Linked List (که باید یکی‌یکی چک کنه) هست."
    },
    {
     "title": "الگوریتم‌های پایه و Bit Manipulation",
     "content": "<p>الگوریتم مرتب‌سازی <b>Bubble Sort</b> (ساده ولی کند، O(n²)) عناصر مجاور را مقایسه و جابه‌جا می‌کند. <b>Bit Manipulation</b> یعنی کار مستقیم با بیت‌های یک عدد با عملگرهای <code class='inline'>&amp; | ^ ~ &lt;&lt; &gt;&gt;</code> — بسیار سریع و در برنامه‌نویسی سیستمی/embedded پرکاربرد.</p><div class='code-block'><div class='cb-head'>bits.c</div><pre><code>int x = 5;      // باینری: 0101\nint y = x << 1; // شیفت به چپ: 1010 = 10\nint z = x & 1;  // چک زوج/فرد بودن: 0101 & 0001 = 1 (فرد)\nprintf(\"%d %d\\n\", y, z);</code></pre></div>",
     "exercise": "یک تابع is_even با Bit Manipulation (نه با %) بنویس که با & 1 چک کنه عدد زوجه یا فرد."
    },
    {
     "title": "مدیریت حافظهٔ پیشرفته: Stack در برابر Heap و ابزار Valgrind",
     "content": "<p>متغیرهای محلی معمولی روی <b>Stack</b> (حافظهٔ خودکار، سریع، محدود) قرار دارند و با خروج از تابع خودکار پاک می‌شوند. حافظهٔ malloc‌شده روی <b>Heap</b> است (دستی، بزرگ‌تر، ولی شما مسئول آزادسازی‌اش هستید). ابزارهایی مثل <b>Valgrind</b> برنامهٔ شما را اجرا و دقیقاً گزارش می‌دهند کجا Memory Leak یا دسترسی نامعتبر به حافظه دارید — استفادهٔ منظم از آن یک عادت حرفه‌ای در C است.</p>",
     "exercise": "توضیح بده چرا یک متغیر محلی که Address اش رو return می‌کنی (return &local_var;) یک باگ خطرناکه — بعد از خروج از تابع، اون حافظهٔ Stack دیگه معتبر نیست."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی Linked List با آرایه چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Linked List می‌تواند در زمان اجرا به‌راحتی رشد کند، بدون نیاز به یک بلوک پیوستهٔ ثابت",
      "آرایه فقط برای رشته است",
      "Linked List همیشه سریع‌تر است"
     ],
     "answer": 1,
     "explain": "هر Node جدا در حافظه است و فقط با Pointer به هم وصل می‌شود."
    },
    {
     "q": "Stack (پشته) بر چه اساسی کار می‌کند؟",
     "options": [
      "FIFO (اولین ورودی، اولین خروجی)",
      "LIFO (آخرین ورودی، اولین خروجی)",
      "تصادفی",
      "مرتب‌شده بر اساس مقدار"
     ],
     "answer": 1,
     "explain": "آخرین عنصری که push شده، اولین عنصری است که pop می‌شود."
    },
    {
     "q": "Hash Table چرا برای جست‌وجو سریع است؟",
     "options": [
      "چون داده را مرتب می‌کند",
      "چون با یک تابع Hash مستقیم اندیس مربوط به کلید را پیدا می‌کند، بدون پیمایش کامل",
      "چون از malloc استفاده نمی‌کند",
      "چون فقط اعداد را نگه می‌دارد"
     ],
     "answer": 1,
     "explain": "این باعث می‌شود جست‌وجو تقریباً در زمان ثابت (O(1)) انجام شود."
    },
    {
     "q": "چرا return کردن آدرس یک متغیر محلی (Stack) از یک تابع خطرناک است؟",
     "options": [
      "خطرناک نیست",
      "بعد از خروج از تابع، آن حافظهٔ Stack دیگر معتبر نیست و ممکن است بازنویسی شود",
      "سرعت را کم می‌کند",
      "فقط برای آرایه‌ها مشکل‌ساز است"
     ],
     "answer": 1,
     "explain": "Stack با خروج از تابع آزاد می‌شود؛ Pointer به آن یک 'Dangling Pointer' خطرناک است."
    },
    {
     "q": "ابزار Valgrind برای چه استفاده می‌شود؟",
     "options": [
      "کامپایل سریع‌تر کد",
      "تشخیص Memory Leak و دسترسی نامعتبر به حافظه",
      "نوشتن رابط کاربری",
      "مدیریت فایل"
     ],
     "answer": 1,
     "explain": "Valgrind برنامه را اجرا و مشکلات مدیریت حافظه را گزارش می‌دهد."
    }
   ],
   "challenge": {
    "task": "یک Stack واقعی با Linked List (نه آرایه) پیاده‌سازی کن: تابع push که یک Node جدید به اول لیست اضافه کنه، و تابع pop که اولین Node رو حذف و مقدارش رو برگردونه. با malloc/free درست کار کن.",
    "hint1": "برای push، Node جدید باید next اش به head فعلی اشاره کنه، بعد head رو به Node جدید تغییر بدی.",
    "hint2": "برای pop، باید مقدار head رو ذخیره کنی، head رو به head->next تغییر بدی، بعد Node قدیمی رو free کنی — دقیقاً به همین ترتیب، وگرنه دسترسی به حافظهٔ آزادشده پیش میاد.",
    "solution": "struct Node { int data; struct Node *next; };\nstruct Node *head = NULL;\n\nvoid push(int value) {\n    struct Node *n = malloc(sizeof(struct Node));\n    n->data = value;\n    n->next = head;\n    head = n;\n}\n\nint pop() {\n    if (head == NULL) { printf(\"خالیه\\n\"); return -1; }\n    struct Node *temp = head;\n    int value = temp->data;\n    head = head->next;\n    free(temp);\n    return value;\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "سیستم‌عامل مفهومی: Process و Thread",
     "content": "<p>یک <b>Process</b> یک برنامهٔ در حال اجرا با فضای حافظهٔ مستقل خودش است. یک <b>Thread</b> یک «مسیر اجرا» درون یک Process است — چند Thread در یک Process می‌توانند حافظه را با هم به اشتراک بگذارند (سریع‌تر از اشتراک بین Processها، ولی نیازمند مراقبت در برابر Race Condition). سیستم‌عامل با <b>Scheduler</b> تصمیم می‌گیرد کدام Process/Thread در هر لحظه روی CPU اجرا شود.</p>",
     "exercise": "توضیح بده چرا اشتراک حافظه بین Thread های یک Process، هم یک مزیت (سرعت) و هم یک خطر (Race Condition) محسوب می‌شه."
    },
    {
     "title": "System Call و برنامه‌نویسی لینوکس",
     "content": "<p><b>System Call</b> راهی است که یک برنامه از سیستم‌عامل درخواست سرویس می‌کند (باز کردن فایل، تخصیص حافظه، ارتباط شبکه) — توابعی مثل <code class='inline'>fopen</code> که دیدید، در پس‌صحنه یک System Call مثل <code class='inline'>open()</code> را صدا می‌زنند. برنامه‌نویسی لینوکس معمولاً مستقیم‌تر با این System Callها (مثل <code class='inline'>fork()</code> برای ساخت Process جدید) کار می‌کند.</p><div class='code-block'><div class='cb-head'>fork_example.c (فقط روی لینوکس/مک)</div><pre><code>#include &lt;unistd.h&gt;\n\nint main() {\n    pid_t pid = fork(); // Process فعلی رو کپی می‌کنه\n    if (pid == 0) {\n        printf(\"من فرزندم\\n\");\n    } else {\n        printf(\"من والدم، فرزندم pid=%d داره\\n\", pid);\n    }\n    return 0;\n}</code></pre></div>",
     "exercise": "توضیح بده fork() دقیقاً چه کاری انجام می‌ده — چرا بعدش دو تا خط متفاوت (هم پیام فرزند هم والد) چاپ می‌شه؟"
    },
    {
     "title": "مقدمه‌ای بر برنامه‌نویسی شبکه (Socket)",
     "content": "<p>ارتباط شبکه در سطح پایین با <b>Socket</b> انجام می‌شود — یک Socket «سرِ» یک ارتباط دوطرفه (مثل یک پریز تلفن) است. یک سرور Socket می‌سازد، آن را به یک پورت <code class='inline'>bind</code> می‌کند، <code class='inline'>listen</code> می‌کند تا اتصال بیاید، و با <code class='inline'>accept</code> اتصال را می‌پذیرد. همان چیزی که Node.js با <code class='inline'>http.createServer</code> در سطح خیلی بالاتر و ساده‌تر برایتان انجام می‌داد، در C در همین سطح پایین اتفاق می‌افتد.</p>",
     "exercise": "با توجه به چیزی که در Node.js یاد گرفتی (http.createServer)، توضیح بده اون یک خط کد Node، معادل چند مرحلهٔ دستی (Socket, bind, listen, accept) در C هست."
    },
    {
     "title": "مقدمه‌ای بر Embedded C",
     "content": "<p><b>Embedded C</b> برنامه‌نویسی برای میکروکنترلرها (مثل Arduino، STM32) است — سیستم‌هایی با حافظه و پردازش بسیار محدود، بدون سیستم‌عامل کامل. برنامه‌ها معمولاً مستقیم با <b>Register</b> های سخت‌افزاری (آدرس‌های حافظهٔ خاص که رفتار سخت‌افزار را کنترل می‌کنند) کار می‌کنند — مثلاً روشن‌کردن یک LED یعنی نوشتن یک بیت مشخص در یک آدرس حافظهٔ مشخص.</p>",
     "exercise": "توضیح بده چرا زبان C (نه پایتون یا جاوااسکریپت) انتخاب اصلی برای Embedded Systems است — به محدودیت حافظه و نیاز به کنترل دقیق سخت‌افزار فکر کن."
    },
    {
     "title": "مروری بر Compiler، Assembly و مفاهیم Kernel",
     "content": "<p>وقتی کد C را کامپایل می‌کنید، چند مرحله طی می‌شود: <b>Preprocessing</b> (پردازش #include/#define) → <b>Compilation</b> (تبدیل به <b>Assembly</b>، زبانی نزدیک به دستورات مستقیم CPU) → <b>Assembly to Machine Code</b> → <b>Linking</b> (اتصال به کتابخانه‌ها). <b>Kernel</b> هستهٔ سیستم‌عامل است — لایه‌ای که مستقیم با سخت‌افزار حرف می‌زند و منابع (CPU، حافظه، دستگاه‌ها) را بین همهٔ Processها مدیریت می‌کند؛ خودِ لینوکس تقریباً کاملاً به زبان C نوشته شده است.</p>",
     "exercise": "با gcc -S hello.c (اگه دسترسی داری) کد Assembly تولیدشده از برنامهٔ اولت رو ببین. حتی اگه نفهمیدی، توضیح بده چرا این خروجی خیلی طولانی‌تر و پیچیده‌تر از کد C ساده‌ای که نوشتی به‌نظر می‌رسه."
    },
    {
     "title": "Makefile، Header و برنامه‌های چندفایلی",
     "content": "<p>پروژهٔ واقعی C در چند فایل است: <code class='inline'>.h</code> اعلان توابع را دارد و <code class='inline'>.c</code> پیاده‌سازی را. <code class='inline'>#include guard</code> جلوی تعریف دوباره را می‌گیرد و <code class='inline'>Makefile</code> کامپایل را خودکار می‌کند.</p><div class='code-block'><div class='cb-head'>Makefile</div><pre><code>app: main.o math.o\n\tgcc -o app main.o math.o\n%.o: %.c\n\tgcc -Wall -c $&lt;</code></pre></div>",
     "exercise": "برنامه‌ای در سه فایل بنویس که با make ساخته شود."
    },
    {
     "title": "اشاره‌گر و حسابداری آدرس",
     "content": "<p>نام آرایه در بیشتر عبارت‌ها به اشاره‌گر به عنصر اول تبدیل می‌شود (decay). <code class='inline'>p+2</code> به اندازه‌ی دو عنصر (نه دو بایت) جلو می‌رود و <code class='inline'>p[3]</code> یعنی <code class='inline'>*(p+3)</code>. تفاوت دو اشاره‌گر به تعداد عنصر است. <code class='inline'>const</code> را درست بگذار: <code class='inline'>const int *p</code> (مقدار ثابت) در برابر <code class='inline'>int *const p</code> (خود اشاره‌گر ثابت).<div class='code-block'><div class='cb-head'>ptr.c</div><pre><code>#include &lt;stdio.h>\nint main(void){\n  int a[4]={10,20,30,40}; int *p=a;\n  printf(\"%d %d\\n\", *(p+2), p[3]);\n  printf(\"%ld\\n\", (long)((p+3)-p));\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "فرق sizeof آرایه و sizeof اشاره‌گر پارامتر تابع را با آزمایش نشان بده."
    },
    {
     "title": "حافظه: Stack، Heap و مدیریت نشت",
     "content": "<p>متغیرهای محلی روی Stack‌اند و با خروج از تابع نابود می‌شوند؛ <code class='inline'>malloc</code> روی Heap می‌گیرد و باید یک‌بار <code class='inline'>free</code> شود. خطاهای کلاسیک: نشت، free دوباره، استفاده پس از free و نوشتن خارج از محدوده. همیشه بازگشتی malloc را بررسی و بعد از free اشاره‌گر را NULL کن. با <code class='inline'>-fsanitize=address</code> یا Valgrind پیدایشان کن.<div class='code-block'><div class='cb-head'>heap.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;stdlib.h>\n#include &lt;string.h>\nint main(void){\n  char *buf = malloc(16);\n  if(!buf) return 1;\n  strcpy(buf, \"hello\");\n  printf(\"%s\\n\", buf);\n  free(buf); buf = NULL;\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "یک نشت عمدی بساز و با AddressSanitizer پیدایش کن."
    },
    {
     "title": "چیدمان struct: Padding و Alignment",
     "content": "<p>کامپایلر برای تراز (alignment) بین فیلدها فاصله می‌گذارد. ترتیب فیلدها اندازه را تغییر می‌دهد: بزرگ‌ها اول، کوچک‌ها آخر. <code class='inline'>offsetof</code> جابه‌جایی فیلد را می‌دهد. برای پروتکل شبکه‌ی دقیق به <code class='inline'>packed</code> نیاز است ولی دسترسی ناتراز کند یا خطرناک است.<div class='code-block'><div class='cb-head'>layout.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;stddef.h>\nstruct A { char c; int i; char d; };\nstruct B { int i; char c; char d; };\nint main(void){\n  printf(\"%zu %zu\\n\", sizeof(struct A), sizeof(struct B));\n  printf(\"%zu\\n\", offsetof(struct A, i));\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "struct یک بسته‌ی شبکه را طراحی و اندازه‌اش را با sizeof بسنج."
    },
    {
     "title": "اشاره‌گر تابع و Callback",
     "content": "<p>اشاره‌گر تابع امکان کد عمومی می‌دهد: <code class='inline'>qsort</code> مقایسه‌گر را از تو می‌گیرد. مقایسه‌گر را با <code class='inline'>(x>y)-(x<y)</code> بنویس تا از سرریز تفریق جلوگیری شود. جدول اشاره‌گر تابع (dispatch table) جایگزین زنجیره‌ی if/switch طولانی است.<div class='code-block'><div class='cb-head'>qsort.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;stdlib.h>\nstatic int cmp(const void *a, const void *b){\n  int x=*(const int*)a, y=*(const int*)b;\n  return (x>y)-(x&lt;y);\n}\nint main(void){\n  int v[]={5,2,9,1};\n  qsort(v,4,sizeof v[0],cmp);\n  for(int i=0;i&lt;4;i++) printf(\"%d \",v[i]);\n  puts(\"\");\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "آرایه‌ای از struct را بر اساس دو کلید مرتب کن."
    },
    {
     "title": "عملیات بیتی و Bitfield",
     "content": "<p>با <code class='inline'>|</code> بیت را روشن، با <code class='inline'>&~</code> خاموش و با <code class='inline'>>></code> و <code class='inline'>&</code> آزمون می‌کنی. همیشه از نوع بدون‌علامت (<code class='inline'>uint8_t</code> و ...) استفاده کن چون شیفت راست عدد علامت‌دار پیاده‌سازی-وابسته است. شیفت بیش از عرض نوع رفتار تعریف‌نشده است.<div class='code-block'><div class='cb-head'>bits.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;stdint.h>\n#define SET(x,n)   ((x) |=  (1u&lt;&lt;(n)))\n#define CLEAR(x,n) ((x) &amp;= ~(1u&lt;&lt;(n)))\n#define TEST(x,n)  (((x)>>(n)) &amp; 1u)\nint main(void){\n  uint8_t f=0; SET(f,3); SET(f,0); CLEAR(f,0);\n  printf(\"%u %u\\n\", f, TEST(f,3));\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "ماسک مجوزهای خواندن/نوشتن/اجرا را با بیت پیاده کن."
    },
    {
     "title": "رشته‌ها: ایمنی و اشتباهات رایج",
     "content": "<p>رشته در C آرایه‌ای از char با پایان <code class='inline'>'\\0'</code> است. <code class='inline'>strcpy</code> و <code class='inline'>gets</code> مرز را نمی‌شناسند و مایه‌ی Buffer Overflow‌اند. <code class='inline'>strncpy</code> همیشه ترمینیتور نمی‌گذارد. بهتر: <code class='inline'>snprintf(buf, sizeof buf, ...)</code> که طول را رعایت و خروجی را نول‌ترمینت می‌کند. طول را قبل از کپی بررسی کن.</p>",
     "exercise": "تابع کپی امنی بنویس که در صورت بزرگ‌بودن ورودی خطا برگرداند."
    },
    {
     "title": "ساختمان داده‌ی پویا: لیست پیوندی و جدول هش",
     "content": "<p>لیست پیوندی با <code class='inline'>malloc</code> هر گره و اشاره‌گر <code class='inline'>next</code> ساخته می‌شود؛ حذف باید پیش از آزادکردن گره، اشاره‌گر بعدی را ذخیره کند. جدول هش با تابع هش و زنجیره‌سازی برای برخورد جست‌وجوی میانگین O(1) می‌دهد. مالکیت حافظه را مشخص کن: چه کسی آزاد می‌کند؟<div class='code-block'><div class='cb-head'>list.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;stdlib.h>\ntypedef struct Node { int v; struct Node *next; } Node;\nNode *push(Node *h,int v){ Node *n=malloc(sizeof *n); n->v=v; n->next=h; return n; }\nint main(void){\n  Node *h=NULL; for(int i=1;i&lt;=3;i++) h=push(h,i);\n  for(Node *p=h;p;p=p->next) printf(\"%d \",p->v);\n  puts(\"\");\n  while(h){ Node *t=h->next; free(h); h=t; }\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "یک جدول هش رشته→عدد با زنجیره‌سازی بنویس."
    },
    {
     "title": "فایل، قالب باینری و Endianness",
     "content": "<p><code class='inline'>fopen/fread/fwrite</code> با بافر کار می‌کنند و هر خطایشان باید بررسی شود. در فایل/شبکه‌ی باینری ترتیب بایت (little/big endian) و اندازه‌ی ثابت نوع (<code class='inline'>uint32_t</code>) مهم است؛ struct را مستقیم ننویس (padding و endianness)، فیلد به فیلد بنویس و با <code class='inline'>htonl/ntohl</code> تبدیل کن.</p>",
     "exercise": "یک فرمت باینری با هدر نسخه بساز و بخوان."
    },
    {
     "title": "رفتار تعریف‌نشده (UB) و Sanitizer",
     "content": "<p>UB یعنی استاندارد هیچ تضمینی نمی‌دهد: سرریز عدد علامت‌دار، dereference اشاره‌گر NULL، دسترسی خارج از آرایه، متغیر مقداردهی‌نشده و تداخل aliasing. کامپایلر با فرض نبودن UB بهینه می‌کند و ممکن است کدی «امروز کار می‌کند» فردا خراب شود. همیشه با <code class='inline'>-Wall -Wextra -fsanitize=address,undefined</code> بساز و تست کن.</p>",
     "exercise": "کدی با سرریز عدد علامت‌دار بنویس و پیام UBSan را بخوان."
    },
    {
     "title": "همزمانی: pthread، Mutex و Atomic",
     "content": "<p>چند رشته که روی یک متغیر می‌نویسند Data Race می‌سازند. <code class='inline'>pthread_mutex</code> بخش بحرانی را محافظت می‌کند و C11 <code class='inline'>_Atomic</code> برای شمارنده‌های ساده سبک‌تر است. ترتیب قفل را ثابت نگه دار (Deadlock) و قفل را کوتاه نگه دار.<div class='code-block'><div class='cb-head'>thr.c</div><pre><code>#include &lt;stdio.h>\n#include &lt;pthread.h>\nstatic int counter=0; static pthread_mutex_t m=PTHREAD_MUTEX_INITIALIZER;\nstatic void *work(void *arg){ (void)arg; for(int i=0;i&lt;100000;i++){ pthread_mutex_lock(&amp;m); counter++; pthread_mutex_unlock(&amp;m);} return NULL; }\nint main(void){\n  pthread_t t[4];\n  for(int i=0;i&lt;4;i++) pthread_create(&amp;t[i],NULL,work,NULL);\n  for(int i=0;i&lt;4;i++) pthread_join(t[i],NULL);\n  printf(\"%d\\n\",counter);\n  return 0;\n}\n</code></pre></div></p>",
     "exercise": "نسخه‌ی بدون mutex را با ThreadSanitizer بسنج."
    },
    {
     "title": "سوکت POSIX: سرور TCP ساده",
     "content": "<p>جریان سرور: <code class='inline'>socket</code> → <code class='inline'>bind</code> → <code class='inline'>listen</code> → <code class='inline'>accept</code> → <code class='inline'>read/write</code> → <code class='inline'>close</code>. <code class='inline'>read</code> ممکن است کمتر از انتظار بخواند؛ در حلقه بخوان. برای چند کلاینت از <code class='inline'>poll</code>/<code class='inline'>epoll</code> یا رشته به ازای هر اتصال استفاده کن. ورودی شبکه را هرگز معتبر ندان.</p>",
     "exercise": "سرور echo بنویس که چند کلاینت را با poll پشتیبانی کند."
    },
    {
     "title": "ابزار حرفه‌ای: Makefile، gdb و تحلیل ایستا",
     "content": "<p>Makefile فقط فایل‌های تغییرکرده را دوباره کامپایل می‌کند. با <code class='inline'>-g -O0</code> در <b>gdb</b> breakpoint، watchpoint و backtrace بگیر. تحلیل ایستا (<code class='inline'>clang-tidy</code>، <code class='inline'>cppcheck</code>) و هشدارهای <code class='inline'>-Wall -Wextra -Werror</code> باگ را قبل از اجرا می‌گیرند. تست‌های واحد را با Unity یا Check بنویس.</p>",
     "exercise": "یک segfault را با gdb تا خط دقیق پیگیری کن."
    },
    {
     "title": "printf و scanf: قالب‌ها، پهنا و خطر Format String",
     "content": "<p><code>printf</code> با <b>مشخصه‌های قالب</b> کار می‌کند: <code>%d</code> (int)، <code>%ld</code> (long)، <code>%zu</code> (size_t)، <code>%f</code>، <code>%s</code>، <code>%p</code> و پهنا/دقت (<code>%8.3f</code>, <code>%-10s</code>, <code>%05d</code>). نوع اشتباه یعنی رفتار تعریف‌نشده. <b>هرگز</b> رشته‌ی کاربر را مستقیم قالب نکن (<code>printf(user)</code>)؛ همیشه <code>printf(\"%s\", user)</code> — وگرنه مهاجم با <code>%x</code> و <code>%n</code> حافظه می‌خواند/می‌نویسد. برای ورودی <code>scanf</code> مقدار بازگشتی (تعداد موفق) را چک کن و برای رشته پهنا بده (<code>%15s</code>).</p><div class='code-block'><div class='cb-head'>fmt.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n#include &lt;stddef.h&gt;\n\nint main(void) {\n    int n = 42; long big = 1234567890123L; size_t sz = sizeof(int); double pi = 3.14159265;\n    printf(&quot;[%d] [%5d] [%-5d] [%05d]\\n&quot;, n, n, n, n);\n    printf(&quot;[%ld] [%zu] [%x] [%o] [%c]\\n&quot;, big, sz, 255, 8, &#x27;A&#x27;);\n    printf(&quot;[%f] [%.2f] [%8.3f] [%e]\\n&quot;, pi, pi, pi, pi);\n    printf(&quot;[%s] [%10s] [%-10s] [%.3s]\\n&quot;, &quot;salam&quot;, &quot;salam&quot;, &quot;salam&quot;, &quot;salam&quot;);\n\n    const char *user = &quot;%s%s hello&quot;;          // ورودی مخرب فرضی\n    printf(&quot;امن: %s\\n&quot;, user);                // درست: قالب ثابت است\n    // printf(user);                          // ← آسیب‌پذیر! (Format String Bug)\n\n    int a = 0, b = 0;\n    int ok = sscanf(&quot;10 abc&quot;, &quot;%d %d&quot;, &amp;a, &amp;b);\n    printf(&quot;sscanf موفق: %d (a=%d)\\n&quot;, ok, a);\n    char word[8];\n    sscanf(&quot;verylongwordhere&quot;, &quot;%7s&quot;, word);   // پهنا = اندازه‌ی بافر - 1\n    printf(&quot;بریده‌شده: %s\\n&quot;, word);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>[42] [   42] [42   ] [00042]\n[1234567890123] [4] [ff] [10] [A]\n[3.141593] [3.14] [   3.142] [3.141593e+00]\n[salam] [     salam] [salam     ] [sal]\nامن: %s%s hello\nsscanf موفق: 1 (a=10)\nبریده‌شده: verylon</code></pre></div>",
     "exercise": "با %n مشکل Format String را در متن بخوان (اجرا نکن)."
    },
    {
     "title": "ارتقای عدد صحیح، سرریز و مقایسه‌ی signed/unsigned",
     "content": "<p>در C عملوندهای کوچک‌تر از <code>int</code> قبل از محاسبه به <code>int</code> <b>ارتقا</b> می‌یابند. مقایسه‌ی <code>signed</code> با <code>unsigned</code> ابتدا signed را به unsigned تبدیل می‌کند: <code>-1 &lt; 1u</code> نادرست است! سرریز <b>signed</b> رفتار تعریف‌نشده (UB) است ولی سرریز <b>unsigned</b> قاعده‌مند (پیمانه‌ی 2ⁿ). <code>size_t</code> بدون علامت است؛ حلقه‌ی <code>for (size_t i = n-1; i &gt;= 0; i--)</code> بی‌نهایت است. قبل از جمع، سرریز را با بررسی دامنه (یا <code>__builtin_add_overflow</code> در GCC/Clang) بگیر.</p><div class='code-block'><div class='cb-head'>intmath.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n#include &lt;stdint.h&gt;\n#include &lt;limits.h&gt;\n\nint main(void) {\n    unsigned char a = 200, b = 100;\n    printf(&quot;a+b = %d (ارتقا به int؛ سرریز نشد)\\n&quot;, a + b);\n    unsigned char c = (unsigned char)(a + b);\n    printf(&quot;به uchar برگردان: %u (پیمانه‌ی 256)\\n&quot;, c);\n\n    int neg = -1; unsigned pos = 1u;\n    printf(&quot;-1 &lt; 1u ؟ %s\\n&quot;, (neg &lt; pos) ? &quot;درست&quot; : &quot;نادرست (!)&quot;);\n\n    unsigned u = 0; u--;\n    printf(&quot;unsigned 0-1 = %u (سرریز تعریف‌شده)\\n&quot;, u);\n\n    int x = INT_MAX, r;\n    if (__builtin_add_overflow(x, 1, &amp;r)) puts(&quot;سرریز signed شناسایی شد (بدون UB)&quot;);\n\n    uint8_t small = 250; small += 10;\n    printf(&quot;uint8_t 250+10 = %u\\n&quot;, small);\n    printf(&quot;INT_MAX=%d  UINT_MAX=%u  SIZE_MAX=%zu\\n&quot;, INT_MAX, UINT_MAX, (size_t)SIZE_MAX);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>a+b = 300 (ارتقا به int؛ سرریز نشد)\nبه uchar برگردان: 44 (پیمانه‌ی 256)\n-1 &lt; 1u ؟ نادرست (!)\nunsigned 0-1 = 4294967295 (سرریز تعریف‌شده)\nسرریز signed شناسایی شد (بدون UB)\nuint8_t 250+10 = 4\nINT_MAX=2147483647  UINT_MAX=4294967295  SIZE_MAX=18446744073709551615</code></pre></div>",
     "exercise": "حلقه‌ی معکوس امن با size_t بنویس."
    },
    {
     "title": "const، volatile و restrict: وعده‌ها به کامپایلر",
     "content": "<p><code>const</code> قول «تغییر نمی‌دهم» است: <code>const char *p</code> (داده const)، <code>char *const p</code> (اشاره‌گر const)، یا هر دو. پارامتر اشاره‌گری که نمی‌نویسی را حتماً <code>const</code> کن. <code>volatile</code> می‌گوید «مقدار ممکن است بیرون از برنامه عوض شود» (ثبات سخت‌افزار، متغیر signal handler)، پس کامپایلر نباید خواندن/نوشتن را حذف کند؛ این <b>thread-safe نیست</b>. <code>restrict</code> (C99) قول می‌دهد دو اشاره‌گر به یک حافظه اشاره نمی‌کنند تا کامپایلر بهینه‌تر کند؛ نقض آن UB است.</p><div class='code-block'><div class='cb-head'>quals.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n\nstatic size_t count_a(const char *s) {            // s را تغییر نمی‌دهد\n    size_t n = 0; for (; *s; s++) n += (*s == &#x27;a&#x27;); return n;\n}\nstatic void add_arrays(int *restrict dst, const int *restrict x, const int *restrict y, int n) {\n    for (int i = 0; i &lt; n; i++) dst[i] = x[i] + y[i];   // قول: dst با x,y هم‌پوشانی ندارد\n}\nint main(void) {\n    const char *p1 = &quot;abc&quot;;           // داده const\n    char buf[] = &quot;banana&quot;;\n    char *const p2 = buf;             // اشاره‌گر const\n    p2[0] = &#x27;B&#x27;;                      // تغییر داده مجاز است\n    // p2 = buf + 1;                  // خطا: خود اشاره‌گر const است\n    // p1[0] = &#x27;X&#x27;;                   // خطا: داده const است\n    printf(&quot;%zu %zu %s %s\\n&quot;, count_a(&quot;banana&quot;), count_a(p1), p1, p2);\n\n    int x[3] = {1, 2, 3}, y[3] = {10, 20, 30}, out[3];\n    add_arrays(out, x, y, 3);\n    printf(&quot;%d %d %d\\n&quot;, out[0], out[1], out[2]);\n\n    volatile int flag = 0;            // مثلاً توسط signal handler تغییر می‌کند\n    flag = 1;\n    printf(&quot;volatile flag=%d\\n&quot;, flag);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>3 1 abc Banana\n11 22 33\nvolatile flag=1</code></pre></div>",
     "exercise": "یک تابع بنویس که دو پارامتر restrict بگیرد و هم‌پوشانی را توضیح بده."
    },
    {
     "title": "مدت عمر و پیوند: static و extern",
     "content": "<p>هر متغیر دو ویژگی دارد: <b>مدت ذخیره‌سازی</b> (automatic روی stack، static در طول برنامه، dynamic با malloc) و <b>پیوند</b> (linkage: داخلی یا خارجی). <code>static</code> داخل تابع یعنی مقدار بین فراخوانی‌ها می‌ماند (فقط یک بار مقداردهی). <code>static</code> روی تابع/متغیر سراسری یعنی فقط داخل همین فایل دیده شود (پیوند داخلی؛ جلوگیری از تداخل نام). <code>extern</code> اعلان می‌کند که تعریف جای دیگری است. متغیر سراسری را در header فقط <code>extern</code> اعلان کن و در یک .c تعریف کن.</p><div class='code-block'><div class='cb-head'>storage.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n\nint global_counter = 100;                     // پیوند خارجی (برای فایل‌های دیگر قابل دیدن)\nstatic int file_private = 7;                  // فقط در همین فایل\n\nstatic int next_id(void) {\n    static int id = 0;                        // یک بار مقداردهی؛ بین فراخوانی‌ها می‌ماند\n    return ++id;\n}\nstatic int automatic_var(void) {\n    int x = 0;                                // هر بار از نو\n    return ++x;\n}\nint main(void) {\n    int a = next_id(), b = next_id(), c = next_id();   // ترتیب ارزیابی آرگومان‌ها نامشخص است؛ جدا بگیر\n    printf(&quot;next_id: %d %d %d\\n&quot;, a, b, c);\n    printf(&quot;automatic: %d %d\\n&quot;, automatic_var(), automatic_var());\n    extern int global_counter;                // اعلان (تعریف بالاتر است)\n    global_counter += file_private;\n    printf(&quot;global=%d private=%d\\n&quot;, global_counter, file_private);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>next_id: 1 2 3\nautomatic: 1 1\nglobal=107 private=7</code></pre></div>",
     "exercise": "همین مثال را در دو فایل جدا با extern بنویس."
    },
    {
     "title": "پیش‌پردازنده: ماکروها، تله‌ها و _Generic",
     "content": "<p>ماکرو جایگزینی <b>متنی</b> است نه تابع: <code>#define SQR(x) x*x</code> با <code>SQR(1+2)</code> می‌شود <code>1+2*1+2</code>. قواعد: پارامتر و کل عبارت را پرانتزگذاری کن، پارامتری که چندبار ارزیابی می‌شود عوارض جانبی (<code>SQR(i++)</code>) می‌سازد، برای چند دستور از <code>do { ... } while (0)</code> استفاده کن. <code>#x</code> متن را رشته می‌کند و <code>##</code> چسباندن توکن است. C11 <code>_Generic</code> انتخاب بر اساس نوع می‌دهد (چندریختی ساده). ترجیح: <code>static inline</code> به‌جای ماکروی تابعی.</p><div class='code-block'><div class='cb-head'>macros.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n\n#define BAD_SQR(x)  x * x\n#define SQR(x)      ((x) * (x))\n#define LOG(fmt, ...) printf(&quot;[%s:%d] &quot; fmt &quot;\\n&quot;, __FILE__, __LINE__, __VA_ARGS__)\n#define STR(x) #x\n#define SWAP(T, a, b) do { T _t = (a); (a) = (b); (b) = _t; } while (0)\n#define TYPENAME(x) _Generic((x), int: &quot;int&quot;, double: &quot;double&quot;, char*: &quot;char*&quot;, default: &quot;other&quot;)\n\nint main(void) {\n    printf(&quot;BAD_SQR(1+2) = %d  (انتظار 9)\\n&quot;, BAD_SQR(1 + 2));\n    printf(&quot;SQR(1+2)     = %d\\n&quot;, SQR(1 + 2));\n    LOG(&quot;x=%d&quot;, 5);\n    printf(&quot;%s\\n&quot;, STR(hello world));\n    int a = 1, b = 2; SWAP(int, a, b);\n    printf(&quot;swap: %d %d\\n&quot;, a, b);\n    printf(&quot;%s %s %s %s\\n&quot;, TYPENAME(1), TYPENAME(2.5), TYPENAME(&quot;s&quot;), TYPENAME(&#x27;c&#x27;));\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>BAD_SQR(1+2) = 5  (انتظار 9)\nSQR(1+2)     = 9\n[src/04_macros.c:13] x=5\nhello world\nswap: 2 1\nint double char* int</code></pre></div>",
     "exercise": "یک ماکروی MIN امن و نسخه‌ی static inline آن بنویس."
    },
    {
     "title": "توابع متغیرآرگومان: stdarg.h",
     "content": "<p>تابعی مثل <code>printf</code> تعداد آرگومان نامشخص می‌گیرد: امضا <code>int f(int count, ...)</code>. با <code>va_list</code>، <code>va_start</code>، <code>va_arg(ap, type)</code> و <code>va_end</code> آرگومان‌ها خوانده می‌شوند. <b>خطر:</b> هیچ بررسی نوع و تعدادی وجود ندارد؛ باید قرارداد روشنی داشته باشی (شمارنده، نگهبان NULL یا رشته‌ی قالب) و نوع درست را بخوانی. آرگومان‌های کوچک‌تر ارتقا می‌یابند: <code>char</code>/<code>short</code> به <code>int</code> و <code>float</code> به <code>double</code>. برای تابع wrapper قالب‌دار از <code>vprintf</code>/<code>vsnprintf</code> استفاده کن.</p><div class='code-block'><div class='cb-head'>varargs.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdarg.h&gt;\n#include &lt;stdio.h&gt;\n\nstatic int sum(int count, ...) {\n    va_list ap; va_start(ap, count);\n    int total = 0;\n    for (int i = 0; i &lt; count; i++) total += va_arg(ap, int);\n    va_end(ap);\n    return total;\n}\nstatic double avg(int count, ...) {\n    va_list ap; va_start(ap, count);\n    double s = 0;\n    for (int i = 0; i &lt; count; i++) s += va_arg(ap, double);   // باید double بدهیم\n    va_end(ap);\n    return count ? s / count : 0;\n}\nstatic void logf_(const char *level, const char *fmt, ...) {\n    char buf[128];\n    va_list ap; va_start(ap, fmt);\n    vsnprintf(buf, sizeof buf, fmt, ap);\n    va_end(ap);\n    printf(&quot;[%s] %s\\n&quot;, level, buf);\n}\nint main(void) {\n    printf(&quot;sum = %d\\n&quot;, sum(4, 1, 2, 3, 4));\n    printf(&quot;avg = %.2f\\n&quot;, avg(3, 1.5, 2.5, 3.5));\n    logf_(&quot;INFO&quot;, &quot;user=%s id=%d&quot;, &quot;ali&quot;, 7);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>sum = 10\navg = 2.50\n[INFO] user=ali id=7</code></pre></div>",
     "exercise": "نسخه‌ای بنویس که با نگهبان NULL پایان یابد."
    },
    {
     "title": "qsort و bsearch: مرتب‌سازی با تابع مقایسه",
     "content": "<p><code>qsort(base, n, size, cmp)</code> هر آرایه‌ای را مرتب می‌کند؛ <code>cmp</code> دو <code>const void*</code> می‌گیرد و منفی/صفر/مثبت برمی‌گرداند. <b>تله‌ی کلاسیک:</b> <code>return a - b;</code> برای اعداد بزرگ سرریز می‌کند؛ از <code>(a &gt; b) - (a &lt; b)</code> استفاده کن. <code>bsearch</code> روی آرایه‌ی <b>مرتب‌شده</b> با همان comparator جست‌وجوی دودویی O(log n) می‌کند. <code>qsort</code> پایدار (stable) نیست؛ برای کلید چندگانه comparator را زنجیره‌ای بنویس.</p><div class='code-block'><div class='cb-head'>sort.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;string.h&gt;\n#include &lt;limits.h&gt;\n\ntypedef struct { const char *name; int age; } Person;\n\nstatic int cmp_int(const void *a, const void *b) {\n    int x = *(const int *)a, y = *(const int *)b;\n    return (x &gt; y) - (x &lt; y);                 // امن (a - b ممکن است سرریز کند)\n}\nstatic int cmp_person(const void *a, const void *b) {\n    const Person *p = a, *q = b;\n    if (p-&gt;age != q-&gt;age) return (p-&gt;age &gt; q-&gt;age) - (p-&gt;age &lt; q-&gt;age);\n    return strcmp(p-&gt;name, q-&gt;name);          // کلید دوم\n}\nint main(void) {\n    int v[] = {5, -3, INT_MAX, 0, INT_MIN, 42};\n    size_t n = sizeof v / sizeof v[0];\n    qsort(v, n, sizeof v[0], cmp_int);\n    for (size_t i = 0; i &lt; n; i++) printf(&quot;%d &quot;, v[i]);\n    puts(&quot;&quot;);\n    int key = 42; int *hit = bsearch(&amp;key, v, n, sizeof v[0], cmp_int);\n    printf(&quot;bsearch 42: %s (اندیس %td)\\n&quot;, hit ? &quot;پیدا شد&quot; : &quot;نیست&quot;, hit ? hit - v : -1);\n\n    Person ps[] = {{&quot;sara&quot;, 30}, {&quot;ali&quot;, 25}, {&quot;reza&quot;, 30}, {&quot;nima&quot;, 25}};\n    qsort(ps, 4, sizeof ps[0], cmp_person);\n    for (int i = 0; i &lt; 4; i++) printf(&quot;%s(%d) &quot;, ps[i].name, ps[i].age);\n    puts(&quot;&quot;);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>-2147483648 -3 0 5 42 2147483647 \nbsearch 42: پیدا شد (اندیس 4)\nali(25) nima(25) reza(30) sara(30)</code></pre></div>",
     "exercise": "مرتب‌سازی نزولی بر اساس سن را اضافه کن."
    },
    {
     "title": "مدیریت خطا: errno، strtol و الگوی goto cleanup",
     "content": "<p>توابع C خطا را با مقدار بازگشتی (<code>-1</code>، <code>NULL</code>) و <code>errno</code> گزارش می‌کنند؛ <code>errno</code> را <b>فوراً</b> بعد از خطا بخوان و <code>strerror(errno)</code> متن می‌دهد. <code>atoi</code> خطا را نشان نمی‌دهد؛ از <code>strtol</code> با <code>endptr</code> و بررسی <code>errno == ERANGE</code> استفاده کن. وقتی تابع چند منبع (حافظه، فایل) می‌گیرد، الگوی <code>goto cleanup</code> آزادسازی را یکجا و بدون تکرار انجام می‌دهد؛ یکی از کاربردهای معتبر <code>goto</code> در C.</p><div class='code-block'><div class='cb-head'>errs.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;errno.h&gt;\n#include &lt;limits.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;string.h&gt;\n\nstatic int parse_int(const char *s, int *out) {\n    char *end; errno = 0;\n    long v = strtol(s, &amp;end, 10);\n    if (end == s || *end != &#x27;\\0&#x27;) return -1;           // عدد نیست / زائد دارد\n    if (errno == ERANGE || v &gt; INT_MAX || v &lt; INT_MIN) return -2;   // خارج از دامنه\n    *out = (int)v; return 0;\n}\nstatic int process(const char *path) {\n    int rc = -1; char *buf = NULL; FILE *f = fopen(path, &quot;r&quot;);\n    if (!f) { printf(&quot;fopen(&#x27;%s&#x27;) شکست: %s\\n&quot;, path, strerror(errno)); goto cleanup; }\n    buf = malloc(64);\n    if (!buf) goto cleanup;\n    rc = 0;\ncleanup:\n    free(buf);\n    if (f) fclose(f);\n    return rc;\n}\nint main(void) {\n    const char *tests[] = {&quot;123&quot;, &quot;12x&quot;, &quot;&quot;, &quot;99999999999999999999&quot;};\n    for (int i = 0; i &lt; 4; i++) {\n        int v; int r = parse_int(tests[i], &amp;v);\n        printf(&quot;&#x27;%s&#x27; → %s\\n&quot;, tests[i], r == 0 ? &quot;ok&quot; : r == -1 ? &quot;عدد نیست&quot; : &quot;خارج از دامنه&quot;);\n    }\n    printf(&quot;process → %d\\n&quot;, process(&quot;/no/such/file&quot;));\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>&#x27;123&#x27; → ok\n&#x27;12x&#x27; → عدد نیست\n&#x27;&#x27; → عدد نیست\n&#x27;99999999999999999999&#x27; → خارج از دامنه\nfopen(&#x27;/no/such/file&#x27;) شکست: No such file or directory\nprocess → -1</code></pre></div>",
     "exercise": "یک تابع با سه منبع و cleanup چندمرحله‌ای بنویس."
    },
    {
     "title": "آرایه‌ی پویا (Vector) از صفر",
     "content": "<p>آرایه‌ی با اندازه‌ی رشد‌پذیر، پایه‌ی بسیاری از ساختارها است. قرارداد: <code>data</code>, <code>len</code>, <code>cap</code>. هنگام پر شدن ظرفیت را <b>دو برابر</b> کن (<code>realloc</code>) تا درج به‌طور سرشکن O(1) باشد. <b>قاعده‌ی حیاتی:</b> نتیجه‌ی <code>realloc</code> را اول در متغیر موقت بگذار؛ اگر شکست خورد <code>NULL</code> برمی‌گرداند و اشاره‌گر اصلی را اگر مستقیم بازنویسی کنی، حافظه نشت می‌کند. اشاره‌گر به عناصر بعد از رشد نامعتبر می‌شود (مثل iterator invalidation).</p><div class='code-block'><div class='cb-head'>vec.c — gcc -std=c11 -Wall -Wextra -fsanitize=address,undefined</div><pre><code>#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\ntypedef struct { int *data; size_t len, cap; } Vec;\n\nstatic int vec_push(Vec *v, int x) {\n    if (v-&gt;len == v-&gt;cap) {\n        size_t ncap = v-&gt;cap ? v-&gt;cap * 2 : 2;\n        int *tmp = realloc(v-&gt;data, ncap * sizeof *tmp);   // نتیجه را موقت نگه دار\n        if (!tmp) return -1;                              // data قدیمی هنوز معتبر است\n        v-&gt;data = tmp; v-&gt;cap = ncap;\n    }\n    v-&gt;data[v-&gt;len++] = x;\n    return 0;\n}\nint main(void) {\n    Vec v = {0};\n    size_t last_cap = 0;\n    for (int i = 0; i &lt; 20; i++) {\n        vec_push(&amp;v, i * i);\n        if (v.cap != last_cap) { printf(&quot;len=%zu → cap=%zu\\n&quot;, v.len, v.cap); last_cap = v.cap; }\n    }\n    printf(&quot;v[19]=%d  مجموع طول=%zu\\n&quot;, v.data[19], v.len);\n    free(v.data);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>len=1 → cap=2\nlen=3 → cap=4\nlen=5 → cap=8\nlen=9 → cap=16\nlen=17 → cap=32\nv[19]=361  مجموع طول=20</code></pre></div>",
     "exercise": "تابع vec_pop و vec_shrink_to_fit را اضافه کن."
    },
    {
     "title": "Arena Allocator: تخصیص سریع و آزادسازی یکجا",
     "content": "<p>تخصیص مکرر با <code>malloc</code>/<code>free</code> کند و پرخطا (نشت، آزادسازی دوباره) است. وقتی چند شیء با <b>عمر مشترک</b> دارید (مثلاً همه‌ی نودهای یک parse)، از <b>arena</b> استفاده کن: یک بلوک بزرگ می‌گیری، هر تخصیص فقط یک اشاره‌گر را جلو می‌برد (O(1)، بدون header)، و در پایان همه را با یک <code>free</code> یا reset رها می‌کنی. باید <b>تراز</b> (alignment) را رعایت کنی. محدودیت: تک‌تک اشیاء آزاد نمی‌شوند.</p><div class='code-block'><div class='cb-head'>arena.c — gcc -std=c11 -Wall -Wextra -fsanitize=address,undefined</div><pre><code>#include &lt;stdint.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\ntypedef struct { unsigned char *base; size_t cap, off; } Arena;\n\nstatic Arena arena_new(size_t cap) { return (Arena){ malloc(cap), cap, 0 }; }\nstatic void *arena_alloc(Arena *a, size_t n, size_t align) {\n    size_t p = (a-&gt;off + (align - 1)) &amp; ~(align - 1);       // تراز کردن\n    if (p + n &gt; a-&gt;cap) return NULL;\n    a-&gt;off = p + n;\n    return a-&gt;base + p;\n}\ntypedef struct Node { int v; struct Node *next; } Node;\n\nint main(void) {\n    Arena a = arena_new(1024);\n    char *c = arena_alloc(&amp;a, 1, 1);\n    double *d = arena_alloc(&amp;a, sizeof *d, _Alignof(double));\n    printf(&quot;آدرس double بر ۸ بخش‌پذیر؟ %s\\n&quot;, ((uintptr_t)d % 8 == 0) ? &quot;بله&quot; : &quot;نه&quot;);\n    Node *head = NULL;\n    for (int i = 0; i &lt; 5; i++) {\n        Node *n = arena_alloc(&amp;a, sizeof *n, _Alignof(Node));\n        n-&gt;v = i; n-&gt;next = head; head = n;\n    }\n    for (Node *n = head; n; n = n-&gt;next) printf(&quot;%d &quot;, n-&gt;v);\n    printf(&quot;\\nمصرف: %zu از %zu بایت\\n&quot;, a.off, a.cap);\n    (void)c;\n    free(a.base);                       // همه‌ی نودها با یک free آزاد شدند\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>آدرس double بر ۸ بخش‌پذیر؟ بله\n4 3 2 1 0 \nمصرف: 96 از 1024 بایت</code></pre></div>",
     "exercise": "تابع arena_reset بنویس و دوباره استفاده کن."
    },
    {
     "title": "اعداد اعشاری: IEEE 754، NaN و مقایسه‌ی امن",
     "content": "<p><code>float</code>/<code>double</code> اعداد را دودویی تقریب می‌زنند: <code>0.1 + 0.2 != 0.3</code>. هرگز با <code>==</code> مقایسه نکن؛ از تلورانس <code>fabs(a-b) &lt;= eps * max(|a|,|b|)</code> استفاده کن. مقدارهای ویژه: <code>INFINITY</code> (تقسیم بر صفر) و <code>NAN</code> که با هیچ چیز (حتی خودش) برابر نیست؛ تست با <code>isnan</code>. جمع اعداد با بزرگی بسیار متفاوت دقت را از دست می‌دهد (جمع کاهنده‌ی Kahan کمک می‌کند). برای پول از عدد صحیح (کوچک‌ترین واحد) استفاده کن. با <code>-ffast-math</code> همه‌ی این ضمانت‌ها از بین می‌روند.</p><div class='code-block'><div class='cb-head'>floats.c — gcc -std=c11 -Wall -Wextra -O0 -lm</div><pre><code>#include &lt;float.h&gt;\n#include &lt;math.h&gt;\n#include &lt;stdio.h&gt;\n\nstatic int nearly_equal(double a, double b, double eps) {\n    return fabs(a - b) &lt;= eps * fmax(fabs(a), fabs(b));\n}\nint main(void) {\n    double s = 0.1 + 0.2;\n    printf(&quot;0.1+0.2 = %.17g  == 0.3 ? %s\\n&quot;, s, s == 0.3 ? &quot;بله&quot; : &quot;خیر&quot;);\n    printf(&quot;nearly_equal: %s\\n&quot;, nearly_equal(s, 0.3, 1e-12) ? &quot;بله&quot; : &quot;خیر&quot;);\n\n    double zero = 0.0, inf = 1.0 / zero, nan = NAN;\n    printf(&quot;1/0 = %f   0/0 = %f\\n&quot;, inf, nan);\n    printf(&quot;nan == nan ؟ %s | isnan ؟ %s\\n&quot;, nan == nan ? &quot;بله&quot; : &quot;خیر&quot;, isnan(nan) ? &quot;بله&quot; : &quot;خیر&quot;);\n\n    float f = 16777216.0f;\n    printf(&quot;float 2^24 + 1 = %.1f (گم شد)\\n&quot;, f + 1.0f);\n\n    double naive = 0, comp = 0, c = 0;\n    for (int i = 0; i &lt; 1000000; i++) {          // جمع ۰٫۱ به تعداد یک میلیون\n        naive += 0.1;\n        double y = 0.1 - c, t = comp + y; c = (t - comp) - y; comp = t;   // Kahan\n    }\n    printf(&quot;ساده: %.6f | Kahan: %.6f | درست: 100000\\n&quot;, naive, comp);\n    printf(&quot;DBL_EPSILON = %g\\n&quot;, DBL_EPSILON);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>0.1+0.2 = 0.30000000000000004  == 0.3 ? خیر\nnearly_equal: بله\n1/0 = inf   0/0 = nan\nnan == nan ؟ خیر | isnan ؟ بله\nfloat 2^24 + 1 = 16777216.0 (گم شد)\nساده: 100000.000001 | Kahan: 100000.000000 | درست: 100000\nDBL_EPSILON = 2.22045e-16</code></pre></div>",
     "exercise": "مقایسه را برای اعداد نزدیک صفر هم درست کن."
    },
    {
     "title": "ماشین حالت با جدول اشاره‌گر تابع",
     "content": "<p>به‌جای <code>switch</code> تو در تو، ماشین حالت را با <b>جدول گذار</b> بساز: آرایه‌ای از <code>{حالت فعلی، رویداد، حالت بعدی، عمل}</code> یا آرایه‌ی دوبعدی با اندیس (حالت، رویداد). افزودن حالت/رویداد فقط افزودن یک سطر است و تحلیل کامل‌بودن آسان‌تر می‌شود. این الگو در پروتکل‌ها، رابط‌های embedded و parserها رایج است. <code>enum</code> با آخرین عضو <code>_COUNT</code> اندازه‌ی جدول را می‌دهد و <code>_Static_assert</code> از ناقص‌ماندن جدول جلوگیری می‌کند.</p><div class='code-block'><div class='cb-head'>fsm.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdio.h&gt;\n\ntypedef enum { LOCKED, UNLOCKED, STATE_COUNT } State;\ntypedef enum { COIN, PUSH, EVENT_COUNT } Event;\ntypedef struct { State next; void (*action)(void); } Transition;\n\nstatic void unlock(void) { puts(&quot;  → قفل باز شد&quot;); }\nstatic void lock(void)   { puts(&quot;  → قفل بسته شد&quot;); }\nstatic void thanks(void) { puts(&quot;  → سکه‌ی اضافه، ممنون&quot;); }\nstatic void deny(void)   { puts(&quot;  → ابتدا سکه بیندازید&quot;); }\n\nstatic const Transition table[STATE_COUNT][EVENT_COUNT] = {\n    [LOCKED]   = { [COIN] = { UNLOCKED, unlock }, [PUSH] = { LOCKED,   deny  } },\n    [UNLOCKED] = { [COIN] = { UNLOCKED, thanks }, [PUSH] = { LOCKED,   lock  } },\n};\n_Static_assert(sizeof(table) / sizeof(table[0]) == STATE_COUNT, &quot;جدول ناقص است&quot;);\n\nint main(void) {\n    const char *ename[] = {&quot;COIN&quot;, &quot;PUSH&quot;};\n    State s = LOCKED;\n    Event seq[] = {PUSH, COIN, COIN, PUSH, PUSH};\n    for (int i = 0; i &lt; 5; i++) {\n        printf(&quot;حالت %d + %s\\n&quot;, s, ename[seq[i]]);\n        Transition t = table[s][seq[i]];\n        t.action(); s = t.next;\n    }\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>حالت 0 + PUSH\n  → ابتدا سکه بیندازید\nحالت 0 + COIN\n  → قفل باز شد\nحالت 1 + COIN\n  → سکه‌ی اضافه، ممنون\nحالت 1 + PUSH\n  → قفل بسته شد\nحالت 0 + PUSH\n  → ابتدا سکه بیندازید</code></pre></div>",
     "exercise": "یک حالت BROKEN اضافه کن."
    },
    {
     "title": "نگاشت فایل در حافظه: mmap",
     "content": "<p><code>mmap</code> محتوای فایل را مستقیم در فضای آدرس پردازه می‌گذارد؛ خواندن فایل شبیه دسترسی به آرایه است و سیستم‌عامل صفحه‌ها را تنبل بارگذاری می‌کند (بدون کپی اضافه به بافر کاربر). برای فایل‌های بزرگ و دسترسی تصادفی عالی است. مراحل: <code>open</code>، <code>fstat</code> (اندازه)، <code>mmap(NULL, size, PROT_READ, MAP_PRIVATE, fd, 0)</code>، استفاده، <code>munmap</code>. نکته‌ها: فایل خالی را نمی‌شود map کرد، کوچک‌شدن فایل توسط پردازه‌ی دیگر می‌تواند <code>SIGBUS</code> بدهد، و خطای I/O به‌جای مقدار بازگشتی به سیگنال تبدیل می‌شود.</p><div class='code-block'><div class='cb-head'>mmap.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#define _POSIX_C_SOURCE 200809L\n#include &lt;fcntl.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n#include &lt;sys/mman.h&gt;\n#include &lt;sys/stat.h&gt;\n#include &lt;unistd.h&gt;\n\nint main(void) {\n    const char *path = &quot;/tmp/mmap_demo.txt&quot;;\n    FILE *f = fopen(path, &quot;w&quot;);\n    fputs(&quot;alpha\\nbeta\\ngamma\\nbeta\\n&quot;, f); fclose(f);\n\n    int fd = open(path, O_RDONLY);\n    struct stat st; fstat(fd, &amp;st);\n    const char *data = mmap(NULL, (size_t)st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);\n    if (data == MAP_FAILED) { perror(&quot;mmap&quot;); return 1; }\n    close(fd);                                  // بعد از map لازم نیست باز بماند\n\n    int lines = 0, beta = 0;\n    for (off_t i = 0; i &lt; st.st_size; i++) lines += (data[i] == &#x27;\\n&#x27;);\n    for (const char *p = data; (p = strstr(p, &quot;beta&quot;)); p += 4) beta++;\n    printf(&quot;اندازه=%lld بایت، خطوط=%d، تعداد beta=%d\\n&quot;, (long long)st.st_size, lines, beta);\n    munmap((void *)data, (size_t)st.st_size);\n    unlink(path);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>اندازه=22 بایت، خطوط=4، تعداد beta=2</code></pre></div>",
     "exercise": "فایل را با MAP_SHARED و PROT_WRITE تغییر بده."
    },
    {
     "title": "سیگنال‌ها: sigaction و handler امن",
     "content": "<p>سیگنال (SIGINT، SIGTERM، SIGALRM) بازه‌ی اجرای عادی را قطع می‌کند. برای ثبت handler از <code>sigaction</code> (قابل‌پیش‌بینی‌تر از <code>signal</code>) استفاده کن. قواعد سخت: داخل handler فقط توابع <b>async-signal-safe</b> (مثل <code>write</code>، <code>_exit</code>) صدا بزن، نه <code>printf</code>/<code>malloc</code>؛ کار اصلی را در حلقه‌ی اصلی بکن و handler فقط یک پرچم <code>volatile sig_atomic_t</code> را عوض کند. الگوی خاموشی تمیز: handler پرچم می‌گذارد و حلقه‌ی اصلی بیرون می‌آید.</p><div class='code-block'><div class='cb-head'>sig.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#define _POSIX_C_SOURCE 200809L\n#include &lt;signal.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n#include &lt;unistd.h&gt;\n\nstatic volatile sig_atomic_t got = 0;\nstatic void on_signal(int sig) { got = sig; }        // فقط پرچم\n\nint main(void) {\n    struct sigaction sa; memset(&amp;sa, 0, sizeof sa);\n    sa.sa_handler = on_signal; sigemptyset(&amp;sa.sa_mask);\n    sigaction(SIGUSR1, &amp;sa, NULL);\n    sigaction(SIGTERM, &amp;sa, NULL);\n\n    kill(getpid(), SIGUSR1);                          // به خودمان سیگنال می‌فرستیم\n    if (got) printf(&quot;سیگنال %d (SIGUSR1=%d) گرفته شد\\n&quot;, got, SIGUSR1);\n    got = 0;\n\n    alarm(1);                                         // ۱ ثانیه‌ی دیگر SIGALRM\n    sa.sa_handler = on_signal; sigaction(SIGALRM, &amp;sa, NULL);\n    pause();                                          // تا رسیدن سیگنال\n    printf(&quot;SIGALRM=%d گرفته شد، خاموشی تمیز\\n&quot;, got == SIGALRM);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>سیگنال 10 (SIGUSR1=10) گرفته شد\nSIGALRM=1 گرفته شد، خاموشی تمیز</code></pre></div>",
     "exercise": "SIGINT را بگیر و حلقه‌ی while(!stop) بساز."
    },
    {
     "title": "pipe، fork و exec: پردازه‌ی فرزند و ارتباط",
     "content": "<p><code>fork()</code> پردازه را کپی می‌کند: در فرزند ۰ و در والد PID فرزند را برمی‌گرداند. <code>pipe(fd)</code> یک کانال یک‌طرفه می‌سازد (<code>fd[0]</code> خواندن، <code>fd[1]</code> نوشتن)؛ هر طرف باید انتهای بلااستفاده را ببندد، وگرنه EOF هرگز نمی‌رسد. <code>exec</code> برنامه‌ی دیگری را جایگزین پردازه می‌کند و <code>waitpid</code> از «زامبی» ماندن فرزند جلوگیری و کد خروج را می‌دهد. <code>dup2</code> خروجی استاندارد را به pipe وصل می‌کند (پایه‌ی عملکرد shell).</p><div class='code-block'><div class='cb-head'>fork.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#define _POSIX_C_SOURCE 200809L\n#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n#include &lt;sys/wait.h&gt;\n#include &lt;unistd.h&gt;\n\nint main(void) {\n    int fd[2];\n    if (pipe(fd) == -1) { perror(&quot;pipe&quot;); return 1; }\n    pid_t pid = fork();\n    if (pid == 0) {                       // فرزند: خروجی echo را به pipe می‌فرستد\n        close(fd[0]);\n        dup2(fd[1], STDOUT_FILENO); close(fd[1]);\n        execlp(&quot;echo&quot;, &quot;echo&quot;, &quot;hello from child&quot;, (char *)NULL);\n        _exit(127);                       // اگر exec شکست خورد\n    }\n    close(fd[1]);                         // والد فقط می‌خواند\n    char buf[64]; ssize_t n = read(fd[0], buf, sizeof buf - 1);\n    buf[n &gt; 0 ? n : 0] = &#x27;\\0&#x27;;\n    close(fd[0]);\n    int status; waitpid(pid, &amp;status, 0);\n    printf(&quot;والد خواند: %s&quot;, buf);\n    printf(&quot;کد خروج فرزند: %d\\n&quot;, WEXITSTATUS(status));\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>والد خواند: hello from child\nکد خروج فرزند: 0</code></pre></div>",
     "exercise": "فرزند دوم بساز که ورودی را از pipe بخواند (مثل wc)."
    },
    {
     "title": "ویژگی‌های C99/C11: مقداردهی نام‌دار، compound literal و static_assert",
     "content": "<p>C مدرن امکانات مفیدی دارد: <b>designated initializer</b> (<code>{ .x = 1, [3] = 9 }</code>) فیلدها/اندیس‌ها را نام‌دار مقداردهی می‌کند (خوانا و ایمن در برابر تغییر ترتیب)، <b>compound literal</b> (<code>(Point){1,2}</code>) شیء موقت می‌سازد، <b>VLA</b> آرایه‌ی با طول زمان اجرا (احتیاط: روی stack)، <code>_Static_assert</code> بررسی زمان کامپایل، <code>bool</code> از <code>stdbool.h</code>، <code>inline</code>، <code>//</code> کامنت، اعلان متغیر در <code>for</code>، struct بی‌نام داخلی (anonymous) و <code>_Alignas</code>. استاندارد را صریح بده (<code>-std=c11</code>).</p><div class='code-block'><div class='cb-head'>modern.c — gcc -std=c11 -Wall -Wextra -O0</div><pre><code>#include &lt;stdbool.h&gt;\n#include &lt;stdio.h&gt;\n\ntypedef struct { int x, y; } Point;\ntypedef struct { const char *name; bool active; union { int id; float score; }; } Item;   // union بی‌نام\n\nstatic void print_point(Point p) { printf(&quot;(%d,%d) &quot;, p.x, p.y); }\n_Static_assert(sizeof(int) &gt;= 4, &quot;int باید حداقل ۴ بایت باشد&quot;);\n\nint main(void) {\n    int table[6] = { [1] = 10, [4] = 40 };                    // اندیس‌های نام‌دار\n    Point p = { .y = 5, .x = 2 };                             // ترتیب مهم نیست\n    Item it = { .name = &quot;sib&quot;, .active = true, .id = 7 };\n    printf(&quot;table: &quot;); for (int i = 0; i &lt; 6; i++) printf(&quot;%d &quot;, table[i]);\n    printf(&quot;\\np=(%d,%d) item=%s/%d/%d\\n&quot;, p.x, p.y, it.name, it.active, it.id);\n    print_point((Point){ 8, 9 }); puts(&quot;← compound literal&quot;);\n\n    int n = 4;\n    int vla[n];                                               // VLA\n    for (int i = 0; i &lt; n; i++) vla[i] = i * i;\n    printf(&quot;VLA: %d %d %d %d | sizeof=%zu\\n&quot;, vla[0], vla[1], vla[2], vla[3], sizeof vla);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی با gcc 13):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>table: 0 10 0 0 40 0 \np=(2,5) item=sib/1/7\n(8,9) ← compound literal\nVLA: 0 1 4 9 | sizeof=16</code></pre></div>",
     "exercise": "یک آرایه‌ی ثابت از struct با designated initializer بساز."
    },
    {
     "title": "جدول هش (Hash Table) با زنجیره‌سازی از صفر",
     "content": "<p>جدول هش کلید رشته‌ای را با یک تابع هش (اینجا djb2) به یک «سطل» نگاشت می‌کند؛ برخوردها با <b>لیست پیوندی در هر سطل</b> (separate chaining) حل می‌شوند. میانگین درج/جست‌وجو O(1) است به شرط توزیع خوب. نکته‌ها: اندازه‌ی جدول را <b>عدد اول</b> بگیر (با توان ۲، djb2 توزیع بدی می‌دهد)؛ کلید را با <code>strdup</code> کپی کن تا مالک آن باشی؛ حذف با «اشاره‌گر به اشاره‌گر» (<code>Entry **pp</code>) بدون حالت خاصِ سر لیست انجام می‌شود؛ در پایان همه چیز را آزاد کن (با ASan بررسی شد). برای رشد، وقتی ضریب بار (count/nb) از ~0.75 گذشت دوباره هش (rehash) کن.</p><div class='code-block'><div class='cb-head'>hash.c — gcc -std=c11 -Wall -Wextra -fsanitize=address,undefined</div><pre><code>#define _POSIX_C_SOURCE 200809L\n#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;string.h&gt;\n\ntypedef struct Entry { char *key; int value; struct Entry *next; } Entry;\ntypedef struct { Entry **buckets; size_t nb, count; } Table;\n\nstatic unsigned long djb2(const char *s) {\n    unsigned long h = 5381; int c;\n    while ((c = (unsigned char)*s++)) h = h * 33 + c;\n    return h;\n}\nstatic Table *table_new(size_t nb) {\n    Table *t = malloc(sizeof *t);\n    t-&gt;buckets = calloc(nb, sizeof *t-&gt;buckets); t-&gt;nb = nb; t-&gt;count = 0;\n    return t;\n}\nstatic Entry *table_find(Table *t, const char *k) {\n    for (Entry *e = t-&gt;buckets[djb2(k) % t-&gt;nb]; e; e = e-&gt;next)\n        if (strcmp(e-&gt;key, k) == 0) return e;\n    return NULL;\n}\nstatic void table_put(Table *t, const char *k, int v) {\n    Entry *e = table_find(t, k);\n    if (e) { e-&gt;value = v; return; }                 // به‌روزرسانی\n    size_t i = djb2(k) % t-&gt;nb;\n    e = malloc(sizeof *e);\n    e-&gt;key = strdup(k); e-&gt;value = v; e-&gt;next = t-&gt;buckets[i];   // درج در ابتدای زنجیره\n    t-&gt;buckets[i] = e; t-&gt;count++;\n}\nstatic int table_remove(Table *t, const char *k) {\n    Entry **pp = &amp;t-&gt;buckets[djb2(k) % t-&gt;nb];       // اشاره‌گر به اشاره‌گر: حذف بدون حالت خاص\n    for (; *pp; pp = &amp;(*pp)-&gt;next)\n        if (strcmp((*pp)-&gt;key, k) == 0) {\n            Entry *dead = *pp; *pp = dead-&gt;next;\n            free(dead-&gt;key); free(dead); t-&gt;count--; return 1;\n        }\n    return 0;\n}\nstatic void table_free(Table *t) {\n    for (size_t i = 0; i &lt; t-&gt;nb; i++)\n        for (Entry *e = t-&gt;buckets[i], *n; e; e = n) { n = e-&gt;next; free(e-&gt;key); free(e); }\n    free(t-&gt;buckets); free(t);\n}\nint main(void) {\n    Table *t = table_new(7);                         // اندازه‌ی اول (prime): با توان ۲ برای djb2 توزیع بد می‌شود\n    const char *words[] = {&quot;sib&quot;, &quot;gerd&quot;, &quot;albaloo&quot;, &quot;anar&quot;, &quot;toot&quot;, &quot;sib&quot;};\n    for (int i = 0; i &lt; 6; i++) table_put(t, words[i], i);\n    printf(&quot;تعداد کلید یکتا: %zu\\n&quot;, t-&gt;count);\n    Entry *e = table_find(t, &quot;sib&quot;);\n    printf(&quot;sib → %d (آخرین مقدار)\\n&quot;, e ? e-&gt;value : -1);\n    printf(&quot;وجود &#x27;moz&#x27;: %s\\n&quot;, table_find(t, &quot;moz&quot;) ? &quot;بله&quot; : &quot;خیر&quot;);\n    size_t longest = 0;\n    for (size_t i = 0; i &lt; t-&gt;nb; i++) { size_t n = 0; for (Entry *x = t-&gt;buckets[i]; x; x = x-&gt;next) n++; if (n &gt; longest) longest = n; }\n    printf(&quot;طولانی‌ترین زنجیره: %zu (برخوردها با زنجیره‌سازی حل می‌شوند)\\n&quot;, longest);\n    int r1 = table_remove(t, &quot;gerd&quot;), r2 = table_remove(t, &quot;gerd&quot;);   // ترتیب ارزیابی آرگومان‌ها نامشخص است\n    printf(&quot;حذف gerd: %d، حذف دوباره: %d، تعداد: %zu\\n&quot;, r1, r2, t-&gt;count);\n    table_free(t);\n    return 0;\n}</code></pre></div><p><b>خروجی نمونه</b> (اجرای واقعی):</p><div class='code-block'><div class='cb-head'>خروجی</div><pre><code>تعداد کلید یکتا: 5\nsib → 5 (آخرین مقدار)\nوجود &#x27;moz&#x27;: خیر\nطولانی‌ترین زنجیره: 2 (برخوردها با زنجیره‌سازی حل می‌شوند)\nحذف gerd: 1، حذف دوباره: 0، تعداد: 4</code></pre></div>",
     "exercise": "تابع table_resize بنویس که با ضریب بار ۰٫۷۵ جدول را دو برابر و همه‌ی کلیدها را دوباره هش کند."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی Process و Thread چیست؟",
     "options": [
      "تفاوتی ندارند",
      "Threadها درون یک Process هستند و می‌توانند حافظه را با هم به اشتراک بگذارند؛ Processها مستقل‌اند",
      "Process سریع‌تر است",
      "Thread فقط در ویندوز وجود دارد"
     ],
     "answer": 1,
     "explain": "اشتراک حافظه بین Threadها سریع‌تر ولی پرخطرتر (Race Condition) از ارتباط بین Processهاست."
    },
    {
     "q": "System Call چیست؟",
     "options": [
      "یک نوع متغیر",
      "راهی که برنامه از سیستم‌عامل درخواست سرویس می‌کند (مثل باز کردن فایل)",
      "یک تابع ریاضی",
      "نوعی حلقه"
     ],
     "answer": 1,
     "explain": "توابع استاندارد C مثل fopen در پس‌زمینه از System Call استفاده می‌کنند."
    },
    {
     "q": "چرا C زبان اصلی برای Embedded Systems است؟",
     "options": [
      "چون جدیدترین زبان است",
      "چون کنترل دقیق و سربار (Overhead) بسیار کمی روی حافظه/سخت‌افزار محدود دارد",
      "چون یادگیری‌اش راحت‌تر است",
      "چون فقط روی آردوینو کار می‌کند"
     ],
     "answer": 1,
     "explain": "سیستم‌های محدود به کنترل نزدیک به سخت‌افزار با حداقل سربار نیاز دارند."
    },
    {
     "q": "Assembly در فرآیند کامپایل چه جایگاهی دارد؟",
     "options": [
      "اولین مرحله، قبل از هر چیز",
      "زبانی میانی، نزدیک به دستورات مستقیم CPU، بین کد C و کد ماشین نهایی",
      "جایگزین کامل C است",
      "فقط برای دیباگ استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "کامپایلر ابتدا C را به Assembly و سپس به کد ماشین تبدیل می‌کند."
    },
    {
     "q": "Kernel در سیستم‌عامل چه نقشی دارد؟",
     "options": [
      "فقط رابط کاربری را نشان می‌دهد",
      "لایه‌ای که مستقیم با سخت‌افزار کار کرده و منابع را بین Processها مدیریت می‌کند",
      "یک نوع کامپایلر است",
      "فقط برای فایل‌ها استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "Kernel هستهٔ اصلی سیستم‌عامل و واسط بین نرم‌افزار و سخت‌افزار است."
    },
    {
     "q": "include guard چه می‌کند؟",
     "options": [
      "جلوی include دوبارهٔ header را می‌گیرد",
      "حافظه آزاد می‌کند",
      "کد را رمز می‌کند",
      "سرعت را زیاد می‌کند"
     ],
     "answer": 0,
     "explain": "تعریف مجدد را جلوگیری می‌کند."
    },
    {
     "q": "p+2 برای int* چند بایت جلو می‌رود؟",
     "options": [
      "دو برابر sizeof(int)",
      "دو بایت",
      "یک بایت",
      "چهار بایت همیشه"
     ],
     "answer": 0,
     "explain": "حسابداری آدرس بر اساس اندازه‌ی نوع است."
    },
    {
     "q": "padding در struct به چه دلیل است؟",
     "options": [
      "تراز حافظه (alignment)",
      "رنگ",
      "سرعت اینترنت",
      "امنیت"
     ],
     "answer": 0,
     "explain": "ترتیب فیلدها اندازه را عوض می‌کند."
    },
    {
     "q": "کدام تابع مرز بافر را نمی‌شناسد؟",
     "options": [
      "strcpy",
      "snprintf",
      "fgets",
      "strlcpy"
     ],
     "answer": 0,
     "explain": "باعث Buffer Overflow می‌شود."
    },
    {
     "q": "Data Race چیست؟",
     "options": [
      "نوشتن همزمان چند رشته روی یک متغیر بدون هماهنگی",
      "خطای کامپایل",
      "کندی دیسک",
      "نشت حافظه"
     ],
     "answer": 0,
     "explain": "با mutex یا atomic حل می‌شود."
    },
    {
     "q": "چرا printf(user_input) خطرناک است؟",
     "options": [
      "مهاجم با %x و %n می‌تواند حافظه را بخواند/بنویسد",
      "چون کند است",
      "چون رشته را تغییر می‌دهد",
      "خطری ندارد"
     ],
     "answer": 0,
     "explain": "باید همیشه printf(\"%s\", user_input) نوشت تا قالب ثابت باشد."
    },
    {
     "q": "نتیجه‌ی (-1 < 1u) در C چیست؟",
     "options": [
      "نادرست، چون -1 به unsigned بزرگ تبدیل می‌شود",
      "درست",
      "خطای کامپایل",
      "رفتار تعریف‌نشده"
     ],
     "answer": 0,
     "explain": "در مقایسه‌ی signed با unsigned، عملوند signed به unsigned تبدیل می‌شود."
    },
    {
     "q": "چرا نتیجه‌ی realloc را مستقیم در اشاره‌ی اصلی نمی‌گذاریم؟",
     "options": [
      "اگر NULL برگردد حافظه‌ی قبلی نشت می‌کند",
      "realloc همیشه آدرس را عوض می‌کند",
      "کامپایلر خطا می‌دهد",
      "سرعت کم می‌شود"
     ],
     "answer": 0,
     "explain": "ابتدا در متغیر موقت بگیر و بعد از بررسی، جایگزین کن."
    },
    {
     "q": "داخل signal handler کدام کار مجاز است؟",
     "options": [
      "نوشتن در یک متغیر volatile sig_atomic_t",
      "printf",
      "malloc",
      "fopen"
     ],
     "answer": 0,
     "explain": "فقط توابع async-signal-safe؛ کار اصلی را در حلقه‌ی اصلی انجام بده."
    }
   ]
  }
 ],
 "project": {
  "title": "سیستم مدیریت دانشجویان با Linked List و فایل",
  "brief": "یک برنامهٔ کامل C بساز که لیست دانشجویان (نام، شماره‌دانشجویی، معدل) رو با Linked List (نه آرایهٔ ثابت) مدیریت کنه: افزودن، نمایش، جستجو بر اساس شماره‌دانشجویی، حذف، و ذخیره/بازیابی کل لیست از یک فایل متنی.",
  "requirements": [
   "استفاده از struct برای هر دانشجو و Linked List برای کل لیست (نه آرایهٔ اندازهٔ ثابت)",
   "توابع جدا برای هرکدام از عملیات‌ها (add, search, delete, save, load)",
   "مدیریت درست حافظه: هر malloc باید free متناظر داشته باشه (بدون Memory Leak)",
   "خواندن/نوشتن فایل با fopen/fprintf/fscanf برای ذخیرهٔ دائمی لیست"
  ],
  "hints": [
   "اول فقط با عملیات‌های حافظه (بدون فایل) کار کن تا Linked List درست کار کنه، بعد قابلیت فایل رو اضافه کن.",
   "برای تست Memory Leak، اگه به Valgrind دسترسی داری (لینوکس/مک)، بعد از اتمام برنامه باهاش تستش کن."
  ]
 }
});
