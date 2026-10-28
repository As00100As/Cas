import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']; SKP=['numpy','pandas','scikit-learn']

add(2,26,"""<p><b>قطعه‌بندی</b>: برچسب برای هر پیکسل. <b>معنایی</b> (کلاس هر پیکسل)، <b>نمونه‌ای</b> (جداسازی اشیای هم‌کلاس) و <b>پانوپتیک</b> (ترکیب). معماری <b>U-Net</b>: رمزگذار (کاهش ابعاد) + رمزگشا (افزایش ابعاد) با <b>اتصال پرشی</b> بین سطوح هم‌اندازه که جزئیات مکانی را حفظ می‌کند؛ محبوب در پزشکی. معیارها: <b>IoU</b>، <b>ضریب دایس</b> <code class='inline'>2|A∩B|/(|A|+|B|)</code> و دقت پیکسلی (گمراه‌کننده در پس‌زمینه‌ی غالب). تابع هزینه: آنتروپی متقاطع، Dice loss یا ترکیب آن‌ها.""",
"Dice و IoU را برای دو ماسک بساز و با ماسک تقریباً درست مقایسه کن.",
py="""import numpy as np
def dice(a, b): return 2 * (a & b).sum() / (a.sum() + b.sum() + 1e-9)
def iou(a, b): return (a & b).sum() / ((a | b).sum() + 1e-9)
gt = np.zeros((10, 10), bool); gt[2:7, 2:7] = True
pred = np.zeros((10, 10), bool); pred[3:8, 3:8] = True
print("Dice", round(dice(gt, pred), 3), "IoU", round(iou(gt, pred), 3), "دقت پیکسلی", round((gt == pred).mean(), 2))
empty = np.zeros((10, 10), bool); print("پیش‌بینی خالی: دقت", (gt == empty).mean(), "Dice", dice(gt, empty))
def downsample(x): return x.reshape(x.shape[0] // 2, 2, x.shape[1] // 2, 2).max(axis=(1, 3))
def upsample(x): return x.repeat(2, 0).repeat(2, 1)
enc = downsample(gt); dec = upsample(enc); skip = gt
print("بدون اتصال پرشی Dice:", round(dice(gt, dec), 3), "| با اتصال پرشی:", round(dice(gt, dec & skip), 3))""",packages=NP)

