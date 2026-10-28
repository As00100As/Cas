import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(2,1,"""<p>تا اینجا داده (متغیر) و رفتار (تابع) جدا بودند. <b>کلاس</b> این دو را کنار هم می‌گذارد: قالبی برای ساخت «شیء». هر شیء یک <b>نمونه</b> (instance) از کلاس است و ویژگی (attribute) و متد (method) دارد. مثل «نقشه‌ی خانه» (کلاس) و «خانه‌های ساخته‌شده» (شیءها).</p>
<p>نام کلاس به‌سبک <b>PascalCase</b> است (<code class='inline'>BankAccount</code>). ساخت شیء با صدا زدن کلاس مثل تابع: <code class='inline'>acc = BankAccount()</code>. متد تابعی داخل کلاس است و اولین پارامترش <code class='inline'>self</code> (خود شیء) است. همه‌چیز در پایتون شیء است: عدد، رشته و تابع هم.""",
"کلاس Dog با متد bark بساز و دو سگ با نام‌های متفاوت ایجاد کن.",
py="""class Dog:
    def bark(self):
        return "هاپ هاپ!"

rex = Dog()
print(rex.bark())
print(type(rex), isinstance(rex, Dog))
print(type(5), type("a"), type(print))
rex.name = "رکس"          # می‌شود ویژگی را بعداً هم اضافه کرد
print(rex.name)""")

add(2,2,"""<p><code class='inline'>__init__</code> «سازنده» است؛ هنگام ساخت شیء خودکار اجرا می‌شود و وضعیت اولیه را می‌گذارد. <code class='inline'>self</code> همان شیء در حال ساخت است؛ ویژگی‌ها با <code class='inline'>self.name = ...</code> روی شیء ذخیره می‌شوند. هنگام فراخوانی متد <code class='inline'>self</code> را خودت نمی‌دهی: <code class='inline'>obj.method(x)</code> برابر <code class='inline'>Class.method(obj, x)</code> است.</p>
<p>اشتباه رایج: فراموش‌کردن <code class='inline'>self.</code> هنگام خواندن یا نوشتن ویژگی (یک متغیر محلی ساخته می‌شود و گم می‌شود) و فراموش‌کردن <code class='inline'>self</code> در تعریف متد (خطای TypeError با شمار آرگومان).""",
"کلاس Rectangle با طول و عرض و متدهای area و perimeter بساز.",
py="""class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def greet(self):
        return f"سلام، من {self.name} هستم و {self.age} سال دارم"
    def birthday(self):
        self.age += 1

p = Person("سارا", 20)
print(p.greet())
p.birthday()
print(p.age)
print(Person.greet(p))      # معادل p.greet()
q = Person("علی", 30)
print(p.name, q.name, p is q)""")

add(2,3,"""<p>دو نوع ویژگی: <b>نمونه</b> (در <code class='inline'>__init__</code> با <code class='inline'>self.x</code>، مخصوص هر شیء) و <b>کلاس</b> (مستقیم داخل بدنه‌ی کلاس، مشترک بین همه). ویژگی کلاس برای ثابت‌ها و شمارنده‌ها مناسب است.</p>
<p>جست‌وجو: پایتون اول در خود شیء می‌گردد، بعد کلاس، بعد کلاس‌های والد. دام: انتساب <code class='inline'>obj.x = 1</code> یک ویژگی <b>نمونه</b> می‌سازد و ویژگی کلاس را سایه می‌اندازد؛ برای تغییر ویژگی کلاس از <code class='inline'>Class.x</code> استفاده کن. ویژگی کلاس با مقدار تغییرپذیر (لیست) مثل پیش‌فرض تابع بین همه‌ی شیءها مشترک است.""",
"یک شمارنده بساز که تعداد شیءهای ساخته‌شده از کلاس را نگه دارد.",
py="""class Counter:
    total = 0                       # ویژگی کلاس
    def __init__(self, name):
        self.name = name            # ویژگی نمونه
        Counter.total += 1

a, b = Counter("a"), Counter("b")
print(Counter.total, a.total, b.name)
a.total = 100                       # سایه‌انداختن روی نمونه
print(a.total, Counter.total, b.total)
print(a.__dict__, Counter.__dict__["total"])
class Bad:
    items = []
    def add(self, x): self.items.append(x)
x, y = Bad(), Bad()
x.add(1)
print(y.items)                      # مشترک!""")

add(2,4,"""<p>سه نوع متد: <b>نمونه‌ای</b> (اولین پارامتر <code class='inline'>self</code>)، <b>کلاسی</b> با <code class='inline'>@classmethod</code> (اولین پارامتر <code class='inline'>cls</code>، به کلاس دسترسی دارد) و <b>ایستا</b> با <code class='inline'>@staticmethod</code> (بدون self و cls؛ فقط تابعی که منطقاً به کلاس تعلق دارد).</p>
<p>کاربرد رایج classmethod: <b>سازنده‌های جایگزین</b> مثل <code class='inline'>Date.from_string("...")</code>. چون <code class='inline'>cls</code> را می‌گیرد، با وراثت هم درست کار می‌کند (زیرکلاس را می‌سازد). staticmethod را وقتی بنویس که تابع به وضعیت هیچ شیء/کلاسی نیاز ندارد.""",
"برای کلاس Temperature سازنده‌ی from_fahrenheit و یک متد ایستای is_valid بنویس.",
py="""class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    @classmethod
    def from_string(cls, s):
        x, y = map(float, s.split(","))
        return cls(x, y)
    @staticmethod
    def is_valid(s):
        return s.count(",") == 1
    def dist0(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5

p = Point.from_string("3,4")
print(p.x, p.y, p.dist0(), Point.is_valid("1,2,3"))
class Point3(Point): pass
print(type(Point3.from_string("1,2")).__name__)""")

