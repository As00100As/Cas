import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(1,1,"""<p><b>پایتون</b> زبانی ساده، خوانا و پرکاربرد است: از وب و اتوماسیون تا هوش مصنوعی. برای نصب، از سایت رسمی python.org نسخه‌ی پایدار ۳ را بگیر. در ویندوز هنگام نصب حتماً گزینه‌ی <b>Add python.exe to PATH</b> را تیک بزن؛ در macOS و لینوکس معمولاً پایتون ۳ از قبل هست (<code class='inline'>python3 --version</code>).</p>
<p>بعد از نصب، در ترمینال بنویس <code class='inline'>python --version</code> (یا <code class='inline'>python3 --version</code>). اگر شماره‌ی نسخه آمد، آماده‌ای. اولین برنامه‌ی سنتی هر زبان «سلام دنیا» است؛ همین‌جا در مرورگر اجرایش کن.</p>""",
"عبارت print را طوری تغییر بده که اسم خودت را چاپ کند و خط دوم هم بنویسد «من پایتون یاد می‌گیرم».",
py="""print("سلام دنیا!")
print("این اولین برنامه‌ی پایتون من است")""")

add(1,2,"""<p>دو راه برای اجرای پایتون هست: <b>REPL</b> و <b>فایل اسکریپت</b>. REPL (Read-Eval-Print Loop) محیط تعاملی است: در ترمینال فقط <code class='inline'>python</code> بزن، یک دستور بنویس و بلافاصله نتیجه را ببین؛ برای آزمایش سریع عالی است (خروج با <code class='inline'>exit()</code>).</p>
<p>برای برنامه‌های واقعی، کد را در فایلی با پسوند <code class='inline'>.py</code> ذخیره می‌کنی و با <code class='inline'>python hello.py</code> اجرا می‌کنی. تفاوت کلیدی: در REPL مقدار هر عبارت خودکار نمایش داده می‌شود، اما در فایل فقط خروجی <code class='inline'>print</code> دیده می‌شود.</p>""",
"سه عبارت ریاضی مختلف بنویس و هرکدام را با print چاپ کن. توضیح بده اگر print را برداری، در فایل چه می‌شود.",
py="""# در REPL فقط نوشتن 2 + 3 کافی بود؛ در فایل باید print کنیم
print(2 + 3)
print(10 / 4)
print("پا" + "یتون")""")

add(1,3,"""<p><code class='inline'>print()</code> هر چیزی را در خروجی می‌نویسد. چند آرگومان را با کاما بده تا با <b>فاصله</b> کنار هم چاپ شوند. دو پارامتر مهم: <code class='inline'>sep</code> (جداکننده، پیش‌فرض فاصله) و <code class='inline'>end</code> (پایان خط، پیش‌فرض خط جدید).</p>
<p>کاراکترهای خاص با بک‌اسلش: <code class='inline'>\\n</code> خط جدید، <code class='inline'>\\t</code> تب. برای متن چندخطی از سه‌کوتیشن <code class='inline'>\"\"\"</code> استفاده می‌شود.</p>""",
"یک جدول سه‌ستونی ساده از نام، سن و شهر با sep='\\t' چاپ کن.",
py="""print("الف", "ب", "پ")
print("الف", "ب", "پ", sep="-")
print("بدون خط جدید", end=" ... ")
print("ادامه همان خط")
print("خط اول\\nخط دوم")
print(\"\"\"متن
چندخطی\"\"\")""")

add(1,4,"""<p><b>کامنت</b> توضیحی است که پایتون نادیده می‌گیرد؛ با <code class='inline'>#</code> شروع می‌شود. کامنت خوب «چرا» را می‌گوید نه «چه». مثلاً <code class='inline'># تخفیف ۱۰٪ طبق قرارداد</code> مفید است، ولی <code class='inline'># x را ۵ کن</code> بی‌فایده.</p>
<p>خوانایی بیش از زیبایی مهم است: نام‌های گویا، فاصله‌گذاری یکسان (۴ فاصله برای تورفتگی)، و خطوط نه‌چندان بلند. استاندارد رسمی سبک پایتون <b>PEP 8</b> است. در پایتون تورفتگی بخشی از دستور زبان است نه سلیقه.</p>""",
"این کد بد را با نام‌های گویا و یک کامنت مفید بازنویسی کن: a=50;b=3;print(a*b)",
py="""# قیمت واحد و تعداد را جدا و با نام گویا بنویس
unit_price = 50      # تومان
count = 3
total = unit_price * count   # جمع بدون تخفیف
print("جمع:", total)""")