add(2,27,"""<p>برای فهم اینکه CNN چه می‌بیند: ۱) <b>نمایش فیلترها</b> (لایه‌ی اول)؛ ۲) <b>نقشه‌ی ویژگی</b> میانی؛ ۳) <b>نقشه‌ی برجستگی</b> (saliency): گرادیان خروجی نسبت به پیکسل‌های ورودی؛ ۴) <b>Grad-CAM</b>: ترکیب نقشه‌های ویژگی آخر با وزن گرادیان کلاس، برای نشان دادن «ناحیه‌ی تصمیم»؛ ۵) <b>اختلال (occlusion)</b>: پنهان کردن ناحیه‌ها و دیدن افت امتیاز. هشدار: مدل ممکن است به زمینه یا ویژگی کاذب توجه کند (گرگ=برف) و این ابزارها آن را آشکار می‌کنند. روش اختلال را روی مدل ساده‌ی ارقام اجرا می‌کنیم.""",
"نقشه‌ی اهمیت پیکسل را با پنهان‌سازی پنجره‌ای برای یک رقم محاسبه کن.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.linear_model import LogisticRegression
X, y = load_digits(return_X_y=True); X = X / 16
m = LogisticRegression(max_iter=3000).fit(X, y)
i = 5; x = X[i].reshape(8, 8); target = y[i]
base = m.predict_proba([x.ravel()])[0, target]
heat = np.zeros((8, 8))
for r in range(8):
    for c in range(8):
        z = x.copy(); z[max(0, r - 1):r + 2, max(0, c - 1):c + 2] = 0
        heat[r, c] = base - m.predict_proba([z.ravel()])[0, target]
print("کلاس", target, "احتمال پایه", round(base, 3)); print((heat * 100).round().astype(int))
print("مهم‌ترین ناحیه:", np.unravel_index(heat.argmax(), heat.shape))
W = m.coef_[target].reshape(8, 8); print("saliency خطی (وزن‌ها):", np.unravel_index(np.abs(W).argmax(), W.shape))""",packages=SK)

add(2,28,"""<p><b>داده‌ی دنباله‌ای</b>: ترتیب مهم است (متن، صدا، سری زمانی، DNA). چالش‌ها: طول متغیر، وابستگی‌های دوربرد، و اینکه MLP ترتیب را نمی‌فهمد. راه‌ها: <b>پنجره‌ی لغزان</b> (تبدیل به جدول ویژگی‌های تاخیری)، <b>padding و ماسک</b> برای هم‌طول کردن، و معماری‌های بازگشتی/توجه. <b>تقسیم زمانی</b> و <b>نرمال‌سازی</b> با آمار آموزش. در این درس ساخت مجموعه‌داده‌ی پنجره‌ای و padding را می‌بینیم.""",
"پنجره‌های ۵تایی با هدف مقدار بعدی بساز و مدل خطی ساده آموزش بده.",
py="""import numpy as np
from sklearn.linear_model import Ridge
t = np.arange(300); s = np.sin(t / 8) + 0.1 * np.random.default_rng(0).normal(size=300)
def windows(x, w):
    X = np.stack([x[i:i + w] for i in range(len(x) - w)]); return X, x[w:]
X, y = windows(s, 10); cut = 200
m = Ridge(1e-2).fit(X[:cut], y[:cut]); print("خطای آزمون:", round(float(np.mean((m.predict(X[cut:]) - y[cut:]) ** 2)), 4), "| پایه (مقدار قبلی):", round(float(np.mean((X[cut:, -1] - y[cut:]) ** 2)), 4))
seqs = [[1, 2, 3], [4, 5], [6]]; L = max(map(len, seqs))
pad = np.array([q + [0] * (L - len(q)) for q in seqs]); mask = np.array([[1] * len(q) + [0] * (L - len(q)) for q in seqs]); print(pad, mask, sep="\\n")
print("میانگین ماسک‌شده:", (pad * mask).sum(1) / mask.sum(1))""",packages=SK)

add(2,29,"""<p><b>RNN</b> حافظه دارد: در هر گام حالت پنهان <code class='inline'>hₜ = tanh(Wₓ xₜ + W_h hₜ₋₁ + b)</code> با وزن‌های <b>مشترک در زمان</b>. پس‌انتشار در زمان (BPTT) گراف باز‌شده را طی می‌کند و گرادیان‌ها از گام‌های بسیار قبل می‌گذرند → ناپدید یا منفجر شدن؛ بنابراین RNN ساده وابستگی‌های دوربرد را خوب یاد نمی‌گیرد. کاربرد: مدل زبانی کاراکتری، برچسب‌گذاری دنباله. یک RNN را برای پیش‌بینی نویسه‌ی بعدی از صفر با NumPy می‌سازیم (فقط پیش‌روی و آموزش ساده).""",
"طول دنباله را زیاد کن و گرادیان را در گام‌های دور ببین.",
py="""import numpy as np
rng = np.random.default_rng(0); H = 16
Wx = rng.normal(size=(1, H)) * .5; Wh = rng.normal(size=(H, H)) * .3; b = np.zeros(H)
def run(xs):
    h = np.zeros(H); hs = []
    for x in xs: h = np.tanh(np.array([x]) @ Wx + h @ Wh + b); hs.append(h)
    return hs
hs = run([1, 0, 0, 0, 0, 0, 0, 0]); print("اثر ورودی اول بر h در گام‌ها:", [round(float(np.linalg.norm(h)), 3) for h in hs])
def grad_norm_back(T):
    J = np.eye(H)
    for _ in range(T): J = J @ (Wh.T * 0.9)
    return np.linalg.norm(J)
print("نُرم گرادیان پس از T گام:", {T: f"{grad_norm_back(T):.1e}" for T in (1, 5, 20, 50)}, "← ناپدید شدن")
text = "abababab"; chars = sorted(set(text)); idx = {c: i for i, c in enumerate(chars)}
print("one-hot:", np.eye(len(chars))[[idx[c] for c in text[:4]]].tolist())""",packages=NP)

add(2,30,"""<p><b>LSTM</b> با <b>سلول حافظه</b> cₜ و سه <b>دروازه</b> مشکل ناپدید شدن را حل می‌کند: <b>فراموشی</b> fₜ (چه چیز را دور بریزم)، <b>ورودی</b> iₜ (چه چیز را بنویسم)، <b>خروجی</b> oₜ (چه چیز را نشان بدهم). <code class='inline'>cₜ = fₜ⊙cₜ₋₁ + iₜ⊙c̃ₜ</code> و <code class='inline'>hₜ = oₜ⊙tanh(cₜ)</code>. مسیر cₜ تقریباً خطی است و گرادیان در آن به‌خوبی می‌گذرد. <b>GRU</b> نسخه‌ی ساده‌تر با دو دروازه و بدون سلول جدا. امروز در بیشتر وظایف Transformer جایگزین شده ولی در دستگاه‌های کم‌منبع و جریان‌های بی‌درنگ هنوز کاربرد دارد. یک سلول LSTM را پیاده می‌کنیم.""",
"با دروازه‌ی فراموشی ۱ و ورودی ۰، سلول چیزی را بی‌نهایت حفظ می‌کند؛ نشان بده.",
py="""import numpy as np
sig = lambda z: 1 / (1 + np.exp(-z))
class LSTMCell:
    def __init__(self, nx, nh, seed=0):
        r = np.random.default_rng(seed); self.nh = nh
        self.W = r.normal(size=(nx + nh, 4 * nh)) * .3; self.b = np.zeros(4 * nh); self.b[:nh] = 1.0       # بایاس دروازه‌ی فراموشی مثبت
    def step(self, x, h, c):
        z = np.concatenate([x, h]) @ self.W + self.b; f, i, o, g = np.split(z, 4)
        f, i, o, g = sig(f), sig(i), sig(o), np.tanh(g); c = f * c + i * g; return o * np.tanh(c), c, f
cell = LSTMCell(1, 8); h = c = np.zeros(8)
h, c, f = cell.step(np.array([5.0]), h, c)
for _ in range(20): h, c, f = cell.step(np.array([0.0]), h, c)
print("نرم c پس از ۲۰ گام:", round(float(np.linalg.norm(c)), 3), "| میانگین دروازه‌ی فراموشی:", f.mean().round(2))
c0 = np.ones(8); fgate, igate = 1.0, 0.0
for _ in range(1000): c0 = fgate * c0 + igate * 0.5
print("حافظه‌ی کامل پس از ۱۰۰۰ گام:", c0[:2])
print("پارامترهای LSTM:", cell.W.size + cell.b.size, "| RNN ساده:", (1 + 8) * 8 + 8)""",packages=NP)

add(2,31,"""<p>پیش‌بینی سری زمانی: ساختار <b>روند</b>، <b>فصلی بودن</b> و <b>نویز</b>. خط پایه‌ها: «مقدار قبلی» و «میانگین متحرک»؛ هر مدل باید از آن‌ها بهتر باشد. ویژگی‌های تاخیری و آماری پنجره (lag، میانگین متحرک، روز هفته) + مدل درختی اغلب قوی‌اند. ارزیابی با <b>اعتبارسنجی پیش‌رونده</b> (walk-forward). معیارها: MAE، RMSE، MAPE (مراقب صفر). برای بازه‌ی عدم قطعیت از رگرسیون چندک. ترکیب ویژگی تاخیری با GradientBoosting را می‌سازیم.""",
"پیش‌بینی هفت روز آینده را با آموزش مجدد پیش‌رونده انجام بده.",
py="""import numpy as np, pandas as pd
from sklearn.ensemble import GradientBoostingRegressor
rng = np.random.default_rng(0); n = 400; t = np.arange(n)
y = 50 + 0.05 * t + 10 * np.sin(2 * np.pi * t / 7) + rng.normal(0, 2, n)
df = pd.DataFrame({"y": y}); 
for L in (1, 2, 7): df[f"lag{L}"] = df["y"].shift(L)
df["ma7"] = df["y"].shift(1).rolling(7).mean(); df["dow"] = t % 7; df = df.dropna()
X, Y = df.drop(columns="y"), df["y"]; cut = len(df) - 60
m = GradientBoostingRegressor(random_state=0).fit(X[:cut], Y[:cut]); p = m.predict(X[cut:])
mae = lambda a, b: np.mean(np.abs(a - b))
print("مدل:", round(mae(Y[cut:], p), 2), "| مقدار قبلی:", round(mae(Y[cut:], X["lag1"][cut:]), 2), "| فصلی ساده (lag7):", round(mae(Y[cut:], X["lag7"][cut:]), 2))
errs = []
for k in range(cut, len(df), 15):
    mm = GradientBoostingRegressor(random_state=0).fit(X[:k], Y[:k]); errs.append(mae(Y[k:k + 15], mm.predict(X[k:k + 15])))
print("walk-forward MAE:", round(float(np.mean(errs)), 2))""",packages=SKP)

add(2,32,"""<p>پردازش متن: متن ← <b>توکن</b> ← عدد. مراحل کلاسیک: نرمال‌سازی (یکسان‌سازی ی/ک، حذف اعراب و نیم‌فاصله‌ی اضافه، حروف کوچک)، <b>توکن‌سازی</b> (کلمه، زیرکلمه، نویسه)، <b>واژگان</b> (نگاشت توکن→شناسه، توکن ویژه‌ی <code class='inline'>&lt;UNK&gt;</code> و <code class='inline'>&lt;PAD&gt;</code>)، و حذف کلمات پرتکرار بی‌اهمیت (stopwords) در روش‌های کلاسیک. زبان فارسی چالش‌ها دارد: نیم‌فاصله، چسبیدن حروف اضافه، املای متنوع. بعدی مدل‌های مدرن توکن‌ساز زیرکلمه‌ای دارند (درس ۵ سطح ۳).""",
"واژگان بساز، کلمات ناشناخته را به UNK ببر و متن را به شناسه‌ها تبدیل کن.",
py="""import re
from collections import Counter
def normalize(t): return t.replace("ي", "ی").replace("ك", "ک").replace("\\u200c", " ").lower()
def tok(t): return re.findall(r"\\w+", normalize(t))
corpus = ["من برنامه‌نویسی را دوست دارم", "او پایتون را دوست دارد", "یادگیری ماشین جالب است"]
cnt = Counter(w for s in corpus for w in tok(s)); print(cnt.most_common(3))
vocab = {"<PAD>": 0, "<UNK>": 1}
for w, c in cnt.items():
    if c >= 1: vocab.setdefault(w, len(vocab))
enc = lambda s, L=6: ([vocab.get(w, 1) for w in tok(s)] + [0] * L)[:L]
print(enc("من پایتون را دوست دارم"), enc("جمله با کلمه‌ی ناشناخته zzz"))
print(len(vocab), "توکن در واژگان |", normalize("كتاب ي"))""")

add(2,33,"""<p><b>Bag-of-Words</b>: هر سند را با شمارش کلمات نشان می‌دهد (ترتیب نادیده). <b>TF-IDF</b>: <code class='inline'>tf(t,d)·log(N/df(t))</code> کلمات رایج در همه‌ی اسناد را کم‌وزن و کلمات نادر-خاص را پروزن می‌کند. n-gramها (دوکلمه‌ای) کمی ترتیب محلی می‌آورند. ساده، سریع و بدون GPU و برای دسته‌بندی و جست‌وجو هنوز بسیار قوی است (خط پایه‌ی اجباری!). بردارها بسیار بزرگ و <b>خلوت</b> (sparse) هستند و شباهت معنایی را نمی‌گیرند («خوب» ≠ «عالی»).""",
"TF-IDF را از صفر بنویس و با TfidfVectorizer مقایسه کن.",
py="""import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
docs = ["پایتون زبان خوب است", "پایتون و هوش مصنوعی", "آشپزی هنر خوب است", "هوش مصنوعی آینده است"]
cv = CountVectorizer(); B = cv.fit_transform(docs); print(cv.get_feature_names_out()); print(B.toarray()[0])
tf = TfidfVectorizer(smooth_idf=False, norm=None).fit(docs); T = tf.transform(docs).toarray(); vocab = tf.get_feature_names_out()
N = len(docs); counts = B.toarray(); df = (counts > 0).sum(0); idf = np.log(N / df) + 1
print("تطابق با دستی:", np.allclose(T, counts * idf))
print("وزن «است» (رایج) vs «پایتون»:", T[0][list(vocab).index("است")].round(2), T[0][list(vocab).index("پایتون")].round(2))
bi = CountVectorizer(ngram_range=(1, 2)).fit(docs); print("n-gram:", len(bi.vocabulary_), "ویژگی")""",packages=SK)

add(2,34,"""<p><b>Word2Vec</b> هر کلمه را با بردار متراکم ۵۰–۳۰۰بعدی نشان می‌دهد؛ <b>فرضیه‌ی توزیعی</b>: کلماتی که در بافت‌های مشابه می‌آیند معنی نزدیک دارند. <b>Skip-gram</b>: از کلمه‌ی مرکز، کلمات اطراف را پیش‌بینی کن؛ <b>CBOW</b> برعکس. با <b>نمونه‌گیری منفی</b> آموزش سریع می‌شود. نتیجه: شباهت کسینوسی معنایی و حتی روابط (شاه−مرد+زن≈ملکه). محدودیت: یک بردار برای هر کلمه (چندمعنایی را نمی‌گیرد) — مدل‌های متنی بعدی این را حل کردند. با ماتریس هم‌رخدادی + SVD نسخه‌ی کوچکی می‌سازیم که همان شهود را می‌دهد.""",
"کلمات نزدیک‌ترین به «پایتون» را در پیکره‌ی کوچک پیدا کن.",
py="""import numpy as np
corpus = ["پایتون زبان برنامه نویسی است", "جاوا زبان برنامه نویسی است", "پایتون برای هوش مصنوعی خوب است", "سیب میوه خوشمزه است", "پرتقال میوه سالم است", "جاوا برای موبایل خوب است", "میوه سالم و خوشمزه است"]
toks = [s.split() for s in corpus]; vocab = sorted({w for s in toks for w in s}); ix = {w: i for i, w in enumerate(vocab)}
C = np.zeros((len(vocab),) * 2)
for s in toks:
    for i, w in enumerate(s):
        for j in range(max(0, i - 2), min(len(s), i + 3)):
            if i != j: C[ix[w], ix[s[j]]] += 1
P = np.maximum(np.log((C + 1e-9) * C.sum() / (C.sum(1, keepdims=True) * C.sum(0, keepdims=True) + 1e-9)), 0)   # PPMI
U, S, _ = np.linalg.svd(P); E = U[:, :4] * S[:4]
cos = lambda a, b: a @ b / (np.linalg.norm(a) * np.linalg.norm(b) + 1e-9)
def nearest(w, k=3): return sorted(((round(float(cos(E[ix[w]], E[ix[v]])), 2), v) for v in vocab if v != w), reverse=True)[:k]
print("نزدیک به پایتون:", nearest("پایتون")); print("نزدیک به سیب:", nearest("سیب"))""",packages=NP,
extra=code("gensim (اجرا نشده)","""from gensim.models import Word2Vec
m = Word2Vec(sentences, vector_size=100, window=5, min_count=2, sg=1, negative=5)
m.wv.most_similar("پایتون")"""))

add(2,35,"""<p><b>طبقه‌بندی متن</b> (تحلیل احساس، دسته‌بندی خبر، تشخیص اسپم): خط لوله‌ی کلاسیک <code class='inline'>TfidfVectorizer → LogisticRegression/LinearSVC</code> بسیار قوی و سریع است. گام‌های حرفه‌ای: نرمال‌سازی فارسی، n-gram، تنظیم هایپرپارامتر با CV، گزارش per-class، تحلیل خطا و کلمات مؤثر. بهبود: embedding از مدل‌های پیش‌آموزش‌دیده (درس‌های بعد) و فاین‌تیون. همیشه ابتدا این خط پایه را بساز؛ اگر Transformer فقط ۱٪ بهتر بود، پیچیدگی و هزینه‌اش را توجیه نمی‌کند.""",
"کلمات مؤثر هر کلاس را از ضرایب مدل استخراج کن.",
py="""import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import cross_val_score
pos = ["عالی بود دوستش داشتم", "کیفیت فوق العاده و ارزان", "بسیار راضی هستم عالی", "خیلی خوب و سریع", "پیشنهاد می کنم خوب بود", "کار تمیز و عالی"]
neg = ["افتضاح بود پشیمان شدم", "کیفیت بد و گران", "اصلا راضی نیستم بد", "خیلی کند و خراب", "پیشنهاد نمی کنم بد بود", "کار بد و ضعیف"]
X = pos + neg; y = [1] * 6 + [0] * 6
pipe = make_pipeline(TfidfVectorizer(ngram_range=(1, 2)), LogisticRegression(C=10))
print("CV:", cross_val_score(pipe, X, y, cv=3).mean().round(2))
pipe.fit(X, y); vec, clf = pipe.steps[0][1], pipe.steps[1][1]; w = vec.get_feature_names_out(); o = np.argsort(clf.coef_[0])
print("منفی:", list(w[o[:4]]), "| مثبت:", list(w[o[-4:]]))
print(pipe.predict(["خیلی بد بود", "عالی و ارزان"]), pipe.predict_proba(["نه بد نه خوب"]).round(2))""",packages=SK)

add(2,36,"""<p><b>seq2seq</b>: <b>رمزگذار</b> دنباله‌ی ورودی را به یک بردار زمینه فشرده می‌کند و <b>رمزگشا</b> از آن دنباله‌ی خروجی را تولید می‌کند (ترجمه، خلاصه‌سازی، پرسش‌وپاسخ). مشکل: گلوگاه — کل جمله در یک بردار ثابت. تولید: <b>جست‌وجوی حریصانه</b> (بهترین توکن هر گام) یا <b>beam search</b> (نگه‌داشتن k فرضیه‌ی برتر). آموزش با <b>teacher forcing</b> (به رمزگشا توکن درست قبلی را می‌دهیم) که تفاوتی با زمان تولید دارد (exposure bias). راه‌حل گلوگاه: توجه (درس بعد). beam search را روی یک مدل احتمالی ساختگی پیاده می‌کنیم.""",
"beam=1 (حریصانه) را با beam=3 مقایسه کن؛ نشان بده حریصانه ممکن است بهینه نباشد.",
py="""import math
# مدل ساختگی: احتمال توکن بعدی بسته به آخرین توکن
P = {"<s>": {"a": .5, "b": .4, "</s>": .1}, "a": {"a": .1, "b": .2, "</s>": .7 * 0 + .1, "c": .6}, "b": {"</s>": .9, "a": .05, "b": .05}, "c": {"</s>": .5, "a": .25, "b": .25}}
def beam_search(k, maxlen=4):
    beams = [(0.0, ["<s>"])]; done = []
    for _ in range(maxlen):
        cand = []
        for lp, seq in beams:
            for tkn, p in P[seq[-1]].items():
                new = (lp + math.log(p), seq + [tkn]); (done if tkn == "</s>" else cand).append(new)
        beams = sorted(cand, key=lambda x: -x[0])[:k]
    best = max(done + beams, key=lambda x: x[0]); return best[1], round(math.exp(best[0]), 3)
print("حریصانه:", beam_search(1)); print("beam=3:", beam_search(3))
def teacher_forcing(target): return [(target[:i], target[i]) for i in range(len(target))]
print(teacher_forcing(["من", "دانشجو", "هستم"]))""")

add(2,37,"""<p><b>توجه (Attention)</b> گلوگاه را برمی‌دارد: رمزگشا در هر گام به <b>همه‌ی</b> حالت‌های رمزگذار نگاه و بر حسب ارتباط وزن‌دهی می‌کند. <code class='inline'>score(q,kᵢ)=q·kᵢ/√d</code>، وزن‌ها <code class='inline'>α=softmax(score)</code> و خروجی <code class='inline'>Σαᵢvᵢ</code>. سه نقش: <b>Query</b> (چه می‌خواهم)، <b>Key</b> (من چه دارم)، <b>Value</b> (محتوای من). این همان قلب Transformer است. ماتریس وزن‌های توجه قابل‌تفسیر است (کدام کلمه‌ی مبدأ به کدام مقصد توجه دارد).""",
"ماتریس توجه را برای یک «ترجمه‌ی» ساختگی بساز و ردیف‌ها را بررسی کن.",
py="""import numpy as np
def softmax(x, axis=-1): e = np.exp(x - x.max(axis, keepdims=True)); return e / e.sum(axis, keepdims=True)
def attention(Q, K, V):
    d = Q.shape[-1]; A = softmax(Q @ K.T / np.sqrt(d)); return A @ V, A
src = ["I", "love", "cats"]
E = {"I": [1, 0, 0, 0], "love": [0, 1, 0, 0], "cats": [0, 0, 1, 0]}
K = np.array([E[w] for w in src], float); V = K.copy()
tgt = {"من": [1, 0, 0, 0], "دوست": [0, 1, 0, 0], "گربه": [0, 0, 1, 0]}
Q = np.array(list(tgt.values()), float) * 3
out, A = attention(Q, K, V)
print(np.round(A, 2)); print("توجه هر کلمه‌ی مقصد:", {t: src[int(a.argmax())] for t, a in zip(tgt, A)})
print("هر ردیف جمعش ۱:", A.sum(1))
print("بدون مقیاس‌دهی √d softmax تیزتر می‌شود:", softmax(Q @ K.T)[0].round(2), "→", softmax(Q @ K.T / 2)[0].round(2))""",packages=NP)

add(2,38,"""<p><b>مدل‌های مولد</b> توزیع داده را یاد می‌گیرند تا نمونه‌ی جدید بسازند. خانواده‌ها: <b>خودرگرسیو</b> (توکن بعدی؛ GPT)، <b>VAE</b> (فضای نهفته‌ی احتمالی)، <b>GAN</b> (بازی مولد-تمیزدهنده)، <b>جریان نرمال‌ساز</b>، <b>انتشار</b> (حذف نویز تدریجی). مقابل مدل‌های <b>تمییزی</b> که <code class='inline'>P(y|x)</code> را می‌آموزند. ساده‌ترین مدل مولد: برازش توزیع (مثلاً مخلوط گاوسی) و نمونه‌گیری. ارزیابی مولد دشوارتر است (کیفیت، تنوع، تازگی). یک GMM را برازش و از آن نمونه می‌سازیم.""",
"از مدل مولد نمونه بگیر و نشان بده آمارش به داده شبیه است.",
py="""import numpy as np
from sklearn.mixture import GaussianMixture
rng = np.random.default_rng(0)
data = np.r_[rng.normal([0, 0], .5, (300, 2)), rng.normal([4, 4], .8, (300, 2))]
g = GaussianMixture(2, random_state=0).fit(data)
samples, comp = g.sample(600)
print("میانگین داده:", data.mean(0).round(2), "| نمونه‌ها:", samples.mean(0).round(2))
print("مؤلفه‌ها:", g.means_.round(1).tolist(), g.weights_.round(2))
print("log-likelihood نقطه‌ی عادی/دور:", g.score_samples([[0, 0], [10, -10]]).round(1), "← تشخیص ناهنجاری")
auto = lambda x: np.log(np.maximum(x, 1e-9)); print("نمونه‌گیری خودرگرسیو ساده (بیگرام):")
seq = "abcabcabd"; import collections
big = collections.defaultdict(collections.Counter)
for a, b in zip(seq, seq[1:]): big[a][b] += 1
print({k: dict(v) for k, v in big.items()})""",packages=SK)

add(2,39,"""<p><b>Autoencoder</b>: رمزگذار فشرده‌ساز ورودی را به کد کوچک (گلوگاه) و رمزگشا بازسازی می‌کند؛ هزینه = خطای بازسازی. کاربردها: کاهش بُعد غیرخطی (تعمیم PCA)، حذف نویز (denoising: ورودی نویزی، هدف تمیز)، تشخیص ناهنجاری (بازسازی بد = غیرعادی)، پیش‌آموزش. اگر ظرفیت بیش از حد باشد فقط کپی می‌کند؛ باید گلوگاه یا منظم‌سازی بگذاری. یک autoencoder را با MLPRegressor روی ارقام می‌سازیم و ناهنجاری را بر اساس خطای بازسازی پیدا می‌کنیم.""",
"کد ۸بعدی بگیر و خطای بازسازی ارقام عادی را با نویز خالص مقایسه کن.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.neural_network import MLPRegressor
X = load_digits().data / 16
ae = MLPRegressor(hidden_layer_sizes=(32, 8, 32), activation="relu", max_iter=600, random_state=0).fit(X, X)
err = lambda A: ((ae.predict(A) - A) ** 2).mean(1)
rng = np.random.default_rng(0); noise = rng.random((50, 64))
print("خطای بازسازی ارقام:", err(X).mean().round(4), "| نویز خالص:", err(noise).mean().round(4))
thr = np.percentile(err(X), 99); print("نویزهای شناسایی‌شده به‌عنوان ناهنجار:", int((err(noise) > thr).sum()), "از 50")
from sklearn.decomposition import PCA
p = PCA(8).fit(X); print("PCA با همان ۸ بُعد:", ((p.inverse_transform(p.transform(X)) - X) ** 2).mean().round(4))
Xn = X + rng.normal(0, .3, X.shape); den = MLPRegressor(hidden_layer_sizes=(64,), max_iter=400, random_state=0).fit(Xn, X); print("حذف نویز:", ((Xn - X) ** 2).mean().round(3), "→", ((den.predict(Xn) - X) ** 2).mean().round(3))""",packages=SK)

