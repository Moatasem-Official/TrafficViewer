const real_mode_btn = document.getElementById("real-mode");
const sim_mode_btn = document.getElementById("sim-mode");

function showLoadingAndNavigate(path) {
  // إظهار شاشة التحميل
  const loadingScreen = document.querySelector(".loading_screen");
  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = "1";
  document.body.style.overflow = "hidden";
  
  // بعد 3 ثواني
  setTimeout(() => {
    // الانتقال للصفحة الجديدة
    window.location.href = path;
  }, 3000);
}

// عند تحميل الصفحة
window.addEventListener('load', () => {
    // إخفاء شاشة التحميل فقط إذا كان المستخدم قادم من زر الرجوع
    if (performance.getEntriesByType("navigation")[0].type === 'back_forward') {
        const loadingScreen = document.querySelector(".loading_screen");
        if (loadingScreen) {
            loadingScreen.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});

real_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("../Real_Mode/");
});

sim_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("../svg_vs_proj/");
});