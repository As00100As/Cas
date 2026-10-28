import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(3,26,"""<p><b>Cython</b> کد شبیه‌پایتون (با افزودن نوع C) را به C کامپایل می‌کند و ماژول افزونه می‌سازد؛ برای حلقه‌های عددی سنگین ۱۰–۱۰۰× سرعت می‌دهد. جریان: فایل <code class='inline'>.pyx</code> با <code class='inline'>cdef int i</code> و <code class='inline'>cpdef</code>، سپس <code class='inline'>setup.py</code>/<code class='inline'>pyproject</code> و <code class='inline'>cythonize</code>. حالت تحلیلی: <code class='inline'>cython -a file.pyx</code> گزارش HTML می‌دهد که خط‌های «زرد» (تعامل با پایتون، کند) را نشان می‌دهد.</p>
<p>جایگزین‌ها: <b>NumPy</b> (برداری‌سازی)، <b>Numba</b> (<code class='inline'>@njit</code> کامپایل JIT)، <b>PyO3/Rust</b> و <b>mypyc</b>. قاعده‌ی انتخاب: اول الگوریتم، بعد NumPy، بعد Numba/Cython فقط برای گلوگاه ثابت‌شده با پروفایل. این محیط کامپایلر ندارد؛ در پایین کد واقعی Cython (اجرا نشده) و نسخه‌ی پایتون خالص برای مقایسه است.""",
"تابع انتگرال‌گیری عددی را به Cython ببر و نسبت سرعت را اندازه بگیر.",
py="""import timeit
def integrate_py(f, a, b, n):
    dx = (b - a) / n
    s = 0.0
    for i in range(n):
        s += f(a + i * dx) * dx
    return s
def sq(x): return x * x
print(round(integrate_py(sq, 0, 3, 100_000), 3))      # انتظار ≈ 9
t = timeit.timeit(lambda: integrate_py(sq, 0, 3, 100_000), number=3)
print("زمان پایتون خالص:", f"{t:.3f}s", "← گلوگاه حلقه + فراخوانی تابع")""",
extra=code("integrate.pyx — Cython (اجرا نشده در این محیط)","""# cython: language_level=3, boundscheck=False, wraparound=False
cdef double sq(double x) nogil:
    return x * x

cpdef double integrate(double a, double b, int n):
    cdef double dx = (b - a) / n
    cdef double s = 0.0
    cdef int i
    for i in range(n):
        s += sq(a + i * dx) * dx
    return s
# ساخت:  cythonize -i integrate.pyx   ←  import integrate; integrate.integrate(0, 3, 10**7)"""))

add(3,27,"""<p>برای صدا زدن کتابخانه‌ی C موجود (بدون نوشتن افزونه) <b>ctypes</b> داخلی است: <code class='inline'>ctypes.CDLL("libc.so.6")</code> سپس تابع را فراخوانی کن. مهم: <b>امضا را اعلام کن</b> (<code class='inline'>func.argtypes</code> و <code class='inline'>func.restype</code>)، وگرنه پایتون حدس می‌زند (int) و مقادیر اشاره‌گر/اعشار خراب می‌شوند یا برنامه کرش می‌کند. انواع: <code class='inline'>c_int c_double c_char_p c_void_p</code>، ساختار با <code class='inline'>ctypes.Structure</code>.</p>
<p><b>cffi</b> رویکرد مدرن‌تر است: اعلان C را به‌صورت رشته می‌دهی (<code class='inline'>ffi.cdef("int abs(int);")</code>) و ایمن‌تر و سریع‌تر (حالت API). هر دو حافظه‌ی دستی دارند و خطا = segfault؛ پس مرز را کوچک نگه دار و تست کن. در Pyodide کتابخانه‌ی سیستمی در دسترس نیست و کد خطا را مدیریت می‌کند.""",
"strlen و qsort (با callback) را از libc صدا بزن و مقایسه‌گر پایتونی بده.",
py="""import ctypes, ctypes.util, sys
try:
    libc = ctypes.CDLL(ctypes.util.find_library("c") or None)
    libc.strlen.argtypes = [ctypes.c_char_p]
    libc.strlen.restype = ctypes.c_size_t
    print(libc.strlen(b"hello world"))
    CMP = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_int), ctypes.POINTER(ctypes.c_int))
    arr = (ctypes.c_int * 5)(5, 2, 9, 1, 7)
    libc.qsort(arr, 5, ctypes.sizeof(ctypes.c_int), CMP(lambda a, b: a[0] - b[0]))
    print(list(arr))
    class Point(ctypes.Structure):
        _fields_ = [("x", ctypes.c_double), ("y", ctypes.c_double)]
    p = Point(1.5, 2.5)
    print(p.x + p.y, ctypes.sizeof(Point))
except (OSError, AttributeError, TypeError) as e:
    print("libc در این محیط در دسترس نیست:", type(e).__name__)
print(ctypes.sizeof(ctypes.c_int), ctypes.sizeof(ctypes.c_double))""")

add(3,28,"""<p>الگوهای طراحی راه‌حل‌های آزموده برای مسئله‌های تکراری‌اند. <b>سازنده‌ها</b> (creational) ساخت شیء را مدیریت می‌کنند: <b>Factory</b> (تصمیم ساخت نوع)، <b>Builder</b> (ساخت مرحله‌ای برای شیء پیچیده با پارامتر زیاد)، <b>Singleton</b> (یک نمونه — در پایتون معمولاً با ماژول یا تزریق ساده‌تر است) و <b>Prototype</b> (کپی).</p>
<p>پایتون به‌خاطر توابع درجه‌یک و دینامیک بودن بسیاری از الگوها را سبک‌تر می‌کند: Factory می‌تواند یک دیکشنری از کلاس‌ها باشد و Singleton یک ماژول. الگو را برای حل مسئله بیاور نه برای خودنمایی؛ نام مشترک به ارتباط تیم کمک می‌کند ولی پیچیدگی بی‌دلیل بد است.""",
"Builder برای ساخت درخواست HTTP (روش، هدر، بدنه) بنویس که زنجیره‌ای باشد.",
py="""class Shape: pass
class Circle(Shape): name = "دایره"
class Square(Shape): name = "مربع"
FACTORY = {"circle": Circle, "square": Square}
def make(kind):
    try:
        return FACTORY[kind]()
    except KeyError:
        raise ValueError(f"نوع ناشناخته: {kind}") from None
print(make("circle").name, make("square").name)

class Request:
    def __init__(self): self.method, self.url, self.headers, self.body = "GET", "", {}, None
    def __repr__(self): return f"{self.method} {self.url} {self.headers} {self.body}"
class RequestBuilder:
    def __init__(self): self._r = Request()
    def method(self, m): self._r.method = m; return self
    def url(self, u): self._r.url = u; return self
    def header(self, k, v): self._r.headers[k] = v; return self
    def json(self, d):
        import json; self._r.body = json.dumps(d); return self.header("Content-Type", "application/json")
    def build(self): return self._r
print(RequestBuilder().method("POST").url("/api/users").json({"name": "علی"}).build())

class Config:                       # singleton ساده با __new__
    _inst = None
    def __new__(cls):
        if cls._inst is None: cls._inst = super().__new__(cls)
        return cls._inst
print(Config() is Config())""")

add(3,29,"""<p><b>الگوهای ساختاری</b> نحوه‌ی ترکیب کلاس‌ها را مشخص می‌کنند. <b>Adapter</b> رابط ناسازگار را به رابط مورد انتظار وصل می‌کند (مثلاً کتابخانه‌ی بیرونی)، <b>Decorator</b> رفتار را بدون تغییر کلاس می‌افزاید (در پایتون توابع decorator)، <b>Facade</b> رابط ساده‌ای برای زیرسیستم پیچیده می‌دهد، <b>Composite</b> ساختار درختی را یکنواخت رفتار می‌کند (فایل و پوشه)، <b>Proxy</b> جانشین با کنترل دسترسی/کش.</p>
<p>نشانه‌ی نیاز: Adapter وقتی کد قدیمی/بیرونی را تغییر نمی‌توانی داد؛ Facade وقتی مصرف‌کننده‌ها باید ۵ مرحله را بدانند؛ Composite وقتی «یک» و «مجموعه» باید یکسان کار کنند.""",
"Composite بنویس که اندازه‌ی کل یک ساختار فایل/پوشه را حساب کند.",
py="""class OldLogger:                       # رابط ناسازگار
    def write_line(self, text): print("OLD:", text)
class LoggerAdapter:                  # رابط مورد انتظار: log(msg)
    def __init__(self, old): self._old = old
    def log(self, msg): self._old.write_line(msg)
LoggerAdapter(OldLogger()).log("سلام")

class File:
    def __init__(self, name, size): self.name, self.size = name, size
    def total(self): return self.size
class Folder:
    def __init__(self, name, *items): self.name, self.items = name, list(items)
    def total(self): return sum(i.total() for i in self.items)
root = Folder("root", File("a", 10), Folder("sub", File("b", 5), File("c", 7)))
print(root.total())

class Facade:
    def __init__(self):
        self.steps = []
    def checkout(self, cart):
        for s in ("اعتبارسنجی سبد", "کسر موجودی", "پرداخت", "ایمیل"):
            self.steps.append(s)
        return f"سفارش {len(cart)} کالا ثبت شد"
f = Facade()
print(f.checkout(["x", "y"]), f.steps)

class CachedProxy:
    def __init__(self, fn): self.fn, self.cache = fn, {}
    def __call__(self, x):
        if x not in self.cache: self.cache[x] = self.fn(x)
        return self.cache[x]
sq = CachedProxy(lambda x: print("  محاسبه") or x * x)
print(sq(4), sq(4))""")

