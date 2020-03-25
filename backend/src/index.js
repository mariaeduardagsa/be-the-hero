/* IMPORTANDO MODULO EXPRESS PRA VARIAVEL EXPRESS */

const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); 


/* 
    Métodos HTTP;
    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

*/

/*
    TIPOS DE PARÂMETROS:

    Query Params:  Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos.
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/*
 
    BANCO DE DADOS

    SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
    
 */

 /*

    Driver: SELECT * FROM users
    Query Builder: table('users').select('x').where()
    
    
 */

