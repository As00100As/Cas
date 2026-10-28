import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']; SP=['numpy','scipy']

add(4,1,"""<p><b>بهینه‌سازی محدب</b>: تابع f محدب است اگر <code class='inline'>f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)</code>؛ هر کمینه‌ی محلی کمینه‌ی سراسری است. شرط مرتبه‌ی اول: ∇f=۰؛ مرتبه‌ی دوم: هسین ∇²f نیمه‌معین مثبت. <b>همگرایی گرادیان کاهشی</b>: برای تابع L-هموار و μ-قویاً محدب با گام ۱/L نرخ خطی <code class='inline'>(1−μ/L)ᵏ</code> است؛ <b>عدد وضعیت</b> κ=L/μ سرعت را تعیین می‌کند (پیش‌شرط‌سازی و Adam برای کاهش اثر κ). <b>دوگانگی لاگرانژ</b> و شرایط KKT پایه‌ی SVM. بسیاری از مسائل ML (رگرسیون خطی/لجستیک، SVM، Lasso) محدب‌اند؛ شبکه‌های عمیق نه، ولی نظریه الهام می‌دهد. اثر عدد وضعیت را عملاً می‌بینیم.""",
"گام بهینه ۱/L و ممنتوم نسترف را روی تابع بدوضعیت مقایسه کن.",
py="""import numpy as np
def run(kappa, method, steps=300):
    A = np.diag([1.0, kappa]); L, mu = kappa, 1.0; x = np.array([1.0, 1.0]); v = np.zeros(2); lr = 1 / L
    for _ in range(steps):
        if method == "gd": x = x - lr * A @ x
        else:
            beta = (np.sqrt(kappa) - 1) / (np.sqrt(kappa) + 1); y = x + beta * v; v_new = beta * v - lr * A @ y; x = x + v_new; v = v_new
    return float(np.linalg.norm(x))
for kappa in (10, 100, 1000): print(f"κ={kappa:4}: GD {run(kappa, 'gd'):.2e} | نسترف {run(kappa, 'nag'):.2e}")
f = lambda x: x ** 2; xs = np.linspace(-3, 3, 7); print("محدب (نامساوی ینسن):", all(f(.3 * a + .7 * b) <= .3 * f(a) + .7 * f(b) + 1e-12 for a in xs for b in xs))
print("نرخ نظری GD: (1-1/κ)^k برای κ=100, k=300:", round((1 - 1 / 100) ** 300, 4))""",packages=NP)

add(4,2,"""<p><b>نظریه‌ی اطلاعات</b>: <b>آنتروپی</b> <code class='inline'>H(p)=−Σp log p</code> عدم‌قطعیت است (بیت‌ها). <b>آنتروپی متقاطع</b> <code class='inline'>H(p,q)=−Σp log q</code> هزینه‌ی کدگذاری p با کد بهینه‌ی q؛ همان هزینه‌ی آموزش دسته‌بندی. <b>KL</b>: <code class='inline'>D(p‖q)=H(p,q)−H(p)≥0</code> نامتقارن (فاصله نیست). <b>اطلاعات متقابل</b> <code class='inline'>I(X;Y)=D(p(x,y)‖p(x)p(y))</code> وابستگی غیرخطی را می‌سنجد (انتخاب ویژگی، InfoNCE). <b>پیچیدگی/perplexity</b> = <code class='inline'>2^H</code>. کمینه‌کردن آنتروپی متقاطع = بیشینه‌کردن درستنمایی = کمینه‌کردن KL به توزیع داده. همه را محاسبه و تأیید می‌کنیم.""",
"نشان بده KL نامتقارن است و آنتروپی متقاطع برابر H + KL.",
py="""import numpy as np
H = lambda p: -np.sum(p * np.log2(p + 1e-12)); CE = lambda p, q: -np.sum(p * np.log2(q + 1e-12)); KL = lambda p, q: np.sum(p * np.log2((p + 1e-12) / (q + 1e-12)))
p = np.array([.7, .2, .1]); q = np.array([.4, .4, .2])
print("H(p)", H(p).round(3), "CE(p,q)", CE(p, q).round(3), "KL(p||q)", KL(p, q).round(3), "KL(q||p)", KL(q, p).round(3))
print("CE = H + KL:", np.isclose(CE(p, q), H(p) + KL(p, q)))
def mutual_info(joint): px = joint.sum(1, keepdims=True); py = joint.sum(0, keepdims=True); return KL(joint.ravel(), (px * py).ravel())
dep = np.array([[.4, .1], [.1, .4]]); ind = np.outer([.5, .5], [.5, .5]); print("I وابسته:", mutual_info(dep).round(3), "| مستقل:", mutual_info(ind).round(6))
print("perplexity توزیع یکنواخت ۸تایی:", 2 ** H(np.ones(8) / 8))""",packages=NP)

add(4,3,"""<p><b>مدل‌های گرافیکی احتمالاتی</b> توزیع توأم را با گراف می‌نمایند: <b>شبکه‌ی بیزی</b> (گراف جهت‌دار بدون دور؛ <code class='inline'>P(x)=ΠP(xᵢ|pa(xᵢ))</code>) و <b>میدان مارکوف</b> (غیرجهت‌دار). استقلال شرطی از ساختار گراف (d-جداسازی) خوانده می‌شود. <b>استنتاج</b>: دقیق (حذف متغیر، پیام‌رسانی روی درخت)، تقریبی (نمونه‌گیری، تغییراتی). مثال: شبکه‌ی «بارش، آبپاش، چمن خیس». <b>HMM</b> (مدل مارکوف پنهان) و الگوریتم‌های پیشرو/ویتربی برای دنباله‌ها. شبکه‌ی بیزی کوچک را با استنتاج بر شمارش کامل و HMM-ویتربی می‌سازیم.""",
"احتمال «باران | چمن خیس» را محاسبه کن و اثر مشاهده‌ی آبپاش (explaining away) را ببین.",
py="""import itertools, numpy as np
P_R = {1: .2, 0: .8}; P_S = {1: {1: .01, 0: .99}, 0: {1: .4, 0: .6}}          # P(S|R)
P_W = {(1, 1): .99, (1, 0): .9, (0, 1): .9, (0, 0): 0.0}                         # P(W=1 | R, S)
def joint(r, s, w): pw = P_W[(r, s)]; return P_R[r] * P_S[r][s] * (pw if w else 1 - pw)
def prob(query, evidence):
    num = den = 0
    for r, s, w in itertools.product((0, 1), repeat=3):
        a = {"R": r, "S": s, "W": w}
        if all(a[k] == v for k, v in evidence.items()): pj = joint(r, s, w); den += pj; num += pj * all(a[k] == v for k, v in query.items())
    return num / den
print("P(R | W=1):", round(prob({"R": 1}, {"W": 1}), 3)); print("P(R | W=1, S=1):", round(prob({"R": 1}, {"W": 1, "S": 1}), 3), "← آبپاش باران را «توضیح می‌دهد»")
states = ["سالم", "بیمار"]; A = np.array([[.9, .1], [.3, .7]]); B = np.array([[.8, .2], [.3, .7]]); pi = np.array([.8, .2]); obs = [0, 1, 1, 0]
def viterbi(obs):
    d = np.log(pi) + np.log(B[:, obs[0]]); back = []
    for o in obs[1:]: sc = d[:, None] + np.log(A); back.append(sc.argmax(0)); d = sc.max(0) + np.log(B[:, o])
    path = [int(d.argmax())]
    for b in reversed(back): path.append(int(b[path[-1]]))
    return [states[i] for i in reversed(path)]
print("ویتربی:", viterbi(obs))""",packages=NP)

