import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(1,26,"""<p><b>دیکشنری</b> مجموعه‌ای از جفت‌های «کلید: مقدار» است: <code class='inline'>{"name": "علی", "age": 20}</code>. دسترسی با کلید سریع است (میانگین O(1)). کلیدها باید <b>hashable</b> (تغییرناپذیر: رشته، عدد، تاپل) و یکتا باشند؛ از پایتون ۳٫۷ ترتیب درج حفظ می‌شود.</p>
<p>دسترسی با <code class='inline'>d["k"]</code> اگر کلید نباشد <code class='inline'>KeyError</code> می‌دهد؛ <code class='inline'>d.get("k", پیش‌فرض)</code> امن است. افزودن/تغییر: <code class='inline'>d["k"] = v</code>؛ حذف: <code class='inline'>del d["k"]</code> یا <code class='inline'>d.pop("k")</code>. <code class='inline'>setdefault</code> و <code class='inline'>update</code> کاربردی‌اند و ادغام با <code class='inline'>d1 | d2</code> (۳٫۹+).""",
"فراوانی حروف یک کلمه را با دیکشنری بشمار (بدون Counter) و بعد با collections.Counter مقایسه کن.",
py="""user = {"name": "علی", "age": 20}
print(user["name"], user.get("city", "نامشخص"))
user["city"] = "تهران"
user["age"] += 1
print(user, len(user), "age" in user)
removed = user.pop("city")
print(removed, user)
word = "banana"
freq = {}
for ch in word:
    freq[ch] = freq.get(ch, 0) + 1
print(freq)
print({"a": 1} | {"b": 2})""")

add(1,27,"""<p>روش‌های پیمایش: <code class='inline'>for k in d</code> (کلیدها)، <code class='inline'>d.values()</code>، و <code class='inline'>d.items()</code> برای جفت (کلید، مقدار) — رایج‌ترین. این‌ها «نما» (view) هستند و با تغییر دیکشنری به‌روز می‌شوند.</p>
<p>تغییر اندازه‌ی دیکشنری حین پیمایش <code class='inline'>RuntimeError</code> می‌دهد؛ روی <code class='inline'>list(d)</code> بچرخ. دیکشنری‌های تودرتو برای داده‌ی ساخت‌یافته (مثل JSON) رایج‌اند: <code class='inline'>data["users"][0]["name"]</code>. مرتب‌سازی با <code class='inline'>sorted(d.items(), key=...)</code>.""",
"از دیکشنری نمره‌ها، دانش‌آموزان با نمره‌ی بالای ۱۵ را با پیمایش پیدا کن و بر اساس نمره مرتب کن.",
py="""scores = {"علی": 17, "سارا": 20, "رضا": 12}
for name in scores:
    print(name, end=" ")
print()
for name, sc in scores.items():
    print(f"{name}: {sc}")
print(sum(scores.values()) / len(scores))
best = max(scores, key=scores.get)
print("بهترین:", best)
print(sorted(scores.items(), key=lambda kv: kv[1], reverse=True))
nested = {"users": [{"name": "الف", "tags": ["a", "b"]}]}
print(nested["users"][0]["tags"][1])""")

add(1,28,"""<p><b>مجموعه</b> (set) گردایه‌ی بدون ترتیب و <b>بدون تکرار</b> است: <code class='inline'>{1, 2, 3}</code>. مجموعه‌ی خالی را با <code class='inline'>set()</code> بساز (<code class='inline'>{}</code> دیکشنری خالی است!). عضویت <code class='inline'>x in s</code> بسیار سریع است (O(1)) و برای حذف تکراری‌ها و بررسی عضویت ایده‌آل است.</p>
<p>اعضا باید hashable باشند (لیست نمی‌تواند عضو set شود). متدها: <code class='inline'>add remove discard update pop</code>. <code class='inline'>remove</code> اگر نباشد KeyError می‌دهد ولی <code class='inline'>discard</code> نه. <code class='inline'>frozenset</code> نسخه‌ی تغییرناپذیر است.""",
"لیستی با تکراری بساز و یکتاها را با حفظ ترتیب ورود (با dict.fromkeys) بیرون بکش.",
py="""s = {1, 2, 2, 3, 3}
print(s, len(s))
s.add(4); s.discard(10)
print(sorted(s), 3 in s)
nums = [3, 1, 3, 2, 1]
print(list(set(nums)))                 # ترتیب تضمین نیست
print(list(dict.fromkeys(nums)))       # یکتا با حفظ ترتیب
print(type({}), type(set()))
try:
    {[1, 2]}
except TypeError as e:
    print("خطا:", e)""")

