ID='pyzero'; NAME='پایتون از صفر (۲۰۰ درس)'
L1="""نصب پایتون و اولین برنامه
REPL و اجرای فایل .py
print و خروجی گرفتن
کامنت‌ها و خوانایی کد
متغیرها و نام‌گذاری
انواع داده: int و float
عملگرهای ریاضی و اولویت آن‌ها
رشته‌ها: ساخت و اتصال
اندیس و برش رشته
متدهای رشته
f-string و قالب‌بندی
input و تبدیل نوع
bool و عملگرهای مقایسه
عملگرهای منطقی
if / elif / else
عبارت شرطی یک‌خطی
حلقه while
حلقه for و range
break، continue و else حلقه
حلقه‌های تو در تو
لیست‌ها: ساخت و دسترسی
متدهای لیست
پیمایش و مرتب‌سازی لیست
کپی سطحی و عمیق
تاپل‌ها و unpacking
دیکشنری‌ها
پیمایش دیکشنری
مجموعه‌ها (set)
عملیات مجموعه‌ای
تابع: تعریف و فراخوانی
پارامتر و آرگومان
مقدار پیش‌فرض و دام mutable
*args و **kwargs
return و چند خروجی
scope و قانون LEGB
توابع بازگشتی
lambda و توابع مرتبه‌بالا
map، filter و sorted با key
list comprehension
dict و set comprehension
خطاها و خواندن Traceback
try / except
else و finally
raise و خطای سفارشی
خواندن و نوشتن فایل
with و مدیریت فایل
مسیرها با pathlib
ماژول‌ها و import
نصب بسته با pip و venv
پروژه‌ی پایان سطح ۱: دفترچه‌ی مخاطبین""".split('\n')
L2="""کلاس و شیء: اولین کلاس
__init__ و self
ویژگی‌های کلاس و نمونه
متدهای کلاس و ایستا
وراثت
super و MRO
چندریختی
کپسوله‌سازی و ویژگی‌های خصوصی
property و getter/setter
متدهای جادویی __str__ و __repr__
overload عملگرها
dataclass
Enum
ترکیب در برابر وراثت
کلاس‌های انتزاعی (ABC)
پروتکل‌ها و duck typing
iterator
generator و yield
عبارت generator
itertools
functools
decorator ساده
decorator با آرگومان
context manager
کتابخانه‌ی استاندارد: collections
datetime و منطقه‌ی زمانی
رشته‌ها و regex
JSON
CSV
argparse و ابزار خط فرمان
logging
type hints
mypy و بررسی نوع
pytest مقدماتی
fixture و parametrize
mock و patch
doctest و مستندسازی
black، ruff و کیفیت کد
ساختار پروژه و بسته
pip، pyproject.toml و وابستگی‌ها
sqlite3
SQLAlchemy مقدماتی
requests و HTTP
پردازش HTML و scraping اخلاقی
کار با API و rate limit
متغیر محیطی و تنظیمات
مدیریت رمز و راز
زمان‌بندی و cron
subprocess و فرمان‌های سیستم
پروژه‌ی پایان سطح ۲: ابزار CLI مدیریت وظایف""".split('\n')
L3="""مدل حافظه و شمارش مراجع
garbage collector
شناسه و عملگر is
شیء‌های تغییرناپذیر و hash
__slots__
descriptor
متاکلاس
__getattr__ و __getattribute__
__init_subclass__ و class decorator
مدیر context پیشرفته
generator پیشرفته: send و yield from
coroutine
asyncio: حلقه‌ی رویداد
Task و gather
async with و async for
queue و الگوی producer/consumer
threading
قفل‌ها و race condition
multiprocessing
concurrent.futures
GIL: چیست و چه نمی‌کند
پروفایل: cProfile و line_profiler
tracemalloc و نشت حافظه
بهینه‌سازی الگوریتمی
numpy برای سرعت
cython مقدماتی
ctypes و cffi
الگوهای طراحی: سازنده
الگوهای طراحی: ساختاری
الگوهای طراحی: رفتاری
SOLID در پایتون
معماری تمیز
تزریق وابستگی
تست پیشرفته: property-based با hypothesis
تست یکپارچگی و coverage
CI با GitHub Actions
بسته‌بندی و انتشار روی PyPI
مستندسازی با Sphinx/MkDocs
API با FastAPI مقدماتی
Pydantic و اعتبارسنجی
ORM پیشرفته و migration
کش و Redis
صف پیام و Celery
لاگ ساخت‌یافته و observability
Docker برای پایتون
امنیت: ورودی، pickle و تزریق
مدیریت وابستگی: lock و بازتولیدپذیری
match/case و الگو‌یابی ساختاری
تایپ پیشرفته: Generic و TypeVar
پروژه‌ی پایان سطح ۳: سرویس وب کامل""".split('\n')
L4="""CPython: از سورس تا bytecode
ماژول dis و خواندن bytecode
پشته‌ی فریم و call stack
ساختار شیء‌ها در C
اتصال به C API
نوشتن افزونه‌ی C
Rust با PyO3
Free-threading و آینده‌ی GIL
JIT و بهینه‌سازی‌های جدید
subinterpreters
asyncio درونی: selector و epoll
پروتکل شبکه از صفر با socket
ساخت سرور HTTP ساده
ساخت framework کوچک شبیه Flask
ساخت ORM کوچک
ساخت مفسر ساده (tokenizer/parser)
AST و تحلیل کد
تولید کد و macro با ast
import hook و loader سفارشی
ساخت DSL
پردازش داده‌ی حجیم: iterator و mmap
Arrow و Parquet
Polars در برابر pandas
الگوریتم‌ها: گراف
الگوریتم‌ها: برنامه‌نویسی پویا
ساختمان داده‌ی پیشرفته: trie و heap و segment tree
الگوریتم‌های رشته‌ای
هندسه‌ی محاسباتی
بهینه‌سازی عددی
سیستم‌های توزیع‌شده: سازگاری و CAP
gRPC و protobuf
event sourcing و CQRS
معماری میکروسرویس با پایتون
قابلیت اطمینان: retry و circuit breaker
مشاهده‌پذیری: tracing و OpenTelemetry
مقیاس‌پذیری و load testing
امنیت پیشرفته: sandbox و محدودسازی کد
تحلیل ایستا و بازبینی خودکار
fuzzing با پایتون
تست کیفیت و mutation testing
دیباگ پیشرفته: pdb و debugger راه‌دور
بازتولید باگ و تحلیل postmortem
کارایی در تولید: gunicorn/uvicorn و تنظیم
مهاجرت کد قدیمی (py2→py3، typing تدریجی)
طراحی API پایدار و نسخه‌بندی
مصاحبه‌ی فنی: سؤال‌های پایتون
پروژه‌ی نهایی ۱: موتور جست‌وجوی کوچک
پروژه‌ی نهایی ۲: سیستم صف و کارگر توزیع‌شده
پروژه‌ی نهایی ۳: افزونه‌ی عمومی در PyPI
جمع‌بندی و نقشه‌ی راه ادامه""".split('\n')
LEVELS=[L1,L2,L3,L4]
