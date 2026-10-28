import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))

add(4,26,"""<p><b>Trie</b> (درخت پیشوندی) برای جست‌وجوی پیشوند و تکمیل خودکار: هر گره یک نویسه؛ جست‌وجو O(طول کلمه) مستقل از تعداد کلمات. <b>Heap</b> (<code class='inline'>heapq</code>) کوچک‌ترین عنصر را در O(1) و درج/حذف را در O(log n) می‌دهد؛ برای «k بزرگ‌ترین»، صف اولویت و ادغام مرتب. <b>Segment tree</b> پرس‌وجوی بازه‌ای (جمع/کمینه) و به‌روزرسانی نقطه‌ای را هر دو در O(log n) انجام می‌دهد (آرایه‌ی ساده: پرس‌وجو O(n)).</p>
<p>انتخاب ساختار درست بزرگ‌ترین اهرم کارایی است: مجموعه برای عضویت، deque برای صف، bisect برای مرتب و heap برای اولویت.""",
"به trie حذف کلمه را اضافه کن و به segment tree پرس‌وجوی کمینه.",
py="""import heapq
class Trie:
    def __init__(self): self.root = {}
    def add(self, w):
        n = self.root
        for ch in w: n = n.setdefault(ch, {})
        n["$"] = True
    def complete(self, prefix):
        n = self.root
        for ch in prefix:
            if ch not in n: return []
            n = n[ch]
        out = []
        def dfs(node, acc):
            for k, v in sorted(node.items()):
                if k == "$": out.append(prefix + acc)
                else: dfs(v, acc + k)
        dfs(n, ""); return out
t = Trie()
for w in ["python", "pyramid", "pytest", "java", "pypi"]: t.add(w)
print(t.complete("py"), t.complete("x"))
data = [5, 1, 9, 3, 7, 8]
print(heapq.nlargest(3, data), heapq.nsmallest(2, data))
class SegTree:
    def __init__(self, a):
        self.n = len(a); self.t = [0] * self.n + a[:]
        for i in range(self.n - 1, 0, -1): self.t[i] = self.t[2 * i] + self.t[2 * i + 1]
    def update(self, i, v):
        i += self.n; self.t[i] = v
        while i > 1: i //= 2; self.t[i] = self.t[2 * i] + self.t[2 * i + 1]
    def query(self, l, r):                     # [l, r)
        s, l, r = 0, l + self.n, r + self.n
        while l < r:
            if l & 1: s += self.t[l]; l += 1
            if r & 1: r -= 1; s += self.t[r]
            l //= 2; r //= 2
        return s
st = SegTree(data)
print(st.query(1, 4)); st.update(2, 100); print(st.query(1, 4))""")

add(4,27,"""<p>الگوریتم‌های رشته‌ای برای جست‌وجوی سریع: <b>KMP</b> با جدول شکست (failure function) الگو را در O(n+m) پیدا می‌کند و هرگز به عقب برنمی‌گردد. <b>Rabin–Karp</b> با هش غلتان (rolling hash) و مناسب جست‌وجوی چندالگویی. <b>فاصله‌ی ویرایش</b> برای املا، و <b>Z-function / suffix array</b> برای مسائل پیشرفته‌تر. در عمل <code class='inline'>str.find</code> و <code class='inline'>re</code> بسیار بهینه‌اند؛ فهمیدن الگوریتم برای مسائل خاص و مصاحبه است.""",
"Rabin–Karp را کامل کن که چند الگو را هم‌زمان جست‌وجو کند.",
py="""def kmp_table(p):
    f = [0] * len(p); k = 0
    for i in range(1, len(p)):
        while k and p[i] != p[k]: k = f[k - 1]
        if p[i] == p[k]: k += 1
        f[i] = k
    return f
def kmp_search(text, p):
    f, k, hits = kmp_table(p), 0, []
    for i, ch in enumerate(text):
        while k and ch != p[k]: k = f[k - 1]
        if ch == p[k]: k += 1
        if k == len(p): hits.append(i - k + 1); k = f[k - 1]
    return hits
print(kmp_table("ababaca"), kmp_search("abababcabab", "abab"))
def rabin_karp(text, p, B=257, M=1_000_003):
    n, m = len(text), len(p)
    if m > n: return []
    hp = ht = 0; hi = pow(B, m - 1, M)
    for i in range(m): hp = (hp * B + ord(p[i])) % M; ht = (ht * B + ord(text[i])) % M
    out = []
    for i in range(n - m + 1):
        if hp == ht and text[i:i + m] == p: out.append(i)
        if i < n - m: ht = ((ht - ord(text[i]) * hi) * B + ord(text[i + m])) % M
    return out
print(rabin_karp("abababcabab", "abab"), "abababcabab".find("cab"))""")

add(4,28,"""<p>هندسه‌ی محاسباتی با <b>ضرب خارجی</b> (cross product) ۲بعدی شروع می‌شود: علامت <code class='inline'>(b-a)×(c-a)</code> می‌گوید c سمت چپ (+)، راست (−) یا روی خط (۰) است. با آن می‌توان <b>پوش محدب</b> (Andrew monotone chain، O(n log n))، مساحت چندضلعی (فرمول شوله/shoelace)، نقطه در چندضلعی و برخورد پاره‌خط‌ها را حل کرد. مراقب دقت اعداد اعشاری باش؛ هر جا ممکن است با عدد صحیح کار کن.""",
"تست «نقطه درون چندضلعی» را با ray casting بنویس.",
py="""def cross(o, a, b): return (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
def convex_hull(pts):
    pts = sorted(set(pts))
    if len(pts) < 3: return pts
    lo, up = [], []
    for p in pts:
        while len(lo) >= 2 and cross(lo[-2], lo[-1], p) <= 0: lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up) >= 2 and cross(up[-2], up[-1], p) <= 0: up.pop()
        up.append(p)
    return lo[:-1] + up[:-1]
pts = [(0,0),(4,0),(4,4),(0,4),(2,2),(1,3),(3,1)]
h = convex_hull(pts); print(h)
def area(poly):
    return abs(sum(poly[i][0]*poly[(i+1)%len(poly)][1] - poly[(i+1)%len(poly)][0]*poly[i][1] for i in range(len(poly)))) / 2
print("مساحت:", area(h))
def inside(pt, poly):
    x, y, c = *pt, False
    for i in range(len(poly)):
        (x1, y1), (x2, y2) = poly[i], poly[(i+1) % len(poly)]
        if (y1 > y) != (y2 > y) and x < (x2-x1)*(y-y1)/(y2-y1) + x1: c = not c
    return c
print(inside((2, 2), h), inside((5, 5), h))""")

