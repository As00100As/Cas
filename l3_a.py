import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']
NOTE="<p><b>توجه:</b> کتابخانه‌های بزرگ (PyTorch، transformers، مدل‌های واقعی) در مرورگر در دسترس نیستند؛ مفهوم را با NumPy/پایتون خالص اجرا می‌کنیم و کد کتابخانه‌ای را به‌صورت بلوک «اجرا نشده» می‌آوریم.</p>"

add(3,1,"""<p><b>Transformer</b> (۲۰۱۷، «Attention Is All You Need») با حذف بازگشت و تکیه بر توجه، آموزش موازی و مقیاس‌پذیری عظیمی داد. هر <b>بلوک</b>: ۱) <b>توجه چندسر</b> (هر توکن به بقیه نگاه می‌کند)، ۲) <b>شبکه‌ی پیش‌خور</b> (MLP دو لایه روی هر موقعیت به‌طور مستقل)، با <b>اتصال باقیمانده</b> و <b>LayerNorm</b> دور هر زیرلایه. بلوک‌ها روی هم انباشته می‌شوند. ورودی: embedding توکن + اطلاعات موقعیت. خروجی: بردار برای هر موقعیت. نسخه‌ی مدرن «Pre-LN»: <code class='inline'>x = x + Attn(LN(x))</code> و <code class='inline'>x = x + MLP(LN(x))</code>.""",
"شکل‌ها را در یک بلوک دنبال کن و تعداد پارامترهای بلوک را برای d=768 حساب کن.",
py="""import numpy as np
d, h, T, ff = 64, 4, 10, 256
rng = np.random.default_rng(0); x = rng.normal(size=(T, d))
ln = lambda x: (x - x.mean(-1, keepdims=True)) / np.sqrt(x.var(-1, keepdims=True) + 1e-5)
Wq, Wk, Wv, Wo = [rng.normal(size=(d, d)) * d ** -.5 for _ in range(4)]; W1 = rng.normal(size=(d, ff)) * d ** -.5; W2 = rng.normal(size=(ff, d)) * ff ** -.5
def attn(z):
    q, k, v = z @ Wq, z @ Wk, z @ Wv; dh = d // h; out = []
    for i in range(h):
        s = q[:, i * dh:(i + 1) * dh] @ k[:, i * dh:(i + 1) * dh].T / np.sqrt(dh); a = np.exp(s - s.max(1, keepdims=True)); a /= a.sum(1, keepdims=True); out.append(a @ v[:, i * dh:(i + 1) * dh])
    return np.concatenate(out, -1) @ Wo
gelu = lambda z: .5 * z * (1 + np.tanh(.79788456 * (z + .044715 * z ** 3)))
y = x + attn(ln(x)); y = y + gelu(ln(y) @ W1) @ W2
print("ورودی", x.shape, "→ خروجی", y.shape)
D = 768; print("پارامتر بلوک GPT-2 small:", 4 * D * D + 2 * D * 4 * D, "≈", round((4 * D * D + 8 * D * D) / 1e6, 1), "میلیون")""",packages=NP)

add(3,2,"""<p><b>self-attention</b> گام‌به‌گام: برای ورودی X (T×d): <code class='inline'>Q=XW_Q, K=XW_K, V=XW_V</code>؛ امتیازها <code class='inline'>S=QKᵀ/√d_k</code> (ماتریس T×T)؛ <b>ماسک علّی</b> (برای مدل‌های تولیدی: توکن i فقط به j≤i نگاه کند: بالای قطر را −∞ کن)؛ <code class='inline'>A=softmax(S)</code>؛ خروجی <code class='inline'>AV</code>. چرا تقسیم بر √d_k؟ تا با بزرگ شدن بُعد، حاصل‌ضرب‌ها softmax را اشباع نکنند. هزینه‌ی حافظه/زمان <code class='inline'>O(T²)</code> که محدودیت طول متن است.""",
"ماسک علّی را اعمال کن و نشان بده ردیف اول فقط به خودش توجه دارد.",
py="""import numpy as np
def self_attention(X, Wq, Wk, Wv, causal=True):
    Q, K, V = X @ Wq, X @ Wk, X @ Wv; S = Q @ K.T / np.sqrt(K.shape[-1])
    if causal: S = np.where(np.triu(np.ones_like(S), 1) == 1, -np.inf, S)
    A = np.exp(S - S.max(1, keepdims=True)); A /= A.sum(1, keepdims=True); return A @ V, A
rng = np.random.default_rng(0); T, d = 5, 8; X = rng.normal(size=(T, d)); W = [rng.normal(size=(d, d)) for _ in range(3)]
out, A = self_attention(X, *W); print(np.round(A, 2)); print("ردیف اول فقط خودش:", A[0, 0] == 1.0)
out2, _ = self_attention(X[:3], *W); print("علّی: خروجی ۳ توکن اول با و بدون آینده یکسان:", np.allclose(out[:3], out2))
big = rng.normal(size=(1000, 512)); print("انحراف حاصل‌ضرب بدون مقیاس:", (big[:500] @ big[500:].T).std().round(1), "| با √d:", ((big[:500] @ big[500:].T) / np.sqrt(512)).std().round(2))""",packages=NP)