add(3,30,"""<p><b>الگوهای رفتاری</b> نحوه‌ی ارتباط اشیا را مدیریت می‌کنند. <b>Strategy</b>: الگوریتم‌های قابل‌تعویض (در پایتون یک تابع کافی است). <b>Observer</b>: وقتی چیزی تغییر کرد مشترک‌ها خبردار شوند (رویدادها). <b>Command</b>: درخواست به‌صورت شیء/تابع (امکان صف، undo). <b>State</b>: رفتار بسته به وضعیت (ماشین حالت). <b>Template Method</b>، <b>Iterator</b> (داخلی) و <b>Chain of Responsibility</b> (میان‌افزارها).</p>
<p>در پایتون Strategy و Command اغلب فقط «تابع به‌عنوان آرگومان» هستند. Observer را با لیست callbackها یا سیگنال‌ها پیاده می‌کنند؛ مراقب نشت حافظه (فراموشی لغو اشتراک) باشید.""",
"سیستم undo برای یک ویرایشگر متن ساده با الگوی Command بنویس.",
py="""# Strategy: تابع به‌عنوان الگوریتم
def percent(p): return lambda price: price * (1 - p / 100)
def fixed(v): return lambda price: max(0, price - v)
def total(price, strategy): return strategy(price)
print(total(200, percent(10)), total(200, fixed(50)))

# Observer
class Event:
    def __init__(self): self._subs = []
    def subscribe(self, fn): self._subs.append(fn); return lambda: self._subs.remove(fn)
    def emit(self, *a): [fn(*a) for fn in list(self._subs)]
on_order = Event()
unsub = on_order.subscribe(lambda o: print("  ایمیل برای", o))
on_order.subscribe(lambda o: print("  انبار برای", o))
on_order.emit("#1"); unsub(); on_order.emit("#2")

# Command + undo
class Editor:
    def __init__(self): self.text, self.history = "", []
    def run(self, cmd):
        cmd.do(self); self.history.append(cmd)
    def undo(self):
        if self.history: self.history.pop().undo(self)
class Append:
    def __init__(self, s): self.s = s
    def do(self, ed): ed.text += self.s
    def undo(self, ed): ed.text = ed.text[:-len(self.s)]
e = Editor(); e.run(Append("سلام ")); e.run(Append("دنیا"))
print(e.text); e.undo(); print(e.text)

# State
class Door:
    transitions = {("closed", "open"): "opened", ("opened", "close"): "closed", ("closed", "lock"): "locked", ("locked", "unlock"): "closed"}
    def __init__(self): self.state = "closed"
    def do(self, action):
        self.state = self.transitions.get((self.state, action), self.state)
        return self.state
d = Door(); print(d.do("open"), d.do("lock"), d.do("close"), d.do("lock"))""")

add(3,31,"""<p><b>SOLID</b> پنج اصل طراحی شیءگرا: <b>S</b> مسئولیت یگانه (هر کلاس یک دلیل برای تغییر)، <b>O</b> باز/بسته (برای توسعه باز، برای تغییر بسته: با افزودن کلاس جدید رفتار اضافه کن نه ویرایش if)، <b>L</b> جانشینی لیسکوف (زیرکلاس باید جایگزین والد شود بدون شکستن انتظارها)، <b>I</b> جداسازی رابط (رابط‌های کوچک و متمرکز)، <b>D</b> وارونگی وابستگی (به انتزاع وابسته باش نه به جزئیات؛ تزریق).</p>
<p>در پایتون این‌ها را با تعادل و بدون افراط به کار ببر: <code class='inline'>Protocol</code> و تابع جای رابط‌های سنگین را می‌گیرند. نشانه‌های تخطی: کلاس «خدا» با ۲۰ متد، زنجیره‌ی if/elif روی نوع، زیرکلاسی که <code class='inline'>NotImplementedError</code> می‌دهد، و کلاسی که مستقیم دیتابیس و ایمیل را new می‌کند.""",
"کلاس OrderProcessor را که همه‌چیز را خودش انجام می‌دهد با اصول SOLID تقسیم کن.",
py="""# قبل: همه‌چیز در یک کلاس؛ هر تغییر یعنی ویرایش همین کلاس
# بعد: مسئولیت‌های جدا + وابستگی تزریق‌شده + باز/بسته
from typing import Protocol
class Discount(Protocol):
    def apply(self, total: float) -> float: ...
class NoDiscount:
    def apply(self, total): return total
class Percent:
    def __init__(self, p): self.p = p
    def apply(self, total): return total * (1 - self.p / 100)
class Notifier(Protocol):
    def send(self, msg: str) -> None: ...
class ConsoleNotifier:
    def send(self, msg): print("  ", msg)
class OrderRepo:
    def __init__(self): self.rows = []
    def save(self, o): self.rows.append(o)
class OrderService:
    def __init__(self, repo, notifier, discount):     # D: وابستگی‌ها تزریق می‌شوند
        self.repo, self.notifier, self.discount = repo, notifier, discount
    def place(self, items):
        total = self.discount.apply(sum(items))       # O: تخفیف جدید = کلاس جدید
        self.repo.save({"items": items, "total": total})
        self.notifier.send(f"سفارش ثبت شد: {total}")
        return total
svc = OrderService(OrderRepo(), ConsoleNotifier(), Percent(10))
print(svc.place([100, 50]))
print(OrderService(OrderRepo(), ConsoleNotifier(), NoDiscount()).place([100]))
class Bird:
    def fly(self): return "پرواز"
class Penguin(Bird):
    def fly(self): raise NotImplementedError          # L: نقض جانشینی
try: Penguin().fly()
except NotImplementedError: print("نقض LSP: پنگوئن نباید از Bird با fly ارث ببرد")""")

add(3,32,"""<p><b>معماری تمیز</b> (Clean/Hexagonal): منطق کسب‌وکار در مرکز، مستقل از فریم‌ورک، دیتابیس و UI؛ وابستگی‌ها فقط <b>به سمت داخل</b>. لایه‌ها: <b>دامنه</b> (موجودیت‌ها و قواعد)، <b>موارد استفاده</b> (use-case/سرویس)، <b>رابط‌ها (ports)</b> و <b>آداپترها</b> (دیتابیس، HTTP، ایمیل). اینگونه می‌توان دیتابیس را عوض کرد یا منطق را بدون وب‌سرور تست کرد.</p>
<p>هزینه: کد و لایه‌ی بیشتر؛ برای CRUD ساده زیاد است. با رشد پروژه و پیچیدگی قواعد ارزش پیدا می‌کند. قاعده‌ی عملی: «دامنه هرگز import از فریم‌ورک یا ORM نمی‌کند». مخزن (Repository) انتزاع ذخیره‌سازی است و تست را با نسخه‌ی در‌حافظه ساده می‌کند.""",
"use-case «ثبت‌نام کاربر» را با دامنه، repository انتزاعی و دو پیاده‌سازی (حافظه/sqlite) بنویس.",
py="""from dataclasses import dataclass
from abc import ABC, abstractmethod
import sqlite3
# --- دامنه (هیچ import از دیتابیس/وب) ---
@dataclass
class User:
    email: str
    name: str
    def __post_init__(self):
        if "@" not in self.email: raise ValueError("ایمیل نامعتبر")
class UserRepo(ABC):                         # port
    @abstractmethod
    def add(self, u: User): ...
    @abstractmethod
    def exists(self, email: str) -> bool: ...
# --- use-case ---
class Register:
    def __init__(self, repo: UserRepo): self.repo = repo
    def __call__(self, email, name):
        if self.repo.exists(email): raise ValueError("ایمیل تکراری")
        u = User(email, name); self.repo.add(u); return u
# --- آداپترها ---
class MemoryRepo(UserRepo):
    def __init__(self): self.d = {}
    def add(self, u): self.d[u.email] = u
    def exists(self, e): return e in self.d
class SqliteRepo(UserRepo):
    def __init__(self):
        self.c = sqlite3.connect(":memory:")
        self.c.execute("CREATE TABLE u (email TEXT PRIMARY KEY, name TEXT)")
    def add(self, u): self.c.execute("INSERT INTO u VALUES (?, ?)", (u.email, u.name))
    def exists(self, e): return self.c.execute("SELECT 1 FROM u WHERE email=?", (e,)).fetchone() is not None
for repo in (MemoryRepo(), SqliteRepo()):
    reg = Register(repo)
    print(type(repo).__name__, reg("a@x.ir", "علی"))
    for args in (("a@x.ir", "دوباره"), ("bad", "x")):
        try: reg(*args)
        except ValueError as e: print("  خطا:", e)""")

