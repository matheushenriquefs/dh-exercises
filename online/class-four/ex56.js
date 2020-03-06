// Temos uma lista de muitas séries armazenadas na variável series. O seu trabalho será criar um caminho que aponte para o endereço 
// "/series" e devolva todas elas.

const express = require('express');
const app = express();

app.get("/series", (req, res) => {
    res.send(series);
});