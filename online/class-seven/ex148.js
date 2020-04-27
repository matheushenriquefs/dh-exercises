// Para este exemplo já temos a configuração do multer pronto, mas precisamos adicionar o middleware no caminho "upload-file".
// Para isso, teremos que passar como segundo parâmetro o arquivo de rota de upload do middleware upload.any().

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/upload-file', upload.any(), fileController.upload);