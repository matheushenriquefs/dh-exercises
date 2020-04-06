// Para recuperar a informação em rotas com o método POST utilizamos o atributo body do objeto request.
// Vamos criar uma rota do tipo POST chamada "/ver-body" onde, através do método send, mostraremos no navegador o conteúdo do atributo body.

// Primeiro temos que criar a constante router e atribuir o objeto Router do express.
// Para criar a ruta vamos utilizar o método post do objeto router.

const express = require('express');
const app = express();
const router = app.Router();

router.post("/ver-body", (req, res) => {
    res.send(req.body);
});