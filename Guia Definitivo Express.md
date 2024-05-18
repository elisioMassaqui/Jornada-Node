# 🚀 Introdução ao Express

Express é um framework web minimalista e flexível para Node.js, que fornece um robusto conjunto de funcionalidades para aplicativos web e móveis.

📦 Instalação
Para começar a usar o Express, você precisa ter o Node.js instalado. Depois, pode instalar o Express via npm:

```bash
npm install express
```

🛠️ Configuração Básica
Aqui está um exemplo básico de como configurar um servidor Express:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 🌍');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
```

Passo a Passo
Importar o Express: Primeiro, importamos o módulo Express.
Criar uma instância do app: Usamos express() para criar uma instância do aplicativo.
Definir uma rota: Usamos app.get() para definir uma rota que responde com "Hello World!".
Iniciar o servidor: Usamos app.listen() para fazer o servidor ouvir em uma porta específica.

🌈 Roteamento
Roteamento refere-se a determinar como um aplicativo responde a uma solicitação de cliente para um endpoint específico.

Exemplo de Roteamento

```javascript
app.get('/about', (req, res) => {
  res.send('Sobre nós 🏢');
});

app.post('/submit', (req, res) => {
  res.send('Formulário enviado! 📩');
});
```

Métodos Comuns

```js
app.get(): Rota para solicitações GET.
app.post(): Rota para solicitações POST.
app.put(): Rota para solicitações PUT.
app.delete(): Rota para solicitações DELETE.
```

🗂️ Middleware
Middleware são funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função middleware no ciclo de solicitação/resposta.

Exemplo de Middleware

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passa para o próximo middleware
};

app.use(logger);
```

📚 Exemplo Completo
Aqui está um exemplo completo combinando tudo o que vimos até agora:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Express! 🏠');
});

// Outra rota
app.get('/about', (req, res) => {
  res.send('Página Sobre Nós 📝');
});

// Rota de formulário
app.post('/submit', (req, res) => {
  res.send('Formulário enviado com sucesso! 🎉');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
```

📖 Documentação Adicional
Para mais detalhes e funcionalidades avançadas, visite a documentação oficial do Express.
