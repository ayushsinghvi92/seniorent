'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Property = require('./property');
const Photo = require('./photo');
const Address = require('./address');
const Host = require('./host');

// belongsTo -> foreign key on source model
Property.belongsTo(Address);
Property.belongsTo(Host);

//hasOne -> foreign key in target model
Host.hasOne(User);

//belongsToMany -> foreignKey on source model
Property.belongsToMany(Photo, { through: 'property_id' })


module.exports = {User, Property, Photo, Address, Host}