add(2,40,"""<p><b>VAE</b> (autoencoder تغییراتی): رمزگذار به‌جای یک نقطه، توزیع <code class='inline'>N(μ,σ²)</code> در فضای نهفته می‌دهد؛ نمونه‌گیری با <b>ترفند بازپارامتری‌سازی</b> <code class='inline'>z = μ + σ·ε</code> تا گرادیان بگذرد. هزینه: <b>بازسازی + KL(q‖N(0,1))</b> که فضای نهفته را هموار و پیوسته می‌کند؛ پس می‌توان z تصادفی نمونه‌گیری و تصویر تازه ساخت یا بین دو نقطه درون‌یابی کرد. مبادله‌ی کیفیت بازسازی و نظم فضای نهفته با وزن β. KL بسته و ترفند بازپارامتری‌سازی را بررسی می‌کنیم.""",
"KL را برای چند (μ, σ) حساب کن و با تخمین مونت‌کارلو بسنج.",
py="""import numpy as np
rng = np.random.default_rng(0)
def kl(mu, sigma): return 0.5 * (mu ** 2 + sigma ** 2 - 1 - 2 * np.log(sigma))
for mu, s in [(0, 1), (1, 1), (0, .5), (2, .3)]: print(f"μ={mu}, σ={s}: KL = {kl(mu, s):.3f}")
mu, s = 1.5, .7; z = mu + s * rng.normal(size=200000)
logq = -.5 * np.log(2 * np.pi * s ** 2) - (z - mu) ** 2 / (2 * s ** 2); logp = -.5 * np.log(2 * np.pi) - z ** 2 / 2
print("KL مونت‌کارلو:", round(float(np.mean(logq - logp)), 3), "| بسته:", round(float(kl(mu, s)), 3))
e = rng.normal(size=5); print("بازپارامتری‌سازی: z وابسته به μ,σ و نویز ε مستقل:", (mu + s * e).round(2))
z0, z1 = np.array([0., 0.]), np.array([2., 2.]); print("درون‌یابی نهفته:", [(z0 * (1 - t) + z1 * t).round(1).tolist() for t in (0, .5, 1)])""",packages=NP)

