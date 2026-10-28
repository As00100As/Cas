(window.COURSES=window.COURSES||[]).push({
 "id": "mobile",
 "name": "اپلیکیشن موبایل (React Native)",
 "icon": "📱",
 "kind": "theory",
 "desc": "همون دانش React/JS رو بردار و یک اپ واقعی برای اندروید/iOS بساز",
 "covers": [
  "React Native چیست، تفاوت با وب",
  "Expo، راه‌اندازی پروژه",
  "کامپوننت‌های پایه: View, Text, Image, ScrollView",
  "Flexbox در React Native، Style",
  "State، TextInput، Touchable",
  "Navigation بین صفحات",
  "Fetch از API واقعی، AsyncStorage",
  "Build و انتشار در Store"
 ],
 "levels": [
  {
   "lessons": [
    {
     "title": "React Native چیست و چرا مهم است؟",
     "content": "<p>React Native به شما اجازه می‌دهد با همان دانش <b>JavaScript و React</b> که برای وب یاد گرفتید، اپلیکیشن واقعی برای <b>اندروید و iOS</b> بسازید — نه یک صفحهٔ وب داخل اپ، بلکه یک اپ بومی واقعی که از کامپوننت‌های اصلی سیستم‌عامل استفاده می‌کند.</p><p>تفاوت کلیدی با React وب: به‌جای <code class='inline'>&lt;div&gt;</code> و <code class='inline'>&lt;p&gt;</code>، از کامپوننت‌های خاص React Native مثل <code class='inline'>&lt;View&gt;</code> و <code class='inline'>&lt;Text&gt;</code> استفاده می‌کنید؛ استایل‌دهی هم به‌جای CSS، با آبجکت جاوااسکریپت (<code class='inline'>StyleSheet</code>) انجام می‌شود.</p>",
     "exercise": "سه اپلیکیشن موبایل معروف که با React Native ساخته شده‌اند رو جست‌وجو کن (مثلاً Instagram بخشی از آن، Discord) و بنویس چرا شرکت‌ها این تکنولوژی رو انتخاب می‌کنن."
    },
    {
     "title": "Expo: سریع‌ترین راه شروع",
     "content": "<p><b>Expo</b> مجموعه‌ابزاری روی React Native است که راه‌اندازی، تست روی گوشی واقعی (با اسکن QR code از اپ Expo Go) و ساخت نهایی اپ رو خیلی ساده‌تر می‌کنه — دیگه نیازی به تنظیمات پیچیدهٔ Android Studio/Xcode برای شروع نیست.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>npx create-expo-app my-first-app\ncd my-first-app\nnpx expo start</code></pre></div><p>بعد از اجرای دستور آخر، یک QR code توی ترمینال نشون داده می‌شه که با اپ Expo Go (از گوگل‌پلی/اپ‌استور) روی گوشی خودتون اسکنش می‌کنید و اپ بلافاصله روی گوشی واقعی‌تون اجرا می‌شه.</p>",
     "exercise": "توضیح بده Expo Go چه کاری انجام می‌ده که باعث می‌شه دیدن تغییرات کد روی گوشی واقعی، خیلی سریع‌تر از راه‌اندازی سنتی Android Studio بشه."
    },
    {
     "title": "اولین کامپوننت: View، Text و StyleSheet",
     "content": "<p>هر صفحهٔ React Native با <code class='inline'>&lt;View&gt;</code> (معادل div) و <code class='inline'>&lt;Text&gt;</code> (تنها جایی که می‌توانید متن بنویسید — برخلاف وب، متن خام مستقیم داخل View مجاز نیست!) ساخته می‌شود. استایل با <code class='inline'>StyleSheet.create()</code> تعریف و به کامپوننت با prop <code class='inline'>style</code> داده می‌شود.</p><div class='code-block'><div class='cb-head'>App.js</div><pre><code>import { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>سلام دنیای موبایل!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#fff',\n  },\n  title: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    color: '#4F46E5',\n  },\n});</code></pre></div>",
     "exercise": "توضیح بده چرا در React Native نمی‌توان مستقیم متن نوشت (مثل <View>سلام</View>) و باید حتماً از Text استفاده کرد."
    }
   ],
   "quiz": [
    {
     "q": "تفاوت اصلی React Native با یک اپ وب داخل WebView چیست؟",
     "options": [
      "هیچ تفاوتی ندارند",
      "React Native از کامپوننت‌های بومی واقعی سیستم‌عامل استفاده می‌کند",
      "React Native فقط برای iOS است",
      "React Native نیازی به جاوااسکریپت ندارد"
     ],
     "answer": 1,
     "explain": "برخلاف یک صفحهٔ وب نمایش‌داده‌شده در WebView، React Native رابط کاربری بومی واقعی می‌سازد."
    },
    {
     "q": "Expo Go چه کاربردی دارد؟",
     "options": [
      "ویرایشگر کد است",
      "اجازه می‌دهد اپ در حال توسعه را با اسکن QR روی گوشی واقعی تست کنید",
      "دیتابیس موبایل است",
      "جایگزین React است"
     ],
     "answer": 1,
     "explain": "Expo Go امکان تست سریع روی دستگاه واقعی بدون build کامل را فراهم می‌کند."
    },
    {
     "q": "در React Native، متن باید حتماً داخل کدام کامپوننت نوشته شود؟",
     "options": [
      "View",
      "Text",
      "Image",
      "ScrollView"
     ],
     "answer": 1,
     "explain": "برخلاف HTML، متن خام مستقیم داخل View مجاز نیست و باید در Text قرار گیرد."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "کامپوننت‌های پایه: Image، ScrollView و TextInput",
     "content": "<p><code class='inline'>&lt;Image&gt;</code> برای نمایش تصویر است (با prop <code class='inline'>source</code>)؛ <code class='inline'>&lt;ScrollView&gt;</code> محتوایی که از صفحه بزرگ‌تر است را قابل اسکرول می‌کند؛ <code class='inline'>&lt;TextInput&gt;</code> فیلد ورودی متن است — با <code class='inline'>value</code> و <code class='inline'>onChangeText</code> کنترل می‌شود (شبیه input در React وب، ولی با اسم prop متفاوت).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "// این کد برای اجرا در پروژهٔ واقعی React Native است (نه در این پیش‌نمایش وب):\nimport { useState } from 'react';\nimport { View, TextInput, Image, ScrollView, Text } from 'react-native';\n\nexport default function Profile() {\n  const [name, setName] = useState('');\n  return (\n    <ScrollView>\n      <Image\n        source={{ uri: 'https://via.placeholder.com/100' }}\n        style={{ width: 100, height: 100 }}\n      />\n      <TextInput\n        value={name}\n        onChangeText={setName}\n        placeholder=\"اسمت رو بنویس\"\n        style={{ borderWidth: 1, padding: 8, margin: 10 }}\n      />\n      <Text>سلام {name}!</Text>\n    </ScrollView>\n  );\n}"
     },
     "exercise": "توضیح بده چرا onChangeText در React Native به‌جای onChange در HTML استفاده می‌شود، و چه چیزی مستقیم به آن پاس داده می‌شود (رویداد کامل یا فقط مقدار متن؟)."
    },
    {
     "title": "Flexbox در React Native و لمس (Touchable)",
     "content": "<p>خبر خوب: چیدمان در React Native هم با <b>Flexbox</b> است — همون چیزی که در CSS یاد گرفتید (justifyContent، alignItems، flexDirection)! تفاوت کوچک: پیش‌فرض <code class='inline'>flexDirection</code> در React Native <code class='inline'>column</code> است، نه <code class='inline'>row</code> مثل CSS وب. برای دکمه‌های قابل‌لمس از <code class='inline'>&lt;TouchableOpacity&gt;</code> یا <code class='inline'>&lt;Pressable&gt;</code> استفاده می‌شود (نه button ساده مثل وب).</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';\n\nexport default function Row() {\n  return (\n    <View style={styles.row}>\n      <TouchableOpacity style={styles.btn} onPress={() => alert('کلیک شد!')}>\n        <Text style={styles.btnText}>دکمهٔ من</Text>\n      </TouchableOpacity>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  row: { flexDirection: 'row', justifyContent: 'center', padding: 20 },\n  btn: { backgroundColor: '#4F46E5', padding: 12, borderRadius: 8 },\n  btnText: { color: '#fff', fontWeight: 'bold' },\n});"
     },
     "exercise": "توضیح بده چرا برای یک دکمهٔ قابل‌لمس در React Native از TouchableOpacity استفاده می‌شود نه از تگ button معمولی مثل وب."
    },
    {
     "title": "State و آپدیت رابط کاربری",
     "content": "<p>مدیریت state در React Native دقیقاً مثل React وب است — همون <code class='inline'>useState</code>! این یکی از بزرگ‌ترین مزیت‌های React Native است: دانش React شما مستقیم قابل استفاده است، فقط کامپوننت‌های نمایشی عوض می‌شوند.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "import { useState } from 'react';\nimport { View, Text, TouchableOpacity } from 'react-native';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <View style={{ alignItems: 'center', marginTop: 50 }}>\n      <Text style={{ fontSize: 30 }}>{count}</Text>\n      <TouchableOpacity onPress={() => setCount(count + 1)}>\n        <Text style={{ fontSize: 20, color: 'blue' }}>افزودن یک عدد</Text>\n      </TouchableOpacity>\n    </View>\n  );\n}"
     },
     "exercise": "یک کامپوننت LikeButton طراحی کن (روی کاغذ/توضیح) که با هر تاچ، هم عدد لایک‌ها زیاد بشه و هم رنگ آیکون قلب عوض بشه."
    }
   ],
   "quiz": [
    {
     "q": "مقدار پیش‌فرض flexDirection در React Native چیست؟",
     "options": [
      "row (مثل وب)",
      "column (برخلاف پیش‌فرض CSS وب)",
      "هیچ‌کدام، باید همیشه مشخص شود",
      "grid"
     ],
     "answer": 1,
     "explain": "برخلاف CSS وب که پیش‌فرض flex-direction آن row است، در React Native پیش‌فرض column است."
    },
    {
     "q": "برای دکمهٔ قابل‌لمس در React Native معمولاً از چه کامپوننتی استفاده می‌شود؟",
     "options": [
      "<button>",
      "<a>",
      "<TouchableOpacity> یا <Pressable>",
      "<div onclick>"
     ],
     "answer": 2,
     "explain": "این‌ها کامپوننت‌های بومی React Native برای تعامل لمسی هستند."
    },
    {
     "q": "مدیریت state در React Native نسبت به React وب چه تفاوتی دارد؟",
     "options": [
      "کاملاً متفاوت است",
      "یکسان است؛ همان useState/useEffect استفاده می‌شود",
      "در موبایل state وجود ندارد",
      "نیاز به کتابخانهٔ جداگانه دارد"
     ],
     "answer": 1,
     "explain": "این یکی از بزرگ‌ترین مزایای React Native است: منطق React یکسان می‌ماند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "Navigation: حرکت بین صفحات",
     "content": "<p>برخلاف وب که هر صفحه یک URL دارد، در اپ موبایل از کتابخانه‌ای مثل <b>React Navigation</b> برای تعریف صفحات و حرکت بینشان استفاده می‌شود. <code class='inline'>Stack.Navigator</code> صفحات را مثل یک پشته (استک) مدیریت می‌کند — با رفتن به صفحهٔ جدید روی قبلی قرار می‌گیرد و دکمهٔ برگشت خودکار اضافه می‌شود.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <Button\n      title=\"برو به پروفایل\"\n      onPress={() => navigation.navigate('Profile', { userId: 42 })}\n    />\n  );\n}\n\nfunction ProfileScreen({ route }) {\n  return <Text>پروفایل کاربر: {route.params.userId}</Text>;\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}"
     },
     "exercise": "توضیح بده navigation.navigate('Profile', { userId: 42 }) چطور می‌تونه داده رو از یک صفحه به صفحهٔ بعدی منتقل کنه، و اون صفحهٔ بعدی چطور بهش دسترسی داره."
    },
    {
     "title": "Fetch از یک API واقعی",
     "content": "<p>خبر خوب دیگر: <code class='inline'>fetch</code> دقیقاً همان چیزی است که در جاوااسکریپت وب یاد گرفتید — بدون تغییر در React Native هم کار می‌کند! معمولاً fetch داخل <code class='inline'>useEffect</code> صدا زده می‌شود تا هنگام باز شدن صفحه، داده از سرور بیاید.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "import { useState, useEffect } from 'react';\nimport { View, Text, FlatList, ActivityIndicator } from 'react-native';\n\nexport default function UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => { setUsers(data); setLoading(false); })\n      .catch(err => { console.log(err); setLoading(false); });\n  }, []);\n\n  if (loading) return <ActivityIndicator size=\"large\" />;\n\n  return (\n    <FlatList\n      data={users}\n      keyExtractor={item => item.id.toString()}\n      renderItem={({ item }) => <Text>{item.name}</Text>}\n    />\n  );\n}"
     },
     "exercise": "توضیح بده FlatList نسبت به رندرکردن یک آرایه با map() داخل ScrollView، برای لیست‌های بزرگ (هزاران آیتم) چه مزیت عملکردی داره."
    },
    {
     "title": "ذخیره‌سازی محلی با AsyncStorage",
     "content": "<p><code class='inline'>AsyncStorage</code> معادل <code class='inline'>localStorage</code> در وب است، ولی برای موبایل — با این تفاوت که تمام متدهایش <b>ناهمزمان (async)</b> هستند و Promise برمی‌گردانند، پس همیشه با <code class='inline'>await</code> استفاده می‌شود.</p>",
     "code": {
      "html": "",
      "css": "",
      "js": "import AsyncStorage from '@react-native-async-storage/async-storage';\n\nasync function saveName(name) {\n  await AsyncStorage.setItem('userName', name);\n}\n\nasync function loadName() {\n  const name = await AsyncStorage.getItem('userName');\n  return name || 'مهمان';\n}\n\n// استفاده در یک کامپوننت:\n// useEffect(() => { loadName().then(setName); }, []);"
     },
     "exercise": "توضیح بده چرا متدهای AsyncStorage برخلاف localStorage در وب، به‌جای مقدار مستقیم، Promise برمی‌گردونن (نکته: به نحوهٔ ذخیرهٔ داده روی حافظهٔ گوشی فکر کن)."
    },
    {
     "title": "FlatList و عملکرد لیست‌ها",
     "content": "<p><code class='inline'>ScrollView</code> همهٔ آیتم‌ها را یک‌جا رندر می‌کند و برای لیست بزرگ کند است. <code class='inline'>FlatList</code> فقط آیتم‌های قابل‌دیدن را رندر می‌کند. هر آیتم <code class='inline'>keyExtractor</code> یکتا می‌خواهد و با <code class='inline'>React.memo</code> از رندر اضافه جلوگیری می‌شود.</p><div class='code-block'><div class='cb-head'>List.js</div><pre><code>&lt;FlatList\n  data={items}\n  keyExtractor={(i) => String(i.id)}\n  renderItem={({ item }) => &lt;Row item={item} />}\n  onEndReached={loadMore}\n/></code></pre></div>",
     "exercise": "یک لیست ۱۰۰۰ آیتمی با FlatList و صفحه‌بندی بساز."
    }
   ],
   "quiz": [
    {
     "q": "React Navigation Stack.Navigator صفحات را چگونه مدیریت می‌کند؟",
     "options": [
      "مثل یک آرایهٔ ساده بدون ترتیب",
      "مثل یک پشته (stack) با دکمهٔ برگشت خودکار",
      "فقط یک صفحه در کل اپ",
      "با تغییر URL مثل وب"
     ],
     "answer": 1,
     "explain": "هر صفحهٔ جدید روی صفحهٔ قبلی قرار می‌گیرد، دقیقاً مثل ساختار داده‌ای پشته."
    },
    {
     "q": "fetch در React Native نسبت به وب چه تفاوتی دارد؟",
     "options": [
      "کاملاً متفاوت و نیاز به کتابخانهٔ جدا دارد",
      "هیچ تفاوتی ندارد، همان API استاندارد است",
      "فقط GET پشتیبانی می‌شود",
      "نیاز به AsyncStorage دارد"
     ],
     "answer": 1,
     "explain": "fetch در React Native همان Fetch API استاندارد جاوااسکریپت است."
    },
    {
     "q": "چرا متدهای AsyncStorage همیشه Promise برمی‌گردانند؟",
     "options": [
      "برای شلوغ‌کردن کد",
      "چون عملیات ذخیره‌سازی روی حافظهٔ گوشی ناهمزمان انجام می‌شود",
      "چون فقط رشته قبول می‌کنند",
      "تصادفی است"
     ],
     "answer": 1,
     "explain": "دسترسی به حافظهٔ دستگاه زمان‌بر است، پس به‌صورت ناهمزمان طراحی شده."
    },
    {
     "q": "چرا FlatList بهتر از ScrollView برای لیست بزرگ است؟",
     "options": [
      "فقط آیتم‌های قابل‌دیدن را رندر می‌کند",
      "رنگی‌تر است",
      "نیاز به key ندارد",
      "فقط iOS"
     ],
     "answer": 0,
     "explain": "حافظه و زمان رندر را کم می‌کند."
    }
   ]
  },
  {
   "lessons": [
    {
     "title": "آماده‌سازی برای انتشار: EAS Build",
     "content": "<p>وقتی اپ آماده شد، برای انتشار در Google Play یا App Store باید یک فایل نصبی واقعی (APK/AAB برای اندروید، IPA برای iOS) بسازید. سرویس <b>EAS Build</b> (متعلق به Expo) این کار را در فضای ابری انجام می‌دهد، بدون نیاز به Mac برای build نسخهٔ iOS.</p><div class='code-block'><div class='cb-head'>ترمینال</div><pre><code>npm install -g eas-cli\neas build:configure\neas build --platform android\neas build --platform ios</code></pre></div>",
     "exercise": "توضیح بده چرا build نسخهٔ iOS به‌طور سنتی نیاز به سیستم‌عامل Mac داشت، و EAS Build چطور این محدودیت رو دور می‌زنه."
    },
    {
     "title": "مجوزهای دستگاه و اعلان‌ها (Push Notifications) — مفهومی",
     "content": "<p>اپ موبایل برای دسترسی به دوربین، موقعیت مکانی یا ارسال اعلان، باید صریحاً از کاربر <b>اجازه (Permission)</b> بگیرد — این یک تفاوت اساسی با وب است. <b>Push Notification</b> پیامی است که حتی وقتی اپ بسته است، از سرور به گوشی کاربر می‌رسد — برای این کار نیاز به یک سرویس (مثل Expo Notifications یا Firebase Cloud Messaging) و یک شناسهٔ یکتای دستگاه دارید.</p>",
     "exercise": "فکر کن یک اپ فروشگاهی می‌سازی. سه سناریوی واقعی بنویس که در آن‌ها Push Notification برای کاربر مفید (نه مزاحم) باشه."
    },
    {
     "title": "احراز هویت و ذخیره‌ی امن در موبایل",
     "content": "<p>توکن و رمز را در AsyncStorage نگذار؛ از ذخیره‌ی امن سیستم (<code class='inline'>expo-secure-store</code> / Keychain) استفاده کن. توکن کوتاه‌عمر + Refresh Token بده و هنگام خروج همه را پاک کن.</p>",
     "exercise": "جریان ورود و خروج یک اپ را با ذخیره‌ی امن طراحی کن."
    },
    {
     "title": "عملکرد و تست در React Native",
     "content": "<p>برای روانی اپ: لیست‌ها با FlatList، تصاویر کم‌حجم، پرهیز از رندر اضافه (memo) و استفاده از Hermes. با Jest و React Native Testing Library منطق و کامپوننت‌ها را تست کن و روی دستگاه واقعی هم بیازمای.</p>",
     "exercise": "یک صفحه را با Profiler بسنج و یک رندر اضافه را حذف کن."
    },
    {
     "title": "معماری جدید React Native: JSI، Fabric و TurboModules",
     "content": "<p>در معماری قدیمی ارتباط JS و Native از «Bridge» ناهمگام JSON می‌گذشت و کند بود. معماری جدید با <b>JSI</b> JS را مستقیم به C++ وصل می‌کند، <b>Fabric</b> رندر همگام می‌دهد و <b>TurboModules</b> ماژول‌ها را تنبل و نوع‌دار بارگذاری می‌کند. موتور <b>Hermes</b> زمان شروع و حافظه را کم می‌کند. ماژول‌های جدید را با Codegen بنویس.</p>",
     "exercise": "تفاوت Bridge و JSI را با نمودار توضیح بده."
    },
    {
     "title": "ناوبری پیشرفته: Deep Link و جریان احراز هویت",
     "content": "<p>با React Navigation ناوبرها تو‌در‌تو می‌شوند (Tab داخل Stack). جریان ورود را با نمایش شرطی گروه صفحه‌ها بساز: اگر توکن نبود فقط Auth Stack. Deep Link با <code class='inline'>linking</code> config آدرس URL را به صفحه نگاشت می‌کند؛ پارامترها را اعتبارسنجی کن چون ورودی ناامن‌اند.<div class='code-block'><div class='cb-head'>nav.js</div><pre><code>&lt;Stack.Navigator>\n  {token ? (\n    &lt;Stack.Screen name='Home' component={Home} />\n  ) : (\n    &lt;Stack.Screen name='Login' component={Login} />\n  )}\n&lt;/Stack.Navigator></code></pre></div></p>",
     "exercise": "لینک myapp://order/12 را به صفحه‌ی جزئیات سفارش وصل کن."
    },
    {
     "title": "مدیریت state: Zustand، Redux Toolkit و Query",
     "content": "<p>state سمت سرور (لیست‌ها، پروفایل) را با TanStack Query مدیریت کن (کش، تلاش مجدد، بازخوانی) و state واقعی کلاینت (تم، سبد) را با Zustand یا Redux Toolkit. هر دو را با ذخیره‌ساز <code class='inline'>persist</code> پایدار کن. selector دقیق بنویس تا کل اپ دوباره رندر نشود.</p>",
     "exercise": "state سبد خرید را با Zustand و persist بساز."
    },
    {
     "title": "Offline-first: ذخیره‌ی محلی و همگام‌سازی",
     "content": "<p>اپ باید بدون اینترنت هم کار کند. برای کلید-مقدار سریع از MMKV، برای داده‌ی رابطه‌ای از SQLite یا WatermelonDB استفاده کن. الگو: ابتدا از ذخیره‌ی محلی بخوان، تغییرات را در صف بگذار و هنگام اتصال همگام کن. تعارض (conflict) را با زمان یا نسخه حل کن.</p>",
     "exercise": "ثبت یادداشت بدون اینترنت و همگام‌سازی بعدی را طراحی کن."
    },
    {
     "title": "انیمیشن و ژست: Reanimated و Gesture Handler",
     "content": "<p>انیمیشن‌های JS هنگام شلوغی رشته‌ی JS می‌پرند. Reanimated 3 با <b>worklet</b> محاسبه را روی UI Thread انجام می‌دهد و ۶۰fps پایدار می‌دهد. <code class='inline'>useSharedValue</code> و <code class='inline'>useAnimatedStyle</code> را با Gesture Handler (کشیدن، پینچ) ترکیب کن.<div class='code-block'><div class='cb-head'>drag.js</div><pre><code>const x = useSharedValue(0);\nconst pan = Gesture.Pan().onChange(e => { x.value += e.changeX; });\nconst style = useAnimatedStyle(() => ({ transform: [{ translateX: x.value }] }));</code></pre></div></p>",
     "exercise": "کارتی بساز که با کشیدن حرکت کند و رها که شد برگردد."
    },
    {
     "title": "بهینه‌سازی عملکرد: FlashList، memo و پروفایل",
     "content": "<p>FlatList را با <code class='inline'>getItemLayout</code>، <code class='inline'>windowSize</code> و <code class='inline'>removeClippedSubviews</code> تنظیم کن یا به FlashList (بازیافت سلول) مهاجرت کن. با <code class='inline'>React.memo</code>، <code class='inline'>useCallback</code> و کلید پایدار رندر اضافه را حذف کن. با Hermes Profiler و React DevTools Profiler گلوگاه را اندازه بگیر و روی دستگاه واقعی release تست کن.</p>",
     "exercise": "لیست ۱۰ هزار آیتمی را روی دستگاه میان‌رده روان کن."
    },
    {
     "title": "ماژول بومی و Expo Modules",
     "content": "<p>وقتی به API بومی نیاز داری که کتابخانه‌ای ندارد، ماژول بومی (Swift/Kotlin) می‌نویسی. Expo Modules API کار را ساده می‌کند. با Config Plugin تنظیمات بومی (Info.plist، AndroidManifest) را بدون ویرایش دستی پوشه‌ها اعمال می‌کنی. Prebuild پوشه‌های بومی را از تنظیمات می‌سازد.</p>",
     "exercise": "یک ماژول ساده بنویس که سطح باتری را برگرداند."
    },
    {
     "title": "اعلان Push: FCM، APNs و مجوز",
     "content": "<p>اعلان از طریق FCM (اندروید) و APNs (iOS) می‌رسد. مجوز را در لحظه‌ی مناسب و با توضیح بخواه، توکن دستگاه را به سرور بفرست و هنگام تغییر به‌روز کن. سه حالت را مدیریت کن: اپ باز، پس‌زمینه و بسته (و ناوبری از روی اعلان). محتوای حساس را در payload نگذار.</p>",
     "exercise": "جریان ثبت توکن و ناوبری از اعلان به صفحه‌ی سفارش را بنویس."
    },
    {
     "title": "امنیت موبایل: Pinning، ذخیره‌ی امن و Deep Link",
     "content": "<p>توکن‌ها در Keychain/Keystore (SecureStore)، نه AsyncStorage. Certificate Pinning جلوی حمله‌ی Man-in-the-Middle را می‌گیرد. کد JS قابل‌استخراج است، پس هیچ کلید سرّی را داخل اپ نگذار. تشخیص Jailbreak/Root، Obfuscation (Hermes bytecode، ProGuard) و اعتبارسنجی Deep Link لایه‌های بعدی‌اند.</p>",
     "exercise": "بررسی کن چه رازی داخل بسته‌ی اپ تو قابل‌استخراج است."
    },
    {
     "title": "مجوزها، دوربین، موقعیت و کار پس‌زمینه",
     "content": "<p>مجوزها را در زمان نیاز بخواه، رد شدن را مدیریت کن و راه رفتن به تنظیمات را بده. موقعیت پس‌زمینه و مصرف باتری حساس‌اند: دقت و بازه را کم کن. کار پس‌زمینه با محدودیت‌های iOS/Android (BackgroundFetch، WorkManager) محدود است و تضمین زمان دقیق ندارد.</p>",
     "exercise": "جریان درخواست مجوز دوربین با پیام توضیح و رد شدن را بنویس."
    },
    {
     "title": "تست: Jest، Testing Library و E2E با Maestro/Detox",
     "content": "<p>منطق و کامپوننت را با Jest و React Native Testing Library تست کن (رفتار کاربر، نه جزئیات داخلی). برای سناریوی کامل (ورود، سفارش) تست E2E روی شبیه‌ساز/دستگاه با Maestro (ساده، YAML) یا Detox بنویس. مرزهای بیرونی (شبکه) را mock کن و تست E2E را کم ولی روی مسیرهای حیاتی بگذار.</p>",
     "exercise": "یک سناریوی ورود را با Maestro خودکار کن."
    },
    {
     "title": "CI/CD و انتشار: EAS، OTA و فروشگاه",
     "content": "<p>EAS Build اپ را در ابر می‌سازد و امضا (certificate/keystore) را مدیریت می‌کند. به‌روزرسانی OTA (EAS Update) فقط کد JS را بدون بازبینی فروشگاه عوض می‌کند؛ تغییر بومی نیاز به انتشار جدید دارد. نسخه‌بندی (versionCode)، کانال‌ها (staging/production)، Sentry برای خطا و رعایت قوانین فروشگاه‌ها (حریم خصوصی، حذف حساب) را در برنامه بگذار.</p>",
     "exercise": "pipeline ساخت و انتشار staging و production را طراحی کن."
    },
    {
     "title": "Optimistic UI و Rollback",
     "content": "<p>در Optimistic UI اول رابط را تغییر می‌دهی و بعد منتظر سرور می‌مانی؛ اگر سرور رد کرد، به وضعیت قبلی برمی‌گردی. نکته‌ی حیاتی: <b>snapshot</b> قبل از تغییر نگه دار و برای هر درخواست شناسه‌ی جدا داشته باش تا پاسخ‌های دیررسیده وضعیت جدیدتر را خراب نکنند. نمونه‌ی React Native:</p><pre dir=\"ltr\"><code>const toggleLike = async (id) =&gt; {\n  const prev = items;                       // snapshot\n  setItems(items.map(i =&gt; i.id===id ? {...i, liked:!i.liked} : i));\n  try { await api.like(id); }\n  catch { setItems(prev); showToast(&#x27;ناموفق بود&#x27;); }  // rollback\n};</code></pre>",
     "exercise": "شبیه‌سازی را طوری تغییر بده که سرور در ۸۰٪ موارد خطا بدهد.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nlet items=[{id:1,liked:false},{id:2,liked:false}];\nconst api={like:(id)=>new Promise((res,rej)=>setTimeout(()=>id===2?rej(new Error('500')):res(),20))};\nasync function toggle(id){\n  const prev=items;\n  items=items.map(i=>i.id===id?{...i,liked:!i.liked}:i);\n  log('بعد از تغییر خوش‌بینانه',id,JSON.stringify(items.find(i=>i.id===id)));\n  try{await api.like(id);log('سرور تأیید کرد',id)}\n  catch(e){items=prev;log('خطا → rollback',id,JSON.stringify(items.find(i=>i.id===id)))}\n}\n(async()=>{await toggle(1);await toggle(2);log('وضعیت نهایی:',JSON.stringify(items))})();"
     }
    },
    {
     "title": "Retry با Exponential Backoff و Jitter",
     "content": "<p>شبکه‌ی موبایل ناپایدار است. تلاش مجدد فوری و هم‌زمان همه‌ی کاربران سرور را می‌کُشد (thundering herd). فرمول: <code>delay = min(cap, base·2^attempt)</code> و بعد <b>jitter</b> تصادفی (Full Jitter: عدد یکنواخت بین ۰ و delay). فقط خطاهای قابل‌تکرار (۵xx، timeout) را دوباره امتحان کن، نه ۴xx.</p><pre dir=\"ltr\"><code>async function withRetry(fn, {tries=5, base=300, cap=8000} = {}) {\n  for (let a=0; ; a++) {\n    try { return await fn(); }\n    catch (e) {\n      if (a+1&gt;=tries || !e.retryable) throw e;\n      const d = Math.random() * Math.min(cap, base * 2**a);\n      await new Promise(r =&gt; setTimeout(r, d));\n    }\n  }\n}</code></pre>",
     "exercise": "base را به ۱۰۰۰ تغییر بده و سقف تأخیرها را مقایسه کن.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nfunction delays(tries,base,cap,rand){const r=[];for(let a=0;a<tries;a++)r.push(Math.round(rand()*Math.min(cap,base*2**a)));return r}\nlog('سقف تأخیر هر تلاش (بدون jitter):',[0,1,2,3,4,5,6].map(a=>Math.min(8000,300*2**a)).join(', '));\nlog('تأخیر Full Jitter نمونه:',delays(7,300,8000,Math.random).join(', '));\nlet n=0;\nasync function withRetry(fn,{tries=5}={}){for(let a=0;;a++){try{return await fn()}catch(e){if(a+1>=tries||!e.retryable)throw e;log('تلاش',a+1,'شکست خورد، دوباره...')}}}\n(async()=>{\n  const ok=await withRetry(async()=>{n++;if(n<3){const e=new Error('503');e.retryable=true;throw e}return 'موفق در تلاش '+n});\n  log(ok);\n  try{await withRetry(async()=>{const e=new Error('404');e.retryable=false;throw e})}catch(e){log('خطای 404 تکرار نشد:',e.message)}\n})();"
     }
    },
    {
     "title": "Pagination با Cursor و Infinite Scroll",
     "content": "<p>صفحه‌بندی با <code>offset</code> وقتی داده‌ها هم‌زمان اضافه می‌شوند، ردیف تکراری یا جاافتاده می‌سازد. <b>Cursor</b> (آخرین شناسه یا زمان) پایدار است. در <code>FlatList</code> از <code>onEndReached</code> با آستانه‌ی <code>onEndReachedThreshold</code> استفاده کن و با یک پرچم <code>loading</code> از درخواست‌های هم‌زمان جلوگیری کن.</p><pre dir=\"ltr\"><code>const load = async () =&gt; {\n  if (loading || !hasMore) return;\n  setLoading(true);\n  const r = await api.list({ cursor, limit: 20 });\n  setItems(p =&gt; [...p, ...r.items]);\n  setCursor(r.next); setHasMore(!!r.next);\n  setLoading(false);\n};\n// &lt;FlatList onEndReached={load} onEndReachedThreshold={0.5} /&gt;</code></pre>",
     "exercise": "وسط صفحه‌بندی آیتم جدید اضافه کن و ببین cursor چگونه تکرار را جلوگیری می‌کند.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nlet db=Array.from({length:12},(_,i)=>({id:12-i}));  // جدیدترین اول\nconst list=({cursor,limit})=>{const start=cursor==null?0:db.findIndex(x=>x.id<cursor);const items=db.slice(start,start+limit);return{items,next:start+limit<db.length?items[items.length-1].id:null}};\nlet all=[],cursor=null,more=true,loading=false;\nfunction load(){if(loading||!more)return;loading=true;const r=list({cursor,limit:5});all=all.concat(r.items);cursor=r.next;more=r.next!=null;loading=false;log('بارگذاری:',r.items.map(x=>x.id).join(','))}\nload();db.unshift({id:13,});  // آیتم جدید وسط کار\nload();load();load();\nconst ids=all.map(x=>x.id);\nlog('همه:',ids.join(','));\nlog('تکراری؟',new Set(ids).size!==ids.length?'بله':'خیر');"
     }
    },
    {
     "title": "Debounce و Throttle برای جستجو و اسکرول",
     "content": "<p><b>Debounce</b>: فقط وقتی کاربر برای مدتی دست کشید اجرا کن (جستجوی هنگام تایپ). <b>Throttle</b>: حداکثر هر T میلی‌ثانیه یک بار (رویداد scroll). در React Native تابع debounce را داخل <code>useMemo</code> یا <code>useRef</code> نگه دار، وگرنه با هر رندر ساخته می‌شود و کار نمی‌کند. با یک پرچم لغو (یا AbortController) پاسخ قدیمی را هم دور بریز.</p><pre dir=\"ltr\"><code>const search = useMemo(() =&gt; debounce(async (q) =&gt; {\n  ctrl.current?.abort(); ctrl.current = new AbortController();\n  setResults(await api.search(q, { signal: ctrl.current.signal }));\n}, 400), []);</code></pre>",
     "exercise": "زمان debounce را ۱۰۰ کن و تعداد فراخوانی‌ها را مقایسه کن.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst debounce=(fn,ms)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}};\nconst throttle=(fn,ms)=>{let last=-Infinity;return(...a)=>{const n=Date.now();if(n-last>=ms){last=n;fn(...a)}}};\nlet d=0,t=0;\nconst fd=debounce(()=>d++,50),ft=throttle(()=>t++,30);\nlet i=0;const iv=setInterval(()=>{fd();ft();if(++i===20){clearInterval(iv);setTimeout(()=>{log('۲۰ رویداد پشت‌سرهم هر ~5ms');log('debounce اجرا شد:',d,'بار (باید 1)');log('throttle اجرا شد:',t,'بار (چند بار، ولی کمتر از 20)');},120)}},5);"
     }
    },
    {
     "title": "صف آفلاین (Outbox) با Idempotency Key",
     "content": "<p>در حالت آفلاین، عملیات نوشتن را در یک <b>outbox</b> ماندگار (AsyncStorage/SQLite) بگذار و هنگام بازگشت اینترنت به ترتیب بفرست. چون ممکن است درخواست رسیده ولی پاسخ گم شده باشد، هر عملیات یک <b>Idempotency-Key</b> یکتا دارد تا ارسال دوباره، اثر تکراری نسازد (مثلاً دو بار پرداخت).</p><pre dir=\"ltr\"><code>await fetch(&#x27;/orders&#x27;, {\n  method: &#x27;POST&#x27;,\n  headers: { &#x27;Idempotency-Key&#x27;: op.id, &#x27;Content-Type&#x27;: &#x27;application/json&#x27; },\n  body: JSON.stringify(op.payload),\n});</code></pre>",
     "exercise": "شبکه را در میانه‌ی ارسال دوم قطع کن و ببین عملیات در صف می‌ماند.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst server={seen:new Set(),orders:[]};\nfunction serverPost(key,p,fail){if(fail)throw new Error('timeout');if(!server.seen.has(key)){server.seen.add(key);server.orders.push(p)}return 'ok'}\nlet outbox=[{id:'k1',payload:'قهوه'},{id:'k2',payload:'کیک'}];\nlet online=false,failOnce=true;\nfunction flush(){\n  if(!online){log('آفلاین؛ در صف می‌ماند:',outbox.length);return}\n  for(const op of [...outbox]){\n    try{serverPost(op.id,op.payload,failOnce&&op.id==='k2'&&!(failOnce=false)); outbox=outbox.filter(o=>o.id!==op.id);log('ارسال شد',op.id)}\n    catch(e){log('خطا در',op.id,'→ می‌ماند');break}\n  }\n}\nflush();online=true;flush();flush();\n// ارسال تکراری با همان کلید\ntry{serverPost('k1','قهوه')}catch(e){}\nlog('سفارش‌های سرور:',server.orders.join(','),'(بدون تکرار)');"
     }
    },
    {
     "title": "Deep Link: تجزیه و تطبیق مسیر",
     "content": "<p>لینک‌هایی مثل <code>myapp://product/42?ref=ad</code> یا <code>https://example.com/product/42</code> باید به صفحه‌ی درست برسند. کار: تجزیه‌ی URL، تطبیق با الگوی مسیر (<code>/product/:id</code>)، اعتبارسنجی پارامترها و در نهایت ناوبری. <b>هرگز</b> پارامتر لینک را بدون اعتبارسنجی به WebView یا درخواست شبکه ندهید (امنیت).</p><pre dir=\"ltr\"><code>const linking = {\n  prefixes: [&#x27;myapp://&#x27;, &#x27;https://example.com&#x27;],\n  config: { screens: { Product: &#x27;product/:id&#x27;, Profile: &#x27;user/:name&#x27; } },\n};\n// &lt;NavigationContainer linking={linking}&gt;</code></pre>",
     "exercise": "الگوی جدیدی مثل order/:id/track اضافه کن.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst routes=[{name:'Product',pattern:'product/:id',valid:{id:/^\\d{1,9}$/}},{name:'Profile',pattern:'user/:name',valid:{name:/^[\\w-]{1,30}$/}}];\nfunction resolve(url){\n  const m=url.match(/^(?:myapp:\\/\\/|https:\\/\\/example\\.com\\/)([^?#]*)(?:\\?([^#]*))?/);\n  if(!m)return{error:'پیشوند نامعتبر'};\n  const parts=m[1].split('/').filter(Boolean),query=Object.fromEntries(new URLSearchParams(m[2]||''));\n  for(const r of routes){\n    const pp=r.pattern.split('/');if(pp.length!==parts.length)continue;\n    const params={};let ok=true;\n    pp.forEach((s,i)=>{if(s[0]===':'){const k=s.slice(1);if(!r.valid[k].test(parts[i]))ok=false;params[k]=decodeURIComponent(parts[i])}else if(s!==parts[i])ok=false});\n    if(ok)return{screen:r.name,params,query};\n  }\n  return{error:'مسیر ناشناخته یا پارامتر نامعتبر'};\n}\n['myapp://product/42?ref=ad','https://example.com/user/ali','myapp://product/42abc','evil://product/1','myapp://nothing'].forEach(u=>log(u,'→',JSON.stringify(resolve(u))));"
     }
    },
    {
     "title": "فرم و اعتبارسنجی با ماشین حالت",
     "content": "<p>فرم خوب سه مفهوم دارد: <b>values</b>، <b>errors</b> و <b>touched</b>. خطا را فقط بعد از لمس فیلد (blur) نشان بده نه هنگام اولین کاراکتر. دکمه‌ی ارسال تا وقتی در حال ارسال است غیرفعال شود تا دوبار ثبت نشود. اعتبارسنجی را در یک تابع خالص بنویس تا تست‌پذیر باشد (با Zod/Yup هم همین الگو).</p><pre dir=\"ltr\"><code>const errors = validate(values);              // تابع خالص\nconst show = (k) =&gt; touched[k] &amp;&amp; errors[k];\n&lt;TextInput onBlur={() =&gt; setTouched(t =&gt; ({...t, email:true}))} /&gt;\n{show(&#x27;email&#x27;) &amp;&amp; &lt;Text style={s.err}&gt;{errors.email}&lt;/Text&gt;}\n&lt;Button disabled={submitting || Object.keys(errors).length&gt;0} /&gt;</code></pre>",
     "exercise": "قاعده‌ی «رمز حداقل ۸ کاراکتر و یک رقم» را اضافه کن.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst validate=v=>{const e={};\n  if(!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(v.email||''))e.email='ایمیل نامعتبر است';\n  if((v.pass||'').length<8||!/\\d/.test(v.pass))e.pass='رمز حداقل ۸ کاراکتر و یک رقم';\n  return e};\nlet s={values:{email:'',pass:''},touched:{},submitting:false};\nconst show=k=>s.touched[k]&&validate(s.values)[k];\nconst snap=t=>log(t,'| خطای ایمیل:',show('email')||'—','| خطای رمز:',show('pass')||'—','| قابل ارسال:',Object.keys(validate(s.values)).length===0&&!s.submitting);\nsnap('شروع');\ns.values.email='a@b';snap('تایپ بدون blur');\ns.touched.email=true;snap('بعد از blur');\ns.values={email:'a@b.com',pass:'abc12345'};s.touched.pass=true;snap('مقادیر معتبر');"
     }
    },
    {
     "title": "RTL و بین‌المللی‌سازی (فارسی)",
     "content": "<p>برای اپ فارسی از <code>I18nManager.forceRTL(true)</code> استفاده می‌شود و بعد از تغییر باید اپ دوباره راه‌اندازی شود. به‌جای <code>left/right</code> از <code>start/end</code> (مثل <code>marginStart</code>, <code>paddingEnd</code>) استفاده کن تا خودکار برعکس شود. آیکون‌های جهت‌دار (پیکان) را flip کن. اعداد و تاریخ را با <code>Intl</code> با locale <code>fa-IR</code> قالب‌بندی کن. تاریخ جلالی با <code>calendar: 'persian'</code>.</p><pre dir=\"ltr\"><code>I18nManager.allowRTL(true);\nI18nManager.forceRTL(true);          // سپس restart\nconst s = StyleSheet.create({ card: { marginStart: 12, paddingEnd: 8 } });\nnew Intl.NumberFormat(&#x27;fa-IR&#x27;).format(1234567);</code></pre>",
     "exercise": "ارز را به USD تغییر بده و خروجی را ببین.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nlog('عدد:',new Intl.NumberFormat('fa-IR').format(1234567.89));\nlog('ریال:',new Intl.NumberFormat('fa-IR',{style:'currency',currency:'IRR',maximumFractionDigits:0}).format(2500000));\nlog('درصد:',new Intl.NumberFormat('fa-IR',{style:'percent'}).format(0.375));\nconst d=new Date(Date.UTC(2026,9,3,12));\nlog('تاریخ جلالی:',new Intl.DateTimeFormat('fa-IR-u-ca-persian',{dateStyle:'long',timeZone:'Asia/Tehran'}).format(d));\nlog('نسبی:',new Intl.RelativeTimeFormat('fa',{numeric:'auto'}).format(-1,'day'));\nconst marg=(rtl)=>rtl?{marginRight:12}:{marginLeft:12};\nlog('marginStart در LTR:',JSON.stringify(marg(false)),'در RTL:',JSON.stringify(marg(true)));"
     }
    },
    {
     "title": "طراحی واکنش‌گرا: Breakpoint و PixelRatio",
     "content": "<p>گوشی‌ها و تبلت‌ها اندازه‌های متفاوتی دارند. از <code>useWindowDimensions()</code> (واکنشی به چرخش صفحه) به‌جای <code>Dimensions.get</code> استفاده کن. چند breakpoint تعریف کن و تعداد ستون شبکه را از روی عرض حساب کن. برای خطوط نازک از <code>StyleSheet.hairlineWidth</code> و برای اندازه‌ی تصویر از <code>PixelRatio.getPixelSizeForLayoutSize</code> کمک بگیر.</p><pre dir=\"ltr\"><code>const { width } = useWindowDimensions();\nconst cols = width &gt;= 900 ? 4 : width &gt;= 600 ? 3 : 2;\nconst gap = 12;\nconst itemW = (width - gap * (cols + 1)) / cols;\n&lt;FlatList key={cols} numColumns={cols} ... /&gt;   // key: تغییر ستون</code></pre>",
     "exercise": "gap را ۸ کن و عرض آیتم‌ها را در اندازه‌های مختلف ببین.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst layout=w=>{const cols=w>=900?4:w>=600?3:2,gap=12;return{w,cols,itemW:+((w-gap*(cols+1))/cols).toFixed(1)}};\n[320,390,430,600,768,1024].forEach(w=>log(JSON.stringify(layout(w))));\nconst px=(dp,ratio)=>Math.round(dp*ratio);\nlog('تصویر 200dp روی ratio=3 باید',px(200,3),'پیکسل باشد');"
     }
    },
    {
     "title": "Error Boundary و گزارش کرش",
     "content": "<p>خطای رندر در یک کامپوننت کل اپ را سفید می‌کند. <b>Error Boundary</b> (کلاس با <code>componentDidCatch</code>) خطا را می‌گیرد و UI جایگزین نشان می‌دهد. توجه: فقط خطاهای رندر را می‌گیرد، نه event handlerها یا async. برای آن‌ها <code>try/catch</code> و handler سراسری (<code>ErrorUtils.setGlobalHandler</code>) لازم است. خطا را با Sentry/Crashlytics گزارش کن و اطلاعات شخصی را حذف کن.</p><pre dir=\"ltr\"><code>class Boundary extends React.Component {\n  state = { err: null };\n  static getDerivedStateFromError(err) { return { err }; }\n  componentDidCatch(err, info) { report(err, info.componentStack); }\n  render() { return this.state.err ? &lt;Fallback onRetry={() =&gt; this.setState({err:null})}/&gt; : this.props.children; }\n}</code></pre>",
     "exercise": "یک خطای async اضافه کن و ببین چرا boundary آن را نمی‌گیرد.",
     "code": {
      "html": "<pre id=\"out\" dir=\"ltr\"></pre>",
      "css": "body{font-family:monospace;padding:12px;background:#0f172a;color:#e2e8f0}button{margin:4px;padding:6px 12px}",
      "js": "const out=document.getElementById('out');const log=(...a)=>{out.textContent+=a.join(' ')+'\\n'};\n\nconst reports=[];\nfunction scrub(m){return String(m).replace(/[\\w.+-]+@[\\w-]+\\.[\\w.]+/g,'[email]').replace(/\\b\\d{10,}\\b/g,'[num]')}\nfunction boundary(render,fallback){try{return render()}catch(e){reports.push(scrub(e.message));return fallback}}\nlog(boundary(()=>'صفحه‌ی سالم','FALLBACK'));\nlog(boundary(()=>{throw new Error('کاربر ali@test.com با کارت 6037991234567890 خطا خورد')},'FALLBACK: مشکلی پیش آمد'));\nlog('گزارش ارسالی:',reports[0]);"
     }
    }
   ],
   "quiz": [
    {
     "q": "EAS Build چه مشکلی را حل می‌کند؟",
     "options": [
      "فقط استایل‌دهی می‌کند",
      "ساخت فایل نصبی نهایی اپ (از جمله iOS) را بدون نیاز مستقیم به Mac در فضای ابری انجام می‌دهد",
      "جایگزین React Native است",
      "فقط برای دیباگ استفاده می‌شود"
     ],
     "answer": 1,
     "explain": "EAS Build فرآیند build را در سرورهای Expo انجام می‌دهد."
    },
    {
     "q": "چرا اپ موبایل برای دسترسی به دوربین باید از کاربر اجازه بگیرد؟",
     "options": [
      "برای شلوغ‌کردن کد",
      "برای حفظ حریم خصوصی و امنیت کاربر — یک تفاوت اساسی با وب",
      "فقط در اندروید لازم است",
      "اصلاً لازم نیست"
     ],
     "answer": 1,
     "explain": "سیستم‌عامل‌های موبایل دسترسی به منابع حساس دستگاه را کنترل می‌کنند."
    },
    {
     "q": "Push Notification چه زمانی به کاربر می‌رسد؟",
     "options": [
      "فقط وقتی اپ باز است",
      "حتی وقتی اپ کاملاً بسته است",
      "فقط در وب‌سایت‌ها",
      "هرگز روی موبایل کار نمی‌کند"
     ],
     "answer": 1,
     "explain": "این ویژگی کلیدی Push Notification نسبت به یک پیام داخل‌اپلیکیشنی است."
    },
    {
     "q": "توکن را کجا نگه داریم؟",
     "options": [
      "ذخیره‌ی امن (SecureStore/Keychain)",
      "AsyncStorage ساده",
      "در کد",
      "در لاگ"
     ],
     "answer": 0,
     "explain": "AsyncStorage رمزگذاری‌شده نیست."
    },
    {
     "q": "JSI چه مزیتی دارد؟",
     "options": [
      "ارتباط مستقیم JS و C++ بدون Bridge JSON",
      "فقط رنگ",
      "فقط iOS",
      "حذف JS"
     ],
     "answer": 0,
     "explain": "کندی Bridge قدیمی را حذف می‌کند."
    },
    {
     "q": "Reanimated انیمیشن را روی کدام رشته اجرا می‌کند؟",
     "options": [
      "UI Thread (worklet)",
      "JS Thread",
      "شبکه",
      "دیسک"
     ],
     "answer": 0,
     "explain": "از افت فریم هنگام شلوغی JS جلوگیری می‌کند."
    },
    {
     "q": "توکن ورود کجا ذخیره شود؟",
     "options": [
      "Keychain/Keystore (SecureStore)",
      "AsyncStorage",
      "داخل کد",
      "لاگ"
     ],
     "answer": 0,
     "explain": "ذخیره‌ی امن سیستم."
    },
    {
     "q": "OTA Update چه چیزی را تغییر می‌دهد؟",
     "options": [
      "فقط کد JS و دارایی‌ها",
      "کد بومی",
      "سیستم‌عامل",
      "سخت‌افزار"
     ],
     "answer": 0,
     "explain": "تغییر بومی نیاز به انتشار جدید دارد."
    },
    {
     "q": "چرا در Optimistic UI قبل از تغییر، snapshot نگه می‌داریم؟",
     "options": [
      "برای برگرداندن وضعیت اگر سرور خطا داد",
      "برای سریع‌تر شدن رندر",
      "برای کاهش حجم بسته",
      "برای ذخیره در AsyncStorage"
     ],
     "answer": 0,
     "explain": "Rollback به وضعیت قبلی فقط با نگهداری snapshot ممکن است."
    },
    {
     "q": "Jitter در Exponential Backoff برای چیست؟",
     "options": [
      "جلوگیری از تلاش هم‌زمان همه‌ی کلاینت‌ها",
      "افزایش سرعت شبکه",
      "فشرده‌سازی پاسخ",
      "رمزنگاری درخواست"
     ],
     "answer": 0,
     "explain": "تأخیر تصادفی تلاش‌ها را پخش می‌کند و از thundering herd جلوگیری می‌کند."
    },
    {
     "q": "Idempotency-Key چه مشکلی را حل می‌کند؟",
     "options": [
      "اثر تکراری در ارسال مجدد درخواست",
      "کندی شبکه",
      "ناسازگاری نسخه‌ی اپ",
      "حجم زیاد تصاویر"
     ],
     "answer": 0,
     "explain": "سرور با کلید یکتا درخواست تکراری را شناسایی و فقط یک بار اجرا می‌کند."
    },
    {
     "q": "کدام استایل برای پشتیبانی خودکار از RTL مناسب‌تر است؟",
     "options": [
      "marginStart",
      "marginLeft",
      "left: 0",
      "paddingRight"
     ],
     "answer": 0,
     "explain": "start/end بسته به جهت زبان خودکار عوض می‌شوند."
    }
   ],
   "challenge": {
    "task": "روی کاغذ (یا در یک فایل متنی) ساختار کامپوننت‌های یک صفحهٔ «پروفایل کاربر» در React Native رو طراحی کن: باید یک Image برای عکس پروفایل، چند Text برای نام/بیو، یک TouchableOpacity برای دکمهٔ ادیت، و از Flexbox برای چیدمان عمودی استفاده کنه.",
    "hint1": "از بیرون به داخل فکر کن: یک View اصلی با flexDirection: 'column' و alignItems: 'center'، بعد داخلش عناصر رو به‌ترتیب بچین.",
    "hint2": "برای عکس گرد (دایره‌ای)، از borderRadius برابر با نصف width/height استفاده کن (مثلاً width:100, height:100, borderRadius:50).",
    "solution": "<View style={{flex:1, alignItems:'center', padding:20}}>\n  <Image source={{uri:'...'}} style={{width:100, height:100, borderRadius:50}} />\n  <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>نام کاربر</Text>\n  <Text style={{color:'#666'}}>بیوی کوتاه دربارهٔ کاربر</Text>\n  <TouchableOpacity style={{marginTop:15, backgroundColor:'#4F46E5', padding:10, borderRadius:8}}>\n    <Text style={{color:'#fff'}}>ویرایش پروفایل</Text>\n  </TouchableOpacity>\n</View>"
   }
  }
 ],
 "project": {
  "title": "اپلیکیشن لیست کارها (Todo) موبایل",
  "brief": "همون منطق Todo App که در جاوااسکریپت ساختی رو این‌بار به‌عنوان یک اپ واقعی React Native با Expo بساز — قابل نصب و اجرا روی گوشی خودت.",
  "requirements": [
   "حداقل ۲ صفحه با React Navigation (مثلاً لیست کارها، و صفحهٔ افزودن کار جدید)",
   "افزودن/حذف/تیک‌زدن کار با TouchableOpacity",
   "ذخیرهٔ لیست با AsyncStorage تا با بستن اپ از بین نره",
   "طراحی با Flexbox، حداقل روی یک گوشی واقعی (با Expo Go) تست‌شده"
  ],
  "hints": [
   "با npx create-expo-app شروع کن؛ اول فقط یک صفحهٔ ساده با لیست ثابت (بدون AsyncStorage) بساز تا UI درست کار کنه، بعد قابلیت ذخیره رو اضافه کن."
  ]
 }
});
