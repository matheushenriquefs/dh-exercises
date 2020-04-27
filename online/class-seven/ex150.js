// Para isso vamos criar uma função chamada "redirecionar", que vai ser usada como middleware e deve receber três parâmetros: req, res e next.

// Dentro da nossa função vamos chamar o método redirect do objeto response e vamos redirecioná-lo para a url '/'. Para este caso em particular, não é necessário chamarmos o callback next, já que a idéia deste redirecionamento é cortar a execução dos possíveis middlewares subsequentes.

// Finalmente só temos que adicionar a função "redirecionar" como segundo parâmetro da rota '/rota-em-desuso'.

const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

const redirecionar = (req, res, next) => {

    res.redirect("/");

};

router.get('/rota-em-desuso', redirecionar(), OldController.index);