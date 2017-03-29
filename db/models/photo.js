const Sequelize = require('sequelize')
const db = require('APP/db')
const Photo = db.define('photos', {
	url: Sequelize.STRING, 
	caption: Sequelize.STRING
})

module.exports = Photo;