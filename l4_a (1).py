import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(4,1,"""<p>وقتی <code class='inline'>python file.py</code> می‌زنی CPython چهار مرحله را طی می‌کند: ۱) <b>tokenize</b> (شکستن متن به توکن)، ۲) <b>parse</b> (ساخت درخت نحو انتزاعی AST؛ از ۳٫۹ با پارسر PEG)، ۳) <b>compile</b> (تبدیل AST به <b>بایت‌کد</b> داخل یک code object) و ۴) <b>اجرا</b> توسط ماشین مجازی پشته‌ای (حلقه‌ی eval). فایل‌های <code class='inline'>.pyc</code> در <code class='inline'>__pycache__</code> همان بایت‌کد کش‌شده‌اند (فقط ماژول‌های import‌شده، نه اسکریپت اصلی).</p>
<p>پایتون «تفسیری» است ولی نه به معنای خط‌به‌خط؛ ابتدا کل ماژول کامپایل می‌شود (پس SyntaxError قبل از اجرای هر خطی می‌آید). همین مراحل با ماژول‌های <code class='inline'>tokenize</code>، <code class='inline'>ast</code>، <code class='inline'>compile()</code> و <code class='inline'>exec()</code> در دسترس‌اند. این پایه‌ی ابزارهایی مثل linter، فرمت‌کننده و فریم‌ورک‌های تست است.""",
"سه مرحله را روی عبارت x = 2 + 3 * 4 اجرا کن و خروجی هر مرحله را توضیح بده.",
py="""import tokenize, io, ast, dis
src = "x = 2 + 3 * 4"
tokens = [(tokenize.tok_name[t.type], t.string) for t in tokenize.generate_tokens(io.StringIO(src).readline) if t.string.strip()]
print(tokens)
tree = ast.parse(src)
print(ast.dump(tree.body[0], indent=1)[:200].replace("\\n", " "))
code = compile(tree, "<demo>", "exec")
print(type(code).__name__, code.co_names, code.co_consts)
ns = {}
exec(code, ns)
print(ns["x"])
try:
    compile("def f(:", "<bad>", "exec")
except SyntaxError as e:
    print("SyntaxError قبل از هر اجرایی:", e.msg)""")

add(4,2,"""<p>ماژول <code class='inline'>dis</code> بایت‌کد را نشان می‌دهد. هر دستور: شماره‌ی خط، offset، <b>opcode</b> و آرگومان. ماشین مجازی پشته‌ای است: <code class='inline'>LOAD_FAST x</code> مقدار را روی پشته می‌گذارد، <code class='inline'>BINARY_OP +</code> دو بالایی را برمی‌دارد و نتیجه را می‌گذارد، <code class='inline'>RETURN_VALUE</code> پایان. مهم‌ترین دسته‌ها: LOAD/STORE (FAST محلی، GLOBAL، DEREF closure)، CALL، JUMP، COMPARE_OP، FOR_ITER.</p>
<p>کاربرد: فهمیدن واقعی هزینه‌ها (چرا متغیر محلی از سراسری سریع‌تر است: <code class='inline'>LOAD_FAST</code> اندیس آرایه و <code class='inline'>LOAD_GLOBAL</code> جست‌وجوی dict)، تفاوت دو سبک کد، و درک رفتار مثل ترتیب ارزیابی. بایت‌کد جزئی از <b>پیاده‌سازی</b> است و بین نسخه‌ها تغییر می‌کند؛ هرگز به آن در منطق برنامه تکیه نکن.""",
"دو پیاده‌سازی یک تابع (حلقه‌ی for در برابر sum) را disassemble کن و تعداد دستورها را مقایسه کن.",
py="""import dis
def add(a, b):
    c = a + b
    return c * 2
ops = [i.opname for i in dis.get_instructions(add)]
print(ops)
G = 10
def use_global(): return G + 1
def use_local(g=10): return g + 1
print([i.opname for i in dis.get_instructions(use_global) if "LOAD" in i.opname])
print([i.opname for i in dis.get_instructions(use_local) if "LOAD" in i.opname])
def loop(n):
    t = 0
    for i in range(n): t += i
    return t
def builtin(n): return sum(range(n))
print(len(list(dis.get_instructions(loop))), len(list(dis.get_instructions(builtin))))
print(add.__code__.co_varnames, add.__code__.co_stacksize, add.__code__.co_code[:4])""")

add(4,3,"""<p>هر فراخوانی تابع یک <b>frame</b> (قاب) می‌سازد: متغیرهای محلی، پشته‌ی مقادیر، و اشاره‌گر به frame صدازننده. این‌ها <b>call stack</b> را می‌سازند و Traceback همان زنجیره‌ی frameهاست. دسترسی: <code class='inline'>sys._getframe(n)</code>، <code class='inline'>inspect.currentframe()</code>، <code class='inline'>inspect.stack()</code>، و ویژگی‌های <code class='inline'>f_locals f_globals f_lineno f_code f_back</code>.</p>
<p>کاربرد حرفه‌ای: دیباگرها، <code class='inline'>logging</code> (یافتن نام فایل/تابع فراخوان)، <code class='inline'>pytest</code> (بازنویسی assert)، و ابزارهای dataclass/attrs. در پایتون ≥۳٫۱۱ frameها «تنبل»اند و فراخوانی‌های پایتون-به-پایتون پشته‌ی C را مصرف نمی‌کنند (به همین دلیل سریع‌تر شد). حد بازگشت: <code class='inline'>sys.setrecursionlimit</code> (خطر کرش هسته با مقدار زیاد).""",
"تابعی بنویس که نام تابع صدازننده‌اش را بگوید و با walk روی f_back کل زنجیره را چاپ کند.",
py="""import sys, inspect, traceback
def whoami(): return sys._getframe(1).f_code.co_name
def outer(): return whoami()
print(outer())
def chain():
    f, names = sys._getframe(), []
    while f:
        names.append(f.f_code.co_name); f = f.f_back
    return names
def a(): return b()
def b(): return chain()
print(a()[:3])
def show_locals():
    secret, n = "رمز", 42
    return {k: v for k, v in sys._getframe().f_locals.items()}
print(show_locals())
def deep(n): return deep(n + 1)
try:
    deep(0)
except RecursionError as e:
    print("حد بازگشت:", sys.getrecursionlimit())
try:
    1 / 0
except ZeroDivisionError:
    tb = sys.exc_info()[2]
    print([f.name for f in traceback.extract_tb(tb)])""")

add(4,4,"""<p>در CPython هر شیء یک ساختار C است که با <code class='inline'>PyObject</code> شروع می‌شود: <b>شمارنده‌ی مرجع</b> (<code class='inline'>ob_refcnt</code>) و <b>اشاره‌گر به نوع</b> (<code class='inline'>ob_type</code>). اشیای با اندازه‌ی متغیر (لیست، تاپل، رشته) هدر <code class='inline'>PyVarObject</code> با <code class='inline'>ob_size</code> دارند. <code class='inline'>id(x)</code> در CPython همان <b>آدرس حافظه</b> است.</p>
<p>لیست یک آرایه‌ی <b>اشاره‌گرها</b> به شیءهاست (نه مقدارها): برای همین ناهمگن است و هر عضو سربار اشاره‌گر + خود شیء دارد. int شیء با طول متغیر (اعداد بی‌نهایت بزرگ) است. نتیجه: <code class='inline'>sys.getsizeof</code> فقط خود شیء را می‌سنجد نه اشیای ارجاع‌شده. با <code class='inline'>ctypes</code> می‌توان فقط برای <b>یادگیری</b> هدر را خواند؛ هرگز در کد واقعی حافظه را دستکاری نکن.""",
"با ctypes شمارنده‌ی مرجع یک شیء را بخوان و با sys.getrefcount مقایسه کن.",
py="""import sys, ctypes
x = [1, 2, 3]
print("id = آدرس:", hex(id(x)))
try:
    refcnt = ctypes.c_ssize_t.from_address(id(x)).value
    print("ob_refcnt از حافظه:", refcnt, "| getrefcount:", sys.getrefcount(x))
    y = x
    print("بعد از y = x:", ctypes.c_ssize_t.from_address(id(x)).value)
except Exception as e:
    print("خواندن مستقیم حافظه در این محیط ممکن نیست:", type(e).__name__)
print(sys.getsizeof([]), sys.getsizeof([1]), sys.getsizeof([1, 2, 3, 4, 5]))
print(sys.getsizeof(1), sys.getsizeof(2 ** 100), sys.getsizeof(2 ** 1000))
nested = [[0] * 1000]
print(sys.getsizeof(nested), "← فقط اشاره‌گر؛ داخلی را نمی‌شمارد")
print(type(x).__basicsize__, type(x).__itemsize__)""")

