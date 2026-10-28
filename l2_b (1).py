import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(2,26,"""<p>ماژول <code class='inline'>datetime</code> چهار نوع اصلی دارد: <code class='inline'>date</code>، <code class='inline'>time</code>، <code class='inline'>datetime</code> و <code class='inline'>timedelta</code> (اختلاف). تفریق دو datetime یک timedelta می‌دهد. قالب‌بندی با <code class='inline'>strftime</code> و تجزیه با <code class='inline'>strptime</code> (کدهای <code class='inline'>%Y %m %d %H %M %S</code>).</p>
<p><b>منطقه‌ی زمانی</b> منبع باگ‌های بزرگ است: datetime «naive» (بی‌منطقه) و «aware» را نباید با هم مقایسه کرد. قاعده: داخل سیستم همه‌چیز را <b>UTC</b> ذخیره کن (<code class='inline'>datetime.now(timezone.utc)</code>) و فقط هنگام نمایش به منطقه‌ی کاربر (مثلاً <code class='inline'>zoneinfo.ZoneInfo("Asia/Tehran")</code>) تبدیل کن. تاریخ شمسی داخل datetime نیست؛ از کتابخانه‌ی jdatetime استفاده می‌شود.""",
"سن یک نفر را از تاریخ تولدش بر حسب سال کامل حساب کن و تعداد روز تا سالگرد بعدی را بیاب.",
py="""from datetime import date, datetime, timedelta, timezone
d = date(2026, 10, 18)
print(d, d.weekday(), d.isoformat(), d + timedelta(days=30))
a, b = datetime(2026, 1, 1, 8, 30), datetime(2026, 3, 1, 17, 0)
diff = b - a
print(diff, diff.days, diff.total_seconds() / 3600)
print(a.strftime("%Y/%m/%d %H:%M"), datetime.strptime("2026-05-04 10:15", "%Y-%m-%d %H:%M"))
now = datetime.now(timezone.utc)
print(now.tzinfo, now.tzinfo is not None)
tehran = timezone(timedelta(hours=3, minutes=30))
local = datetime(2026, 10, 18, 12, 0, tzinfo=timezone.utc).astimezone(tehran)
print(local.isoformat())
try:
    datetime.now() < now
except TypeError as e:
    print("خطا:", e)""")

add(2,27,"""<p><b>عبارت باقاعده</b> (regex) زبان توصیف الگوی متن است. ماژول <code class='inline'>re</code>: <code class='inline'>search</code> (اولین تطابق هرجا)، <code class='inline'>match</code> (از ابتدا)، <code class='inline'>fullmatch</code>، <code class='inline'>findall</code>، <code class='inline'>finditer</code>، <code class='inline'>sub</code> (جایگزینی) و <code class='inline'>split</code>. همیشه الگو را <b>raw string</b> (<code class='inline'>r"..."</code>) بنویس.</p>
<p>اجزا: <code class='inline'>\\d</code> رقم، <code class='inline'>\\w</code> حرف/رقم، <code class='inline'>\\s</code> فاصله، <code class='inline'>.</code> هر کاراکتر، <code class='inline'>* + ? {n,m}</code> تکرار، <code class='inline'>[...]</code> مجموعه، <code class='inline'>(...)</code> گروه، <code class='inline'>(?P&lt;name&gt;...)</code> گروه نام‌دار، <code class='inline'>^ $</code> ابتدا و انتها. تکرارها پیش‌فرض حریص‌اند؛ <code class='inline'>*?</code> غیرحریص. regex ابزار «استخراج و اعتبارسنجی ساده» است نه تجزیه‌ی HTML یا JSON.""",
"با regex همه‌ی ایمیل‌ها و شماره موبایل‌های ایران (۰۹۱۲...) را از یک متن بیرون بکش.",
py="""import re
text = "تماس: 0912-123-4567 یا info@site.ir ، دیگری: ali.k@mail.com و 09351234567"
print(re.findall(r"[\\w.]+@[\\w.]+\\.\\w+", text))
print(re.findall(r"09\\d{2}-?\\d{3}-?\\d{4}", text))
m = re.search(r"(?P<year>\\d{4})-(?P<month>\\d{2})", "تاریخ: 2026-10-18")
print(m.group("year"), m["month"], m.span())
print(re.sub(r"\\s+", " ", "a   b \\n c"))
print(re.split(r"[,;]\\s*", "a, b;c,d"))
print(re.fullmatch(r"\\d{3}", "123") is not None, re.fullmatch(r"\\d{3}", "1234"))
print(re.findall(r"<.+?>", "<a><b>"), re.findall(r"<.+>", "<a><b>"))
pat = re.compile(r"(\\w+)@(\\w+)")
print(pat.sub(r"\\2 at \\1", "user@host"))""")

add(2,28,"""<p><b>JSON</b> قالب متنی استاندارد تبادل داده است. ماژول <code class='inline'>json</code>: <code class='inline'>dumps/loads</code> برای رشته و <code class='inline'>dump/load</code> برای فایل. نگاشت: dict↔object، list↔array، str، int/float، <code class='inline'>True</code>↔true، <code class='inline'>None</code>↔null. تاپل به آرایه تبدیل می‌شود و موقع بازگشت لیست است؛ کلید غیررشته به رشته تبدیل می‌شود.</p>
<p>برای فارسی <code class='inline'>ensure_ascii=False</code> بده (وگرنه <code class='inline'>\\\\uXXXX</code> می‌شود). <code class='inline'>indent=2</code> برای خوانایی و <code class='inline'>sort_keys=True</code> برای خروجی ثابت. نوع‌هایی مثل datetime و set سریالایز نمی‌شوند؛ با پارامتر <code class='inline'>default=</code> تابع تبدیل بده. ورودی خراب <code class='inline'>json.JSONDecodeError</code> می‌دهد. هرگز داده‌ی غیرقابل‌اعتماد را با pickle نخوان؛ JSON امن‌تر است.""",
"شیء datetime و set را با default سفارشی به JSON تبدیل کن.",
py="""import json
from datetime import datetime
data = {"name": "علی", "scores": [17, 19.5], "active": True, "address": None}
s = json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True)
print(s)
back = json.loads(s)
print(back == data, type(back["scores"]))
print(json.dumps({"t": (1, 2), 1: "a"}))
def default(o):
    if isinstance(o, datetime): return o.isoformat()
    if isinstance(o, set): return sorted(o)
    raise TypeError(f"{type(o).__name__} سریالایز نمی‌شود")
print(json.dumps({"when": datetime(2026, 10, 18, 9, 0), "tags": {"b", "a"}}, default=default))
try:
    json.loads("{'bad': 1}")
except json.JSONDecodeError as e:
    print("JSON خراب:", e.msg, "در ستون", e.colno)""")

