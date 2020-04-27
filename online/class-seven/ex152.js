// Usando a função body valide o input url. Lembre-se também de concatenar à execução de body o método custom para fazer sua validação.

// Este método recebe uma função com um parâmetro value (que será o valor recebido pelo input url).

// Usando indexOf podemos validar se a url é do tipo https.
// Lembre-se que a função que recebe o método custom deve retornar true ou false.

// Dica: para saber se a url de entrada é do tipo https você pode fazer value.indexOf('https') !== -1

const express = require('express');
const router = express.Router();
const favoritosController = require('../controllers/favoritosController');
const { check, validationResult, body } = require('express-validator');

router.post('/favoritos', [
    body("url").custom(value => {
        if(value.indexOf("https") === -1) return false;
        return true;
    })
],  favoritosController.salvar);