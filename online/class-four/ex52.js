// Seu trabalho será, utilizando o método GET, criar uma rota para "/home" que devolva a frase "Olá, estamos na página home". 

const express = require('express');
const app = express();

app.get("/home", (req, res) => {
    res.send("Olá, estamos na página home");
});
