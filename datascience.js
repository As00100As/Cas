(window.COURSES=window.COURSES||[]).push({
 "id": "datascience",
 "name": "NumPy، Pandas و هوش مصنوعی",
 "icon": "📊",
 "kind": "python",
 "desc": "از آرایه‌های سریع تا رگرسیون خطی از صفر — با اجرای واقعی همین‌جا",
 "covers": [
  "NumPy: Array، Vectorized Operations، Broadcasting",
  "Pandas: DataFrame، Series، فیلتر، GroupBy",
  "Machine Learning: Train/Test Split",
  "رگرسیون خطی از صفر با Gradient Descent",
  "Overfitting در برابر Underfitting",
  "از ML کلاسیک تا شبکهٔ عصبی و LLM"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "آرایه‌های NumPy: چرا سریع‌تر از لیست پایتون",
     "content": "<p>لیست پایتون برای محاسبات عددی روی حجم زیاد داده کند است، چون هر عضو می‌تواند نوع متفاوتی داشته باشد. <b>NumPy Array</b> بلوکی از حافظه با یک نوع ثابت است — محاسبات روی آن به زبان C در پس‌زمینه انجام می‌شود و بسیار سریع‌تر است. این کتابخانه پایهٔ تقریباً همهٔ ابزارهای علم داده و یادگیری ماشین در پایتون است.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\nimport time\n\n# لیست معمولی پایتون\npy_list = list(range(100000))\nstart = time.time()\npy_result = [x * 2 for x in py_list]\npy_time = time.time() - start\n\n# آرایهٔ NumPy\nnp_array = np.arange(100000)\nstart = time.time()\nnp_result = np_array * 2  # عملیات برداری - کل آرایه یک‌جا ضرب می‌شه\nnp_time = time.time() - start\n\nprint(f\"زمان لیست پایتون: {py_time:.5f} ثانیه\")\nprint(f\"زمان NumPy: {np_time:.5f} ثانیه\")\nprint(f\"NumPy تقریباً {py_time/np_time:.1f} برابر سریع‌تر بود\")",
     "exercise": "یک آرایهٔ NumPy از ۱۰ عدد بساز (np.array([...])) و با یک خط کد همهٔ اعضاش رو به توان ۲ برسون (بدون حلقه)."
    },
    {
     "title": "عملیات برداری (Vectorized) و Broadcasting",
     "content": "<p><b>Vectorized Operations</b> یعنی به‌جای نوشتن حلقه برای اعمال یک عملیات روی هر عضو، مستقیم کل آرایه را در عبارت می‌گذارید (<code class='inline'>arr * 2</code> به‌جای <code class='inline'>for</code>). <b>Broadcasting</b> قانونی است که به NumPy اجازه می‌دهد آرایه‌هایی با شکل‌های متفاوت (مثلاً یک آرایه و یک عدد تکی) را در عملیات ترکیب کند.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\n\nprices = np.array([100000, 250000, 80000, 500000])\n\n# Broadcasting: یک عدد تکی به کل آرایه اعمال می‌شه\ndiscounted = prices * 0.9  # ۱۰٪ تخفیف روی همه\nprint(\"قیمت با تخفیف:\", discounted)\n\n# مقایسهٔ برداری: کدوم‌ها بالای ۱۰۰,۰۰۰ هستن؟\nexpensive_mask = prices > 100000\nprint(\"ماسک گران‌ها:\", expensive_mask)\nprint(\"فقط قیمت‌های گران:\", prices[expensive_mask])\n\nprint(\"میانگین:\", np.mean(prices))\nprint(\"بیشترین:\", np.max(prices))",
     "exercise": "آرایهٔ prices رو با یک آرایهٔ discount_percent هم‌اندازه (مثلاً [10, 20, 5, 0]) ترکیب کن تا قیمت نهایی هرکدوم با درصد تخفیف خودش حساب بشه."
    },
    {
     "title": "Indexing، Slicing و Reshape",
     "content": "<p>NumPy از Slicing شبیه لیست پایتون پشتیبانی می‌کند ولی برای آرایه‌های چندبعدی (ماتریس) هم کار می‌کند: <code class='inline'>arr[سطر, ستون]</code>. <code class='inline'>.reshape()</code> شکل آرایه را بدون تغییردادن داده‌ها عوض می‌کند — مثلاً یک آرایهٔ ۱۲تایی را به یک ماتریس ۳در۴ تبدیل می‌کند.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\n\nmatrix = np.arange(12).reshape(3, 4)  # ماتریس ۳ سطر، ۴ ستون\nprint(matrix)\nprint(\"سطر اول:\", matrix[0])\nprint(\"عضو سطر۱-ستون۲:\", matrix[1, 2])\nprint(\"همهٔ سطرها، فقط ستون اول:\", matrix[:, 0])\n\nflat = matrix.reshape(-1)  # -1 یعنی 'خودت حساب کن'، تبدیل به یک‌بعدی\nprint(\"صاف‌شده:\", flat)",
     "exercise": "یک آرایهٔ ۱۶ عددی بساز (np.arange(16)) و با reshape به یک ماتریس ۴در۴ تبدیلش کن، بعد فقط قطر اصلی (matrix[i,i] برای هر i) رو با یه حلقه چاپ کن."
    }
   ],
   "quiz": [
    {
     "q": "چرا NumPy Array معمولاً سریع‌تر از لیست پایتون برای محاسبات عددی است؟",
     "options": [
      "چون رنگی‌تر است",
      "چون بلوکی از حافظه با نوع ثابت است و محاسبات در پس‌زمینه با C انجام می‌شود",
      "چون کوچک‌تر است",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "یکنواختی نوع داده و اجرای بهینه در سطح پایین سرعت بالایی می‌دهد."
    },
    {
     "q": "Vectorized Operation یعنی چه؟",
     "options": [
      "نوشتن حلقهٔ for برای هر عضو",
      "اعمال یک عملیات مستقیم روی کل آرایه، بدون نوشتن حلقهٔ صریح",
      "تبدیل آرایه به لیست",
      "حذف آرایه"
     ],
     "answer": 1,
     "explain": "مثل arr * 2 به‌جای [x*2 for x in arr]."
    },
    {
     "q": "متد reshape در NumPy چه کاری انجام می‌دهد؟",
     "options": [
      "مقدار عناصر را تغییر می‌دهد",
      "شکل (ابعاد) آرایه را بدون تغییر داده‌ها عوض می‌کند",
      "آرایه را حذف می‌کند",
      "فقط برای اعداد اعشاری کار می‌کند"
     ],
     "answer": 1,
     "explain": "همان داده‌ها را در ساختار ابعادی متفاوت می‌چیند."
    }
   ],
   "challenge": {
    "task": "یک آرایهٔ NumPy از نمرات ۱۰ دانش‌آموز بساز. با عملیات برداری (بدون حلقه): میانگین کل رو حساب کن، ماسک نمرات بالای میانگین رو بساز، و فقط اون نمره‌ها رو چاپ کن.",
    "hint1": "میانگین با np.mean(scores) به دست میاد.",
    "hint2": "برای ماسک: scores > np.mean(scores) یک آرایهٔ boolean هم‌اندازه می‌سازه که می‌تونی مستقیم برای Indexing استفاده‌ش کنی: scores[mask].",
    "solution": "import numpy as np\nscores = np.array([14, 18, 9, 20, 11, 16, 8, 19, 13, 17])\navg = np.mean(scores)\nabove_avg = scores[scores > avg]\nprint(\"میانگین:\", avg)\nprint(\"نمرات بالای میانگین:\", above_avg)"
   }
  },
  {
   "lessons": [
    {
     "title": "DataFrame و Series: جدول داده در پایتون",
     "content": "<p><b>Pandas</b> روی NumPy ساخته شده و برای کار با داده‌های جدولی (مثل اکسل یا CSV) طراحی شده. <b>DataFrame</b> یک جدول دوبعدی با نام ستون است؛ <b>Series</b> یک ستون تنها (یا یک ردیف) از آن است.</p>",
     "packages": [
      "pandas"
     ],
     "py": "import pandas as pd\n\ndata = {\n    \"name\": [\"سارا\", \"علی\", \"مریم\", \"رضا\"],\n    \"age\": [25, 30, 22, 28],\n    \"city\": [\"تهران\", \"شیراز\", \"تهران\", \"اصفهان\"]\n}\ndf = pd.DataFrame(data)\nprint(df)\nprint(\"\\nستون age به‌تنهایی (یک Series):\")\nprint(df[\"age\"])\nprint(\"\\nمیانگین سن:\", df[\"age\"].mean())",
     "exercise": "یک DataFrame با ستون‌های name و price برای ۵ محصول بساز و ستون price رو چاپ کن."
    },
    {
     "title": "فیلتر کردن داده با Pandas",
     "content": "<p>فیلترکردن در Pandas شبیه NumPy با ماسک است: <code class='inline'>df[df['ستون'] &gt; مقدار]</code>. برای فیلتر با چند شرط، از <code class='inline'>&amp;</code> (و) و <code class='inline'>|</code> (یا) استفاده می‌شود — هر شرط باید داخل پرانتز جدا باشد.</p>",
     "packages": [
      "pandas"
     ],
     "py": "import pandas as pd\n\ndata = {\n    \"name\": [\"سارا\", \"علی\", \"مریم\", \"رضا\"],\n    \"age\": [25, 30, 22, 28],\n    \"city\": [\"تهران\", \"شیراز\", \"تهران\", \"اصفهان\"]\n}\ndf = pd.DataFrame(data)\n\ntehran_people = df[df[\"city\"] == \"تهران\"]\nprint(\"ساکنین تهران:\")\nprint(tehran_people)\n\nyoung_tehran = df[(df[\"city\"] == \"تهران\") & (df[\"age\"] < 24)]\nprint(\"\\nجوان‌های تهران (زیر ۲۴ سال):\")\nprint(young_tehran)",
     "exercise": "از همون df، افرادی که سنشون بالای ۲۵ سال هست یا توی 'اصفهان' زندگی می‌کنن رو فیلتر کن (با |)."
    },
    {
     "title": "GroupBy: تحلیل آماری سریع",
     "content": "<p><code class='inline'>groupby()</code> داده را بر اساس یک ستون گروه‌بندی می‌کند و اجازه می‌دهد برای هر گروه، یک محاسبهٔ آماری (میانگین، مجموع، تعداد) انجام دهید — دقیقاً معادل <code class='inline'>GROUP BY</code> در SQL که قبلاً یاد گرفتید.</p>",
     "packages": [
      "pandas"
     ],
     "py": "import pandas as pd\n\ndata = {\n    \"city\": [\"تهران\", \"شیراز\", \"تهران\", \"اصفهان\", \"شیراز\"],\n    \"sales\": [1200000, 800000, 1500000, 600000, 900000]\n}\ndf = pd.DataFrame(data)\n\ncity_totals = df.groupby(\"city\")[\"sales\"].sum()\nprint(\"مجموع فروش هر شهر:\")\nprint(city_totals)\n\ncity_avg = df.groupby(\"city\")[\"sales\"].mean()\nprint(\"\\nمیانگین فروش هر شهر:\")\nprint(city_avg)",
     "exercise": "داده رو با یک ستون product هم گسترش بده (چند محصول تکراری) و groupby رو روی product امتحان کن تا ببینی کدوم محصول بیشترین فروش رو داشته."
    }
   ],
   "quiz": [
    {
     "q": "DataFrame در Pandas چیست؟",
     "options": [
      "یک عدد تکی",
      "یک جدول دوبعدی با نام ستون، شبیه یک صفحهٔ اکسل",
      "یک نوع فایل تصویری",
      "معادل HTML است"
     ],
     "answer": 1,
     "explain": "DataFrame ساختار اصلی داده‌های جدولی در Pandas است."
    },
    {
     "q": "برای فیلتر با دو شرط هم‌زمان در Pandas از چه عملگری استفاده می‌شود؟",
     "options": [
      "and",
      "&",
      "+",
      "فقط یک شرط در هر لحظه مجاز است"
     ],
     "answer": 1,
     "explain": "در Pandas باید از & (نه and پایتون) برای ترکیب شرط‌های برداری استفاده کرد."
    },
    {
     "q": "groupby در Pandas معادل کدام مفهوم در SQL است؟",
     "options": [
      "SELECT ساده",
      "GROUP BY",
      "DELETE",
      "CREATE TABLE"
     ],
     "answer": 1,
     "explain": "هر دو داده را بر اساس یک ستون گروه‌بندی و برای هر گروه محاسبه انجام می‌دهند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "Machine Learning چیست: Train/Test Split",
     "content": "<p>در یادگیری ماشین، یک مدل از داده‌های <b>گذشته</b> «الگو» یاد می‌گیرد تا روی داده‌های <b>جدید</b> پیش‌بینی کند. برای این‌که بفهمیم مدل واقعاً یاد گرفته (نه فقط داده‌های آموزشی رو حفظ کرده)، داده را به دو بخش تقسیم می‌کنیم: <b>Train Set</b> (برای آموزش مدل) و <b>Test Set</b> (برای سنجش دقت روی داده‌ای که مدل قبلاً ندیده) — معمولاً با نسبت ۸۰٪ به ۲۰٪.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\n\n# شبیه‌سازی داده: مساحت خانه (متر مربع) و قیمت (میلیون تومان)\nnp.random.seed(42)\narea = np.array([50, 70, 90, 60, 100, 120, 80, 55, 95, 110])\nprice = np.array([500, 700, 900, 600, 1000, 1200, 800, 550, 950, 1100])\n\n# تقسیم دستی ساده: ۸۰٪ آموزش، ۲۰٪ تست\nsplit = int(len(area) * 0.8)\nindices = np.random.permutation(len(area))\ntrain_idx, test_idx = indices[:split], indices[split:]\n\narea_train, area_test = area[train_idx], area[test_idx]\nprice_train, price_test = price[train_idx], price[test_idx]\n\nprint(\"تعداد داده‌های آموزش:\", len(area_train))\nprint(\"تعداد داده‌های تست:\", len(area_test))\nprint(\"مساحت‌های تست (که مدل ندیده):\", area_test)",
     "exercise": "نسبت تقسیم رو به ۷۰٪ آموزش/۳۰٪ تست تغییر بده و ببین تعداد داده‌های هر بخش چطور عوض می‌شه."
    },
    {
     "title": "رگرسیون خطی از صفر با Gradient Descent",
     "content": "<p><b>رگرسیون خطی</b> ساده‌ترین مدل یادگیری ماشین است: سعی می‌کند بهترین خط <code class='inline'>y = wx + b</code> را پیدا کند که روی داده‌ها بنشیند. <b>Gradient Descent</b> الگوریتمی است که به‌تدریج <code class='inline'>w</code> و <code class='inline'>b</code> را کمی‌کمی تغییر می‌دهد تا خطای پیش‌بینی کمینه شود — دقیقاً همان چیزی که پشت صحنهٔ اکثر مدل‌های یادگیری ماشین (و حتی شبکه‌های عصبی بزرگ) اتفاق می‌افتد.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\n\narea = np.array([50, 70, 90, 60, 100], dtype=float)\nprice = np.array([500, 700, 900, 600, 1000], dtype=float)\n\n# نرمال‌سازی ساده برای پایداری آموزش\narea_norm = area / 100\n\nw, b = 0.0, 0.0  # شروع از صفر\nlearning_rate = 0.1\nn = len(area)\n\nfor epoch in range(1000):\n    pred = w * area_norm + b\n    error = pred - price / 1000\n    dw = (2/n) * np.sum(error * area_norm)\n    db = (2/n) * np.sum(error)\n    w -= learning_rate * dw\n    b -= learning_rate * db\n\nprint(f\"مدل یادگرفته: price = {w:.2f} * (area/100) + {b:.2f}  (به هزار تومن)\")\nnew_area = 85\nprediction = (w * (new_area/100) + b) * 1000\nprint(f\"پیش‌بینی قیمت برای خانهٔ {new_area} متری: {prediction:.0f} هزار تومان\")",
     "exercise": "مقدار learning_rate رو به ۰.۰۱ کم کن یا به ۱ زیاد کن و ببین بعد از ۱۰۰۰ تکرار، مدل چقدر متفاوت (یا بی‌ثبات) میشه."
    },
    {
     "title": "Overfitting در برابر Underfitting",
     "content": "<p><b>Underfitting</b> یعنی مدل خیلی ساده است و حتی الگوی داده‌های آموزشی را هم خوب یاد نمی‌گیرد. <b>Overfitting</b> برعکس است: مدل آن‌قدر پیچیده می‌شود که داده‌های آموزشی را «حفظ» می‌کند (حتی نویز/خطاهای تصادفی را)، ولی روی داده‌های جدید (Test Set) عملکرد بدی دارد. تشخیص این مشکل دقیقاً همان دلیلی است که Train/Test Split لازم است — اگر فقط دقت روی Train را نگاه کنید، هرگز overfitting را نمی‌بینید.</p>",
     "exercise": "فکر کن یه دانش‌آموز فقط جواب‌های دقیق ۱۰۰ تا تمرین کتاب رو حفظ کرده، بدون فهمیدن مفهوم. توضیح بده این دقیقاً معادل کدوم پدیده (Overfitting یا Underfitting) هست و چرا توی امتحان واقعی (Test Set) ضعیف عمل می‌کنه."
    }
   ],
   "quiz": [
    {
     "q": "چرا داده را به Train و Test تقسیم می‌کنیم؟",
     "options": [
      "برای اینکه فایل کوچک‌تر بشه",
      "برای سنجش عملکرد مدل روی داده‌ای که قبلاً ندیده، نه فقط حفظ‌کردن داده‌های آموزشی",
      "چون اجباریست و دلیل خاصی ندارد",
      "برای افزایش سرعت آموزش"
     ],
     "answer": 1,
     "explain": "Test Set تنها راه سنجش صادقانهٔ توانایی تعمیم مدل است."
    },
    {
     "q": "Gradient Descent چه کاری انجام می‌دهد؟",
     "options": [
      "داده را حذف می‌کند",
      "به‌تدریج پارامترهای مدل را برای کمینه‌کردن خطا تغییر می‌دهد",
      "داده را مرتب می‌کند",
      "فقط برای تصاویر کاربرد دارد"
     ],
     "answer": 1,
     "explain": "این الگوریتم پایهٔ آموزش اکثر مدل‌های یادگیری ماشین و شبکه‌های عصبی است."
    },
    {
     "q": "Overfitting چه زمانی رخ می‌دهد؟",
     "options": [
      "وقتی مدل خیلی ساده است",
      "وقتی مدل داده‌های آموزشی (حتی نویز) را حفظ می‌کند ولی روی داده جدید ضعیف است",
      "وقتی داده کافی است",
      "هرگز مشکل‌ساز نیست"
     ],
     "answer": 1,
     "explain": "مدل overfit شده دقت بالا روی Train ولی دقت پایین روی Test دارد."
    }
   ],
   "challenge": {
    "task": "همون رگرسیون خطی رو با یه دیتاست جدید (سن یه درخت به سال، و قدش به متر) امتحان کن. حداقل ۵ نمونه داده بساز، مدل رو با Gradient Descent آموزش بده، و قد درخت رو برای یه سن جدید پیش‌بینی کن.",
    "hint1": "از همون ساختار کد قبلی استفاده کن، فقط area/price رو با age/height عوض کن.",
    "hint2": "اگه پیش‌بینی خیلی عجیب بود، احتمالاً نیاز به تنظیم learning_rate یا تعداد epoch داری.",
    "solution": "import numpy as np\nage = np.array([1,3,5,7,10], dtype=float)\nheight = np.array([0.5,1.5,2.5,3.5,5.0], dtype=float)\n\nw, b = 0.0, 0.0\nlr = 0.05\nn = len(age)\nfor epoch in range(2000):\n    pred = w*age + b\n    error = pred - height\n    dw = (2/n)*np.sum(error*age)\n    db = (2/n)*np.sum(error)\n    w -= lr*dw\n    b -= lr*db\n\nprint(f\"height = {w:.2f}*age + {b:.2f}\")\nprint(\"پیش‌بینی برای سن ۸:\", w*8+b)"
   }
  },
  {
   "lessons": [
    {
     "title": "از ML کلاسیک تا شبکهٔ عصبی: فرق چیست؟",
     "content": "<p>مدل‌هایی مثل رگرسیون خطی که ساختیم، «کلاسیک» هستند: ساده، سریع، قابل‌تفسیر، ولی محدود به الگوهای نسبتاً ساده. <b>شبکهٔ عصبی (Neural Network)</b> از لایه‌های زیادی از «نورون‌های» ریاضی ساخته شده که هرکدام یک رگرسیون کوچک انجام می‌دهند و نتیجه را به لایهٔ بعد می‌دهند — با ترکیب هزاران/میلیون‌ها این واحد ساده، الگوهای بسیار پیچیده (تشخیص تصویر، درک زبان) قابل یادگیری می‌شوند. <b>یادگیری عمیق (Deep Learning)</b> یعنی استفاده از شبکه‌های عصبی با لایه‌های زیاد.</p>",
     "exercise": "توضیح بده چرا برای پیش‌بینی قیمت خانه بر اساس فقط متراژ، رگرسیون خطی ساده کافیه؛ ولی برای کاری مثل 'تشخیص گربه در عکس' نیاز به شبکهٔ عصبی پیچیده‌تری داریم."
    },
    {
     "title": "یک پرسپترون ساده از صفر",
     "content": "<p><b>پرسپترون</b> ساده‌ترین واحد شبکهٔ عصبی است: چند ورودی را با وزن ضرب، جمع، و از یک تابع فعال‌سازی (Activation Function) رد می‌کند تا خروجی (مثلاً ۰ یا ۱) تولید کند. این‌جا یک پرسپترون می‌سازیم که یاد می‌گیرد عملگر منطقی AND را تشخیص دهد.</p>",
     "packages": [
      "numpy"
     ],
     "py": "import numpy as np\n\n# داده‌های AND: (0,0)->0, (0,1)->0, (1,0)->0, (1,1)->1\nX = np.array([[0,0],[0,1],[1,0],[1,1]], dtype=float)\ny = np.array([0,0,0,1], dtype=float)\n\nweights = np.zeros(2)\nbias = 0.0\nlr = 0.1\n\ndef step(x):\n    return 1 if x >= 0 else 0\n\nfor epoch in range(20):\n    for i in range(len(X)):\n        z = np.dot(X[i], weights) + bias\n        pred = step(z)\n        error = y[i] - pred\n        weights += lr * error * X[i]\n        bias += lr * error\n\nprint(\"وزن‌های یادگرفته‌شده:\", weights)\nprint(\"بایاس:\", bias)\nprint(\"\\nتست پرسپترون:\")\nfor i in range(len(X)):\n    z = np.dot(X[i], weights) + bias\n    print(f\"{X[i]} -> {step(z)} (واقعی: {int(y[i])})\")",
     "exercise": "داده‌های y رو برای عملگر OR عوض کن ((0,0)->0, بقیه->1) و ببین پرسپترون می‌تونه اونم یاد بگیره."
    },
    {
     "title": "جمع‌بندی مسیر: از داده تا هوش مصنوعی مکالمه‌ای",
     "content": "<p>مسیری که رفتی دقیقاً پایهٔ چیزیه که مدل‌های بزرگ زبانی (LLM) مثل Claude یا GPT رو می‌سازه — فقط در مقیاس بسیار بزرگ‌تر: به‌جای ۲ ورودی مثل پرسپترون بالا، میلیاردها پارامتر؛ به‌جای Gradient Descent ساده، نسخه‌های پیشرفته‌ترش؛ به‌جای رگرسیون روی اعداد، پیش‌بینی «کلمهٔ بعدی» روی حجم عظیمی از متن. مفهوم پایه (وزن، خطا، به‌روزرسانی تدریجی) دقیقاً همینه که همین‌جا با دست پیاده‌سازی کردی.</p>",
     "exercise": "با توجه به چیزی که یاد گرفتی، توضیح بده چرا آموزش یک مدل زبانی بزرگ به مقدار فوق‌العاده زیادی داده و قدرت محاسباتی (GPU) نیاز داره، در حالی که پرسپترون بالا در یک ثانیه آموزش دید."
    },
    {
     "title": "ارزیابی مدل: Precision، Recall و F1",
     "content": "<p>دقت (Accuracy) در داده‌های نامتعادل گمراه‌کننده است. <b>Precision</b> یعنی از پیش‌بینی‌های مثبت چندتا درست بود، و <b>Recall</b> یعنی از مثبت‌های واقعی چندتا پیدا شد. <b>F1</b> میانگین هماهنگ این دو است. انتخاب معیار به هزینهٔ خطا بستگی دارد (در تشخیص بیماری Recall مهم‌تر است).</p>",
     "exercise": "اگر مدل همهٔ نمونه‌ها را «منفی» بگوید Accuracy و Recall چه می‌شوند؟",
     "py": "tp,fp,fn=40,10,20\nprecision=tp/(tp+fp)\nrecall=tp/(tp+fn)\nf1=2*precision*recall/(precision+recall)\nprint(round(precision,2),round(recall,2),round(f1,2))"
    },
    {
     "title": "طبقه‌بندی با scikit-learn",
     "content": "<p>scikit-learn الگوریتم‌های آماده دارد. مراحل ثابت است: داده را تقسیم کن، مدل را بساز، fit کن، predict کن و بسنج. همیشه ابتدا یک مدل ساده (Logistic Regression) را مبنا قرار بده.<div class='code-block'><div class='cb-head'>clf.py</div><pre><code>from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2)\nm = LogisticRegression().fit(Xtr, ytr)\nprint(m.score(Xte, yte))</code></pre></div></p>",
     "exercise": "یک مدل ساده روی دادهٔ iris بساز و دقتش را گزارش کن."
    },
    {
     "title": "اعتبارسنجی متقاطع و Pipeline",
     "content": "<p>یک تقسیم train/test ممکن است شانسی باشد. Cross-Validation داده را چند بار متفاوت تقسیم می‌کند و میانگین می‌گیرد. Pipeline پیش‌پردازش و مدل را به هم می‌چسباند تا نشت داده (Data Leakage) نداشته باشی.</p>",
     "exercise": "با cross_val_score مدلت را در ۵ بخش بسنج."
    },
    {
     "title": "NumPy: Broadcasting و برداری‌سازی",
     "content": "<p>Broadcasting اجازه می‌دهد آرایه‌هایی با شکل متفاوت بدون حلقه ترکیب شوند: ابعاد از راست مقایسه می‌شوند و بُعد ۱ کش می‌آید. برداری‌سازی (حذف حلقه‌ی پایتونی) معمولاً ده‌ها برابر سریع‌تر است. محور (<code class='inline'>axis</code>) را درست انتخاب کن.</p>",
     "exercise": "میانگین هر ستون را از آن کم کن (استانداردسازی) بدون حلقه.",
     "py": "import numpy as np\na = np.arange(6).reshape(2, 3)\nb = np.array([10, 20, 30])\nprint(a + b)          # Broadcasting\nx = np.random.default_rng(0).random(5)\nprint((x - x.mean()) / x.std())  # بدون حلقه\nprint(a.sum(axis=0), a.sum(axis=1))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "حافظه‌ی NumPy: View در برابر Copy",
     "content": "<p>برش (slice) یک View می‌دهد و تغییرش داده‌ی اصلی را عوض می‌کند، ولی اندیس‌گذاری با لیست/ماسک Copy می‌سازد. این منبع باگ‌های ظریف است. <code class='inline'>.base</code> و <code class='inline'>np.shares_memory</code> نشان می‌دهد حافظه مشترک است یا نه؛ برای جداسازی از <code class='inline'>.copy()</code> استفاده کن.</p>",
     "exercise": "با یک مثال نشان بده چرا تغییر یک برش آرایه‌ی اصلی را عوض می‌کند.",
     "py": "import numpy as np\na = np.arange(6)\nv = a[1:4]          # view\nv[0] = 99\nprint(a)            # تغییر کرد\nc = a[[1, 2]].copy()\nc[0] = 0\nprint(a)            # تغییر نکرد\nprint(a.base is None, v.base is a)",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "Pandas: groupby، transform و merge",
     "content": "<p><code class='inline'>groupby().agg</code> خلاصه می‌سازد، ولی <code class='inline'>transform</code> نتیجه را هم‌شکل با داده‌ی اصلی برمی‌گرداند (مثلاً سهم هر ردیف از گروه). در <code class='inline'>merge</code> نوع join (inner/left/outer) و یکتایی کلید را بررسی کن تا ردیف‌ها ناخواسته تکثیر نشوند (<code class='inline'>validate='m:1'</code>).</p>",
     "exercise": "سهم فروش هر ردیف از جمع شهرش را حساب کن.",
     "py": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"A\", \"A\", \"B\", \"B\", \"B\"],\n                   \"sales\": [10, 20, 5, 15, 25]})\ndf[\"share\"] = df[\"sales\"] / df.groupby(\"city\")[\"sales\"].transform(\"sum\")\nprint(df)\nprint(df.groupby(\"city\").agg(total=(\"sales\", \"sum\"), avg=(\"sales\", \"mean\")))\nother = pd.DataFrame({\"city\": [\"A\", \"B\"], \"mgr\": [\"Ali\", \"Sara\"]})\nprint(df.merge(other, on=\"city\", how=\"left\").head(2))",
     "packages": [
      "pandas"
     ]
    },
    {
     "title": "Pandas کارآمد: dtype، Categorical و Parquet",
     "content": "<p>حافظه را با dtype مناسب کم کن (<code class='inline'>int32</code>، <code class='inline'>category</code> برای ستون‌های تکراری). از <code class='inline'>apply</code> سطری پرهیز کن و عملیات برداری یا <code class='inline'>.str</code> به کار ببر. فایل‌های بزرگ را با <code class='inline'>chunksize</code> بخوان و به‌جای CSV از Parquet (ستونی و فشرده) استفاده کن. برای داده‌های بسیار بزرگ Polars یا DuckDB.</p>",
     "exercise": "حجم یک DataFrame را با تبدیل dtypeها نصف کن."
    },
    {
     "title": "سری زمانی: resample، rolling و shift",
     "content": "<p>با ایندکس زمانی می‌توان <code class='inline'>resample</code> (تجمیع به بازه‌ی بزرگ‌تر)، <code class='inline'>rolling</code> (پنجره‌ی متحرک) و <code class='inline'>shift</code> (تأخیر) انجام داد. در پیش‌بینی، تقسیم train/test باید زمانی باشد، نه تصادفی، وگرنه آینده به آموزش نشت می‌کند.</p>",
     "exercise": "میانگین متحرک ۷روزه‌ی فروش را بساز و فصل را شناسایی کن.",
     "py": "import pandas as pd, numpy as np\nidx = pd.date_range(\"2026-01-01\", periods=10, freq=\"D\")\ns = pd.Series(np.arange(10), index=idx)\nprint(s.resample(\"5D\").sum())\nprint(s.rolling(3).mean().tail(3))\nprint(s.shift(1).tail(2))",
     "packages": [
      "pandas"
     ]
    },
    {
     "title": "مهندسی ویژگی و کدگذاری",
     "content": "<p>ویژگی خوب از مدل پیچیده مهم‌تر است. دسته‌ای‌ها: One-Hot (تعداد کم)، Target Encoding (تعداد زیاد؛ با خطر نشت، پس داخل cross-validation). عددی‌ها: مقیاس‌دهی، لگاریتم برای دم بلند، ساخت ویژگی‌های تعاملی و زمانی (روز هفته، تأخیرها). همه‌ی تبدیل‌ها را فقط روی train یاد بگیر.</p>",
     "exercise": "برای داده‌ی تاکسی ویژگی‌های زمانی و فاصله بساز."
    },
    {
     "title": "جبر خطی برای ML: SVD و PCA",
     "content": "<p>SVD ماتریس را به چرخش، کشش و چرخش تجزیه می‌کند. PCA همان SVD روی داده‌ی مرکزشده است: جهت‌هایی با بیشترین واریانس. نسبت <code class='inline'>S²</code> میزان اطلاعات هر مؤلفه را می‌دهد و برای کاهش بعد و حذف نویز به کار می‌رود. قبل از PCA داده را استانداردسازی کن.</p>",
     "exercise": "داده‌ی ۱۰ بعدی را به ۲ بعد برسان و واریانس حفظ‌شده را گزارش کن.",
     "py": "import numpy as np\nrng = np.random.default_rng(1)\nX = rng.normal(size=(100, 3)) @ np.array([[3, 0, 0], [0, 1, 0], [0, 0, .1]])\nXc = X - X.mean(0)\nU, S, Vt = np.linalg.svd(Xc, full_matrices=False)\nratio = S**2 / (S**2).sum()\nprint(np.round(ratio, 3))\nZ = Xc @ Vt[:2].T   # PCA به ۲ بعد\nprint(Z.shape)",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "گرادیان کاهشی از صفر",
     "content": "<p>هدف: کمینه‌کردن تابع هزینه با حرکت در خلاف گرادیان. نرخ یادگیری (<code class='inline'>lr</code>) اگر بزرگ باشد واگرا و اگر کوچک باشد کند می‌شود. انواع: Batch، Stochastic و Mini-batch. مقیاس‌دهی ویژگی‌ها همگرایی را سریع‌تر می‌کند و Momentum/Adam را برای سطوح پیچیده به کار می‌برند.</p>",
     "exercise": "رگرسیون خطی را با gradient descent بنویس و منحنی هزینه را رسم کن.",
     "py": "import numpy as np\nrng = np.random.default_rng(0)\nX = rng.normal(size=(200, 1))\ny = 3 * X[:, 0] + 2 + rng.normal(0, .1, 200)\nw, b, lr = 0.0, 0.0, 0.1\nfor _ in range(200):\n    pred = w * X[:, 0] + b\n    err = pred - y\n    w -= lr * (err * X[:, 0]).mean()\n    b -= lr * err.mean()\nprint(round(w, 2), round(b, 2))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "Bias-Variance و Regularization",
     "content": "<p>مدل ساده Bias بالا (underfit) و مدل پیچیده Variance بالا (overfit) دارد. Ridge (L2) ضرایب را کوچک می‌کند و Lasso (L1) بعضی را صفر می‌کند (انتخاب ویژگی). ضریب <code class='inline'>λ</code> را با cross-validation انتخاب کن. منحنی یادگیری نشان می‌دهد داده‌ی بیشتر کمک می‌کند یا مدل بهتر.</p>",
     "exercise": "تأثیر λ بر ضرایب Ridge را روی یک نمودار نشان بده.",
     "py": "import numpy as np\nrng = np.random.default_rng(0)\nX = rng.normal(size=(30, 10)); y = X[:, 0] + rng.normal(0, .5, 30)\ndef ridge(X, y, lam):\n    return np.linalg.solve(X.T @ X + lam * np.eye(X.shape[1]), X.T @ y)\nfor lam in (0, 1, 10, 100):\n    print(lam, round(np.linalg.norm(ridge(X, y, lam)), 3))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "مدل‌های درختی و Ensemble",
     "content": "<p>درخت تصمیم ساده ولی ناپایدار است. Random Forest درخت‌های مستقل را میانگین می‌گیرد (کاهش variance) و Gradient Boosting (XGBoost, LightGBM) درخت‌ها را پشت هم برای اصلاح خطا آموزش می‌دهد و روی داده‌های جدولی معمولاً بهترین است. پارامترهای مهم: عمق، نرخ یادگیری و تعداد درخت با early stopping.</p>",
     "exercise": "یک LightGBM را با early stopping روی داده‌ی جدولی آموزش بده."
    },
    {
     "title": "شبکه‌ی عصبی از صفر: Backpropagation",
     "content": "<p>شبکه لایه‌هایی از ضرب ماتریس و تابع فعال‌سازی است. پس‌انتشار با قاعده‌ی زنجیره‌ای گرادیان هر وزن را از خروجی به ورودی می‌رساند. مثال XOR نشان می‌دهد چرا لایه‌ی پنهان لازم است. در عمل از PyTorch با <code class='inline'>autograd</code> استفاده می‌کنیم، ولی دانستن این مکانیزم اشکال‌یابی را ممکن می‌کند.</p>",
     "exercise": "شبکه را به ۱۶ نورون پنهان تغییر بده و سرعت یادگیری را مقایسه کن.",
     "py": "import numpy as np\nrng = np.random.default_rng(0)\nX = np.array([[0,0],[0,1],[1,0],[1,1]], float); y = np.array([[0],[1],[1],[0]], float)\nW1 = rng.normal(size=(2, 8)); b1 = np.zeros(8)\nW2 = rng.normal(size=(8, 1)); b2 = np.zeros(1)\nsig = lambda z: 1 / (1 + np.exp(-z))\nfor _ in range(5000):\n    h = np.tanh(X @ W1 + b1); p = sig(h @ W2 + b2)\n    dp = (p - y) / len(X)\n    dW2 = h.T @ dp; db2 = dp.sum(0)\n    dh = dp @ W2.T * (1 - h**2)\n    dW1 = X.T @ dh; db1 = dh.sum(0)\n    for a, g in ((W1, dW1), (b1, db1), (W2, dW2), (b2, db2)):\n        a -= 0.5 * g\nprint(np.round(p.ravel(), 2))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "MLOps: بازتولیدپذیری، ردیابی و استقرار",
     "content": "<p>هر آزمایش باید قابل تکرار باشد: seed ثابت، نسخه‌دار کردن داده و کد، ثبت پارامترها و معیارها (MLflow / Weights&Biases). از نشت داده با Pipeline جلوگیری کن. مدل را با API (FastAPI) یا batch مستقر کن، رانش داده (data drift) را پایش کن و مدل را دوره‌ای دوباره آموزش بده.</p>",
     "exercise": "یک آزمایش را با MLflow ثبت کن و بازتولیدش کن."
    },
    {
     "title": "نشت داده (Data Leakage): دشمن پنهان ارزیابی",
     "content": "<p>نشت یعنی اطلاعاتی از داده‌ی تست وارد آموزش شود. رایج‌ترین شکل: <b>مقیاس‌دهی یا انتخاب ویژگی قبل از split</b>. نتیجه، دقت خوش‌بینانه‌ی غیرواقعی است. راه‌حل: همه‌ی مراحل یادگیرنده (scaler، imputer، انتخاب ویژگی) را در <code>Pipeline</code> بگذار تا فقط روی foldهای آموزش fit شوند.</p><p>در مثال زیر داده کاملاً تصادفی است و دقت واقعی باید حدود ۰٫۵ باشد؛ انتخاب ویژگی نشت‌دار آن را کاذب بالا می‌برد.</p>",
     "exercise": "تعداد ویژگی‌ها را از ۲۰۰۰ به ۲۰ کم کن و ببین اختلاف دو دقت چه می‌شود.",
     "py": "import numpy as np\nfrom sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.pipeline import make_pipeline\n\nrng = np.random.default_rng(0)\nX = rng.normal(size=(100, 2000))\ny = rng.integers(0, 2, 100)          # برچسب تصادفی: هیچ سیگنالی نیست\n\n# غلط: انتخاب ویژگی روی کل داده، بعد اعتبارسنجی\nXs = SelectKBest(f_classif, k=20).fit_transform(X, y)\nleak = cross_val_score(LogisticRegression(max_iter=1000), Xs, y, cv=5).mean()\n\n# درست: انتخاب ویژگی داخل Pipeline\npipe = make_pipeline(SelectKBest(f_classif, k=20), LogisticRegression(max_iter=1000))\nok = cross_val_score(pipe, X, y, cv=5).mean()\n\nprint(\"با نشت  :\", round(leak, 3))\nprint(\"بدون نشت:\", round(ok, 3))",
     "packages": [
      "numpy",
      "scikit-learn"
     ]
    },
    {
     "title": "ROC و AUC از صفر",
     "content": "<p>AUC احتمال این است که یک نمونه‌ی مثبت تصادفی امتیاز بالاتری از یک نمونه‌ی منفی تصادفی بگیرد. معادل آماری آن آماره‌ی Mann-Whitney است: رتبه‌ها را حساب کن و به‌جای منحنی، مستقیم AUC را بگیر. AUC به آستانه وابسته نیست، اما در داده‌ی بسیار نامتوازن PR-AUC آموزنده‌تر است.</p>",
     "exercise": "امتیازها را با نویز بیشتری بساز و ببین AUC به ۰٫۵ نزدیک می‌شود.",
     "py": "import numpy as np\n\ndef auc_rank(y, s):\n    order = np.argsort(s, kind=\"mergesort\")\n    ranks = np.empty(len(s)); ranks[order] = np.arange(1, len(s) + 1)\n    # رتبه‌ی میانگین برای مقادیر برابر\n    for v in np.unique(s):\n        m = s == v\n        ranks[m] = ranks[m].mean()\n    n1 = y.sum(); n0 = len(y) - n1\n    return (ranks[y == 1].sum() - n1 * (n1 + 1) / 2) / (n1 * n0)\n\ndef auc_pairs(y, s):\n    pos, neg = s[y == 1], s[y == 0]\n    gt = (pos[:, None] > neg[None, :]).sum()\n    eq = (pos[:, None] == neg[None, :]).sum()\n    return (gt + 0.5 * eq) / (len(pos) * len(neg))\n\nrng = np.random.default_rng(1)\ny = rng.integers(0, 2, 400)\ns = y * 1.0 + rng.normal(0, 1.2, 400)\nprint(\"rank :\", round(auc_rank(y, s), 4))\nprint(\"pairs:\", round(auc_pairs(y, s), 4))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "انتخاب آستانه‌ی تصمیم بر اساس هزینه",
     "content": "<p>آستانه‌ی ۰٫۵ مقدس نیست. اگر خطای منفی کاذب (FN) ده برابر گران‌تر از مثبت کاذب (FP) است، آستانه را طوری انتخاب کن که <b>هزینه‌ی کل</b> کمینه شود. برای احتمال‌های کالیبره، آستانه‌ی بهینه‌ی نظری برابر <code>c_FP / (c_FP + c_FN)</code> است.</p>",
     "exercise": "هزینه‌ی FN را ۵ بگذار و آستانه‌ی بهینه را مقایسه کن.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(2)\ny = (rng.random(5000) < 0.2).astype(int)\nlogit = (y * 2.0 - 1.0) + rng.normal(0, 1.5, 5000)\np = 1 / (1 + np.exp(-logit))   # امتیاز مدل\n\nc_fp, c_fn = 1.0, 10.0\nths = np.linspace(0.01, 0.99, 99)\ncosts = []\nfor t in ths:\n    pred = p >= t\n    fp = ((pred == 1) & (y == 0)).sum()\n    fn = ((pred == 0) & (y == 1)).sum()\n    costs.append(c_fp * fp + c_fn * fn)\ncosts = np.array(costs)\nbest = ths[costs.argmin()]\nprint(\"آستانه‌ی بهینه :\", round(best, 2))\nprint(\"هزینه در 0.5   :\", costs[np.argmin(abs(ths - 0.5))])\nprint(\"هزینه در بهینه :\", costs.min())\nprint(\"آستانه‌ی نظری  :\", round(c_fp / (c_fp + c_fn), 3), \"(فقط برای مدل کالیبره معتبر است؛ این مدل کالیبره نیست)\")",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "داده‌ی نامتوازن: وزن کلاس در برابر نمونه‌برداری",
     "content": "<p>وقتی ۹۵٪ داده یک کلاس است، دقت (accuracy) بی‌معناست. سه راه: ۱) <code>class_weight='balanced'</code>، ۲) oversampling کلاس اقلیت فقط روی <b>داده‌ی آموزش</b>، ۳) تغییر آستانه. هرگز قبل از split تکثیر نکن؛ نمونه‌های تکراری به تست نشت می‌کنند.</p>",
     "exercise": "نسبت اقلیت را ۱٪ کن و تغییر recall را ببین.",
     "py": "import numpy as np\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score\nfrom sklearn.model_selection import train_test_split\n\nrng = np.random.default_rng(3)\nn = 6000\ny = (rng.random(n) < 0.05).astype(int)\nX = rng.normal(size=(n, 4)) + y[:, None] * 1.2\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, stratify=y, random_state=0)\n\ndef report(name, model, X_, y_):\n    model.fit(X_, y_)\n    p = model.predict(Xte)\n    print(f\"{name:10s} precision={precision_score(yte,p):.2f} recall={recall_score(yte,p):.2f}\")\n\nreport(\"ساده\", LogisticRegression(), Xtr, ytr)\nreport(\"وزن‌دار\", LogisticRegression(class_weight=\"balanced\"), Xtr, ytr)\n\npos = np.where(ytr == 1)[0]\nextra = rng.choice(pos, size=(ytr == 0).sum() - len(pos), replace=True)\nidx = np.concatenate([np.arange(len(ytr)), extra])\nreport(\"oversample\", LogisticRegression(), Xtr[idx], ytr[idx])",
     "packages": [
      "numpy",
      "scikit-learn"
     ]
    },
    {
     "title": "داده‌ی گمشده: MCAR، MAR و خطر حذف سطرها",
     "content": "<p>سه سازوکار: <b>MCAR</b> (گمشدن تصادفی)، <b>MAR</b> (وابسته به ستون‌های دیگر) و <b>MNAR</b> (وابسته به خود مقدار). حذف سطرها فقط زیر MCAR بی‌طرف است. زیر MAR میانگین بایاس می‌شود. در مثال، درآمد برای سنین بالا بیشتر گم می‌شود.</p>",
     "exercise": "احتمال گمشدن را بیشتر کن و بایاس میانگین را دوباره بسنج.",
     "py": "import numpy as np\nimport pandas as pd\n\nrng = np.random.default_rng(4)\nn = 20000\nage = rng.integers(20, 70, n)\nincome = 20 + 0.8 * age + rng.normal(0, 5, n)\ndf = pd.DataFrame({\"age\": age, \"income\": income})\n\np_miss = np.where(df.age > 50, 0.6, 0.05)       # MAR\ndf[\"obs\"] = df.income.where(rng.random(n) > p_miss)\n\nprint(\"میانگین واقعی      :\", round(df.income.mean(), 2))\nprint(\"حذف سطرهای گمشده   :\", round(df.obs.dropna().mean(), 2))\n\n# ایمپیوت با میانگین‌ گروه سنی\ndf[\"grp\"] = pd.cut(df.age, [19, 30, 40, 50, 60, 70])\nimp = df.obs.fillna(df.groupby(\"grp\", observed=True).obs.transform(\"mean\"))\nprint(\"ایمپیوت گروهی      :\", round(imp.mean(), 2))",
     "packages": [
      "numpy",
      "pandas"
     ]
    },
    {
     "title": "تشخیص داده‌ی پرت: IQR، z-score و MAD",
     "content": "<p>میانگین و انحراف معیار خودشان به پرت‌ها حساس‌اند، پس z-score وقتی پرت زیاد باشد خودش را کور می‌کند. <b>MAD</b> (میانه‌ی قدر مطلق انحراف از میانه) مقاوم است: <code>z_robust = 0.6745·(x−median)/MAD</code> و آستانه‌ی رایج ۳٫۵.</p>",
     "exercise": "تعداد پرت‌ها را از ۶۰ به ۲۰ کم کن و ببین کدام روش‌ها دوباره کار می‌کنند.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(5)\nx = np.concatenate([rng.normal(100, 10, 200), np.full(60, 400.0)])\n\nz = (x - x.mean()) / x.std()\nflag_z = np.abs(z) > 3\n\nq1, q3 = np.percentile(x, [25, 75]); iqr = q3 - q1\nflag_iqr = (x < q1 - 1.5 * iqr) | (x > q3 + 1.5 * iqr)\n\nmed = np.median(x); mad = np.median(np.abs(x - med))\nflag_mad = np.abs(0.6745 * (x - med) / mad) > 3.5\n\nprint(\"پرت‌های واقعی: 60\")\nprint(\"z-score :\", flag_z.sum())\nprint(\"IQR     :\", flag_iqr.sum())\nprint(\"MAD     :\", flag_mad.sum())",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "Bootstrap و فاصله‌ی اطمینان بدون فرض توزیع",
     "content": "<p>Bootstrap یعنی از نمونه با جایگذاری نمونه بگیر و آماره را بارها حساب کن. صدک‌های ۲٫۵ و ۹۷٫۵ توزیع حاصل یک فاصله‌ی اطمینان ۹۵٪ می‌دهد. برای آماره‌هایی مثل میانه که فرمول بسته ندارند عالی است. در داده‌ی وابسته (سری زمانی) باید block bootstrap استفاده کرد.</p>",
     "exercise": "تعداد بازنمونه‌گیری را ۲۰۰ کن و پایداری بازه را ببین.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(6)\nx = rng.lognormal(mean=3, sigma=0.8, size=150)   # چولگی راست\n\nB = 5000\nidx = rng.integers(0, len(x), size=(B, len(x)))\nmedians = np.median(x[idx], axis=1)\nlo, hi = np.percentile(medians, [2.5, 97.5])\n\nprint(\"میانه‌ی نمونه:\", round(np.median(x), 2))\nprint(f\"CI 95%       : [{lo:.2f}, {hi:.2f}]\")\nprint(\"خطای معیار   :\", round(medians.std(), 3))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "آزمون A/B با Permutation Test",
     "content": "<p>برای مقایسه‌ی دو گروه بدون فرض نرمال بودن: برچسب‌ها را بارها بُر بزن و ببین اختلاف مشاهده‌شده در میان اختلاف‌های تصادفی چقدر نادر است. نسبت اختلاف‌های تصادفی بزرگ‌تر یا مساوی، <b>p-value</b> است. توجه: p-value احتمال «فرضیه درست است» نیست.</p>",
     "exercise": "اندازه‌ی اثر را نصف کن و تغییر p-value را ببین.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(7)\na = rng.binomial(1, 0.10, 4000)    # کنترل\nb = rng.binomial(1, 0.12, 4000)    # تیمار\nobs = b.mean() - a.mean()\n\npool = np.concatenate([a, b]); n = len(a)\ncnt = 0; R = 5000\nfor _ in range(R):\n    rng.shuffle(pool)\n    d = pool[n:].mean() - pool[:n].mean()\n    cnt += abs(d) >= abs(obs)\nprint(\"اختلاف مشاهده‌شده:\", round(obs, 4))\nprint(\"p-value (دوطرفه):\", round((cnt + 1) / (R + 1), 4))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "K-Means از صفر و انتخاب k",
     "content": "<p>K-Means دو گام را تکرار می‌کند: تخصیص هر نقطه به نزدیک‌ترین مرکز، سپس میانگین‌گیری. نتیجه به مقداردهی اولیه وابسته است، پس چند بار اجرا کن و کمترین inertia را نگه دار. برای انتخاب k نمودار inertia (روش آرنج) یا silhouette را بررسی کن.</p>",
     "exercise": "k را از ۱ تا ۷ ببر و آرنج را پیدا کن.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(8)\ncenters = np.array([[0, 0], [6, 6], [0, 7]])\nX = np.vstack([c + rng.normal(0, 1, (100, 2)) for c in centers])\n\ndef kmeans(X, k, seed, iters=50):\n    r = np.random.default_rng(seed)\n    C = X[r.choice(len(X), k, replace=False)]\n    for _ in range(iters):\n        d = ((X[:, None, :] - C[None]) ** 2).sum(-1)\n        lab = d.argmin(1)\n        newC = np.array([X[lab == j].mean(0) if (lab == j).any() else C[j] for j in range(k)])\n        if np.allclose(newC, C): break\n        C = newC\n    d = ((X[:, None, :] - C[None]) ** 2).sum(-1)\n    return d.min(1).sum()\n\nfor k in range(1, 7):\n    best = min(kmeans(X, k, s) for s in range(10))\n    print(k, round(best, 1))",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "رگرسیون لجستیک از صفر با گرادیان",
     "content": "<p>مدل: <code>p = σ(Xw + b)</code> و زیان آنتروپی متقاطع. گرادیان بسیار تمیز است: <code>Xᵀ(p − y)/n</code>. این همان لایه‌ی خروجی هر شبکه‌ی طبقه‌بندی است. مقیاس‌دهی ویژگی‌ها همگرایی را بسیار سریع‌تر می‌کند.</p>",
     "exercise": "نرخ یادگیری را ۱۰ کن و ببین زیان چه می‌شود.",
     "py": "import numpy as np\n\nrng = np.random.default_rng(9)\nn = 1000\nX = rng.normal(size=(n, 2))\ntrue_w = np.array([2.0, -3.0]); true_b = 0.5\ny = (rng.random(n) < 1 / (1 + np.exp(-(X @ true_w + true_b)))).astype(float)\n\nw = np.zeros(2); b = 0.0; lr = 0.5\nfor step in range(500):\n    p = 1 / (1 + np.exp(-(X @ w + b)))\n    gw = X.T @ (p - y) / n\n    gb = (p - y).mean()\n    w -= lr * gw; b -= lr * gb\n    if step % 100 == 0:\n        loss = -(y * np.log(p + 1e-12) + (1 - y) * np.log(1 - p + 1e-12)).mean()\n        print(step, round(loss, 4))\nprint(\"w:\", w.round(2), \"b:\", round(b, 2))\nprint(\"دقت:\", ((p > .5) == y).mean())",
     "packages": [
      "numpy"
     ]
    },
    {
     "title": "Pandas: pivot، melt و crosstab برای بازشکل‌دهی",
     "content": "<p>دو شکل داده: <b>wide</b> (ستون برای هر ماه) و <b>long</b> (یک سطر برای هر مشاهده). ابزارهای مدل‌سازی و رسم معمولاً long می‌خواهند: <code>melt</code>. برای گزارش، <code>pivot_table</code> با <code>aggfunc</code> و <code>crosstab</code> برای شمارش ترکیب دسته‌ها.</p>",
     "exercise": "margins=True را به pivot_table اضافه کن.",
     "py": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"city\":  [\"تهران\", \"تهران\", \"شیراز\", \"شیراز\", \"تهران\", \"شیراز\"],\n    \"month\": [\"فرو\", \"ارد\", \"فرو\", \"ارد\", \"فرو\", \"ارد\"],\n    \"sales\": [100, 120, 80, 90, 30, 40],\n    \"chan\":  [\"web\", \"web\", \"web\", \"app\", \"app\", \"app\"],\n})\npv = df.pivot_table(index=\"city\", columns=\"month\", values=\"sales\", aggfunc=\"sum\")\nprint(pv, \"\\n\")\n\nlong = pv.reset_index().melt(id_vars=\"city\", var_name=\"month\", value_name=\"sales\")\nprint(long, \"\\n\")\nprint(pd.crosstab(df.city, df.chan, values=df.sales, aggfunc=\"sum\", normalize=\"index\").round(2))",
     "packages": [
      "pandas"
     ]
    },
    {
     "title": "تحلیل Cohort و Retention با Pandas",
     "content": "<p>Cohort یعنی گروه‌بندی کاربران بر اساس ماه ثبت‌نام و دنبال‌کردن بازگشتشان در ماه‌های بعد. گام‌ها: ماه اول هر کاربر با <code>transform('min')</code>، فاصله‌ی ماهی، سپس <code>pivot_table</code> شمارش کاربر یکتا و تقسیم بر اندازه‌ی ستون صفر.</p>",
     "exercise": "فعالیت‌ها را طوری بساز که retention ماه ۲ صفر شود.",
     "py": "import numpy as np\nimport pandas as pd\n\nrng = np.random.default_rng(10)\nrows = []\nfor uid in range(300):\n    start = rng.integers(0, 3)\n    for m in range(start, 6):\n        if m == start or rng.random() < 0.6 ** (m - start):\n            rows.append((uid, pd.Period(\"2026-01\") + int(m)))\nev = pd.DataFrame(rows, columns=[\"uid\", \"month\"])\n\nev[\"cohort\"] = ev.groupby(\"uid\").month.transform(\"min\")\nev[\"age\"] = (ev.month - ev.cohort).apply(lambda d: d.n)\ntab = ev.pivot_table(index=\"cohort\", columns=\"age\", values=\"uid\", aggfunc=\"nunique\")\nret = tab.div(tab[0], axis=0).round(2)\nprint(ret)",
     "packages": [
      "numpy",
      "pandas"
     ]
    }
   ],
   "quiz": [
    {
     "q": "شبکهٔ عصبی نسبت به رگرسیون خطی ساده چه مزیتی دارد؟",
     "options": [
      "همیشه سریع‌تر است",
      "می‌تواند الگوهای بسیار پیچیده‌تر (مثل تشخیص تصویر) را یاد بگیرد",
      "نیازی به داده ندارد",
      "کدش کوتاه‌تر است"
     ],
     "answer": 1,
     "explain": "ترکیب لایه‌های زیاد از واحدهای ساده، یادگیری الگوهای غیرخطی پیچیده را ممکن می‌کند."
    },
    {
     "q": "پرسپترون اساساً چه کاری انجام می‌دهد؟",
     "options": [
      "ذخیرهٔ داده در فایل",
      "ورودی‌ها را با وزن ترکیب کرده و از یک تابع فعال‌سازی رد می‌کند تا خروجی تولید کند",
      "فقط اعداد را مرتب می‌کند",
      "جایگزین دیتابیس است"
     ],
     "answer": 1,
     "explain": "این ساده‌ترین واحد سازندهٔ شبکه‌های عصبی است."
    },
    {
     "q": "وجه‌اشتراک اصلی بین پرسپترون ساده و یک مدل زبانی بزرگ (LLM) چیست؟",
     "options": [
      "هیچ شباهتی ندارند",
      "هر دو بر پایهٔ وزن‌ها، محاسبهٔ خطا و به‌روزرسانی تدریجی (نسخه‌های Gradient Descent) کار می‌کنند",
      "LLM از پایتون استفاده نمی‌کند",
      "پرسپترون از متن استفاده می‌کند"
     ],
     "answer": 1,
     "explain": "تفاوت اصلی در مقیاس (تعداد پارامتر و داده) است، نه در مفهوم پایه."
    },
    {
     "q": "Recall چه می‌سنجد؟",
     "options": [
      "چندتا از مثبت‌های واقعی پیدا شد",
      "تعداد ستون‌ها",
      "سرعت مدل",
      "حجم داده"
     ],
     "answer": 0,
     "explain": "نسبت مثبت‌های درست به همهٔ مثبت‌های واقعی."
    },
    {
     "q": "Data Leakage چیست؟",
     "options": [
      "نشت اطلاعات تست به آموزش",
      "حذف داده",
      "پر شدن حافظه",
      "خطای شبکه"
     ],
     "answer": 0,
     "explain": "باعث دقت کاذب می‌شود."
    },
    {
     "q": "برش (slice) آرایه‌ی NumPy چه می‌دهد؟",
     "options": [
      "View که حافظه را مشترک دارد",
      "Copy مستقل",
      "لیست پایتون",
      "رشته"
     ],
     "answer": 0,
     "explain": "تغییرش آرایه‌ی اصلی را عوض می‌کند."
    },
    {
     "q": "transform در groupby چه فرقی با agg دارد؟",
     "options": [
      "خروجی هم‌شکل با داده‌ی اصلی می‌دهد",
      "سریع‌تر است",
      "فقط برای رشته است",
      "حذف می‌کند"
     ],
     "answer": 0,
     "explain": "برای ساخت ویژگی‌های گروهی مفید است."
    },
    {
     "q": "L1 (Lasso) چه می‌کند؟",
     "options": [
      "بعضی ضرایب را صفر می‌کند",
      "همه را بزرگ می‌کند",
      "داده را حذف می‌کند",
      "هیچ"
     ],
     "answer": 0,
     "explain": "انتخاب ویژگی خودکار."
    },
    {
     "q": "در سری زمانی تقسیم train/test باید چگونه باشد؟",
     "options": [
      "زمانی، نه تصادفی",
      "تصادفی",
      "فرقی ندارد",
      "فقط یک ردیف"
     ],
     "answer": 0,
     "explain": "وگرنه آینده نشت می‌کند."
    },
    {
     "q": "کدام کار باعث نشت داده می‌شود؟",
     "options": [
      "مقیاس‌دهی با آمار کل داده قبل از split",
      "fit کردن scaler روی foldهای آموزش",
      "استفاده از Pipeline",
      "تعیین seed ثابت"
     ],
     "answer": 0,
     "explain": "آمار داده‌ی تست نباید در آموزش دخیل باشد؛ همه‌ی مراحل باید داخل Pipeline fit شوند."
    },
    {
     "q": "AUC چه چیزی را نشان می‌دهد؟",
     "options": [
      "احتمال اینکه امتیاز یک مثبت تصادفی از یک منفی تصادفی بیشتر باشد",
      "دقت در آستانه‌ی ۰٫۵",
      "نسبت داده‌ی مثبت",
      "میانگین زیان"
     ],
     "answer": 0,
     "explain": "AUC مستقل از آستانه است و معادل آماره‌ی Mann-Whitney است."
    },
    {
     "q": "زیر سازوکار MAR حذف سطرهای گمشده چه می‌کند؟",
     "options": [
      "می‌تواند میانگین را بایاس کند",
      "همیشه بی‌طرف است",
      "واریانس را صفر می‌کند",
      "هیچ اثری ندارد"
     ],
     "answer": 0,
     "explain": "گمشدن وابسته به ستون‌های دیگر است و نمونه‌ی باقی‌مانده نماینده نیست."
    },
    {
     "q": "p-value در permutation test چه معنایی دارد؟",
     "options": [
      "احتمال اختلافی حداقل به این بزرگی اگر هیچ اثری نباشد",
      "احتمال درست‌بودن فرضیه",
      "اندازه‌ی اثر",
      "احتمال خطای مدل"
     ],
     "answer": 0,
     "explain": "p-value تحت فرض صفر محاسبه می‌شود و احتمال فرضیه نیست."
    }
   ]
  }
 ],
 "project": {
  "title": "پیش‌بینی‌گر ساده با رگرسیون خطی",
  "brief": "یک برنامهٔ کامل بساز که یک دیتاست کوچک (مثلاً رابطهٔ بین ساعت مطالعه و نمرهٔ امتحان، حداقل ۱۰ نمونه) رو با Train/Test Split تقسیم کنه، یک مدل رگرسیون خطی با Gradient Descent روی Train آموزش بده، و دقت مدل رو روی Test گزارش کنه (میانگین خطا).",
  "requirements": [
   "حداقل ۱۰ نمونه داده (می‌تونی خودت بسازی)",
   "تقسیم درست Train/Test (۸۰/۲۰)",
   "پیاده‌سازی Gradient Descent (بدون کتابخانهٔ آماده مثل sklearn)",
   "محاسبهٔ و چاپ خطای مدل روی Test Set (نه فقط Train)"
  ],
  "hints": [
   "دقت مدل رو با میانگین قدرمطلق خطا (MAE: میانگین |پیش‌بینی - واقعی|) روی Test Set حساب کن — همون داده‌ای که مدل موقع آموزش ندیده."
  ]
 }
});
