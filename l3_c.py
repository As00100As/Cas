import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'..','..'))
from common import *
LESSONS=[]
def add(*a,**k): LESSONS.append(lesson(*a,**k))
NP=['numpy']; SK=['numpy','scikit-learn']

add(3,36,"""<p><b>نشت داده و جیل‌بریک</b>: مدل‌ها ممکن است داده‌ی آموزش (شامل اطلاعات شخصی) را <b>حفظ</b> و بازگو کنند (استخراج حافظه)؛ سامانه‌ها ممکن است پرامپت سیستم، کلیدها یا داده‌ی دیگر کاربران را لو بدهند (به‌ویژه با حافظه/کش مشترک بین کاربران). <b>جیل‌بریک</b>: دور زدن محدودیت‌های ایمنی با نقش‌آفرینی، کدگذاری، چندمرحله‌ای کردن. دفاع: ۱) <b>هرگز راز در پرامپت نگذار</b> (کلید API، قانون محرمانه)؛ ۲) جداسازی داده‌ی کاربران (چندمستاجری) و کنترل دسترسی در لایه‌ی بازیابی نه در متن؛ ۳) حذف/ناشناس‌سازی PII قبل از آموزش و ثبت لاگ؛ ۴) فیلتر خروجی (ردیابی الگوی کلید/شماره‌ی کارت)؛ ۵) تست قرمز (red team) مداوم. اسکن خروجی برای الگوهای حساس را پیاده می‌کنیم.""",
"الگوی کد ملی ایران و شماره‌ی کارت را با اعتبارسنجی چک‌سام به اسکنر اضافه کن.",
py="""import re
PATTERNS = {"api_key": r"\\b(sk|key)[-_][A-Za-z0-9]{16,}\\b", "email": r"[\\w.+-]+@[\\w-]+\\.[\\w.]+", "card": r"\\b\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}\\b", "phone_ir": r"\\b09\\d{9}\\b"}
def luhn(num): 
    d = [int(c) for c in re.sub(r"\\D", "", num)][::-1]; return sum(x if i % 2 == 0 else (x * 2 - 9 if x * 2 > 9 else x * 2) for i, x in enumerate(d)) % 10 == 0
def scan(text):
    found = []
    for name, p in PATTERNS.items():
        for m in re.finditer(p, text):
            if name == "card" and not luhn(m.group()): continue
            found.append((name, m.group()))
    return found
def redact(text):
    for name, val in scan(text): text = text.replace(val, f"[{name.upper()}]")
    return text
out = "ایمیل ali@example.com و کلید sk-abcdefghij1234567890 و کارت 4539 1488 0343 6467 و شماره 09121234567 و عدد 1234 5678 9012 3456"
print(scan(out)); print(redact(out))
print("پرامپت سیستم نباید راز داشته باشد؛ دسترسی را در سرور کنترل کن")""")

add(3,37,"""<p><b>مدل‌های چندوجهی</b> متن، تصویر، صدا و ویدیو را با هم می‌فهمند. معماری رایج: <b>رمزگذار تصویر</b> (ViT) ← <b>پروجکتور</b> ← توکن‌های تصویر در دنباله‌ی ورودی LLM (LLaVA، GPT-4V، Claude، Gemini). <b>CLIP</b>: رمزگذار تصویر و متن را با هزینه‌ی contrastive روی ۴۰۰ میلیون جفت می‌آموزد تا در یک فضای مشترک باشند؛ پایه‌ی طبقه‌بندی صفرشات («عکس یک ___») و جست‌وجوی تصویر. کاربردها: OCR و درک سند، نمودار، تصویر‌پرسش‌پاسخ. چالش: توهم تصویری، ریزدانگی. هزینه‌ی contrastive (InfoNCE) را با بردارهای ساختگی نشان می‌دهیم.""",
"دما را تغییر بده و ببین دقت بازیابی تصویر از متن چطور می‌شود.",
py="""import numpy as np
rng = np.random.default_rng(0); n, d = 8, 16
concepts = rng.normal(size=(n, d)); img = concepts + rng.normal(0, .3, (n, d)); txt = concepts + rng.normal(0, .3, (n, d))
img /= np.linalg.norm(img, axis=1, keepdims=True); txt /= np.linalg.norm(txt, axis=1, keepdims=True)
def info_nce(img, txt, temp):
    logits = img @ txt.T / temp; lp = logits - np.log(np.exp(logits).sum(1, keepdims=True)); return -np.mean(np.diag(lp))
for t in (1.0, .1, .01): print(f"دما {t}: هزینه {info_nce(img, txt, t):.3f}")
print("بازیابی متن→تصویر (top-1):", np.mean((txt @ img.T).argmax(1) == np.arange(n)))
labels = ["گربه", "سگ", "ماشین"]; label_emb = rng.normal(size=(3, d)); label_emb /= np.linalg.norm(label_emb, axis=1, keepdims=True)
x = label_emb[1] + rng.normal(0, .1, d); print("طبقه‌بندی صفرشات:", labels[int(np.argmax(label_emb @ (x / np.linalg.norm(x))))])""",packages=NP)