add(4,4,"""<p><b>استنتاج بیزی</b>: پسین ∝ درستنمایی × پیشین: <code class='inline'>p(θ|D) ∝ p(D|θ)p(θ)</code>؛ به‌جای یک تخمین نقطه‌ای، توزیع کامل عدم‌قطعیت را می‌دهد. مزدوج‌ها (بتا-دوجمله‌ای) فرم بسته دارند؛ در حالت کلی پسین قابل‌محاسبه نیست و از <b>MCMC</b> نمونه می‌گیریم: <b>متروپولیس–هستینگز</b>: پیشنهاد <code class='inline'>θ′~q(·|θ)</code>، پذیرش با احتمال <code class='inline'>min(1, p(θ′|D)/p(θ|D))</code> (ثابت نرمال‌ساز حذف می‌شود). ابزارها: PyMC، Stan، NumPyro (HMC/NUTS). تشخیص همگرایی: <b>R̂</b>، حجم نمونه‌ی مؤثر، traceplot، دوره‌ی سوزاندن. A/B تست بیزی و MCMC را از صفر می‌نویسیم.""",
"پسین را با فرم بسته‌ی بتا و MH مقایسه کن.",
py="""import numpy as np
from scipy import stats
rng = np.random.default_rng(0); k, n = 18, 100                                       # ۱۸ تبدیل از ۱۰۰ بازدید
a, b = 1 + k, 1 + n - k; print("پسین بسته: میانگین", round(a / (a + b), 4), "| بازه ۹۵٪:", stats.beta.interval(.95, a, b))
def log_post(t): return -np.inf if not 0 < t < 1 else k * np.log(t) + (n - k) * np.log(1 - t)
chain, t, acc = [], .5, 0
for i in range(30000):
    prop = t + rng.normal(0, .1)
    if np.log(rng.random()) < log_post(prop) - log_post(t): t = prop; acc += 1
    chain.append(t)
c = np.array(chain[5000:]); print("MH: میانگین", c.mean().round(4), "| بازه ۹۵٪:", np.percentile(c, [2.5, 97.5]).round(3), "| پذیرش:", round(acc / 30000, 2))
kB, nB = 27, 100; sB = rng.beta(1 + kB, 1 + nB - kB, 100000); sA = rng.beta(a, b, 100000); print("P(B>A) در A/B بیزی:", (sB > sA).mean().round(3))""",packages=SP)

add(4,5,"""<p><b>فرایندهای گاوسی</b> (GP): توزیع روی توابع. با میانگین m(x) و <b>کرنل</b> k(x,x′) تعریف می‌شود (RBF: همواری؛ دوره‌ای؛ ماترن). <b>پسین</b> با داده‌ی نویزی فرم بسته دارد: میانگین پیش‌بینی <code class='inline'>k*ᵀ(K+σ²I)⁻¹y</code> و <b>واریانس</b> پیش‌بینی که دور از داده بزرگ می‌شود (عدم‌قطعیت صادق). مزیت: عدم‌قطعیت و کارایی با داده‌ی کم؛ عیب: هزینه‌ی <code class='inline'>O(n³)</code>. کاربرد: <b>بهینه‌سازی بیزی</b> (تنظیم هایپرپارامتر: تابع اکتساب EI/UCB)، مدل جایگزین شبیه‌سازی‌های گران. GP از صفر با کرنل RBF و نمونه‌گیری از پسین.""",
"طول‌مقیاس کرنل را تغییر بده و اثر آن را بر پیش‌بینی و عدم‌قطعیت ببین.",
py="""import numpy as np
rng = np.random.default_rng(0)
def rbf(a, b, ell=1.0, s=1.0): return s ** 2 * np.exp(-.5 * (a[:, None] - b[None]) ** 2 / ell ** 2)
X = np.array([-4, -3, -1, 0, 2.]); y = np.sin(X) + rng.normal(0, .1, 5); Xs = np.linspace(-6, 6, 7)
def gp(ell, noise=.1):
    K = rbf(X, X, ell) + noise ** 2 * np.eye(5); Ks = rbf(Xs, X, ell); mu = Ks @ np.linalg.solve(K, y); cov = rbf(Xs, Xs, ell) - Ks @ np.linalg.solve(K, Ks.T); return mu, np.sqrt(np.maximum(np.diag(cov), 0))
for ell in (.5, 1.5):
    mu, sd = gp(ell); print(f"ℓ={ell}: میانگین", mu.round(2), "\\n       انحراف", sd.round(2))
print("دور از داده (x=±6) انحراف بزرگ‌تر است:", gp(1.0)[1][[0, -1]].round(2), "نزدیک داده:", gp(1.0)[1][3].round(2))
mu, sd = gp(1.0); ei = lambda mu, sd, best: (best - mu) * 0.5 + sd * 0.4; print("بهترین نقطه‌ی بعدی (اکتساب ساده):", Xs[np.argmax(ei(mu, sd, y.min()))])""",packages=NP)