add(1,5,"""<p><b>متغیر</b> نامی است برای یک مقدار. با <code class='inline'>=</code> مقدار می‌دهیم (انتساب نه برابری ریاضی): <code class='inline'>age = 20</code>. پایتون نوع را خودش از مقدار می‌فهمد (dynamic typing) و می‌شود بعداً مقدار دیگری با نوع دیگر داد.</p>
<p>قواعد نام: حرف یا <code class='inline'>_</code> شروع شود، حروف کوچک/بزرگ فرق دارند (<code class='inline'>Age ≠ age</code>)، کلمات رزروشده (مثل <code class='inline'>if</code>، <code class='inline'>class</code>) مجاز نیستند. قرارداد: <b>snake_case</b> مثل <code class='inline'>user_name</code>. انتساب چندگانه: <code class='inline'>a, b = 1, 2</code> و تعویض مقادیر: <code class='inline'>a, b = b, a</code>.</p>""",
"مقدار دو متغیر x و y را بدون متغیر کمکی با یک خط جابه‌جا کن و چاپ کن.",
py="""name = "علی"
age = 20
print(name, age)
age = age + 1          # مقدار قبلی را به‌روز می‌کنیم
print("سال بعد:", age)
a, b = 1, 2
a, b = b, a            # تعویض بدون متغیر کمکی
print(a, b)
print(type(age), type(name))""")

add(1,6,"""<p>دو نوع عددی اصلی: <code class='inline'>int</code> (صحیح، بدون محدودیت اندازه) و <code class='inline'>float</code> (اعشاری، ۶۴ بیتی). نوشتن <code class='inline'>1_000_000</code> با زیرخط خوانایی می‌دهد.</p>
<p>دام مهم: اعشار در دودویی دقیق نیست؛ <code class='inline'>0.1 + 0.2</code> دقیقاً <code class='inline'>0.3</code> نمی‌شود (۰٫۳۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۴). برای مقایسه از <code class='inline'>round()</code> یا <code class='inline'>math.isclose</code> و برای پول از <code class='inline'>decimal</code> استفاده کن. تبدیل: <code class='inline'>int(3.9)</code> می‌شود ۳ (حذف اعشار، نه گرد کردن).</p>""",
"مقدار ۰٫۱+۰٫۲ را چاپ کن و با math.isclose با ۰٫۳ مقایسه کن.",
py="""import math
print(type(7), type(7.0))
print(1_000_000)
print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
print(math.isclose(0.1 + 0.2, 0.3))
print(int(3.9), round(3.9), round(2.5), round(3.5))
print(2 ** 100)""")

add(1,7,"""<p>عملگرها: <code class='inline'>+ - * /</code> (تقسیم همیشه float)، <code class='inline'>//</code> (تقسیم صحیح)، <code class='inline'>%</code> (باقی‌مانده)، <code class='inline'>**</code> (توان). اولویت: پرانتز، سپس <code class='inline'>**</code>، بعد <code class='inline'>* / // %</code>، و آخر <code class='inline'>+ -</code>.</p>
<p>انتساب ترکیبی: <code class='inline'>x += 5</code> یعنی <code class='inline'>x = x + 5</code> (و به همین ترتیب <code class='inline'>-= *= /=</code>). کاربرد <code class='inline'>%</code>: زوج/فرد بودن (<code class='inline'>n % 2 == 0</code>) و چرخه‌ها. دقت: <code class='inline'>-7 // 2</code> برابر ۴- است (به سمت منفی بی‌نهایت گرد می‌شود).""",
"تعداد ثانیه‌ی ۱۰۰۰۰ را به ساعت، دقیقه و ثانیه با // و % تبدیل کن.",
py="""print(7 / 2, 7 // 2, 7 % 2, 7 ** 2)
print(-7 // 2, -7 % 2)
print(2 + 3 * 4, (2 + 3) * 4, 2 ** 3 ** 2)
x = 10
x += 5
x *= 2
print(x)
sec = 10000
h, rest = divmod(sec, 3600)
m, s = divmod(rest, 60)
print(h, m, s)""")