add(2,5,"""<p><b>وراثت</b> اجازه می‌دهد کلاس جدید (فرزند) ویژگی‌ها و متدهای کلاس موجود (والد) را بگیرد: <code class='inline'>class Dog(Animal):</code>. فرزند می‌تواند متد را <b>بازنویسی</b> (override) کند یا چیز جدید اضافه کند. رابطه‌ی «is-a»: سگ یک حیوان است.</p>
<p>بررسی: <code class='inline'>isinstance(obj, Animal)</code> و <code class='inline'>issubclass(Dog, Animal)</code>. وراثت بیش‌ازحد و عمیق کد را شکننده می‌کند؛ اگر رابطه «is-a» نیست از ترکیب استفاده کن (درس ۱۴). هر کلاس در پایتون از <code class='inline'>object</code> ارث می‌برد.""",
"سلسله‌مراتب Shape → Circle/Square بساز که هرکدام area خودشان را داشته باشند.",
py="""class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."
    def intro(self):
        return f"{self.name}: {self.speak()}"

class Dog(Animal):
    def speak(self):
        return "هاپ"
class Cat(Animal):
    def speak(self):
        return "میو"
    def purr(self):
        return "خرخر"

for a in (Animal("حیوان"), Dog("رکس"), Cat("تیتی")):
    print(a.intro())
print(isinstance(Dog("x"), Animal), issubclass(Cat, Animal), isinstance(Animal("y"), Dog))""")

add(2,6,"""<p><code class='inline'>super()</code> به کلاس والد (بر اساس MRO) دسترسی می‌دهد؛ مهم‌ترین کاربرد صدا زدن <code class='inline'>super().__init__(...)</code> است تا بخش والد ساخته شود. بدون آن ویژگی‌های والد ست نمی‌شوند.</p>
<p><b>MRO</b> (Method Resolution Order) ترتیب جست‌وجوی متد در سلسله‌مراتب است و با الگوریتم C3 ساخته می‌شود؛ با <code class='inline'>Class.__mro__</code> یا <code class='inline'>Class.mro()</code> دیده می‌شود. در وراثت چندگانه (diamond) <code class='inline'>super()</code> هر کلاس را فقط یک‌بار و به ترتیب MRO صدا می‌زند؛ پس همه‌ی کلاس‌ها باید از super استفاده کنند (cooperative).""",
"کلاس Employee را از Person ارث بده و با super() حقوق را اضافه کن.",
py="""class Person:
    def __init__(self, name):
        self.name = name
class Employee(Person):
    def __init__(self, name, salary):
        super().__init__(name)         # ساخت بخش والد
        self.salary = salary
e = Employee("علی", 5000)
print(e.name, e.salary)

class A:
    def hello(self): return ["A"]
class B(A):
    def hello(self): return ["B"] + super().hello()
class C(A):
    def hello(self): return ["C"] + super().hello()
class D(B, C):
    def hello(self): return ["D"] + super().hello()
print(D().hello())
print([k.__name__ for k in D.__mro__])""")

add(2,7,"""<p><b>چندریختی</b> (polymorphism) یعنی یک رابط، چند رفتار: کدی که فقط <code class='inline'>obj.speak()</code> را صدا می‌زند، با هر نوعی که آن متد را دارد کار می‌کند و نیازی به if/elif روی نوع نیست. این اصل باعث می‌شود اضافه‌کردن نوع جدید بدون دست‌زدن به کد مصرف‌کننده ممکن شود (اصل باز/بسته).</p>
<p>در پایتون چندریختی حاصل وراثت یا <b>duck typing</b> است («اگر مثل اردک راه می‌رود و گاگا می‌کند، اردک است»). نشانه‌ی بد: زنجیره‌ی <code class='inline'>if isinstance(...)</code>؛ معمولاً باید به متد چندریخت تبدیل شود.""",
"سیستم پرداخت با کلاس‌های CardPayment و WalletPayment بساز که هرکدام pay(amount) داشته باشند.",
py="""class Circle:
    def __init__(self, r): self.r = r
    def area(self): return 3.14159 * self.r ** 2
class Rect:
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h
class Tri:
    def __init__(self, b, h): self.b, self.h = b, h
    def area(self): return self.b * self.h / 2

shapes = [Circle(1), Rect(2, 3), Tri(4, 5)]
for s in shapes:
    print(type(s).__name__, round(s.area(), 2))
print(sum(s.area() for s in shapes))
print(len("abc"), len([1, 2]), len({1: 2}))     # len هم چندریخت است""")

