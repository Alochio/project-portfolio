var temaAtual = "light"; // Inicialmente, o tema é 'light'

function alterarTema() {
  console.log("entrei aqui");
  var link = document.getElementById("theme-link");

  // Verifica o tema atual e alterna para o tema oposto
  if (temaAtual === "light") {
    link.href = "./src/css/themes/dark-theme.css"; // Muda para o tema escuro
    temaAtual = "dark"; // Atualiza o tema atual
  } else {
    link.href = "./src/css/themes/light-theme.css"; // Muda para o tema claro
    temaAtual = "light"; // Atualiza o tema atual
  }
}