add(3,33,"""<p><b>تزریق وابستگی</b> (DI): کلاس وابستگی‌هایش را <b>از بیرون می‌گیرد</b> نه اینکه خودش بسازد. مزایا: تست با شیء ساختگی، جایگزینی آسان (دیتابیس/ایمیل)، و وابستگی‌های صریح در امضا. ساده‌ترین شکل: پارامتر سازنده یا تابع؛ نیازی به «کانتینر» سنگین نیست (در پایتون معمولاً بیش‌ازحد است).</p>
<p>الگوی «ریشه‌ی ترکیب» (composition root): یک نقطه در ابتدای برنامه (مثل <code class='inline'>main()</code>) که همه‌ی اشیا را می‌سازد و به هم وصل می‌کند. در FastAPI سیستم <code class='inline'>Depends</code> همین را برای هر درخواست انجام می‌دهد. پرهیز: وابستگی پنهان از طریق import سراسری و singleton که تست را سخت می‌کند.""",
"سرویس گزارش را با ساعت و ایمیل‌فرستنده‌ی قابل‌تزریق بنویس تا بدون زمان واقعی تست شود.",
py="""from datetime import datetime
class Mailer:
    def send(self, to, body): print("  ایمیل واقعی به", to)
class FakeMailer:
    def __init__(self): self.sent = []
    def send(self, to, body): self.sent.append((to, body))
class ReportService:
    def __init__(self, mailer, now=datetime.now):          # ساعت هم وابستگی است
        self.mailer, self.now = mailer, now
    def send_daily(self, to, count):
        stamp = self.now().strftime("%Y-%m-%d")
        self.mailer.send(to, f"گزارش {stamp}: {count} سفارش")
fake = FakeMailer()
svc = ReportService(fake, now=lambda: datetime(2026, 10, 18))
svc.send_daily("boss@x.ir", 12)
print(fake.sent)
assert fake.sent == [("boss@x.ir", "گزارش 2026-10-18: 12 سفارش")]
def main():                                                  # ریشه‌ی ترکیب
    return ReportService(Mailer())
main().send_daily("a@b.ir", 3)""")

add(3,34,"""<p>تست مبتنی‌بر مثال فقط موارد پیش‌بینی‌شده‌ی تو را می‌آزماید. <b>تست مبتنی‌بر ویژگی</b> (property-based) با کتابخانه‌ی <code class='inline'>hypothesis</code> «ویژگی‌هایی که همیشه باید برقرار باشد» را بیان می‌کند و صدها ورودی تصادفی، هوشمند (شامل مرزها: خالی، صفر، یونیکد عجیب) تولید می‌کند. در شکست، مثال شکست‌خورده را به <b>کوچک‌ترین نمونه</b> کاهش می‌دهد (shrinking).</p>
<p>ویژگی‌های خوب: «رفت‌وبرگشت» (<code class='inline'>decode(encode(x)) == x</code>)، «idempotent» (<code class='inline'>sort(sort(x)) == sort(x)</code>)، «پایدار نسبت به مدل ساده» (نسخه‌ی بهینه = نسخه‌ی کند و واضح). در این محیط hypothesis نصب نیست؛ ایده را با یک مولد تصادفی دستی نشان می‌دهیم و کد hypothesis واقعی در بلوک پایین است.""",
"برای تابع encode/decode رمزگذاری run-length ویژگی رفت‌وبرگشت را بنویس و باگ را پیدا کن.",
py="""import random
def rle_encode(s):
    out, i = [], 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]: j += 1
        out.append((s[i], j - i)); i = j
    return out
def rle_decode(pairs): return "".join(c * n for c, n in pairs)
def prop_roundtrip(s): return rle_decode(rle_encode(s)) == s
def prop_sorted_idempotent(xs): return sorted(sorted(xs)) == sorted(xs)
rng = random.Random(1)
alphabet = "ab\\n ص😀"
for trial in range(500):
    s = "".join(rng.choice(alphabet) for _ in range(rng.randint(0, 12)))
    xs = [rng.randint(-5, 5) for _ in range(rng.randint(0, 8))]
    assert prop_roundtrip(s), f"شکست: {s!r}"
    assert prop_sorted_idempotent(xs)
print("500 ورودی تصادفی: همه‌ی ویژگی‌ها برقرار")
def buggy_abs(x): return x if x > 0 else -x if x < 0 else 1     # باگ در صفر
fails = [x for x in range(-3, 4) if buggy_abs(x) < 0 or (x == 0 and buggy_abs(x) != 0)]
print("مثال کوچک شکست:", fails)""",
extra=code("hypothesis (اجرا نشده)","""from hypothesis import given, strategies as st

@given(st.text())
def test_roundtrip(s):
    assert rle_decode(rle_encode(s)) == s

@given(st.lists(st.integers()))
def test_sort_idempotent(xs):
    assert sorted(sorted(xs)) == sorted(xs)"""))

add(3,35,"""<p><b>تست یکپارچگی</b> همکاری چند بخش واقعی را می‌آزماید (سرویس + دیتابیس واقعی/ازمونی، API از ورودی تا خروجی). تست واحد زیاد و سریع، یکپارچگی متوسط، و تست سرتاسری (E2E) کم و کند: «هرم تست». ابزارها: دیتابیس موقت (sqlite در حافظه یا <b>Testcontainers</b> برای Postgres واقعی)، <code class='inline'>TestClient</code> فریم‌ورک وب.</p>
<p><b>coverage</b> (پوشش) نشان می‌دهد کدام خطوط/شاخه‌ها هنگام تست اجرا شده‌اند: <code class='inline'>pytest --cov=pkg --cov-branch</code>. پوشش بالا ≠ تست خوب (خط اجرا شد ولی assert نداشت)، ولی پوشش پایین یعنی بخشی ازمون‌نشده است. عدد هدف را کورکورانه ۱۰۰٪ نگذار؛ مسیرهای حساس را بپوشان و <b>mutation testing</b> (mutmut) کیفیت assertها را می‌سنجد.""",
"با یک ردیاب ساده (sys.settrace) خطوط اجراشده‌ی یک تابع را پیدا کن و خط ازمون‌نشده را شناسایی کن.",
py="""import sys, inspect
def grade(score):
    if score >= 18:
        return "عالی"
    elif score >= 10:
        return "قبول"
    else:
        return "مردود"
def run_with_coverage(func, cases):
    executed = set()
    code = func.__code__
    def tracer(frame, event, arg):
        if frame.f_code is code and event == "line":
            executed.add(frame.f_lineno)
        return tracer
    sys.settrace(tracer)
    try:
        for c in cases: func(c)
    finally:
        sys.settrace(None)
    return executed
lines, start = inspect.getsourcelines(grade)
body = {start + i for i, l in enumerate(lines) if "return" in l}
hit = run_with_coverage(grade, [19, 12])           # مردود را تست نکردیم
missed = sorted(body - hit)
print("پوشش:", f"{100 * len(body & hit) // len(body)}%")
print("خط ازمون‌نشده:", [lines[m - start].strip() for m in missed])""")

add(3,36,"""<p><b>CI</b> (یکپارچه‌سازی پیوسته) با هر push کد را خودکار می‌سازد و تست می‌کند تا خطا زود، در محیط تمیز و مشترک دیده شود. <b>GitHub Actions</b>: فایل YAML در <code class='inline'>.github/workflows/</code> با <code class='inline'>on</code> (محرک)، <code class='inline'>jobs</code>، <code class='inline'>steps</code> و <code class='inline'>matrix</code> برای اجرا روی چند نسخه‌ی پایتون/سیستم‌عامل.</p>
<p>مراحل نمونه: checkout، نصب پایتون، کش وابستگی‌ها، نصب، lint (ruff)، نوع (mypy)، تست با coverage، و در انتها ساخت بسته. رازها را در <b>Secrets</b> مخزن بگذار نه فایل. شاخه‌ی اصلی را با «بررسی‌های الزامی» محافظت کن. شکست CI یعنی ادغام ممنوع؛ CI کند را با کش و موازی‌سازی سریع نگه دار.""",
"Workflow ای بنویس که روی PR تست را برای پایتون ۳٫۱۱ تا ۳٫۱۳ اجرا و پوشش را گزارش کند.",
py="""import json
workflow = {
    "name": "CI",
    "on": {"push": {"branches": ["main"]}, "pull_request": {}},
    "jobs": {"test": {
        "runs-on": "ubuntu-latest",
        "strategy": {"matrix": {"python": ["3.11", "3.12", "3.13"]}},
        "steps": [
            {"uses": "actions/checkout@v4"},
            {"uses": "actions/setup-python@v5", "with": {"python-version": "${{ matrix.python }}", "cache": "pip"}},
            {"run": "pip install -e .[dev]"},
            {"run": "ruff check . && ruff format --check ."},
            {"run": "mypy src"},
            {"run": "pytest --cov=src --cov-fail-under=80"},
        ]}},
}
def to_yaml(o, ind=0):
    pad = "  " * ind
    if isinstance(o, dict):
        return "".join(f"{pad}{k}:" + (("\\n" + to_yaml(v, ind + 1)) if isinstance(v, (dict, list)) and v else (" " + json.dumps(v) + "\\n" if not isinstance(v, (dict, list)) else " {}\\n")) for k, v in o.items())
    return "".join(f"{pad}- " + (to_yaml(i, ind + 1).lstrip() if isinstance(i, dict) else json.dumps(i) + "\\n") for i in o)
y = to_yaml(workflow)
print(y[:350])
print("تعداد مرحله‌ها:", len(workflow["jobs"]["test"]["steps"]))""",
extra=code(".github/workflows/ci.yml","""name: CI
on:
  push: { branches: [main] }
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix: { python: ["3.11", "3.12", "3.13"] }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "${{ matrix.python }}", cache: pip }
      - run: pip install -e .[dev]
      - run: ruff check . && mypy src
      - run: pytest --cov=src --cov-fail-under=80"""))