add(2,29,"""<p>ماژول <code class='inline'>csv</code> فایل‌های جدولی را درست می‌خواند (کاما درون متن در گیومه، خط جدید داخل سلول و ...). هرگز <code class='inline'>line.split(",")</code> ننویس. <code class='inline'>csv.reader</code> هر ردیف را لیست و <code class='inline'>csv.DictReader</code> هر ردیف را دیکشنری با نام ستون می‌دهد؛ برای نوشتن <code class='inline'>writer</code> و <code class='inline'>DictWriter</code>.</p>
<p>هنگام باز کردن فایل <code class='inline'>newline=""</code> و <code class='inline'>encoding="utf-8"</code> (یا <code class='inline'>utf-8-sig</code> برای فایل‌هایی که قرار است در Excel باز شوند و فارسی درست دیده شود) بده. همه‌ی مقادیر رشته‌اند؛ تبدیل نوع با خودت است. برای تحلیل جدی‌تر pandas بهتر است.""",
"فایل CSV فروش را بخوان و جمع فروش هر شهر را در CSV جدید بنویس.",
py="""import csv, io
raw = "name,city,amount\\nعلی,\\"تهران, مرکز\\",1500\\nسارا,شیراز,2300\\nرضا,تهران,700\\n"
rows = list(csv.DictReader(io.StringIO(raw)))
print(rows[0])
total = {}
for r in rows:
    total[r["city"]] = total.get(r["city"], 0) + int(r["amount"])
print(total)
out = io.StringIO()
w = csv.DictWriter(out, fieldnames=["city", "total"])
w.writeheader()
for c, t in total.items():
    w.writerow({"city": c, "total": t})
print(out.getvalue())
print(list(csv.reader(io.StringIO('a,"b,c",d'))))
print("split دستی:", 'a,"b,c",d'.split(","))""")

add(2,30,"""<p><code class='inline'>argparse</code> برنامه‌ی تو را به ابزار خط فرمان حرفه‌ای تبدیل می‌کند: ساخت <code class='inline'>--help</code> خودکار، اعتبارسنجی، تبدیل نوع و پیام خطای مناسب. اجزا: <b>موقعیتی</b> (<code class='inline'>add_argument("file")</code>)، <b>اختیاری</b> (<code class='inline'>--verbose</code>، <code class='inline'>-v</code>)، <code class='inline'>action="store_true"</code> برای پرچم، <code class='inline'>type=int</code>، <code class='inline'>choices</code>، <code class='inline'>default</code>، <code class='inline'>nargs</code>.</p>
<p>زیردستورها (مثل <code class='inline'>git commit</code>) با <code class='inline'>add_subparsers</code> ساخته می‌شوند. الگوی استاندارد: تابع <code class='inline'>main(argv=None)</code> که <code class='inline'>parser.parse_args(argv)</code> را صدا می‌زند تا بشود تست کرد. کتابخانه‌های محبوب‌تر: <code class='inline'>typer</code> و <code class='inline'>click</code>.""",
"CLI با زیردستور add و list بساز که یک آرگومان --priority با گزینه‌های low/high بپذیرد.",
py="""import argparse
def build():
    p = argparse.ArgumentParser(prog="todo", description="مدیریت کار")
    p.add_argument("-v", "--verbose", action="store_true")
    sub = p.add_subparsers(dest="cmd", required=True)
    a = sub.add_parser("add", help="افزودن کار")
    a.add_argument("title")
    a.add_argument("--priority", choices=["low", "high"], default="low")
    a.add_argument("--tags", nargs="*", default=[])
    l = sub.add_parser("list")
    l.add_argument("-n", type=int, default=10)
    return p
p = build()
print(p.parse_args(["add", "خرید", "--priority", "high", "--tags", "a", "b"]))
print(p.parse_args(["-v", "list", "-n", "3"]))
try:
    p.parse_args(["add", "x", "--priority", "mid"])
except SystemExit:
    print("انتخاب نامعتبر → برنامه با خطا خارج شد")
print(p.format_usage())""")

add(2,31,"""<p>به‌جای <code class='inline'>print</code> برای ردیابی برنامه از <code class='inline'>logging</code> استفاده کن: سطح‌بندی (<code class='inline'>DEBUG INFO WARNING ERROR CRITICAL</code>)، فرمت یکسان با زمان و نام ماژول، و مقصدهای مختلف (کنسول، فایل، شبکه) بدون تغییر کد. در تولید سطح INFO و در توسعه DEBUG.</p>
<p>الگو: در هر ماژول <code class='inline'>logger = logging.getLogger(__name__)</code> و فقط در نقطه‌ی ورود یک‌بار <code class='inline'>basicConfig</code> یا <code class='inline'>dictConfig</code>. برای خطا از <code class='inline'>logger.exception("پیام")</code> داخل except تا traceback ثبت شود. پارامترها را با <code class='inline'>%s</code> بده (<code class='inline'>logger.info("کاربر %s", uid)</code>) نه f-string تا فقط در صورت فعال بودن سطح فرمت شود. هرگز رمز/توکن لاگ نکن.""",
"لاگر با دو handler بساز: کنسول در سطح WARNING و حافظه در سطح DEBUG.",
py="""import logging, io
stream = io.StringIO()
logging.basicConfig(level=logging.DEBUG, stream=stream, force=True,
                    format="%(levelname)-8s %(name)s: %(message)s")
log = logging.getLogger("shop.orders")
log.debug("جزئیات: %s", {"id": 1})
log.info("سفارش ثبت شد")
log.warning("موجودی کم: %d", 2)
try:
    1 / 0
except ZeroDivisionError:
    log.exception("محاسبه شکست خورد")
print(stream.getvalue().splitlines()[0:3])
print(stream.getvalue().splitlines()[-1])
child = logging.getLogger("shop.orders.pay")
print(child.parent.name, child.getEffectiveLevel() == logging.DEBUG)
print(logging.getLevelName(30), logging.WARNING)""")

add(2,32,"""<p><b>type hint</b> یعنی نوشتن نوع مورد انتظار: <code class='inline'>def area(r: float) -> float:</code>. پایتون زمان اجرا آن‌ها را اجبار <b>نمی‌کند</b>؛ ارزش آن در مستندسازی، تکمیل خودکار ویرایشگر و بررسی ایستا با ابزارهایی مثل mypy است. بخش بزرگی از باگ‌ها را پیش از اجرا می‌گیرد.</p>
<p>نوع‌ها: <code class='inline'>int str list[int] dict[str, float] tuple[int, ...]</code> (از ۳٫۹ مستقیم)، <code class='inline'>X | None</code> (۳٫۱۰+، قبلاً <code class='inline'>Optional[X]</code>)، <code class='inline'>Callable</code>، <code class='inline'>Any</code>، <code class='inline'>Literal</code>، <code class='inline'>TypedDict</code>، <code class='inline'>TypeVar</code> برای تابع عمومی. با <code class='inline'>typing.get_type_hints</code> در زمان اجرا قابل‌خواندن‌اند (پایه‌ی FastAPI و Pydantic).""",
"تابع عمومی first(items) بنویس که عضو اول هر دنباله را با نوع درست برگرداند.",
py="""from typing import Callable, Literal, TypedDict, TypeVar, get_type_hints
T = TypeVar("T")
def first(items: list[T], default: T | None = None) -> T | None:
    return items[0] if items else default
def apply(f: Callable[[int], int], x: int) -> int:
    return f(x)
Mode = Literal["r", "w"]
class User(TypedDict):
    name: str
    age: int
def open_mode(m: Mode) -> str: return m
u: User = {"name": "علی", "age": 20}
print(first([3, 4]), first([], "هیچ"), apply(lambda v: v + 1, 1))
print(get_type_hints(first))
print(get_type_hints(User))
print(first.__annotations__["items"])
def bad(x: int) -> int: return x * 2
print(bad("ab"))            # اجرا می‌شود! hint اجباری نیست""")