add(4,29,"""<p>بهینه‌سازی عددی: پیدا کردن کمینه‌ی تابع. <b>گرادیان کاهشی</b>: <code class='inline'>x ← x − η·f′(x)</code>؛ نرخ یادگیری η کوچک = کند، بزرگ = واگرا. <b>روش نیوتن</b> از مشتق دوم استفاده و سریع همگرا می‌شود. <b>جست‌وجوی سه‌گانه / طلایی</b> برای توابع تک‌مینه بدون مشتق. در عمل از <code class='inline'>scipy.optimize</code> استفاده می‌شود؛ مشتق را عددی با تفاضل مرکزی تقریب می‌زنند.""",
"گرادیان کاهشی را با ممنتوم گسترش بده و سرعت همگرایی را مقایسه کن.",
py="""def grad(f, x, h=1e-6): return (f(x + h) - f(x - h)) / (2 * h)
def gd(f, x, lr=0.1, steps=200):
    for _ in range(steps): x -= lr * grad(f, x)
    return x
f = lambda x: (x - 3) ** 2 + 1
print(round(gd(f, 0.0), 4))
print("lr بزرگ واگرا:", abs(gd(f, 0.0, lr=1.1, steps=50)) > 1e6)
def newton(f, x, steps=10):
    for _ in range(steps):
        d1 = grad(f, x); d2 = (f(x + 1e-4) - 2*f(x) + f(x - 1e-4)) / 1e-8
        x -= d1 / d2
    return x
print(round(newton(f, 10.0), 4))
def golden(f, a, b, tol=1e-6):
    g = (5 ** 0.5 - 1) / 2
    while b - a > tol:
        c, d = b - g * (b - a), a + g * (b - a)
        if f(c) < f(d): b = d
        else: a = c
    return (a + b) / 2
print(round(golden(f, -10, 10), 4))
def momentum(f, x, lr=0.05, beta=0.9, steps=100):
    v = 0
    for _ in range(steps): v = beta * v - lr * grad(f, x); x += v
    return x
print(round(momentum(f, 0.0), 3))""")

add(4,30,"""<p><b>قضیه‌ی CAP</b>: در حضور <b>پارتیشن شبکه</b> (P) باید بین <b>سازگاری</b> (C: همه یک مقدار را ببینند) و <b>دسترس‌پذیری</b> (A: هر درخواست پاسخ بگیرد) یکی را انتخاب کنی. سیستم‌های CP (مثل etcd، ZooKeeper) به‌جای پاسخ ناسازگار رد می‌کنند؛ AP (مثل Cassandra، DynamoDB) پاسخ می‌دهند و بعداً هم‌گرا می‌شوند (<b>سازگاری نهایی</b>).</p>
<p>مفاهیم: <b>کورم</b> (R+W>N)، ساعت برداری/لَمپورت برای ترتیب رویدادها، حل تعارض (آخرین نوشته برنده، CRDT)، و اجماع (Raft/Paxos). این‌جا کورم و سازگاری نهایی را شبیه‌سازی می‌کنیم.""",
"با N=5 و W=2 و R=2 نشان بده خواندن کهنه ممکن است و با W=3 و R=3 ممکن نیست.",
py="""import random
class Cluster:
    def __init__(self, n): self.nodes = [{} for _ in range(n)]; self.clock = 0
    def write(self, k, v, w, down=()):
        self.clock += 1; ok = 0
        for i in random.sample(range(len(self.nodes)), len(self.nodes)):
            if i in down: continue
            self.nodes[i][k] = (self.clock, v); ok += 1
            if ok == w: break
        return ok >= w
    def read(self, k, r, down=()):
        alive = [i for i in range(len(self.nodes)) if i not in down]
        vals = [self.nodes[i].get(k, (0, None)) for i in random.sample(alive, min(r, len(alive)))]
        return max(vals)[1]
def stale_rate(N, W, R, trials=2000):
    random.seed(1); stale = 0
    for _ in range(trials):
        c = Cluster(N); c.write("x", "قدیمی", N); c.write("x", "جدید", W)
        stale += c.read("x", R) != "جدید"
    return stale / trials
print("W=2,R=2 (R+W<=N):", stale_rate(5, 2, 2))
print("W=3,R=3 (R+W>N): ", stale_rate(5, 3, 3))
c = Cluster(3); print("با ۲ گره از کار افتاده، نوشتن W=2:", c.write("k", 1, 2, down=(0, 1)), "← CP: رد می‌شود")""")

add(4,31,"""<p><b>Protocol Buffers</b> قالب سریالایز دودویی، فشرده و دارای اسکیما است؛ <b>gRPC</b> روی HTTP/2 با آن RPC می‌سازد: قرارداد در فایل <code class='inline'>.proto</code> تعریف و کد کلاینت/سرور تولید می‌شود، با جریان‌های دوطرفه، مهلت (deadline) و نوع‌دهی قوی. مزیت نسبت به JSON: حجم و سرعت بهتر، قرارداد صریح و سازگاری عقب‌رو (شماره‌ی فیلدها هرگز تغییر نکند). عیب: خوانایی انسانی و پشتیبانی مرورگر محدود.</p>
<p>اینجا اصل رمزگذاری <b>varint</b> (هسته‌ی protobuf) را پیاده می‌کنیم؛ کتابخانه‌ی grpcio در این محیط نیست.""",
"رمزگذاری یک پیام {id:150, name:'a'} را به‌دست بیاور و اندازه را با JSON مقایسه کن.",
py="""import json
def varint(n):
    out = bytearray()
    while True:
        b = n & 0x7F; n >>= 7
        out.append(b | (0x80 if n else 0))
        if not n: return bytes(out)
def read_varint(buf, i=0):
    shift = n = 0
    while True:
        b = buf[i]; i += 1; n |= (b & 0x7F) << shift; shift += 7
        if not b & 0x80: return n, i
print(varint(1).hex(), varint(150).hex(), read_varint(varint(300))[0])
def encode(msg):                               # فیلد: شماره + نوع؛ 0=varint، 2=طول‌دار
    out = b""
    for num, v in msg.items():
        if isinstance(v, int): out += varint(num << 3 | 0) + varint(v)
        else: d = v.encode(); out += varint(num << 3 | 2) + varint(len(d)) + d
    return out
b = encode({1: 150, 2: "a"})
print(b.hex(), len(b), "بایت در برابر JSON:", len(json.dumps({"id": 150, "name": "a"})))""",
extra=code("user.proto (اجرا نشده)","""syntax = "proto3";
service Users { rpc Get (UserReq) returns (User); }
message UserReq { int32 id = 1; }
message User { int32 id = 1; string name = 2; }   // شماره‌ی فیلد را هرگز تغییر نده"""))

