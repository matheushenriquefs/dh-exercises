// Declare a string "Olá, sou Carlos!" e depois recorte a mesma para poder obter o nome "Carlos" em uma nova variável chamada 
// nomeUsuario. IMPORTANTE: Para a resolução funcionar, lembre-se de usar a slice().

const STRING = "Olá, sou Carlos!";
const POS = STRING.indexOf("C");
const POS2 = STRING.indexOf("!");
let nomeUsuario = STRING.slice(POS, POS2);

console.log(nomeUsuario);