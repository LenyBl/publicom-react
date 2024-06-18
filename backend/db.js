// eslint-disable-next-line no-undef
const knex = require('knex');
// eslint-disable-next-line no-undef
const knexfile = require('./knex');

const db = knex(knexfile);

// eslint-disable-next-line no-undef
module.exports = db;