add(3,3,"""<p><b>چندسر</b>: به‌جای یک توجه، h توجه موازی روی زیرفضاهای کوچک‌تر (d/h بُعدی)؛ هر سر الگوی متفاوتی می‌یابد (نحو، هم‌ارجاعی، موقعیت). خروجی‌ها الحاق و با W_O ترکیب می‌شوند. <b>کدگذاری موقعیت</b>: توجه ذاتاً ترتیب را نمی‌داند (جایگشت‌ناوردا)، پس موقعیت تزریق می‌شود: <b>سینوسی</b> (اصلی): <code class='inline'>PE(p,2i)=sin(p/10000^(2i/d))</code>؛ <b>آموخته‌شده</b>؛ <b>RoPE</b> (چرخش Q و K بر اساس موقعیت؛ استاندارد LLaMA) و <b>ALiBi</b>. RoPE فاصله‌ی نسبی را در ضرب داخلی می‌گذارد.""",
"RoPE را پیاده کن و نشان بده امتیاز فقط به فاصله‌ی نسبی وابسته است.",
py="""import numpy as np
def sinusoidal(T, d):
    pos = np.arange(T)[:, None]; i = np.arange(d // 2)[None]; ang = pos / 10000 ** (2 * i / d)
    pe = np.zeros((T, d)); pe[:, 0::2], pe[:, 1::2] = np.sin(ang), np.cos(ang); return pe
pe = sinusoidal(50, 16); print(pe.shape, "| شباهت موقعیت‌های نزدیک > دور:", (pe[10] @ pe[11] > pe[10] @ pe[40]))
def rope(x, pos, base=10000):
    d = x.shape[-1]; th = pos / base ** (np.arange(0, d, 2) / d); x1, x2 = x[0::2], x[1::2]
    return np.stack([x1 * np.cos(th) - x2 * np.sin(th), x1 * np.sin(th) + x2 * np.cos(th)], 1).ravel()
rng = np.random.default_rng(0); q, k = rng.normal(size=8), rng.normal(size=8)
for (m, n) in [(3, 1), (13, 11), (103, 101)]: print(f"موقعیت‌ها ({m},{n}) فاصله 2: امتیاز {rope(q, m) @ rope(k, n):.4f}")
print("فاصله‌ی ۵:", round(rope(q, 10) @ rope(k, 5), 4), round(rope(q, 20) @ rope(k, 15), 4))""",packages=NP)

add(3,4,"""<p>یک <b>Transformer کوچک کاراکتری</b> کامل را بدون کتابخانه‌ی عمیق می‌سازیم: embedding، توجه علّی تک‌سر، MLP، و پیش‌بینی توکن بعدی. آموزش نیازمند پس‌انتشار است؛ برای اینکه کد در مرورگر فشرده بماند، <b>پیش‌روی کامل</b> را با NumPy می‌نویسیم و سر خروجی (و ماتریس‌های توجه) را با <b>حل کمترمربعات/رگرسیون لجستیک روی ویژگی‌های ثابت</b> آموزش می‌دهیم (روش «reservoir/random features») تا نشان دهیم معماری چطور اطلاعات بافت را می‌گیرد. آموزش کامل با autograd در کد PyTorch زیر آمده است (nanoGPT از کارپاتی الگوی خوبی است).""",
"طول زمینه را از ۱ به ۴ ببر و ببین پیش‌بینی بهتر می‌شود.",
py="""import numpy as np
from sklearn.linear_model import LogisticRegression
text = "سلام دنیا سلام پایتون سلام دنیا سلام هوش " * 20
chars = sorted(set(text)); ix = {c: i for i, c in enumerate(chars)}; V = len(chars); data = np.array([ix[c] for c in text])
rng = np.random.default_rng(0); d = 32; E = rng.normal(size=(V, d)); P = rng.normal(size=(8, d)) * .5
Wq, Wk, Wv = [rng.normal(size=(d, d)) * d ** -.5 for _ in range(3)]
def features(ctx):
    x = E[ctx] + P[:len(ctx)]; q, k, v = x @ Wq, x @ Wk, x @ Wv; s = q[-1] @ k.T / np.sqrt(d); a = np.exp(s - s.max()); a /= a.sum(); return np.r_[a @ v, x[-1]]
for T in (1, 2, 4, 6):
    Xf = np.array([features(data[i - T:i]) for i in range(T, len(data))]); y = data[T:]
    clf = LogisticRegression(max_iter=300).fit(Xf[:-100], y[:-100]); print(f"طول زمینه {T}: دقت پیش‌بینی نویسه‌ی بعد {clf.score(Xf[-100:], y[-100:]):.2f}")""",packages=SK,
extra=code("nanoGPT-style در PyTorch (اجرا نشده)","""class Block(nn.Module):
    def __init__(s, d, h):
        super().__init__(); s.ln1, s.ln2 = nn.LayerNorm(d), nn.LayerNorm(d)
        s.attn = nn.MultiheadAttention(d, h, batch_first=True)
        s.mlp = nn.Sequential(nn.Linear(d, 4*d), nn.GELU(), nn.Linear(4*d, d))
    def forward(s, x):
        m = torch.triu(torch.ones(x.size(1), x.size(1), dtype=torch.bool), 1)
        x = x + s.attn(s.ln1(x), s.ln1(x), s.ln1(x), attn_mask=m)[0]
        return x + s.mlp(s.ln2(x))"""))

add(3,5,"""<p><b>توکنایزر زیرکلمه‌ای</b>: واژگان کلمه‌ای حجیم و ناتوان در کلمات ناشناخته؛ نویسه‌ای دنباله‌ی بسیار بلند. <b>BPE</b> (Byte-Pair Encoding): از نویسه‌ها (یا بایت‌ها) شروع کن و پیاپی <b>پرتکرارترین جفت</b> مجاور را ادغام کن تا واژگان به اندازه‌ی دلخواه برسد؛ در کدگذاری همان ادغام‌ها به‌ترتیب اعمال می‌شود. <b>SentencePiece</b> مستقل از فاصله و زبان (فارسی/ژاپنی) روی متن خام؛ <b>Unigram</b> روش احتمالی. بایت‌سطح (GPT-2) هیچ‌گاه UNK ندارد. <b>نکته‌ی فارسی</b>: توکنایزرهای انگلیسی‌محور فارسی را به توکن‌های بسیار بیشتر می‌شکنند → هزینه و تأخیر بیشتر.""",
"BPE را از صفر آموزش بده و کدگذاری/رمزگشایی را بررسی کن.",
py="""from collections import Counter
def train_bpe(text, n_merges):
    words = [tuple(w) + ("</w>",) for w in text.split()]; vocab = Counter(words); merges = []
    for _ in range(n_merges):
        pairs = Counter()
        for w, f in vocab.items():
            for a, b in zip(w, w[1:]): pairs[(a, b)] += f
        if not pairs: break
        best = max(pairs, key=pairs.get); merges.append(best); new = Counter()
        for w, f in vocab.items():
            out, i = [], 0
            while i < len(w):
                if i < len(w) - 1 and (w[i], w[i + 1]) == best: out.append(w[i] + w[i + 1]); i += 2
                else: out.append(w[i]); i += 1
            new[tuple(out)] += f
        vocab = new
    return merges
def encode(word, merges):
    w = list(word) + ["</w>"]
    for a, b in merges:
        i = 0
        while i < len(w) - 1:
            if (w[i], w[i + 1]) == (a, b): w[i:i + 2] = [a + b]
            else: i += 1
    return w
text = "low lower lowest low low newer newest wider " * 5
m = train_bpe(text, 10); print(m[:5])
for w in ("lowest", "newest", "unseen"): print(w, "→", encode(w, m))
print("رمزگشایی:", "".join(encode("lower", m)).replace("</w>", ""))
print("فارسی:", "سلام".encode("utf-8"), "→", len("سلام".encode("utf-8")), "بایت برای ۴ نویسه")""")

