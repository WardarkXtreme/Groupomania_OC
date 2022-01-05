const mysql = require('mysql2');

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TrueConnecteD1',
    database: 'groupomania',
});

dbConnect.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = dbConnect;