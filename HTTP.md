# 🌐 Protocolo HTTP

***HTTP*** (HyperText Transfer Protocol) é o protocolo de comunicação usado para a transferência de informações na web. Ele define como as mensagens são formatadas e transmitidas, e como os servidores e navegadores devem responder a vários comandos.

🔍 Componentes Básicos do HTTP
***URL*** (Uniform Resource Locator): O endereço usado para acessar recursos na web.
Métodos de Requisição HTTP: Indicativos do tipo de ação a ser realizada para um recurso específico.
Status Codes: Códigos numéricos que indicam o resultado da requisição.
📬 Métodos de Requisição HTTP
Aqui estão os métodos mais comuns usados no HTTP:

GET: Solicita um recurso sem alterar seu estado.
POST: Envia dados ao servidor para criar um novo recurso.
PUT: Atualiza um recurso existente com dados enviados.
DELETE: Remove um recurso específico.
PATCH: Aplica modificações parciais a um recurso.
📡 Estrutura de uma Requisição HTTP
Uma requisição HTTP consiste em:

Linha de Requisição: Contém o método HTTP, o caminho do recurso, e a versão do protocolo.
Cabeçalhos (Headers): Metadados da requisição, como tipo de conteúdo e informações de autenticação.
Corpo da Requisição (Body): Dados enviados no caso de métodos como POST e PUT.
Exemplo de uma requisição GET:

```bash
GET /index.html HTTP/1.1
Host: www.exemplo.com
User-Agent: Mozilla/5.0
Accept: text/html
```

🔄 Estrutura de uma Resposta HTTP
Uma resposta HTTP consiste em:

Linha de Status: Inclui a versão do protocolo, um código de status, e uma mensagem de status.
Cabeçalhos (Headers): Informações sobre a resposta, como tipo de conteúdo e tamanho.
Corpo da Resposta (Body): Os dados solicitados.
Exemplo de uma resposta HTTP:

HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 137

```http
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>
```

📊 Códigos de Status HTTP
Os códigos de status HTTP indicam o resultado da requisição:

```bash
1xx: Informacional
100 Continue
2xx: Sucesso
200 OK
201 Created
3xx: Redirecionamento
301 Moved Permanently
302 Found
4xx: Erro do Cliente
400 Bad Request
404 Not Found
5xx: Erro do Servidor
500 Internal Server Error
503 Service Unavailable
```

🛠️ Exemplo de Implementação com Node.js e Express
Aqui está como você pode lidar com requisições HTTP usando Express:

```javascript

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 🌍');
});

app.post('/submit', (req, res) => {
  res.send('Dados recebidos! 📩');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
```

📚 Leitura Adicional
Para mais detalhes sobre o protocolo HTTP, consulte a documentação oficial do MDN
