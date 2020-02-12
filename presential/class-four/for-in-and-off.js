let produto = {
    empresa: "Nestlé",
    cnpj: "12.123.123/0001-25",
    nome: "KitKat",
    peso: 41.5,
    validade: new Date("2021-10-15")
}

for(let campo in produto){
    console.log(`${campo}: ${produto[campo]}`);
}

let produto2 = ["Nestlé", "12.123.123/0001-25", "KitKat", 41.5, "2021-10-15"];

// for(let value in produto2){
//     console.log(produto2[value]);
// }
