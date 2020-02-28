// Agora, execute o método necessário para por o servidor escutando a porta 3000 no domínio "localhost"

const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");
}).listen(3000, "localhost");