add(2,8,"""<p>پایتون «خصوصی واقعی» ندارد؛ فقط قرارداد: <code class='inline'>_x</code> یعنی «داخلی است، دست نزن» و <code class='inline'>__x</code> (دو زیرخط) باعث <b>تغییر نام</b> (name mangling) به <code class='inline'>_Class__x</code> می‌شود تا در زیرکلاس‌ها تصادفاً تداخل نکند. شعار: «ما همه بزرگسال هستیم».</p>
<p>کپسوله‌سازی یعنی پنهان‌کردن جزئیات داخلی پشت رابط پایدار تا بتوانی پیاده‌سازی را عوض کنی بی‌آنکه کد بیرونی بشکند. ویژگی‌های حساس را با متد یا property کنترل کن و حالت (state) را همیشه معتبر نگه دار.""",
"کلاس Account بساز که balance فقط از طریق deposit و withdraw عوض شود و با اعتبارسنجی.",
py="""class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance       # داخلی
        self.__pin = "1234"           # name mangling
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("مبلغ مثبت لازم است")
        self._balance += amount
    def balance(self):
        return self._balance
a = Account("علی", 100)
a.deposit(50)
print(a.balance(), a._balance)
print([n for n in dir(a) if "pin" in n])
print(a._Account__pin)
try:
    a.__pin
except AttributeError as e:
    print("خطا:", e)""")

add(2,9,"""<p><code class='inline'>@property</code> متد را مثل ویژگی در دسترس می‌گذارد (<code class='inline'>obj.area</code> بی‌پرانتز) و با <code class='inline'>@x.setter</code> هنگام مقداردهی اعتبارسنجی می‌کند. از اول ویژگی ساده بنویس؛ هر وقت لازم شد property کن بدون تغییر کد استفاده‌کننده — نیازی به getX/setX سبک جاوا نیست.</p>
<p>کاربرد: ویژگی محاسبه‌شده (مثل <code class='inline'>full_name</code>)، اعتبارسنجی، و ویژگی فقط‌خواندنی (بدون setter). property هر بار محاسبه می‌شود؛ اگر سنگین است <code class='inline'>functools.cached_property</code> بهتر است.""",
"ویژگی فقط‌خواندنی area و ویژگی temperature (بالای ۲۷۳٫۱۵- کلوین) با setter بنویس.",
py="""class Circle:
    def __init__(self, r):
        self.radius = r              # از setter رد می‌شود
    @property
    def radius(self):
        return self._r
    @radius.setter
    def radius(self, v):
        if v < 0:
            raise ValueError("شعاع منفی نمی‌شود")
        self._r = v
    @property
    def area(self):
        return 3.14159 * self._r ** 2
c = Circle(2)
print(c.radius, round(c.area, 2))
c.radius = 3
print(round(c.area, 2))
for bad in (-1,):
    try:
        c.radius = bad
    except ValueError as e:
        print("خطا:", e)
try:
    c.area = 5
except AttributeError as e:
    print("خطا:", e)""")

add(2,10,"""<p>متدهای جادویی (dunder) با نام <code class='inline'>__x__</code> رفتار شیء را با ساختارهای زبان یکی می‌کنند. دو مورد اساسی: <code class='inline'>__repr__</code> نمایش <b>برای توسعه‌دهنده</b> (بی‌ابهام، ترجیحاً شبیه کد سازنده) و <code class='inline'>__str__</code> نمایش <b>برای کاربر</b> (خوانا). <code class='inline'>print</code> از str و REPL/لیست‌ها از repr استفاده می‌کنند؛ اگر str نباشد repr جایگزین می‌شود.</p>
<p>قاعده‌ی عملی: همیشه <code class='inline'>__repr__</code> بنویس. دیگر dunderهای مفید: <code class='inline'>__len__ __getitem__ __contains__ __bool__ __eq__ __hash__ __call__ __iter__</code>. با آن‌ها کلاس خودت مثل نوع‌های داخلی رفتار می‌کند.""",
"کلاس Playlist با __len__، __getitem__ و __contains__ بنویس.",
py="""class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    def __str__(self):
        return f"({self.x}, {self.y})"
p = Point(1, 2)
print(p)
print([p, Point(3, 4)])
print(repr(p), str(p))

class Deck:
    def __init__(self): self.cards = ["A", "K", "Q"]
    def __len__(self): return len(self.cards)
    def __getitem__(self, i): return self.cards[i]
    def __contains__(self, c): return c in self.cards
    def __call__(self): return "صدا زده شد"
d = Deck()
print(len(d), d[0], "K" in d, list(d), d())""")

