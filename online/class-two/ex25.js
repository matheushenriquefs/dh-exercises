// criar uma função chamada menciona que receberá dois parâmetros: um texto que é onde vamos a buscar, e uma palavra que vamos a 
// averiguar se é mencionada no texto . A mesma função retorna true em caso de encontrar a palavra.

function menciona(texto, palavra){
    if(texto.indexOf(palavra) > -1){
        return true;
    }
    return false;
}