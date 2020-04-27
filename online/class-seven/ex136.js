// Temos um arquivo chamado "pendente.txt" com uma lista de tarefas.

// O objetivo é adicionar a tarefa "aprender Node" à lista sem excluir o conteúdo atual.

const express = require('express');
const fs = require('fs');

fs.appendFileSync("pendente.txt", "aprender Node");