add(3,6,"""<p><b>مدل زبانی</b> توزیع احتمال دنباله‌ی توکن‌ها را می‌آموزد: <code class='inline'>P(w₁…w_T)=Π P(wₜ|w&lt;ₜ)</code>. آموزش: <b>پیش‌بینی توکن بعدی</b> با آنتروپی متقاطع روی متن عظیم بدون برچسب (خودنظارتی). معیار: <b>perplexity</b> = <code class='inline'>exp(میانگین هزینه)</code> («به‌طور مؤثر بین چند توکن مردد است»). <b>رمزگشایی</b>: حریصانه، beam، نمونه‌گیری با <b>دما</b> (T کوچک = قطعی‌تر)، <b>top-k</b>، <b>top-p</b> (nucleus). مدل n-gram نمونه‌ی کلاسیک است. یک مدل بیگرام/تری‌گرام با هموارسازی و perplexity می‌سازیم.""",
"دما و top-p را به نمونه‌گیری اضافه کن.",
py="""import numpy as np, collections, math
corpus = "من به مدرسه رفتم . من به خانه رفتم . او به مدرسه رفت . من کتاب خواندم . او کتاب خواند .".split()
V = sorted(set(corpus)); ix = {w: i for i, w in enumerate(V)}; C = np.ones((len(V), len(V)))               # هموارسازی لاپلاس
for a, b in zip(corpus, corpus[1:]): C[ix[a], ix[b]] += 1
P = C / C.sum(1, keepdims=True)
def perplexity(tokens): return math.exp(-np.mean([math.log(P[ix[a], ix[b]]) for a, b in zip(tokens, tokens[1:])]))
print("perplexity دیده‌شده:", round(perplexity("من به مدرسه رفتم .".split()), 2), "| نامعمول:", round(perplexity("رفتم مدرسه به من .".split()), 2))
rng = np.random.default_rng(1)
def sample(prev, T=1.0, top_p=1.0):
    p = P[ix[prev]] ** (1 / T); p /= p.sum(); o = np.argsort(-p); cs = np.cumsum(p[o]); keep = o[: int(np.searchsorted(cs, top_p)) + 1]
    q = np.zeros_like(p); q[keep] = p[keep]; q /= q.sum(); return V[rng.choice(len(V), p=q)]
def gen(T, top_p, n=8):
    w, out = "من", ["من"]
    for _ in range(n): w = sample(w, T, top_p); out.append(w)
    return " ".join(out)
print("T=0.2:", gen(.2, 1)); print("T=1.5:", gen(1.5, 1)); print("top-p=0.5:", gen(1, .5))""",packages=NP)

add(3,7,"""<p><b>پیش‌آموزش</b> روی تریلیون‌ها توکن مدل را همه‌منظوره می‌کند. <b>قوانین مقیاس</b> (Kaplan 2020، Chinchilla 2022): خطا با توان کوچکی از <b>پارامترها N</b>، <b>داده D</b> و <b>محاسبه C</b> کاهش می‌یابد: <code class='inline'>L ≈ A/N^α + B/D^β + L∞</code>. Chinchilla: برای محاسبه‌ی ثابت، N و D باید هم‌رشد کنند (≈ ۲۰ توکن به‌ازای هر پارامتر). محاسبه‌ی آموزش ≈ <code class='inline'>6·N·D</code> FLOP. پیامد: مدل‌های کوچک‌تر با داده‌ی بیشتر ارزان‌تر در استنتاج. <b>توانایی‌های ظهوریابنده</b> (emergent) با مقیاس و بحث درباره‌ی «سراب» بودنشان. محاسبه‌گر منابع می‌سازیم.""",
"هزینه‌ی آموزش مدل ۷ میلیاردی با ۱٫۴ تریلیون توکن را بر حسب GPU-ساعت تخمین بزن.",
py="""def train_flops(N, D): return 6 * N * D
def chinchilla_tokens(N): return 20 * N
for N in (1e9, 7e9, 70e9): print(f"N={N:.0e}: توکن بهینه {chinchilla_tokens(N):.1e} | FLOP {train_flops(N, chinchilla_tokens(N)):.2e}")
N, D = 7e9, 1.4e12; F = train_flops(N, D); gpu = 312e12 * 0.4                      # A100 bf16 با بهره‌وری ۴۰٪
hours = F / gpu / 3600; print(f"۷B × 1.4T: {F:.2e} FLOP ≈ {hours:,.0f} GPU-ساعت ≈ {hours / 24 / 512:.1f} روز روی ۵۱۲ GPU")
import numpy as np
Ns = np.array([1e7, 1e8, 1e9, 1e10]); L = 1.7 + 400 / Ns ** .34; print("منحنی مقیاس (نمونه):", L.round(2))
mem = lambda N, bytes_per=2: N * bytes_per / 1e9; print("حافظه‌ی وزن‌ها 7B در fp16:", mem(7e9), "GB | آموزش با Adam ≈ 16 بایت/پارامتر:", 7e9 * 16 / 1e9, "GB")""")

