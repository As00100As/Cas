import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; PD=['numpy','pandas']; SK=['numpy','scikit-learn']; SKP=['numpy','pandas','scikit-learn']

add(1,26,"""<p>رگرسیون چندجمله‌ای با افزودن توان‌های ویژگی (x, x², x³…) رابطه‌ی غیرخطی را با مدل خطی می‌سازد (<code class='inline'>PolynomialFeatures</code>). درجه‌ی کم → <b>کم‌برازش</b> (underfit: خطای آموزش و آزمون بالا)؛ درجه‌ی زیاد → <b>بیش‌برازش</b> (overfit: خطای آموزش پایین ولی آزمون بالا). <b>مبادله‌ی اریب–واریانس</b>: مدل ساده اریب دارد، مدل پیچیده به نویز حساس (واریانس) است. با منحنی خطای آموزش/اعتبار برحسب پیچیدگی، نقطه‌ی بهینه را پیدا می‌کنیم.""",
"درجه‌ی ۱ تا ۱۲ را امتحان کن و درجه‌ی با کمترین خطای اعتبار را بگو.",
py="""import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline
from sklearn.metrics import mean_squared_error as mse
rng = np.random.default_rng(0)
x = rng.uniform(-3, 3, 40)[:, None]; y = np.sin(x).ravel() + rng.normal(0, .3, 40)
xt, yt = x[:25], y[:25]; xv, yv = x[25:], y[25:]
best = None
for d in (1, 3, 5, 9, 12):
    m = make_pipeline(PolynomialFeatures(d), LinearRegression()).fit(xt, yt)
    tr, va = mse(yt, m.predict(xt)), mse(yv, m.predict(xv))
    print(f"درجه {d:2}: آموزش {tr:.3f}  اعتبار {va:.3f}")
    if best is None or va < best[1]: best = (d, va)
print("بهترین درجه:", best[0])""",packages=SK)

add(1,27,"""<p><b>منظم‌سازی</b> بیش‌برازش را با جریمه‌ی بزرگی وزن‌ها مهار می‌کند: <b>Ridge (L2)</b>: <code class='inline'>L + α·Σw²</code> وزن‌ها را کوچک می‌کند؛ <b>Lasso (L1)</b>: <code class='inline'>L + α·Σ|w|</code> بسیاری از وزن‌ها را دقیقاً صفر می‌کند (انتخاب ویژگی)؛ <b>ElasticNet</b> ترکیب. α بزرگ‌تر = ساده‌تر. ویژگی‌ها باید مقیاس‌دهی شوند. در شبکه‌های عصبی همین L2 به نام weight decay است.""",
"با داده‌ی ۵۰ ویژگی که فقط ۳ تا مفیدند، Lasso را با رگرسیون ساده مقایسه کن.",
py="""import numpy as np
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.model_selection import train_test_split
rng = np.random.default_rng(0)
X = rng.normal(size=(80, 50)); y = 3 * X[:, 0] - 2 * X[:, 1] + X[:, 2] + rng.normal(0, .5, 80)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0)
for name, m in [("خطی", LinearRegression()), ("Ridge", Ridge(10)), ("Lasso", Lasso(0.1))]:
    m.fit(Xtr, ytr); nz = int((np.abs(m.coef_) > 1e-6).sum())
    print(f"{name:6} R² آزمون {m.score(Xte, yte):.3f} | ضرایب غیرصفر {nz}")""",packages=SK)

add(1,28,"""<p><b>رگرسیون لجستیک</b> با وجود نام، مدل <b>دسته‌بندی</b> است: امتیاز خطی <code class='inline'>z=w·x+b</code> را با <b>سیگموید</b> <code class='inline'>σ(z)=1/(1+e^−z)</code> به احتمال بین ۰ و ۱ تبدیل می‌کند. تابع هزینه: <b>آنتروپی متقاطع</b> <code class='inline'>−[y log p + (1−y) log(1−p)]</code>. گرادیان بسیار ساده است: <code class='inline'>Xᵀ(p−y)/n</code>. مرز تصمیم خطی است. ضرایب = لگاریتم نسبت شانس.""",
"رگرسیون لجستیک را با گرادیان کاهشی از صفر بنویس و با sklearn مقایسه کن.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
rng = np.random.default_rng(0)
X = np.r_[rng.normal(-1, 1, (100, 2)), rng.normal(1, 1, (100, 2))]; y = np.r_[np.zeros(100), np.ones(100)]
sig = lambda z: 1 / (1 + np.exp(-z))
Xb = np.c_[np.ones(200), X]; w = np.zeros(3)
for _ in range(2000):
    p = sig(Xb @ w); w -= 0.1 * Xb.T @ (p - y) / 200
loss = -np.mean(y * np.log(p) + (1 - y) * np.log(1 - p))
print("از صفر:", w.round(2), "هزینه", round(loss, 3), "دقت", ((p > .5) == y).mean())
m = LogisticRegression(C=1e6).fit(X, y); print("sklearn:", np.r_[m.intercept_, m.coef_.ravel()].round(2))
print("احتمال نمونه‌ی (0.5, 0.5):", m.predict_proba([[.5, .5]]).round(3))""",packages=SK)

add(1,29,"""<p>مدل احتمال می‌دهد؛ <b>آستانه</b> تبدیلش به کلاس است. پیش‌فرض ۰٫۵، ولی بسته به هزینه‌ی خطا باید تغییر کند: در تشخیص بیماری مثبت‌های کاذب را می‌پذیریم تا منفی‌کاذب کم شود (آستانه‌ی پایین)؛ در فیلتر ایمیل مهم برعکس. <b>چندکلاسه</b>: یک-در-برابر-بقیه (OvR) یا softmax که احتمال‌ها را به مجموع ۱ می‌رساند. <b>کالیبراسیون</b>: آیا وقتی مدل می‌گوید ۰٫۷ واقعاً ۷۰٪ درست است؟""",
"با تغییر آستانه تعداد مثبت‌های کاذب و منفی‌های کاذب را ببین.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
rng = np.random.default_rng(1)
X = np.r_[rng.normal(-.5, 1, (500, 1)), rng.normal(.5, 1, (500, 1))]; y = np.r_[np.zeros(500), np.ones(500)]
p = LogisticRegression().fit(X, y).predict_proba(X)[:, 1]
for t in (0.2, 0.5, 0.8):
    pred = p >= t; fp = int(((pred == 1) & (y == 0)).sum()); fn = int(((pred == 0) & (y == 1)).sum())
    print(f"آستانه {t}: مثبت کاذب {fp:3} | منفی کاذب {fn:3}")
z = np.array([2.0, 1.0, 0.1]); sm = np.exp(z) / np.exp(z).sum(); print("softmax:", sm.round(3), sm.sum())""",packages=SK)