add(2,41,"""<p><b>GAN</b>: دو شبکه‌ی رقیب: <b>مولد</b> G از نویز نمونه‌ی جعلی می‌سازد و <b>تمیزدهنده</b> D واقعی/جعلی را تشخیص می‌دهد. <code class='inline'>min_G max_D E[log D(x)] + E[log(1−D(G(z)))]</code>. در تعادل G توزیع داده را تقلید می‌کند. دشواری‌ها: <b>ناپایداری</b>، <b>فروپاشی مُد</b> (G فقط چند نمونه تولید می‌کند) و ارزیابی. بهبودها: WGAN، نرمال‌سازی طیفی، StyleGAN. امروز انتشار در تولید تصویر پیشی گرفته. یک GAN یک‌بعدی را با NumPy آموزش می‌دهیم: G خطی، D لجستیک.""",
"آموزش را اجرا کن و میانگین/انحراف نمونه‌های مولد را با داده‌ی واقعی مقایسه کن.",
py="""import numpy as np
rng = np.random.default_rng(0)
sig = lambda z: 1 / (1 + np.exp(-z))
a, b = 1.0, 0.0                    # مولد: x = a*z + b
w1, w2, c = 0.1, 0.0, 0.0          # تمیزدهنده: sigmoid(w1*x + w2*x² + c)
lr = 0.05
for step in range(6000):
    x = rng.normal(4, 1.25, 64); z = rng.normal(size=64); g = a * z + b
    for xs, y in ((x, 1), (g, 0)):                      # گام D
        p = sig(w1 * xs + w2 * xs ** 2 + c); err = p - y
        w1 -= lr * np.mean(err * xs); w2 -= lr * np.mean(err * xs ** 2) * .1; c -= lr * np.mean(err)
    z = rng.normal(size=64); g = a * z + b; p = sig(w1 * g + w2 * g ** 2 + c)     # گام G (غیراشباعی)
    dlogit = -(1 - p) * (w1 + 2 * w2 * g)
    a -= lr * np.mean(dlogit * z); b -= lr * np.mean(dlogit)
s = a * rng.normal(size=10000) + b
print(f"داده: میانگین 4.00  انحراف 1.25 | مولد: میانگین {s.mean():.2f}  انحراف {s.std():.2f}")""",packages=NP)