add(2,33,"""<p><b>mypy</b> (و pyright) کد را بدون اجرا بررسی می‌کند و ناسازگاری نوع را گزارش می‌دهد. نصب: <code class='inline'>pip install mypy</code> و اجرا: <code class='inline'>mypy src/</code>. پیشنهاد: از <code class='inline'>--strict</code> برای پروژه‌ی جدید و تدریجی برای قدیمی (ماژول‌به‌ماژول) استفاده کن. خطاهای رایج: بازگرداندن <code class='inline'>None</code> جایی که <code class='inline'>str</code> وعده شده، فراموش‌کردن بررسی <code class='inline'>None</code> قبل از استفاده، و افزودن به لیست نوع‌دار با نوع غلط.</p>
<p>در این محیط mypy اجرا نمی‌شود؛ پس همان فرآیند را دستی نشان می‌دهیم: بررسی «None-safety». narrowing یعنی با <code class='inline'>if x is None: return</code> نوع در ادامه دقیق‌تر می‌شود. <code class='inline'>cast</code> و <code class='inline'># type: ignore</code> آخرین راه‌اند و باید دلیل بنویسی.""",
"کد زیر را در mypy بگذار و هر خطا را توضیح بده و اصلاح کن.",
py="""def find_user(users: dict[str, int], name: str) -> int | None:
    return users.get(name)

def age_next_year(users: dict[str, int], name: str) -> int:
    age = find_user(users, name)
    if age is None:                  # narrowing: بعد از این خط age فقط int است
        raise KeyError(name)
    return age + 1

print(age_next_year({"علی": 20}, "علی"))
try:
    age_next_year({}, "نبود")
except KeyError as e:
    print("کاربر پیدا نشد:", e)
print(find_user({}, "x") + 1 if False else "mypy اینجا (age + 1 بدون بررسی None) را رد می‌کرد")""",
extra=code("mypy_demo.py — نمونه‌ی خطا","""def length(s: str | None) -> int:
    return len(s)            # mypy: Argument 1 to "len" has incompatible type "str | None"

def total(xs: list[int]) -> int:
    xs.append("3")           # mypy: Argument 1 to "append" has incompatible type "str"
    return sum(xs)

# اجرا:  mypy --strict mypy_demo.py"""))

add(2,34,"""<p><b>pytest</b> محبوب‌ترین چارچوب تست پایتون است. تست = تابعی که با <code class='inline'>test_</code> شروع می‌شود و با <code class='inline'>assert</code> ساده درستی را می‌سنجد؛ pytest در شکست، مقدار هر دو طرف را نشان می‌دهد. فایل‌ها <code class='inline'>test_*.py</code> و اجرا با <code class='inline'>pytest</code> (<code class='inline'>-x</code> توقف در اولین شکست، <code class='inline'>-k</code> فیلتر نام، <code class='inline'>-v</code> مفصل).</p>
<p>ساختار خوب تست: آماده‌سازی (Arrange)، اجرا (Act)، بررسی (Assert). هر تست یک رفتار؛ نام گویا مثل <code class='inline'>test_withdraw_more_than_balance_raises</code>. برای خطای مورد انتظار <code class='inline'>pytest.raises</code>. برای اعشار <code class='inline'>pytest.approx</code>. در این محیط pytest نصب نیست؛ در پایین یک اجراکننده‌ی کوچک همان ایده را نشان می‌دهد.""",
"برای تابع is_palindrome پنج تست با حالت‌های مرزی (خالی، حروف بزرگ، فاصله) بنویس.",
py="""import traceback
def is_palindrome(s):
    s = "".join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]
def test_simple(): assert is_palindrome("level")
def test_case(): assert is_palindrome("Level")
def test_spaces(): assert is_palindrome("A man a plan a canal Panama")
def test_empty(): assert is_palindrome("")
def test_negative(): assert not is_palindrome("python")
def test_bug_demo(): assert is_palindrome("ab"), "ab پالیندروم نیست"
tests = {k: v for k, v in globals().items() if k.startswith("test_")}
passed = 0
for name, fn in tests.items():
    try:
        fn(); passed += 1; print("PASS", name)
    except AssertionError as e:
        print("FAIL", name, "-", e)
print(f"{passed}/{len(tests)} موفق")""",
extra=code("test_palindrome.py — نسخه‌ی pytest","""import pytest
from mymod import is_palindrome

def test_simple():
    assert is_palindrome("level")

def test_error():
    with pytest.raises(TypeError):
        is_palindrome(None)

def test_float():
    assert 0.1 + 0.2 == pytest.approx(0.3)
# اجرا:  pytest -v"""))

add(2,35,"""<p><b>fixture</b> آماده‌سازی مشترک تست‌هاست (مثل دیتابیس موقت یا شیء نمونه) که با نام به تست تزریق می‌شود: <code class='inline'>@pytest.fixture</code> و پارامتر هم‌نام در تابع تست. با <code class='inline'>yield</code> می‌توان پاک‌سازی بعد از تست گذاشت. دامنه‌ها: <code class='inline'>function</code> (پیش‌فرض)، <code class='inline'>module</code>، <code class='inline'>session</code>. fixtureهای مشترک در <code class='inline'>conftest.py</code>.</p>
<p><b>parametrize</b> یک تست را با ورودی‌های مختلف اجرا می‌کند: <code class='inline'>@pytest.mark.parametrize("a,b,expected", [...])</code>. به‌جای کپی‌کردن ده تست، جدول داده می‌نویسی. fixtureهای آماده: <code class='inline'>tmp_path</code> (پوشه‌ی موقت)، <code class='inline'>monkeypatch</code>، <code class='inline'>capsys</code>.""",
"با parametrize تابع اعتبارسنجی رمز عبور را با ۸ ورودی خوب و بد تست کن.",
py="""# شبیه‌سازی ایده‌ی fixture و parametrize بدون pytest
def make_cart():                       # fixture
    return {"items": [], "total": 0}
def add_item(cart, price):
    cart["items"].append(price); cart["total"] += price
cases = [                              # parametrize
    ([10, 20], 30),
    ([], 0),
    ([5], 5),
    ([1, 2, 3, 4], 10),
]
for prices, expected in cases:
    cart = make_cart()                  # هر تست fixture تازه می‌گیرد
    for p in prices:
        add_item(cart, p)
    status = "OK " if cart["total"] == expected else "BAD"
    print(status, prices, "->", cart["total"], "انتظار", expected)""",
extra=code("test_cart.py","""import pytest

@pytest.fixture
def cart():
    c = Cart()
    yield c            # بعد از تست، پاک‌سازی اینجا
    c.clear()

@pytest.mark.parametrize("prices,expected", [([10, 20], 30), ([], 0), ([5], 5)])
def test_total(cart, prices, expected):
    for p in prices:
        cart.add(p)
    assert cart.total == expected

def test_file(tmp_path):
    f = tmp_path / "a.txt"
    f.write_text("سلام", encoding="utf-8")
    assert f.read_text(encoding="utf-8") == "سلام\""""))