add(1,8,"""<p><b>رشته</b> (str) دنباله‌ای از کاراکترهاست و با <code class='inline'>'</code> یا <code class='inline'>"</code> ساخته می‌شود. اتصال با <code class='inline'>+</code> و تکرار با <code class='inline'>*</code>. رشته‌ها <b>تغییرناپذیر</b> (immutable) هستند: هر «تغییر» رشته‌ی جدیدی می‌سازد.</p>
<p><code class='inline'>len(s)</code> طول رشته را می‌دهد. نمی‌توان رشته و عدد را با <code class='inline'>+</code> جمع کرد (<code class='inline'>"a" + 1</code> خطای TypeError): یا عدد را با <code class='inline'>str()</code> تبدیل کن یا از f-string (درس‌های بعد) بهره بگیر. پایتون ۳ کاملاً یونی‌کد است، پس فارسی و ایموجی بدون مشکل کار می‌کنند.</p>""",
"رشته‌ی «=» را ۲۰ بار تکرار کن تا خط جداکننده بسازی و زیر یک عنوان چاپ کن.",
py="""a = "سلام"
b = 'دنیا'
print(a + " " + b)
print("ha" * 3)
print(len("پایتون"))
print("-" * 20)
age = 20
print("سن: " + str(age))
s = "abc"
t = s + "d"        # رشته‌ی جدید؛ s عوض نشد
print(s, t)""")

add(1,9,"""<p>هر کاراکتر یک <b>اندیس</b> دارد، از صفر شروع می‌شود؛ اندیس منفی از آخر می‌شمارد (<code class='inline'>s[-1]</code> آخرین). <b>برش</b> (slicing): <code class='inline'>s[start:stop:step]</code> که stop شامل نمی‌شود. هر سه اختیاری‌اند.</p>
<p>ترفندها: <code class='inline'>s[::-1]</code> رشته را معکوس می‌کند، <code class='inline'>s[:3]</code> سه تای اول، <code class='inline'>s[-3:]</code> سه تای آخر. دسترسی به اندیس خارج از محدوده <code class='inline'>IndexError</code> می‌دهد ولی برش هرگز خطا نمی‌دهد.""",
"بررسی کن آیا یک کلمه پالیندروم است (با برش معکوس). چند مثال امتحان کن.",
py="""s = "Python"
print(s[0], s[-1], s[2])
print(s[1:4], s[:2], s[3:])
print(s[::-1], s[::2])
word = "level"
print(word == word[::-1])
print(s[10:20] == "")""")

add(1,10,"""<p>رشته‌ها متدهای زیادی دارند (هیچ‌کدام رشته‌ی اصلی را تغییر نمی‌دهند، نتیجه‌ی جدید برمی‌گردانند): <code class='inline'>upper() lower() title() strip() replace(a,b) split(sep) join(list) find(x) count(x) startswith() endswith()</code>.</p>
<p>الگوی پرکاربرد: <code class='inline'>"a,b,c".split(",")</code> لیست می‌دهد و <code class='inline'>"-".join(lst)</code> برعکس. <code class='inline'>strip()</code> فاصله‌های دو سر را می‌برد؛ برای پاک‌سازی ورودی کاربر ضروری است. عملگر <code class='inline'>in</code> وجود زیررشته را می‌سنجد.""",
"جمله‌ای بنویس، کلمات را با split جدا کن و تعداد کلمات و بلندترین کلمه را پیدا کن.",
py="""s = "  Hello, Python World  "
print(s.strip())
print(s.strip().upper(), s.strip().lower())
print(s.replace("Python", "Java"))
parts = "a,b,c".split(",")
print(parts, "-".join(parts))
print("Python" in s, s.count("o"), s.find("World"))
print("file.txt".endswith(".txt"))""")

