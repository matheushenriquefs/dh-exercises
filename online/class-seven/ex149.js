// Nosso objetivo será criar uma função chamada visitasMiddleware que recebe como parâmetros req, res e next. Dentro desta função vamos executar o método contarAcesso de estatisticasController, e vamos passar o objeto pedido como parâmetro para o método: estatisticasController.contarAcesso(req). No final da nossa função vamos executar o callback next().

// Por fim, vamos adicionar nossa função "visitasMiddleware" como o segundo parâmetro da rota '/home' que já está definida no código.

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estatisticasController = require('../controllers/estatisticasController');

const visitasMiddleware = (req, res, next) => {
    estatisticasController.contarAcesso(req);
    next();
};

router.get('/home', visitasMiddleware(), homeController.index);