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
        userID : req.params.id,
        publicationID : req.body.publicationID,
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
    let sql = `UPDATE groupomania.comment SET commentText = ? WHERE commentID = ?`;
    let values = [req.body.commentText, req.params.id];
    connectDb.query(sql, values, function (err, data) {
        if(err){
            res.status(400).json({err})
        }
        res.status(200).json(data);
    })
};

//______________________fonction pour supprimer un commentaire ___________//

exports.deleteComment = (req, res) => {
    let sql = `DELETE FROM comment WHERE commentID = ?`
    let values = [req.params.id]
    connectDb.query(sql, [values], function (err, data) {
        if (err) {
            res.status(400).json({err})
        }
        res.status(200).json(data)
    })
}

//_________________fonction d'affichage des commentaires d'une publication____________//

exports.getCommentForOnePublication = (req, res) => {
    
    let sql = `SELECT * FROM groupomania.comment INNER JOIN groupomania.user ON comment.userID = user.userID WHERE publicationID=?`;
    connectDb.query(sql, [req.params.id], function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(data);
    })
};