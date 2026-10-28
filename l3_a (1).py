import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(3,1,"""<p>در CPython هر شیء یک <b>شمارنده‌ی مرجع</b> (reference count) دارد: تعداد نام‌ها و ظرف‌هایی که به آن اشاره می‌کنند. وقتی به صفر برسد حافظه بلافاصله آزاد می‌شود. <code class='inline'>sys.getrefcount(x)</code> مقدار را نشان می‌دهد (خودِ فراخوانی یکی اضافه می‌کند). <code class='inline'>del x</code> فقط نام را حذف می‌کند نه لزوماً شیء را.</p>
<p>پیامد عملی: شیء‌های موقت زود آزاد می‌شوند (برخلاف زبان‌های GC محض)، پس بستن منبع‌ها (فایل) با <code class='inline'>with</code> هنوز لازم است ولی تخریب قابل‌پیش‌بینی‌تر است. <b>weakref</b> مرجعی است که شمارنده را زیاد نمی‌کند (برای کش و ناظر). هر چیزی که حافظه نگه می‌دارد (لیست سراسری، کش، closure) می‌تواند «نشت منطقی» بسازد.""",
"شیئی بساز که __del__ داشته باشد و ببین دقیقاً کی فراخوانی می‌شود؛ با weakref هم امتحان کن.",
py="""import sys, weakref
class Node:
    def __init__(self, name): self.name = name
    def __del__(self): print(f"  {self.name} آزاد شد")
a = Node("A")
print(sys.getrefcount(a) - 1)         # یک نام (a)
b = a
lst = [a]
print(sys.getrefcount(a) - 1)         # a, b, lst
del b
del lst
print(sys.getrefcount(a) - 1)
w = weakref.ref(a)
print(w() is a, sys.getrefcount(a) - 1)    # weakref شمارنده را زیاد نکرد
del a                                  # اینجا آزاد می‌شود
print("بعد از del:", w())
cache = weakref.WeakValueDictionary()
n = Node("C"); cache["c"] = n
print(list(cache))
del n
print(list(cache))""")

add(3,2,"""<p>شمارش مرجع <b>چرخه</b> را نمی‌بیند: اگر A به B و B به A اشاره کنند، شمارنده‌ها هیچ‌وقت صفر نمی‌شوند. برای همین CPython یک <b>garbage collector</b> نسلی (generational) هم دارد که چرخه‌های غیرقابل‌دسترس را پیدا و آزاد می‌کند؛ ماژول <code class='inline'>gc</code>: <code class='inline'>gc.collect()</code>، <code class='inline'>gc.get_stats()</code>، <code class='inline'>gc.disable()</code>.</p>
<p>اشیای جدید در نسل ۰ هستند و اگر زنده بمانند ارتقا می‌یابند؛ نسل‌های قدیمی‌تر کمتر بررسی می‌شوند. اجرای GC می‌تواند مکث کوچک بسازد؛ در سرویس‌های حساس به تأخیر گاهی <code class='inline'>gc.freeze()</code> بعد از بارگذاری اولیه استفاده می‌شود. <code class='inline'>__del__</code> در چرخه‌ها از ۳٫۴ امن شده ولی باز هم بهتر است به آن تکیه نکنی (از context manager استفاده کن).""",
"چرخه‌ی دوطرفه بساز، با gc.collect() آزادش کن و تعداد اشیای جمع‌شده را بخوان.",
py="""import gc
class Node:
    def __init__(self, name): self.name = name; self.other = None
gc.collect()
a, b = Node("a"), Node("b")
a.other, b.other = b, a              # چرخه
del a, b                              # شمارنده‌ها صفر نمی‌شود
collected = gc.collect()
print("جمع‌آوری‌شده:", collected >= 2)
print(len(gc.get_stats()), gc.isenabled())
print(gc.get_threshold())
big = [Node(str(i)) for i in range(1000)]
print(len(gc.get_objects()) > 1000)""")

add(3,3,"""<p>سه مفهوم متفاوت: <b>برابری</b> <code class='inline'>==</code> (مقدار یکسان)، <b>هویت</b> <code class='inline'>is</code> (همان شیء در حافظه؛ <code class='inline'>id(x)</code>) و <b>hash</b>. <code class='inline'>is</code> را فقط برای <code class='inline'>None</code>، <code class='inline'>True/False</code> و singletonها استفاده کن: <code class='inline'>x is None</code> درست و <code class='inline'>x == None</code> نادرست (ممکن است __eq__ سفارشی گول بخورد).</p>
<p>دام: CPython برای بهینه‌سازی اعداد کوچک (−۵ تا ۲۵۶) و بعضی رشته‌ها را <b>intern</b> می‌کند؛ پس <code class='inline'>is</code> روی آن‌ها گاهی True می‌شود و روی بقیه نه. این جزئیات پیاده‌سازی است و نباید در منطق به آن تکیه کنی. پایتون ۳٫۸+ هشدار SyntaxWarning برای <code class='inline'>x is 5</code> می‌دهد.""",
"توضیح بده چرا a is b برای ۲۵۶ True و برای ۱۰۰۰ (ساخته‌شده پویا) False می‌شود و نتیجه را آزمایش کن.",
py="""a, b = 256, 256
print(a is b, a == b)
x = int("1000"); y = int("1000")
print(x is y, x == y, id(x) == id(y))
s1, s2 = "hello", "hel" + "lo"
print(s1 == s2)
l1, l2 = [1], [1]
print(l1 == l2, l1 is l2, l1 is l1)
class AlwaysEqual:
    def __eq__(self, other): return True
print(AlwaysEqual() == None, AlwaysEqual() is None)   # is امن است
import sys
print(sys.intern("a b") is sys.intern("a b"))""")

