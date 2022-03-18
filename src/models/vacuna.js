const { DataTypes } = require('sequelize')
const db = require('../connection')

const Vacuna = db.define('vacuna',{
   n_vacuna: DataTypes.STRING
},{
    tableName: 'vacuna',
    createdAt: false,
    updatedAt: false,
})
module.exports = Vacuna