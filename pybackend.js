(window.COURSES=window.COURSES||[]).push({
 "id": "pybackend",
 "name": "بک‌اند پایتون: FastAPI",
 "icon": "⚡",
 "kind": "theory",
 "desc": "همون دانش پایتونت رو بردار و یه API واقعی و سریع بساز",
 "covers": [
  "FastAPI: Routing، Path/Query Parameters",
  "Pydantic: اعتبارسنجی خودکار داده",
  "SQLAlchemy ORM و اتصال به PostgreSQL",
  "Authentication با JWT در FastAPI",
  "تست خودکار با pytest، Logging و Debugging"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "FastAPI چیست و اولین Route",
     "content": "<p><b>FastAPI</b> یکی از محبوب‌ترین فریم‌ورک‌های وب پایتون است — سریع (بر پایهٔ Starlette/Uvicorn)، با پشتیبانی خودکار از Type Hint برای اعتبارسنجی و مستندسازی خودکار API (Swagger UI رایگان، فقط با نوشتن کد!).</p><div class='code-block'><div class='cb-head'>main.py</div><pre><code>from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/\")\ndef read_root():\n    return {\"message\": \"سلام از FastAPI\"}\n\n@app.get(\"/users/{user_id}\")\ndef get_user(user_id: int):\n    return {\"user_id\": user_id, \"name\": \"کاربر نمونه\"}</code></pre></div><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>uvicorn main:app --reload\n# سرور روی http://localhost:8000 بالا میاد\n# مستندات خودکار: http://localhost:8000/docs</code></pre></div>",
     "exercise": "توضیح بده user_id: int توی تعریف get_user چه فایده‌ای داره — اگه کسی /users/abc رو صدا بزنه (نه یه عدد)، FastAPI خودش چیکار می‌کنه؟"
    },
    {
     "title": "Pydantic: اعتبارسنجی خودکار با Type Hint",
     "content": "<p>FastAPI از <b>Pydantic</b> برای تعریف شکل داده‌های ورودی/خروجی استفاده می‌کند — دقیقاً با همون Type Hint های پایتون. اگه داده‌ای که کاربر می‌فرسته با مدل مطابقت نداشته باشه، FastAPI خودکار خطای ۴۲۲ با جزئیات دقیق برمی‌گردونه، بدون این‌که شما حتی یک خط کد اعتبارسنجی بنویسید.</p><div class='code-block'><div class='cb-head'>models.py</div><pre><code>from pydantic import BaseModel\n\nclass Product(BaseModel):\n    name: str\n    price: float\n    in_stock: bool = True  # مقدار پیش‌فرض\n\n@app.post(\"/products\")\ndef create_product(product: Product):\n    return {\"received\": product, \"total_with_tax\": product.price * 1.09}</code></pre></div>",
     "exercise": "یک مدل Pydantic برای User با name (str)، email (str) و age (int, پیش‌فرض None) بساز و یک route POST /users که ازش استفاده کنه."
    },
    {
     "title": "SQLAlchemy و اتصال به PostgreSQL",
     "content": "<p><b>SQLAlchemy</b> محبوب‌ترین ORM پایتون است — معادل Mongoose در Node یا Entity Framework در C#. به‌جای نوشتن SQL خام، با کلاس‌های پایتون با جدول‌های PostgreSQL کار می‌کنید.</p><div class='code-block'><div class='cb-head'>database.py</div><pre><code>from sqlalchemy import create_engine, Column, Integer, String, Float\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nengine = create_engine(\"postgresql://user:pass@localhost/mydb\")\nBase = declarative_base()\n\nclass ProductModel(Base):\n    __tablename__ = \"products\"\n    id = Column(Integer, primary_key=True)\n    name = Column(String)\n    price = Column(Float)\n\nSession = sessionmaker(bind=engine)\nsession = Session()\n\n# کوئری با پایتون معمولی، نه SQL خام:\ncheap_products = session.query(ProductModel).filter(ProductModel.price < 100000).all()</code></pre></div>",
     "exercise": "توضیح بده session.query(ProductModel).filter(...) چطور معادل یه دستور SELECT ... WHERE هست، ولی بدون این‌که مستقیم SQL بنویسی."
    },
    {
     "title": "Authentication با JWT در FastAPI",
     "content": "<p>دقیقاً همون مفهومی که در Node.js دیدید (bcrypt برای هش‌کردن پسورد، JWT برای نشست کاربر)، در FastAPI هم با کتابخانه‌های <code class='inline'>passlib</code> و <code class='inline'>python-jose</code> پیاده‌سازی می‌شود. FastAPI یک سیستم <code class='inline'>Depends()</code> دارد که شبیه Dependency Injection در C# است — یک تابع (مثل چک‌کردن توکن) را به route های محافظت‌شده «تزریق» می‌کند.</p><div class='code-block'><div class='cb-head'>auth.py</div><pre><code>from fastapi import Depends, HTTPException\nfrom jose import jwt, JWTError\n\ndef get_current_user(token: str):\n    try:\n        payload = jwt.decode(token, \"SECRET_KEY\", algorithms=[\"HS256\"])\n        return payload[\"sub\"]\n    except JWTError:\n        raise HTTPException(status_code=401, detail=\"توکن نامعتبر\")\n\n@app.get(\"/profile\")\ndef read_profile(current_user: str = Depends(get_current_user)):\n    return {\"user\": current_user}</code></pre></div>",
     "exercise": "توضیح بده Depends(get_current_user) چطور شبیه همون الگوی middleware احراز هویتیه که توی Express (Node.js) دیدی، ولی با یه سینتکس متفاوت."
    },
    {
     "title": "تست خودکار با pytest",
     "content": "<p><b>pytest</b> استاندارد تست نوشتن در پایتون است. هر تابعی که با <code class='inline'>test_</code> شروع شود، خودکار به‌عنوان یک تست شناسایی می‌شود؛ <code class='inline'>assert</code> بررسی می‌کند نتیجه با انتظار یکی باشد.</p><div class='code-block'><div class='cb-head'>test_math.py</div><pre><code>def add(a, b):\n    return a + b\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-1, -1) == -2</code></pre></div><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>pytest\n# اجرای همهٔ تست‌ها و گزارش قبول/رد هرکدوم</code></pre></div>",
     "exercise": "برای تابع is_even (که قبلاً نوشتی) دو تست بنویس: یکی برای یه عدد زوج، یکی برای یه عدد فرد."
    }
   ],
   "quiz": [
    {
     "q": "مزیت کلیدی FastAPI که با نوشتن Type Hint به‌دست میاد چیست؟",
     "options": [
      "فقط سرعت بیشتر",
      "اعتبارسنجی خودکار داده و مستندسازی خودکار API (Swagger)، بدون کد اضافه",
      "حذف نیاز به Python",
      "رنگی‌شدن کد"
     ],
     "answer": 1,
     "explain": "FastAPI از Type Hint برای تولید خودکار مستندات و اعتبارسنجی استفاده می‌کند."
    },
    {
     "q": "Pydantic چه نقشی در FastAPI دارد؟",
     "options": [
      "اتصال به دیتابیس",
      "تعریف و اعتبارسنجی خودکار شکل داده‌های ورودی/خروجی",
      "تست خودکار",
      "لاگ‌گیری"
     ],
     "answer": 1,
     "explain": "مدل‌های Pydantic داده‌های نامعتبر را قبل از رسیدن به منطق اصلی رد می‌کنند."
    },
    {
     "q": "SQLAlchemy چه کاری انجام می‌دهد؟",
     "options": [
      "فریم‌ورک وب است",
      "ORM ای که کلاس‌های پایتون را به جدول‌های دیتابیس متصل می‌کند",
      "کتابخانهٔ تست است",
      "موتور گرافیکی است"
     ],
     "answer": 1,
     "explain": "مشابه Mongoose در Node یا Entity Framework در C#."
    },
    {
     "q": "در pytest، یک تابع چگونه به‌عنوان تست شناسایی می‌شود؟",
     "options": [
      "با یک Attribute خاص",
      "با شروع اسم تابع با test_",
      "باید حتماً async باشد",
      "با وارد کردن یک کتابخانهٔ خاص در هر فایل"
     ],
     "answer": 1,
     "explain": "pytest خودکار توابعی که با test_ شروع می‌شوند را پیدا و اجرا می‌کند."
    }
   ],
   "challenge": {
    "task": "یک API کوچک با FastAPI طراحی کن (روی کاغذ/متن): یک مدل Pydantic برای Task (title, done: bool=False)، یک route POST /tasks برای افزودن، و یک route GET /tasks برای گرفتن همه (از یک لیست ساده در حافظه، نه دیتابیس واقعی). برای route افزودن، یک تست pytest هم بنویس که چک کنه بعد از افزودن یک Task، طول لیست یکی بیشتر شده.",
    "hint1": "برای تست FastAPI معمولاً از TestClient (از fastapi.testclient) استفاده می‌شه که می‌تونه بدون بالا آوردن سرور واقعی، route ها رو صدا بزنه.",
    "hint2": "ساختار تست: client.post('/tasks', json={...}) رو صدا بزن، بعد client.get('/tasks') رو بگیر و طول نتیجه رو با assert چک کن.",
    "solution": "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\ntasks = []\n\nclass Task(BaseModel):\n    title: str\n    done: bool = False\n\n@app.post(\"/tasks\")\ndef add_task(task: Task):\n    tasks.append(task)\n    return task\n\n@app.get(\"/tasks\")\ndef get_tasks():\n    return tasks\n\n# test_main.py\nfrom fastapi.testclient import TestClient\nclient = TestClient(app)\n\ndef test_add_task():\n    before = len(client.get(\"/tasks\").json())\n    client.post(\"/tasks\", json={\"title\": \"خرید نان\"})\n    after = len(client.get(\"/tasks\").json())\n    assert after == before + 1"
   }
  },
  {
   "lessons": [
    {
     "title": "Response Model و Dependency Injection",
     "content": "<p>هیچ‌وقت مدل دیتابیس (که پسورد داره) رو مستقیم برنگردون. با <code class='inline'>response_model</code> مشخص می‌کنی چه فیلدهایی بیرون برن. با <code class='inline'>Depends</code> هم منطق مشترک (مثل گرفتن Session دیتابیس یا کاربر فعلی) رو یک‌بار می‌نویسی و تزریق می‌کنی.</p><div class='code-block'><div class='cb-head'>main.py</div><pre><code>from fastapi import FastAPI, Depends, Query\nfrom pydantic import BaseModel, EmailStr\n\napp = FastAPI()\n\nclass UserIn(BaseModel):\n    email: EmailStr\n    password: str\n\nclass UserOut(BaseModel):\n    id: int\n    email: EmailStr   # password اینجا نیست\n\ndef pagination(skip: int = Query(0, ge=0), limit: int = Query(10, le=100)):\n    return {\"skip\": skip, \"limit\": limit}\n\n@app.post(\"/users\", response_model=UserOut, status_code=201)\ndef create_user(user: UserIn):\n    return {\"id\": 1, \"email\": user.email, \"password\": user.password}\n\n@app.get(\"/items\")\ndef items(p: dict = Depends(pagination)):\n    return p</code></pre></div>",
     "exercise": "چرا با اینکه تابع create_user فیلد password رو برمی‌گردونه، توی پاسخ نهایی نمیاد؟ و فایدهٔ Depends برای pagination چیه؟"
    },
    {
     "title": "SQLAlchemy و CRUD واقعی",
     "content": "<p>ORM اجازه می‌ده جدول‌ها رو با کلاس پایتون تعریف کنی. الگوی استاندارد: یک <b>Session</b> برای هر درخواست (از طریق Depends) و بستنش بعد از پایان.</p><div class='code-block'><div class='cb-head'>db.py</div><pre><code>from sqlalchemy import create_engine, String\nfrom sqlalchemy.orm import sessionmaker, DeclarativeBase, Mapped, mapped_column\n\nengine = create_engine(\"sqlite:///app.db\")\nSessionLocal = sessionmaker(bind=engine, autoflush=False)\n\nclass Base(DeclarativeBase): pass\n\nclass Task(Base):\n    __tablename__ = \"tasks\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    title: Mapped[str] = mapped_column(String(100))\n    done: Mapped[bool] = mapped_column(default=False)\n\nBase.metadata.create_all(engine)\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()</code></pre></div><div class='code-block'><div class='cb-head'>routes</div><pre><code>@app.post(\"/tasks\")\ndef add(title: str, db = Depends(get_db)):\n    t = Task(title=title); db.add(t); db.commit(); db.refresh(t)\n    return t\n\n@app.get(\"/tasks/{tid}\")\ndef one(tid: int, db = Depends(get_db)):\n    t = db.get(Task, tid)\n    if not t: raise HTTPException(404, \"پیدا نشد\")\n    return t</code></pre></div>",
     "exercise": "چرا get_db از yield استفاده می‌کنه و نه return؟ اگه Session بسته نشه چه اتفاقی برای سرور می‌افته؟"
    }
   ],
   "quiz": [
    {
     "q": "کار response_model چیه؟",
     "options": [
      "سرعت رو بالا می‌بره",
      "فیلدهای پاسخ رو فیلتر و اعتبارسنجی می‌کنه (مثلاً پسورد بیرون نمیاد)",
      "دیتابیس می‌سازه",
      "فقط برای مستندات است"
     ],
     "answer": 1,
     "explain": "response_model خروجی رو با مدل مشخص‌شده فیلتر می‌کنه."
    },
    {
     "q": "Depends برای چه چیزی ایده‌آله؟",
     "options": [
      "رنگ‌بندی Swagger",
      "تزریق منطق مشترک مثل Session دیتابیس یا کاربر فعلی",
      "تعریف جدول",
      "کامپایل کد"
     ],
     "answer": 1,
     "explain": "Dependency Injection کد تکراری رو حذف و تست رو ساده می‌کنه."
    },
    {
     "q": "چرا برای هر درخواست یک Session جدا می‌سازیم؟",
     "options": [
      "چون SQLAlchemy اجبار می‌کنه",
      "برای جلوگیری از قاطی‌شدن تراکنش‌ها و نشت اتصال",
      "برای زیبایی کد",
      "فرقی نداره"
     ],
     "answer": 1,
     "explain": "Session مشترک بین درخواست‌ها باعث تداخل داده و نشت اتصال می‌شه."
    }
   ],
   "challenge": {
    "task": "یک CRUD کامل برای Task بنویس (POST, GET همه با pagination, GET تکی با ۴۰۴, PUT, DELETE) با SQLAlchemy و response_model. پسورد یا فیلد داخلی نباید بیرون بره.",
    "hint1": "برای ویرایش، ابتدا db.get رو بزن، اگه None بود HTTPException(404) بده.",
    "hint2": "pagination رو با Depends و دو پارامتر skip/limit بساز و در query از offset/limit استفاده کن: db.query(Task).offset(skip).limit(limit).all()",
    "solution": "@app.put(\"/tasks/{tid}\", response_model=TaskOut)\ndef update(tid:int, data:TaskIn, db=Depends(get_db)):\n    t=db.get(Task,tid)\n    if not t: raise HTTPException(404)\n    t.title=data.title; t.done=data.done\n    db.commit(); return t\n\n@app.delete(\"/tasks/{tid}\", status_code=204)\ndef delete(tid:int, db=Depends(get_db)):\n    t=db.get(Task,tid)\n    if not t: raise HTTPException(404)\n    db.delete(t); db.commit()"
   }
  },
  {
   "lessons": [
    {
     "title": "احراز هویت با JWT و هش پسورد",
     "content": "<p>پسورد هرگز خام ذخیره نمی‌شه؛ با bcrypt هش می‌شه. بعد از لاگین، سرور یک <b>JWT</b> امضاشده با زمان انقضا می‌ده و کلاینت اون رو در هدر <code class='inline'>Authorization: Bearer</code> می‌فرسته.</p><div class='code-block'><div class='cb-head'>auth.py</div><pre><code>from datetime import datetime, timedelta, timezone\nfrom jose import jwt, JWTError\nfrom passlib.context import CryptContext\nfrom fastapi.security import OAuth2PasswordBearer\n\nSECRET = \"از متغیر محیطی بخون، نه کد!\"\npwd = CryptContext(schemes=[\"bcrypt\"])\noauth2 = OAuth2PasswordBearer(tokenUrl=\"login\")\n\ndef make_token(user_id: int):\n    exp = datetime.now(timezone.utc) + timedelta(minutes=30)\n    return jwt.encode({\"sub\": str(user_id), \"exp\": exp}, SECRET, \"HS256\")\n\ndef current_user(token: str = Depends(oauth2)):\n    try:\n        data = jwt.decode(token, SECRET, algorithms=[\"HS256\"])\n    except JWTError:\n        raise HTTPException(401, \"توکن نامعتبر\")\n    return int(data[\"sub\"])</code></pre></div>",
     "exercise": "چرا SECRET نباید داخل کد یا گیت باشه؟ و چرا JWT باید انقضا داشته باشه؟"
    },
    {
     "title": "Middleware، CORS و مدیریت خطای مرکزی",
     "content": "<p>Middleware کدیه که قبل و بعد از هر درخواست اجرا می‌شه (لاگ، زمان‌سنجی). <b>CORS</b> مشخص می‌کنه کدوم دامنه‌ها حق دارن از مرورگر API رو صدا بزنن. خطاها هم باید یک‌جا و یکدست مدیریت بشن.</p><div class='code-block'><div class='cb-head'>main.py</div><pre><code>import time\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom fastapi.responses import JSONResponse\n\napp.add_middleware(CORSMiddleware,\n    allow_origins=[\"https://mysite.ir\"],   # نه \"*\" در محیط واقعی\n    allow_methods=[\"*\"], allow_headers=[\"*\"])\n\n@app.middleware(\"http\")\nasync def timer(request, call_next):\n    t = time.perf_counter()\n    resp = await call_next(request)\n    resp.headers[\"X-Process-Time\"] = f\"{time.perf_counter()-t:.4f}\"\n    return resp\n\nclass AppError(Exception):\n    def __init__(self, msg, code=400): self.msg, self.code = msg, code\n\n@app.exception_handler(AppError)\nasync def handle(request, exc):\n    return JSONResponse({\"error\": exc.msg}, status_code=exc.code)</code></pre></div>",
     "exercise": "چرا allow_origins=[\"*\"] همراه با کوکی/توکن در محیط واقعی خطرناکه؟"
    }
   ],
   "quiz": [
    {
     "q": "پسورد کاربر چطور ذخیره بشه؟",
     "options": [
      "خام",
      "با Base64",
      "هش‌شده با bcrypt/argon2",
      "با AES و کلید در کد"
     ],
     "answer": 2,
     "explain": "هش یک‌طرفه است؛ حتی با لو رفتن دیتابیس، پسورد اصلی بازیابی نمی‌شه."
    },
    {
     "q": "JWT شامل چه چیزیه؟",
     "options": [
      "پسورد کاربر",
      "داده‌های (Claims) امضاشده که قابل خواندن‌اند ولی قابل دست‌کاری نیستند",
      "فقط یک عدد تصادفی",
      "کلید دیتابیس"
     ],
     "answer": 1,
     "explain": "JWT امضا می‌شه نه رمزنگاری؛ داخلش اطلاعات حساس نذار."
    },
    {
     "q": "CORS برای چیه؟",
     "options": [
      "سرعت",
      "کنترل اینکه کدام Originها از مرورگر به API دسترسی دارن",
      "رمزنگاری",
      "کش"
     ],
     "answer": 1,
     "explain": "مرورگر درخواست بین‌دامنه‌ای رو بر اساس هدرهای CORS مجاز یا رد می‌کنه."
    }
   ],
   "challenge": {
    "task": "سیستم ثبت‌نام و لاگین بساز: POST /register (هش پسورد)، POST /login (برگردوندن JWT با انقضای ۳۰ دقیقه)، و GET /me که فقط با توکن معتبر کار کنه و در غیر این صورت ۴۰۱ بده.",
    "hint1": "در /register از pwd.hash(password) استفاده کن و فقط هش رو ذخیره کن.",
    "hint2": "در /login با pwd.verify(plain, hashed) چک کن؛ اگه غلط بود ۴۰۱ بده. برای /me از Depends(current_user) استفاده کن.",
    "solution": "@app.post(\"/register\")\ndef register(u:UserIn, db=Depends(get_db)):\n    db.add(User(email=u.email, hashed=pwd.hash(u.password))); db.commit()\n    return {\"ok\": True}\n\n@app.post(\"/login\")\ndef login(form:OAuth2PasswordRequestForm=Depends(), db=Depends(get_db)):\n    user=db.query(User).filter_by(email=form.username).first()\n    if not user or not pwd.verify(form.password,user.hashed):\n        raise HTTPException(401,\"ایمیل یا رمز اشتباه\")\n    return {\"access_token\": make_token(user.id), \"token_type\":\"bearer\"}\n\n@app.get(\"/me\")\ndef me(uid:int=Depends(current_user)):\n    return {\"user_id\": uid}"
   }
  },
  {
   "lessons": [
    {
     "title": "async/await، Background Tasks و کارایی",
     "content": "<p>اگه تابع <code class='inline'>async def</code> باشه و داخلش کار blocking (مثل <code class='inline'>time.sleep</code> یا درخواست sync) بکنی، کل سرور قفل می‌شه. برای I/O از کتابخانه‌های async استفاده کن و کارهای سنگین پس از پاسخ (مثل ایمیل) رو به BackgroundTasks بسپار.</p><div class='code-block'><div class='cb-head'>main.py</div><pre><code>import asyncio, httpx\nfrom fastapi import BackgroundTasks\n\ndef send_email(to: str):\n    ...  # کار کند\n\n@app.post(\"/signup\")\nasync def signup(email: str, bg: BackgroundTasks):\n    bg.add_task(send_email, email)   # بعد از پاسخ اجرا می‌شه\n    return {\"status\": \"ثبت شد\"}\n\n@app.get(\"/multi\")\nasync def multi():\n    async with httpx.AsyncClient() as c:\n        a, b = await asyncio.gather(\n            c.get(\"https://api.a.com\"), c.get(\"https://api.b.com\"))\n    return [a.json(), b.json()]</code></pre></div>",
     "exercise": "چرا asyncio.gather دو درخواست رو سریع‌تر از دو await پشت‌سرهم انجام می‌ده؟"
    },
    {
     "title": "تست با pytest، Docker و دیپلوی",
     "content": "<p>سرویس حرفه‌ای = تست خودکار + بسته‌بندی قابل‌تکرار. با TestClient بدون سرور واقعی تست می‌کنی و با Docker محیط یکسان برای همه‌جا می‌سازی.</p><div class='code-block'><div class='cb-head'>test_main.py</div><pre><code>from fastapi.testclient import TestClient\nfrom main import app\nclient = TestClient(app)\n\ndef test_me_without_token():\n    assert client.get(\"/me\").status_code == 401</code></pre></div><div class='code-block'><div class='cb-head'>Dockerfile</div><pre><code>FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]</code></pre></div>",
     "exercise": "چرا مقادیری مثل SECRET و DATABASE_URL باید با متغیر محیطی به کانتینر داده بشن و نه داخل Dockerfile؟"
    },
    {
     "title": "مهاجرت دیتابیس با Alembic",
     "content": "<p>وقتی مدل SQLAlchemy تغییر می‌کند (ستون جدید)، نباید جدول را دستی عوض کنی. Alembic هر تغییر را به‌صورت یک فایل مهاجرت (migration) ثبت می‌کند و روی همهٔ محیط‌ها یکسان اجرا می‌کند.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>alembic revision --autogenerate -m \"add phone\"\nalembic upgrade head\nalembic downgrade -1</code></pre></div>",
     "exercise": "یک ستون phone اضافه کن و مهاجرتش را بساز و برگردان."
    },
    {
     "title": "Dependency Injection پیشرفته: yield و Override",
     "content": "<p><code class='inline'>Depends</code> می‌تواند زنجیره‌ای باشد (وابستگی به وابستگی). با <code class='inline'>yield</code> منبعی مثل نشست دیتابیس را باز می‌کنی و بعد از پاسخ حتماً می‌بندی. در تست، <code class='inline'>app.dependency_overrides</code> دیتابیس واقعی را با نسخه‌ی آزمایشی عوض می‌کند.<div class='code-block'><div class='cb-head'>deps.py</div><pre><code>async def get_db():\n    async with SessionLocal() as s:\n        yield s\n\n@app.get('/items')\nasync def items(db: AsyncSession = Depends(get_db)):\n    ...</code></pre></div></p>",
     "exercise": "یک وابستگی بنویس که کاربر فعلی را از توکن بگیرد و در تست جایگزین کن."
    },
    {
     "title": "Pydantic v2 پیشرفته: Validator و Computed Field",
     "content": "<p>با <code class='inline'>field_validator</code> و <code class='inline'>model_validator</code> قوانین تجاری را کنار مدل می‌نویسی. <code class='inline'>computed_field</code> مقدار محاسبه‌شده را وارد خروجی می‌کند و <code class='inline'>model_config</code> رفتار مدل (مثلاً <code class='inline'>from_attributes</code>) را تنظیم می‌کند. مدل ورودی و خروجی را جدا نگه دار تا فیلد حساس (رمز) نشت نکند.<div class='code-block'><div class='cb-head'>schemas.py</div><pre><code>class UserIn(BaseModel):\n    email: EmailStr\n    password: str\n    @field_validator('password')\n    @classmethod\n    def strong(cls, v):\n        assert len(v) >= 10\n        return v</code></pre></div></p>",
     "exercise": "مدل خروجی بنویس که password را هرگز برنگرداند."
    },
    {
     "title": "SQLAlchemy 2.0 ناهمگام و مشکل N+1",
     "content": "<p>با <code class='inline'>AsyncSession</code> و <code class='inline'>await session.execute(select(...))</code> کار کن. مشکل N+1 یعنی برای هر ردیف یک کوئری اضافه برای رابطه اجرا شود؛ با <code class='inline'>selectinload</code> یا <code class='inline'>joinedload</code> رابطه‌ها را یک‌جا بخوان. در async، بارگذاری تنبل (lazy) خطا می‌دهد.</p>",
     "exercise": "یک endpoint بنویس که سفارش‌ها را با آیتم‌هایشان در دو کوئری بخواند."
    },
    {
     "title": "Background Task و صف Celery/Redis",
     "content": "<p><code class='inline'>BackgroundTasks</code> برای کار سبک بعد از پاسخ مناسب است (ارسال ایمیل ساده). کار سنگین یا مهم (گزارش، پردازش تصویر) را به صف (Celery + Redis یا ARQ) بسپار تا با ری‌استارت سرور از بین نرود و قابل تلاش مجدد باشد. وظیفه باید idempotent باشد.</p>",
     "exercise": "ارسال ایمیل خوش‌آمد را از endpoint ثبت‌نام به صف منتقل کن."
    },
    {
     "title": "WebSocket و Server-Sent Events",
     "content": "<p>WebSocket ارتباط دوطرفه است (چت، بازی)، SSE یک‌طرفه از سرور به کلاینت است و برای اعلان و پیشرفت ساده‌تر. اتصال‌ها را در یک Manager نگه دار، قطع ناگهانی را مدیریت کن و برای چند سرور از Redis Pub/Sub استفاده کن.<div class='code-block'><div class='cb-head'>ws.py</div><pre><code>@app.websocket('/ws')\nasync def ws(sock: WebSocket):\n    await sock.accept()\n    try:\n        while True:\n            msg = await sock.receive_text()\n            await sock.send_text(msg)\n    except WebSocketDisconnect:\n        pass</code></pre></div></p>",
     "exercise": "یک اتاق چت ساده با پخش پیام به همه بساز."
    },
    {
     "title": "Middleware، CORS و Lifespan",
     "content": "<p>Middleware روی همه‌ی درخواست‌ها اجرا می‌شود (لاگ، زمان‌سنجی، شناسه‌ی درخواست). <code class='inline'>CORSMiddleware</code> را فقط روی دامنه‌های مجاز تنظیم کن. با <code class='inline'>lifespan</code> منابع سنگین (اتصال دیتابیس، مدل ML) را یک‌بار هنگام شروع بارگذاری و هنگام خاموشی آزاد کن.</p>",
     "exercise": "Middleware بنویس که زمان پردازش هر درخواست را در هدر برگرداند."
    },
    {
     "title": "Rate Limiting و Caching با Redis",
     "content": "<p>با <code class='inline'>slowapi</code> یا الگوریتم Token Bucket روی Redis، تعداد درخواست هر کاربر/IP را محدود کن. برای خروجی‌های پرتکرار از Cache با TTL و کلید شامل پارامترها استفاده کن، و هدرهای <code class='inline'>ETag</code>/<code class='inline'>Cache-Control</code> را برای کش سمت کلاینت بگذار.</p>",
     "exercise": "برای /search محدودیت ۳۰ درخواست در دقیقه و کش ۶۰ثانیه‌ای بگذار."
    },
    {
     "title": "OAuth2 با Scope و کنترل دسترسی نقش‌محور",
     "content": "<p><code class='inline'>OAuth2PasswordBearer</code> توکن را می‌گیرد و <code class='inline'>SecurityScopes</code> مجوزهای ریز (read:orders, write:orders) را بررسی می‌کند. وابستگی‌ای بساز که نقش کاربر را از توکن بخواند و برای هر مسیر <code class='inline'>Depends(require_role('admin'))</code> بگذارد. مالکیت منبع را هم جدا بررسی کن (جلوی IDOR).</p>",
     "exercise": "یک مسیر فقط-ادمین و یک مسیر فقط-مالک بساز."
    },
    {
     "title": "تست حرفه‌ای: pytest-asyncio و httpx",
     "content": "<p>برای endpointهای async از <code class='inline'>httpx.AsyncClient</code> با <code class='inline'>ASGITransport</code> استفاده کن، دیتابیس تست را با fixture بساز و بعد از هر تست rollback کن، و وابستگی‌های بیرونی (ایمیل، پرداخت) را mock کن. هدف: تست سریع، مستقل و بدون وابستگی به ترتیب.<div class='code-block'><div class='cb-head'>test_api.py</div><pre><code>@pytest.mark.asyncio\nasync def test_health():\n    async with AsyncClient(transport=ASGITransport(app=app), base_url='http://t') as c:\n        r = await c.get('/health')\n    assert r.status_code == 200</code></pre></div></p>",
     "exercise": "برای ثبت‌نام سه تست (موفق، ایمیل تکراری، رمز ضعیف) بنویس."
    },
    {
     "title": "صفحه‌بندی، فیلتر و Cursor Pagination",
     "content": "<p>Offset/limit ساده است ولی روی جدول بزرگ کند و با درج داده تکراری می‌دهد. <b>Cursor Pagination</b> از آخرین شناسه/زمان دیده‌شده ادامه می‌دهد، پایدار و سریع است. فیلتر و مرتب‌سازی را فقط روی ستون‌های دارای index مجاز کن و حداکثر limit بگذار.</p>",
     "exercise": "endpoint لیست محصولات را با cursor و limit حداکثر ۱۰۰ بنویس."
    },
    {
     "title": "آپلود فایل و پاسخ استریم",
     "content": "<p>با <code class='inline'>UploadFile</code> فایل را تکه‌تکه بخوان تا حافظه پر نشود، نوع و حجم را بررسی کن و در ذخیره‌ی ابری (S3 سازگار) بگذار. برای دانلود بزرگ از <code class='inline'>StreamingResponse</code> استفاده کن و لینک موقت (presigned URL) بده.</p>",
     "exercise": "آپلود تصویر پروفایل با محدودیت ۲ مگابایت و ذخیره‌ی ابری بنویس."
    },
    {
     "title": "استقرار تولیدی: Workers، Docker و مشاهده‌پذیری",
     "content": "<p>با Gunicorn + Uvicorn Worker چند پردازش اجرا کن، Dockerfile چندمرحله‌ای سبک بساز، endpoint سلامت (<code class='inline'>/health</code>) بگذار و لاگ ساختاریافته (JSON) و معیارها (Prometheus) را فعال کن. متغیرهای محیطی را با <code class='inline'>pydantic-settings</code> مدیریت کن، نه در کد.</p>",
     "exercise": "Dockerfile و docker-compose یک API همراه با Postgres و Redis بنویس."
    },
    {
     "title": "ساختار پروژه و تنظیمات با pydantic-settings",
     "content": "<p>پروژه را لایه‌ای بچین: <code class='inline'>routers/</code> (HTTP)، <code class='inline'>services/</code> (منطق)، <code class='inline'>repositories/</code> (داده) و <code class='inline'>schemas/</code>. تنظیمات را با <code class='inline'>pydantic-settings</code> از متغیر محیطی بخوان و هنگام شروع اعتبارسنجی کن تا برنامه با تنظیم ناقص بالا نیاید. Secret را هرگز در کد نگذار.</p><div class='code-block'><div class='cb-head'>settings.py</div><pre><code>from functools import lru_cache\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\nclass Settings(BaseSettings):\n    model_config = SettingsConfigDict(env_file=\".env\")\n    database_url: str\n    secret_key: str\n    debug: bool = False\n\n@lru_cache\ndef get_settings() -> Settings:\n    return Settings()\n</code></pre></div>",
     "exercise": "ساختار یک پروژه‌ی سه‌لایه برای فروشگاه طراحی کن."
    },
    {
     "title": "مدیریت خطا: Exception Handler و Problem Details",
     "content": "<p>خطاها را با کلاس‌های دامنه‌ای (AppError) نشان بده و در یک <code class='inline'>exception_handler</code> مرکزی به پاسخ یکنواخت تبدیل کن. قالب استاندارد RFC 7807 (<code class='inline'>application/problem+json</code>) با فیلدهای type، title، status و detail برای کلاینت‌ها قابل‌پیش‌بینی است. جزئیات داخلی (stack trace) را به کلاینت نفرست و لاگ کن.</p><div class='code-block'><div class='cb-head'>errors.py</div><pre><code>from fastapi import FastAPI, Request\nfrom fastapi.responses import JSONResponse\n\nclass AppError(Exception):\n    def __init__(self, status: int, title: str, detail: str):\n        self.status, self.title, self.detail = status, title, detail\n\napp = FastAPI()\n\n@app.exception_handler(AppError)\nasync def app_error(request: Request, exc: AppError):\n    return JSONResponse(\n        status_code=exc.status,\n        media_type=\"application/problem+json\",\n        content={\"type\": \"about:blank\", \"title\": exc.title,\n                 \"status\": exc.status, \"detail\": exc.detail},\n    )\n</code></pre></div>",
     "exercise": "handler برای خطای اعتبارسنجی بنویس که پیام‌ها را فارسی و یکدست برگرداند."
    },
    {
     "title": "Response Model، ORJSON و پاسخ استریم",
     "content": "<p><code class='inline'>response_model</code> خروجی را فیلتر می‌کند و فیلدهای حساس (<code class='inline'>password_hash</code>) هرگز بیرون نمی‌روند. <code class='inline'>ORJSONResponse</code> سریال‌سازی را سریع‌تر می‌کند و <code class='inline'>StreamingResponse</code> داده‌ی بزرگ را تکه‌تکه می‌فرستد تا حافظه پر نشود. مدل ورودی و خروجی را جدا نگه دار.</p><div class='code-block'><div class='cb-head'>response.py</div><pre><code>from fastapi import FastAPI\nfrom fastapi.responses import ORJSONResponse, StreamingResponse\nfrom pydantic import BaseModel\n\nclass UserOut(BaseModel):\n    id: int\n    email: str\n\napp = FastAPI(default_response_class=ORJSONResponse)\n\n@app.get(\"/users/{uid}\", response_model=UserOut)\nasync def get_user(uid: int):\n    return {\"id\": uid, \"email\": \"a@b.c\", \"password_hash\": \"x\"}  # حذف می‌شود\n\n@app.get(\"/export\")\nasync def export():\n    async def rows():\n        for i in range(1000):\n            yield f\"{i}\\n\"\n    return StreamingResponse(rows(), media_type=\"text/csv\")\n</code></pre></div>",
     "exercise": "endpointی بنویس که یک CSV بزرگ را استریم کند."
    },
    {
     "title": "نسخه‌بندی API و سفارشی‌سازی OpenAPI",
     "content": "<p>نسخه‌بندی با پیشوند (<code class='inline'>/v1</code>) و <code class='inline'>APIRouter</code> جدا ساده‌ترین راه است. endpoint قدیمی را با <code class='inline'>deprecated=True</code> علامت بزن و برنامه‌ی حذف را اعلام کن. <code class='inline'>tags</code>، <code class='inline'>summary</code> و مثال‌های مدل مستندات خودکار را برای مصرف‌کننده‌ها قابل‌استفاده می‌کند. تغییر شکننده فقط در نسخه‌ی اصلی جدید.</p><div class='code-block'><div class='cb-head'>versioning.py</div><pre><code>from fastapi import APIRouter, FastAPI\n\nv1 = APIRouter(prefix=\"/v1\", tags=[\"v1\"])\nv2 = APIRouter(prefix=\"/v2\", tags=[\"v2\"])\n\n@v1.get(\"/users\", deprecated=True)\nasync def users_v1(): ...\n\n@v2.get(\"/users\")\nasync def users_v2(): ...\n\napp = FastAPI(title=\"API\", version=\"2.0.0\", openapi_tags=[\n    {\"name\": \"v1\", \"description\": \"منسوخ‌شونده\"},\n    {\"name\": \"v2\", \"description\": \"نسخه‌ی فعلی\"}])\napp.include_router(v1)\napp.include_router(v2)\n</code></pre></div>",
     "exercise": "نسخه‌ی v2 را با تغییر شکننده در فیلد نام بساز و v1 را deprecated کن."
    },
    {
     "title": "Idempotency Key برای POST",
     "content": "<p>کلاینت ممکن است به‌خاطر timeout درخواست ایجاد را تکرار کند و دو سفارش بسازد. با کلید یکتای <code class='inline'>Idempotency-Key</code> در هدر، سرور نتیجه‌ی اولین اجرا را ذخیره و در تکرار همان را برمی‌گرداند. کلید باید با کاربر و درخواست ثبت و با TTL ذخیره شود (Redis) و برای پرداخت ضروری است.</p>",
     "exercise": "کلید را در Redis با TTL ۲۴ ساعت نگه دار و رقابت همزمان دو درخواست را با قفل مدیریت کن.",
     "py": "store = {}\n\ndef create_order(key, payload):\n    if key in store:\n        return store[key], True      # تکراری: همان پاسخ قبلی\n    result = {\"order_id\": len(store) + 1, \"items\": payload}\n    store[key] = result\n    return result, False\n\nr1, dup1 = create_order(\"abc-1\", [\"چای\"])\nr2, dup2 = create_order(\"abc-1\", [\"چای\"])\nr3, dup3 = create_order(\"abc-2\", [\"قهوه\"])\nprint(r1[\"order_id\"], dup1, r2[\"order_id\"], dup2, r3[\"order_id\"], dup3)"
    },
    {
     "title": "تراکنش، Repository و Unit of Work",
     "content": "<p>Repository دسترسی به داده را کپسوله و Unit of Work چند عملیات را در یک تراکنش جمع می‌کند: یا همه commit می‌شوند یا هیچ‌کدام. در async، <code class='inline'>async with session.begin()</code> این کار را انجام می‌دهد. منطق تجاری را در Service بگذار نه در router تا قابل‌تست باشد.</p><div class='code-block'><div class='cb-head'>uow.py</div><pre><code>from sqlalchemy.ext.asyncio import AsyncSession\n\nclass OrderRepo:\n    def __init__(self, session: AsyncSession):\n        self.s = session\n    async def add(self, order):\n        self.s.add(order)\n\nasync def place_order(session: AsyncSession, order, stock_repo):\n    async with session.begin():          # تراکنش واحد: commit یا rollback\n        await stock_repo.reserve(order)\n        await OrderRepo(session).add(order)\n</code></pre></div>",
     "exercise": "سفارش و کسر موجودی را در یک تراکنش بنویس و شکست میانه را شبیه‌سازی کن."
    },
    {
     "title": "کش HTTP: ETag و پاسخ شرطی",
     "content": "<p>با <code class='inline'>ETag</code> و هدر <code class='inline'>If-None-Match</code> کلاینت می‌تواند بپرسد «تغییر کرده؟» و پاسخ ۳۰۴ بدون بدنه بگیرد. <code class='inline'>Cache-Control: max-age</code> کش مرورگر و CDN را تنظیم می‌کند. داده‌ی شخصی را هرگز <code class='inline'>public</code> کش نکن و برای کش سمت سرور (Redis) هنگام تغییر داده کلید را باطل کن.</p><div class='code-block'><div class='cb-head'>cache.py</div><pre><code>import hashlib, json\nfrom fastapi import FastAPI, Request, Response\n\napp = FastAPI()\n\n@app.get(\"/catalog\")\nasync def catalog(request: Request, response: Response):\n    data = {\"items\": [1, 2, 3]}\n    etag = hashlib.md5(json.dumps(data).encode()).hexdigest()\n    if request.headers.get(\"if-none-match\") == etag:\n        return Response(status_code=304)\n    response.headers[\"ETag\"] = etag\n    response.headers[\"Cache-Control\"] = \"public, max-age=60\"\n    return data\n</code></pre></div>",
     "exercise": "ETag را برای endpoint محصولات اضافه و ۳۰۴ را تست کن."
    },
    {
     "title": "کلاینت HTTP مقاوم: Timeout، Retry و Circuit Breaker",
     "content": "<p>هر فراخوانی بیرونی باید timeout داشته باشد (وگرنه کل سرویس معطل می‌ماند)، تلاش مجدد محدود با backoff و برای خطاهای دائمی Circuit Breaker که پس از چند شکست مدار را باز می‌کند و سرویس خراب را موقتاً صدا نمی‌زند. نمونه‌ی زیر منطق مدار را نشان می‌دهد؛ در عمل از کتابخانه استفاده کن.</p><div class='code-block'><div class='cb-head'>client.py</div><pre><code>import httpx\n\nclient = httpx.AsyncClient(\n    timeout=httpx.Timeout(5.0, connect=2.0),\n    limits=httpx.Limits(max_connections=50, max_keepalive_connections=10),\n    transport=httpx.AsyncHTTPTransport(retries=2),\n)\n\nasync def fetch(url: str):\n    r = await client.get(url)\n    r.raise_for_status()\n    return r.json()\n</code></pre></div>",
     "exercise": "مدار را طوری تغییر بده که در حالت half-open فقط یک درخواست آزمایشی بگذراند.",
     "py": "class CircuitBreaker:\n    def __init__(self, fails=3, reset=10):\n        self.fails, self.reset = fails, reset\n        self.count, self.opened_at, self.state = 0, None, \"closed\"\n    def call(self, fn, now):\n        if self.state == \"open\":\n            if now - self.opened_at >= self.reset:\n                self.state = \"half\"\n            else:\n                raise RuntimeError(\"مدار باز است\")\n        try:\n            r = fn()\n        except Exception:\n            self.count += 1\n            if self.count >= self.fails or self.state == \"half\":\n                self.state, self.opened_at = \"open\", now\n            raise\n        self.count, self.state = 0, \"closed\"\n        return r\n\ndef bad(): raise ValueError(\"خطا\")\ncb = CircuitBreaker()\nout = []\nfor t in range(5):\n    try: cb.call(bad, t)\n    except Exception as e: out.append(str(e))\nprint(out)\nprint(cb.call(lambda: \"ok\", 20), cb.state)"
    },
    {
     "title": "مشاهده‌پذیری: لاگ ساخت‌یافته، شناسه‌ی درخواست و سلامت",
     "content": "<p>هر درخواست شناسه‌ی همبستگی (<code class='inline'>x-request-id</code>) بگیرد و در همه‌ی لاگ‌ها بیاید تا مسیر آن را دنبال کنی. لاگ را JSON بنویس. دو endpoint سلامت: <code class='inline'>live</code> (پردازش زنده است) و <code class='inline'>ready</code> (دیتابیس و وابستگی‌ها آماده‌اند). معیارها (Prometheus) و Trace (OpenTelemetry) گلوگاه را پیدا می‌کنند.</p><div class='code-block'><div class='cb-head'>middleware.py</div><pre><code>import logging, time, uuid\nfrom fastapi import FastAPI, Request\n\nlogging.basicConfig(format='{\"t\":\"%(asctime)s\",\"lvl\":\"%(levelname)s\",\"msg\":\"%(message)s\"}')\nlog = logging.getLogger(\"api\")\napp = FastAPI()\n\n@app.middleware(\"http\")\nasync def access_log(request: Request, call_next):\n    rid = request.headers.get(\"x-request-id\", str(uuid.uuid4()))\n    start = time.perf_counter()\n    response = await call_next(request)\n    ms = round((time.perf_counter() - start) * 1000)\n    log.warning(\"rid=%s %s %s %s %sms\", rid, request.method, request.url.path, response.status_code, ms)\n    response.headers[\"x-request-id\"] = rid\n    return response\n\n@app.get(\"/health/live\")\nasync def live(): return {\"ok\": True}\n</code></pre></div>",
     "exercise": "لاگ هر درخواست را با شناسه و زمان پاسخ ثبت کن."
    },
    {
     "title": "سرو مدل ML: Lifespan، Threadpool و Batch",
     "content": "<p>مدل سنگین را یک‌بار هنگام شروع با <code class='inline'>lifespan</code> بارگذاری کن، نه برای هر درخواست. پیش‌بینی CPU‌-سنگین حلقه‌ی رویداد async را قفل می‌کند؛ آن را با <code class='inline'>run_in_threadpool</code> یا فرایند جدا اجرا کن. برای بازده بالا درخواست‌ها را دسته‌ای (Batching) پردازش و برای GPU از صف و کارگر اختصاصی استفاده کن.</p><div class='code-block'><div class='cb-head'>serve.py</div><pre><code>from contextlib import asynccontextmanager\nfrom fastapi import FastAPI\nfrom fastapi.concurrency import run_in_threadpool\n\nmodels = {}\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    models[\"m\"] = load_model(\"model.bin\")     # یک‌بار هنگام شروع\n    yield\n    models.clear()\n\napp = FastAPI(lifespan=lifespan)\n\n@app.post(\"/predict\")\nasync def predict(x: list[float]):\n    return {\"y\": await run_in_threadpool(models[\"m\"].predict, x)}  # CPU را بیرون از event loop ببر\n</code></pre></div>",
     "exercise": "تأخیر پیش‌بینی را قبل و بعد از threadpool اندازه بگیر."
    },
    {
     "title": "Pydantic: Discriminated Union برای بدنه‌های چندشکلی",
     "content": "<p>وقتی یک endpoint چند نوع پیام می‌گیرد (مثلاً رویداد <code>card</code> یا <code>bank</code>)، Union ساده باید همه‌ی مدل‌ها را امتحان کند و پیام خطا شلوغ می‌شود. با <b>Discriminated Union</b> یک فیلد برچسب (<code>type</code>) مدل درست را مستقیم انتخاب می‌کند: سریع‌تر و خطای دقیق‌تر. در FastAPI مستقیم به‌عنوان نوع بدنه یا response_model کار می‌کند و OpenAPI هم <code>oneOf</code> با <code>discriminator</code> می‌سازد.</p><div class='code-block'><div class='cb-head'>payments.py</div><pre><code>from typing import Annotated, Literal, Union\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\nclass Card(BaseModel):\n    type: Literal[&quot;card&quot;]\n    last4: str\n\nclass Bank(BaseModel):\n    type: Literal[&quot;bank&quot;]\n    iban: str\n\nPayment = Annotated[Union[Card, Bank], Field(discriminator=&quot;type&quot;)]\napp = FastAPI()\n\n@app.post(&quot;/pay&quot;)\ndef pay(p: Payment):\n    return {&quot;kind&quot;: p.type}</code></pre></div>",
     "exercise": "یک نوع wallet به Union اضافه کن.",
     "py": "from typing import Annotated, Literal, Union\nfrom pydantic import BaseModel, Field, TypeAdapter, ValidationError\n\nclass Card(BaseModel):\n    type: Literal[\"card\"]; last4: str\nclass Bank(BaseModel):\n    type: Literal[\"bank\"]; iban: str\nPayment = Annotated[Union[Card, Bank], Field(discriminator=\"type\")]\nta = TypeAdapter(Payment)\n\nprint(ta.validate_python({\"type\": \"bank\", \"iban\": \"IR12\"}))\ntry:\n    ta.validate_python({\"type\": \"bank\", \"last4\": \"1234\"})\nexcept ValidationError as e:\n    for err in e.errors():\n        print(\"خطا:\", err[\"loc\"], \"→\", err[\"type\"])\ntry:\n    ta.validate_python({\"type\": \"crypto\"})\nexcept ValidationError as e:\n    print(\"برچسب ناشناخته:\", e.errors()[0][\"type\"])",
     "packages": [
      "pydantic"
     ]
    },
    {
     "title": "Pydantic: نوع‌های سفارشی با Annotated و Validator",
     "content": "<p>به‌جای تکرار قاعده در هر مدل، یک «نوع» قابل‌استفاده‌ی مجدد بساز: <code>Annotated[str, AfterValidator(f)]</code>. مثلاً <code>PhoneIR</code> شماره را نرمال می‌کند (حذف فاصله، تبدیل ارقام فارسی، تبدیل <code>+98</code> به <code>0</code>) و اگر نامعتبر بود <code>ValueError</code> می‌دهد؛ FastAPI آن را به خطای ۴۲۲ تبدیل می‌کند. ورودی را در مرز سیستم نرمال کن تا بقیه‌ی کد فقط یک شکل ببیند.</p><div class='code-block'><div class='cb-head'>types.py</div><pre><code>import re\nfrom typing import Annotated\nfrom pydantic import AfterValidator, BaseModel\n\ndef norm_phone(v: str) -&gt; str:\n    v = v.translate(str.maketrans(&quot;۰۱۲۳۴۵۶۷۸۹&quot;, &quot;0123456789&quot;)).replace(&quot; &quot;, &quot;&quot;)\n    v = re.sub(r&quot;^\\+98&quot;, &quot;0&quot;, v)\n    if not re.fullmatch(r&quot;09\\d{9}&quot;, v):\n        raise ValueError(&quot;شماره‌ی موبایل نامعتبر&quot;)\n    return v\n\nPhoneIR = Annotated[str, AfterValidator(norm_phone)]\n\nclass Signup(BaseModel):\n    phone: PhoneIR</code></pre></div>",
     "exercise": "یک نوع NationalCode با بررسی ۱۰ رقم بساز.",
     "py": "import re\nfrom typing import Annotated\nfrom pydantic import AfterValidator, BaseModel, ValidationError\n\ndef norm_phone(v):\n    v = v.translate(str.maketrans(\"۰۱۲۳۴۵۶۷۸۹\", \"0123456789\")).replace(\" \", \"\")\n    v = re.sub(r\"^\\+98\", \"0\", v)\n    if not re.fullmatch(r\"09\\d{9}\", v):\n        raise ValueError(\"شماره‌ی موبایل نامعتبر\")\n    return v\nPhoneIR = Annotated[str, AfterValidator(norm_phone)]\nclass Signup(BaseModel):\n    phone: PhoneIR\n\nfor raw in [\"۰۹۱۲ ۳۴۵ ۶۷۸۹\", \"+989123456789\", \"0912\"]:\n    try:\n        print(raw, \"→\", Signup(phone=raw).phone)\n    except ValidationError as e:\n        print(raw, \"→ خطا:\", e.errors()[0][\"msg\"])",
     "packages": [
      "pydantic"
     ]
    },
    {
     "title": "کالبدشکافی خطای ۴۲۲ و فرمت خطای یکدست",
     "content": "<p>خطای اعتبارسنجی FastAPI فهرستی از <code>{loc, msg, type}</code> است. <code>loc</code> مسیر خطا را می‌دهد (<code>body</code>، <code>query</code>، <code>path</code> و نام فیلد). کلاینت‌ها بهتر است <b>یک فرمت خطای ثابت</b> ببینند (مثلاً Problem Details). با <code>RequestValidationError</code> handler می‌توان فرمت را یکدست و پیام را فارسی کرد، بدون افشای جزئیات داخلی.</p><div class='code-block'><div class='cb-head'>errors.py</div><pre><code>from fastapi import FastAPI, Request\nfrom fastapi.exceptions import RequestValidationError\nfrom fastapi.responses import JSONResponse\n\napp = FastAPI()\n\n@app.exception_handler(RequestValidationError)\nasync def on_invalid(request: Request, exc: RequestValidationError):\n    fields = [{&quot;field&quot;: &quot;.&quot;.join(map(str, e[&quot;loc&quot;][1:])), &quot;code&quot;: e[&quot;type&quot;]}\n              for e in exc.errors()]\n    return JSONResponse(status_code=422,\n                        content={&quot;title&quot;: &quot;ورودی نامعتبر&quot;, &quot;errors&quot;: fields})</code></pre></div>",
     "exercise": "پیام فارسی برای کد missing اضافه کن.",
     "py": "from pydantic import BaseModel, Field, ValidationError\n\nclass Item(BaseModel):\n    name: str = Field(min_length=2)\n    qty: int = Field(gt=0)\n\nMSG = {\"missing\": \"فیلد الزامی است\", \"greater_than\": \"باید بزرگ‌تر از صفر باشد\", \"string_too_short\": \"خیلی کوتاه است\"}\ndef to_problem(e):\n    return {\"title\": \"ورودی نامعتبر\", \"errors\": [\n        {\"field\": \".\".join(map(str, x[\"loc\"])), \"code\": x[\"type\"], \"message\": MSG.get(x[\"type\"], x[\"msg\"])}\n        for x in e.errors()]}\ntry:\n    Item(name=\"a\", qty=0)\nexcept ValidationError as e:\n    for x in to_problem(e)[\"errors\"]: print(x)\ntry:\n    Item(qty=1)\nexcept ValidationError as e:\n    print(to_problem(e)[\"errors\"][0])",
     "packages": [
      "pydantic"
     ]
    },
    {
     "title": "JWT دستی: ساخت، تأیید و حمله‌ی alg=none",
     "content": "<p>JWT سه بخش Base64URL است: <code>header.payload.signature</code>. امضای HS256 یک HMAC روی دو بخش اول است. <b>هشدار:</b> مهاجم می‌تواند header را به <code>alg: none</code> تغییر دهد؛ کتابخانه باید الگوریتم را از <b>فهرست مجاز</b> سمت سرور بخواند، نه از خود توکن. همیشه <code>exp</code> را بررسی و امضا را با <code>hmac.compare_digest</code> (زمان‌ثابت) مقایسه کن. payload رمزنگاری نیست؛ هر کسی می‌خواند.</p><div class='code-block'><div class='cb-head'>jwt_demo.py</div><pre><code>import base64, hashlib, hmac, json, time\n\ndef b64(b): return base64.urlsafe_b64encode(b).rstrip(b&quot;=&quot;).decode()\ndef unb64(s): return base64.urlsafe_b64decode(s + &quot;=&quot; * (-len(s) % 4))\n\ndef sign(payload, key):\n    h = b64(json.dumps({&quot;alg&quot;: &quot;HS256&quot;, &quot;typ&quot;: &quot;JWT&quot;}).encode())\n    p = b64(json.dumps(payload).encode())\n    sig = hmac.new(key, f&quot;{h}.{p}&quot;.encode(), hashlib.sha256).digest()\n    return f&quot;{h}.{p}.{b64(sig)}&quot;\n\ndef verify(token, key):\n    h, p, s = token.split(&quot;.&quot;)\n    if json.loads(unb64(h)).get(&quot;alg&quot;) != &quot;HS256&quot;:\n        raise ValueError(&quot;alg غیرمجاز&quot;)\n    good = hmac.new(key, f&quot;{h}.{p}&quot;.encode(), hashlib.sha256).digest()\n    if not hmac.compare_digest(good, unb64(s)):\n        raise ValueError(&quot;امضا نامعتبر&quot;)\n    data = json.loads(unb64(p))\n    if data[&quot;exp&quot;] &lt; time.time():\n        raise ValueError(&quot;منقضی&quot;)\n    return data</code></pre></div>",
     "exercise": "exp را در گذشته بگذار و خطا را ببین.",
     "py": "import base64, hashlib, hmac, json, time\ndef b64(b): return base64.urlsafe_b64encode(b).rstrip(b\"=\").decode()\ndef unb64(s): return base64.urlsafe_b64decode(s + \"=\" * (-len(s) % 4))\ndef sign(payload, key):\n    h = b64(json.dumps({\"alg\": \"HS256\", \"typ\": \"JWT\"}).encode()); p = b64(json.dumps(payload).encode())\n    return f\"{h}.{p}.{b64(hmac.new(key, f'{h}.{p}'.encode(), hashlib.sha256).digest())}\"\ndef verify(token, key):\n    h, p, s = token.split(\".\")\n    if json.loads(unb64(h)).get(\"alg\") != \"HS256\": raise ValueError(\"alg غیرمجاز\")\n    if not hmac.compare_digest(hmac.new(key, f\"{h}.{p}\".encode(), hashlib.sha256).digest(), unb64(s)): raise ValueError(\"امضا نامعتبر\")\n    d = json.loads(unb64(p))\n    if d[\"exp\"] < time.time(): raise ValueError(\"منقضی\")\n    return d\n\nkey = b\"secret-key-32-bytes-long-enough!!\"\nt = sign({\"sub\": \"42\", \"role\": \"user\", \"exp\": time.time() + 60}, key)\nprint(\"توکن:\", t[:30] + \"...\")\nprint(\"تأیید:\", verify(t, key))\nh, p, s = t.split(\".\")\nforged = b64(json.dumps({\"sub\": \"42\", \"role\": \"admin\", \"exp\": time.time() + 60}).encode())\nfor name, tok in [(\"دست‌کاری payload\", f\"{h}.{forged}.{s}\"),\n                  (\"alg=none\", b64(b'{\"alg\":\"none\"}') + \".\" + forged + \".\"),\n                  (\"منقضی\", sign({\"sub\": \"1\", \"exp\": time.time() - 5}, key))]:\n    try: verify(tok, key)\n    except Exception as e: print(name, \"→ رد شد:\", e)"
    },
    {
     "title": "هش پسورد: PBKDF2، Salt و مقایسه‌ی زمان‌ثابت",
     "content": "<p>رمز هرگز ساده یا با هش سریع (MD5/SHA256 تنها) ذخیره نمی‌شود. باید <b>هش کند و نمکی</b> باشد: <b>salt</b> تصادفی برای هر کاربر (جلوگیری از rainbow table) و تعداد تکرار بالا. بهترین‌ها: Argon2id یا scrypt/bcrypt؛ <code>hashlib.pbkdf2_hmac</code> بدون وابستگی است (حداقل چند صد هزار تکرار در تولید). نتیجه را به صورت <code>algo$iter$salt$hash</code> ذخیره کن تا بعداً پارامترها قابل ارتقا باشند. مقایسه با <code>hmac.compare_digest</code>.</p><div class='code-block'><div class='cb-head'>security.py</div><pre><code>import hashlib, hmac, os\n\nITER = 600_000\n\ndef hash_password(pw: str) -&gt; str:\n    salt = os.urandom(16)\n    dk = hashlib.pbkdf2_hmac(&quot;sha256&quot;, pw.encode(), salt, ITER)\n    return f&quot;pbkdf2${ITER}${salt.hex()}${dk.hex()}&quot;\n\ndef verify_password(pw: str, stored: str) -&gt; bool:\n    _, it, salt, h = stored.split(&quot;$&quot;)\n    dk = hashlib.pbkdf2_hmac(&quot;sha256&quot;, pw.encode(), bytes.fromhex(salt), int(it))\n    return hmac.compare_digest(dk.hex(), h)</code></pre></div>",
     "exercise": "تعداد تکرار را بالا ببر و زمان را مقایسه کن.",
     "py": "import hashlib, hmac, os, time\ndef hash_password(pw, it=50_000):\n    salt = os.urandom(16)\n    dk = hashlib.pbkdf2_hmac(\"sha256\", pw.encode(), salt, it)\n    return f\"pbkdf2${it}${salt.hex()}${dk.hex()}\"\ndef verify_password(pw, stored):\n    _, it, salt, h = stored.split(\"$\")\n    dk = hashlib.pbkdf2_hmac(\"sha256\", pw.encode(), bytes.fromhex(salt), int(it))\n    return hmac.compare_digest(dk.hex(), h)\n\na, b = hash_password(\"رمز-قوی-۱\"), hash_password(\"رمز-قوی-۱\")\nprint(\"هش یکسان برای رمز یکسان؟\", a == b, \"(salt متفاوت)\")\nprint(\"رمز درست:\", verify_password(\"رمز-قوی-۱\", a), \"| غلط:\", verify_password(\"رمز-ضعیف\", a))\nfor it in (1_000, 50_000, 200_000):\n    t = time.perf_counter(); hashlib.pbkdf2_hmac(\"sha256\", b\"x\", b\"s\" * 16, it)\n    print(f\"{it:>7} تکرار → {(time.perf_counter()-t)*1000:.1f} ms\")\nprint(\"قالب ذخیره:\", a.split(\"$\")[0], a.split(\"$\")[1])"
    },
    {
     "title": "Webhook امن: امضای HMAC و جلوگیری از Replay",
     "content": "<p>وقتی سرویس دیگری (درگاه پرداخت، گیت‌هاب) به endpoint تو callback می‌زند، باید مطمئن شوی درخواست واقعی است. روش استاندارد: فرستنده <code>HMAC(secret, timestamp + '.' + body)</code> را در هدر می‌فرستد. تو (۱) امضا را روی <b>بدنه‌ی خام</b> (نه JSON بازسازی‌شده) حساب و زمان‌ثابت مقایسه می‌کنی، (۲) timestamp را در بازه‌ی مجاز (مثلاً ۵ دقیقه) می‌پذیری، (۳) شناسه‌ی رویداد را ذخیره می‌کنی تا تکرار (replay) پردازش نشود. در FastAPI بدنه‌ی خام با <code>await request.body()</code>.</p><div class='code-block'><div class='cb-head'>webhook.py</div><pre><code>import hashlib, hmac, time\nfrom fastapi import FastAPI, Header, HTTPException, Request\n\napp = FastAPI()\nSECRET = b&quot;whsec_test&quot;\nseen: set[str] = set()\n\n@app.post(&quot;/webhook&quot;)\nasync def hook(request: Request, x_ts: str = Header(), x_sig: str = Header(),\n               x_id: str = Header()):\n    body = await request.body()\n    if abs(time.time() - int(x_ts)) &gt; 300:\n        raise HTTPException(400, &quot;timestamp قدیمی&quot;)\n    good = hmac.new(SECRET, f&quot;{x_ts}.&quot;.encode() + body, hashlib.sha256).hexdigest()\n    if not hmac.compare_digest(good, x_sig):\n        raise HTTPException(401, &quot;امضا نامعتبر&quot;)\n    if x_id in seen:\n        return {&quot;status&quot;: &quot;duplicate&quot;}\n    seen.add(x_id)\n    return {&quot;status&quot;: &quot;ok&quot;}</code></pre></div>",
     "exercise": "بازه‌ی timestamp را ۱۰ ثانیه کن.",
     "py": "import hashlib, hmac, time\nSECRET = b\"whsec_test\"; seen = set()\ndef sign(ts, body): return hmac.new(SECRET, f\"{ts}.\".encode() + body, hashlib.sha256).hexdigest()\ndef handle(ts, sig, eid, body, now=None):\n    now = now or time.time()\n    if abs(now - int(ts)) > 300: return \"400 timestamp قدیمی\"\n    if not hmac.compare_digest(sign(ts, body), sig): return \"401 امضا نامعتبر\"\n    if eid in seen: return \"200 duplicate\"\n    seen.add(eid); return \"200 ok\"\n\nbody = b'{\"event\":\"paid\",\"amount\":1000}'; ts = str(int(time.time()))\nsig = sign(ts, body)\nprint(\"اول      :\", handle(ts, sig, \"evt_1\", body))\nprint(\"تکراری   :\", handle(ts, sig, \"evt_1\", body))\nprint(\"بدنه تغییر:\", handle(ts, sig, \"evt_2\", body.replace(b\"1000\", b\"9999\")))\nold = str(int(time.time()) - 3600)\nprint(\"قدیمی    :\", handle(old, sign(old, body), \"evt_3\", body))"
    },
    {
     "title": "Transactional Outbox: انتشار مطمئن رویداد",
     "content": "<p>مشکل: سفارش را در دیتابیس ذخیره می‌کنی و بعد پیام را به صف (Kafka/Redis) می‌فرستی؛ اگر بین این دو سرور بمیرد، داده و رویداد ناسازگار می‌شوند (dual write). راه‌حل <b>Outbox</b>: رویداد را در <b>همان تراکنش</b> داخل جدول <code>outbox</code> می‌نویسی، و یک worker جدا آن را می‌خواند، می‌فرستد و علامت می‌زند. نتیجه «حداقل یک‌بار» (at-least-once) است، پس مصرف‌کننده باید idempotent باشد.</p><div class='code-block'><div class='cb-head'>outbox.py</div><pre><code>async def create_order(session, data):\n    async with session.begin():                 # یک تراکنش\n        order = Order(**data)\n        session.add(order)\n        await session.flush()\n        session.add(Outbox(topic=&quot;order.created&quot;,\n                           payload={&quot;id&quot;: order.id}))\n\nasync def relay(session, publish):\n    rows = (await session.scalars(\n        select(Outbox).where(Outbox.sent_at.is_(None)).limit(50)\n        .with_for_update(skip_locked=True))).all()\n    for r in rows:\n        await publish(r.topic, r.payload)\n        r.sent_at = func.now()\n    await session.commit()</code></pre></div>",
     "exercise": "شکست publish را شبیه‌سازی کن و تکرار را ببین.",
     "py": "import sqlite3, json\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"CREATE TABLE orders(id INTEGER PRIMARY KEY, item TEXT);\"\n                 \"CREATE TABLE outbox(id INTEGER PRIMARY KEY, topic TEXT, payload TEXT, sent INTEGER DEFAULT 0);\")\ndef create_order(item, crash=False):\n    try:\n        with db:\n            cur = db.execute(\"INSERT INTO orders(item) VALUES(?)\", (item,))\n            if crash: raise RuntimeError(\"سرور وسط کار مُرد\")\n            db.execute(\"INSERT INTO outbox(topic,payload) VALUES(?,?)\", (\"order.created\", json.dumps({\"id\": cur.lastrowid})))\n    except RuntimeError as e:\n        print(\"رول‌بک:\", e)\ncreate_order(\"قهوه\"); create_order(\"کیک\", crash=True); create_order(\"چای\")\nprint(\"سفارش‌ها:\", db.execute(\"SELECT item FROM orders\").fetchall())\nprint(\"outbox  :\", db.execute(\"SELECT payload FROM outbox\").fetchall(), \"(بدون ناسازگاری)\")\n\npublished, fail_once = [], [True]\ndef publish(topic, payload):\n    if fail_once[0]: fail_once[0] = False; raise ConnectionError(\"broker down\")\n    published.append(payload)\ndef relay():\n    for rid, topic, payload in db.execute(\"SELECT id,topic,payload FROM outbox WHERE sent=0\").fetchall():\n        try: publish(topic, payload)\n        except ConnectionError: print(\"ارسال شکست خورد، بعداً تکرار می‌شود\"); return\n        db.execute(\"UPDATE outbox SET sent=1 WHERE id=?\", (rid,)); db.commit()\nrelay(); relay()\nprint(\"منتشر شد:\", published)",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "همروندی خوش‌بینانه با ETag و If-Match",
     "content": "<p>دو کاربر یک رکورد را هم‌زمان ویرایش می‌کنند؛ نفر دوم نسخه‌ی اول را بازنویسی می‌کند (lost update). راه‌حل HTTP: سرور با پاسخ GET یک <code>ETag</code> (نسخه) می‌دهد؛ کلاینت در PUT هدر <code>If-Match</code> می‌فرستد؛ اگر نسخه تغییر کرده باشد سرور <b>412 Precondition Failed</b> برمی‌گرداند و کاربر باید دوباره بخواند و ادغام کند. در دیتابیس با ستون <code>version</code> و <code>UPDATE ... WHERE version = :v</code> پیاده می‌شود؛ <code>rowcount == 0</code> یعنی تعارض.</p><div class='code-block'><div class='cb-head'>etag.py</div><pre><code>from fastapi import FastAPI, Header, HTTPException, Response\n\n@app.get(&quot;/docs/{id}&quot;)\ndef read(id: int, response: Response):\n    d = db.get(id)\n    response.headers[&quot;ETag&quot;] = f&#x27;&quot;{d.version}&quot;&#x27;\n    return d\n\n@app.put(&quot;/docs/{id}&quot;)\ndef update(id: int, body: DocIn, if_match: str = Header()):\n    v = int(if_match.strip(&#x27;&quot;&#x27;))\n    n = db.execute(&quot;UPDATE docs SET text=:t, version=version+1 &quot;\n                   &quot;WHERE id=:id AND version=:v&quot;, {&quot;t&quot;: body.text, &quot;id&quot;: id, &quot;v&quot;: v}).rowcount\n    if n == 0:\n        raise HTTPException(412, &quot;نسخه تغییر کرده است&quot;)</code></pre></div>",
     "exercise": "اگر If-Match نبود، 428 برگردان.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE docs(id INTEGER PRIMARY KEY, text TEXT, version INTEGER DEFAULT 1)\")\ndb.execute(\"INSERT INTO docs(text) VALUES('نسخه اول')\")\ndef read(i): return db.execute(\"SELECT text,version FROM docs WHERE id=?\", (i,)).fetchone()\ndef update(i, text, if_match):\n    n = db.execute(\"UPDATE docs SET text=?, version=version+1 WHERE id=? AND version=?\", (text, i, if_match)).rowcount\n    return 200 if n else 412\na_text, a_ver = read(1); b_text, b_ver = read(1)\nprint(\"کاربر A ذخیره:\", update(1, \"ویرایش A\", a_ver))\nprint(\"کاربر B ذخیره:\", update(1, \"ویرایش B\", b_ver), \"← 412: باید دوباره بخواند\")\nt, v = read(1); print(\"B دوباره می‌خواند:\", t, \"v\" + str(v))\nprint(\"B تلاش مجدد :\", update(1, \"ویرایش B روی A\", v), \"|\", read(1))",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "حذف نرم و ردگیری تغییرات (Audit Log)",
     "content": "<p>حذف واقعی داده را برنمی‌گرداند و ارتباط‌ها را می‌شکند. <b>Soft delete</b> با ستون <code>deleted_at</code>: رکورد می‌ماند ولی در پرس‌وجوها فیلتر می‌شود (<code>WHERE deleted_at IS NULL</code>؛ بهتر یک view یا scope مرکزی تا فراموش نشود). <b>Audit log</b> نشان می‌دهد چه کسی، کی و چه چیزی را تغییر داد. نکته‌ی حریم خصوصی: «حذف» به معنای پاک‌سازی واقعی داده‌ی شخصی (حق فراموشی) نیست؛ برای آن باید سیاست پاک‌سازی جداگانه داشت. یکتایی ایمیل با soft delete نیاز به ایندکس جزئی دارد.</p><div class='code-block'><div class='cb-head'>softdelete.py</div><pre><code>class SoftDeleteMixin:\n    deleted_at = Column(DateTime, nullable=True)\n\ndef active(model):\n    return select(model).where(model.deleted_at.is_(None))\n\n@app.delete(&quot;/users/{id}&quot;, status_code=204)\ndef remove(id: int, db=Depends(get_db), me=Depends(current_user)):\n    u = db.get(User, id)\n    u.deleted_at = func.now()\n    db.add(Audit(actor=me.id, action=&quot;delete&quot;, target=f&quot;user:{id}&quot;))\n    db.commit()</code></pre></div>",
     "exercise": "برای restore یک اکشن audit جدا ثبت کن.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript('''\nCREATE TABLE users(id INTEGER PRIMARY KEY, email TEXT, deleted_at TEXT);\nCREATE UNIQUE INDEX uq_active_email ON users(email) WHERE deleted_at IS NULL;\nCREATE VIEW active_users AS SELECT * FROM users WHERE deleted_at IS NULL;\nCREATE TABLE audit(id INTEGER PRIMARY KEY, actor INTEGER, action TEXT, target TEXT, at TEXT DEFAULT CURRENT_TIMESTAMP);\n''')\ndb.execute(\"INSERT INTO users(email) VALUES('a@x.com'),('b@x.com')\")\ndef remove(uid, actor):\n    with db:\n        db.execute(\"UPDATE users SET deleted_at=CURRENT_TIMESTAMP WHERE id=?\", (uid,))\n        db.execute(\"INSERT INTO audit(actor,action,target) VALUES(?,?,?)\", (actor, \"delete\", f\"user:{uid}\"))\nremove(1, actor=99)\nprint(\"فعال:\", db.execute(\"SELECT id,email FROM active_users\").fetchall())\nprint(\"کل  :\", db.execute(\"SELECT COUNT(*) FROM users\").fetchone()[0], \"(رکورد می‌ماند)\")\ndb.execute(\"INSERT INTO users(email) VALUES('a@x.com')\")\nprint(\"ایمیل حذف‌شده دوباره ثبت شد (ایندکس جزئی) ✓\")\ntry: db.execute(\"INSERT INTO users(email) VALUES('b@x.com')\")\nexcept sqlite3.IntegrityError as e: print(\"تکراری فعال رد شد:\", e)\nprint(\"audit:\", db.execute(\"SELECT actor,action,target FROM audit\").fetchall())",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "کلید API: ذخیره‌ی هش‌شده و پیشوند شناسایی",
     "content": "<p>کلید API مثل رمز است: فقط یک بار به کاربر نشان داده می‌شود و در دیتابیس <b>فقط هش</b> آن ذخیره می‌شود. چون کلید تصادفی و طولانی است، SHA-256 ساده کافی است (نیازی به هش کند نیست). قالب مرسوم: <code>sk_live_&lt;prefix&gt;_&lt;secret&gt;</code>؛ <code>prefix</code> غیرمحرمانه در دیتابیس برای جست‌وجوی سریع و نمایش در پنل («sk_…a1b2») می‌ماند. هر کلید دامنه‌ی دسترسی (scope)، تاریخ انقضا و امکان ابطال دارد. با <code>secrets.token_urlsafe</code> بساز، نه <code>random</code>.</p><div class='code-block'><div class='cb-head'>apikeys.py</div><pre><code>import hashlib, hmac, secrets\nfrom fastapi import Depends, HTTPException\nfrom fastapi.security import APIKeyHeader\n\nheader = APIKeyHeader(name=&quot;X-API-Key&quot;)\n\ndef verify_key(key: str = Depends(header), db=Depends(get_db)):\n    prefix = key.split(&quot;_&quot;)[2]\n    row = db.query(ApiKey).filter_by(prefix=prefix, revoked=False).first()\n    digest = hashlib.sha256(key.encode()).hexdigest()\n    if not row or not hmac.compare_digest(row.digest, digest):\n        raise HTTPException(401)\n    return row</code></pre></div>",
     "exercise": "scope را در بررسی دسترسی اعمال کن.",
     "py": "import hashlib, hmac, secrets, sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE keys(prefix TEXT PRIMARY KEY, digest TEXT, scope TEXT, revoked INTEGER DEFAULT 0)\")\ndef create(scope):\n    prefix, secret = secrets.token_hex(4), secrets.token_urlsafe(24)\n    key = f\"sk_live_{prefix}_{secret}\"\n    db.execute(\"INSERT INTO keys VALUES(?,?,?,0)\", (prefix, hashlib.sha256(key.encode()).hexdigest(), scope))\n    return key\ndef verify(key, need):\n    try: prefix = key.split(\"_\")[2]\n    except IndexError: return \"401 قالب نامعتبر\"\n    row = db.execute(\"SELECT digest,scope,revoked FROM keys WHERE prefix=?\", (prefix,)).fetchone()\n    if not row or row[2] or not hmac.compare_digest(row[0], hashlib.sha256(key.encode()).hexdigest()): return \"401\"\n    return \"200\" if need in row[1].split(\",\") else \"403 دسترسی کافی نیست\"\nk = create(\"read,write\")\nprint(\"کلید (یک‌بار نمایش):\", k[:16] + \"…\")\nprint(\"ذخیره در DB: فقط هش\", db.execute(\"SELECT digest FROM keys\").fetchone()[0][:16] + \"…\")\nprint(\"read :\", verify(k, \"read\"), \"| admin:\", verify(k, \"admin\"))\nprint(\"کلید جعلی:\", verify(k[:-1] + \"x\", \"read\"))\ndb.execute(\"UPDATE keys SET revoked=1\"); print(\"بعد از ابطال:\", verify(k, \"read\"))",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "Dead Letter Queue: پیام‌های همیشه‌شکست‌خورده",
     "content": "<p>در صف کار، بعضی پیام‌ها هرگز موفق نمی‌شوند (داده‌ی خراب، باگ). اگر بی‌نهایت تلاش شود، صف مسدود می‌شود («poison message»). الگو: هر پیام شمارنده‌ی تلاش دارد؛ با <b>backoff</b> تکرار می‌شود و بعد از N بار به <b>Dead Letter Queue</b> می‌رود تا انسان یا ابزار بررسی کند، بدون مسدود کردن بقیه. در DLQ علت خطا، تعداد تلاش و پیام اصلی را نگه دار و برای بازپخش (replay) ابزار داشته باش. روی DLQ هشدار بگذار.</p><div class='code-block'><div class='cb-head'>worker.py</div><pre><code>@celery.task(bind=True, max_retries=5, acks_late=True)\ndef process(self, msg):\n    try:\n        handle(msg)\n    except TransientError as e:\n        raise self.retry(exc=e, countdown=2 ** self.request.retries)\n    except Exception as e:                     # دائمی\n        dead_letter.delay(msg, repr(e), self.request.retries)</code></pre></div>",
     "exercise": "تعداد تلاش را ۵ کن و پیام‌ها را ببین.",
     "py": "from collections import deque\nclass Transient(Exception): pass\ndef handle(m):\n    if m[\"kind\"] == \"flaky\" and m[\"tries\"] < 2: raise Transient(\"موقت\")\n    if m[\"kind\"] == \"poison\": raise ValueError(\"داده‌ی خراب\")\n    return \"ok\"\nq = deque({\"id\": i, \"kind\": k, \"tries\": 0} for i, k in enumerate([\"good\", \"flaky\", \"poison\", \"good\"]))\ndlq, done, MAX = [], [], 3\nwhile q:\n    m = q.popleft()\n    try:\n        handle(m); done.append(m[\"id\"])\n    except Transient:\n        m[\"tries\"] += 1\n        (q.append(m) if m[\"tries\"] < MAX else dlq.append((m, \"تلاش‌ها تمام شد\")))\n    except Exception as e:\n        dlq.append((m, repr(e)))\nprint(\"موفق:\", done)\nprint(\"DLQ :\", [(m[\"id\"], why) for m, why in dlq])\nprint(\"صف مسدود نشد؛ بقیه‌ی پیام‌ها پردازش شدند ✓\")"
    },
    {
     "title": "چندمستأجری (Multi-Tenancy): جداسازی داده‌ی مشتریان",
     "content": "<p>در SaaS چند مشتری (tenant) یک دیتابیس را مشترک استفاده می‌کنند. بدترین باگ: نشت داده‌ی مشتری A به B. سه الگو: دیتابیس جدا، schema جدا، یا <b>ستون <code>tenant_id</code></b> در همه‌ی جدول‌ها. قاعده: tenant را از <b>توکن احراز هویت</b> بگیر نه از ورودی کاربر، و فیلتر را در یک لایه‌ی مرکزی (dependency/Repository) اعمال کن تا هیچ query بدون آن نوشته نشود. در PostgreSQL ‏Row Level Security لایه‌ی دفاعی دوم است. هر کلید یکتا باید شامل tenant_id باشد.</p><div class='code-block'><div class='cb-head'>tenant.py</div><pre><code>from fastapi import Depends\n\ndef tenant_id(user=Depends(current_user)) -&gt; int:\n    return user.tenant_id            # از توکن، نه از query\n\nclass Repo:\n    def __init__(self, db, tid=Depends(tenant_id)):\n        self.db, self.tid = db, tid\n    def invoices(self):\n        return self.db.query(Invoice).filter(Invoice.tenant_id == self.tid)</code></pre></div>",
     "exercise": "یک ایندکس یکتا روی (tenant_id, number) بساز.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.executescript(\"CREATE TABLE invoices(id INTEGER PRIMARY KEY, tenant_id INT, number TEXT, total INT, UNIQUE(tenant_id, number));\")\ndb.executemany(\"INSERT INTO invoices(tenant_id,number,total) VALUES(?,?,?)\",\n               [(1, \"INV-1\", 100), (1, \"INV-2\", 200), (2, \"INV-1\", 999)])\nclass Repo:\n    def __init__(self, tid): self.tid = tid\n    def all(self): return db.execute(\"SELECT number,total FROM invoices WHERE tenant_id=?\", (self.tid,)).fetchall()\n    def get(self, iid): return db.execute(\"SELECT number,total FROM invoices WHERE id=? AND tenant_id=?\", (iid, self.tid)).fetchone()\nprint(\"tenant 1:\", Repo(1).all())\nprint(\"tenant 2:\", Repo(2).all())\nprint(\"A به فاکتور B دسترسی دارد؟ (id=3):\", Repo(1).get(3), \"← None\")\nprint(\"شماره‌ی یکسان در دو tenant مجاز است: INV-1 دو بار ✓\")\ntry: db.execute(\"INSERT INTO invoices(tenant_id,number,total) VALUES(1,'INV-1',5)\")\nexcept sqlite3.IntegrityError: print(\"تکرار داخل همان tenant رد شد ✓\")",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "عملیات دسته‌ای و شکست جزئی (Bulk و 207)",
     "content": "<p>endpoint دسته‌ای (مثلاً ایجاد ۱۰۰ سفارش) باید تصمیم بگیرد: «همه یا هیچ» (یک تراکنش) یا «شکست جزئی». شکست جزئی نیاز به پاسخ <b>به‌ازای هر آیتم</b> دارد تا کلاینت بداند کدام ردیف خطا داشت: معمولاً <code>207 Multi-Status</code> یا ۲۰۰ با آرایه‌ی نتایج. هر نتیجه: ایندکس ورودی، وضعیت و خطا. حد بالا برای تعداد آیتم بگذار (DoS)، و برای تکرار امن Idempotency Key بگیر. اعتبارسنجی همه را قبل از نوشتن انجام بده تا کار نصفه کمتر شود.</p><div class='code-block'><div class='cb-head'>bulk.py</div><pre><code>@app.post(&quot;/orders/bulk&quot;, status_code=207)\ndef bulk(items: list[OrderIn] = Body(max_length=100)):\n    results = []\n    for i, it in enumerate(items):\n        try:\n            with db.begin_nested():            # savepoint برای هر آیتم\n                results.append({&quot;i&quot;: i, &quot;status&quot;: 201, &quot;id&quot;: create(it).id})\n        except IntegrityError:\n            results.append({&quot;i&quot;: i, &quot;status&quot;: 409, &quot;error&quot;: &quot;تکراری&quot;})\n    return {&quot;results&quot;: results}</code></pre></div>",
     "exercise": "حالت همه‌یا‌هیچ را با یک تراکنش بنویس.",
     "py": "import sqlite3\ndb = sqlite3.connect(\":memory:\", isolation_level=None)\ndb.execute(\"CREATE TABLE orders(sku TEXT PRIMARY KEY, qty INT CHECK(qty>0))\")\ndef bulk(items, atomic=False):\n    results = []\n    if atomic: db.execute(\"BEGIN\")\n    for i, (sku, qty) in enumerate(items):\n        try:\n            if not atomic: db.execute(\"SAVEPOINT s\")\n            db.execute(\"INSERT INTO orders VALUES(?,?)\", (sku, qty))\n            if not atomic: db.execute(\"RELEASE s\")\n            results.append({\"i\": i, \"status\": 201})\n        except sqlite3.IntegrityError as e:\n            if atomic:\n                db.execute(\"ROLLBACK\"); return [{\"status\": 409, \"error\": str(e)}]\n            db.execute(\"ROLLBACK TO s\"); db.execute(\"RELEASE s\")\n            results.append({\"i\": i, \"status\": 409, \"error\": str(e).split(\":\")[0]})\n    if atomic: db.execute(\"COMMIT\")\n    return results\ndata = [(\"A\", 1), (\"B\", 0), (\"A\", 2), (\"C\", 3)]\nfor r in bulk(data): print(r)\nprint(\"ذخیره‌شده:\", db.execute(\"SELECT sku FROM orders\").fetchall())\ndb.execute(\"DELETE FROM orders\")\nprint(\"همه‌یا‌هیچ:\", bulk(data, atomic=True), \"| تعداد:\", db.execute(\"SELECT COUNT(*) FROM orders\").fetchone()[0])",
     "packages": [
      "sqlite3"
     ]
    },
    {
     "title": "طرح‌واره‌ی OpenAPI از Pydantic: API به‌عنوان قرارداد",
     "content": "<p>FastAPI از مدل‌های Pydantic یک JSON Schema می‌سازد و در <code>/openapi.json</code> می‌گذارد؛ همان که <code>/docs</code> نمایش می‌دهد و ابزارها (تولید SDK، تست قرارداد) از آن می‌خوانند. با <code>Field(description=..., examples=[...])</code> و <code>model_config</code> می‌توان مستندات غنی داد. <b>قرارداد را تست کن:</b> تغییر شکستن‌دار (حذف فیلد، تغییر نوع) را با مقایسه‌ی schema قبل و بعد در CI پیدا کن. نسخه‌ی قدیمی را تا اعلان رسمی نگه دار.</p><div class='code-block'><div class='cb-head'>schema.py</div><pre><code>from pydantic import BaseModel, Field\n\nclass Product(BaseModel):\n    id: int\n    name: str = Field(description=&quot;نام کالا&quot;, min_length=2, examples=[&quot;قهوه&quot;])\n    price: int = Field(gt=0, description=&quot;قیمت به ریال&quot;)\n\n@app.get(&quot;/products/{id}&quot;, response_model=Product,\n         summary=&quot;دریافت یک کالا&quot;, responses={404: {&quot;description&quot;: &quot;یافت نشد&quot;}})\ndef get_product(id: int): ...</code></pre></div>",
     "exercise": "یک فیلد اجباری جدید اضافه کن و تغییر شکستن‌دار را ببین.",
     "py": "import json\nfrom pydantic import BaseModel, Field\nclass Product(BaseModel):\n    id: int\n    name: str = Field(description=\"نام کالا\", min_length=2, examples=[\"قهوه\"])\n    price: int = Field(gt=0, description=\"قیمت به ریال\")\nclass ProductV2(Product):\n    sku: str                       # فیلد اجباری جدید\ns1, s2 = Product.model_json_schema(), ProductV2.model_json_schema()\nprint(json.dumps(s1[\"properties\"][\"price\"], ensure_ascii=False))\nprint(\"الزامی‌ها v1:\", s1[\"required\"], \"| v2:\", s2[\"required\"])\ndef breaking(old, new):\n    out = []\n    for f in new[\"required\"]:\n        if f not in old[\"required\"]: out.append(f\"فیلد الزامی جدید: {f}\")\n    for f, p in old[\"properties\"].items():\n        if f not in new[\"properties\"]: out.append(f\"فیلد حذف شد: {f}\")\n        elif p.get(\"type\") != new[\"properties\"][f].get(\"type\"): out.append(f\"نوع {f} تغییر کرد\")\n    return out\nprint(\"تغییرات شکستن‌دار v1→v2:\", breaking(s1, s2))",
     "packages": [
      "pydantic"
     ]
    },
    {
     "title": "مهلت و هم‌زمانی در async: timeout، Semaphore و gather",
     "content": "<p>endpoint ناهمگام که به چند سرویس بیرونی وصل می‌شود باید <b>مهلت</b> داشته باشد؛ بدون آن یک وابستگی کند همه‌ی کارگرها را اشغال می‌کند. در پایتون ۳٫۱۱+ <code>asyncio.timeout(sec)</code>؛ و برای هم‌زمانی: <code>asyncio.gather(*tasks, return_exceptions=True)</code> تا یک شکست بقیه را لغو نکند، و <code>asyncio.Semaphore(n)</code> برای محدود کردن تعداد فراخوانی هم‌زمان به یک منبع (مثلاً ۱۰ اتصال DB). «مهلت کل درخواست» (deadline) را به لایه‌های پایین‌تر بده نه فقط مهلت هر فراخوانی.</p><div class='code-block'><div class='cb-head'>fanout.py</div><pre><code>import asyncio\nsem = asyncio.Semaphore(10)\n\nasync def call(svc):\n    async with sem:\n        async with asyncio.timeout(0.8):\n            return await svc.fetch()\n\n@app.get(&quot;/dashboard&quot;)\nasync def dashboard():\n    res = await asyncio.gather(*(call(s) for s in SERVICES),\n                               return_exceptions=True)\n    return {&quot;ok&quot;: [r for r in res if not isinstance(r, Exception)],\n            &quot;failed&quot;: sum(isinstance(r, Exception) for r in res)}</code></pre></div>",
     "exercise": "مهلت را ۰٫۰۵ ثانیه کن.",
     "py": "import asyncio, time\nactive = peak = 0\nasync def svc(name, delay):\n    global active, peak\n    active += 1; peak = max(peak, active)\n    try: await asyncio.sleep(delay); return name\n    finally: active -= 1\nsem = asyncio.Semaphore(2)\nasync def call(name, delay):\n    async with sem:\n        async with asyncio.timeout(0.15):\n            return await svc(name, delay)\nasync def main():\n    t = time.perf_counter()\n    res = await asyncio.gather(*(call(n, d) for n, d in [(\"a\", .05), (\"b\", .5), (\"c\", .05), (\"d\", .05)]), return_exceptions=True)\n    print(\"نتایج:\", [r if not isinstance(r, Exception) else type(r).__name__ for r in res])\n    print(\"حداکثر هم‌زمان:\", peak, \"(Semaphore=2) | زمان ≈\", round(time.perf_counter() - t, 2), \"s\")\nawait main()"
    },
    {
     "title": "پرچم ویژگی (Feature Flag) و انتشار تدریجی",
     "content": "<p>Feature flag اجازه می‌دهد قابلیت جدید را بدون دیپلوی دوباره روشن/خاموش کنی و فقط برای درصدی از کاربران فعال شود (canary). نکته‌ی کلیدی: تخصیص باید <b>پایدار</b> باشد؛ یعنی یک کاربر هر بار همان نتیجه را ببیند. راه: <code>hash(flag + user_id) % 100 &lt; percent</code>. با تغییر نام flag تقسیم‌بندی کاربران عوض می‌شود. با افزایش درصد، کاربران قبلی فعال می‌مانند (هش ثابت). Flagهای قدیمی را پاک کن (بدهی فنی). پیش‌فرض ایمن: در خطای سرویس flag، رفتار قدیمی.</p><div class='code-block'><div class='cb-head'>flags.py</div><pre><code>import hashlib\n\ndef enabled(flag: str, user_id: str, percent: int) -&gt; bool:\n    h = hashlib.sha256(f&quot;{flag}:{user_id}&quot;.encode()).digest()\n    bucket = int.from_bytes(h[:4], &quot;big&quot;) % 100\n    return bucket &lt; percent\n\n@app.get(&quot;/checkout&quot;)\ndef checkout(user=Depends(current_user)):\n    if enabled(&quot;new_checkout&quot;, str(user.id), FLAGS[&quot;new_checkout&quot;]):\n        return new_flow(user)\n    return old_flow(user)</code></pre></div>",
     "exercise": "درصد را از ۲۰ به ۵۰ ببر و پایداری را بررسی کن.",
     "py": "import hashlib\ndef enabled(flag, uid, pct):\n    h = hashlib.sha256(f\"{flag}:{uid}\".encode()).digest()\n    return int.from_bytes(h[:4], \"big\") % 100 < pct\nusers = [f\"u{i}\" for i in range(2000)]\nfor pct in (0, 10, 50, 100):\n    n = sum(enabled(\"new_checkout\", u, pct) for u in users)\n    print(f\"{pct:>3}% → {n/len(users)*100:.1f}% کاربران فعال\")\na = {u for u in users if enabled(\"new_checkout\", u, 20)}\nb = {u for u in users if enabled(\"new_checkout\", u, 50)}\nprint(\"پایدار: همه‌ی کاربران ۲۰٪ در ۵۰٪ هم هستند؟\", a <= b)\nprint(\"تکرار یک کاربر ثابت است؟\", len({enabled(\"x\", \"u7\", 30) for _ in range(5)}) == 1)\nc = {u for u in users if enabled(\"other_flag\", u, 20)}\nprint(\"flag دیگر گروه متفاوتی می‌سازد؟ هم‌پوشانی:\", round(len(a & c) / len(a), 2), \"(≈0.2 مورد انتظار)\")"
    }
   ],
   "quiz": [
    {
     "q": "اگه داخل async def یک time.sleep(5) بذاریم چی می‌شه؟",
     "options": [
      "فقط همون درخواست کند می‌شه",
      "Event Loop بلاک می‌شه و بقیهٔ درخواست‌ها هم منتظر می‌مونن",
      "هیچی",
      "خطا می‌ده"
     ],
     "answer": 1,
     "explain": "باید از await asyncio.sleep یا کتابخانهٔ async استفاده کرد."
    },
    {
     "q": "BackgroundTasks کِی اجرا می‌شن؟",
     "options": [
      "قبل از پاسخ",
      "بعد از ارسال پاسخ به کلاینت",
      "هر ثانیه",
      "فقط در تست"
     ],
     "answer": 1,
     "explain": "برای کارهای کوتاه مثل ایمیل مناسبه؛ برای کار سنگین از صف (Celery/RQ) استفاده کن."
    },
    {
     "q": "مزیت Docker چیه؟",
     "options": [
      "کد رو کوتاه می‌کنه",
      "محیط اجرای یکسان و قابل‌تکرار در توسعه و سرور",
      "سرعت اینترنت",
      "حذف نیاز به تست"
     ],
     "answer": 1,
     "explain": "«روی سیستم من کار می‌کرد» رو حل می‌کنه."
    },
    {
     "q": "مشکل N+1 را چطور حل می‌کنیم؟",
     "options": [
      "selectinload/joinedload",
      "افزایش RAM",
      "حذف رابطه",
      "استفاده از sleep"
     ],
     "answer": 0,
     "explain": "رابطه‌ها را یک‌جا می‌خواند."
    },
    {
     "q": "برای کار سنگین و مهم بعد از پاسخ کدام بهتر است؟",
     "options": [
      "صف Celery/Redis",
      "BackgroundTasks همیشه",
      "time.sleep",
      "print"
     ],
     "answer": 0,
     "explain": "با ری‌استارت از بین نمی‌رود."
    },
    {
     "q": "Cursor Pagination چه مزیتی دارد؟",
     "options": [
      "پایدار و سریع روی جدول بزرگ",
      "ساده‌تر از offset",
      "نیاز به دیتابیس ندارد",
      "فقط برای GET"
     ],
     "answer": 0,
     "explain": "با درج داده تکراری نمی‌دهد."
    },
    {
     "q": "dependency_overrides برای چیست؟",
     "options": [
      "جایگزین‌کردن وابستگی در تست",
      "تغییر پورت",
      "رمزنگاری",
      "ساخت مدل"
     ],
     "answer": 0,
     "explain": "دیتابیس واقعی را با آزمایشی عوض می‌کند."
    },
    {
     "q": "Idempotency Key برای چیست؟",
     "options": [
      "جلوگیری از اجرای تکراری یک درخواست ایجاد",
      "رمزنگاری",
      "کش تصویر",
      "لاگ"
     ],
     "answer": 0,
     "explain": "نتیجه‌ی اول را برای تکرار برمی‌گرداند."
    },
    {
     "q": "Circuit Breaker چه می‌کند؟",
     "options": [
      "پس از چند شکست سرویس خراب را موقتاً صدا نمی‌زند",
      "سرعت را زیاد می‌کند",
      "فایل می‌خواند",
      "رمز می‌کند"
     ],
     "answer": 0,
     "explain": "از معطل‌ماندن کل سیستم جلوگیری می‌کند."
    },
    {
     "q": "مدل ML کجا بارگذاری شود؟",
     "options": [
      "یک‌بار هنگام شروع (lifespan)",
      "در هر درخواست",
      "در مرورگر",
      "در لاگ"
     ],
     "answer": 0,
     "explain": "بارگذاری مکرر بسیار کند است."
    },
    {
     "q": "ETag چه کاری می‌کند؟",
     "options": [
      "اجازه‌ی پاسخ ۳۰۴ بدون بدنه می‌دهد",
      "رمز می‌کند",
      "ایندکس می‌سازد",
      "هیچ"
     ],
     "answer": 0,
     "explain": "با If-None-Match کش را بررسی می‌کند."
    },
    {
     "q": "چرا امضای webhook باید روی بدنه‌ی خام محاسبه شود؟",
     "options": [
      "بازسازی JSON ممکن است بایت‌ها را تغییر دهد و امضا نخواند",
      "چون سریع‌تر است",
      "چون JSON رمزنگاری می‌شود",
      "چون header امضا ندارد"
     ],
     "answer": 0,
     "explain": "HMAC روی بایت‌های دقیق فرستاده‌شده ساخته شده است."
    },
    {
     "q": "Transactional Outbox چه مشکلی را حل می‌کند؟",
     "options": [
      "ناسازگاری دیتابیس و پیام وقتی دو نوشتن جدا انجام شود",
      "کندی کوئری",
      "حجم لاگ",
      "نبود ایندکس"
     ],
     "answer": 0,
     "explain": "رویداد در همان تراکنش داده نوشته می‌شود و بعداً منتشر می‌شود."
    },
    {
     "q": "با If-Match و ETag وقتی نسخه تغییر کرده باشد سرور چه برمی‌گرداند؟",
     "options": [
      "412 Precondition Failed",
      "404",
      "200",
      "500"
     ],
     "answer": 0,
     "explain": "کلاینت باید دوباره بخواند و ادغام کند."
    },
    {
     "q": "برای انتشار تدریجی feature flag چرا از هش پایدار استفاده می‌کنیم؟",
     "options": [
      "تا هر کاربر همیشه همان نتیجه را ببیند",
      "تا سرعت زیاد شود",
      "تا کلید کوتاه شود",
      "تا کش حذف شود"
     ],
     "answer": 0,
     "explain": "با افزایش درصد، کاربران قبلی فعال می‌مانند."
    }
   ],
   "challenge": {
    "task": "برای API لاگین/ثبت‌نامت سه تست pytest بنویس: ثبت‌نام موفق، لاگین با رمز غلط (۴۰۱)، دسترسی به /me بدون توکن (۴۰۱). بعد یک Dockerfile برای اجرای پروژه بنویس.",
    "hint1": "از TestClient استفاده کن و status_code رو assert کن.",
    "hint2": "برای تست دیتابیس از یک SQLite موقت و dependency_overrides[get_db] استفاده کن تا دیتابیس واقعی خراب نشه.",
    "solution": "def test_wrong_password():\n    client.post(\"/register\", json={\"email\":\"a@b.com\",\"password\":\"123456\"})\n    r = client.post(\"/login\", data={\"username\":\"a@b.com\",\"password\":\"bad\"})\n    assert r.status_code == 401\n\ndef test_me_no_token():\n    assert client.get(\"/me\").status_code == 401"
   }
  }
 ],
 "project": {
  "title": "API کامل وبلاگ با FastAPI و PostgreSQL",
  "brief": "یک REST API برای یک وبلاگ ساده بساز: مدل Post (title, content, author) با SQLAlchemy و PostgreSQL، عملیات CRUD کامل، احراز هویت JWT برای route های نوشتن (فقط کاربر لاگین‌شده بتونه پست جدید بسازه)، و حداقل ۳ تست pytest.",
  "requirements": [
   "مدل Pydantic برای اعتبارسنجی ورودی و مدل SQLAlchemy برای دیتابیس (این دو باید جدا باشن)",
   "عملیات کامل CRUD (GET همه، GET با id، POST، PUT، DELETE)",
   "محافظت از route های POST/PUT/DELETE با Depends(get_current_user)",
   "حداقل ۳ تست pytest با TestClient"
  ],
  "hints": [
   "اول API رو کاملاً بدون Authentication بساز و تست کن، بعد لایهٔ JWT رو اضافه کن — اضافه‌کردن امنیت به یه چیز کارکردن‌شده، راحت‌تر از دیباگ‌کردن هردو با همه."
  ]
 }
});