add(4,32,"""<p><b>Event Sourcing</b>: به‌جای ذخیره‌ی «وضعیت فعلی»، <b>دنباله‌ی رویدادهای تغییرناپذیر</b> را ذخیره می‌کنی (<code class='inline'>AccountOpened, Deposited, Withdrawn</code>) و وضعیت را با <b>بازپخش</b> (fold) می‌سازی. مزایا: ممیزی کامل، بازگشت زمانی، بازسازی نماها. <b>CQRS</b>: مدل <b>نوشتن</b> (فرمان‌ها و قوانین) از مدل <b>خواندن</b> (نماهای بهینه‌شده) جداست و با رویدادها همگام می‌شود (سازگاری نهایی). هزینه: پیچیدگی، نسخه‌بندی رویداد، و تصویربرداری (snapshot) برای جریان‌های طولانی.""",
"رویداد Transfer را اضافه کن و snapshot برای سرعت بخشیدن بازپخش بساز.",
py="""from dataclasses import dataclass
@dataclass(frozen=True)
class Event: type: str; amount: int = 0
def apply(state, e):
    if e.type == "Deposited": return state + e.amount
    if e.type == "Withdrawn": return state - e.amount
    return state
class Account:
    def __init__(self): self.events = []
    def handle(self, cmd, amount):                      # سمت فرمان: قانون‌ها اینجاست
        bal = self.balance()
        if cmd == "withdraw" and amount > bal: raise ValueError("موجودی ناکافی")
        self.events.append(Event("Withdrawn" if cmd == "withdraw" else "Deposited", amount))
    def balance(self, upto=None):
        s = 0
        for e in self.events[:upto]: s = apply(s, e)
        return s
a = Account(); a.handle("deposit", 100); a.handle("withdraw", 30); a.handle("deposit", 5)
print(a.balance(), "| تاریخچه:", [e.type for e in a.events], "| بازگشت زمانی (۲ رویداد اول):", a.balance(2))
try: a.handle("withdraw", 999)
except ValueError as e: print("رد شد:", e)
read_model = {}                                          # سمت پرس‌وجو: نمای جدا
for e in a.events: read_model[e.type] = read_model.get(e.type, 0) + e.amount
print(read_model)""")

add(4,33,"""<p><b>میکروسرویس</b>: سرویس‌های کوچک مستقل با دیتابیس و استقرار جدا، هماهنگ از راه HTTP/gRPC/پیام‌رسانی. مزیت: مقیاس و استقرار مستقل، تیم‌های مستقل. هزینه: شبکه‌ی ناپایدار، تراکنش توزیع‌شده، مشاهده‌پذیری و عملیات. قاعده: با <b>مونولیت ماژولار</b> شروع کن و فقط با دلیل جدا کن.</p>
<p>الگوها: <b>API Gateway</b>، <b>Saga</b> (تراکنش توزیع‌شده با مراحل جبرانی)، <b>Outbox</b> (انتشار مطمئن رویداد)، <b>idempotency</b> (تکرار امن درخواست) و <b>health check</b>. Saga را شبیه‌سازی می‌کنیم.""",
"مرحله‌ی «ارسال» را اضافه کن که شکست بخورد و جبران‌ها به ترتیب معکوس اجرا شوند.",
py="""log = []
class Step:
    def __init__(self, name, action, compensate): self.name, self.action, self.compensate = name, action, compensate
def run_saga(steps):
    done = []
    for s in steps:
        try:
            s.action(); log.append(f"✓ {s.name}"); done.append(s)
        except Exception as e:
            log.append(f"✗ {s.name}: {e}")
            for d in reversed(done): d.compensate(); log.append(f"↩ جبران {d.name}")
            return False
    return True
def fail(): raise RuntimeError("انبار پر است")
ok = run_saga([
    Step("رزرو موجودی", lambda: None, lambda: None),
    Step("پرداخت", lambda: None, lambda: None),
    Step("ارسال", fail, lambda: None)])
print(ok); print("\\n".join(log))
processed = set()
def idempotent(req_id, fn):
    if req_id in processed: return "تکراری — نادیده"
    processed.add(req_id); return fn()
print(idempotent("r1", lambda: "انجام شد"), "|", idempotent("r1", lambda: "انجام شد"))""")

add(4,34,"""<p>در سیستم توزیع‌شده خطا عادی است. <b>Retry</b> با <b>backoff نمایی + jitter</b> (تصادفی کردن تأخیر تا هجوم هم‌زمان نشود) فقط برای خطاهای <b>گذرا</b> و عملیات <b>idempotent</b>. <b>Circuit breaker</b> سه حالت دارد: بسته (عادی)، باز (بعد از چند شکست، فوراً رد می‌کند تا سرویس خراب فشار نبیند) و نیمه‌باز (پس از مهلت، یک آزمایش). همچنین <b>timeout</b> همیشه، <b>bulkhead</b> (جداسازی منابع) و <b>fallback</b>.""",
"حالت نیمه‌باز را با شمارنده‌ی موفقیت لازم برای بسته شدن تکمیل کن.",
py="""import random
def retry(fn, tries=5, base=0.1, cap=2.0, sleep=lambda s: None, rng=random.Random(1)):
    for i in range(tries):
        try: return fn()
        except ConnectionError:
            if i == tries - 1: raise
            sleep(min(cap, base * 2 ** i) * rng.random())          # full jitter
calls = {"n": 0}
def flaky():
    calls["n"] += 1
    if calls["n"] < 3: raise ConnectionError
    return "موفق"
print(retry(flaky), "بعد از", calls["n"], "تلاش")
class Breaker:
    def __init__(self, threshold=3, timeout=10): self.th, self.timeout, self.fails, self.opened, self.state = threshold, timeout, 0, 0, "closed"
    def call(self, fn, now):
        if self.state == "open":
            if now - self.opened < self.timeout: raise RuntimeError("مدار باز — رد شد")
            self.state = "half"
        try: r = fn()
        except Exception:
            self.fails += 1
            if self.state == "half" or self.fails >= self.th: self.state, self.opened = "open", now
            raise
        self.fails, self.state = 0, "closed"; return r
def bad(): raise ConnectionError
b = Breaker(); res = []
for t in range(6):
    try: b.call(bad, t)
    except Exception as e: res.append((t, b.state, type(e).__name__))
print(res)
print(b.call(lambda: "سرویس برگشت", 20), b.state)""")

add(4,35,"""<p>مشاهده‌پذیری سه ستون دارد: <b>لاگ</b>، <b>متریک</b> و <b>تریس</b>. تریس مسیر یک درخواست را بین سرویس‌ها نشان می‌دهد: هر <b>span</b> نام، زمان شروع/پایان، شناسه‌ی والد و ویژگی‌ها دارد و همه با یک <b>trace_id</b> متصل‌اند که در هدر (استاندارد W3C <code class='inline'>traceparent</code>) منتقل می‌شود. <b>OpenTelemetry</b> استاندارد باز برای تولید این داده‌هاست. پایین، ایده‌ی span تو در تو را با context manager و <code class='inline'>contextvars</code> می‌سازیم.""",
"ویژگی‌ها (attributes) و ثبت خطا را به span اضافه کن.",
py="""import contextvars, itertools
current = contextvars.ContextVar("span", default=None)
ids = itertools.count(1); spans = []; clock = itertools.count(0, 5)
class Span:
    def __init__(self, name): self.name = name
    def __enter__(self):
        p = current.get()
        self.id, self.parent, self.start = next(ids), p.id if p else None, next(clock)
        self.token = current.set(self); return self
    def __exit__(self, et, ev, tb):
        self.end = next(clock); current.reset(self.token)
        spans.append((self.id, self.parent, self.name, self.end - self.start, "error" if et else "ok"))
def db(): 
    with Span("db.query"): pass
def handler():
    with Span("GET /users"):
        with Span("auth"): pass
        db()
handler()
for s in sorted(spans): print(s)
tp = "00-" + "ab" * 16 + "-" + "cd" * 8 + "-01"
print("traceparent:", tp, "| trace_id:", tp.split("-")[1][:8], "…")""")