add(2,11,"""<p>با dunderها می‌توان عملگرها را برای کلاس خودت تعریف کرد: <code class='inline'>__add__</code> (+)، <code class='inline'>__sub__</code>، <code class='inline'>__mul__</code>، <code class='inline'>__eq__</code> (==)، <code class='inline'>__lt__</code> (&lt;)، <code class='inline'>__neg__</code>. اگر عملگر برای نوع دیگر معنا ندارد <code class='inline'>NotImplemented</code> برگردان (نه raise) تا پایتون راه دیگری امتحان کند.</p>
<p>نکات: اگر <code class='inline'>__eq__</code> بنویسی و <code class='inline'>__hash__</code> نه، شیء unhashable می‌شود. برای مقایسه‌ی کامل <code class='inline'>functools.total_ordering</code> کافی است <code class='inline'>__eq__</code> و یک عملگر ترتیب را بدهی. عملگرها را فقط جایی که شهودی است سربار کن (بردار، پول، ماتریس).""",
"کلاس Money با جمع، مقایسه و ضرب در عدد بنویس که واحد پول یکسان را بررسی کند.",
py="""from functools import total_ordering
@total_ordering
class Vec:
    def __init__(self, x, y): self.x, self.y = x, y
    def __repr__(self): return f"Vec({self.x}, {self.y})"
    def __add__(self, o):
        if not isinstance(o, Vec): return NotImplemented
        return Vec(self.x + o.x, self.y + o.y)
    def __mul__(self, k): return Vec(self.x * k, self.y * k)
    __rmul__ = __mul__
    def __neg__(self): return Vec(-self.x, -self.y)
    def __eq__(self, o): return (self.x, self.y) == (o.x, o.y)
    def __lt__(self, o): return (self.x, self.y) < (o.x, o.y)
    def __hash__(self): return hash((self.x, self.y))
a, b = Vec(1, 2), Vec(3, 4)
print(a + b, a * 3, 2 * a, -a)
print(a == Vec(1, 2), a < b, a >= b, max(a, b))
print(len({a, Vec(1, 2), b}))
try:
    a + 5
except TypeError as e:
    print("خطا:", e)""")

add(2,12,"""<p><code class='inline'>@dataclass</code> برای کلاس‌هایی که بیشتر «داده» نگه می‌دارند، <code class='inline'>__init__</code>، <code class='inline'>__repr__</code> و <code class='inline'>__eq__</code> را خودکار می‌سازد. فیلدها با type hint تعریف می‌شوند. گزینه‌ها: <code class='inline'>frozen=True</code> (تغییرناپذیر و hashable)، <code class='inline'>order=True</code> (مقایسه)، <code class='inline'>slots=True</code> (کم‌حافظه، ۳٫۱۰+).</p>
<p>پیش‌فرض تغییرپذیر باید با <code class='inline'>field(default_factory=list)</code> داده شود (خود dataclass اجازه‌ی <code class='inline'>[]</code> نمی‌دهد). <code class='inline'>__post_init__</code> بعد از ساخت اعتبارسنجی/فیلد محاسبه‌شده می‌گذارد. <code class='inline'>asdict()</code> و <code class='inline'>replace()</code> کمک‌های مفیدند.""",
"dataclass برای Product با اعتبارسنجی قیمت منفی در __post_init__ بنویس.",
py="""from dataclasses import dataclass, field, asdict, replace
@dataclass(order=True)
class Student:
    name: str
    grade: float = 0.0
    tags: list = field(default_factory=list)
    def __post_init__(self):
        if not 0 <= self.grade <= 20:
            raise ValueError("نمره باید ۰ تا ۲۰ باشد")
s = Student("سارا", 19.5, ["ریاضی"])
print(s)
print(s == Student("سارا", 19.5, ["ریاضی"]))
print(asdict(s))
t = replace(s, grade=18)
print(t, s < t)
@dataclass(frozen=True)
class Pt:
    x: int; y: int
p = Pt(1, 2)
try:
    p.x = 5
except Exception as e:
    print(type(e).__name__)
print({p: "ok"})""")

add(2,13,"""<p><code class='inline'>Enum</code> مجموعه‌ی ثابتی از مقادیر نام‌دار است (مثل وضعیت سفارش یا روزهای هفته) و جایگزین «اعداد جادویی» و رشته‌های پراکنده می‌شود: <code class='inline'>Status.PAID</code> هم خواناست هم غلط‌املایی را زود می‌گیرد. هر عضو <code class='inline'>.name</code> و <code class='inline'>.value</code> دارد و می‌شود روی کلاس پیمایش کرد.</p>
<p>انواع: <code class='inline'>Enum</code> ساده، <code class='inline'>IntEnum</code> (مثل عدد قابل‌مقایسه)، <code class='inline'>StrEnum</code> (۳٫۱۱+)، و <code class='inline'>Flag</code> برای ترکیب بیتی (دسترسی‌ها). جست‌وجو با مقدار: <code class='inline'>Color(1)</code> و با نام: <code class='inline'>Color["RED"]</code>.""",
"Enum وضعیت سفارش بساز و مجاز بودن گذار بین وضعیت‌ها را با دیکشنری بررسی کن.",
py="""from enum import Enum, IntEnum, Flag, auto
class Status(Enum):
    NEW = "new"
    PAID = "paid"
    SHIPPED = "shipped"
print(Status.PAID, Status.PAID.name, Status.PAID.value)
print(Status("shipped"), Status["NEW"], list(Status))
print(Status.NEW is Status("new"), Status.NEW == "new")
class Level(IntEnum):
    LOW = 1
    HIGH = 3
print(Level.HIGH > Level.LOW, Level.HIGH + 1)
class Perm(Flag):
    R = auto(); W = auto(); X = auto()
p = Perm.R | Perm.W
print(p, Perm.W in p, Perm.X in p)""")