add(3,4,"""<p>شیء <b>تغییرناپذیر</b> (immutable) بعد از ساخت عوض نمی‌شود: <code class='inline'>int float str tuple frozenset bytes</code>. <b>hashable</b> بودن یعنی <code class='inline'>hash(x)</code> در طول عمر ثابت است و <code class='inline'>==</code> با آن سازگار است: برای کلید dict و عضو set لازم است. قاعده: اگر <code class='inline'>a == b</code> آنگاه <code class='inline'>hash(a) == hash(b)</code>.</p>
<p>تاپل فقط وقتی hashable است که همه‌ی اعضایش باشند. اگر کلاس خودت <code class='inline'>__eq__</code> را بنویسد بدون <code class='inline'>__hash__</code>، پایتون hash را <code class='inline'>None</code> می‌کند (unhashable). تغییرپذیری یک شیء درون کلید dict باگ‌های وحشتناک می‌سازد؛ برای کلید از شیءهای ثابت (frozen dataclass) استفاده کن.""",
"کلاس Point با __eq__ و __hash__ سازگار بساز و درون set و dict امتحان کن.",
py="""print(hash("a") == hash("a"), hash((1, 2)) == hash((1, 2)))
try:
    hash([1, 2])
except TypeError as e:
    print("خطا:", e)
try:
    hash((1, [2]))
except TypeError as e:
    print("تاپل با لیست:", e)
class P:
    def __init__(self, x, y): self.x, self.y = x, y
    def __eq__(self, o): return isinstance(o, P) and (self.x, self.y) == (o.x, o.y)
    def __hash__(self): return hash((self.x, self.y))
print(len({P(1, 2), P(1, 2), P(3, 4)}))
class Q:
    def __eq__(self, o): return True
print(Q.__hash__)
s = "abc"; t = s.upper()
print(s, t)                 # رشته عوض نشد""")

add(3,5,"""<p>هر شیء معمولی یک دیکشنری <code class='inline'>__dict__</code> برای ویژگی‌ها دارد که انعطاف‌پذیر ولی پرمصرف است (حافظه و کمی سرعت). با <code class='inline'>__slots__ = ("x", "y")</code> فهرست ثابت ویژگی‌ها را اعلام می‌کنی؛ شیء بدون dict ساخته می‌شود: حافظه‌ی کمتر (مهم وقتی میلیون‌ها شیء داری) و ویژگی غیرمجاز <code class='inline'>AttributeError</code> می‌دهد.</p>
<p>محدودیت‌ها: نمی‌توان ویژگی دلخواه اضافه کرد، weakref و وراثت‌چندگانه با slots پیچیده می‌شود، و در زیرکلاس باید دوباره slots تعریف کنی. در dataclass (۳٫۱۰+) <code class='inline'>@dataclass(slots=True)</code> این را آسان می‌کند. فقط پس از <b>اندازه‌گیری</b> بهینه‌سازی کن.""",
"حافظه‌ی یک میلیون شیء با slots و بدون آن را با tracemalloc مقایسه کن.",
py="""import sys
class Plain:
    def __init__(self, x, y): self.x, self.y = x, y
class Slim:
    __slots__ = ("x", "y")
    def __init__(self, x, y): self.x, self.y = x, y
p, s = Plain(1, 2), Slim(1, 2)
print(hasattr(p, "__dict__"), hasattr(s, "__dict__"))
print(sys.getsizeof(p) + sys.getsizeof(p.__dict__), sys.getsizeof(s))
try:
    s.z = 3
except AttributeError as e:
    print("خطا:", e)
import tracemalloc
def measure(cls):
    tracemalloc.start()
    objs = [cls(i, i) for i in range(50_000)]
    cur, _ = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    return cur
a, b = measure(Plain), measure(Slim)
print("slots کم‌حجم‌تر؟", b < a, f"نسبت ≈ {a/b:.1f}×")""")

add(3,6,"""<p><b>descriptor</b> شیئی است با <code class='inline'>__get__</code> و/یا <code class='inline'>__set__</code> که وقتی به‌عنوان ویژگی <b>کلاس</b> قرار می‌گیرد، دسترسی به آن ویژگی را کنترل می‌کند. همین مکانیزم پایه‌ی <code class='inline'>property</code>، <code class='inline'>classmethod</code>، <code class='inline'>staticmethod</code> و حتی توابع به‌عنوان متد (bound method) است.</p>
<p>دو نوع: <b>data descriptor</b> (دارای <code class='inline'>__set__</code>؛ بر dict نمونه اولویت دارد) و non-data (فقط get). با <code class='inline'>__set_name__</code> نام ویژگی را می‌گیرد. کاربرد: اعتبارسنجی قابل‌استفاده‌ی مجدد بین چند ویژگی/کلاس (به‌جای تکرار property). ORMها و Pydantic از این الگو الهام گرفته‌اند.""",
"descriptor ای بنویس که مقدار مثبت بودن را برای چند ویژگی مختلف اعتبارسنجی کند.",
py="""class Positive:
    def __set_name__(self, owner, name):
        self.name = "_" + name
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.name)
    def __set__(self, obj, value):
        if value <= 0:
            raise ValueError(f"{self.name[1:]} باید مثبت باشد")
        setattr(obj, self.name, value)
class Product:
    price = Positive()
    qty = Positive()
    def __init__(self, price, qty):
        self.price, self.qty = price, qty
p = Product(10, 3)
print(p.price, p.qty, p.price * p.qty)
for bad in ({"price": -1, "qty": 1}, {"price": 5, "qty": 0}):
    try:
        Product(**bad)
    except ValueError as e:
        print("خطا:", e)
print(type(Product.price).__name__)
class Method:
    def f(self): pass
print(type(Method.f).__name__, type(Method().f).__name__)   # function vs bound method""")

add(3,7,"""<p>در پایتون کلاس‌ها هم شیءاند و «کلاسِ کلاس» <b>متاکلاس</b> است؛ پیش‌فرض آن <code class='inline'>type</code> است. <code class='inline'>type(name, bases, dict)</code> می‌تواند کلاس را پویا بسازد. با تعریف متاکلاس (ارث از <code class='inline'>type</code>) هنگام <b>ساخت کلاس</b> کد اجرا می‌کنی: ثبت خودکار زیرکلاس‌ها، بررسی قرارداد، افزودن متد.</p>
<p>قاعده‌ی تیم پایتون: «متاکلاس جادوگری عمیق است؛ اگر فکر می‌کنی لازم است احتمالاً لازم نیست». معمولاً <code class='inline'>__init_subclass__</code> (درس ۹) یا decorator کلاس ساده‌تر و کافی‌اند. متاکلاس را برای فریم‌ورک‌ها (ORM، Enum) نگه دار و ترکیب چند متاکلاس تعارض می‌سازد.""",
"متاکلاسی بنویس که هر کلاسی بدون docstring را هنگام تعریف رد کند.",
py="""Dyn = type("Dyn", (), {"x": 5, "hello": lambda self: "سلام"})
print(Dyn().x, Dyn().hello(), type(Dyn), type(type))
class Registry(type):
    classes = {}
    def __new__(mcls, name, bases, ns):
        cls = super().__new__(mcls, name, bases, ns)
        if bases:
            Registry.classes[name] = cls
        return cls
class Plugin(metaclass=Registry): pass
class CsvPlugin(Plugin): pass
class JsonPlugin(Plugin): pass
print(list(Registry.classes))
class NeedsDoc(type):
    def __new__(mcls, name, bases, ns):
        if bases and not ns.get("__doc__"):
            raise TypeError(f"{name} باید docstring داشته باشد")
        return super().__new__(mcls, name, bases, ns)
class Base(metaclass=NeedsDoc): pass
class Good(Base):
    "مستندات"
try:
    class Bad(Base): pass
except TypeError as e:
    print("خطا:", e)""")

