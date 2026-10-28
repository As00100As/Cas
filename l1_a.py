import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; PD=['numpy','pandas']; SK=['numpy','scikit-learn']

add(1,1,"""<p><b>هوش مصنوعی (AI)</b> یعنی ساخت سامانه‌هایی که کارهایی را انجام می‌دهند که معمولاً به هوش انسانی نیاز دارد: دیدن، فهمیدن زبان، تصمیم‌گیری و برنامه‌ریزی. تاریخچه‌ی کوتاه: ۱۹۵۶ کنفرانس دارتموث و تولد نام AI؛ دهه‌ی ۶۰–۷۰ سامانه‌های قاعده‌محور؛ «زمستان‌های AI» به‌خاطر وعده‌های بیش‌ازحد؛ ۱۹۹۷ شکست کاسپاروف از Deep Blue؛ ۲۰۱۲ جهش یادگیری عمیق (AlexNet)؛ ۲۰۱۷ معماری Transformer؛ از ۲۰۲۲ مدل‌های زبانی بزرگ در دسترس همگان.</p>
<p>نقشه‌ی حوزه: <b>یادگیری ماشین</b> (کشف الگو از داده)، <b>بینایی ماشین</b>، <b>پردازش زبان</b>، <b>یادگیری تقویتی</b>، <b>رباتیک</b>، <b>سامانه‌های توصیه‌گر</b>. در این دوره از صفر شروع می‌کنیم: ریاضی لازم، داده، مدل‌های کلاسیک، شبکه‌های عصبی، Transformer و مدل‌های زبانی، و در سطح چهارم پژوهش و مقیاس بزرگ. تمام کدها با پایتون و کتابخانه‌هایی‌اند که در مرورگر اجرا می‌شوند.""",
"سه کار روزمره را نام ببر که در آن‌ها AI نقش دارد و برای هرکدام حدس بزن چه داده‌ای برای یادگیری لازم است.",
py="""timeline = {1956: "دارتموث: تولد نام AI", 1997: "Deep Blue", 2012: "AlexNet (یادگیری عمیق)", 2017: "Transformer", 2022: "مدل‌های زبانی همگانی"}
for y, e in timeline.items(): print(y, "→", e)
# نمونه‌ی «قاعده‌محور»: AI کلاسیک
def spam_rule(text): return any(w in text for w in ["برنده", "رایگان", "کلیک"])
print(spam_rule("شما برنده شدید"), spam_rule("جلسه فردا"))""")

add(1,2,"""<p>سه واژه‌ی تودرتو: <b>AI</b> (هدف کلی) ⊃ <b>ML</b> (یادگیری از داده به‌جای قاعده‌ی دستی) ⊃ <b>DL</b> (شبکه‌های عصبی چندلایه). در برنامه‌نویسی سنتی: <i>داده + قاعده → پاسخ</i>. در ML: <i>داده + پاسخ → قاعده (مدل)</i>. سپس مدل روی داده‌ی تازه پیش‌بینی می‌کند.</p>
<p>کی ML؟ وقتی نوشتن قاعده دشوار است (تشخیص چهره)، قاعده‌ها زیاد تغییر می‌کنند (اسپم)، یا داده‌ی فراوان دارید. کی نه؟ وقتی قاعده ساده و دقیق است (محاسبه‌ی مالیات). DL معمولاً برای داده‌ی بدون ساختار (تصویر، صدا، متن) و حجم بالا می‌درخشد؛ برای داده‌ی جدولی کوچک اغلب مدل‌های کلاسیک بهترند.""",
"برای «محاسبه‌ی مبلغ فاکتور» و «تشخیص گربه در عکس» بگو کدام قاعده‌ی دستی و کدام ML است و چرا.",
py="""import numpy as np
# سنتی: قاعده را خودمان می‌دانیم
def fahrenheit(c): return c * 9 / 5 + 32
# ML: قاعده را از داده پیدا می‌کنیم
c = np.array([0, 10, 20, 30, 40.0]); f = np.array([32, 50, 68, 86, 104.0])
a, b = np.polyfit(c, f, 1)
print(f"مدل یادگرفته‌شده: f = {a:.2f}*c + {b:.2f}")
print("پیش‌بینی ۲۵ درجه:", round(a * 25 + b, 1), "| قاعده‌ی واقعی:", fahrenheit(25))""",packages=NP)

add(1,3,"""<p>ابزارها: <b>پایتون</b> زبان استاندارد AI است. <b>Jupyter Notebook</b> سلول‌های کد و متن و نمودار را ترکیب می‌کند (تعاملی و عالی برای آزمایش). <b>Google Colab</b> نسخه‌ی ابری رایگان با GPU. کتابخانه‌ها: <b>NumPy</b> (آرایه)، <b>pandas</b> (جدول)، <b>matplotlib</b> (نمودار)، <b>scikit-learn</b> (ML کلاسیک)، <b>PyTorch</b> (یادگیری عمیق)، <b>Hugging Face</b> (مدل‌های آماده).</p>
<p>نصب محلی: <code class='inline'>python -m venv .venv</code>، فعال‌سازی، <code class='inline'>pip install numpy pandas scikit-learn jupyter</code>. همیشه <b>محیط مجازی</b> بساز و نسخه‌ها را در <code class='inline'>requirements.txt</code> ثبت کن. در این پلتفرم کدها مستقیم در مرورگر با Pyodide اجرا می‌شوند؛ بار اول بسته‌ها کمی طول می‌کشند.""",
"نسخه‌ی NumPy و pandas و scikit-learn را چاپ کن.",
py="""import sys, numpy, pandas, sklearn
print(sys.version.split()[0])
print("numpy", numpy.__version__, "| pandas", pandas.__version__, "| sklearn", sklearn.__version__)""",packages=['numpy','pandas','scikit-learn'],
extra=code("نصب محلی","""python -m venv .venv
source .venv/bin/activate        # ویندوز: .venv\\\\Scripts\\\\activate
pip install numpy pandas scikit-learn matplotlib jupyter
pip freeze > requirements.txt
jupyter lab"""))

