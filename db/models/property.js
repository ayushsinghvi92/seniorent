const Sequelize = require('sequelize')
const db = require('APP/db')
const Property = db.define('properties', {
	rentable_area: {
		type: Sequelize.ENUM('Private Room', 'Entire Place')
	},
	property_type: {
		type: Sequelize.ENUM('Apartment', 'House', 'Condominium', 'Villa', 'Cabin', 'Loft', 'Townhouse')
	},
	available_rooms: Sequelize.INTEGER, 
	couples: Sequelize.BOOLEAN, 
	bathrooms: Sequelize.INTEGER,
	furnished: Sequelize.BOOLEAN,
})

module.exports = Property;