add(2,42,"""<p><b>مدل‌های انتشار</b> (DALL·E، Stable Diffusion، Midjourney): <b>فرایند پیشرو</b> به‌تدریج به تصویر نویز گاوسی اضافه می‌کند تا نویز خالص شود؛ شبکه یاد می‌گیرد <b>هر گام را معکوس</b> کند (پیش‌بینی نویز افزوده‌شده). نمونه‌گیری: از نویز شروع و T گام حذف نویز. فرمول: <code class='inline'>xₜ = √ᾱₜ·x₀ + √(1−ᾱₜ)·ε</code>. مزیت: آموزش پایدار و کیفیت و تنوع بالا؛ عیب: گام‌های زیاد (کند) که با نمونه‌گیرهای سریع و تقطیر کم می‌شود. <b>انتشار پنهان</b> در فضای فشرده‌ی VAE کار می‌کند و با متن (CLIP) هدایت می‌شود. فرایند پیشرو را روی داده‌ی ۱بعدی نشان می‌دهیم.""",
"زمان‌بندی نویز را عوض کن و ببین در چه گامی سیگنال تقریباً از بین می‌رود.",
py="""import numpy as np
T = 200; betas = np.linspace(1e-4, 0.04, T); alphas = 1 - betas; abar = np.cumprod(alphas)
rng = np.random.default_rng(0); x0 = np.sign(rng.normal(size=5000))            # داده‌ی دو‌قله‌ای ±۱
def q_sample(x0, t, eps): return np.sqrt(abar[t]) * x0 + np.sqrt(1 - abar[t]) * eps
for t in (0, 20, 50, 100, 199):
    xt = q_sample(x0, t, rng.normal(size=x0.shape)); print(f"t={t:3}: سهم سیگنال {np.sqrt(abar[t]):.3f} | انحراف {xt.std():.3f} | همبستگی با x0 {np.corrcoef(x0, xt)[0, 1]:.3f}")
# معکوس اوراکل: اگر نویز را می‌دانستیم x0 را دقیق بازسازی می‌کردیم
t = 100; eps = rng.normal(size=x0.shape); xt = q_sample(x0, t, eps)
x0_hat = (xt - np.sqrt(1 - abar[t]) * eps) / np.sqrt(abar[t]); print("بازسازی با نویز واقعی:", np.allclose(x0_hat, x0))""",packages=NP)

