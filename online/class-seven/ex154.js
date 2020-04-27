// Neste exercício você terá que fazer um require de "express-session" e guardá-la na constante session.

// Desta forma, você precisa inicializar o middleware session: session({secret: "frase secreta"})

const express = require('express');
const session = require("express-session");
const app = express();

app.use(session({secret: "frase secreta"}));
