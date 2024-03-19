var temaAtual = "light";

function alterarTema() {
  var link = document.getElementById("theme-link");

  if (temaAtual === "light") {
    link.href = "./src/css/themes/dark-theme.css";
    temaAtual = "dark";
  } else {
    link.href = "./src/css/themes/light-theme.css";
    temaAtual = "light";
  }
}