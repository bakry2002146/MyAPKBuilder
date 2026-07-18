import './style.css'
import { FilePicker } from '@capawesome/capacitor-file-picker';

document.querySelector('#app').innerHTML = `
<div class="container">
<h1>📦 MyAPKBuilder</h1>

<div class="card">
<h2>اختر المشروع</h2>

<button id="select">📂 اختر ملف ZIP</button>

<p id="result">لم يتم اختيار أي ملف.</p>
</div>

<div class="card">
<h2>إعدادات التطبيق</h2>

<input id="appname" type="text" placeholder="اسم التطبيق">

<input id="package" type="text" placeholder="Package Name">

<button id="build">🚀 Build APK</button>
</div>
</div>
`;document.getElementById("select").addEventListener("click", async () => {
  try {
    const result = await FilePicker.pickFiles({
      types: ["application/zip"]
    });

    document.getElementById("result").innerText =
      "✅ " + result.files[0].name;

  } catch (err) {
    document.getElementById("result").innerText =
      "❌ لم يتم اختيار أي ملف";
  }
});

document.getElementById("build").addEventListener("click", () => {
  alert("🚀 سيتم بناء APK قريبًا");
});
