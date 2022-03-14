const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Isa14072019',
    database: 'saboroso',
    multipleStatements: true
});

module.exports = connection;