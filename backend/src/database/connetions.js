const knex = require('knex')
const config = require('../../knexfile')

const connetion = knex(config.development)

module.exports = connetion