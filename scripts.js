document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.addEventListener("click", function () {
      const languageSelector = document.querySelector(".navbar-collapse");
      languageSelector.classList.toggle("show");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.querySelector(".mobile-toggle");
    mobileToggle.addEventListener("click", function () {
      const languageSelector = document.querySelector(".language-selector");
      languageSelector.classList.toggle("shown");
    });
  });
  