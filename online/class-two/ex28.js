// Criaremos quatro funções que executarão as principais operações de uma calculadora: seu trabalho será definir as funções somar, 
// subtrair, multiplicar e dividir. Cada uma delas receberá dois parâmetros e deve executar a operação matemática correspondente. 
// Por exemplo, a função somar deve retornar a soma de ambos os parâmetros, a função subtrair a subtração de ambos os parâmetros e 
// assim por diante
// criaremos a função calculadora. Esta função receberá dois parâmetros numéricos e o nome de uma função, que será nosso callback.

function somar(num, num2){
    return num + num2;
}

function subtrair(num, num2){
    return num - num2;
}

function multiplicar(num, num2){
    return num * num2;
}

function dividir(num, num2){
    return num / num2;
}

function calculadora(num, num2, callback){
    return callback(num, num2);
}