add(1,4,"""<p><b>بردار</b> فهرستی از اعداد است (مثلاً ویژگی‌های یک خانه: [متراژ، اتاق، سن]). <b>ماتریس</b> جدول اعداد است (هر سطر یک نمونه). اعمال: جمع و تفریق درایه‌ای، ضرب در عدد (مقیاس)، <b>ضرب داخلی</b> <code class='inline'>a·b = Σ aᵢbᵢ</code>، <b>طول</b> (نُرم) <code class='inline'>‖a‖=√(a·a)</code> و <b>ترانهاده</b> (Aᵀ). ضرب داخلی میزان «هم‌جهتی» دو بردار را نشان می‌دهد؛ پایه‌ی شباهت کسینوسی و همه‌ی لایه‌های شبکه‌ی عصبی.""",
"شباهت کسینوسی دو بردار را حساب کن و برای بردارهای عمود و هم‌جهت بررسی کن.",
py="""import numpy as np
a = np.array([1., 2., 3.]); b = np.array([4., 5., 6.])
print(a + b, 2 * a, a @ b, np.linalg.norm(a))
cos = lambda x, y: x @ y / (np.linalg.norm(x) * np.linalg.norm(y))
print(round(cos(a, b), 4), cos(np.array([1, 0]), np.array([0, 1])), round(cos(a, 3 * a), 4))
M = np.array([[1, 2, 3], [4, 5, 6]])
print(M.shape, M.T.shape)""",packages=NP)

add(1,5,"""<p><b>ضرب ماتریسی</b> <code class='inline'>C = A@B</code>: درایه‌ی (i,j) ضرب داخلی سطر i از A و ستون j از B است؛ شرط: ستون‌های A = سطرهای B. معنای هندسی: ماتریس یک <b>تبدیل خطی</b> (چرخش، کشش، تصویر) است و ضرب آن در بردار، بردار را تبدیل می‌کند. ضرب دو ماتریس = ترکیب دو تبدیل (ترتیب مهم است: AB≠BA). یک لایه‌ی شبکه‌ی عصبی دقیقاً <code class='inline'>y = Wx + b</code> است.""",
"ماتریس چرخش ۹۰ درجه را روی بردار (1,0) اعمال کن.",
py="""import numpy as np
A = np.array([[1, 2], [3, 4]]); B = np.array([[0, 1], [1, 0]])
print(A @ B); print(B @ A, "← ترتیب مهم است")
t = np.pi / 2
R = np.array([[np.cos(t), -np.sin(t)], [np.sin(t), np.cos(t)]])
print(np.round(R @ np.array([1, 0]), 6))
S = np.diag([2, 3]); print(S @ np.array([1, 1]))
X = np.random.default_rng(0).normal(size=(4, 3)); W = np.ones((3, 2))
print((X @ W + 0.5).shape, "← یک لایه: ۴ نمونه، ۳ ورودی، ۲ خروجی")""",packages=NP)

add(1,6,"""<p><b>مشتق</b> نرخ تغییر لحظه‌ای است: شیب خط مماس. <code class='inline'>f′(x) ≈ (f(x+h) − f(x))/h</code>. اگر f′>0 تابع صعودی است و اگر f′&lt;0 نزولی. در چندمتغیره <b>گرادیان</b> برداری از مشتق‌های جزئی است که به‌سمت بیشترین افزایش اشاره می‌کند؛ پس <b>حرکت خلاف گرادیان</b> به کمینه نزدیک می‌کند. قاعده‌ی زنجیره‌ای: <code class='inline'>(f∘g)′ = f′(g)·g′</code> که پایه‌ی پس‌انتشار است.""",
"گرادیان f(x,y)=x²+3y² را در (1,2) به‌صورت عددی حساب کن و با فرمول تحلیلی مقایسه کن.",
py="""import numpy as np
f = lambda x: x ** 3 - 2 * x
h = 1e-6
for x in (0, 1, 2): print(x, round((f(x + h) - f(x - h)) / (2 * h), 4), "تحلیلی:", 3 * x ** 2 - 2)
g = lambda p: p[0] ** 2 + 3 * p[1] ** 2
def grad(fn, p, h=1e-6):
    p = np.array(p, float); out = np.zeros_like(p)
    for i in range(len(p)):
        d = np.zeros_like(p); d[i] = h
        out[i] = (fn(p + d) - fn(p - d)) / (2 * h)
    return out
print(np.round(grad(g, [1, 2]), 4), "تحلیلی:", [2 * 1, 6 * 2])
# زنجیره‌ای: d/dx sin(x^2) = cos(x^2) * 2x
x = 1.3; print(round(np.cos(x**2) * 2 * x, 5), round((np.sin((x+h)**2) - np.sin((x-h)**2)) / (2*h), 5))""",packages=NP)