add(3,8,"""<p><b>BERT</b> (۲۰۱۸): Transformer فقط‌رمزگذار با توجه <b>دوطرفه</b>. پیش‌آموزش: <b>مدل زبانی ماسک‌شده</b> (۱۵٪ توکن‌ها ماسک و بازیابی می‌شوند) و پیش‌بینی جمله‌ی بعد. توکن <code class='inline'>[CLS]</code> نمایش کل جمله است. برای فاین‌تیون: سر کوچک روی [CLS] (دسته‌بندی) یا روی هر توکن (برچسب‌گذاری موجودیت‌ها). برای <b>درک</b> متن (دسته‌بندی، NER، تشابه، جست‌وجو) عالی؛ برای تولید مناسب نیست. خانواده: RoBERTa، DistilBERT، ALBERT، و مدل‌های فارسی (ParsBERT، mBERT، XLM-R). ماسک‌کردن و بازیابی را با مدل شمارشی شبیه‌سازی می‌کنیم.""",
"با بافت دوطرفه جای خالی را پر کن و با بافت یک‌طرفه مقایسه کن.",
py="""import re, collections
corpus = ["من کتاب را خواندم", "او کتاب را نوشت", "ما کتاب را خریدیم", "من نامه را نوشتم", "او نامه را خواند", "ما غذا را خوردیم", "من غذا را پختم", "او غذا را خورد"] * 3
left = collections.defaultdict(collections.Counter); both = collections.defaultdict(collections.Counter)
for s in corpus:
    w = s.split()
    for i in range(len(w)):
        left[tuple(w[max(0, i - 2):i])][w[i]] += 1
        both[(tuple(w[max(0, i - 2):i]), tuple(w[i + 1:i + 3]))][w[i]] += 1
q = "او ___ را خورد".split(); i = q.index("___")
ctx_l = tuple(q[max(0, i - 2):i]); ctx_b = (ctx_l, tuple(q[i + 1:i + 3]))
print("یک‌طرفه:", left[ctx_l].most_common(3)); print("دوطرفه:", both[ctx_b].most_common(3), "← «خورد» بعد از را، پس غذا")
import random; random.seed(0); toks = "من کتاب را خواندم و رفتم".split(); masked = [("[MASK]" if random.random() < .3 else t) for t in toks]; print("ماسک ۱۵٪-۳۰٪:", masked)""",
extra=code("transformers (اجرا نشده)","""from transformers import pipeline
fill = pipeline("fill-mask", model="HooshvareLab/bert-fa-base-uncased")
fill("من به [MASK] رفتم")"""))

add(3,9,"""<p><b>GPT</b> و خانواده‌ی فقط‌رمزگشا: Transformer با ماسک علّی که توکن بعدی را پیش‌بینی می‌کند. این هدف ساده با مقیاس، توانایی‌های شگفت‌انگیز می‌دهد: <b>یادگیری درون‌بافتی</b> (few-shot: نمونه‌ها را در پرامپت بگذار؛ مدل الگو را می‌گیرد). مسیر: GPT-1/2/3 → InstructGPT/ChatGPT (هم‌ترازی) → GPT-4، LLaMA، Mistral، Qwen، Claude. تفاوت پایه (base) و دستورپذیر (instruct/chat): مدل پایه فقط متن را ادامه می‌دهد. <b>پنجره‌ی زمینه</b> حد توکن‌های ورودی+خروجی است. شبیه‌سازی یادگیری درون‌بافتی با یک «مدل» الگوشناس ساده.""",
"با نمونه‌های بیشتر در پرامپت دقت کلاس‌بندی مدل ساختگی را بالا ببر.",
py="""import numpy as np
from collections import Counter
def icl_predict(examples, query):
    # «مدل» ساختگی: از نمونه‌های پرامپت کلمه‌های نشانه‌ی هر برچسب را می‌آموزد
    score = {}
    for text, label in examples:
        for w in text.split(): score.setdefault(label, Counter())[w] += 1
    best = max(score, key=lambda l: sum(score[l][w] for w in query.split()) - sum(sum(score[o][w] for w in query.split()) for o in score if o != l) / max(1, len(score) - 1))
    return best
pool = [("عالی و خوب", "مثبت"), ("بسیار بد", "منفی"), ("خیلی خوب بود", "مثبت"), ("افتضاح و بد", "منفی"), ("فوق العاده عالی", "مثبت"), ("ضعیف و بد", "منفی")]
tests = [("خوب و عالی", "مثبت"), ("خیلی بد", "منفی"), ("فوق العاده", "مثبت"), ("ضعیف", "منفی")]
for k in (0, 2, 4, 6):
    ex = pool[:k]; acc = np.mean([(icl_predict(ex, t) == l) if ex else False for t, l in tests]); print(f"{k} نمونه در پرامپت: دقت {acc:.2f}")
prompt = "\\n".join(f"متن: {t}\\nبرچسب: {l}" for t, l in pool[:2]) + "\\nمتن: خوب و عالی\\nبرچسب:"; print(prompt)""",packages=NP)