add(4,5,"""<p><b>C API</b> پایتون (<code class='inline'>Python.h</code>) به کد C اجازه می‌دهد شیء بسازد و دستکاری کند. اصل حیاتی: <b>مالکیت مرجع</b>. هر تابع می‌گوید مرجعی «جدید» (new reference: خودت مسئول <code class='inline'>Py_DECREF</code>) یا «قرض‌گرفته» (borrowed: نباید DECREF کنی ولی ممکن است معتبر نماند) برمی‌گرداند. خطا در این حساب = نشت حافظه یا کرش (use-after-free).</p>
<p>الگوی خطا: توابع در شکست <code class='inline'>NULL</code> یا <code class='inline'>-1</code> برمی‌گردانند و استثنا را روی نخ تنظیم می‌کنند؛ تابع تو باید NULL برگرداند تا پایتون خطا را پرتاب کند. تبدیل آرگومان‌ها: <code class='inline'>PyArg_ParseTuple(args, "ii", &amp;a, &amp;b)</code> و ساخت نتیجه <code class='inline'>Py_BuildValue</code>. از <code class='inline'>ctypes.pythonapi</code> می‌توان همین توابع را (برای آزمایش) از پایتون صدا زد.""",
"با ctypes.pythonapi یک عدد بساز و refcount را قبل و بعد از DECREF ببین.",
py="""import ctypes, sys
try:
    api = ctypes.pythonapi
    api.PyLong_FromLong.restype = ctypes.py_object
    api.PyLong_FromLong.argtypes = [ctypes.c_long]
    n = api.PyLong_FromLong(123456789)       # مرجع «جدید»
    print(n, type(n).__name__)
    api.PyUnicode_FromString.restype = ctypes.py_object
    api.PyUnicode_FromString.argtypes = [ctypes.c_char_p]
    print(api.PyUnicode_FromString("سلام".encode()))
    print("Py_BuildValue/PyArg_ParseTuple در ماژول C معنی پیدا می‌کنند")
except Exception as e:
    print("pythonapi در این محیط محدود است:", type(e).__name__)
import sysconfig
print(sysconfig.get_config_var("EXT_SUFFIX"))""",
extra=code("نمونه‌ی منطق مرجع در C (فقط برای مطالعه)","""static PyObject *sum_list(PyObject *self, PyObject *args) {
    PyObject *list;
    if (!PyArg_ParseTuple(args, "O!", &PyList_Type, &list))
        return NULL;                      // خطا: استثنا تنظیم شده، NULL برگردان
    long total = 0;
    Py_ssize_t n = PyList_GET_SIZE(list);
    for (Py_ssize_t i = 0; i < n; i++) {
        PyObject *item = PyList_GET_ITEM(list, i);   // مرجع قرض‌گرفته: DECREF نکن
        long v = PyLong_AsLong(item);
        if (v == -1 && PyErr_Occurred()) return NULL;
        total += v;
    }
    return PyLong_FromLong(total);        // مرجع جدید: مالکیت به صدازننده می‌رود
}"""))

add(4,6,"""<p>ساخت یک <b>افزونه‌ی C</b> کامل: ۱) توابع C با امضای <code class='inline'>PyObject *f(PyObject *self, PyObject *args)</code>، ۲) جدول متدها <code class='inline'>PyMethodDef</code>، ۳) تعریف ماژول <code class='inline'>PyModuleDef</code>، ۴) تابع آغازین <code class='inline'>PyInit_name</code>. ساخت با <code class='inline'>setuptools</code> (<code class='inline'>Extension("name", sources=[...])</code>) و نتیجه فایل <code class='inline'>.so</code>/<code class='inline'>.pyd</code> است.</p>
<p>مراقب باش: GIL را برای محاسبه‌ی طولانی با <code class='inline'>Py_BEGIN_ALLOW_THREADS ... Py_END_ALLOW_THREADS</code> آزاد کن (و در آن بخش به اشیای پایتون دست نزن)؛ سازگاری ABI پایدار با <code class='inline'>Py_LIMITED_API</code>؛ و چرخه‌ی عمر (sub-interpreter و free-threading سازگاری می‌خواهند). امروز اکثر پروژه‌ها به‌جای C خام از Cython، pybind11 یا PyO3 (Rust) استفاده می‌کنند. اینجا کامپایلر در دسترس نیست؛ کد کامل را بخوان و روی سیستمت کامپایل کن.""",
"افزونه‌ی fastsum را بساز، نصب کن و با timeit با sum پایتون مقایسه کن.",
py="""import sysconfig, os
inc = sysconfig.get_paths().get("include")
print("هدرهای C API:", inc is not None)
print("پسوند ماژول افزونه:", sysconfig.get_config_var("EXT_SUFFIX"))
print("کامپایلر پیکربندی‌شده:", sysconfig.get_config_var("CC") or "نامشخص")
print("جهت مقایسه: sum داخلی خودش افزونه‌ی C است →", type(sum).__name__, sum.__module__)""",
extra=code("fastsum.c","""#define PY_SSIZE_T_CLEAN
#include <Python.h>

static PyObject *fastsum(PyObject *self, PyObject *args) {
    PyObject *seq;
    if (!PyArg_ParseTuple(args, "O", &seq)) return NULL;
    PyObject *it = PyObject_GetIter(seq);
    if (!it) return NULL;
    long total = 0; PyObject *item;
    while ((item = PyIter_Next(it))) {
        long v = PyLong_AsLong(item);
        Py_DECREF(item);                          // PyIter_Next مرجع جدید می‌دهد
        if (v == -1 && PyErr_Occurred()) { Py_DECREF(it); return NULL; }
        total += v;
    }
    Py_DECREF(it);
    if (PyErr_Occurred()) return NULL;
    return PyLong_FromLong(total);
}
static PyMethodDef M[] = {{"fastsum", fastsum, METH_VARARGS, "جمع دنباله"}, {NULL}};
static struct PyModuleDef mod = {PyModuleDef_HEAD_INIT, "fastsum", NULL, -1, M};
PyMODINIT_FUNC PyInit_fastsum(void) { return PyModule_Create(&mod); }""")+code("setup.py","""from setuptools import setup, Extension
setup(name="fastsum", ext_modules=[Extension("fastsum", ["fastsum.c"])])
# python setup.py build_ext --inplace  →  import fastsum; fastsum.fastsum(range(10**6))"""))

add(4,7,"""<p><b>PyO3</b> با زبان <b>Rust</b> افزونه‌ی پایتون می‌سازد: ایمنی حافظه‌ی Rust (بدون segfault و data race در کد ایمن) + سرعت C. ابزار <b>maturin</b> ساخت و نصب را ساده می‌کند (<code class='inline'>maturin develop</code>). بسیاری از کتابخانه‌های سریع امروز (Pydantic v2، Polars، ruff، cryptography) با Rust نوشته شده‌اند.</p>
<p>اما مرز پایتون↔Rust <b>هزینه</b> دارد (تبدیل نوع، قفل GIL). قاعده‌ی کلیدی: مرز را <b>درشت‌دانه</b> کن؛ به‌جای ۱ میلیون فراخوانی تابع کوچک، یک فراخوانی با آرایه‌ی بزرگ. در پایین سربار فراخوانی پایتون را اندازه می‌گیریم تا ببینی چرا «batching» مهم است.""",
"تابع جمع بردار را در Rust با maturin بنویس و تفاوت batch و فراخوانی تکی را اندازه بگیر.",
py="""import timeit, array
def add1(x): return x + 1
data = list(range(100_000))
single = timeit.timeit(lambda: [add1(x) for x in data], number=3)
def add_all(xs): return [x + 1 for x in xs]
batch = timeit.timeit(lambda: add_all(data), number=3)
print("هر عنصر یک فراخوانی:", f"{single:.3f}s | یک فراخوانی دسته‌ای: {batch:.3f}s")
print("دسته‌ای سریع‌تر:", batch < single)
a = array.array("d", range(5))
print(a.itemsize, memoryview(a).nbytes, "← آرایه‌ی همگن بدون کپی قابل‌اشتراک با C/Rust")""",
extra=code("src/lib.rs — PyO3 (اجرا نشده)","""use pyo3::prelude::*;

#[pyfunction]
fn sum_squares(xs: Vec<f64>) -> f64 {
    xs.iter().map(|x| x * x).sum()          // یک مرز، کل کار در Rust
}

#[pymodule]
fn fastmath(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_squares, m)?)
}
// pip install maturin && maturin develop --release
// import fastmath; fastmath.sum_squares([1.0, 2.0, 3.0])"""))

