// Para este exercício, oferecemos a função tabelaDeMultiplicacao já definida, que recebe um número como 
// parâmetro. Queremos que a função mostre a tabela de multiplicação de 1 a 10 do número que recebe 
// quando a função é executada.

const NUMERO_DE_REPETICOES = 10;
function tabelaDeMultiplicacao(numero){
    let i = 0;
    while(i <= NUMERO_DE_REPETICOES){
        let result;
        result = numero * i;
        console.log(numero + " * " + i + " = " + result);
        result = 0;
        i++;
    }
}
