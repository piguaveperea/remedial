const { DataTypes } = require('sequelize')
const db = require('../connection')
const persona = require('./persona')
const vacuna = require('./vacuna')
const persona_vacuna = db.define('persona_vacuna',{
   id_persona: DataTypes.INTEGER,
   id_vacuna: DataTypes.INTEGER,
   dosis: DataTypes.STRING
},{
    tableName: 'persona_vacuna',
    createdAt: false,
    updatedAt: false,
})

vacuna.hasMany(persona_vacuna,{
    foreignKey:'id'
})
persona_vacuna.belongsTo(vacuna,{
    foreignKey:'id_vacuna'
})

module.exports = persona_vacuna