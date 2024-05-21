# 📦 Módulos do Node.js

Node.js utiliza um sistema de módulos para organizar o código. Módulos permitem que você divida sua aplicação em partes menores e reutilizáveis. Node.js vem com um conjunto de módulos internos, e você também pode criar seus próprios módulos ou usar módulos de terceiros via npm (Node Package Manager).

🌟 Módulos Internos
Node.js inclui vários módulos internos que fornecem funcionalidades essenciais. Alguns dos módulos mais utilizados são:

http: Criação de servidores HTTP.
fs: Manipulação de arquivos do sistema.
path: Manipulação de caminhos de arquivos e diretórios.
os: Informações sobre o sistema operacional.
Exemplo usando o módulo fs:

```javascript
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

📚 Módulos de Terceiros
Para instalar módulos de terceiros, usamos o npm. Por exemplo, para instalar o Express, você pode executar:

```bash
npm install express
```

Depois, você pode usar o módulo instalado em seu código:

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

✨ Criando Seus Próprios Módulos
Você pode criar seus próprios módulos no Node.js para organizar melhor seu código. Um módulo é simplesmente um arquivo JavaScript que exporta funções, objetos ou valores.

Exemplo de módulo customizado (meuModulo.js):

```javascript

// meuModulo.js
const saudacao = () => {
  return 'Olá, mundo! 🌎';
};

module.exports = saudacao;
```

Usando o módulo customizado:

```javascript

const saudacao = require('./meuModulo');

console.log(saudacao()); // Saída: Olá, mundo! 🌎
```

🔄 Sistema de Módulos CommonJS
Node.js utiliza o sistema de módulos CommonJS, onde cada arquivo é tratado como um módulo independente. As principais funções usadas são:

require(): Importa módulos.
module.exports: Exporta módulos.
Exportando múltiplas funções e variáveis:

```javascript

// calculadora.js
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;

module.exports = {
  soma,
  subtracao
};
```

Importando múltiplas funções e variáveis:

```javascript

const { soma, subtracao } = require('./calculadora');

console.log(soma(5, 3)); // Saída: 8
console.log(subtracao(5, 3)); // Saída: 2
```

📖 Documentação Adicional
Para mais informações sobre módulos no Node.js, consulte a documentação oficial do Node.js.s