add(3,10,"""<p><b>رمزگذار-رمزگشا</b> (T5، BART، mT5، Whisper): رمزگذار ورودی را دوطرفه می‌فهمد و رمزگشا با <b>توجه متقاطع</b> (Q از رمزگشا، K/V از رمزگذار) خروجی را تولید می‌کند. مناسب وظایف «ورودی→خروجی» مشخص: ترجمه، خلاصه‌سازی، تبدیل متن به SQL. T5 همه‌ی وظایف را «متن به متن» می‌کند («translate English to German: …»). امروز فقط‌رمزگشاها با پرامپت اغلب هر دو را انجام می‌دهند، ولی encoder-decoder برای وظایف ساختاریافته با حافظه‌ی کم هنوز کارآمد است. توجه متقاطع را نشان می‌دهیم.""",
"توجه متقاطع را برای رمزگشا با ۳ موقعیت و رمزگذار با ۵ موقعیت اجرا کن.",
py="""import numpy as np
def softmax(x): e = np.exp(x - x.max(-1, keepdims=True)); return e / e.sum(-1, keepdims=True)
rng = np.random.default_rng(0); d = 16
enc = rng.normal(size=(5, d)); dec = rng.normal(size=(3, d))
Wq, Wk, Wv = [rng.normal(size=(d, d)) * d ** -.5 for _ in range(3)]
Q, K, V = dec @ Wq, enc @ Wk, enc @ Wv; A = softmax(Q @ K.T / np.sqrt(d)); out = A @ V
print("ماتریس توجه متقاطع:", A.shape, "(رمزگشا × رمزگذار) | خروجی:", out.shape, "| ردیف‌ها مجموع ۱:", np.allclose(A.sum(1), 1))
tasks = {"ترجمه": "translate fa to en: سلام", "خلاصه": "summarize: ...", "پرسش": "question: ... context: ..."}
for k, v in tasks.items(): print(f"{k}: {v}")""",packages=NP)

add(3,11,"""<p><b>SFT</b> (فاین‌تیون نظارت‌شده): مدل پایه را روی نمونه‌های «دستور → پاسخ مطلوب» آموزش می‌دهیم تا دستورپذیر شود. نکات: ۱) فقط <b>توکن‌های پاسخ</b> در هزینه حساب می‌شوند (ماسک پرامپت)؛ ۲) <b>قالب گفتگو</b> (system/user/assistant) باید در آموزش و استنتاج یکسان باشد؛ ۳) <b>کیفیت بر کمیت</b>: ۱–۱۰ هزار نمونه‌ی تمیز و متنوع اغلب کافی (LIMA)؛ ۴) نرخ یادگیری کوچک و ۱–۳ epoch؛ ۵) پایش بیش‌برازش و فراموشی. ساخت داده و ماسک هزینه را می‌سازیم.""",
"ماسک هزینه را طوری بساز که فقط توکن‌های پاسخ دستیار حساب شوند.",
py="""def format_chat(msgs):
    text, mask = [], []
    for m in msgs:
        head = f"<|{m['role']}|>\\n"; body = m["content"] + "<|end|>\\n"
        toks = (head + body).split(" ")                            # توکنایزر ساختگی
        text += toks; mask += [1 if m["role"] == "assistant" else 0] * len(toks)
    return text, mask
chat = [{"role": "user", "content": "پایتون چیست"}, {"role": "assistant", "content": "یک زبان برنامه‌نویسی است"}]
t, m = format_chat(chat)
for tok, mk in zip(t, m): print(mk, repr(tok))
losses = [2.0, 1.5, 3.0, 1.0, 0.5]; print("هزینه فقط روی توکن پاسخ:", sum(l for l, k in zip(losses, m[:5]) if k) / max(1, sum(m[:5])))
good = ["نمونه‌ی متنوع و دقیق"] * 3; print("کیفیت > کمیت: ۱۰۰۰ نمونه‌ی تمیز می‌تواند از ۱۰۰ هزار نمونه‌ی نویزی بهتر باشد")""")

add(3,12,"""<p><b>RLHF</b> رفتار مدل را با ترجیح انسانی تنظیم می‌کند: ۱) SFT؛ ۲) <b>مدل پاداش</b>: انسان‌ها بین پاسخ‌ها رتبه می‌دهند؛ مدل با هزینه‌ی <b>Bradley–Terry</b> یاد می‌گیرد <code class='inline'>P(A≻B)=σ(r(A)−r(B))</code>؛ ۳) بهینه‌سازی سیاست (PPO) برای بیشینه‌ی پاداش با <b>جریمه‌ی KL</b> نسبت به مدل مرجع تا مدل از زبان طبیعی دور نشود. خطرات: <b>هک پاداش</b> (مدل از ضعف پاداش‌سنج سوءاستفاده می‌کند؛ مثلاً پاسخ طولانی یا چاپلوسی)، تنوع کم‌شونده. هدف: مفید، صادق، بی‌خطر. مدل پاداش بردار ویژگی ساده را با داده‌ی ترجیحی آموزش می‌دهیم.""",
"طول پاسخ را به ویژگی‌ها اضافه کن و ببین مدل پاداش به «طولانی‌بودن» سوگیری پیدا می‌کند.",
py="""import numpy as np
rng = np.random.default_rng(0)
true_w = np.array([2.0, -1.0, 0.0]); n = 2000                      # [کیفیت، خطا، طول]
A = rng.normal(size=(n, 3)); B = rng.normal(size=(n, 3))
pref = (rng.random(n) < 1 / (1 + np.exp(-(A - B) @ true_w))).astype(float)       # برچسب‌های انسانی نویزی
w = np.zeros(3)
for _ in range(500):
    p = 1 / (1 + np.exp(-(A - B) @ w)); w += 0.5 * (A - B).T @ (pref - p) / n          # Bradley-Terry
print("وزن‌های یادگرفته‌شده:", w.round(2), "| واقعی:", true_w)
def kl_penalized(reward, kl, beta=.1): return reward - beta * kl
print("پاداش با جریمه‌ی KL:", kl_penalized(5.0, 10.0), kl_penalized(5.0, 60.0), "← مدلی که خیلی دور شود جریمه می‌شود")
bias = np.c_[A[:, :2], rng.normal(size=n)]; length_pref = (bias[:, 2] > 0) | (pref > .5); print("دقت مدل پاداش:", (((A - B) @ w > 0) == (pref > .5)).mean().round(3))""",packages=NP)

