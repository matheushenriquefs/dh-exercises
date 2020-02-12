// São os '...'

// Aplicação em arrays

let array1 = [1, 4, "Sérgio", "Mariana"];
let array2 = ["Casa", 6, 9];
let x = [3, 4, ...array1];
let y = [...array1, 5, 6, 100, ...array2];

// Aplicação em objetos

let fabricante = {
    nome: "Nestlé",
    cnpj: "12.123.123/0001-25"
}

let produto = {
    fabricante: fabricante,
    nome: "KitKat",
    peso: 41.5,
    validade: new Date("2021-10-15")
}

// console.log(produto);

// Aplicação em funcoes

const concatena = (mensagem, ...str) => {
    console.log("Mensagem: " + mensagem);
    return str.join("");
}
