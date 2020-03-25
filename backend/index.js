const express = require('express');

/**
 * ROTA / RECURSO
 */

 /**
  * MÉTODOS HTTP:
  * 
  * GET: buscar ou listar informação no back-end
  * POST: criar uma informação no back-end
  * PUT: alterar uma informação no back-end
  * DELETE: deletar uma informação no back-end
  */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após (?) (Filtros e Paginação)
  * (const params = request.query)
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * (const params = request.params) + (app.get('/users/:id',(request, response) => {)
  * 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * (const body = request.body;)
  */

/**
 * Banco de Dados
 * 
 * SQL..: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc
 * 
 */

 /**
  * Driver: Select * from users
  * Query Builder: table('users').select('*').where('*')
  */

const app = express();
const cors = require('cors');
const routes = require('./routes')

app.use(cors());

app.use(express.json()); 

app.use(routes)

app.listen(3333);