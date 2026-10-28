import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']

add(4,26,"""<p><b>RL برای مدل‌های زبانی</b>: مسئله را به‌صورت MDP می‌بینیم: حالت = پرامپت + توکن‌های تا اینجا، عمل = توکن بعدی، پاداش = امتیاز کل پاسخ (در انتها). روش‌ها: <b>PPO-RLHF</b> (با ناقد)، <b>GRPO</b> (بدون ناقد: برای هر پرامپت G پاسخ نمونه می‌گیرد و مزیت = پاداش استانداردشده‌ی درون گروه)، <b>RLVR</b> (پاداش قابل‌راستی‌آزمایی: تطبیق پاسخ ریاضی، گذراندن تست‌های کد) که پایه‌ی مدل‌های استدلالگر است. جریمه‌ی KL به مدل مرجع از فروپاشی جلوگیری می‌کند. خطرات: هک پاداش، کاهش تنوع. مزیت گروهی GRPO را محاسبه می‌کنیم.""",
"با پاداش‌های ۰/۱ نشان بده وقتی همه‌ی پاسخ‌های گروه درست یا غلط‌اند مزیت صفر می‌شود.",
py="""import numpy as np
def grpo_adv(rewards): r = np.array(rewards, float); return (r - r.mean()) / (r.std() + 1e-8)
print("گروه مختلط:", grpo_adv([1, 0, 0, 1, 0, 0, 0, 1]).round(2))
print("همه‌ی پاسخ‌ها درست:", grpo_adv([1, 1, 1, 1]).round(2), "← سیگنال یادگیری صفر")
rng = np.random.default_rng(0); p = np.array([.2, .3, .5]); correct = np.array([0, 0, 1]); theta = np.zeros(3)
for step in range(300):
    pr = np.exp(theta) / np.exp(theta).sum(); acts = rng.choice(3, 8, p=pr); rw = correct[acts].astype(float); adv = grpo_adv(rw)
    g = np.zeros(3)
    for a, A in zip(acts, adv): gl = -pr.copy(); gl[a] += 1; g += A * gl
    theta += .1 * g / 8
print("احتمال پاسخ درست بعد از RLVR:", (np.exp(theta) / np.exp(theta).sum()).round(2))
verify = lambda ans, gold: float(ans.strip() == gold); print("پاداش قابل‌راستی‌آزمایی:", verify("42", "42"), verify("41", "42"))""",packages=NP)

add(4,27,"""<p><b>مدل‌های پاداش و ارزیابی</b>: <b>مدل پاداش نتیجه‌محور (ORM)</b> فقط پاسخ نهایی را امتیاز می‌دهد؛ <b>مدل پاداش فرایندی (PRM)</b> هر گام استدلال را (سیگنال متراکم‌تر؛ برچسب‌گذاری گران‌تر). کاربرد: RLHF، <b>best-of-N</b> (نمونه‌گیری N پاسخ و انتخاب بالاترین امتیاز)، جست‌وجوی درخت. <b>قانون گودهارت برای پاداش</b>: با بهینه‌سازی زیاد، مدل از ضعف پاداش‌سنج استفاده می‌کند (over-optimization؛ پاداش پروکسی بالا، پاداش واقعی کم). راهکار: جریمه‌ی KL، مجموعه‌ی پاداش‌ها، به‌روزرسانی مداوم داده‌ی ترجیحی. منحنی بیش‌بهینه‌سازی را شبیه‌سازی می‌کنیم.""",
"best-of-N را برای N های مختلف با پاداش پروکسی نویزی اجرا کن و نقطه‌ی بهینه را بیاب.",
py="""import numpy as np
rng = np.random.default_rng(0)
def trial(N, noise=1.0, bias_len=0.5, trials=3000):
    true = rng.normal(size=(trials, N)); length = rng.normal(size=(trials, N))
    proxy = true + noise * rng.normal(size=(trials, N)) + bias_len * length * 2          # پروکسی به طول سوگیری دارد
    pick = proxy.argmax(1); return proxy[np.arange(trials), pick].mean(), true[np.arange(trials), pick].mean()
print(" N | پاداش پروکسی | پاداش واقعی")
for N in (1, 2, 4, 16, 64, 256): p, t = trial(N); print(f"{N:3} | {p:12.2f} | {t:10.2f}")
steps = [.9, .8, .3, .85]; print("PRM: امتیاز هر گام", steps, "| ORM فقط:", 1.0, "← PRM گام ضعیف سوم را می‌یابد:", int(np.argmin(steps)) + 1)""",packages=NP)

add(4,28,"""<p><b>تفسیرپذیری مکانیکی</b>: مهندسی معکوس شبکه برای فهم الگوریتم‌هایی که یاد گرفته. مفاهیم: <b>ویژگی‌ها</b> و <b>برهم‌نهی</b> (superposition: شبکه بیش از d ویژگی را در d بُعد با جهت‌های تقریباً متعامد ذخیره می‌کند؛ نورون‌های چندمعنایی)، <b>مدارها</b> (circuits: زیرگراف‌هایی مثل «سر القا» induction head برای کپی الگو)، <b>autoencoder تنک (SAE)</b> برای استخراج ویژگی‌های تک‌معنا از فعال‌سازی‌ها، <b>probing</b> (آیا اطلاعات X در این لایه خطی‌خوانا است؟)، <b>patching علّی</b> (جایگزینی فعال‌سازی برای سنجش اثر علّی)، <b>logit lens</b>. هدف: صداقت و ایمنی با فهم درون مدل. probing خطی و SAE کوچک را اجرا می‌کنیم.""",
"SAE را با ضریب تنکی بیشتر آموزش بده و تک‌معنایی ویژگی‌ها را بسنج.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
rng = np.random.default_rng(0); n_feat, d, n = 8, 4, 4000                                # ۸ ویژگی در ۴ بُعد: برهم‌نهی
F = (rng.random((n, n_feat)) < .1).astype(float); Wd = rng.normal(size=(n_feat, d)); Wd /= np.linalg.norm(Wd, axis=1, keepdims=True)
X = F @ Wd
print("بُعد ۴ ولی ۸ ویژگی؛ برهم‌نهی: میانگین |کسینوس| بین جهت‌ها =", np.abs(Wd @ Wd.T - np.eye(n_feat)).mean().round(2))
clf = LogisticRegression(max_iter=500).fit(X[:3000], F[:3000, 0] > 0); print("probing خطی ویژگی ۰:", round(clf.score(X[3000:], F[3000:, 0] > 0), 3))
# SAE ساده با ISTA/گرادیان: X ≈ relu(X E) D با جریمه‌ی L1
k = 16; E = rng.normal(size=(d, k)) * .3; D = rng.normal(size=(k, d)) * .3; lr, l1 = .02, .05
for ep in range(1500):
    idx = rng.choice(n, 256); xb = X[idx]; z = np.maximum(xb @ E, 0); err = z @ D - xb
    gD = z.T @ err / 256; gz = (err @ D.T + l1 * np.sign(z)) * (z > 0); gE = xb.T @ gz / 256; D -= lr * gD; E -= lr * gE
z = np.maximum(X @ E, 0); print("بازسازی MSE:", round(float(((z @ D - X) ** 2).mean()), 4), "| درصد فعال‌سازی تنک:", round(float((z > 1e-3).mean()), 2))
print("induction head: الگوی [A][B] … [A] → پیش‌بینی [B]")""",packages=SK)

add(4,29,"""<p><b>ارزیابی خطر و red teaming</b>: بررسی سامانی توانایی‌ها و رفتارهای خطرناک پیش از استقرار. <b>انواع</b>: ارزیابی‌های توانایی خطرناک (سایبری، زیستی، متقاعدسازی، خودمختاری)، <b>red teaming</b> انسانی و خودکار (مدل مهاجم تولید حمله می‌کند)، <b>جیل‌بریک</b>، تست سوگیری و سمیت، و «فریبکاری/برنامه‌ریزی». رویکرد: <b>مدل تهدید</b> مشخص، آستانه‌های خطر و <b>سیاست‌های مقیاس‌دهی مسئولانه</b> (اگر توانایی از X گذشت → محافظ‌های Y). نتیجه‌ی مثبت و منفی گزارش شود؛ «عدم یافتن خطر» ≠ «عدم وجود». این‌جا یک چارچوب red teaming امن (بدون محتوای مضر) برای سنجش نرخ رد درخواست‌های سیاست‌مند می‌سازیم.""",
"نرخ موفقیت حمله را بر حسب تعداد تلاش (k) با نمونه‌گیری مکرر برآورد کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
def model_refuses(prompt_risk, hardened):        # مدل ساختگی: احتمال رد وابسته به ریسک و تقویت
    p = 1 / (1 + np.exp(-(3 * prompt_risk - 1 + 2 * hardened))); return rng.random() < p
attacks = {"مستقیم": .9, "نقش‌آفرینی": .6, "کدگذاری": .45, "چندمرحله‌ای": .35}
for hardened in (0, 1):
    print("مدل تقویت‌شده" if hardened else "مدل پایه")
    for name, risk in attacks.items():
        asr = np.mean([not model_refuses(risk, hardened) for _ in range(4000)]); print(f"  {name:12} نرخ موفقیت حمله {asr:.1%}")
q = .02; print("با k تلاش مستقل، احتمال حداقل یک موفقیت:", {k: round(1 - (1 - q) ** k, 2) for k in (1, 10, 50, 200)}, "← یک تلاش کافی نیست")
over = np.mean([model_refuses(.05, 1) for _ in range(4000)]); print("رد بیش‌ازحد (درخواست بی‌خطر):", f"{over:.1%}", "← باید پایین باشد")""",packages=NP)