add(3,37,"""<p>انتشار روی <b>PyPI</b> یعنی ساخت دو فایل توزیع: <b>sdist</b> (کد منبع، <code class='inline'>.tar.gz</code>) و <b>wheel</b> (<code class='inline'>.whl</code>، بسته‌ی از پیش‌ساخته؛ در واقع یک فایل zip با ساختار مشخص و متادیتا). با <code class='inline'>python -m build</code> ساخته و با <code class='inline'>twine upload</code> بارگذاری می‌شود. از <code class='inline'>pyproject.toml</code> با backend مانند hatchling/setuptools/flit استفاده کن.</p>
<p>قبل از انتشار: نام یکتا (در PyPI جست‌وجو کن)، نسخه‌بندی معنایی <code class='inline'>MAJOR.MINOR.PATCH</code>، پروانه (LICENSE)، README، <b>TestPyPI</b> برای آزمایش، و <b>Trusted Publishing</b> (بدون توکن در CI). نسخه‌ی منتشرشده <b>حذف‌شدنی نیست</b> (فقط yank)؛ پس دقت کن. یک wheel را همین‌جا از داخل بساز و ببین.""",
"بسته‌ات را با python -m build بساز و wheel را روی TestPyPI منتشر کن، سپس در محیط تمیز نصب کن.",
py="""import zipfile, io, hashlib, base64
name, ver = "mytool", "0.1.0"
files = {
    f"{name}/__init__.py": "def greet(n):\\n    return f'سلام {n}'\\n",
    f"{name}-{ver}.dist-info/METADATA": f"Metadata-Version: 2.1\\nName: {name}\\nVersion: {ver}\\nSummary: demo\\n",
    f"{name}-{ver}.dist-info/WHEEL": "Wheel-Version: 1.0\\nGenerator: demo\\nRoot-Is-Purelib: true\\nTag: py3-none-any\\n",
}
def record_line(path, data):
    h = base64.urlsafe_b64encode(hashlib.sha256(data.encode()).digest()).rstrip(b"=").decode()
    return f"{path},sha256={h},{len(data.encode())}"
rec = "\\n".join(record_line(p, d) for p, d in files.items()) + f"\\n{name}-{ver}.dist-info/RECORD,,\\n"
files[f"{name}-{ver}.dist-info/RECORD"] = rec
buf = io.BytesIO()
with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
    for p, d in files.items(): z.writestr(p, d)
whl = f"{name}-{ver}-py3-none-any.whl"
print(whl, len(buf.getvalue()), "بایت")
with zipfile.ZipFile(io.BytesIO(buf.getvalue())) as z:
    print(z.namelist())
    print(z.read(f"{name}-{ver}.dist-info/METADATA").decode().splitlines()[1:3])""",
extra=code("ترمینال","""python -m pip install build twine
python -m build                       # dist/*.whl و dist/*.tar.gz
twine check dist/*
twine upload --repository testpypi dist/*
python -m venv /tmp/t && /tmp/t/bin/pip install -i https://test.pypi.org/simple/ mytool"""))

add(3,38,"""<p>مستندات خوب سه سطح دارد: README (شروع سریع)، راهنما (مفاهیم و دستورالعمل‌ها) و مرجع API (خودکار از docstring). <b>MkDocs</b> (با تم Material) از Markdown سایت زیبا می‌سازد و <code class='inline'>mkdocstrings</code> مرجع API را از docstring تولید می‌کند. <b>Sphinx</b> قدیمی‌تر و قدرتمندتر برای پروژه‌های بزرگ (reStructuredText/MyST، autodoc، intersphinx).</p>
<p>قواعد: مثال‌های قابل‌اجرا (doctest یا تست مستندات) تا کهنه نشوند، توضیح «چرا» نه فقط «چه»، و انتشار خودکار در CI (GitHub Pages / Read the Docs). docstring را یکدست (Google/NumPy) و کامل بنویس. بخش تغییرات (CHANGELOG) با سبک <i>Keep a Changelog</i>.""",
"از docstringهای یک ماژول با inspect یک مرجع Markdown بساز.",
py="""import inspect, textwrap
def area(w: float, h: float) -> float:
    \"\"\"مساحت مستطیل.

    Args:
        w: عرض.
        h: ارتفاع.
    \"\"\"
    return w * h
def perimeter(w: float, h: float) -> float:
    \"\"\"محیط مستطیل.\"\"\"
    return 2 * (w + h)
def to_markdown(*funcs):
    out = ["# مرجع API", ""]
    for f in funcs:
        out.append(f"## `{f.__name__}{inspect.signature(f)}`")
        out.append("")
        out.append(inspect.getdoc(f) or "_بدون مستندات_")
        out.append("")
    return "\\n".join(out)
print(to_markdown(area, perimeter))""",
extra=code("mkdocs.yml","""site_name: mytool
theme: { name: material }
plugins:
  - search
  - mkdocstrings
nav:
  - شروع: index.md
  - مرجع API: reference.md
# در reference.md:  ::: mytool.core"""))

add(3,39,"""<p><b>FastAPI</b> چارچوب وب مدرن و سریع پایتون است: مسیرها با decorator، <b>type hint</b> برای اعتبارسنجی/تبدیل خودکار پارامترها، مستندات تعاملی خودکار (<code class='inline'>/docs</code> Swagger) و پشتیبانی async. اجرا با <code class='inline'>uvicorn main:app --reload</code>. پارامتر مسیر <code class='inline'>/users/{id}</code>، پرس‌وجو <code class='inline'>?q=x</code> و بدنه با مدل Pydantic.</p>
<p>کد وضعیت را درست بده (<code class='inline'>201</code> ایجاد، <code class='inline'>404</code> پیدا نشد، <code class='inline'>422</code> ورودی نامعتبر، خودکار)، با <code class='inline'>HTTPException</code> خطا بده و <code class='inline'>Depends</code> برای تزریق وابستگی. این محیط وب‌سرور و FastAPI ندارد؛ منطق «مسیریابی با پارامتر نوع‌دار» را با یک مسیریاب ساده می‌سازیم تا درونش را بفهمی و کد واقعی را در بلوک زیر ببینی.""",
"endpointهای CRUD برای کتاب‌ها با FastAPI بنویس و با TestClient تست کن.",
py="""import re
class MiniApp:
    def __init__(self): self.routes = []
    def get(self, pattern):
        regex = re.compile("^" + re.sub(r"\\{(\\w+):(\\w+)\\}", lambda m: f"(?P<{m[1]}>[^/]+)", pattern) + "$")
        types = dict(re.findall(r"\\{(\\w+):(\\w+)\\}", pattern))
        def deco(fn):
            self.routes.append((regex, types, fn)); return fn
        return deco
    def handle(self, path):
        for regex, types, fn in self.routes:
            m = regex.match(path)
            if m:
                try:
                    kw = {k: {"int": int, "str": str}[types[k]](v) for k, v in m.groupdict().items()}
                except ValueError:
                    return 422, {"detail": "پارامتر نامعتبر"}
                return 200, fn(**kw)
        return 404, {"detail": "پیدا نشد"}
app = MiniApp()
BOOKS = {1: "شاهنامه", 2: "گلستان"}
@app.get("/books/{id:int}")
def get_book(id): return {"id": id, "title": BOOKS.get(id)}
for p in ("/books/1", "/books/abc", "/nope"):
    print(p, app.handle(p))""",
extra=code("main.py — FastAPI واقعی (اجرا نشده)","""from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()
BOOKS: dict[int, str] = {1: "شاهنامه"}

class BookIn(BaseModel):
    title: str

@app.get("/books/{book_id}")
async def get_book(book_id: int):
    if book_id not in BOOKS:
        raise HTTPException(status_code=404, detail="پیدا نشد")
    return {"id": book_id, "title": BOOKS[book_id]}

@app.post("/books", status_code=201)
async def add_book(b: BookIn):
    new_id = max(BOOKS, default=0) + 1
    BOOKS[new_id] = b.title
    return {"id": new_id, **b.model_dump()}
# uvicorn main:app --reload   سپس   http://127.0.0.1:8000/docs"""))

