// var mysql = require("mysql");


// module.exports = function(){
 // return mysql.createConnection({
  //  host: "localhost",
  //  user: "root",
  //  password: "@ITB123456",
  //  database: "lista-tarefas",
  //  port: 3306
 // });
// } 

const Sequelize = require('sequelize')
const sequelize = new Sequelize('ziuu', 'root', '@ITB123456', {
    host: "127.0.0.1",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