add(1,7,"""<p><b>متغیر تصادفی</b> مقداری است که نتیجه‌ی یک پدیده‌ی تصادفی را می‌گیرد. <b>گسسته</b> (پرتاب تاس) با تابع جرم احتمال؛ <b>پیوسته</b> (قد) با تابع چگالی. توزیع‌های مهم: <b>برنولی/دوجمله‌ای</b> (شیر یا خط)، <b>یکنواخت</b>، <b>نرمال (گاوسی)</b> با زنگوله‌ی میانگین μ و انحراف σ. <b>قانون اعداد بزرگ</b>: با نمونه‌ی بیشتر، میانگین نمونه به میانگین واقعی نزدیک می‌شود. شبیه‌سازی با seed ثابت، آزمایش را تکرارپذیر می‌کند.""",
"۱۰۰۰۰ پرتاب دو تاس را شبیه‌سازی کن و احتمال مجموع ۷ را با ۱/۶ مقایسه کن.",
py="""import numpy as np
rng = np.random.default_rng(42)
d = rng.integers(1, 7, size=(10000, 2)).sum(axis=1)
print("P(مجموع=۷) ≈", (d == 7).mean(), "| نظری:", round(1 / 6, 4))
for n in (10, 100, 10000): print(n, "پرتاب: میانگین", rng.integers(1, 7, n).mean())
x = rng.normal(170, 10, 100000)
print("نرمال: میانگین", round(x.mean(), 1), "std", round(x.std(), 1), "| درون ±۱σ:", round(((x > 160) & (x < 180)).mean(), 3))""",packages=NP)

add(1,8,"""<p><b>میانگین</b> (مرکز)، <b>میانه</b> (مقاوم در برابر پرت)، <b>واریانس</b> <code class='inline'>σ²=E[(x−μ)²]</code> (پراکندگی) و <b>انحراف معیار</b> σ (هم‌واحد داده). برای نمونه از <code class='inline'>n−1</code> (تصحیح بسل) استفاده می‌شود (<code class='inline'>ddof=1</code>). <b>همبستگی</b> رابطه‌ی خطی دو متغیر را بین −۱ و ۱ می‌سنجد، ولی <b>همبستگی ≠ علیت</b>. مقدار پرت میانگین را کج می‌کند؛ همیشه میانه را هم ببین.""",
"داده‌ی حقوق با یک مقدار پرت بساز و اثر آن را روی میانگین و میانه نشان بده.",
py="""import numpy as np
sal = np.array([30, 32, 35, 36, 40, 41, 45], float)
print(sal.mean(), np.median(sal), sal.std(), sal.std(ddof=1))
sal2 = np.append(sal, 500)
print("با پرت:", round(sal2.mean(), 1), np.median(sal2))
rng = np.random.default_rng(0)
x = rng.normal(size=500); y = 2 * x + rng.normal(scale=0.5, size=500)
print("همبستگی:", round(np.corrcoef(x, y)[0, 1], 3))
print("همبستگی غیرخطی:", round(np.corrcoef(x, x ** 2)[0, 1], 3), "← خطی نیست ولی وابسته است")""",packages=NP)

add(1,9,"""<p><b>قضیه‌ی بیز</b>: <code class='inline'>P(A|B) = P(B|A)·P(A) / P(B)</code>. یعنی باور اولیه (پیشین) را با شواهد به‌روز می‌کنیم (پسین). مثال کلاسیک: آزمایشی با حساسیت ۹۹٪ برای بیماری با شیوع ۱٪ و خطای مثبت ۵٪؛ اگر نتیجه مثبت شد، احتمال بیماری فقط حدود ۱۶٪ است نه ۹۹٪! چون بیماران کم‌اند و مثبت کاذب بسیار. این «مغالطه‌ی نرخ پایه» است و پایه‌ی Naive Bayes و استنتاج بیزی.""",
"شیوع را ۱۰٪ کن و ببین احتمال پسین چقدر تغییر می‌کند.",
py="""def posterior(prior, sens, fpr):
    evidence = sens * prior + fpr * (1 - prior)
    return sens * prior / evidence
for prior in (0.001, 0.01, 0.1, 0.5):
    print(f"شیوع {prior:>5}: P(بیمار | مثبت) = {posterior(prior, 0.99, 0.05):.3f}")
# به‌روزرسانی متوالی: دو آزمایش مثبت
p = 0.01
for _ in range(2): p = posterior(p, 0.99, 0.05)
print("بعد از دو مثبت:", round(p, 3))""")

