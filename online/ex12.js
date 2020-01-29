// Escreva as três funções a seguir:
// anterior: recebe um número como parâmetro e retorna esse número menos um.
// triplo: recibe um número como parâmetro e devolve o triplo desse número.
// anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, você terá que retornar o número, 
// recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).

function anterior(num){
    return num - 1;
}

function triplo(num){
    return num * 3;
}

function anteriorDoTriplo(num){
    return anterior(triplo(num));
}