add(1,29,"""<p>عملیات ریاضی مجموعه‌ها: اجتماع <code class='inline'>a | b</code>، اشتراک <code class='inline'>a &amp; b</code>، تفاضل <code class='inline'>a - b</code>، تفاضل متقارن <code class='inline'>a ^ b</code>. رابطه‌ها: <code class='inline'>a &lt;= b</code> زیرمجموعه، <code class='inline'>a.isdisjoint(b)</code> بدون اشتراک.</p>
<p>کاربرد واقعی: «کاربرانی که هر دو دوره را دیده‌اند» (اشتراک)، «فقط در لیست اول» (تفاضل)، پیدا کردن تکراری‌ها، و بررسی سطح دسترسی. روی مجموعه‌های بزرگ بسیار سریع‌تر از حلقه‌ی تودرتو است.""",
"از دو لیست دانش‌آموزان دو دوره، کسانی که فقط در دوره‌ی اول بودند و کسانی که در هر دو بودند را پیدا کن.",
py="""a = {1, 2, 3, 4}
b = {3, 4, 5}
print(a | b, a & b, a - b, a ^ b)
print({1, 2} <= a, a.isdisjoint({9}))
py_course = {"علی", "سارا", "رضا"}
js_course = {"سارا", "مینا"}
print("هر دو:", py_course & js_course)
print("فقط پایتون:", py_course - js_course)
print("همه:", len(py_course | js_course))""")

add(1,30,"""<p><b>تابع</b> بلوکی نام‌دار از کد است که یک‌بار می‌نویسی و چندبار صدا می‌زنی (اصل DRY). با <code class='inline'>def نام(پارامترها):</code> تعریف و با <code class='inline'>نام(مقادیر)</code> فراخوانی می‌شود. رشته‌ی اول بدنه (<b>docstring</b>) مستندات است و با <code class='inline'>help()</code> دیده می‌شود.</p>
<p>تابع بدون <code class='inline'>return</code> مقدار <code class='inline'>None</code> برمی‌گرداند. تعریف تابع کدی را اجرا نمی‌کند؛ فقط فراخوانی می‌کند. توابع کوچک و تک‌منظوره، با نام فعل‌گونه (<code class='inline'>calc_total</code>)، خوانایی و تست‌پذیری را بالا می‌برند.""",
"تابعی بنویس که مساحت دایره را با شعاع ورودی حساب کند و docstring داشته باشد.",
py="""import math
def circle_area(r):
    \"\"\"مساحت دایره با شعاع r.\"\"\"
    return math.pi * r ** 2

def greet():
    print("سلام!")

print(round(circle_area(2), 3))
x = greet()
print(x)                   # None چون return نداشت
print(circle_area.__doc__)""")

add(1,31,"""<p><b>پارامتر</b> نام داخل تعریف و <b>آرگومان</b> مقدار هنگام فراخوانی است. آرگومان‌ها <b>موقعیتی</b> (به ترتیب) یا <b>نام‌دار</b> (<code class='inline'>f(b=2, a=1)</code>) هستند. نام‌دار خوانایی را بالا می‌برد و ترتیب مهم نیست؛ ولی موقعیتی‌ها باید قبل از نام‌دارها بیایند.</p>
<p>با <code class='inline'>/</code> و <code class='inline'>*</code> در تعریف می‌توان پارامترها را فقط‌موقعیتی یا فقط‌نام‌دار کرد: <code class='inline'>def f(a, /, b, *, c)</code>. اشیای تغییرپذیر به‌صورت «ارجاع» پاس داده می‌شوند، پس تغییر آن‌ها داخل تابع بیرون هم دیده می‌شود.""",
"تابعی بنویس که لیست را بگیرد و یک نسخه‌ی مرتب شده برگرداند بدون اینکه ورودی را تغییر دهد.",
py="""def power(base, exp):
    return base ** exp
print(power(2, 5), power(exp=5, base=2))

def f(a, /, b, *, c):
    return a, b, c
print(f(1, 2, c=3))

def bad_append(lst):
    lst.append(99)           # ورودی را تغییر می‌دهد
nums = [1, 2]
bad_append(nums)
print(nums)
def good_sorted(lst):
    return sorted(lst)       # نسخه‌ی جدید
src = [3, 1, 2]
print(good_sorted(src), src)""")

add(1,32,"""<p>مقدار پیش‌فرض: <code class='inline'>def f(x, n=2)</code>. پارامترهای پیش‌فرض‌دار باید بعد از بدون‌پیش‌فرض‌ها بیایند. <b>دام معروف</b>: مقدار پیش‌فرض فقط یک‌بار هنگام تعریف تابع ساخته می‌شود؛ پس پیش‌فرض تغییرپذیر (<code class='inline'>[]</code>، <code class='inline'>{}</code>) بین فراخوانی‌ها مشترک می‌ماند.</p>
<p>راه‌حل استاندارد: پیش‌فرض <code class='inline'>None</code> و ساختن لیست داخل تابع. این دام در مصاحبه‌ها مکرراً پرسیده می‌شود.""",
"تابع add_item را طوری درست کن که هر فراخوانی با پیش‌فرض لیست تازه بسازد.",
py="""def bad(item, bucket=[]):
    bucket.append(item)
    return bucket
print(bad(1))
print(bad(2))              # [1, 2] !  لیست مشترک مانده

def good(item, bucket=None):
    if bucket is None:
        bucket = []
    bucket.append(item)
    return bucket
print(good(1))
print(good(2))             # [2]
def greet(name="دوست من", mark="!"):
    return f"سلام {name}{mark}"
print(greet(), greet("علی"), greet(mark="؟"))""")