add(1,11,"""<p><b>f-string</b> بهترین راه ساختن رشته با مقدار متغیر است: قبل از کوتیشن <code class='inline'>f</code> بگذار و عبارت را داخل <code class='inline'>{}</code> بنویس. هر عبارت پایتون مجاز است: <code class='inline'>f"{a+b}"</code>.</p>
<p>قالب‌بندی بعد از <code class='inline'>:</code>: <code class='inline'>{x:.2f}</code> (دو رقم اعشار)، <code class='inline'>{n:,}</code> (جداکننده‌ی هزارگان)، <code class='inline'>{n:>8}</code> (راست‌چین در ۸ خانه)، <code class='inline'>{p:.1%}</code> (درصد)، و <code class='inline'>{x=}</code> برای دیباگ (نام و مقدار).""",
"قیمت ۱۲۳۴۵۶۷ تومان را با جداکننده‌ی هزارگان و یک درصد تخفیف ۱۲٫۵٪ چاپ کن.",
py="""name, score = "سارا", 17.456
print(f"{name} نمره‌ی {score:.1f} گرفت")
price = 1234567
print(f"قیمت: {price:,} تومان")
print(f"تخفیف: {0.125:.1%}")
print(f"[{name:>8}] [{name:<8}] [{name:^8}]")
x = 42
print(f"{x=}  {x*2=}")
print(f"{3.14159:08.3f}")""")

add(1,12,"""<p><code class='inline'>input("پیام")</code> متنی از کاربر می‌گیرد و <b>همیشه رشته</b> برمی‌گرداند. اگر عدد می‌خواهی باید تبدیل کنی: <code class='inline'>int()</code> یا <code class='inline'>float()</code>. اگر کاربر چیز نامعتبر وارد کند <code class='inline'>ValueError</code> می‌آید (در درس‌های بعد مدیریتش می‌کنیم).</p>
<p>در این محیط مرورگر ورودی تعاملی نیست، پس ورودی را با یک متغیر شبیه‌سازی می‌کنیم؛ در ترمینال واقعی به‌جای آن خط <code class='inline'>input()</code> بگذار. تبدیل‌ها: <code class='inline'>str() int() float() bool() list()</code>.</p>""",
"کد را طوری بنویس که سن را (به‌صورت رشته) بگیرد، به عدد تبدیل کند و سن ۵ سال بعد را چاپ کند.",
py="""raw = "21"                 # در برنامه‌ی واقعی: raw = input("سن؟ ")
age = int(raw)
print(type(raw), type(age))
print("سال بعد:", age + 1)
print(float("3.5") * 2, str(10) + "!")
print(int("42") + int("8"))
print(bool(""), bool("x"), bool(0), bool(5))""")

add(1,13,"""<p>نوع <code class='inline'>bool</code> فقط دو مقدار دارد: <code class='inline'>True</code> و <code class='inline'>False</code>. نتیجه‌ی مقایسه‌ها: <code class='inline'>== != &lt; &gt; &lt;= &gt;=</code>. دقت کن <code class='inline'>=</code> انتساب است و <code class='inline'>==</code> مقایسه.</p>
<p>مقایسه‌ی زنجیره‌ای خاص پایتون: <code class='inline'>0 &lt; x &lt; 10</code>. «Truthy/Falsy»: صفر، رشته‌ی خالی، لیست خالی و <code class='inline'>None</code> نادرست حساب می‌شوند؛ بقیه درست. <code class='inline'>is</code> هویت (همان شیء) را می‌سنجد نه برابری مقدار؛ برای <code class='inline'>None</code> از <code class='inline'>is None</code> استفاده کن.""",
"بدون اجرا حدس بزن خروجی هر خط چیست، سپس اجرا و مقایسه کن.",
py="""x = 5
print(x == 5, x != 5, x > 3, x <= 4)
print(0 < x < 10)
print("a" < "b", "apple" < "banana", 10 == 10.0)
print(bool(0), bool(""), bool([]), bool(None), bool("0"))
y = None
print(y is None)""")