add(4,36,"""<p><b>load testing</b> قبل از تولید گلوگاه را آشکار می‌کند. انواع: بار عادی، فشار (stress) تا شکست، spike و soak (طولانی). معیارها: <b>توان‌عبوری</b> (RPS)، <b>تأخیر صدک‌ها</b> (p50/p95/p99؛ میانگین گمراه‌کننده است) و نرخ خطا. <b>قانون لیتل</b>: <code class='inline'>L = λ·W</code> (تعداد هم‌زمان = نرخ ورود × زمان ماندن). ابزارها: Locust (پایتون)، k6، wrk. مراقب <b>Coordinated Omission</b> باش.""",
"ظرفیت لازم را برای ۵۰۰ RPS با زمان پاسخ ۰٫۲ ثانیه با قانون لیتل حساب کن.",
py="""import random, statistics
random.seed(5)
lat = [random.lognormvariate(-2.5, 0.6) * 1000 for _ in range(10000)]       # ms
def pct(xs, p):
    xs = sorted(xs); return xs[int(len(xs) * p / 100) - 1]
print(f"میانگین {statistics.mean(lat):.0f}ms | p50 {pct(lat,50):.0f} | p95 {pct(lat,95):.0f} | p99 {pct(lat,99):.0f}")
rps, w = 500, 0.2
print("هم‌زمانی لازم (لیتل):", rps * w)
workers = 10; per_worker = 1 / w
print("ظرفیت ۱۰ کارگر:", workers * per_worker, "RPS ← کافی نیست" if workers * per_worker < rps else "کافی")
def queue_wait(util):                                   # M/M/1: افزایش انفجاری با اشباع
    return 1 / (1 - util)
print({u: round(queue_wait(u), 1) for u in (0.5, 0.8, 0.9, 0.99)})""",
extra=code("locustfile.py (اجرا نشده)","""from locust import HttpUser, task, between
class Shopper(HttpUser):
    wait_time = between(1, 3)
    @task(3)
    def browse(self): self.client.get("/products")
    @task
    def buy(self): self.client.post("/cart", json={"id": 1})
# locust -f locustfile.py --users 500 --spawn-rate 50"""))

add(4,37,"""<p>اجرای کد غیرقابل‌اعتماد در پایتون <b>با خود پایتون امن نمی‌شود</b>: حذف <code class='inline'>__builtins__</code> یا فهرست‌سفید توابع هزاران دور زدن دارد (مثلاً از طریق <code class='inline'>().__class__.__mro__</code>). امنیت واقعی در <b>لایه‌ی سیستم‌عامل</b> است: فرایند جدا با کاربر بدون امتیاز، <code class='inline'>resource.setrlimit</code> برای CPU/حافظه، <b>seccomp</b>، namespace/کانتینر، شبکه‌ی بسته و timeout سخت. اگر فقط محاسبه‌ی عبارت لازم است: <code class='inline'>ast.literal_eval</code> یا مفسر خودت (درس ۱۶).</p>
<p>در زیر یک اعتبارسنج AST با فهرست سفید (برای عبارات ریاضی) می‌بینی؛ ولی هشدار: این برای اجرای کد دلخواه کافی نیست.""",
"فهرست سفید را طوری گسترش بده که فقط توابع abs و round مجاز باشند.",
py="""import ast, operator as op
ALLOWED = {ast.Add: op.add, ast.Sub: op.sub, ast.Mult: op.mul, ast.Div: op.truediv, ast.Pow: op.pow, ast.USub: op.neg}
def safe_eval(expr):
    def ev(n):
        if isinstance(n, ast.Expression): return ev(n.body)
        if isinstance(n, ast.Constant) and isinstance(n.value, (int, float)): return n.value
        if isinstance(n, ast.BinOp) and type(n.op) in ALLOWED:
            if isinstance(n.op, ast.Pow) and isinstance(n.right, ast.Constant) and n.right.value > 100: raise ValueError("توان بزرگ")
            return ALLOWED[type(n.op)](ev(n.left), ev(n.right))
        if isinstance(n, ast.UnaryOp) and type(n.op) in ALLOWED: return ALLOWED[type(n.op)](ev(n.operand))
        raise ValueError(f"مجاز نیست: {type(n).__name__}")
    return ev(ast.parse(expr, mode="eval"))
print(safe_eval("2 + 3 * (4 - 1) ** 2"))
for bad in ["__import__('os').system('ls')", "().__class__", "9 ** 9999999"]:
    try: safe_eval(bad)
    except ValueError as e: print("رد شد:", bad[:22], "→", e)
try:
    import resource
    resource.setrlimit(resource.RLIMIT_CPU, (5, 5)); print("حد CPU تنظیم شد:", resource.getrlimit(resource.RLIMIT_CPU))
except (ImportError, ValueError, OSError):
    print("resource در این محیط نیست (روی لینوکس هست)")""")

add(4,38,"""<p>تحلیل ایستا خطا را بدون اجرا می‌گیرد. لایه‌ها: <b>فرمت</b> (black/ruff format)، <b>lint</b> (ruff، flake8: خطای احتمالی و سبک)، <b>نوع</b> (mypy، pyright)، <b>امنیت</b> (bandit) و <b>پیچیدگی</b> (radon). ruff (Rust) همه را بسیار سریع انجام می‌دهد. چینش حرفه‌ای: <code class='inline'>pre-commit</code> محلی + CI که با شکست بلوکه می‌کند. قاعده‌های کم و مهم بهتر از صدها قاعده‌ی نادیده‌گرفته‌شده‌اند. در درس ۱۷ تحلیلگر ساختیم؛ اینجا یک قاعده‌ی تعاملی و گزارش‌دهی خطوط را اضافه می‌کنیم.""",
"قاعده‌ی «except خالی» و «==None» را به لینتر اضافه کن.",
py="""import ast
code = '''
def f(x):
    try:
        y = x == None
    except:
        pass
    assert (x, "پیام")
    return y
'''
class Lint(ast.NodeVisitor):
    def __init__(self): self.out = []
    def add(self, n, code, msg): self.out.append((n.lineno, code, msg))
    def visit_ExceptHandler(self, n):
        if n.type is None: self.add(n, "E722", "except خالی همه‌چیز را می‌بلعد")
        self.generic_visit(n)
    def visit_Compare(self, n):
        for op, c in zip(n.ops, n.comparators):
            if isinstance(op, (ast.Eq, ast.NotEq)) and isinstance(c, ast.Constant) and c.value is None:
                self.add(n, "E711", "از is None استفاده کن")
        self.generic_visit(n)
    def visit_Assert(self, n):
        if isinstance(n.test, ast.Tuple): self.add(n, "F631", "assert روی تاپل همیشه درست است")
        self.generic_visit(n)
l = Lint(); l.visit(ast.parse(code))
for r in sorted(l.out): print("خط %d %s %s" % r)""",
extra=code("pyproject.toml (اجرا نشده)","""[tool.ruff.lint]
select = ["E", "F", "B", "UP", "S"]
[tool.mypy]
strict = true
# pre-commit: ruff check --fix ; ruff format ; mypy src"""))

