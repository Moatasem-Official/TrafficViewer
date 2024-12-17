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

real_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("../Real_Mode/index.html");
});

sim_mode_btn.addEventListener("click", () => {
  showLoadingAndNavigate("../svg_vs_proj/index.html");
});