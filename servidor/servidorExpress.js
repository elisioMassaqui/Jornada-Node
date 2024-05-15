const express = require("express");

const servidorExpress = express();

servidorExpress.get("/", function (req, res) {
    res.end("Servidor express");
}).listen(8081);

console.log("servidorExpress aberto");