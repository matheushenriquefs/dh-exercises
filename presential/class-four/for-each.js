// exemplo de uso do for each

let nomes = ["Leonardo", "Michelângelo", "Rafael", "Donatelo"];

const imprimeNome = (nome, pos, array) => {
    console.log("Meu nome é " + nome + " e eu adoro programar");
    console.log("Estou na posição " + pos);
    console.log("Meu array inteiro é " + array);
};

let x = nomes.forEach(imprimeNome);
