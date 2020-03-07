// Crie uma rota get para o endereço raíz (/) passando como parâmetro :item. Essa rota deve redirecionar para o método addItem do 
// CarrinhoController

let express = require('express')
let router = express.Router();
let CarrinhoController = require('../controllers/CarrinhoController')

router.get('/:item',CarrinhoController.addItem)

module.exports = router