add(3,40,"""<p><b>Pydantic</b> اعتبارسنجی داده با type hint است: مدل را با <code class='inline'>BaseModel</code> تعریف می‌کنی، ورودی (مثلاً JSON) را می‌دهی، و یا شیء معتبر و <b>تبدیل‌نوع‌شده</b> می‌گیری یا <code class='inline'>ValidationError</code> با جزئیات هر فیلد. قیدها: <code class='inline'>Field(gt=0, max_length=50)</code>، نوع‌های ویژه (<code class='inline'>EmailStr</code>، <code class='inline'>HttpUrl</code>)، <code class='inline'>@field_validator</code> و <code class='inline'>@model_validator</code>.</p>
<p>مرز سیستم را اعتبارسنجی کن (ورودی کاربر، پاسخ API‌ها، تنظیمات). <code class='inline'>model_dump()</code>، <code class='inline'>model_validate_json()</code>. تفاوت با dataclass: dataclass اعتبارسنجی نمی‌کند. <code class='inline'>pydantic-settings</code> تنظیمات را از محیط می‌خواند. در این محیط Pydantic نیست؛ اصل کار را با یک اعتبارسنج کوچک نوع‌محور شبیه‌سازی می‌کنیم.""",
"مدل سفارش با قیدهای مقدار و اعتبارسنجی چندفیلدی (جمع اقلام) بنویس.",
py="""from dataclasses import dataclass, fields
from typing import get_type_hints
class ValidationError(Exception):
    def __init__(self, errors): self.errors = errors; super().__init__(errors)
def validated(cls):
    cls = dataclass(cls)
    hints = get_type_hints(cls)
    orig = cls.__init__
    def init(self, **kw):
        errors, clean = {}, {}
        for f in fields(cls):
            if f.name not in kw:
                errors[f.name] = "الزامی"; continue
            try:
                v = hints[f.name](kw[f.name])            # تبدیل نوع
            except (TypeError, ValueError):
                errors[f.name] = f"باید {hints[f.name].__name__} باشد"; continue
            rule = getattr(cls, f"check_{f.name}", None)
            if rule and (msg := rule(v)):
                errors[f.name] = msg
            clean[f.name] = v
        if errors: raise ValidationError(errors)
        orig(self, **clean)
    cls.__init__ = init
    return cls
@validated
class Order:
    id: int
    qty: int
    email: str
    @staticmethod
    def check_qty(v): return None if v > 0 else "باید مثبت باشد"
    @staticmethod
    def check_email(v): return None if "@" in v else "ایمیل نامعتبر"
print(Order(id="7", qty="3", email="a@x.ir"))
try:
    Order(id="x", qty=-1, email="bad")
except ValidationError as e:
    print(e.errors)""",
extra=code("Pydantic v2 (اجرا نشده)","""from pydantic import BaseModel, Field, EmailStr, field_validator

class Order(BaseModel):
    id: int
    qty: int = Field(gt=0)
    email: EmailStr

    @field_validator("id")
    @classmethod
    def id_positive(cls, v):
        if v <= 0: raise ValueError("id باید مثبت باشد")
        return v

Order.model_validate({"id": "7", "qty": 3, "email": "a@x.ir"})   # id → 7"""))

add(3,41,"""<p>ORM پیشرفته یعنی دانستن هزینه‌ها: <b>N+1</b> (یک پرس‌وجو برای لیست + N برای رابطه‌ها)، بارگذاری مشتاق (<code class='inline'>joinedload/selectinload</code>)، <b>تراکنش‌ها</b> و سطح ایزولاسیون، قفل خوش‌بینانه با ستون نسخه، و ایندکس. بررسی SQL تولیدشده (<code class='inline'>echo=True</code> یا <code class='inline'>EXPLAIN</code>) عادت ضروری است.</p>
<p><b>مهاجرت</b> (migration) تغییر اسکیمای دیتابیس را نسخه‌بندی می‌کند: هر تغییر یک فایل با <code class='inline'>upgrade</code> و <code class='inline'>downgrade</code>. ابزار <b>Alembic</b> (برای SQLAlchemy): <code class='inline'>alembic revision --autogenerate</code> و <code class='inline'>alembic upgrade head</code>. قواعد: مهاجرت را مرور کن، در مرحله‌ی آزمایشی اجرا کن، تغییرهای مخرب را مرحله‌ای (expand/contract) انجام بده تا توقف سرویس نداشته باشی.""",
"سیستم مهاجرت ساده با PRAGMA user_version بنویس که فقط مهاجرت‌های جدید را اعمال کند.",
py="""import sqlite3
MIGRATIONS = [
    "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL)",
    "ALTER TABLE users ADD COLUMN email TEXT",
    "CREATE UNIQUE INDEX idx_users_email ON users(email)",
]
def migrate(conn):
    current = conn.execute("PRAGMA user_version").fetchone()[0]
    for i, sql in enumerate(MIGRATIONS[current:], start=current + 1):
        with conn:
            conn.execute(sql)
            conn.execute(f"PRAGMA user_version = {i}")
        print(f"  اعمال شد → نسخه {i}")
    return conn.execute("PRAGMA user_version").fetchone()[0]
conn = sqlite3.connect(":memory:")
print("نسخه:", migrate(conn))
print("دوباره:", migrate(conn))          # چیزی اعمال نمی‌شود
print([r[1] for r in conn.execute("PRAGMA table_info(users)")])
conn.execute("INSERT INTO users (name, email) VALUES ('a', 'a@x.ir')")
try:
    conn.execute("INSERT INTO users (name, email) VALUES ('b', 'a@x.ir')")
except sqlite3.IntegrityError as e:
    print("ایندکس یکتا:", e)
n1 = 5                                   # N+1: ۱ + N پرس‌وجو در برابر ۱ پرس‌وجو با JOIN
print("N+1 =", 1 + n1, "پرس‌وجو در برابر 1")""")

add(3,42,"""<p><b>کش</b> نتیجه‌ی پرهزینه را موقت نگه می‌دارد. سطوح: حافظه‌ی فرایند (<code class='inline'>lru_cache</code>)، <b>Redis</b> (حافظه‌ی مشترک شبکه‌ای، سریع، با ساختارهای String/Hash/List/Set/SortedSet و انقضا TTL)، CDN. الگوی رایج <b>cache-aside</b>: ابتدا کش، اگر نبود از منبع و ذخیره در کش با TTL.</p>
<p>مشکلات: <b>ابطال کش</b> («یکی از دو مسئله‌ی سخت علوم کامپیوتر»)، <b>cache stampede</b> (انبوه درخواست هم‌زمان بعد از انقضا؛ قفل یا انقضای تصادفی)، و داده‌ی کهنه. کلید را ساختاریافته نام‌گذاری کن (<code class='inline'>user:42:profile</code>). از Redis برای محدودکننده‌ی نرخ، نشست، صف سبک و قفل توزیع‌شده هم استفاده می‌شود (<code class='inline'>redis-py</code>).""",
"کش TTL با پاک‌سازی و الگوی cache-aside را پیاده کن و نرخ برخورد (hit rate) را حساب کن.",
py="""import time
class TTLCache:
    def __init__(self, clock=time.monotonic):
        self.d, self.clock, self.hits, self.misses = {}, clock, 0, 0
    def get(self, key):
        item = self.d.get(key)
        if item and item[1] > self.clock():
            self.hits += 1; return item[0]
        self.d.pop(key, None); self.misses += 1
        return None
    def set(self, key, value, ttl): self.d[key] = (value, self.clock() + ttl)
now = [0.0]
cache = TTLCache(clock=lambda: now[0])
db_calls = 0
def get_user(uid):                      # cache-aside
    global db_calls
    v = cache.get(f"user:{uid}")
    if v is None:
        db_calls += 1
        v = {"id": uid, "name": f"کاربر{uid}"}
        cache.set(f"user:{uid}", v, ttl=10)
    return v
for _ in range(5): get_user(1)
now[0] = 11                             # منقضی شد
get_user(1)
print("برخورد:", cache.hits, "عدم برخورد:", cache.misses, "پرس‌وجوی دیتابیس:", db_calls)
print(f"hit rate = {cache.hits / (cache.hits + cache.misses):.0%}")""",
extra=code("redis-py (اجرا نشده)","""import redis, json
r = redis.Redis(host="localhost", decode_responses=True)

def get_user(uid):
    key = f"user:{uid}"
    if (cached := r.get(key)):
        return json.loads(cached)
    user = load_from_db(uid)
    r.set(key, json.dumps(user), ex=300)      # TTL ۵ دقیقه
    return user

r.incr("page:views")                           # شمارنده‌ی اتمی
r.zadd("scores", {"علی": 90, "سارا": 95})      # لیدربورد"""))