add(3,38,"""<p><b>گفتار</b>: <b>ASR</b> (تشخیص گفتار: صدا→متن؛ Whisper، wav2vec 2.0) و <b>TTS</b> (متن→گفتار؛ VITS، XTTS). خط لوله‌ی ASR: صدا ← <b>طیف‌نگاشت لگاریتمی ملی</b> (log-Mel spectrogram) ← رمزگذار Transformer ← رمزگشا ← متن. معیار: <b>WER</b> (نرخ خطای کلمه) = (جانشینی+حذف+درج)/تعداد کلمات مرجع، محاسبه با فاصله‌ی ویرایش. چالش‌ها: لهجه، نویز، هم‌پوشانی گویندگان، کلمات نادر. فارسی: Whisper و مدل‌های بومی؛ دقت لهجه‌ها و نیم‌فاصله در نتیجه‌ی ASR. WER و استخراج طیف‌نگاشت ساده را پیاده می‌کنیم.""",
"WER را برای متن مرجع فارسی و خروجی ASR با دو خطا حساب کن.",
py="""import numpy as np
def wer(ref, hyp):
    r, h = ref.split(), hyp.split(); d = np.zeros((len(r) + 1, len(h) + 1), int); d[:, 0] = range(len(r) + 1); d[0] = range(len(h) + 1)
    for i in range(1, len(r) + 1):
        for j in range(1, len(h) + 1): d[i, j] = min(d[i - 1, j] + 1, d[i, j - 1] + 1, d[i - 1, j - 1] + (r[i - 1] != h[j - 1]))
    return d[-1, -1] / len(r)
print(wer("من امروز به مدرسه رفتم", "من امروز مدرسه رفتم"), wer("سلام دنیا", "سلام دنیا"), wer("یک دو سه", "یک چهار سه پنج"))
sr = 8000; t = np.arange(sr) / sr; sig = np.sin(2 * np.pi * 440 * t) + .5 * np.sin(2 * np.pi * 880 * t)
frame, hop = 400, 160; win = np.hanning(frame); frames = np.stack([sig[i:i + frame] * win for i in range(0, len(sig) - frame, hop)])
spec = np.abs(np.fft.rfft(frames, axis=1)) ** 2; freqs = np.fft.rfftfreq(frame, 1 / sr)
print("طیف‌نگاشت:", spec.shape, "| قله‌ی فرکانسی:", freqs[spec.mean(0).argmax()], "هرتز")
print("log-mel:", np.log(spec + 1e-9).shape)""",packages=NP)

add(3,39,"""<p><b>مدل‌های زبانی فارسی</b>: چالش‌ها: ۱) <b>توکن‌سازی</b>: توکنایزرهای انگلیسی‌محور فارسی را به توکن‌های بسیار بیشتر می‌شکنند (هزینه و تأخیر ۲–۴×)؛ ۲) <b>نیم‌فاصله</b> و املای متنوع؛ ۳) <b>کمبود داده‌ی تمیز</b> و مجموعه‌های ارزیابی؛ ۴) <b>راست‌به‌چپ</b> و اعداد فارسی/عربی؛ ۵) لهجه و محاوره؛ ۶) واژگان خاص دامنه (حقوقی/پزشکی). راه‌ها: مدل‌های چندزبانه‌ی خوب (Qwen، LLaMA 3، Gemma، Aya)، فاین‌تیون روی داده‌ی فارسی، توکنایزر آموزش‌دیده روی فارسی، RAG با منابع فارسی. نرمال‌ساز فارسی و سنجش «باروری» توکن را می‌سازیم.""",
"نرمال‌ساز را برای اعداد فارسی و عربی هم‌ارز کن و اثرش را بسنج.",
py="""import re
def normalize_fa(t):
    t = t.replace("ي", "ی").replace("ك", "ک").replace("ۀ", "ه").replace("\\u200f", "")
    t = t.translate(str.maketrans("۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩", "01234567890123456789"))
    t = re.sub(r"[\\u064B-\\u0652]", "", t)                  # حذف اعراب
    t = re.sub(r"\\s+", " ", t).strip(); t = re.sub(r"ـ+", "", t); return t
for s in ["كتاب‌ها ي ما ۱۲۳", "مُحَمَّد  و  علي ٤٥٦"]: print(repr(normalize_fa(s)))
def fertility(text, tokenize): return len(tokenize(text)) / len(text.split())
byte_tok = lambda t: list(t.encode("utf-8")); word_tok = lambda t: t.split(); char_tok = lambda t: list(t)
fa, en = "من هر روز برنامه نویسی یاد می‌گیرم", "I learn programming every day"
for name, f in [("بایت", byte_tok), ("نویسه", char_tok), ("کلمه", word_tok)]: print(f"{name}: فارسی {fertility(fa, f):.1f} توکن/کلمه | انگلیسی {fertility(en, f):.1f}")
print("بایت‌های UTF-8 فارسی ≈ ۲ برابر انگلیسی → توکنایزر بایتی بدون ادغام فارسی گران است")""")