add(4,30,"""<p><b>حریم خصوصی تفاضلی</b> (DP): الگوریتم M «ε-DP» است اگر برای هر دو پایگاه‌داده‌ی مجاور (فقط یک نفر متفاوت) و هر خروجی S: <code class='inline'>P[M(D)∈S] ≤ e^ε·P[M(D′)∈S]</code> → حضور یک فرد را نمی‌توان از خروجی فهمید. <b>سازوکار لاپلاس</b>: به پاسخ پرس‌وجو نویز <code class='inline'>Lap(Δf/ε)</code> اضافه کن (Δf حساسیت). ε کوچک = حریم بیشتر، دقت کمتر؛ <b>ترکیب</b>: ε تجمیع می‌شود. در ML: <b>DP-SGD</b>: برش گرادیان هر نمونه (norm ≤ C) + نویز گاوسی؛ حسابدار حریم (moments accountant). هزینه: افت دقت و کندی. سازوکار لاپلاس و DP-SGD ساده را اجرا می‌کنیم.""",
"ε را تغییر بده و خطای پاسخ میانگین را بسنج.",
py="""import numpy as np
rng = np.random.default_rng(0); ages = rng.integers(18, 80, 1000)
def dp_mean(x, eps, lo=18, hi=80):
    n = len(x); sens = (hi - lo) / n; return np.clip(x, lo, hi).mean() + rng.laplace(0, sens / eps)
true = ages.mean()
for eps in (.01, .1, 1, 10): errs = [abs(dp_mean(ages, eps) - true) for _ in range(500)]; print(f"ε={eps:5}: خطای میانگین {np.mean(errs):.3f}")
a, b = ages, ages.copy(); b[0] = 18 if b[0] != 18 else 80
print("پاسخ‌ها روی دو پایگاه مجاور (ε=1) نزدیک و ناتمایزپذیرند:", round(dp_mean(a, 1), 2), round(dp_mean(b, 1), 2))
from sklearn.datasets import make_classification
X, y = make_classification(2000, 5, random_state=0); w = np.zeros(5); C, sigma, lr = 1.0, 1.0, .5
for step in range(200):
    idx = rng.choice(2000, 100); p = 1 / (1 + np.exp(-X[idx] @ w)); g = (p - y[idx])[:, None] * X[idx]
    g = g / np.maximum(1, np.linalg.norm(g, axis=1, keepdims=True) / C); gs = g.sum(0) + rng.normal(0, sigma * C, 5); w -= lr * gs / 100
print("دقت DP-SGD:", ((X @ w > 0) == y).mean().round(3))""",packages=SK)

add(4,31,"""<p><b>یادگیری فدرال</b>: آموزش روی داده‌ی پخش‌شده (گوشی‌ها، بیمارستان‌ها) بدون انتقال داده‌ی خام. <b>FedAvg</b>: سرور مدل را می‌فرستد؛ هر کلاینت چند گام محلی آموزش می‌دهد؛ سرور <b>میانگین وزن‌دار</b> (بر اساس اندازه‌ی داده) می‌گیرد. چالش‌ها: داده‌ی <b>غیر IID</b> (توزیع متفاوت کلاینت‌ها → رانش کلاینت)، ارتباط گران (فشرده‌سازی و گام‌های محلی بیشتر)، ناهمگونی سخت‌افزار، کلاینت‌های ازدست‌رفته، و امنیت/حریم: به‌روزرسانی‌ها نیز اطلاعات نشت می‌دهند → <b>تجمیع امن</b> + DP. FedAvg را روی داده‌ی غیر IID شبیه‌سازی می‌کنیم.""",
"گام‌های محلی را زیاد کن و اثر داده‌ی غیر IID را ببین.",
py="""import numpy as np
rng = np.random.default_rng(0)
def make_client(shift, n=200): X = rng.normal(shift, 1, (n, 2)); y = (X.sum(1) - 2 * shift > 0).astype(float); return X, y
clients = [make_client(s) for s in (-1.5, 0, 1.5, 3)]
Xt, yt = np.vstack([make_client(s)[0] for s in (-1.5, 0, 1.5, 3)]), np.concatenate([make_client(s)[1] for s in (-1.5, 0, 1.5, 3)])
def local(w, X, y, steps, lr=.1):
    w = w.copy()
    for _ in range(steps): p = 1 / (1 + np.exp(-(X @ w[:2] + w[2]))); g = np.r_[X.T @ (p - y), (p - y).sum()] / len(y); w -= lr * g
    return w
def fedavg(local_steps, rounds=30):
    w = np.zeros(3)
    for r in range(rounds): ws = [local(w, X, y, local_steps) for X, y in clients]; w = np.average(ws, axis=0, weights=[len(y) for _, y in clients])
    return w
for steps in (1, 10, 50):
    w = fedavg(steps); acc = (((Xt @ w[:2] + w[2]) > 0) == yt).mean(); print(f"گام محلی {steps:2}: دقت سراسری {acc:.3f}")
print("داده‌ی خام هرگز از کلاینت خارج نمی‌شود؛ فقط وزن‌ها")""",packages=NP)

add(4,32,"""<p><b>قابلیت اعتماد و انصاف</b>: <b>کالیبراسیون</b> (آیا ۷۰٪ اطمینان یعنی ۷۰٪ درستی؟) با <b>ECE</b> و نمودار قابلیت اطمینان؛ اصلاح با <b>مقیاس‌دمای</b> (temperature scaling) روی اعتبارسنجی. <b>تخمین عدم‌قطعیت</b>: گروه مدل‌ها، MC-Dropout، <b>پیش‌بینی همدیسی</b> (conformal: بازه/مجموعه‌ی پیش‌بینی با پوشش تضمین‌شده ≥ 1−α بدون فرض توزیع). <b>انصاف</b>: برابری جمعیتی، برابری فرصت (TPR مساوی)، برابری احتمال‌های شرطی؛ <b>قضیه‌ی ناممکن</b>: در حالت عمومی همه با هم قابل‌تأمین نیستند. تشخیص <b>OOD</b> (خارج از توزیع). ECE، مقیاس‌دما و همدیسی را پیاده می‌کنیم.""",
"پوشش تجربی همدیسی را برای α های مختلف بسنج.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
rng = np.random.default_rng(0); X = rng.normal(size=(6000, 5)); y = (X @ [1, -1, .5, 0, 0] + rng.logistic(size=6000) > 0).astype(int)
Xtr, Xr, ytr, yr = train_test_split(X, y, test_size=.6, random_state=0); Xcal, Xte, ycal, yte = train_test_split(Xr, yr, test_size=.5, random_state=0)
m = LogisticRegression(C=100).fit(Xtr, ytr)
def ece(p, y, bins=10):
    conf = np.maximum(p, 1 - p); pred = (p > .5).astype(int); e = 0
    for lo in np.linspace(.5, 1, bins, endpoint=False):
        mk = (conf >= lo) & (conf < lo + .5 / bins)
        if mk.any(): e += mk.mean() * abs((pred[mk] == y[mk]).mean() - conf[mk].mean())
    return e
logit = lambda X: X @ m.coef_[0] + m.intercept_[0]; z = logit(Xte) * 3; p = 1 / (1 + np.exp(-z))               # عمداً بیش‌ازحد مطمئن
print("ECE بیش‌ازحد مطمئن:", round(ece(p, yte), 3))
best = min(np.linspace(.5, 4, 36), key=lambda T: -np.mean(ycal * np.log(1 / (1 + np.exp(-logit(Xcal) * 3 / T)) + 1e-9) + (1 - ycal) * np.log(1 - 1 / (1 + np.exp(-logit(Xcal) * 3 / T)) + 1e-9)))
print("دمای بهینه T:", round(best, 2), "| ECE بعد:", round(ece(1 / (1 + np.exp(-z / best)), yte), 3))
pc = m.predict_proba(Xcal)[np.arange(len(ycal)), ycal]; scores = 1 - pc
for alpha in (.2, .1, .05):
    q = np.quantile(scores, np.ceil((len(scores) + 1) * (1 - alpha)) / len(scores)); P = m.predict_proba(Xte); sets = P >= 1 - q
    cover = sets[np.arange(len(yte)), yte].mean(); print(f"α={alpha}: پوشش {cover:.3f} (هدف ≥ {1 - alpha:.2f}) | میانگین اندازه‌ی مجموعه {sets.sum(1).mean():.2f}")""",packages=SK)

add(4,33,"""<p><b>مدل‌های مولد تصویر: معماری عملی</b>: انتشار پنهان (Stable Diffusion) سه جزء دارد: <b>VAE</b> (فشرده‌سازی تصویر ۸× در هر بُعد به فضای نهفته)، <b>U-Net یا DiT</b> (حذف نویز در فضای نهفته با شرط‌دهی متن از طریق توجه متقاطع)، و <b>رمزگذار متن</b> (CLIP/T5). <b>هدایت بدون طبقه‌بند</b> (CFG): <code class='inline'>ε̂ = ε(∅) + w·(ε(c) − ε(∅))</code>؛ w بزرگ‌تر = وفاداری بیشتر به متن و تنوع کمتر. <b>نمونه‌گیرها</b> (DDIM، DPM-Solver) گام‌ها را از ۱۰۰۰ به ~۲۰ می‌رسانند. کنترل: ControlNet، LoRA برای سبک، IP-Adapter. ملاحظات: کپی‌رایت، سوءاستفاده، واترمارک. CFG و نمونه‌گیری DDIM را روی داده‌ی ۱بعدی نشان می‌دهیم.""",
"w را تغییر بده و تنوع و تمرکز نمونه‌ها را روی دو مُد مقایسه کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
# داده: مخلوط دو مُد شرطی روی c ∈ {0,1}: میانگین -2 یا +2
T = 60; betas = np.linspace(1e-3, .05, T); alphas = 1 - betas; abar = np.cumprod(alphas)
def eps_star(x, t, c):                                    # نویز بهینه برای توزیع گاوسی N(mu_c, .3²)
    mu, s2 = (-2 if c == 0 else 2), .09; var_t = abar[t] * s2 + 1 - abar[t]; return (x - np.sqrt(abar[t]) * mu) * np.sqrt(1 - abar[t]) / var_t
def eps_uncond(x, t):
    pr = [np.exp(-.5 * (x - np.sqrt(abar[t]) * m) ** 2 / (abar[t] * .09 + 1 - abar[t])) for m in (-2, 2)]; w = pr[0] / (pr[0] + pr[1] + 1e-12); return w * eps_star(x, t, 0) + (1 - w) * eps_star(x, t, 1)
def sample(c, w, n=2000):
    x = rng.normal(size=n)
    for t in reversed(range(T)):
        e = eps_uncond(x, t) + w * (eps_star(x, t, c) - eps_uncond(x, t))
        x = (x - betas[t] / np.sqrt(1 - abar[t]) * e) / np.sqrt(alphas[t]) + (np.sqrt(betas[t]) * rng.normal(size=n) if t > 0 else 0)
    return x
for w in (0, 1, 3): s = sample(1, w); print(f"CFG w={w}: میانگین {s.mean():+.2f} انحراف {s.std():.2f} (هدف +2.00 و 0.30)")
print("نمونه‌گیر DDIM با ۲۰ گام به‌جای ۶۰ همین مسیر را هموار می‌پیماید")""",packages=NP)

