// A função writeFileSync que vem no pacote File System nos permitirá criar documentos em nosso projeto.

// Vamos testar sua funcionalidade criando um documento chamado "bemvindo.txt" para o qual passaremos o texto "Hello World".

const fs = require('fs');
fs.writeFileSync("bemvindo.txt", "Hello World");