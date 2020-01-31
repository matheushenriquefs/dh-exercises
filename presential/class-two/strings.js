// Definição
let str = "Adoro minha família!";

// Substituir a palavra "familia" por "esposa"
str = str.replace("família", "esposa");

console.log(str);

// indexOf
// Determina a posicao da primeira ocorrencia de um trecho
console.log(str.indexOf("o"));

// Slice
// retorna a cadeia de caracteres entre a posicao definida pelo primeiro parametro e a pos def pelo
// seg parametro
console.log(str.slice(2));

const primeiroNome = nomeCompleto =>{
    if(typeof nomeCompleto !== "string"){
        return "Insira um nome válido";
    }else{
        nomeCompleto = nomeCompleto.trim().split(" ");
        return nomeCompleto[0];
    }
}