add(4,8,"""<p>پایتون ۳٫۱۳ حالت تجربی <b>free-threaded</b> (PEP 703) دارد: ساخت بدون GIL که نخ‌ها را واقعاً موازی روی چند هسته اجرا می‌کند. فایل اجرایی جدا (<code class='inline'>python3.13t</code>). پیامدها: ۱) محاسبه‌ی CPU-bound با نخ سریع‌تر می‌شود، ۲) تک‌نخی کمی کندتر (≈۵–۱۰٪)، ۳) <b>کتابخانه‌های C باید سازگار شوند</b> و ماژول‌هایی که فرض می‌کردند GIL هست ممکن است ایمن نباشند، ۴) race conditionهای پنهان آشکار می‌شوند.</p>
<p>تشخیص: <code class='inline'>sys._is_gil_enabled()</code> و <code class='inline'>sysconfig.get_config_var("Py_GIL_DISABLED")</code>. بدون GIL هم عملیات ساده روی dict/list داخلی با قفل‌های ریز ایمن‌اند، ولی «خواندن-تغییر-نوشتن» ترکیبی (مثل <code class='inline'>counter += 1</code>) هنوز اتمی نیست. آینده: free-threading رسمی، subinterpreterها با GIL جدا، و JIT. تا پایدار شدن، برای CPU-bound هنوز multiprocessing و کتابخانه‌های بومی انتخاب امن‌ترند.""",
"روی ساخت free-threaded ۳٫۱۳ با ۴ نخ حلقه‌ی CPU را اجرا کن و سرعت را با ساخت عادی مقایسه کن.",
py="""import sys, sysconfig, threading, time
gil = getattr(sys, "_is_gil_enabled", lambda: True)()
print("نسخه:", sys.version.split()[0], "| GIL فعال:", gil)
print("ساخت free-threaded:", bool(sysconfig.get_config_var("Py_GIL_DISABLED")))
def work(n=300_000):
    s = 0
    for i in range(n): s += i % 7
    return s
t = time.perf_counter(); [work() for _ in range(4)]; seq = time.perf_counter() - t
try:
    t = time.perf_counter()
    ts = [threading.Thread(target=work) for _ in range(4)]
    [x.start() for x in ts]; [x.join() for x in ts]
    par = time.perf_counter() - t
    print(f"ترتیبی {seq:.2f}s | ۴ نخ {par:.2f}s | سرعت‌گیری ≈ {seq / par:.1f}×")
    print("(با GIL معمولاً ≈ 1× ؛ با free-threading روی چند هسته > 1×)")
except RuntimeError as e:
    print("نخ واقعی در این محیط ممکن نیست")""")

add(4,9,"""<p>از ۳٫۱۱ مفسر «<b>تطبیقی تخصصی</b>» (specializing adaptive interpreter, PEP 659) دارد: دستورهای داغ پس از چند اجرا به نسخه‌ی تخصصی با فرض نوع (مثلاً <code class='inline'>BINARY_OP_ADD_INT</code>، <code class='inline'>LOAD_ATTR_INSTANCE_VALUE</code>) بازنویسی می‌شوند و کش درون‌خطی دارند؛ به همین دلیل پایتون ۳٫۱۱ حدود ۲۵٪ سریع‌تر از ۳٫۱۰ شد. اگر فرض نوع بشکند، به حالت عمومی برمی‌گردد (deopt).</p>
<p>۳٫۱۳ یک <b>JIT تجربی</b> (copy-and-patch) اضافه کرد که با پرچم ساخت فعال می‌شود و برای ماشین‌کد از قالب‌های از پیش‌کامپایل‌شده استفاده می‌کند؛ سود فعلی کم ولی پایه‌ی آینده است. نتیجه‌ی عملی: کدی که <b>نوع‌های ثابت</b> و الگوهای ساده دارد (بدون تغییر نوع متغیر در حلقه) سریع‌تر می‌شود. ابزارهای بیرونی: PyPy (JIT قدیمی و بالغ)، Numba، و Cython برای گلوگاه‌ها.""",
"یک تابع را داغ کن و دستورهای تطبیقی آن را قبل و بعد از گرم شدن مقایسه کن.",
py="""import dis, sys
def hot(n):
    t = 0
    for i in range(n):
        t += i * 2
    return t
before = [i.opname for i in dis.get_instructions(hot, adaptive=True) if i.opname.startswith(("BINARY", "COMPARE"))]
for _ in range(200): hot(100)
after = [i.opname for i in dis.get_instructions(hot, adaptive=True) if i.opname.startswith(("BINARY", "COMPARE"))]
print("قبل:", before)
print("بعد:", after)
print("تخصصی شد؟", before != after or any("INT" in a for a in after))
print(sys.version_info[:2], "| JIT:", getattr(sys, "_jit", None) and "موجود" or "غیرفعال/نامشخص")""")

add(4,10,"""<p><b>subinterpreter</b> چند «مفسر پایتون» مستقل درون یک فرایند است؛ هرکدام ماژول‌ها، <code class='inline'>sys</code> و (از ۳٫۱۲، PEP 684) <b>GIL خودش</b> را دارد. نتیجه: موازی‌سازی واقعی درون یک فرایند بدون بار pickle و بدون جدا شدن فرایند؛ حافظه‌ی کمتر از multiprocessing. اشیا بین مفسرها <b>مشترک نیستند</b>؛ ارتباط با صف/کانال و داده‌ی سریالایزشده است.</p>
<p>وضعیت: API پایتونی عمومی (<code class='inline'>concurrent.interpreters</code>) در ۳٫۱۴ می‌آید؛ در ۳٫۱۳ ماژول داخلی <code class='inline'>_interpreters</code> (ناپایدار) هست. افزونه‌های C باید با «حالت ماژول» سازگار شوند. در آینده ترکیب <b>subinterpreter + ThreadPool</b> می‌تواند الگوی استاندارد موازی‌سازی شود. اینجا از API داخلی با احتیاط و try/except استفاده می‌کنیم.""",
"در ۳٫۱۳ با _interpreters یک مفسر بساز، کدی در آن اجرا کن و ببین متغیرها بین مفسرها مشترک نیستند.",
py="""try:
    import _interpreters as interp
    iid = interp.create()
    interp.exec(iid, "x = 41 + 1\\nprint('در مفسر فرعی:', x)")
    try:
        x
    except NameError:
        print("x در مفسر اصلی تعریف نشده → فضای نام جداست")
    print("شناسه‌ها:", len(interp.list_all()) >= 2)
    interp.destroy(iid)
except (ImportError, AttributeError, RuntimeError) as e:
    print("_interpreters در این نسخه/محیط نیست:", type(e).__name__)
import sys
print(sys.version_info[:2], "→ API عمومی concurrent.interpreters از ۳٫۱۴")""")

add(4,11,"""<p>داخل asyncio سه جزء کار می‌کنند: ۱) <b>selector</b> (لایه‌ی <code class='inline'>epoll</code> در لینوکس، <code class='inline'>kqueue</code> در macOS، IOCP در ویندوز) که می‌پرسد «کدام سوکت‌ها آماده‌اند؟»، ۲) صف <b>callbackهای آماده</b> (ready queue) و ۳) <b>heap تایمرها</b>. هر دور حلقه: محاسبه‌ی بیشترین انتظار تا نزدیک‌ترین تایمر، <code class='inline'>selector.select(timeout)</code>، افزودن رویدادها و تایمرهای رسیده به صف، و اجرای همه‌ی callbackها.</p>
<p>coroutine هم در واقع یک <b>generator</b> است که <code class='inline'>await</code> همان <code class='inline'>yield from</code> است؛ Task آن را با <code class='inline'>send</code> جلو می‌برد و وقتی چیزی (Future) منتظر است، ثبت می‌کند که هنگام تکمیل ادامه دهد. همین‌جا یک حلقه‌ی رویداد مینیاتوری با تایمر و تسک می‌سازیم تا جادو از بین برود.""",
"حلقه‌ی کوچک را طوری گسترش بده که sleep(delay) با heap تایمرها کار کند و ۳ تسک موازی را اجرا کند.",
py="""import heapq, itertools
class Sleep:                         # آنچه coroutine به حلقه yield می‌کند
    def __init__(self, d): self.d = d
class Loop:
    def __init__(self):
        self.now, self.ready, self.timers, self.seq = 0.0, [], [], itertools.count()
    def spawn(self, gen): self.ready.append(gen)
    def run(self):
        while self.ready or self.timers:
            while self.ready:
                gen = self.ready.pop(0)
                try:
                    req = next(gen)
                    heapq.heappush(self.timers, (self.now + req.d, next(self.seq), gen))
                except StopIteration:
                    pass
            if self.timers:
                self.now, _, gen = heapq.heappop(self.timers)      # «پرش» ساعت (select با timeout)
                self.ready.append(gen)
log = []
loop = Loop()
def task(name, delay, n):
    for i in range(n):
        log.append((round(loop.now, 1), name, i))
        yield Sleep(delay)
loop.spawn(task("A", 1.0, 3)); loop.spawn(task("B", 1.5, 2))
loop.run()
print(log)
import selectors, socket
try:
    a, b = socket.socketpair()
    sel = selectors.DefaultSelector()
    sel.register(a, selectors.EVENT_READ)
    print("قبل از نوشتن:", sel.select(timeout=0))
    b.send(b"x")
    print("بعد از نوشتن:", [ev for _, ev in sel.select(timeout=1)], type(sel).__name__)
    a.close(); b.close()
except (OSError, AttributeError) as e:
    print("socketpair در این محیط نیست")""")

