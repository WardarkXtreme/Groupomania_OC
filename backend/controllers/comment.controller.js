const connectDb = require("../db-Connect/dbConnect.js");
const Comment = require("../models/comment.model");

//___________Appel du temps sur la variable date__________//
let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString()
date = (jma + " " + "à" + " " + hms);
;
//___________fonction de création de commentaire_______//
exports.createComment = (req, res) => {
    const comment = new Comment ({        
        userID : req.params.userID,
        publicationID : req.params.publicationID,
        commentText : req.body.commentText,
        createdOn : date       
    });
    let sql = `INSERT INTO comment (userID, publicationID, commentText, createdOn) VALUES (?)`;
    let values = [comment.userID, comment.publicationID, comment.commentText, comment.createdOn]
    connectDb.query(sql, [values], function(err, data) {
        if(err){
            res.status(400).json({err})
        }
        res.status(200).json({message:"commentaire ajouté"})
    })
}
//_______________fonction pour modification d'un commentaire________//
exports.modifyComment = (req, res) => {
    let sql = `UPDATE comment SET commentText = ? WHERE publicationID = ?`;
    let values = [req.body.commentText, req.body.publicationID];
    connectDb.query(sql, values, function (err, data) {
        if(err){
            res.status(400).json({err})
        }
        res.status(200).json(data);
        console.log(data)
    })
};

//______________________fonction pour supprimer un commentaire ___________//

exports.deleteComment = (req, res) => {
    let sql = `DELETE comment WHERE commentID = ?`
    let values = [req.params.CommentID]
    connectDb.query(sql, [values], function (err, data) {
        if (err) {
            res.status(400).json({err})
        }
        res.status(200).json(data)
    })
}

//________________fonction d'affichage de tous les commentaires____________//

exports.getAllComment = (req, res) => {
    let sql = `SELECT * FROM comment INNER JOIN user ON comment.userID`
    connectDb.query(sql, function (err,data) {
        if (err) {
            res.status(400).json({err})
        }
        res.status(200).json(data)
    })
}

//_________________fonction d'affichage d'un seul commentaire____________//

exports.getOneComment = (req, res) => {
    let sql = `SELECT * FROM comment INNER JOIN user ON comment.userID WHERE commentID = ?`;
    connectDb.query(sql, [req.params.commentID], function(err, result) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(result);
    })
};