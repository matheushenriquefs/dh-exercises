// A primeira função deverá se chamar adicionarHttp , a mesma, receberá por parâmetro uma URL que será concatenada com a String 
// "http://" no começo da URL e em seguida retornará esse valor. A segunda função se chamará processar  e receberá uma lista de 
// sites web e uma função. A função processar retornará um array contendo todos os resultados aplicando a função que foi passada.

function adicionarHttp(url){
    const http = "http://";
    return http.concat(url);
}

function processar(sites, callback){
    let sitesProcessados =  sites.map(site => callback(site));
    return sitesProcessados;
}

console.log(processar(["www.google.com", "www.facebook.com", "www.youtube.com"], adicionarHttp));