add(3,43,"""<p>کار سنگین یا کند (ارسال ایمیل، پردازش تصویر، گزارش) نباید داخل درخواست وب انجام شود. <b>صف پیام</b> و <b>کارگرها</b>: وب‌اپ کار را در صف (Redis/RabbitMQ) می‌گذارد و فوراً پاسخ می‌دهد؛ کارگر پس‌زمینه آن را اجرا می‌کند. <b>Celery</b> محبوب‌ترین ابزار پایتون است (و جایگزین‌های سبک‌تر: RQ، Dramatiq، arq).</p>
<p>اصول: کار باید <b>idempotent</b> باشد (چون تلاش مجدد ممکن است دو بار اجرا شود)، تلاش مجدد با backoff، <b>dead-letter queue</b> برای کارهای همیشه‌شکست‌خورده، پارامتر ساده و سریالایزپذیر (شناسه، نه شیء ORM)، مهلت زمانی، و پایش طول صف. تحویل «حداقل یک‌بار» استاندارد است نه «دقیقاً یک‌بار».""",
"صف کار با ۳ بار تلاش مجدد، backoff و dead-letter را شبیه‌سازی کن.",
py="""import collections
class Queue:
    def __init__(self, max_retries=3):
        self.q = collections.deque(); self.dead = []; self.max_retries = max_retries; self.log = []
    def enqueue(self, fn, *args): self.q.append((fn, args, 0))
    def run(self):
        while self.q:
            fn, args, tries = self.q.popleft()
            try:
                self.log.append((fn.__name__, "ok", fn(*args)))
            except Exception as e:
                if tries + 1 >= self.max_retries:
                    self.dead.append((fn.__name__, args, str(e)))
                else:
                    self.q.append((fn, args, tries + 1))     # تلاش مجدد (در عمل با تأخیر)
calls = {"n": 0}
def flaky(x):
    calls["n"] += 1
    if calls["n"] < 3: raise ConnectionError("قطع")
    return f"پردازش {x}"
def always_fails(x): raise ValueError("داده خراب")
q = Queue()
q.enqueue(flaky, 1); q.enqueue(always_fails, 2); q.enqueue(lambda: "ساده")
q.run()
print(q.log)
print("dead-letter:", q.dead)""",
extra=code("Celery (اجرا نشده)","""# tasks.py
from celery import Celery
app = Celery("tasks", broker="redis://localhost:6379/0")

@app.task(bind=True, autoretry_for=(ConnectionError,), retry_backoff=True, max_retries=5)
def send_email(self, user_id):
    ...                                  # idempotent باشد!

# در وب‌اپ:  send_email.delay(user.id)
# اجرای کارگر:  celery -A tasks worker --loglevel=INFO"""))

add(3,44,"""<p><b>مشاهده‌پذیری</b> (observability) یعنی بتوانی از بیرون بفهمی داخل سیستم چه می‌گذرد؛ سه ستون: <b>لاگ</b> (رویدادها)، <b>متریک</b> (اعداد در زمان: نرخ درخواست، تأخیر، خطا) و <b>تریس</b> (مسیر یک درخواست در چند سرویس). لاگ <b>ساخت‌یافته</b> (JSON با فیلدهای ثابت) قابل‌جست‌وجو و تجمیع است: به‌جای <code class='inline'>"کاربر 5 وارد شد"</code>، <code class='inline'>{"event": "login", "user_id": 5}</code>.</p>
<p>الگو: یک <b>correlation/request id</b> به هر درخواست بده و در همه‌ی لاگ‌ها بگنجان (با <code class='inline'>contextvars</code>). ابزارها: <code class='inline'>structlog</code>، Prometheus (<code class='inline'>prometheus_client</code>) + Grafana، OpenTelemetry برای تریس. مراقب داده‌ی حساس (رمز، توکن، PII) باش و هزینه‌ی لاگ پرحجم را در نظر بگیر.""",
"لاگ JSON با request_id از contextvars بساز و دو درخواست هم‌زمان را قابل‌تفکیک کن.",
py="""import logging, json, contextvars, io, uuid
request_id = contextvars.ContextVar("request_id", default="-")
class JsonFormatter(logging.Formatter):
    def format(self, record):
        payload = {"level": record.levelname, "event": record.getMessage(),
                   "request_id": request_id.get(), **getattr(record, "extra_fields", {})}
        return json.dumps(payload, ensure_ascii=False)
stream = io.StringIO()
h = logging.StreamHandler(stream); h.setFormatter(JsonFormatter())
log = logging.getLogger("app"); log.handlers[:] = [h]; log.setLevel(logging.INFO); log.propagate = False
def handle(user_id):
    token = request_id.set(uuid.uuid4().hex[:6])
    try:
        log.info("ورود", extra={"extra_fields": {"user_id": user_id}})
        log.warning("تلاش مشکوک", extra={"extra_fields": {"user_id": user_id}})
    finally:
        request_id.reset(token)
handle(5); handle(7)
lines = [json.loads(l) for l in stream.getvalue().splitlines()]
print(lines[0]["event"], lines[0]["user_id"], len({l["request_id"] for l in lines}), "درخواست متفاوت")
print(lines[0])""")

add(3,45,"""<p><b>Docker</b> برنامه را با همه‌ی وابستگی‌هایش در یک <b>image</b> قابل‌حمل بسته‌بندی می‌کند؛ «روی سیستم من کار می‌کرد» حل می‌شود. هر دستور Dockerfile یک <b>لایه</b> است و لایه‌ها کش می‌شوند: دستورهای کم‌تغییر (نصب وابستگی) را <b>بالاتر</b> و کد را <b>پایین‌تر</b> بگذار تا با تغییر کد، نصب وابستگی دوباره اجرا نشود.</p>
<p>بهترین روش‌ها: تصویر پایه‌ی کوچک و پین‌شده (<code class='inline'>python:3.13-slim</code>)، <b>multi-stage build</b>، اجرا با کاربر غیر root، <code class='inline'>.dockerignore</code> (نادیده گرفتن .git، venv)، <code class='inline'>PYTHONUNBUFFERED=1</code>، و <code class='inline'>HEALTHCHECK</code>. رازها را در image نگذار (متغیر محیطی/سرویس رازها). اجرا: <code class='inline'>docker build -t app .</code> و <code class='inline'>docker run -p 8000:8000 app</code>؛ چند سرویس با <code class='inline'>docker compose</code>.""",
"Dockerfile چندمرحله‌ای برای یک API پایتون بنویس و حجم و زمان ساخت را مقایسه کن.",
py="""import hashlib
def build(instructions, files):
    # شبیه‌سازی کش لایه‌ها: لایه تا اولین تغییر کش است
    parent, rebuilt, log = "", False, []
    for ins in instructions:
        key = ins
        if ins.startswith("COPY"):
            key += "|" + hashlib.md5(files[ins.split()[1]].encode()).hexdigest()[:6]
        layer = hashlib.md5((parent + key).encode()).hexdigest()[:6]
        log.append((ins, layer))
        parent = layer
    return log
ins = ["FROM python:3.13-slim", "COPY requirements.txt", "RUN pip install -r requirements.txt", "COPY src", "CMD python -m app"]
v1 = {"requirements.txt": "fastapi==0.115", "src": "print(1)"}
v2 = {"requirements.txt": "fastapi==0.115", "src": "print(2)"}     # فقط کد عوض شد
a, b = build(ins, v1), build(ins, v2)
for (i, l1), (_, l2) in zip(a, b):
    print("کش‌شده " if l1 == l2 else "بازساخت", i)""",
extra=code("Dockerfile","""# ---- build ----
FROM python:3.13-slim AS build
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# ---- runtime ----
FROM python:3.13-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY --from=build /install /usr/local
COPY src ./src
RUN useradd -m app && chown -R app /app
USER app
HEALTHCHECK CMD python -c "import urllib.request as u; u.urlopen('http://localhost:8000/health')"
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]"""))

