(window.COURSES=window.COURSES||[]).push({
 "id": "payment",
 "name": "اتصال درگاه پرداخت",
 "icon": "💳",
 "kind": "theory",
 "desc": "از سبد خرید تا پول واقعی که به حساب می‌شینه",
 "covers": [
  "چرا خودمون مستقیم شماره کارت رو ذخیره نمی‌کنیم",
  "Payment Gateway، Stripe مفهومی",
  "جریان کامل پرداخت (Checkout Flow)",
  "Webhook: تایید پرداخت از سمت درگاه",
  "حالت تست در برابر تولید (Test/Live Mode)",
  "استرداد وجه (Refund) و مدیریت خطا"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "چرا خودمان مستقیم اطلاعات کارت را ذخیره/پردازش نمی‌کنیم",
     "content": "<p>ذخیره یا حتی فقط «دیدن» شمارهٔ کامل کارت بانکی کاربران، شما را مشمول قوانین سخت‌گیرانهٔ امنیتی (مثل PCI-DSS) می‌کند و ریسک فاجعه‌باری در صورت هک شدن دارد. به همین دلیل، تقریباً هیچ سایتی خودش مستقیم کارت را پردازش نمی‌کند — به‌جایش از یک <b>Payment Gateway</b> (مثل Stripe، PayPal، یا در ایران زرین‌پال/آیدی‌پی) استفاده می‌کند: کاربر اطلاعات کارت را مستقیم به آن‌ها می‌دهد (نه به سرور شما)، و آن‌ها فقط یک «نتیجه» (موفق/ناموفق) به شما اعلام می‌کنند.</p>",
     "exercise": "توضیح بده چرا حتی اگه سایتت خیلی امن باشه، بازم بهتره اصلاً شماره کارت کاربر رو نبینی/ذخیره نکنی، به‌جای این‌که فقط روی امنیت سرور خودت تکیه کنی."
    },
    {
     "title": "جریان کامل یک پرداخت (Checkout Flow)",
     "content": "<p>یک پرداخت معمولی این مراحل را دارد: ۱) سرور شما یک <b>Payment Intent</b> (نیت پرداخت، شامل مبلغ و ارز) نزد درگاه می‌سازد و یک کلید مخصوص (Client Secret) می‌گیرد. ۲) این کلید به Frontend فرستاده می‌شود. ۳) Frontend با کتابخانهٔ درگاه (مثل Stripe.js) فرم کارت را نمایش می‌دهد — اطلاعات کارت مستقیم به سرور Stripe می‌رود، نه سرور شما. ۴) بعد از پرداخت، درگاه نتیجه را هم به Frontend و هم (مهم‌تر) با یک Webhook به Backend شما اعلام می‌کند.</p><div class='code-block'><div class='cb-head'>server.js (ساخت Payment Intent با Stripe)</div><pre><code>const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);\n\napp.post('/create-payment-intent', async (req, res) => {\n  const { amount } = req.body;\n  const paymentIntent = await stripe.paymentIntents.create({\n    amount: amount, // مبلغ به کوچک‌ترین واحد پول (مثلاً سنت)\n    currency: 'usd',\n  });\n  res.json({ clientSecret: paymentIntent.client_secret });\n});</code></pre></div>",
     "exercise": "توضیح بده چرا مبلغ نهایی سفارش باید توی Backend (نه Frontend) محاسبه بشه، حتی اگه Frontend هم قیمت رو نشون بده — نکته: کاربر می‌تونه کد Frontend رو دستکاری کنه."
    }
   ],
   "quiz": [
    {
     "q": "چرا اکثر سایت‌ها خودشان مستقیم شمارهٔ کارت بانکی را پردازش نمی‌کنند؟",
     "options": [
      "گران است",
      "ریسک امنیتی و الزامات قانونی سنگین (مثل PCI-DSS) دارد",
      "کند است",
      "تکنولوژی‌اش وجود ندارد"
     ],
     "answer": 1,
     "explain": "سپردن این کار به Payment Gateway، ریسک امنیتی و بار مسئولیت قانونی را کاهش می‌دهد."
    },
    {
     "q": "در جریان پرداخت با Stripe، اطلاعات کارت کاربر مستقیم به کجا می‌رود؟",
     "options": [
      "سرور شما",
      "سرور Stripe (نه سرور شما)",
      "دیتابیس شما",
      "هیچ‌جا ذخیره نمی‌شود اصلاً رد و بدل نمی‌شود"
     ],
     "answer": 1,
     "explain": "این دقیقاً همان چیزی است که مسئولیت امنیتی شما را کم می‌کند — سرور شما هرگز شمارهٔ کارت را نمی‌بیند."
    },
    {
     "q": "چرا مبلغ نهایی سفارش باید در Backend محاسبه شود، نه صرفاً اعتماد به مقداری که از Frontend می‌آید؟",
     "options": [
      "Backend سریع‌تر است",
      "کاربر می‌تواند کد Frontend را دستکاری و مبلغ ارسالی را تغییر دهد",
      "Frontend نمی‌تواند عدد نگه دارد",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "هر داده‌ای که از کلاینت می‌آید باید در سرور دوباره اعتبارسنجی/محاسبه شود."
    }
   ],
   "challenge": {
    "task": "یک route فرضی POST /checkout بنویس (روی کاغذ/متن) که: سبد خرید کاربر (لیست id محصولات) رو از req.body می‌گیره، قیمت هر محصول رو از دیتابیس (نه از ورودی کاربر!) می‌خونه، مجموع رو خودش محاسبه می‌کنه، و بعد یک Payment Intent با همون مبلغ محاسبه‌شده می‌سازه.",
    "hint1": "هیچ‌وقت مستقیم req.body.totalPrice رو اعتماد نکن — همیشه قیمت‌ها رو از دیتابیس خودت (بر اساس id محصولات) بخون و جمع بزن.",
    "hint2": "بعد از محاسبهٔ totalPrice توی سرور، دقیقاً همون مقدار رو به stripe.paymentIntents.create({amount: totalPrice, ...}) بده.",
    "solution": "app.post('/checkout', async (req, res) => {\n  const { productIds } = req.body; // فقط id ها رو از کاربر می‌گیریم\n  const products = await Product.find({ _id: { $in: productIds } }); // قیمت واقعی از دیتابیس\n  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);\n\n  const paymentIntent = await stripe.paymentIntents.create({\n    amount: totalPrice,\n    currency: 'usd',\n  });\n  res.json({ clientSecret: paymentIntent.client_secret });\n});"
   }
  },
  {
   "lessons": [
    {
     "title": "Webhook: چرا نباید فقط به جواب Frontend اعتماد کرد",
     "content": "<p>ممکن است پرداخت موفق باشد ولی درست همان لحظه اینترنت کاربر قطع شود و Frontend هرگز پیام «موفقیت» را نگیرد — اگر فقط به Frontend اعتماد کنید، سفارش کاربر هرگز ثبت نمی‌شود با این‌که پولش کم شده! به همین دلیل درگاه‌های پرداخت یک <b>Webhook</b> می‌فرستند: یک درخواست مستقیم و مستقل از سرور Stripe به سرور شما، که می‌گوید «این پرداخت قطعاً موفق بود» — این تنها منبع قابل‌اعتماد برای ثبت نهایی سفارش است.</p><div class='code-block'><div class='cb-head'>webhook.js</div><pre><code>app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {\n  const event = stripe.webhooks.constructEvent(\n    req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET\n  );\n\n  if (event.type === 'payment_intent.succeeded') {\n    // اینجا و فقط اینجا سفارش رو 'پرداخت‌شده' علامت بزن\n    markOrderAsPaid(event.data.object.id);\n  }\n  res.json({ received: true });\n});</code></pre></div>",
     "exercise": "توضیح بده چرا امضای Webhook (stripe-signature) رو چک می‌کنیم — اگه این چک رو حذف کنیم، چه کسی می‌تونه یه درخواست جعلی 'پرداخت موفق' به سرور ما بفرسته؟"
    },
    {
     "title": "حالت تست (Test Mode) و استرداد وجه (Refund)",
     "content": "<p>همهٔ درگاه‌های پرداخت یک <b>Test Mode</b> دارند: با کلیدهای API مخصوص تست (که با <code class='inline'>pk_test_</code>/<code class='inline'>sk_test_</code> شروع می‌شوند) و شماره‌کارت‌های آزمایشی مشخص (مثل <code class='inline'>4242 4242 4242 4242</code> در Stripe) می‌توانید کل جریان را بدون پول واقعی تست کنید. برای <b>Refund</b> (بازگرداندن پول) هم API مشخصی وجود دارد که نباید به‌صورت دستی و بیرون از سیستم انجام شود.</p><div class='code-block'><div class='cb-head'>refund.js</div><pre><code>await stripe.refunds.create({\n  payment_intent: 'pi_12345', // شناسهٔ همون پرداخت اصلی\n  amount: 5000 // اختیاری: برای استرداد جزئی؛ اگه ندید، کامل برمی‌گرده\n});</code></pre></div>",
     "exercise": "توضیح بده چرا هیچ‌وقت نباید کلیدهای live (sk_live_...) رو توی محیط توسعه/تست استفاده کنی، حتی برای یه تست سریع."
    },
    {
     "title": "Idempotency و امنیت پرداخت",
     "content": "<p>اگر کاربر دوبار روی «پرداخت» بزند یا شبکه تکرار کند، نباید دو بار پول کم شود. با <b>Idempotency Key</b> (یک شناسهٔ یکتا برای هر سفارش) درخواست تکراری را شناسایی می‌کنی. همیشه مبلغ را سمت سرور حساب کن، نه از مرورگر. وضعیت سفارش را فقط با Webhook تأییدشده بروزرسانی کن.</p>",
     "exercise": "سناریوی کلیک دوباره روی دکمهٔ پرداخت را روی کاغذ طراحی کن."
    },
    {
     "title": "اشتراک و پرداخت دوره‌ای",
     "content": "<p>در اشتراک، سرویس پرداخت به‌طور خودکار هر ماه مبلغ را کم می‌کند. باید حالت‌ها را مدیریت کنی: فعال، تأخیر در پرداخت، لغو و پایان دوره. دسترسی کاربر را فقط بر اساس وضعیت تأییدشدهٔ Webhook تعیین کن.</p>",
     "exercise": "نمودار حالت‌های یک اشتراک ماهانه را بکش."
    },
    {
     "title": "اختلاف پرداخت، استرداد و الزامات قانونی",
     "content": "<p>استرداد کامل یا جزئی را با API درگاه ثبت کن و علت را نگه دار. فاکتور و رسید بساز، اطلاعات کارت را هرگز خودت ذخیره نکن (استاندارد PCI) و قوانین محلی مالیات و حریم خصوصی را رعایت کن.</p>",
     "exercise": "سیاست استرداد یک فروشگاه فرضی را در پنج خط بنویس."
    },
    {
     "title": "ماشین حالت سفارش و پرداخت: وضعیت‌های مجاز و گذارها",
     "content": "<p>بزرگ‌ترین منبع باگ پرداخت، وضعیت‌های مبهم است. سفارش و پرداخت را با یک <b>ماشین حالت</b> مدل کن: <code>created → pending → paid → (refunded | partially_refunded)</code> و شاخه‌های <code>failed</code>، <code>cancelled</code>، <code>expired</code>. فقط گذارهای تعریف‌شده مجازند؛ مثلاً <code>failed → paid</code> یا <code>refunded → paid</code> هرگز. هر گذار باید در دیتابیس <b>اتمی</b> باشد (<code>UPDATE ... WHERE status = 'pending'</code> و بررسی تعداد ردیف تغییرکرده) تا دو callback همزمان سفارش را دوبار «پرداخت‌شده» نکنند. هر تغییر وضعیت را با زمان و علت در جدول تاریخچه ثبت کن؛ هنگام اختلاف حسابداری همین تاریخچه نجات‌دهنده است.</p><div class='code-block'><div class='cb-head'>order-state.js</div><pre><code>const ALLOWED = {\n  created:  [&#x27;pending&#x27;, &#x27;cancelled&#x27;],\n  pending:  [&#x27;paid&#x27;, &#x27;failed&#x27;, &#x27;expired&#x27;],\n  paid:     [&#x27;partially_refunded&#x27;, &#x27;refunded&#x27;],\n  partially_refunded: [&#x27;partially_refunded&#x27;, &#x27;refunded&#x27;],\n};\nasync function transition(db, orderId, from, to, reason) {\n  if (!ALLOWED[from]?.includes(to)) throw new Error(`گذار غیرمجاز ${from} → ${to}`);\n  const r = await db.query(\n    &quot;UPDATE orders SET status=$1, updated_at=now() WHERE id=$2 AND status=$3&quot;, [to, orderId, from]);\n  if (r.rowCount === 0) return false;          // کس دیگری زودتر تغییر داده (callback همزمان)\n  await db.query(&quot;INSERT INTO order_history(order_id, from_status, to_status, reason) VALUES ($1,$2,$3,$4)&quot;,\n    [orderId, from, to, reason]);\n  return true;\n}</code></pre></div>",
     "exercise": "نمودار حالت سفارش فروشگاه خودت را بکش و گذارهای ممنوع را مشخص کن."
    },
    {
     "title": "مبلغ به‌صورت عدد صحیح: ریال، تومان و خطای اعشار",
     "content": "<p>هرگز پول را با <code>float</code> نگه نداری: <code>0.1 + 0.2 !== 0.3</code>. مبلغ را به‌صورت <b>عدد صحیح در کوچک‌ترین واحد</b> ذخیره کن (ریال؛ برای Stripe سنت). در ایران درگاه‌ها معمولاً <b>ریال</b> می‌گیرند ولی کاربر <b>تومان</b> می‌بیند؛ یک نقطه‌ی تبدیل مرکزی بساز (۱ تومان = ۱۰ ریال) و در هیچ جای دیگر ضرب/تقسیم ۱۰ ننویس. تبدیل ارز، تخفیف درصدی و مالیات باید با قاعده‌ی گرد کردن مشخص (مثلاً «گرد به نزدیک‌ترین ریال، نیم‌به‌بالا») انجام شود و روی فاکتور همان مقدار ثبت شود. نوع ستون دیتابیس: <code>BIGINT</code> نه <code>FLOAT</code>. در JSON اعداد بزرگ را به‌خاطر دقت JavaScript (۲⁵³) به‌صورت رشته یا BigInt بفرست.</p><div class='code-block'><div class='cb-head'>money.js</div><pre><code>const TOMAN_TO_RIAL = 10;\nconst toRial  = toman =&gt; Math.round(toman * TOMAN_TO_RIAL);\nconst toToman = rial  =&gt; rial / TOMAN_TO_RIAL;      // فقط برای نمایش\n\nfunction priceWithTax(baseRial, ratePercent = 10) {\n  const tax = Math.round(baseRial * ratePercent / 100);   // گرد کردن مشخص\n  return { base: baseRial, tax, total: baseRial + tax };\n}\nconsole.log(0.1 + 0.2);                 // 0.30000000000000004  ← اعشار برای پول ممنوع\nconsole.log(priceWithTax(125_000));     // { base: 125000, tax: 12500, total: 137500 }</code></pre></div>",
     "exercise": "تابع محاسبه‌ی مالیات ۱۰٪ با گرد کردن مشخص را بنویس و برای ۱ ریال تا ۱۰۰۰ ریال بررسی کن مجموع اقلام با مجموع کل برابر بماند."
    },
    {
     "title": "هرگز قیمت را از کلاینت نپذیر: محاسبه‌ی سمت سرور",
     "content": "<p>اگر فرم پرداخت <code>amount=500000</code> بفرستد و سرور همان را به درگاه بدهد، هر کاربری با Inspect عدد را به ۱۰۰۰ تغییر می‌دهد. قاعده: کلاینت فقط <b>شناسه‌ی محصول و تعداد</b> می‌فرستد؛ سرور قیمت را از دیتابیس می‌خواند، تخفیف/کوپن را اعتبارسنجی و مجموع را خودش حساب می‌کند. مبلغ را روی <b>سفارش</b> ذخیره کن و موقع verify درگاه، همان مبلغ ذخیره‌شده را با مبلغ پرداخت‌شده مقایسه کن (نه مبلغی که در callback آمده). تعداد منفی، تعداد صفر، محصول غیرفعال و کوپن منقضی را رد کن. قیمت لحظه‌ی خرید را (snapshot) در ردیف‌های سفارش نگه دار تا تغییر قیمت بعدی فاکتور قدیمی را عوض نکند.</p><div class='code-block'><div class='cb-head'>checkout.js</div><pre><code>app.post(&#x27;/checkout&#x27;, auth, async (req, res) =&gt; {\n  const { items, coupon } = req.body;               // فقط {productId, qty}\n  let total = 0; const lines = [];\n  for (const { productId, qty } of items) {\n    if (!Number.isInteger(qty) || qty &lt; 1 || qty &gt; 20) return res.status(400).json({ error: &#x27;تعداد نامعتبر&#x27; });\n    const p = await db.product.findActive(productId);   // قیمت از دیتابیس\n    if (!p) return res.status(400).json({ error: &#x27;محصول موجود نیست&#x27; });\n    lines.push({ productId, qty, unitPrice: p.priceRial });   // snapshot قیمت\n    total += p.priceRial * qty;\n  }\n  if (coupon) total = await applyCoupon(req.user.id, coupon, total);   // اعتبار، انقضا، یک‌بار مصرف\n  const order = await db.order.create({ userId: req.user.id, lines, totalRial: total, status: &#x27;created&#x27; });\n  res.json({ orderId: order.id });\n});</code></pre></div>",
     "exercise": "چهار حمله‌ی دستکاری مبلغ (قیمت منفی، تعداد منفی، کوپن تکراری، تغییر شناسه) را فهرست و دفاع هرکدام را بنویس."
    },
    {
     "title": "درگاه ایرانی (مثال زرین‌پال): درخواست، هدایت و تأیید",
     "content": "<p>جریان همه‌ی درگاه‌های بانکی/واسط ایرانی مشابه است: <b>۱)</b> سرور شما درخواست پرداخت می‌فرستد (مبلغ + <code>callback_url</code> + توضیح) و یک <b>کد رهگیری (Authority)</b> می‌گیرد؛ <b>۲)</b> کاربر به صفحه‌ی درگاه هدایت می‌شود؛ <b>۳)</b> پس از پرداخت یا انصراف به <code>callback_url</code> برمی‌گردد (با <code>Authority</code> و <code>Status</code>)؛ <b>۴)</b> سرور شما باید <b>verify</b> بزند؛ تنها پس از تأیید موفق، سفارش پرداخت‌شده است. فقط <code>Status=OK</code> در آدرس کافی نیست، چون کاربر می‌تواند آن را دستکاری کند. مستندات رسمی درگاه خودت را برای نشانی‌ها و کدهای دقیق ملاک بگیر (در مثال زیر ساختار زرین‌پال نسخه‌ی ۴ آمده؛ آن را با مستندات روز تطبیق بده) و ابتدا در حالت Sandbox امتحان کن.</p><div class='code-block'><div class='cb-head'>pay-start.js</div><pre><code>const ZP = &#x27;https://api.zarinpal.com/pg/v4/payment&#x27;;\nconst MERCHANT = process.env.ZP_MERCHANT_ID;\n\n// ۱) شروع پرداخت\napp.post(&#x27;/pay/:orderId&#x27;, auth, async (req, res) =&gt; {\n  const order = await db.order.findForUser(req.params.orderId, req.user.id);\n  const r = await fetch(`${ZP}/request.json`, {\n    method: &#x27;POST&#x27;, headers: { &#x27;Content-Type&#x27;: &#x27;application/json&#x27;, Accept: &#x27;application/json&#x27; },\n    body: JSON.stringify({ merchant_id: MERCHANT, amount: order.totalRial,\n      callback_url: `${process.env.BASE_URL}/pay/callback?order=${order.id}`, description: `سفارش ${order.id}` })\n  }).then(x =&gt; x.json());\n  if (r.data?.code !== 100) return res.status(502).json({ error: &#x27;خطا در اتصال به درگاه&#x27; });\n  await db.order.update(order.id, { status: &#x27;pending&#x27;, authority: r.data.authority });\n  res.json({ url: `https://www.zarinpal.com/pg/StartPay/${r.data.authority}` });   // ۲) هدایت کاربر\n});</code></pre></div>",
     "exercise": "مراحل بالا را برای درگاه واقعی خودت (زرین‌پال، IDPay، بانک) با Sandbox پیاده کن."
    },
    {
     "title": "Callback و Verify: تأیید نهایی، تکرار امن و کد ۱۰۱",
     "content": "<p>صفحه‌ی callback را «غیرقابل‌اعتماد و تکرارشونده» فرض کن: کاربر آن را رفرش می‌کند، دوبار باز می‌کند یا آدرس را دستی می‌سازد. مراحل امن: سفارش را با شناسه بیاب و مطمئن شو متعلق به همین کاربر/Authority است؛ اگر قبلاً <code>paid</code> شده فقط نتیجه را نشان بده؛ اگر <code>Status != OK</code> سفارش را <code>failed/cancelled</code> کن؛ در غیر این صورت <b>verify</b> بزن با <b>مبلغ ذخیره‌شده‌ی سفارش</b>. در زرین‌پال کد ۱۰۰ یعنی تأیید موفق و ۱۰۱ یعنی «قبلاً تأیید شده» (تکرار) که باید موفق در نظر گرفته شود نه خطا. شماره‌ی مرجع (<code>ref_id</code>) را حتماً ذخیره کن؛ برای پیگیری و استرداد لازم است. اگر verify به‌خاطر خطای شبکه نامشخص ماند، سفارش را <code>pending</code> بگذار و کار «تطبیق دوره‌ای» نتیجه را روشن کند.</p><div class='code-block'><div class='cb-head'>pay-callback.js</div><pre><code>app.get(&#x27;/pay/callback&#x27;, async (req, res) =&gt; {\n  const { order: orderId, Authority, Status } = req.query;\n  const order = await db.order.findByAuthority(orderId, Authority);\n  if (!order) return res.status(404).send(&#x27;سفارش پیدا نشد&#x27;);\n  if (order.status === &#x27;paid&#x27;) return res.redirect(`/orders/${order.id}`);     // رفرش\n  if (Status !== &#x27;OK&#x27;) { await transition(db, order.id, &#x27;pending&#x27;, &#x27;failed&#x27;, &#x27;user_cancelled&#x27;); return res.redirect(`/orders/${order.id}?failed=1`); }\n\n  const v = await fetch(`${ZP}/verify.json`, { method: &#x27;POST&#x27;, headers: { &#x27;Content-Type&#x27;: &#x27;application/json&#x27; },\n    body: JSON.stringify({ merchant_id: MERCHANT, amount: order.totalRial, authority: Authority }) }).then(x =&gt; x.json());\n  if (v.data?.code === 100 || v.data?.code === 101) {\n    if (await transition(db, order.id, &#x27;pending&#x27;, &#x27;paid&#x27;, &#x27;verified&#x27;)) {          // اتمی: فقط یک‌بار موفق\n      await db.order.update(order.id, { refId: v.data.ref_id });\n      await fulfillOrder(order.id);\n    }\n    return res.redirect(`/orders/${order.id}`);\n  }\n  res.redirect(`/orders/${order.id}?failed=1`);\n});</code></pre></div>",
     "exercise": "سناریوی «کاربر callback را سه بار رفرش می‌کند» را شبیه‌سازی کن و مطمئن شو فقط یک‌بار کالا تحویل می‌شود."
    },
    {
     "title": "پرداخت نامشخص (Pending) و کار تطبیق دوره‌ای",
     "content": "<p>گاهی کاربر پرداخت را انجام می‌دهد ولی مرورگرش هرگز به callback برنمی‌گردد (بستن تب، قطع اینترنت). در این حالت پول کم شده و سفارش <code>pending</code> مانده است. راه‌حل: یک <b>کار پس‌زمینه‌ی تطبیق (reconciliation)</b> که هر چند دقیقه سفارش‌های <code>pending</code> قدیمی‌تر از X دقیقه را به درگاه استعلام می‌زند و وضعیت را روشن می‌کند. پس از مهلت نهایی (مثلاً ۳۰ دقیقه تا ۲ ساعت) سفارش بدون پرداخت را <code>expired</code> کن و موجودی رزروشده را آزاد کن. همین الگو برای تطبیق روزانه‌ی گزارش درگاه با دیتابیس خودت (پرداختی که در درگاه هست ولی در سیستم تو نیست و برعکس) به‌کار می‌رود و پایه‌ی حسابداری درست است.</p><div class='code-block'><div class='cb-head'>reconcile.js</div><pre><code>// اجرا هر ۵ دقیقه با cron یا صف\nasync function reconcilePending() {\n  const stale = await db.query(\n    &quot;SELECT * FROM orders WHERE status=&#x27;pending&#x27; AND updated_at &lt; now() - interval &#x27;10 minutes&#x27; LIMIT 100&quot;);\n  for (const o of stale.rows) {\n    const s = await gateway.inquiry(o.authority);            // استعلام وضعیت از درگاه\n    if (s.paid) await markPaidIdempotent(o);                 // همان تابع callback\n    else if (Date.now() - o.updatedAt &gt; 2 * 3600e3) {\n      await transition(db, o.id, &#x27;pending&#x27;, &#x27;expired&#x27;, &#x27;timeout&#x27;);\n      await releaseStock(o.id);\n    }\n  }\n}</code></pre></div>",
     "exercise": "گزارش «پرداخت‌های ناهماهنگ» را با دو لیست (درگاه و دیتابیس) و عملیات مجموعه‌ای طراحی کن."
    },
    {
     "title": "استرداد جزئی و یادداشت اعتباری",
     "content": "<p>استرداد همیشه «همه یا هیچ» نیست. <b>استرداد جزئی</b> (برگشت یک قلم از سفارش) باید مبلغ را با مجموع استردادهای قبلی بسنجد تا هرگز از مبلغ پرداخت‌شده بیشتر نشود: <code>sum(refunds) + new ≤ paid</code>. هر استرداد رکورد جدا دارد (مبلغ، دلیل، شناسه‌ی درگاه، وضعیت) و سفارش بسته به مجموع به <code>partially_refunded</code> یا <code>refunded</code> می‌رود. هنگام استرداد، موجودی انبار و تخفیف‌ها و مالیات متناسب برگردانده شود و یک <b>یادداشت اعتباری (credit note)</b> صادر شود نه حذف فاکتور اصلی (فاکتور سند تغییرناپذیر است). استرداد را idempotent کن (کلید یکتا) تا کلیک دوباره دو بار پول برنگرداند.</p><div class='code-block'><div class='cb-head'>refund.js</div><pre><code>async function refund(db, orderId, amountRial, reason, idemKey) {\n  return db.tx(async tx =&gt; {\n    const dup = await tx.refund.findByKey(idemKey);\n    if (dup) return dup;                                    // تکرار امن\n    const order = await tx.order.lockForUpdate(orderId);    // SELECT ... FOR UPDATE\n    const refunded = await tx.refund.sumByOrder(orderId);\n    if (order.status === &#x27;created&#x27; || order.status === &#x27;pending&#x27;) throw new Error(&#x27;سفارش پرداخت نشده&#x27;);\n    if (refunded + amountRial &gt; order.totalRial) throw new Error(&#x27;بیشتر از مبلغ پرداخت‌شده&#x27;);\n    const r = await tx.refund.create({ orderId, amountRial, reason, idemKey, status: &#x27;requested&#x27; });\n    const status = refunded + amountRial === order.totalRial ? &#x27;refunded&#x27; : &#x27;partially_refunded&#x27;;\n    await tx.order.update(orderId, { status });\n    return r;\n  });\n}</code></pre></div>",
     "exercise": "محدودیت‌های استرداد (حداکثر مبلغ، مهلت، نقش مجاز) را به‌صورت قانون‌های اعتبارسنجی بنویس."
    },
    {
     "title": "Webhook در عمل: تکرار، ترتیب نامعلوم و صف‌کردن",
     "content": "<p>درگاه‌ها Webhook را <b>حداقل یک‌بار</b> می‌فرستند و در صورت خطا بارها تکرار می‌کنند؛ ترتیب رویدادها هم تضمین نیست (ممکن است <code>refunded</code> قبل از <code>succeeded</code> برسد). قواعد: ۱) امضا را بررسی کن؛ ۲) شناسه‌ی رویداد را در جدول <code>processed_events</code> با قید یکتا ثبت کن و تکراری را بی‌اثر بگیر؛ ۳) فوراً <code>2xx</code> بده و کار سنگین را به صف بسپار؛ ۴) به‌جای اعتماد به ترتیب، وضعیت <b>فعلی</b> شیء را از API درگاه بخوان یا از شماره‌ی نسخه/زمان رویداد استفاده کن؛ ۵) خطای موقت را <code>5xx</code> بده تا تکرار شود ولی خطای دائمی (داده‌ی نامعتبر) را <code>2xx</code> با لاگ تا تکرار بی‌نهایت نشود؛ ۶) endpoint را از rate limit عادی مستثنا اما با IP/امضا محافظت کن.</p><div class='code-block'><div class='cb-head'>webhook.js</div><pre><code>app.post(&#x27;/webhooks/pay&#x27;, express.raw({ type: &#x27;*/*&#x27; }), async (req, res) =&gt; {\n  if (!verifySignature(req.body, req.headers[&#x27;x-signature&#x27;])) return res.sendStatus(401);\n  const event = JSON.parse(req.body);\n  try {\n    await db.query(&#x27;INSERT INTO processed_events(id) VALUES ($1)&#x27;, [event.id]);   // قید UNIQUE\n  } catch (e) {\n    if (e.code === &#x27;23505&#x27;) return res.sendStatus(200);       // قبلاً دیده شد\n    throw e;\n  }\n  await queue.add(&#x27;payment-event&#x27;, event);                    // پردازش واقعی در worker\n  res.sendStatus(200);\n});</code></pre></div>",
     "exercise": "جدول processed_events و منطق «اول ثبت، بعد پردازش» را در یک تراکنش بنویس."
    },
    {
     "title": "3D Secure و SCA: وقتی بانک تأیید اضافه می‌خواهد",
     "content": "<p>در اروپا و بسیاری بازارها قانون <b>SCA</b> (احراز هویت قوی مشتری) لازم می‌کند بانک برای بعضی پرداخت‌ها از کاربر تأیید اضافه (کد پیامکی، اپ بانک) بگیرد؛ پروتکل آن <b>3D Secure</b> است. در Stripe این‌ها در <code>PaymentIntent</code> مدیریت می‌شود: وضعیت <code>requires_action</code> یعنی کاربر باید چالش بانک را کامل کند و <code>stripe.confirmCardPayment(clientSecret)</code> در Stripe.js خودش پنجره را باز می‌کند. نتیجه نهایی را باز هم <b>فقط از Webhook</b> (<code>payment_intent.succeeded</code>) بخوان. حالت‌های دیگر: <code>requires_payment_method</code> (کارت رد شد، کارت دیگری بخواه)، <code>processing</code>، <code>canceled</code>. نکته: در ایران این مبحث به‌جای آن با «رمز دوم/پویا» در درگاه بانکی مدیریت می‌شود و در اختیار تو نیست، ولی مفهوم «تأیید اضافه و وضعیت میانی» یکسان است.</p><div class='code-block'><div class='cb-head'>checkout-client.js</div><pre><code>// کلاینت (Stripe.js)\nconst { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {\n  payment_method: { card: cardElement }\n});\nif (error) showError(error.message);                    // کارت رد شد یا چالش ناموفق\nelse if (paymentIntent.status === &#x27;succeeded&#x27;) showPending(&#x27;در حال نهایی‌سازی...&#x27;);   // نتیجه‌ی قطعی از webhook می‌آید</code></pre></div>",
     "exercise": "فلوچارت وضعیت‌های PaymentIntent را بکش و بگو در هر وضعیت UI چه نشان می‌دهد."
    },
    {
     "title": "تجربه‌ی صفحه‌ی پرداخت: جلوگیری از کلیک مضاعف و برگشت مرورگر",
     "content": "<p>بخش بزرگی از «پرداخت دوبار» و «سفارش گم‌شده» از UX می‌آید. دکمه‌ی «پرداخت» را پس از کلیک <b>غیرفعال</b> کن و وضعیت «در حال انتقال به درگاه...» نشان بده؛ سمت سرور هم برای هر سفارش فقط یک پرداخت <code>pending</code> فعال بپذیر (قید یکتا). کاربر ممکن است با دکمه‌ی Back از درگاه برگردد؛ صفحه‌ی سفارش باید وضعیت واقعی را از سرور بخواند نه حدس بزند، و برای <code>pending</code> گزینه‌ی «ادامه‌ی پرداخت» یا «لغو و شروع دوباره» بدهد. بعد از موفقیت صفحه‌ی رسید را با آدرس ثابت (نه POST) نشان بده تا رفرش مشکلی نسازد (الگوی Post/Redirect/Get). پیام‌ها روشن باشند: «پرداخت ناموفق بود، مبلغی کسر نشده» یا «در صورت کسر وجه تا ۷۲ ساعت برمی‌گردد» همراه شماره‌ی پیگیری.</p><div class='code-block'><div class='cb-head'>pay-button.js</div><pre><code>const btn = document.querySelector(&#x27;#pay&#x27;);\nlet busy = false;\nbtn.addEventListener(&#x27;click&#x27;, async () =&gt; {\n  if (busy) return;                       // محافظت کلاینت (محافظت اصلی سمت سرور است)\n  busy = true; btn.disabled = true; btn.textContent = &#x27;در حال انتقال به درگاه...&#x27;;\n  try {\n    const { url } = await fetch(`/pay/${orderId}`, { method: &#x27;POST&#x27; }).then(r =&gt; r.json());\n    location.assign(url);\n  } catch {\n    busy = false; btn.disabled = false; btn.textContent = &#x27;پرداخت&#x27;; showError(&#x27;اتصال برقرار نشد، دوباره تلاش کن.&#x27;);\n  }\n});</code></pre></div>",
     "exercise": "صفحه‌ی نتیجه‌ی پرداخت را برای سه حالت موفق، ناموفق و نامشخص طراحی کن."
    },
    {
     "title": "دفتر کل دوطرفه (Double-Entry Ledger) برای پول",
     "content": "<p>جدول <code>balance</code> که با <code>UPDATE balance = balance + x</code> عوض می‌شود دیر یا زود ناهماهنگ می‌شود و دلیلش مشخص نیست. روش حسابداری: <b>دفتر کل بدون حذف و ویرایش</b> (append-only) که هر تراکنش در آن حداقل دو سطر دارد: یک <b>بدهکار</b> و یک <b>بستانکار</b> با مجموع صفر. مانده = جمع سطرها. مثال: کاربر ۱۰۰ تومان شارژ می‌کند: بدهکار «حساب بانک» و بستانکار «کیف پول کاربر». خرید: بدهکار کیف پول کاربر، بستانکار «درآمد». مزایا: ردیابی کامل، قابلیت تطبیق، امکان بازسازی هر مانده در هر زمان و کشف خطا (مجموع کل همیشه صفر). اصلاح اشتباه = ثبت تراکنش معکوس نه ویرایش. این الگو پایه‌ی کیف پول، پاداش و سیستم اعتبار است.</p><div class='code-block'><div class='cb-head'>ledger.sql</div><pre><code>CREATE TABLE ledger_entry (\n  id          BIGSERIAL PRIMARY KEY,\n  tx_id       UUID    NOT NULL,          -- همه‌ی سطرهای یک تراکنش\n  account     TEXT    NOT NULL,          -- &#x27;user:42:wallet&#x27; | &#x27;revenue&#x27; | &#x27;bank&#x27;\n  amount_rial BIGINT  NOT NULL,          -- بدهکار (+) / بستانکار (-)\n  created_at  TIMESTAMPTZ DEFAULT now()\n);\n-- قید: هر تراکنش باید مجموعش صفر باشد (با trigger یا در لایه‌ی برنامه بررسی شود)\n-- مانده‌ی کیف پول:\nSELECT COALESCE(SUM(amount_rial), 0) FROM ledger_entry WHERE account = &#x27;user:42:wallet&#x27;;</code></pre></div>",
     "exercise": "تراکنش‌های «شارژ، خرید و استرداد» را به سطرهای دفتر کل تبدیل کن و مجموع را صفر نشان بده."
    },
    {
     "title": "سوءاستفاده و کلاهبرداری: Card Testing و محدودسازی",
     "content": "<p>مهاجمان با فروشگاه‌های ضعیف «کارت‌های سرقتی» را با مبلغ‌های کوچک و صدها تلاش امتحان می‌کنند (<b>card testing</b>)؛ نتیجه: جریمه‌ی درگاه و مسدود شدن حساب تجاری تو. دفاع لایه‌ای: <b>rate limit</b> روی تلاش پرداخت بر اساس کاربر/IP/دستگاه، CAPTCHA بعد از چند شکست، لاگ و هشدار برای الگوی «چند پرداخت ناموفق پیاپی»، حداقل مبلغ منطقی، تأیید ایمیل/تلفن قبل از اولین خرید، و محدودیت تعداد تلاش برای یک سفارش. به مشتری واقعی هم احترام بگذار: شمارنده‌ها با گذر زمان صفر شوند و پشتیبانی بتواند رفع مسدودی کند. ردیابی نرخ شکست پرداخت به‌عنوان معیار سلامت (SLI) به کشف زودهنگام حمله کمک می‌کند. اطلاعات کارت هیچ‌گاه از سرور تو عبور نمی‌کند (PCI)، ولی لاگ شناسه‌ها و IP ها مفید است.</p><div class='code-block'><div class='cb-head'>rate-limit-pay.js</div><pre><code>const attempts = new Map();                      // در تولید: Redis با TTL\nfunction allowAttempt(key, max = 5, windowMs = 10 * 60_000) {\n  const now = Date.now();\n  const list = (attempts.get(key) ?? []).filter(t =&gt; now - t &lt; windowMs);\n  if (list.length &gt;= max) return false;\n  list.push(now); attempts.set(key, list); return true;\n}\napp.post(&#x27;/pay/:orderId&#x27;, auth, (req, res, next) =&gt;\n  allowAttempt(`u:${req.user.id}`) &amp;&amp; allowAttempt(`ip:${req.ip}`, 20) ? next() : res.status(429).json({ error: &#x27;تلاش زیاد؛ کمی بعد دوباره امتحان کن&#x27; }));</code></pre></div>",
     "exercise": "قانون‌های هشدار «۵ شکست در ۱۰ دقیقه برای یک کاربر» و «۲۰ شکست از یک IP» را به‌صورت کد یا کوئری بنویس."
    },
    {
     "title": "آزمایش پرداخت: Sandbox، Mock و تست قرارداد",
     "content": "<p>پرداخت را نمی‌شود فقط «دستی» تست کرد. لایه‌ها: ۱) <b>تست واحد</b> برای منطق خودت (ماشین حالت، محاسبه‌ی مبلغ، استرداد) با درگاه جعلی (mock/fake) که رابط یکسان <code>request/verify</code> دارد؛ ۲) <b>Sandbox</b> رسمی درگاه برای عبور واقعی از جریان (کارت‌ها/مرچنت آزمایشی)؛ ۳) تست webhook با رویدادهای ضبط‌شده و ارسال تکراری و بدون ترتیب؛ ۴) <b>تست سرتاسری</b> (Playwright) برای مسیر «سبد → درگاه آزمایشی → رسید»؛ ۵) سناریوهای شکست: timeout درگاه، callback تکراری، مبلغ ناهمخوان، کاربر منصرف. رابط درگاه را پشت یک interface بگذار (<code>PaymentGateway</code>) تا عوض‌کردن درگاه و تست آسان شود. کلیدهای تولید هرگز در CI نباشند.</p><div class='code-block'><div class='cb-head'>payment.test.js</div><pre><code>class FakeGateway {\n  constructor(mode = &#x27;success&#x27;) { this.mode = mode; this.verified = new Set(); }\n  async request({ amount }) { return { authority: &#x27;A&#x27; + Math.random().toString(36).slice(2), amount }; }\n  async verify({ authority, amount }) {\n    if (this.mode === &#x27;timeout&#x27;) throw new Error(&#x27;timeout&#x27;);\n    if (this.mode === &#x27;fail&#x27;) return { ok: false };\n    const again = this.verified.has(authority); this.verified.add(authority);\n    return { ok: true, code: again ? 101 : 100, refId: &#x27;REF&#x27; + authority };\n  }\n}\ntest(&#x27;callback تکراری فقط یک‌بار کالا تحویل می‌دهد&#x27;, async () =&gt; {\n  const gw = new FakeGateway(); const order = await createPendingOrder(gw);\n  await handleCallback(order, gw); await handleCallback(order, gw);\n  expect(await deliveries(order.id)).toBe(1);\n});</code></pre></div>",
     "exercise": "یک FakeGateway بنویس که سه حالت موفق، ناموفق و timeout را شبیه‌سازی کند."
    }
   ],
   "quiz": [
    {
     "q": "چرا Webhook برای ثبت نهایی یک سفارش، از پاسخ مستقیم Frontend قابل‌اعتمادتر است؟",
     "options": [
      "سریع‌تر است",
      "Webhook مستقیم از سرور درگاه پرداخت می‌آید و به قطع‌شدن اتصال کاربر وابسته نیست",
      "رایگان‌تر است",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "حتی اگر اتصال کاربر قطع شود، Webhook همچنان از سمت سرور درگاه ارسال می‌شود."
    },
    {
     "q": "چرا امضای (Signature) یک Webhook باید بررسی شود؟",
     "options": [
      "برای زیبایی کد",
      "برای اطمینان از این‌که درخواست واقعاً از درگاه پرداخت می‌آید، نه یک جعل از سمت مهاجم",
      "چون اجباری است و کاری انجام نمی‌دهد",
      "فقط برای لاگ‌گیری"
     ],
     "answer": 1,
     "explain": "بدون این بررسی، هرکسی می‌تواند یک درخواست جعلی 'پرداخت موفق' برای سرور شما بفرستد."
    },
    {
     "q": "شماره‌کارت‌های آزمایشی (مثل 4242 4242 4242 4242) برای چه استفاده می‌شوند؟",
     "options": [
      "پرداخت واقعی با تخفیف",
      "تست کامل جریان پرداخت در Test Mode بدون پول واقعی",
      "فقط برای نمایش در تبلیغات",
      "هرگز کار نمی‌کنند"
     ],
     "answer": 1,
     "explain": "این کارت‌ها فقط در Test Mode معتبرند و امکان تست کامل بدون تراکنش واقعی می‌دهند."
    },
    {
     "q": "Idempotency Key برای چیست؟",
     "options": [
      "جلوگیری از پرداخت تکراری",
      "رنگ دکمه",
      "سرعت سایت",
      "رمزنگاری کارت"
     ],
     "answer": 0,
     "explain": "درخواست تکراری را شناسایی می‌کند."
    },
    {
     "q": "اطلاعات کارت را کجا ذخیره کنیم؟",
     "options": [
      "خودمان ذخیره نمی‌کنیم و درگاه نگه می‌دارد",
      "در localStorage",
      "در Git",
      "در لاگ"
     ],
     "answer": 0,
     "explain": "ذخیره‌ی مستقیم کارت خطرناک است و PCI می‌خواهد."
    },
    {
     "q": "چرا مبلغ پول را با عدد صحیح (ریال) ذخیره می‌کنیم؟",
     "options": [
      "اعشار دودویی خطا دارد (0.1+0.2)",
      "سریع‌تر است",
      "درگاه‌ها فقط عدد صحیح می‌پذیرند",
      "کوچک‌تر است"
     ],
     "answer": 0,
     "explain": "با کوچک‌ترین واحد پول، خطای گرد کردن حذف می‌شود."
    },
    {
     "q": "در callback درگاه کدام کار الزامی است؟",
     "options": [
      "verify سمت سرور با مبلغ ذخیره‌شده‌ی سفارش",
      "اعتماد به Status=OK در آدرس",
      "ارسال ایمیل",
      "پاک کردن سفارش"
     ],
     "answer": 0,
     "explain": "آدرس callback را کاربر می‌تواند دستکاری کند."
    },
    {
     "q": "برای جلوگیری از تأیید دوبار یک سفارش در دو callback همزمان چه کنیم؟",
     "options": [
      "گذار اتمی UPDATE ... WHERE status='pending'",
      "قفل سمت کلاینت",
      "sleep",
      "هیچ"
     ],
     "answer": 0,
     "explain": "فقط یک درخواست تعداد ردیف تغییرکرده را ۱ می‌بیند."
    },
    {
     "q": "دفتر کل دوطرفه چه ویژگی‌ای دارد؟",
     "options": [
      "append-only و مجموع هر تراکنش صفر",
      "ویرایش مانده‌ها",
      "فقط یک سطر",
      "بدون تاریخچه"
     ],
     "answer": 0,
     "explain": "اصلاح با تراکنش معکوس انجام می‌شود."
    }
   ]
  }
 ],
 "project": {
  "title": "افزودن پرداخت واقعی به فروشگاه آنلاین",
  "brief": "به همون پروژهٔ فروشگاه آنلاین که قبلاً ساختی، یک جریان پرداخت واقعی (با Stripe در Test Mode) اضافه کن: از صفحهٔ سبد خرید تا تایید نهایی سفارش.",
  "requirements": [
   "route ساخت Payment Intent که مبلغ رو از دیتابیس (نه ورودی کاربر) محاسبه کنه",
   "فرم پرداخت در Frontend با Stripe.js (یا کتابخانهٔ مشابه)",
   "یک Webhook که فقط بعد از تایید واقعی، سفارش رو 'پرداخت‌شده' علامت بزنه",
   "تست کامل با شماره‌کارت آزمایشی، هم برای پرداخت موفق هم ناموفق (Stripe کارت‌های تستی برای شکست خوردن عمدی هم داره)"
  ],
  "hints": [
   "مستندات رسمی Stripe (stripe.com/docs) بهترین منبع برای دیدن مثال کامل و به‌روز کد است — از اونجا شروع کن."
  ]
 }
});
