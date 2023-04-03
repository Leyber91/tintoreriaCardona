document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.createElement("span");
    languageToggle.classList.add("language-toggle");
    languageToggle.innerHTML = '<i class="fas fa-globe"></i>';
    document.querySelector(".header-content").appendChild(languageToggle);
  
    languageToggle.addEventListener("click", function () {
      const languageSelector = document.querySelector(".language-selector");
      languageSelector.classList.toggle("shown");
    });
  });
  