add(1,33,"""<p><code class='inline'>*args</code> هر تعداد آرگومان موقعیتی را در یک <b>تاپل</b> جمع می‌کند و <code class='inline'>**kwargs</code> آرگومان‌های نام‌دار اضافه را در یک <b>دیکشنری</b>. نام‌ها قراردادی‌اند؛ ستاره مهم است. ترتیب در تعریف: عادی، <code class='inline'>*args</code>، نام‌دار، <code class='inline'>**kwargs</code>.</p>
<p>هنگام فراخوانی، ستاره عکس عمل می‌کند و باز می‌کند: <code class='inline'>f(*[1,2,3])</code> و <code class='inline'>f(**{"a":1})</code>. در wrapperها و decoratorها (درس‌های بعد) برای عبور دادن همه‌ی آرگومان‌ها به تابع اصلی ضروری است.""",
"تابع average(*nums) بنویس که میانگین هر تعداد عدد را بدهد و خطای ورودی خالی را مدیریت کند.",
py="""def total(*args):
    print(args, type(args))
    return sum(args)
print(total(1, 2, 3, 4))

def show(**kwargs):
    for k, v in kwargs.items():
        print(f"{k} = {v}")
show(name="علی", age=20)

def mix(a, *args, sep="-", **kw):
    return sep.join(map(str, (a, *args))), kw
print(mix(1, 2, 3, sep="+", extra=True))
nums = [4, 5, 6]
print(total(*nums))
cfg = {"sep": "/"}
print(mix("x", "y", **cfg))""")

add(1,34,"""<p><code class='inline'>return</code> مقدار را برمی‌گرداند و تابع را همان لحظه پایان می‌دهد (کد بعدش اجرا نمی‌شود). می‌توان چند <code class='inline'>return</code> داشت؛ الگوی «خروج زودهنگام» (guard clause) تودرتویی if را کم می‌کند.</p>
<p>چند مقدار برگرداندن در واقع برگرداندن یک <b>تاپل</b> است که با unpacking گرفته می‌شود. تفاوت <code class='inline'>print</code> و <code class='inline'>return</code>: print فقط نمایش می‌دهد و return مقدار را برای محاسبه‌ی بعدی در اختیار می‌گذارد. توابع «خالص» (بدون اثر جانبی) ساده‌تر تست می‌شوند.""",
"تابع safe_div(a, b) بنویس که در تقسیم بر صفر (None, 'خطا') و در حالت عادی (نتیجه, None) برگرداند.",
py="""def check_age(age):
    if age < 0:
        return "نامعتبر"          # خروج زودهنگام
    if age < 18:
        return "نوجوان"
    return "بزرگسال"
print(check_age(-1), check_age(10), check_age(30))

def divmod2(a, b):
    return a // b, a % b
q, r = divmod2(17, 5)
print(q, r)

def safe_div(a, b):
    if b == 0:
        return None, "تقسیم بر صفر"
    return a / b, None
print(safe_div(1, 0), safe_div(6, 3))""")

add(1,35,"""<p><b>Scope</b> محدوده‌ای است که یک نام در آن دیده می‌شود. پایتون با قانون <b>LEGB</b> نام را می‌یابد: Local (داخل تابع)، Enclosing (تابع بیرونی)، Global (فایل)، Built-in (مثل <code class='inline'>len</code>).</p>
<p>خواندن متغیر سراسری داخل تابع آزاد است، اما انتساب به آن یک متغیر <b>محلی</b> می‌سازد (و اگر قبل از انتساب بخوانی <code class='inline'>UnboundLocalError</code>). با <code class='inline'>global x</code> یا <code class='inline'>nonlocal x</code> می‌توان تغییر داد ولی استفاده‌ی زیاد از global کد را شکننده می‌کند؛ ترجیحاً پارامتر و return استفاده کن.""",
"مثالی بنویس که UnboundLocalError بدهد، توضیح بده چرا و با دو راه درستش کن.",
py="""x = "سراسری"
def read():
    print(x)                # خواندن آزاد است
read()

def shadow():
    x = "محلی"              # متغیر جدید محلی
    print(x)
shadow(); print(x)

counter = 0
def inc():
    global counter
    counter += 1
inc(); inc(); print(counter)

def outer():
    n = 0
    def inner():
        nonlocal n
        n += 1
        return n
    return inner
f = outer()
print(f(), f(), f())

def broken():
    try:
        print(y)
        y = 1
    except UnboundLocalError as e:
        print("خطا:", e)
broken()""")

add(1,36,"""<p><b>بازگشت</b> یعنی تابعی که خودش را صدا می‌زند. هر تابع بازگشتی دو بخش لازم دارد: <b>حالت پایه</b> (توقف) و <b>گام بازگشتی</b> که مسئله را کوچک‌تر می‌کند. بدون حالت پایه، پایتون پس از حدود ۱۰۰۰ فراخوانی <code class='inline'>RecursionError</code> می‌دهد (<code class='inline'>sys.getrecursionlimit()</code>).</p>
<p>مثال‌ها: فاکتوریل، فیبوناچی، پیمایش ساختار تودرتو. فیبوناچی ساده نمایی کند است چون محاسبات تکراری دارد؛ با <code class='inline'>functools.cache</code> خطی می‌شود. پایتون بهینه‌سازی «دم‌بازگشتی» ندارد، پس برای عمق زیاد از حلقه استفاده کن.""",
"تابع بازگشتی بنویس که لیست تودرتو (هر عمقی) را تخت کند.",
py="""from functools import cache
def fact(n):
    if n <= 1:             # حالت پایه
        return 1
    return n * fact(n - 1)
print(fact(5), fact(20))

@cache
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)
print(fib(80))

def flatten(x):
    if not isinstance(x, list):
        return [x]
    out = []
    for item in x:
        out += flatten(item)
    return out
print(flatten([1, [2, [3, 4]], 5]))
def forever(n):
    return forever(n + 1)
try:
    forever(0)
except RecursionError:
    print("RecursionError: عمق بیش از حد")""")

