function exer6() {
  // Obtém o valor do campo de entrada (input) com o ID "entrada"
  let entrada = document.querySelector("#entrada").value;

  // Cria um novo elemento <p> (parágrafo)
  let novoParagrafo = document.createElement("p");

  // Cria um novo nó de texto com o valor capturado do campo de entrada
  let texto = document.createTextNode(entrada);

  // Cria o atributo "nomeFornecido"
  let atributo = document.createAttribute("nomeFornecido");

  // Define o valor do atributo como o valor de entrada
  atributo.value = entrada;

  // Adiciona o atributo ao parágrafo
  novoParagrafo.setAttributeNode(atributo);

  // Cria o atributo "title"
  let titleAtributo = document.createAttribute("title");

  // Define o valor do atributo "title" como "Nome fornecido"
  titleAtributo.value = "Nome fornecido";

  // Adiciona o atributo "title" ao parágrafo
  novoParagrafo.setAttributeNode(titleAtributo);

  // Adiciona o nó de texto ao parágrafo
  novoParagrafo.appendChild(texto);

  // Obtém a <div> com o ID "saida"
  let divSaida = document.querySelector("#saida");

  // Adiciona o novo parágrafo como filho da <div> "saida"
  divSaida.appendChild(novoParagrafo);
}
