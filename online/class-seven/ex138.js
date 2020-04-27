// Temos um arquivo chamado produtos.json que possui um bloco de texto com um json de produtos.

// Usando readFileSync armazene o conteúdo de produtos.json em uma constante chamada produtos e mostre-a com um console.log

// Não se esqueça de que o json dentro do arquivo está em formato de  bloco de texto, portanto pode ser necessário utilizar JSON.parse para convertê-lo em objeto.

const fs = require('fs');

const produtos = JSON.parse(fs.readFileSync("produtos.json", {encoding: "utf-8"}));
console.log(produtos);