add(3,8,"""<p>دو قلاب برای دسترسی به ویژگی: <code class='inline'>__getattribute__(self, name)</code> برای <b>هر</b> دسترسی صدا زده می‌شود و <code class='inline'>__getattr__(self, name)</code> فقط وقتی ویژگی <b>پیدا نشد</b> (fallback). برای نوشتن <code class='inline'>__setattr__</code> و حذف <code class='inline'>__delattr__</code>. کاربرد: پراکسی، ویژگی پویا، شیء مشابه JSON، نمایندگی (delegation).</p>
<p>خطر بزرگ: داخل <code class='inline'>__getattribute__</code> نباید با <code class='inline'>self.x</code> دوباره به ویژگی دسترسی دهی (بازگشت بی‌نهایت)؛ از <code class='inline'>super().__getattribute__(name)</code> یا <code class='inline'>object.__getattribute__</code> استفاده کن. و در <code class='inline'>__getattr__</code> برای ویژگی‌های ناموجود <code class='inline'>AttributeError</code> بده تا <code class='inline'>hasattr</code> درست کار کند.""",
"پراکسی‌ای بنویس که همه‌ی فراخوانی متدهای یک شیء را لاگ کند.",
py="""class AttrDict:
    def __init__(self, d): self._d = d
    def __getattr__(self, name):             # فقط برای نام‌های ناموجود
        try:
            v = self._d[name]
        except KeyError:
            raise AttributeError(name) from None
        return AttrDict(v) if isinstance(v, dict) else v
cfg = AttrDict({"db": {"host": "localhost", "port": 5432}, "debug": True})
print(cfg.db.host, cfg.db.port, cfg.debug, hasattr(cfg, "nope"))

class LoggingProxy:
    def __init__(self, target): object.__setattr__(self, "_t", target)
    def __getattr__(self, name):
        attr = getattr(self._t, name)
        if callable(attr):
            def wrapper(*a, **k):
                print(f"  فراخوانی {name}{a}")
                return attr(*a, **k)
            return wrapper
        return attr
p = LoggingProxy([3, 1, 2])
p.append(0); p.sort()
print(p._t)
class Count:
    n = 0
    def __getattribute__(self, name):
        Count.n += 1
        return super().__getattribute__(name)
c = Count(); c.x = 1; c.x; c.x
print(Count.n)""")

add(3,9,"""<p><code class='inline'>__init_subclass__</code> (از ۳٫۶) متدی در کلاس والد است که هر بار <b>زیرکلاسی تعریف شود</b> خودکار اجرا می‌شود؛ جایگزین ساده‌تر بیشتر کاربردهای متاکلاس: ثبت پلاگین، اعتبارسنجی قرارداد، پارامتر هنگام وراثت (<code class='inline'>class A(Base, key="x")</code>).</p>
<p><b>decorator کلاس</b> تابعی است که کلاس را می‌گیرد و (معمولاً همان یا تغییریافته) برمی‌گرداند: <code class='inline'>@dataclass</code> مثال معروف. ساده، صریح و قابل‌ترکیب است. ترتیب پیشنهادی ابزارها: decorator کلاس / <code class='inline'>__init_subclass__</code> اول، متاکلاس آخرین راه.""",
"سیستم پلاگین بساز که زیرکلاس‌ها با یک کلید ثبت شوند و تابعی بتواند با کلید نمونه بسازد.",
py="""class Plugin:
    registry = {}
    def __init_subclass__(cls, key=None, **kw):
        super().__init_subclass__(**kw)
        if key is None:
            raise TypeError(f"{cls.__name__}: پارامتر key الزامی است")
        Plugin.registry[key] = cls
class Csv(Plugin, key="csv"):
    def load(self): return "داده از CSV"
class Json(Plugin, key="json"):
    def load(self): return "داده از JSON"
def create(key): return Plugin.registry[key]()
print(create("csv").load(), create("json").load(), list(Plugin.registry))
try:
    class Bad(Plugin): pass
except TypeError as e:
    print("خطا:", e)

def add_repr(cls):
    fields = [k for k in cls.__annotations__]
    cls.__repr__ = lambda self: f"{cls.__name__}(" + ", ".join(f"{f}={getattr(self, f)!r}" for f in fields) + ")"
    return cls
@add_repr
class User:
    name: str
    age: int
    def __init__(self, name, age): self.name, self.age = name, age
print(User("سارا", 20))""")

add(3,10,"""<p>مدیر context پیشرفته: <code class='inline'>__exit__</code> سه آرگومان خطا می‌گیرد و با برگرداندن True می‌تواند آن را <b>بلعد</b>؛ <code class='inline'>contextlib.ExitStack</code> تعداد پویای مدیرها را یکجا مدیریت می‌کند (باز کردن N فایل)، <code class='inline'>AsyncExitStack</code> نسخه‌ی async، و <code class='inline'>contextlib.closing / nullcontext / chdir</code> کمک‌های آماده. تو‌در‌تو: <code class='inline'>with A() as a, B() as b:</code> یا پرانتزی در ۳٫۱۰+.</p>
<p>الگوی «تراکنش»: ورود = شروع، خروج بدون خطا = commit، با خطا = rollback. <code class='inline'>@contextmanager</code> برای ساده‌ترین حالت، کلاس وقتی حالت یا قابلیت استفاده‌ی مجدد لازم است. دقت: در generator مدیر، <code class='inline'>yield</code> را در try/finally بگذار تا پاک‌سازی تضمین شود.""",
"مدیر context تراکنش برای دیکشنری بساز که با خطا همه‌ی تغییرات را برگرداند (rollback).",
py="""from contextlib import ExitStack, contextmanager
import copy
@contextmanager
def transaction(store):
    snapshot = copy.deepcopy(store)
    try:
        yield store
    except Exception:
        store.clear(); store.update(snapshot)
        print("  rollback")
        raise
    else:
        print("  commit")
db = {"balance": 100}
with transaction(db):
    db["balance"] -= 30
print(db)
try:
    with transaction(db):
        db["balance"] -= 500
        raise RuntimeError("خطا")
except RuntimeError:
    pass
print(db)
class Res:
    def __init__(self, n): self.n = n
    def __enter__(self): print("  باز", self.n); return self
    def __exit__(self, *a): print("  بسته", self.n)
with ExitStack() as st:
    rs = [st.enter_context(Res(i)) for i in range(3)]
    print("  همه باز:", len(rs))""")

