// O líder técnico em sua área informa que, para atender a esse requisito, você deve modificar a função addItem para receber os parâmetros 
// req e res. Dito isto, o líder técnico se afasta misteriosamente, dizendo que você deve analisar como retornar a mensagem 
// 'Item Adicionado' utilizando os dois parâmetros: req e res.

let CarrinhoController = {
    removeItem: function(){},
    getItem: function(){},
    addItem: function(req, res){
       res.send("Item Adicionado");
    }
};
 
module.exports = CarrinhoController;