add(4,39,"""<p><b>Fuzzing</b>: ورودی‌های تصادفی/ساختاریافته به برنامه می‌دهی تا خطا و کرش پیدا شود. انواع: <b>کورکورانه</b> (random)، <b>مبتنی بر پوشش</b> (AFL، Atheris: ورودی‌هایی که مسیر جدید را باز می‌کنند نگه می‌دارد) و <b>مبتنی بر ویژگی</b> (Hypothesis: ویژگی‌های همیشه‌درست را می‌گویی و کوچک‌ترین مثال نقض را پیدا می‌کند). فاز <b>shrinking</b> مثال شکست را کوچک می‌کند.""",
"تابع parse_int معیوب را fuzz کن و ورودی نقض‌کننده را به حداقل کوچک کن.",
py="""import random
def parse_kv(s):                       # معیوب: روی ورودی بدون '=' و با جداکننده‌ی تکراری خطا دارد
    d = {}
    for part in s.split(","):
        k, v = part.split("=")
        d[k] = int(v)
    return d
def fuzz(fn, gen, n=2000, seed=0):
    rng = random.Random(seed)
    for _ in range(n):
        s = gen(rng)
        try: fn(s)
        except Exception as e: return s, e
alphabet = "ab=,1 "
gen = lambda r: "".join(r.choice(alphabet) for _ in range(r.randint(0, 12)))
case = fuzz(parse_kv, gen); print("اولین شکست:", repr(case[0]), type(case[1]).__name__)
def shrink(fn, s):
    changed = True
    while changed:
        changed = False
        for i in range(len(s)):
            t = s[:i] + s[i + 1:]
            try: fn(t)
            except Exception: s, changed = t, True; break
    return s
print("کوچک‌شده:", repr(shrink(parse_kv, case[0])))""",
extra=code("Hypothesis (اجرا نشده)","""from hypothesis import given, strategies as st
@given(st.lists(st.integers()))
def test_sort_idempotent(xs):
    assert sorted(sorted(xs)) == sorted(xs)"""))

add(4,40,"""<p>پوشش ۱۰۰٪ یعنی خطوط اجرا شده‌اند نه اینکه درست <b>بررسی</b> شده‌اند. <b>Mutation testing</b> کیفیت خود تست‌ها را می‌سنجد: کد را عمداً خراب می‌کند (جهش: <code class='inline'>+</code>→<code class='inline'>-</code>، <code class='inline'>&lt;</code>→<code class='inline'>&lt;=</code>) و می‌بیند تست‌ها می‌شکنند یا نه. جهشی که تست‌ها نگرفتند «زنده» است = تست ضعیف. <b>نمره‌ی جهش</b> = کشته‌شده/کل. ابزار: mutmut، cosmic-ray. یک جهش‌دهنده‌ی کوچک با AST می‌سازیم.""",
"یک تست اضافه کن که جهش زنده‌ی لیست را بکشد.",
py="""import ast, copy
src = "def clamp(x, lo, hi):\\n    if x < lo: return lo\\n    if x > hi: return hi\\n    return x\\n"
def tests_weak(f): assert f(5, 0, 10) == 5 and f(-1, 0, 10) == 0
def tests_strong(f): tests_weak(f); assert f(11, 0, 10) == 10 and f(0, 0, 10) == 0 and f(10, 0, 10) == 10
SWAP = {ast.Lt: ast.LtE, ast.Gt: ast.GtE}
def mutants(tree):
    n = sum(isinstance(x, ast.Compare) for x in ast.walk(tree))
    for i in range(n):
        t = copy.deepcopy(tree)
        c = [x for x in ast.walk(t) if isinstance(x, ast.Compare)][i]
        c.ops = [SWAP[type(o)]() for o in c.ops]
        yield ast.fix_missing_locations(t)
def score(tests):
    killed = total = 0
    for m in mutants(ast.parse(src)):
        ns = {}; exec(compile(m, "m", "exec"), ns); total += 1
        try: tests(ns["clamp"])
        except AssertionError: killed += 1
    return killed, total
print("تست ضعیف:", score(tests_weak), "| تست قوی:", score(tests_strong))""")

add(4,41,"""<p>دیباگ حرفه‌ای فراتر از print است. <code class='inline'>breakpoint()</code> دیباگر <code class='inline'>pdb</code> را باز می‌کند: دستورها <code class='inline'>n</code> (خط بعد)، <code class='inline'>s</code> (ورود)، <code class='inline'>c</code> (ادامه)، <code class='inline'>p expr</code>، <code class='inline'>l</code>، <code class='inline'>w</code> (پشته)، <code class='inline'>u/d</code> (حرکت بین frameها). <b>post-mortem</b>: <code class='inline'>python -m pdb script.py</code> یا <code class='inline'>pdb.post_mortem()</code> بعد از استثنا. دیباگ راه‌دور: <code class='inline'>debugpy</code> با VS Code، و در ۳٫۱۴ <code class='inline'>pdb -p PID</code>. در تولید: لاگ ساختاریافته و ثبت متغیرهای محلی هنگام خطا (Sentry).""",
"با ثبت متغیرهای محلی frame شکست‌خورده، گزارش خطای کامل بساز.",
py="""import sys, traceback, pdb, io
def divide(a, b): return a / b
def process(items):
    total = 0
    for x in items: total += divide(10, x)
    return total
def crash_report(exc):
    tb = exc.__traceback__; frames = []
    while tb: frames.append(tb); tb = tb.tb_next
    last = frames[-1]
    return {"error": repr(exc), "where": f"{last.tb_frame.f_code.co_name}:{last.tb_lineno}", "locals": {k: v for k, v in last.tb_frame.f_locals.items()}}
try: process([5, 2, 0])
except Exception as e: print(crash_report(e))
p = pdb.Pdb(stdin=io.StringIO("w\\nu\\np items\\nq\\n"), stdout=io.StringIO())
p.use_rawinput = False; p.reset()
try: process([1, 0])
except Exception: p.interaction(None, sys.exc_info()[2])
print(p.stdout.getvalue().replace("\\n", " | ")[-170:])""",
extra=code("debugpy (اجرا نشده)","""# روی سرور: pip install debugpy
import debugpy; debugpy.listen(("0.0.0.0", 5678)); debugpy.wait_for_client()
# VS Code: Attach → localhost:5678  (حتماً از تونل SSH استفاده کن، نه پورت باز)"""))

