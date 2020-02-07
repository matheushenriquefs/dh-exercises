let pets = require('./pets.json');

const buscaPorNome = (string, array) => {
    let pets = array.filter(el => el.nome.includes(string));
    return pets;
}

// console.log(buscaPorNome("at", pets));

let somaServicos = pets.reduce((acum, el) =>{
    return acum + el.servicos.length;
},0);

console.log(somaServicos);
