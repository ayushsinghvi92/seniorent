const Sequelize = require('sequelize')
const db = require('APP/db')
const Address = db.define('addresses', {
	
	line1:{
		type:Sequelize.STRING,
		allowNull: false
	},

	line2:{
		type:Sequelize.STRING,
		allowNull: false
	},

	city:{
		type:Sequelize.STRING,
		allowNull: false
	},

	state:{
		type:Sequelize.STRING,
		allowNull: false
	},

	country:{
		type:Sequelize.STRING,
		allowNull: false
	},

	zip:{
		type:Sequelize.INTEGER,
		allowNull: false
	}
})

module.exports = Address;