add(1,37,"""<p><b>lambda</b> تابع بی‌نام یک‌خطی است: <code class='inline'>lambda x: x * 2</code>؛ فقط یک <b>عبارت</b> (نه دستور) می‌تواند باشد. معمولاً به‌صورت آرگومان توابع دیگر می‌آید (مثل <code class='inline'>key=</code>). اگر پیچیده شد، <code class='inline'>def</code> بنویس.</p>
<p>توابع در پایتون «شهروند درجه‌یک» هستند: می‌توان آن‌ها را در متغیر گذاشت، به تابع داد و از تابع برگرداند. تابعی که تابع می‌گیرد یا برمی‌گرداند «مرتبه‌بالا» است. دام lambda داخل حلقه: متغیر حلقه دیر مقید می‌شود (late binding)؛ با پیش‌فرض <code class='inline'>lambda i=i: i</code> حل می‌شود.""",
"تابع apply(f, x, n) بنویس که f را n بار پشت‌سرهم روی x اعمال کند.",
py="""square = lambda x: x * x
print(square(5))
def apply(f, x, n):
    for _ in range(n):
        x = f(x)
    return x
print(apply(lambda v: v * 2, 1, 10))
def make_multiplier(k):
    return lambda x: x * k
triple = make_multiplier(3)
print(triple(7))
fs = [lambda: i for i in range(3)]
print([f() for f in fs])           # [2, 2, 2]  دام!
gs = [lambda i=i: i for i in range(3)]
print([g() for g in gs])           # [0, 1, 2]""")

add(1,38,"""<p>توابع کلاسیک کار روی دنباله‌ها: <code class='inline'>map(f, it)</code> اعمال تابع روی هر عضو، <code class='inline'>filter(f, it)</code> نگهداشتن اعضایی که f برایشان درست است، <code class='inline'>sorted(it, key=f)</code> مرتب‌سازی با کلید. نتیجه‌ی map و filter <b>تنبل</b> (iterator) است؛ برای دیدن آن را با <code class='inline'>list()</code> بپوشان.</p>
<p>در عمل comprehension (درس بعد) معمولاً خواناتر است، اما <code class='inline'>key=</code> در sorted/min/max بسیار پرکاربرد است. <code class='inline'>functools.reduce</code> برای کاهش دنباله به یک مقدار؛ ولی <code class='inline'>sum</code>، <code class='inline'>max</code> و <code class='inline'>any/all</code> برای موارد رایج بهترند.""",
"از لیست کلمات، آن‌هایی که طولشان بیش از ۴ است را با filter بگیر و به حروف بزرگ تبدیل کن (map).",
py="""nums = [1, 2, 3, 4, 5, 6]
print(list(map(lambda x: x * x, nums)))
print(list(filter(lambda x: x % 2 == 0, nums)))
words = ["fig", "banana", "kiwi", "apple"]
print(sorted(words, key=len), max(words, key=len), min(words, key=lambda w: w[-1]))
from functools import reduce
print(reduce(lambda a, b: a * b, nums))
print(any(x > 5 for x in nums), all(x > 0 for x in nums))
m = map(str, nums)
print(m, list(m))""")

add(1,39,"""<p><b>list comprehension</b> راه فشرده و خوانا برای ساختن لیست است: <code class='inline'>[عبارت for x in دنباله if شرط]</code>. معادل حلقه‌ی for با append ولی سریع‌تر و کوتاه‌تر. شرط <code class='inline'>if</code> آخر فیلتر است و <code class='inline'>x if c else y</code> قبل از for برای تبدیل.</p>
<p>حلقه‌های تودرتو: <code class='inline'>[(a,b) for a in A for b in B]</code> (ترتیب مثل حلقه‌ی معمولی). قاعده‌ی خوانایی: اگر از دو سطح یا یک خط طولانی بیشتر شد، حلقه‌ی معمولی بنویس. generator expression با پرانتز به‌جای کروشه حافظه نمی‌خورد.""",
"ماتریس ۳×۳ را با comprehension تودرتو بساز و ترانهاده‌اش را حساب کن.",
py="""squares = [x * x for x in range(1, 6)]
evens = [x for x in range(10) if x % 2 == 0]
labels = ["زوج" if x % 2 == 0 else "فرد" for x in range(4)]
print(squares, evens, labels)
pairs = [(a, b) for a in "ab" for b in (1, 2)]
print(pairs)
matrix = [[r * 3 + c + 1 for c in range(3)] for r in range(3)]
print(matrix)
print([list(row) for row in zip(*matrix)])
total = sum(x * x for x in range(1000))
print(total)""")

