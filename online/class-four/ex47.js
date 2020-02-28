const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");
}).listen(3000, "localhost");