(window.COURSES=window.COURSES||[]).push({
 "id": "react",
 "name": "React",
 "icon": "⚛️",
 "kind": "web",
 "desc": "ساخت رابط کاربری با کامپوننت — پایهٔ لازم برای React Native هم همینه",
 "covers": [
  "Component-Based Thinking، Props",
  "useState، Event Handling",
  "Conditional Rendering، لیست‌ها و key",
  "useEffect، Controlled Forms، Lifting State Up",
  "Custom Hooks، useContext، useMemo/useCallback"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "React چیست: فکرکردن بر مبنای Component",
     "content": "<p>React رابط کاربری را به قطعات کوچک و مستقل به نام <b>Component</b> تقسیم می‌کند — هر کامپوننت یک تابع جاوااسکریپت است که توضیح می‌دهد «بر اساس داده‌های فعلی، UI باید چه شکلی باشد». وقتی داده تغییر کند، React خودش تشخیص می‌دهد چه بخشی از صفحه باید به‌روز شود — شما مستقیم DOM را دستکاری نمی‌کنید (برخلاف جاوااسکریپت خام).</p><p>معمولاً React با JSX (سینتکسی شبیه HTML داخل JS) نوشته می‌شود، ولی چون این‌جا بدون ابزار بیلد کار می‌کنیم، از <code class='inline'>React.createElement</code> مستقیم استفاده می‌کنیم — دقیقاً همان چیزی که JSX در پشت صحنه به آن تبدیل می‌شود.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\n\nfunction Welcome() {\n  return h('h1', null, 'سلام از React!');\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(h(Welcome));"
     },
     "exercise": "یک کامپوننت Greeting بساز که یک h2 با متن دلخواه نمایش بده، و اون رو رندر کن."
    },
    {
     "title": "Props: پاس‌دادن داده به کامپوننت",
     "content": "<p><b>Props</b> (مخفف Properties) راهی است که یک کامپوننت والد، داده را به کامپوننت فرزند می‌فرستد — دقیقاً مثل آرگومان یک تابع. Props فقط خواندنی هستند؛ کامپوننت فرزند نباید مستقیم آن‌ها را تغییر دهد.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\n\nfunction UserCard(props) {\n  return h('div', { style: { border: '1px solid #ccc', padding: 10, margin: 5 } },\n    h('h3', null, props.name),\n    h('p', null, 'شغل: ' + props.job)\n  );\n}\n\nfunction App() {\n  return h('div', null,\n    h(UserCard, { name: 'سارا', job: 'برنامه‌نویس' }),\n    h(UserCard, { name: 'علی', job: 'طراح' })\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(App));"
     },
     "exercise": "کامپوننت UserCard رو طوری تغییر بده که یک prop سوم به اسم age هم بگیره و نمایشش بده."
    }
   ],
   "quiz": [
    {
     "q": "در React، هر کامپوننت اساساً چیست؟",
     "options": [
      "یک فایل CSS",
      "یک تابع جاوااسکریپت که توضیح می‌دهد UI بر اساس داده چه شکلی باشد",
      "یک دیتابیس",
      "یک نوع فایل تصویری"
     ],
     "answer": 1,
     "explain": "کامپوننت واحد سازندهٔ رابط کاربری در React است."
    },
    {
     "q": "Props در React برای چه استفاده می‌شود؟",
     "options": [
      "ذخیرهٔ داده در فایل",
      "پاس‌دادن داده از کامپوننت والد به فرزند",
      "استایل‌دهی به صفحه",
      "اتصال به دیتابیس"
     ],
     "answer": 1,
     "explain": "Props مثل آرگومان تابع، داده را از بیرون به کامپوننت می‌فرستد."
    },
    {
     "q": "آیا یک کامپوننت فرزند می‌تواند مقدار props دریافتی خودش را مستقیم تغییر دهد؟",
     "options": [
      "بله، همیشه",
      "نه، props فقط خواندنی است",
      "فقط برای اعداد",
      "فقط در نسخه‌های قدیمی React"
     ],
     "answer": 1,
     "explain": "تغییر مستقیم props برخلاف اصول React است؛ داده باید از طریق state و رویدادها مدیریت شود."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "State با useState: حافظهٔ یک کامپوننت",
     "content": "<p><b>State</b> داده‌ای است که یک کامپوننت خودش نگه می‌دارد و می‌تواند تغییر کند (برخلاف props که از بیرون می‌آید). <code class='inline'>useState(مقدار اولیه)</code> یک آرایهٔ دوعضوی برمی‌گرداند: مقدار فعلی، و تابعی برای تغییرش. هر بار state تغییر کند، React خودکار کامپوننت را دوباره رندر می‌کند.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return h('div', null,\n    h('p', null, 'تعداد: ' + count),\n    h('button', { onClick: () => setCount(count + 1) }, '+ افزودن')\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(Counter));"
     },
     "exercise": "یک دکمهٔ 'کم‌کردن' هم به Counter اضافه کن که count رو یکی کم کنه، ولی اجازه نده از صفر کمتر بشه."
    },
    {
     "title": "Event Handling: onClick، onChange و بقیه",
     "content": "<p>در React، رویدادها با نام camelCase نوشته می‌شوند (<code class='inline'>onClick</code> نه <code class='inline'>onclick</code>) و مستقیم یک تابع جاوااسکریپت می‌گیرند — نه یک رشته مثل HTML خام. <code class='inline'>onChange</code> برای input هر بار که مقدار تغییر کند صدا زده می‌شود.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction NameForm() {\n  const [name, setName] = useState('');\n  return h('div', null,\n    h('input', {\n      value: name,\n      onChange: (e) => setName(e.target.value),\n      placeholder: 'اسمت رو بنویس'\n    }),\n    h('p', null, name ? 'سلام ' + name + '!' : 'منتظر اسمت هستم...')\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(NameForm));"
     },
     "exercise": "توضیح بده چرا value={name} و onChange با هم باید بیان (Controlled Input) — اگه فقط value بذاری بدون onChange چه اتفاقی می‌افته؟"
    },
    {
     "title": "Conditional Rendering و لیست‌ها با map/key",
     "content": "<p>برای نمایش شرطی، از عملگرهای معمولی جاوااسکریپت استفاده می‌شود (<code class='inline'>&&</code> یا ternary <code class='inline'>? :</code>) — نه دستور if داخل JSX. برای نمایش یک آرایه از آیتم‌ها، از <code class='inline'>.map()</code> استفاده می‌شود؛ هر آیتم باید یک <code class='inline'>key</code> یکتا داشته باشد تا React بتواند تغییرات لیست را کارآمد ردیابی کند.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction FruitList() {\n  const [fruits] = useState(['سیب', 'موز', 'پرتقال']);\n  const isEmpty = fruits.length === 0;\n\n  return h('div', null,\n    isEmpty ? h('p', null, 'لیست خالیه') : h('ul', null,\n      fruits.map((fruit, i) => h('li', { key: i }, fruit))\n    )\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(FruitList));"
     },
     "exercise": "توضیح بده چرا استفاده از اندیس آرایه (i) به‌عنوان key، وقتی ترتیب لیست ممکنه تغییر کنه (مثل حذف یه آیتم وسط)، می‌تونه مشکل‌ساز بشه."
    }
   ],
   "quiz": [
    {
     "q": "useState چه چیزی برمی‌گرداند؟",
     "options": [
      "فقط مقدار فعلی",
      "آرایه‌ای شامل مقدار فعلی state و تابعی برای تغییر آن",
      "یک عنصر HTML",
      "یک Promise"
     ],
     "answer": 1,
     "explain": "خروجی آن یک آرایهٔ دوعضوی [state, setState] است."
    },
    {
     "q": "چرا در React از onClick به‌جای onclick استفاده می‌کنیم؟",
     "options": [
      "onclick اشتباه تایپی است",
      "React از نام‌گذاری camelCase برای رویدادها استفاده می‌کند",
      "onClick سریع‌تر است",
      "تفاوتی ندارد"
     ],
     "answer": 1,
     "explain": "این یک قرارداد سینتکسی در React است، برخلاف HTML خام که همه‌چیز lowercase است."
    },
    {
     "q": "key در رندرکردن یک لیست با map چه اهمیتی دارد؟",
     "options": [
      "فقط تزئینی است",
      "به React کمک می‌کند تغییرات لیست را کارآمد و درست ردیابی کند",
      "سرعت اینترنت را زیاد می‌کند",
      "اجباری نیست و تاثیری ندارد"
     ],
     "answer": 1,
     "explain": "بدون key مناسب، React ممکن است هنگام تغییر لیست رفتار غیرمنتظره نشان دهد."
    }
   ],
   "challenge": {
    "task": "یک کامپوننت TodoList بساز: یک input و دکمهٔ افزودن داشته باشه؛ با کلیک، متن input به یک آرایهٔ state اضافه بشه و به‌صورت لیست (با map/key) نمایش داده بشه؛ input بعد از افزودن خالی بشه.",
    "hint1": "دو تا state جدا نیاز داری: یکی برای متن فعلی input (inputValue)، یکی برای آرایهٔ کامل کارها (todos).",
    "hint2": "موقع افزودن: setTodos([...todos, inputValue]) رو صدا بزن (spread برای کپی‌کردن آرایهٔ قبلی + عضو جدید)، بعد setInputValue('') برای خالی‌کردن فیلد.",
    "solution": "const h = React.createElement;\nconst { useState } = React;\n\nfunction TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [inputValue, setInputValue] = useState('');\n\n  function addTodo() {\n    if (!inputValue) return;\n    setTodos([...todos, inputValue]);\n    setInputValue('');\n  }\n\n  return h('div', null,\n    h('input', { value: inputValue, onChange: e => setInputValue(e.target.value) }),\n    h('button', { onClick: addTodo }, 'افزودن'),\n    h('ul', null, todos.map((t, i) => h('li', { key: i }, t)))\n  );\n}"
   }
  },
  {
   "lessons": [
    {
     "title": "useEffect: انجام کار جانبی (Side Effect)",
     "content": "<p>گاهی یک کامپوننت باید کاری فراتر از رندرکردن انجام دهد — مثل fetch از سرور، تنظیم یک تایمر، یا خواندن/نوشتن در localStorage. این‌ها <b>Side Effect</b> هستند و با <code class='inline'>useEffect(fn, deps)</code> نوشته می‌شوند. آرایهٔ <code class='inline'>deps</code> مشخص می‌کند effect چه زمانی دوباره اجرا شود: آرایهٔ خالی <code class='inline'>[]</code> یعنی فقط یک‌بار (هنگام mount شدن کامپوننت).</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState, useEffect } = React;\n\nfunction Clock() {\n  const [time, setTime] = useState(new Date().toLocaleTimeString());\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      setTime(new Date().toLocaleTimeString());\n    }, 1000);\n    return () => clearInterval(timer); // پاک‌سازی هنگام حذف کامپوننت\n  }, []); // فقط یک‌بار اجرا شو\n\n  return h('h2', null, 'ساعت: ' + time);\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(Clock));"
     },
     "exercise": "توضیح بده تابعی که از useEffect برمی‌گردونیم (return () => clearInterval(timer)) دقیقاً چه زمانی اجرا می‌شه و چرا فراموش‌کردنش می‌تونه Memory Leak بسازه."
    },
    {
     "title": "فرم‌های کنترل‌شده (Controlled Components)",
     "content": "<p>وقتی مقدار یک input مستقیم از state خوانده می‌شود (نه از DOM)، به آن <b>Controlled Component</b> می‌گویند — React همیشه «منبع حقیقت» است. این برای فرم‌های واقعی با چند فیلد و اعتبارسنجی لحظه‌ای ضروری است.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction SignupForm() {\n  const [form, setForm] = useState({ email: '', password: '' });\n\n  function handleChange(field, value) {\n    setForm({ ...form, [field]: value });\n  }\n\n  const isValid = form.email.includes('@') && form.password.length >= 6;\n\n  return h('div', null,\n    h('input', { placeholder: 'ایمیل', value: form.email, onChange: e => handleChange('email', e.target.value) }),\n    h('input', { placeholder: 'رمز عبور', type: 'password', value: form.password, onChange: e => handleChange('password', e.target.value) }),\n    h('p', null, isValid ? '✅ فرم معتبره' : '❌ ایمیل یا رمز عبور نامعتبر')\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(SignupForm));"
     },
     "exercise": "توضیح بده چرا در handleChange از { ...form, [field]: value } استفاده کردیم به‌جای مستقیم form[field] = value."
    },
    {
     "title": "Lifting State Up: اشتراک داده بین کامپوننت‌های خواهر",
     "content": "<p>وقتی دو کامپوننت فرزند نیاز دارند به یک داده مشترک دسترسی داشته باشند (یا یکی باید داده‌ای که دیگری ست می‌کند را ببیند)، state را به نزدیک‌ترین والد مشترک «بالا می‌بریم» (Lift Up) و آن را به‌عنوان props به هر دو فرزند می‌دهیم.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction TemperatureInput({ value, onChange }) {\n  return h('input', { value, onChange: e => onChange(e.target.value), placeholder: 'دما به سلسیوس' });\n}\n\nfunction TemperatureDisplay({ celsius }) {\n  const fahrenheit = celsius ? (celsius * 9/5 + 32).toFixed(1) : '?';\n  return h('p', null, celsius + '°C = ' + fahrenheit + '°F');\n}\n\nfunction App() {\n  const [celsius, setCelsius] = useState(''); // state توی والد مشترک\n  return h('div', null,\n    h(TemperatureInput, { value: celsius, onChange: setCelsius }),\n    h(TemperatureDisplay, { celsius })\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(App));"
     },
     "exercise": "توضیح بده چرا state دما توی کامپوننت App نگه‌داشته شده، نه توی TemperatureInput یا TemperatureDisplay."
    }
   ],
   "quiz": [
    {
     "q": "useEffect با آرایهٔ وابستگی خالی ([]) چه زمانی اجرا می‌شود؟",
     "options": [
      "هر بار رندر",
      "فقط یک‌بار، هنگام mount شدن کامپوننت",
      "هرگز",
      "هر ثانیه"
     ],
     "answer": 1,
     "explain": "آرایهٔ خالی یعنی هیچ وابستگی‌ای برای تغییر ندارد، پس فقط یک‌بار اجرا می‌شود."
    },
    {
     "q": "Controlled Component به چه معناست؟",
     "options": [
      "کامپوننتی که هیچ props ندارد",
      "کامپوننتی که مقدار input آن مستقیم از React state خوانده می‌شود",
      "کامپوننتی بدون state",
      "کامپوننتی که فقط CSS دارد"
     ],
     "answer": 1,
     "explain": "در این الگو، state همیشه منبع حقیقت مقدار فرم است."
    },
    {
     "q": "Lifting State Up چه مشکلی را حل می‌کند؟",
     "options": [
      "کندی رندر",
      "اشتراک‌گذاری یک داده مشترک بین کامپوننت‌های خواهر از طریق والد مشترک",
      "نبود CSS",
      "خطای شبکه"
     ],
     "answer": 1,
     "explain": "با انتقال state به والد مشترک، هر دو فرزند می‌توانند به آن دسترسی داشته باشند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "Custom Hook: استخراج منطق قابل‌استفادهٔ مجدد",
     "content": "<p>وقتی منطقی (مثل خواندن از localStorage) در چند کامپوننت تکرار می‌شود، می‌توانید آن را در یک <b>Custom Hook</b> (تابعی که با <code class='inline'>use</code> شروع می‌شود) استخراج کنید. Custom Hook می‌تواند از سایر Hook ها (مثل useState) استفاده کند.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState } = React;\n\nfunction useCounter(initial) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(c => c + 1);\n  const decrement = () => setCount(c => c - 1);\n  return { count, increment, decrement };\n}\n\nfunction Counter() {\n  const { count, increment, decrement } = useCounter(0);\n  return h('div', null,\n    h('p', null, count),\n    h('button', { onClick: increment }, '+'),\n    h('button', { onClick: decrement }, '-')\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(Counter));"
     },
     "exercise": "یک Custom Hook به اسم useToggle بساز که یک مقدار boolean و یک تابع toggle برگردونه (برای مواردی مثل باز/بسته‌کردن یک منو)."
    },
    {
     "title": "useContext: اشتراک state بدون Prop Drilling",
     "content": "<p>وقتی یک داده باید از یک کامپوننت بالا به یک کامپوننت خیلی پایین‌تر برسد، پاس‌دادن آن لایه‌به‌لایه از طریق props (<b>Prop Drilling</b>) خسته‌کننده و غیرقابل‌نگهداری می‌شود. <code class='inline'>Context</code> راهی برای «پخش» یک مقدار به هر کامپوننتی در زیردرخت، بدون نیاز به پاس‌دادن دستی props در هر سطح است — مثل تم (روشن/تاریک) یا اطلاعات کاربر لاگین‌شده.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState, useContext, createContext } = React;\n\nconst ThemeContext = createContext('light');\n\nfunction Button() {\n  const theme = useContext(ThemeContext); // بدون گرفتن props از والد مستقیم!\n  return h('button', { style: { background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' } }, 'دکمه با تم ' + theme);\n}\n\nfunction App() {\n  const [theme] = useState('dark');\n  return h(ThemeContext.Provider, { value: theme },\n    h('div', null, h(Button))\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(App));"
     },
     "exercise": "توضیح بده اگه بین App و Button پنج‌تا کامپوننت واسط دیگه هم بود، چرا Context بازم کار می‌کرد بدون این‌که مجبور باشی theme رو دستی از هر لایه رد کنی."
    },
    {
     "title": "useMemo و useCallback: جلوگیری از محاسبات/رندرهای اضافه",
     "content": "<p>هر بار یک کامپوننت رندر می‌شود، همهٔ کد داخلش دوباره اجرا می‌شود — حتی محاسبات سنگین که ورودی‌شان عوض نشده. <code class='inline'>useMemo</code> نتیجهٔ یک محاسبه را «حفظ» می‌کند و فقط وقتی وابستگی‌هایش تغییر کنند، دوباره محاسبه می‌کند. <code class='inline'>useCallback</code> همین کار را برای خودِ توابع انجام می‌دهد — مهم وقتی تابعی را به یک کامپوننت فرزند بهینه‌شده پاس می‌دهید.</p>",
     "code": {
      "html": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js\"></script>\n<div id=\"root\"></div>",
      "css": "",
      "js": "const h = React.createElement;\nconst { useState, useMemo } = React;\n\nfunction slowSquare(n) {\n  for (let i = 0; i < 100000000; i++) {} // شبیه‌سازی محاسبهٔ سنگین\n  return n * n;\n}\n\nfunction Calculator() {\n  const [number, setNumber] = useState(5);\n  const [other, setOther] = useState(0);\n\n  const squared = useMemo(() => slowSquare(number), [number]); // فقط وقتی number عوض بشه دوباره محاسبه می‌شه\n\n  return h('div', null,\n    h('p', null, number + ' به توان ۲ = ' + squared),\n    h('button', { onClick: () => setOther(other + 1) }, 'یک عدد بی‌ربط رو تغییر بده (' + other + ')')\n  );\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(h(Calculator));"
     },
     "exercise": "توضیح بده توی مثال بالا، وقتی دکمهٔ 'عدد بی‌ربط' رو می‌زنی، چرا slowSquare دوباره اجرا نمی‌شه (بدون useMemo چه اتفاقی می‌افتاد؟)."
    },
    {
     "title": "React Router و مدیریت state سراسری",
     "content": "<p>React Router صفحات را در یک اپ تک‌صفحه‌ای مسیردهی می‌کند. برای state که چند بخش دور از هم لازم دارند، اول <code class='inline'>Context</code> را امتحان کن و اگر پیچیده شد از Zustand یا Redux Toolkit استفاده کن.</p><div class='code-block'><div class='cb-head'>App.jsx</div><pre><code>import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nexport default function App() {\n  return (\n    &lt;BrowserRouter>\n      &lt;Link to='/'>خانه&lt;/Link> &lt;Link to='/about'>درباره&lt;/Link>\n      &lt;Routes>\n        &lt;Route path='/' element={&lt;Home />} />\n        &lt;Route path='/about' element={&lt;About />} />\n      &lt;/Routes>\n    &lt;/BrowserRouter>\n  );\n}</code></pre></div>",
     "exercise": "یک اپ دو‌صفحه‌ای با ناوبری و یک سبد خرید با Context بساز."
    },
    {
     "title": "واکشی داده با TanStack Query",
     "content": "<p>نوشتن fetch با useEffect برای loading، خطا و cache کد زیادی می‌خواهد. TanStack Query این‌ها را خودکار مدیریت می‌کند: cache، بازیابی هنگام برگشت به صفحه و به‌روزرسانی در پس‌زمینه.<div class='code-block'><div class='cb-head'>Users.jsx</div><pre><code>const { data, isLoading, error } = useQuery({\n  queryKey: ['users'],\n  queryFn: () => fetch('/api/users').then(r => r.json()),\n});\nif (isLoading) return &lt;p>...&lt;/p>;</code></pre></div></p>",
     "exercise": "لیست کاربران را با useQuery بگیر و حالت خطا را نشان بده."
    },
    {
     "title": "تست کامپوننت با Vitest و Testing Library",
     "content": "<p>تست باید رفتار کاربر را بسنجد، نه جزئیات داخلی: رندر کن، با <code class='inline'>screen.getByRole</code> عنصر را پیدا کن، کلیک کن و نتیجه را بررسی کن.<div class='code-block'><div class='cb-head'>Counter.test.jsx</div><pre><code>render(&lt;Counter />);\nawait userEvent.click(screen.getByRole('button', { name: /افزایش/ }));\nexpect(screen.getByText('1')).toBeInTheDocument();</code></pre></div></p>",
     "exercise": "برای یک فرم لاگین دو تست (موفق و خطا) بنویس."
    },
    {
     "title": "مقدمه‌ای بر Next.js: مسیر، SSR و SEO",
     "content": "<p>Next.js روی React صفحه را سمت سرور رندر می‌کند (SSR/SSG)، مسیردهی بر اساس پوشه‌ها دارد و برای سئو بسیار بهتر از SPA ساده است. تصمیم کلیدی هر صفحه این است که داده را در زمان ساخت، هر درخواست یا سمت کلاینت بگیری.</p>",
     "exercise": "یک صفحه‌ی بلاگ با مسیر پویا /blog/[slug] طراحی کن."
    },
    {
     "title": "مدل رندر: Reconciliation، Key و خلوص کامپوننت",
     "content": "<p>React در هر تغییر state درخت جدیدی می‌سازد و با قبلی مقایسه (Reconciliation) می‌کند. <code class='inline'>key</code> پایدار و یکتا (نه اندیس آرایه) هویت آیتم را نگه می‌دارد و از خرابی state هنگام جابه‌جایی جلوگیری می‌کند. کامپوننت باید خالص باشد: با ورودی یکسان خروجی یکسان بدهد و در رندر اثر جانبی نداشته باشد. Strict Mode در توسعه رندر را دوبار اجرا می‌کند تا ناخالصی را آشکار کند.</p>",
     "exercise": "فهرستی بساز که با کلید اشتباه (اندیس) هنگام حذف آیتم state ورودی را جابه‌جا کند و اصلاحش کن."
    },
    {
     "title": "useReducer برای state پیچیده",
     "content": "<p>وقتی چند فیلد state به هم وابسته‌اند یا بروزرسانی‌ها منطق دارند، <code class='inline'>useReducer</code> تغییرها را در یک تابع خالص قابل‌تست جمع می‌کند: <code class='inline'>(state, action) => newState</code>. هر تغییر یک «action» مشخص است و ردیابی و دیباگ آسان می‌شود. state را هرگز مستقیم جهش نده.<div class='code-block'><div class='cb-head'>Cart.jsx</div><pre><code>import { useReducer } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"add\": return { ...state, items: [...state.items, action.item] };\n    case \"clear\": return { ...state, items: [] };\n    default: throw new Error(\"action ناشناخته\");\n  }\n}\nfunction Cart() {\n  const [state] = useReducer(reducer, { items: [\"چای\", \"قهوه\"] });\n  return &lt;ul>{state.items.map((x) => &lt;li key={x}>{x}&lt;/li>)}&lt;/ul>;\n}\nconsole.log(renderToStaticMarkup(&lt;Cart />));\nconsole.log(reducer({ items: [] }, { type: \"add\", item: \"نان\" }).items);\n</code></pre></div></p>",
     "exercise": "سبد خرید را با reducer و حالت‌های add/remove/clear بنویس و reducer را تست کن."
    },
    {
     "title": "Custom Hook و ساخت منطق قابل‌استفاده‌ی مجدد",
     "content": "<p>Custom Hook (نامش با <code class='inline'>use</code> شروع می‌شود) منطق state و effect را از UI جدا می‌کند و بین کامپوننت‌ها مشترک می‌سازد؛ هر فراخوانی state جداگانه‌ی خودش را دارد. قوانین Hook: فقط در سطح بالای کامپوننت یا Hook دیگر و نه داخل شرط و حلقه. <code class='inline'>useMemo</code> برای مقدار محاسبه‌ای سنگین.<div class='code-block'><div class='cb-head'>hooks.jsx</div><pre><code>import { useState, useMemo } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\nfunction useToggle(initial = false) {\n  const [on, setOn] = useState(initial);\n  return [on, () => setOn((v) => !v)];\n}\nfunction useFiltered(list, q) {\n  return useMemo(() => list.filter((x) => x.includes(q)), [list, q]);\n}\nfunction App() {\n  const [open] = useToggle(true);\n  const shown = useFiltered([\"الف\", \"ب\", \"الفبا\"], \"الف\");\n  return &lt;p>{open ? \"باز\" : \"بسته\"} {shown.join(\",\")}&lt;/p>;\n}\nconsole.log(renderToStaticMarkup(&lt;App />));\n</code></pre></div></p>",
     "exercise": "hook useLocalStorage و useDebounce بنویس."
    },
    {
     "title": "Context و memo: کنترل رندر مجدد",
     "content": "<p><code class='inline'>Context</code> مقدار را بدون prop drilling پایین می‌دهد ولی با هر تغییر مقدار، همه‌ی مصرف‌کننده‌ها دوباره رندر می‌شوند؛ context را به بخش‌های کوچک (تم، کاربر) تقسیم کن. <code class='inline'>React.memo</code> رندر مجدد را با ورودی بدون تغییر رد می‌کند. Compiler جدید React بسیاری از memoهای دستی را خودکار می‌کند؛ اول اندازه بگیر.<div class='code-block'><div class='cb-head'>Context.jsx</div><pre><code>import { createContext, useContext, memo } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\nconst Theme = createContext(\"light\");\nconst Badge = memo(function Badge({ label }) {\n  const theme = useContext(Theme);\n  return &lt;span className={theme}>{label}&lt;/span>;\n});\nconsole.log(renderToStaticMarkup(\n  &lt;Theme.Provider value=\"dark\">&lt;Badge label=\"جدید\" />&lt;/Theme.Provider>\n));\nconsole.log(renderToStaticMarkup(&lt;Badge label=\"پیش‌فرض\" />));\n</code></pre></div></p>",
     "exercise": "با React DevTools Profiler رندرهای اضافه یک context را پیدا و کم کن."
    },
    {
     "title": "Concurrent: useTransition، useDeferredValue و Suspense",
     "content": "<p><code class='inline'>useTransition</code> یک تغییر state را «کم‌اولویت» علامت می‌زند تا UI پاسخ‌گو بماند (فیلتر لیست بزرگ هنگام تایپ). <code class='inline'>useDeferredValue</code> مقدار را با تأخیر تازه می‌کند. <code class='inline'>Suspense</code> هنگام بارگذاری داده/کد، fallback نشان می‌دهد و با Error Boundary برای خطا کامل می‌شود.</p>",
     "exercise": "جست‌وجوی ۱۰ هزار آیتمی را با useDeferredValue روان کن."
    },
    {
     "title": "فرم‌ها در React 19: Action، useActionState و useOptimistic",
     "content": "<p>در React 19 <code class='inline'>&lt;form action={fn}&gt;</code> تابع را مستقیم می‌گیرد. <code class='inline'>useActionState</code> نتیجه و وضعیت pending را برمی‌گرداند، <code class='inline'>useOptimistic</code> نتیجه‌ی خوش‌بینانه را فوراً نشان می‌دهد تا سرور جواب بدهد و <code class='inline'>useFormStatus</code> وضعیت فرم را به دکمه‌ی فرزند می‌دهد. <code class='inline'>useId</code> شناسه‌ی پایدار برای label می‌سازد.<div class='code-block'><div class='cb-head'>Form.jsx</div><pre><code>import { useActionState, useOptimistic, useId } from \"react\";\nimport { renderToStaticMarkup } from \"react-dom/server\";\nasync function save(prev, formData) { return { ok: true, name: formData.get(\"name\") }; }\nfunction Form() {\n  const [state, action, pending] = useActionState(save, { ok: false });\n  const [opt] = useOptimistic([\"الف\"], (cur, v) => [...cur, v]);\n  const id = useId();\n  return (\n    &lt;form action={action}>\n      &lt;label htmlFor={id}>نام&lt;/label>\n      &lt;input id={id} name=\"name\" disabled={pending} />\n      &lt;button>ثبت&lt;/button>\n      &lt;p>{String(state.ok)} {opt.length}&lt;/p>\n    &lt;/form>\n  );\n}\nconst html = renderToStaticMarkup(&lt;Form />);\nconsole.log(html.includes(\"&lt;form\") &amp;&amp; html.includes(\"false 1\"));\n</code></pre></div></p>",
     "exercise": "فرم نظرات را با نمایش خوش‌بینانه‌ی نظر جدید بنویس."
    },
    {
     "title": "Server Component و Server Action",
     "content": "<p>Server Component فقط روی سرور اجرا می‌شود، مستقیم به دیتابیس دسترسی دارد و JS آن به مرورگر نمی‌رود. کامپوننت‌های تعاملی را با <code class='inline'>'use client'</code> علامت می‌زنی؛ مرز آن‌ها را کوچک نگه دار. Server Action تابع سمت سرور قابل‌فراخوانی از فرم است؛ ورودی را مثل هر API دیگر اعتبارسنجی و مجوزش را بررسی کن.</p>",
     "exercise": "صفحه‌ای بساز که داده را در Server Component بگیرد و فقط دکمه‌ی لایک Client باشد."
    },
    {
     "title": "اثرها (useEffect): وابستگی، پاکسازی و «شاید به effect نیاز نداری»",
     "content": "<p>effect برای همگام‌سازی با سیستم بیرونی (شبکه، DOM، اشتراک) است، نه برای محاسبه‌ی state مشتق‌شده (آن را در رندر حساب کن). وابستگی‌ها را کامل بنویس و تابع پاکسازی را فراموش نکن؛ بدون آن listener و timer نشت می‌کند. شرایط رقابتی fetch را با <code class='inline'>AbortController</code> یا یک پرچم <code class='inline'>ignore</code> مدیریت کن؛ بهتر: TanStack Query.</p>",
     "exercise": "یک effect با نشت listener را پیدا و اصلاح کن."
    },
    {
     "title": "عملکرد: مجازی‌سازی، lazy و تقسیم کد",
     "content": "<p>لیست‌های بزرگ را با مجازی‌سازی (<code class='inline'>react-window</code>/<code class='inline'>TanStack Virtual</code>) فقط برای بخش دیده‌شده رندر کن. <code class='inline'>React.lazy</code> و <code class='inline'>Suspense</code> صفحه‌ها را تقسیم می‌کنند. حجم باندل را با تحلیلگر ببین، کتابخانه‌ی سنگین را جایگزین یا پویا بارگذاری کن و روی CLS/INP تمرکز کن.</p>",
     "exercise": "لیست ۵۰ هزار ردیفی را با مجازی‌سازی روان کن."
    },
    {
     "title": "الگوهای دریافت داده و شرایط رقابتی",
     "content": "<p>به‌جای fetch دستی در effect از لایه‌ی کش (TanStack Query، SWR یا داده‌ی Server Component) استفاده کن: کش، تلاش مجدد، لغو و به‌روزرسانی پس‌زمینه را خودش دارد. state سرور و state کلاینت را جدا کن. در جست‌وجوی هنگام تایپ، درخواست قبلی را لغو کن تا جواب قدیمی روی جدید ننشیند.</p>",
     "exercise": "جست‌وجوی زنده‌ای بنویس که پاسخ دیررسیده‌ی قدیمی را نادیده بگیرد."
    },
    {
     "title": "تست و دسترسی: Testing Library، MSW و axe",
     "content": "<p>با Testing Library از دید کاربر تست کن (<code class='inline'>getByRole</code>، <code class='inline'>userEvent</code>)، و شبکه را با MSW (Mock Service Worker) در سطح درخواست شبیه‌سازی کن نه mock تابع. تست خودکار دسترسی با <code class='inline'>jest-axe</code> و کنترل کیبورد را اضافه کن. Error Boundary را هم تست کن.</p>",
     "exercise": "یک تست جریان کامل ثبت‌نام با MSW بنویس."
    },
    {
     "title": "معماری اپلیکیشن: ساختار، Error Boundary و App Router",
     "content": "<p>پوشه‌ها را بر اساس ویژگی (feature) بچین نه نوع فایل، state را تا حد امکان نزدیک مصرف‌کننده نگه دار (colocation) و فقط چیزی را سراسری کن که لازم است. <code class='inline'>Error Boundary</code> خطای رندر را مهار و صفحه‌ی جایگزین می‌دهد. در Next.js App Router، چیدمان‌ها، loading.js و error.js بخش‌بندی و جریان‌دهی (streaming) را ساده می‌کنند.</p>",
     "exercise": "ساختار یک اپ فروشگاهی را بر اساس feature طراحی کن."
    },
    {
     "title": "useRef: دسترسی به DOM و مقدار بدون رندر (و ref به‌عنوان prop در React 19)",
     "content": "<p><code>useRef</code> دو کار می‌کند: ۱) اشاره به یک عنصر DOM (برای focus، اندازه‌گیری، پخش ویدیو)، ۲) نگه‌داشتن مقداری که <b>تغییرش رندر نمی‌خواهد</b> (شمارنده، شناسه‌ی timer، مقدار قبلی). تغییر <code>ref.current</code> کامپوننت را دوباره رندر نمی‌کند. در React 19 <code>ref</code> مثل یک prop عادی به کامپوننت تابعی پاس داده می‌شود و دیگر <code>forwardRef</code> لازم نیست. قاعده: ref را هنگام رندر نخوان/ننویس؛ فقط در event handler و effect.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useRef, useState } from &#x27;react&#x27;;\n\nfunction SearchBox({ ref }) {            // React 19: ref یک prop معمولی است\n  return &lt;input ref={ref} placeholder=&quot;جستجو...&quot; /&gt;;\n}\n\nexport function Demo() {\n  const inputRef = useRef(null);\n  const clicks = useRef(0);              // مقدار بدون رندر\n  const [, force] = useState(0);\n  return (\n    &lt;div&gt;\n      &lt;SearchBox ref={inputRef} /&gt;\n      &lt;button id=&quot;focus&quot; onClick={() =&gt; { clicks.current++; inputRef.current.focus(); }}&gt;فوکوس&lt;/button&gt;\n      &lt;button id=&quot;show&quot; onClick={() =&gt; force(n =&gt; n + 1)}&gt;نمایش شمارنده&lt;/button&gt;\n      &lt;output id=&quot;o&quot;&gt;{clicks.current}&lt;/output&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>فوکوس روی input؟ true\noutput بعد از ۲ کلیک (رندر نشد): 0\noutput بعد از رندر اجباری: 2</code></pre></div>",
     "exercise": "یک دکمه بساز که محتوای input را پاک و فوکوس کند."
    },
    {
     "title": "useId: شناسه‌ی یکتا و پایدار برای فرم‌های دسترس‌پذیر",
     "content": "<p>برای اتصال <code>label</code> به <code>input</code> (<code>htmlFor</code>/<code>id</code>) به شناسه‌ی یکتا نیاز داری. شناسه‌ی ثابت در کامپوننتی که چند بار استفاده می‌شود تکراری می‌شود و <code>Math.random()</code> بین سرور و کلاینت متفاوت است و خطای hydration می‌دهد. <code>useId()</code> شناسه‌ای یکتا و <b>هماهنگ بین SSR و کلاینت</b> می‌دهد. برای key لیست‌ها استفاده نکن. اگر چند id از یک کامپوننت لازم است، از یک useId پیشوند بساز: <code>`${id}-email`</code>.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useId } from &#x27;react&#x27;;\n\nexport function Field({ label, hint }) {\n  const id = useId();\n  return (\n    &lt;div&gt;\n      &lt;label htmlFor={id}&gt;{label}&lt;/label&gt;\n      &lt;input id={id} aria-describedby={`${id}-hint`} /&gt;\n      &lt;small id={`${id}-hint`}&gt;{hint}&lt;/small&gt;\n    &lt;/div&gt;\n  );\n}\nexport const Form = () =&gt; (&lt;form&gt;&lt;Field label=&quot;نام&quot; hint=&quot;نام کامل&quot; /&gt;&lt;Field label=&quot;ایمیل&quot; hint=&quot;ایمیل معتبر&quot; /&gt;&lt;/form&gt;);</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>تعداد فیلد: 2 | idها یکتا؟ true\nlabel هر فیلد به input خودش وصل است؟ true\naria-describedby درست؟ true\nنمونه‌ی id: &quot;_r_0_&quot;</code></pre></div>",
     "exercise": "فیلد سوم با پیام خطا و aria-invalid اضافه کن."
    },
    {
     "title": "useSyncExternalStore: اتصال امن به store بیرونی",
     "content": "<p>وقتی state بیرون از React است (store سراسری، <code>window.matchMedia</code>، <code>navigator.onLine</code>، کتابخانه‌ی مدیریت state)، <code>useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)</code> راه رسمی و امن برای خواندن آن است: در رندر همزمان (concurrent) دچار «tearing» (نمایش دو مقدار متفاوت) نمی‌شود. <code>getSnapshot</code> باید برای state بدون تغییر <b>همان مرجع</b> را برگرداند، وگرنه حلقه‌ی بی‌نهایت می‌شود. Redux، Zustand و Jotai زیر کاپوت همین را استفاده می‌کنند.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useSyncExternalStore } from &#x27;react&#x27;;\n\nexport function createStore(initial) {\n  let state = initial;\n  const subs = new Set();\n  return {\n    get: () =&gt; state,\n    set: (next) =&gt; { state = next; subs.forEach(f =&gt; f()); },\n    subscribe: (f) =&gt; { subs.add(f); return () =&gt; subs.delete(f); },\n    get size() { return subs.size; },\n  };\n}\nexport const theme = createStore(&#x27;light&#x27;);\n\nexport function ThemeLabel({ id }) {\n  const t = useSyncExternalStore(theme.subscribe, theme.get, () =&gt; &#x27;light&#x27;);\n  return &lt;b id={id}&gt;{t}&lt;/b&gt;;\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>اشتراک‌ها بعد از mount: 2\nهر دو کامپوننت: dark dark\nاشتراک‌ها بعد از unmount: 0 (نشتی ندارد)</code></pre></div>",
     "exercise": "store را با localStorage همگام کن."
    },
    {
     "title": "Compound Components: API ترکیبی با Context",
     "content": "<p>الگوی <b>Compound Components</b>: چند کامپوننت که با هم یک ویجت می‌سازند (<code>Tabs</code>، <code>Tabs.Tab</code>، <code>Tabs.Panel</code>) و state مشترک را از <b>Context</b> می‌گیرند. کاربر ساختار را آزادانه می‌چیند و منطق (انتخاب، ARIA، کیبورد) داخل کامپوننت پنهان می‌ماند. برخلاف prop‌های متعدد (<code>tabs=[...]</code>) انعطاف‌پذیرتر است. نکته: خطای واضح بده اگر زیرکامپوننت بیرون از والد استفاده شد، و role/aria را فراموش نکن.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { createContext, useContext, useState } from &#x27;react&#x27;;\n\nconst Ctx = createContext(null);\nconst useTabs = () =&gt; {\n  const c = useContext(Ctx);\n  if (!c) throw new Error(&#x27;Tab باید داخل Tabs باشد&#x27;);\n  return c;\n};\n\nexport function Tabs({ defaultValue, children }) {\n  const [value, setValue] = useState(defaultValue);\n  return &lt;Ctx.Provider value={{ value, setValue }}&gt;&lt;div&gt;{children}&lt;/div&gt;&lt;/Ctx.Provider&gt;;\n}\nTabs.Tab = function Tab({ value, children }) {\n  const { value: v, setValue } = useTabs();\n  return &lt;button role=&quot;tab&quot; aria-selected={v === value} onClick={() =&gt; setValue(value)}&gt;{children}&lt;/button&gt;;\n};\nTabs.Panel = function Panel({ value, children }) {\n  const { value: v } = useTabs();\n  return v === value ? &lt;div role=&quot;tabpanel&quot;&gt;{children}&lt;/div&gt; : null;\n};</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>اولیه: محتوای الف | selected: true,false\nبعد از کلیک ب: محتوای ب | selected: false,true\nخطای واضح: Tab باید داخل Tabs باشد</code></pre></div>",
     "exercise": "ناوبری با کلید جهت‌نما را اضافه کن."
    },
    {
     "title": "ماشین حالت async: idle، loading، success، error و رقابت درخواست‌ها",
     "content": "<p>به‌جای سه <code>useState</code> جدا (<code>loading</code>، <code>data</code>، <code>error</code>) که می‌توانند ترکیب‌های غیرممکن بسازند (هم loading هم error)، یک <b>state واحد با وضعیت صریح</b> بساز: <code>idle | loading | success | error</code>. با <code>useReducer</code> انتقال‌ها صریح‌اند. نکته‌ی حیاتی: وقتی <code>id</code> سریع عوض می‌شود، پاسخ درخواست قدیمی ممکن است دیرتر برسد و جدید را بازنویسی کند (race). راه ساده: در action شناسه‌ی درخواست را نگه دار و پاسخ ناهمخوان را دور بریز.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useEffect, useReducer } from &#x27;react&#x27;;\n\nfunction reducer(s, a) {\n  switch (a.type) {\n    case &#x27;start&#x27;: return { status: &#x27;loading&#x27;, id: a.id };\n    case &#x27;ok&#x27;:    return s.id === a.id ? { status: &#x27;success&#x27;, id: a.id, data: a.data } : s;   // قدیمی؟ نادیده\n    case &#x27;fail&#x27;:  return s.id === a.id ? { status: &#x27;error&#x27;, id: a.id, error: a.error } : s;\n    default:      return s;\n  }\n}\nexport function User({ id, fetchUser }) {\n  const [s, d] = useReducer(reducer, { status: &#x27;idle&#x27; });\n  useEffect(() =&gt; {\n    d({ type: &#x27;start&#x27;, id });\n    fetchUser(id).then(data =&gt; d({ type: &#x27;ok&#x27;, id, data }), e =&gt; d({ type: &#x27;fail&#x27;, id, error: String(e.message) }));\n  }, [id, fetchUser]);\n  if (s.status === &#x27;loading&#x27;) return &lt;p id=&quot;v&quot;&gt;در حال بارگذاری…&lt;/p&gt;;\n  if (s.status === &#x27;error&#x27;) return &lt;p id=&quot;v&quot;&gt;خطا: {s.error}&lt;/p&gt;;\n  if (s.status === &#x27;success&#x27;) return &lt;p id=&quot;v&quot;&gt;کاربر {s.data.name}&lt;/p&gt;;\n  return null;\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>شروع: در حال بارگذاری…\nبعد از ۳۰ms (id=2 رسید): کاربر U2\nبعد از رسیدن پاسخ قدیمی id=1: کاربر U2 (بازنویسی نشد ✓)\nid=3 در حال بارگذاری: در حال بارگذاری…\nخطا: خطا: ۴۰۴</code></pre></div>",
     "exercise": "دکمه‌ی «تلاش مجدد» برای حالت error اضافه کن."
    },
    {
     "title": "Undo/Redo با useReducer: الگوی تاریخچه",
     "content": "<p>تاریخچه‌ی تغییرات را با سه بخش مدل کن: <code>past</code> (آرایه‌ی وضعیت‌های قبلی)، <code>present</code> و <code>future</code>. عمل عادی: present قبلی به past می‌رود، future پاک می‌شود. <code>undo</code>: آخرین past به present، و present قبلی به ابتدای future. <code>redo</code> برعکس. چون state «غیرقابل‌تغییر» (immutable) است، هر وضعیت یک snapshot سبک است (اشتراک ساختاری). برای ویرایشگر طولانی سقف تاریخچه بگذار و تغییرات پیاپی (تایپ) را ادغام کن.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useReducer } from &#x27;react&#x27;;\n\nconst initial = { past: [], present: 0, future: [] };\nfunction reducer(s, a) {\n  switch (a.type) {\n    case &#x27;add&#x27;:  return { past: [...s.past, s.present], present: s.present + a.n, future: [] };\n    case &#x27;undo&#x27;: return s.past.length\n      ? { past: s.past.slice(0, -1), present: s.past.at(-1), future: [s.present, ...s.future] } : s;\n    case &#x27;redo&#x27;: return s.future.length\n      ? { past: [...s.past, s.present], present: s.future[0], future: s.future.slice(1) } : s;\n    default: return s;\n  }\n}\nexport function Counter() {\n  const [s, d] = useReducer(reducer, initial);\n  return (\n    &lt;div&gt;\n      &lt;button id=&quot;inc&quot; onClick={() =&gt; d({ type: &#x27;add&#x27;, n: 1 })}&gt;+1&lt;/button&gt;\n      &lt;button id=&quot;ten&quot; onClick={() =&gt; d({ type: &#x27;add&#x27;, n: 10 })}&gt;+10&lt;/button&gt;\n      &lt;button id=&quot;undo&quot; disabled={!s.past.length} onClick={() =&gt; d({ type: &#x27;undo&#x27; })}&gt;undo&lt;/button&gt;\n      &lt;button id=&quot;redo&quot; disabled={!s.future.length} onClick={() =&gt; d({ type: &#x27;redo&#x27; })}&gt;redo&lt;/button&gt;\n      &lt;output id=&quot;o&quot;&gt;{s.present}&lt;/output&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>undo غیرفعال در شروع؟ true\nبعد از +1 و +10: 11\nundo: 1\nundo: 0 | undo غیرفعال؟ true\nredo: 1\nعمل جدید → redo پاک شد؟ true | مقدار: 2</code></pre></div>",
     "exercise": "سقف ۱۰۰ مرحله برای تاریخچه بگذار."
    },
    {
     "title": "key برای ریست state و کنترل‌شده در برابر کنترل‌نشده",
     "content": "<p>React کامپوننت را با <b>موقعیت و نوع</b> می‌شناسد؛ اگر دو بار با props متفاوت در همان جا رندر شود، state قبلی را نگه می‌دارد (مثلاً پیش‌نویس کاربر A وقتی کاربر B انتخاب شد باقی می‌ماند). تغییر <code>key</code> یعنی «این یک کامپوننت دیگر است»: state ریست و کامپوننت از نو ساخته می‌شود؛ تمیزتر از <code>useEffect</code> برای ریست. <b>کنترل‌شده</b> (<code>value</code> + <code>onChange</code>) یعنی React منبع حقیقت است؛ <b>کنترل‌نشده</b> (<code>defaultValue</code> + ref) یعنی DOM. ترکیب هر دو برای یک input خطای هشدار می‌دهد.</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { useRef, useState } from &#x27;react&#x27;;\n\nexport function Draft({ who }) {\n  const [text, setText] = useState(&#x27;&#x27;);\n  return &lt;input id=&quot;draft&quot; aria-label={who} value={text} onChange={e =&gt; setText(e.target.value)} /&gt;;\n}\nexport function Uncontrolled({ who }) {\n  const ref = useRef(null);\n  return &lt;&gt;\n    &lt;input id=&quot;unc&quot; ref={ref} defaultValue={&#x27;سلام &#x27; + who} /&gt;\n    &lt;button id=&quot;read&quot; onClick={() =&gt; { window.__read = ref.current.value; }}&gt;خواندن&lt;/button&gt;\n  &lt;/&gt;;\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>بدون key، بعد از انتخاب B: &quot;پیش‌نویس A&quot; ← state مانده!\nبا key جدید: &quot;&quot; ← ریست شد\nکنترل‌نشده از DOM خوانده شد: ویرایش کاربر</code></pre></div>",
     "exercise": "یک دکمه‌ی «ریست فرم» با تغییر key بساز."
    },
    {
     "title": "memo و برابری ارجاعی: چرا کامپوننت بی‌خود رندر می‌شود",
     "content": "<p><code>React.memo</code> رندر مجدد فرزند را فقط وقتی دوباره انجام می‌دهد که یکی از props با <code>Object.is</code> تغییر کرده باشد. اما شیء، آرایه و تابعی که <b>داخل بدنه‌ی والد</b> ساخته می‌شود در هر رندر مرجع جدید است، پس memo بی‌اثر می‌شود. راه‌حل: <code>useMemo</code> برای مقدارهای ساخته‌شده و <code>useCallback</code> برای تابع‌ها، یا ثابت‌ها را بیرون از کامپوننت بگذار. پیش از بهینه‌سازی با Profiler اندازه بگیر؛ memo هزینه‌ی مقایسه دارد و همیشه سود نیست. (React Compiler بخش بزرگی از این‌ها را خودکار می‌کند.)</p><div class='code-block'><div class='cb-head'>کامپوننت (React 19)</div><pre><code>import { memo, useCallback, useMemo, useState } from &#x27;react&#x27;;\n\nexport const counts = { bad: 0, good: 0 };\nconst Child = memo(function Child({ name, style, onPick }) {\n  counts[name]++;\n  return &lt;i&gt;child&lt;/i&gt;;\n});\n\nexport function Bad() {\n  const [n, setN] = useState(0);\n  return &lt;&gt;&lt;button id=&quot;bb&quot; onClick={() =&gt; setN(n + 1)}&gt;{n}&lt;/button&gt;\n    &lt;Child name=&quot;bad&quot; style={{ color: &#x27;red&#x27; }} onPick={() =&gt; {}} /&gt;&lt;/&gt;;      // هر بار مرجع جدید\n}\nexport function Good() {\n  const [n, setN] = useState(0);\n  const style = useMemo(() =&gt; ({ color: &#x27;red&#x27; }), []);\n  const onPick = useCallback(() =&gt; {}, []);\n  return &lt;&gt;&lt;button id=&quot;gb&quot; onClick={() =&gt; setN(n + 1)}&gt;{n}&lt;/button&gt;\n    &lt;Child name=&quot;good&quot; style={style} onPick={onPick} /&gt;&lt;/&gt;;\n}</code></pre></div><div class='code-block'><div class='cb-head'>نتیجه‌ی اجرای واقعی در مرورگر</div><pre><code>تعداد رندر فرزند بعد از ۳ کلیک → Bad: 4 | Good: 1\nmemo در Bad بی‌اثر بود چون style و onPick هر بار شیء/تابع جدید است.</code></pre></div>",
     "exercise": "React DevTools Profiler را روی این مثال امتحان کن."
    }
   ],
   "quiz": [
    {
     "q": "Custom Hook در React چیست؟",
     "options": [
      "یک کامپوننت جدید",
      "تابعی که با use شروع می‌شود و منطق قابل‌استفادهٔ مجدد (اغلب با Hookهای دیگر) را استخراج می‌کند",
      "یک نوع CSS",
      "یک فایل پیکربندی"
     ],
     "answer": 1,
     "explain": "Custom Hook امکان اشتراک منطق stateful بین کامپوننت‌های مختلف را فراهم می‌کند."
    },
    {
     "q": "Context در React چه مشکلی را حل می‌کند؟",
     "options": [
      "کندی شبکه",
      "نیاز به پاس‌دادن دستی props در هر سطح از درخت کامپوننت (Prop Drilling)",
      "نبود CSS",
      "خطای دیتابیس"
     ],
     "answer": 1,
     "explain": "Context اجازه می‌دهد داده مستقیم به هر عمقی از زیردرخت برسد."
    },
    {
     "q": "useMemo چه زمانی محاسبه را دوباره اجرا می‌کند؟",
     "options": [
      "هر بار رندر، بدون قید و شرط",
      "فقط وقتی مقادیر داخل آرایهٔ وابستگی تغییر کند",
      "هرگز",
      "فقط یک‌بار در کل عمر برنامه"
     ],
     "answer": 1,
     "explain": "useMemo نتیجه را حفظ می‌کند و فقط با تغییر وابستگی‌ها دوباره محاسبه می‌کند."
    },
    {
     "q": "React Router برای چیست؟",
     "options": [
      "مسیردهی بین صفحات اپ",
      "استایل‌دهی",
      "اتصال به دیتابیس",
      "ساخت فونت"
     ],
     "answer": 0,
     "explain": "صفحات را در SPA مدیریت می‌کند."
    },
    {
     "q": "Testing Library بیشتر چه چیزی را می‌سنجد؟",
     "options": [
      "رفتار قابل‌مشاهده‌ی کاربر",
      "نام متغیرها",
      "سرعت CPU",
      "رنگ‌ها"
     ],
     "answer": 0,
     "explain": "تست باید مثل کاربر عمل کند."
    },
    {
     "q": "key در لیست باید چگونه باشد؟",
     "options": [
      "پایدار و یکتا",
      "اندیس آرایه همیشه",
      "تصادفی هر رندر",
      "خالی"
     ],
     "answer": 0,
     "explain": "هویت آیتم را حفظ می‌کند."
    },
    {
     "q": "useDeferredValue چه می‌کند؟",
     "options": [
      "مقدار را با تأخیر و کم‌اولویت تازه می‌کند",
      "داده می‌گیرد",
      "حذف می‌کند",
      "کش می‌کند"
     ],
     "answer": 0,
     "explain": "UI پاسخ‌گو می‌ماند."
    },
    {
     "q": "effect برای چیست؟",
     "options": [
      "همگام‌سازی با سیستم بیرونی",
      "محاسبه‌ی state مشتق‌شده",
      "استایل",
      "نام‌گذاری"
     ],
     "answer": 0,
     "explain": "مشتق‌ها را در رندر حساب کن."
    },
    {
     "q": "Server Component چه ویژگی‌ای دارد؟",
     "options": [
      "فقط روی سرور اجرا می‌شود و JS آن به مرورگر نمی‌رود",
      "فقط CSS",
      "فقط تست",
      "نیاز به useState"
     ],
     "answer": 0,
     "explain": "دسترسی مستقیم به دیتابیس دارد."
    },
    {
     "q": "چرا تغییر ref.current رندر دوباره ایجاد نمی‌کند؟",
     "options": [
      "چون ref بخشی از state واکنشی React نیست",
      "چون ref فقط برای DOM است",
      "چون ref غیرفعال است",
      "چون React آن را نادیده می‌گیرد"
     ],
     "answer": 0,
     "explain": "ref برای مقداری است که تغییرش نباید UI را عوض کند؛ برای نمایش از state استفاده کن."
    },
    {
     "q": "چرا برای id فرم از Math.random استفاده نمی‌کنیم؟",
     "options": [
      "بین سرور و کلاینت متفاوت می‌شود و hydration خطا می‌دهد",
      "چون کند است",
      "چون عدد منفی می‌دهد",
      "چون در React 19 حذف شده"
     ],
     "answer": 0,
     "explain": "useId شناسه‌ی هماهنگ بین SSR و کلاینت می‌دهد."
    },
    {
     "q": "تغییر key یک کامپوننت چه اثری دارد؟",
     "options": [
      "کامپوننت از نو ساخته و state ریست می‌شود",
      "فقط props عوض می‌شود",
      "هیچ اثری ندارد",
      "فقط استایل عوض می‌شود"
     ],
     "answer": 0,
     "explain": "key هویت کامپوننت را تعیین می‌کند؛ هویت جدید یعنی state تازه."
    },
    {
     "q": "چرا memo روی فرزند با prop به شکل style={{color:'red'}} بی‌اثر است؟",
     "options": [
      "هر رندر یک شیء جدید با مرجع متفاوت ساخته می‌شود",
      "چون style ممنوع است",
      "چون memo فقط با تابع کار می‌کند",
      "چون رنگ تغییر می‌کند"
     ],
     "answer": 0,
     "explain": "memo با Object.is مقایسه می‌کند؛ شیء تازه یعنی prop تغییر کرده."
    }
   ],
   "challenge": {
    "task": "یک Custom Hook به اسم useLocalStorage(key, initialValue) بساز که مثل useState کار کنه ولی مقدار رو هم‌زمان توی localStorage ذخیره کنه — یعنی با رفرش صفحه، مقدار از بین نره. بعد ازش برای ذخیرهٔ اسم کاربر در یک کامپوننت استفاده کن.",
    "hint1": "داخل Hook، مقدار اولیهٔ useState رو با یه تابع بساز که اول localStorage.getItem(key) رو چک کنه، اگه بود JSON.parse کنه، وگرنه initialValue رو برگردونه.",
    "hint2": "هر بار مقدار عوض شد (با useEffect که وابسته به value و key باشه)، localStorage.setItem(key, JSON.stringify(value)) رو صدا بزن.",
    "solution": "const { useState, useEffect } = React;\n\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved ? JSON.parse(saved) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\nfunction NameInput() {\n  const [name, setName] = useLocalStorage('userName', '');\n  return React.createElement('input', {\n    value: name,\n    onChange: e => setName(e.target.value)\n  });\n}"
   }
  }
 ],
 "project": {
  "title": "بازسازی Todo App با React واقعی",
  "brief": "همون Todo App که با جاوااسکریپت خام ساختی رو این‌بار کاملاً با کامپوننت‌های React (State، Props، لیست با map/key) بازسازی کن — بدون دستکاری مستقیم DOM.",
  "requirements": [
   "حداقل ۳ کامپوننت جدا (مثلاً TodoForm، TodoList، TodoItem) که با props به هم وصل باشن",
   "state لیست کارها با useState",
   "حذف/تیک‌زدن هر آیتم از طریق یک تابع پاس‌داده‌شده به TodoItem (نه دستکاری مستقیم DOM)",
   "ذخیرهٔ لیست با useLocalStorage (Custom Hook خودتون یا مشابهش)"
  ],
  "hints": [
   "اول بدون localStorage کار کن تا منطق کامپوننت‌ها و state درست باشه، بعد Custom Hook رو اضافه کن."
  ]
 }
});