add(1,40,"""<p>comprehension برای دیکشنری و مجموعه هم هست: <code class='inline'>{k: v for ...}</code> و <code class='inline'>{x for ...}</code>. نمونه: وارونه‌کردن دیکشنری <code class='inline'>{v: k for k, v in d.items()}</code>، ساخت دیکشنری از دو لیست با <code class='inline'>zip</code>، و فیلتر کردن دیکشنری.</p>
<p>در dict comprehension اگر کلیدها تکراری تولید شوند، آخرین مقدار می‌ماند. برای گروه‌بندی پیچیده‌تر از <code class='inline'>collections.defaultdict</code> استفاده کن.""",
"کلمات یک جمله را بر اساس طولشان در دیکشنری گروه‌بندی کن (طول: لیست کلمات).",
py="""names = ["علی", "سارا", "رضا"]
scores = [17, 20, 12]
d = {n: s for n, s in zip(names, scores)}
print(d)
print({k: v for k, v in d.items() if v >= 15})
print({v: k for k, v in d.items()})
print({len(w) for w in ["aa", "bb", "ccc"]})
from collections import defaultdict
groups = defaultdict(list)
for w in "the quick brown fox jumps over the lazy dog".split():
    groups[len(w)].append(w)
print(dict(groups))""")

add(1,41,"""<p>هنگام خطا پایتون یک <b>Traceback</b> می‌دهد؛ آن را از <b>پایین به بالا</b> بخوان: خط آخر نوع و پیام خطاست، بالاتر زنجیره‌ی فراخوانی (آخرین فراخوانی در پایین). شماره‌ی خط و نام فایل نقطه‌ی شروع جست‌وجوی باگ است.</p>
<p>خطاهای رایج: <code class='inline'>SyntaxError</code> (دستور غلط)، <code class='inline'>NameError</code> (نام تعریف‌نشده)، <code class='inline'>TypeError</code> (نوع نامناسب)، <code class='inline'>ValueError</code> (مقدار نامناسب)، <code class='inline'>IndexError</code>، <code class='inline'>KeyError</code>، <code class='inline'>ZeroDivisionError</code>، <code class='inline'>AttributeError</code>. پیام را کامل بخوان؛ بیشتر اوقات جواب همان‌جاست.""",
"برای هر یک از خطاهای فهرست‌شده یک خط کد بنویس که آن را ایجاد کند و پیام را بخوان.",
py="""import traceback
cases = {
    "NameError": lambda: undefined_name,
    "TypeError": lambda: "a" + 1,
    "ValueError": lambda: int("abc"),
    "IndexError": lambda: [1, 2][5],
    "KeyError": lambda: {"a": 1}["b"],
    "ZeroDivisionError": lambda: 1 / 0,
    "AttributeError": lambda: "x".push(1),
}
for name, f in cases.items():
    try:
        f()
    except Exception as e:
        print(f"{type(e).__name__:18} -> {e}")
def a(): return b()
def b(): return 1 / 0
try:
    a()
except ZeroDivisionError:
    print(traceback.format_exc().splitlines()[-1])""")

add(1,42,"""<p>با <code class='inline'>try / except</code> می‌توان خطای زمان اجرا را گرفت تا برنامه نیفتد. فقط <b>خطای مشخص</b> را بگیر (<code class='inline'>except ValueError</code>) نه همه را؛ <code class='inline'>except:</code> خالی حتی Ctrl+C را هم می‌بلعد و باگ‌ها را پنهان می‌کند. با <code class='inline'>as e</code> به شیء خطا دسترسی داری.</p>
<p>چند نوع خطا: چند <code class='inline'>except</code> پشت هم یا تاپل <code class='inline'>except (A, B)</code>. فلسفه‌ی پایتون EAFP است: «طلب بخشش آسان‌تر از اجازه است» — به‌جای پیش‌بررسی همه‌چیز، تلاش کن و خطا را بگیر.""",
"تابعی بنویس که رشته را به عدد تبدیل کند و در صورت نامعتبر بودن مقدار پیش‌فرض بدهد.",
py="""def to_int(text, default=0):
    try:
        return int(text)
    except ValueError:
        return default
print(to_int("42"), to_int("abc"), to_int("", -1))

for raw in ["10", "0", "x"]:
    try:
        print(100 / int(raw))
    except ZeroDivisionError:
        print("تقسیم بر صفر")
    except (ValueError, TypeError) as e:
        print("ورودی بد:", e)

data = {"a": 1}
try:
    print(data["b"])
except KeyError as e:
    print("کلید پیدا نشد:", e)""")