add(2,43,"""<p><b>یادگیری تقویتی</b>: <b>عامل</b> در <b>محیط</b> در هر گام <b>حالت</b> s را می‌بیند، <b>عمل</b> a می‌زند، <b>پاداش</b> r و حالت بعدی می‌گیرد؛ هدف بیشینه‌سازی <b>بازده تجمعی تنزیل‌شده</b> <code class='inline'>Gₜ = Σ γᵏ rₜ₊ₖ</code>. مفاهیم: <b>سیاست</b> π(a|s)، <b>تابع ارزش</b> V(s) و Q(s,a)، <b>اکتشاف در برابر بهره‌برداری</b> (ε-greedy)، فرایند تصمیم مارکوف (MDP). چالش‌ها: پاداش دیرهنگام و تنک، ناپایداری. یک محیط شبکه‌ی ساده و بازده را شبیه‌سازی می‌کنیم.""",
"سیاست تصادفی را با سیاست ثابت «برو راست» مقایسه کن (بازده میانگین).",
py="""import numpy as np
class GridWorld:
    def __init__(self, n=5): self.n = n; self.reset()
    def reset(self): self.pos = (0, 0); return self.pos
    def step(self, a):
        dx, dy = [(0, 1), (1, 0), (0, -1), (-1, 0)][a]
        x = min(max(self.pos[0] + dx, 0), self.n - 1); y = min(max(self.pos[1] + dy, 0), self.n - 1); self.pos = (x, y)
        done = self.pos == (self.n - 1, self.n - 1); return self.pos, (10 if done else -1), done
def episode(policy, gamma=.99, maxsteps=100):
    env = GridWorld(); s = env.reset(); G, disc = 0, 1
    for _ in range(maxsteps):
        s, r, done = env.step(policy(s)); G += disc * r; disc *= gamma
        if done: break
    return G
rng = np.random.default_rng(0)
rand = lambda s: int(rng.integers(0, 4)); smart = lambda s: 0 if s[1] < 4 else 1
print("تصادفی:", round(np.mean([episode(rand) for _ in range(200)]), 2), "| ثابت:", round(episode(smart), 2))""",packages=NP)

add(2,44,"""<p><b>Q-learning</b>: جدول <code class='inline'>Q(s,a)</code> را با به‌روزرسانی «تفاوت زمانی» یاد می‌گیرد: <code class='inline'>Q(s,a) ← Q(s,a) + α[r + γ·maxₐ′Q(s′,a′) − Q(s,a)]</code>. <b>خارج‌از‌سیاست</b> (off-policy): حتی هنگام اکتشاف تصادفی سیاست بهینه را می‌آموزد. ε-greedy با کاهش تدریجی ε. همگرایی در حالت جدولی تضمین‌شده است. محدودیت: جدول در فضاهای بزرگ ممکن نیست (→ شبکه‌ی Q). روی مسئله‌ی «پرتگاه» (Cliff Walking) یا شبکه‌ی ۵×۵ آموزش می‌دهیم.""",
"پس از آموزش، سیاست یادگرفته‌شده را به‌صورت فلش‌ها چاپ کن.",
py="""import numpy as np
n = 5; rng = np.random.default_rng(0); Q = np.zeros((n, n, 4)); moves = [(0, 1), (1, 0), (0, -1), (-1, 0)]
def step(s, a):
    x = min(max(s[0] + moves[a][0], 0), n - 1); y = min(max(s[1] + moves[a][1], 0), n - 1); ns = (x, y)
    return ns, (10 if ns == (n - 1, n - 1) else -1), ns == (n - 1, n - 1)
alpha, gamma = .2, .95
for ep in range(1500):
    s = (0, 0); eps = max(.05, 1 - ep / 800)
    for _ in range(100):
        a = int(rng.integers(4)) if rng.random() < eps else int(Q[s].argmax())
        ns, r, done = step(s, a); Q[s][a] += alpha * (r + gamma * (0 if done else Q[ns].max()) - Q[s][a]); s = ns
        if done: break
arrows = "→↓←↑"
for y in reversed(range(n)): print(" ".join("★" if (x, y) == (n - 1, n - 1) else arrows[int(Q[x, y].argmax())] for x in range(n)))
s, path = (0, 0), 0
while s != (n - 1, n - 1) and path < 50: s, _, _ = step(s, int(Q[s].argmax())); path += 1
print("طول مسیر حریصانه:", path, "(کمینه 8)")""",packages=NP)

add(2,45,"""<p><b>Deep Q-Network</b>: Q(s,a) را با شبکه‌ی عصبی تقریب می‌زند تا حالت‌های بزرگ/پیوسته (تصویر بازی آتاری) ممکن شود. دو ترفند کلیدی برای پایداری: ۱) <b>بازپخش تجربه</b> (replay buffer): نمونه‌های تصادفی از تجربه‌ی قدیمی، شکستن همبستگی؛ ۲) <b>شبکه‌ی هدف</b> (target network): کپی کند‌به‌روز که هدف <code class='inline'>r+γ max Q_target</code> را ثابت نگه می‌دارد. توسعه‌ها: Double DQN، Dueling، Prioritized replay، Rainbow. DQN کوچک با تقریب خطی و بازپخش تجربه را روی مسئله‌ی خط (۱بعدی) می‌سازیم.""",
"اندازه‌ی بافر و فاصله‌ی به‌روزرسانی شبکه‌ی هدف را تغییر بده.",
py="""import numpy as np, collections, random
random.seed(0); rng = np.random.default_rng(0); N = 8                        # حالت‌ها: 0..7، هدف در 7
feat = lambda s: np.eye(N)[s]
W = np.zeros((N, 2)); Wt = W.copy(); buf = collections.deque(maxlen=500); gamma, lr = .9, .1
def act(s, eps): return random.randrange(2) if random.random() < eps else int((feat(s) @ W).argmax())
for ep in range(400):
    s = 0
    for _ in range(40):
        a = act(s, max(.05, 1 - ep / 200)); ns = min(max(s + (1 if a else -1), 0), N - 1); r, d = (1.0, True) if ns == N - 1 else (-0.01, False)
        buf.append((s, a, r, ns, d)); s = ns
        if len(buf) >= 32:
            for bs, ba, br, bn, bd in random.sample(buf, 32):
                target = br + (0 if bd else gamma * (feat(bn) @ Wt).max()); err = target - feat(bs) @ W[:, ba] if False else target - (feat(bs) @ W)[ba]
                W[bs, ba] += lr * err
        if d: break
    if ep % 10 == 0: Wt = W.copy()
print("سیاست:", ["→" if (feat(s) @ W).argmax() else "←" for s in range(N - 1)])
print("Q حالت‌ها (max):", (W.max(1)).round(2))""",packages=NP,
extra=code("PyTorch DQN (اجرا نشده)","""q = nn.Sequential(nn.Linear(4, 128), nn.ReLU(), nn.Linear(128, 2))
q_target = copy.deepcopy(q)
loss = F.smooth_l1_loss(q(s).gather(1, a), r + gamma * q_target(ns).max(1).values * (1 - done))
# هر C گام: q_target.load_state_dict(q.state_dict())"""))

