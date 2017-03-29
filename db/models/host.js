const Sequelize = require('sequelize')
const db = require('APP/db')
const Host = db.define('host', {
	profilePhoto: Sequelize.STRING
})
module.exports = Host;