function exer9() {
  // Obtém o valor do campo de entrada (input) com o ID "entrada"
  let entrada = document.querySelector("#entrada").value;

  // Verifica se foi fornecido algum texto no campo de entrada
  if (entrada.length > 0) {
    // Cria um novo elemento <li>
    let novoItem = document.createElement("li");

    // Cria um novo nó de texto com o valor capturado do campo de entrada
    let texto = document.createTextNode(entrada);

    // Cria o atributo "nomeFornecido"
    let atributo = document.createAttribute("nomeFornecido");

    // Define o valor do atributo como o valor de entrada
    atributo.value = entrada;

    // Adiciona o atributo ao <li>
    novoItem.setAttributeNode(atributo);

    // Cria o atributo "title"
    let titleAtributo = document.createAttribute("title");

    // Define o valor do atributo "title" com o mesmo da entrada
    titleAtributo.value = entrada;

    // Adiciona o atributo "title" ao <li>
    novoItem.setAttributeNode(titleAtributo);

    // Adiciona o nó de texto ao <li>
    novoItem.appendChild(texto);

    // Obtém a <ol> com o ID "saida"
    let listaSaida = document.querySelector("#saida");

    // Adiciona o novo item como filho da <ol> "saida"
    listaSaida.appendChild(novoItem);

    // Atualiza o total de itens na lista
    let itens = document.querySelectorAll("#saida li");
    document.querySelector("#total").innerText = itens.length;
  } else {
    console.log("Necessário adicionar algum caractere");
  }
}