add(4,12,"""<p>سوکت‌ها پایه‌ی هر شبکه‌اند. <b>TCP یک جریان بایت</b> است نه جریان پیام: یک <code class='inline'>send(100 بایت)</code> ممکن است در چند <code class='inline'>recv</code> برسد یا دو پیام در یک recv بیایند. پس هر پروتکل باید <b>مرز پیام</b> را تعریف کند: جداکننده (<code class='inline'>\\r\\n</code> مثل HTTP/Redis)، <b>طول‌پیشوند</b> (length-prefix) یا طول ثابت. اشتباه رایج: فرض اینکه یک recv = یک پیام.</p>
<p>چرخه‌ی سرور: <code class='inline'>socket → bind → listen → accept → recv/send → close</code>. کلاینت: <code class='inline'>connect</code>. همیشه timeout بده، بایت (<code class='inline'>bytes</code>) و متن (<code class='inline'>str</code>) را با encode/decode جدا کن، و <code class='inline'>SO_REUSEADDR</code> برای راه‌اندازی مجدد. در تولید به‌جای سوکت خام از asyncio streams یا چارچوب استفاده می‌شود. فریم‌بندی را اینجا با طول‌پیشوند پیاده می‌کنیم.""",
"پروتکل «طول‌پیشوند ۴ بایتی + JSON» را پیاده کن و با بافر پراکنده (هر بار چند بایت) آزمایش کن.",
py="""import struct, json, socket
def encode(msg):
    body = json.dumps(msg, ensure_ascii=False).encode()
    return struct.pack(">I", len(body)) + body
class Decoder:
    def __init__(self): self.buf = b""
    def feed(self, data):
        self.buf += data
        out = []
        while len(self.buf) >= 4:
            (n,) = struct.unpack(">I", self.buf[:4])
            if len(self.buf) < 4 + n: break
            out.append(json.loads(self.buf[4:4 + n])); self.buf = self.buf[4 + n:]
        return out
stream = encode({"op": "سلام"}) + encode({"op": "add", "n": [1, 2]})
d = Decoder(); msgs = []
for i in range(0, len(stream), 5):            # تکه‌تکه می‌رسد
    msgs += d.feed(stream[i:i + 5])
print(msgs)
try:
    a, b = socket.socketpair()
    a.sendall(encode({"ping": 1})); b.settimeout(1)
    print("از سوکت واقعی:", Decoder().feed(b.recv(4096)))
    a.close(); b.close()
except (OSError, AttributeError):
    print("socketpair در این محیط نیست؛ منطق فریم‌بندی بالا همان است")""")

add(4,13,"""<p>HTTP/1.1 یک پروتکل متنی ساده روی TCP است: <b>خط درخواست</b> (<code class='inline'>GET /path HTTP/1.1</code>)، <b>هدرها</b> (<code class='inline'>Name: value</code>)، یک خط خالی، و <b>بدنه</b> (با <code class='inline'>Content-Length</code> یا <code class='inline'>Transfer-Encoding: chunked</code>). پاسخ: <b>خط وضعیت</b> (<code class='inline'>HTTP/1.1 200 OK</code>)، هدرها، خط خالی و بدنه. <code class='inline'>Connection: keep-alive</code> اتصال را نگه می‌دارد.</p>
<p>ساخت سرور از صفر یعنی: خواندن تا <code class='inline'>\\r\\n\\r\\n</code>، تجزیه، مسیریابی، ساخت پاسخ. نکات امنیتی: محدودیت اندازه‌ی هدر/بدنه (وگرنه DoS)، timeout، اعتبارسنجی مسیر، و request smuggling (ابهام در طول). این‌ها دلیل استفاده از سرور بالغ (uvicorn، gunicorn، nginx) در تولید است. اینجا تجزیه‌گر و پاسخ‌ساز را بدون شبکه می‌نویسیم؛ بالای ماژول <code class='inline'>socketserver</code> می‌شود سرور واقعی ساخت.""",
"تجزیه‌گر درخواست را برای Content-Length و هدرهای تکراری تکمیل کن و ۴۰۰ برای ورودی خراب برگردان.",
py="""import json
def parse_request(raw: bytes, max_header=8192):
    head, sep, body = raw.partition(b"\\r\\n\\r\\n")
    if not sep or len(head) > max_header:
        raise ValueError("درخواست ناقص/بزرگ")
    lines = head.decode("latin-1").split("\\r\\n")
    method, target, version = lines[0].split(" ")
    headers = {}
    for l in lines[1:]:
        k, _, v = l.partition(":")
        headers[k.strip().lower()] = v.strip()
    n = int(headers.get("content-length", 0))
    if len(body) < n: raise ValueError("بدنه ناقص")
    return method, target, headers, body[:n]
def response(status, body, ctype="application/json"):
    reasons = {200: "OK", 400: "Bad Request", 404: "Not Found"}
    data = json.dumps(body, ensure_ascii=False).encode() if not isinstance(body, bytes) else body
    head = (f"HTTP/1.1 {status} {reasons[status]}\\r\\nContent-Type: {ctype}; charset=utf-8\\r\\n"
            f"Content-Length: {len(data)}\\r\\nConnection: close\\r\\n\\r\\n")
    return head.encode() + data
def handle(raw):
    try:
        method, target, headers, body = parse_request(raw)
    except (ValueError, IndexError) as e:
        return response(400, {"error": str(e)})
    if method == "POST" and target == "/echo":
        return response(200, {"you_sent": json.loads(body)})
    return response(404, {"error": "پیدا نشد"})
req = b'POST /echo HTTP/1.1\\r\\nHost: x\\r\\nContent-Length: 17\\r\\n\\r\\n{"msg": "salam"} '
print(handle(req).decode().replace("\\r\\n", " | "))
print(handle(b"GET /x HTTP/1.1\\r\\n\\r\\n").split(b"\\r\\n")[0].decode())
print(handle(b"garbage").split(b"\\r\\n")[0].decode())""")

add(4,14,"""<p>فریم‌ورک وب کوچک (مثل Flask) چند بخش دارد: ۱) <b>مسیریاب</b> (مسیر+متد → تابع، با پارامتر <code class='inline'>/users/&lt;int:id&gt;</code>)، ۲) شیء <b>Request/Response</b>، ۳) <b>میان‌افزار</b> (hook قبل/بعد)، ۴) <b>مدیریت خطا</b> (<code class='inline'>@errorhandler</code>)، و ۵) رابط با سرور از طریق <b>WSGI</b> (<code class='inline'>app(environ, start_response)</code>) یا ASGI. ساخت آن بهترین راه فهمیدن «جادوی» فریم‌ورک‌هاست.</p>
<p>طراحی: decorator <code class='inline'>@app.route</code> تابع را در جدول ثبت می‌کند؛ مسیر به regex کامپایل می‌شود؛ خطا به صفحه‌ی خطای مناسب تبدیل می‌شود. فریم‌ورک‌های واقعی (Flask، Starlette) همین‌ها را با جزئیات بیشتر دارند. اینجا یک نسخه‌ی کاربردی ~۶۰ خطی را می‌سازیم و با WSGI مستقیم تست می‌کنیم.""",
"قابلیت before_request و پشتیبانی از متد POST با بدنه‌ی JSON را به فریم‌ورک اضافه کن.",
py="""import re, json
from io import BytesIO
class HTTPError(Exception):
    def __init__(self, status, msg): self.status, self.msg = status, msg
class Request:
    def __init__(self, environ, params):
        self.method, self.path, self.params = environ["REQUEST_METHOD"], environ["PATH_INFO"], params
        n = int(environ.get("CONTENT_LENGTH") or 0)
        self._body = environ["wsgi.input"].read(n)
    def json(self): return json.loads(self._body or b"null")
class Mini:
    CONV = {"int": (r"\\d+", int), "str": (r"[^/]+", str)}
    def __init__(self): self.routes, self.before = [], []
    def route(self, pattern, methods=("GET",)):
        conv = {}
        def sub(m):
            t, name = m[1] or "str", m[2]
            conv[name] = self.CONV[t][1]; return f"(?P<{name}>{self.CONV[t][0]})"
        rx = re.compile("^" + re.sub(r"<(?:(\\w+):)?(\\w+)>", sub, pattern) + "$")
        def deco(fn):
            self.routes.append((rx, conv, methods, fn)); return fn
        return deco
    def __call__(self, environ, start_response):
        try:
            for rx, conv, methods, fn in self.routes:
                m = rx.match(environ["PATH_INFO"])
                if m:
                    if environ["REQUEST_METHOD"] not in methods: raise HTTPError(405, "متد مجاز نیست")
                    params = {k: conv[k](v) for k, v in m.groupdict().items()}
                    req = Request(environ, params)
                    for hook in self.before: hook(req)
                    body, status = fn(req, **params), 200
                    if isinstance(body, tuple): body, status = body
                    break
            else:
                raise HTTPError(404, "پیدا نشد")
        except HTTPError as e:
            body, status = {"error": e.msg}, e.status
        data = json.dumps(body, ensure_ascii=False).encode()
        start_response(f"{status} X", [("Content-Type", "application/json")])
        return [data]
app = Mini()
log = []
app.before.append(lambda req: log.append(f"{req.method} {req.path}"))
@app.route("/users/<int:id>")
def user(req, id): return {"id": id}
@app.route("/echo", methods=("POST",))
def echo(req): return ({"got": req.json()}, 201)
def call(method, path, body=b""):
    out = {}
    res = app({"REQUEST_METHOD": method, "PATH_INFO": path, "CONTENT_LENGTH": str(len(body)), "wsgi.input": BytesIO(body)}, lambda s, h: out.update(s=s))
    return out["s"].split()[0], json.loads(res[0])
print(call("GET", "/users/7"), call("GET", "/users/abc"), call("POST", "/echo", b'{"a": 1}'), call("GET", "/echo"))
print(log)""")