add(3,40,"""<p><b>جمع‌آوری و پاک‌سازی داده‌ی متنی</b> مهم‌ترین عامل کیفیت مدل است. مراحل: ۱) <b>جمع‌آوری</b> قانونی (مجوز، robots.txt، حریم خصوصی)؛ ۲) <b>استخراج متن</b> از HTML/PDF و حذف منو/تبلیغ؛ ۳) <b>تشخیص زبان</b>؛ ۴) <b>فیلتر کیفیت</b> (طول، نسبت نویسه‌های غیرحرف، تکرار، perplexity)؛ ۵) <b>حذف تکراری</b> دقیق (هش) و تقریبی (MinHash/LSH)؛ ۶) حذف PII و محتوای سمی؛ ۷) <b>حذف آلودگی benchmark</b>؛ ۸) ثبت منشأ و نسخه. تکرار داده بیش‌برازش و حفظ‌کردن می‌آورد. خط لوله‌ی پاک‌سازی با MinHash ساده را اجرا می‌کنیم.""",
"آستانه‌ی شباهت را تغییر بده و تعداد اسناد تکراری را ببین.",
py="""import re, hashlib, random
docs = ["پایتون زبان برنامه نویسی محبوبی است و در هوش مصنوعی زیاد استفاده می شود", "پایتون زبان برنامه نویسی محبوبی است و در هوش مصنوعی بسیار استفاده می شود", "اینجا فقط یک منو است | خانه | تماس", "دستور پخت قورمه سبزی ساده است و با سبزی تازه خوشمزه می شود", "پایتون زبان برنامه نویسی محبوبی است و در هوش مصنوعی زیاد استفاده می شود"]
def shingles(t, k=3): w = t.split(); return {" ".join(w[i:i + k]) for i in range(len(w) - k + 1)}
def minhash(sh, n=64, seed=1):
    return [min(int(hashlib.md5(f"{i}{s}".encode()).hexdigest()[:8], 16) for s in sh) for i in range(n)]
sim = lambda a, b: sum(x == y for x, y in zip(a, b)) / len(a)
sigs = [minhash(shingles(d)) for d in docs]
def quality(t): w = t.split(); return len(w) >= 6 and sum(c.isalpha() for c in t) / len(t) > .6
kept, dup = [], []
for i, d in enumerate(docs):
    if not quality(d): dup.append((i, "کیفیت پایین")); continue
    if any(sim(sigs[i], sigs[j]) > .5 for j in kept): dup.append((i, "تکراری")); continue
    kept.append(i)
print("نگه‌داشته:", kept, "| حذف‌شده:", dup); print("شباهت ۰–۱:", sim(sigs[0], sigs[1]), "| ۰–۳:", sim(sigs[0], sigs[3]))""")

add(3,41,"""<p><b>ساخت مجموعه‌داده‌ی آموزشی</b> (SFT/ترجیحی): <b>منابع</b>: نوشته‌ی انسان (گران، با کیفیت)، <b>داده‌ی مصنوعی</b> تولیدشده با مدل قوی‌تر (Self-Instruct، Evol-Instruct؛ ارزان، ولی خطر انتقال خطا و کپی‌رایت/شرایط استفاده)، و داده‌ی واقعی کاربران (حریم خصوصی!). اصول: <b>تنوع</b> (وظایف، سبک، سختی)، <b>دقت</b> (بازبینی نمونه‌ای)، <b>قالب یکدست</b>، تعادل، حذف تکراری و سمی. <b>برچسب‌گذاری</b>: دستورالعمل شفاف، توافق بین برچسب‌زن‌ها (κ کوهن)، نمونه‌ی طلایی. اندازه‌گیری توافق و ساخت داده‌ی مصنوعی با الگو را نشان می‌دهیم.""",
"کاپای کوهن را برای دو برچسب‌زن حساب کن و آستانه‌ی «قابل‌قبول» را بگو.",
py="""import numpy as np, random
a = ["مثبت", "مثبت", "منفی", "خنثی", "منفی", "مثبت", "خنثی", "منفی", "مثبت", "منفی"]
b = ["مثبت", "منفی", "منفی", "خنثی", "منفی", "مثبت", "منفی", "منفی", "مثبت", "منفی"]
def kappa(a, b):
    labs = sorted(set(a) | set(b)); po = np.mean([x == y for x, y in zip(a, b)]); pe = sum((a.count(l) / len(a)) * (b.count(l) / len(b)) for l in labs); return (po - pe) / (1 - pe)
print("توافق خام:", np.mean([x == y for x, y in zip(a, b)]), "| κ:", round(kappa(a, b), 2), "(>0.6 خوب، >0.8 عالی)")
random.seed(0); topics = ["ریاضی", "تاریخ", "برنامه‌نویسی"]; styles = ["ساده", "رسمی", "با مثال"]; tasks = ["توضیح بده", "خلاصه کن", "مقایسه کن"]
data = [{"instruction": f"{tp} را {st} {tk}", "meta": (tp, st, tk)} for tp in topics for st in styles for tk in tasks]
print(len(data), "نمونه‌ی ترکیبی | نمونه:", data[4]["instruction"]); print("پوشش تنوع:", len({d['meta'] for d in data}) == len(data))""",packages=NP)

