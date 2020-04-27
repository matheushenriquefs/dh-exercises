// Já temos nossa aplicação quase pronta. Fomos adicionando rotas e chamando-as com app.use(). Nos faltaria adicionar código para os casos em que o usuário entre por url em uma secção que não existe, em outras palavras, que não tenha uma rota definida para esse endereço.

// Para isso vamos configurar uma nova linha no final do nosso código onde usamos app.use(). Esse método use vai receber um callback o qual terá três parâmetros: req,res e next. Dentro deste callback vamos usar o parâmetro res para retornar o status 404 e mostrar uma nova view chamada "not-found"

const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res, next) => {
    res.status(404).render("not-found");
});

app.use(router);