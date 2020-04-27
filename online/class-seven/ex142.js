// Neste exemplo, temos definida a constante hash. Ela guarda dentro dela o valor "123456" criptografado.

// Nosso objetivo é verificar se "123456" corresponde ao valor do hash. Para isso, devemos usar o método compareSync do módulo bcrypt e comparar o resultado dentro de um if. Finalmente, dentro do if vamos executar um console.log que diz 'a senha está correta'.

const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('123456', 10);

if(bcrypt.compareSync("123456", hash)){
    console.log("a senha está correta");
}
