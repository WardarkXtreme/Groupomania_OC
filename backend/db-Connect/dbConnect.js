const mysql = require('mysql2');
require('dotenv').config();

const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB,
});

dbConnect.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = dbConnect; 