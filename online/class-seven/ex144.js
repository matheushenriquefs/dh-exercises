// No Node, para fazer upload de arquivos, podemos usar ferramentas como multer. É simplesmente necessário adicioná-lo ao arquivo de rota onde nossa rota ou rotas são responsáveis ​​pelo upload de arquivos (imagens, documentos, etc.).

// Neste exemplo, adicionaremos multer ao arquivo de routes user.js para permitir que os usuários anexem uma imagem durante o registro.

// Para isso, será necessário requisitar o módulo multer, criar o armazenamento, inicializar a variável de upload e adicionar a rota que já temos definidas a expressão upload.any() como segundo parâmetro.

// Para ver a configuração que a multer precisa para funcionar, consulte a documentação oficial: https://www.npmjs.com/package/multer#diskstorage.

const express = require('express');
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

router.post('/register', upload.any(), usersController.save);