add(3,42,"""<p><b>API مدل‌ها و طراحی سرویس</b>: مدل را پشت API می‌گذاریم (REST/gRPC/WebSocket). نکات طراحی: ۱) <b>قرارداد روشن</b> (اسکیما، نسخه، خطاها)؛ ۲) <b>اعتبارسنجی ورودی</b> و حد اندازه؛ ۳) <b>محدودسازی نرخ و سهمیه</b> به‌ازای کاربر؛ ۴) <b>timeout و لغو</b>؛ ۵) <b>idempotency key</b>؛ ۶) <b>مشاهده‌پذیری</b> (توکن، تأخیر، خطا، هزینه)؛ ۷) <b>کش</b> (پرامپت‌های تکراری، پیشوند)؛ ۸) <b>بازگشت به مدل جایگزین</b> (fallback)؛ ۹) <b>صف</b> برای کارهای طولانی. هرگز کلید API مدل را در کلاینت قرار نده. سرویس مینیاتوری با اعتبارسنجی، محدودیت نرخ و کش می‌سازیم.""",
"ثبت هزینه‌ی توکن هر کاربر را اضافه کن و سهمیه‌ی روزانه بگذار.",
py="""import time, hashlib, json
class Service:
    def __init__(self, rate=3, window=10, quota=500):
        self.rate, self.window, self.quota, self.hits, self.cache, self.usage = rate, window, quota, {}, {}, {}
    def handle(self, user, prompt, now):
        if not isinstance(prompt, str) or not (1 <= len(prompt) <= 2000): return {"status": 422, "error": "طول پرامپت نامعتبر"}
        q = [t for t in self.hits.get(user, []) if t > now - self.window]
        if len(q) >= self.rate: return {"status": 429, "error": "نرخ بیش از حد", "retry_after": round(q[0] + self.window - now, 1)}
        self.hits[user] = q + [now]; key = hashlib.sha256(prompt.encode()).hexdigest()
        if key in self.cache: return {"status": 200, "cached": True, "text": self.cache[key]}
        tokens = len(prompt.split()) * 2
        if self.usage.get(user, 0) + tokens > self.quota: return {"status": 402, "error": "سهمیه تمام شد"}
        self.usage[user] = self.usage.get(user, 0) + tokens; self.cache[key] = f"پاسخ برای: {prompt[:20]}"; return {"status": 200, "cached": False, "text": self.cache[key], "tokens": tokens}
s = Service()
for i, (u, p, t) in enumerate([("u1", "سلام", 0), ("u1", "سلام", 1), ("u1", "چطوری؟", 2), ("u1", "پرسش دیگر", 3), ("u1", "", 4), ("u2", "x " * 400, 5)]): print(i, s.handle(u, p, t))""")

add(3,43,"""<p><b>streaming و تأخیر</b>: کاربر تولید توکن‌به‌توکن را می‌بیند؛ <b>زمان تا اولین توکن (TTFT)</b> و <b>توان توکن‌بر‌ثانیه</b> دو معیار کلیدی‌اند. پروتکل: <b>Server-Sent Events</b> (یک‌طرفه، ساده) یا WebSocket. نکات: ۱) خروجی را به‌صورت chunk بفرست و بافر پراکسی را خاموش کن (<code class='inline'>X-Accel-Buffering: no</code>)؛ ۲) <b>لغو</b> وقتی کاربر قطع کرد (مصرف GPU هدر نرود)؛ ۳) خطا در میانه‌ی جریان قابل‌اعلام باشد؛ ۴) <b>مرز UTF-8</b>: توکن ممکن است نیمه‌ی یک نویسه باشد؛ ۵) تأخیر کل = TTFT + (توکن‌ها ÷ سرعت). SSE و تولیدکننده‌ی غیرمسدود را شبیه‌سازی می‌کنیم.""",
"سرعت تولید را ۲ برابر کن و TTFT و کل تأخیر را مقایسه کن.",
py="""import time
def fake_llm_stream(prompt, tps=50, ttft=0.3):
    t0 = 0.0; yield (t0 + ttft, "پا")
    for i, tok in enumerate(["یتون", " زبان", " خوبی", " است"]): yield (ttft + (i + 1) / tps, tok)
def sse(events):
    for t, tok in events: yield f"data: {tok}\\n\\n"
    yield "data: [DONE]\\n\\n"
ev = list(fake_llm_stream("x")); print("TTFT:", ev[0][0], "ثانیه | کل:", round(ev[-1][0], 2))
print("".join(sse(ev)).replace("\\n\\n", " ⏎ "))
def metrics(n_tokens, ttft, tps): return {"TTFT": ttft, "total": round(ttft + n_tokens / tps, 2)}
print("۵۰ توکن @۲۰tps:", metrics(50, .4, 20), "| @۴۰tps:", metrics(50, .4, 40))
cut = "سلام".encode("utf-8")[:3]; print("نصفه‌ی یک نویسه:", cut.decode("utf-8", errors="replace"), "← باید بافر شود تا کامل شود")
import codecs; dec = codecs.getincrementaldecoder("utf-8")(); out = dec.decode("سلام".encode()[:3]) + dec.decode("سلام".encode()[3:]); print("رمزگشای افزایشی:", out)""")