add(3,11,"""<p>generator می‌تواند <b>مقدار هم دریافت کند</b>: <code class='inline'>x = yield value</code>، و بیرون با <code class='inline'>gen.send(v)</code> مقدار می‌فرستد (اولین بار باید <code class='inline'>next()</code> یا <code class='inline'>send(None)</code> شروع کند). با <code class='inline'>gen.throw(exc)</code> خطا تزریق و با <code class='inline'>gen.close()</code> بسته می‌شود (<code class='inline'>GeneratorExit</code>). این‌ها پایه‌ی coroutineهای قدیمی بودند.</p>
<p><code class='inline'>yield from sub</code> کار را به زیرمولد واگذار می‌کند و مقدار <code class='inline'>return</code> آن را هم می‌گیرد: <code class='inline'>result = yield from sub()</code>. کاربرد: خط‌لوله‌های پردازش، ماشین حالت، و مولدهای بازگشتی (پیمایش درخت). امروز برای همزمانی از async/await استفاده می‌شود ولی درک این سازوکار آن را روشن می‌کند.""",
"coroutine میانگین‌گیر بساز که با send عدد بگیرد و میانگین جاری را بدهد.",
py="""def averager():
    total = count = 0
    avg = None
    while True:
        x = yield avg
        total += x; count += 1
        avg = total / count
g = averager()
next(g)                       # شروع (prime)
print(g.send(10), g.send(20), g.send(60))
g.close()
def sub():
    yield 1; yield 2
    return "تمام"
def outer():
    r = yield from sub()
    print("  نتیجه‌ی sub:", r)
    yield 3
print(list(outer()))
def tree(node):
    yield node["v"]
    for c in node.get("kids", []):
        yield from tree(c)
t = {"v": 1, "kids": [{"v": 2, "kids": [{"v": 4}]}, {"v": 3}]}
print(list(tree(t)))
def guarded():
    try:
        yield 1
        yield 2
    except ValueError:
        yield "خطا گرفته شد"
gg = guarded(); next(gg)
print(gg.throw(ValueError))""")

add(3,12,"""<p><b>coroutine</b> تابعی است که با <code class='inline'>async def</code> تعریف می‌شود؛ صدا زدنش اجرا نمی‌کند بلکه یک <b>شیء coroutine</b> برمی‌گرداند که باید <code class='inline'>await</code> شود یا توسط event loop زمان‌بندی شود. <code class='inline'>await</code> فقط داخل <code class='inline'>async def</code> مجاز است و کنترل را <b>داوطلبانه</b> به حلقه برمی‌گرداند تا کارهای دیگر اجرا شوند (همکاری، cooperative multitasking).</p>
<p>اشتباه رایج ۱: فراموش‌کردن await (هشدار «coroutine was never awaited»). ۲: صدا زدن تابع <b>مسدودکننده</b> (<code class='inline'>time.sleep</code>، <code class='inline'>requests.get</code>) داخل async که کل حلقه را قفل می‌کند. async برای کارهای <b>I/O-bound</b> است نه محاسبه‌ی سنگین CPU.""",
"تفاوت اجرای ترتیبی و هم‌زمان دو await sleep را با اندازه‌گیری زمان نشان بده.",
py="""import asyncio, time
async def greet(name, delay):
    await asyncio.sleep(delay)
    return f"سلام {name}"
c = greet("علی", 0.1)
print(type(c).__name__)       # coroutine: هنوز اجرا نشده
c.close()                     # اجرا نمی‌کنیم؛ بدون هشدار می‌بندیم
async def main():
    t = time.perf_counter()
    a = await greet("الف", 0.1)
    b = await greet("ب", 0.1)
    seq = time.perf_counter() - t
    t = time.perf_counter()
    r = await asyncio.gather(greet("الف", 0.1), greet("ب", 0.1))
    par = time.perf_counter() - t
    print(a, b, r)
    print("ترتیبی ≈ 0.2:", 0.19 < seq < 0.4, "| هم‌زمان ≈ 0.1:", par < 0.18)
await main()""")

add(3,13,"""<p><b>event loop</b> قلب asyncio است: یک حلقه‌ی تک‌نخی که coroutineهای آماده را اجرا می‌کند؛ وقتی یکی <code class='inline'>await</code> می‌کند (مثلاً منتظر شبکه)، حلقه سراغ بعدی می‌رود و هر وقت منتظرمان آماده شد (توسط epoll/kqueue سیستم‌عامل) ادامه می‌دهد. به همین دلیل هزاران اتصال همزمان با یک نخ ممکن است.</p>
<p>ورود استاندارد: <code class='inline'>asyncio.run(main())</code> که حلقه می‌سازد، اجرا و می‌بندد. هرگز داخل یک حلقه‌ی در حال اجرا دوباره <code class='inline'>asyncio.run</code> صدا نزن. کار مسدودکننده را با <code class='inline'>await asyncio.to_thread(func)</code> یا <code class='inline'>loop.run_in_executor</code> به نخ دیگر بسپار. <code class='inline'>loop.call_later</code> و <code class='inline'>call_soon</code> برای زمان‌بندی‌های سطح پایین.""",
"یک تابع مسدودکننده (sleep) را با to_thread اجرا کن و نشان بده حلقه در این مدت آزاد است.",
py="""import asyncio, time
async def ticker(log):
    for i in range(3):
        log.append(f"tick{i}")
        await asyncio.sleep(0.05)
def blocking():
    time.sleep(0.2)             # مسدودکننده
    return "کار سنگین تمام شد"
async def main():
    log = []
    t = asyncio.create_task(ticker(log))
    try:
        res = await asyncio.to_thread(blocking)   # حلقه آزاد می‌ماند
    except RuntimeError:
        res = "این محیط thread ندارد"
    await t
    print(res, log)
    loop = asyncio.get_running_loop()
    print(type(loop).__name__, loop.is_running())
    fut = loop.create_future()
    loop.call_later(0.05, fut.set_result, "آماده")
    print(await fut)
await main()""")