add(1,30,"""<p><b>دقت (accuracy)</b> روی داده‌ی نامتوازن گمراه‌کننده است (۹۹٪ سالم → مدلی که همیشه «سالم» بگوید ۹۹٪ دقت دارد!). پس: <b>Precision</b> = از آنچه مثبت گفتیم چقدر درست <code class='inline'>TP/(TP+FP)</code>؛ <b>Recall</b> = از مثبت‌های واقعی چقدر یافتیم <code class='inline'>TP/(TP+FN)</code>. تعادل بین آن‌ها: بالا بردن recall معمولاً precision را پایین می‌آورد. انتخاب معیار = انتخاب هدف تجاری.""",
"با یک «مدل احمق» نشان بده دقت بالا ولی recall صفر است.",
py="""import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score
y = np.array([0] * 990 + [1] * 10)
dumb = np.zeros(1000, int)
print("احمق: دقت", accuracy_score(y, dumb), "recall", recall_score(y, dumb))
pred = y.copy(); pred[:5] = 1; pred[990:995] = 0
print("بهتر: دقت", accuracy_score(y, pred), "precision", round(precision_score(y, pred), 2), "recall", recall_score(y, pred))
tp = ((pred == 1) & (y == 1)).sum(); fp = ((pred == 1) & (y == 0)).sum(); fn = ((pred == 0) & (y == 1)).sum()
print("دستی:", tp / (tp + fp), tp / (tp + fn))""",packages=SK)

add(1,31,"""<p><b>ماتریس درهم‌ریختگی</b>: [[TN, FP],[FN, TP]]. از آن همه‌ی معیارها ساخته می‌شود. <b>F1</b> میانگین هماهنگ precision و recall: <code class='inline'>2PR/(P+R)</code> (وقتی یکی پایین باشد F1 پایین می‌آید). <b>Fβ</b> وزن بیشتر به recall (β&gt;1). برای چندکلاسه: <b>macro</b> (میانگین ساده‌ی کلاس‌ها، حساس به کلاس‌های کم‌نمونه)، <b>micro</b> (تجمیع)، <b>weighted</b>. <code class='inline'>classification_report</code> همه را یکجا می‌دهد.""",
"گزارش دسته‌بندی را برای مدل سه‌کلاسه چاپ کن.",
py="""import numpy as np
from sklearn.metrics import confusion_matrix, f1_score, classification_report
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0, stratify=y)
p = LogisticRegression(max_iter=500).fit(Xtr, ytr).predict(Xte)
print(confusion_matrix(yte, p))
print("F1 macro:", round(f1_score(yte, p, average="macro"), 3))
print(classification_report(yte, p, digits=2))""",packages=SK)

add(1,32,"""<p><b>منحنی ROC</b>: نرخ مثبت واقعی (recall) در برابر نرخ مثبت کاذب برای همه‌ی آستانه‌ها. <b>AUC</b> مساحت زیر آن: احتمال اینکه یک نمونه‌ی مثبت تصادفی امتیاز بالاتری از یک منفی تصادفی بگیرد (۰٫۵ = تصادفی، ۱ = کامل). مستقل از آستانه و برای مقایسه‌ی مدل‌ها عالی؛ ولی در داده‌ی بسیار نامتوازن <b>PR-AUC</b> (منحنی precision–recall) گویاتر است.""",
"AUC را با تعریف احتمالی (جفت‌های مثبت/منفی) محاسبه و با sklearn مقایسه کن.",
py="""import numpy as np
from sklearn.metrics import roc_auc_score, roc_curve, average_precision_score
rng = np.random.default_rng(0)
y = np.r_[np.zeros(300), np.ones(100)]; s = np.r_[rng.normal(0, 1, 300), rng.normal(1.2, 1, 100)]
print("AUC:", round(roc_auc_score(y, s), 4), "| PR-AUC:", round(average_precision_score(y, s), 3), "| پایه (شیوع):", y.mean())
pos, neg = s[y == 1], s[y == 0]
print("تعریف جفتی:", round((pos[:, None] > neg[None, :]).mean(), 4))
fpr, tpr, th = roc_curve(y, s)
j = np.argmax(tpr - fpr); print(f"بهترین آستانه (Youden) {th[j]:.2f}: TPR {tpr[j]:.2f} FPR {fpr[j]:.2f}")""",packages=SK)

