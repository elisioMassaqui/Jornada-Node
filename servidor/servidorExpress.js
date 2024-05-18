//Pegar modulo express
const express = require("express");

//Instancia do servidor
const servidorExpress = express();

//Rotas
servidorExpress.get("/", function (req, res) {
    res.send("Servidofhgfrrrr express");
});

servidorExpress.get("/sobre", function (req, res) {
    res.send("Esse servidor foi construido com framework principal de node pra backend");
});

//Usando paramentros Atraves do object req podemos obter dados da requisição que foi feita, inclusive parametros.
servidorExpress.get("/oi/:nome/:sobrenome", function(req, res){
     res.send("Eai parametros + req.params: " + req.params.nome);
})
   

//Melhor que essa linha esteja sempre no final mesmo.
servidorExpress.listen(8081, function(){console.log("Express aberto com sucesso");});