# 📘 Nodemon Usage and Configuration Guide

Nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js reiniciando automaticamente o servidor quando mudanças nos arquivos são detectadas. Este guia abrange a instalação, uso básico e configuração avançada do `nodemon`.

## 📋 Índice

- [📦 Instalação](#-instalação)
- [🚀 Uso Básico](#-uso-básico)
- [⚙️ Configuração Avançada](#-configuração-avançada)
  - [🗂️ Arquivo nodemon.json](#-arquivo-nodemonjson)
  - [🔧 Opções de Linha de Comando](#-opções-de-linha-de-comando)
- [💡 Dicas e Truques](#-dicas-e-truques)
- [🔗 Recursos Adicionais](#-recursos-adicionais)

## 📦 Instalação

Você pode instalar o `nodemon` globalmente ou como uma dependência de desenvolvimento em seu projeto.

### 🌐 Instalação Global

Para instalar o `nodemon` globalmente, execute o seguinte comando:

```bash
npm install -g nodemon
```

📦 Instalação Local
Para adicionar o nodemon como uma dependência de desenvolvimento no seu projeto, execute:

```bash
npm install --save-dev nodemon
```

🚀 Uso Básico
Após a instalação, você pode usar o nodemon para iniciar seu aplicativo Node.js. Suponha que seu arquivo principal esteja localizado em src/app.js.

```bash
nodemon src/app.js
```

Nodemon irá monitorar o arquivo app.js e reiniciar o servidor automaticamente sempre que uma mudança for detectada.

⚙️ Configuração Avançada
🗂️ Arquivo nodemon.json
Para configurações mais avançadas, você pode criar um arquivo nodemon.json na raiz do seu projeto. Aqui está um exemplo de como configurar o nodemon.json:

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["test/"],
  "exec": "node src/app.js"
}
```

📝 Explicação das Configurações
"watch": Lista de diretórios ou arquivos a serem monitorados.
"ext": Extensões de arquivos a serem monitorados.
"ignore": Diretórios ou arquivos a serem ignorados.
"exec": Comando a ser executado para iniciar a aplicação.
🔧 Opções de Linha de Comando
Além do arquivo de configuração, você também pode passar opções diretamente na linha de comando. Aqui estão alguns exemplos:

Especificar um diretório para monitorar:

```bash

nodemon --watch src
```

Monitorar múltiplas extensões de arquivos:

```bash
nodemon --ext js,ts
```

Ignorar diretórios:

```bash
nodemon --ignore test/
```

Executar um comando específico:

```bash
nodemon --exec "node src/app.js"
```

💡 Dicas e Truques
Usar scripts npm: Adicione scripts no seu package.json para simplificar o uso do nodemon.

```json
"scripts": {
  "start": "nodemon src/app.js"
}
```

Agora você pode iniciar seu aplicativo com npm start.

Integração com outras ferramentas: nodemon pode ser usado com outras ferramentas como babel-node ou ts-node para suporte a ES6 ou TypeScript.

```bash
nodemon --exec babel-node src/app.js
```

Depuração: Utilize o --inspect para depurar sua aplicação.

```bash
nodemon --inspect src/app.js
```

🔗 Recursos Adicionais

Para mais informações e opções de configuração, consulte a documentação oficial do Nodemon.