add(4,42,"""<p>گام اول رفع باگ <b>بازتولید قطعی</b> آن است: ثبت ورودی، seed تصادفی، نسخه‌ها و زمان. سپس <b>کوچک‌سازی</b> (دودویی روی ورودی/تاریخچه‌ی commit با <code class='inline'>git bisect</code>)، نوشتن تستی که می‌شکند، رفع و نگه داشتن تست. <b>Postmortem بدون سرزنش</b>: خط زمانی، علت ریشه‌ای (۵ چرا)، اثر، چه چیز خوب پیش رفت، و اقدام‌های پیگیری با مسئول و تاریخ. هدف بهبود سیستم است نه یافتن مقصر.""",
"git bisect را با تابع عبور/شکست شبیه‌سازی کن و اولین commit معیوب را پیدا کن.",
py="""def bisect_first_bad(commits, is_bad):
    lo, hi, steps = 0, len(commits) - 1, 0
    while lo < hi:
        mid = (lo + hi) // 2; steps += 1
        if is_bad(commits[mid]): hi = mid
        else: lo = mid + 1
    return commits[lo], steps
commits = [f"c{i}" for i in range(1, 129)]
first_bad = "c77"
res, steps = bisect_first_bad(commits, lambda c: int(c[1:]) >= int(first_bad[1:]))
print(res, "پس از", steps, "گام برای ۱۲۸ commit")
import random
def flaky(seed):
    rng = random.Random(seed); return rng.random() < 0.3
fails = [s for s in range(20) if flaky(s)]
print("seedهای شکست (قابل بازتولید):", fails[:5])""",
extra=code("قالب postmortem","""عنوان / تاریخ / شدت
خلاصه (۲ جمله)
خط زمانی (UTC): ۱۴:۰۲ هشدار … ۱۴:۲۰ رفع
اثر: چند کاربر، چه مدت
علت ریشه‌ای (۵ چرا)
چه چیز خوب بود / چه چیز بد / شانس
اقدام‌ها: [مسئول] [موعد] [لینک تیکت]"""))

add(4,43,"""<p>سرور پایتون در تولید: <b>gunicorn</b> (WSGI، چندفرایندی pre-fork) یا <b>uvicorn</b> (ASGI، حلقه‌ی asyncio/uvloop) — معمولاً gunicorn با کارگر <code class='inline'>uvicorn.workers.UvicornWorker</code> پشت nginx. تعداد کارگر: CPU-bound ≈ ۲×هسته+۱ برای sync؛ برای async ≈ تعداد هسته. پارامترها: <code class='inline'>--timeout</code>، <code class='inline'>--max-requests</code> (بازچرخانی کارگر برای نشت حافظه)، <code class='inline'>--preload</code> (حافظه‌ی مشترک copy-on-write)، keepalive، و health check. هر کارگر = یک کپی از برنامه در حافظه؛ ظرفیت RAM را حساب کن. حالت مشترک بین کارگرها ممکن نیست (Redis/DB).""",
"تعداد کارگر مناسب را برای ۴ هسته و حافظه‌ی ۱ گیگ با ۲۰۰ مگابایت به ازای کارگر حساب کن.",
py="""def workers(cores, ram_mb, per_worker_mb, kind="sync"):
    by_cpu = 2 * cores + 1 if kind == "sync" else cores
    by_ram = int(ram_mb * 0.8 // per_worker_mb)                   # ۲۰٪ برای سیستم
    return min(by_cpu, by_ram), by_cpu, by_ram
print(workers(4, 1024, 200), workers(4, 8192, 200), workers(4, 8192, 200, "async"))
import itertools
rr = itertools.cycle(["w1", "w2", "w3"])                           # توزیع تقریبی درخواست‌ها
print([next(rr) for _ in range(7)])""",
extra=code("gunicorn.conf.py (اجرا نشده)","""bind = "0.0.0.0:8000"
workers = 5
worker_class = "uvicorn.workers.UvicornWorker"
timeout = 30
max_requests = 1000
max_requests_jitter = 100
preload_app = True
accesslog = "-\""""))

add(4,44,"""<p>مهاجرت کد قدیمی باید <b>تدریجی و تست‌محور</b> باشد. py2→py3: ابتدا تست و <code class='inline'>python -m pyupgrade</code>/<code class='inline'>2to3</code>/<code class='inline'>modernize</code>؛ تفاوت‌های اصلی: <code class='inline'>print</code> تابع، <code class='inline'>/</code> اعشاری، str=یونیکد و bytes جدا، <code class='inline'>dict.iteritems</code> حذف، <code class='inline'>range</code> تنبل. <b>typing تدریجی</b>: mypy با <code class='inline'>--ignore-missing-imports</code>، ابتدا ماژول‌های حیاتی، <code class='inline'>Any</code> موقت، ماژول به ماژول سخت‌گیری. الگوی Strangler: کد جدید دور قدیمی می‌پیچد تا جایگزین شود.""",
"خروجی تقسیم و بایت/رشته را در سناریوی مهاجرت بررسی کن.",
py="""print(7 / 2, 7 // 2)                           # py2: هر دو 3
data = "سلام".encode("utf-8")
print(type(data).__name__, data.decode("utf-8"), len("سلام"), len(data))
try: "a" + b"b"
except TypeError as e: print("py3 اجازه‌ی مخلوط نمی‌دهد:", e)
d = {"a": 1}
print(list(d.items()), type(range(3)).__name__)
from typing import Any
def legacy(x): return x * 2                    # بدون نوع
def typed(x: int) -> int: return legacy(x)
def partial(x: Any) -> Any: return legacy(x)    # مرحله‌ی میانی
print(typed(4), partial("ab"))""")

add(4,45,"""<p>API عمومی قرارداد است. اصول: ۱) <b>سازگاری عقب‌رو</b>: افزودن فیلد/پارامتر اختیاری مجاز؛ حذف/تغییر معنی/اجباری کردن ممنوع. ۲) <b>نسخه‌بندی معنایی</b> (MAJOR.MINOR.PATCH). ۳) <b>منسوخ‌سازی تدریجی</b> با <code class='inline'>DeprecationWarning</code> و زمان‌بندی. ۴) نسخه در URL (<code class='inline'>/v1/</code>) یا هدر. ۵) فقط آنچه لازم است عمومی کن (<code class='inline'>__all__</code>، پیشوند <code class='inline'>_</code>). ۶) قراردادها را با تست قرارداد قفل کن.""",
"دکوراتور deprecated بنویس که هشدار با نام جایگزین بدهد.",
py="""import warnings, functools
def deprecated(use, since):
    def deco(fn):
        @functools.wraps(fn)
        def w(*a, **k):
            warnings.warn(f"{fn.__name__} از نسخه‌ی {since} منسوخ است؛ از {use} استفاده کن", DeprecationWarning, stacklevel=2)
            return fn(*a, **k)
        return w
    return deco
def get_user_v2(id, *, include_orders=False): return {"id": id, "orders": [] if include_orders else None}
@deprecated(use="get_user_v2", since="2.0")
def get_user(id): return get_user_v2(id)
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always"); get_user(1)
    print(w[0].category.__name__, "|", w[0].message)
print(get_user_v2(1), get_user_v2(2, include_orders=True))     # افزودن پارامتر اختیاری = سازگار
def parse_version(v): return tuple(int(x) for x in v.split("."))
print(parse_version("2.10.1") > parse_version("2.9.9"))""")

