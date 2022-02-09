const connectDb = require("../db-Connect/dbConnect.js");
const Publication = require("../models/publication.model");
const Like = require("../models/like.model");
const fs = require('fs');


//___________Appel du temps sur la variable date__________//
let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString();
date = (jma + " " + "à" + " " + hms);



//Fonction pour nouvelle publication
exports.createPublication = (req, res) => {
    console.log (req.file)
    const publication = new Publication ({        
        userID: req.body.userID,
        title: req.body.title,
        article: req.body.article,
        publicationPicture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`    
    });
    let sql = `INSERT INTO Publication (userID, title, article, publicationPicture, createdOn) VALUES (?)`;
    let values = [publication.userID, publication.title, publication.article, publication.publicationPicture, date];
    connectDb.query(sql, [values], function(err, data) {
        if(err){
            return res.status(400).json(console.log(err));
        };
        res.status(201).json({message: "publication reussie"});
    });
};

//fonction pour modifier une publication
exports.modifyPublication = (req, res) => {
    let sql = `UPDATE publication SET title = ?, article = ?, updateOn = ? WHERE publicationID = ?`;
    let values = [req.body.title, req.body.article, date, req.params.id];
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
    connectDb.query(sql, [req.params.id], function(err) {
        if(err){
            return res.status(400).json({err});
        }
        res.status(201).json({message: "supprimé avec succés"});
    });
};

//fonction pour afficher toutes les publications
exports.getAllPublication = (req, res) => {
    let sql = `SELECT * FROM groupomania.publication INNER JOIN groupomania.user ON publication.userID = user.userID`;
    connectDb.query(sql, function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(data)
    });
};

// fonction pour afficher une seule publication
exports.getOnePublication = (req, res) => {
    let sql = `SELECT * FROM groupomania.publication INNER JOIN groupomania.user ON publication.userID = user.userID WHERE publicationID=?`;
    connectDb.query(sql, [req.params.id], function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(data);
    })
};

exports.getLike = (req, res) => {
    let sql = `SELECT * FROM groupomania.like WHERE publicationID=?`
    connectDb.query(sql, [req.params.id], function (err, data) {
        if (err) {
            return res.status(400).json({err})
        };
        res.status(200).json(data)
    })
};

exports.managementLike = (req, res) => {
    const like = req.body.like;

    if (like == 1) {

        const LIKE = new Like ({
            userID: req.params.id,
            publicationID: req.body.publicationID
        });

        let sql = `INSERT INTO groupomania.like (userID, publicationID) VALUES (?)`;
        let values = [LIKE.userID, LIKE.publicationID];
        connectDb.query(sql, [values], function (err) {
            if (err) {
                res.status(400).json({err});
            };

            sql = `SELECT * FROM groupomania.like WHERE publicationID=?`
            connectDb.query(sql, [req.body.publicationID], function (err, data) {
                if (err) {
                    res.satatus(400).json({err});
                };
                const count = JSON.stringify([...data].length); 
                sql = `UPDATE groupomania.publication SET groupomania.publication.like=? WHERE publicationID=?`
                connectDb.query(sql, [count, req.body.publicationID], function (err, data) {
                    if (err) {
                        res.satatus(400).json({err});
                    };
                    res.status(200).json({message: "votre avis a été pris en compte."})
                });
            });      
        });
    };
    if (like == 0) {
        
        let sql = `DELETE FROM groupomania.like WHERE userID = ? AND publicationID=?`;
        connectDb.query(sql, [req.params.id, req.body.publicationID], function (err, data) {
            if (err) {
                res.status(400).json({err});
            };

            sql = `SELECT * FROM groupomania.like WHERE publicationID=?`
            connectDb.query(sql, [req.body.publicationID], function (err, data) {
                if (err) {
                    res.satatus(400).json({err});
                };
                const count = JSON.stringify([...data].length);

                sql = `UPDATE groupomania.publication SET groupomania.publication.like=? WHERE publicationID=?`
                connectDb.query(sql, [count, req.body.publicationID], function (err, data) {
                    if (err) {
                        res.satatus(400).json({err});
                    };
                    res.status(200).json({message: "votre avis a été pris en compte."})
                });
            }); 
        });
    };
};