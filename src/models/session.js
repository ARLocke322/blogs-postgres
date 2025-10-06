const { sequelize } = require('../util/db')
const { Model, DataTypes } = require('sequelize')

class Session extends Model { }
Session.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    token: { type: DataTypes.STRING, allowNull: false, unique: true}

}, {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'session'
})

module.exports = Session