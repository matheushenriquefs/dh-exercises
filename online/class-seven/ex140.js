// Vamos experimentar o funcionamento do módulo hash. A ideia é, dado uma constante que tenha como valor uma senha, aplicar o método hashSync para a encriptar.

// Primeiro você deve declarar a constante bcrypt e iniciá-la com o require do módulo bcrypt.

// Criar uma nova constante chamada hash e atribuir o resultado da aplicação do método hashSync a senha.

// Por fim, devemos fazer um console.log para mostrar o valor da constante hash.

const bcrypt = require("bcrypt");
const password = '123456';
const hash = bcrypt.hashSync(password, 10);
console.log(hash);