add(1,14,"""<p>سه عملگر منطقی: <code class='inline'>and</code> (هر دو درست)، <code class='inline'>or</code> (حداقل یکی)، <code class='inline'>not</code> (معکوس). اولویت: <code class='inline'>not</code> > <code class='inline'>and</code> > <code class='inline'>or</code>؛ با پرانتز صریح بنویس.</p>
<p><b>ارزیابی میان‌بر</b>: <code class='inline'>and</code>/<code class='inline'>or</code> به محض معلوم شدن نتیجه متوقف می‌شوند و <b>خود مقدار</b> (نه فقط True/False) را برمی‌گردانند: <code class='inline'>"" or "پیش‌فرض"</code> می‌شود «پیش‌فرض». این الگو برای مقدار پیش‌فرض و محافظت در برابر خطا (مثل <code class='inline'>x != 0 and 10/x &gt; 1</code>) کاربرد دارد.""",
"شرطی بنویس که بررسی کند آیا سالی کبیسه میلادی است: بر ۴ بخش‌پذیر، مگر ۱۰۰ و مگر ۴۰۰.",
py="""print(True and False, True or False, not True)
age, has_id = 20, True
print(age >= 18 and has_id)
name = ""
print(name or "ناشناس")
x = 0
print(x != 0 and 10 / x > 1)    # تقسیم بر صفر رخ نمی‌دهد
def is_leap(y):
    return y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)
print([is_leap(y) for y in (1900, 2000, 2024, 2023)])""")

add(1,15,"""<p>ساختار تصمیم: <code class='inline'>if شرط:</code> بلوک تورفته، <code class='inline'>elif</code> برای شرط‌های بعدی و <code class='inline'>else</code> برای بقیه. شرط‌ها به ترتیب بررسی می‌شوند و <b>فقط اولین شاخه‌ی درست</b> اجرا می‌شود؛ پس ترتیب مهم است.</p>
<p>خطای رایج: فراموش کردن <code class='inline'>:</code> یا تورفتگی ناهمسان (<code class='inline'>IndentationError</code>). همیشه ۴ فاصله بگذار و تب و فاصله را قاطی نکن. شرط‌های تودرتو را با شرط‌های ترکیبی یا خروج زودهنگام ساده کن.""",
"برنامه‌ای بنویس که نمره‌ی ۰ تا ۲۰ را به «عالی/خوب/قبول/مردود» تبدیل کند.",
py="""score = 15
if score >= 18:
    grade = "عالی"
elif score >= 14:
    grade = "خوب"
elif score >= 10:
    grade = "قبول"
else:
    grade = "مردود"
print(score, "->", grade)""")

add(1,16,"""<p>برای انتخاب ساده‌ی یک مقدار، <b>عبارت شرطی</b> (ternary) کوتاه‌تر است: <code class='inline'>مقدار_اگر_درست if شرط else مقدار_اگر_نادرست</code>. فقط وقتی استفاده کن که خوانا بماند؛ زنجیره‌ی طولانی آن را به if معمولی تبدیل کن.</p>
<p>الگوهای پرکاربرد: <code class='inline'>label = "زوج" if n % 2 == 0 else "فرد"</code>، حداکثر: <code class='inline'>max_v = a if a &gt; b else b</code> (البته <code class='inline'>max()</code> هست)، و مقدار پیش‌فرض: <code class='inline'>x = value if value is not None else 0</code>. ثابت‌های Python 3.10+ هم دستور <code class='inline'>match</code> دارند که بعداً می‌آید.""",
"برای فهرستی از اعداد، با ternary برچسب «مثبت»، «منفی» یا «صفر» بساز.",
py="""n = 7
label = "زوج" if n % 2 == 0 else "فرد"
print(n, label)
for v in (5, -3, 0):
    print(v, "مثبت" if v > 0 else "منفی" if v < 0 else "صفر")
discount = 0.2 if n > 5 else 0
print(f"{discount:.0%}")""")

