// Temos um filme armazenado no arquivo filme.json.

// Usando readFileSync armazene o conteúdo de filme.json em uma variável chamada filme.

// Converta o valor da variável filme em um json usando JSON.parse

// Por fim faça um console.log para mostrar somente o atributo titulo do filme.

const fs = require('fs');
let filme = JSON.parse(fs.readFileSync("filme.json", {encoding: "utf-8"}));
console.log(filme.titulo);