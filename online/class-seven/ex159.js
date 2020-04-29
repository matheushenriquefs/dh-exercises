/*Anteriormente no sistema contido deste exercício, era armazenado no navegador do usuário um cookie chamado "preferências". Agora, a partir do controller, queremos mostrar uma lista de produtos recomendados de acordo com as preferências do usuário.

Para atingir este objetivo, vamos recuperar o valor do cookie "preferências" e armazená-lo numa constante chamada também de "preferências".

A partir do valor recuperado traremos todos os produtos de listaDeProdutos cuja key corresponde a este valor. Nós armazenamos os produtos em uma constante chamada "produtos".

E por fim, passamos ao método render a constante produtos.*/


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listaDeProdutos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	camisetas: [
		"camisa de retalhos",
		"camisa bordada",
	]
}

const recomendados = (req, res) => {

    const preferencias = req.cookie.preferencias;
    let key;

    for(x in listaDeProdutos){
    
        if(x === preferencias){
    
            key = x;
    
        }
        
    }

    let produtos = JSON.stringify(listaDeProdutos[key]);
    //let produtos = listaDeProdutos[key].join(", ");

	res.render({produtos: produtos});
}