add(2,36,"""<p>تست واحد باید سریع و قطعی باشد؛ پس وابستگی‌های کند یا بیرونی (شبکه، ساعت، دیتابیس واقعی) را با <b>شیء ساختگی</b> جایگزین می‌کنی. <code class='inline'>unittest.mock</code> (استاندارد) <code class='inline'>Mock</code> و <code class='inline'>MagicMock</code> می‌دهد که هر فراخوانی را ثبت می‌کنند، و <code class='inline'>patch</code> نام را موقتاً <b>در جایی که استفاده می‌شود</b> عوض می‌کند (نه جایی که تعریف شده).</p>
<p>می‌توان مقدار برگشتی (<code class='inline'>return_value</code>) یا خطا (<code class='inline'>side_effect</code>) تعیین و فراخوانی‌ها را بررسی کرد: <code class='inline'>assert_called_once_with</code>. هشدار: mock بیش‌ازحد تست را به پیاده‌سازی وصل می‌کند؛ مرز سیستم را mock کن نه منطق خودت را.""",
"سرویس ارسال ایمیل را patch کن و تأیید کن که با آدرس درست یک‌بار صدا زده شده است.",
py="""from unittest.mock import Mock, patch
import time
def send_email(to, body):
    raise RuntimeError("ارسال واقعی!")      # در تست نباید اجرا شود
def register(user, mailer=None):
    mailer = mailer or send_email
    mailer(user["email"], "خوش آمدی")
    return True
m = Mock()
print(register({"email": "a@b.ir"}, mailer=m))
m.assert_called_once_with("a@b.ir", "خوش آمدی")
print(m.call_args, m.call_count)
with patch(f"{__name__}.send_email") as fake:
    fake.return_value = None
    print(register({"email": "c@d.ir"}))
    print(fake.call_args_list)
def fetch(): return 1
with patch(f"{__name__}.fetch", side_effect=[ConnectionError("قطع"), 42]):
    for _ in range(2):
        try: print(fetch())
        except ConnectionError as e: print("خطا:", e)
with patch("time.time", return_value=1000.0):
    print(time.time())""")

add(2,37,"""<p><b>docstring</b> مستندات داخل کد است و با <code class='inline'>help()</code> و ابزارها خوانده می‌شود. سبک‌های رایج: Google، NumPy و reStructuredText. شامل خلاصه‌ی یک‌خطی، توضیح، <code class='inline'>Args</code>، <code class='inline'>Returns</code>، <code class='inline'>Raises</code> و مثال.</p>
<p><code class='inline'>doctest</code> مثال‌های داخل docstring (که با <code class='inline'>&gt;&gt;&gt;</code> شروع می‌شوند) را اجرا و خروجی را تأیید می‌کند: مستندات زنده که کهنه نمی‌شود. با <code class='inline'>python -m doctest -v file.py</code> یا <code class='inline'>doctest.testmod()</code>. برای منطق پیچیده و تست‌های جدی pytest بهتر است؛ doctest برای مثال‌های کوتاه عالی است.""",
"docstring سبک Google و مثال doctest برای تابع slugify بنویس و اجرا کن.",
py="""import doctest, re
def slugify(text):
    \"\"\"متن را به slug مناسب URL تبدیل می‌کند.

    Args:
        text: متن ورودی.

    Returns:
        رشته‌ی کوچک با خط‌تیره.

    >>> slugify("Hello World")
    'hello-world'
    >>> slugify("  Python   3.13! ")
    'python-3-13'
    >>> slugify("")
    ''
    \"\"\"
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
print(doctest.testmod())
help_text = slugify.__doc__.splitlines()[0]
print(help_text)""")

add(2,38,"""<p>کد خوانا فقط به سلیقه نیست؛ ابزار خودکار یکدستی را تضمین می‌کند. <b>black</b> (فرمت‌کننده‌ی بی‌چانه‌زنی) و <b>ruff</b> (بسیار سریع؛ هم lint هم فرمت و جایگزین flake8، isort و چند ابزار دیگر). ruff خطاهای واقعی را می‌گیرد: import بلااستفاده، متغیر تعریف‌نشده، مقایسه‌ی غلط، دام پیش‌فرض تغییرپذیر.</p>
<p>تنظیم در <code class='inline'>pyproject.toml</code>. ابزار را در <b>pre-commit</b> و <b>CI</b> بگذار تا کد نامنظم وارد مخزن نشود. اجرا: <code class='inline'>ruff check .</code> و <code class='inline'>ruff format .</code>. در این محیط نصب نیستند، پس فایده را با ابزار داخلی <code class='inline'>ast</code> نشان می‌دهیم: فرمت کد معنی را عوض نمی‌کند.""",
"pre-commit را با ruff و black در پروژه‌ات تنظیم کن و یک commit بد را رد کن.",
py="""import ast
ugly = "def f( a,b ):\\n  x=a+ b\\n  return(x)"
pretty = '''def f(a, b):
    x = a + b
    return x'''
print(ast.dump(ast.parse(ugly)) == ast.dump(ast.parse(pretty)))
print(pretty)
# یک lint ساده: import بلااستفاده را با ast پیدا کن
src = "import os\\nimport sys\\nprint(sys.argv)"
tree = ast.parse(src)
imported = {a.asname or a.name for n in ast.walk(tree) if isinstance(n, ast.Import) for a in n.names}
used = {n.id for n in ast.walk(tree) if isinstance(n, ast.Name)}
print("بلااستفاده:", imported - used)""",
extra=code("pyproject.toml","""[tool.ruff]
line-length = 88
target-version = "py312"

[tool.ruff.lint]
select = ["E", "F", "I", "B", "UP"]   # خطا، pyflakes، ترتیب import، bugbear، مدرن‌سازی

[tool.black]
line-length = 88"""))

add(2,39,"""<p>ساختار استاندارد یک پروژه‌ی پایتون (چیدمان <b>src</b>):</p>
<ul><li><code class='inline'>src/mypkg/</code> کد اصلی با <code class='inline'>__init__.py</code></li><li><code class='inline'>tests/</code> تست‌ها</li><li><code class='inline'>pyproject.toml</code> تنظیمات و وابستگی‌ها</li><li><code class='inline'>README.md</code>، <code class='inline'>.gitignore</code>، <code class='inline'>LICENSE</code></li></ul>
<p>چیدمان src از import تصادفی کد نصب‌نشده جلوگیری می‌کند و تست‌ها همان چیزی را می‌آزمایند که منتشر می‌شود. در <code class='inline'>__init__.py</code> API عمومی را با <code class='inline'>__all__</code> مشخص کن. importهای <b>نسبی</b> (<code class='inline'>from .utils import x</code>) داخل بسته و <b>مطلق</b> برای بیرون. برای اجرای ماژول از <code class='inline'>python -m mypkg</code> و فایل <code class='inline'>__main__.py</code> استفاده کن.""",
"ساختار بالا را برای یک پروژه‌ی کوچک بساز و با pip install -e . نصب کن.",
py="""from pathlib import Path
import tempfile
root = Path(tempfile.mkdtemp()) / "mytool"
files = {
    "pyproject.toml": "[project]\\nname = 'mytool'\\nversion = '0.1.0'\\n",
    "README.md": "# mytool\\n",
    "src/mytool/__init__.py": "from .core import greet\\n__all__ = ['greet']\\n",
    "src/mytool/core.py": "def greet(n):\\n    return f'سلام {n}'\\n",
    "src/mytool/__main__.py": "from . import greet\\nprint(greet('دنیا'))\\n",
    "tests/test_core.py": "from mytool import greet\\n\\ndef test_greet():\\n    assert greet('x') == 'سلام x'\\n",
}
for rel, content in files.items():
    p = root / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")
for p in sorted(root.rglob("*")):
    if p.is_file():
        print(p.relative_to(root))""")

