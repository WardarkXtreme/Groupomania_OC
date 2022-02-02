const connectDb = require("../db-Connect/dbConnect.js");
const Publication = require("../models/publication.model");


//___________Appel du temps sur la variable date__________//
let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString()
date = (jma + " " + "à" + " " + hms);
;


//Fonction pour nouvelle publication
exports.createPublication = (req, res) => {
    const tableau = [];
    const publication = new Publication ({        
        userID: req.body.userID,
        title: req.body.title,
        article: req.body.article,
        publicationPicture: req.body.publicationPicture,
        usersLiked: JSON.stringify(tableau),
        usersDisliked: JSON.stringify(tableau)    
    });
    let sql = `INSERT INTO Publication (userID, title, article, publicationPicture, usersLiked, usersDisliked, createdOn) VALUES (?)`;
    let values = [publication.userID, publication.title, publication.article, publication.publicationPicture, publication.usersLiked, publication.usersDisliked, date];
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
    let sql = `SELECT * FROM publication INNER JOIN user ON publication.userID = user.userID`;
    connectDb.query(sql, function(err, data) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(data)
    });
};

// fonction pour afficher une seule publication
exports.getOnePublication = (req, res) => {
    let sql = `SELECT * FROM publication INNER JOIN user ON publication.userID WHERE publicationID = ?`;
    connectDb.query(sql, [req.params.id], function(err, result) {
        if (err) {
            return res.status(400).json(err);
        }
        res.status(200).json(result);
    })
};

exports.managementLike = (req, res) => {
    let sql = `SELECT * FROM publication WHERE publicationID=?`
    connectDb.query(sql, [req.params.id], function (err, data) {
        
        console.log(data)

        // if (err) {
        //     return res.status(200).json({err});
        // };
        // const ul = JSON.parse([data.usersLiked]);
        // const ud = JSON.parse([data.usersLiked]);
        // const userId = req.body.userID;
        // const like = req.body.like;
        // const updateLike = {
        //     usersLiked: ul,
        //     usersDisliked: ud,
        //     like: 0,
        //     dislike: 0
        // }
        // if(like == 1) {
        //     updateLike.usersLiked.push(userId);  
        // };
        // if(like == -1) {
        //     updateLike.usersDisliked.push(userId);
        // };
        // if(like == 0) {
        //     updateLike.usersLiked.splice(userId);
        //     updateLike.usersDisliked.splice(userId);
        // };
                
        // updateLike.like = updateLike.usersLiked.length;
        // updateLike.dislike = updateLike.usersDisliked.length;
            
        // let sql = `UPDATE publication SET like=?, dislike=?, usersLiked=?, usersDisliked=? WHERE publicationID=?`;
        // connectDb.query(sql, [updateLike.like, updateLike.dislike, updateLike.usersLiked, updateLike.usersDisliked, req.params.id], function(err) {
        // if (err) {
        //     console.log(err)
        //     return res.status(400).json({ err })
        // }
        // res.status(201).json({message: "avis publiés"})
        // })
    })
}

// exports.managementLike = (req, res) => {

//     const userId = req.body.userID;
//     const like = req.body.like;
//     const updateLike = {
//         usersLiked: [],
//         usersDisliked: [],
//         like: 0,
//         dislike: 0
//     }
//     if(like == 1) {
//         updateLike.usersLiked.push(userId);  
//     };
//     if(like == -1) {
//         updateLike.usersDisliked.push(userId);
//     };
//     if(like == 0) {
//         updateLike.usersLiked.splice(userId);
//         updateLike.usersDisliked.splice(userId);
//     };
//     updateLike.like = updateLike.usersLiked.length;
//     updateLike.dislike = updateLike.usersDisliked.length;

//     let sql = `UPDATE publication SET like=?, dislike=?, usersLiked=?, usersDisliked=? WHERE publicationID=?`;
//     connectDb.query(sql, [updateLike.like, updateLike.dislike, updateLike.usersLiked, updateLike.usersDisliked, req.params.id], function(err) {
//         if (err) {
//             console.log(err)
//             return res.status(400).json({ err })
//         }
//         res.status(201).json({message: "avis publiés"})
//     });
// };