add(4,6,"""<p><b>یادگیری علّی</b>: همبستگی ≠ علیت. ابزار: <b>گراف علّی</b> (DAG) و <b>do-عملگر</b>: <code class='inline'>P(Y|do(X))</code> اثر مداخله، متفاوت از <code class='inline'>P(Y|X)</code> مشاهده‌ای. <b>مخدوش‌کننده</b> Z که هم X و هم Y را می‌سازد؛ تعدیل با Z (معیار backdoor) اثر را درست می‌کند. <b>پارادوکس سیمپسون</b>: روند کل با روند زیرگروه‌ها برعکس. <b>آزمایش تصادفی (RCT)</b> طلایی است؛ بدون آن: تطبیق، وزن‌دهی معکوس گرایش (IPW)، متغیر ابزاری، تفاضل‌های تفاضلی. <b>برآورد اثر درمانی ناهمگن</b> (uplift، causal forest) برای سیاست‌گذاری. شبیه‌سازی مخدوش‌کننده و تعدیل را اجرا می‌کنیم.""",
"با IPW اثر درمان را بدون سوگیری برآورد کن.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression, LinearRegression
rng = np.random.default_rng(0); n = 20000
Z = rng.normal(size=n)                                           # مخدوش‌کننده: شدت بیماری
T = (rng.random(n) < 1 / (1 + np.exp(-2 * Z))).astype(int)       # بیماران شدیدتر بیشتر دارو می‌گیرند
Y = 2.0 * T - 3.0 * Z + rng.normal(size=n)                       # اثر واقعی دارو = +2
naive = Y[T == 1].mean() - Y[T == 0].mean(); print("ساده (همبستگی):", round(naive, 2), "← علامت اشتباه!")
adj = LinearRegression().fit(np.c_[T, Z], Y).coef_[0]; print("تعدیل backdoor:", round(adj, 2))
e = LogisticRegression().fit(Z[:, None], T).predict_proba(Z[:, None])[:, 1]; w = T / e + (1 - T) / (1 - e)
ipw = np.sum(w * Y * T) / np.sum(w * T) - np.sum(w * Y * (1 - T)) / np.sum(w * (1 - T)); print("IPW:", round(ipw, 2), "| واقعی: 2.0")
Z2 = rng.normal(size=n); T2 = rng.integers(0, 2, n); Y2 = 2 * T2 - 3 * Z2 + rng.normal(size=n); print("RCT (تصادفی):", round(Y2[T2 == 1].mean() - Y2[T2 == 0].mean(), 2))""",packages=SK)

add(4,7,"""<p><b>شبکه‌های عصبی گرافی</b> (GNN) روی داده‌ی گرافی (مولکول، شبکه‌ی اجتماعی، ترافیک). <b>پیام‌رسانی</b>: هر گره پیام همسایگان را <b>جمع</b> می‌کند و با ویژگی خودش ترکیب: <code class='inline'>h_v ← σ(W₁h_v + W₂·AGG{h_u : u∈N(v)})</code>. <b>GCN</b>: <code class='inline'>H′=σ(D̂^{-1/2}ÂD̂^{-1/2}HW)</code>؛ <b>GAT</b> با توجه؛ <b>GraphSAGE</b> نمونه‌گیری همسایه. جمع و میانگین جایگشت‌ناوردایند. محدودیت‌ها: <b>هموارسازی بیش‌ازحد</b> (با لایه‌ی زیاد همه‌ی گره‌ها یکسان می‌شوند)، قدرت تمایز ≤ آزمون WL. یک لایه‌ی GCN را از صفر پیاده و روی گراف نمونه، اثر هموارسازی را می‌سنجیم.""",
"عمق را زیاد کن و هموارسازی بیش‌ازحد را با واریانس بین گره‌ها نشان بده.",
py="""import numpy as np
A = np.array([[0,1,1,0,0,0],[1,0,1,0,0,0],[1,1,0,1,0,0],[0,0,1,0,1,1],[0,0,0,1,0,1],[0,0,0,1,1,0]], float)
Ah = A + np.eye(6); D = np.diag(Ah.sum(1) ** -.5); S = D @ Ah @ D
rng = np.random.default_rng(0); H = rng.normal(size=(6, 4)); W = [np.eye(4)] * 40
def gcn(H, layers):
    for l in range(layers): H = S @ H @ W[l]
    return H
for L in (0, 1, 2, 8, 32): out = gcn(H, L); print(f"{L:2} لایه: واریانس بین گره‌ها = {out.var(0).mean():.4f}")
print("جایگشت‌ناوردایی: جمع همسایه‌ها ترتیب‌ناپذیر:", np.allclose(sum([H[1], H[2]]), sum([H[2], H[1]])))
print("درجه‌ی گره‌ها:", A.sum(1))""",packages=NP)

add(4,8,"""<p>توجه استاندارد O(T²) حافظه و زمان دارد. <b>FlashAttention</b> محاسبه‌ی <b>دقیق</b> را بدون ساخت ماتریس T×T در حافظه‌ی HBM انجام می‌دهد: ورودی را <b>کاشی‌بندی</b> و softmax را <b>آنلاین</b> محاسبه می‌کند (نگه‌داشتن بیشینه‌ی جاری m و مجموع l و بازمقیاس‌کردن)، در SRAM سریع؛ حافظه‌ی O(T) و سرعت چندبرابر چون گلوگاه پهنای باند حافظه است نه FLOP. <b>توجه خطی</b> با نگاشت ویژگی <code class='inline'>φ</code> ترتیب ضرب را عوض می‌کند: <code class='inline'>φ(Q)(φ(K)ᵀV)</code> با O(T). همچنین توجه پنجره‌ای/تنک، GQA/MQA برای کاهش KV-cache. softmax آنلاین را پیاده و با دقیق مقایسه می‌کنیم.""",
"اندازه‌ی بلوک را تغییر بده و نشان بده نتیجه یکسان است.",
py="""import numpy as np
rng = np.random.default_rng(0); T, d = 64, 16; Q, K, V = [rng.normal(size=(T, d)) for _ in range(3)]
def exact(Q, K, V): S = Q @ K.T / np.sqrt(d); P = np.exp(S - S.max(1, keepdims=True)); return (P / P.sum(1, keepdims=True)) @ V
def flash(Q, K, V, block=16):
    out = np.zeros_like(Q); m = np.full(T, -np.inf); l = np.zeros(T)
    for j in range(0, T, block):
        Kj, Vj = K[j:j + block], V[j:j + block]; S = Q @ Kj.T / np.sqrt(d)
        m_new = np.maximum(m, S.max(1)); scale = np.exp(m - m_new); P = np.exp(S - m_new[:, None])
        l = l * scale + P.sum(1); out = out * scale[:, None] + P @ Vj; m = m_new
    return out / l[:, None]
ref = exact(Q, K, V)
for b in (4, 16, 64): print(f"بلوک {b:2}: بیشینه‌ی تفاوت با دقیق = {np.abs(flash(Q, K, V, b) - ref).max():.2e}")
phi = lambda x: np.where(x > 0, x + 1, np.exp(x)); lin = (phi(Q) @ (phi(K).T @ V)) / (phi(Q) @ phi(K).sum(0))[:, None]; print("توجه خطی (O(T)):", lin.shape)
print("حافظه‌ی ماتریس امتیاز T=32k, fp16 (۱ سر):", 32768 ** 2 * 2 / 1e9, "GB ← FlashAttention آن را نمی‌سازد")""",packages=NP)

add(4,9,"""<p><b>Mixture-of-Experts</b>: به‌جای یک MLP، N «خبره» (MLP) و یک <b>مسیریاب</b> (gate) که برای هر توکن top-k خبره را انتخاب می‌کند. پارامتر کل بزرگ (ظرفیت) ولی FLOP فعال کم: Mixtral 8×7B ≈ ۴۷B پارامتر و ۱۳B فعال. چالش‌ها: <b>تعادل بار</b> (جلوگیری از فروپاشی به چند خبره؛ هزینه‌ی کمکی و ظرفیت خبره)، پایداری آموزش، ارتباط بین دستگاه‌ها (all-to-all)، و حافظه‌ی کل بالا در استنتاج. <b>خبره‌ی مشترک</b> و ریزدانه (DeepSeekMoE). مسیریاب top-k و هزینه‌ی تعادل بار را از صفر می‌نویسیم.""",
"ضریب هزینه‌ی تعادل بار را تغییر بده و توزیع توکن‌ها را ببین.",
py="""import numpy as np
rng = np.random.default_rng(0); T, d, E, k = 1000, 16, 8, 2
X = rng.normal(size=(T, d)); Wg = rng.normal(size=(d, E)) * .5 + np.r_[2.0, np.zeros(E - 1)] * 0.3
logits = X @ Wg; p = np.exp(logits - logits.max(1, keepdims=True)); p /= p.sum(1, keepdims=True)
top = np.argsort(-p, 1)[:, :k]; gates = np.take_along_axis(p, top, 1); gates /= gates.sum(1, keepdims=True)
load = np.bincount(top.ravel(), minlength=E) / (T * k); importance = p.mean(0)
print("سهم توکن‌ها به خبره‌ها:", load.round(3)); print("هزینه‌ی تعادل بار (E·Σ f·P):", round(float(E * (load * importance).sum()), 3), "(۱ = متعادل)")
experts = [rng.normal(size=(d, d)) * .1 for _ in range(E)]
out = np.zeros_like(X)
for i in range(T):
    for j, g in zip(top[i], gates[i]): out[i] += g * np.tanh(X[i] @ experts[j])
print("خروجی:", out.shape, "| FLOP فعال:", k / E, "از کل")
print("مثال Mixtral: ۸ خبره × 7B ≈ 47B کل، ≈13B فعال")""",packages=NP)

add(4,10,"""<p><b>مدل‌های فضای حالت</b> (SSM: S4، Mamba) جایگزین توجه با بازگشت خطی: <code class='inline'>hₜ = Ā hₜ₋₁ + B̄ xₜ</code> و <code class='inline'>yₜ = C hₜ</code>. دو نمای هم‌ارز: <b>بازگشتی</b> (استنتاج O(1) به‌ازای توکن، حافظه‌ی ثابت) و <b>کانولوشنی</b> (آموزش موازی با هسته‌ی <code class='inline'>K=(CB̄, CĀB̄, CĀ²B̄,…)</code>). <b>Mamba</b> پارامترها را <b>وابسته به ورودی</b> (انتخابی) می‌کند تا بتواند اطلاعات را فراموش/نگه دارد و با اسکن موازی سخت‌افزاری کارا است. مزیت: توالی‌های بسیار بلند؛ ضعف: یادآوری دقیق از زمینه‌ی دور (مدل‌های ترکیبی SSM+توجه). هم‌ارزی بازگشتی و کانولوشنی را تأیید می‌کنیم.""",
"با وارد کردن ضربه‌ی واحد پاسخ ضربه‌ی سیستم را بساز و نشان بده همان هسته‌ی کانولوشن است.",
py="""import numpy as np
rng = np.random.default_rng(0); N, T = 4, 20
A = np.diag(rng.uniform(.5, .95, N)); B = rng.normal(size=(N, 1)); C = rng.normal(size=(1, N)); x = rng.normal(size=T)
h = np.zeros((N, 1)); y_rec = []
for t in range(T): h = A @ h + B * x[t]; y_rec.append((C @ h).item())
Kern = np.array([(C @ np.linalg.matrix_power(A, i) @ B).item() for i in range(T)])
y_conv = [sum(Kern[i] * x[t - i] for i in range(t + 1)) for t in range(T)]
print("بازگشتی = کانولوشنی:", np.allclose(y_rec, y_conv)); print("هسته‌ی ضربه:", Kern[:5].round(3))
print("حافظه‌ی حالت در استنتاج: ثابت N =", N, "| KV-cache توجه: رشد با T")
def selective_gate(x_t, w=2.0): return 1 / (1 + np.exp(-w * x_t))
print("دروازه‌ی انتخابی (ورودی‌محور):", selective_gate(np.array([-2, 0, 2])).round(2))""",packages=NP)

add(4,11,"""<p><b>آموزش توزیع‌شده</b> وقتی مدل/داده از یک GPU بزرگ‌تر است. <b>موازی‌سازی داده</b> (DP/DDP): هر GPU کپی مدل و دسته‌ی متفاوت؛ گرادیان‌ها با <b>All-Reduce</b> میانگین‌گیری می‌شوند. <b>موازی‌سازی تانسوری</b> (TP): ماتریس‌های لایه بین GPUها شکسته (Megatron)؛ ارتباط زیاد، درون گره. <b>موازی‌سازی خط لوله</b> (PP): لایه‌ها بین GPUها؛ ریزدسته‌ها حباب (bubble) را کم می‌کنند. <b>موازی‌سازی توالی/متن</b> برای زمینه‌ی بلند. ۳D: ترکیب هر سه. معیار: <b>MFU</b> (بهره‌وری FLOPs مدل). هزینه‌ی ارتباط All-Reduce (حلقه‌ای): <code class='inline'>2(N−1)/N · اندازه</code>. هم‌ارزی DDP با یک GPU را شبیه‌سازی می‌کنیم.""",
"حباب خط لوله را با تعداد ریزدسته‌های مختلف حساب کن.",
py="""import numpy as np
rng = np.random.default_rng(0); X = rng.normal(size=(64, 5)); y = X @ np.arange(5) + rng.normal(size=64); w = np.zeros(5)
grad = lambda Xb, yb, w: 2 * Xb.T @ (Xb @ w - yb) / len(yb)
g_single = grad(X, y, w)
shards = np.array_split(np.arange(64), 4); g_ddp = np.mean([grad(X[s], y[s], w) for s in shards], axis=0)          # All-Reduce میانگین
print("DDP (۴ کارگر) = تک‌GPU:", np.allclose(g_single, g_ddp))
def ring_allreduce_bytes(n_gpu, size): return 2 * (n_gpu - 1) / n_gpu * size
print("ارتباط هر GPU برای 7B (fp16 گرادیان ۱۴GB) روی ۸ GPU:", round(ring_allreduce_bytes(8, 14), 1), "GB")
def pipeline_bubble(stages, microbatches): return (stages - 1) / (microbatches + stages - 1)
for m in (1, 4, 16, 64): print(f"حباب PP (۴ مرحله، {m:2} ریزدسته): {pipeline_bubble(4, m):.1%}")
W = rng.normal(size=(8, 8)); x = rng.normal(size=8); cols = np.hsplit(W, 2); print("TP ستونی = کامل:", np.allclose(np.concatenate([x @ c for c in cols]), x @ W))""",packages=NP)

add(4,12,"""<p>حافظه‌ی آموزش با Adam: <b>وزن‌ها</b> (۲ بایت bf16) + <b>گرادیان</b> (۲) + <b>حالت بهینه‌ساز</b> (کپی master fp32 + m + v = ۱۲ بایت) ≈ <b>۱۶ بایت/پارامتر</b> + فعال‌سازی. <b>ZeRO</b> (DeepSpeed) این افزونگی را بین GPUها تقسیم می‌کند: مرحله‌ی ۱ (حالت بهینه‌ساز)، ۲ (+گرادیان)، ۳ (+وزن‌ها) — با ارتباط بیشتر. <b>FSDP</b> (PyTorch) معادل ZeRO-3: قبل از هر لایه وزن‌ها <b>all-gather</b> و پس از آن آزاد می‌شوند. ابزارهای دیگر: <b>checkpointing فعال‌سازی</b> (محاسبه‌ی دوباره به‌جای ذخیره)، بارگذاری به CPU/NVMe. محاسبه‌گر حافظه‌ی ZeRO را می‌سازیم.""",
"حداقل تعداد GPU 80 گیگی برای آموزش مدل ۷۰B با ZeRO-3 را پیدا کن.",
py="""def mem_per_gpu(params_b, n_gpu, stage, act_gb=10):
    P = params_b * 1e9; w, g, o = 2 * P, 2 * P, 12 * P
    if stage >= 1: o /= n_gpu
    if stage >= 2: g /= n_gpu
    if stage >= 3: w /= n_gpu
    return (w + g + o) / 1e9 + act_gb
for stage in (0, 1, 2, 3): print(f"ZeRO-{stage} با ۸ GPU برای 7B: {mem_per_gpu(7, 8, stage):6.1f} GB/GPU")
n = next(n for n in range(1, 1025) if mem_per_gpu(70, n, 3) <= 80); print("حداقل GPU برای 70B با ZeRO-3 (۸۰GB):", n)
print("ارتباط ZeRO-3 ≈ 1.5× DDP به‌ازای تجمیع وزن‌ها")
print("checkpointing فعال‌سازی: حافظه ↓ ≈ √L، محاسبه ↑ ≈ ۳۳٪")""")

add(4,13,"""<p><b>دقت ترکیبی</b>: fp32 دقیق ولی کند/پرحافظه. <b>fp16</b> دامنه‌ی کوچک (حداکثر ۶۵۵۰۴؛ ریز‌ریزشدن گرادیان ← <b>مقیاس‌دهی هزینه</b> <code class='inline'>GradScaler</code>)؛ <b>bf16</b> دامنه‌ی fp32 با دقت کمتر (پایدارتر؛ استاندارد امروز)؛ <b>fp8</b> برای GPUهای جدید با مقیاس‌های ریز. قاعده: ضرب ماتریس‌ها به دقت پایین ولی <b>جمع‌کننده</b>‌ها، softmax، نرمال‌سازی، و <b>نسخه‌ی master وزن‌ها</b> در fp32. <b>پایداری عددی</b>: log-sum-exp، اپسیلون در مخرج، بریدن گرادیان، حذف NaN/Inf. اثر دقت را روی NumPy می‌بینیم.""",
"overflow در fp16 را با مقیاس‌دهی هزینه‌ی دینامیک مهار کن.",
py="""import numpy as np
print("fp16 max:", np.finfo(np.float16).max, "| bf16-معادل دامنه‌ی fp32:", np.finfo(np.float32).max)
g = np.float32(1e-8); print("گرادیان کوچک در fp16:", np.float16(g), "← ریزریزش (underflow) به صفر"); s = 2 ** 12; print("با مقیاس‌دهی ۴۰۹۶:", np.float16(g * s) / s)
x = np.float16(60000); print("overflow:", x * np.float16(2))
big = np.full(10000, .0001, np.float16); print("جمع در fp16:", big.sum(dtype=np.float16), "| در fp32:", big.astype(np.float32).sum())
def bf16(x): u = np.float32(x).view(np.uint32); return (u & 0xFFFF0000).view(np.float32)
print("bf16(3.14159265):", bf16(3.14159265), "| fp16:", np.float16(3.14159265))
logits = np.array([1000., 1001.]); print("softmax ساده:", np.exp(logits) / np.exp(logits).sum() if False else "NaN/overflow", "| پایدار:", np.exp(logits - logits.max()) / np.exp(logits - logits.max()).sum())""",packages=NP)

add(4,14,"""<p><b>CUDA</b>: برنامه‌نویسی GPU. مدل: <b>هسته</b> (kernel) توسط شبکه‌ای از <b>بلوک‌ها</b> هر کدام با صدها <b>نخ</b> اجرا می‌شود؛ ۳۲ نخ یک <b>warp</b> هستند که قفل‌گام اجرا می‌کنند (واگرایی شاخه کند است). <b>سلسله‌مراتب حافظه</b>: ثبات‌ها < حافظه‌ی مشترک (shared، سریع، به‌ازای بلوک) < L2 < HBM سراسری (گران). بهینه‌سازی: <b>هم‌گرایی دسترسی</b> (coalescing: نخ‌های مجاور آدرس‌های مجاور)، کاشی‌بندی در shared، اشغال (occupancy)، پرهیز از ترافیک سراسری. در این محیط GPU نیست؛ مفهوم <b>کاشی‌بندی</b> را با NumPy شبیه می‌کنیم و کد CUDA را می‌آوریم.""",
"اندازه‌ی کاشی را تغییر بده و ترافیک حافظه‌ی سراسری را بشمار.",
py="""import numpy as np
def traffic_naive(n): return 2 * n ** 3                                    # هر ضرب از حافظه‌ی سراسری می‌خواند
def traffic_tiled(n, tile): return 2 * n ** 3 // tile                      # هر عنصر tile بار استفاده‌ی مجدد
for tile in (1, 16, 32): print(f"n=1024 کاشی {tile:2}: ترافیک {traffic_tiled(1024, tile) / 1e9:6.2f} G-خواندن")
def tiled_matmul(A, B, tile=32):
    n = A.shape[0]; C = np.zeros((n, n))
    for i in range(0, n, tile):
        for j in range(0, n, tile):
            acc = np.zeros((tile, tile))
            for k in range(0, n, tile): acc += A[i:i + tile, k:k + tile] @ B[k:k + tile, j:j + tile]       # «shared memory»
            C[i:i + tile, j:j + tile] = acc
    return C
A, B = np.random.default_rng(0).normal(size=(64, 64)), np.random.default_rng(1).normal(size=(64, 64)); print("درستی:", np.allclose(tiled_matmul(A, B), A @ B))""",packages=NP,
extra=code("CUDA C++ (اجرا نشده)","""__global__ void saxpy(int n, float a, const float* x, float* y) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;      // شناسه‌ی سراسری نخ
    if (i < n) y[i] = a * x[i] + y[i];                   // دسترسی هم‌گرا
}
// saxpy<<<(n + 255) / 256, 256>>>(n, 2.0f, d_x, d_y);"""))

