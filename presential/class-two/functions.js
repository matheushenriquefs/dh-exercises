let pets = require('./pets.json');
console.log(pets);

const servDarBanho = pets.map(pet => {
    console.log("Dando banho em: " + pet.nome);
    pet.servicos.push("banho");
    return pet;
});
console.log(servDarBanho);

const servTosar = pets.map(pet => {
    console.log("Tosando: " + pet.nome);
    pet.servicos.push("tosar");
    return pet;
});
console.log(servTosar);

const servVacinar = pets.map(pet =>{
    console.log("Vacinando: " + pet.nome);
    if(pet.vacinado !== true){
        pet.vacinado = true;
    }else{
        pet.servicos.push("vacina");
    }
    return pet;
});
console.log(servVacinar);