add(1,33,"""<p><b>kNN</b>: برای نمونه‌ی جدید k نزدیک‌ترین نمونه‌ی آموزش را بیاب و رأی بگیر (دسته‌بندی) یا میانگین بگیر (رگرسیون). «آموزش» ندارد (تنبل) و پیش‌بینی گران است. فاصله‌ی اقلیدسی → <b>مقیاس‌دهی لازم است</b>. k کوچک = بیش‌برازش و مرز نویزی؛ k بزرگ = کم‌برازش. در ابعاد بالا «نفرین بُعد» فاصله‌ها را بی‌معنا می‌کند. ساختارهای KD-tree/Ball-tree جست‌وجو را سریع می‌کنند.""",
"اثر k را روی دقت آموزش و آزمون بررسی کن.",
py="""import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
X, y = load_breast_cancer(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0, stratify=y)
for k in (1, 5, 15, 50):
    m = make_pipeline(StandardScaler(), KNeighborsClassifier(k)).fit(Xtr, ytr)
    print(f"k={k:2}: آموزش {m.score(Xtr, ytr):.3f}  آزمون {m.score(Xte, yte):.3f}")
raw = KNeighborsClassifier(5).fit(Xtr, ytr).score(Xte, yte); print("بدون مقیاس‌دهی:", round(raw, 3))
def knn_predict(Xtr, ytr, x, k=5):
    d = ((Xtr - x) ** 2).sum(1); return np.bincount(ytr[np.argsort(d)[:k]]).argmax()
print("از صفر:", knn_predict(Xtr, ytr, Xte[0]), yte[0])""",packages=SK)

add(1,34,"""<p><b>درخت تصمیم</b> با پرسش‌های بله/خیر داده را تقسیم می‌کند. هر تقسیم کاهش <b>ناخالصی</b> را بیشینه می‌کند: <b>جینی</b> <code class='inline'>1−Σpᵢ²</code> یا <b>آنتروپی</b> <code class='inline'>−Σpᵢlog pᵢ</code>. مزیت: تفسیرپذیر، بدون نیاز به مقیاس‌دهی، غیرخطی. عیب: بدون محدودیت بیش‌برازش می‌کند؛ کنترل با <code class='inline'>max_depth</code>، <code class='inline'>min_samples_leaf</code> و هرس. اهمیت ویژگی‌ها از مجموع کاهش ناخالصی.""",
"عمق درخت را تغییر بده و بیش‌برازش را ببین؛ سپس قواعد را متنی چاپ کن.",
py="""from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
import numpy as np
X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=1, stratify=y)
for d in (1, 2, 3, None):
    t = DecisionTreeClassifier(max_depth=d, random_state=0).fit(Xtr, ytr)
    print("عمق", d, "آموزش", round(t.score(Xtr, ytr), 3), "آزمون", round(t.score(Xte, yte), 3))
t = DecisionTreeClassifier(max_depth=2, random_state=0).fit(Xtr, ytr)
print(export_text(t, feature_names=["طول کاسبرگ", "عرض کاسبرگ", "طول گلبرگ", "عرض گلبرگ"]))
gini = lambda p: 1 - sum(q * q for q in p); print(gini([.5, .5]), gini([1, 0]))""",packages=SK)

add(1,35,"""<p><b>جنگل تصادفی</b> صدها درخت می‌سازد که هرکدام روی نمونه‌ی <b>بوت‌استرپ</b> (با جایگذاری) و زیرمجموعه‌ی تصادفی ویژگی‌ها در هر تقسیم آموزش می‌بینند؛ پیش‌بینی = رأی/میانگین. چون خطاهای درخت‌ها تا حدی مستقل‌اند، <b>واریانس کم می‌شود</b> (bagging). مزایا: دقت بالا با تنظیم کم، مقاوم به پرت، اهمیت ویژگی، تخمین OOB. عیب: کندتر و کم‌تفسیرپذیر از یک درخت. گام بعدی: <b>تقویت گرادیانی</b> (XGBoost، LightGBM) که درخت‌ها را پشت‌سرهم و جبران‌کننده‌ی خطا می‌سازد.""",
"تعداد درخت‌ها را تغییر بده و OOB را ببین؛ سپس ویژگی‌های مهم را فهرست کن.",
py="""import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
d = load_breast_cancer(); Xtr, Xte, ytr, yte = train_test_split(d.data, d.target, random_state=0, stratify=d.target)
print("یک درخت:", round(DecisionTreeClassifier(random_state=0).fit(Xtr, ytr).score(Xte, yte), 3))
for n in (5, 50, 200):
    rf = RandomForestClassifier(n, oob_score=True, random_state=0).fit(Xtr, ytr)
    print(f"جنگل {n:3}: آزمون {rf.score(Xte, yte):.3f} | OOB {rf.oob_score_:.3f}")
top = np.argsort(rf.feature_importances_)[::-1][:3]; print([d.feature_names[i] for i in top])
print("GB:", round(GradientBoostingClassifier(random_state=0).fit(Xtr, ytr).score(Xte, yte), 3))""",packages=SK)

add(1,36,"""<p><b>SVM</b> ابرصفحه‌ای را می‌یابد که <b>حاشیه</b> (فاصله تا نزدیک‌ترین نقاط هر کلاس، «بردارهای پشتیبان») را بیشینه کند. پارامتر <b>C</b>: C بزرگ = جریمه‌ی سنگین خطا (حاشیه‌ی باریک، بیش‌برازش)، C کوچک = حاشیه‌ی نرم. <b>ترفند کرنل</b>: بدون ساخت صریح ویژگی‌های بُعد بالا، شباهت را در فضای بالاتر حساب می‌کند؛ کرنل <b>RBF</b> مرزهای غیرخطی می‌سازد (γ دامنه‌ی تأثیر را کنترل می‌کند). مقیاس‌دهی لازم است. برای داده‌ی متوسط عالی؛ برای داده‌ی خیلی بزرگ کند.""",
"روی داده‌ی دایره‌ای، کرنل خطی را با RBF مقایسه کن.",
py="""import numpy as np
from sklearn.svm import SVC
from sklearn.datasets import make_circles
from sklearn.model_selection import train_test_split
X, y = make_circles(400, noise=.1, factor=.4, random_state=0)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0)
for k in ("linear", "rbf"):
    m = SVC(kernel=k, C=1).fit(Xtr, ytr); print(k, "آزمون", round(m.score(Xte, yte), 3), "| بردارهای پشتیبان:", len(m.support_))
for C in (0.01, 1, 100):
    m = SVC(C=C, gamma=2).fit(Xtr, ytr); print(f"C={C}: آموزش {m.score(Xtr, ytr):.3f} آزمون {m.score(Xte, yte):.3f}")""",packages=SK)