add(1,17,"""<p><code class='inline'>while شرط:</code> تا وقتی شرط درست است بلوک را تکرار می‌کند. هر حلقه‌ی while سه قسمت دارد: مقداردهی اولیه، شرط، و <b>تغییر وضعیت</b> داخل حلقه (وگرنه حلقه‌ی بی‌نهایت می‌شود؛ با Ctrl+C قطعش کن).</p>
<p>الگوی «تا وقتی که»: تکرار بدون دانستن تعداد قبلی (مثلاً تا رسیدن به پاسخ درست). <code class='inline'>while True:</code> همراه با <code class='inline'>break</code> الگوی رایج حلقه‌ی با خروج داخلی است. مراقب خطای off-by-one در شرط‌ها باش.""",
"با while، اولین توان ۲ را پیدا کن که از ۱۰۰۰ بزرگ‌تر است و تعداد گام‌ها را بشمار.",
py="""n = 3
while n > 0:
    print("شمارش معکوس:", n)
    n -= 1
print("پرتاب!")
p, steps = 1, 0
while p <= 1000:
    p *= 2
    steps += 1
print(p, steps)""")

add(1,18,"""<p><code class='inline'>for x in دنباله:</code> روی هر عضو یک دنباله (رشته، لیست، range...) می‌چرخد. <code class='inline'>range(stop)</code>، <code class='inline'>range(start, stop)</code> و <code class='inline'>range(start, stop, step)</code> اعداد را تولید می‌کند (stop شامل نیست و حافظه‌ی زیادی نمی‌گیرد چون تنبل است).</p>
<p>وقتی اندیس هم لازم است از <code class='inline'>enumerate()</code> استفاده کن نه <code class='inline'>range(len(...))</code>. برای موازی چرخیدن روی دو دنباله <code class='inline'>zip()</code>. الگوی جمع‌کردن: متغیر <code class='inline'>total = 0</code> بیرون حلقه و <code class='inline'>total += x</code> داخل آن.""",
"مجموع اعداد ۱ تا ۱۰۰ را با for و بعد با sum(range()) حساب کن.",
py="""for ch in "abc":
    print(ch)
for i in range(1, 10, 3):
    print(i, end=" ")
print()
fruits = ["سیب", "موز", "گیلاس"]
for i, f in enumerate(fruits, start=1):
    print(i, f)
for name, score in zip(["علی", "سارا"], [18, 20]):
    print(name, score)
total = 0
for k in range(1, 101):
    total += k
print(total, sum(range(1, 101)))""")

add(1,19,"""<p>کنترل حلقه: <code class='inline'>break</code> کل حلقه را قطع می‌کند، <code class='inline'>continue</code> به تکرار بعدی می‌پرد، و <code class='inline'>pass</code> هیچ کاری نمی‌کند (جای‌نگهدار). ویژگی خاص پایتون: <b>else روی حلقه</b> — اگر حلقه بدون break تمام شود اجرا می‌شود؛ ایده‌آل برای «جست‌وجو و پیدا نشد».</p>
<p>نمونه‌ی کلاسیک: بررسی عدد اول؛ اگر هیچ مقسوم‌علیهی پیدا نشد، else اجرا می‌شود. این الگو متغیر پرچم (flag) را حذف می‌کند.""",
"عدد اول بودن اعداد ۲ تا ۳۰ را با for/else پیدا و فهرست کن.",
py="""for n in range(10):
    if n == 3:
        continue          # ۳ را رد کن
    if n == 6:
        break             # در ۶ قطع کن
    print(n, end=" ")
print()
primes = []
for n in range(2, 31):
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            break
    else:                 # بدون break تمام شد: اول است
        primes.append(n)
print(primes)""")

add(1,20,"""<p>حلقه‌ها را می‌توان تودرتو کرد: حلقه‌ی داخلی به ازای <b>هر</b> تکرار حلقه‌ی بیرونی کامل اجرا می‌شود (n×m بار). کاربرد: جدول ضرب، پیمایش ماتریس، مقایسه‌ی همه‌ی جفت‌ها.</p>
<p>هزینه: دو حلقه‌ی تودرتو روی n عضو یعنی n² کار؛ برای داده‌ی بزرگ سنگین می‌شود. برای خروج از دو حلقه‌ی تودرتو یک <code class='inline'>break</code> کافی نیست (فقط داخلی را می‌شکند)؛ تابع بنویس و <code class='inline'>return</code> کن یا از پرچم استفاده کن.""",
"با حلقه‌ی تودرتو یک مثلث ستاره‌ای با ۵ ردیف چاپ کن.",
py="""for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i*j:3}", end="")
    print()
for r in range(1, 6):
    print("*" * r)
pairs = [(a, b) for a in range(1, 4) for b in range(a + 1, 4)]
print(pairs)""")

