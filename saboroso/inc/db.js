const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: 'Isa14072019'
});

module.exports = connection;