add(1,37,"""<p><b>Naive Bayes</b>: با قضیه‌ی بیز و <b>فرض ساده‌لوحانه</b> استقلال شرطی ویژگی‌ها: <code class='inline'>P(c|x) ∝ P(c)·Π P(xᵢ|c)</code>. بسیار سریع، با داده‌ی کم کار می‌کند و پایه‌ی فیلتر اسپم و دسته‌بندی متن است. انواع: Gaussian (ویژگی‌های پیوسته)، Multinomial (شمارش کلمات)، Bernoulli. <b>هموارسازی لاپلاس</b> (α) صفر شدن احتمال برای کلمه‌ی ندیده را جلوگیری می‌کند. با وجود فرض نادرست، رتبه‌بندی احتمال‌ها اغلب خوب است ولی احتمال‌ها کالیبره نیستند.""",
"یک فیلتر اسپم فارسی کوچک با MultinomialNB بساز.",
py="""from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
texts = ["برنده شدید جایزه رایگان", "کلیک کنید تخفیف ویژه رایگان", "جلسه فردا ساعت ده", "گزارش پروژه را بفرست", "جایزه ویژه برای شما", "فردا جلسه‌ی تیم"]
y = [1, 1, 0, 0, 1, 0]
vec = CountVectorizer(); X = vec.fit_transform(texts)
m = MultinomialNB(alpha=1).fit(X, y)
for s in ["جایزه رایگان ویژه", "گزارش جلسه فردا", "کلمه‌ی کاملاً ناشناخته"]:
    print(s, "→ اسپم" if m.predict(vec.transform([s]))[0] else "→ عادی", m.predict_proba(vec.transform([s])).round(2)[0])
import numpy as np
w = vec.get_feature_names_out(); idx = np.argsort(m.feature_log_prob_[1] - m.feature_log_prob_[0])[::-1][:3]; print("نشانه‌های اسپم:", list(w[idx]))""",packages=SK)

add(1,38,"""<p><b>k-means</b> بدون‌نظارت: ۱) k مرکز تصادفی، ۲) هر نقطه به نزدیک‌ترین مرکز، ۳) مرکزها = میانگین اعضا، تکرار تا ثبات. هدف: کمینه‌ی مجموع مربع فاصله‌ی درون‌خوشه (<b>inertia</b>). حساس به مقداردهی اولیه (k-means++ بهتر است) و مقیاس؛ خوشه‌های کروی هم‌اندازه فرض می‌کند. انتخاب k: <b>روش آرنج</b> و <b>امتیاز سیلوئت</b> (−۱ تا ۱؛ بالاتر بهتر).""",
"k-means را از صفر بنویس و با sklearn مقایسه کن.",
py="""import numpy as np
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from sklearn.metrics import silhouette_score
X, _ = make_blobs(300, centers=3, cluster_std=.8, random_state=0)
def kmeans(X, k, it=50, seed=0):
    rng = np.random.default_rng(seed); C = X[rng.choice(len(X), k, replace=False)]
    for _ in range(it):
        lab = ((X[:, None] - C[None]) ** 2).sum(2).argmin(1)
        newC = np.array([X[lab == j].mean(0) if (lab == j).any() else C[j] for j in range(k)])
        if np.allclose(newC, C): break
        C = newC
    return lab, C
lab, C = kmeans(X, 3); print("از صفر: اندازه‌ها", np.bincount(lab))
for k in range(2, 6):
    km = KMeans(k, n_init=10, random_state=0).fit(X); print(f"k={k}: inertia {km.inertia_:.0f} سیلوئت {silhouette_score(X, km.labels_):.3f}")""",packages=SK)

add(1,39,"""<p><b>خوشه‌بندی سلسله‌مراتبی</b> (agglomerative): هر نقطه یک خوشه؛ نزدیک‌ترین‌ها را پیاپی ادغام می‌کند و <b>دندروگرام</b> می‌سازد؛ با برش درخت تعداد خوشه تعیین می‌شود. معیار اتصال: single، complete، average، ward. <b>DBSCAN</b> بر پایه‌ی چگالی: نقطه‌ی «هسته» اگر در شعاع <code class='inline'>eps</code> حداقل <code class='inline'>min_samples</code> همسایه داشته باشد؛ خوشه‌های دلخواه‌شکل می‌یابد، k لازم نیست و نقاط نویز را (برچسب −۱) جدا می‌کند. ضعف: چگالی‌های متفاوت.""",
"روی داده‌ی «دو هلال» k-means و DBSCAN را مقایسه کن.",
py="""import numpy as np
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.datasets import make_moons
from sklearn.metrics import adjusted_rand_score as ari
X, y = make_moons(300, noise=.06, random_state=0)
print("k-means ARI:", round(ari(y, KMeans(2, n_init=10, random_state=0).fit_predict(X)), 3))
db = DBSCAN(eps=.2, min_samples=5).fit(X); print("DBSCAN ARI:", round(ari(y, db.labels_), 3), "| نویز:", (db.labels_ == -1).sum())
print("single-link ARI:", round(ari(y, AgglomerativeClustering(2, linkage="single").fit_predict(X)), 3))
print("ward ARI:", round(ari(y, AgglomerativeClustering(2, linkage="ward").fit_predict(X)), 3))""",packages=SK)