add(3,14,"""<p><code class='inline'>asyncio.create_task(coro)</code> coroutine را <b>همین حالا</b> در پس‌زمینه زمان‌بندی می‌کند و یک <code class='inline'>Task</code> برمی‌گرداند که بعداً می‌توان await کرد یا لغو (<code class='inline'>cancel()</code>) کرد. <code class='inline'>gather(*coros)</code> همه را همزمان اجرا و نتایج را به ترتیب برمی‌گرداند (با <code class='inline'>return_exceptions=True</code> خطا به‌جای پرتاب، در لیست می‌آید).</p>
<p>از ۳٫۱۱ <b>TaskGroup</b> (<code class='inline'>async with asyncio.TaskGroup() as tg</code>) ساختار امن‌تری می‌دهد: اگر یکی شکست خورد بقیه لغو می‌شوند و خطاها در <code class='inline'>ExceptionGroup</code> جمع می‌شوند. <code class='inline'>asyncio.timeout(sec)</code> محدودیت زمانی. همیشه به تسک‌های پس‌زمینه یک مرجع نگه دار وگرنه ممکن است زباله‌روبی شوند.""",
"سه درخواست شبیه‌سازی‌شده را با TaskGroup اجرا کن و یکی را با timeout قطع کن.",
py="""import asyncio
async def fetch(name, delay, fail=False):
    await asyncio.sleep(delay)
    if fail: raise ConnectionError(name)
    return name
async def main():
    t1 = asyncio.create_task(fetch("a", 0.05))
    t2 = asyncio.create_task(fetch("b", 0.01))
    print(await t1, await t2)
    res = await asyncio.gather(fetch("x", 0.01), fetch("y", 0.01, fail=True), return_exceptions=True)
    print([r if not isinstance(r, Exception) else f"خطا:{r}" for r in res])
    async with asyncio.TaskGroup() as tg:
        ts = [tg.create_task(fetch(n, 0.01)) for n in "pqr"]
    print([t.result() for t in ts])
    try:
        async with asyncio.timeout(0.05):
            await fetch("slow", 1)
    except TimeoutError:
        print("timeout")
    try:
        async with asyncio.TaskGroup() as tg:
            tg.create_task(fetch("ok", 0.2))
            tg.create_task(fetch("bad", 0.01, fail=True))
    except* ConnectionError as eg:
        print("گروه خطا:", [str(e) for e in eg.exceptions])
await main()""")

add(3,15,"""<p><code class='inline'>async with</code> مدیر context ناهمگام است (<code class='inline'>__aenter__</code> و <code class='inline'>__aexit__</code>) برای منابعی که باز و بسته کردنشان خودش I/O است (اتصال دیتابیس، session HTTP). <code class='inline'>async for</code> روی <b>iterator ناهمگام</b> (<code class='inline'>__aiter__</code>/<code class='inline'>__anext__</code>) می‌چرخد؛ هر مقدار ممکن است منتظر شبکه باشد. ساده‌ترین راه ساخت: <b>async generator</b> (<code class='inline'>async def</code> با <code class='inline'>yield</code>).</p>
<p>comprehension ناهمگام: <code class='inline'>[x async for x in agen()]</code>. کاربرد: استریم نتایج صفحه‌بندی‌شده‌ی API، خواندن خط‌به‌خط از سوکت، رویدادهای سرور. برای آزادسازی مطمئن async generator، <code class='inline'>contextlib.aclosing</code> را بشناس.""",
"async generator بنویس که صفحه‌های یک API ساختگی را یکی‌یکی تولید کند و با async for مصرف شود.",
py="""import asyncio
class Conn:
    async def __aenter__(self):
        print("  اتصال باز شد"); await asyncio.sleep(0.01); return self
    async def __aexit__(self, *exc):
        print("  اتصال بسته شد"); await asyncio.sleep(0.01)
    async def query(self, page):
        await asyncio.sleep(0.01)
        return list(range(page * 3, page * 3 + 3)) if page < 3 else []
async def pages(conn):
    page = 0
    while rows := await conn.query(page):
        yield rows
        page += 1
async def main():
    async with Conn() as c:
        async for rows in pages(c):
            print("  صفحه:", rows)
    async with Conn() as c:
        allrows = [r async for rows in pages(c) for r in rows]
    print(allrows)
await main()""")

add(3,16,"""<p>الگوی <b>producer/consumer</b>: تولیدکننده‌ها کار را در یک <b>صف</b> می‌گذارند و مصرف‌کننده‌ها برمی‌دارند؛ سرعت‌ها از هم جدا می‌شود و با صف <b>کران‌دار</b> (<code class='inline'>maxsize</code>) فشار برگشتی (backpressure) ایجاد می‌شود: وقتی صف پر است <code class='inline'>put</code> منتظر می‌ماند.</p>
<p><code class='inline'>asyncio.Queue</code> برای coroutineها (و <code class='inline'>queue.Queue</code> برای threadها). الگوی خاتمه: <code class='inline'>queue.task_done()</code> بعد از پردازش و <code class='inline'>await queue.join()</code> برای انتظار تا تمام شدن همه؛ سپس مصرف‌کننده‌ها را لغو کن یا «قرص سم» (<code class='inline'>None</code>) بفرست. تعداد worker را به ظرفیت منبع پایین‌دست (مثلاً سقف اتصال) متناسب کن.""",
"سیستمی با ۱ تولیدکننده و ۳ کارگر بساز و تعداد کار انجام‌شده هر کارگر را بشمار.",
py="""import asyncio, collections
async def producer(q, n):
    for i in range(n):
        await q.put(i)             # با صف پر منتظر می‌ماند (backpressure)
async def worker(name, q, done):
    while True:
        item = await q.get()
        try:
            await asyncio.sleep(0.01)
            done[name] += 1
        finally:
            q.task_done()
async def main():
    q = asyncio.Queue(maxsize=5)
    done = collections.Counter()
    workers = [asyncio.create_task(worker(f"w{i}", q, done)) for i in range(3)]
    await producer(q, 20)
    await q.join()
    for w in workers: w.cancel()
    print(sum(done.values()), "کار انجام شد؛ هر کارگر:", sorted(done.values(), reverse=True)[:1][0] > 0)
await main()""")

