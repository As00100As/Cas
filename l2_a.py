import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']
TORCH_NOTE="<p><b>توجه:</b> PyTorch در مرورگر (Pyodide) در دسترس نیست؛ کد PyTorch به‌صورت بلوک آمده (اجرا نشده) و معادل کاملاً اجراشدنی با NumPy کنارش هست. روی سیستم خودت با <code class='inline'>pip install torch</code> اجرا کن.</p>"

add(2,1,"""<p><b>نورون مصنوعی</b> الهام‌گرفته از نورون زیستی: ورودی‌ها <code class='inline'>x₁…xₙ</code> در وزن‌ها ضرب و با بایاس جمع می‌شوند: <code class='inline'>z = Σwᵢxᵢ + b</code> و سپس یک <b>تابع فعال‌سازی</b> غیرخطی <code class='inline'>a = f(z)</code> اعمال می‌شود. وزن‌ها اهمیت هر ورودی، و بایاس آستانه‌ی فعال شدن را تنظیم می‌کند. یک نورون با سیگموید دقیقاً رگرسیون لجستیک است؛ قدرت از ترکیب هزاران نورون در لایه‌ها می‌آید.""",
"نورونی بساز که گیت AND را بسازد و وزن‌ها را دستی پیدا کن.",
py="""import numpy as np
sigmoid = lambda z: 1 / (1 + np.exp(-z))
def neuron(x, w, b, f=sigmoid): return f(np.dot(w, x) + b)
print(neuron([1, 2], [0.5, -0.3], 0.1))
step = lambda z: (z > 0).astype(int) if hasattr(z, "astype") else int(z > 0)
w, b = np.array([1, 1]), -1.5
for x in ([0, 0], [0, 1], [1, 0], [1, 1]): print(x, "AND →", int(np.dot(w, x) + b > 0))
w, b = np.array([1, 1]), -0.5
print("OR:", [int(np.dot(w, x) + b > 0) for x in ([0, 0], [0, 1], [1, 0], [1, 1])])""",packages=NP)

add(2,2,"""<p><b>پرسپترون</b> (۱۹۵۸): نورون با تابع پله. قانون یادگیری: برای هر نمونه اگر خطا شد <code class='inline'>w ← w + η(y − ŷ)x</code>. اگر داده <b>خطی‌جداپذیر</b> باشد در تعداد متناهی گام همگرا می‌شود (قضیه‌ی همگرایی). ولی <b>XOR</b> خطی‌جداپذیر نیست و تک‌پرسپترون آن را نمی‌تواند یاد بگیرد؛ همین نتیجه (مینسکی ۱۹۶۹) باعث اولین زمستان شبکه‌های عصبی شد و راه‌حلش لایه‌ی پنهان است.""",
"پرسپترون را روی AND آموزش بده و نشان بده روی XOR هرگز به صفر خطا نمی‌رسد.",
py="""import numpy as np
def train(X, y, lr=0.1, epochs=50):
    w = np.zeros(X.shape[1]); b = 0.0
    for e in range(epochs):
        errs = 0
        for xi, yi in zip(X, y):
            pred = int(xi @ w + b > 0); d = yi - pred
            w += lr * d * xi; b += lr * d; errs += abs(d)
        if errs == 0: return w, b, e
    return w, b, None
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
for name, y in [("AND", [0, 0, 0, 1]), ("OR", [0, 1, 1, 1]), ("XOR", [0, 1, 1, 0])]:
    w, b, e = train(X, np.array(y)); print(name, "همگرا در دور", e, "| وزن", w.round(2), round(b, 2))""",packages=NP)

add(2,3,"""<p><b>MLP</b> (شبکه‌ی چندلایه): لایه‌ی ورودی، یک یا چند <b>لایه‌ی پنهان</b> و خروجی. هر لایه <code class='inline'>a = f(W·a_prev + b)</code>. با فعال‌سازی غیرخطی، قضیه‌ی <b>تقریب جهانی</b>: یک لایه‌ی پنهان با نورون کافی هر تابع پیوسته را تقریب می‌زند. بدون غیرخطی، چند لایه‌ی خطی معادل یک لایه‌اند. تعداد پارامترها: <code class='inline'>(ورودی+۱)×خروجی</code> برای هر لایه. عمق نمایش‌های سلسله‌مراتبی می‌سازد: لبه ← شکل ← شیء.""",
"شبکه‌ی ۲-۲-۱ را با وزن‌های دستی بساز که XOR را حل کند.",
py="""import numpy as np
step = lambda z: (z > 0).astype(float)
W1 = np.array([[1, 1], [1, 1]]); b1 = np.array([-0.5, -1.5])        # OR و AND
W2 = np.array([1, -1]); b2 = -0.5                                      # OR و نه AND
def xor_net(x): h = step(W1 @ x + b1); return int(step(W2 @ h + b2))
for x in ([0, 0], [0, 1], [1, 0], [1, 1]): print(x, "→", xor_net(np.array(x)))
def count_params(sizes): return sum((a + 1) * b for a, b in zip(sizes, sizes[1:]))
print("پارامترهای 784-128-64-10:", count_params([784, 128, 64, 10]))
A = np.random.default_rng(0).normal(size=(3, 3)); B = np.random.default_rng(1).normal(size=(3, 3)); x = np.ones(3)
print("بدون غیرخطی دو لایه = یک لایه:", np.allclose(B @ (A @ x), (B @ A) @ x))""",packages=NP)

add(2,4,"""<p>توابع فعال‌سازی: <b>Sigmoid</b> (۰ تا ۱؛ اشباع و گرادیان ناپدید‌شونده)، <b>Tanh</b> (−۱ تا ۱؛ مرکزی)، <b>ReLU</b> <code class='inline'>max(0,z)</code> (ساده و سریع، پیش‌فرض لایه‌های پنهان؛ ریسک «نورون مرده»)، <b>Leaky ReLU</b>، <b>GELU/SiLU</b> (نرم؛ در Transformerها)، <b>Softmax</b> (خروجی چندکلاسه؛ احتمال‌ها با مجموع ۱). انتخاب خروجی: رگرسیون = خطی، دودویی = سیگموید، چندکلاسه = softmax. مشتق هرکدام برای پس‌انتشار لازم است.""",
"مشتق ReLU و سیگموید را در چند نقطه محاسبه و مقایسه کن.",
py="""import numpy as np
sig = lambda z: 1 / (1 + np.exp(-z)); relu = lambda z: np.maximum(0, z)
gelu = lambda z: 0.5 * z * (1 + np.tanh(np.sqrt(2 / np.pi) * (z + 0.044715 * z ** 3)))
def softmax(z): e = np.exp(z - z.max()); return e / e.sum()
z = np.array([-5., -1., 0., 1., 5.])
print("sigmoid", sig(z).round(3)); print("relu   ", relu(z)); print("gelu   ", gelu(z).round(3))
print("مشتق sigmoid:", (sig(z) * (1 - sig(z))).round(4), "← در انتها ≈ ۰ (ناپدید شدن)")
print("مشتق relu:", (z > 0).astype(int))
print(softmax(np.array([1000., 1001., 1002.])).round(3), "← با کم کردن بیشینه پایدار است")""",packages=NP)