add(1,43,"""<p>ساختار کامل: <code class='inline'>try</code> کد اصلی، <code class='inline'>except</code> خطا، <code class='inline'>else</code> فقط اگر <b>خطایی رخ نداد</b>، و <code class='inline'>finally</code> <b>همیشه</b> اجرا می‌شود (حتی با return یا خطای مدیریت‌نشده) — جای مناسب پاک‌سازی (بستن فایل/اتصال).</p>
<p>بخش else کد «موفقیت» را از کدی که ممکن است خطا دهد جدا می‌کند تا خطاهای اشتباهی گرفته نشود. در عمل بیشتر پاک‌سازی‌ها را با <code class='inline'>with</code> انجام می‌دهیم (درس بعد).""",
"ترتیب اجرای else و finally را در چهار حالت (موفق، خطای گرفته‌شده، خطای گرفته‌نشده، return در try) آزمایش کن.",
py="""def run(x):
    try:
        r = 10 / x
    except ZeroDivisionError:
        print("  except")
        return "خطا"
    else:
        print("  else")
        return r
    finally:
        print("  finally")
for v in (2, 0):
    print("ورودی", v, "->", run(v))
def f():
    try:
        return "از try"
    finally:
        print("finally قبل از return اجرا شد")
print(f())""")

add(1,44,"""<p>با <code class='inline'>raise</code> خودت خطا ایجاد می‌کنی: <code class='inline'>raise ValueError("پیام")</code>. برای قرارداد API (مثلاً «سن نباید منفی باشد») بهتر از برگرداندن مقدار ویژه است. <code class='inline'>raise</code> بدون آرگومان داخل except همان خطا را دوباره پرتاب می‌کند.</p>
<p><b>خطای سفارشی</b> با ارث‌بری از <code class='inline'>Exception</code> (نه BaseException) ساخته می‌شود و معنی دامنه‌ی کسب‌وکار را می‌رساند. <code class='inline'>raise X from e</code> علت اصلی را زنجیره می‌کند. <code class='inline'>assert</code> برای اطمینان‌های درونی است نه اعتبارسنجی ورودی کاربر (می‌تواند با -O حذف شود).""",
"کلاس InsufficientFunds بساز و در تابع برداشت از حساب استفاده کن.",
py="""class InsufficientFunds(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"موجودی {balance} برای برداشت {amount} کافی نیست")
        self.balance, self.amount = balance, amount

def withdraw(balance, amount):
    if amount <= 0:
        raise ValueError("مبلغ باید مثبت باشد")
    if amount > balance:
        raise InsufficientFunds(balance, amount)
    return balance - amount

for amt in (30, 500, -5):
    try:
        print("باقی‌مانده:", withdraw(100, amt))
    except InsufficientFunds as e:
        print("خطای دامنه:", e, "| کمبود:", e.amount - e.balance)
    except ValueError as e:
        print("ورودی بد:", e)
try:
    try:
        int("x")
    except ValueError as e:
        raise RuntimeError("پردازش شکست خورد") from e
except RuntimeError as e:
    print(e, "| علت:", repr(e.__cause__))""")

add(1,45,"""<p>برای کار با فایل: <code class='inline'>open(مسیر, mode, encoding="utf-8")</code>. حالت‌ها: <code class='inline'>"r"</code> خواندن (پیش‌فرض)، <code class='inline'>"w"</code> نوشتن (محتوای قبلی پاک می‌شود)، <code class='inline'>"a"</code> افزودن، <code class='inline'>"rb"/"wb"</code> باینری. همیشه <code class='inline'>encoding="utf-8"</code> بده تا فارسی در همه‌ی سیستم‌ها درست بماند.</p>
<p>خواندن: <code class='inline'>.read()</code> همه، <code class='inline'>.readline()</code>، <code class='inline'>.readlines()</code> و ایده‌آل‌تر <b>پیمایش مستقیم</b> روی فایل (<code class='inline'>for line in f</code>) که حافظه‌ی کم می‌گیرد. فایل باز را حتماً ببند؛ بهترین روش <code class='inline'>with</code> است (درس بعد).""",
"فهرستی از ۳ کار را در فایل بنویس، بخوان و شماره‌دار چاپ کن.",
py="""f = open("tasks.txt", "w", encoding="utf-8")
f.write("خرید نان\\n")
f.write("تمرین پایتون\\n")
f.close()
f = open("tasks.txt", "a", encoding="utf-8")
f.write("پیاده‌روی\\n")
f.close()
f = open("tasks.txt", encoding="utf-8")
print(f.read())
f.close()
f = open("tasks.txt", encoding="utf-8")
for i, line in enumerate(f, 1):
    print(i, line.rstrip())
f.close()""")

add(1,46,"""<p><code class='inline'>with open(...) as f:</code> فایل را پس از پایان بلوک <b>خودکار می‌بندد</b>، حتی اگر خطا رخ دهد. این الگوی مدیر context است و باید پیش‌فرض تو باشد. کمتر از فراموش‌کردن close و نشت منبع نگران باش.</p>
<p>خطاهای معمول: <code class='inline'>FileNotFoundError</code> (مسیر نیست)، <code class='inline'>PermissionError</code>، <code class='inline'>UnicodeDecodeError</code> (انکودینگ نادرست). برای داده‌ی ساخت‌یافته از <code class='inline'>json</code> و <code class='inline'>csv</code> استفاده کن نه تجزیه‌ی دستی.""",
"تعداد خطوط و کلمات یک فایل را با with حساب کن و FileNotFoundError را مدیریت کن.",
py="""import json
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("اولین خط\\nدومین خط با چند کلمه\\n")
with open("notes.txt", encoding="utf-8") as f:
    lines = f.readlines()
print(len(lines), sum(len(l.split()) for l in lines))
try:
    with open("nope.txt") as f:
        pass
except FileNotFoundError as e:
    print("فایل نیست:", e.filename)
data = {"name": "علی", "scores": [17, 19]}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
with open("data.json", encoding="utf-8") as f:
    print(json.load(f))""")