add(2,14,"""<p><b>ترکیب</b> (composition) یعنی کلاس چیز دیگری را «داشته باشد» نه «باشد»: <code class='inline'>Car</code> یک <code class='inline'>Engine</code> دارد. قاعده‌ی کلاسیک: «ترکیب را بر وراثت ترجیح بده». وراثت پیوند سفت می‌سازد (تغییر والد همه‌ی فرزندان را می‌شکند) و فقط برای رابطه‌ی واقعی «is-a» مناسب است.</p>
<p>مزیت ترکیب: می‌توان رفتار را در زمان اجرا عوض کرد (تزریق وابستگی)، تست با شیء ساختگی ساده می‌شود، و وراثت چندگانه‌ی پیچیده لازم نیست. نشانه‌ی وراثت غلط: فرزند متدهای والد را بی‌معنا یا ناقص می‌کند (مثلاً Square از Rectangle).""",
"Logger را به‌صورت وابستگی تزریق کن به OrderService و دو نوع لاگر (کنسول، حافظه) امتحان کن.",
py="""class Engine:
    def start(self): return "موتور روشن شد"
class Car:
    def __init__(self, engine):
        self.engine = engine               # ترکیب: Car یک Engine دارد
    def start(self): return f"ماشین: {self.engine.start()}"
print(Car(Engine()).start())

class ConsoleLogger:
    def log(self, m): print("LOG:", m)
class MemoryLogger:
    def __init__(self): self.lines = []
    def log(self, m): self.lines.append(m)
class OrderService:
    def __init__(self, logger):
        self.logger = logger
    def place(self, item):
        self.logger.log(f"سفارش {item}")
        return True
OrderService(ConsoleLogger()).place("کتاب")
mem = MemoryLogger()
OrderService(mem).place("قلم")
print(mem.lines)""")

add(2,15,"""<p>کلاس انتزاعی (ABC) «قرارداد» می‌نویسد: متدهایی که فرزندان <b>باید</b> پیاده کنند. با <code class='inline'>abc.ABC</code> و <code class='inline'>@abstractmethod</code> اگر زیرکلاس همه را پیاده نکرده باشد، ساختن شیء با <code class='inline'>TypeError</code> رد می‌شود؛ یعنی خطا زود و واضح می‌آید نه در میانه‌ی اجرا.</p>
<p>ABC می‌تواند متد معمولی (الگوی «Template Method») هم داشته باشد: اسکلت الگوریتم در والد و جزئیات در فرزند. خود کلاس انتزاعی نمونه‌سازی نمی‌شود. برای مجموعه‌های استاندارد، <code class='inline'>collections.abc</code> کلاس‌های آماده دارد (Mapping، Sequence، Iterable).""",
"کلاس انتزاعی Exporter با export(data) بساز و دو فرزند JsonExporter و CsvExporter.",
py="""from abc import ABC, abstractmethod
class Exporter(ABC):
    @abstractmethod
    def render(self, rows): ...
    def export(self, rows):            # Template Method
        return "\\n".join(self.render(rows))
class Csv(Exporter):
    def render(self, rows):
        return [",".join(map(str, r)) for r in rows]
class Pipe(Exporter):
    def render(self, rows):
        return [" | ".join(map(str, r)) for r in rows]
rows = [(1, "الف"), (2, "ب")]
print(Csv().export(rows))
print(Pipe().export(rows))
try:
    Exporter()
except TypeError as e:
    print("خطا:", e)
class Half(Exporter): pass
try:
    Half()
except TypeError as e:
    print("خطا:", e)""")

add(2,16,"""<p>پایتون به <b>duck typing</b> تکیه دارد: مهم نیست شیء از کدام کلاس است، مهم این است که متد لازم را دارد. این بسیار انعطاف‌پذیر است ولی بررسی‌کننده‌ی نوع ایستا نمی‌داند «چه چیزی لازم است». <code class='inline'>typing.Protocol</code> همین را رسمی می‌کند: رابط ساختاری (structural) که لازم نیست صریحاً از آن ارث ببری.</p>
<p>هر کلاسی که متدهای پروتکل را داشته باشد با آن سازگار است و mypy آن را می‌پذیرد. با <code class='inline'>@runtime_checkable</code> می‌شود در زمان اجرا هم با <code class='inline'>isinstance</code> بررسی کرد (فقط وجود متد، نه امضا). این تفاوت با ABC است که «اسمی» (nominal) است.""",
"پروتکل Closeable با close() تعریف کن و تابعی بنویس که لیستی از اشیای مختلف را ببندد.",
py="""from typing import Protocol, runtime_checkable
@runtime_checkable
class Drawable(Protocol):
    def draw(self) -> str: ...
class Circle:
    def draw(self): return "○"
class Label:
    def draw(self): return "[متن]"
class Broken:
    pass
def render_all(items: list[Drawable]):
    return " ".join(i.draw() for i in items)
print(render_all([Circle(), Label()]))
print(isinstance(Circle(), Drawable), isinstance(Broken(), Drawable))
class Duck:  quack = lambda self: "گاگا"
class Robot: quack = lambda self: "بیپ"
for t in (Duck(), Robot()):
    print(t.quack())""")