add(2,5,"""<p><b>پس‌انتشار</b> (backprop) گرادیان هزینه نسبت به همه‌ی وزن‌ها را با <b>قاعده‌ی زنجیره‌ای</b> از خروجی به ورودی محاسبه می‌کند. برای یک لایه: <code class='inline'>δ = ∂L/∂z</code>؛ سپس <code class='inline'>∂L/∂W = δ·a_prevᵀ</code>، <code class='inline'>∂L/∂b = δ</code> و خطا به لایه‌ی قبل: <code class='inline'>δ_prev = (Wᵀδ) ⊙ f′(z_prev)</code>. کارایی: هزینه‌ی محاسبه‌ی همه‌ی گرادیان‌ها ≈ هزینه‌ی یک بار پیش‌روی. <b>بررسی گرادیان عددی</b> روش اصلی کشف خطاهای پیاده‌سازی است.""",
"گرادیان تحلیلی یک شبکه‌ی دولایه را با گرادیان عددی بسنج.",
py="""import numpy as np
rng = np.random.default_rng(0)
X = rng.normal(size=(5, 3)); y = rng.normal(size=(5, 1))
W1, b1 = rng.normal(size=(3, 4)) * .5, np.zeros(4); W2, b2 = rng.normal(size=(4, 1)) * .5, np.zeros(1)
def forward(W1, b1, W2, b2):
    z1 = X @ W1 + b1; a1 = np.tanh(z1); out = a1 @ W2 + b2
    return z1, a1, out, np.mean((out - y) ** 2)
z1, a1, out, L = forward(W1, b1, W2, b2)
d_out = 2 * (out - y) / len(y)
gW2 = a1.T @ d_out; gb2 = d_out.sum(0)
d_a1 = d_out @ W2.T; d_z1 = d_a1 * (1 - a1 ** 2)
gW1 = X.T @ d_z1; gb1 = d_z1.sum(0)
def num_grad(idx, h=1e-6):
    P = [W1.copy(), b1.copy(), W2.copy(), b2.copy()]; P[idx][0] += h; up = forward(*P)[3]; P[idx][0] -= 2 * h; dn = forward(*P)[3]
    return (up - dn) / (2 * h)
print("W1[0,0]:", gW1[0, 0].round(6), num_grad(0)[0].round(6) if hasattr(num_grad(0), "__len__") else num_grad(0))
P = [W1.copy(), b1.copy(), W2.copy(), b2.copy()]; P[2][0, 0] += 1e-6; up = forward(*P)[3]; P[2][0, 0] -= 2e-6; dn = forward(*P)[3]
print("W2[0,0]:", gW2[0, 0].round(6), round((up - dn) / 2e-6, 6))""",packages=NP)

add(2,6,"""<p>پیاده‌سازی کامل شبکه‌ی عصبی با NumPy: کلاس با <code class='inline'>forward</code>، <code class='inline'>backward</code> و <code class='inline'>step</code>. مقداردهی اولیه‌ی <b>He</b> (<code class='inline'>√(2/n_in)</code> برای ReLU) و <b>Xavier</b> (برای tanh/sigmoid) واریانس فعال‌سازی را پایدار نگه می‌دارد. آموزش روی داده‌ی «دو هلال» که خطی‌جداپذیر نیست. این همان چیزی است که PyTorch زیر کاپوت انجام می‌دهد؛ با ساختن آن، autograd دیگر جادو نیست.""",
"تعداد نورون‌های پنهان را تغییر بده و اثر را روی دقت ببین.",
py="""import numpy as np
from sklearn.datasets import make_moons
rng = np.random.default_rng(0)
X, y = make_moons(400, noise=.2, random_state=0); y = y[:, None].astype(float)
class MLP:
    def __init__(self, sizes, seed=0):
        r = np.random.default_rng(seed)
        self.W = [r.normal(size=(a, b)) * np.sqrt(2 / a) for a, b in zip(sizes, sizes[1:])]; self.b = [np.zeros(b) for b in sizes[1:]]
    def forward(self, X):
        self.a = [X]
        for i, (W, b) in enumerate(zip(self.W, self.b)):
            z = self.a[-1] @ W + b
            self.a.append(1 / (1 + np.exp(-z)) if i == len(self.W) - 1 else np.maximum(0, z))
        return self.a[-1]
    def step(self, y, lr):
        n = len(y); d = (self.a[-1] - y) / n
        for i in reversed(range(len(self.W))):
            gW, gb = self.a[i].T @ d, d.sum(0)
            if i: d = (d @ self.W[i].T) * (self.a[i] > 0)
            self.W[i] -= lr * gW; self.b[i] -= lr * gb
net = MLP([2, 16, 16, 1])
for e in range(1500):
    p = net.forward(X); net.step(y, 0.5)
acc = ((net.forward(X) > .5) == y).mean(); print("دقت آموزش:", round(acc, 3))
for h in (1, 4, 32):
    n2 = MLP([2, h, 1]); [ (n2.forward(X), n2.step(y, .5)) for _ in range(1500) ]; print("پنهان", h, "دقت", round(((n2.forward(X) > .5) == y).mean(), 3))""",packages=['numpy','scikit-learn'])

add(2,7,TORCH_NOTE+"""<p><b>تنسور</b> آرایه‌ی چندبعدی با قابلیت اجرا روی GPU و ردیابی گرادیان است. در PyTorch: <code class='inline'>torch.tensor, zeros, randn, arange</code>؛ ویژگی‌ها <code class='inline'>shape, dtype, device</code>؛ عملیات شبیه NumPy (<code class='inline'>@, sum, mean, view/reshape</code>). انتقال: <code class='inline'>.to("cuda")</code>. تبدیل به NumPy: <code class='inline'>.numpy()</code> (حافظه‌ی مشترک روی CPU). نوع پیش‌فرض float32. معادل NumPy همین مفاهیم را نشان می‌دهد: شکل، dtype و broadcasting.""",
"تنسور ۲×۳ بساز، transpose کن و با یک بردار broadcasting انجام بده.",
py="""import numpy as np
t = np.arange(6, dtype=np.float32).reshape(2, 3)
print(t, t.shape, t.dtype, t.T.shape)
print((t + np.array([10, 20, 30], np.float32)))
print((t @ t.T).shape, t.mean(axis=1), t.reshape(3, 2).shape)
print("نوع پیش‌فرض ML: float32 →", np.float32(0.1).nbytes, "بایت در برابر", np.float64(0.1).nbytes)""",packages=NP,
extra=code("PyTorch (اجرا نشده)","""import torch
t = torch.arange(6, dtype=torch.float32).reshape(2, 3)
print(t.shape, t.dtype, t.device)
print(t + torch.tensor([10., 20., 30.]))
dev = "cuda" if torch.cuda.is_available() else "cpu"
t = t.to(dev)
a = t.cpu().numpy()                 # حافظه‌ی مشترک روی CPU"""))