add(1,10,"""<p>آمار توصیفی با پایتون: <code class='inline'>pandas.DataFrame.describe()</code> شمار، میانگین، std، کمینه، چارک‌ها و بیشینه را می‌دهد. <b>چارک‌ها</b> (۲۵٪، ۵۰٪، ۷۵٪) و <b>IQR = Q3−Q1</b>؛ قاعده‌ی پرت: خارج از <code class='inline'>[Q1−1.5·IQR, Q3+1.5·IQR]</code>. <b>چولگی</b> و <b>کشیدگی</b> شکل توزیع را توصیف می‌کنند. نمودار جعبه‌ای همین‌ها را نشان می‌دهد. توصیف داده اولین قدم هر پروژه است؛ قبل از مدل‌سازی داده را بشناس.""",
"با قاعده‌ی IQR پرت‌های ستون «قیمت» را پیدا کن.",
py="""import pandas as pd, numpy as np
rng = np.random.default_rng(1)
df = pd.DataFrame({"متراژ": rng.integers(40, 160, 200), "قیمت": rng.lognormal(7, 0.4, 200).round()})
print(df.describe().round(1))
q1, q3 = df["قیمت"].quantile([.25, .75]); iqr = q3 - q1
out = df[(df["قیمت"] < q1 - 1.5 * iqr) | (df["قیمت"] > q3 + 1.5 * iqr)]
print("تعداد پرت:", len(out), "| چولگی:", round(df["قیمت"].skew(), 2))""",packages=PD)

add(1,11,"""<p><b>NumPy</b> قلب محاسبات علمی: آرایه‌ی <code class='inline'>ndarray</code> همگن و فشرده با عملیات <b>برداری‌شده</b> (سریع‌تر از حلقه‌ی پایتون تا ۱۰۰ برابر). ساخت: <code class='inline'>array, zeros, ones, arange, linspace, eye, random</code>. ویژگی‌ها: <code class='inline'>shape, dtype, ndim, size</code>. تغییر شکل: <code class='inline'>reshape, ravel, T</code>. آمار: <code class='inline'>sum, mean, std, min, max, argmax</code> با پارامتر <code class='inline'>axis</code> (۰ = روی سطرها، ۱ = روی ستون‌ها).""",
"آرایه‌ی ۱ تا ۱۲ را ۳×۴ کن و جمع هر سطر و هر ستون را بگیر.",
py="""import numpy as np, time
a = np.arange(1, 13).reshape(3, 4)
print(a, a.shape, a.dtype)
print(a.sum(axis=0), a.sum(axis=1), a.mean(), a.argmax())
print(np.linspace(0, 1, 5), np.eye(3, dtype=int)[0])
n = 1_000_000; x = list(range(n)); y = np.arange(n)
t = time.perf_counter(); sum(i * 2 for i in x); t1 = time.perf_counter() - t
t = time.perf_counter(); (y * 2).sum(); t2 = time.perf_counter() - t
print("NumPy سریع‌تر:", t2 < t1)""",packages=NP)

add(1,12,"""<p><b>برش</b> <code class='inline'>a[i:j, k:l]</code> نمای (view) بدون کپی می‌دهد؛ تغییر آن آرایه‌ی اصلی را تغییر می‌دهد (برای کپی <code class='inline'>.copy()</code>). <b>اندیس‌گذاری بولی</b> <code class='inline'>a[a&gt;3]</code> و <b>اندیس‌گذاری فانتزی</b> <code class='inline'>a[[0,2]]</code> کپی می‌سازند. <b>Broadcasting</b>: آرایه‌هایی با شکل‌های متفاوت سازگار می‌شوند اگر از آخر هر بعد برابر یا ۱ باشد؛ مثلاً (۳×۴) + (۴,) یا (۳×۱). نتیجه: بدون حلقه، کم‌مصرف.""",
"هر ستون ماتریس را با کم کردن میانگین و تقسیم بر انحراف معیار استانداردسازی کن.",
py="""import numpy as np
a = np.arange(12).reshape(3, 4)
v = a[:, 1:3]; v[0, 0] = 99; print(a[0], "← برش نما است")
print(a[a > 8], a[[0, 2], 1])
col = np.array([[10], [20], [30]]); row = np.array([1, 2, 3, 4])
print((col + row).shape, (col + row)[1])
X = np.random.default_rng(0).normal(5, 3, size=(100, 3))
Z = (X - X.mean(axis=0)) / X.std(axis=0)
print(np.round(Z.mean(axis=0), 6), np.round(Z.std(axis=0), 6))
try: np.ones((3, 4)) + np.ones((3,))
except ValueError as e: print("خطای شکل:", str(e)[:40])""",packages=NP)

add(1,13,"""<p><b>pandas</b>: <code class='inline'>Series</code> (ستون با شاخص) و <code class='inline'>DataFrame</code> (جدول). ساخت از دیکشنری/CSV (<code class='inline'>read_csv</code>). انتخاب: <code class='inline'>df["ستون"]</code>، <code class='inline'>df.loc[سطر, ستون]</code> (برچسب) و <code class='inline'>df.iloc[i, j]</code> (موقعیت). بررسی سریع: <code class='inline'>head, info, shape, dtypes, describe</code>. ستون‌ها NumPy پشتیبان دارند و عملیات برداری‌شده‌اند. ساخت ستون جدید: <code class='inline'>df["c"] = df["a"] * df["b"]</code>.""",
"یک DataFrame از ۵ دانش‌آموز بساز، ستون «معدل» را حساب کن و بهترین را پیدا کن.",
py="""import pandas as pd
df = pd.DataFrame({"نام": ["علی", "سارا", "رضا", "مینا", "پویا"], "ریاضی": [18, 20, 15, 17, 12], "علوم": [16, 19, 14, 18, 15]})
df["معدل"] = (df["ریاضی"] + df["علوم"]) / 2
print(df); df.info()
print(df.loc[df["معدل"].idxmax(), "نام"], "| iloc:", df.iloc[0, 1])
print(df.set_index("نام").loc["سارا"].to_dict())""",packages=PD)