add(3,17,"""<p><b>thread</b> (نخ) اجرای همزمان در یک فرایند با حافظه‌ی مشترک است. در پایتون (CPython با GIL) نخ‌ها برای کار <b>I/O-bound</b> مفیدند (در انتظار شبکه/دیسک، GIL آزاد می‌شود) نه محاسبه‌ی CPU. <code class='inline'>threading.Thread(target=f, args=(...))</code>، <code class='inline'>.start()</code> و <code class='inline'>.join()</code>.</p>
<p>نخ‌ها باید با <b>ایمنی</b> داده‌ی مشترک را بخوانند/بنویسند (درس بعد). <code class='inline'>daemon=True</code> با پایان برنامه می‌میرد. استثنای داخل نخ به نخ اصلی نمی‌رسد؛ با <code class='inline'>concurrent.futures</code> (درس ۲۰) خطا منتقل می‌شود. در مرورگر (Pyodide) نخ واقعی نیست و کد با پیام توضیحی خارج می‌شود؛ روی سیستم خودت اجرا کن.""",
"۵ نخ بساز که هرکدام یک «دانلود» شبیه‌سازی‌شده انجام دهند و زمان کل را با اجرای ترتیبی مقایسه کن.",
py="""import threading, time
def download(i, results):
    time.sleep(0.1)                 # I/O شبیه‌سازی‌شده؛ GIL آزاد می‌شود
    results[i] = f"فایل{i}"
try:
    results = {}
    t0 = time.perf_counter()
    ts = [threading.Thread(target=download, args=(i, results)) for i in range(5)]
    for t in ts: t.start()
    for t in ts: t.join()
    par = time.perf_counter() - t0
    print(sorted(results.values()))
    print("موازی ≈ 0.1:", par < 0.3, "(ترتیبی ≈ 0.5)")
    print(threading.current_thread().name, threading.active_count())
except RuntimeError as e:
    print("نخ واقعی در این محیط ممکن نیست:", e)""")

add(3,18,"""<p>وقتی چند نخ یک داده را همزمان تغییر دهند <b>race condition</b> رخ می‌دهد: نتیجه به ترتیب تصادفی اجرا بستگی دارد. حتی <code class='inline'>counter += 1</code> اتمی نیست (خواندن، جمع، نوشتن). راه‌حل‌ها: <code class='inline'>threading.Lock</code> (فقط یک نخ در بخش حساس: <code class='inline'>with lock:</code>)، <code class='inline'>RLock</code> (تو‌در‌توی همان نخ)، <code class='inline'>Semaphore</code>، <code class='inline'>Event</code>، <code class='inline'>Condition</code> و ساختارهای ایمن مثل <code class='inline'>queue.Queue</code>.</p>
<p>خطر <b>بن‌بست</b> (deadlock): نخ A قفل ۱ را دارد و منتظر ۲ است، نخ B برعکس. قاعده: قفل‌ها را همیشه با <b>ترتیب ثابت</b> بگیر، بخش حساس را کوچک نگه دار و تا حد ممکن به‌جای اشتراک، پیام رد و بدل کن.""",
"شمارنده‌ی مشترک را با و بدون Lock از چند نخ افزایش بده و تفاوت را ببین.",
py="""import threading
try:
    counter = 0
    lock = threading.Lock()
    def bump(n, use_lock):
        global counter
        for _ in range(n):
            if use_lock:
                with lock:
                    counter += 1
            else:
                tmp = counter
                counter = tmp + 1
    for use_lock in (False, True):
        counter = 0
        ts = [threading.Thread(target=bump, args=(50_000, use_lock)) for _ in range(4)]
        for t in ts: t.start()
        for t in ts: t.join()
        print("با قفل" if use_lock else "بدون قفل", counter, "(انتظار 200000)")
except RuntimeError as e:
    print("نخ واقعی در این محیط ممکن نیست:", e)
import queue
q = queue.Queue()
for i in range(3): q.put(i)
print([q.get() for _ in range(3)], q.empty())""")

add(3,19,"""<p><code class='inline'>multiprocessing</code> چند <b>فرایند</b> جدا (هرکدام مفسر و GIL خودش) می‌سازد؛ برای کار <b>CPU-bound</b> راه واقعی استفاده از چند هسته است. هزینه: ارتباط با سریال‌سازی (pickle) و حافظه‌ی جدا. <code class='inline'>Pool.map(f, data)</code> ساده‌ترین الگو؛ <code class='inline'>Process</code>، <code class='inline'>Queue</code>، <code class='inline'>Value/Array</code> برای اشتراک.</p>
<p>قواعد مهم: کد اصلی را در <code class='inline'>if __name__ == "__main__":</code> بگذار (در ویندوز/macOS فرایند جدید ماژول را دوباره import می‌کند)، تابع کارگر باید در سطح ماژول و picklable باشد (نه lambda)، و داده‌ی بزرگ را بین فرایندها کم جابه‌جا کن. روش شروع: <code class='inline'>fork</code> (لینوکس)، <code class='inline'>spawn</code> (ویندوز/مک). در مرورگر پشتیبانی نمی‌شود.""",
"محاسبه‌ی اول‌بودن ۲۰۰ عدد بزرگ را با Pool موازی کن و با اجرای ترتیبی مقایسه کن.",
py="""import time, math
def is_prime(n):
    if n < 2: return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0: return False
    return True
nums = [10_000_019 + i for i in range(40)]
t = time.perf_counter()
seq = [is_prime(n) for n in nums]
t_seq = time.perf_counter() - t
try:
    from multiprocessing import Pool, cpu_count
    if __name__ == "__main__":
        t = time.perf_counter()
        with Pool(2) as p:
            par = p.map(is_prime, nums)
        t_par = time.perf_counter() - t
        print("نتایج یکسان:", par == seq, "| هسته‌ها:", cpu_count() >= 1)
        print("تعداد اول:", sum(seq))
except (ImportError, OSError, NotImplementedError, RuntimeError) as e:
    print("multiprocessing در این محیط پشتیبانی نمی‌شود:", type(e).__name__)""")

