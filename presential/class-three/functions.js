let pets = require('./pets.json');

// transformando strings de data em objetos date

pets = pets.map(pet => {
    pet.nascimento = new Date(pet.nascimento);
    return pet;
});

const servDarBanho = pets.map(pet => {
    console.log("Dando banho em: " + pet.nome);
    pet.servicos.push("banho");
    return pet;
});

const servTosar = pets.map(pet => {
    console.log("Tosando: " + pet.nome);
    pet.servicos.push("tosar");
    return pet;
});

// aplicando a funcao serv vacinar a todos os pets

const servVacinar = pet =>{
    console.log("Vacinando: " + pet.nome);
    if(!pet.vacinado){
        pet.vacinado = true;
        pet.servicos.push("vacina");
    }
    return pet;
};

pets.map(servVacinar);

console.log(pets);