add(2,46,"""<p><b>سیاست‌گرادیان</b>: به‌جای یادگیری ارزش، مستقیم سیاست پارامتری <code class='inline'>π_θ(a|s)</code> را بهینه می‌کنیم. <b>REINFORCE</b>: <code class='inline'>∇J = E[∇log π(a|s)·Gₜ]</code> — عمل‌هایی که منجر به بازده بالا شدند محتمل‌تر می‌شوند. واریانس بالا؛ با کم‌کردن <b>خط پایه</b> (baseline) و <b>Actor–Critic</b> (ناقد تخمین ارزش) کاهش می‌یابد. <b>PPO</b> با «بریدن» نسبت سیاست جدید به قدیم به‌روزرسانی را محدود و پایدار می‌کند و استاندارد عملی است (RLHF هم از آن بهره می‌برد). یک REINFORCE برای مسئله‌ی راهزن چنددست می‌نویسیم.""",
"baseline را اضافه کن و سرعت یادگیری را مقایسه کن.",
py="""import numpy as np
def run(baseline, seed=0, steps=3000, lr=.1):
    rng = np.random.default_rng(seed); true = np.array([.2, .5, .8]); th = np.zeros(3); b = 0.0; best = []
    for t in range(steps):
        p = np.exp(th - th.max()); p /= p.sum(); a = rng.choice(3, p=p); r = float(rng.random() < true[a])
        adv = r - (b if baseline else 0); b += .05 * (r - b)
        g = -p; g[a] += 1; th += lr * adv * g; best.append(p[2])
    return np.mean(best[-200:])
print("بدون baseline: احتمال انتخاب بهترین دست", round(run(False), 3))
print("با baseline:  ", round(run(True), 3))
ratio, adv, eps = 1.5, 1.0, .2; print("PPO clip:", min(ratio * adv, np.clip(ratio, 1 - eps, 1 + eps) * adv), "← به‌روزرسانی محدود می‌شود")""",packages=NP)

add(2,47,"""<p>مدل جعبه‌سیاه را باید توضیح داد: اعتماد، اشکال‌زدایی، الزامات قانونی. <b>سراسری</b> در برابر <b>محلی</b>. <b>اهمیت جایگشتی</b> (permutation importance): با بُر زدن یک ویژگی چقدر دقت افت می‌کند. <b>SHAP</b>: بر پایه‌ی <b>مقدار شپلی</b> نظریه‌ی بازی‌ها، سهم هر ویژگی را در پیش‌بینی هر نمونه با خاصیت جمع‌پذیری می‌دهد. <b>LIME</b>: مدل ساده‌ی خطی محلی اطراف نمونه برازش می‌کند. <b>PDP</b> اثر میانگین یک ویژگی. هشدار: همبستگی ویژگی‌ها و علیت. اهمیت جایگشتی و مقدار شپلی دقیق برای مدل کوچک را از صفر حساب می‌کنیم.""",
"مقدار شپلی را برای یک نمونه و یک مدل ساختگی با سه ویژگی حساب کن.",
py="""import numpy as np, itertools, math
from sklearn.ensemble import RandomForestClassifier
from sklearn.inspection import permutation_importance
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
X, y = make_classification(600, 6, n_informative=3, n_redundant=0, random_state=0)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0)
m = RandomForestClassifier(100, random_state=0).fit(Xtr, ytr)
pi = permutation_importance(m, Xte, yte, n_repeats=10, random_state=0); print("اهمیت جایگشتی:", pi.importances_mean.round(3))
f = lambda x: 3 * x[0] + 2 * x[1] * x[2]; x = np.array([1., 2., 3.]); base = np.zeros(3)
def v(S): z = base.copy(); z[list(S)] = x[list(S)]; return f(z)
n = 3; phi = []
for i in range(n):
    s = 0
    for k in range(n):
        for S in itertools.combinations([j for j in range(n) if j != i], k): s += math.factorial(k) * math.factorial(n - k - 1) / math.factorial(n) * (v(S + (i,)) - v(S))
    phi.append(s)
print("شپلی:", np.round(phi, 2), "| مجموع:", round(sum(phi), 2), "= f(x)−f(base) =", f(x) - f(base))""",packages=SK)

add(2,48,"""<p><b>GPU</b> هزاران هسته‌ی ساده دارد و برای ضرب ماتریس موازی عالی است؛ آموزش شبکه‌ها ۱۰–۱۰۰× سریع‌تر از CPU. اصول: داده را روی GPU نگه دار (انتقال میزبان↔دستگاه گران است)، batch بزرگ‌تر برای پر کردن هسته‌ها، <b>دقت ترکیبی</b> (fp16/bf16 با حافظه‌ی نصف و Tensor Core)، <b>pin_memory</b> و بارگذاری ناهمگام. گلوگاه‌ها: حافظه‌ی GPU (OOM)، پهنای باند، بارگذاری داده. با مفهوم «شدت محاسباتی» (FLOP به‌ازای بایت) می‌فهمی کار محدود به محاسبه است یا حافظه. در این محیط GPU نیست؛ ابتدا اثر برداری‌سازی و اندازه‌ی دسته را روی CPU می‌سنجیم.""",
"زمان ضرب ماتریس را برای اندازه‌های مختلف بسنج و GFLOPS را حساب کن.",
py="""import numpy as np, time
for n in (128, 512, 1024):
    A = np.random.default_rng(0).normal(size=(n, n)).astype(np.float32); t = time.perf_counter()
    for _ in range(3): A @ A
    dt = (time.perf_counter() - t) / 3; print(f"n={n:4}: {dt * 1000:7.1f} ms | ≈ {2 * n ** 3 / dt / 1e9:6.1f} GFLOPS")
x = np.random.default_rng(1).normal(size=(2000, 512)).astype(np.float32); W = np.random.default_rng(2).normal(size=(512, 512)).astype(np.float32)
t = time.perf_counter(); [x[i] @ W for i in range(2000)]; one = time.perf_counter() - t
t = time.perf_counter(); x @ W; batch = time.perf_counter() - t; print("تکی در برابر دسته‌ای: سریع‌تر", round(one / batch), "برابر")
print("حافظه‌ی fp32 vs fp16 برای ۱ میلیارد پارامتر:", 4, "GB", 2, "GB")""",packages=NP)

add(2,49,"""<p>آزمایش‌های ML پر از انتخاب‌اند؛ بدون ثبت، بازتولید ناممکن است. باید ثبت شود: <b>کد</b> (commit)، <b>داده</b> (نسخه/هش)، <b>هایپرپارامترها</b>، <b>seed</b>، <b>محیط</b> (نسخه‌ها)، <b>متریک‌ها</b> و <b>مصنوعات</b> (مدل). ابزارها: <b>TensorBoard</b>، <b>MLflow</b>، <b>Weights & Biases</b>، DVC برای نسخه‌ی داده. حداقل: یک ردیف JSON برای هر اجرا. ردیاب کوچکی با JSON Lines می‌سازیم که اجراها را مقایسه کند. قوانین: هر اجرا فقط یک چیز را تغییر دهد، seed را ثابت کن و چندبار تکرار کن تا نوسان تصادفی را بسنجی.""",
"ردیاب را گسترش بده تا بهترین اجرا بر اساس متریک را گزارش کند.",
py="""import json, hashlib, time, io, numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
log = io.StringIO()
def track(params, seed=0):
    X, y = load_breast_cancer(return_X_y=True)
    score = cross_val_score(RandomForestClassifier(random_state=seed, **params), X, y, cv=3).mean()
    rec = {"run": hashlib.md5(json.dumps(params, sort_keys=True).encode()).hexdigest()[:6], "params": params, "seed": seed, "cv_acc": round(float(score), 4)}
    log.write(json.dumps(rec, ensure_ascii=False) + "\\n"); return rec
for p in ({"n_estimators": 10}, {"n_estimators": 50}, {"n_estimators": 50, "max_depth": 3}, {"n_estimators": 100, "max_depth": 5}): track(p)
runs = [json.loads(l) for l in log.getvalue().splitlines()]
best = max(runs, key=lambda r: r["cv_acc"]); print("تعداد اجرا:", len(runs), "| بهترین:", best["run"], best["params"], best["cv_acc"])
seeds = [track({"n_estimators": 20}, s)["cv_acc"] for s in range(4)]; print("نوسان بین seedها:", round(float(np.std(seeds)), 4))""",packages=SK)