add(4,34,"""<p><b>ویدیو و صوت مولد</b>: <b>ویدیو</b>: انتشار پنهان فضازمانی (Sora، Veo، Wan): توکن‌های «تکه‌ی فضازمانی» با DiT. چالش‌ها: هم‌خوانی زمانی (اشیا مثل واقعیت حرکت کنند)، هزینه (ابعاد زیاد)، طول. <b>صوت</b>: بازنمایی با <b>کدک عصبی</b> (EnCodec، SoundStream: صدا ← توکن‌های گسسته‌ی RVQ) و سپس مدل خودرگرسیو یا انتشار روی توکن‌ها (MusicGen، VALL-E، AudioLM)؛ TTS با شبیه‌سازی صدا. ریسک‌ها: <b>جعل عمیق</b>، شبیه‌سازی صدا بدون رضایت، کپی‌رایت → واترمارک، منشأ محتوا (C2PA)، رضایت. <b>کوانتیزاسیون برداری باقیمانده</b> (RVQ) را پیاده می‌کنیم.""",
"تعداد کدبوک‌ها را زیاد کن و خطای بازسازی را رصد کن.",
py="""import numpy as np
from sklearn.cluster import KMeans
rng = np.random.default_rng(0); sr = 4000; t = np.arange(sr) / sr
wave = .6 * np.sin(2 * np.pi * 220 * t) + .3 * np.sin(2 * np.pi * 330 * t) + .05 * rng.normal(size=sr)
frames = wave.reshape(-1, 20)                                   # فریم‌های ۲۰تایی = بردارها
residual = frames.copy(); recon = np.zeros_like(frames); books = []
for q in range(4):
    km = KMeans(32, n_init=2, random_state=0).fit(residual); codes = km.predict(residual); recon += km.cluster_centers_[codes]; residual = frames - recon; books.append(km)
    print(f"کدبوک {q + 1}: MSE بازسازی {np.mean((frames - recon) ** 2):.5f} | بیت/فریم تجمعی {5 * (q + 1)}")
print("نرخ بیت: ۱۰۰ بایت/ثانیه‌ی ۱۶بیتی →", round(len(frames) * 5 * 4 / 8 / 1), "بایت برای ۱ ثانیه (۴ کدبوک)", "| خام:", sr * 2)
print("ویدیو: ۲۴fps × 5s × (۲۵۶×۲۵۶) → توکن‌های فضازمانی ≈", 24 * 5 * (256 // 16) ** 2 // 4)""",packages=SK)

add(4,35,"""<p><b>رباتیک و یادگیری تجسم‌یافته</b>: عامل در دنیای فیزیکی: مشاهده (دوربین، لیدار، لمس) ← سیاست ← عمل (گشتاور/سرعت). چالش‌ها: داده‌ی گران، ایمنی، <b>شکاف شبیه‌سازی به واقعیت</b> (sim2real) → <b>تصادفی‌سازی دامنه</b> (دامنه‌ی اصطکاک/جرم/نور در شبیه‌ساز تغییر کند تا سیاست مقاوم شود). روش‌ها: <b>یادگیری تقلیدی</b> (رفتارنمایی از نمایش انسان؛ مشکل <b>رانش توزیع</b> → DAgger)، RL در شبیه‌ساز، <b>مدل‌های بینایی-زبان-عمل (VLA)</b> مثل RT-2/OpenVLA، <b>مدل جهان</b> (پیش‌بینی آینده برای برنامه‌ریزی)، و کنترل کلاسیک (PID، MPC) که هنوز ستون عملی است. یک کنترل‌کننده‌ی PID و مسئله‌ی رانش در تقلید را شبیه‌سازی می‌کنیم.""",
"PID را برای هدف پله‌ای تنظیم کن (فراجهش و زمان نشست).",
py="""import numpy as np
def sim_pid(kp, ki, kd, steps=300, dt=.05, target=1.0):
    x = v = 0; integ = prev = 0; xs = []
    for _ in range(steps):
        e = target - x; integ += e * dt; u = kp * e + ki * integ + kd * (e - prev) / dt; prev = e
        a = u - .5 * v; v += a * dt; x += v * dt; xs.append(x)
    return np.array(xs)
for name, g in [("فقط P", (4, 0, 0)), ("PD", (4, 0, 2)), ("PID", (4, 2, 2))]:
    xs = sim_pid(*g); settle = next((i * .05 for i in range(len(xs)) if np.all(np.abs(xs[i:] - 1) < .02)), None); print(f"{name:5} فراجهش {max(0, xs.max() - 1):.2f} | خطای ماندگار {abs(1 - xs[-1]):.3f} | زمان نشست {settle}")
rng = np.random.default_rng(0)
def drift(noise, horizon=40): 
    err = 0.0
    for _ in range(horizon): err = err * 1.05 + abs(rng.normal(0, noise))                 # خطای کوچک انباشته می‌شود
    return err
print("رانش تقلیدی: خطای ۰٫۰۲ در هر گام → انباشت پس از ۴۰ گام:", round(np.mean([drift(.02) for _ in range(500)]), 2))
print("تصادفی‌سازی دامنه: اصطکاک ∈", np.round(rng.uniform(.2, 1.0, 4), 2))""",packages=NP)