add(4,15,"""<p>ORM در ذات خود سه چیز است: ۱) <b>نگاشت</b> کلاس↔جدول (فیلدها = ستون‌ها)، ۲) <b>ساخت SQL</b> از عملیات پایتونی (<code class='inline'>User.filter(age__gt=18)</code>) و ۳) <b>تبدیل ردیف به شیء</b>. با <b>descriptor</b> برای فیلدها و <b>متاکلاس</b>/<code class='inline'>__init_subclass__</code> برای جمع‌آوری فیلدها و نام جدول، یک ORM مینیاتوری می‌سازیم.</p>
<p>نکات امنیتی و کیفی: هرگز مقدار را در SQL الحاق نکن (پارامتر <code class='inline'>?</code>)، نام ستون‌ها را از فهرست سفید فیلدهای مدل بگیر (نه از ورودی کاربر)، و پرس‌وجوها را تنبل و زنجیره‌ای کن (<code class='inline'>QuerySet</code>). ORMهای واقعی Unit of Work، Identity Map، رابطه‌ها، مهاجرت و ... هم دارند. هدف اینجا فهمیدن معماری است نه جایگزینی SQLAlchemy.""",
"عملگرهای __lt و __contains را به QuerySet اضافه کن و order_by و limit را پشتیبانی کن.",
py="""import sqlite3
class Field:
    def __init__(self, sql_type="TEXT"): self.sql_type = sql_type
    def __set_name__(self, owner, name): self.name = name
class Model:
    _fields = {}
    def __init_subclass__(cls, **kw):
        cls._fields = {k: v for k, v in vars(cls).items() if isinstance(v, Field)}
        cls.table = cls.__name__.lower() + "s"
    def __init__(self, **kw):
        for f in self._fields: setattr(self, f, kw.get(f))
    def __repr__(self): return f"{type(self).__name__}({', '.join(f'{f}={getattr(self, f)!r}' for f in self._fields)})"
    @classmethod
    def create_table(cls, db):
        cols = ", ".join(f"{n} {f.sql_type}" for n, f in cls._fields.items())
        db.execute(f"CREATE TABLE {cls.table} (id INTEGER PRIMARY KEY, {cols})")
    def save(self, db):
        names = list(self._fields)
        db.execute(f"INSERT INTO {self.table} ({','.join(names)}) VALUES ({','.join('?' * len(names))})", [getattr(self, n) for n in names])
    @classmethod
    def filter(cls, db, **conds): return QuerySet(cls, db).filter(**conds)
class QuerySet:
    OPS = {"gt": ">", "lt": "<", "gte": ">=", "lte": "<=", "eq": "="}
    def __init__(self, model, db, where=(), params=(), order=None, lim=None):
        self.model, self.db, self.where, self.params, self.order, self.lim = model, db, where, params, order, lim
    def filter(self, **conds):
        w, p = list(self.where), list(self.params)
        for key, val in conds.items():
            name, _, op = key.partition("__")
            if name not in self.model._fields: raise ValueError(f"فیلد ناشناخته: {name}")   # فهرست سفید
            w.append(f"{name} {self.OPS[op or 'eq']} ?"); p.append(val)
        return QuerySet(self.model, self.db, w, p, self.order, self.lim)
    def order_by(self, name): return QuerySet(self.model, self.db, self.where, self.params, name, self.lim)
    def limit(self, n): return QuerySet(self.model, self.db, self.where, self.params, self.order, n)
    def sql(self):
        s = f"SELECT {','.join(self.model._fields)} FROM {self.model.table}"
        if self.where: s += " WHERE " + " AND ".join(self.where)
        if self.order: s += f" ORDER BY {self.order}"
        if self.lim: s += f" LIMIT {self.lim}"
        return s
    def __iter__(self):
        for row in self.db.execute(self.sql(), self.params):
            yield self.model(**dict(zip(self.model._fields, row)))
class User(Model):
    name = Field(); age = Field("INTEGER")
db = sqlite3.connect(":memory:")
User.create_table(db)
for n, a in [("علی", 30), ("سارا", 22), ("رضا", 41)]: User(name=n, age=a).save(db)
q = User.filter(db, age__gt=25).order_by("age").limit(5)
print(q.sql(), q.params)
print(list(q))
try: User.filter(db, **{"age; DROP TABLE users": 1})
except ValueError as e: print("تزریق رد شد:", e)""")

add(4,16,"""<p>مفسر ساده‌ی یک زبان سه بخش دارد: <b>tokenizer</b> (متن → توکن)، <b>parser</b> (توکن → AST) و <b>evaluator</b> (اجرای AST). برای عبارت‌های ریاضی، <b>تجزیه‌گر پایین‌به‌بالا بازگشتی</b> (recursive descent) با یک تابع برای هر سطح اولویت ساده‌ترین راه است: <code class='inline'>expr → term (('+'|'-') term)*</code>، <code class='inline'>term → factor (('*'|'/') factor)*</code>، <code class='inline'>factor → NUMBER | NAME | '(' expr ')' | '-' factor</code>.</p>
<p>اولویت و شرکت‌پذیری از ساختار گرامر می‌آید نه کد پیچیده. با افزودن متغیر، تابع، شرط و حلقه، زبان کامل ساخته می‌شود (مثل کتاب «Crafting Interpreters»). مدیریت خطا با پیام و موقعیت مهم است. هرگز برای محاسبه‌ی ورودی کاربر از <code class='inline'>eval</code> استفاده نکن؛ مفسر خودت امن‌تر و کنترل‌شده است.""",
"دستور انتساب (x = ...) و تابع‌های داخلی sqrt و max را به مفسر اضافه کن.",
py="""import re, math, operator as op
TOKEN = re.compile(r"\\s*(?:(\\d+\\.?\\d*)|([A-Za-z_]\\w*)|(.))")
def tokenize(src):
    toks = []
    for num, name, sym in TOKEN.findall(src):
        if num: toks.append(("NUM", float(num)))
        elif name: toks.append(("NAME", name))
        elif sym.strip(): toks.append(("SYM", sym))
    return toks + [("EOF", None)]
class Parser:
    def __init__(self, toks): self.t, self.i = toks, 0
    def peek(self): return self.t[self.i]
    def eat(self, kind=None, val=None):
        tok = self.t[self.i]
        if (kind and tok[0] != kind) or (val and tok[1] != val): raise SyntaxError(f"غیرمنتظره: {tok[1]!r}")
        self.i += 1; return tok
    def parse(self):
        node = self.expr(); self.eat("EOF"); return node
    def expr(self):
        node = self.term()
        while self.peek()[1] in ("+", "-"):
            node = ("bin", self.eat()[1], node, self.term())
        return node
    def term(self):
        node = self.factor()
        while self.peek()[1] in ("*", "/", "%"):
            node = ("bin", self.eat()[1], node, self.factor())
        return node
    def factor(self):
        kind, val = self.peek()
        if val == "-": self.eat(); return ("neg", self.factor())
        base = self.atom()
        if self.peek()[1] == "^": self.eat(); return ("bin", "^", base, self.factor())   # راست‌شرکت‌پذیر
        return base
    def atom(self):
        kind, val = self.eat()
        if kind == "NUM": return ("num", val)
        if kind == "NAME":
            if self.peek()[1] == "(":
                self.eat(); args = [self.expr()]
                while self.peek()[1] == ",": self.eat(); args.append(self.expr())
                self.eat("SYM", ")"); return ("call", val, args)
            return ("var", val)
        if val == "(":
            node = self.expr(); self.eat("SYM", ")"); return node
        raise SyntaxError(f"غیرمنتظره: {val!r}")
OPS = {"+": op.add, "-": op.sub, "*": op.mul, "/": op.truediv, "%": op.mod, "^": op.pow}
FUNCS = {"sqrt": math.sqrt, "max": max, "min": min}
def evaluate(n, env):
    t = n[0]
    if t == "num": return n[1]
    if t == "var": return env[n[1]]
    if t == "neg": return -evaluate(n[1], env)
    if t == "bin": return OPS[n[1]](evaluate(n[2], env), evaluate(n[3], env))
    if t == "call": return FUNCS[n[1]](*[evaluate(a, env) for a in n[2]])
def run(src, env=None):
    return evaluate(Parser(tokenize(src)).parse(), env or {})
print(run("2 + 3 * 4"), run("(2 + 3) * 4"), run("2 ^ 3 ^ 2"), run("-x + 10", {"x": 4}))
print(run("sqrt(16) + max(1, 7, 3)"))
for bad in ("2 +", "2 $ 3"):
    try: run(bad)
    except SyntaxError as e: print("SyntaxError:", e)""")