add(1,47,"""<p>کار با مسیر به‌صورت رشته (مثل <code class='inline'>"a\\\\b"</code> در ویندوز و <code class='inline'>"a/b"</code> در لینوکس) شکننده است. ماژول <code class='inline'>pathlib</code> مسیر را شیء می‌کند و مستقل از سیستم‌عامل است: <code class='inline'>Path("data") / "file.txt"</code>.</p>
<p>ویژگی‌های مفید: <code class='inline'>.name .stem .suffix .parent</code>، <code class='inline'>.exists() .is_file() .is_dir()</code>، <code class='inline'>.read_text() .write_text()</code>، <code class='inline'>.mkdir(parents=True, exist_ok=True)</code>، <code class='inline'>.glob("*.txt")</code> و <code class='inline'>Path.cwd()</code>. این جایگزین <code class='inline'>os.path</code> قدیمی است.""",
"همه‌ی فایل‌های .txt یک پوشه را با glob پیدا کن و اندازه‌شان را چاپ کن.",
py="""from pathlib import Path
base = Path("demo_dir")
base.mkdir(exist_ok=True)
p = base / "hello.txt"
p.write_text("سلام pathlib", encoding="utf-8")
print(p, p.name, p.stem, p.suffix, p.parent)
print(p.exists(), p.is_file(), base.is_dir())
print(p.read_text(encoding="utf-8"))
(base / "b.txt").write_text("b")
for f in sorted(base.glob("*.txt")):
    print(f.name, f.stat().st_size, "بایت")""")

add(1,48,"""<p><b>ماژول</b> یک فایل <code class='inline'>.py</code> است که می‌توان وارد کرد. شکل‌ها: <code class='inline'>import math</code>، <code class='inline'>from math import sqrt</code>، <code class='inline'>import numpy as np</code>. از <code class='inline'>from x import *</code> پرهیز کن (آلودگی فضای نام). کتابخانه‌ی استاندارد پایتون «باتری‌های همراه» دارد: <code class='inline'>math random datetime json re os sys collections itertools</code>.</p>
<p>مسیر جست‌وجو در <code class='inline'>sys.path</code> است. برای ماژول خودت فایلی کنار برنامه بساز. الگوی <code class='inline'>if __name__ == "__main__":</code> کدی را فقط وقتی فایل مستقیم اجرا شد (نه import) اجرا می‌کند. بسته (package) پوشه‌ای از ماژول‌هاست.""",
"ماژول کوچکی بنویس (در فایل جدا یا همین‌جا) و با الگوی __main__ هم قابل‌استفاده و هم قابل‌اجرا کن.",
py="""import math, random, datetime
from collections import Counter
print(math.sqrt(16), math.pi, math.floor(2.7), math.ceil(2.1))
random.seed(1)
print(random.randint(1, 6), random.choice(["الف", "ب", "پ"]))
print(Counter("mississippi").most_common(2))
print(datetime.date(2026, 10, 17).strftime("%Y/%m/%d"), datetime.timedelta(days=30))
print(__name__)
def main():
    print("اجرا به‌صورت برنامه")
if __name__ == "__main__":
    main()""")

add(1,49,"""<p>کتابخانه‌های بیرون از استاندارد از <b>PyPI</b> با <code class='inline'>pip install بسته</code> نصب می‌شوند (مثلاً <code class='inline'>pip install requests</code>). مشکل: همه‌ی پروژه‌ها نسخه‌های مشترک می‌خواهند و با هم تداخل پیدا می‌کنند. راه‌حل <b>محیط مجازی</b> (venv) است: هر پروژه محیط جدا.</p>
<p>روال: <code class='inline'>python -m venv .venv</code>، فعال‌سازی (ویندوز: <code class='inline'>.venv\\\\Scripts\\\\activate</code>، لینوکس/مک: <code class='inline'>source .venv/bin/activate</code>)، سپس <code class='inline'>pip install</code>. لیست وابستگی‌ها: <code class='inline'>pip freeze &gt; requirements.txt</code> و بازسازی با <code class='inline'>pip install -r requirements.txt</code>. پوشه‌ی <code class='inline'>.venv</code> را هرگز در Git نگذار.""",
"در سیستم خودت یک venv بساز، requests را نصب کن و requirements.txt تولید کن.",
py="""import sys
print("مفسر:", sys.executable)
print("نسخه:", sys.version.split()[0])
print("در محیط مجازی؟", sys.prefix != getattr(sys, "base_prefix", sys.prefix))
print("چند مسیر جست‌وجو:", len(sys.path))
try:
    import requests
    print("requests نصب است")
except ImportError:
    print("requests نصب نیست -> pip install requests")""",
extra=code("ترمینال","""python -m venv .venv
source .venv/bin/activate        # ویندوز: .venv\\Scripts\\activate
pip install requests
pip freeze > requirements.txt
deactivate"""))