add(4,36,"""<p><b>عامل‌های خودمختار پیشرفته</b>: عامل‌های بلندمدت (کار ساعت‌ها/روزها): <b>برنامه‌ریزی سلسله‌مراتبی</b>، <b>جست‌وجو</b> (درخت افکار، MCTS روی گام‌های استدلال)، <b>تأمل و خودتصحیح</b> با بازخورد محیط (اجرای تست‌ها)، <b>حافظه‌ی بلندمدت و مدیریت زمینه</b> (خلاصه‌سازی، یادداشت خارجی)، <b>استفاده از رایانه</b> (GUI، مرورگر)، <b>کدنویسی</b> (SWE-bench)، <b>هماهنگی</b> و مهار خطای انباشته: اگر هر گام ۹۵٪ درست باشد، ۲۰ گام ≈ ۳۶٪ موفق! لذا <b>اعتبارسنجی میانی</b>، بازگشت به نقطه‌ی بازرسی و کاهش گام‌ها حیاتی است. ایمنی: محدوده‌ی اختیار، تأیید برای کارهای غیرقابل‌برگشت، و ثبت کامل. MCTS ساده و محاسبه‌ی خطای انباشته را اجرا می‌کنیم.""",
"بازگشت به نقطه‌ی بازرسی را اضافه کن و موفقیت کل را قبل و بعد مقایسه کن.",
py="""import numpy as np, math
rng = np.random.default_rng(0)
print("موفقیت زنجیره بدون اعتبارسنجی:", {n: round(.95 ** n, 2) for n in (5, 10, 20, 50)})
def run(n_steps, p=.95, verify=False, retries=3):
    for _ in range(n_steps):
        ok = rng.random() < p
        if not ok and verify:
            for _ in range(retries):
                if rng.random() < p: ok = True; break
        if not ok: return 0
    return 1
for v in (False, True): print("با اعتبارسنجی/تلاش مجدد:" if v else "بدون:", np.mean([run(30, verify=v) for _ in range(4000)]).round(3))
class Node:
    def __init__(s, state, parent=None): s.state, s.parent, s.children, s.n, s.w = state, parent, [], 0, 0.0
def mcts(root_val, depth=4, iters=800):
    root = Node((0, 0)); best_val = lambda s: -abs(s[1] - root_val)
    for _ in range(iters):
        node = root
        while node.children: node = max(node.children, key=lambda c: c.w / (c.n + 1e-9) + 1.4 * math.sqrt(math.log(node.n + 1) / (c.n + 1e-9)) if c.n else 1e9)
        if node.state[0] < depth and node.n > 0: node.children = [Node((node.state[0] + 1, node.state[1] + d), node) for d in (-1, 0, 1, 2)]; node = node.children[int(rng.integers(4))]
        s = node.state
        while s[0] < depth: s = (s[0] + 1, s[1] + int(rng.choice([-1, 0, 1, 2])))
        r = best_val(s) + 0
        while node: node.n += 1; node.w += r; node = node.parent
    return max(root.children, key=lambda c: c.n).state if root.children else None
print("اولین حرکت MCTS برای هدف مجموع ۶:", mcts(6))""",packages=NP)

add(4,37,"""<p><b>ارزیابی عامل‌ها در مقیاس</b>: دشوارتر از ارزیابی مدل چون <b>چندمرحله‌ای، محیط‌دار و غیرقطعی</b> است. اجزا: ۱) <b>محیط بازتولیدپذیر</b> (کانتینر/sandbox با وضعیت اولیه‌ی ثابت)؛ ۲) <b>وظایف با بررسی‌گر خودکار</b> (آیا فایل ساخته شد؟ آیا تست‌ها گذشت؟)؛ ۳) <b>معیارها</b>: نرخ موفقیت، تعداد گام، هزینه، تأخیر، امنیت (اقدام‌های ممنوع)؛ ۴) <b>pass@k</b> (حداقل یک موفقیت در k تلاش) در برابر <b>pass^k</b> (همه‌ی k تلاش موفق؛ سنجش پایداری)؛ ۵) تحلیل <b>trace</b> و دسته‌بندی شکست (برنامه‌ریزی، ابزار، حافظه)؛ ۶) واریانس بالا → تکرار؛ ۷) محافظت در برابر <b>تقلب</b> (عامل به پاسخ/تست دسترسی نداشته باشد). برآوردگرهای pass@k و pass^k را می‌سازیم.""",
"برای عاملی با موفقیت تکی ۷۰٪، pass^8 را حساب کن و تفسیر کن.",
py="""import numpy as np
from math import comb
def pass_at_k(n, c, k): return 1.0 if n - c < k else 1 - comb(n - c, k) / comb(n, k)
def pass_pow_k(n, c, k): return comb(c, k) / comb(n, k)
n, c = 20, 14                                                          # ۲۰ اجرا، ۱۴ موفق (۷۰٪)
for k in (1, 3, 8): print(f"k={k}: pass@k = {pass_at_k(n, c, k):.3f} | pass^k = {pass_pow_k(n, c, k):.3f}")
print("تقریب مستقل: pass^8 =", round(.7 ** 8, 3), "← عامل «معمولاً» کار می‌کند ولی قابل‌اتکا نیست")
rng = np.random.default_rng(0)
tasks = [("ساخت فایل", .9), ("رفع باگ", .6), ("تحلیل داده", .75), ("رزرو چندمرحله‌ای", .35)]
res = {t: rng.random(30) < p for t, p in tasks}
for t, r in res.items(): print(f"{t:18} موفقیت {r.mean():.0%} ± {1.96 * np.sqrt(r.mean() * (1 - r.mean()) / 30):.0%}")
fail = {"برنامه‌ریزی": 12, "ابزار": 7, "حافظه/زمینه": 5, "امنیت/ممنوع": 1}; print("دسته‌بندی شکست:", fail)""",packages=NP)

add(4,38,"""<p><b>طراحی سیستم‌های AI برای تولید</b>: فراتر از مدل: <b>معماری</b> (ورودی ← اعتبارسنجی/ایمنی ← بازیابی/ابزار ← مدل ← پس‌پردازش ← پایش)، <b>الگوهای قابلیت اطمینان</b> (timeout، retry، fallback به مدل کوچک/قاعده‌ی ثابت، circuit breaker، تکرارپذیری idempotent)، <b>تأخیر و هزینه</b> (کش، مسیریابی، batching، ناهمگام)، <b>ایمنی لایه‌ای</b>، <b>انسان در حلقه</b> (صف بازبینی با اولویت اطمینان)، <b>حلقه‌ی بازخورد</b> (لاگ ← برچسب ← بهبود)، <b>حاکمیت</b> (حسابرسی، نسخه‌ها)، و SLOهای کیفیت (نه فقط uptime). مدل را «جزء غیرقطعی» بدان. یک شبیه‌ساز SLO و fallback برای سرویس چندمدلی می‌سازیم.""",
"مسیر fallback و صف بازبینی انسانی را بر اساس اطمینان اضافه کن و SLO را بسنج.",
py="""import numpy as np
rng = np.random.default_rng(0); N = 20000
conf = rng.beta(5, 2, N); correct_main = rng.random(N) < conf; main_down = rng.random(N) < .03; lat_main = rng.lognormal(-1.0, .6, N)
def route(i, thr_review=.5, timeout=1.5):
    if main_down[i] or lat_main[i] > timeout: return "fallback", rng.random() < .75, .15
    if conf[i] < thr_review: return "human", True, 30.0
    return "main", correct_main[i], lat_main[i]
res = [route(i) for i in range(N)]; paths = [r[0] for r in res]
print("سهم مسیرها:", {p: round(paths.count(p) / N, 3) for p in set(paths)})
acc = np.mean([r[1] for r in res]); lat = np.array([r[2] for r in res if r[0] != "human"]); print("دقت کل:", round(acc, 3), "| p95 تأخیر (بدون انسان):", round(np.percentile(lat, 95), 2), "s")
print("بدون fallback و بازبینی: دقت", round(correct_main.mean(), 3), "| خطای کامل هنگام خرابی:", f"{main_down.mean():.1%}")
slo = {"دقت ≥ 0.9": acc >= .9, "p95 < 2s": np.percentile(lat, 95) < 2, "دسترس‌پذیری ≥ 99.9%": True}; print(slo)""",packages=NP)

add(4,39,"""<p><b>معماری پلتفرم داده برای ML</b>: لایه‌ها: <b>دریافت</b> (دسته‌ای/جریانی: Kafka)، <b>ذخیره</b> (دریاچه‌ی داده: Parquet روی شی‌ذخیره، قالب‌های جدول Delta/Iceberg با ACID و سفر در زمان)، <b>تبدیل</b> (Spark/dbt)، <b>کیفیت داده</b> (آزمون‌های اسکیما، تازگی، توزیع)، <b>کاتالوگ و تبارنامه</b> (lineage)، <b>سرو</b> (انبار تحلیلی/ویژگی). اصول: <b>اسکیما صریح</b>، <b>idempotent بودن کارها</b>، <b>پارتیشن‌بندی</b> بر اساس تاریخ، <b>نسخه‌ی داده</b> برای بازتولید مدل، <b>شفافیت مالکیت</b>. معماری مدالیون: برنز (خام) ← نقره (پاک) ← طلا (آماده‌ی استفاده). یک خط لوله‌ی کوچک با اعتبارسنجی کیفیت داده می‌سازیم.""",
"قاعده‌ی کیفیت جدید «تازگی داده» بنویس و رکوردهای قدیمی را قرنطینه کن.",
py="""import pandas as pd, numpy as np
bronze = pd.DataFrame({"user": [1, 2, 2, 3, None, 5], "amount": [10, -5, 20, 1e6, 7, 8], "ts": pd.to_datetime(["2026-10-01", "2026-10-01", "2026-10-02", "2026-10-02", "2026-10-03", "2026-08-01"])})
rules = {"کلید خالی نیست": lambda d: d["user"].notna(), "مبلغ معتبر": lambda d: d["amount"].between(0, 1e5), "تازه (≤۳۰ روز)": lambda d: (pd.Timestamp("2026-10-04") - d["ts"]).dt.days <= 30}
ok = pd.Series(True, index=bronze.index); report = {}
for name, r in rules.items(): m = r(bronze); report[name] = int((~m).sum()); ok &= m
silver = bronze[ok].drop_duplicates(); quarantine = bronze[~ok]; print("گزارش کیفیت:", report); print("نقره:", len(silver), "| قرنطینه:", len(quarantine))
gold = silver.groupby(silver["ts"].dt.date)["amount"].agg(["count", "sum"]); print(gold)
def idempotent_load(target, batch): return pd.concat([target, batch]).drop_duplicates(subset=["user", "ts"], keep="last")
t1 = idempotent_load(silver.iloc[:0], silver); t2 = idempotent_load(t1, silver); print("اجرای مجدد نتیجه را تغییر نمی‌دهد:", len(t1) == len(t2))""",packages=['numpy','pandas'])

