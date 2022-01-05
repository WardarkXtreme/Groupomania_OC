const connectDb = require("../db-Connect/dbConnect.js");
const Publication = require("../models/publication.model");

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
            return res.status(400).json({err});
        };
        res.status(201).json(console.log("publication reussie"));
    });
};

exports.modifyPublication = (req, res) => {

};