add(1,21,"""<p><b>لیست</b> دنباله‌ای مرتب و <b>تغییرپذیر</b> است: <code class='inline'>[1, "a", 3.5]</code> (می‌تواند انواع مختلف را نگه دارد). دسترسی با اندیس و برش مثل رشته؛ برخلاف رشته می‌شود عضوی را عوض کرد: <code class='inline'>lst[0] = 99</code>.</p>
<p>ساخت: <code class='inline'>[]</code>، <code class='inline'>list("abc")</code>، <code class='inline'>[0]*5</code>. عملیات: <code class='inline'>len() in + *</code>. <code class='inline'>lst[1:3] = [...]</code> بخشی را جایگزین می‌کند. دام: <code class='inline'>[[0]*3]*3</code> سه ردیف <b>یکسان و مشترک</b> می‌سازد (همان شیء)؛ درست: <code class='inline'>[[0]*3 for _ in range(3)]</code>.""",
"یک ماتریس ۳×۳ صفر بساز، درایه‌ی وسط را ۱ کن و نشان بده که ردیف‌ها مستقل‌اند.",
py="""nums = [10, 20, 30, 40]
print(nums[0], nums[-1], nums[1:3], len(nums))
nums[0] = 99
print(nums, 20 in nums)
print(nums + [1, 2], [0] * 3)
bad = [[0] * 3] * 3
bad[0][0] = 1
print(bad)                 # هر سه ردیف عوض شد!
good = [[0] * 3 for _ in range(3)]
good[0][0] = 1
print(good)""")

add(1,22,"""<p>متدهای اصلی لیست (در‌جا و بدون برگرداندن چیز، به‌جز pop): <code class='inline'>append(x)</code> افزودن به انتها، <code class='inline'>insert(i,x)</code>، <code class='inline'>extend(iterable)</code>، <code class='inline'>remove(x)</code> (اولین تطابق)، <code class='inline'>pop(i=-1)</code> حذف و برگرداندن، <code class='inline'>clear()</code>، <code class='inline'>index(x)</code>، <code class='inline'>count(x)</code>، <code class='inline'>reverse()</code>، <code class='inline'>sort()</code>.</p>
<p>خطای معروف: <code class='inline'>lst = lst.append(1)</code> مقدار <code class='inline'>None</code> را در lst می‌گذارد چون append چیزی برنمی‌گرداند. هزینه: <code class='inline'>append/pop</code> انتها سریع (O(1))، اما <code class='inline'>insert(0, x)</code> و <code class='inline'>in</code> کند (O(n)).""",
"یک پشته (stack) را با append و pop شبیه‌سازی کن و پرانتزهای متوازن یک رشته را بررسی کن.",
py="""lst = [3, 1, 2]
lst.append(4); lst.insert(0, 9); lst.extend([7, 7])
print(lst)
print(lst.pop(), lst.pop(0), lst)
lst.remove(7)
print(lst, lst.count(1), lst.index(2))
wrong = [1, 2]
wrong = wrong.append(3)
print(wrong)               # None!
def balanced(s):
    st = []
    for c in s:
        if c == "(":
            st.append(c)
        elif c == ")":
            if not st:
                return False
            st.pop()
    return not st
print(balanced("(()())"), balanced("(()"))""")