add(4,17,"""<p>ماژول <code class='inline'>ast</code> درخت نحو را در اختیار می‌گذارد و پایه‌ی <b>تحلیل ایستا</b> است: linterها، ابزار پیچیدگی، یافتن الگوهای ناامن، تولید مستندات. با <code class='inline'>ast.parse</code> درخت را می‌سازی و با <code class='inline'>ast.NodeVisitor</code> (متد <code class='inline'>visit_X</code> برای هر نوع گره) پیمایش می‌کنی؛ <code class='inline'>ast.walk</code> ساده‌ترین پیمایش است.</p>
<p>مثال‌ها: شمارش پیچیدگی حلقه‌ای (cyclomatic)، یافتن <code class='inline'>eval/exec</code>، متغیرهای بلااستفاده، توابع بدون docstring، حلقه‌ی تودرتوی عمیق. گره‌ها <code class='inline'>lineno</code> و <code class='inline'>col_offset</code> دارند برای گزارش دقیق. محدودیت: تحلیل ایستا نوع زمان اجرا را نمی‌داند و می‌تواند هشدار کاذب بدهد.""",
"قاعده‌ی «حلقه‌ی for تودرتو بیش از ۳ سطح» را به تحلیلگر اضافه کن.",
py="""import ast
source = '''
import os
def risky(user_input, n=[]):
    result = eval(user_input)
    for i in range(10):
        for j in range(10):
            if i == j and j > 2:
                print(i)
    unused = 5
    return result
class A:
    def method(self): pass
'''
class Analyzer(ast.NodeVisitor):
    def __init__(self): self.issues, self.complexity = [], {}
    def visit_FunctionDef(self, node):
        branches = sum(isinstance(n, (ast.If, ast.For, ast.While, ast.BoolOp, ast.ExceptHandler)) for n in ast.walk(node))
        self.complexity[node.name] = branches + 1
        if not ast.get_docstring(node): self.issues.append((node.lineno, f"{node.name}: بدون docstring"))
        for d in node.args.defaults:
            if isinstance(d, (ast.List, ast.Dict, ast.Set)): self.issues.append((d.lineno, "پیش‌فرض تغییرپذیر"))
        assigned = {t.id for n in ast.walk(node) if isinstance(n, ast.Assign) for t in n.targets if isinstance(t, ast.Name)}
        loaded = {n.id for n in ast.walk(node) if isinstance(n, ast.Name) and isinstance(n.ctx, ast.Load)}
        for u in sorted(assigned - loaded): self.issues.append((node.lineno, f"متغیر بلااستفاده: {u}"))
        self.generic_visit(node)
    def visit_Call(self, node):
        if isinstance(node.func, ast.Name) and node.func.id in ("eval", "exec"):
            self.issues.append((node.lineno, f"استفاده از {node.func.id} (خطر تزریق کد)"))
        self.generic_visit(node)
a = Analyzer(); a.visit(ast.parse(source))
for line, msg in sorted(a.issues): print(f"خط {line}: {msg}")
print("پیچیدگی:", a.complexity)""")

add(4,18,"""<p>می‌توان AST را <b>تغییر داد</b> و دوباره به کد تبدیل کرد: <code class='inline'>ast.NodeTransformer</code> گره‌ها را جایگزین/حذف می‌کند؛ بعد <code class='inline'>ast.fix_missing_locations</code> و <code class='inline'>compile</code>. کاربردها: <b>بهینه‌سازی</b> (constant folding)، <b>ماکرو</b>، ابزار تست (بازنویسی assert در pytest)، instrumentation (پوشش، پروفایل) و زبان‌های دامنه‌ی درون‌پایتونی. <code class='inline'>ast.unparse</code> (۳٫۹+) درخت را به متن برمی‌گرداند.</p>
<p>ملاحظات: تغییر معنایی کد دشوار و مستعد خطاست؛ تست کن. ابزارهای سطح بالاتر: <code class='inline'>libcst</code> (حفظ فرمت و کامنت برای refactor خودکار)، <code class='inline'>astor</code>. این تکنیک‌ها قدرتمندند و ایمنی را به خطر می‌اندازند؛ هرگز کد غیرقابل‌اعتماد را exec نکن.""",
"Transformer ای بنویس که هر فراخوانی print(x) را به log(x) با شماره‌ی خط تبدیل کند.",
py="""import ast
class FoldConstants(ast.NodeTransformer):
    OPS = {ast.Add: lambda a, b: a + b, ast.Mult: lambda a, b: a * b, ast.Sub: lambda a, b: a - b}
    def visit_BinOp(self, node):
        self.generic_visit(node)                              # اول فرزندها
        if isinstance(node.left, ast.Constant) and isinstance(node.right, ast.Constant) and type(node.op) in self.OPS:
            return ast.copy_location(ast.Constant(self.OPS[type(node.op)](node.left.value, node.right.value)), node)
        return node
src = "x = 2 * 3 + 4\\ny = x + 60 * 60 * 24"
tree = FoldConstants().visit(ast.parse(src))
ast.fix_missing_locations(tree)
print(ast.unparse(tree))
ns = {}; exec(compile(tree, "<opt>", "exec"), ns); print(ns["x"], ns["y"])
class LogPrints(ast.NodeTransformer):
    def visit_Call(self, node):
        self.generic_visit(node)
        if isinstance(node.func, ast.Name) and node.func.id == "print":
            node.func = ast.Name("log", ast.Load())
            node.args.insert(0, ast.Constant(f"line {node.lineno}:"))
        return node
t2 = LogPrints().visit(ast.parse("print('hi')\\nprint(1 + 2)"))
print(ast.unparse(ast.fix_missing_locations(t2)))""")

add(4,19,"""<p>سازوکار import قابل‌گسترش است: <code class='inline'>sys.meta_path</code> فهرست <b>finderها</b> است؛ هرکدام برای نام ماژول یک <b>spec</b> برمی‌گرداند و <b>loader</b> ماژول را می‌سازد/اجرا می‌کند (<code class='inline'>importlib.abc.MetaPathFinder</code>، <code class='inline'>Loader</code>، <code class='inline'>importlib.util.spec_from_loader</code>). با این می‌توان از جایی غیر از فایل import کرد: دیتابیس، شبکه، فایل رمزگذاری‌شده، یا ماژول مجازی/DSL.</p>
<p>کاربردها: پلاگین‌ها، بارگذاری تنبل، بازنویسی AST هنگام import (pytest)، ماژول‌های ساخته‌شده از اسکیما. <code class='inline'>importlib.import_module</code> برای import پویا با نام رشته و <code class='inline'>importlib.reload</code>. هشدار امنیتی: finder سفارشی یعنی اجرای کد دلخواه هنگام import؛ مسیرها/منابع را کنترل کن.""",
"loader ای بنویس که ماژول را از یک دیکشنری رشته‌ها (شبیه دیتابیس) بارگذاری کند و با reload به‌روز شود.",
py="""import sys, importlib, importlib.abc, importlib.util
STORE = {"greet": "def hello(n):\\n    return f'سلام {n} از ماژول مجازی'\\nVERSION = 1\\n"}
class DictFinder(importlib.abc.MetaPathFinder):
    def find_spec(self, name, path, target=None):
        if name.startswith("virt_") and name[5:] in STORE:
            return importlib.util.spec_from_loader(name, DictLoader(name[5:]))
class DictLoader(importlib.abc.Loader):
    def __init__(self, key): self.key = key
    def create_module(self, spec): return None
    def exec_module(self, module):
        exec(compile(STORE[self.key], f"<db:{self.key}>", "exec"), module.__dict__)
sys.meta_path.insert(0, DictFinder())
import virt_greet
print(virt_greet.hello("علی"), virt_greet.VERSION)
STORE["greet"] = STORE["greet"].replace("VERSION = 1", "VERSION = 2")
importlib.reload(virt_greet)
print("بعد از reload:", virt_greet.VERSION)
m = importlib.import_module("math")
print(m.sqrt(9), virt_greet.__spec__.loader.__class__.__name__)
try:
    import virt_missing
except ModuleNotFoundError as e:
    print("ModuleNotFoundError:", e.name)
sys.meta_path.pop(0)""")

add(4,20,"""<p><b>DSL</b> (زبان دامنه‌ی خاص) زبان کوچکی برای یک مسئله است. دو سبک: <b>درونی</b> (embedded) که از ویژگی‌های میزبان استفاده می‌کند (عملگرهای سربارشده، decorator، builder سیال) و <b>بیرونی</b> که گرامر و تجزیه‌گر خودش را دارد (SQL، regex، Terraform). در پایتون DSL درونی با <code class='inline'>__getattr__</code>، <code class='inline'>__eq__/__and__/__or__</code> و context manager عالی است: SQLAlchemy، Django ORM، Pandas و Pytest.</p>
<p>طراحی خوب: خوانایی نزدیک به دامنه، خطای واضح، و «قابل‌ترکیب». هسته‌ی کار ساخت <b>درخت عبارت</b> است که بعداً به SQL/کد/اجرا ترجمه می‌شود. دقت: سربار عملگر <code class='inline'>and/or</code> ممکن نیست (فقط <code class='inline'>&amp; | ~</code> با پرانتز، به‌خاطر اولویت). اینجا DSL پرس‌وجوی فیلتر می‌سازیم که هم به SQL و هم به تابع پایتون ترجمه می‌شود.""",
"عملگر in و between را به DSL اضافه کن و ترجمه به SQL پارامتری را حفظ کن.",
py="""import operator
class Expr:
    def __and__(self, o): return Logic("AND", self, o)
    def __or__(self, o): return Logic("OR", self, o)
    def __invert__(self): return Not(self)
class Col(Expr):
    def __init__(self, name): self.name = name
    def _cmp(self, sym, fn, v): return Cmp(self, sym, fn, v)
    def __eq__(self, v): return self._cmp("=", operator.eq, v)
    def __gt__(self, v): return self._cmp(">", operator.gt, v)
    def __lt__(self, v): return self._cmp("<", operator.lt, v)
    def __ge__(self, v): return self._cmp(">=", operator.ge, v)
    def isin(self, vs): return In(self, list(vs))
class Cmp(Expr):
    def __init__(self, c, sym, fn, v): self.c, self.sym, self.fn, self.v = c, sym, fn, v
    def sql(self): return f"{self.c.name} {self.sym} ?", [self.v]
    def test(self, row): return self.fn(row[self.c.name], self.v)
class In(Expr):
    def __init__(self, c, vs): self.c, self.vs = c, vs
    def sql(self): return f"{self.c.name} IN ({','.join('?' * len(self.vs))})", list(self.vs)
    def test(self, row): return row[self.c.name] in self.vs
class Logic(Expr):
    def __init__(self, op, a, b): self.op, self.a, self.b = op, a, b
    def sql(self):
        (s1, p1), (s2, p2) = self.a.sql(), self.b.sql()
        return f"({s1} {self.op} {s2})", p1 + p2
    def test(self, row):
        return (self.a.test(row) and self.b.test(row)) if self.op == "AND" else (self.a.test(row) or self.b.test(row))
class Not(Expr):
    def __init__(self, a): self.a = a
    def sql(self): s, p = self.a.sql(); return f"NOT {s}", p
    def test(self, row): return not self.a.test(row)
age, city = Col("age"), Col("city")
q = ((age > 18) & city.isin(["تهران", "شیراز"])) | ~(age < 60)
print(q.sql())
rows = [{"age": 25, "city": "تهران"}, {"age": 70, "city": "اهواز"}, {"age": 16, "city": "شیراز"}]
print([r for r in rows if q.test(r)])""")