add(4,46,"""<p>سؤال‌های مصاحبه‌ی پایتون بیشتر مفهوم‌اند تا حفظی: <b>تغییرپذیری</b> (آرگومان پیش‌فرض لیست)، <b>closure و late binding</b>، <b>GIL</b>، تفاوت <code class='inline'>is</code> و <code class='inline'>==</code>، <b>generator و iterator</b>، <b>decorator</b>، <b>MRO</b>، <b>مدیریت حافظه</b> و <b>کپی سطحی/عمیق</b>. پاسخ خوب: تعریف کوتاه + مثال + پیامد عملی. چند تله‌ی کلاسیک را اجرا می‌کنیم؛ پیش از اجرا پیش‌بینی کن.""",
"برای هر تله دلیل را در یک جمله بنویس.",
py="""def add(x, acc=[]):
    acc.append(x); return acc
print(add(1), add(2))                           # پیش‌فرض یک‌بار ساخته می‌شود
fs = [lambda: i for i in range(3)]
print([f() for f in fs], [(lambda i=i: i)() for i in range(3)])
a = 256; b = 256; c = 10 ** 3; d = 10 ** 3
print(a is b, [1] == [1], [1] is [1])
import copy
x = [[1], [2]]; s = copy.copy(x); dp = copy.deepcopy(x); x[0].append(9)
print(s[0], dp[0])
class A: 
    def who(self): return "A"
class B(A): 
    def who(self): return "B>" + super().who()
class C(A):
    def who(self): return "C>" + super().who()
class D(B, C): pass
print(D().who(), [k.__name__ for k in D.__mro__])
t = ([1], 2)
try: t[0] += [3]
except TypeError: print("خطا ولی لیست تغییر کرد:", t)""")

add(4,47,"""<p><b>پروژه‌ی نهایی ۱: موتور جست‌وجو.</b> اجزا: ۱) <b>پیش‌پردازش</b> (حروف کوچک، توکن، حذف کلمات توقف، نرمال‌سازی فارسی: ی/ک عربی)، ۲) <b>نمایه‌ی وارونه</b> (کلمه → سند و بسامد)، ۳) <b>امتیازدهی TF-IDF</b> یا BM25 و ۴) رتبه‌بندی با heap. این‌ها هسته‌ی Elasticsearch/Lucene‌اند. افزودنی‌ها برای تمرین: عبارت‌جویی، هایلایت، ذخیره‌ی روی دیسک.""",
"BM25 را جایگزین TF-IDF کن و نتیجه را مقایسه کن.",
py="""import math, re, heapq
from collections import defaultdict, Counter
def normalize(t): return t.replace("ي", "ی").replace("ك", "ک").lower()
STOP = {"و", "در", "به", "از", "که", "را", "است", "با", "the", "a", "of"}
def tokens(t): return [w for w in re.findall(r"\\w+", normalize(t)) if w not in STOP]
class Index:
    def __init__(self): self.docs, self.inv = {}, defaultdict(dict)
    def add(self, id, text):
        tk = tokens(text); self.docs[id] = (text, len(tk))
        for w, c in Counter(tk).items(): self.inv[w][id] = c
    def search(self, q, k=3):
        N, scores = len(self.docs), defaultdict(float)
        for w in tokens(q):
            post = self.inv.get(w, {}); idf = math.log(1 + N / (1 + len(post)))
            for id, tf in post.items(): scores[id] += tf / self.docs[id][1] * idf
        return [(round(s, 3), self.docs[i][0]) for i, s in heapq.nlargest(k, ((i, s) for i, s in scores.items()), key=lambda x: x[1])]
ix = Index()
for i, t in enumerate(["پایتون زبان برنامه‌نویسی است", "یادگیری پایتون و هوش مصنوعی", "آشپزی با برنج و مرغ", "Python web framework with Django"]): ix.add(i, t)
for q in ["پایتون هوش", "برنج", "django"]: print(q, "→", ix.search(q))""")

add(4,48,"""<p><b>پروژه‌ی نهایی ۲: صف کار و کارگر توزیع‌شده.</b> اجزا: <b>تولیدکننده</b> کار را در صف می‌گذارد؛ <b>کارگرها</b> می‌گیرند و اجرا می‌کنند؛ ویژگی‌های حیاتی: <b>تأیید (ack)</b> پس از موفقیت، <b>مهلت دید (visibility timeout)</b> تا کار گمشده دوباره صف شود، <b>retry با سقف</b> و <b>صف مرده (DLQ)</b> برای کارهای سمی، و <b>idempotency</b> چون تحویل «حداقل یک‌بار» است. معادل Celery/RQ/SQS. این‌جا با ساعت قابل‌تزریق و بدون شبکه می‌سازیم تا کاملاً قطعی باشد.""",
"اولویت کار را اضافه کن تا کارهای فوری اول پردازش شوند.",
py="""import heapq, itertools
class Queue:
    def __init__(self, visibility=10, max_tries=3):
        self.ready, self.inflight, self.dlq, self.vis, self.max = [], {}, [], visibility, max_tries
        self.ids = itertools.count(1)
    def put(self, payload): heapq.heappush(self.ready, (next(self.ids), 0, payload))
    def get(self, now):
        for id, (deadline, tries, p) in list(self.inflight.items()):      # کار گمشده برگردد
            if deadline <= now:
                del self.inflight[id]
                if tries >= self.max: self.dlq.append(p)
                else: heapq.heappush(self.ready, (id, tries, p))
        if not self.ready: return None
        id, tries, p = heapq.heappop(self.ready)
        self.inflight[id] = (now + self.vis, tries + 1, p); return id, p
    def ack(self, id): self.inflight.pop(id, None)
q = Queue(); [q.put(f"job{i}") for i in range(3)]
done = set()
def worker(now, crash=False):
    got = q.get(now)
    if not got: return None
    id, p = got
    if crash: return f"{p}: کارگر مُرد"              # ack نشد
    if p not in done: done.add(p)                    # idempotent
    q.ack(id); return f"{p}: انجام"
print(worker(0), worker(1, crash=True), worker(2))
print(worker(12), worker(13))                        # job1 بعد از مهلت دوباره می‌آید
for t in (30, 50, 70): worker(t, crash=True)
print("done:", sorted(done), "| DLQ:", q.dlq)""")