add(4,15,"""<p><b>Triton</b> (OpenAI) زبان/کامپایلر مبتنی بر پایتون برای هسته‌های GPU در سطح <b>بلوک</b> نه نخ: توسعه‌دهنده کاشی‌ها را با <code class='inline'>tl.load/tl.store</code> و عملیات برداری می‌نویسد و Triton هم‌گرایی، حافظه‌ی مشترک و زمان‌بندی را مدیریت می‌کند. استفاده: <b>ادغام عملگرها</b> (fusion: softmax+ماسک+مقیاس در یک هسته؛ حذف رفت‌وبرگشت به HBM)، FlashAttention سفارشی، کوانتیزاسیون. روش بهینه‌سازی: <b>roofline</b>: عملکرد = min(اوج محاسبه، پهنای باند × شدت محاسباتی). اکثر عملگرهای ML محدود به حافظه‌اند → ادغام کلید است. شدت محاسباتی و محاسبه‌ی سود ادغام را حساب می‌کنیم.""",
"سود ادغام softmax+dropout+ماسک را از ترافیک HBM حساب کن.",
py="""peak_flops, bw = 312e12, 2.0e12          # A100: bf16 FLOP/s و HBM بایت/s
ridge = peak_flops / bw; print("نقطه‌ی روفلاین (FLOP/بایت):", ridge)
def perf(flops, bytes_): ai = flops / bytes_; return min(peak_flops, bw * ai), ai, "محاسبه" if ai > ridge else "حافظه"
n = 4096
print("ضرب ماتریس 4096²:", perf(2 * n ** 3, 3 * n * n * 2))
print("جمع برداری:", perf(n * n, 3 * n * n * 2)); print("softmax:", perf(5 * n * n, 2 * n * n * 2))
T = n * n * 2                                                       # بایت یک تنسور
unfused = (2 + 2 + 3) * T; fused = 2 * T; print("ترافیک بدون ادغام:", unfused / 1e6, "MB | ادغام‌شده:", fused / 1e6, "MB → سرعت ≈", round(unfused / fused, 1), "×")""",
extra=code("Triton (اجرا نشده)","""import triton, triton.language as tl
@triton.jit
def softmax_k(x_ptr, out_ptr, n_cols, BLOCK: tl.constexpr):
    row = tl.program_id(0); cols = tl.arange(0, BLOCK)
    x = tl.load(x_ptr + row * n_cols + cols, mask=cols < n_cols, other=-float('inf'))
    x = tl.exp(x - tl.max(x, 0)); tl.store(out_ptr + row * n_cols + cols, x / tl.sum(x, 0), mask=cols < n_cols)"""))