add(4,21,"""<p>وقتی داده از حافظه بزرگ‌تر است، قاعده: <b>هرگز همه را یکجا بارگذاری نکن</b>. الگوها: ۱) <b>جریان</b> (iterator/generator) برای پردازش خط‌به‌خط؛ ۲) <b>دسته‌بندی</b> (chunking) با <code class='inline'>itertools.islice</code> یا <code class='inline'>itertools.batched</code>؛ ۳) <b><code class='inline'>mmap</code></b> برای دسترسی تصادفی به فایل بزرگ بدون خواندن کامل (سیستم‌عامل صفحه‌ها را تنبل بارگذاری می‌کند)؛ ۴) <b>مرتب‌سازی خارجی</b> (external sort): تکه‌های مرتب‌شده‌ی روی دیسک را با <code class='inline'>heapq.merge</code> ادغام کن؛ ۵) آرایه‌های فشرده (<code class='inline'>array</code>، NumPy، <code class='inline'>memoryview</code>).</p>
<p>ملاحظات: حافظه ≠ دیسک؛ اندازه‌ی کار (O(1) حافظه) را در طراحی ببین، فشرده‌سازی (gzip) جریانی است، و فرمت‌های ستونی (Parquet) برای تحلیل بهتر از CSV هستند. همیشه حافظه‌ی مصرفی را با tracemalloc/پروفایل بسنج.""",
"مرتب‌سازی خارجی را پیاده کن: فایل بزرگ شماره‌ها را تکه‌تکه مرتب و ادغام کن.",
py="""import mmap, tempfile, heapq, os, itertools, random
from pathlib import Path
tmp = Path(tempfile.mkdtemp())
big = tmp / "big.txt"
random.seed(2)
nums = [random.randint(0, 10**6) for _ in range(20000)]
big.write_text("\\n".join(map(str, nums)))
def chunks(it, n):
    it = iter(it)
    while batch := list(itertools.islice(it, n)): yield batch
runs = []
with open(big) as f:
    for i, batch in enumerate(chunks((int(l) for l in f), 4000)):     # هر بار فقط ۴۰۰۰ عدد در حافظه
        p = tmp / f"run{i}.txt"; p.write_text("\\n".join(map(str, sorted(batch)))); runs.append(p)
files = [open(r) for r in runs]
merged = heapq.merge(*[(int(l) for l in fh) for fh in files])
out = [x for x in itertools.islice(merged, 5)]
print(len(runs), "تکه | ۵ کوچک‌ترین:", out, out == sorted(nums)[:5])
[fh.close() for fh in files]
with open(big, "rb") as f, mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as mm:
    print("اندازه:", len(mm), "| اولین خط:", mm[:mm.find(b"\\n")].decode(), "| شمارش خطوط:", mm.read().count(b"\\n") + 1)
    print(mm.find(str(nums[10]).encode()) >= 0)""")

add(4,22,"""<p><b>Apache Arrow</b> قالب حافظه‌ی <b>ستونی</b> استاندارد است: داده‌ی هر ستون پیوسته در حافظه (کش CPU، برداری‌سازی SIMD) و بدون کپی بین ابزارها (pandas، Polars، DuckDB، Spark). <b>Parquet</b> قالب فایل ستونی فشرده است: فشرده‌سازی (Snappy/Zstd)، <b>کدگذاری دیکشنری</b> و <b>RLE</b> برای ستون‌های تکراری، آمار هر بلوک (min/max) برای <b>رد کردن بلوک‌های نامربوط</b> (predicate pushdown) و خواندن فقط ستون‌های لازم (projection pushdown).</p>
<p>چرا از CSV بهتر است: نوع داخل فایل، حجم کمتر (۵–۱۰×)، خواندن بسیار سریع‌تر برای تحلیل، و پارتیشن‌بندی (<code class='inline'>year=2026/month=10/</code>). برای بار تراکنشی (ردیفی) مناسب نیست. ابزارها: <code class='inline'>pyarrow</code>، <code class='inline'>pandas.read_parquet</code>، DuckDB. این محیط pyarrow ندارد؛ ایده‌های هسته‌ای را (چیدمان ستونی، کدگذاری دیکشنری، RLE، آمار بلوک) از صفر می‌سازیم.""",
"بلوک‌بندی با آمار min/max را پیاده کن و نشان بده فیلتر چند بلوک را رد می‌کند.",
py="""import random, json, sys
random.seed(3)
rows = [{"city": random.choice(["تهران", "شیراز", "تبریز"]), "age": random.randint(18, 90), "salary": random.randint(1, 100)} for _ in range(30000)]
cols = {k: [r[k] for r in rows] for k in rows[0]}                     # ردیفی → ستونی
def dict_encode(col):
    uniq = sorted(set(col)); idx = {v: i for i, v in enumerate(uniq)}
    return uniq, [idx[v] for v in col]
def rle(values):
    out, prev, n = [], None, 0
    for v in values:
        if v == prev: n += 1
        else:
            if n: out.append((prev, n))
            prev, n = v, 1
    return out + [(prev, n)]
uniq, codes = dict_encode(cols["city"])
print("دیکشنری:", uniq, "| ۵ کد اول:", codes[:5])
print("RLE روی داده‌ی مرتب:", len(rle(sorted(cols["city"]))), "run به‌جای", len(cols["city"]))
row_size = len(json.dumps(rows)); col_size = len(json.dumps({"city": [uniq, codes], "age": cols["age"], "salary": cols["salary"]}))
print("ردیفی/ستونی ≈", round(row_size / col_size, 1), "برابر")
# بلوک‌ها با آمار min/max (pushdown): داده بر اساس سن مرتب‌شده نوشته شده است
srt = sorted(rows, key=lambda r: r["age"])
blocks = [srt[i:i + 3000] for i in range(0, len(srt), 3000)]
stats = [(min(r["age"] for r in b), max(r["age"] for r in b)) for b in blocks]
need = [i for i, (lo, hi) in enumerate(stats) if hi > 80]
print(f"شرط age>80: فقط {len(need)} بلوک از {len(blocks)} خوانده می‌شود")""",
extra=code("pyarrow / pandas (اجرا نشده)","""import pandas as pd
df = pd.read_csv("big.csv")
df.to_parquet("data/", partition_cols=["year"], compression="zstd")

import pyarrow.dataset as ds
dset = ds.dataset("data/", format="parquet", partitioning="hive")
t = dset.to_table(columns=["city", "salary"], filter=ds.field("age") > 80)   # pushdown"""))

