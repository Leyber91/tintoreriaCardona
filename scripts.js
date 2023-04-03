document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.addEventListener("click", function () {
      const languageSelector = document.querySelector(".navbar-collapse");
      languageSelector.classList.toggle("show");
    });
  });
  