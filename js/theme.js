const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "/css/light-theme.css") {
        theme.href = "/css/dark-theme.css";
    }
    else {
        theme.href = "/css/light-theme.css";
        }
      });