add(3,13,"""<p><b>DPO</b> (Direct Preference Optimization): بدون مدل پاداش جدا و بدون RL، مستقیم از جفت‌های ترجیحی (پاسخ برگزیده y_w، رد‌شده y_l) آموزش می‌دهد. هزینه: <code class='inline'>−log σ(β[log π(y_w|x)/π_ref(y_w|x) − log π(y_l|x)/π_ref(y_l|x)])</code>؛ مدل نسبت به مرجع، پاسخ برگزیده را محتمل‌تر و ردشده را کم‌احتمال‌تر می‌کند. ساده‌تر، پایدارتر و ارزان‌تر از PPO؛ نسخه‌ها: IPO، KTO، ORPO. هم‌ترازی (alignment) هدفی وسیع‌تر است: مدل کاری را انجام دهد که ما <b>واقعاً</b> می‌خواهیم. هزینه‌ی DPO را محاسبه و رفتار آن را بررسی می‌کنیم.""",
"β را تغییر بده و ببین اندازه‌ی گرادیان چطور تغییر می‌کند.",
py="""import numpy as np
sig = lambda z: 1 / (1 + np.exp(-z))
def dpo_loss(lp_w, lp_l, ref_w, ref_l, beta=.1):
    margin = beta * ((lp_w - ref_w) - (lp_l - ref_l)); return -np.log(sig(margin)), margin
cases = {"شروع (برابر مرجع)": (-10, -10, -10, -10), "برگزیده محتمل‌تر": (-8, -12, -10, -10), "اشتباه: ردشده محتمل‌تر": (-12, -8, -10, -10)}
for k, v in cases.items(): l, m = dpo_loss(*v); print(f"{k:24} هزینه {l:.3f} حاشیه {m:+.2f}")
for beta in (.01, .1, 1.0):
    lp_w, h = -10.0, 1e-5; f = lambda x: dpo_loss(x, -10, -10, -10, beta)[0]; print(f"β={beta}: |dL/dlogπ_w| = {abs((f(lp_w + h) - f(lp_w - h)) / (2 * h)):.3f}")
print("DPO: بدون مدل پاداش، بدون نمونه‌گیری، فقط یک مرجع منجمد")""",packages=NP)

add(3,14,"""<p><b>LoRA</b> (Low-Rank Adaptation): به‌جای به‌روزرسانی ماتریس سنگین W (d×k)، آن را منجمد می‌کنیم و <b>به‌روزرسانی رتبه‌پایین</b> <code class='inline'>ΔW = B·A</code> (B: d×r، A: r×k با r≪d) را یاد می‌گیریم؛ <code class='inline'>W' = W + (α/r)BA</code>. پارامترهای قابل‌آموزش ۰٫۱–۱٪؛ حافظه‌ی گرادیان و بهینه‌ساز بسیار کم؛ می‌توان چند آداپتر برای چند وظیفه ساخت و حتی ادغام‌شان کرد. <b>QLoRA</b>: مدل پایه در ۴ بیت کوانتیزه (NF4) + آداپتر LoRA با دقت بالا؛ مدل ۶۵B روی یک GPU ۴۸ گیگی. محاسبه‌ی صرفه‌جویی و عملکرد LoRA را نشان می‌دهیم.""",
"با r مختلف نشان بده خطای تقریب رتبه‌پایین چطور تغییر می‌کند.",
py="""import numpy as np
rng = np.random.default_rng(0); d, k, r = 1024, 1024, 8
print("کامل:", d * k, "| LoRA:", r * (d + k), "→ نسبت", round(r * (d + k) / (d * k) * 100, 2), "٪")
W = rng.normal(size=(256, 256)); target = rng.normal(size=(256, 16)) @ rng.normal(size=(16, 256)) * .1      # تغییر لازم ذاتاً رتبه‌پایین
U, S, Vt = np.linalg.svd(target)
for rr in (1, 4, 16, 32): approx = (U[:, :rr] * S[:rr]) @ Vt[:rr]; print(f"r={rr:2}: خطای نسبی {np.linalg.norm(target - approx) / np.linalg.norm(target):.3f}")
B = np.zeros((256, 8)); A = rng.normal(size=(8, 256)) * .01; print("شروع: ΔW صفر است:", np.allclose(B @ A, 0), "← مدل در ابتدا همان مدل پایه")
x = rng.normal(size=256); alpha = 16; B = rng.normal(size=(256, 8)) * .1; y = W @ x + (alpha / 8) * (B @ (A @ x)); print("خروجی:", y.shape)""",packages=NP,
extra=code("peft (اجرا نشده)","""from peft import LoraConfig, get_peft_model
cfg = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"], lora_dropout=.05, task_type="CAUSAL_LM")
model = get_peft_model(base_model, cfg); model.print_trainable_parameters()   # ≈ 0.1%"""))

add(3,15,"""<p><b>کوانتیزاسیون</b>: نمایش وزن‌ها (و فعال‌سازی‌ها) با بیت کمتر (fp16 → int8 → int4) برای کم‌کردن حافظه و تسریع استنتاج. <b>متقارن</b> <code class='inline'>q=round(x/s)</code> با <code class='inline'>s=max|x|/127</code>؛ <b>نامتقارن</b> با نقطه‌ی صفر. دقت با <b>مقیاس به‌ازای کانال/گروه</b> بهتر می‌شود. روش‌ها: PTQ (بعد از آموزش؛ GPTQ، AWQ)، QAT (حین آموزش)، NF4. مبادله: حافظه ۲–۴× کمتر با افت کیفیت اندک؛ مقادیر پرت (outlier) چالش اصلی‌اند. فرمول‌های int8 و int4 با خطای بازسازی را آزمایش می‌کنیم.""",
"مقیاس‌دهی گروهی را اضافه کن و ببین خطای int4 چقدر کم می‌شود.",
py="""import numpy as np
rng = np.random.default_rng(0); w = rng.normal(0, .02, 4096).astype(np.float32); w[::512] *= 20          # چند پرت
def quant(x, bits, group=None):
    qmax = 2 ** (bits - 1) - 1; out = np.empty_like(x)
    groups = [slice(0, len(x))] if group is None else [slice(i, i + group) for i in range(0, len(x), group)]
    for g in groups: s = np.abs(x[g]).max() / qmax; out[g] = np.round(x[g] / s).clip(-qmax - 1, qmax) * s
    return out
mse = lambda a: float(np.mean((w - a) ** 2))
for bits in (8, 4):
    print(f"int{bits}: کل تنسور {mse(quant(w, bits)):.2e} | گروه ۶۴ تایی {mse(quant(w, bits, 64)):.2e}")
print("حافظه‌ی ۷B:", {b: f"{7e9 * b / 8 / 1e9:.1f} GB" for b in (16, 8, 4)})""",packages=NP)

