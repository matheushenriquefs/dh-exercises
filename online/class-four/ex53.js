const express = require('express');
const app = express();

let boasVindas = "Bem vindo/a, aqui estamos em seu perfil"

app.get("/perfil", (req, res) => {
    res.send(boasVindas);
});