add(1,14,"""<p>فیلتر با شرط بولی: <code class='inline'>df[(df.a&gt;3) &amp; (df.b=="x")]</code> (پرانتز و <code class='inline'>&amp;</code> / <code class='inline'>|</code> لازم است) یا <code class='inline'>df.query("a&gt;3 and b=='x'")</code>. <b>گروه‌بندی</b>: <code class='inline'>df.groupby("دسته")["مقدار"].agg(["mean","sum","count"])</code> (جداسازی-اعمال-ترکیب). <b>ادغام</b>: <code class='inline'>pd.merge(a, b, on="id", how="left")</code> مانند JOIN در SQL. <code class='inline'>pivot_table</code> جدول محوری و <code class='inline'>sort_values</code> مرتب‌سازی.""",
"فروش به تفکیک شهر و محصول را با pivot_table خلاصه کن.",
py="""import pandas as pd
sales = pd.DataFrame({"شهر": ["تهران", "تهران", "شیراز", "شیراز", "تبریز"], "محصول": ["الف", "ب", "الف", "الف", "ب"], "مبلغ": [100, 150, 80, 120, 90], "id": [1, 2, 3, 4, 5]})
print(sales[(sales["مبلغ"] > 90) & (sales["شهر"] != "تبریز")])
print(sales.groupby("شهر")["مبلغ"].agg(["sum", "mean", "count"]))
print(sales.pivot_table(index="شهر", columns="محصول", values="مبلغ", aggfunc="sum", fill_value=0))
info = pd.DataFrame({"id": [1, 2, 3], "مشتری": ["الف", "ب", "ج"]})
print(pd.merge(sales, info, on="id", how="left")[["id", "مشتری"]])""",packages=PD)

add(1,15,"""<p>داده‌ی واقعی کثیف است: <b>مقدار گمشده</b> (<code class='inline'>NaN</code>)، تکراری، نوع اشتباه، نام‌های ناسازگار، پرت. ابزارها: <code class='inline'>isna().sum()</code>، <code class='inline'>dropna()</code>، <code class='inline'>fillna()</code> (میانگین/میانه/مد/پیشین)، <code class='inline'>drop_duplicates()</code>، <code class='inline'>astype()</code>، <code class='inline'>str.strip().str.lower()</code>. <b>تصمیم درباره‌ی گمشده</b>: حذف (اگر کم)، پر کردن با آمار، یا افزودن ستون نشانگر «گمشده بود». هرگز بی‌فکر پر نکن؛ مکانیزم گمشدن ممکن است معنادار باشد و باید فقط با آمار داده‌ی آموزش پر شود (درس نشت داده).""",
"ستون «سن» را با میانه پر کن و ستون نشانگر گمشدگی بساز.",
py="""import pandas as pd, numpy as np
df = pd.DataFrame({"نام": [" علی", "سارا ", "علی", None, "رضا"], "سن": [25, np.nan, 25, 31, np.nan], "شهر": ["تهران", "TEHRAN", "تهران", "شیراز", "شیراز"]})
print(df.isna().sum().to_dict())
df["نام"] = df["نام"].str.strip()
df["سن_گم"] = df["سن"].isna().astype(int)
df["سن"] = df["سن"].fillna(df["سن"].median())
df["شهر"] = df["شهر"].str.lower().replace({"tehran": "تهران"})
df = df.dropna(subset=["نام"]).drop_duplicates()
print(df)""",packages=PD)

add(1,16,"""<p><b>matplotlib</b> پایه‌ی مصورسازی: <code class='inline'>plt.plot</code> (خط)، <code class='inline'>scatter</code> (پراکندگی)، <code class='inline'>hist</code> (هیستوگرام)، <code class='inline'>bar</code>. رابط شیءگرا: <code class='inline'>fig, ax = plt.subplots()</code>. همیشه عنوان، برچسب محور و راهنما. انتخاب نمودار: توزیع → هیستوگرام/جعبه‌ای؛ رابطه‌ی دو متغیر → پراکندگی؛ روند زمانی → خطی؛ مقایسه‌ی دسته‌ها → میله‌ای. در این محیط خروجی تصویر نمایش داده نمی‌شود؛ پس نمودار را به PNG در حافظه ذخیره و ابعاد آن را بررسی می‌کنیم؛ روی سیستم خودت <code class='inline'>plt.show()</code> بزن.""",
"نمودار پراکندگی با خط رگرسیون بساز و در فایل ذخیره کن.",
py="""import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt, numpy as np, io
rng = np.random.default_rng(0)
x = rng.uniform(0, 10, 80); y = 3 * x + 2 + rng.normal(0, 2, 80)
fig, ax = plt.subplots(figsize=(5, 3))
ax.scatter(x, y, s=12, label="داده"); a, b = np.polyfit(x, y, 1)
ax.plot([0, 10], [b, 10 * a + b], "r", label=f"خط: {a:.1f}x+{b:.1f}")
ax.set_xlabel("x"); ax.set_ylabel("y"); ax.legend()
buf = io.BytesIO(); fig.savefig(buf, format="png"); print("PNG ذخیره شد:", len(buf.getvalue()) > 1000, "بایت", len(buf.getvalue()))
print(f"شیب برآوردی {a:.2f} (واقعی 3)")""",packages=['numpy','matplotlib'])

