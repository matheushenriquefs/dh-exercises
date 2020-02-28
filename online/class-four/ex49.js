const express = require('express');
const app = express();

console.log(app);

app.listen(8000, () => {
    console.log("Levantando o servidor com Express");
});