const { DataTypes } = require('sequelize')
const db = require('../connection')

const Persona = db.define('persona',{
    cedula: DataTypes.STRING,
    nombreyapellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
},{
    tableName: 'persona',
    createdAt: false,
    updatedAt: false,
})
module.exports = Persona