# Servidor HTTP Simples em Node.js

Este é um exemplo simples de um servidor HTTP escrito em Node.js que responde com uma mensagem.

## Uso

1. Instale o Node.js em sua máquina.
2. Clone este repositório.
3. No terminal, navegue até o diretório clonado.
4. Execute `node serividor.js`.
5. Abra o navegador e visite `http://localhost:8081/`.

## Código

```javascript
const servidor = require('http');

// 🛠️ Criando um servidor HTTP
servidor.createServer(function(req, res) {
    // 📡 Responde com a mensagem "Eai Servidor" para qualquer solicitação
    res.end("Eai Servidor");
}).listen(8081); // 🌐 O servidor está ouvindo na porta 8081

console.log("Servidor rodando"); // 🚀 Log para indicar que o servidor está rodando
```

```javascript
const servidor = require('http'); //Define uma constante chamada servidor.

require('http'); //Importa o módulo http do Node.js, que fornece funcionalidades para criar servidores HTTP.
```

```javascript
servidor.createServer: //Invoca o método createServer do módulo http, que cria um servidor HTTP.

function(req, res) { ... }; //Define uma função de callback que será chamada sempre que o servidor receber uma requisição. req é um objeto que representa a requisição HTTP recebida, e res é um objeto que representa a resposta que será enviada de volta ao cliente.
```

```javascript
res.end("Eai Servidor"); //Termina a resposta e envia a string "Eai Servidor" de volta ao cliente como resposta à requisição. Este é um exemplo simples de resposta; em um servidor real, você pode enviar HTML, JSON, arquivos etc.
```

```javascript
}).listen(8081); // Chama o método listen para fazer o servidor ouvir na porta 8081. Isso significa que o servidor estará disponível para receber requisições HTTP na porta 8081 do host em que está sendo executado.
```

```javascript
console.log("Servidor rodando"); //Imprime a mensagem "Servidor rodando" no console. Isso é útil para saber se o servidor foi iniciado com sucesso e está pronto para receber requisições.
```

Essas linhas de código formam um servidor HTTP simples em Node.js, capaz de receber requisições e enviar respostas para clientes que se conectam a ele. O conceito fundamental é a interação entre requisições e respostas, e o uso do módulo http do Node.js facilita a implementação desse comportamento em JavaScript.
