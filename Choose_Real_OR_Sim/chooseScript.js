const real_mode_btn = document.getElementById("real-mode");
const sim_mode_btn = document.getElementById("sim-mode");

function showLoadingAndNavigate(path) {
  // إظهار شاشة التحميل
  const loadingScreen = document.querySelector(".loading_screen");
  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = "1";
  document.body.style.overflow = "hidden";

  // الحصول على المسار الأساسي للموقع
  const basePath = window.location.pathname.includes("/TrafficViewer")
    ? "/TrafficViewer"
    : "";

  // بعد ثانية واحدة
  setTimeout(() => {
    // الانتقال للصفحة الجديدة
    window.location.href = `${basePath}${path}`;
  }, 1000);
}

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
    }, 500);
  }, 5000);
});

real_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("/Real_Mode/realDesign.html");
});

sim_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("/svg_vs_proj/svgDesign.html");
});
