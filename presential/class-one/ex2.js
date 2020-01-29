// sistema petshop

const NOME_PETSHOP = "Petshop DH";
let nome = "Malu";
let idade = 3;
let raca = "Shih-Tzu";
let vacinado = true;
let servicos = ["banho", "tosa"];

let caes = [{
    nome: "Malu",
    idade: 3,
    raca: "Shih-Tzu",
    vacinado: true,
    servicos: ["banho", "tosa"]
},
{
    nome: "Batman",
    idade: 5,
    raca: "Doberman",
    vacinado: true,
    servicos: ["banho", "tosa"]
},
{
    nome: "SuperMan",
    idade: 4,
    raca: "Pastor Alemão",
    vacinado: false,
    servicos: ["banho", "tosa"]
}]

function eVacinado(cao){
    let result = cao.vacinado ? true: false;
    return result;
}

function adicionarCao(arrayObj, nome, idade, raca, vacinado, servicos){
    arrayObj.push({
        nome: nome,
        idade: idade,
        raca: raca,
        vacinado: vacinado,
        servicos: servicos
    });
}

adicionarCao(caes, "Lanterna Verde", 8, "Pitbull", true, ["banho", "tosa"]);

function listarCaesVacinados(arrayObj){
    for(let i = 0; i < arrayObj.length; i++){
        if(arrayObj[i].vacinado){
            console.log(arrayObj[i].nome + " é vacinado(a)");
        }
    }
}