add(3,16,"""<p><b>Hugging Face</b>: مرکز مدل‌ها و داده‌ها. کتابخانه‌ها: <code class='inline'>transformers</code> (<code class='inline'>AutoTokenizer/AutoModelForCausalLM</code>)، <code class='inline'>datasets</code> (بارگذاری و پردازش کارای داده با Arrow)، <code class='inline'>peft</code>، <code class='inline'>trl</code> (SFT/DPO)، <code class='inline'>accelerate</code>. <code class='inline'>pipeline("text-generation", model=...)</code> سریع‌ترین شروع است. نکات: بررسی <b>مجوز</b> مدل/داده، اندازه، قالب چت (<code class='inline'>tokenizer.apply_chat_template</code>)، <code class='inline'>torch_dtype</code> و <code class='inline'>device_map="auto"</code>. چون به شبکه و مدل‌های حجیم نیاز است، در مرورگر اجرا نمی‌شود؛ همراه این درس یک ساختار <b>مخزن مدل</b> و بارگذاری تنبل داده را شبیه‌سازی می‌کنیم.""",
"روی سیستم خودت مدل کوچکی را با pipeline اجرا کن.",
py="""import json
config = {"architectures": ["LlamaForCausalLM"], "hidden_size": 4096, "num_hidden_layers": 32, "num_attention_heads": 32, "vocab_size": 32000, "max_position_embeddings": 4096}
d, L, V = config["hidden_size"], config["num_hidden_layers"], config["vocab_size"]
params = V * d + L * (4 * d * d + 3 * d * 11008) + d * V
print("تخمین پارامتر از config:", round(params / 1e9, 2), "میلیارد")
def lazy_dataset(n):
    for i in range(n): yield {"text": f"نمونه {i}", "len": i % 7}
it = lazy_dataset(10 ** 9); print([next(it)["text"] for _ in range(3)], "← بدون بارگذاری کل داده (streaming)")
print(json.dumps({"license": "apache-2.0", "base_model": "llama", "language": ["fa", "en"]}))""",
extra=code("transformers (اجرا نشده)","""from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
name = "Qwen/Qwen2.5-0.5B-Instruct"
tok = AutoTokenizer.from_pretrained(name)
model = AutoModelForCausalLM.from_pretrained(name, torch_dtype=torch.bfloat16, device_map="auto")
msgs = [{"role": "user", "content": "پایتون چیست؟"}]
ids = tok.apply_chat_template(msgs, add_generation_prompt=True, return_tensors="pt").to(model.device)
print(tok.decode(model.generate(ids, max_new_tokens=100)[0]))"""))

add(3,17,"""<p><b>استنتاج LLM</b> دو مرحله دارد: <b>prefill</b> (پردازش موازی کل پرامپت؛ محدود به محاسبه) و <b>decode</b> (تولید توکن‌به‌توکن؛ محدود به پهنای باند حافظه). <b>KV-cache</b>: کلیدها و مقادیر توکن‌های قبلی ذخیره می‌شوند تا هر گام فقط توکن جدید محاسبه شود (هزینه‌ی هر گام از O(T²) به O(T)). هزینه: حافظه‌ی KV: <code class='inline'>2·لایه‌ها·سرها·dₕ·T·بایت</code> برای هر دنباله. <b>batching پیوسته</b> و <b>PagedAttention</b> (vLLM) توان‌عبور را بالا می‌برند. KV-cache را پیاده و سرعت را مقایسه می‌کنیم.""",
"حافظه‌ی KV را برای LLaMA-7B در طول ۴۰۹۶ و batch ۱۶ حساب کن.",
py="""import numpy as np, time
rng = np.random.default_rng(0); d = 64; Wq, Wk, Wv = [rng.normal(size=(d, d)) * d ** -.5 for _ in range(3)]
def softmax(x): e = np.exp(x - x.max()); return e / e.sum()
def generate(n, cache=True):
    xs = [rng.normal(size=d)]; K, V = [], []; flops = 0
    for t in range(n):
        if cache:
            x = xs[-1]; K.append(x @ Wk); V.append(x @ Wv); q = x @ Wq; a = softmax(np.array(K) @ q / np.sqrt(d)); flops += 3 * d * d + 2 * len(K) * d
        else:
            X = np.array(xs); Kall, Vall = X @ Wk, X @ Wv; q = xs[-1] @ Wq; a = softmax(Kall @ q / np.sqrt(d)); Vloc = Vall; flops += 3 * len(xs) * d * d + 2 * len(xs) * d
        out = a @ (np.array(V) if cache else Vloc); xs.append(np.tanh(out))
    return flops
for n in (50, 200): print(f"n={n}: بدون کش {generate(n, False):.2e} FLOP | با کش {generate(n, True):.2e} FLOP")
L, H, dh, T, B, bytes_ = 32, 32, 128, 4096, 16, 2; print("حافظه‌ی KV:", 2 * L * H * dh * T * B * bytes_ / 1e9, "GB")""",packages=NP)