add(4,40,"""<p><b>Feature Store</b>: مخزن مرکزی ویژگی‌ها برای آموزش و سرو. مشکل حل‌شده: <b>انحراف آموزش–سرو</b> (training-serving skew): ویژگی در آموزش با SQL دسته‌ای و در تولید با کد دیگر ساخته می‌شود → تفاوت ظریف. اجزا: <b>تعریف یکبار</b> (کد مشترک)، <b>فروشگاه آفلاین</b> (تاریخچه برای آموزش) و <b>آنلاین</b> (آخرین مقدار با تأخیر میلی‌ثانیه: Redis/DynamoDB)، <b>الحاق نقطه‌ای در زمان</b> (point-in-time join) تا <b>نشت آینده</b> رخ ندهد: برای هر نمونه‌ی آموزش فقط مقدار ویژگی تا لحظه‌ی همان نمونه. ابزارها: Feast، Tecton. الحاق نقطه‌ای در زمان را با merge_asof پیاده می‌کنیم.""",
"نشان بده الحاق ساده‌ی بدون زمان به آینده نشت می‌دهد.",
py="""import pandas as pd
events = pd.DataFrame({"user": [1, 1, 2], "ts": pd.to_datetime(["2026-10-05", "2026-10-12", "2026-10-10"]), "label": [0, 1, 0]})
feat = pd.DataFrame({"user": [1, 1, 1, 2], "ts": pd.to_datetime(["2026-10-01", "2026-10-08", "2026-10-15", "2026-10-09"]), "orders_30d": [2, 5, 9, 1]})
naive = events.merge(feat.sort_values("ts").groupby("user").tail(1)[["user", "orders_30d"]], on="user"); print("الحاق ساده (آخرین مقدار؛ نشت!):"); print(naive[["user", "ts", "orders_30d"]])
pit = pd.merge_asof(events.sort_values("ts"), feat.sort_values("ts"), on="ts", by="user", direction="backward", suffixes=("", "_f")); print("الحاق نقطه‌ای در زمان:"); print(pit[["user", "ts", "orders_30d"]])
online = feat.sort_values("ts").groupby("user").tail(1).set_index("user")["orders_30d"].to_dict(); print("فروشگاه آنلاین (آخرین مقدار):", online)
print("یک تعریف ویژگی → هم دسته‌ای هم جریانی")""",packages=['numpy','pandas'])

add(4,41,"""<p><b>A/B تست مدل‌ها</b>: متریک آفلاین ≠ تأثیر کسب‌وکار؛ تصمیم نهایی با آزمایش آنلاین. طراحی: ۱) <b>فرضیه و متریک اصلی</b> (+ متریک‌های محافظ: تأخیر، شکایت)؛ ۲) <b>واحد تصادفی‌سازی</b> (کاربر)؛ ۳) <b>تحلیل توان</b> برای حجم نمونه: <code class='inline'>n ≈ 16σ²/δ²</code> برای هر گروه (توان ۸۰٪، α=۰٫۰۵)؛ ۴) <b>آزمون</b> (t یا z نسبت‌ها) و <b>بازه‌ی اطمینان</b>؛ ۵) <b>پرهیز از نگاه مکرر</b> (peeking؛ نرخ خطای نوع اول بالا می‌رود → روش‌های ترتیبی)؛ ۶) <b>مقایسه‌های چندگانه</b> (بونفرونی/FDR)؛ ۷) <b>CUPED</b> کاهش واریانس با کوواریت قبل از آزمایش؛ ۸) آزمون‌های SRM (عدم‌تطابق نسبت نمونه‌ها = باگ). شبیه‌سازی اثر peeking را اجرا می‌کنیم.""",
"حجم نمونه‌ی لازم برای کشف افزایش نسبی ۵٪ در نرخ تبدیل ۱۰٪ را حساب کن.",
py="""import numpy as np
from scipy import stats
def n_per_group(p, rel_lift, alpha=.05, power=.8):
    p2 = p * (1 + rel_lift); za, zb = stats.norm.ppf(1 - alpha / 2), stats.norm.ppf(power); var = p * (1 - p) + p2 * (1 - p2)
    return int(np.ceil((za + zb) ** 2 * var / (p2 - p) ** 2))
print("n هر گروه (۱۰٪ → ۱۰٫۵٪):", n_per_group(.10, .05)); print("برای ۲۰٪ بهبود:", n_per_group(.10, .20))
rng = np.random.default_rng(0)
def aa_test(peek, n=4000, batches=20):
    a = rng.random(n) < .1; b = rng.random(n) < .1; look = [n // batches * (i + 1) for i in range(batches)] if peek else [n]
    for m in look:
        p = stats.ttest_ind(a[:m], b[:m]).pvalue
        if p < .05: return True
    return False
print("نرخ مثبت کاذب (A/A) بدون peeking:", np.mean([aa_test(False) for _ in range(600)]).round(3), "| با peeking ۲۰ بار:", np.mean([aa_test(True) for _ in range(600)]).round(3))
pre = rng.normal(size=5000); y = pre * 2 + rng.normal(size=5000); theta = np.cov(y, pre)[0, 1] / pre.var(); print("CUPED: واریانس", round(y.var(), 2), "→", round((y - theta * (pre - pre.mean())).var(), 2))""",packages=['numpy','scipy'])

add(4,42,"""<p><b>مدیریت هزینه‌ی GPU</b>: بزرگ‌ترین قلم هزینه‌ی AI. اهرم‌ها: ۱) <b>اندازه‌ی درست</b> (rightsizing: مدل کوچک/کوانتیزه به‌جای بزرگ)؛ ۲) <b>بهره‌وری</b>: GPU بیکار پول می‌سوزاند — batching، توان‌عبور، MFU؛ ۳) <b>ظرفیت لحظه‌ای (spot/preemptible)</b> با checkpoint برای آموزش (۶۰–۹۰٪ ارزان‌تر)؛ ۴) <b>رزرو</b> برای بار پایه؛ ۵) <b>مقیاس‌دهی خودکار</b> و کاهش تا صفر برای بار متناوب؛ ۶) <b>انتخاب GPU</b> بر اساس هزینه به‌ازای توکن، نه قیمت ساعتی؛ ۷) <b>API در برابر میزبانی شخصی</b>: نقطه‌ی سر‌به‌سر بر اساس حجم؛ ۸) برچسب‌گذاری و گزارش هزینه به‌ازای تیم/ویژگی. نقطه‌ی سر‌به‌سر API و میزبانی را حساب می‌کنیم.""",
"نقطه‌ی سر‌به‌سر را برای قیمت‌های مختلف API و بهره‌وری GPU پیدا کن.",
py="""def api_cost(tokens_m, price_per_m): return tokens_m * price_per_m
def self_host_cost(tokens_m, gpu_hour=2.5, tok_per_s=1500, util=.5, min_gpus=1, hours=730):
    cap_m = tok_per_s * 3600 * hours * util / 1e6; gpus = max(min_gpus, -(-tokens_m // cap_m)); return gpus * gpu_hour * hours, int(gpus), round(cap_m)
for tm in (50, 500, 5000, 50000):
    sh, g, cap = self_host_cost(tm); print(f"{tm:6} M توکن/ماه: API {api_cost(tm, .6):9.0f}$ | میزبانی شخصی {sh:9.0f}$ ({g} GPU، ظرفیت هر GPU {cap}M)")
for util in (.2, .5, .8): sh, g, _ = self_host_cost(5000, util=util); print(f"بهره‌وری {util:.0%}: {sh:.0f}$ برای ۵۰۰۰M توکن")
spot = .35; print("آموزش ۱۰۰۰ GPU-ساعت: on-demand", 1000 * 2.5, "$ | spot (با ۱۰٪ سربار تکرار):", round(1000 * 1.1 * 2.5 * spot), "$")
print("هزینه به‌ازای ۱M توکن:", round(2.5 / (1500 * 3600 * .5 / 1e6), 2), "$")""")