add(4,16,"""<p><b>torch.compile</b> (PyTorch 2): <b>TorchDynamo</b> بایت‌کد پایتون را می‌گیرد و گراف عملگرها را استخراج می‌کند (با «شکست گراف» در کد پویا)، <b>AOTAutograd</b> گراف پس‌انتشار را می‌سازد، و <b>Inductor</b> هسته‌های ادغام‌شده‌ی Triton/C++ تولید می‌کند. ۱٫۳–۲× سرعت اغلب با یک خط <code class='inline'>model = torch.compile(model)</code>. نکات: هزینه‌ی کامپایل ابتدایی، تغییر شکل ورودی ← کامپایل مجدد (<code class='inline'>dynamic=True</code>)، شکست گراف با کنترل جریان وابسته به داده. کامپایلرهای دیگر: XLA/JAX (<code class='inline'>jit</code>)، TVM، TensorRT، MLIR. ایده‌ی «ردیابی و ادغام» را با ردیاب عبارت ساده‌ی پایتون نشان می‌دهیم.""",
"با ردیاب ساده یک گراف بساز و عملگرهای زنجیره‌ای را در یک مرحله ادغام کن.",
py="""class Node:
    def __init__(self, op, *args): self.op, self.args = op, args
    def __add__(self, o): return Node("add", self, o)
    def __mul__(self, o): return Node("mul", self, o)
    def relu(self): return Node("relu", self)
class Input(Node):
    def __init__(self, name): self.op, self.args, self.name = "input", (), name
def graph(n, out=None):
    out = out if out is not None else []
    if isinstance(n, Node):
        for a in n.args: graph(a, out)
        out.append(n.op)
    return out
x, w, b = Input("x"), Input("w"), Input("b"); y = (x * w + b).relu()
print("گراف ردیابی‌شده:", [o for o in graph(y) if o != "input"])
ELEMENTWISE = {"add", "mul", "relu"}
def fuse(ops):
    ops = [o for o in ops if o != "input"]; kernels, cur = [], []
    for o in ops:
        if o in ELEMENTWISE: cur.append(o)
        else:
            if cur: kernels.append("+".join(cur)); cur = []
            kernels.append(o)
    return kernels + (["+".join(cur)] if cur else [])
print("هسته‌های ادغام‌شده:", fuse(graph(y)), "← یک رفت‌وبرگشت HBM به‌جای ۳")""",
extra=code("PyTorch 2 (اجرا نشده)","""import torch
model = torch.compile(model, mode="max-autotune")
# اگر شکل ورودی تغییر کند: torch.compile(model, dynamic=True)
# تشخیص شکست گراف: TORCH_LOGS=graph_breaks python train.py"""))

