const pgp = require("pg-promise")();
require("dotenv").config();
// we bring in vars from our .env
const cn = {
     host: process.env.PG_HOSt,
     port: process.env.PG_PORT,
     database: process.env.PG_DATABASE,
     user: process.env.PG_USER,
};
const db = pgp(cn);

module.exports = db;
//pgpromise is an {} that sets up the connection bet
//our server.js and our database