add(3,46,"""<p>امنیت برنامه با «هرگز به ورودی اعتماد نکن» شروع می‌شود. <b>pickle</b> خطرناک است: بارگذاری pickle غیرقابل‌اعتماد <b>اجرای کد دلخواه</b> است (<code class='inline'>__reduce__</code>)؛ برای تبادل داده از JSON استفاده کن. همین‌طور <code class='inline'>yaml.load</code> بدون <code class='inline'>safe_load</code>، <code class='inline'>eval/exec</code> روی ورودی، و <code class='inline'>subprocess(shell=True)</code>.</p>
<p>موارد رایج: <b>تزریق SQL</b> (پارامتر)، <b>Path Traversal</b> (<code class='inline'>../../etc/passwd</code>؛ مسیر را resolve و با پوشه‌ی پایه بسنج)، <b>XSS</b> (escape خروجی HTML)، <b>SSRF</b>، رمزنگاری خانگی (از کتابخانه استفاده کن)، و وابستگی‌های آسیب‌پذیر (<code class='inline'>pip-audit</code>، Dependabot). فهرست OWASP Top 10 را بشناس. اصل کمترین دسترسی را رعایت کن.""",
"تابع دانلود فایل ایمن بنویس که مسیر خارج از پوشه‌ی مجاز را رد کند.",
py="""import pickle, json, html
from pathlib import Path
class Evil:
    def __reduce__(self):
        return (print, ("⚠ کد دلخواه اجرا شد!",))      # در واقع می‌توانست هر چیزی باشد
payload = pickle.dumps(Evil())
pickle.loads(payload)                                # فقط با ورودی معتبر! خودِ خطر
print(json.loads('{"a": 1}'))                        # JSON فقط داده است
BASE = Path("/srv/files").resolve()
def safe_path(name):
    p = (BASE / name).resolve()
    if not p.is_relative_to(BASE):
        raise PermissionError(f"مسیر مجاز نیست: {name}")
    return p
print(safe_path("report.pdf"))
for bad in ("../../etc/passwd", "/etc/passwd"):
    try: safe_path(bad)
    except PermissionError as e: print("رد شد:", e)
print(html.escape("<script>alert(1)</script>"))
try:
    eval("__import__('os').getcwd()", {"__builtins__": {}})
except Exception as e:
    print("eval محدود هم امن نیست؛ خطا:", type(e).__name__)""")

add(3,47,"""<p><b>بازتولیدپذیری</b>: همان کد فردا و روی ماشین دیگر همان نتیجه را بدهد. دشمن آن: وابستگی‌های بدون نسخه (<code class='inline'>requests</code> بدون قید) که با به‌روزرسانی ناگهانی برنامه را می‌شکنند. راه‌حل: <b>فایل قفل</b> (lock) که نسخه‌ی دقیق همه‌ی وابستگی‌ها (و وابستگی‌های وابستگی) و ایده‌آلاً <b>هش</b> آن‌ها را نگه می‌دارد: <code class='inline'>uv.lock</code>، <code class='inline'>poetry.lock</code>، <code class='inline'>pip-compile --generate-hashes</code>.</p>
<p>قواعد: برنامه = وابستگی‌های قفل‌شده (دقیق)، کتابخانه = بازه‌های نرم. قفل را در Git نگه دار، به‌روزرسانی را عمدی و با تست انجام بده (Dependabot/Renovate)، نصب با <code class='inline'>--require-hashes</code> در تولید، نسخه‌ی پایتون را پین کن (<code class='inline'>.python-version</code>) و در CI نصب از lock انجام شود. <code class='inline'>pip-audit</code> آسیب‌پذیری‌ها را بررسی می‌کند.""",
"با uv یک پروژه بساز، دو وابستگی اضافه کن، lock را ببین و در یک پوشه‌ی تمیز با uv sync بازسازی کن.",
py="""import hashlib, re
requirements = '''fastapi==0.115.0 --hash=sha256:aaaa
requests>=2.0
rich
uvicorn==0.30.0'''
def check_pins(text):
    problems = []
    for line in text.splitlines():
        name = re.split(r"[=<>~! ]", line.strip(), 1)[0]
        if "==" not in line:
            problems.append(f"{name}: نسخه پین نشده")
        elif "--hash" not in line:
            problems.append(f"{name}: بدون hash")
    return problems
for p in check_pins(requirements): print("⚠", p)
def file_hash(data): return hashlib.sha256(data).hexdigest()[:16]
artifact = "محتوای بسته".encode()
expected = file_hash(artifact)
print(file_hash(artifact) == expected, file_hash(artifact + b"x") == expected)
print("اگر بسته دست‌کاری شود، هش نمی‌خواند و نصب رد می‌شود")""",
extra=code("uv","""uv init mytool && cd mytool
uv python pin 3.13
uv add fastapi httpx
uv add --dev pytest ruff
cat uv.lock | head                 # نسخه‌ها و هش‌ها قفل شد
rm -rf .venv && uv sync --frozen   # بازسازی دقیق"""))

add(3,48,"""<p>از پایتون ۳٫۱۰ <code class='inline'>match / case</code> <b>تطبیق الگوی ساختاری</b> می‌دهد؛ فراتر از switch: ساختار داده را باز می‌کند. الگوها: مقدار ثابت (<code class='inline'>case 404:</code>)، <b>OR</b> (<code class='inline'>case 200 | 201:</code>)، <b>دنباله</b> (<code class='inline'>case [x, y]:</code>، <code class='inline'>case [first, *rest]:</code>)، <b>دیکشنری</b> (<code class='inline'>case {"type": "click", "pos": (x, y)}:</code>)، <b>کلاس</b> (<code class='inline'>case Point(x=0, y=y):</code>)، و محافظ <code class='inline'>if</code> (<code class='inline'>case n if n &gt; 5:</code>) و گرفتن <code class='inline'>as</code>.</p>
<p>نکات: نام ساده در الگو <b>متغیر می‌گیرد</b> نه مقایسه (برای ثابت‌ها از نام نقطه‌دار مثل <code class='inline'>Color.RED</code> یا لیترال استفاده کن)، <code class='inline'>_</code> «هر چیز». اولین تطابق برنده است. عالی برای تجزیه‌ی پیام/دستور، پردازش AST و ماشین‌حالت؛ برای شرط ساده if کافی است.""",
"پردازشگر دستورات ربات (move x y، say متن، stop) را با match بنویس.",
py="""def handle(cmd):
    match cmd.split():
        case ["stop"]:
            return "توقف"
        case ["move", x, y] if x.lstrip("-").isdigit() and y.lstrip("-").isdigit():
            return f"حرکت به ({x}, {y})"
        case ["say", *words] if words:
            return "می‌گوید: " + " ".join(words)
        case ["go", ("north" | "south") as d]:
            return f"جهت {d}"
        case _:
            return "دستور نامعتبر"
for c in ("stop", "move 3 -4", "say سلام دنیا", "go north", "go up", "move a b"):
    print(f"{c!r:20} →", handle(c))
from dataclasses import dataclass
@dataclass
class Point: x: int; y: int
def where(p):
    match p:
        case Point(0, 0): return "مبدأ"
        case Point(x=0, y=y): return f"روی محور y در {y}"
        case Point(x, y) if x == y: return "روی قطر"
        case {"type": "event", "data": {"id": i}}: return f"رویداد {i}"
        case _: return "جای دیگر"
print(where(Point(0, 0)), where(Point(0, 5)), where(Point(2, 2)), where({"type": "event", "data": {"id": 9}}))""")

add(3,49,"""<p>تایپ پیشرفته کد عمومی و ایمن می‌سازد. <b>TypeVar</b> رابطه‌ی نوع ورودی و خروجی را حفظ می‌کند: <code class='inline'>def first[T](xs: list[T]) -&gt; T</code> (سینتکس ۳٫۱۲) یا <code class='inline'>T = TypeVar("T")</code>. <b>Generic</b>: کلاس‌های پارامتری مثل <code class='inline'>Stack[int]</code>. محدودیت: <code class='inline'>TypeVar("N", bound=Number)</code> یا <code class='inline'>int | float</code>.</p>
<p>ابزارهای بیشتر: <code class='inline'>Protocol</code> (ساختاری)، <code class='inline'>ParamSpec</code> (حفظ امضا در decorator)، <code class='inline'>Self</code> (متد زنجیره‌ای)، <code class='inline'>TypeAlias</code>، <code class='inline'>Annotated</code> (فراداده؛ پایه‌ی FastAPI)، <code class='inline'>Final</code>، <code class='inline'>Literal</code> و <code class='inline'>TypeGuard</code>. همه فقط برای بررسی‌گر ایستا هستند، نه زمان اجرا؛ ولی کتابخانه‌هایی مثل Pydantic از آن‌ها در زمان اجرا استفاده می‌کنند.""",
"Stack عمومی بنویس که mypy نوع عضو را بداند و decorator ای که امضای تابع را حفظ کند.",
py="""from typing import Generic, TypeVar, Callable, ParamSpec, Self, Annotated, get_type_hints, get_args
T = TypeVar("T")
P = ParamSpec("P")
R = TypeVar("R")
class Stack(Generic[T]):
    def __init__(self) -> None: self._items: list[T] = []
    def push(self, x: T) -> Self:
        self._items.append(x); return self
    def pop(self) -> T: return self._items.pop()
s: Stack[int] = Stack()
s.push(1).push(2)
print(s.pop(), s.pop())
def logged(fn: Callable[P, R]) -> Callable[P, R]:      # امضا حفظ می‌شود
    def wrapper(*a: P.args, **k: P.kwargs) -> R:
        print("  فراخوانی", fn.__name__)
        return fn(*a, **k)
    return wrapper
@logged
def add(a: int, b: int = 0) -> int: return a + b
print(add(2, b=3))
def first[T2](xs: list[T2]) -> T2: return xs[0]       # سینتکس ۳٫۱۲
print(first(["الف", "ب"]))
Age = Annotated[int, "سال", (0, 150)]
print(get_type_hints(lambda x: x, include_extras=True), get_args(Age))""")

