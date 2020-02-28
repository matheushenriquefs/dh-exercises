// Seu trabalho aqui será instanciar um servidor na porta 8000. Por sua vez, queremos que a frase "Levantando um servidor com 
// Express" seja exibida no console quando o servidor estiver rodando, para verificar se foi configurado corretamente.

const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log("Levantando um servidor com Express");
});