add(4,17,"""<p><b>پروفایل آموزش</b>: قبل از بهینه‌سازی گلوگاه را پیدا کن. ابزارها: <code class='inline'>torch.profiler</code> (هسته‌ها، CPU/GPU، حافظه، timeline)، Nsight Systems/Compute، <code class='inline'>nvidia-smi</code>/DCGM. الگوهای تشخیص: ۱) <b>GPU بیکار</b> (بهره‌وری پایین) = گلوگاه بارگذاری داده یا همگام‌سازی CPU؛ ۲) <b>هسته‌های کوچک زیاد</b> = نیاز به ادغام/compile؛ ۳) <b>ارتباط غالب</b> در چند GPU؛ ۴) <b>حافظه‌ی کم</b> = checkpointing/ZeRO. معیارها: توان‌عبور (توکن/ثانیه)، MFU، زمان هر گام، هم‌پوشانی ارتباط با محاسبه. محاسبه‌ی MFU و تفکیک زمان گام را انجام می‌دهیم.""",
"MFU را برای اجرایی با ۳۲هزار توکن/ثانیه روی ۸ GPU برای مدل 7B حساب کن.",
py="""peak = 312e12                                            # A100 bf16
def mfu(params, tokens_per_s, n_gpu): return 6 * params * tokens_per_s / (n_gpu * peak)
print("MFU (7B، ۳۲k tok/s، ۸ GPU):", f"{mfu(7e9, 32000, 8):.1%}")
for tps in (10000, 32000, 60000): print(f"{tps:6} tok/s → MFU {mfu(7e9, tps, 8):.0%}")
step = {"بارگذاری داده": .08, "پیش‌روی": .30, "پس‌روی": .55, "All-Reduce": .12, "بهینه‌ساز": .05}
total = sum(step.values()); [print(f"{k:14} {v:.2f}s ({v / total:.0%})") for k, v in step.items()]
print("گلوگاه:", max(step, key=step.get), "| اگر بارگذاری هم‌پوشان شود، زمان گام:", round(total - step["بارگذاری داده"], 2))
import time, numpy as np
t = time.perf_counter(); a = np.random.rand(500, 500); [a @ a for _ in range(5)]; print("پروفایل ساده با perf_counter:", round(time.perf_counter() - t, 3), "s")""",packages=NP)

add(4,18,"""<p><b>سیستم‌های استنتاج</b> (vLLM، TGI، TensorRT-LLM، SGLang): هدف توان‌عبور بالا با تأخیر مناسب. نوآوری‌ها: <b>batching پیوسته</b> (درخواست‌ها هر گام وارد/خارج می‌شوند؛ نه انتظار تا کل دسته تمام شود)، <b>PagedAttention</b> (KV-cache در صفحه‌های کوچک مثل حافظه‌ی مجازی؛ حذف پراکندگی و امکان اشتراک پیشوند)، <b>کش پیشوند</b>، <b>موازی‌سازی تانسوری</b>، <b>prefill/decode جدا</b>. معیارها: TTFT، تأخیر بین توکن، توان‌عبور، p99. ظرفیت و اثر batching پیوسته را شبیه‌سازی می‌کنیم.""",
"درخواست‌هایی با طول‌های ناهمسان را به دو روش استاتیک و پیوسته زمان‌بندی کن و توان‌عبور را مقایسه کن.",
py="""import numpy as np
rng = np.random.default_rng(0); lens = rng.integers(10, 200, 64)                     # توکن‌های خروجی هر درخواست
B = 8
def static_batching(lens):
    steps = 0
    for i in range(0, len(lens), B): steps += lens[i:i + B].max()                     # تا کندترین تمام شود
    return steps
def continuous_batching(lens):
    q, active, steps = list(lens), [], 0
    while q or active:
        while q and len(active) < B: active.append(q.pop(0))
        steps += 1; active = [r - 1 for r in active if r - 1 > 0]
    return steps
s, c = static_batching(lens), continuous_batching(lens); print("گام‌ها: استاتیک", s, "| پیوسته", c, "| بهبود", round(s / c, 2), "×")
def kv_waste(max_len, actual): return 1 - np.mean(actual) / max_len
print("اتلاف KV با رزرو حداکثر:", f"{kv_waste(2048, rng.integers(100, 800, 100)):.0%}", "← PagedAttention نزدیک صفر")""",packages=NP)