add(4,43,"""<p><b>حقوق و مقررات AI</b> (نه مشاوره‌ی حقوقی): مقررات سریع تغییر می‌کنند؛ همیشه با متخصص و منابع به‌روز بررسی کن. <b>قانون AI اتحادیه‌ی اروپا</b>: رویکرد مبتنی بر ریسک: ممنوع (نمره‌دهی اجتماعی، دستکاری)، <b>پرخطر</b> (استخدام، اعتبار، آموزش، پزشکی: الزام مستندسازی، نظارت انسانی، دقت و مقاومت، ثبت)، <b>شفافیت</b> (اعلام تعامل با AI و محتوای تولیدی)، و الزامات مدل‌های همه‌منظوره. <b>حریم خصوصی</b> (GDPR: مبنای قانونی، حداقل‌سازی، حق دسترسی/حذف، تصمیم خودکار)، <b>مالکیت فکری</b> (داده‌ی آموزش، مالکیت خروجی)، <b>مسئولیت</b>، چارچوب‌ها (NIST AI RMF، ISO 42001). عملی: ثبت مدل‌ها، ارزیابی ریسک، کارت مدل. یک چک‌لیست انطباق ساختاریافته و دسته‌بند ریسک می‌سازیم.""",
"چک‌لیست را برای یک سامانه‌ی «غربالگری رزومه» پر کن و سطح ریسک را تعیین کن.",
py="""HIGH_RISK_DOMAINS = {"استخدام", "اعتبار‌سنجی", "آموزش", "پزشکی", "مهاجرت", "اجرای قانون"}; PROHIBITED = {"نمره‌دهی اجتماعی", "دستکاری ناخودآگاه"}
def classify(domain, interacts_with_people=False, generates_content=False):
    if domain in PROHIBITED: return "ممنوع"
    if domain in HIGH_RISK_DOMAINS: return "پرخطر"
    if interacts_with_people or generates_content: return "شفافیت لازم"
    return "حداقل ریسک"
for d in ["استخدام", "چت‌بات پشتیبانی", "فیلتر اسپم", "نمره‌دهی اجتماعی"]: print(f"{d:18} → {classify(d, interacts_with_people='چت' in d)}")
obligations = {"پرخطر": ["مستندسازی فنی", "نظارت انسانی", "ثبت رویدادها", "ارزیابی سوگیری", "مدیریت ریسک", "ثبت در پایگاه"], "شفافیت لازم": ["اطلاع‌رسانی به کاربر", "برچسب محتوای تولیدی"]}
print("تعهدات رزومه‌یاب:", obligations["پرخطر"])
model_card = {"نام": "resume-screen-v2", "هدف": "مرتب‌سازی اولیه (نه تصمیم نهایی)", "داده": "ناشناس‌شده", "معیارها": {"recall": .88, "gap_گروهی": .03}, "محدودیت‌ها": ["زبان فارسی کم‌نمونه"], "نظارت": "بازبین انسانی برای هر رد"}
print(model_card["نظارت"], "| مشاوره‌ی حقوقی لازم است")""")

add(4,44,"""<p><b>مسیرهای شغلی</b>: <b>مهندس ML</b>: ساخت و استقرار مدل‌ها در مقیاس (آموزش، MLOps، بهینه‌سازی)؛ مهارت: پایتون قوی، سیستم‌ها، PyTorch، داده. <b>پژوهشگر</b>: ایده‌های جدید و مقاله؛ مهارت: ریاضی، طراحی آزمایش، نگارش؛ معمولاً تحصیلات تکمیلی/پورتفولیوی پژوهشی. <b>مهندس AI</b> (کاربردی): ساخت محصول بر پایه‌ی مدل‌های موجود (پرامپت، RAG، عامل، ارزیابی، هزینه)؛ مهارت: مهندسی نرم‌افزار + دانش LLM. <b>دانشمند داده</b>: تحلیل و آزمایش و مدل‌سازی تصمیم‌محور. <b>مهندس داده</b>، <b>مدیر محصول AI</b>، <b>ایمنی/ارزیابی</b>. مشترک: برنامه‌نویسی، ارتباط، پورتفولیو. مسیر یادگیری پیشنهادی بر پایه‌ی هدف + پورتفولیو. ماتریس مهارت و فاصله‌ی شخصی را حساب می‌کنیم.""",
"مهارت‌های فعلی خودت را ۰ تا ۵ نمره بده و فاصله تا هر نقش را بیاب.",
py="""import numpy as np
skills = ["پایتون", "ریاضی/آمار", "ML کلاسیک", "یادگیری عمیق", "LLM/RAG", "سیستم/MLOps", "طراحی آزمایش", "ارتباط/نگارش", "مهندسی نرم‌افزار", "داده/SQL"]
roles = {"مهندس ML": [5, 3, 4, 4, 3, 5, 3, 3, 5, 4], "پژوهشگر": [4, 5, 4, 5, 3, 2, 5, 5, 3, 3], "مهندس AI": [5, 2, 3, 3, 5, 4, 3, 4, 5, 3], "دانشمند داده": [4, 4, 5, 3, 2, 3, 5, 5, 3, 5]}
me = np.array([4, 3, 4, 2, 2, 2, 3, 3, 4, 4])
for r, req in roles.items():
    gap = np.maximum(np.array(req) - me, 0); worst = [skills[i] for i in np.argsort(-gap)[:2]]; print(f"{r:13} فاصله‌ی کل {gap.sum():2} | بیشترین کمبود: {worst}")
best = min(roles, key=lambda r: np.maximum(np.array(roles[r]) - me, 0).sum()); print("نزدیک‌ترین نقش:", best)
portfolio = ["۳ پروژه‌ی سرتاسری", "یک بازتولید مقاله", "مشارکت متن‌باز", "یک وبلاگ فنی"]; print("پورتفولیو:", portfolio)""",packages=NP)

add(4,45,"""<p><b>مصاحبه‌ی فنی ML</b>: بخش‌ها: ۱) <b>کدنویسی</b> (ساختمان داده/الگوریتم)؛ ۲) <b>مبانی ML</b> (اریب-واریانس، منظم‌سازی، معیارها، نشت، بیش‌برازش، تفاوت bagging/boosting، پس‌انتشار از صفر)؛ ۳) <b>طراحی سیستم ML</b> (سیستم توصیه‌گر، تشخیص تقلب: داده، ویژگی، مدل، ارزیابی، استقرار، پایش)؛ ۴) <b>LLM</b> (توجه، KV-cache، RAG، فاین‌تیون، ارزیابی)؛ ۵) <b>پروژه‌های گذشته</b> (چرا؟ چه شکستی؟)؛ ۶) رفتاری. قالب پاسخ طراحی: توضیح مسئله و هدف تجاری ← داده ← خط پایه ← مدل ← ارزیابی (آفلاین/آنلاین) ← استقرار ← پایش ← شکست‌ها. پیاده‌سازی‌های پرتکرار را تمرین کن: k-means، لجستیک، softmax-CE، attention، AUC. چند مورد را یکجا می‌نویسیم و تست می‌کنیم.""",
"AUC و نمونه‌گیری تصادفی بدون جایگذاری مخزنی (reservoir) را بنویس.",
py="""import numpy as np, random
def auc(y, s):
    y, s = np.asarray(y), np.asarray(s); r = s.argsort().argsort() + 1; n1, n0 = y.sum(), (1 - y).sum(); return (r[y == 1].sum() - n1 * (n1 + 1) / 2) / (n1 * n0)
y = np.array([0, 0, 1, 1, 1, 0, 1]); s = np.array([.1, .4, .35, .8, .7, .2, .9]); from sklearn.metrics import roc_auc_score; print("AUC من:", round(auc(y, s), 4), "| sklearn:", round(roc_auc_score(y, s), 4))
def reservoir(stream, k, seed=0):
    rnd = random.Random(seed); res = []
    for i, x in enumerate(stream):
        if i < k: res.append(x)
        else:
            j = rnd.randint(0, i)
            if j < k: res[j] = x
    return res
counts = np.zeros(10)
for sd in range(4000):
    for x in reservoir(range(10), 3, sd): counts[x] += 1
print("یکنواخت بودن reservoir:", (counts / counts.sum()).round(2))
def softmax_ce_grad(z, y): p = np.exp(z - z.max(1, keepdims=True)); p /= p.sum(1, keepdims=True); p[np.arange(len(y)), y] -= 1; return p / len(y)
z = np.random.default_rng(0).normal(size=(3, 4)); yy = np.array([0, 2, 1]); g = softmax_ce_grad(z, yy); print("مجموع گرادیان هر سطر صفر:", np.allclose(g.sum(1), 0))""",packages=SK)

add(4,46,"""<p><b>پروژه‌ی نهایی ۱: آموزش مدل زبانی کوچک.</b> هدف: آموزش یک Transformer فقط‌رمزگشای ~۱۰–۵۰ میلیون پارامتری روی متن (مثلاً داستان‌های کوتاه TinyStories یا متن فارسی)، با تکیه بر nanoGPT. مراحل: ۱) داده: جمع‌آوری، پاک‌سازی، توکنایزر BPE (۸–۳۲ هزار واژه)، تبدیل به آرایه‌ی uint16؛ ۲) مدل: ۶–۱۲ لایه، d=۳۸۴–۷۶۸، RoPE، RMSNorm، SwiGLU؛ ۳) آموزش: AdamW، warmup+کسینوسی، bf16، clip گرادیان، batch مؤثر با انباشت گرادیان؛ ۴) ارزیابی: perplexity اعتبارسنجی، نمونه‌گیری با top-p؛ ۵) پایش: منحنی هزینه، نرم گرادیان، MFU؛ ۶) تحلیل: قانون مقیاس با چند اندازه. برنامه‌ی آموزشی و برآورد هزینه را با محاسبه‌گر در مرورگر می‌سازیم؛ آموزش واقعی روی GPU لازم است.""",
"برای بودجه‌ی ۲۰ GPU-ساعت، اندازه‌ی مدل و تعداد توکن بهینه‌ی Chinchilla را انتخاب کن.",
py="""import numpy as np, math
def plan(gpu_hours, peak=312e12, mfu=.35):
    C = gpu_hours * 3600 * peak * mfu; N = math.sqrt(C / 120); D = 20 * N; return C, N, D            # C = 6·N·D و D = 20N
for h in (2, 20, 200):
    C, N, D = plan(h); print(f"{h:3} GPU-ساعت: محاسبه {C:.1e} FLOP → N≈{N / 1e6:.0f}M پارامتر، D≈{D / 1e9:.1f}B توکن")
def params(L, d, vocab=16000, ffn_mult=4): return L * (4 * d * d + 3 * d * int(d * ffn_mult * 2 / 3)) + vocab * d
for L, d in [(6, 384), (8, 512), (12, 768)]: print(f"L={L:2} d={d}: {params(L, d) / 1e6:.1f}M پارامتر")
lr_max, warm, total = 6e-4, 200, 5000
def lr(s): return lr_max * s / warm if s < warm else 6e-5 + .5 * (lr_max - 6e-5) * (1 + math.cos(math.pi * (s - warm) / (total - warm)))
print("lr:", [f"{lr(s):.1e}" for s in (0, 200, 2500, 5000)])
print("پیش‌بینی perplexity با قانون مقیاس: L ≈ 1.7 + 400/N^0.34 →", round(1.7 + 400 / (30e6) ** .34, 2), "(نمونه)")""",packages=NP,
extra=code("اسکلت آموزش (اجرا نشده)","""# git clone https://github.com/karpathy/nanoGPT
python data/prepare.py                       # BPE + train.bin / val.bin
python train.py config/train_small.py --compile=True --dtype=bfloat16 \\
       --batch_size=32 --gradient_accumulation_steps=8 --max_iters=5000
python sample.py --out_dir=out --start="روزی روزگاری" --top_k=50"""))