add(3,44,"""<p><b>هزینه و بهینه‌سازی</b>: هزینه‌ی API ≈ (توکن ورودی × نرخ) + (توکن خروجی × نرخ بالاتر). اهرم‌ها: ۱) <b>کوتاه‌کردن پرامپت</b> و زمینه؛ ۲) <b>کش پرامپت</b> برای پیشوند ثابت (تخفیف بزرگ)؛ ۳) <b>مسیریابی مدل</b>: کار ساده → مدل ارزان، سخت → قوی (آبشاری)؛ ۴) <b>دسته‌ای (batch)</b> برای کارهای غیرفوری؛ ۵) <b>خروجی کوتاه و ساختاریافته</b> (<code class='inline'>max_tokens</code>)؛ ۶) <b>کش معنایی</b> پرسش‌های مشابه؛ ۷) تقطیر یا مدل کوچک‌تر فاین‌تیون‌شده؛ ۸) پایش هزینه به‌ازای کاربر/ویژگی. قبل از بهینه‌سازی <b>کیفیت را اندازه بگیر</b> تا کاهش هزینه کیفیت را نخواباند. شبیه‌ساز هزینه با مسیریاب آبشاری می‌سازیم.""",
"آستانه‌ی اطمینان مسیریاب را تنظیم کن تا هزینه و دقت بهترین مبادله را بدهد.",
py="""import numpy as np
rng = np.random.default_rng(0); n = 2000
difficulty = rng.random(n)
cheap_ok = rng.random(n) > difficulty * 1.1; strong_ok = rng.random(n) > difficulty * .25
cost_cheap, cost_strong = 0.2, 3.0                                 # واحد دلخواه برای هر درخواست
conf = np.clip(1 - difficulty + rng.normal(0, .1, n), 0, 1)        # اطمینان مدل ارزان
for thr in (0.0, .5, .7, .9, 1.01):
    use_strong = conf < thr; correct = np.where(use_strong, strong_ok, cheap_ok).mean(); cost = (cost_cheap + use_strong * cost_strong).mean()
    print(f"آستانه {thr:.2f}: ارجاع به قوی {use_strong.mean():.0%} | دقت {correct:.3f} | هزینه {cost:.2f}")
prompt_tokens, cached = 3000, 2500; price = 3.0 / 1e6; print("با کش پیشوند (۹۰٪ تخفیف):", round((prompt_tokens - cached) * price + cached * price * .1, 5), "vs", round(prompt_tokens * price, 5))""",packages=NP)

add(3,45,"""<p><b>حریم خصوصی و اجرای محلی</b>: ارسال داده‌ی حساس به API ابری ممکن است ممنوع یا پرخطر باشد. گزینه‌ها: ۱) <b>اجرای محلی/درون‌سازمانی</b> مدل‌های باز (LLaMA، Qwen، Mistral) با Ollama، llama.cpp، vLLM؛ ۲) <b>ناشناس‌سازی</b> قبل از ارسال؛ ۳) قراردادهای <b>عدم نگهداری داده</b> (zero retention)؛ ۴) <b>حریم خصوصی تفاضلی</b> در آموزش؛ ۵) محیط‌های محرمانه (TEE). اندازه‌ی مدل ← سخت‌افزار: ۷B (۴بیت) ≈ ۴–۵ گیگ RAM؛ ۱۳B ≈ ۸ گیگ؛ ۷۰B ≈ ۴۰ گیگ. مبادله: مدل محلی کوچک‌تر ضعیف‌تر؛ ولی کنترل کامل. ماشین‌حساب حافظه و ناشناس‌ساز با نگاشت برگشت‌پذیر می‌سازیم.""",
"برای لپ‌تاپ ۱۶ گیگ بزرگ‌ترین مدل با کوانتیزاسیون ۴ بیتی را پیشنهاد بده.",
py="""import re
def mem_gb(params_b, bits, overhead=1.2, ctx_gb=1.0): return params_b * bits / 8 * overhead + ctx_gb
for p in (3, 7, 13, 34, 70): print(f"{p:3}B: fp16 {mem_gb(p, 16):6.1f} GB | int8 {mem_gb(p, 8):5.1f} | int4 {mem_gb(p, 4):5.1f}")
ram = 16; fits = [p for p in (3, 7, 13, 34, 70) if mem_gb(p, 4) <= ram * .75]; print(f"روی {ram} گیگ (۷۵٪ آزاد) با int4:", fits)
class Pseudonymizer:
    def __init__(self): self.map, self.n = {}, 0
    def redact(self, text, patterns=(r"09\\d{9}", r"[\\w.]+@[\\w.]+")):
        for p in patterns:
            for m in set(re.findall(p, text)):
                if m not in self.map: self.n += 1; self.map[m] = f"<ID{self.n}>"
                text = text.replace(m, self.map[m])
        return text
    def restore(self, text):
        for k, v in self.map.items(): text = text.replace(v, k)
        return text
ps = Pseudonymizer(); safe = ps.redact("با 09121234567 یا a@b.com تماس بگیرید"); print(safe, "|", ps.restore(safe))""")

add(3,46,"""<p><b>llama.cpp و ONNX</b>: <b>llama.cpp</b> موتور استنتاج C/C++ برای CPU و GPU‌های مصرفی با قالب <b>GGUF</b> و کوانتیزاسیون‌های Q4_K_M، Q5، Q8؛ <code class='inline'>llama-server</code> API سازگار با OpenAI می‌دهد؛ Ollama بر پایه‌ی آن، تجربه‌ی ساده‌تری می‌سازد. <b>ONNX</b> قالب باز تبادل مدل (مستقل از چارچوب) و <b>ONNX Runtime</b> اجرای بهینه روی CPU/GPU/موبایل؛ مناسب مدل‌های کلاسیک و کوچک. انتخاب: LLM محلی ← GGUF/llama.cpp؛ مدل‌های کوچک و پراکنده‌ی صنعتی ← ONNX؛ تولید با GPU و توان بالا ← vLLM/TensorRT-LLM. ساختار نام فایل GGUF و صادرکردن مدل sklearn را بررسی می‌کنیم.""",
"از نام فایل GGUF پارامتر و کوانتیزاسیون را استخراج کن و اندازه‌ی تقریبی را حدس بزن.",
py="""import re
BITS = {"Q2_K": 2.6, "Q3_K_M": 3.9, "Q4_K_M": 4.8, "Q5_K_M": 5.7, "Q6_K": 6.6, "Q8_0": 8.5, "F16": 16}
def parse(name):
    m = re.match(r"(.+?)-(\\d+(?:\\.\\d+)?)[bB]-(.+?)-(Q\\w+|F16)\\.gguf", name); n, p, tag, q = m.groups(); p = float(p)
    return {"model": n, "params_b": p, "quant": q, "approx_gb": round(p * BITS[q] / 8, 1)}
for f in ["llama-3.1-8B-instruct-Q4_K_M.gguf", "qwen2.5-14B-instruct-Q8_0.gguf", "mistral-7B-v0.3-Q5_K_M.gguf"]: print(parse(f))
try:
    from sklearn.linear_model import LogisticRegression
    from sklearn.datasets import load_iris
    import numpy as np
    X, y = load_iris(return_X_y=True); m = LogisticRegression(max_iter=500).fit(X, y); W, b = m.coef_, m.intercept_
    print("ONNX معادل: MatMul(X, Wᵀ) + b → Softmax | شکل W:", W.shape)
except ImportError: pass""",packages=SK,
extra=code("اجرا روی سیستم (اجرا نشده)","""# Ollama
ollama run qwen2.5:7b
# llama.cpp
./llama-server -m qwen2.5-7b-instruct-q4_k_m.gguf -c 4096 --port 8080
curl localhost:8080/v1/chat/completions -d '{"messages":[{"role":"user","content":"سلام"}]}'
# ONNX
python -m onnxruntime.tools.convert_onnx_models_to_ort model.onnx"""))