add(1,23,"""<p>پیمایش: <code class='inline'>for x in lst</code>. نکته‌ی خطرناک: حذف عضو هنگام پیمایش همان لیست رفتار نامنتظره دارد؛ روی کپی بچرخ یا لیست جدید بساز.</p>
<p>مرتب‌سازی دو شکل دارد: <code class='inline'>lst.sort()</code> (در‌جا، None برمی‌گرداند) و <code class='inline'>sorted(lst)</code> (لیست جدید، روی هر iterable). پارامترهای <code class='inline'>reverse=True</code> و <code class='inline'>key=</code> (تابعی که کلید مقایسه را می‌سازد): <code class='inline'>sorted(words, key=len)</code>. مرتب‌سازی <b>پایدار</b> است (ترتیب عضوهای مساوی حفظ می‌شود).""",
"لیستی از (نام، نمره) را اول بر اساس نمره‌ی نزولی و در صورت تساوی بر اساس نام مرتب کن.",
py="""nums = [5, 2, 9, 1]
print(sorted(nums), sorted(nums, reverse=True), nums)
nums.sort()
print(nums)
words = ["pear", "fig", "banana", "kiwi"]
print(sorted(words, key=len))
print(sorted(words, key=lambda w: (len(w), w)))
data = [("علی", 17), ("سارا", 20), ("رضا", 17)]
print(sorted(data, key=lambda t: (-t[1], t[0])))
evens = [x for x in [1, 2, 3, 4, 5, 6] if x % 2 == 0]
print(evens)""")

add(1,24,"""<p>انتساب <code class='inline'>b = a</code> لیست را کپی <b>نمی‌کند</b>؛ هر دو نام به یک شیء اشاره می‌کنند. تغییر از طریق یکی در دیگری دیده می‌شود. <b>کپی سطحی</b> (<code class='inline'>a.copy()</code>، <code class='inline'>a[:]</code>، <code class='inline'>list(a)</code>) لیست جدید می‌سازد ولی عضوهای داخلی (مثلاً لیست‌های تودرتو) مشترک می‌مانند.</p>
<p>برای لیست‌های تودرتو <b>کپی عمیق</b> لازم است: <code class='inline'>copy.deepcopy(a)</code>. شناخت این تفاوت باگ‌های سختِ «چرا چیزی که دست نزدم عوض شد؟» را حل می‌کند. برای بررسی هویت: <code class='inline'>a is b</code> و <code class='inline'>id(a)</code>.""",
"سه حالت (انتساب، کپی سطحی، کپی عمیق) را روی لیست تودرتو امتحان کن و نتیجه را توضیح بده.",
py="""import copy
a = [[1, 2], [3, 4]]
b = a                    # همان شیء
c = a.copy()             # کپی سطحی
d = copy.deepcopy(a)     # کپی عمیق
a[0][0] = 99
a.append([5])
print("a:", a)
print("b:", b, b is a)
print("c:", c)           # ردیف‌های داخلی مشترک: 99 دیده می‌شود
print("d:", d)           # کاملاً مستقل""")

add(1,25,"""<p><b>تاپل</b> مثل لیست است ولی <b>تغییرناپذیر</b>: <code class='inline'>(1, 2)</code> یا حتی بدون پرانتز <code class='inline'>1, 2</code>. تاپل تک‌عضوی ویرگول لازم دارد: <code class='inline'>(5,)</code>. برای داده‌ی ثابت، کلید دیکشنری و برگرداندن چند مقدار از تابع مناسب است و کمی سریع‌تر و کم‌حجم‌تر از لیست است.</p>
<p><b>Unpacking</b>: <code class='inline'>x, y = (1, 2)</code>؛ ستاره‌دار: <code class='inline'>first, *rest = [1,2,3,4]</code>؛ نادیده‌گرفتن با <code class='inline'>_</code>. تعویض متغیرها همین الگوست. پایتون ۳ اجازه می‌دهد <code class='inline'>*</code> در فراخوانی هم باز کند: <code class='inline'>print(*lst)</code>.""",
"تابعی بنویس که کمترین، بیشترین و میانگین لیست را به‌صورت تاپل برگرداند و با unpacking بگیرشان.",
py="""p = (3, 4)
x, y = p
print(x, y, p[0])
first, *middle, last = [1, 2, 3, 4, 5]
print(first, middle, last)
single = (5,)
print(type(single), type((5)))
def stats(nums):
    return min(nums), max(nums), sum(nums) / len(nums)
lo, hi, avg = stats([4, 8, 15, 16, 23, 42])
print(lo, hi, round(avg, 2))
try:
    p[0] = 9
except TypeError as e:
    print("خطا:", e)""")
