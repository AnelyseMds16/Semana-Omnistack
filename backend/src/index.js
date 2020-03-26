const express = require('express');//cria uma var para importar o express com os comandos
const cors = require('cors');
const routes = require('./routes'); //.pra mostrar que é um arquivo importa

const app = express();

app.use(cors());
app.use(express.json());//converter o json vindo para um objeto em JS
app.use(routes); //exporta
//app.get acesssando a rota
/*
    METODOS HTTP:
    + GET: buscar/listar uma info do back-end
    + POST: cria uma info no back-end
    + PUT: altera info no    ||
    + DELETE: deleta uma info

    TIPOS DE PARÂMETROS:
    + Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação) necessa:{console.log(params)};
    + Route Params: parâmetros utilizados para identificar recursos, apenas um parametro ex:'/users/:id' necessa:{console.log(params)}
    + Request Body: corpo da requisição, utilizado para criar ou alterar recursos

    BANCO DE DADOS:
    + SQL: MySQL, SQLite, PostgreSQl, Oracle, Microsoft SQL Server
        mais utilizado.
    + NoSQL: MongoDB, CouuchDB, etc

    TIPOS BNC DADOS:
    + Driver: SELECT + FROM users
    + Query Builder: table('users').select('+').where()
*/

app.listen(3333) 

// "devDependencies": {  =  //dependencia de desenvolvimento
//npm instala / npx executa
//npx knex migrate:latest => cria a tabela
//npx knex migrate:make create_ongs => cria pastinha tabela
//npx knex => mostra as func