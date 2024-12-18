const real_mode_btn = document.getElementById("real-mode");
const sim_mode_btn = document.getElementById("sim-mode");

function showLoadingAndNavigate(path) {
  // إظهار شاشة التحميل
  const loadingScreen = document.querySelector(".loading_screen");
  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = "1";
  document.body.style.overflow = "hidden";
  
  // الحصول على المسار الأساسي للموقع
  const basePath = window.location.pathname.includes('/TrafficViewer') 
    ? '/TrafficViewer'
    : '';
  
  // بعد ثانية واحدة
  setTimeout(() => {
    // الانتقال للصفحة الجديدة
    window.location.href = `${basePath}${path}`;
  }, 1000);
}

// إخفاء شاشة التحميل عند التحميل
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector(".loading_screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

real_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("/Real_Mode/");
});

sim_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("/svg_vs_proj/");
});