const connectDb = require("../db-Connect/dbConnect.js");
const Publication = require("../models/publication.model");


//___________Appel du temps sur la variable date__________//
// let date;
// date = new Date();
// let jma = date.toLocaleDateString().replace(/[/]/g, "-");
// let hms = date.toLocaleTimeString()
// date = (jma + " " + "à" + " " + hms);
// ;


//Fonction pour nouvelle publication
exports.createPublication = (req, res) => {
    const publication = new Publication ({        
        userID: req.body.userID,
        title: req.body.title,
        article: req.body.article,
        publicationPicture: req.body.publicationPicture     
    });
    let sql = `INSERT INTO Publication (userID, title, article, publicationPicture) VALUES (?)`;
    let values = [publication.userID, publication.title, publication.article, publication.publicationPicture];
    connectDb.query(sql, [values], function(err, data) {
        if(err){
            return res.status(400).json(console.log(err));
        };
        res.status(201).json(console.log("publication reussie"));
    });
};

//fonction pour modifier une publication
exports.modifyPublication = (req, res) => {
    let sql = `UPDATE publication SET title = ?, article = ? WHERE publicationID = ?`;
    let values = [req.body.title, req.body.article, req.body.publicationID];
    connectDb.query(sql, values, function (err, data) {
        if(err){
            res.status(400).json({err})
        }
        res.status(200).json(data);
        console.log(data)
    })

};

//fonction pour supprimer une publication
exports.deletePublication = (req, res) => {
    let sql = `DELETE FROM publication WHERE publicationID = ?`;
    connectDb.query(sql, [req.body.publicationID], function(err, data) {
        if(err){
            return res.status(400).json({err});
        }
        res.status(201).json(console.log("supprimé avec succés"));
    });
};

//fonction pour afficher toutes les publications
exports.getAllPublication = (req, res) => {
    let sql = `SELECT publicationID, publication.userID, publication.createdOn, title, article, firstName, lastName, pseudo, publicationPicture FROM publication INNER JOIN user ON publication.userID = user.userID`;
    connectDb.query(sql, function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        res.json(data)
    });
};

// fonction pour afficher une seule publication
exports.getOnePublication = (req, res) => {
    let sql = `SELECT * FROM publication INNER JOIN user ON publication.userID WHERE publicationID = ?`;
    connectDb.query(sql, [req.body.publicationID], function(err, result) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(result);
    })
};