add(3,18,"""<p><b>مهندسی پرامپت</b>: ارتباط روشن با مدل. اصول: ۱) <b>نقش و هدف</b> مشخص؛ ۲) <b>زمینه‌ی کافی</b> و منابع؛ ۳) <b>قالب خروجی</b> صریح (فهرست، JSON، طول)؛ ۴) <b>نمونه‌ها</b> (few-shot) برای الگو؛ ۵) <b>محدودیت‌ها</b> (چه نکنی)؛ ۶) شکستن کار پیچیده به مراحل؛ ۷) جداسازی دستورها از داده با جداکننده/تگ؛ ۸) <b>تکرار و ارزیابی</b> روی مجموعه‌ی آزمون نه یک مثال. پرامپت یک «کد» است: نسخه‌بندی و تست کن. قالب‌سازی پرامپت را با تابع می‌سازیم و کیفیتش را با چک‌لیست خودکار می‌سنجیم.""",
"یک چک‌لیست خودکار برای پرامپت (وجود نقش، قالب خروجی، نمونه) بنویس.",
py="""def build_prompt(role, task, context, fmt, examples=(), constraints=()):
    parts = [f"نقش: {role}", f"وظیفه: {task}", f"<context>\\n{context}\\n</context>"]
    if examples: parts.append("نمونه‌ها:\\n" + "\\n".join(f"ورودی: {i}\\nخروجی: {o}" for i, o in examples))
    if constraints: parts.append("محدودیت‌ها:\\n" + "\\n".join(f"- {c}" for c in constraints))
    parts.append(f"قالب خروجی: {fmt}"); return "\\n\\n".join(parts)
def lint(prompt):
    checks = {"نقش مشخص": "نقش:" in prompt, "قالب خروجی": "قالب خروجی" in prompt, "داده جدا شده": "<context>" in prompt, "نمونه دارد": "نمونه‌ها" in prompt, "محدودیت دارد": "محدودیت" in prompt}
    return checks
p = build_prompt("تحلیلگر نظرات مشتری", "احساس نظر را مشخص کن", "این محصول عالی بود", "JSON با کلیدهای sentiment و reason", [("بد بود", '{"sentiment":"منفی"}')], ["فقط JSON"])
print(p); print(lint(p)); print("امتیاز:", sum(lint(p).values()), "/ 5")""")

add(3,19,"""<p>برنامه‌ها خروجی <b>قابل‌پردازش</b> می‌خواهند. روش‌ها: ۱) درخواست JSON با اسکیما در پرامپت؛ ۲) <b>خروجی ساختاریافته‌ی API</b> (JSON schema، function calling)؛ ۳) <b>رمزگشایی مقید</b> (grammar/regex constrained decoding: فقط توکن‌های معتبر نمونه‌گیری می‌شوند؛ Outlines، llama.cpp grammars)؛ ۴) <b>اعتبارسنجی + تلاش مجدد</b> با Pydantic و ارسال پیام خطا به مدل. هرگز خروجی را بدون اعتبارسنجی به <code class='inline'>eval</code> یا SQL نده. یک اعتبارسنج اسکیما و حلقه‌ی ترمیم را روی «خروجی‌های ساختگی مدل» اجرا می‌کنیم.""",
"اعتبارسنج را برای فیلد enum و محدوده‌ی عددی تکمیل کن.",
py="""import json, re
SCHEMA = {"sentiment": ("enum", {"مثبت", "منفی", "خنثی"}), "score": ("number", (0, 1)), "reason": ("str", None)}
def validate(obj):
    errs = []
    for k, (t, c) in SCHEMA.items():
        if k not in obj: errs.append(f"کلید {k} وجود ندارد"); continue
        v = obj[k]
        if t == "enum" and v not in c: errs.append(f"{k} باید یکی از {sorted(c)} باشد")
        if t == "number" and not (isinstance(v, (int, float)) and c[0] <= v <= c[1]): errs.append(f"{k} باید عدد در {c} باشد")
        if t == "str" and not isinstance(v, str): errs.append(f"{k} باید رشته باشد")
    return errs
def extract_json(text):
    m = re.search(r"\\{.*\\}", text, re.S); return json.loads(m.group(0)) if m else None
replies = iter(['بله! {"sentiment": "عالی", "score": 2, "reason": "خوب"}', '{"sentiment": "مثبت", "score": 0.9, "reason": "کیفیت بالا"}'])
for attempt in range(3):
    obj = extract_json(next(replies)); errs = validate(obj); print("تلاش", attempt + 1, "→", errs or "معتبر ✓")
    if not errs: break""")

add(3,20,"""<p><b>زنجیره‌ی تفکر</b> (CoT): واداشتن مدل به نوشتن مراحل استدلال پیش از پاسخ («گام‌به‌گام فکر کن») دقت مسائل ریاضی/منطقی را بالا می‌برد چون محاسبه‌ی میانی را در توکن‌ها «بیرون می‌ریزد». گسترش‌ها: <b>خودسازگاری</b> (نمونه‌گیری چند استدلال و رأی اکثریت)، <b>درخت افکار</b>، <b>ReAct</b>، و مدل‌های «استدلالگر» که با RL برای استدلال طولانی آموزش دیده‌اند (محاسبه‌ی زمان آزمون). هزینه: توکن و تأخیر بیشتر. نکته: استدلال نوشته‌شده همیشه نمایانگر محاسبه‌ی واقعی مدل نیست؛ پاسخ را راستی‌آزمایی کن. خودسازگاری را با یک «حل‌گر نویزی» شبیه‌سازی می‌کنیم.""",
"تعداد نمونه‌ها را زیاد کن و دقت رأی اکثریت را ببین.",
py="""import numpy as np, collections
rng = np.random.default_rng(0)
def noisy_solver(a, b, acc=.55):
    return a * b if rng.random() < acc else a * b + int(rng.choice([-10, -1, 1, 10]))
problems = [(int(a), int(b)) for a, b in rng.integers(11, 99, (200, 2))]
single = np.mean([noisy_solver(a, b) == a * b for a, b in problems]); print("تک‌نمونه:", round(single, 3))
for k in (1, 5, 15, 31):
    ok = 0
    for a, b in problems:
        votes = collections.Counter(noisy_solver(a, b) for _ in range(k)); ok += votes.most_common(1)[0][0] == a * b
    print(f"خودسازگاری با {k:2} نمونه: {ok / len(problems):.3f}")
print("هزینه‌ی توکن ≈ k برابر")""",packages=NP)
