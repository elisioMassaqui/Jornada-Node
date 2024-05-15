const express = require("express");

const servidorExpress = express();

servidorExpress.get("/", function (req, res) {
    res.end("Servidor express");
}).listen(8081);;

servidorExpress.get("/sobre", function (req, res) {
    res.end("Esse servidor foi construido com framework principal de node pra backend");
});

console.log("servidorExpress aberto");