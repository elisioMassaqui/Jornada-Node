//Pegar modulo express
const express = require("express");

//Instancia do servidor
const servidorExpress = express();

//Rotas
servidorExpress.get("/", function (req, res) {
    res.end("Servidor express");
});

servidorExpress.get("/sobre", function (req, res) {
    res.end("Esse servidor foi construido com framework principal de node pra backend");
});

//Usando paramentros
servidorExpress.get('/oi/:nome/:sobrenome', function(req, res){
     res.end(req.params);
});
   

//Melhor que essa linha esteja sempre no final mesmo.
servidorExpress.listen(8081, function(){console.log("Express aberto com sucesso");});