add(2,40,"""<p><code class='inline'>pyproject.toml</code> استاندارد امروز برای متادیتا و وابستگی‌هاست (جایگزین setup.py و requirements پراکنده). بخش <code class='inline'>[project]</code>: نام، نسخه، <code class='inline'>requires-python</code>، <code class='inline'>dependencies</code>، <code class='inline'>[project.optional-dependencies]</code> (مثلاً dev) و <code class='inline'>[project.scripts]</code> برای ساخت فرمان.</p>
<p>مشخصات نسخه: <code class='inline'>requests&gt;=2.31,&lt;3</code>. برای <b>بازتولیدپذیری</b> فایل قفل (lock) لازم است: ابزارهای <code class='inline'>uv</code>، <code class='inline'>poetry</code> یا <code class='inline'>pip-tools</code>. <code class='inline'>uv</code> بسیار سریع است و محیط، نصب و lock را یکجا می‌دهد (<code class='inline'>uv add</code>، <code class='inline'>uv sync</code>، <code class='inline'>uv run</code>). برای کتابخانه محدوده‌ی نرم و برای برنامه نسخه‌ی قفل‌شده.""",
"pyproject یک ابزار CLI بنویس که با نصب، فرمان mytool را بسازد.",
py="""import tomllib
doc = '''
[project]
name = "mytool"
version = "0.1.0"
requires-python = ">=3.10"
dependencies = ["requests>=2.31,<3", "rich"]

[project.optional-dependencies]
dev = ["pytest", "ruff"]

[project.scripts]
mytool = "mytool.cli:main"
'''
cfg = tomllib.loads(doc)
p = cfg["project"]
print(p["name"], p["version"], p["requires-python"])
print(p["dependencies"], p["optional-dependencies"]["dev"])
print(p["scripts"])
import re
for dep in p["dependencies"]:
    m = re.match(r"([A-Za-z0-9_.-]+)(.*)", dep)
    print(f"{m[1]:10} قید: {m[2] or 'هر نسخه'}")""")

add(2,41,"""<p>ماژول <code class='inline'>sqlite3</code> دیتابیس SQL کامل داخل یک فایل (یا حافظه با <code class='inline'>:memory:</code>) بدون نصب سرور می‌دهد؛ برای برنامه‌های کوچک، تست و ابزارهای محلی عالی است. مراحل: <code class='inline'>connect</code> → <code class='inline'>cursor/execute</code> → <code class='inline'>commit</code> → <code class='inline'>close</code>. <code class='inline'>with conn:</code> تراکنش را خودکار commit یا rollback می‌کند.</p>
<p><b>امنیت</b>: هرگز SQL را با f-string نساز (SQL Injection). همیشه پارامتر <code class='inline'>?</code> بده: <code class='inline'>execute("... WHERE id = ?", (id,))</code>. <code class='inline'>conn.row_factory = sqlite3.Row</code> دسترسی با نام ستون می‌دهد. <code class='inline'>executemany</code> برای درج انبوه و <code class='inline'>CREATE INDEX</code> برای سرعت.""",
"جدول کاربران با ایمیل یکتا بساز و درج ایمیل تکراری را با IntegrityError مدیریت کن.",
py="""import sqlite3
conn = sqlite3.connect(":memory:")
conn.row_factory = sqlite3.Row
conn.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE)")
with conn:
    conn.executemany("INSERT INTO users (name, email) VALUES (?, ?)",
                     [("علی", "a@x.ir"), ("سارا", "s@x.ir")])
for r in conn.execute("SELECT * FROM users ORDER BY name"):
    print(r["id"], r["name"], r["email"])
try:
    with conn:
        conn.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("تکراری", "a@x.ir"))
except sqlite3.IntegrityError as e:
    print("خطا:", e)
evil = "x' OR '1'='1"
rows = conn.execute("SELECT * FROM users WHERE name = ?", (evil,)).fetchall()
print("با پارامتر امن:", len(rows))
print("با f-string:", len(conn.execute(f"SELECT * FROM users WHERE name = '{evil}'").fetchall()), "← تزریق!")
conn.close()""")

add(2,42,"""<p><b>ORM</b> جدول‌ها را به کلاس و ردیف‌ها را به شیء نگاشت می‌کند. <b>SQLAlchemy</b> قوی‌ترین ORM پایتون است (نسخه‌ی ۲ با سبک نوع‌دار): مدل با <code class='inline'>DeclarativeBase</code> و <code class='inline'>Mapped[...]</code>، <code class='inline'>Session</code> برای کار با شیءها، و <code class='inline'>select()</code> برای پرس‌وجو. مزیت: کد مستقل از دیتابیس، رابطه‌ها (<code class='inline'>relationship</code>)، مهاجرت با Alembic.</p>
<p>هشدارها: مشکل <b>N+1</b> (بارگذاری تنبل رابطه‌ها در حلقه) را با <code class='inline'>selectinload/joinedload</code> حل کن؛ ORM جای دانستن SQL را نمی‌گیرد. در این محیط SQLAlchemy نصب نیست؛ همین ایده را با یک نگاشت‌گر ساده روی sqlite3 نشان می‌دهیم و کد واقعی SQLAlchemy را در بلوک زیر می‌بینی (اجرا نشده).""",
"مدل Author و Book با رابطه‌ی یک‌به‌چند در SQLAlchemy بنویس و مشکل N+1 را با selectinload حل کن.",
py="""import sqlite3
class Model:
    table = ""
    fields = ()
    def __init__(self, **kw):
        for f in self.fields: setattr(self, f, kw.get(f))
    @classmethod
    def create_table(cls, conn):
        cols = ", ".join(f"{f} TEXT" for f in cls.fields)
        conn.execute(f"CREATE TABLE {cls.table} (id INTEGER PRIMARY KEY, {cols})")
    def save(self, conn):
        q = ",".join("?" * len(self.fields))
        cur = conn.execute(f"INSERT INTO {self.table} ({','.join(self.fields)}) VALUES ({q})",
                           [getattr(self, f) for f in self.fields])
        self.id = cur.lastrowid
        return self
    @classmethod
    def all(cls, conn):
        rows = conn.execute(f"SELECT {','.join(cls.fields)} FROM {cls.table}").fetchall()
        return [cls(**dict(zip(cls.fields, r))) for r in rows]
class Book(Model):
    table, fields = "books", ("title", "author")
conn = sqlite3.connect(":memory:")
Book.create_table(conn)
Book(title="شاهنامه", author="فردوسی").save(conn)
Book(title="گلستان", author="سعدی").save(conn)
print([(b.title, b.author) for b in Book.all(conn)])""",
extra=code("SQLAlchemy 2.x (اجرا نشده در این محیط)","""from sqlalchemy import ForeignKey, create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, Session, selectinload

class Base(DeclarativeBase): pass

class Author(Base):
    __tablename__ = "authors"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    books: Mapped[list["Book"]] = relationship(back_populates="author")

class Book(Base):
    __tablename__ = "books"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str]
    author_id: Mapped[int] = mapped_column(ForeignKey("authors.id"))
    author: Mapped[Author] = relationship(back_populates="books")

engine = create_engine("sqlite:///:memory:")
Base.metadata.create_all(engine)
with Session(engine) as s:
    s.add(Author(name="سعدی", books=[Book(title="گلستان")]))
    s.commit()
    stmt = select(Author).options(selectinload(Author.books))   # بدون N+1
    for a in s.scalars(stmt):
        print(a.name, [b.title for b in a.books])"""))

