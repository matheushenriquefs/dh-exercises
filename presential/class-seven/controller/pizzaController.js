let pizza = [
    {
        nome: "Peperoni", 
        ingredientes: ["Peperoni", "Queijo", "Orégano"],
        valor: 50,
        tamanho: "Grande"
    },
    {
        nome: "Margherita", 
        ingredientes: ["Queijo", "Tomate", "Manjericão", "Orégano"],
        valor: 50,
        tamanho: "Grande"
    }
];

const listarPizzas = (req, res) => {
    return res.send(pizza);
}

const mostrarPizza = (req, res) => {
    let {id} = req.params;
    return res.send(pizza[id]);
}

module.exports = {listarPizzas, mostrarPizza};