(window.COURSES=window.COURSES||[]).push({
 "id": "git",
 "name": "Git و GitHub",
 "icon": "🐙",
 "kind": "theory",
 "desc": "بدون کنترل نسخه، هیچ تیمی نمی‌تونه روی یک کد کار کنه",
 "covers": [
  "Git چیست، Repository، Commit",
  "git add/commit/status/log/diff",
  "Branch، Merge، Conflict",
  "GitHub: Remote، Push/Pull، Clone",
  "Pull Request، Fork، Code Review",
  "gitignore، README"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "Git چیست و چرا بدون آن ممکن نیست؟",
     "content": "<p>تصور کن ۵ نفر روی یک فایل کار می‌کنن و آخرش با ایمیل فایل‌های final_v2_reallyfinal.js رو برای هم می‌فرستن — این دقیقاً همون کابوسی است که <b>Git</b> حلش می‌کنه. Git یک <b>سیستم کنترل نسخه (Version Control)</b> است: تاریخچهٔ کامل تغییرات کد را نگه می‌دارد، اجازه می‌دهد به هر نسخهٔ قبلی برگردید، و چند نفر بتوانند هم‌زمان و بدون تداخل روی یک پروژه کار کنند.</p><p>یک <b>Repository (مخزن)</b> پوشه‌ای است که Git تاریخچهٔ آن را ردیابی می‌کند. با <code class='inline'>git init</code> یک پوشهٔ معمولی را به Repository تبدیل می‌کنید.</p>",
     "exercise": "توضیح بده اگه بدون Git کار می‌کردی و می‌خواستی به نسخهٔ کد سه روز پیش برگردی، چیکار می‌کردی؟ چرا این روش غیرقابل‌اعتماده؟"
    },
    {
     "title": "چرخهٔ اصلی: add، commit، status، log",
     "content": "<p>در Git سه ناحیه وجود دارد: <b>Working Directory</b> (فایل‌های واقعی روی دیسک)، <b>Staging Area</b> (فایل‌هایی که آماده‌اند برای ثبت شدن) و <b>Repository</b> (تاریخچهٔ ثبت‌شده). <code class='inline'>git add</code> فایل را از Working Directory به Staging می‌برد؛ <code class='inline'>git commit</code> یک عکس‌فوری (Snapshot) دائمی از تغییرات Staging ثبت می‌کند.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git init\ngit add index.html\ngit commit -m \"اولین نسخهٔ صفحه اصلی\"\n\ngit status   # نشون می‌ده چه فایل‌هایی تغییر کردن\ngit log      # تاریخچهٔ کامل commit ها\ngit diff     # دقیقاً چه خط‌هایی تغییر کرده</code></pre></div>",
     "exercise": "توضیح بده چرا Git بین 'تغییردادن فایل' و 'commit کردنش' یک مرحلهٔ جدا (add/staging) گذاشته، به‌جای اینکه هر تغییر رو خودکار ثبت کنه."
    },
    {
     "title": "نوشتن پیام Commit خوب و .gitignore",
     "content": "<p>یک پیام commit خوب باید کوتاه، واضح و در زمان حال باشد (مثل <code class='inline'>\"افزودن فرم ثبت‌نام\"</code>، نه <code class='inline'>\"چیزی رو عوض کردم\"</code>) — این تاریخچه، مستندات زندهٔ پروژه‌ست. فایل <code class='inline'>.gitignore</code> به Git می‌گوید کدام فایل‌ها/پوشه‌ها هرگز نباید ردیابی شوند (مثل <code class='inline'>node_modules/</code> یا <code class='inline'>.env</code>).</p><div class='code-block'><div class='cb-head'>.gitignore</div><pre><code>node_modules/\n.env\n*.log\ndist/</code></pre></div>",
     "exercise": "یک فایل .gitignore برای یک پروژهٔ Node بنویس که node_modules، .env و یک پوشهٔ build/ رو نادیده بگیره."
    }
   ],
   "quiz": [
    {
     "q": "git init چه کاری انجام می‌دهد؟",
     "options": [
      "یک فایل جدید می‌سازد",
      "یک پوشهٔ معمولی را به Git Repository تبدیل می‌کند",
      "کد را اجرا می‌کند",
      "به اینترنت وصل می‌شود"
     ],
     "answer": 1,
     "explain": "init یعنی initialize — شروع ردیابی تاریخچهٔ تغییرات در آن پوشه."
    },
    {
     "q": "تفاوت git add و git commit چیست؟",
     "options": [
      "تفاوتی ندارند",
      "add فایل را برای ثبت آماده می‌کند (staging)؛ commit واقعاً آن را در تاریخچه ثبت می‌کند",
      "commit فایل را حذف می‌کند",
      "add فقط برای تصاویر است"
     ],
     "answer": 1,
     "explain": "این دو مرحله جدا هستند تا بتوانید دقیقاً انتخاب کنید چه چیزی وارد یک commit شود."
    },
    {
     "q": ".gitignore برای چه استفاده می‌شود؟",
     "options": [
      "حذف فایل از هارددیسک",
      "مشخص‌کردن فایل‌ها/پوشه‌هایی که Git هرگز نباید ردیابی کند",
      "فشرده‌سازی پروژه",
      "تغییر رنگ کد"
     ],
     "answer": 1,
     "explain": "فایل‌های حساس یا حجیم (مثل node_modules) نباید وارد تاریخچهٔ Git شوند."
    }
   ],
   "challenge": {
    "task": "یک پروژهٔ فرضی رو تصور کن که ۳ فایل داره: index.html، style.css، .env. با دستورات Git (روی کاغذ/متن) بنویس چطور Repository رو init می‌کنی، فقط دو فایل اول رو commit می‌کنی (نه .env)، و یک .gitignore مناسب هم می‌سازی.",
    "hint1": "اول .gitignore رو بساز و .env رو توش بنویس، قبل از این‌که اصلاً git add بزنی — این‌طوری هیچ‌وقت به‌طور تصادفی .env رو commit نمی‌کنی.",
    "hint2": "می‌تونی با git add . همه‌چیز رو اضافه کنی و Git خودش فایل‌های داخل .gitignore رو نادیده می‌گیره.",
    "solution": "echo '.env' > .gitignore\ngit init\ngit add index.html style.css .gitignore\ngit commit -m \"نسخهٔ اولیهٔ پروژه\"\n\n# .env هرگز add نشد، چون همون اول توی .gitignore بود"
   }
  },
  {
   "lessons": [
    {
     "title": "Branch: کار روی چند نسخه هم‌زمان",
     "content": "<p><b>Branch (شاخه)</b> یک خط تاریخچهٔ مستقل است — می‌توانید روی یک قابلیت جدید کار کنید بدون این‌که کد اصلی (معمولاً <code class='inline'>main</code>) را به‌هم بریزید. با <code class='inline'>git branch</code> شاخهٔ جدید می‌سازید و با <code class='inline'>git checkout</code> یا <code class='inline'>git switch</code> بین شاخه‌ها جابه‌جا می‌شوید.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git branch login-feature      # ساخت شاخهٔ جدید\ngit checkout login-feature    # رفتن به آن شاخه\n# یا هر دو با هم:\ngit checkout -b login-feature\n\n# بعد از تمام‌شدن کار:\ngit checkout main             # برگشت به شاخهٔ اصلی</code></pre></div>",
     "exercise": "توضیح بده چرا کار مستقیم روی main برای یک قابلیت نیمه‌کاره ریسکی است، و چرا branch جداگانه این ریسک رو از بین می‌بره."
    },
    {
     "title": "Merge و برخورد (Conflict)",
     "content": "<p>وقتی کار روی یک branch تمام شد، با <code class='inline'>git merge</code> تغییرات آن را به شاخهٔ دیگر (مثلاً main) می‌آورید. اگر دو نفر (یا دو branch) یک خط از یک فایل را متفاوت تغییر داده باشند، Git نمی‌تواند خودش تصمیم بگیرد — این یک <b>Conflict</b> است که باید دستی حل شود: Git خطوط متضاد را با نشانه‌های <code class='inline'>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> مشخص می‌کند تا شما انتخاب کنید کدام نسخه بماند.</p><div class='code-block'><div class='cb-head'>فایل با Conflict</div><pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nconst title = \"سلام دنیا\";\n=======\nconst title = \"خوش آمدید\";\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; login-feature</code></pre></div><p>باید یکی از دو نسخه (یا ترکیبی) رو انتخاب کنید، نشانه‌های Git رو پاک کنید، و دوباره commit کنید.</p>",
     "exercise": "توضیح بده چرا Conflict الزاماً به‌معنی 'خطا در کد' نیست، بلکه فقط یعنی Git نمی‌تونه خودش تصمیم بگیره کدوم تغییر درسته."
    }
   ],
   "quiz": [
    {
     "q": "branch در Git چه چیزی را نمایش می‌دهد؟",
     "options": [
      "یک فایل جدید",
      "یک خط تاریخچهٔ مستقل برای کار بدون تأثیر روی کد اصلی",
      "یک نسخهٔ فشرده از پروژه",
      "یک نوع فایل تصویری"
     ],
     "answer": 1,
     "explain": "branch اجازه می‌دهد چند نسخهٔ موازی از پروژه هم‌زمان وجود داشته باشد."
    },
    {
     "q": "Conflict در Git چه زمانی رخ می‌دهد؟",
     "options": [
      "هر بار که commit می‌زنید",
      "وقتی دو branch یک بخش مشترک از یک فایل را متفاوت تغییر داده باشند",
      "وقتی فایل را حذف می‌کنید",
      "هرگز رخ نمی‌دهد"
     ],
     "answer": 1,
     "explain": "Git در این حالت نمی‌تواند خودکار تصمیم بگیرد و از شما کمک می‌خواهد."
    },
    {
     "q": "git checkout -b login-feature چه کاری انجام می‌دهد؟",
     "options": [
      "فقط branch را حذف می‌کند",
      "هم‌زمان یک branch جدید می‌سازد و به آن سوییچ می‌کند",
      "فایل جدید می‌سازد",
      "commit را لغو می‌کند"
     ],
     "answer": 1,
     "explain": "پرچم -b کوتاه‌شدهٔ ساخت + سوییچ در یک دستور است."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "GitHub: Remote، Push و Pull",
     "content": "<p>Git خودش فقط روی سیستم شماست؛ <b>GitHub</b> یک سرویس آنلاین برای میزبانی این Repository هاست. <code class='inline'>git remote add origin ...</code> آدرس نسخهٔ آنلاین را وصل می‌کند؛ <code class='inline'>git push</code> تغییرات محلی را به GitHub می‌فرستد؛ <code class='inline'>git pull</code> تغییرات جدید (که مثلاً هم‌تیمی‌تان push کرده) را از GitHub می‌گیرد.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git remote add origin https://github.com/username/my-project.git\ngit push -u origin main\n\n# بار بعد، فقط:\ngit push\n\n# گرفتن تغییرات جدید از تیم:\ngit pull</code></pre></div>",
     "exercise": "توضیح بده تفاوت git clone (برای اولین‌بار گرفتن یک پروژه) با git pull (برای به‌روزرسانی یک پروژهٔ موجود) چیه."
    },
    {
     "title": "Pull Request و Code Review",
     "content": "<p>در کار تیمی، معمولاً به‌جای push مستقیم به main، یک <b>Pull Request (PR)</b> باز می‌کنید: درخواستی که می‌گوید «این branch را بررسی کن و اگه خوب بود merge کن». این باعث می‌شود قبل از ورود کد به نسخهٔ اصلی، هم‌تیمی‌ها آن را <b>Review</b> (بررسی) و نظر بدهند — یکی از مهم‌ترین عادت‌های تیم‌های حرفه‌ای.</p>",
     "exercise": "فکر کن توی یه تیم ۴نفره کار می‌کنی. توضیح بده چرا اجازه‌دادن به همه برای push مستقیم روی main (بدون PR) می‌تونه خطرناک باشه."
    },
    {
     "title": "Fork: مشارکت در پروژهٔ دیگران",
     "content": "<p><b>Fork</b> یک کپی کامل از Repository شخص دیگری در حساب GitHub شماست. برای مشارکت در پروژه‌های متن‌باز (Open Source): پروژه را Fork می‌کنید، روی نسخهٔ خودتان تغییر می‌دهید، و بعد یک Pull Request به پروژهٔ اصلی می‌فرستید تا صاحب پروژه تغییرات شما را بررسی و (در صورت تایید) merge کند.</p>",
     "exercise": "توضیح بده تفاوت Fork کردن یک پروژه با Clone کردنش چیه، و چرا برای مشارکت در پروژهٔ یک شخص غریبه به Fork نیاز داری، نه فقط Clone."
    },
    {
     "title": "Rebase، Stash و تمیزکردن تاریخچه",
     "content": "<p><code class='inline'>git stash</code> تغییرات نیمه‌کاره را موقتاً کنار می‌گذارد تا شاخه عوض کنی و با <code class='inline'>stash pop</code> برمی‌گردند. <code class='inline'>rebase</code> کامیت‌های شاخه را روی آخرین نسخهٔ main بازچینی می‌کند تا تاریخچه خطی شود؛ <code class='inline'>rebase -i</code> کامیت‌ها را ادغام یا ویرایش می‌کند. قانون طلایی: روی شاخه‌ای که دیگران استفاده می‌کنند هرگز rebase نکن.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git stash\ngit switch main &amp;&amp; git pull\ngit switch feature &amp;&amp; git rebase main\ngit stash pop</code></pre></div>",
     "exercise": "سه کامیت کوچک را با rebase -i به یک کامیت تبدیل کن."
    },
    {
     "title": "Workflow تیمی: Git Flow، Tag و Reset",
     "content": "<p>تیم‌ها معمولاً شاخهٔ main پایدار و شاخهٔ feature برای هر کار دارند و با Pull Request ادغام می‌کنند. <code class='inline'>git tag v1.0.0</code> نسخهٔ انتشار را علامت می‌زند. برای برگشت امن از <code class='inline'>git revert</code> استفاده کن (کامیت جدید می‌سازد)، و <code class='inline'>reset --hard</code> فقط روی کار محلی که منتشر نشده.</p>",
     "exercise": "یک tag نسخه بساز و یک کامیت اشتباه را با revert برگردان."
    },
    {
     "title": "Cherry-pick، Reflog و نجات از اشتباه",
     "content": "<p><code class='inline'>cherry-pick</code> یک کامیت مشخص را به شاخهٔ دیگر می‌آورد. <code class='inline'>git reflog</code> همه‌ی جابه‌جایی‌های HEAD را نگه می‌دارد، پس حتی بعد از reset اشتباه می‌توانی کامیت‌ها را پیدا و برگردانی.</p>",
     "exercise": "عمداً یک reset --hard بزن و با reflog برگردان."
    },
    {
     "title": "Conventional Commits و Git Hooks",
     "content": "<p>قالب <code class='inline'>feat: ...</code>، <code class='inline'>fix: ...</code>، <code class='inline'>docs: ...</code> تاریخچه را خوانا می‌کند و ساخت خودکار Changelog را ممکن می‌سازد. Git Hook (مثل pre-commit) قبل از هر کامیت لینت و تست اجرا می‌کند.</p>",
     "exercise": "یک hook بنویس که قبل از commit تست را اجرا کند."
    },
    {
     "title": "مدل داخلی Git: Blob، Tree، Commit و Ref",
     "content": "<p>Git یک پایگاه داده‌ی محتوا-آدرس‌دار است: فایل = <b>blob</b>، پوشه = <b>tree</b>، یک عکس از پروژه = <b>commit</b> (با اشاره به tree و والد). شاخه و تگ فقط <b>ref</b>‌اند، یعنی نام‌هایی که به یک commit اشاره می‌کنند؛ پس ساخت شاخه ارزان است. با <code class='inline'>git cat-file</code> این اشیا را می‌بینی.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git cat-file -t HEAD          # commit\ngit cat-file -t HEAD^{tree}   # tree\ngit cat-file -p HEAD^{tree}   # فهرست blobها\ngit rev-parse --abbrev-ref HEAD</code></pre></div></p>",
     "exercise": "یک مخزن بساز و با cat-file ساختار commit اولت را دنبال کن."
    },
    {
     "title": "Staging و سه حالت reset",
     "content": "<p>Git سه ناحیه دارد: دایرکتوری کاری، Index (stage) و مخزن. <code class='inline'>git add -p</code> تکه‌تکه stage می‌کند و <code class='inline'>git restore --staged</code> برمی‌گرداند. <code class='inline'>reset --soft</code> فقط HEAD را عقب می‌برد (تغییرات staged می‌مانند)، <code class='inline'>--mixed</code> (پیش‌فرض) staged را هم برمی‌گرداند و <code class='inline'>--hard</code> فایل‌ها را هم پاک می‌کند (خطرناک).<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git add -p\ngit reset --soft HEAD~1   # commit برمی‌گردد، staged می‌ماند\ngit reset --mixed HEAD    # staged هم خالی می‌شود\ngit restore a.txt         # تغییر کاری را دور بریز</code></pre></div></p>",
     "exercise": "با add -p دو تغییر یک فایل را در دو commit جدا ثبت کن."
    },
    {
     "title": "استراتژی شاخه‌بندی: Trunk-based، GitHub Flow و Git Flow",
     "content": "<p>Trunk-based: همه روی main با شاخه‌های بسیار کوتاه و پرچم ویژگی؛ مناسب انتشار پیوسته. GitHub Flow: یک شاخه‌ی ویژگی، Pull Request و ادغام در main. Git Flow (develop/release/hotfix) برای انتشارهای نسخه‌دار و سنگین مناسب است ولی پیچیده. انتخاب بر اساس ریتم انتشار تیم است و ادغام‌های طولانی‌مدت شاخه‌ها خطر تعارض را بالا می‌برند.</p>",
     "exercise": "استراتژی مناسب یک تیم ۴ نفره با انتشار روزانه را انتخاب و توجیه کن."
    },
    {
     "title": "Merge، Rebase، Squash و حل تعارض",
     "content": "<p>Merge تاریخچه را حفظ و یک commit ادغام می‌سازد، Rebase commitها را روی نوک شاخه‌ی هدف بازچینی می‌کند (خطی) و Squash چند commit را یکی می‌کند. در تعارض، فایل را باز و علامت‌ها را رفع کن، <code class='inline'>git add</code> و ادامه بده. <code class='inline'>rerere</code> راه‌حل‌های تکراری را به‌خاطر می‌سپارد.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git config rerere.enabled true\ngit merge feat            # Automatic merge failed\ngit diff --name-only --diff-filter=U   # فایل‌های متعارض\n# فایل را رفع کن، سپس:\ngit add c.txt &amp;&amp; git commit</code></pre></div></p>",
     "exercise": "عمداً یک تعارض بساز و دو بار با rerere حلش کن."
    },
    {
     "title": "Rebase تعاملی و autosquash",
     "content": "<p><code class='inline'>git rebase -i</code> commitها را ویرایش، ادغام یا حذف می‌کند تا تاریخچه پیش از PR تمیز شود. برای اصلاح commit قدیمی: <code class='inline'>git commit --fixup &lt;hash&gt;</code> و سپس <code class='inline'>rebase -i --autosquash</code> آن را خودکار در جای درست ادغام می‌کند. فقط روی commitهای منتشرنشده rebase کن.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git commit --fixup HEAD~2\ngit rebase -i --autosquash main</code></pre></div></p>",
     "exercise": "پنج commit کوچک را قبل از PR به سه commit معنادار تبدیل کن."
    },
    {
     "title": "git bisect: پیداکردن commit خراب‌کننده",
     "content": "<p>وقتی باگی در گذشته وارد شده، bisect با جست‌وجوی دودویی commit مقصر را پیدا می‌کند: یک commit خوب و یک بد می‌دهی و Git هر بار وسط را checkout می‌کند. با اسکریپت تست خودکار می‌شود (کد خروج ۰ یعنی خوب). از ۱۰۰۰ commit فقط حدود ۱۰ مرحله.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git bisect start HEAD HEAD~5\ngit bisect run sh -c '! grep -q bug v.txt'\n# bisect found first bad commit\ngit bisect reset</code></pre></div></p>",
     "exercise": "برای یک تست واقعی پروژه‌ات bisect خودکار اجرا کن."
    },
    {
     "title": "Worktree و Stash پیشرفته",
     "content": "<p><code class='inline'>git worktree add ../wt -b hotfix</code> یک پوشه‌ی کاری دوم از همان مخزن می‌سازد تا بدون stash و تغییر شاخه روی کار فوری بروی. <code class='inline'>git stash push -m نام</code> با پیام، <code class='inline'>-u</code> برای فایل‌های untracked و <code class='inline'>stash pop</code> برای برگرداندن.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git worktree add ../wt -b hotfix\ngit stash push -m \"wip\"\ngit stash list\ngit stash pop\ngit worktree remove ../wt</code></pre></div></p>",
     "exercise": "هنگام کار روی یک ویژگی، hotfix را در worktree جدا انجام بده."
    },
    {
     "title": "بازیابی با reflog و fsck",
     "content": "<p>reflog تاریخچه‌ی حرکت HEAD و شاخه‌ها را حتی بعد از reset سخت یا حذف شاخه نگه می‌دارد (چند هفته). برای بازیابی: <code class='inline'>git reflog</code> را ببین و <code class='inline'>git reset --hard &lt;hash&gt;</code> یا <code class='inline'>git branch rescue &lt;hash&gt;</code>. <code class='inline'>git fsck --lost-found</code> اشیای رهاشده را پیدا می‌کند. پیش از عملیات خطرناک، یک شاخه‌ی پشتیبان بساز.<div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>git reset --hard HEAD~2     # اشتباه!\ngit reflog                  # hash قبل را پیدا کن\ngit reset --hard &lt;hash>     # برگشت</code></pre></div></p>",
     "exercise": "یک شاخه را عمداً حذف و با reflog برگردان."
    },
    {
     "title": "Submodule، Subtree و Monorepo",
     "content": "<p>Submodule یک مخزن دیگر را روی commit مشخص پین می‌کند (کنترل دقیق ولی پیچیده برای تیم). Subtree کد را درون مخزن ادغام می‌کند (ساده‌تر برای مصرف‌کننده). برای مخزن بزرگ: <code class='inline'>clone --filter=blob:none</code> (Partial Clone) و <code class='inline'>sparse-checkout</code> فقط پوشه‌های لازم را می‌گیرند. مونو‌ریپو نیاز به ابزار ساخت و CODEOWNERS دارد.</p>",
     "exercise": "یک مخزن بزرگ را با sparse-checkout فقط روی یک پوشه کلون کن."
    },
    {
     "title": "Hook، امضای commit و خودکارسازی",
     "content": "<p>Hookهای محلی (<code class='inline'>pre-commit</code>، <code class='inline'>commit-msg</code>) لینت، تست سریع و قالب پیام (Conventional Commits) را بررسی می‌کنند؛ آن‌ها با ابزارهایی مثل Husky یا pre-commit مشترک می‌شوند ولی قابل‌دورزدن‌اند، پس همان‌ها را در CI هم اجرا کن. امضای commit (<code class='inline'>-S</code> با GPG یا کلید SSH) هویت نویسنده را ثابت می‌کند.</p>",
     "exercise": "hook بنویس که commit با پیام نامعتبر را رد کند."
    },
    {
     "title": "GitHub حرفه‌ای: PR، Review، CODEOWNERS و Actions",
     "content": "<p>Pull Requestهای کوچک و متمرکز با توضیح روشن سریع‌تر بازبینی می‌شوند. <code class='inline'>CODEOWNERS</code> بازبین خودکار هر مسیر را تعیین، Branch Protection ادغام بدون بازبینی و تست سبز را ممنوع و GitHub Actions تست و استقرار را خودکار می‌کند. Secret را فقط در تنظیمات Actions بگذار، نه در کد. Issue و Projects کار را ردیابی می‌کنند.</p>",
     "exercise": "یک workflow بنویس که روی هر PR تست را اجرا و ادغام را در صورت شکست مسدود کند."
    },
    {
     "title": "بهداشت مخزن: Secret لو رفته، LFS و gitignore",
     "content": "<p>اگر Secret وارد تاریخچه شد، حذف commit کافی نیست: اول کلید را <b>بچرخان (rotate)</b>، بعد با <code class='inline'>git filter-repo</code> از تاریخچه پاک کن و همه باید دوباره کلون کنند. فایل‌های باینری بزرگ را با Git LFS ذخیره کن. <code class='inline'>.gitignore</code> را از ابتدا بنویس و <code class='inline'>.gitattributes</code> پایان خط و رفتار فایل را یکدست می‌کند. با ابزارهایی مثل gitleaks در CI نشت را پیش از ادغام بگیر.</p>",
     "exercise": "یک مخزن با Secret نمایشی بساز و با gitleaks آن را پیدا و پاک کن."
    },
    {
     "title": "جست‌وجو در تاریخچه: -S، -G، -L و --grep",
     "content": "<p>پرسش «این خط کی و چرا نوشته شد؟» با <code>git log</code> جواب داده می‌شود. <code>-S\"متن\"</code> (pickaxe) commitهایی را می‌یابد که <b>تعداد وقوع</b> یک رشته را تغییر داده‌اند (اضافه/حذف)؛ <code>-G\"regex\"</code> هر تغییری که خطش با regex جور باشد. <code>-L :تابع:فایل</code> تاریخچه‌ی یک تابع یا بازه‌ی خطی را نشان می‌دهد. <code>--grep</code> پیام commit را می‌گردد، <code>--author</code> و <code>--since</code> هم هستند، و <code>--pretty=format:</code> خروجی را قالب می‌دهد. ترکیبشان بهترین ابزار تحقیق باگ است.</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\nprintf &#x27;def price(x):\\n    return x * 1.09\\n&#x27; &gt; shop.py &amp;&amp; git add . &amp;&amp; c &quot;feat: price with tax&quot; 2026-01-01\nprintf &#x27;def price(x):\\n    return x * 1.10\\n\\ndef total(xs):\\n    return sum(xs)\\n&#x27; &gt; shop.py &amp;&amp; c &quot;fix: tax is 10 percent&quot; 2026-02-01\nprintf &#x27;TAX = 1.10\\ndef price(x):\\n    return x * TAX\\n\\ndef total(xs):\\n    return sum(map(price, xs))\\n&#x27; &gt; shop.py &amp;&amp; c &quot;refactor: extract TAX constant&quot; 2026-03-01\n\necho &#x27;--- pickaxe -S: کدام commitها تعداد وقوع «1.09» را تغییر دادند (افزودن/حذف)؟&#x27;\ngit log -S&quot;1.09&quot; --format=&#x27;%ad | %s&#x27; --date=short\necho &#x27;--- -G: هر تغییری که TAX در آن است&#x27;\ngit log -G&quot;TAX&quot; --format=&#x27;%ad | %s&#x27; --date=short\necho &#x27;--- --grep روی پیام&#x27;\ngit log --grep=&quot;^fix&quot; -i --format=&#x27;%s&#x27;\necho &#x27;--- -L: تاریخچه‌ی تابع price&#x27;\ngit log -L:price:shop.py --format=&#x27;%ad | %s&#x27; --date=short -s\necho &#x27;--- بازه‌ی زمانی&#x27;\ngit log --since=2026-02-15 --format=&#x27;%s&#x27;</code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>--- pickaxe -S: کدام commitها تعداد وقوع «1.09» را تغییر دادند (افزودن/حذف)؟\n2026-02-01 | fix: tax is 10 percent\n2026-01-01 | feat: price with tax\n--- -G: هر تغییری که TAX در آن است\n2026-03-01 | refactor: extract TAX constant\n--- --grep روی پیام\nfix: tax is 10 percent\n--- -L: تاریخچه‌ی تابع price\n2026-03-01 | refactor: extract TAX constant\n2026-02-01 | fix: tax is 10 percent\n2026-01-01 | feat: price with tax\n--- بازه‌ی زمانی\nrefactor: extract TAX constant</code></pre></div>",
     "exercise": "با -S یک رشته‌ی دلخواه در پروژه‌ی خودت پیدا کن."
    },
    {
     "title": "تفاوت‌گیری: دو نقطه، سه نقطه، --stat و --word-diff",
     "content": "<p><code>git diff A..B</code> فرق مستقیم دو commit است. اما برای مقایسه‌ی <b>شاخه‌ی feature با main</b> معمولاً <code>main...feature</code> (سه‌نقطه) می‌خواهی: فرق نسبت به <b>نیای مشترک</b>، یعنی فقط تغییرات خودِ feature (همان چیزی که PR نشان می‌دهد). در <code>git log</code> معنا فرق دارد: <code>A..B</code> یعنی commitهای B که در A نیستند. خروجی‌های مفید: <code>--stat</code> (خلاصه)، <code>--name-status</code> (فقط فهرست)، <code>--word-diff</code> (تفاوت در سطح کلمه برای متن)، <code>--color-moved</code> (کد جابه‌جاشده).</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\nprintf &#x27;a\\nb\\nc\\n&#x27; &gt; f.txt &amp;&amp; git add . &amp;&amp; c &quot;base&quot; 2026-01-01\ngit switch -q -c feature\nprintf &#x27;a\\nb\\nc\\nfeature line\\n&#x27; &gt; f.txt &amp;&amp; c &quot;feature work&quot; 2026-01-02\ngit switch -q main\nprintf &#x27;a\\nb\\nc\\nmain-only line\\n&#x27; &gt; g.txt &amp;&amp; git add g.txt &amp;&amp; c &quot;main moved on&quot; 2026-01-03\n\necho &#x27;--- دو نقطه main..feature (log): commitهای feature که در main نیست&#x27;\ngit log --format=&#x27;%s&#x27; main..feature\necho &#x27;--- diff دو نقطه: فرق مستقیم دو سر (g.txt هم دیده می‌شود)&#x27;\ngit diff --name-status main..feature\necho &#x27;--- diff سه نقطه: فقط تغییرات خود feature (مثل PR)&#x27;\ngit diff --name-status main...feature\necho &#x27;--- --stat&#x27;\ngit diff --stat main...feature\necho &#x27;--- word-diff&#x27;\nprintf &#x27;سلام دنیا خوش آمدی\\n&#x27; &gt; t.txt &amp;&amp; git add t.txt &amp;&amp; c &quot;text&quot; 2026-01-04\nprintf &#x27;سلام جهان خوش آمدی\\n&#x27; &gt; t.txt\ngit diff --word-diff=porcelain | grep -E &#x27;^[-+][^-+]&#x27; </code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>--- دو نقطه main..feature (log): commitهای feature که در main نیست\nfeature work\n--- diff دو نقطه: فرق مستقیم دو سر (g.txt هم دیده می‌شود)\nM\tf.txt\nD\tg.txt\n--- diff سه نقطه: فقط تغییرات خود feature (مثل PR)\nM\tf.txt\n--- --stat\n f.txt | 1 +\n 1 file changed, 1 insertion(+)\n--- word-diff\n-دنیا\n+جهان</code></pre></div>",
     "exercise": "سه‌نقطه را روی شاخه‌های پروژه‌ی خودت امتحان کن."
    },
    {
     "title": "rerere: یک بار تعارض را حل کن، همیشه",
     "content": "<p>در rebase یا merge مکرر یک شاخه‌ی بلندمدت، همان تعارض‌ها بارها تکرار می‌شوند. <code>git config rerere.enabled true</code> (reuse recorded resolution) راه‌حلی که یک بار دستی ساختی را <b>ثبت</b> می‌کند و دفعه‌ی بعد که همان تعارض پیش آمد خودکار اعمال می‌کند. مناسب شاخه‌های طولانی، rebase مداوم روی main و تمرین مرج. بعد از اعمال خودکار باز هم نتیجه را بررسی کن و <code>git add</code> بزن. ثبت‌ها در <code>.git/rr-cache</code> می‌ماند.</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\ngit config rerere.enabled true\nprintf &#x27;color=red\\n&#x27; &gt; cfg &amp;&amp; git add . &amp;&amp; c &quot;base&quot; 2026-01-01\ngit switch -q -c feat; printf &#x27;color=blue\\n&#x27; &gt; cfg &amp;&amp; c &quot;feat: blue&quot; 2026-01-02\ngit switch -q main;   printf &#x27;color=green\\n&#x27; &gt; cfg &amp;&amp; c &quot;main: green&quot; 2026-01-03\n\necho &#x27;--- مرج اول: تعارض&#x27;\ngit merge feat &gt;/dev/null 2&gt;&amp;1 || true\ngit status --short\nprintf &#x27;color=teal\\n&#x27; &gt; cfg                       # حل دستی\ngit add cfg &amp;&amp; git commit -q -m &quot;merge (حل دستی: teal)&quot;\necho &quot;فایل‌های ثبت‌شده در rr-cache: $(find .git/rr-cache -type f | sed &#x27;s#.*/##&#x27; | sort | tr &#x27;\\n&#x27; &#x27; &#x27;)&quot;\n\necho &#x27;--- برگردیم و دوباره همان مرج را بزنیم&#x27;\ngit reset -q --hard HEAD~1\ngit merge feat 2&gt;&amp;1 | grep -E &quot;Resolved|CONFLICT&quot; || true\necho &quot;محتوای cfg بدون دخالت ما: $(cat cfg)&quot;\ngit status --short\necho &#x27;(rerere teal را خودکار اعمال کرد؛ فقط باید git add و commit بزنی)&#x27;</code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>--- مرج اول: تعارض\nUU cfg\nفایل‌های ثبت‌شده در rr-cache: postimage preimage \n--- برگردیم و دوباره همان مرج را بزنیم\nCONFLICT (content): Merge conflict in cfg\nResolved &#x27;cfg&#x27; using previous resolution.\nمحتوای cfg بدون دخالت ما: color=teal\nUU cfg\n(rerere teal را خودکار اعمال کرد؛ فقط باید git add و commit بزنی)\n\n[stderr] Recorded resolution for &#x27;cfg&#x27;.</code></pre></div>",
     "exercise": "rerere را روی یک تمرین rebase امتحان کن."
    },
    {
     "title": "پیکربندی Git: alias، includeIf و .gitattributes",
     "content": "<p><b>alias</b> دستورهای بلند را کوتاه می‌کند (<code>git config alias.lg \"log --oneline --graph --decorate\"</code>). <code>includeIf</code> در <code>~/.gitconfig</code> بسته به پوشه‌ی پروژه فایل پیکربندی دیگری (ایمیل کاری در برابر شخصی) را بارگذاری می‌کند. <code>.gitattributes</code> رفتار فایل‌ها را تعیین می‌کند: <code>* text=auto eol=lf</code> برای پایان‌خط‌های یکدست، <code>*.lock merge=union</code> برای ادغام خودکار خط‌به‌خط (مثل changelog)، <code>docs/ export-ignore</code> برای حذف از <code>git archive</code>، و <code>*.png binary</code>.</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\ngit config alias.lg &quot;log --format=%s --graph&quot;\ngit config alias.last &quot;log -1 --format=%s&quot;\nprintf &#x27;one\\n&#x27; &gt; CHANGELOG.txt &amp;&amp; printf &#x27;print(1)\\n&#x27; &gt; app.py &amp;&amp; mkdir docs &amp;&amp; echo d &gt; docs/a.md\nprintf &#x27;CHANGELOG.txt merge=union\\ndocs/ export-ignore\\n&#x27; &gt; .gitattributes\ngit add . &amp;&amp; c &quot;base&quot; 2026-01-01\necho &quot;alias lg/last: $(git last)&quot;\n\ngit switch -q -c b1; printf &#x27;one\\nfrom-b1\\n&#x27; &gt; CHANGELOG.txt &amp;&amp; c &quot;b1 entry&quot; 2026-01-02\ngit switch -q main;  printf &#x27;one\\nfrom-main\\n&#x27; &gt; CHANGELOG.txt &amp;&amp; c &quot;main entry&quot; 2026-01-03\necho &#x27;--- مرج با merge=union (بدون تعارض)&#x27;\ngit merge b1 -q -m &quot;merge&quot; &amp;&amp; cat CHANGELOG.txt\necho &#x27;--- git archive با export-ignore&#x27;\ngit archive HEAD | tar -t | sort</code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>alias lg/last: base\n--- مرج با merge=union (بدون تعارض)\nAuto-merging CHANGELOG.txt\none\nfrom-main\nfrom-b1\n--- git archive با export-ignore\n.gitattributes\nCHANGELOG.txt\napp.py</code></pre></div>",
     "exercise": "یک alias برای نمایش وضعیت کوتاه بساز."
    },
    {
     "title": "دستورهای جدید: restore، switch و clean",
     "content": "<p><code>git checkout</code> دو کار نامرتبط می‌کرد (جابه‌جایی شاخه و بازگرداندن فایل). Git ۲٫۲۳ آن را شکست: <code>git switch</code> برای شاخه‌ها (<code>-c</code> ساخت)، <code>git restore</code> برای فایل‌ها. <code>restore FILE</code> تغییر کار را دور می‌اندازد، <code>restore --staged FILE</code> فقط از stage بیرون می‌آورد، <code>restore --source=HEAD~2 FILE</code> نسخه‌ی قدیمی را برمی‌گرداند. <code>git clean -n</code> (پیش‌نمایش!) و <code>-fd</code> فایل‌های ردیابی‌نشده را حذف می‌کند؛ <b>غیرقابل‌بازگشت</b> است، پس همیشه اول <code>-n</code>.</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\nprintf &#x27;v1\\n&#x27; &gt; a.txt &amp;&amp; git add . &amp;&amp; c &quot;v1&quot; 2026-01-01\nprintf &#x27;v2\\n&#x27; &gt; a.txt &amp;&amp; c &quot;v2&quot; 2026-01-02\nprintf &#x27;v3-wip\\n&#x27; &gt; a.txt &amp;&amp; git add a.txt\necho &quot;stage: $(git diff --cached --name-only) | محتوا: $(cat a.txt)&quot;\ngit restore --staged a.txt\necho &quot;بعد از restore --staged → stage خالی؟ [$(git diff --cached --name-only)] | فایل هنوز: $(cat a.txt)&quot;\ngit restore a.txt\necho &quot;بعد از restore → $(cat a.txt)&quot;\ngit restore --source=HEAD~1 a.txt\necho &quot;نسخه‌ی قدیمی از HEAD~1 → $(cat a.txt)&quot;\ngit restore a.txt\necho &#x27;--- clean&#x27;\necho tmp &gt; junk.log &amp;&amp; mkdir build &amp;&amp; echo x &gt; build/o\ngit clean -n -d\ngit clean -fdq\necho &quot;بعد از clean: $(git status --short | wc -l) فایل ردیابی‌نشده&quot;\ngit switch -q -c topic &amp;&amp; echo &quot;شاخه‌ی فعلی: $(git branch --show-current)&quot; </code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>stage: a.txt | محتوا: v3-wip\nبعد از restore --staged → stage خالی؟ [] | فایل هنوز: v3-wip\nبعد از restore → v2\nنسخه‌ی قدیمی از HEAD~1 → v1\n--- clean\nWould remove build/\nWould remove junk.log\nبعد از clean: 0 فایل ردیابی‌نشده\nشاخه‌ی فعلی: topic</code></pre></div>",
     "exercise": "git clean -n را روی پوشه‌ی خودت (بدون -f) امتحان کن."
    },
    {
     "title": "انتقال و بسته‌بندی: bundle، archive و describe",
     "content": "<p><code>git bundle</code> کل مخزن (یا بازه‌ای از آن) را در <b>یک فایل</b> می‌گذارد؛ برای انتقال بدون شبکه (فلش، ایمیل) یا پشتیبان عالی است و مثل remote قابل <code>clone</code>/<code>fetch</code> است. <code>git archive</code> یک snapshot بدون پوشه‌ی <code>.git</code> برای انتشار می‌سازد. <code>git describe --tags</code> نسخه‌ی خوانا (<code>v1.0-3-gabc123</code>) برای شماره‌ی build می‌دهد و <code>git shortlog -sn</code> مشارکت‌کنندگان را می‌شمارد. این ابزارها در CI/CD و انتشار کاربرد دارند.</p><div class='code-block'><div class='cb-head'>اسکریپت (bash)</div><pre><code>set -e\nexport GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null\ngit init -q -b main demo &amp;&amp; cd demo\ngit config user.name &quot;Ali&quot; &amp;&amp; git config user.email &quot;ali@example.com&quot;\nc() { GIT_AUTHOR_DATE=&quot;$2 12:00:00 +0000&quot; GIT_COMMITTER_DATE=&quot;$2 12:00:00 +0000&quot; git commit -q -am &quot;$1&quot;; }\n\necho 1 &gt; a &amp;&amp; git add . &amp;&amp; c &quot;first&quot; 2026-01-01 &amp;&amp; git tag v1.0\necho 2 &gt;&gt; a &amp;&amp; c &quot;second&quot; 2026-01-02\necho 3 &gt;&gt; a &amp;&amp; c &quot;third&quot; 2026-01-03\necho &quot;describe: $(git describe --tags | sed &#x27;s/-g[0-9a-f]*$/-g&lt;hash&gt;/&#x27;)&quot;\ngit shortlog -sn HEAD\ngit bundle create ../repo.bundle --all 2&gt;&amp;1 | tail -1\ngit bundle verify ../repo.bundle 2&gt;&amp;1 | tail -1\ncd .. &amp;&amp; git clone -q repo.bundle restored &amp;&amp; cd restored\necho &quot;کلون از bundle: $(git log --format=%s | tr &#x27;\\n&#x27; &#x27;,&#x27; )&quot;\ngit archive --format=tar HEAD | tar -t</code></pre></div><div class='code-block'><div class='cb-head'>خروجی واقعی (git 2.43)</div><pre><code>describe: v1.0-2-g&lt;hash&gt;\n     3\tAli\nThe bundle uses this hash algorithm: sha1\nکلون از bundle: third,second,first,\na</code></pre></div>",
     "exercise": "یک bundle از پروژه‌ات بساز و کلون کن."
    }
   ],
   "quiz": [
    {
     "q": "git push چه کاری انجام می‌دهد؟",
     "options": [
      "فایل را حذف می‌کند",
      "تغییرات محلی را به Repository آنلاین (مثل GitHub) ارسال می‌کند",
      "کد را اجرا می‌کند",
      "یک branch جدید می‌سازد"
     ],
     "answer": 1,
     "explain": "push تاریخچهٔ commit های محلی شما را با نسخهٔ آنلاین هماهنگ می‌کند."
    },
    {
     "q": "هدف اصلی Pull Request چیست؟",
     "options": [
      "حذف یک branch",
      "درخواست بررسی (Review) کد قبل از merge شدن به شاخهٔ اصلی",
      "دانلود پروژه",
      "تغییر نام Repository"
     ],
     "answer": 1,
     "explain": "PR فرصتی برای بررسی کیفیت کد قبل از ورود آن به نسخهٔ اصلی می‌دهد."
    },
    {
     "q": "Fork کردن یک Repository یعنی چه؟",
     "options": [
      "حذف پروژه",
      "ساخت یک کپی کامل از پروژه در حساب خودتان، برای مشارکت در پروژهٔ دیگران",
      "تغییر نام فایل",
      "یک نوع commit خاص"
     ],
     "answer": 1,
     "explain": "Fork معمولاً اولین قدم برای مشارکت در پروژه‌های متن‌باز است."
    },
    {
     "q": "چه زمانی نباید rebase کرد؟",
     "options": [
      "روی شاخه‌ای که دیگران استفاده می‌کنند",
      "روی شاخهٔ محلی",
      "قبل از PR",
      "هیچ‌وقت"
     ],
     "answer": 0,
     "explain": "rebase تاریخچه را بازنویسی می‌کند."
    },
    {
     "q": "reflog چه کمکی می‌کند؟",
     "options": [
      "بازیابی کامیت‌های گم‌شده بعد از reset",
      "فشرده‌سازی",
      "حذف شاخه",
      "نصب Git"
     ],
     "answer": 0,
     "explain": "جابه‌جایی‌های HEAD را نگه می‌دارد."
    },
    {
     "q": "git reset --soft چه می‌کند؟",
     "options": [
      "HEAD را عقب می‌برد و تغییرات staged می‌مانند",
      "فایل‌ها را پاک می‌کند",
      "شاخه می‌سازد",
      "push می‌کند"
     ],
     "answer": 0,
     "explain": "--hard فایل‌ها را هم پاک می‌کند."
    },
    {
     "q": "bisect چگونه کار می‌کند؟",
     "options": [
      "جست‌وجوی دودویی بین commit خوب و بد",
      "حذف commit",
      "ادغام شاخه",
      "فشرده‌سازی"
     ],
     "answer": 0,
     "explain": "با اسکریپت تست خودکار می‌شود."
    },
    {
     "q": "اگر Secret در تاریخچه رفت اول چه کنیم؟",
     "options": [
      "کلید را بچرخانیم (rotate)",
      "commit را حذف و فراموش کنیم",
      "هیچ",
      "README را عوض کنیم"
     ],
     "answer": 0,
     "explain": "کلید لو رفته دیگر امن نیست."
    },
    {
     "q": "worktree چه کاری می‌کند؟",
     "options": [
      "پوشه‌ی کاری دوم از همان مخزن می‌سازد",
      "مخزن را حذف می‌کند",
      "فایل را رمز می‌کند",
      "push می‌کند"
     ],
     "answer": 0,
     "explain": "بدون stash روی کار فوری می‌روی."
    },
    {
     "q": "git log -S\"متن\" چه چیزی را پیدا می‌کند؟",
     "options": [
      "commitهایی که تعداد وقوع آن رشته را تغییر داده‌اند",
      "فقط پیام commit",
      "فقط نام فایل",
      "شاخه‌های حاوی آن رشته"
     ],
     "answer": 0,
     "explain": "pickaxe افزودن یا حذف یک رشته را در تاریخچه ردیابی می‌کند."
    },
    {
     "q": "git diff main...feature (سه‌نقطه) چه نشان می‌دهد؟",
     "options": [
      "تغییرات feature نسبت به نیای مشترک",
      "فرق مستقیم دو سر",
      "فقط فایل‌های حذف‌شده",
      "تغییرات main"
     ],
     "answer": 0,
     "explain": "مثل صفحه‌ی PR فقط کار خود شاخه‌ی feature را نشان می‌دهد."
    },
    {
     "q": "rerere چه کاری می‌کند؟",
     "options": [
      "راه‌حل تعارضی که یک بار حل کرده‌ای را ثبت و دوباره اعمال می‌کند",
      "تعارض را همیشه نادیده می‌گیرد",
      "commit را حذف می‌کند",
      "شاخه را rebase می‌کند"
     ],
     "answer": 0,
     "explain": "برای شاخه‌های بلندمدت که تعارض تکراری دارند مفید است."
    },
    {
     "q": "قبل از git clean -fd چه باید بزنیم؟",
     "options": [
      "git clean -n برای پیش‌نمایش",
      "git reset --hard",
      "git gc",
      "git stash"
     ],
     "answer": 0,
     "explain": "clean غیرقابل‌بازگشت است؛ -n فقط نشان می‌دهد چه چیزی حذف می‌شود."
    }
   ],
   "challenge": {
    "task": "یک سناریوی کامل رو روی کاغذ/متن بنویس: قراره یه ویژگی جدید (مثلاً دکمهٔ دارک‌مود) به یه پروژهٔ تیمی روی GitHub اضافه کنی. از branch ساختن تا push و باز کردن PR رو، دستور به دستور (یا مرحله به مرحله برای GitHub) بنویس.",
    "hint1": "ترتیب کلی: checkout -b (branch جدید) → تغییرات کد → add و commit → push (با -u origin برای branch جدید) → باز کردن PR توی GitHub.",
    "hint2": "یادت نره بعد از push یه branch جدید، دفعهٔ اول باید از git push -u origin branch-name استفاده کنی، نه فقط git push.",
    "solution": "git checkout -b dark-mode-feature\n# ... تغییرات کد برای دارک‌مود ...\ngit add .\ngit commit -m \"افزودن قابلیت دارک‌مود\"\ngit push -u origin dark-mode-feature\n\n# بعد توی GitHub:\n# ۱. برو به Repository → تب Pull Requests → New Pull Request\n# ۲. branch مبدا رو dark-mode-feature و مقصد رو main انتخاب کن\n# ۳. توضیح بنویس و PR رو باز کن تا هم‌تیمی‌ها Review کنن"
   }
  }
 ],
 "project": {
  "title": "مشارکت واقعی در یک پروژهٔ متن‌باز",
  "brief": "یک Repository شخصی روی GitHub بساز، حداقل ۳ commit با پیام‌های معنادار انجام بده، دو branch مختلف بساز و merge کن (حتی اگه لازم بود عمداً یه Conflict بسازی و حلش کنی)، و در آخر یک README.md برای پروژه بنویس.",
  "requirements": [
   "حداقل ۳ commit با پیام‌های واضح و توصیفی",
   "حداقل یک branch جدا برای یک قابلیت، بعد merge‌شده به main",
   "تجربهٔ حل حداقل یک Conflict (می‌تونی عمداً بسازیش)",
   "یک فایل README.md که توضیح بده پروژه چیه و چطور اجرا می‌شه"
  ],
  "hints": [
   "برای ساخت عمدی یه Conflict: یه فایل رو توی main تغییر بده و commit کن، بدون سوییچ، یه branch جدید از قبل از اون تغییر بساز و همون خط رو جور دیگه‌ای عوض کن، بعد سعی کن merge کنی."
  ]
 }
});