add(1,50,"""<p>پروژه‌ی پایان سطح ۱: <b>دفترچه‌ی مخاطبین</b>. از همه‌ی چیزهایی که یاد گرفتی استفاده کن: دیکشنری و لیست، تابع، شرط و حلقه، مدیریت خطا، فایل JSON و ماژول <code class='inline'>pathlib</code>. نمونه‌ی مرجع زیر را بعد از تلاش خودت ببین.</p>
<p><b>قابلیت‌ها</b>: افزودن مخاطب (نام، تلفن)، جست‌وجو (بخشی از نام)، حذف، نمایش مرتب، ذخیره/بارگذاری از فایل. <b>معیار خوب بودن</b>: تابع‌های کوچک، بدون متغیر سراسری، مدیریت ورودی بد و فایل ناموجود، و داده‌ای که با بستن برنامه نمی‌پرد.""",
"قابلیت «ویرایش مخاطب» و جلوگیری از نام تکراری (با پیام خطا) را اضافه کن.",
py="""import json
from pathlib import Path

DB = Path("contacts.json")

def load():
    try:
        return json.loads(DB.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return {}

def save(contacts):
    DB.write_text(json.dumps(contacts, ensure_ascii=False, indent=2), encoding="utf-8")

def add(contacts, name, phone):
    name = name.strip()
    if not name or not phone.isdigit():
        raise ValueError("نام یا شماره نامعتبر")
    contacts[name] = phone

def search(contacts, text):
    return {n: p for n, p in contacts.items() if text in n}

def remove(contacts, name):
    return contacts.pop(name, None) is not None

contacts = load()
add(contacts, "سارا", "09120000001")
add(contacts, "سامان", "09120000002")
add(contacts, "علی", "09120000003")
try:
    add(contacts, "", "abc")
except ValueError as e:
    print("خطا:", e)
print(search(contacts, "سا"))
print("حذف:", remove(contacts, "علی"), remove(contacts, "ناموجود"))
save(contacts)
for n in sorted(load()):
    print(n, "-", contacts[n])""")

QUIZ={1:[
 quiz("خروجی print(7 // 2, 7 % 2) چیست؟",["3.5 1","3 1","4 1","3 0"],1,"// تقسیم صحیح (۳) و % باقی‌مانده (۱) است."),
 quiz("کدام عبارت برای رشته‌ی s آن را معکوس می‌کند؟",["s.reverse()","s[::-1]","reversed(s)","s[-1]"],1,"برش با گام ۱- رشته‌ی معکوس می‌سازد؛ رشته متد reverse ندارد."),
 quiz("اگر b = a (که a لیست است) و b.append(1) انجام دهیم، چه می‌شود؟",["فقط b عوض می‌شود","a هم عوض می‌شود","خطا می‌دهد","a پاک می‌شود"],1,"انتساب کپی نمی‌سازد؛ هر دو نام به یک لیست اشاره می‌کنند."),
 quiz("خروجی print(0.1 + 0.2 == 0.3) چیست؟",["True","False","خطا","None"],1,"اعشار دودویی دقیق نیست؛ برای مقایسه از math.isclose استفاده کن."),
 quiz("مشکل def f(x, a=[]) چیست؟",["پارامتر پیش‌فرض مجاز نیست","لیست پیش‌فرض بین فراخوانی‌ها مشترک می‌ماند","خطای نحوی","هیچ"],1,"مقدار پیش‌فرض یک‌بار ساخته می‌شود؛ از None و ساخت داخل تابع استفاده کن."),
 quiz("بلوک else در یک حلقه‌ی for چه زمانی اجرا می‌شود؟",["همیشه","وقتی حلقه بدون break تمام شود","وقتی break رخ دهد","وقتی خطا باشد"],1,"else حلقه فقط در پایان عادی (بدون break) اجرا می‌شود."),
 quiz("بهترین روش باز کردن فایل کدام است؟",["f = open(...) بدون close","with open(...) as f:","os.system('cat')","import file"],1,"with فایل را خودکار می‌بندد، حتی با خطا."),
 quiz("کدام نوع کلید معتبر دیکشنری نیست؟",["str","tuple","list","int"],2,"کلید باید hashable (تغییرناپذیر) باشد؛ لیست نیست."),
]}
CHALLENGE={1:{"task":"برنامه‌ای بنویس که رشته‌ی دلخواه (مثلاً یک جمله‌ی داخل کد) را بگیرد و ۳ کلمه‌ی پرتکرار آن را با تعدادشان چاپ کند (حروف بزرگ/کوچک یکسان فرض شوند و علائم نگارشی نادیده گرفته شوند).",
 "hint1":"اول متن را با lower() یکدست کن و علائم را با replace یا یک حلقه حذف کن، بعد split بزن.",
 "hint2":"با یک دیکشنری (یا Counter) فراوانی را بشمار، سپس با sorted و key و reverse=True مرتب کن و [:3] بگیر.",
 "solution":"import re\nfrom collections import Counter\ntext = \"To be, or not to be: that is the question. To be!\"\nwords = re.findall(r\"\\w+\", text.lower())\nfor w, c in Counter(words).most_common(3):\n    print(w, c)"}}