add(2,43,"""<p>کتابخانه‌ی <code class='inline'>requests</code> (و جدیدتر <code class='inline'>httpx</code>) HTTP را ساده می‌کند: <code class='inline'>requests.get(url, params=..., headers=..., timeout=10)</code>. پاسخ: <code class='inline'>r.status_code</code>، <code class='inline'>r.json()</code>، <code class='inline'>r.text</code>، <code class='inline'>r.headers</code>. <b>همیشه timeout بده</b> (پیش‌فرض بی‌نهایت است و برنامه گیر می‌کند) و <code class='inline'>r.raise_for_status()</code> برای خطاهای ۴xx/۵xx.</p>
<p>برای چند درخواست پشت‌سرهم <code class='inline'>requests.Session()</code> اتصال و کوکی را نگه می‌دارد و سریع‌تر است. شبکه خراب می‌شود: <code class='inline'>ConnectionError</code>، <code class='inline'>Timeout</code> را مدیریت و برای خطاهای گذرا retry با backoff بگذار. این محیط مرورگر شبکه‌ی آزاد ندارد؛ پس منطق ساخت URL و پردازش پاسخ را با داده‌ی نمونه تمرین می‌کنیم.""",
"تابعی بنویس که API هوا را صدا بزند، خطاها را مدیریت و دما را برگرداند (با Mock تست کن).",
py="""from urllib.parse import urlencode, urlparse, parse_qs
import json
base = "https://api.example.com/v1/search"
url = base + "?" + urlencode({"q": "پایتون", "page": 2, "tags": ["a", "b"]}, doseq=True)
print(url)
u = urlparse(url)
print(u.scheme, u.netloc, u.path, parse_qs(u.query))
class FakeResponse:
    def __init__(self, status, body): self.status_code, self._b = status, body
    def json(self): return json.loads(self._b)
    def raise_for_status(self):
        if self.status_code >= 400: raise RuntimeError(f"HTTP {self.status_code}")
def parse(resp):
    resp.raise_for_status()
    return [i["title"] for i in resp.json()["items"]]
print(parse(FakeResponse(200, '{"items": [{"title": "الف"}, {"title": "ب"}]}')))
try:
    parse(FakeResponse(503, "{}"))
except RuntimeError as e:
    print("خطا:", e)""",
extra=code("requests (اجرا نشده)","""import requests

with requests.Session() as s:
    s.headers["User-Agent"] = "mytool/0.1"
    r = s.get("https://api.example.com/v1/search",
              params={"q": "پایتون"}, timeout=10)
    r.raise_for_status()
    for item in r.json()["items"]:
        print(item["title"])"""))

add(2,44,"""<p><b>اسکرپینگ</b> یعنی استخراج داده از صفحه‌ی وب. <b>اخلاق و قانون</b> اول: <code class='inline'>robots.txt</code> و شرایط استفاده را بخوان، سرعت را محدود کن، شناسه‌ی واقعی (User-Agent) بگذار، داده‌ی شخصی را جمع نکن و اگر API رسمی هست از آن استفاده کن. کپی‌رایت و قوانین حریم خصوصی کشورها فرق دارد.</p>
<p>فنی: HTML را با <code class='inline'>BeautifulSoup</code> (بیرونی) یا <code class='inline'>html.parser</code> داخلی تجزیه کن، نه regex. selectorها (CSS) پایدارتر از ساختار ترتیبی‌اند. صفحاتی که با JavaScript ساخته می‌شوند به مرورگر بی‌سر (Playwright) نیاز دارند. ساختار صفحه تغییر می‌کند؛ کد را تحمل‌پذیر و تست‌شده بنویس.""",
"از متن HTML نمونه، عنوان‌ها و لینک‌ها را استخراج کن و آدرس‌های نسبی را مطلق کن.",
py="""from html.parser import HTMLParser
from urllib.parse import urljoin
html = '''<html><body><h1>اخبار</h1>
<div class="item"><a href="/n/1">خبر اول</a></div>
<div class="item"><a href="https://other.org/x">خبر دوم</a></div></body></html>'''
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.links = []; self._href = None; self.titles = []; self._h = False
    def handle_starttag(self, tag, attrs):
        if tag == "a": self._href = dict(attrs).get("href")
        if tag == "h1": self._h = True
    def handle_endtag(self, tag):
        if tag == "a": self._href = None
        if tag == "h1": self._h = False
    def handle_data(self, data):
        if self._href: self.links.append((data.strip(), self._href))
        if self._h: self.titles.append(data)
p = Links(); p.feed(html)
print(p.titles)
for text, href in p.links:
    print(text, "->", urljoin("https://news.example.com/", href))""")

add(2,45,"""<p>API‌های واقعی محدودیت نرخ دارند (مثلاً ۶۰ درخواست در دقیقه) و در صورت تجاوز <code class='inline'>429 Too Many Requests</code> می‌دهند. راهبرد درست: ۱) احترام به هدر <code class='inline'>Retry-After</code>، ۲) <b>backoff نمایی</b> (۱، ۲، ۴، ۸ ثانیه + jitter تصادفی) برای تلاش مجدد، ۳) محدودکننده‌ی سمت خودت.</p>
<p>الگوریتم‌های محدودکننده: <b>Token Bucket</b> (سطل توکن با پرکردن ثابت؛ اجازه‌ی انفجار کوچک) و Sliding Window. کار با API: احراز هویت (کلید، Bearer توکن)، صفحه‌بندی (page یا cursor)، idempotency برای تلاش مجدد امن. کلید را در متغیر محیطی نگه دار نه در کد.""",
"محدودکننده‌ی توکن‌سطلی بنویس که با ساعت قابل‌تزریق (برای تست) کار کند.",
py="""import random
class TokenBucket:
    def __init__(self, rate, capacity, clock):
        self.rate, self.capacity, self.clock = rate, capacity, clock
        self.tokens, self.last = capacity, clock()
    def allow(self):
        now = self.clock()
        self.tokens = min(self.capacity, self.tokens + (now - self.last) * self.rate)
        self.last = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
t = [0.0]
bucket = TokenBucket(rate=2, capacity=3, clock=lambda: t[0])
print([bucket.allow() for _ in range(5)])      # ۳ اول مجاز
t[0] = 1.0                                       # یک ثانیه بعد: ۲ توکن
print([bucket.allow() for _ in range(3)])
def backoff(attempt, base=1, cap=30):
    return min(cap, base * 2 ** attempt) * random.uniform(0.5, 1.0)
random.seed(0)
print([round(backoff(a), 2) for a in range(6)])""")