add(4,23,"""<p><b>pandas</b> استاندارد تحلیل داده است ولی تک‌نخی، مبتنی بر NumPy، پرمصرف‌حافظه و <b>اجرای مشتاق</b> (eager) است. <b>Polars</b> (نوشته‌شده با Rust، بر پایه‌ی Arrow) چندنخی، کم‌حافظه و دارای <b>اجرای تنبل</b> (lazy) است: <code class='inline'>pl.scan_csv(...).filter(...).group_by(...).agg(...).collect()</code> یک <b>برنامه‌ی پرس‌وجو</b> می‌سازد و <b>بهینه‌ساز</b> آن را بازنویسی می‌کند: predicate/projection pushdown، حذف محاسبات تکراری و موازی‌سازی.</p>
<p>انتخاب: داده‌ی کوچک/تعاملی و اکوسیستم غنی → pandas؛ داده‌ی بزرگ و کارایی → Polars (یا DuckDB با SQL). سینتکس Polars بر <b>عبارت‌ها</b> (<code class='inline'>pl.col("a") * 2</code>) استوار است نه اندیس‌گذاری. در pandas ۲ هم Arrow پشتیبان (<code class='inline'>dtype_backend="pyarrow"</code>) و Copy-on-Write اضافه شده است. اینجا مفهوم برنامه‌ی تنبل و بهینه‌سازی را با یک ساختار کوچک نشان می‌دهیم.""",
"عملگر with_columns را به برنامه‌ی تنبل اضافه کن و ترتیب فیلتر قبل از محاسبه را بهینه کن.",
py="""class Lazy:
    def __init__(self, rows, ops=()): self.rows, self.ops = rows, tuple(ops)
    def filter(self, pred, name="pred"): return Lazy(self.rows, self.ops + (("filter", name, pred),))
    def select(self, *cols): return Lazy(self.rows, self.ops + (("select", cols, None),))
    def optimize(self):
        # قاعده: فیلترها را زودتر انجام بده (pushdown) تا داده‌ی کمتری عبور کند
        filters = [o for o in self.ops if o[0] == "filter"]; others = [o for o in self.ops if o[0] != "filter"]
        return Lazy(self.rows, filters + others)
    def explain(self): return " → ".join(f"{o[0]}({o[1]})" for o in self.ops)
    def collect(self):
        data = self.rows
        for kind, arg, fn in self.ops:
            if kind == "filter": data = [r for r in data if fn(r)]
            elif kind == "select": data = [{c: r[c] for c in arg} for r in data]
        return list(data)
rows = [{"id": i, "v": i % 10, "pad": "x" * 10} for i in range(20)]
q = Lazy(rows).select("id", "v").filter(lambda r: r["v"] == 3, "v==3")
print("برنامه:   ", q.explain())
print("بهینه‌شده:", q.optimize().explain())
print(q.optimize().collect())""",
extra=code("Polars (اجرا نشده)","""import polars as pl

q = (
    pl.scan_parquet("data/*.parquet")                 # تنبل: هنوز چیزی نخوانده
      .filter(pl.col("age") > 30)
      .group_by("city")
      .agg(pl.col("salary").mean().alias("avg"))
      .sort("avg", descending=True)
)
print(q.explain())      # برنامه‌ی بهینه‌شده: pushdown فیلتر و ستون‌ها
df = q.collect()        # اجرای موازی"""))

add(4,24,"""<p>گراف‌ها مدل رابطه‌اند (جاده، شبکه‌ی اجتماعی، وابستگی). نمایش: <b>لیست مجاورت</b> (<code class='inline'>dict[node, list]</code>؛ معمول و کم‌حافظه) یا ماتریس مجاورت (گراف متراکم). الگوریتم‌های پایه: <b>BFS</b> (کوتاه‌ترین مسیر در گراف بی‌وزن با صف)، <b>DFS</b> (مسیر، مؤلفه‌ها، تشخیص چرخه با پشته/بازگشت)، <b>Dijkstra</b> (کوتاه‌ترین مسیر وزن‌دار نامنفی با heap؛ O((V+E) log V))، <b>مرتب‌سازی توپولوژیک</b> (وابستگی‌ها: Kahn یا DFS)، <b>Union-Find</b> و <b>Kruskal</b> (درخت پوشای کمینه).</p>
<p>انتخاب ساختمان داده مهم‌ترین تصمیم است: صف (<code class='inline'>deque</code>) برای BFS، heap برای Dijkstra، مجموعه برای دیده‌شده‌ها. در Dijkstra از ورودی‌های قدیمی heap صرف‌نظر کن (lazy deletion). وزن منفی نیاز به Bellman-Ford دارد. برای گراف‌های عظیم از NetworkX/igraph/scipy.sparse استفاده کن.""",
"گراف جاده‌ای بساز و کوتاه‌ترین مسیر و ترتیب ساخت وابستگی‌ها را با Dijkstra و Kahn پیدا کن.",
py="""import heapq
from collections import deque, defaultdict
roads = {"A": {"B": 4, "C": 2}, "B": {"D": 5}, "C": {"B": 1, "D": 8}, "D": {}}
def bfs_levels(g, s):
    dist, q = {s: 0}, deque([s])
    while q:
        u = q.popleft()
        for v in g[u]:
            if v not in dist: dist[v] = dist[u] + 1; q.append(v)
    return dist
def dijkstra(g, s):
    dist, prev, pq = {s: 0}, {}, [(0, s)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist.get(u, float("inf")): continue            # ورودی قدیمی
        for v, w in g[u].items():
            nd = d + w
            if nd < dist.get(v, float("inf")):
                dist[v], prev[v] = nd, u; heapq.heappush(pq, (nd, v))
    return dist, prev
def path(prev, t):
    out = [t]
    while out[-1] in prev: out.append(prev[out[-1]])
    return out[::-1]
dist, prev = dijkstra(roads, "A")
print(bfs_levels(roads, "A"), dist, path(prev, "D"))
def topo(deps):
    indeg = defaultdict(int); adj = defaultdict(list)
    for a, bs in deps.items():
        indeg[a] += 0
        for b in bs: adj[b].append(a); indeg[a] += 1
    q = deque(sorted(n for n, d in indeg.items() if d == 0)); order = []
    while q:
        n = q.popleft(); order.append(n)
        for m in adj[n]:
            indeg[m] -= 1
            if indeg[m] == 0: q.append(m)
    if len(order) != len(indeg): raise ValueError("وابستگی چرخه‌ای")
    return order
print(topo({"app": ["lib", "util"], "lib": ["core"], "util": ["core"], "core": []}))
try: topo({"a": ["b"], "b": ["a"]})
except ValueError as e: print("خطا:", e)
class DSU:
    def __init__(self): self.p = {}
    def find(self, x):
        self.p.setdefault(x, x)
        while self.p[x] != x: self.p[x] = self.p[self.p[x]]; x = self.p[x]
        return x
    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb: return False
        self.p[ra] = rb; return True
edges = sorted([(1, "A", "B"), (4, "A", "C"), (2, "B", "C"), (7, "C", "D"), (3, "B", "D")])
d = DSU(); mst = [(w, a, b) for w, a, b in edges if d.union(a, b)]
print("MST:", mst, "وزن:", sum(w for w, *_ in mst))""")

add(4,25,"""<p><b>برنامه‌نویسی پویا</b> (DP) مسئله را به زیرمسئله‌های <b>هم‌پوشان</b> با <b>ساختار بهینه</b> می‌شکند و هر زیرمسئله را یک‌بار حل می‌کند. دو سبک: <b>بالا‌به‌پایین</b> (بازگشت + <code class='inline'>@cache</code>، memoization) و <b>پایین‌به‌بالا</b> (جدول، tabulation). گام‌ها: ۱) حالت (state) را تعریف کن، ۲) رابطه‌ی بازگشتی، ۳) حالت پایه، ۴) ترتیب پر کردن، ۵) بازسازی پاسخ (مسیر) در صورت نیاز.</p>
<p>مسائل کلاسیک: <b>کوله‌پشتی</b> ۰/۱، <b>LCS</b> (بزرگ‌ترین زیردنباله‌ی مشترک)، <b>ویرایش (Levenshtein)</b>، <b>LIS</b>، سکه‌ها (کمینه تعداد)، و مسیر در جدول. بهینه‌سازی حافظه: اگر هر ردیف فقط به قبلی وابسته است، فقط دو ردیف نگه دار. DP برای مسئله‌های «حریصانه» لازم نیست؛ ولی وقتی تصمیم‌ها وابسته‌اند، حریص جواب بهینه نمی‌دهد.""",
"مسئله‌ی خرد کردن پول (کمینه سکه) را حل کن و ثابت کن حریص برای مجموعه‌ی [1, 3, 4] شکست می‌خورد.",
py="""from functools import cache
def edit_distance(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur                                                   # فقط دو ردیف
    return prev[-1]
print(edit_distance("kitten", "sitting"), edit_distance("سلام", "سلامت"))
def lcs(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            dp[i][j] = dp[i-1][j-1] + 1 if a[i-1] == b[j-1] else max(dp[i-1][j], dp[i][j-1])
    i, j, out = len(a), len(b), []
    while i and j:                                                   # بازسازی پاسخ
        if a[i-1] == b[j-1]: out.append(a[i-1]); i -= 1; j -= 1
        elif dp[i-1][j] >= dp[i][j-1]: i -= 1
        else: j -= 1
    return "".join(reversed(out))
print(lcs("AGGTAB", "GXTXAYB"))
def knapsack(items, cap):
    dp = [0] * (cap + 1)
    for w, v in items:
        for c in range(cap, w - 1, -1): dp[c] = max(dp[c], dp[c - w] + v)
    return dp[cap]
print(knapsack([(1, 1), (3, 4), (4, 5), (5, 7)], 7))
@cache
def coins(amount, tup):
    if amount == 0: return 0
    best = float("inf")
    for c in tup:
        if c <= amount: best = min(best, 1 + coins(amount - c, tup))
    return best
def greedy(amount, cs):
    n = 0
    for c in sorted(cs, reverse=True): n += amount // c; amount %= c
    return n
print("DP:", coins(6, (1, 3, 4)), "حریص:", greedy(6, (1, 3, 4)), "← 3+3 بهتر از 4+1+1")
import bisect
def lis(xs):
    tails = []
    for x in xs:
        i = bisect.bisect_left(tails, x)
        tails[i:i+1] = [x]
    return len(tails)
print(lis([10, 9, 2, 5, 3, 7, 101, 18]))""")