add(2,17,"""<p>پروتکل <b>iterator</b>: شیء iterable متد <code class='inline'>__iter__</code> دارد که یک iterator برمی‌گرداند، و iterator متد <code class='inline'>__next__</code> دارد که مقدار بعدی را می‌دهد و در پایان <code class='inline'>StopIteration</code> پرتاب می‌کند. <code class='inline'>for</code> پشت صحنه همین را اجرا می‌کند: <code class='inline'>iter()</code> سپس <code class='inline'>next()</code> تا StopIteration.</p>
<p>تفاوت: لیست iterable است (می‌شود چندبار پیمایش کرد) ولی iterator یک‌بار مصرف است و حالت دارد. مزیت iterator: مقدار را <b>تنبل</b> تولید می‌کند و حافظه‌ی O(1) می‌خواهد. <code class='inline'>next(it, default)</code> بدون خطا در پایان.""",
"iterator بنویس که فیبوناچی‌های کمتر از یک حد را بدهد.",
py="""it = iter([10, 20, 30])
print(next(it), next(it), next(it))
try:
    next(it)
except StopIteration:
    print("تمام شد")
print(next(iter([]), "پیش‌فرض"))

class Countdown:
    def __init__(self, n): self.n = n
    def __iter__(self): return self
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1
print(list(Countdown(5)))
c = Countdown(3)
print(list(c), list(c))               # بار دوم خالی: یک‌بار مصرف""")

add(2,18,"""<p><b>generator</b> تابعی است که به‌جای <code class='inline'>return</code> از <code class='inline'>yield</code> استفاده می‌کند. هر <code class='inline'>yield</code> یک مقدار می‌دهد و اجرا را <b>متوقف</b> می‌کند؛ در <code class='inline'>next</code> بعدی از همان‌جا ادامه می‌یابد. ساده‌ترین راه ساخت iterator است.</p>
<p>مزایا: حافظه‌ی ثابت (برای فایل ۱۰ گیگابایتی یا دنباله‌ی بی‌نهایت)، شروع زودهنگام کار، و خطوط‌لوله‌ی ترکیبی (یک generator خروجی دیگری را مصرف کند). <code class='inline'>yield from</code> کار را به generator دیگر می‌سپارد. فراموش نکن: generator یک‌بار مصرف است.""",
"generator بنویس که خطوط یک فایل بزرگ را فیلتر کند (فقط خطوطی که کلمه‌ای دارند) بدون خواندن کل فایل.",
py="""def count_up(n):
    i = 1
    while i <= n:
        yield i
        i += 1
g = count_up(3)
print(next(g), next(g), next(g))
print(list(count_up(5)), sum(count_up(100)))

def naturals():
    n = 0
    while True:                     # بی‌نهایت اما تنبل
        yield n
        n += 1
def take(n, it):
    for _, x in zip(range(n), it):
        yield x
print(list(take(5, naturals())))

def evens(it):
    for x in it:
        if x % 2 == 0: yield x
def squares(it):
    for x in it: yield x * x
print(list(take(4, squares(evens(naturals())))))     # خط‌لوله
def chain(*its):
    for it in its:
        yield from it
print(list(chain([1, 2], "ab")))""")

add(2,19,"""<p><b>عبارت generator</b> شبیه list comprehension ولی با پرانتز است و lazy: <code class='inline'>(x*x for x in range(10**9))</code> هیچ حافظه‌ای برای ۱۰⁹ عنصر نمی‌گیرد. وقتی نتیجه فقط یک‌بار مصرف می‌شود (در <code class='inline'>sum</code>، <code class='inline'>any</code>، <code class='inline'>max</code>، <code class='inline'>join</code>) از آن استفاده کن.</p>
<p>اگر generator تنها آرگومان تابع است پرانتز اضافی لازم نیست: <code class='inline'>sum(x for x in data)</code>. اگر چندبار پیمایش لازم است یا اندازه/اندیس‌دهی می‌خواهی، لیست بساز. <code class='inline'>sys.getsizeof</code> تفاوت حافظه را نشان می‌دهد.""",
"حافظه‌ی لیست و generator را برای یک میلیون عدد مقایسه کن.",
py="""import sys
lst = [x * x for x in range(1_000_000)]
gen = (x * x for x in range(1_000_000))
print(sys.getsizeof(lst) > 1_000_000, sys.getsizeof(gen) < 500)
print(sum(gen))
print(sum(gen))                  # generator تمام شده: ۰
words = ["apple", "kiwi", "fig"]
print(any(len(w) > 4 for w in words), all(len(w) > 2 for w in words))
print(", ".join(w.upper() for w in words))
print(max((len(w), w) for w in words))
first = next((w for w in words if w.startswith("k")), None)
print(first)""")

