// Para conseguir isso, vamos requerer o módulo de express-validator e usando o destructuring vamos inicializar três constantes: check, validationResult e body.

// Em nossa rota, vamos adicionar como segundo parâmetro um array. Ele terá apenas duas posições, uma para validar a entrada de dados no input "email" e outra para validar a entrada em "password".

// Em cada posição do array vamos usar a função check passando como parâmetro o input a ser validado e vamos concatenar à execução desta função uma segunda função que será a regra que queremos que nosso input atenda, por exemplo é isEmail.

const express = require('express');
const {check, validationResult, body} = require("express-validator");
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.post('/cadastro', [

    check("email").isEmail(),
    check("password").isLength({min: 6}),

], UsuarioController.registro);