add(4,19,"""<p><b>رمزگشایی حدسی</b> (speculative decoding): تولید توکن‌به‌توکن محدود به پهنای باند است (هر توکن کل وزن‌ها را می‌خواند). ایده: یک <b>مدل پیش‌نویس</b> کوچک γ توکن را سریع حدس می‌زند؛ <b>مدل هدف</b> همه را <b>در یک گذر</b> (موازی) تأیید می‌کند. توکن‌ها تا اولین رد پذیرفته و در رد، از توزیع تصحیح‌شده نمونه می‌گیرد؛ <b>توزیع خروجی دقیقاً همان مدل هدف</b> می‌ماند (بدون افت کیفیت). تسریع ≈ <code class='inline'>(1−α^{γ+1})/(1−α)</code> توکن در هر گذر هدف، با α نرخ پذیرش. گونه‌ها: Medusa، EAGLE، lookahead. قاعده‌ی پذیرش و تسریع را شبیه‌سازی می‌کنیم.""",
"γ بهینه را برای نرخ‌های پذیرش مختلف و هزینه‌ی مدل پیش‌نویس پیدا کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
def expected_tokens(alpha, gamma): return (1 - alpha ** (gamma + 1)) / (1 - alpha)
def speedup(alpha, gamma, c=.05): return expected_tokens(alpha, gamma) / (gamma * c + 1)
for alpha in (.5, .7, .9):
    best = max(range(1, 12), key=lambda g: speedup(alpha, g)); print(f"α={alpha}: γ بهینه={best}, تسریع ≈ {speedup(alpha, best):.2f}×")
p = np.array([.5, .3, .2, 0.]); q = np.array([.4, .4, .1, .1])                       # هدف p، پیش‌نویس q
def spec_sample(p, q):
    x = rng.choice(4, p=q)
    if rng.random() < min(1, p[x] / q[x]): return x
    r = np.maximum(p - q, 0); return rng.choice(4, p=r / r.sum())
s = np.bincount([spec_sample(p, q) for _ in range(60000)], minlength=4) / 60000; print("توزیع نمونه‌ها:", s.round(3), "| هدف:", p, "← دقیقاً توزیع p")""",packages=NP)

add(4,20,"""<p><b>تقطیر دانش</b>: مدل <b>دانش‌آموز</b> کوچک از <b>معلم</b> بزرگ می‌آموزد. هزینه: <code class='inline'>L = α·CE(y, p_s) + (1−α)·T²·KL(p_t^T ‖ p_s^T)</code> با دمای T که توزیع نرم می‌دهد؛ «دانش تاریک» نسبت احتمال کلاس‌های نادرست (گربه شبیه سگ است تا ماشین) اطلاعات اضافه دارد. گونه‌ها: تقطیر خروجی (logits)، ویژگی‌های میانی، <b>تقطیر دنباله</b> (دانش‌آموز روی پاسخ‌های تولیدی معلم آموزش می‌بیند؛ نحوه‌ی ساخت مدل‌های کوچک دستورپذیر) و تقطیر استدلال. نتیجه: مدل‌های کوچک با کیفیت نزدیک. تقطیر را روی دسته‌بندی ارقام اجرا می‌کنیم.""",
"اثر دمای T را روی دقت دانش‌آموز بسنج.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
X, y = load_digits(return_X_y=True); X = X / 16; Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0, test_size=.5)
teacher = RandomForestClassifier(300, random_state=0).fit(Xtr, ytr); print("معلم:", round(teacher.score(Xte, yte), 3))
small = Xtr[:100]; ysmall = ytr[:100]
alone = MLPClassifier(hidden_layer_sizes=(8,), max_iter=800, random_state=0).fit(small, ysmall).score(Xte, yte); print("دانش‌آموز فقط با ۱۰۰ برچسب:", round(alone, 3))
soft = teacher.predict_proba(Xtr)                                      # برچسب‌های نرم روی کل داده‌ی بدون‌برچسب
for T in (.25, 1.0):
    pt = soft ** (1 / T); pt /= pt.sum(1, keepdims=True); hard = pt.argmax(1)                  # دنباله‌/تقطیر برچسب‌نرم
    s = MLPClassifier(hidden_layer_sizes=(8,), max_iter=800, random_state=0).fit(Xtr, hard).score(Xte, yte); print(f"تقطیر با داده‌ی بدون‌برچسب (T={T}):", round(s, 3))
print("پارامتر معلم ≫ دانش‌آموز:", 300 * 100, "گره ≫", 64 * 8 + 8 * 10)""",packages=SK)

add(4,21,"""<p><b>هرس و فشرده‌سازی</b>: حذف وزن‌های کم‌اهمیت. <b>نامنظم</b> (unstructured): وزن‌های کوچک‌ترین قدر صفر؛ تنکی بالا (۹۰٪) با افت اندک، ولی سخت‌افزار از آن سود نمی‌برد مگر تنکی ساختاری. <b>ساختاریافته</b>: حذف کل نورون/سر/لایه (واقعاً سریع‌تر می‌شود)، و <b>2:4 sparsity</b> (NVIDIA: در هر ۴ وزن ۲ صفر؛ ۲× سرعت). فرضیه‌ی «بلیت برنده» (lottery ticket): زیرشبکه‌ی تنک مستقلی هست. روش: هرس تدریجی + فاین‌تیون. ترکیب با کوانتیزاسیون و تقطیر. هرس اندازه‌محور و ۲:۴ را اجرا می‌کنیم.""",
"تنکی را از ۵۰٪ تا ۹۹٪ ببر و منحنی خطا را بساز.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
X, y = load_digits(return_X_y=True); X = X / 16; Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0)
m = MLPClassifier(hidden_layer_sizes=(128,), max_iter=400, random_state=0).fit(Xtr, ytr); base = m.score(Xte, yte); print("پایه:", round(base, 3))
W0 = [w.copy() for w in m.coefs_]
for sp in (.5, .8, .9, .95, .99):
    m.coefs_ = [w.copy() for w in W0]; allw = np.concatenate([np.abs(w).ravel() for w in m.coefs_]); thr = np.quantile(allw, sp)
    m.coefs_ = [np.where(np.abs(w) >= thr, w, 0) for w in m.coefs_]; print(f"تنکی {sp:.0%}: دقت {m.score(Xte, yte):.3f}")
def sparse24(w): g = w.reshape(-1, 4); idx = np.argsort(np.abs(g), 1)[:, :2]; out = g.copy(); np.put_along_axis(out, idx, 0, 1); return out.reshape(w.shape)
w = W0[0][:64]; print("2:4 → درصد صفر:", (sparse24(w) == 0).mean())""",packages=SK)

add(4,22,"""<p><b>معماری مدل‌های بزرگ باز</b>: امروزه بیشتر مدل‌های باز (LLaMA 3، Mistral، Qwen، Gemma، DeepSeek) یک «دستور پخت» مشترک دارند: Transformer فقط‌رمزگشا با <b>RMSNorm</b> (به‌جای LayerNorm؛ بدون میانگین)، <b>RoPE</b>، <b>SwiGLU</b> (MLP دروازه‌ای: <code class='inline'>(Swish(xW₁)⊙xW₃)W₂</code>)، <b>GQA</b> (سرهای کلید/مقدار مشترک بین گروهی از سرهای پرس‌وجو برای کم‌کردن KV-cache)، بدون بایاس، و اغلب <b>Pre-Norm</b>. تغییرات: پنجره‌ی لغزان (Mistral)، MoE (Mixtral، DeepSeek-V3 با MLA)، زمینه‌ی ۱۲۸k+ با RoPE-scaling. با خواندن config می‌توان پارامترها و KV-cache را محاسبه کرد. بلوک مدرن را می‌سازیم.""",
"با config واقعی LLaMA-3-8B پارامترها و حافظه‌ی KV را حساب کن.",
py="""import numpy as np
rng = np.random.default_rng(0); d, h, kv, T = 64, 8, 2, 6; dh = d // h
rms = lambda x, g: x / np.sqrt((x ** 2).mean(-1, keepdims=True) + 1e-6) * g
silu = lambda z: z / (1 + np.exp(-z))
def swiglu(x, W1, W3, W2): return (silu(x @ W1) * (x @ W3)) @ W2
x = rng.normal(size=(T, d)); y = rms(x, np.ones(d)); print("RMSNorm بدون کم‌کردن میانگین:", y.mean().round(3), "rms≈", np.sqrt((y ** 2).mean()).round(3))
out = swiglu(x, rng.normal(size=(d, 4 * d)) * .1, rng.normal(size=(d, 4 * d)) * .1, rng.normal(size=(4 * d, d)) * .1); print("SwiGLU:", out.shape)
cfg = dict(d=4096, L=32, heads=32, kv_heads=8, ffn=14336, vocab=128256)
dh = cfg["d"] // cfg["heads"]; attn = cfg["d"] * cfg["d"] * 2 + cfg["d"] * dh * cfg["kv_heads"] * 2; mlp = 3 * cfg["d"] * cfg["ffn"]
params = cfg["L"] * (attn + mlp) + cfg["vocab"] * cfg["d"] * 2; print("پارامترها ≈", round(params / 1e9, 2), "B")
kv_per_tok = 2 * cfg["L"] * cfg["kv_heads"] * dh * 2; print("KV-cache هر توکن:", kv_per_tok / 1024, "KB | ۸k توکن:", round(kv_per_tok * 8192 / 1e9, 2), "GB | بدون GQA:", round(kv_per_tok * 4 * 8192 / 1e9, 2), "GB")""",packages=NP)

add(4,23,"""<p><b>طراحی آزمایش و مطالعه‌ی حذفی</b> (ablation): تغییر باید با شواهد توجیه شود. اصول: ۱) <b>یک تغییر در هر زمان</b> و کنترل بقیه (سخت‌افزار، seed، بودجه‌ی محاسبه‌ی برابر)؛ ۲) <b>خط پایه‌ی قوی و تنظیم‌شده</b> (پایه‌ی ضعیف = ادعای بی‌ارزش)؛ ۳) <b>چند seed</b> و گزارش میانگین ± انحراف/بازه‌ی اطمینان؛ ۴) <b>آزمون معناداری</b> یا بوت‌استرپ؛ ۵) <b>مجموعه‌ی توسعه جدا از آزمون</b>، آزمون یک‌بار؛ ۶) <b>ablation</b>: حذف هر مؤلفه‌ی پیشنهادی و نمایش افت؛ ۷) تحلیل خطا و موارد شکست؛ ۸) <b>پیش‌ثبت فرضیه</b>. دام‌ها: p-hacking، انتخاب بهترین seed، نشت آزمون، مقایسه‌ی نابرابر بودجه. جدول ablation و آزمون جایگشتی را اجرا می‌کنیم.""",
"آزمون جایگشتی را برای تفاوت دو روش با ۵ seed اجرا کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
def train(use_a, use_b, seed):
    r = np.random.default_rng(seed); return .70 + .03 * use_a + .02 * use_b + .005 * use_a * use_b + r.normal(0, .01)
rows = []
for a, b in [(0, 0), (1, 0), (0, 1), (1, 1)]:
    s = [train(a, b, sd) for sd in range(5)]; rows.append((a, b, np.mean(s), np.std(s, ddof=1), s)); print(f"A={a} B={b}: {np.mean(s):.3f} ± {np.std(s, ddof=1):.3f}")
x, y = np.array(rows[3][4]), np.array(rows[1][4]); obs = x.mean() - y.mean()
pool = np.r_[x, y]; null = [rng.permutation(pool)[:5].mean() - rng.permutation(pool)[5:].mean() for _ in range(5000)]
p = np.mean(np.abs(null) >= abs(obs)); print(f"اثر B (با A): {obs:+.3f} | p-value جایگشتی ≈ {p:.4f}")
best_seed = max(range(5), key=lambda i: x[i]); print("گزارش بهترین seed بیش‌برآورد است:", round(x[best_seed], 3), "vs میانگین", round(x.mean(), 3))""",packages=NP)

