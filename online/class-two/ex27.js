// A primeira função se chamará dobro que receberá um número e retornará o dobro.
// A segunda função se chamará triplo que recebera um número e retornará o triplo.
// A terceira função será chamada de aplicar e receberá um valor e o nome de uma função como parâmetro. Ela retornará o valor da 
// aplicação da referida função ao valor recebido.

function dobro(num){
    return num * 2;
}
function triplo(num){
    return num * 3;
}
function aplicar(num, callback){
    return callback(num);
}