add(1,17,"""<p><b>seaborn</b> بر matplotlib سوار است و برای نمودارهای آماری زیباتر و کوتاه‌تر: <code class='inline'>histplot</code>، <code class='inline'>boxplot</code>، <code class='inline'>scatterplot(hue=...)</code>، <code class='inline'>heatmap</code> (ماتریس همبستگی)، <code class='inline'>pairplot</code> (همه‌ی جفت‌ها). با <code class='inline'>hue</code> بُعد دسته‌ای را رنگ می‌کنی. چون seaborn در محیط ما نیست، همان محاسبه‌ی پشت <b>heatmap همبستگی</b> را با pandas می‌انجام می‌دهیم و کد seaborn را برای اجرا روی سیستم خودت می‌گذاریم.""",
"ماتریس همبستگی را حساب کن و قوی‌ترین جفت ویژگی را بیاب.",
py="""import pandas as pd, numpy as np
rng = np.random.default_rng(3)
n = 300; area = rng.uniform(40, 200, n)
df = pd.DataFrame({"متراژ": area, "اتاق": (area / 40 + rng.normal(0, .5, n)).round(), "سن": rng.integers(0, 30, n)})
df["قیمت"] = area * 50 - df["سن"] * 20 + rng.normal(0, 300, n)
c = df.corr().round(2); print(c)
pairs = c.where(np.triu(np.ones(c.shape, bool), 1)).stack().abs().sort_values(ascending=False)
print("قوی‌ترین جفت:", pairs.index[0], pairs.iloc[0])""",packages=PD,
extra=code("seaborn (اجرا نشده)","""import seaborn as sns
sns.heatmap(df.corr(), annot=True, cmap="coolwarm", vmin=-1, vmax=1)
sns.pairplot(df, hue="شهر")"""))

add(1,18,"""<p><b>EDA</b> (اکتشاف داده) پیش از مدل‌سازی: ۱) ابعاد و نوع‌ها، ۲) گمشده‌ها و تکراری‌ها، ۳) توزیع هر ویژگی (چولگی، پرت)، ۴) رابطه‌ی ویژگی‌ها با هدف، ۵) همبستگی بین ویژگی‌ها (هم‌خطی)، ۶) توازن کلاس‌ها، ۷) خطای منطقی (سن منفی). خروجی EDA فرضیه‌هایی است درباره‌ی ویژگی‌های مفید و تبدیل‌های لازم. فهرست کنترل را به‌صورت تابع بنویس تا روی هر جدولی اجرا شود.""",
"تابع eda را بنویس که فهرست مشکلات ممکن هر DataFrame را برگرداند.",
py="""import pandas as pd, numpy as np
def eda(df, target=None):
    rep = {"shape": df.shape, "missing": df.isna().sum()[lambda s: s > 0].to_dict(), "dups": int(df.duplicated().sum())}
    num = df.select_dtypes("number")
    rep["skewed"] = [c for c in num if abs(num[c].skew()) > 1]
    rep["constant"] = [c for c in df if df[c].nunique() <= 1]
    if target in df and df[target].nunique() <= 10: rep["class_balance"] = df[target].value_counts(normalize=True).round(2).to_dict()
    return rep
rng = np.random.default_rng(0)
d = pd.DataFrame({"x": rng.exponential(2, 100), "y": rng.normal(size=100), "c": 1, "t": (rng.random(100) < .1).astype(int)})
d.loc[:4, "y"] = np.nan
print(eda(d, "t"))""",packages=PD)

add(1,19,"""<p><b>یادگیری نظارت‌شده</b>: داده‌ی برچسب‌دار (ورودی X و پاسخ y) داریم و تابع X→y را یاد می‌گیریم. دو نوع: <b>رگرسیون</b> (هدف عددی: قیمت) و <b>دسته‌بندی</b> (هدف کلاس: اسپم/نه). <b>بدون‌نظارت</b>: فقط X داریم و ساختار پنهان را می‌یابیم: <b>خوشه‌بندی</b>، <b>کاهش بُعد</b>، تشخیص ناهنجاری. گونه‌های دیگر: <b>نیمه‌نظارتی</b>، <b>خودنظارتی</b> (مدل‌های زبانی)، <b>تقویتی</b> (عامل با پاداش). انتخاب نوع مسئله اولین تصمیم طراحی است.""",
"برای پنج سناریو نوع مسئله را مشخص کن: پیش‌بینی دما، شناسایی تقلب، گروه‌بندی مشتریان، بازی شطرنج، تکمیل جمله.",
py="""tasks = {"پیش‌بینی دمای فردا": "نظارت‌شده/رگرسیون", "تشخیص تقلب بانکی": "نظارت‌شده/دسته‌بندی", "گروه‌بندی مشتریان": "بدون‌نظارت/خوشه‌بندی", "بازی شطرنج": "تقویتی", "تکمیل جمله": "خودنظارتی"}
for k, v in tasks.items(): print(f"{k:22} → {v}")
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.cluster import KMeans
X = np.array([[1], [2], [3], [4]]); y = np.array([2, 4, 6, 8])
print(LinearRegression().fit(X, y).predict([[5]]))
print(KMeans(2, n_init=10, random_state=0).fit_predict([[1], [1.2], [9], [9.1]]))""",packages=SK)

