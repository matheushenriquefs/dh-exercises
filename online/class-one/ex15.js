// Complete a função podePassar para que, analisando o nome que recebe por parâmetro, determine se a pessoa pode passar ou não. 
// Se o nome da pessoa for "Natalia" não a deixará passar e a indicará retornando false, se o nome da pessoa for diferente a deixará 
// passar e a indicará retornando true.

function podePassar(pessoa){
    if(pessoa === "Natalia"){
        return false;
    }else{
        return true;
    }
}