add(1,40,"""<p><b>PCA</b> محورهای جدیدی (مؤلفه‌های اصلی) می‌یابد که بیشترین واریانس را نگه می‌دارند: بردارهای ویژه‌ی ماتریس کوواریانس (یا SVD روی داده‌ی مرکزی‌شده). با نگه داشتن چند مؤلفه‌ی اول بُعد کم می‌شود. <b>نسبت واریانس توضیح‌داده‌شده</b> می‌گوید چه مقدار اطلاعات مانده است. کاربردها: مصورسازی ۲بعدی، حذف نویز، فشرده‌سازی، تسریع مدل. نکته: داده را استاندارد کن؛ مؤلفه‌ها تفسیرپذیری ویژگی اصلی را ندارند.""",
"تعداد مؤلفه‌های لازم برای حفظ ۹۵٪ واریانس ارقام را پیدا کن.",
py="""import numpy as np
from sklearn.decomposition import PCA
from sklearn.datasets import load_digits
X, y = load_digits(return_X_y=True)
p = PCA().fit(X); cum = np.cumsum(p.explained_variance_ratio_)
print("مؤلفه برای ۹۵٪:", int(np.searchsorted(cum, .95)) + 1, "از", X.shape[1])
Z = PCA(2).fit_transform(X); print(Z.shape, PCA(2).fit(X).explained_variance_ratio_.round(3))
Xc = X - X.mean(0); U, S, Vt = np.linalg.svd(Xc, full_matrices=False)
print("با SVD هم‌خوان:", np.allclose((S ** 2 / (len(X) - 1))[:2] / (S ** 2 / (len(X) - 1)).sum(), p.explained_variance_ratio_[:2]))
rec = PCA(20).fit(X); Xr = rec.inverse_transform(rec.transform(X)); print("خطای بازسازی با ۲۰ مؤلفه:", round(np.mean((X - Xr) ** 2), 3))""",packages=SK)

add(1,41,"""<p>یک تقسیم train/test ممکن است شانسی خوب یا بد باشد. <b>اعتبارسنجی متقابل k-تایی</b>: داده به k بخش؛ k بار هر بار یک بخش آزمون و بقیه آموزش؛ میانگین و انحراف معیار نمرات برآورد پایدارتری می‌دهد. انواع: <code class='inline'>StratifiedKFold</code> (حفظ نسبت کلاس‌ها)، <code class='inline'>GroupKFold</code> (گروه‌ها مثل بیمار یکسان در هر دو سمت نباشد)، <code class='inline'>TimeSeriesSplit</code> (آموزش همیشه قبل از آزمون). مدل را با <code class='inline'>cross_val_score</code> مقایسه کن.""",
"سه مدل را با CV پنج‌تایی مقایسه کن و میانگین و انحراف معیار را گزارش بده.",
py="""from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, StratifiedKFold, TimeSeriesSplit
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
import numpy as np
X, y = load_breast_cancer(return_X_y=True)
cv = StratifiedKFold(5, shuffle=True, random_state=0)
for name, m in [("لجستیک", make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))), ("جنگل", RandomForestClassifier(100, random_state=0))]:
    s = cross_val_score(m, X, y, cv=cv); print(f"{name}: {s.mean():.3f} ± {s.std():.3f}")
for tr, te in TimeSeriesSplit(3).split(np.arange(12)): print("آموزش", tr.max(), "< آزمون", te.min())""",packages=SK)

add(1,42,"""<p><b>هایپرپارامتر</b> را خودمان تنظیم می‌کنیم (k در kNN، عمق درخت، C)، نه مدل. روش‌ها: <b>Grid Search</b> (همه‌ی ترکیب‌ها؛ گران)، <b>Random Search</b> (نمونه‌گیری تصادفی؛ اغلب کارآمدتر)، و بهینه‌سازی بیزی (Optuna). همیشه با CV و روی داده‌ی آموزش؛ آزمون نهایی فقط برای مدل برگزیده. <code class='inline'>GridSearchCV</code> بعد از fit مدل بهترین را <code class='inline'>best_estimator_</code> می‌دهد. خطر: بیش‌برازش به اعتبارسنجی با جست‌وجوی زیاد؛ برای برآورد بی‌طرف از «CV تودرتو» استفاده کن.""",
"Random Search را روی جنگل تصادفی اجرا کن.",
py="""from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV, train_test_split
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
X, y = load_breast_cancer(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0, stratify=y)
pipe = make_pipeline(StandardScaler(), SVC())
gs = GridSearchCV(pipe, {"svc__C": [.1, 1, 10], "svc__gamma": [.001, .01, .1]}, cv=3).fit(Xtr, ytr)
print("بهترین:", gs.best_params_, round(gs.best_score_, 3), "| آزمون:", round(gs.score(Xte, yte), 3))
rs = RandomizedSearchCV(RandomForestClassifier(random_state=0), {"n_estimators": [20, 50, 100], "max_depth": [3, 5, None], "min_samples_leaf": [1, 3, 5]}, n_iter=6, cv=3, random_state=0).fit(Xtr, ytr)
print("جنگل:", rs.best_params_, round(rs.score(Xte, yte), 3))""",packages=SK)