add(2,46,"""<p>تنظیمات برنامه (آدرس دیتابیس، حالت debug، کلیدها) نباید داخل کد باشد؛ بین محیط‌ها (توسعه/تولید) فرق دارد و باید بدون تغییر کد عوض شود: اصل <b>۱۲-Factor</b>. روش استاندارد <b>متغیر محیطی</b> است: <code class='inline'>os.environ["KEY"]</code> یا ایمن <code class='inline'>os.getenv("KEY", default)</code>.</p>
<p>در توسعه فایل <code class='inline'>.env</code> (که <b>هرگز commit نمی‌شود</b>؛ در .gitignore) با کتابخانه‌ی <code class='inline'>python-dotenv</code> یا <code class='inline'>pydantic-settings</code> بارگذاری می‌شود. اعتبارسنجی در شروع برنامه (fail fast) بهتر از خطای نیمه‌شب است. مقادیر متغیر محیطی همیشه رشته‌اند؛ تبدیل نوع (<code class='inline'>int</code>، bool) با خودت.""",
"کلاس Settings بنویس که متغیرهای محیطی را بخواند، نوع را تبدیل و در نبود مقدار الزامی خطا بدهد.",
py="""import os
os.environ["APP_DEBUG"] = "true"
os.environ["APP_PORT"] = "8080"
def env_bool(name, default=False):
    v = os.getenv(name)
    return default if v is None else v.strip().lower() in {"1", "true", "yes", "on"}
class Settings:
    def __init__(self):
        self.debug = env_bool("APP_DEBUG")
        self.port = int(os.getenv("APP_PORT", "8000"))
        self.db_url = os.getenv("DATABASE_URL")
        if self.db_url is None:
            raise RuntimeError("DATABASE_URL تنظیم نشده است")
try:
    Settings()
except RuntimeError as e:
    print("fail fast:", e)
os.environ["DATABASE_URL"] = "sqlite:///app.db"
s = Settings()
print(s.debug, s.port, type(s.port).__name__, s.db_url)
print(os.getenv("NOT_SET"), os.getenv("NOT_SET", "پیش‌فرض"))""")

add(2,47,"""<p><b>رمز و راز</b> (کلید API، رمز دیتابیس، توکن) هرگز در کد، لاگ، Git یا پیام خطا نباید باشد. اگر یک بار commit شد، باید <b>باطل و عوض</b> شود (حذف از تاریخچه کافی نیست). مدیریت: متغیر محیطی، فایل .env محلی، و در تولید سرویس مدیریت رازها (Vault، AWS/GCP Secret Manager).</p>
<p>برای تولید تصادفی امن از <code class='inline'>secrets</code> استفاده کن نه <code class='inline'>random</code> (قابل‌پیش‌بینی است). رمز کاربران را <b>هرگز</b> ساده یا با MD5/SHA ساده ذخیره نکن: از <code class='inline'>argon2</code>، <code class='inline'>bcrypt</code> یا <code class='inline'>hashlib.scrypt/pbkdf2_hmac</code> با salt. مقایسه‌ی توکن‌ها با <code class='inline'>hmac.compare_digest</code> (ایمن در برابر حمله‌ی زمانی).""",
"ذخیره و تأیید رمز عبور با pbkdf2 و salt تصادفی را پیاده کن.",
py="""import secrets, hashlib, hmac
print(len(secrets.token_urlsafe(32)) > 30, secrets.token_hex(8) != secrets.token_hex(8))
def hash_password(pw, salt=None, iters=200_000):
    salt = salt or secrets.token_bytes(16)
    dk = hashlib.pbkdf2_hmac("sha256", pw.encode(), salt, iters)
    return f"{iters}${salt.hex()}${dk.hex()}"
def verify(pw, stored):
    iters, salt, dk = stored.split("$")
    new = hashlib.pbkdf2_hmac("sha256", pw.encode(), bytes.fromhex(salt), int(iters))
    return hmac.compare_digest(new.hex(), dk)
h1 = hash_password("رمز-قوی-123")
h2 = hash_password("رمز-قوی-123")
print(h1 != h2, "← salt متفاوت")
print(verify("رمز-قوی-123", h1), verify("اشتباه", h1))
def mask(key): return key[:4] + "*" * (len(key) - 4)
print(mask("sk_live_ABCDEFGH12345678"))""")

add(2,48,"""<p>اجرای زمان‌بندی‌شده: در لینوکس <b>cron</b> (فرمت <code class='inline'>دقیقه ساعت روز ماه روزهفته دستور</code>، مثل <code class='inline'>0 3 * * *</code> هر شب ۳ بامداد) و در ویندوز Task Scheduler. در پایتون: ماژول <code class='inline'>sched</code> (ساده)، حلقه‌ی <code class='inline'>time.sleep</code> (خام)، یا کتابخانه‌هایی مثل <code class='inline'>APScheduler</code>، و برای سیستم‌های بزرگ‌تر Celery Beat / Airflow.</p>
<p>قواعد کار زمان‌بندی‌شده: <b>idempotent</b> باشد (اجرای دوباره آسیب نزند)، قفل برای جلوگیری از اجرای همزمان دو نمونه، لاگ و هشدار شکست، منطقه‌ی زمانی صریح (UTC)، و فکر به اتفاقی که اگر اجرا از دست برود. cron وقتی ماشین خاموش بود اجرا را جبران نمی‌کند.""",
"تابعی بنویس که زمان اجرای بعدی یک کار «هر روز ساعت X» را از زمان فعلی حساب کند.",
py="""import sched, time
from datetime import datetime, timedelta
clock = [0.0]
def fake_sleep(d): clock[0] += d                 # ساعت ساختگی: بدون انتظار واقعی
s = sched.scheduler(timefunc=lambda: clock[0], delayfunc=fake_sleep)
log = []
s.enter(5, 1, lambda: log.append("کار ۲ (۵ثانیه)"))
s.enter(1, 1, lambda: log.append("کار ۱ (۱ثانیه)"))
s.run()
print(log)
def next_daily(now, hour, minute=0):
    t = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    return t if t > now else t + timedelta(days=1)
now = datetime(2026, 10, 18, 14, 30)
print(next_daily(now, 3), next_daily(now, 16, 45))
def lock_demo():
    running = set()
    def run(job):
        if job in running:
            return "رد شد: هنوز در حال اجرا"
        running.add(job)
        try: return "اجرا شد"
        finally: running.discard(job)
    return run
run = lock_demo(); print(run("backup"))""",
extra=code("crontab","""# دقیقه ساعت روز-ماه ماه روز-هفته  دستور
0 3 * * *   /usr/bin/python3 /opt/app/backup.py >> /var/log/backup.log 2>&1
*/15 * * * * /opt/app/venv/bin/python /opt/app/sync.py
# قفل ساده برای جلوگیری از اجرای هم‌زمان:
*/5 * * * * flock -n /tmp/job.lock /opt/app/job.sh"""))

add(2,49,"""<p><code class='inline'>subprocess</code> برنامه‌های بیرونی را اجرا می‌کند. روش مدرن: <code class='inline'>subprocess.run([...], capture_output=True, text=True, check=True, timeout=...)</code>. دستور را <b>لیست</b> بده نه رشته‌ی کامل. <code class='inline'>shell=True</code> با ورودی کاربر یعنی <b>تزریق دستور</b> (command injection): <code class='inline'>"ls " + user_input</code> می‌تواند <code class='inline'>; rm -rf /</code> اجرا کند.</p>
<p>نتیجه: <code class='inline'>returncode</code>، <code class='inline'>stdout</code>، <code class='inline'>stderr</code>. <code class='inline'>check=True</code> در خطا <code class='inline'>CalledProcessError</code> می‌دهد. <code class='inline'>shlex.split</code> رشته را درست به لیست می‌شکند و <code class='inline'>shlex.quote</code> برای موارد ناگزیر. در محیط مرورگر (Pyodide) اجرای فرایند ممکن نیست؛ کد با try/except این را نشان می‌دهد و در سیستم خودت کار می‌کند.""",
"تابعی بنویس که git status را اجرا کند و تعداد فایل‌های تغییرکرده را برگرداند، با خطای ناموجود بودن git.",
py="""import shlex, sys
print(shlex.split('git commit -m "پیام با فاصله"'))
print(shlex.quote("a b; rm -rf /"))
try:
    import subprocess
    r = subprocess.run([sys.executable, "-c", "print('سلام از فرایند فرزند')"],
                       capture_output=True, text=True, check=True, timeout=10)
    print(r.stdout.strip(), r.returncode)
    r = subprocess.run([sys.executable, "-c", "import sys; sys.exit(3)"])
    print("کد خروج:", r.returncode)
    try:
        subprocess.run([sys.executable, "-c", "raise SystemExit(1)"], check=True)
    except subprocess.CalledProcessError as e:
        print("CalledProcessError:", e.returncode)
except (ImportError, OSError, NotImplementedError) as e:
    print("اجرای فرایند در این محیط پشتیبانی نمی‌شود:", type(e).__name__)""")