add(2,20,"""<p><code class='inline'>itertools</code> جعبه‌ابزار تکرارکننده‌های سریع و کم‌حافظه است. بی‌نهایت‌ها: <code class='inline'>count cycle repeat</code>. ترکیبی: <code class='inline'>chain</code> (اتصال)، <code class='inline'>islice</code> (برش iterator)، <code class='inline'>zip_longest</code>. ترکیبیات: <code class='inline'>product</code> (ضرب دکارتی)، <code class='inline'>permutations</code>، <code class='inline'>combinations</code>. گروه‌بندی: <code class='inline'>groupby</code> (روی داده‌ی <b>مرتب‌شده</b> بر اساس همان کلید) و <code class='inline'>accumulate</code> (مجموع تجمعی).</p>
<p>خطای رایج groupby: بدون مرتب‌سازی قبلی، گروه‌های پراکنده می‌دهد. <code class='inline'>itertools.batched</code> (۳٫۱۲+) داده را دسته‌دسته می‌کند.""",
"با combinations همه‌ی جفت‌های بازیکنان یک تورنمنت را بساز و با groupby فروش‌ها را بر اساس شهر جمع بزن.",
py="""from itertools import (count, islice, chain, product, permutations,
                       combinations, groupby, accumulate, zip_longest)
print(list(islice(count(10, 5), 4)))
print(list(product("AB", [1, 2])))
print(list(permutations("abc", 2)))
print(list(combinations([1, 2, 3, 4], 2)))
print(list(accumulate([1, 2, 3, 4])))
print(list(zip_longest([1, 2, 3], "ab", fillvalue="-")))
sales = [("تهران", 5), ("شیراز", 3), ("تهران", 7), ("شیراز", 1)]
sales.sort(key=lambda s: s[0])
for city, rows in groupby(sales, key=lambda s: s[0]):
    print(city, sum(v for _, v in rows))""")

add(2,21,"""<p><code class='inline'>functools</code> ابزار کار با توابع است: <code class='inline'>partial</code> (ثابت‌کردن بخشی از آرگومان‌ها)، <code class='inline'>reduce</code>، <code class='inline'>lru_cache / cache</code> (حافظه‌ی نهان برای توابع خالص و پرهزینه)، <code class='inline'>cached_property</code>، <code class='inline'>total_ordering</code>، <code class='inline'>wraps</code> (برای decoratorها) و <code class='inline'>singledispatch</code> (چندریختی بر اساس نوع آرگومان).</p>
<p>cache فقط وقتی امن است که تابع خالص باشد و آرگومان‌ها hashable. حافظه‌ی نهان نامحدود نشت حافظه می‌شود؛ <code class='inline'>lru_cache(maxsize=...)</code> کران می‌گذارد. با <code class='inline'>fn.cache_info()</code> نرخ برخورد را ببین.""",
"تابعی بنویس که با singledispatch برای int، list و str رفتار جدا داشته باشد.",
py="""from functools import partial, lru_cache, singledispatch, reduce, cached_property
power = lambda b, e: b ** e
square = partial(power, e=2)
print(square(7), partial(int, base=2)("1010"))

@lru_cache(maxsize=None)
def slow(n):
    print("  محاسبه", n)
    return n * n
print(slow(4), slow(4))
print(slow.cache_info())

@singledispatch
def describe(x): return f"چیز دیگر: {x!r}"
@describe.register
def _(x: int): return f"عدد {x}"
@describe.register
def _(x: list): return f"لیست با {len(x)} عضو"
print(describe(5), describe([1, 2]), describe("a"))

class Report:
    @cached_property
    def heavy(self):
        print("  محاسبه‌ی سنگین")
        return 42
r = Report(); print(r.heavy, r.heavy)""")

add(2,22,"""<p><b>decorator</b> تابعی است که تابع دیگر را می‌گیرد و نسخه‌ی «تزیین‌شده» برمی‌گرداند؛ بدون دست‌زدن به کد اصلی رفتار اضافه می‌کند (زمان‌سنجی، لاگ، کش، بررسی دسترسی). نوشتن <code class='inline'>@dec</code> بالای تابع یعنی <code class='inline'>f = dec(f)</code>.</p>
<p>الگوی استاندارد: یک تابع داخلی <code class='inline'>wrapper(*args, **kwargs)</code> که تابع اصلی را صدا می‌زند و نتیجه‌اش را برمی‌گرداند. حتماً <code class='inline'>@functools.wraps(func)</code> روی wrapper بگذار تا نام و docstring تابع اصلی حفظ شود (وگرنه همه‌ی توابع «wrapper» می‌شوند و دیباگ سخت می‌شود).""",
"decorator ای بنویس که تعداد دفعات صدا زدن تابع را بشمارد و روی خود تابع بگذارد.",
py="""import time, functools
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        t = time.perf_counter()
        result = func(*args, **kwargs)
        print(f"  {func.__name__} طول کشید: {(time.perf_counter() - t)*1000:.2f}ms")
        return result
    return wrapper

@timer
def add(a, b):
    "جمع دو عدد"
    return a + b
print(add(2, 3))
print(add.__name__, add.__doc__)

def logged(func):
    @functools.wraps(func)
    def wrapper(*a, **k):
        print(f"  صدا زده شد: {func.__name__}{a}")
        return func(*a, **k)
    return wrapper
@logged
@timer
def mul(a, b): return a * b
print(mul(3, 4))""")

