// Para começar, queremos que você crie a variável produto. Ela deve armazenar um objeto com as seguintes propriedades: tipoProduto, preço, 
// quantidade, onde cada uma delas deve ter o valor null, já que, no momento, não temos nenhum dado. Por último, queremos que você crie uma 
// rota que utilize o método get e aponte para a rota "/produtos/adicionar". Isto deve retornar a variável do produto que você criou.

const express = require('express');
const app = express();

let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
}

app.get("/produto/adicionar", (req, res) => {
    res.send(produto);
});