add(1,20,"""<p>مدل باید روی داده‌ی <b>دیده‌نشده</b> خوب عمل کند. پس داده را می‌شکنیم: <b>آموزش</b> (یادگیری)، <b>اعتبارسنجی</b> (انتخاب مدل/هایپرپارامتر) و <b>آزمون</b> (ارزیابی نهایی، فقط یک‌بار). نسبت معمول ۶۰/۲۰/۲۰ یا ۸۰/۱۰/۱۰. <code class='inline'>train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)</code>؛ <b>stratify</b> نسبت کلاس‌ها را حفظ می‌کند. برای داده‌ی زمانی تقسیم باید <b>بر اساس زمان</b> باشد (نه تصادفی). هرگز روی آزمون تنظیم نکن.""",
"تقسیم طبقه‌ای را روی داده‌ی نامتوازن انجام بده و نسبت کلاس‌ها را مقایسه کن.",
py="""import numpy as np
from sklearn.model_selection import train_test_split
rng = np.random.default_rng(0)
X = rng.normal(size=(1000, 3)); y = (rng.random(1000) < 0.1).astype(int)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
print(len(Xtr), len(Xte), ytr.mean().round(3), yte.mean().round(3))
Xtr2, Xte2, ytr2, yte2 = train_test_split(X, y, test_size=0.2, random_state=1)
print("بدون stratify:", yte2.mean().round(3))
Xtr, Xval, ytr, yval = train_test_split(Xtr, ytr, test_size=0.25, random_state=0, stratify=ytr)
print("آموزش/اعتبار/آزمون:", len(Xtr), len(Xval), len(Xte))""",packages=SK)

add(1,21,"""<p><b>رگرسیون خطی</b>: <code class='inline'>ŷ = w·x + b</code>. یافتن w و b که مجموع مربعات خطا را کمینه کند. <b>معادله‌ی نرمال</b>: <code class='inline'>w = (XᵀX)⁻¹Xᵀy</code> (با ستون یک برای بایاس). تفسیر ضرایب: اثر افزایش یک واحد ویژگی (با ثابت بودن بقیه). مفروضات: خطی بودن، استقلال خطاها، واریانس ثابت، عدم هم‌خطی شدید. معیار <b>R²</b> سهم واریانس توضیح‌داده‌شده. در scikit-learn: <code class='inline'>LinearRegression().fit(X, y)</code>.""",
"با معادله‌ی نرمال به‌دست آور و با LinearRegression مقایسه کن.",
py="""import numpy as np
from sklearn.linear_model import LinearRegression
rng = np.random.default_rng(0)
X = rng.uniform(0, 10, (100, 2)); y = 3 * X[:, 0] - 2 * X[:, 1] + 5 + rng.normal(0, 1, 100)
Xb = np.c_[np.ones(len(X)), X]
w = np.linalg.solve(Xb.T @ Xb, Xb.T @ y)
print("نرمال:", w.round(3))
m = LinearRegression().fit(X, y); print("sklearn:", m.intercept_.round(3), m.coef_.round(3), "R²:", round(m.score(X, y), 4))
print("پیش‌بینی:", m.predict([[4, 1]]).round(2))""",packages=SK)

add(1,22,"""<p><b>تابع هزینه</b> (loss) می‌گوید پیش‌بینی چقدر بد است. برای رگرسیون: <b>MSE</b> = میانگین مربع خطا (حساس به پرت)، <b>MAE</b> = میانگین قدرمطلق (مقاوم‌تر)، <b>RMSE</b> (هم‌واحد هدف)، <b>Huber</b> (ترکیبی). یادگیری = کمینه‌سازی هزینه‌ی میانگین روی داده‌ی آموزش. مربع کردن خطاهای بزرگ را بسیار جریمه می‌کند و مشتق‌پذیر است (برای گرادیان). انتخاب تابع هزینه باید با هدف تجاری هم‌خوان باشد.""",
"با یک مقدار پرت، MSE و MAE را مقایسه کن.",
py="""import numpy as np
y = np.array([10, 12, 11, 13, 12.])
good = np.array([10.5, 11.5, 11, 12.5, 12.5]); bad = good.copy(); bad[4] = 30
mse = lambda a, b: np.mean((a - b) ** 2); mae = lambda a, b: np.mean(np.abs(a - b))
def huber(a, b, d=1.0):
    e = np.abs(a - b); return np.mean(np.where(e <= d, .5 * e ** 2, d * (e - .5 * d)))
for name, p in [("خوب", good), ("با پرت", bad)]:
    print(name, "MSE", round(mse(y, p), 2), "RMSE", round(mse(y, p) ** .5, 2), "MAE", round(mae(y, p), 2), "Huber", round(huber(y, p), 2))""",packages=NP)

