const express = require('express');

const OngController = require('./controllers/Ongcontroller');
const Incidentcontroller = require('./controllers/Incidentcontroller');
const Profilecontroller = require('./controllers/Profilecontroller');
const Sessioncontroller = require('./controllers/Sessioncontroller');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get("/profile", Profilecontroller.index);

routes.get("/incidents", Incidentcontroller.index);
routes.post("/incidents", Incidentcontroller.create);
routes.delete('/incidents/:id', Incidentcontroller.delete);



module.exports = routes;
