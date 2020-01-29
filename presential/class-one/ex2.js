// sistema petshop

const NOME_PETSHOP = "Petshop DH";
// console.log(NOME_PETSHOP);
let nome = "Malu";
let idade = 3;
let raca = "Shih-Tzu";
let vacinado = true;
let servicos = ["banho", "tosa"];
// console.log(nome, idade, raca, vacinado, servicos);

let cachorro = {
    nome: "Malu",
    idade: 3,
    raca: "Shih-Tzu",
    vacinado: true,
    servicos: ["banho", "tosa"]
}

// console.log(cachorro);

function eVacinado(){
    let result = cachorro.vacinado ? "É vacinado": "Não é vacinado";
    return result;
}
console.log(eVacinado());
