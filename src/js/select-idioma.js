let idiomaAtual = "pt-br"; // Defina o idioma padrão

function alterarIdioma() {
  const elementos = document.querySelectorAll(".idioma"); // Seleciona todos os elementos com a classe 'idioma'

  // Para cada elemento, troque o conteúdo com base no idioma atual
  elementos.forEach((elemento) => {
    if (idiomaAtual === "pt-br") {
      elemento.innerText = elemento.getAttribute("data-en"); // Troque para o inglês
    } else {
      elemento.innerText = elemento.getAttribute("data-pt"); // Troque para o português
    }
  });

  // Alterne o idioma atual
  idiomaAtual = idiomaAtual === "pt-br" ? "en" : "pt-br";
}