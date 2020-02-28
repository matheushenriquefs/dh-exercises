// Para este exercício usaremos a variável produto (que já foi declarada). Queremos que: à propriedade tipoProduto seja atribuída a string 
// "living", à preco o número 1245 e à quantidade o número 300. Por último, pedimos que crie uma rota que aponte para o endereço 
// "/produto/criar". Esta rota deverá enviar a variável produto que armazena o nome produto criado acima.

const express = require('express');
const app = express();

let produto = {
  tipoProduto: "living",
  preco: 1245,
  quantidade: 300
}

app.post("/produto/criar", (req, res) => {
    res.send(produto);
});