add(3,20,"""<p><code class='inline'>concurrent.futures</code> رابط یکپارچه‌ی سطح بالا برای نخ و فرایند است: <code class='inline'>ThreadPoolExecutor</code> (I/O) و <code class='inline'>ProcessPoolExecutor</code> (CPU). <code class='inline'>executor.submit(f, ...)</code> یک <code class='inline'>Future</code> می‌دهد، <code class='inline'>executor.map</code> نتایج را به ترتیب ورودی و <code class='inline'>as_completed(futures)</code> به ترتیب پایان.</p>
<p>مزیت بزرگ: خطا درون کار با <code class='inline'>future.result()</code> دوباره پرتاب می‌شود (برخلاف Thread خام) و <code class='inline'>timeout</code> دارد. با <code class='inline'>with</code> استفاده کن تا pool بسته شود. تعداد worker را به‌جای حدس، متناسب با نوع کار و اندازه‌گیری انتخاب کن. برای ترکیب با asyncio: <code class='inline'>loop.run_in_executor</code>.""",
"۱۰ «دانلود» را با ThreadPoolExecutor اجرا کن، خطای یکی را مدیریت کن و نتایج را با as_completed بگیر.",
py="""from concurrent.futures import ThreadPoolExecutor, as_completed
import time
def task(i):
    time.sleep(0.05)
    if i == 3:
        raise ValueError(f"کار {i} خراب شد")
    return i * i
try:
    with ThreadPoolExecutor(max_workers=4) as ex:
        futures = {ex.submit(task, i): i for i in range(6)}
        for f in as_completed(futures):
            i = futures[f]
            try:
                print("نتیجه", i, "=", f.result())
            except ValueError as e:
                print("خطا:", e)
        print(list(ex.map(lambda x: x + 1, [1, 2, 3])))
except RuntimeError as e:
    print("نخ واقعی در این محیط ممکن نیست:", e)""")

add(3,21,"""<p><b>GIL</b> (Global Interpreter Lock) قفلی در CPython است که اجازه می‌دهد در هر لحظه فقط <b>یک نخ</b> بایت‌کد پایتون اجرا کند. دلیل: ساده‌سازی مدیریت حافظه (شمارش مرجع). پیامد: نخ‌ها محاسبه‌ی خالص CPU را سریع‌تر نمی‌کنند؛ ولی هنگام I/O و در بسیاری از توابع C (numpy، zlib، hashlib روی داده‌ی بزرگ) GIL آزاد می‌شود.</p>
<p>چه <b>نمی‌کند</b>: GIL کد شما را thread-safe نمی‌کند (race همچنان ممکن است). راه‌های دور زدن: فرایندها (multiprocessing)، کتابخانه‌های C/Rust، asyncio برای I/O. پایتون ۳٫۱۳ نسخه‌ی <b>free-threaded</b> (بدون GIL، تجربی) دارد که در درس‌های فوق پیشرفته می‌آید. تصمیم: I/O → async/thread، CPU → process/native.""",
"سرعت یک حلقه‌ی CPU-bound را در ۱ و ۲ نخ مقایسه کن و نتیجه را با GIL توضیح بده.",
py="""import time, sys
def cpu(n):
    s = 0
    for i in range(n): s += i * i
    return s
N = 1_500_000
t = time.perf_counter(); cpu(N); cpu(N)
seq = time.perf_counter() - t
print("دو بار ترتیبی: %.2fs" % seq)
try:
    import threading
    t = time.perf_counter()
    ts = [threading.Thread(target=cpu, args=(N,)) for _ in range(2)]
    for x in ts: x.start()
    for x in ts: x.join()
    thr = time.perf_counter() - t
    print("دو نخ: %.2fs" % thr, "→ تقریباً بدون سود:", thr > seq * 0.7)
except RuntimeError as e:
    print("نخ واقعی در این محیط نیست:", e)
print("GIL فعال؟", getattr(sys, "_is_gil_enabled", lambda: True)())
print(sys.getswitchinterval())""")

add(3,22,"""<p>قبل از بهینه‌سازی <b>اندازه بگیر</b>: «بهینه‌سازی زودرس ریشه‌ی همه‌ی بدی‌هاست». <code class='inline'>timeit</code> برای ریزسنجی یک عبارت، <code class='inline'>cProfile</code> (پروفایلر داخلی؛ هر تابع چند بار صدا خورده و چقدر زمان برده: <code class='inline'>ncalls tottime cumtime</code>) و <code class='inline'>pstats</code> برای مرتب‌سازی گزارش. <code class='inline'>line_profiler</code> (بیرونی) زمان را خط‌به‌خط نشان می‌دهد و <code class='inline'>py-spy</code> پروفایل زنده‌ی فرایند در حال اجراست.</p>
<p>روش: ۱) تکرارپذیر اندازه بگیر، ۲) گلوگاه را پیدا کن (معمولاً ۱۰٪ کد ۹۰٪ زمان را می‌خورد)، ۳) فقط همان را عوض کن، ۴) دوباره اندازه بگیر. بیشتر بهبودها از الگوریتم و ساختمان داده می‌آید نه ریزترفندها.""",
"دو پیاده‌سازی تابع (با list و با set) برای عضویت را با timeit و cProfile مقایسه کن.",
py="""import cProfile, pstats, io, timeit
def slow_unique(xs):
    out = []
    for x in xs:
        if x not in out:            # O(n) در لیست
            out.append(x)
    return out
def fast_unique(xs):
    seen, out = set(), []
    for x in xs:
        if x not in seen:           # O(1)
            seen.add(x); out.append(x)
    return out
data = list(range(2000)) * 2
print(slow_unique(data) == fast_unique(data))
a = timeit.timeit(lambda: slow_unique(data), number=3)
b = timeit.timeit(lambda: fast_unique(data), number=3)
print("set سریع‌تر؟", b < a, f"(≈{a/b:.0f}×)")
pr = cProfile.Profile(); pr.enable(); slow_unique(data); pr.disable()
s = io.StringIO(); pstats.Stats(pr, stream=s).sort_stats("cumulative").print_stats(3)
print([l for l in s.getvalue().splitlines() if "slow_unique" in l][0].split()[0], "فراخوانی")""")