add(1,23,"""<p><b>گرادیان کاهشی</b>: <code class='inline'>w ← w − η ∂L/∂w</code>. برای MSE رگرسیون خطی: <code class='inline'>∂L/∂w = (2/n)·Xᵀ(Xw − y)</code>. چرخه: پیش‌بینی → هزینه → گرادیان → به‌روزرسانی. انواع: <b>دسته‌ای</b> (کل داده)، <b>تصادفی (SGD)</b> (یک نمونه) و <b>مینی‌دسته‌ای</b> (استاندارد). این اساس آموزش همه‌ی مدل‌های عمیق است.""",
"نسخه‌ی مینی‌دسته‌ای را بنویس.",
py="""import numpy as np
rng = np.random.default_rng(0)
X = rng.normal(size=(200, 2)); y = 4 * X[:, 0] - 3 * X[:, 1] + 2 + rng.normal(0, .3, 200)
Xb = np.c_[np.ones(200), X]; w = np.zeros(3); lr = 0.1
for epoch in range(100):
    g = 2 / len(y) * Xb.T @ (Xb @ w - y); w -= lr * g
print("دسته‌ای:", w.round(3), "| هزینه:", round(np.mean((Xb @ w - y) ** 2), 4))
w = np.zeros(3)
for epoch in range(30):
    idx = rng.permutation(200)
    for i in range(0, 200, 20):
        b = idx[i:i + 20]; w -= 0.05 * 2 / len(b) * Xb[b].T @ (Xb[b] @ w - y[b])
print("مینی‌دسته‌ای:", w.round(3))""",packages=NP)

add(1,24,"""<p><b>نرخ یادگیری η</b> مهم‌ترین هایپرپارامتر است: خیلی کوچک → کند؛ مناسب → همگرا؛ خیلی بزرگ → نوسان یا <b>واگرایی</b>. برای تابع درجه‌دوم با انحنای λ، شرط همگرایی <code class='inline'>η &lt; 2/λ</code> است. منحنی هزینه نسبت به تکرار را بکش: باید کاهشی باشد. راه‌حل‌ها: مقیاس‌دهی ویژگی‌ها، کاهش η، زمان‌بندی نرخ (decay)، و بهینه‌سازهای تطبیقی (Adam).""",
"چند نرخ یادگیری را مقایسه کن و بیشینه‌ی مجاز را تقریب بزن.",
py="""import numpy as np
def run(lr, steps=50):
    x, hist = 5.0, []
    for _ in range(steps):
        x -= lr * 2 * x; hist.append(x * x)          # f = x²، λ = 2 → η < 1
    return hist
for lr in (0.01, 0.1, 0.5, 0.9, 1.0, 1.1):
    h = run(lr); status = "واگرا" if h[-1] > h[0] else ("نوسان" if lr == 1.0 else "همگرا")
    print(f"η={lr:<4} هزینه‌ی نهایی {h[-1]:.3g} → {status}")""",packages=NP)

add(1,25,"""<p>ویژگی‌هایی با مقیاس متفاوت (متراژ ۱۰۰ در برابر تعداد اتاق ۳) گرادیان را کج می‌کنند و همگرایی را کند. دو روش: <b>استانداردسازی</b> <code class='inline'>z=(x−μ)/σ</code> و <b>Min-Max</b> <code class='inline'>(x−min)/(max−min)</code>. مدل‌های مبتنی بر فاصله (kNN، SVM، k-means) و گرادیانی حساس‌اند؛ درخت‌ها حساس نیستند. <b>مهم</b>: μ و σ را فقط از داده‌ی آموزش بگیر و روی آزمون همان را اعمال کن (<code class='inline'>fit</code> روی train، <code class='inline'>transform</code> روی بقیه) وگرنه نشت داده رخ می‌دهد.""",
"سرعت همگرایی گرادیان کاهشی را قبل و بعد از استانداردسازی مقایسه کن.",
py="""import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler
rng = np.random.default_rng(0)
X = np.c_[rng.uniform(40, 200, 300), rng.integers(1, 5, 300)]; y = 0.5 * X[:, 0] + 30 * X[:, 1] + rng.normal(0, 5, 300)
def steps_to_converge(X, y, lr, tol=1e-3, maxit=5000):
    Xb = np.c_[np.ones(len(X)), X]; w = np.zeros(Xb.shape[1])
    for i in range(maxit):
        g = 2 / len(y) * Xb.T @ (Xb @ w - y)
        if np.linalg.norm(g) < tol: return i
        if not np.isfinite(g).all() or np.linalg.norm(g) > 1e12: return "واگرا"
        w -= lr * g
    return f">{maxit}"
Xtr, Xte = X[:200], X[200:]
sc = StandardScaler().fit(Xtr)
print("خام (lr=1e-5):", steps_to_converge(Xtr, y[:200], 1e-5), "| استاندارد (lr=0.1):", steps_to_converge(sc.transform(Xtr), y[:200], 0.1))
print(sc.mean_.round(1), MinMaxScaler().fit(Xtr).transform(Xte).max(axis=0).round(2))""",packages=SK)