add(2,8,TORCH_NOTE+"""<p><b>autograd</b>: PyTorch هنگام اجرا <b>گراف محاسباتی پویا</b> می‌سازد. تنسور با <code class='inline'>requires_grad=True</code> عملیات را ثبت می‌کند و <code class='inline'>loss.backward()</code> گرادیان‌ها را در <code class='inline'>.grad</code> جمع می‌کند (تجمعی است! باید <code class='inline'>zero_grad()</code> کنی). برای استنتاج <code class='inline'>torch.no_grad()</code>. ما یک موتور خودکار مشتق مینیاتوری (شبیه micrograd) می‌سازیم تا این جادو را ببینی: هر گره مقدار، والدین و تابع پس‌انتشار محلی دارد.""",
"عملیات توان و tanh را به موتور اضافه کن.",
py="""import math
class V:
    def __init__(self, data, parents=(), op=""):
        self.data, self.grad, self._back, self.parents = data, 0.0, lambda: None, parents
    def __add__(self, o):
        o = o if isinstance(o, V) else V(o); out = V(self.data + o.data, (self, o))
        def back(): self.grad += out.grad; o.grad += out.grad
        out._back = back; return out
    def __mul__(self, o):
        o = o if isinstance(o, V) else V(o); out = V(self.data * o.data, (self, o))
        def back(): self.grad += o.data * out.grad; o.grad += self.data * out.grad
        out._back = back; return out
    def tanh(self):
        t = math.tanh(self.data); out = V(t, (self,))
        def back(): self.grad += (1 - t * t) * out.grad
        out._back = back; return out
    def backward(self):
        order, seen = [], set()
        def topo(v):
            if v not in seen:
                seen.add(v); [topo(p) for p in v.parents]; order.append(v)
        topo(self); self.grad = 1.0
        for v in reversed(order): v._back()
x, w, b = V(2.0), V(-3.0), V(6.8814)
out = (x * w + b).tanh(); out.backward()
print("out", round(out.data, 4), "| dx", round(x.grad, 4), "dw", round(w.grad, 4), "db", round(b.grad, 4))
h = 1e-6; f = lambda xv: math.tanh(xv * -3 + 6.8814); print("عددی dx:", round((f(2 + h) - f(2 - h)) / (2 * h), 4))""",
extra=code("PyTorch (اجرا نشده)","""import torch
x = torch.tensor(2.0, requires_grad=True)
w = torch.tensor(-3.0, requires_grad=True)
loss = torch.tanh(x * w + 6.8814)
loss.backward()
print(x.grad, w.grad)     # تجمعی: بعد از هر گام optimizer.zero_grad()"""))

add(2,9,TORCH_NOTE+"""<p>در PyTorch مدل زیرکلاس <code class='inline'>nn.Module</code> است: در <code class='inline'>__init__</code> لایه‌ها (<code class='inline'>nn.Linear, nn.ReLU, nn.Sequential</code>) و در <code class='inline'>forward</code> مسیر داده را می‌نویسی؛ پارامترها خودکار ثبت می‌شوند (<code class='inline'>model.parameters()</code>). ما همین الگوی شیءگرا را با NumPy می‌سازیم: ماژول‌هایی با <code class='inline'>forward/backward</code> و کانتینر ترتیبی. طراحی ماژولار یعنی لایه‌ها قابل‌ترکیب‌اند.""",
"لایه‌ی Dropout یا Tanh به کتابخانه‌ی کوچک اضافه کن.",
py="""import numpy as np
class Linear:
    def __init__(self, i, o, seed=0): r = np.random.default_rng(seed); self.W = r.normal(size=(i, o)) * np.sqrt(2 / i); self.b = np.zeros(o)
    def forward(self, x): self.x = x; return x @ self.W + self.b
    def backward(self, g, lr): gx = g @ self.W.T; self.W -= lr * self.x.T @ g; self.b -= lr * g.sum(0); return gx
class ReLU:
    def forward(self, x): self.m = x > 0; return x * self.m
    def backward(self, g, lr): return g * self.m
class Sequential:
    def __init__(self, *layers): self.layers = layers
    def forward(self, x):
        for l in self.layers: x = l.forward(x)
        return x
    def backward(self, g, lr):
        for l in reversed(self.layers): g = l.backward(g, lr)
rng = np.random.default_rng(1); X = rng.uniform(-3, 3, (200, 1)); y = np.sin(X)
model = Sequential(Linear(1, 32, 1), ReLU(), Linear(32, 32, 2), ReLU(), Linear(32, 1, 3))
for e in range(3000):
    p = model.forward(X); model.backward(2 * (p - y) / len(X), 0.02)
print("MSE نهایی:", round(float(np.mean((model.forward(X) - y) ** 2)), 4))""",packages=NP,
extra=code("PyTorch (اجرا نشده)","""import torch.nn as nn
class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(nn.Linear(1, 32), nn.ReLU(), nn.Linear(32, 32), nn.ReLU(), nn.Linear(32, 1))
    def forward(self, x): return self.layers(x)"""))