add(3,23,"""<p><b>tracemalloc</b> ماژول داخلی پیگیری حافظه است: <code class='inline'>tracemalloc.start()</code>، سپس <code class='inline'>take_snapshot()</code> و <code class='inline'>snapshot.statistics("lineno")</code> نشان می‌دهد کدام خطوط بیشترین حافظه را گرفته‌اند. مقایسه‌ی دو snapshot (<code class='inline'>compare_to</code>) نشت را پیدا می‌کند: چه چیزی بین دو لحظه رشد کرده.</p>
<p>علل رایج نشت در پایتون: کش/لیست/دیکشنری سراسری که پاک نمی‌شود، listenerهای ثبت‌شده و حذف‌نشده، closureهایی که اشیای بزرگ را نگه می‌دارند، چرخه‌های دارای <code class='inline'>__del__</code> قدیمی، و ویژگی کلاس تغییرپذیر. ابزارهای دیگر: <code class='inline'>objgraph</code>، <code class='inline'>memray</code>، <code class='inline'>sys.getsizeof</code> (فقط اندازه‌ی خود شیء).""",
"نشتی بساز (کش بی‌پایان) و با tracemalloc خطی که آن را ایجاد کرده پیدا کن.",
py="""import tracemalloc
_cache = {}
def handle(req_id):
    _cache[req_id] = "x" * 1000        # نشت: هرگز پاک نمی‌شود
tracemalloc.start()
s1 = tracemalloc.take_snapshot()
for i in range(2000):
    handle(i)
s2 = tracemalloc.take_snapshot()
top = s2.compare_to(s1, "lineno")[:1][0]
print("بیشترین رشد:", top.size_diff > 1_000_000, "| خط:", str(top.traceback[0]).split(":")[-1])
print(len(_cache))
from functools import lru_cache
@lru_cache(maxsize=100)
def cached(i): return "x" * 1000
for i in range(2000): cached(i)
print(cached.cache_info().currsize)          # کران‌دار: نشت نیست
tracemalloc.stop()""")

add(3,24,"""<p>بزرگ‌ترین بهبودها از <b>الگوریتم و ساختمان داده</b> می‌آیند: پیچیدگی <code class='inline'>O(n²) → O(n log n) → O(n)</code> اثر بیشتری از هر ترفند زبانی دارد. نمونه‌ها: عضویت با set/dict به‌جای list، <code class='inline'>deque</code> به‌جای <code class='inline'>pop(0)</code>، جست‌وجوی دودویی (<code class='inline'>bisect</code>) روی مرتب‌شده‌ها، <code class='inline'>heapq</code> برای top-k، پیش‌محاسبه (memoization)، و پرهیز از ساخت رشته با <code class='inline'>+=</code> در حلقه (<code class='inline'>"".join</code>).</p>
<p>ترفندهای پایتونی: متغیر محلی از سراسری سریع‌تر، comprehension از حلقه‌ی معمولی سریع‌تر، توابع داخلی (C) از حلقه‌ی خودت سریع‌ترند (<code class='inline'>sum</code>, <code class='inline'>min</code>, <code class='inline'>sorted</code>). خوانایی را قربانی نکن مگر پروفایل ثابت کند.""",
"مسئله‌ی «دو عدد که مجموعشان target شود» را با O(n²) و O(n) حل کن و زمان را مقایسه کن.",
py="""import timeit, bisect, heapq, random
def two_sum_slow(a, t):
    for i in range(len(a)):
        for j in range(i + 1, len(a)):
            if a[i] + a[j] == t: return i, j
def two_sum_fast(a, t):
    seen = {}
    for i, x in enumerate(a):
        if t - x in seen: return seen[t - x], i
        seen[x] = i
data = list(range(3000))
print(two_sum_slow(data, 5997), two_sum_fast(data, 5997))
a = timeit.timeit(lambda: two_sum_slow(data, 5997), number=1)
b = timeit.timeit(lambda: two_sum_fast(data, 5997), number=1)
print("O(n) سریع‌تر:", b < a / 50)
xs = sorted(random.sample(range(10**6), 1000))
i = bisect.bisect_left(xs, xs[500])
print(i == 500)
print(heapq.nlargest(3, [5, 1, 9, 3, 7]))
parts = ["x"] * 10000
print(len("".join(parts)))""")

add(3,25,"""<p><b>NumPy</b> آرایه‌های همگن را در حافظه‌ی پیوسته نگه می‌دارد و عملیات را با کد C کامپایل‌شده و <b>برداری</b> (vectorized) اجرا می‌کند؛ ۱۰ تا ۱۰۰ برابر سریع‌تر از حلقه‌ی پایتون. اصل: به‌جای <code class='inline'>for</code> روی عناصر، عملیات را روی کل آرایه بنویس: <code class='inline'>a * 2 + b</code>. <b>Broadcasting</b> آرایه‌های با شکل متفاوت را هماهنگ می‌کند، و <b>ماسک بولی</b> فیلتر برداری است: <code class='inline'>a[a &gt; 5]</code>.</p>
<p>نکات: نوع داده (<code class='inline'>dtype</code>) را بشناس (<code class='inline'>float32</code> نصف حافظه)، <code class='inline'>view</code> در برابر <code class='inline'>copy</code> (برش‌ها view هستند)، تابع‌های <code class='inline'>np.where</code>، <code class='inline'>np.sum(axis=)</code>، <code class='inline'>np.einsum</code>. در حلقه‌ی پایتون عناصر NumPy را یکی‌یکی نخوان؛ کند است.""",
"فاصله‌ی اقلیدسی بین ۱ نقطه و ۱۰۰ هزار نقطه را برداری حساب کن و با حلقه مقایسه کن.",
py="""import numpy as np, timeit
a = np.arange(1_000_000, dtype=np.float64)
loop = lambda: sum(x * 2 + 1 for x in a.tolist())
vec = lambda: (a * 2 + 1).sum()
print(np.isclose(loop(), vec()))
print("برداری سریع‌تر:", timeit.timeit(vec, number=3) < timeit.timeit(loop, number=1) / 5)
pts = np.random.default_rng(0).random((100_000, 2))
d = np.sqrt(((pts - np.array([0.5, 0.5])) ** 2).sum(axis=1))
print(d.shape, bool(d.min() < 0.01))
m = np.arange(12).reshape(3, 4)
print(m.sum(axis=0), m[m % 2 == 0])
col = np.array([[1], [2], [3]]); row = np.array([10, 20])
print((col + row).shape)
v = m[:, 1]; v[0] = 99
print(m[0, 1])                 # برش view است: m هم عوض شد""",
packages=['numpy'])
