function exer5() {
  // Obtém o valor do campo de entrada (input) com o ID "entrada"
  let entrada = document.querySelector("#entrada").value;

  // Cria um novo elemento <p> (parágrafo)
  let novoParagrafo = document.createElement("p");

  // Cria um novo nó de texto com o valor capturado do campo de entrada
  let texto = document.createTextNode(entrada);

  // Cria um atributo "nomeFornecido"
  let atributo = document.createAttribute("nomeFornecido");

  // Define o valor do atributo como o valor de entrada
  atributo.value = entrada;

  // Adiciona o atributo ao parágrafo
  novoParagrafo.setAttributeNode(atributo);

  // Adiciona o nó de texto ao parágrafo
  novoParagrafo.appendChild(texto);

  // Obtém a <div> com o ID "saida"
  let divSaida = document.querySelector("#saida");

  // Adiciona o novo parágrafo como filho da <div> "saida"
  divSaida.appendChild(novoParagrafo);
}
