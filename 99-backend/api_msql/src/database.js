const mysql = require('mysql');
const mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gmd123456**',
    database: 'nomina'
});

mysqlConexion.connect(function(err) {
    if (err) {
        console.log(err);
        return;

    } else {
        console.log('Base de datos conectada');

    }

});

module.exports = mysqlConexion;