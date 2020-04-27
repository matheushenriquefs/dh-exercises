// Na constante logo temos armazenada a rota completa para uma imagem.

// Temos que declarar uma constante chamada diretorio e atribuir o caminho definido na constante logo, sem o nome do arquivo.

// Para isso, vamos usar o método dirname do módulo path.

const path = require('path');
const logo = '/assets/images/logo.png';
const diretorio = path.dirname(logo);