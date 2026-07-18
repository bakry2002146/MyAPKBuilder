import './style.css'

document.querySelector('#app').innerHTML = `
<div class="container">
  <h1>📦 MyAPKBuilder</h1>

  <div class="card">
    <h2>اختر المشروع</h2>
    <button id="select">📂 اختر مجلد المشروع</button>
  </div>

  <div class="card">
    <h2>إعدادات التطبيق</h2>

    <input type="text" placeholder="اسم التطبيق">

    <input type="text" placeholder="Package Name">

    <button id="build">🚀 Build APK</button>
  </div>
</div>
`
document.getElementById("build").onclick = function () {
  alert("🔥 زر Build APK يعمل!");
}
