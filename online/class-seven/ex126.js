// Dado o seguinte array com produtos, você deve criar uma rota "/celular" do tipo DELETE que receba um id e elimine um produto. Deveremos criar uma rota para os casos celular/1, celular/2, etc.

// Para apagar o produto do array podemos usar a função filter igualando o array celulares a celulares.filter donde dentro do método retornamos todos os produtos que não coincidam com o id passado por parâmetro.

// Se te for mais prático fazer de outra maneira, vá em frente! O importante é que o produto com o id passado por parâmetro seja removido do array celulares.

let celulares = [
    {
        id: 1,
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        id: 2,
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        id: 3,
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        id: 4,
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

const express = require('express');
const router = express.Router();

router.delete("/celulares/:id", (req, res) => {

    celulares = celulares.filter(el => el.id !== req.params.id);
    res.send(celulares);

});


