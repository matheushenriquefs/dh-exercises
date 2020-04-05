// Imagine que temos uma página web que mostra produtos. Gostaríamos de poder mostrar a lista de todos os produtos. Por padrão vamos mostrar todos os produtos sem se importar com a sua categoria e vamos ordenar essa lista alfabeticamente segundo o nome do produto. Mas também queremos que o usuário possa filtrar pro categoria e ordenar por outro campo (por exemplo preço). Percebemos que a melhor opção para chegar nesse resultado é uma rota que utilize query string. 

// Cria a rota "/produtos".
// A partir do request recuperar a query string e mostra-la usando o método send do objeto response.

const express = require('express');
const router = express.Router();

router.get("/produtos", (req, res) => {
    res.send(req.query);
});