add(4,47,"""<p><b>پروژه‌ی نهایی ۲: سرویس استنتاج مقیاس‌پذیر.</b> هدف: میزبانی یک مدل (۷B کوانتیزه) با SLO مشخص (مثلاً TTFT p95 &lt; ۱ ثانیه، ۵۰۰ کاربر هم‌زمان). اجزا: ۱) <b>موتور</b>: vLLM با batching پیوسته و PagedAttention؛ ۲) <b>API</b> سازگار با OpenAI + streaming + احراز هویت + محدودسازی نرخ؛ ۳) <b>مقیاس‌دهی خودکار</b> بر اساس طول صف/KV-cache؛ ۴) <b>تعادل بار</b> با آگاهی از پیشوند (کش پیشوند)؛ ۵) <b>مشاهده‌پذیری</b> (TTFT، توکن/ثانیه، صف، هزینه)؛ ۶) <b>تست بار</b> (Locust/k6) و منحنی توان‌عبور–تأخیر؛ ۷) <b>قابلیت اطمینان</b>: health check، fallback، canary؛ ۸) <b>هزینه</b> در هر ۱M توکن. ظرفیت‌سنجی را با مدل صف انجام می‌دهیم.""",
"تعداد GPU لازم برای ۵۰۰ کاربر هم‌زمان و SLO تأخیر را محاسبه کن.",
py="""import numpy as np, math
tok_s_per_gpu = 2500                           # توان تولید کل یک GPU با batching پیوسته (تقریبی)
users = 500; user_tok_s = 30                   # هر کاربر ~۳۰ توکن بر ثانیه می‌خواند (سرعت خواندن)
need = users * user_tok_s; gpus = math.ceil(need / (tok_s_per_gpu * .7)); print("توکن/ثانیه‌ی لازم:", need, "→ GPU:", gpus, "(با ۷۰٪ بهره‌وری هدف)")
kv_gb_per_user = 2 * 32 * 8 * 128 * 2 * 3000 / 1e9; mem_free = 80 - 7 * .6 * 1.2 - 4; print("KV هر کاربر ۳k توکن:", round(kv_gb_per_user, 2), "GB | هم‌زمانی هر GPU:", int(mem_free / kv_gb_per_user))
rng = np.random.default_rng(0)
def mmc(lam, mu, c, n=40000):                  # شبیه‌ساز صف M/M/c برای تأخیر انتظار
    t, free, waits = 0, [0.0] * c, []
    for _ in range(n):
        t += rng.exponential(1 / lam); i = int(np.argmin(free)); start = max(t, free[i]); waits.append(start - t); free[i] = start + rng.exponential(1 / mu)
    return np.percentile(waits, [50, 95])
for util in (.5, .8, .95): c = 8; mu = 1 / 4; lam = util * c * mu; p50, p95 = mmc(lam, mu, c); print(f"بهره‌وری {util:.0%}: انتظار p50 {p50:.2f}s | p95 {p95:.2f}s")
cost_gpu_h = 2.5; print("هزینه به‌ازای ۱M توکن:", round(cost_gpu_h / (tok_s_per_gpu * .7 * 3600 / 1e6), 2), "$")""",packages=NP,
extra=code("vLLM (اجرا نشده)","""python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen2.5-7B-Instruct-AWQ \\
   --max-model-len 8192 --enable-prefix-caching --gpu-memory-utilization 0.9
# تست بار: locust -f locustfile.py --users 500 --spawn-rate 25"""))

add(4,48,"""<p><b>پروژه‌ی نهایی ۳: بازتولید یک مقاله.</b> گام‌ها: ۱) <b>انتخاب</b> مقاله‌ی قابل‌بازتولید و مهم (مثلاً LoRA، DPO، FlashAttention-ساده، Attention Is All You Need در مقیاس کوچک)؛ ۲) <b>چکیده‌ی دقیق</b> ادعاها و مدل ذهنی؛ ۳) <b>مرور کد رسمی</b>؛ ۴) <b>پیاده‌سازی از صفر</b> مستقل (حداقل هسته‌ی ایده)؛ ۵) <b>اعتبارسنجی مرحله‌ای</b>: تست‌های واحد روی عملگرها (مثلاً مقایسه با پیاده‌سازی مرجع)، تست «overfit کردن یک دسته»، مقایسه‌ی منحنی هزینه؛ ۶) <b>اجرای آزمایش‌ها</b> در مقیاس کوچک با چند seed؛ ۷) <b>ablation</b> یک ادعا؛ ۸) <b>گزارش</b> شفاف شکاف‌ها و علل. این‌جا الگوی «تست‌های اعتبار» را روی یک پیاده‌سازی کوچک (LoRA) نشان می‌دهیم.""",
"همین چک‌های اعتبار را روی پیاده‌سازی DPO یا attention خودت بنویس.",
py="""import numpy as np
rng = np.random.default_rng(0)
class LoRALinear:
    def __init__(s, W, r=4, alpha=8): s.W = W; s.A = rng.normal(size=(r, W.shape[1])) * .01; s.B = np.zeros((W.shape[0], r)); s.scale = alpha / r
    def __call__(s, x): return x @ s.W.T + s.scale * (x @ s.A.T) @ s.B.T
W = rng.normal(size=(8, 16)); layer = LoRALinear(W); x = rng.normal(size=(3, 16))
print("تست ۱ — شروع = مدل پایه:", np.allclose(layer(x), x @ W.T))
layer.B = rng.normal(size=layer.B.shape); merged = W + layer.scale * layer.B @ layer.A; print("تست ۲ — ادغام وزن‌ها هم‌ارز است:", np.allclose(layer(x), x @ merged.T))
print("تست ۳ — پارامتر قابل‌آموزش:", layer.A.size + layer.B.size, "از", W.size)
def loss(B, A): return np.mean((x @ W.T + layer.scale * (x @ A.T) @ B.T - target) ** 2)
target = x @ (W + rng.normal(size=W.shape) * .1).T; A, B = layer.A.copy(), np.zeros_like(layer.B)
for _ in range(1500):
    pred = x @ W.T + layer.scale * (x @ A.T) @ B.T; g = 2 * (pred - target) / pred.size; gB = layer.scale * g.T @ (x @ A.T); gA = layer.scale * (B.T @ g.T) @ x; B -= .5 * gB; A -= .5 * gA
print("تست ۴ — overfit یک دسته: هزینه", round(loss(B, A), 5), "از", round(float(np.mean((x @ W.T - target) ** 2)), 5))""",packages=NP)

