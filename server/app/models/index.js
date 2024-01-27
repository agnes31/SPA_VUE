const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
 host:dbConfig.HOST,
 dialect: dbConfig.dialect,
 port: 8889,
 operatorAliases: false
})
const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.products = require
db.products = require('./product.model.js')(connex, Sequelize)// model inport dans l index.js, envoyer la connecxion et la librairie Sequelize
module.exports = db
