(window.COURSES=window.COURSES||[]).push({
 "id": "projects",
 "name": "پروژه‌های نهایی",
 "icon": "🚀",
 "kind": "theory",
 "desc": "جایی که پروژه‌های اسباب‌بازی تمام می‌شوند و کار واقعی شروع می‌شود",
 "covers": [
  "Personal Finance App",
  "Authentication System",
  "Online Shop (Full-Stack)",
  "Admin Dashboard",
  "پروژهٔ نهایی: یک Full-Stack Application کامل"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "چک‌لیست آمادگی برای پروژه‌های واقعی",
     "content": "<p>قبل از شروع، یک خودارزیابی صادقانه بکن. مسیری که تا اینجا طی کردی این بود:</p><div class='code-block'><div class='cb-head'>نقشهٔ راه</div><pre><code>HTML → CSS → JavaScript → SEO → HTTP/Backend Concepts\n  → Node.js → Express → Database (SQL + NoSQL)\n  → Authentication → Security → REST API → Full-Stack</code></pre></div><p>اگر توی هرکدوم از این مراحل هنوز مطمئن نیستی، برگرد و آزمون همون مرحله رو دوباره بده — پروژه‌های این بخش همه‌شون رو با هم لازم دارن.</p><p><b>یادت باشه:</b> جواب این پروژه‌ها رو از قبل بهت نمی‌دم. اول خودت بساز؛ اگه گیر کردی، توی همین چت بگو کجا گیر کردی — یه راهنمایی کوچیک می‌گیری، نه جواب کامل. جواب کامل فقط وقتی می‌گیری که واقعاً تلاشتو کرده باشی.</p>",
     "exercise": "برای هر یک از ۹ مرحله‌ای که تا اینجا دیدی (HTML تا Security)، به خودت از ۱ تا ۵ نمره بده. هر مرحله‌ای که زیر ۳ گرفت، قبل از شروع پروژه‌ها بهش برگرد."
    },
    {
     "title": "README حرفه‌ای و پرتفولیو",
     "content": "<p>README خوب این‌ها را دارد: توضیح یک‌خطی، اسکرین‌شات، نحوه‌ی نصب و اجرا، فناوری‌ها و لینک دمو. پرتفولیو را روی سه پروژه‌ی کامل بساز، نه ده پروژه‌ی نیمه‌کاره.</p>",
     "exercise": "README یکی از پروژه‌هایت را با ساختار بالا بازنویسی کن."
    },
    {
     "title": "انتشار پروژه: دامنه، هاست و CI/CD",
     "content": "<p>سایت‌های ایستا را روی GitHub Pages یا Netlify منتشر کن و اپ‌های Node/Python را روی یک سرویس ابری یا VPS با Docker. با GitHub Actions تست و انتشار را خودکار کن و متغیرهای محرمانه را در تنظیمات سرویس بگذار، نه در کد.</p>",
     "exercise": "یک پروژه‌ی ایستا را روی GitHub Pages منتشر کن."
    },
    {
     "title": "پروژه ۱: کوتاه‌کننده‌ی لینک (URL Shortener) با API",
     "content": "<p><b>سطح:</b> مبتدی+ · <b>زمان پیشنهادی:</b> ۶ تا ۱۰ ساعت</p><p><b>هدف:</b> یک سرویس که آدرس بلند را کوتاه می‌کند و بازدیدها را می‌شمارد.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li><code>POST /api/links</code> با بدنه‌ی <code>{url}</code> یک کد کوتاه ۶ نویسه‌ای برمی‌گرداند (<code>201</code>)</li><li><code>GET /:code</code> با <code>302</code> به آدرس اصلی می‌رود و شمارنده‌ی بازدید را یکی زیاد می‌کند</li><li>آدرس نامعتبر (غیر از http/https) با <code>400</code> رد شود</li><li><code>GET /api/links/:code/stats</code> تعداد بازدید را بدهد</li><li>کد ناموجود <code>404</code></li></ul><p><b>خارج از محدوده (عمداً):</b> حساب کاربری، صفحه‌ی مدیریت، دامنه‌ی سفارشی.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>check-shortener.sh</div><pre><code>BASE=${BASE:-http://localhost:3000}\nfail(){ echo &quot;✗ $1&quot;; exit 1; }\nR=$(curl -s -X POST $BASE/api/links -H &#x27;Content-Type: application/json&#x27; -d &#x27;{&quot;url&quot;:&quot;https://example.com/a/very/long&quot;}&#x27;)\nCODE=$(echo &quot;$R&quot; | sed -n &#x27;s/.*&quot;code&quot;:&quot;\\([^&quot;]*\\)&quot;.*/\\1/p&#x27;); [ ${#CODE} -eq 6 ] || fail &quot;کد ۶ نویسه‌ای نیست: $R&quot;\necho &quot;✓ ساخت لینک&quot;\nLOC=$(curl -s -o /dev/null -w &#x27;%{http_code} %{redirect_url}&#x27; $BASE/$CODE); [ &quot;$LOC&quot; = &quot;302 https://example.com/a/very/long&quot; ] || fail &quot;ریدایرکت: $LOC&quot;\necho &quot;✓ ریدایرکت 302&quot;\ncurl -s -o /dev/null $BASE/$CODE\nS=$(curl -s $BASE/api/links/$CODE/stats); echo &quot;$S&quot; | grep -q &#x27;&quot;visits&quot;:2&#x27; || fail &quot;شمارنده: $S&quot;\necho &quot;✓ شمارش بازدید&quot;\n[ &quot;$(curl -s -o /dev/null -w &#x27;%{http_code}&#x27; -X POST $BASE/api/links -H &#x27;Content-Type: application/json&#x27; -d &#x27;{&quot;url&quot;:&quot;javascript:alert(1)&quot;}&#x27;)&quot; = 400 ] || fail &quot;آدرس خطرناک پذیرفته شد&quot;\necho &quot;✓ اعتبارسنجی&quot;; [ &quot;$(curl -s -o /dev/null -w &#x27;%{http_code}&#x27; $BASE/zzzzzz)&quot; = 404 ] || fail &quot;404&quot;; echo &quot;✓ همه‌ی تست‌ها سبز&quot;</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>تست‌های بالا سبز: ۴۰</li><li>جلوگیری از کد تکراری (برخورد) و ذخیره‌ی پایدار: ۲۰</li><li>README با نحوه‌ی اجرا: ۱۰</li><li>مدیریت خطا و کد وضعیت درست: ۱۵</li><li>تمیزی کد و commit های معنادار: ۱۵</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "قابلیت انقضای لینک (TTL) را اضافه کن و تست مربوطه را خودت بنویس."
    },
    {
     "title": "پروژه ۲: برنامه‌ی کارها (Todo) سرتاسری با ورود کاربر",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۲ تا ۲۰ ساعت</p><p><b>هدف:</b> برنامه‌ی کارها که هر کاربر فقط کارهای خودش را می‌بیند.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ثبت‌نام و ورود با رمز هش‌شده و توکن/سشن</li><li>CRUD کامل کار: عنوان، توضیح، وضعیت، موعد</li><li>کاربر A هرگز به کار کاربر B دسترسی ندارد (<code>403/404</code>)</li><li>فیلتر (همه/انجام‌شده/باقی‌مانده) و جست‌وجو</li><li>رابط ریسپانسیو با پیام خطا و حالت بارگذاری</li></ul><p><b>خارج از محدوده (عمداً):</b> اشتراک‌گذاری، یادآور ایمیلی، اپ موبایل.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>todo.test.js (Jest + supertest)</div><pre><code>const request = require(&#x27;supertest&#x27;); const app = require(&#x27;./app&#x27;);\nconst reg = async (e) =&gt; (await request(app).post(&#x27;/api/register&#x27;).send({ email: e, password: &#x27;Str0ngPass!&#x27; })).body.token;\ntest(&#x27;کاربر فقط کارهای خودش را می‌بیند&#x27;, async () =&gt; {\n  const a = await reg(&#x27;a@x.ir&#x27;), b = await reg(&#x27;b@x.ir&#x27;);\n  const t = await request(app).post(&#x27;/api/todos&#x27;).set(&#x27;Authorization&#x27;, `Bearer ${a}`).send({ title: &#x27;خرید&#x27; });\n  expect(t.status).toBe(201);\n  const listB = await request(app).get(&#x27;/api/todos&#x27;).set(&#x27;Authorization&#x27;, `Bearer ${b}`);\n  expect(listB.body).toHaveLength(0);\n  const steal = await request(app).delete(`/api/todos/${t.body.id}`).set(&#x27;Authorization&#x27;, `Bearer ${b}`);\n  expect([403, 404]).toContain(steal.status);\n});\ntest(&#x27;بدون توکن 401&#x27;, async () =&gt; { expect((await request(app).get(&#x27;/api/todos&#x27;)).status).toBe(401); });\ntest(&#x27;رمز ضعیف رد می‌شود&#x27;, async () =&gt; {\n  expect((await request(app).post(&#x27;/api/register&#x27;).send({ email: &#x27;c@x.ir&#x27;, password: &#x27;123&#x27; })).status).toBe(400);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>تست‌ها و جداسازی داده‌ی کاربران: ۴۰</li><li>امنیت (هش رمز، اعتبارسنجی ورودی): ۲۰</li><li>رابط و تجربه‌ی کاربر: ۱۵</li><li>مدیریت خطا: ۱۰</li><li>مستندات و ساختار: ۱۵</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "قابلیت زیرکار (subtask) را با یک رابطه‌ی ۱-به-چند اضافه کن."
    },
    {
     "title": "پروژه ۳: سیستم مدیریت وبلاگ (CMS) با نقش‌ها",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۶ تا ۲۴ ساعت</p><p><b>هدف:</b> وبلاگ با پنل نویسندگان، ادمین و بخش عمومی سریع و سئو‌پسند.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>نقش‌ها: ادمین، نویسنده، خواننده؛ نویسنده فقط پست خودش را ویرایش کند</li><li>پیش‌نویس/منتشرشده و زمان‌بندی انتشار</li><li>دسته و برچسب و صفحه‌بندی با cursor</li><li>آدرس‌های اسلاگ و تگ‌های meta/OpenGraph برای هر پست</li><li>جست‌وجوی متنی ساده</li></ul><p><b>خارج از محدوده (عمداً):</b> کامنت‌گذاری، ایمیل خبرنامه.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>cms.test.js</div><pre><code>test(&#x27;نویسنده پست دیگری را ویرایش نمی‌کند&#x27;, async () =&gt; {\n  const w1 = await login(&#x27;writer1&#x27;), w2 = await login(&#x27;writer2&#x27;);\n  const p = await post(&#x27;/api/posts&#x27;, w1, { title: &#x27;سلام دنیا&#x27;, body: &#x27;...&#x27; });\n  expect((await patch(`/api/posts/${p.id}`, w2, { title: &#x27;هک&#x27; })).status).toBe(403);\n  expect((await patch(`/api/posts/${p.id}`, w1, { title: &#x27;سلام&#x27; })).status).toBe(200);\n});\ntest(&#x27;پیش‌نویس برای عموم دیده نمی‌شود&#x27;, async () =&gt; {\n  const w = await login(&#x27;writer1&#x27;); const p = await post(&#x27;/api/posts&#x27;, w, { title: &#x27;پیش‌نویس&#x27;, status: &#x27;draft&#x27; });\n  expect((await get(`/blog/${p.slug}`)).status).toBe(404);\n});\ntest(&#x27;هر صفحه عنوان یکتا و meta description دارد&#x27;, async () =&gt; {\n  const html = (await get(&#x27;/blog/slug-of-published&#x27;)).text;\n  expect(html).toMatch(/&lt;title&gt;[^&lt;]+&lt;\\/title&gt;/); expect(html).toMatch(/&lt;meta name=&quot;description&quot; content=&quot;[^&quot;]+&quot;/);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>دسترسی بر اساس نقش: ۳۰</li><li>تست‌های سبز: ۲۵</li><li>سئو و سرعت صفحه‌ی عمومی: ۲۰</li><li>طراحی دیتابیس (ایندکس، رابطه‌ها): ۱۵</li><li>مستندات: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "زمان‌بندی انتشار را با یک cron ساده پیاده کن و تستش را بنویس."
    },
    {
     "title": "پروژه ۴: داشبورد آب‌وهوا با API خارجی و کش",
     "content": "<p><b>سطح:</b> مبتدی+ · <b>زمان پیشنهادی:</b> ۸ تا ۱۲ ساعت</p><p><b>هدف:</b> صفحه‌ای که شهر را می‌گیرد و پیش‌بینی را از یک API عمومی نشان می‌دهد.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>جست‌وجوی شهر با debounce</li><li>نمایش دمای فعلی و پیش‌بینی ۵ روز</li><li>مدیریت خطا: شهر نامعتبر، قطع شبکه، محدودیت نرخ</li><li>کش پاسخ ۱۰ دقیقه‌ای (سمت سرور یا localStorage)</li><li>کلید API در متغیر محیطی؛ هرگز در کد کلاینت</li></ul><p><b>خارج از محدوده (عمداً):</b> نقشه‌ی تعاملی، اعلان.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>weather.test.js</div><pre><code>test(&#x27;پاسخ در ۱۰ دقیقه کش می‌شود (فقط یک فراخوانی بیرونی)&#x27;, async () =&gt; {\n  const fetchMock = jest.spyOn(global, &#x27;fetch&#x27;).mockResolvedValue({ ok: true, json: async () =&gt; ({ temp: 21 }) });\n  await getWeather(&#x27;shiraz&#x27;); await getWeather(&#x27;shiraz&#x27;);\n  expect(fetchMock).toHaveBeenCalledTimes(1);\n});\ntest(&#x27;شهر نامعتبر پیام فارسی می‌دهد&#x27;, async () =&gt; {\n  jest.spyOn(global, &#x27;fetch&#x27;).mockResolvedValue({ ok: false, status: 404 });\n  await expect(getWeather(&#x27;xxxx&#x27;)).rejects.toThrow(&#x27;شهر پیدا نشد&#x27;);\n});\ntest(&#x27;کلید API در باندل کلاینت نیست&#x27;, () =&gt; {\n  const bundle = require(&#x27;fs&#x27;).readFileSync(&#x27;dist/main.js&#x27;, &#x27;utf8&#x27;);\n  expect(bundle).not.toMatch(/appid=[a-f0-9]{16,}/);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>تست‌ها: ۳۵</li><li>UX حالت‌های بارگذاری/خطا: ۲۵</li><li>امنیت کلید: ۱۵</li><li>ریسپانسیو: ۱۵</li><li>README: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "واحد دما (سانتی‌گراد/فارنهایت) را ذخیره کن."
    },
    {
     "title": "پروژه ۵: فروشگاه کوچک با سبد خرید و پرداخت آزمایشی",
     "content": "<p><b>سطح:</b> متوسط‌رو‌به‌بالا · <b>زمان پیشنهادی:</b> ۲۰ تا ۳۰ ساعت</p><p><b>هدف:</b> فروشگاه با محصول، سبد، سفارش و پرداخت در حالت Sandbox.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>فهرست و جزئیات محصول، موجودی انبار</li><li>سبد خرید پایدار (بعد از ورود)</li><li>قیمت فقط سمت سرور محاسبه شود</li><li>ماشین حالت سفارش و Webhook/Callback با verify</li><li>جلوگیری از فروش بیش از موجودی در درخواست همزمان</li></ul><p><b>خارج از محدوده (عمداً):</b> ارسال/پست واقعی، پنل فروشنده.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>shop.test.js</div><pre><code>test(&#x27;کلاینت نمی‌تواند قیمت را عوض کند&#x27;, async () =&gt; {\n  const r = await api.post(&#x27;/api/checkout&#x27;).send({ items: [{ productId: 1, qty: 1, price: 1 }] });\n  expect(r.body.totalRial).toBe(await dbPrice(1));         // قیمت ارسالی نادیده گرفته می‌شود\n});\ntest(&#x27;دو خرید همزمان آخرین موجودی را دوبار نمی‌فروشد&#x27;, async () =&gt; {\n  await setStock(1, 1);\n  const rs = await Promise.all([buy(1), buy(1)]);\n  expect(rs.filter(r =&gt; r.status === 201)).toHaveLength(1);\n});\ntest(&#x27;callback تکراری یک‌بار سفارش را پرداخت می‌کند&#x27;, async () =&gt; {\n  const o = await pendingOrder(); await callback(o); await callback(o);\n  expect(await paidCount(o.id)).toBe(1);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>تست‌های امنیتی و همزمانی: ۴۰</li><li>درستی ماشین حالت سفارش: ۲۰</li><li>تجربه‌ی خرید: ۱۵</li><li>ساختار و مستندات: ۱۵</li><li>گزارش «چه چیزی تست نشده»: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "استرداد جزئی را اضافه کن."
    },
    {
     "title": "پروژه ۶: چت لحظه‌ای با WebSocket",
     "content": "<p><b>سطح:</b> متوسط‌رو‌به‌بالا · <b>زمان پیشنهادی:</b> ۱۲ تا ۱۸ ساعت</p><p><b>هدف:</b> اتاق‌های گفتگو با نمایش آنلاین و تاریخچه.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>اتصال WebSocket با احراز هویت (توکن در اتصال)</li><li>اتاق‌ها: ورود/خروج و پخش پیام فقط به اعضا</li><li>ذخیره‌ی ۵۰ پیام آخر هر اتاق و نمایش هنگام ورود</li><li>محدودیت نرخ ارسال و حداکثر طول پیام</li><li>مدیریت قطع/اتصال مجدد با backoff</li></ul><p><b>خارج از محدوده (عمداً):</b> تماس صوتی، ارسال فایل.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>chat.test.js</div><pre><code>const WebSocket = require(&#x27;ws&#x27;);\nconst open = (token) =&gt; new Promise(res =&gt; { const ws = new WebSocket(`ws://localhost:3000/?token=${token}`); ws.on(&#x27;open&#x27;, () =&gt; res(ws)); });\ntest(&#x27;اتصال بدون توکن رد می‌شود&#x27;, done =&gt; {\n  const ws = new WebSocket(&#x27;ws://localhost:3000/&#x27;); ws.on(&#x27;close&#x27;, code =&gt; { expect(code).toBe(4401); done(); });\n});\ntest(&#x27;پیام فقط به اعضای همان اتاق می‌رسد&#x27;, async () =&gt; {\n  const [a, b, c] = await Promise.all([open(T.a), open(T.b), open(T.c)]);\n  a.send(JSON.stringify({ type: &#x27;join&#x27;, room: &#x27;r1&#x27; })); b.send(JSON.stringify({ type: &#x27;join&#x27;, room: &#x27;r1&#x27; })); c.send(JSON.stringify({ type: &#x27;join&#x27;, room: &#x27;r2&#x27; }));\n  const got = []; b.on(&#x27;message&#x27;, m =&gt; got.push(m.toString())); c.on(&#x27;message&#x27;, m =&gt; got.push(&#x27;LEAK&#x27;));\n  a.send(JSON.stringify({ type: &#x27;msg&#x27;, room: &#x27;r1&#x27;, text: &#x27;سلام&#x27; }));\n  await new Promise(r =&gt; setTimeout(r, 200)); expect(got.join()).toContain(&#x27;سلام&#x27;); expect(got).not.toContain(&#x27;LEAK&#x27;);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>جداسازی اتاق و احراز هویت: ۳۵</li><li>تست‌ها: ۲۵</li><li>پایداری اتصال: ۲۰</li><li>رابط: ۱۰</li><li>مستندات پروتکل پیام‌ها: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "نشانگر «در حال تایپ...» را با رویداد throttle‌شده بساز."
    },
    {
     "title": "پروژه ۷: تابلوی کانبان با کشیدن و رها کردن",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۲ تا ۱۸ ساعت</p><p><b>هدف:</b> تابلوی ستونی کارها با drag & drop و ذخیره‌ی ترتیب.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ستون‌ها و کارت‌ها، افزودن/ویرایش/حذف</li><li>جابه‌جایی کارت بین و داخل ستون‌ها با ماوس و <b>کیبورد</b></li><li>ذخیره‌ی ترتیب (position) در سرور بدون بازنویسی همه‌ی کارت‌ها</li><li>به‌روزرسانی خوش‌بینانه با بازگشت در خطا</li><li>دسترس‌پذیری: اعلام جابه‌جایی برای صفحه‌خوان</li></ul><p><b>خارج از محدوده (عمداً):</b> چندکاربره‌ی همزمان.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>kanban.test.js</div><pre><code>test(&#x27;جابه‌جایی کارت ترتیب را درست می‌کند&#x27;, async () =&gt; {\n  const col = await createColumn(&#x27;todo&#x27;); const ids = [];\n  for (const t of [&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;]) ids.push((await createCard(col.id, t)).id);\n  await moveCard(ids[2], { columnId: col.id, index: 0 });\n  const titles = (await getColumn(col.id)).cards.map(c =&gt; c.title);\n  expect(titles).toEqual([&#x27;c&#x27;, &#x27;a&#x27;, &#x27;b&#x27;]);\n});\ntest(&#x27;انتقال به ستون دیگر&#x27;, async () =&gt; {\n  const [c1, c2] = [await createColumn(&#x27;x&#x27;), await createColumn(&#x27;y&#x27;)]; const card = await createCard(c1.id, &#x27;k&#x27;);\n  await moveCard(card.id, { columnId: c2.id, index: 0 });\n  expect((await getColumn(c1.id)).cards).toHaveLength(0); expect((await getColumn(c2.id)).cards).toHaveLength(1);\n});\ntest(&#x27;حرکت با کیبورد (Space + فلش)&#x27;, async () =&gt; { /* با Playwright: focus کارت، Space، ArrowDown، Space */ });</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>درستی ترتیب و ذخیره: ۳۵</li><li>دسترس‌پذیری کیبورد: ۲۵</li><li>تست‌ها: ۲۰</li><li>UX خوش‌بینانه و خطا: ۱۰</li><li>تمیزی کد: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "از fractional indexing برای ترتیب استفاده کن تا فقط یک ردیف عوض شود."
    },
    {
     "title": "پروژه ۸: ردیاب هزینه با نمودار و خروجی CSV",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۲ تا ۱۶ ساعت</p><p><b>هدف:</b> ثبت هزینه و درآمد، دسته‌بندی و گزارش ماهانه.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ثبت تراکنش با مبلغ (عدد صحیح)، دسته، تاریخ</li><li>گزارش ماهانه و نمودار دسته‌ها</li><li>فیلتر بازه‌ی زمانی و جست‌وجو</li><li>خروجی CSV سازگار با اکسل (UTF-8 BOM)</li><li>مدیریت تقویم شمسی/میلادی در نمایش، ذخیره به‌صورت UTC</li></ul><p><b>خارج از محدوده (عمداً):</b> اتصال بانکی، ارز دیجیتال.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>expense.test.js</div><pre><code>test(&#x27;مجموع دسته‌ها با مجموع کل برابر است&#x27;, () =&gt; {\n  const tx = [{ cat: &#x27;غذا&#x27;, amount: 120000 }, { cat: &#x27;حمل‌ونقل&#x27;, amount: 45000 }, { cat: &#x27;غذا&#x27;, amount: 30000 }];\n  const byCat = summarize(tx); const sum = Object.values(byCat).reduce((a, b) =&gt; a + b, 0);\n  expect(sum).toBe(195000); expect(byCat[&#x27;غذا&#x27;]).toBe(150000);\n});\ntest(&#x27;CSV با BOM و escape صحیح&#x27;, () =&gt; {\n  const csv = toCsv([{ title: &#x27;ناهار, با &quot;نان&quot;&#x27;, amount: 100 }]);\n  expect(csv.charCodeAt(0)).toBe(0xFEFF); expect(csv).toContain(&#x27;ناهار, با &quot;&quot;نان&quot;&quot;&#x27;);\n});\ntest(&#x27;مبلغ اعشاری رد می‌شود&#x27;, () =&gt; { expect(() =&gt; addTx({ amount: 10.5 })).toThrow(); });</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>درستی محاسبات و CSV: ۳۵</li><li>تست‌ها: ۲۵</li><li>نمودار و UX: ۲۰</li><li>مدیریت تاریخ/منطقه‌ی زمانی: ۱۰</li><li>README: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "بودجه‌ی ماهانه و هشدار عبور از ۸۰٪ را اضافه کن."
    },
    {
     "title": "پروژه ۹: یادداشت‌های مارک‌داون با جست‌وجوی سریع",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۰ تا ۱۶ ساعت</p><p><b>هدف:</b> اپ یادداشت با پیش‌نمایش Markdown و جست‌وجوی تمام‌متن.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ویرایشگر + پیش‌نمایش زنده‌ی Markdown با پاک‌سازی HTML (جلوگیری از XSS)</li><li>برچسب‌ها و جست‌وجوی تمام‌متن (SQLite FTS یا ایندکس سمت کلاینت)</li><li>ذخیره‌ی خودکار با debounce</li><li>کار آفلاین و همگام‌سازی ساده</li><li>خروجی/ورودی فایل .md</li></ul><p><b>خارج از محدوده (عمداً):</b> همکاری چندنفره.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>notes.test.js</div><pre><code>test(&#x27;اسکریپت در Markdown اجرا نمی‌شود (XSS)&#x27;, () =&gt; {\n  const html = render(&#x27;# عنوان\\n&lt;script&gt;alert(1)&lt;/script&gt;\\n&lt;img src=x onerror=alert(1)&gt;&#x27;);\n  expect(html).not.toMatch(/&lt;script/i); expect(html).not.toMatch(/onerror/i);\n});\ntest(&#x27;جست‌وجو کلمه‌ی فارسی با «ی/ي» و «ک/ك» را پیدا می‌کند&#x27;, () =&gt; {\n  add({ id: 1, body: &#x27;کتابخانه‌ی ملی&#x27; }); expect(search(&#x27;كتابخانه&#x27;).map(n =&gt; n.id)).toEqual([1]);\n});\ntest(&#x27;ذخیره‌ی خودکار با debounce فقط یک‌بار می‌نویسد&#x27;, async () =&gt; {\n  const save = jest.fn(); const ed = createEditor({ save, delay: 100 });\n  ed.type(&#x27;a&#x27;); ed.type(&#x27;ab&#x27;); ed.type(&#x27;abc&#x27;); await sleep(200); expect(save).toHaveBeenCalledTimes(1);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>امنیت XSS: ۳۰</li><li>جست‌وجو (از جمله فارسی): ۲۵</li><li>تست‌ها: ۲۰</li><li>UX آفلاین: ۱۵</li><li>مستندات: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "پیوند بین یادداشت‌ها با [[نام]] و گراف ارتباط ساده را اضافه کن."
    },
    {
     "title": "پروژه ۱۰: سازنده‌ی صفحه‌ی لینک شخصی (Link-in-bio)",
     "content": "<p><b>سطح:</b> مبتدی+ · <b>زمان پیشنهادی:</b> ۸ تا ۱۲ ساعت</p><p><b>هدف:</b> صفحه‌ی عمومی با آدرس <code>/@username</code> و پنل ویرایش لینک‌ها.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ثبت‌نام و اسم کاربری یکتا (حروف مجاز، رزروِ کلمه‌های سیستمی مثل admin)</li><li>افزودن/مرتب‌سازی/حذف لینک و شمارنده‌ی کلیک</li><li>تم رنگی قابل‌انتخاب با CSS variables</li><li>صفحه‌ی عمومی سریع، سئو‌پسند و بدون JS اجباری</li><li>پیش‌نمایش آنلاین هنگام ویرایش</li></ul><p><b>خارج از محدوده (عمداً):</b> دامنه‌ی اختصاصی، پرداخت.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>linktree.test.js</div><pre><code>test(&#x27;نام کاربری رزروشده رد می‌شود&#x27;, async () =&gt; {\n  for (const n of [&#x27;admin&#x27;, &#x27;api&#x27;, &#x27;login&#x27;, &#x27;ab&#x27;]) expect((await register(n)).status).toBe(400);\n});\ntest(&#x27;لینک javascript: ذخیره نمی‌شود&#x27;, async () =&gt; {\n  const u = await register(&#x27;ali&#x27;); expect((await addLink(u, { title: &#x27;x&#x27;, url: &#x27;javascript:alert(1)&#x27; })).status).toBe(400);\n});\ntest(&#x27;کلیک شمارش می‌شود و ریدایرکت می‌کند&#x27;, async () =&gt; {\n  const u = await register(&#x27;sara&#x27;); const l = await addLink(u, { title: &#x27;سایت&#x27;, url: &#x27;https://example.com&#x27; });\n  const r = await get(`/r/${l.id}`); expect(r.status).toBe(302); expect((await stats(u)).clicks).toBe(1);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>اعتبارسنجی و امنیت لینک: ۳۰</li><li>تست‌ها: ۲۵</li><li>عملکرد صفحه‌ی عمومی (Lighthouse ≥ 90): ۲۰</li><li>طراحی: ۱۵</li><li>README: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "نمودار کلیک ۷ روز اخیر را با SVG ساده بکش."
    },
    {
     "title": "پروژه ۱۱: اپ آزمون با نمره‌دهی و جلوگیری از تقلب ساده",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۰ تا ۱۶ ساعت</p><p><b>هدف:</b> آزمون چندگزینه‌ای با زمان‌سنج، نمره‌دهی سمت سرور و گزارش.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>بانک سؤال و ترتیب تصادفی سؤال/گزینه برای هر کاربر</li><li>پاسخ صحیح <b>هرگز</b> به کلاینت فرستاده نشود قبل از ثبت</li><li>زمان‌سنج سمت سرور؛ پاسخ‌های بعد از پایان نادیده</li><li>گزارش نمره و مرور اشتباهات</li><li>جلوگیری از شرکت دوباره در یک آزمون</li></ul><p><b>خارج از محدوده (عمداً):</b> نظارت دوربینی.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>quiz.test.js</div><pre><code>test(&#x27;پاسخ صحیح در payload سؤال نیست&#x27;, async () =&gt; {\n  const q = await api.get(&#x27;/api/exam/1/questions&#x27;); expect(JSON.stringify(q.body)).not.toMatch(/correct|answerIndex/i);\n});\ntest(&#x27;پاسخ بعد از پایان زمان پذیرفته نمی‌شود&#x27;, async () =&gt; {\n  const s = await startExam(1); await advanceTime(31 * 60_000);\n  expect((await submit(s, [{ q: 1, a: 0 }])).status).toBe(409);\n});\ntest(&#x27;نمره درست حساب می‌شود&#x27;, async () =&gt; {\n  const s = await startExam(1); const r = await submit(s, correctAnswersFor(1, 4));   // ۴ از ۵ درست\n  expect(r.body.score).toBe(80);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>امنیت (عدم نشت پاسخ، زمان سمت سرور): ۳۵</li><li>درستی نمره‌دهی: ۲۵</li><li>تست‌ها: ۲۰</li><li>UX: ۱۰</li><li>مستندات: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "آنالیز سؤال: درصد پاسخ درست هر سؤال را در گزارش ادمین نشان بده."
    },
    {
     "title": "پروژه ۱۲: رزرو نوبت بدون تداخل",
     "content": "<p><b>سطح:</b> متوسط‌رو‌به‌بالا · <b>زمان پیشنهادی:</b> ۱۶ تا ۲۴ ساعت</p><p><b>هدف:</b> سیستم رزرو نوبت با ساعت کاری و جلوگیری از رزرو همزمان.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>تعریف ساعت کاری و مدت هر نوبت</li><li>نمایش فقط بازه‌های آزاد</li><li>رزرو همزمان یک بازه فقط برای یک نفر موفق شود (قید دیتابیس یا قفل)</li><li>لغو تا ۲ ساعت قبل</li><li>منطقه‌ی زمانی صحیح و ذخیره‌ی UTC</li></ul><p><b>خارج از محدوده (عمداً):</b> پرداخت آنلاین، تقویم گوگل.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>booking.test.js</div><pre><code>test(&#x27;دو رزرو همزمان از یک بازه، فقط یکی موفق است&#x27;, async () =&gt; {\n  const rs = await Promise.all([book(&#x27;2026-11-01T10:00&#x27;, &#x27;u1&#x27;), book(&#x27;2026-11-01T10:00&#x27;, &#x27;u2&#x27;)]);\n  expect(rs.map(r =&gt; r.status).sort()).toEqual([201, 409]);\n});\ntest(&#x27;بازه‌ی همپوشان رد می‌شود&#x27;, async () =&gt; {\n  await book(&#x27;2026-11-02T10:00&#x27;, &#x27;u1&#x27;, { minutes: 60 });\n  expect((await book(&#x27;2026-11-02T10:30&#x27;, &#x27;u2&#x27;, { minutes: 30 })).status).toBe(409);\n});\ntest(&#x27;لغو کمتر از ۲ ساعت قبل ممنوع&#x27;, async () =&gt; {\n  const b = await book(inMinutes(90), &#x27;u1&#x27;); expect((await cancel(b.id, &#x27;u1&#x27;)).status).toBe(422);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>درستی همزمانی (قید یکتا/exclusion constraint): ۴۰</li><li>منطق ساعت/منطقه‌ی زمانی: ۲۰</li><li>تست‌ها: ۲۰</li><li>UX انتخاب بازه: ۱۰</li><li>مستندات: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "فهرست انتظار (waitlist) را برای بازه‌ی پر اضافه کن."
    },
    {
     "title": "پروژه ۱۳: سرویس احراز هویت مستقل با Refresh Token",
     "content": "<p><b>سطح:</b> پیشرفته · <b>زمان پیشنهادی:</b> ۲۰ تا ۳۰ ساعت</p><p><b>هدف:</b> یک سرویس ورود که چند اپ می‌توانند از آن استفاده کنند.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>ثبت‌نام، ورود، خروج، تغییر رمز</li><li>توکن دسترسی کوتاه‌عمر و Refresh Token با چرخش (rotation) و کشف استفاده‌ی مجدد</li><li>قفل موقت پس از ۵ ورود ناموفق</li><li>ایمیل تأیید و بازیابی رمز با توکن یک‌بارمصرف</li><li>لاگ امنیتی بدون ثبت رمز/توکن</li></ul><p><b>خارج از محدوده (عمداً):</b> ورود اجتماعی (Google)، MFA.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>auth.test.js</div><pre><code>test(&#x27;رمز در پایگاه داده هش است&#x27;, async () =&gt; {\n  await register(&#x27;a@x.ir&#x27;, &#x27;Str0ngPass!&#x27;); const row = await db.user(&#x27;a@x.ir&#x27;); expect(row.password).not.toContain(&#x27;Str0ngPass&#x27;); expect(row.password).toMatch(/^\\$argon2|^\\$2[aby]\\$|^scrypt/);\n});\ntest(&#x27;refresh token چرخش دارد و استفاده‌ی مجدد کل خانواده را باطل می‌کند&#x27;, async () =&gt; {\n  const t1 = await login(&#x27;a@x.ir&#x27;, &#x27;Str0ngPass!&#x27;); const t2 = await refresh(t1.refresh);\n  expect((await refresh(t1.refresh)).status).toBe(401);            // استفاده‌ی مجدد\n  expect((await refresh(t2.refresh)).status).toBe(401);            // خانواده باطل شد\n});\ntest(&#x27;قفل پس از ۵ شکست&#x27;, async () =&gt; {\n  for (let i = 0; i &lt; 5; i++) await login(&#x27;a@x.ir&#x27;, &#x27;bad&#x27;); expect((await login(&#x27;a@x.ir&#x27;, &#x27;Str0ngPass!&#x27;)).status).toBe(429);\n});\ntest(&#x27;توکن بازیابی یک‌بار مصرف است&#x27;, async () =&gt; {\n  const tk = await forgot(&#x27;a@x.ir&#x27;); expect((await reset(tk, &#x27;N3wPass!!&#x27;)).status).toBe(200); expect((await reset(tk, &#x27;Other1234!&#x27;)).status).toBe(400);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>امنیت (هش، rotation، قفل): ۴۰</li><li>تست‌ها: ۲۵</li><li>طراحی API و مستندات OpenAPI: ۱۵</li><li>لاگ و مشاهده‌پذیری: ۱۰</li><li>تمیزی کد: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "API Key برای سرویس‌به‌سرویس را با هش و پیشوند قابل‌شناسایی اضافه کن."
    },
    {
     "title": "پروژه ۱۴: گالری تصویر با آپلود، بهینه‌سازی و بارگذاری تنبل",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۱۲ تا ۱۸ ساعت</p><p><b>هدف:</b> آپلود تصویر، تولید نسخه‌ی کوچک و نمایش سریع گالری.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>اعتبارسنجی نوع واقعی فایل (magic bytes) و حداکثر حجم</li><li>تولید thumbnail و نسخه‌ی WebP</li><li>نام تصادفی فایل و ذخیره‌ی خارج از مسیر اجرایی</li><li><code>loading=lazy</code> و ابعاد صریح برای جلوگیری از پرش چیدمان</li><li>حذف تصویر و پاک‌شدن فایل‌های مرتبط</li></ul><p><b>خارج از محدوده (عمداً):</b> ویرایش تصویر، هوش مصنوعی.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>gallery.test.js</div><pre><code>test(&#x27;فایل با پسوند jpg ولی محتوای اجرایی رد می‌شود&#x27;, async () =&gt; {\n  const r = await upload(Buffer.from(&#x27;&lt;?php echo 1;&#x27;), &#x27;evil.jpg&#x27;, &#x27;image/jpeg&#x27;); expect(r.status).toBe(415);\n});\ntest(&#x27;حجم بیش از ۵ مگابایت رد می‌شود&#x27;, async () =&gt; { expect((await upload(Buffer.alloc(6 * 1024 * 1024, 1), &#x27;a.png&#x27;, &#x27;image/png&#x27;)).status).toBe(413); });\ntest(&#x27;thumbnail و webp ساخته می‌شود&#x27;, async () =&gt; {\n  const r = await upload(samplePng, &#x27;a.png&#x27;, &#x27;image/png&#x27;); expect(await exists(r.body.thumb)).toBe(true); expect(r.body.webp).toMatch(/\\.webp$/);\n});\ntest(&#x27;نام فایل کاربر استفاده نمی‌شود (path traversal)&#x27;, async () =&gt; {\n  const r = await upload(samplePng, &#x27;../../etc/x.png&#x27;, &#x27;image/png&#x27;); expect(r.body.path).not.toContain(&#x27;..&#x27;);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>امنیت آپلود: ۴۰</li><li>تست‌ها: ۲۰</li><li>عملکرد و CLS: ۲۰</li><li>پاک‌سازی منابع: ۱۰</li><li>README: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "آپلود مستقیم به فضای ابری با آدرس امضاشده (pre-signed) را بررسی و طراحی کن."
    },
    {
     "title": "پروژه ۱۵: ابزار خط فرمان (CLI) قابل‌انتشار",
     "content": "<p><b>سطح:</b> متوسط · <b>زمان پیشنهادی:</b> ۸ تا ۱۴ ساعت</p><p><b>هدف:</b> یک ابزار CLI مفید (مثلاً تبدیل CSV به JSON یا بررسی لینک‌های شکسته) و انتشار آن.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>پارسر آرگومان با <code>--help</code> و <code>--version</code></li><li>کد خروج درست (۰ موفق، ۱ خطای کاربر، ۲ خطای داخلی)</li><li>ورودی از فایل یا stdin و خروجی به stdout/فایل</li><li>پیام خطای روشن بدون stack trace برای کاربر</li><li>بسته‌بندی (npm/pip) با README و نمونه‌ی استفاده</li></ul><p><b>خارج از محدوده (عمداً):</b> رابط گرافیکی.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>cli.test.js</div><pre><code>const { spawnSync } = require(&#x27;child_process&#x27;);\nconst run = (args, input) =&gt; spawnSync(&#x27;node&#x27;, [&#x27;bin/cli.js&#x27;, ...args], { input, encoding: &#x27;utf8&#x27; });\ntest(&#x27;--help متن راهنما و کد ۰&#x27;, () =&gt; { const r = run([&#x27;--help&#x27;]); expect(r.status).toBe(0); expect(r.stdout).toMatch(/Usage/i); });\ntest(&#x27;فایل ناموجود: پیام روشن و کد ۱&#x27;, () =&gt; { const r = run([&#x27;no-such.csv&#x27;]); expect(r.status).toBe(1); expect(r.stderr).not.toMatch(/at .*\\.js:\\d+/); });\ntest(&#x27;ورودی از stdin&#x27;, () =&gt; { const r = run([&#x27;-&#x27;], &#x27;a,b\\n1,2\\n&#x27;); expect(JSON.parse(r.stdout)).toEqual([{ a: &#x27;1&#x27;, b: &#x27;2&#x27; }]); });</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>رفتار استاندارد CLI و کدهای خروج: ۳۵</li><li>تست‌ها: ۲۵</li><li>مستندات و نمونه: ۲۰</li><li>بسته‌بندی/انتشار: ۱۰</li><li>تمیزی کد: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "حالت <code>--json</code> برای خروجی قابل‌خواندن توسط ماشین اضافه کن."
    },
    {
     "title": "پروژه ۱۶: داشبورد تحلیلی با SQL",
     "content": "<p><b>سطح:</b> متوسط‌رو‌به‌بالا · <b>زمان پیشنهادی:</b> ۱۲ تا ۲۰ ساعت</p><p><b>هدف:</b> داشبورد از داده‌ی فروش با کوئری‌های تجمیعی.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>دیتابیس نمونه ≥ ۱۰۰٬۰۰۰ ردیف (تولید با اسکریپت)</li><li>فروش روزانه/ماهانه، پرفروش‌ترین محصولات، نرخ بازگشت مشتری</li><li>کوئری‌ها با ایندکس مناسب و <code>EXPLAIN</code> مستند</li><li>نمودارها با داده‌ی تجمیع‌شده (نه ارسال همه‌ی ردیف‌ها)</li><li>فیلتر بازه و دسته بدون SQL Injection</li></ul><p><b>خارج از محدوده (عمداً):</b> داده‌ی زنده، یادگیری ماشین.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>analytics.test.js</div><pre><code>test(&#x27;کوئری فروش ماهانه از ایندکس استفاده می‌کند&#x27;, async () =&gt; {\n  const plan = (await db.query(&quot;EXPLAIN &quot; + monthlySalesSql)).rows.map(r =&gt; Object.values(r)[0]).join(&#x27;\\n&#x27;);\n  expect(plan).not.toMatch(/Seq Scan on orders/);\n});\ntest(&#x27;جمع ماهانه برابر جمع کل است&#x27;, async () =&gt; {\n  const total = (await db.query(&#x27;SELECT SUM(amount) s FROM orders&#x27;)).rows[0].s;\n  const monthly = (await monthlySales()).reduce((a, r) =&gt; a + Number(r.total), 0); expect(monthly).toBe(Number(total));\n});\ntest(&#x27;پارامتر فیلتر تزریق‌پذیر نیست&#x27;, async () =&gt; {\n  const r = await api.get(&quot;/api/top-products?category=&#x27; OR 1=1 --&quot;); expect(r.status).toBeLessThan(500); expect(r.body).toHaveLength(0);\n});</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>درستی و عملکرد کوئری‌ها: ۴۰</li><li>تست‌ها: ۲۰</li><li>امنیت: ۱۵</li><li>نمودارها: ۱۵</li><li>مستندات تصمیم‌ها: ۱۰</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "یک materialized view برای گزارش سنگین بساز و زمان قبل/بعد را مقایسه کن."
    },
    {
     "title": "پروژه ۱۷ (پایانی): محصول کوچک SaaS با تست، CI و استقرار",
     "content": "<p><b>سطح:</b> پیشرفته · <b>زمان پیشنهادی:</b> ۴۰ تا ۶۰ ساعت</p><p><b>هدف:</b> یک محصول کامل از ایده تا انتشار که بتوانی در رزومه نشان بدهی.</p><p><b>نیازمندی‌ها (همه الزامی):</b></p><ul><li>مسئله‌ی واقعی و کاربر هدف، صفحه‌ی لندینگ و نمونه‌ی زنده</li><li>احراز هویت، حداقل دو نقش و یک قابلیت اصلی با دیتابیس</li><li>پوشش تست ≥ ۷۰٪ روی منطق اصلی و ≥ ۳ تست سرتاسری</li><li>CI (GitHub Actions): lint + test + build در هر Pull Request</li><li>استقرار با دامنه، HTTPS، متغیرهای محیطی و پشتیبان دیتابیس</li><li>لاگ، مدیریت خطا و صفحه‌ی وضعیت/سلامت (<code>/health</code>)</li><li>مستندات: README، معماری (یک نمودار)، تصمیم‌های فنی و محدودیت‌ها</li></ul><p><b>خارج از محدوده (عمداً):</b> قابلیت‌های حاشیه‌ای؛ فقط یک قابلیت اصلی را عالی بساز.</p><p><b>ارزیابی خودکار:</b> این اسکریپت را کنار پروژه‌ات اجرا کن. پروژه وقتی «قبول» است که همه‌ی تست‌ها سبز شوند. تست‌ها را تغییر نده؛ کد خودت را درست کن.</p><div class='code-block'><div class='cb-head'>.github/workflows/ci.yml + check-final.sh</div><pre><code># .github/workflows/ci.yml\nname: CI\non: [pull_request, push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 22, cache: npm }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test -- --coverage --coverageThreshold=&#x27;{&quot;global&quot;:{&quot;lines&quot;:70}}&#x27;\n      - run: npm run build\n\n# check-final.sh — بررسی خودکار آمادگی انتشار\nset -e\nURL=${1:?آدرس سایت}\ncurl -sf &quot;$URL/health&quot; | grep -q ok            &amp;&amp; echo &quot;✓ health&quot;\ncurl -sI &quot;$URL&quot; | grep -qi &#x27;strict-transport&#x27;  &amp;&amp; echo &quot;✓ HSTS&quot;\ncurl -s  &quot;$URL&quot; | grep -qi &#x27;&lt;title&gt;&#x27;           &amp;&amp; echo &quot;✓ title&quot;\ntest -f README.md &amp;&amp; test -d .github/workflows &amp;&amp; echo &quot;✓ README و CI&quot;\n! git ls-files | grep -E &#x27;^\\.env$&#x27;             &amp;&amp; echo &quot;✓ .env در مخزن نیست&quot;</code></pre></div><p><b>بارم‌بندی (۱۰۰ امتیاز):</b></p><ul><li>محصول و قابلیت اصلی (کیفیت و کامل‌بودن): ۲۵</li><li>تست و CI سبز: ۲۵</li><li>استقرار و امنیت پایه: ۲۰</li><li>مستندات و معماری: ۱۵</li><li>گزارش نهایی: چه یاد گرفتم، چه چیز را متفاوت می‌ساختم: ۱۵</li></ul><p><b>راهنمایی:</b> جواب کامل داده نمی‌شود. اول طراحی (مدل داده، مسیرها/صفحه‌ها) را روی کاغذ بنویس، بعد کوچک‌ترین نسخه‌ی کارا را بساز و هر قابلیت را جدا commit کن. اگر گیر کردی، همین‌جا بگو کجا گیر کرده‌ای.</p>",
     "exercise": "۳ نفر را پیدا کن که محصولت را امتحان کنند و بازخوردشان را در یک فایل FEEDBACK.md ثبت کن."
    }
   ],
   "quiz": [
    {
     "q": "در معماری یک اپلیکیشن Full-Stack معمولی، ترتیب صحیح جریان داده از کاربر تا دیتابیس کدام است؟",
     "options": [
      "Database → Backend → Frontend → کاربر",
      "کاربر → Frontend → REST API → Backend (Node/Express) → Database",
      "Backend → کاربر → Database → Frontend",
      "کاربر → Database → Frontend"
     ],
     "answer": 1,
     "explain": "درخواست از کاربر شروع می‌شود، از Frontend به API می‌رود، Backend آن را پردازش و به دیتابیس وصل می‌شود."
    },
    {
     "q": "طبق قانون این بوت‌کمپ، وقتی روی یک پروژه گیر می‌کنی چه باید بکنی؟",
     "options": [
      "مستقیم درخواست جواب کامل بدهی",
      "اول خودت تلاش کنی، بعد Hint بگیری و فقط در صورت نیاز واقعی Solution ببینی",
      "صبر کنی تا کسی برایت بسازد",
      "پروژه را رها کنی"
     ],
     "answer": 1,
     "explain": "یادگیری واقعی از تلاش، گیرکردن و دیباگ‌کردن اتفاق می‌افتد — نه از دیدن جواب آماده."
    },
    {
     "q": "چرا خودارزیابی قبل از شروع پروژه‌های نهایی مهم است؟",
     "options": [
      "فقط یک تشریفات است",
      "کمک می‌کند حفره‌های دانشت را قبل از گیرکردن در پروژهٔ بزرگ پیدا کنی",
      "نمره‌اش را کسی می‌بیند",
      "تاثیری در یادگیری ندارد"
     ],
     "answer": 1,
     "explain": "شناسایی زودهنگام نقاط ضعف از گیرکردن‌های طولانی وسط یک پروژهٔ بزرگ جلوگیری می‌کند."
    },
    {
     "q": "در پروژه‌ی آزمون، چرا پاسخ صحیح نباید همراه سؤال به کلاینت برود؟",
     "options": [
      "چون کاربر با DevTools آن را می‌بیند",
      "حجم زیاد",
      "SEO",
      "هیچ دلیلی ندارد"
     ],
     "answer": 0,
     "explain": "نمره‌دهی و رازها باید سمت سرور بمانند."
    },
    {
     "q": "برای جلوگیری از رزرو همزمان یک بازه کدام راه قابل‌اعتمادتر است؟",
     "options": [
      "قید یکتا/exclusion در دیتابیس",
      "بررسی در جاوااسکریپت کلاینت",
      "sleep",
      "دکمه‌ی غیرفعال"
     ],
     "answer": 0,
     "explain": "فقط دیتابیس می‌تواند همزمانی را به‌طور اتمی تضمین کند."
    },
    {
     "q": "هدف از ارزیابی خودکار پروژه چیست؟",
     "options": [
      "معیار عینی و تکرارپذیر قبول/رد",
      "جایگزین یادگیری",
      "فقط نمره‌دادن",
      "سرعت اجرا"
     ],
     "answer": 0,
     "explain": "تست‌ها قرارداد پروژه‌اند؛ تغییرشان تقلب است."
    },
    {
     "q": "چرا در پروژه‌ی پایانی «خارج از محدوده» تعریف می‌کنیم؟",
     "options": [
      "تا یک قابلیت اصلی را کامل و با کیفیت بسازیم",
      "برای آسان‌کردن",
      "چون الزامی نیست",
      "برای کم‌کردن تست"
     ],
     "answer": 0,
     "explain": "محدوده‌ی روشن از پروژه‌ی ناتمام جلوگیری می‌کند."
    }
   ]
  }
 ],
 "projects": [
  {
   "title": "Personal Finance App",
   "brief": "اپلیکیشنی برای ثبت درآمد و هزینه‌های شخصی، با دسته‌بندی (خوراک، حمل‌ونقل، و...) و نمایش مجموع ماهانه.",
   "requirements": [
    "Backend با Express + یک دیتابیس واقعی (Postgres یا حتی SQLite)",
    "API کامل CRUD برای تراکنش‌ها",
    "فیلتر تراکنش‌ها بر اساس دسته و بازهٔ تاریخ",
    "Frontend که این API رو با fetch صدا بزنه و نمودار ساده‌ای از هزینه‌ها نشون بده"
   ],
   "hints": [
    "اول فقط Backend و API رو با Postman یا مرورگر تست کن، بعد بچسبون به Frontend."
   ]
  },
  {
   "title": "Authentication System",
   "brief": "سیستم کامل ثبت‌نام، ورود، خروج و پروفایل کاربر با سطوح دسترسی (کاربر عادی / ادمین).",
   "requirements": [
    "پسورد با bcrypt هش بشه",
    "JWT برای نگه‌داشتن نشست کاربر",
    "Middleware برای محافظت از route هایی که فقط باید کاربر لاگین‌شده ببینه",
    "صفحهٔ پروفایل که فقط با توکن معتبر باز بشه"
   ],
   "hints": [
    "اول فلوی «ثبت‌نام → لاگین → دریافت توکن → دسترسی به صفحهٔ محافظت‌شده» رو روی کاغذ طراحی کن، بعد کدش کن."
   ]
  },
  {
   "title": "Online Shop",
   "brief": "فروشگاه کامل Full-Stack: لیست محصولات از دیتابیس، سبد خرید، و ثبت سفارش.",
   "requirements": [
    "جدول‌های products، orders و order_items با رابطهٔ درست بینشون (JOIN)",
    "API برای لیست محصولات، افزودن به سبد و ثبت سفارش نهایی",
    "احراز هویت برای ثبت سفارش (کاربر باید لاگین باشه)",
    "Frontendی که همهٔ این‌ها رو به‌هم وصل کنه"
   ],
   "hints": [
    "دیتابیس رو اول روی کاغذ طراحی کن (Entity-Relationship) قبل از نوشتن حتی یک خط کد."
   ]
  },
  {
   "title": "Admin Dashboard",
   "brief": "پنل مدیریتی برای فروشگاه بالا: مشاهدهٔ همهٔ سفارش‌ها، مدیریت محصولات (افزودن/ویرایش/حذف) و آمار فروش.",
   "requirements": [
    "فقط کاربر با role=admin بتونه وارد این پنل بشه (Authorization)",
    "جدول‌های قابل مرتب‌سازی و فیلتر",
    "نمودار یا خلاصهٔ آماری از فروش کلی"
   ],
   "hints": [
    "از همون REST API فروشگاه استفاده کن؛ فقط route های جدید admin-only اضافه کن، دوباره از صفر نساز."
   ]
  },
  {
   "title": "پروژهٔ نهایی — Full-Stack Application کامل",
   "brief": "ترکیب همهٔ چیزی که یاد گرفتی در یک اپلیکیشن واقعی، از صفر تا Deploy شده روی اینترنت (نه فقط روی سیستم خودت).",
   "requirements": [
    "Frontend: HTML/CSS/JS (یا React) با طراحی Responsive",
    "Backend: Node.js + Express با REST API درست‌طراحی‌شده",
    "Database: PostgreSQL یا MongoDB با مدل دادهٔ منطقی",
    "Authentication و Authorization کامل",
    "رعایت نکات امنیتی: Hash پسورد، Parameterized Query، Environment Variables، Security Headers",
    "سئوی پایه روی صفحات عمومی (title، description، Semantic HTML)",
    "Deploy شده و با یک لینک واقعی قابل بازکردن"
   ],
   "hints": [
    "این پروژه رو مرحله‌به‌مرحله بساز: اول Backend+Database کاملاً کار کنه (تست با Postman)، بعد Frontend، بعد امنیت، در آخر Deploy.",
    "برای بررسی نهایی، کدت رو همینجا با من به اشتراک بذار — طبق همون سیستم نمره‌دهی (ساختار، خوانایی، Performance، Security، SEO) دقیق بررسیش می‌کنم."
   ]
  }
 ]
});
