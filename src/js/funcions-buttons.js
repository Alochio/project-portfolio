var buttonGit = document.querySelectorAll(".github");
var buttonLinkedin = document.querySelectorAll(".linkedin");

buttonGit.forEach(function (botao) {
  botao.addEventListener("click", function () {
    window.open("https://github.com/Alochio", "_blank");
  });
});

buttonLinkedin.forEach(function (botao) {
    botao.addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/vinicius-alochio/", "_blank");
    });
  });
  