add(3,50,"""<p>پروژه‌ی پایان سطح ۳: <b>سرویس وب کامل</b> — مجموعه‌ای از همه‌ی این سطح: معماری لایه‌ای، API با اعتبارسنجی، دیتابیس با مهاجرت، تست (واحد + یکپارچگی)، لاگ ساخت‌یافته، تنظیمات از محیط، Docker و CI. پیشنهاد دامنه: <b>«کوتاه‌کننده‌ی لینک»</b> یا <b>«مدیریت کتابخانه»</b>.</p>
<p><b>معیار قبولی</b>: ۱) <code class='inline'>POST /links</code> (اعتبارسنجی URL)، <code class='inline'>GET /{code}</code> (۳۰۲ ریدایرکت یا ۴۰۴)، <code class='inline'>GET /links/{code}/stats</code>؛ ۲) پوشش تست ≥ ۸۰٪؛ ۳) mypy/ruff تمیز؛ ۴) Dockerfile و workflow CI؛ ۵) README با دستور اجرا. نمونه‌ی مرجع زیر یک هسته‌ی WSGI بدون وابستگی است که مستقیم (بدون سرور) تست می‌شود؛ با FastAPI بازنویسی‌اش کن.""",
"این هسته را با FastAPI، sqlite و pytest بازنویسی کن و Docker و CI اضافه کن.",
py="""import json, sqlite3, secrets, re
from io import BytesIO
db = sqlite3.connect(":memory:", check_same_thread=False)
db.execute("CREATE TABLE links (code TEXT PRIMARY KEY, url TEXT NOT NULL, hits INTEGER DEFAULT 0)")
URL = re.compile(r"^https?://[\\w.-]+(:\\d+)?(/.*)?$")
def respond(start, status, body, headers=()):
    start(status, [("Content-Type", "application/json; charset=utf-8"), *headers])
    return [json.dumps(body, ensure_ascii=False).encode()]
def app(environ, start_response):
    method, path = environ["REQUEST_METHOD"], environ["PATH_INFO"]
    if method == "POST" and path == "/links":
        try:
            data = json.loads(environ["wsgi.input"].read(int(environ.get("CONTENT_LENGTH") or 0)) or b"{}")
        except json.JSONDecodeError:
            return respond(start_response, "400 Bad Request", {"error": "JSON نامعتبر"})
        if not isinstance(data.get("url"), str) or not URL.match(data["url"]):
            return respond(start_response, "422 Unprocessable Entity", {"error": "url نامعتبر"})
        code = secrets.token_urlsafe(4)
        db.execute("INSERT INTO links (code, url) VALUES (?, ?)", (code, data["url"]))
        return respond(start_response, "201 Created", {"code": code})
    m = re.fullmatch(r"/links/(\\w+)/stats", path)
    if method == "GET" and m:
        row = db.execute("SELECT url, hits FROM links WHERE code=?", (m[1],)).fetchone()
        if not row: return respond(start_response, "404 Not Found", {"error": "پیدا نشد"})
        return respond(start_response, "200 OK", {"url": row[0], "hits": row[1]})
    m = re.fullmatch(r"/(\\w+)", path)
    if method == "GET" and m:
        row = db.execute("SELECT url FROM links WHERE code=?", (m[1],)).fetchone()
        if not row: return respond(start_response, "404 Not Found", {"error": "پیدا نشد"})
        db.execute("UPDATE links SET hits = hits + 1 WHERE code=?", (m[1],))
        return respond(start_response, "302 Found", {}, [("Location", row[0])])
    return respond(start_response, "404 Not Found", {"error": "مسیر ناشناخته"})
def call(method, path, body=None):
    raw = json.dumps(body).encode() if body is not None else b""
    env = {"REQUEST_METHOD": method, "PATH_INFO": path, "CONTENT_LENGTH": str(len(raw)), "wsgi.input": BytesIO(raw)}
    out = {}
    res = app(env, lambda s, h: out.update(status=s, headers=dict(h)))
    return out["status"], json.loads(b"".join(res)), out["headers"]
s, b, _ = call("POST", "/links", {"url": "https://example.com/very/long/path"})
print(s, b)
code = b["code"]
print(call("GET", "/" + code)[0::2])
call("GET", "/" + code)
print(call("GET", f"/links/{code}/stats")[:2])
print(call("POST", "/links", {"url": "not-a-url"})[:2])
print(call("GET", "/zzzz")[:2])""")

QUIZ={3:[
 quiz("چرا CPython علاوه بر شمارش مرجع GC هم دارد؟",["برای سرعت بیشتر","برای آزادسازی چرخه‌های مرجعی که شمارنده‌شان صفر نمی‌شود","برای ذخیره‌ی فایل","چون شمارش مرجع کار نمی‌کند"],1,"چرخه‌ی A↔B شمارنده‌ی غیرصفر دارد؛ فقط GC نسلی آن را پیدا می‌کند."),
 quiz("برای کار I/O-bound با هزاران اتصال بهترین انتخاب چیست؟",["multiprocessing","asyncio","حلقه‌ی ساده","threading با ۱۰۰۰۰ نخ"],1,"asyncio با یک نخ هزاران انتظار I/O را هم‌زمان مدیریت می‌کند."),
 quiz("GIL چه چیزی را تضمین نمی‌کند؟",["اجرای یک نخ در هر لحظه","thread-safe بودن کد تو","اتمی بودن بعضی عملیات داخلی","ساده بودن مدیریت حافظه"],1,"race condition در کد خودت همچنان ممکن است؛ باید قفل بگذاری."),
 quiz("اولین قدم بهینه‌سازی چیست؟",["نوشتن به C","اندازه‌گیری و پروفایل","حذف تایپ‌ها","استفاده از global"],1,"بدون اندازه‌گیری گلوگاه را حدس می‌زنی و وقت تلف می‌کنی."),
 quiz("pickle.loads روی داده‌ی غیرقابل‌اعتماد چرا خطرناک است؟",["کند است","می‌تواند کد دلخواه اجرا کند","حافظه می‌خورد","فارسی پشتیبانی نمی‌کند"],1,"__reduce__ اجازه‌ی اجرای هر تابعی را هنگام بارگذاری می‌دهد."),
 quiz("در FastAPI نوع‌دهی پارامترها چه می‌کند؟",["فقط مستندسازی","اعتبارسنجی و تبدیل خودکار + مستندات","سرعت را کم می‌کند","هیچ"],1,"type hint هم اعتبارسنجی می‌کند و هم Swagger می‌سازد."),
 quiz("قفل (lock file) وابستگی‌ها چه هدفی دارد؟",["کم کردن حجم","بازتولیدپذیری نصب با نسخه‌ها و هش‌های دقیق","رمزگذاری کد","اجرای سریع‌تر"],1,"همان نسخه‌ها در هر ماشین و هر زمان نصب می‌شوند."),
 quiz("تزریق وابستگی چه مزیت اصلی‌ای دارد؟",["کد را کوتاه‌تر می‌کند","جایگزینی و تست آسان با شیء ساختگی","سرعت بیشتر","حافظه‌ی کمتر"],1,"وابستگی از بیرون می‌آید، پس با نسخه‌ی تقلبی قابل‌تست است."),
]}
CHALLENGE={3:{"task":"محدودکننده‌ی نرخ «پنجره‌ی لغزان» (sliding window) بنویس: کلاس RateLimiter(max_calls, period) با متد allow(key, now) که اگر کلید در بازه‌ی period ثانیه‌ی اخیر کمتر از max_calls بار مجاز بوده True برگرداند. now قابل‌تزریق باشد تا تست‌پذیر شود.",
 "hint1":"برای هر کلید یک deque از زمان‌های درخواست‌های مجاز نگه دار.",
 "hint2":"قبل از تصمیم، زمان‌های قدیمی‌تر از now - period را از ابتدای deque حذف کن؛ سپس اگر طول < max_calls بود now را اضافه و True بده.",
 "solution":"from collections import defaultdict, deque\nclass RateLimiter:\n    def __init__(self, max_calls, period):\n        self.max, self.period = max_calls, period\n        self.hits = defaultdict(deque)\n    def allow(self, key, now):\n        q = self.hits[key]\n        while q and q[0] <= now - self.period:\n            q.popleft()\n        if len(q) < self.max:\n            q.append(now)\n            return True\n        return False\n\nr = RateLimiter(2, 10)\nprint([r.allow('u', t) for t in (0, 1, 2, 11, 12)])  # [True, True, False, True, True]"}}