add(1,43,"""<p><b>مهندسی ویژگی</b> اغلب بیش از انتخاب مدل اهمیت دارد: ساخت ویژگی‌های آموزنده از داده‌ی خام. ایده‌ها: <b>ترکیب</b> (قیمت به متر، نسبت‌ها)، <b>تبدیل</b> (لگاریتم برای توزیع چوله، ریشه)، <b>تاریخ</b> (روز هفته، ماه، آخر هفته، فاصله تا رویداد)، <b>تجمیع</b> (میانگین خرید مشتری در ۳۰ روز)، <b>تعامل</b> (حاصل‌ضرب)، <b>دسته‌بندی عددی</b> (bin). از دانش دامنه الهام بگیر و هر ویژگی را با CV بسنج.""",
"از تاریخ سفارش و مبلغ ویژگی‌های مفید بساز و اثر را روی مدل بسنج.",
py="""import pandas as pd, numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score
rng = np.random.default_rng(0)
d = pd.DataFrame({"تاریخ": pd.date_range("2025-01-01", periods=400), "متراژ": rng.uniform(40, 200, 400), "اتاق": rng.integers(1, 5, 400)})
d["قیمت"] = d["متراژ"] * (50 + 10 * (d["تاریخ"].dt.dayofweek >= 5)) + rng.normal(0, 100, 400)
base = d[["متراژ", "اتاق"]]
f = d.assign(آخرهفته=(d["تاریخ"].dt.dayofweek >= 5).astype(int), ماه=d["تاریخ"].dt.month, متراژ_اتاق=d["متراژ"] / d["اتاق"], log_متراژ=np.log(d["متراژ"]))[["متراژ", "اتاق", "آخرهفته", "ماه", "متراژ_اتاق", "log_متراژ"]]
for name, X in [("پایه", base), ("مهندسی‌شده", f)]:
    print(name, round(cross_val_score(RandomForestRegressor(50, random_state=0), X, d["قیمت"], cv=3, scoring="r2").mean(), 3))""",packages=SKP)

add(1,44,"""<p>مدل‌ها عدد می‌خواهند؛ <b>متغیر دسته‌ای</b> باید کدگذاری شود. <b>One-Hot</b>: هر دسته یک ستون ۰/۱ (برای دسته‌های بدون ترتیب)؛ <b>Ordinal</b> برای دسته‌های ترتیبی (کم/متوسط/زیاد)؛ <b>Target/Frequency encoding</b> برای دسته‌های زیاد (با خطر نشت؛ باید داخل CV باشد). <code class='inline'>handle_unknown="ignore"</code> برای دسته‌ی ندیده. <b>تله‌ی متغیر ساختگی</b>: برای مدل خطی یک ستون را حذف کن (<code class='inline'>drop="first"</code>). کاردینالیتی بالا (کد پستی) ستون‌های فراوان می‌سازد.""",
"One-Hot و Ordinal را روی داده‌ی نمونه اعمال کن.",
py="""import pandas as pd
from sklearn.preprocessing import OneHotEncoder, OrdinalEncoder
d = pd.DataFrame({"شهر": ["تهران", "شیراز", "تهران", "تبریز"], "سطح": ["کم", "زیاد", "متوسط", "کم"]})
oh = OneHotEncoder(handle_unknown="ignore", sparse_output=False).fit(d[["شهر"]])
print(oh.get_feature_names_out(), oh.transform(d[["شهر"]]))
print("دسته‌ی ناشناخته:", oh.transform(pd.DataFrame({"شهر": ["مشهد"]})))
od = OrdinalEncoder(categories=[["کم", "متوسط", "زیاد"]]).fit(d[["سطح"]]); print(od.transform(d[["سطح"]]).ravel())
print(pd.get_dummies(d["شهر"], drop_first=True).astype(int))""",packages=SKP)

add(1,45,"""<p><b>Pipeline</b> مراحل پیش‌پردازش و مدل را در یک شیء می‌بندد: هیچ نشتی (fit فقط روی داده‌ی آموزش)، تکرارپذیر، و قابل‌ذخیره. <b>ColumnTransformer</b> به هر گروه ستون پردازش مخصوص می‌دهد (عددی: پر کردن میانه + استاندارد؛ دسته‌ای: پر کردن مد + One-Hot). کل Pipeline در <code class='inline'>cross_val_score</code> و <code class='inline'>GridSearchCV</code> به‌کار می‌رود (پارامتر با <code class='inline'>مرحله__پارامتر</code>). این الگوی استاندارد تولید است.""",
"Pipeline کامل با ColumnTransformer بساز و روی داده‌ی نمونه با CV بسنج.",
py="""import numpy as np, pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
rng = np.random.default_rng(0); n = 300
d = pd.DataFrame({"سن": rng.integers(18, 70, n).astype(float), "درآمد": rng.lognormal(3, .5, n), "شهر": rng.choice(["الف", "ب", "ج"], n)})
y = ((d["درآمد"] > 20) ^ (rng.random(n) < .1)).astype(int)
d.loc[rng.choice(n, 30, replace=False), "سن"] = np.nan; d.loc[rng.choice(n, 20, replace=False), "شهر"] = None
pre = ColumnTransformer([("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("sc", StandardScaler())]), ["سن", "درآمد"]),
                         ("cat", Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("oh", OneHotEncoder(handle_unknown="ignore"))]), ["شهر"])])
pipe = Pipeline([("pre", pre), ("clf", LogisticRegression(max_iter=500))])
print("CV:", cross_val_score(pipe, d, y, cv=5).mean().round(3))""",packages=SKP)

add(1,46,"""<p><b>نشت داده</b> یعنی اطلاعاتی از آزمون/آینده/هدف به آموزش رخنه کند و نتیجه‌ی خوش‌بینانه‌ی کاذب بدهد؛ مدل در تولید شکست می‌خورد. انواع: ۱) <b>پیش‌پردازش قبل از تقسیم</b> (مقیاس‌دهی با کل داده)، ۲) <b>ویژگی‌ای که پس از رویداد ساخته می‌شود</b> (مثلاً «مبلغ بازپرداخت» برای پیش‌بینی نکول)، ۳) <b>نمونه‌های تکراری/وابسته</b> در دو سمت، ۴) <b>برش تصادفی در داده‌ی زمانی</b>. نشانه‌ها: دقت غیرواقعی بالا، ویژگی با اهمیت عجیب. راه‌حل: Pipeline و تقسیم درست.""",
"تله‌ی انتخاب ویژگی قبل از CV را بساز و با Pipeline درست مقایسه کن.",
py="""import numpy as np
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
rng = np.random.default_rng(0)
X = rng.normal(size=(60, 2000)); y = rng.integers(0, 2, 60)          # داده‌ی کاملاً تصادفی! دقت درست ≈ ۰٫۵
Xs = SelectKBest(f_classif, k=20).fit_transform(X, y)               # نشت: انتخاب با دیدن y همه
print("با نشت:", cross_val_score(LogisticRegression(), Xs, y, cv=5).mean().round(2))
pipe = make_pipeline(SelectKBest(f_classif, k=20), LogisticRegression())
print("درست (در Pipeline):", cross_val_score(pipe, X, y, cv=5).mean().round(2))""",packages=SK)

