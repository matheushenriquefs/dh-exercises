// Queremos que você crie uma rota que utilize o método get e aponte para "/perfil". Deve retornar a variável boasVindas que lhe 
// entregaremos declarada.

const express = require('express');
const app = express();

let boasVindas = "Bem vindo/a, aqui estamos em seu perfil"

app.get("/perfil", (req, res) => {
    res.send(boasVindas);
});
