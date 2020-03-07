// Crie uma rota que aponte para "/serie" e que ela, por sua vez, receba um número. Esse número vai representar a identificação da série 
// que tentamos visualizar. Portanto, a rota deve retornar apenas a série que corresponde ao id que veio pelo parâmetro.

const express = require('express');
const app = express();

app.get("/serie/:id", (req, res) => {
    let {id} = req.params;
    res.send(series[id]);
});