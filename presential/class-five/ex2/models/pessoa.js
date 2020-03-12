const criarPessoa = (nome, cpf) => {
    const CPF = require("../node_modules/cpf-check");
    const TAMANHO_MINIMO_NOME = 20;

    if(nome.length <= TAMANHO_MINIMO_NOME){
        throw new Error ("Nome pequeno demais");
        // console.error("Dados inválidos");
    }if(!CPF.validate(cpf)){
        throw new Error ("CPF inválido");
    }else{
        console.log("Dados válidos");
        return {nome, cpf};
    }
}

module.exports = {criarPessoa};