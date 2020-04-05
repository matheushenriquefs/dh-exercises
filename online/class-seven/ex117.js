// Vamos criar nossa primeira rota com express. Para isso, crie a constante chamada express e faça um require do módulo express.

// Em seguida, crie uma constante chamada router e atribua a mesma a inicialização da função Router do express.

// Finalmente, usando a constante router cria uma rota "/filmes" que responda ao método GET.

// Para checar se tudo está funcionado faça com que a rota retorne como resposta "Lista de filmes"

const express = require("express");
const router = express.Router();

router.get("/filmes", (req, res) => {
    res.send("Lista de filmes");
});