add(3,47,"""<p><b>MLOps</b>: چرخه‌ی عمر مدل در تولید. اجزا: ۱) <b>نسخه‌بندی</b> کد، داده و مدل (Git، DVC، رجیستری مدل)؛ ۲) <b>خط لوله‌ی آموزش بازتولیدپذیر</b> (Airflow، Prefect، Kubeflow)؛ ۳) <b>CI/CD</b>: تست کد + تست داده + تست مدل (آستانه‌ی کیفیت) + استقرار خودکار؛ ۴) <b>استقرار</b>: آبی/سبز، قناری (canary)، سایه (shadow)؛ ۵) <b>ثبت متادیتا</b>؛ ۶) <b>بازتولید</b> و حاکمیت. سطوح بلوغ: دستی ← خط لوله‌ی خودکار ← آموزش مجدد خودکار با رصد. «بوابّت کیفیت»: مدل جدید فقط اگر از مدل فعلی روی مجموعه‌ی آزمون بهتر بود و آزمون‌های سلامت را گذراند منتشر شود. دروازه‌ی استقرار را کد می‌کنیم.""",
"آستانه‌ی «حداکثر تأخیر مجاز» را به دروازه اضافه کن.",
py="""import json, hashlib, numpy as np
registry = {"model_v1": {"acc": .86, "latency_ms": 40, "data_hash": "a1"}}
def gate(candidate, current, min_gain=0.005, max_latency=60, fairness_gap=.05):
    checks = {"بهتر از فعلی": candidate["acc"] >= current["acc"] + min_gain, "تأخیر مجاز": candidate["latency_ms"] <= max_latency, "عدالت زیرگروه‌ها": candidate["group_gap"] <= fairness_gap, "داده نسخه دارد": bool(candidate["data_hash"])}
    return all(checks.values()), checks
cand = {"acc": .875, "latency_ms": 45, "group_gap": .03, "data_hash": "b7"}
ok, checks = gate(cand, registry["model_v1"]); print("قابل انتشار:", ok); print(checks)
bad = dict(cand, latency_ms=95); print("با تأخیر ۹۵ms:", gate(bad, registry["model_v1"])[0])
def canary(route_pct, new_err, old_err, tol=1.2): return "ادامه‌ی انتشار" if new_err <= old_err * tol else "بازگشت"
print([canary(p, e, .02) for p, e in [(5, .021), (25, .03)]])
print("خط لوله:", " → ".join(["داده", "اعتبارسنجی داده", "آموزش", "ارزیابی", "دروازه", "رجیستری", "قناری", "تولید"]))""",packages=NP)

add(3,48,"""<p><b>پایش مدل و drift</b>: مدل در تولید پس از استقرار افت می‌کند چون جهان تغییر می‌کند. انواع: <b>drift داده</b> (توزیع ورودی تغییر کرده)، <b>drift مفهومی</b> (رابطه‌ی X→y تغییر کرده)، و <b>drift برچسب</b>. آشکارسازی: آزمون‌های آماری مثل <b>KS</b>، <b>PSI</b> (Population Stability Index؛ >0.25 هشدار جدی) و <b>JS/KL</b> برای هر ویژگی؛ پایش <b>عملکرد</b> وقتی برچسب با تأخیر می‌رسد (و پروکسی‌ها: توزیع پیش‌بینی، اطمینان). واکنش: هشدار، آموزش مجدد، بازگشت به نسخه‌ی قبل. PSI و KS را روی داده‌ی شبیه‌سازی‌شده‌ی منحرف اجرا می‌کنیم.""",
"با رشد تدریجی میانگین، روز اولین هشدار PSI را پیدا کن.",
py="""import numpy as np
from scipy.stats import ks_2samp
rng = np.random.default_rng(0); ref = rng.normal(0, 1, 5000)
def psi(ref, cur, bins=10):
    edges = np.percentile(ref, np.linspace(0, 100, bins + 1)); edges[0], edges[-1] = -np.inf, np.inf
    r = np.histogram(ref, edges)[0] / len(ref) + 1e-6; c = np.histogram(cur, edges)[0] / len(cur) + 1e-6; return float(np.sum((c - r) * np.log(c / r)))
first = None
for day in range(0, 15):
    cur = rng.normal(day * .06, 1, 1000); p = psi(ref, cur); ks = ks_2samp(ref, cur)
    if p > .25 and first is None: first = day
    if day % 3 == 0: print(f"روز {day:2}: PSI={p:.3f} | KS p-value={ks.pvalue:.3g}")
print("اولین هشدار جدی PSI>0.25 در روز:", first)
print("قاعده: PSI<0.1 پایدار | 0.1–0.25 هشدار | >0.25 تغییر قابل‌توجه")""",packages=['numpy','scipy'])

