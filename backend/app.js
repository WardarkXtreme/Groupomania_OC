const express = require('express');
require('./db-Connect/dbConnect.js');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const publicationRoutes = require('./routes/publication.route');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/auth", publicationRoutes);

let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, ":");
let hms = date.toLocaleTimeString()
date = (hms  + " " + jma  );
;console.log(date)

module.exports = app;