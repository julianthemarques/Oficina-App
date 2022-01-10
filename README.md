<h1 align="center">
  <a href="localhost:3000">Projeto Oficina App</a>
</h1>

<h1> Práticas de programação envolvidas</h1>

- [X] 📖 Consumo de API
  - [X] 📖 Utilização do fetch.
  - [X] 📖 Identificação de erro.
- [X] 📖 Material UI
  - [X] 📖 Estilização mensagem de erro
  - [X] 📖 Criação da tabela
  - [X] 📖 Criação do Modal


# <h1>Pré-requisitos</h1>
<p>Antes de Começar você precisa ter instalado em seu computador as seguintes ferramentas:
<a href="https://nodejs.org/">Node.js</a>, um gerenciador de pacotes como <a href="https://yarnpkg.com/">npm</a> ou <a href="https://nodejs.org/">yarn</a> e também será necessário um editor de texto/código como <a href="https://code.visualstudio.com/">Visual Studio Code (VSCode)</a>.</p>

# <h1> Clonar / Instalar</h1>

Utilize o terminal do seu editor de código para:

Clonar Projeto:
  ```bash
    $  git clone https://github.com/juulmrqs/Oficina-App
  ```
Instalar Pacotes:
  ```bash
    $  yarn
  ```
  ou
  ```bash
    $  npm i
  ```
Iniciar Servidor / Site:
  ```bash
    $  yarn start
  ```
  ou
  ```bash
    $  npm run start
  ```

  Servidor iniciado na “PORTA 3000” do seu navegador, acesse [http://localhost:3000](http://localhost:3000)
# <h1 id="Sobre">📜 Sobre</h1>
<p> Desafio realizado para a construção de um app em React JS, iremos consumir os dados de uma API para criar uma tela no qual demonstra, em formato de tabela, os dados de Nome do Cliente, Valor e Nome do Vendedor (disponibilizados pela API). <br> Foi utilizado a biblioteca de estilização denominada Material UI, para o design e funções adicionais ao projeto. 
<br> Para tratamento de erro no consumo de API, verificamos o status da requisição, caso tenhamos erro 404 ou 502, teremos o disparo de uma mensagem de alerta informando a impossibilidade de utilizar a API, para testar esta funcionalidade, é incentivado a modificação do link na linha 35 do arquivo src/component/Table.jsx, experimente alterar o caminho do link e atualizar a página do seu browser, com isso iremos ativar a mensagem de erro e a impossibilidade de ler as linhas da tabela. <br> Além disso, temos a possibilidade de clicar em elementos (células) da tabela para que se abra um modal trazendo a descrição do produto também disponibilizada na API. 
  <br>
</p>

Link do Projeto: <a href="https://github.com/juulmrqs/Oficina-App">https://github.com/juulmrqs/Oficina-App</a> <br>