add(2,23,"""<p>وقتی decorator پارامتر می‌گیرد (<code class='inline'>@retry(times=3)</code>) یک لایه‌ی اضافه لازم است: تابعی که پارامتر را می‌گیرد و <b>خود decorator</b> را برمی‌گرداند. سه سطح تو: <code class='inline'>retry(n)</code> → <code class='inline'>decorator(func)</code> → <code class='inline'>wrapper(*a, **k)</code>.</p>
<p>نمونه‌های کاربردی: تلاش مجدد با تأخیر، بررسی نقش کاربر، محدودکننده‌ی نرخ، اعتبارسنجی نوع آرگومان. می‌توان decorator را به‌صورت کلاس هم نوشت (با <code class='inline'>__call__</code>) وقتی حالت لازم دارد.""",
"decorator ای با پارامتر بنویس که اگر کاربر نقش لازم را نداشت PermissionError بدهد.",
py="""import functools
def retry(times=3, exceptions=(Exception,)):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*a, **k):
            for attempt in range(1, times + 1):
                try:
                    return func(*a, **k)
                except exceptions as e:
                    print(f"  تلاش {attempt} شکست: {e}")
                    if attempt == times:
                        raise
        return wrapper
    return decorator

calls = {"n": 0}
@retry(times=3, exceptions=(ConnectionError,))
def flaky():
    calls["n"] += 1
    if calls["n"] < 3:
        raise ConnectionError("قطع شد")
    return "موفق"
print(flaky())

def require_role(role):
    def deco(f):
        @functools.wraps(f)
        def w(user, *a, **k):
            if role not in user["roles"]:
                raise PermissionError(f"نقش {role} لازم است")
            return f(user, *a, **k)
        return w
    return deco
@require_role("admin")
def delete_all(user): return "حذف شد"
print(delete_all({"roles": ["admin"]}))
try:
    delete_all({"roles": ["user"]})
except PermissionError as e:
    print("خطا:", e)""")

add(2,24,"""<p>مدیر context هر چیزی را که «آماده‌سازی و پاک‌سازی» دارد مدیریت می‌کند (فایل، قفل، اتصال دیتابیس، تراکنش). با <code class='inline'>with</code> استفاده می‌شود و پاک‌سازی حتی با خطا انجام می‌شود. دو روش ساخت: کلاس با <code class='inline'>__enter__</code> و <code class='inline'>__exit__</code>، یا ساده‌تر <code class='inline'>@contextlib.contextmanager</code> روی یک generator با یک <code class='inline'>yield</code>.</p>
<p>در <code class='inline'>__exit__(exc_type, exc, tb)</code> اگر <code class='inline'>True</code> برگردانی خطا را می‌بلعی؛ معمولاً <code class='inline'>None</code> برگردان. ابزارهای آماده: <code class='inline'>suppress</code>، <code class='inline'>redirect_stdout</code>، <code class='inline'>ExitStack</code>، و <code class='inline'>tempfile.TemporaryDirectory</code>.""",
"context manager timer بنویس که مدت اجرای بلوک را چاپ کند و یکی که تغییرات دایرکتوری جاری را برگرداند.",
py="""import time
from contextlib import contextmanager, suppress, redirect_stdout
import io
class Resource:
    def __enter__(self):
        print("باز شد")
        return self
    def __exit__(self, et, ev, tb):
        print("بسته شد", "| خطا:" if et else "", ev or "")
        return False
with Resource():
    print("  کار با منبع")
try:
    with Resource():
        raise ValueError("اوه")
except ValueError:
    print("خطا بیرون رسید")

@contextmanager
def timer(label):
    t = time.perf_counter()
    try:
        yield
    finally:
        print(f"{label}: {(time.perf_counter()-t)*1000:.1f}ms")
with timer("حلقه"):
    sum(range(10**5))
with suppress(FileNotFoundError):
    open("nothing.txt")
buf = io.StringIO()
with redirect_stdout(buf):
    print("پنهان")
print(repr(buf.getvalue()))""")

add(2,25,"""<p>ماژول <code class='inline'>collections</code> ساختمان داده‌های تخصصی دارد: <code class='inline'>Counter</code> (شمارش)، <code class='inline'>defaultdict</code> (مقدار پیش‌فرض خودکار)، <code class='inline'>deque</code> (صف دوطرفه با O(1) در هر دو سر؛ <code class='inline'>maxlen</code> برای پنجره‌ی لغزان)، <code class='inline'>namedtuple</code> (تاپل با نام فیلد)، <code class='inline'>OrderedDict</code> و <code class='inline'>ChainMap</code>.</p>
<p>برای صف از <code class='inline'>deque</code> استفاده کن نه <code class='inline'>list.pop(0)</code> که O(n) است. <code class='inline'>Counter</code> عملگرهای جمع و تفریق و <code class='inline'>most_common(n)</code> دارد. <code class='inline'>defaultdict(list)</code> گروه‌بندی را بی‌if می‌کند.""",
"با deque(maxlen=3) میانگین متحرک ۳تایی یک دنباله را حساب کن.",
py="""from collections import Counter, defaultdict, deque, namedtuple, ChainMap
c = Counter("abracadabra")
print(c, c.most_common(2), c["z"])
print(Counter("aab") + Counter("bcc"))
groups = defaultdict(list)
for w in ["ant", "bee", "ape", "bat"]:
    groups[w[0]].append(w)
print(dict(groups))
q = deque([1, 2, 3])
q.appendleft(0); q.append(4)
print(q, q.popleft(), q.pop(), q)
win = deque(maxlen=3)
for x in [1, 2, 3, 4, 5]:
    win.append(x)
    print(list(win), round(sum(win) / len(win), 2))
P = namedtuple("P", "x y")
p = P(1, 2)
print(p, p.x, p._replace(y=9), p._asdict())
print(ChainMap({"a": 1}, {"a": 2, "b": 3})["a"])""")
