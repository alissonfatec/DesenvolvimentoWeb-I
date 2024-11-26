function exer4() {
  // Obtém o valor do campo de entrada (input) com o ID "entrada"
  entrada = document.querySelector("#entrada").value;

  // Cria um novo elemento <p> (parágrafo)
  novoParagrafo = document.createElement("p");

  // Cria um novo nó de texto com o valor capturado do campo de entrada
  texto = document.createTextNode("Alisson");

  // Adiciona o nó de texto ao parágrafo
  novoParagrafo.appendChild(texto);

  // Obtém a <div> com o ID "saida"
  divSaida = document.querySelector("#saida");

  // Adiciona o novo parágrafo como filho da <div> "saida"
  divSaida.appendChild(novoParagrafo);
}