add(3,49,"""<p><b>پروژه‌ی پایان سطح ۳: سامانه‌ی RAG فارسی.</b> الزامات: ۱) <b>داده</b>: مجموعه‌ای از اسناد فارسی (قوانین شرکت، مقالات ویکی، راهنمای محصول)؛ ۲) <b>پاک‌سازی و نرمال‌سازی</b> فارسی؛ ۳) <b>chunking</b> ساختاری با هم‌پوشانی و فراداده؛ ۴) <b>تعبیه</b> با مدل چندزبانه (e5/bge-m3) و پایگاه برداری؛ ۵) <b>بازیابی ترکیبی</b> + بازچینی؛ ۶) <b>مولد</b> با پرامپت «فقط از زمینه»، ارجاع به منبع و «نمی‌دانم»؛ ۷) <b>ارزیابی</b> با ۵۰ پرسش طلایی (Recall@k، وفاداری)؛ ۸) <b>API + رابط</b> با streaming و سهمیه؛ ۹) <b>امنیت</b>: کنترل دسترسی در بازیابی، دفاع از تزریق، حذف PII؛ ۱۰) <b>پایش</b>. در این مرورگر همین اسکلت را با TF-IDF و مولد ساختگی اجرا و ارزیابی می‌کنیم.""",
"همین اسکلت را با اسناد واقعی خودت و یک LLM واقعی کامل کن و گزارش ارزیابی بنویس.",
py="""import numpy as np, re
from sklearn.feature_extraction.text import TfidfVectorizer
norm = lambda t: re.sub(r"\\s+", " ", t.replace("ي", "ی").replace("ك", "ک")).strip()
raw = {"عمومی": "ساعت کاری شرکت از شنبه تا چهارشنبه ۸ تا ۱۶ است. روزهای پنجشنبه تعطیل است.", "مرخصی": "هر کارمند سالانه ۲۶ روز مرخصی استحقاقی دارد. مرخصی بیش از ۳ روز نیاز به تأیید مدیر دارد.", "امنیت": "رمز عبور باید حداقل ۱۲ نویسه باشد. اشتراک رمز با دیگران ممنوع است."}
chunks = [(src, norm(s)) for src, t in raw.items() for s in re.split(r"(?<=[.!؟])\\s", t) if s]
vec = TfidfVectorizer(ngram_range=(1, 2)).fit([c[1] for c in chunks]); M = vec.transform([c[1] for c in chunks])
def rag(q, k=2, thr=.12):
    s = (M @ vec.transform([norm(q)]).T).toarray().ravel(); o = [i for i in np.argsort(-s)[:k] if s[i] >= thr]
    return ("نمی‌دانم؛ در اسناد نیست.", []) if not o else (" ".join(chunks[i][1] for i in o), [chunks[i][0] for i in o])
gold = [("مرخصی سالانه چند روز است", "مرخصی"), ("رمز عبور چند نویسه باشد", "امنیت"), ("پنجشنبه تعطیل است", "عمومی")]
hit = np.mean([g in rag(q)[1] for q, g in gold]); print("Recall@2 روی مجموعه‌ی طلایی:", hit)
for q in ["مرخصی سالانه چند روز است", "قیمت بیت‌کوین چند است"]: print(q, "→", rag(q))""",packages=SK)

add(3,50,"""<p><b>پروژه‌ی پایان سطح ۳: عامل با ابزار.</b> هدف: عاملی بسازی که یک کار واقعی را چندمرحله‌ای حل کند، مثلاً «دستیار تحلیل داده»: ۱) ابزارها: <code class='inline'>run_sql</code> (فقط‌خواندنی)، <code class='inline'>run_python</code> (در sandbox)، <code class='inline'>plot</code>، <code class='inline'>search_docs</code>؛ ۲) حلقه‌ی ReAct با سقف گام و بودجه‌ی توکن؛ ۳) <b>برنامه‌ریزی</b> و بازبینی؛ ۴) <b>امنیت</b>: کمترین دسترسی، تایید انسانی برای عملیات نوشتن، اعتبارسنجی همه‌ی آرگومان‌ها، sandbox؛ ۵) <b>trace</b> کامل (مرحله، ابزار، ورودی/خروجی، هزینه)؛ ۶) <b>ارزیابی</b> با ۳۰ وظیفه‌ی طلایی (موفقیت، تعداد گام، هزینه)؛ ۷) مدیریت خطا و تلاش مجدد. اسکلت کامل با ابزار SQL امن (فقط SELECT) و «مدل» سناریونویسی‌شده را اجرا می‌کنیم.""",
"ابزار plot_stats را به اسکلت اضافه کن و برای ۳ وظیفه‌ی طلایی ارزیابی بنویس.",
py="""import sqlite3, re, json
db = sqlite3.connect(":memory:"); db.executescript("CREATE TABLE sales(city TEXT, amount INT); INSERT INTO sales VALUES ('تهران',100),('تهران',150),('شیراز',80),('تبریز',90);")
def run_sql(q):
    if not re.match(r"^\\s*select\\b", q, re.I) or re.search(r";\\s*\\S", q): raise PermissionError("فقط یک SELECT مجاز است")
    return db.execute(q).fetchall()
TOOLS = {"run_sql": run_sql}
SCRIPT = iter(['{"tool": "run_sql", "args": {"q": "SELECT city, SUM(amount) FROM sales GROUP BY city ORDER BY 2 DESC"}}', '{"final": "بیشترین فروش در تهران (250) است."}'])
trace = []
def agent(task, max_steps=5):
    for step in range(max_steps):
        out = json.loads(next(SCRIPT))
        if "final" in out: trace.append(("final", out["final"])); return out["final"]
        res = TOOLS[out["tool"]](**out["args"]); trace.append((out["tool"], out["args"]["q"][:40], res))
    return "سقف گام"
print(agent("کدام شهر بیشترین فروش را دارد؟")); [print(t) for t in trace]
for bad in ["DROP TABLE sales", "SELECT 1; DROP TABLE sales"]:
    try: run_sql(bad)
    except PermissionError as e: print("رد شد:", bad[:28], "→", e)""")