add(4,49,"""<p><b>پروژه‌ی نهایی ۴: محصول AI کامل.</b> محصول، نه فقط مدل: ۱) <b>کشف مسئله</b>: کاربر کیست؟ چه کاری را بهتر/ارزان‌تر می‌کند؟ (نه «بیایید AI بگذاریم»)؛ ۲) <b>MVP کوچک</b> با ساده‌ترین راه (پرامپت/قاعده/جست‌وجو) و <b>خط پایه</b>؛ ۳) <b>تجربه‌ی کاربری مناسب عدم‌قطعیت</b>: نمایش منبع، اطمینان، ویرایش‌پذیری، بازخورد با یک کلیک، مسیر خروج به انسان؛ ۴) <b>ارزیابی</b>: مجموعه‌ی طلایی + آنلاین؛ ۵) <b>ایمنی و حریم خصوصی</b>؛ ۶) <b>اقتصاد واحد</b> (هزینه‌ی هر درخواست در برابر ارزش)؛ ۷) <b>پایش و حلقه‌ی بهبود</b> از لاگ‌ها؛ ۸) <b>راه‌اندازی تدریجی</b> (feature flag، قناری) و ۹) مستندات و کارت مدل. مثال: دستیار پاسخگوی پشتیبانی با RAG، تحویل به انسان و ارزیابی. اقتصاد واحد و قیف کیفیت را حساب می‌کنیم.""",
"قیف را با داده‌ی محصول خودت پر کن و ببین کجا بیشترین سود بهبود است.",
py="""import numpy as np
rng = np.random.default_rng(0); N = 10000
retrieved_ok = rng.random(N) < .88; answer_ok = retrieved_ok & (rng.random(N) < .92) | (~retrieved_ok & (rng.random(N) < .15)); escalate = (~answer_ok) & (rng.random(N) < .6)
resolved_auto = answer_ok; human = escalate; unresolved = ~answer_ok & ~escalate
print(f"حل خودکار {resolved_auto.mean():.1%} | ارجاع به انسان {human.mean():.1%} | حل‌نشده/رضایت‌پایین {unresolved.mean():.1%}")
cost_ai, cost_human, value_per_resolved = .03, 1.5, 2.0
unit = resolved_auto.mean() * (value_per_resolved - cost_ai) + human.mean() * (value_per_resolved - cost_ai - cost_human) - unresolved.mean() * 1.0
print("سود خالص هر درخواست:", round(unit, 3), "$ | بدون AI (همه انسانی):", round(value_per_resolved - cost_human, 3), "$")
for name, delta in [("بهبود بازیابی ۸۸→۹۴٪", "retr"), ("بهبود مولد ۹۲→۹۶٪", "gen")]:
    r = .94 if delta == "retr" else .88; g = .96 if delta == "gen" else .92; auto = r * g + (1 - r) * .15; print(f"{name}: حل خودکار {auto:.1%}")
print("بازخورد با یک کلیک + ارجاع به انسان = حلقه‌ی بهبود داده")""",packages=NP)

add(4,50,"""<p><b>جمع‌بندی و نقشه‌ی راه پژوهش.</b> مسیر ۰ تا ۲۰۰: ریاضی و داده ← ML کلاسیک ← شبکه‌های عمیق (CNN/RNN/مولد/RL) ← Transformer و مدل‌های زبانی (SFT، RLHF، RAG، عامل‌ها، ارزیابی، امنیت) ← پژوهش و مقیاس (بهینه‌سازی، توزیع‌شده، کرنل‌ها، سیستم‌های استنتاج، هم‌ترازی، حریم خصوصی، علّیت). <b>برای ادامه</b>: ۱) <b>پروژه‌ی عمیق</b> در یک جهت و انتشار آن (کد + گزارش)؛ ۲) <b>خواندن منظم</b> (هر هفته یک مقاله با یادداشت)؛ ۳) <b>بازتولید و مشارکت متن‌باز</b> (PyTorch، HF، vLLM)؛ ۴) <b>مهارت‌های تکمیلی</b>: آمار، سیستم‌ها (CUDA)، نگارش علمی؛ ۵) <b>جامعه</b>: مسابقه (Kaggle)، گروه مطالعه، کنفرانس. مسائل باز: استدلال قابل‌اعتماد، هم‌ترازی مقیاس‌پذیر، کارایی داده و محاسبه، تفسیرپذیری، چندوجهی و جهان‌مدل‌ها. اصل ثابت: <b>اندازه‌گیری، سادگی، صداقت درباره‌ی عدم‌قطعیت</b>.""",
"نقشه‌ی راه ۱۲ ماهه‌ی شخصی بنویس: هدف، ۴ پروژه، ۱۲ مقاله و معیار موفقیت هر فصل.",
py="""plan = {"فصل ۱": ("پایه‌ی عمیق", "پیاده‌سازی nanoGPT از صفر", ["Attention Is All You Need", "GPT-2", "Scaling Laws"]), "فصل ۲": ("آموزش کارا", "فاین‌تیون LoRA + ارزیابی", ["LoRA", "FlashAttention", "Chinchilla"]), "فصل ۳": ("هم‌ترازی و RAG", "RAG فارسی با ارزیابی", ["InstructGPT", "DPO", "RAG"]), "فصل ۴": ("پژوهش/محصول", "بازتولید یک مقاله یا محصول", ["انتخابی ×۳"])}
total = 0
for k, (focus, project, papers) in plan.items(): total += len(papers); print(f"{k}: {focus} | پروژه: {project} | مقاله‌ها: {papers}")
print("مجموع مقاله‌ها:", total, "(هدف ۱۲ — تکمیل با انتخاب خودت)")
weekly = {"مطالعه": 4, "کدنویسی": 8, "یادداشت/نگارش": 2}; print("برنامه‌ی هفتگی (ساعت):", weekly, "| مجموع:", sum(weekly.values()))
print("معیار موفقیت: یک مخزن عمومی + یک گزارش + یک ارائه")""")

QUIZ={4:[
 quiz("عدد وضعیت κ=L/μ بزرگ در بهینه‌سازی چه معنایی دارد؟",["همگرایی سریع","همگرایی کند گرادیان کاهشی","داده کم","بیش‌برازش"],1,"نرخ (1−1/κ)ᵏ: κ بزرگ یعنی بسیار کند."),
 quiz("FlashAttention چه چیزی را تغییر می‌دهد؟",["نتیجه‌ی توجه را تقریب می‌زند","محاسبه‌ی دقیق را بدون ساخت ماتریس T×T در HBM با کاشی‌بندی انجام می‌دهد","تعداد سرها را کم می‌کند","توکنایزر را عوض می‌کند"],1,"گلوگاه پهنای باند حافظه است؛ softmax آنلاین نتیجه را دقیق نگه می‌دارد."),
 quiz("در رمزگشایی حدسی توزیع خروجی چگونه است؟",["تقریبی با افت کیفیت","دقیقاً توزیع مدل هدف","توزیع مدل پیش‌نویس","یکنواخت"],1,"قاعده‌ی پذیرش/رد توزیع هدف را حفظ می‌کند."),
 quiz("ZeRO-3 چه چیزی را بین GPUها تقسیم می‌کند؟",["فقط داده","حالت بهینه‌ساز، گرادیان و وزن‌ها","فقط توکنایزر","فقط فعال‌سازی"],1,"افزونگی حافظه حذف می‌شود به بهای ارتباط بیشتر."),
 quiz("pass^k چه چیزی را می‌سنجد؟",["حداقل یک موفقیت در k تلاش","موفقیت در هر k تلاش (پایداری)","میانگین هزینه","سرعت"],1,"عاملی با ۷۰٪ موفقیت تکی، pass^8 ≈ ۶٪ دارد."),
 quiz("الحاق نقطه‌ای در زمان در Feature Store برای چیست؟",["سرعت بیشتر","جلوگیری از نشت اطلاعات آینده به آموزش","فشرده‌سازی","رمزگذاری"],1,"برای هر نمونه فقط ویژگی‌های موجود تا همان لحظه استفاده می‌شود."),
 quiz("peeking در A/B تست چه مشکلی دارد؟",["هیچ","نرخ مثبت کاذب را بالا می‌برد","نمونه را کم می‌کند","واریانس را کم می‌کند"],1,"نگاه مکرر و توقف در اولین معناداری، خطای نوع اول را بالا می‌برد."),
 quiz("حریم خصوصی تفاضلی ε کوچک‌تر یعنی؟",["دقت بیشتر","حریم بیشتر و نویز بیشتر","داده‌ی بیشتر","بدون نویز"],1,"نویز لاپلاس ∝ ۱/ε؛ حضور فرد کمتر قابل‌تشخیص است."),
]}
CHALLENGE={4:{"task":"تابع online_softmax_attention(Q, K, V, block) را بنویس که توجه را بلوک‌به‌بلوک روی کلیدها (روش FlashAttention) با softmax آنلاین محاسبه کند و خروجی دقیقاً برابر توجه استاندارد باشد.",
 "hint1":"برای هر سطر بیشینه‌ی جاری m، مجموع l و خروجی انباشته را نگه دار.",
 "hint2":"با رسیدن بلوک جدید: m_new = max(m, بیشینه‌ی امتیازهای بلوک)؛ ضریب scale = exp(m − m_new) را در l و خروجی قبلی ضرب کن؛ سپس P=exp(S−m_new) را اضافه کن؛ در پایان خروجی را بر l تقسیم کن.",
 "solution":"import numpy as np\n\ndef online_softmax_attention(Q, K, V, block=16):\n    T, d = Q.shape\n    out = np.zeros((T, V.shape[1]))\n    m = np.full(T, -np.inf)\n    l = np.zeros(T)\n    for j in range(0, K.shape[0], block):\n        S = Q @ K[j:j+block].T / np.sqrt(d)\n        m_new = np.maximum(m, S.max(axis=1))\n        scale = np.exp(m - m_new)\n        P = np.exp(S - m_new[:, None])\n        l = l * scale + P.sum(axis=1)\n        out = out * scale[:, None] + P @ V[j:j+block]\n        m = m_new\n    return out / l[:, None]\n\nrng = np.random.default_rng(0)\nQ, K, V = [rng.normal(size=(32, 8)) for _ in range(3)]\nS = Q @ K.T / np.sqrt(8)\nP = np.exp(S - S.max(1, keepdims=True)); P /= P.sum(1, keepdims=True)\nprint(np.allclose(online_softmax_attention(Q, K, V, 8), P @ V))  # True"}}