add(1,47,"""<p>وقتی یک کلاس بسیار کم‌نمونه است (تقلب، بیماری نادر) مدل به اکثریت متمایل می‌شود. راه‌ها: ۱) <b>معیار مناسب</b> (PR-AUC، recall، F1) نه دقت؛ ۲) <b>وزن کلاس‌ها</b> (<code class='inline'>class_weight="balanced"</code>)؛ ۳) <b>نمونه‌برداری</b>: کم‌کردن اکثریت یا افزایش اقلیت (تکرار، SMOTE که نمونه‌ی مصنوعی بین همسایگان اقلیت می‌سازد، فقط روی آموزش)؛ ۴) <b>تنظیم آستانه</b>؛ ۵) جمع‌آوری داده‌ی بیشتر. هرگز آزمون را بازنمونه‌گیری نکن.""",
"اثر class_weight را روی recall کلاس نادر ببین.",
py="""import numpy as np
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score, precision_score, average_precision_score
from sklearn.model_selection import train_test_split
X, y = make_classification(5000, weights=[.97], flip_y=0, random_state=0, class_sep=.8)
Xtr, Xte, ytr, yte = train_test_split(X, y, stratify=y, random_state=0)
for cw in (None, "balanced"):
    m = LogisticRegression(class_weight=cw, max_iter=500).fit(Xtr, ytr); p = m.predict(Xte)
    print(cw, "recall", round(recall_score(yte, p), 2), "precision", round(precision_score(yte, p), 2), "PR-AUC", round(average_precision_score(yte, m.predict_proba(Xte)[:, 1]), 2))
rng = np.random.default_rng(0); minor = Xtr[ytr == 1]
i, j = rng.integers(0, len(minor), 2); lam = rng.random(); print("SMOTE ساده، نمونه‌ی مصنوعی:", (minor[i] + lam * (minor[j] - minor[i])).round(2)[:3])""",packages=SK)

add(1,48,"""<p>مدل آموزش‌دیده را باید ذخیره و در سرویس بارگذاری کرد. <code class='inline'>joblib.dump(pipe, "model.joblib")</code> (برای شیءهای NumPy کارآمد) یا pickle. <b>هشدار امنیتی</b>: بارگذاری pickle/joblib از منبع نامعتبر کد دلخواه اجرا می‌کند. هنگام ذخیره: نسخه‌ی کتابخانه‌ها، ترتیب و نام ویژگی‌ها، تاریخ و متریک‌ها را ثبت کن؛ نسخه‌ی scikit-learn هنگام بارگذاری باید سازگار باشد. برای تبادل بین زبان‌ها ONNX و برای مدل‌های ساده می‌توان وزن‌ها را در JSON نگه داشت.""",
"مدل را ذخیره و بارگذاری کن و پیش‌بینی را بررسی کن؛ همراه آن فراداده‌ی ردیابی بنویس.",
py="""import joblib, io, json, hashlib, sklearn
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
X, y = load_iris(return_X_y=True)
m = RandomForestClassifier(20, random_state=0).fit(X, y)
buf = io.BytesIO(); joblib.dump(m, buf); raw = buf.getvalue()
m2 = joblib.load(io.BytesIO(raw))
print("هم‌خوان:", (m.predict(X) == m2.predict(X)).all(), "| اندازه:", len(raw) // 1024, "KB")
meta = {"sklearn": sklearn.__version__, "features": ["sl", "sw", "pl", "pw"], "sha256": hashlib.sha256(raw).hexdigest()[:16], "acc": round(m.score(X, y), 3)}
print(json.dumps(meta, ensure_ascii=False))
coef = {"classes": m.classes_.tolist(), "importances": m.feature_importances_.round(3).tolist()}; print(json.dumps(coef))""",packages=SK)

add(1,49,"""<p><b>پروژه‌ی پایان سطح ۱</b>: یک مسئله‌ی کامل جدولی را از ابتدا تا انتها حل کن. مراحل: ۱) تعریف مسئله و معیار موفقیت، ۲) EDA، ۳) تقسیم داده، ۴) Pipeline پیش‌پردازش، ۵) مدل پایه (baseline ساده) و چند مدل، ۶) CV و تنظیم هایپرپارامتر، ۷) ارزیابی نهایی یک‌باره روی آزمون، ۸) تحلیل خطا و اهمیت ویژگی، ۹) ذخیره و مستندسازی. این‌جا روی داده‌ی «سرطان پستان» (۳۰ ویژگی) کار می‌کنیم؛ در تمرین همان قالب را روی داده‌ی واقعی خودت (مثلاً Kaggle) تکرار کن.""",
"قالب را روی دیتاست wine یا california_housing تکرار کن و گزارش نتیجه بنویس.",
py="""import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.dummy import DummyClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
d = load_breast_cancer(); Xtr, Xte, ytr, yte = train_test_split(d.data, d.target, test_size=.2, stratify=d.target, random_state=0)
print("baseline:", cross_val_score(DummyClassifier(strategy="most_frequent"), Xtr, ytr, cv=5).mean().round(3))
models = {"لجستیک": Pipeline([("s", StandardScaler()), ("m", LogisticRegression(max_iter=2000))]), "جنگل": Pipeline([("m", RandomForestClassifier(150, random_state=0))])}
for n, m in models.items(): print(n, cross_val_score(m, Xtr, ytr, cv=5, scoring="recall").mean().round(3))
gs = GridSearchCV(models["لجستیک"], {"m__C": [.1, 1, 10]}, cv=5, scoring="recall").fit(Xtr, ytr)
print("انتخاب:", gs.best_params_); print(classification_report(yte, gs.predict(Xte), target_names=d.target_names))""",packages=SK)

