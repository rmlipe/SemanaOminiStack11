const express = require('express');

const OngController = require('./src/controllers/OngController')

const IncidentController = require('./src/controllers/IncidentController')

const ProfileController = require('./src/controllers/ProfileController')

const SessionsController = require('./src/controllers/SessionsController')

const routes = express.Router();

// LISTAGEM

routes.get('/ongs', OngController.index);

// CADASTRO: ONGS

routes.post('/ongs', OngController.create);

// CADASTRO: CASOS

routes.post('/incidents', IncidentController.create);

// LISTAGEM

routes.get('/incidents', IncidentController.index);

// DELETE

routes.delete('/incidents/:id', IncidentController.delete);    

// LISTA DE UMA ONG

routes.get('/profile', ProfileController.index);

// LOGIN

routes.post('/sessions', SessionsController.create);

module.exports = routes;