add(4,49,"""<p><b>پروژه‌ی نهایی ۳: افزونه‌ی عمومی در PyPI.</b> ساختار استاندارد: <code class='inline'>src/pkg/</code>، <code class='inline'>pyproject.toml</code> (متادیتا، وابستگی‌ها، نقطه‌ی ورود CLI)، <code class='inline'>README</code>، <code class='inline'>LICENSE</code>، <code class='inline'>tests/</code> و CI. ساخت: <code class='inline'>python -m build</code>؛ تست روی TestPyPI؛ انتشار با <code class='inline'>twine upload</code> یا <b>Trusted Publishing</b> (OIDC بدون توکن). نسخه‌بندی معنایی و CHANGELOG. <b>entry points</b> امکان پلاگین‌های شخص ثالث را می‌دهد: <code class='inline'>importlib.metadata.entry_points(group=...)</code>.""",
"یک CLI با argparse به بسته اضافه کن که نسخه را چاپ کند.",
py="""import argparse, importlib.metadata as md
def main(argv=None):
    p = argparse.ArgumentParser(prog="slugify-fa", description="تبدیل متن به slug")
    p.add_argument("text"); p.add_argument("--sep", default="-")
    a = p.parse_args(argv)
    return a.sep.join(a.text.strip().lower().split())
print(main(["سلام   دنیای  پایتون"]), main(["a b c", "--sep", "_"]))
eps = md.entry_points(group="console_scripts")
print("تعداد console_scripts نصب‌شده:", len(list(eps)) >= 0)
try: print(md.version("pip"))
except md.PackageNotFoundError: print("بسته‌ی pip نصب نیست")""",
extra=code("pyproject.toml (اجرا نشده)","""[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
[project]
name = "slugify-fa"
version = "0.1.0"
requires-python = ">=3.10"
dependencies = []
[project.scripts]
slugify-fa = "slugify_fa.cli:main"
[project.entry-points."slugify_fa.plugins"]
digits = "slugify_fa.plugins:digits"
# python -m build && twine upload --repository testpypi dist/*"""))

add(4,50,"""<p>تبریک؛ مسیر <b>۰ تا ۲۰۰</b> تمام شد: نحو و داده‌ها، توابع و شیءگرایی، استاندارد کتابخانه، async و موازی‌سازی، تست و بسته‌بندی، درون‌ساخت مفسر، سیستم‌های توزیع‌شده و پروژه‌های بزرگ. <b>نقشه‌ی ادامه</b> بر اساس هدف: <b>وب</b> (FastAPI/Django، دیتابیس، استقرار)، <b>داده و هوش مصنوعی</b> (دوره‌ی AI همین پروژه)، <b>DevOps</b> (Docker، CI/CD، Kubernetes)، <b>امنیت</b>، <b>سیستمی/کارایی</b> (Rust، C). بهترین یادگیری: یک پروژه‌ی واقعی بساز، کد متن‌باز بخوان (CPython، requests، Flask)، و در جامعه مشارکت کن.""",
"نقشه‌ی ۶ ماهه‌ی شخصی بنویس: هدف، ۳ پروژه و معیار موفقیت هر کدام.",
py="""topics = {"نحو و داده‌ها": 50, "تابع/OOP/ماژول": 50, "استاندارد و async و تست": 50, "درون‌ساخت و معماری": 50}
print("جمع درس‌ها:", sum(topics.values()))
roadmap = {"وب": ["FastAPI", "PostgreSQL", "Docker"], "هوش مصنوعی": ["NumPy", "scikit-learn", "LLM"], "سیستمی": ["Rust", "PyO3", "پروفایل"]}
for k, v in roadmap.items(): print(f"{k}: {' ← '.join(v)}")""")

QUIZ={4:[
 quiz("خروجی tokenize/parse/compile به‌ترتیب چیست؟",["بایت‌کد، AST، توکن","توکن، AST، code object","AST، توکن، بایت‌کد","متن، متن، متن"],1,"توکن‌ها → درخت نحو → code object."),
 quiz("چرا از ۳٫۱۱ پایتون سریع‌تر شد؟",["حذف GIL","مفسر تطبیقی تخصصی با کش درون‌خطی","کامپایل به C","حذف بایت‌کد"],1,"دستورهای داغ به نسخه‌ی تخصصی نوع بازنویسی می‌شوند."),
 quiz("در C API «مرجع قرض‌گرفته» یعنی؟",["باید DECREF شود","نباید DECREF شود ولی ممکن است نامعتبر شود","همیشه NULL است","حافظه‌ی مشترک"],1,"مالکیت با تابع دیگر است؛ نگه داشتن طولانی نیاز به INCREF دارد."),
 quiz("TCP چه نوع جریانی است و پیامدش؟",["پیام‌محور؛ یک recv = یک پیام","جریان بایت؛ باید مرز پیام تعریف کرد","فقط متن","بدون ترتیب"],1,"recv ممکن است پیام را نصف یا چندتا را یکجا بدهد."),
 quiz("کدام برای گراف وزن‌دار نامنفی بهینه است؟",["BFS","Dijkstra با heap","DFS","مرتب‌سازی توپولوژیک"],1,"Dijkstra در O((V+E) log V)."),
 quiz("در CAP هنگام پارتیشن شبکه یک سیستم CP چه می‌کند؟",["پاسخ ناسازگار می‌دهد","درخواست را رد می‌کند تا سازگاری حفظ شود","خاموش می‌شود","داده را حذف می‌کند"],1,"سازگاری را به دسترس‌پذیری ترجیح می‌دهد."),
 quiz("چرا jitter در retry لازم است؟",["برای امنیت","تا کلاینت‌ها هم‌زمان هجوم نیاورند","برای لاگ","برای کوتاه‌تر شدن تأخیر"],1,"تأخیر تصادفی باعث هم‌زمان نشدن تلاش‌های مجدد می‌شود."),
 quiz("Mutation testing چه چیزی را می‌سنجد؟",["سرعت کد","کیفیت و قدرت تشخیص تست‌ها","اندازه‌ی کد","نسخه‌ی پایتون"],1,"جهش زنده یعنی تست‌ها آن را نگرفتند."),
]}
CHALLENGE={4:{"task":"یک «حافظه‌ی نهان با زمان انقضا» (TTLCache) بنویس: TTLCache(ttl) با متدهای set(key, value, now) و get(key, now) که اگر مقدار منقضی شده (now - زمان‌ثبت >= ttl) None برگرداند و کلید را حذف کند. now قابل‌تزریق باشد.",
 "hint1":"برای هر کلید (مقدار، زمان انقضا) را در دیکشنری نگه دار.",
 "hint2":"در get اگر now >= زمان انقضا بود کلید را حذف کن و None برگردان.",
 "solution":"class TTLCache:\n    def __init__(self, ttl):\n        self.ttl, self.d = ttl, {}\n    def set(self, key, value, now):\n        self.d[key] = (value, now + self.ttl)\n    def get(self, key, now):\n        item = self.d.get(key)\n        if item is None:\n            return None\n        value, exp = item\n        if now >= exp:\n            del self.d[key]\n            return None\n        return value\n\nc = TTLCache(10)\nc.set('a', 1, 0)\nprint(c.get('a', 5), c.get('a', 10), 'a' in c.d)  # 1 None False"}}