add(1,50,"""<p><b>اخلاق و سوگیری</b>: مدل از داده یاد می‌گیرد؛ اگر داده سوگیری تاریخی دارد (استخدام، اعتبار، پلیس)، مدل آن را بازتولید و تقویت می‌کند. منابع: نمونه‌ی ناهمگن، برچسب‌های ذهنی، <b>ویژگی‌های نماینده</b> (کد پستی ≈ نژاد)، حلقه‌ی بازخورد. اقدام: بررسی عملکرد به‌تفکیک زیرگروه‌ها، معیارهای انصاف (برابری فرصت: recall مساوی؛ برابری جمعیتی)، شفافیت و کارت مدل، حریم خصوصی، و انسان در حلقه برای تصمیم‌های حساس. «دقت کلی خوب» با «انصاف» یکی نیست و بین معیارهای انصاف مبادله وجود دارد.""",
"عملکرد مدل را برای دو گروه جدا حساب کن و شکاف recall را بگو.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score, accuracy_score
rng = np.random.default_rng(0); n = 4000
g = rng.random(n) < .15                                  # گروه اقلیت (۱۵٪)
x = rng.normal(size=n); y = (x + rng.normal(0, .5, n) > 0).astype(int)
x_obs = np.where(g, x * .4 + rng.normal(0, .8, n), x)    # ویژگی برای اقلیت کم‌کیفیت‌تر
X = x_obs[:, None]; tr = np.arange(n) < 3000
m = LogisticRegression().fit(X[tr], y[tr]); p = m.predict(X)
for name, mask in [("اکثریت", ~g & ~tr), ("اقلیت", g & ~tr)]:
    print(f"{name}: دقت {accuracy_score(y[mask], p[mask]):.2f} | recall {recall_score(y[mask], p[mask]):.2f}")
print("دقت کلی گروه‌ها را پنهان می‌کند:", round(accuracy_score(y[~tr], p[~tr]), 2))""",packages=SK)

QUIZ={1:[
 quiz("تفاوت اصلی ML با برنامه‌نویسی سنتی چیست؟",["ML سریع‌تر است","در ML قاعده از داده یاد گرفته می‌شود","ML بدون داده کار می‌کند","هیچ تفاوتی نیست"],1,"داده+پاسخ ← قاعده (مدل)."),
 quiz("چرا مقیاس‌دهی را فقط روی داده‌ی آموزش fit می‌کنیم؟",["سریع‌تر است","برای جلوگیری از نشت اطلاعات آزمون","مدل نیاز دارد","فرقی ندارد"],1,"μ و σ آزمون نباید روی آموزش اثر بگذارند."),
 quiz("در داده‌ی ۹۹٪ منفی، مدل «همیشه منفی» چه دقتی دارد؟",["۵۰٪","۹۹٪ با recall صفر","۰٪","۱۰۰٪"],1,"دقت در داده‌ی نامتوازن گمراه‌کننده است."),
 quiz("بیش‌برازش یعنی؟",["خطای آموزش و آزمون هر دو بالا","خطای آموزش کم ولی آزمون زیاد","مدل خیلی ساده است","داده کم است فقط"],1,"مدل نویز آموزش را حفظ کرده است."),
 quiz("Lasso چه ویژگی‌ای دارد؟",["همه‌ی وزن‌ها را بزرگ می‌کند","برخی وزن‌ها را دقیقاً صفر می‌کند","فقط برای دسته‌بندی است","نیاز به مقیاس‌دهی ندارد"],1,"جریمه‌ی L1 انتخاب ویژگی انجام می‌دهد."),
 quiz("کدام برای داده‌ی زمانی درست است؟",["تقسیم تصادفی","تقسیم بر اساس زمان؛ آموزش قبل از آزمون","فقط CV معمولی","نیازی به تقسیم نیست"],1,"تقسیم تصادفی آینده را به آموزش نشت می‌دهد."),
 quiz("AUC=۰٫۵ یعنی؟",["مدل کامل","مدل در حد حدس تصادفی","مدل معکوس","خطای صفر"],1,"مدل نمی‌تواند مثبت را از منفی تفکیک کند."),
 quiz("Pipeline چه مزیت مهمی دارد؟",["مدل را دقیق‌تر می‌کند","جلوگیری از نشت و تکرارپذیری","حافظه را کم می‌کند","داده را حذف می‌کند"],1,"همه‌ی مراحل داخل CV فقط روی آموزش fit می‌شوند."),
]}
CHALLENGE={1:{"task":"تابع precision_recall_f1(y_true, y_pred) را بدون sklearn بنویس که برای دو لیست ۰/۱ سه‌تایی (precision, recall, f1) را برگرداند (اگر مخرج صفر بود ۰).",
 "hint1":"TP، FP و FN را با شمارش جفت‌ها بساز.",
 "hint2":"precision=TP/(TP+FP)، recall=TP/(TP+FN)، f1=2PR/(P+R) و مراقب مخرج صفر باش.",
 "solution":"def precision_recall_f1(y_true, y_pred):\n    tp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)\n    fp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)\n    fn = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 0)\n    p = tp / (tp + fp) if tp + fp else 0\n    r = tp / (tp + fn) if tp + fn else 0\n    f1 = 2 * p * r / (p + r) if p + r else 0\n    return p, r, f1\n\nprint(precision_recall_f1([1,1,0,0,1],[1,0,0,1,1]))  # (0.666..., 0.666..., 0.666...)"}}
