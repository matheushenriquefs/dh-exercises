const pessoa = require("../ex2/models/pessoa");
const cpf = require("../ex2/node_modules/cpf-check");
const http = require("http");

let pessoas = [{nome: "João da Silva", cpf: cpf.generate()}];

let p = pessoa.criarPessoa("Matheus Henrique Felix", cpf.generate());

if(p){
    pessoas.push(p);
    console.log(pessoas);
}

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            res.end("Você está na página inicial");
            break;
        case "/pessoas":
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            res.end(JSON.stringify(pessoas));
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
            res.end("Página não encontrada");
    }
});

server.listen(3000);