add(2,50,"""<p>پروژه‌ی پایان سطح ۲: <b>ابزار CLI مدیریت وظایف</b> (todo). همه‌ی سطح ۲ را با هم به کار می‌گیری: کلاس و dataclass، Enum برای وضعیت، argparse با زیردستور، ذخیره در JSON (یا sqlite)، logging، type hint، تست با pytest و ساختار بسته با pyproject.</p>
<p><b>قابلیت‌ها</b>: <code class='inline'>add</code>، <code class='inline'>list --status</code>، <code class='inline'>done ID</code>، <code class='inline'>delete ID</code>. <b>معیار کیفیت</b>: هیچ داده‌ای با خطا از بین نرود (نوشتن اتمیک فایل)، پیام خطای انسانی، بدون متغیر سراسری، تست برای منطق اصلی و <code class='inline'>main(argv)</code> قابل‌تست. نمونه‌ی مرجع (هسته) را ببین و بقیه را خودت کامل کن.""",
"قابلیت due (موعد) و فیلتر کارهای عقب‌افتاده را اضافه کن و برای آن تست بنویس.",
py="""import argparse, json, tempfile
from dataclasses import dataclass, asdict
from enum import Enum
from pathlib import Path

class Status(str, Enum):
    TODO = "todo"
    DONE = "done"

@dataclass
class Task:
    id: int
    title: str
    status: Status = Status.TODO

class Store:
    def __init__(self, path: Path):
        self.path = path
    def load(self) -> list[Task]:
        if not self.path.exists():
            return []
        return [Task(d["id"], d["title"], Status(d["status"])) for d in json.loads(self.path.read_text("utf-8"))]
    def save(self, tasks: list[Task]) -> None:
        tmp = self.path.with_suffix(".tmp")           # نوشتن اتمیک
        tmp.write_text(json.dumps([asdict(t) for t in tasks], ensure_ascii=False, default=lambda o: o.value), "utf-8")
        tmp.replace(self.path)

def main(argv, store):
    p = argparse.ArgumentParser(prog="todo")
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("add").add_argument("title")
    sub.add_parser("list")
    sub.add_parser("done").add_argument("id", type=int)
    a = p.parse_args(argv)
    tasks = store.load()
    if a.cmd == "add":
        tasks.append(Task(max((t.id for t in tasks), default=0) + 1, a.title))
        print("افزوده شد")
    elif a.cmd == "done":
        t = next((t for t in tasks if t.id == a.id), None)
        if t is None:
            print("پیدا نشد"); return 1
        t.status = Status.DONE
    store.save(tasks)
    if a.cmd == "list":
        for t in tasks:
            print(f"[{'x' if t.status is Status.DONE else ' '}] {t.id} {t.title}")
    return 0

store = Store(Path(tempfile.mkdtemp()) / "tasks.json")
for cmd in (["add", "خرید"], ["add", "ورزش"], ["done", "1"], ["done", "9"], ["list"]):
    main(cmd, store)""")

QUIZ={2:[
 quiz("اولین پارامتر متد نمونه‌ای چیست؟",["cls","self","this","obj"],1,"self خود شیء است و پایتون خودکار پاسش می‌دهد."),
 quiz("کدام دکوراتور متدی می‌سازد که به کلاس (نه نمونه) دسترسی دارد؟",["@staticmethod","@property","@classmethod","@abstractmethod"],2,"classmethod اولین پارامتر cls می‌گیرد؛ برای سازنده‌های جایگزین مناسب است."),
 quiz("چرا @functools.wraps در decorator مهم است؟",["سرعت را زیاد می‌کند","نام و docstring تابع اصلی را حفظ می‌کند","خطا را می‌گیرد","هیچ فرقی نمی‌کند"],1,"بدون آن همه‌ی توابع تزیین‌شده نام wrapper می‌گیرند و دیباگ سخت می‌شود."),
 quiz("generator در مقایسه با لیست چه مزیتی دارد؟",["همیشه سریع‌تر است","مقدارها را تنبل تولید می‌کند و حافظه‌ی کم می‌گیرد","می‌توان چندبار پیمایش کرد","اندیس‌دهی می‌دهد"],1,"generator یک‌بار مصرف است و هر مقدار را در لحظه‌ی نیاز می‌سازد."),
 quiz("بهترین راه تولید توکن امن کدام است؟",["random.random()","secrets.token_urlsafe()","time.time()","hash(name)"],1,"ماژول secrets برای تصادفی‌بودن مناسب امنیت ساخته شده است."),
 quiz("چرا SQL را با f-string نمی‌سازیم؟",["کند است","خطر SQL Injection دارد","فارسی پشتیبانی نمی‌شود","نمی‌شود"],1,"باید پارامتر ? بدهی تا ورودی هرگز به‌عنوان کد SQL تفسیر نشود."),
 quiz("منطقه‌ی زمانی در ذخیره‌ی زمان بهتر است چه باشد؟",["محلی کاربر","UTC","هر چه سرور دارد","بدون منطقه (naive)"],1,"در UTC ذخیره کن و فقط هنگام نمایش تبدیل کن."),
 quiz("ABC با @abstractmethod چه می‌کند؟",["متد را حذف می‌کند","ساخت شیء از زیرکلاسِ ناقص را با TypeError رد می‌کند","سرعت را زیاد می‌کند","وراثت را ممنوع می‌کند"],1,"قرارداد را اجبار می‌کند؛ باید همه‌ی متدهای انتزاعی پیاده شوند."),
]}
CHALLENGE={2:{"task":"کلاس LRUCache(capacity) بنویس با متدهای get(key) و put(key, value) که وقتی ظرفیت پر شد کمتر اخیراً استفاده‌شده را حذف کند. از collections.OrderedDict یا dict استفاده کن و بدون lru_cache آماده.",
 "hint1":"دیکشنری پایتون ترتیب درج را نگه می‌دارد؛ هر بار get یا put، کلید را به «انتها» ببر (حذف و درج دوباره یا move_to_end در OrderedDict).",
 "hint2":"در put اگر طول از ظرفیت بیشتر شد، اولین کلید (قدیمی‌ترین) را پاک کن: next(iter(d)) یا popitem(last=False).",
 "solution":"from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.d = OrderedDict()\n    def get(self, key, default=None):\n        if key not in self.d:\n            return default\n        self.d.move_to_end(key)\n        return self.d[key]\n    def put(self, key, value):\n        self.d[key] = value\n        self.d.move_to_end(key)\n        if len(self.d) > self.cap:\n            self.d.popitem(last=False)\n\nc = LRUCache(2)\nc.put('a', 1); c.put('b', 2)\nc.get('a')\nc.put('c', 3)\nprint(list(c.d))   # ['a', 'c']"}}