QUIZ={3:[
 quiz("هزینه‌ی حافظه و زمان self-attention نسبت به طول دنباله T چگونه است؟",["O(T)","O(T²)","O(log T)","O(1)"],1,"ماتریس امتیاز T×T ساخته می‌شود."),
 quiz("KV-cache چه کاری می‌کند؟",["وزن‌ها را فشرده می‌کند","کلید/مقدار توکن‌های قبلی را ذخیره تا در هر گام دوباره محاسبه نشود","مدل را کوانتیزه می‌کند","پرامپت را کوتاه می‌کند"],1,"هزینه‌ی هر گام decode از O(T²) به O(T) می‌رسد."),
 quiz("LoRA چه چیزی را آموزش می‌دهد؟",["همه‌ی وزن‌ها","به‌روزرسانی رتبه‌پایین ΔW=BA کنار وزن‌های منجمد","فقط بایاس","توکنایزر"],1,"پارامترهای قابل‌آموزش ≈ ۰٫۱–۱٪."),
 quiz("DPO نسبت به RLHF-PPO چه مزیتی دارد؟",["دقت همیشه بیشتر","بدون مدل پاداش جدا و بدون RL؛ ساده‌تر و پایدارتر","نیاز به داده‌ی کمتر از صفر","فقط برای تصویر"],1,"مستقیم از جفت‌های ترجیحی بهینه می‌کند."),
 quiz("RAG برای کاهش توهم چه می‌کند؟",["دمای مدل را صفر می‌کند","زمینه‌ی بازیابی‌شده را به پرامپت می‌دهد و ارجاع می‌خواهد","مدل را کوچک می‌کند","داده‌ی آموزش را تغییر می‌دهد"],1,"پاسخ بر پایه‌ی اسناد واقعی و قابل‌ردیابی می‌شود."),
 quiz("تزریق پرامپت غیرمستقیم یعنی؟",["کاربر دستور بد می‌دهد","دستور مخرب داخل داده‌ی بیرونی (وب/سند) که عامل می‌خواند","نشت وزن‌ها","خطای GPU"],1,"محتوای نامطمئن مدل را منحرف می‌کند."),
 quiz("PSI بالای ۰٫۲۵ چه معنایی دارد؟",["مدل بهتر شده","تغییر قابل‌توجه توزیع داده (drift)","خطای کد","سرعت بالا"],1,"باید بررسی، هشدار یا آموزش مجدد کرد."),
 quiz("کدام برای ارزیابی بدون دروغ‌گویی به خود ضروری است؟",["فقط benchmark عمومی","مجموعه‌ی آزمون نماینده‌ی کار واقعی با بازه‌ی اطمینان","یک مثال خوب","نظر شخصی"],1,"تصمیم باید روی داده‌ی واقعی و با عدم‌قطعیت اتخاذ شود."),
]}
CHALLENGE={3:{"task":"تابع scaled_dot_attention(Q, K, V, causal=False) را با NumPy بنویس که خروجی (T×dv) و ماتریس وزن‌ها را برگرداند. softmax باید پایدار باشد و در حالت causal هر موقعیت فقط به موقعیت‌های قبلی و خودش توجه کند.",
 "hint1":"امتیاز = Q @ K.T / sqrt(d_k).",
 "hint2":"برای ماسک علّی بالای قطر اصلی را −∞ کن (np.triu(..., k=1))؛ قبل از exp بیشینه‌ی هر سطر را کم کن.",
 "solution":"import numpy as np\n\ndef scaled_dot_attention(Q, K, V, causal=False):\n    S = Q @ K.T / np.sqrt(K.shape[-1])\n    if causal:\n        S = np.where(np.triu(np.ones_like(S), k=1) == 1, -np.inf, S)\n    S = S - S.max(axis=1, keepdims=True)\n    A = np.exp(S)\n    A /= A.sum(axis=1, keepdims=True)\n    return A @ V, A\n\nrng = np.random.default_rng(0)\nQ = K = V = rng.normal(size=(4, 8))\nout, A = scaled_dot_attention(Q, K, V, causal=True)\nprint(out.shape, A[0].round(2), np.allclose(A.sum(1), 1))  # (4, 8) [1. 0. 0. 0.] True"}}