add(4,24,"""<p><b>خواندن و بازتولید مقاله</b>: مهارت پژوهشگر. <b>خواندن سه‌مرحله‌ای</b>: ۱) چکیده/شکل‌ها/نتیجه (۵ دقیقه: ارزش خواندن؟)؛ ۲) مقدمه + روش + ابهام‌ها (۳۰ دقیقه)؛ ۳) جزئیات و اثبات‌ها وقتی بازتولید می‌کنی. پرسش‌ها: مسئله‌ی دقیق؟ ادعای اصلی؟ شواهد کافی‌اند؟ خط‌پایه منصفانه؟ محدودیت‌ها؟ <b>بازتولید</b>: ابتدا کد رسمی (اگر هست) و نتایج منتشرشده، سپس نسخه‌ی کوچک‌مقیاس برای فهم، و پیاده‌سازی از صفر. مسائل: جزئیات بدون ذکر (نرخ یادگیری، seed، پیش‌پردازش)، داده‌ی غیرقابل‌دسترس. <b>گزارش بازتولید</b>: نتایج در برابر مقاله، شکاف‌ها و علت‌های احتمالی. قالب فرایند را به‌صورت چک‌لیست و ثبت ساختاریافته می‌سازیم.""",
"برای یک مقاله‌ی دلخواه چک‌لیست بازتولید را پر کن و شکاف‌ها را گزارش بده.",
py="""import json
paper = {"title": "مثال: روش X برای دسته‌بندی", "claims": ["روش X دقت ۹۲٪ روی داده‌ی D می‌گیرد", "ablation: مؤلفه‌ی B حیاتی است"], "details": {"lr": None, "seed": None, "preprocessing": "نامشخص", "code": "https://example.org/x", "data": "عمومی"}}
missing = [k for k, v in paper["details"].items() if v in (None, "نامشخص")]; print("جزئیات گمشده:", missing)
repro = {"claimed": .92, "mine": [.905, .911, .898], "gap_note": "تفاوت در پیش‌پردازش"}
import numpy as np; m, s = np.mean(repro["mine"]), np.std(repro["mine"], ddof=1); print(f"مقاله {repro['claimed']:.3f} | بازتولید {m:.3f} ± {s:.3f} | شکاف {repro['claimed'] - m:+.3f}")
print("ظرف ۲σ؟", abs(repro["claimed"] - m) <= 2 * s)
checklist = ["فهمیدن مسئله و متریک", "اجرای کد رسمی", "نسخه‌ی کوچک روی داده‌ی کم", "پیاده‌سازی از صفر", "ablation اصلی", "ثبت seed/نسخه‌ها", "گزارش شکاف‌ها"]
print(json.dumps({c: "☐" for c in checklist}, ensure_ascii=False)[:120], "...")""",packages=NP)

add(4,25,"""<p><b>یادگیری تقویتی عمیق: PPO</b>. سیاست‌گرادیان ساده ناپایدار است؛ گام بزرگ ممکن است سیاست را نابود کند. <b>PPO</b> (Proximal Policy Optimization): نسبت <code class='inline'>r(θ)=π_θ(a|s)/π_old(a|s)</code> و هدف بریده: <code class='inline'>L = E[min(r·Â, clip(r, 1−ε, 1+ε)·Â)]</code> که هر به‌روزرسانی را نزدیک به سیاست قبلی نگه می‌دارد. <b>مزیت</b> Â با <b>GAE</b>: <code class='inline'>Â=Σ(γλ)ˡδₜ₊ₗ</code> با δ=r+γV(s′)−V(s) (مبادله‌ی اریب/واریانس با λ). اجزا: سیاست (actor)، ارزش (critic)، آنتروپی برای اکتشاف، چند epoch روی هر دسته. استاندارد عملی کنترل و RLHF. GAE و هدف PPO را پیاده می‌کنیم.""",
"λ را از ۰ تا ۱ تغییر بده و اثر آن را بر واریانس مزیت ببین.",
py="""import numpy as np
rng = np.random.default_rng(0)
def gae(rewards, values, gamma=.99, lam=.95):
    adv = np.zeros(len(rewards)); last = 0
    for t in reversed(range(len(rewards))):
        nxt = values[t + 1] if t + 1 < len(values) else 0; delta = rewards[t] + gamma * nxt - values[t]; last = delta + gamma * lam * last; adv[t] = last
    return adv
r = rng.normal(0, 1, 50); v = np.cumsum(r[::-1])[::-1] * .3 + rng.normal(0, .3, 50)
for lam in (0.0, .5, .95, 1.0): a = gae(r, v, lam=lam); print(f"λ={lam}: میانگین {a.mean():+.3f} انحراف {a.std():.3f}")
def ppo_obj(ratio, adv, eps=.2): return np.minimum(ratio * adv, np.clip(ratio, 1 - eps, 1 + eps) * adv)
for ratio in (.5, .9, 1.0, 1.3, 2.0): print(f"نسبت {ratio}: هدف (A=+1) = {ppo_obj(ratio, 1.0):.2f} | (A=−1) = {ppo_obj(ratio, -1.0):.2f}")
print("بریدن گرادیان را برای بهبودهای بیش‌ازحد صفر می‌کند → به‌روزرسانی مطمئن")""",packages=NP)
