// Seu trabalho será instanciar um servidor na porta 8000. Queremos que, quando o sevidor inicie, você imprima no console a 
// frase: "Levantando o servidor com Express" . Isso fará com que você tenha certeza de que tudo correu bem.

const express = require('express');
const app = express();

console.log(app);

app.listen(8000, () => {
    console.log("Levantando o servidor com Express");
});
