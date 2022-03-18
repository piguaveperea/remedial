const { Sequelize } = require('sequelize')

const conn = new Sequelize('controldevacuna','root', '',{
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports = conn