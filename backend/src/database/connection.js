const knex = require('knex');
const configuration = require('../../knexfile');//volta duas pastas

const connection = knex(configuration.development);//configuração desenvolvimento no knex

module.exports = connection; //exporta