add(2,10,TORCH_NOTE+"""<p><b>حلقه‌ی آموزش</b> استاندارد: برای هر epoch و هر دسته: ۱) <code class='inline'>optimizer.zero_grad()</code>، ۲) پیش‌روی و هزینه، ۳) <code class='inline'>loss.backward()</code>، ۴) <code class='inline'>optimizer.step()</code>. بعد از هر epoch: ارزیابی روی اعتبارسنجی با <code class='inline'>model.eval()</code> و <code class='inline'>no_grad</code>. ثبت منحنی‌های هزینه، ذخیره‌ی بهترین checkpoint، و توقف زودهنگام. حلقه را به‌صورت تابعی بنویس که هم آموزش و هم ارزیابی را انجام دهد.""",
"early stopping به حلقه اضافه کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
X = rng.normal(size=(600, 5)); w_true = np.array([2, -1, 0, .5, 3.]); y = X @ w_true + rng.normal(0, 1, 600)
Xtr, ytr, Xva, yva = X[:400], y[:400], X[400:], y[400:]
w = np.zeros(5); best = (np.inf, None, 0); hist = []
for epoch in range(200):
    idx = rng.permutation(400)
    for i in range(0, 400, 32):
        b = idx[i:i + 32]; g = 2 * Xtr[b].T @ (Xtr[b] @ w - ytr[b]) / len(b); w -= 0.01 * g
    tr = np.mean((Xtr @ w - ytr) ** 2); va = np.mean((Xva @ w - yva) ** 2); hist.append((tr, va))
    if va < best[0] - 1e-4: best = (va, w.copy(), epoch)
    elif epoch - best[2] >= 10: break
print("توقف در epoch", epoch, "| بهترین epoch", best[2], "| اعتبار", round(best[0], 3))
print("وزن‌ها:", best[1].round(2))""",packages=NP,
extra=code("PyTorch (اجرا نشده)","""for epoch in range(epochs):
    model.train()
    for xb, yb in train_loader:
        optimizer.zero_grad()
        loss = loss_fn(model(xb), yb)
        loss.backward()
        optimizer.step()
    model.eval()
    with torch.no_grad():
        val = sum(loss_fn(model(x), y).item() for x, y in val_loader) / len(val_loader)"""))

add(2,11,TORCH_NOTE+"""<p>داده‌ی بزرگ را نمی‌توان یکجا در حافظه یا GPU گذاشت؛ <b>DataLoader</b> آن را به <b>دسته‌های</b> (batch) کوچک می‌شکند، هر epoch <b>بُر</b> می‌زند و با چند پردازه بارگذاری می‌کند. <code class='inline'>Dataset</code> با <code class='inline'>__len__</code> و <code class='inline'>__getitem__</code> تعریف می‌شود. اندازه‌ی batch: بزرگ = گرادیان کم‌نویز و سریع روی GPU ولی تعمیم گاهی بدتر و حافظه‌ی بیشتر؛ کوچک = نویز و منظم‌ساز ضمنی. معمول ۳۲–۵۱۲. با مولد پایتون همین را می‌سازیم.""",
"مولد دسته‌ی بدون‌تکرار با بُرزدن و دسته‌ی آخر ناقص بنویس.",
py="""import numpy as np
class Dataset:
    def __init__(self, X, y): self.X, self.y = X, y
    def __len__(self): return len(self.X)
    def __getitem__(self, i): return self.X[i], self.y[i]
class DataLoader:
    def __init__(self, ds, batch_size=4, shuffle=True, seed=0): self.ds, self.bs, self.shuffle, self.rng = ds, batch_size, shuffle, np.random.default_rng(seed)
    def __iter__(self):
        idx = self.rng.permutation(len(self.ds)) if self.shuffle else np.arange(len(self.ds))
        for i in range(0, len(idx), self.bs):
            b = [self.ds[j] for j in idx[i:i + self.bs]]
            yield np.stack([x for x, _ in b]), np.array([t for _, t in b])
    def __len__(self): return -(-len(self.ds) // self.bs)
ds = Dataset(np.arange(10).reshape(10, 1), np.arange(10) % 2)
dl = DataLoader(ds, 4)
for epoch in range(2): print("epoch", epoch, [xb.ravel().tolist() for xb, _ in dl])
print("تعداد دسته:", len(dl))""",packages=NP,
extra=code("PyTorch (اجرا نشده)","""from torch.utils.data import Dataset, DataLoader
class MyDS(Dataset):
    def __init__(self, X, y): self.X, self.y = X, y
    def __len__(self): return len(self.X)
    def __getitem__(self, i): return self.X[i], self.y[i]
loader = DataLoader(MyDS(X, y), batch_size=64, shuffle=True, num_workers=2)"""))

add(2,12,"""<p><b>بهینه‌سازها</b>: <b>SGD</b>: <code class='inline'>w ← w − η g</code>. <b>Momentum</b>: سرعت <code class='inline'>v ← βv + g</code> و <code class='inline'>w ← w − ηv</code> (نوسانات را میرا می‌کند). <b>RMSProp</b>: نرخ را بر ریشه‌ی میانگین مربع گرادیان تقسیم می‌کند (تطبیقی). <b>Adam</b>: ممنتوم + RMSProp با تصحیح اریب: <code class='inline'>m ← β₁m+(1−β₁)g</code>، <code class='inline'>v ← β₂v+(1−β₂)g²</code>، <code class='inline'>w ← w − η·m̂/(√v̂+ε)</code>. پیش‌فرض Adam با η=۱e−۳ نقطه‌ی شروع خوبی است؛ <b>AdamW</b> وزن‌کاهی را جدا می‌کند (استاندارد Transformer).""",
"روی تابع رزنبروک چهار بهینه‌ساز را مقایسه کن.",
py="""import numpy as np
def f(p): x, y = p; return (1 - x) ** 2 + 100 * (y - x ** 2) ** 2
def g(p): x, y = p; return np.array([-2 * (1 - x) - 400 * x * (y - x ** 2), 200 * (y - x ** 2)])
def run(opt, steps=3000):
    p = np.array([-1.5, 1.5]); s = {}
    for t in range(1, steps + 1): p = opt(p, g(p), s, t)
    return f(p)
def sgd(p, g, s, t, lr=1e-3): return p - lr * g
def mom(p, g, s, t, lr=1e-3, b=.9): s["v"] = b * s.get("v", 0) + g; return p - lr * s["v"]
def rms(p, g, s, t, lr=1e-2, b=.9): s["r"] = b * s.get("r", 0) + (1 - b) * g * g; return p - lr * g / (np.sqrt(s["r"]) + 1e-8)
def adam(p, g, s, t, lr=2e-2, b1=.9, b2=.999):
    s["m"] = b1 * s.get("m", 0) + (1 - b1) * g; s["v"] = b2 * s.get("v", 0) + (1 - b2) * g * g
    return p - lr * (s["m"] / (1 - b1 ** t)) / (np.sqrt(s["v"] / (1 - b2 ** t)) + 1e-8)
for name, o in [("SGD", sgd), ("Momentum", mom), ("RMSProp", rms), ("Adam", adam)]: print(f"{name:9} هزینه‌ی نهایی {run(o):.4g}")""",packages=NP)

add(2,13,"""<p><b>زمان‌بندی نرخ یادگیری</b>: شروع با نرخ بزرگ برای پیشرفت سریع و کاهش تدریجی برای دقت. روش‌ها: <b>پله‌ای</b> (StepLR)، <b>نمایی</b>، <b>کسینوسی</b> (Cosine annealing؛ محبوب)، <b>گرم‌کردن</b> (warmup: افزایش خطی در ابتدا که برای Transformer حیاتی است) و <b>OneCycle</b>. گاه «کاهش در فلات» (ReduceLROnPlateau) بر اساس اعتبار. قاعده‌ی تجربی برای یافتن η: آزمون دامنه‌ی نرخ (LR range test) و نگاه به نقطه‌ی قبل از واگرایی.""",
"منحنی warmup + کسینوسی را بساز و مقادیر را در چند گام چاپ کن.",
py="""import math
def lr_at(step, total=1000, warmup=100, peak=1e-3, floor=1e-5):
    if step < warmup: return peak * step / warmup
    prog = (step - warmup) / (total - warmup)
    return floor + 0.5 * (peak - floor) * (1 + math.cos(math.pi * prog))
for s in (0, 50, 100, 300, 600, 1000): print(s, f"{lr_at(s):.2e}")
step_lr = lambda e, lr0=0.1, drop=.5, every=10: lr0 * drop ** (e // every)
print([round(step_lr(e), 4) for e in (0, 9, 10, 25, 40)])
def range_test(loss_fn, lrs): return [(lr, loss_fn(lr)) for lr in lrs]
print(min(range_test(lambda lr: (math.log10(lr) + 2.5) ** 2 + 1, [10 ** (-5 + i * .5) for i in range(9)]), key=lambda x: x[1]))""")

add(2,14,"""<p><b>Dropout</b>: هنگام آموزش هر نورون با احتمال p صفر می‌شود (و بقیه در 1/(1−p) ضرب: «inverted dropout») تا نورون‌ها هم‌وابسته نشوند؛ مثل میانگین‌گیری از شبکه‌های زیاد. هنگام استنتاج خاموش است. <b>BatchNorm</b>: فعال‌سازی‌های هر دسته را به میانگین ۰ و واریانس ۱ می‌برد و با γ و β بازمقیاس می‌کند؛ آموزش را پایدارتر و سریع‌تر می‌کند و با آمار متحرک در استنتاج کار می‌کند. در Transformer به‌جای آن <b>LayerNorm</b> (روی ویژگی‌های هر نمونه) استفاده می‌شود.""",
"BatchNorm را با میانگین متحرک برای استنتاج کامل کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
def dropout(x, p, train=True):
    if not train: return x
    m = (rng.random(x.shape) >= p) / (1 - p); return x * m
x = np.ones((1000, 100)); print("میانگین حفظ می‌شود:", dropout(x, .5).mean().round(3), "| صفرها:", (dropout(x, .5) == 0).mean().round(2))
class BatchNorm:
    def __init__(self, d, mom=.1, eps=1e-5): self.g, self.b, self.rm, self.rv, self.mom, self.eps = np.ones(d), np.zeros(d), np.zeros(d), np.ones(d), mom, eps
    def __call__(self, x, train=True):
        if train:
            m, v = x.mean(0), x.var(0); self.rm = (1 - self.mom) * self.rm + self.mom * m; self.rv = (1 - self.mom) * self.rv + self.mom * v
        else: m, v = self.rm, self.rv
        return self.g * (x - m) / np.sqrt(v + self.eps) + self.b
bn = BatchNorm(3); data = rng.normal(5, 3, (64, 3))
for _ in range(50): out = bn(rng.normal(5, 3, (64, 3)))
print("آموزش:", out.mean(0).round(2), out.std(0).round(2), "| آمار متحرک:", bn.rm.round(1), bn.rv.round(1))
print("استنتاج:", bn(data, train=False).mean(0).round(2))
ln = lambda x: (x - x.mean(-1, keepdims=True)) / np.sqrt(x.var(-1, keepdims=True) + 1e-5); print("LayerNorm:", ln(data).mean(-1)[:2].round(6))""",packages=NP)

add(2,15,"""<p>وزن‌های اولیه سرنوشت آموزش را رقم می‌زنند. اگر همه صفر باشند همه‌ی نورون‌های یک لایه متقارن می‌مانند و یاد نمی‌گیرند. اگر خیلی بزرگ: انفجار/اشباع؛ خیلی کوچک: ناپدید شدن سیگنال. <b>Xavier/Glorot</b>: <code class='inline'>Var(w)=2/(n_in+n_out)</code> برای tanh/sigmoid؛ <b>He</b>: <code class='inline'>Var(w)=2/n_in</code> برای ReLU. هدف: حفظ واریانس فعال‌سازی در لایه‌های عمیق. بایاس‌ها معمولاً صفرند. ببین توزیع فعال‌سازی در ۲۰ لایه چطور رفتار می‌کند.""",
"روش‌های مقداردهی را در شبکه‌ی ۲۰ لایه‌ی ReLU مقایسه کن.",
py="""import numpy as np
def run(init, depth=20, width=256, act=lambda z: np.maximum(0, z)):
    rng = np.random.default_rng(0); x = rng.normal(size=(512, width))
    for _ in range(depth): W = init(rng, width); x = act(x @ W)
    return x.std()
inits = {"صفر": lambda r, n: np.zeros((n, n)), "کوچک (0.01)": lambda r, n: r.normal(size=(n, n)) * .01, "بزرگ (1.0)": lambda r, n: r.normal(size=(n, n)),
         "Xavier": lambda r, n: r.normal(size=(n, n)) * np.sqrt(1 / n), "He": lambda r, n: r.normal(size=(n, n)) * np.sqrt(2 / n)}
for k, f in inits.items(): print(f"{k:12} انحراف معیار خروجی لایه‌ی ۲۰: {run(f):.3g}")
print("Xavier با tanh:", f"{run(inits['Xavier'], act=np.tanh):.3g}")""",packages=NP)

add(2,16,"""<p><b>ناپدید شدن گرادیان</b>: در شبکه‌ی عمیق با سیگموید، مشتق ≤ ۰٫۲۵ است؛ ضرب ۲۰ مشتق کوچک در زنجیره‌ی پس‌انتشار گرادیان لایه‌های اول را عملاً صفر می‌کند و آن‌ها یاد نمی‌گیرند. <b>انفجار گرادیان</b> نقطه‌ی مقابل (ضرب مقادیر بزرگ). راه‌حل‌ها: ReLU/GELU، مقداردهی اولیه‌ی درست، <b>نرمال‌سازی</b>، <b>اتصال باقیمانده</b> (skip connection در ResNet: گرادیان مستقیم عبور می‌کند)، و <b>بریدن گرادیان</b> (clipping) برای انفجار. اندازه‌ی گرادیان هر لایه را پایش کن.""",
"گرادیان لایه‌ی اول را با سیگموید و ReLU و باقیمانده مقایسه کن.",
py="""import numpy as np
def first_layer_grad(act, dact, depth=30, width=64, residual=False, seed=0):
    r = np.random.default_rng(seed); Ws = [r.normal(size=(width, width)) * np.sqrt(2 / width) for _ in range(depth)]
    x = r.normal(size=(1, width)); acts = [x]; zs = []
    for W in Ws:
        z = acts[-1] @ W; zs.append(z); a = act(z); acts.append(a + acts[-1] if residual else a)
    g = np.ones_like(acts[-1])
    for i in reversed(range(depth)):
        gz = g * dact(zs[i]); gprev = gz @ Ws[i].T
        g = gprev + (g if residual else 0)
    return np.linalg.norm(g)
sig = lambda z: 1 / (1 + np.exp(-z)); dsig = lambda z: sig(z) * (1 - sig(z))
relu = lambda z: np.maximum(0, z); drelu = lambda z: (z > 0) * 1.0
print("sigmoid:", f"{first_layer_grad(sig, dsig):.2e}")
print("relu:", f"{first_layer_grad(relu, drelu):.2e}")
print("relu + باقیمانده:", f"{first_layer_grad(relu, drelu, residual=True):.2e}")
g = np.array([30., 40.]); n = np.linalg.norm(g); print("clipping به ۵:", g * min(1, 5 / n))""",packages=NP)

add(2,17,"""<p>با آموزش بیشتر، خطای آموزش پایین می‌رود ولی خطای اعتبار از جایی بالا می‌رود: <b>بیش‌برازش</b>. <b>Early stopping</b> آموزش را وقتی خطای اعتبار برای <code class='inline'>patience</code> دور بهبود نیافت متوقف و بهترین وزن‌ها را برمی‌گرداند. ابزارهای دیگر: weight decay، dropout، داده‌ی بیشتر/افزایش داده، مدل کوچک‌تر. نشانه‌ی کلاسیک: شکاف رو به رشد بین منحنی آموزش و اعتبار. آموزش مدل‌های بزرگ روی داده‌ی کم بدون منظم‌سازی تقریباً همیشه بیش‌برازش می‌کند.""",
"MLP روی داده‌ی کوچک آموزش بده و نقطه‌ی بهینه‌ی توقف را پیدا کن.",
py="""import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X, y = make_classification(300, 20, n_informative=4, flip_y=.15, random_state=0)
Xtr, Xva, ytr, yva = train_test_split(X, y, random_state=0)
m = MLPClassifier((128, 128), alpha=0, random_state=0); tr, va = [], []
for e in range(60):
    m.partial_fit(Xtr, ytr, classes=[0, 1]); tr.append(m.score(Xtr, ytr)); va.append(m.score(Xva, yva))
best = int(np.argmax(va)); print("بهترین epoch:", best, "اعتبار", round(va[best], 3), "| در پایان آموزش", round(tr[-1], 3), "اعتبار", round(va[-1], 3))
es = MLPClassifier((128, 128), early_stopping=True, n_iter_no_change=5, random_state=0, max_iter=300).fit(Xtr, ytr)
print("توقف خودکار پس از", es.n_iter_, "دور | اعتبار", round(es.score(Xva, yva), 3))""",packages=SK)

add(2,18,"""<p><b>افزایش داده</b>: ساخت نمونه‌های جدید با تبدیل‌هایی که برچسب را تغییر نمی‌دهند. تصویر: برگردان افقی، چرخش، برش تصادفی، تغییر روشنایی، نویز، Cutout/Mixup. متن: جایگزینی مترادف، ترجمه‌ی رفت‌وبرگشت. صدا: شیفت زمانی، نویز. جدولی: SMOTE، نویز. مهم: فقط روی آموزش؛ تبدیل باید با دامنه سازگار باشد (برگردان افقی برای «6 و 9» اشتباه است). با Mixup دو نمونه و برچسب‌هایشان ترکیب خطی می‌شوند و مرزها را نرم می‌کند. با آرایه‌های تصویر NumPy نشان می‌دهیم.""",
"برش تصادفی و Mixup را برای دسته‌ای از تصاویر اجرا کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
img = np.arange(36, dtype=float).reshape(6, 6)
flip = img[:, ::-1]; rot = np.rot90(img)
def random_crop(a, size, rng):
    i, j = rng.integers(0, a.shape[0] - size + 1, 2); return a[i:i + size, j:j + size]
print(random_crop(img, 4, rng).shape, flip[0], rot[0])
noisy = img + rng.normal(0, .5, img.shape); bright = np.clip(img * 1.2, 0, 35); print(noisy.std().round(2), bright.max())
def mixup(x1, y1, x2, y2, alpha=.4):
    lam = rng.beta(alpha, alpha); return lam * x1 + (1 - lam) * x2, lam * y1 + (1 - lam) * y2, round(lam, 2)
x, y, lam = mixup(img, np.array([1, 0]), img[::-1], np.array([0, 1])); print("برچسب ترکیبی:", y.round(2), "λ =", lam)
batch = np.stack([random_crop(np.pad(img, 1), 6, rng) for _ in range(4)]); print(batch.shape)""",packages=NP)

add(2,19,"""<p><b>MNIST</b>: ۷۰هزار رقم دست‌نویس ۲۸×۲۸ (۱۰ کلاس) «سلام دنیا»ی بینایی. چون در محیط ما دانلود ممکن نیست، از <code class='inline'>load_digits</code> (۸×۸، ۱۷۹۷ نمونه) استفاده می‌کنیم که همان مسئله در مقیاس کوچک است. پیش‌پردازش: مقیاس‌دهی به [۰,۱]؛ تخت‌کردن تصویر به بردار برای MLP. شبکه‌ی ساده‌ی ۱۲۸ نورونی به ~۹۷٪ دقت می‌رسد. تحلیل خطا: ماتریس درهم‌ریختگی نشان می‌دهد کدام ارقام (۳ و ۸) اشتباه می‌شوند.""",
"MLP را روی digits آموزش بده و بدترین کلاس را بگو.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
d = load_digits(); X = d.data / 16.0; y = d.target
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=.25, random_state=0, stratify=y)
m = MLPClassifier((64,), max_iter=300, random_state=0).fit(Xtr, ytr)
print("دقت آزمون:", round(m.score(Xte, yte), 3))
cm = confusion_matrix(yte, m.predict(Xte)); per = cm.diagonal() / cm.sum(1)
print("بدترین رقم:", int(per.argmin()), round(float(per.min()), 2))
off = cm.copy(); np.fill_diagonal(off, 0); i, j = np.unravel_index(off.argmax(), off.shape); print(f"بیشترین اشتباه: {i} را {j} خوانده ({off[i, j]} بار)")
print("شکل تصویر:", d.images[0].shape, "| بردار:", X[0].shape)""",packages=SK)

add(2,20,"""<p><b>کانولوشن</b>: به‌جای اتصال کامل، یک <b>فیلتر</b> (هسته) کوچک روی تصویر می‌لغزد و ضرب داخلی می‌گیرد؛ <b>وزن‌های مشترک</b> (پارامتر کم) و <b>ناوردایی انتقالی</b> (ویژگی در هر جا شناسایی می‌شود). فیلتر لبه (سوبل) مثال کلاسیک است. پارامترها: <b>اندازه‌ی هسته</b>، <b>گام</b> (stride)، <b>حاشیه</b> (padding). اندازه‌ی خروجی: <code class='inline'>⌊(n + 2p − k)/s⌋ + 1</code>. در CNN فیلترها یاد گرفته می‌شوند؛ لایه‌ی اول لبه‌ها و بافت، لایه‌های عمیق‌تر الگوهای پیچیده را می‌یابند.""",
"فیلتر لبه‌ی افقی و عمودی را روی تصویر مصنوعی اعمال کن.",
py="""import numpy as np
def conv2d(img, k, stride=1, pad=0):
    img = np.pad(img, pad); kh, kw = k.shape
    H = (img.shape[0] - kh) // stride + 1; W = (img.shape[1] - kw) // stride + 1
    return np.array([[np.sum(img[i * stride:i * stride + kh, j * stride:j * stride + kw] * k) for j in range(W)] for i in range(H)])
img = np.zeros((8, 8)); img[:, 4:] = 1                       # لبه‌ی عمودی
sobel_x = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]); sobel_y = sobel_x.T
print("خروجی x (ستون‌ها):", conv2d(img, sobel_x)[2])
print("خروجی y:", conv2d(img, sobel_y)[2])
print("اندازه‌ها:", conv2d(img, sobel_x).shape, conv2d(img, sobel_x, pad=1).shape, conv2d(img, sobel_x, stride=2).shape)
print("پارامتر: کانولوشن 3×3 با 16 فیلتر:", 3 * 3 * 1 * 16 + 16, "| اتصال کامل 8×8→16:", 64 * 16 + 16)""",packages=NP)

add(2,21,"""<p><b>Pooling</b> اندازه‌ی نقشه‌ی ویژگی را کم می‌کند و ناوردایی کوچک به جابه‌جایی می‌دهد: <b>Max</b> (قوی‌ترین پاسخ) و <b>Average</b>. ساختار معمول CNN: <code class='inline'>[کانولوشن → ReLU → (نرمال) → pooling]×N → تخت‌سازی → لایه‌های متراکم → softmax</code>. با عمق، ابعاد فضایی کم و تعداد کانال‌ها زیاد می‌شود (۳×۲۲۴×۲۲۴ → ۵۱۲×۷×۷). <b>میدان دید</b> هر نورون با عمق رشد می‌کند. <b>Global Average Pooling</b> جایگزین لایه‌های متراکم سنگین است.""",
"شکل خروجی هر مرحله را برای CNN ساده‌ای روی تصویر ۲۸×۲۸ حساب کن.",
py="""import numpy as np
def maxpool(a, s=2): H, W = a.shape[0] // s, a.shape[1] // s; return a[:H * s, :W * s].reshape(H, s, W, s).max(axis=(1, 3))
def avgpool(a, s=2): H, W = a.shape[0] // s, a.shape[1] // s; return a[:H * s, :W * s].reshape(H, s, W, s).mean(axis=(1, 3))
a = np.arange(16.).reshape(4, 4); print(maxpool(a)); print(avgpool(a))
shape = (28, 28, 1); print("ورودی", shape)
layers = [("conv3 pad1 ×16", lambda s: (s[0], s[1], 16)), ("pool2", lambda s: (s[0] // 2, s[1] // 2, s[2])),
          ("conv3 pad1 ×32", lambda s: (s[0], s[1], 32)), ("pool2", lambda s: (s[0] // 2, s[1] // 2, s[2])), ("flatten", lambda s: (s[0] * s[1] * s[2],))]
for n, f in layers: shape = f(shape); print(f"{n:16} → {shape}")
print("جابه‌جایی یک پیکسل:", maxpool(np.roll(a, 1, axis=1)).tolist() == maxpool(a).tolist(), "(ناوردایی تقریبی)")""",packages=NP)

add(2,22,"""<p>تاریخچه‌ی معماری‌ها: <b>LeNet</b> (۱۹۹۸، ارقام)؛ <b>AlexNet</b> (۲۰۱۲، ReLU+Dropout+GPU، آغاز عصر عمیق)؛ <b>VGG</b> (فقط کانولوشن 3×3، عمیق و ساده)؛ <b>GoogLeNet/Inception</b> (شاخه‌های موازی)؛ <b>ResNet</b> (۲۰۱۵، اتصال باقیمانده <code class='inline'>y=F(x)+x</code> که آموزش صدها لایه را ممکن کرد)؛ <b>DenseNet</b>؛ <b>EfficientNet</b> (مقیاس‌دهی ترکیبی عمق/عرض/وضوح)؛ <b>MobileNet</b> (کانولوشن عمقی-جداشدنی برای موبایل)؛ <b>ViT</b> (Transformer برای تصویر). پارامترها و هزینه‌ی هر معماری را مقایسه می‌کنیم.""",
"پارامترهای کانولوشن عمقی-جداشدنی را با کانولوشن معمولی مقایسه کن.",
py="""def conv_params(k, cin, cout): return k * k * cin * cout
def dws_params(k, cin, cout): return k * k * cin + cin * cout        # عمقی + نقطه‌ای 1×1
print("معمولی 3×3، 128→256:", conv_params(3, 128, 256), "| جداشدنی:", dws_params(3, 128, 256), "→ کاهش", round(conv_params(3, 128, 256) / dws_params(3, 128, 256), 1), "برابر")
arch = {"LeNet-5": ("1998", 0.06), "AlexNet": ("2012", 61), "VGG-16": ("2014", 138), "ResNet-50": ("2015", 25.6), "MobileNetV2": ("2018", 3.5), "EfficientNet-B0": ("2019", 5.3)}
for n, (y, m) in arch.items(): print(f"{n:16} {y}  ≈{m} میلیون پارامتر")
import numpy as np
x = np.random.default_rng(0).normal(size=8); F = lambda v: 0.1 * v
print("باقیمانده: خروجی نزدیک ورودی:", np.allclose(F(x) + x, x, atol=1))""")

add(2,23,"""<p><b>یادگیری انتقالی</b>: مدلی که روی داده‌ی عظیم (ImageNet) پیش‌آموزش دیده ویژگی‌های عمومی (لبه، بافت، شکل) را بلد است؛ آن را برای مسئله‌ی خودت با داده‌ی کم به‌کار می‌بری. دو روش: ۱) <b>استخراج ویژگی</b>: بدنه‌ی منجمد، فقط سر دسته‌بند جدید آموزش می‌بیند؛ ۲) <b>فاین‌تیون</b>: بازکردن بعضی لایه‌های آخر با نرخ یادگیری کوچک. هرچه داده‌ی تو کوچک‌تر و به دامنه‌ی مبدأ نزدیک‌تر، منجمد کردن بیشتر. شبیه‌سازی: ویژگی‌های «پیش‌آموزش‌دیده» (PCA روی داده‌ی بزرگ) و آموزش سر جدید روی ۵۰ نمونه.""",
"با تعداد نمونه‌ی کم، مدل از صفر را با ویژگی‌های انتقالی مقایسه کن.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.decomposition import PCA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
X, y = load_digits(return_X_y=True); X = X / 16
Xbig, Xsmall, ybig, ysmall = train_test_split(X, y, train_size=.6, random_state=0, stratify=y)
Xtr, Xte, ytr, yte = train_test_split(Xsmall, ysmall, train_size=50, random_state=0, stratify=ysmall)
enc = PCA(20).fit(Xbig)                                            # «پیش‌آموزش» روی داده‌ی بزرگ بدون برچسب
scratch = LogisticRegression(max_iter=2000).fit(Xtr, ytr).score(Xte, yte)
transfer = LogisticRegression(max_iter=2000).fit(enc.transform(Xtr), ytr).score(enc.transform(Xte), yte)
print("از صفر با ۵۰ نمونه:", round(scratch, 3), "| انتقالی:", round(transfer, 3))""",packages=SK,
extra=code("torchvision (اجرا نشده)","""import torch.nn as nn, torchvision
m = torchvision.models.resnet18(weights="IMAGENET1K_V1")
for p in m.parameters(): p.requires_grad = False            # منجمد
m.fc = nn.Linear(m.fc.in_features, 5)                        # سر جدید
# فاین‌تیون: m.layer4 را باز کن و lr کوچک (1e-4) بده"""))

add(2,24,"""<p>گام‌های <b>فاین‌تیون</b> در بینایی: ۱) ابتدا فقط سر را آموزش بده تا خطای تصادفی سر به بدنه آسیب نزند؛ ۲) سپس لایه‌های بالایی را باز کن؛ ۳) نرخ‌های یادگیری <b>تفکیکی</b> (discriminative): لایه‌های قدیمی‌تر کوچک‌تر؛ ۴) از همان پیش‌پردازش (میانگین/انحراف ImageNet و اندازه) مدل اصلی استفاده کن؛ ۵) افزایش داده؛ ۶) زمان‌بندی و توقف زودهنگام. خطاهای رایج: BatchNorm در حالت آموزش با دسته‌ی کوچک، نرخ زیاد که دانش پیشین را می‌شوید («فراموشی فاجعه‌بار»). نرخ‌های تفکیکی و نقطه‌ی باز کردن لایه‌ها را برنامه‌ریزی می‌کنیم.""",
"جدول نرخ‌های یادگیری تفکیکی برای ۴ گروه لایه بساز (هر گروه نصف قبلی).",
py="""base = 1e-3; groups = ["سر جدید", "layer4", "layer3", "layer2", "layer1+stem"]
for i, g in enumerate(groups): print(f"{g:12} lr = {base / 2 ** i:.2e}")
def schedule(epoch):
    if epoch < 3: return "فقط سر"
    if epoch < 8: return "سر + layer4"
    return "همه‌ی لایه‌ها با lr کوچک"
print([schedule(e) for e in (0, 3, 8)])
mean, std = (0.485, 0.456, 0.406), (0.229, 0.224, 0.225)
import numpy as np
pix = np.array([.5, .5, .5]); print("نرمال‌سازی ImageNet:", ((pix - mean) / std).round(2))""",
extra=code("PyTorch (اجرا نشده)","""optimizer = torch.optim.AdamW([
    {"params": model.fc.parameters(), "lr": 1e-3},
    {"params": model.layer4.parameters(), "lr": 5e-4},
    {"params": model.layer3.parameters(), "lr": 2.5e-4},
], weight_decay=1e-2)"""))

add(2,25,"""<p><b>تشخیص اشیا</b>: علاوه بر برچسب، <b>جعبه‌ی مرزی</b> (x,y,w,h) هر شیء. معیار هم‌پوشانی: <b>IoU</b> = اشتراک ÷ اجتماع. خانواده‌ها: دومرحله‌ای (Faster R-CNN: پیشنهاد ناحیه سپس دسته‌بندی؛ دقیق)، یک‌مرحله‌ای (YOLO، SSD: سریع و بی‌درنگ)، و DETR (Transformer). خروجی خام مدل ده‌ها جعبه‌ی هم‌پوشان است؛ <b>NMS</b> (حذف غیربیشینه) جعبه‌های تکراری را حذف می‌کند. معیار ارزیابی <b>mAP</b>. IoU و NMS را پیاده می‌کنیم.""",
"NMS را با آستانه‌های مختلف اجرا کن.",
py="""import numpy as np
def iou(a, b):
    x1, y1 = max(a[0], b[0]), max(a[1], b[1]); x2, y2 = min(a[2], b[2]), min(a[3], b[3])
    inter = max(0, x2 - x1) * max(0, y2 - y1); ua = (a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - inter
    return inter / ua if ua else 0
print(iou((0, 0, 10, 10), (5, 5, 15, 15)), iou((0, 0, 10, 10), (0, 0, 10, 10)), iou((0, 0, 1, 1), (5, 5, 6, 6)))
def nms(boxes, scores, thr=.5):
    order = list(np.argsort(scores)[::-1]); keep = []
    while order:
        i = order.pop(0); keep.append(i); order = [j for j in order if iou(boxes[i], boxes[j]) < thr]
    return keep
boxes = [(10, 10, 50, 50), (12, 12, 52, 52), (11, 9, 49, 51), (100, 100, 150, 150), (102, 98, 148, 152)]
scores = [.9, .8, .7, .95, .6]
print("NMS thr=.5:", nms(boxes, scores), "| thr=.95:", nms(boxes, scores, .95))""",packages=NP)
