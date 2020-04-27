// No site a seguir, configuramos a rota para criar produtos. A rota é "/criar-produto" do tipo POST. Também já temos um produto predefinido, mas com atributos nome e preço nulos.

// Teremos que receber as informações fornecidas pelo POST, definir os atributos do produto (nome e preço) e, finalmente, salvá-las em um arquivo chamado "produto.json".

const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();

var produto = {
    nome: null,
    preco: null,
};

router.post('/criar-produto', (req, res) => {
    
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    fs.writeFileSync("produto.json", JSON.stringify(produto));

});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.listen(3000);