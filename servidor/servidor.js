var servidor = require('http');

servidor.createServer(function(req, res) {
    res.end("Eai Servidor");
}).listen(8081);

console.log("Servidor rodando");