add(2,50,"""<p><b>پروژه‌ی پایان سطح ۲: دسته‌بند تصویر با انتقال یادگیری.</b> هدف پیاده‌سازی کامل خط لوله‌ی تصویر: داده → افزایش → مدل → آموزش → ارزیابی → تحلیل خطا. روی سیستم خودت با PyTorch: ۱) مجموعه‌ی ۵ کلاسه (مثلاً گل‌ها یا CIFAR-10 زیرمجموعه)، ۲) ResNet18 پیش‌آموزش‌دیده با سر جدید، ۳) افزایش (برش، برگردان، رنگ)، ۴) آموزش سر سپس فاین‌تیون با نرخ تفکیکی، ۵) توقف زودهنگام و ذخیره‌ی بهترین مدل، ۶) ماتریس درهم‌ریختگی، Grad-CAM و بررسی نمونه‌های خطا، ۷) گزارش. در مرورگر همین خط لوله را روی ارقام با ویژگی‌های «انتقالی» و افزایش داده اجرا می‌کنیم تا ساختار پروژه‌ی تو تمرین شود.""",
"قالب پروژه را روی PyTorch و یک مجموعه‌داده‌ی واقعی اجرا کن و گزارش ۱ صفحه‌ای بنویس.",
py="""import numpy as np
from sklearn.datasets import load_digits
from sklearn.decomposition import PCA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
X, y = load_digits(return_X_y=True); X = X.reshape(-1, 8, 8) / 16
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=.3, random_state=0, stratify=y)
rng = np.random.default_rng(0)
def augment(imgs, labels):
    out = [imgs]; ol = [labels]
    out.append(np.roll(imgs, 1, axis=2)); ol.append(labels); out.append(np.roll(imgs, -1, axis=1)); ol.append(labels)
    out.append(np.clip(imgs + rng.normal(0, .05, imgs.shape), 0, 1)); ol.append(labels); return np.concatenate(out), np.concatenate(ol)
Xa, ya = augment(Xtr, ytr); print("داده‌ی آموزش:", len(Xtr), "→", len(Xa))
enc = PCA(30).fit(X.reshape(len(X), -1))
for name, (A, b) in [("بدون افزایش", (Xtr, ytr)), ("با افزایش", (Xa, ya))]:
    clf = LogisticRegression(max_iter=3000).fit(enc.transform(A.reshape(len(A), -1)), b)
    p = clf.predict(enc.transform(Xte.reshape(len(Xte), -1))); print(name, "دقت", round(accuracy_score(yte, p), 3))
cm = confusion_matrix(yte, p); np.fill_diagonal(cm, 0); i, j = np.unravel_index(cm.argmax(), cm.shape); print("بیشترین خطا:", i, "→", j, int(cm[i, j]))""",packages=SK)

QUIZ={2:[
 quiz("چرا بدون تابع فعال‌سازی غیرخطی چند لایه فایده‌ای ندارد؟",["سرعت کم می‌شود","ترکیب لایه‌های خطی معادل یک لایه‌ی خطی است","حافظه زیاد می‌شود","گرادیان صفر می‌شود"],1,"B(Ax)=(BA)x؛ قدرت از غیرخطی بودن می‌آید."),
 quiz("اتصال باقیمانده (ResNet) چه مشکلی را حل می‌کند؟",["کمبود داده","ناپدید شدن گرادیان در شبکه‌های بسیار عمیق","اندازه‌ی تصویر","نرخ یادگیری"],1,"y=F(x)+x مسیر مستقیم گرادیان می‌دهد."),
 quiz("Dropout هنگام استنتاج چه می‌کند؟",["فعال است","خاموش است","نیمی را حذف می‌کند","فقط BatchNorm را خاموش می‌کند"],1,"در inverted dropout مقیاس‌دهی هنگام آموزش انجام شده است."),
 quiz("در حلقه‌ی PyTorch چرا zero_grad لازم است؟",["برای سرعت","چون گرادیان‌ها به‌صورت تجمعی ذخیره می‌شوند","برای حافظه","لازم نیست"],1,"backward گرادیان را به .grad اضافه می‌کند."),
 quiz("Adam ترکیب چه چیزهایی است؟",["SGD و Dropout","ممنتوم و نرخ یادگیری تطبیقی (RMSProp)","L1 و L2","BatchNorm و LayerNorm"],1,"میانگین متحرک گرادیان و مربع گرادیان با تصحیح اریب."),
 quiz("نقش شبکه‌ی هدف در DQN چیست؟",["افزایش سرعت","ثابت نگه داشتن هدف برای پایداری یادگیری","جایگزین replay","کاهش حافظه"],1,"بدون آن هدف با هر به‌روزرسانی جابه‌جا می‌شود."),
 quiz("در attention سه نقش Q، K، V چیست؟",["نام لایه‌ها","پرس‌وجو، کلید و مقدار برای وزن‌دهی بازیابی","سه بهینه‌ساز","سه تابع هزینه"],1,"شباهت Q و K وزن‌ها را و V محتوا را می‌دهد."),
 quiz("KL در VAE چه کاری می‌کند؟",["سرعت را بالا می‌برد","توزیع نهفته را به نرمال استاندارد نزدیک و فضا را هموار می‌کند","داده را حذف می‌کند","خطای بازسازی است"],1,"امکان نمونه‌گیری و درون‌یابی را فراهم می‌کند."),
]}
CHALLENGE={2:{"task":"تابع softmax پایدار (بدون overflow) و تابع cross_entropy(logits, y) برای یک دسته را با NumPy بنویس: logits شکل (n, k) و y برچسب‌های صحیح؛ میانگین منفی لگاریتم احتمال کلاس درست را برگردان.",
 "hint1":"پیش از exp بیشینه‌ی هر سطر را کم کن.",
 "hint2":"log-softmax = z − max − log(sum(exp(z − max)))؛ سپس مقدار کلاس درست را با اندیس‌گذاری پیشرفته بردار و میانگین منفی بگیر.",
 "solution":"import numpy as np\n\ndef softmax(z):\n    z = z - z.max(axis=1, keepdims=True)\n    e = np.exp(z)\n    return e / e.sum(axis=1, keepdims=True)\n\ndef cross_entropy(logits, y):\n    z = logits - logits.max(axis=1, keepdims=True)\n    logp = z - np.log(np.exp(z).sum(axis=1, keepdims=True))\n    return -logp[np.arange(len(y)), y].mean()\n\nz = np.array([[1000., 1001., 1002.], [0., 0., 0.]])\nprint(softmax(z).round(3))\nprint(round(cross_entropy(z, np.array([2, 1])), 4))  # 0.7531"}}
