const connectDb = require('../db-Connect/dbConnect.js');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//___________Appel du temps sur la variable date__________//
let date;
date = new Date();
let jma = date.toLocaleDateString().replace(/[/]/g, "-");
let hms = date.toLocaleTimeString()
date = (jma + " " + "à" + " " + hms);
;

//controleur d'inscription

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            pseudo: req.body.pseudo,
            createdOn: date
        });
        let sql = `INSERT INTO User (email, firstName, lastName, password, pseudo, createdOn) VALUES (?)`;
        let values = [user.email, user.firstName, user.lastName, user.password, user.pseudo, user.createdOn];
        connectDb.query(sql, [values], function(err, data) {
            if(err) {
                return res.status(400).json({err});
            }
            res.status(200).json({message: "inscription réalisée avec succés !"});
        });
    })
    .catch(error=> res.status(500).json({error}));
}

// controlleur de connexion

exports.login = (req, res) => {
    //Recherche de l'utilisateur dans la DB via son email 
    let sql = `SELECT * FROM User WHERE email = ?`;
    connectDb.query(sql, [req.body.email], function(err, data) {
        if (err) {
            return res.status(400).json({err}); 
        } 
        //Si on a trouvé le mail dans la DB, on compare le hash du mot de passe au hash de la DB
        bcrypt.compare(req.body.password, data[0].password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({error: "Mot de passe incorrect !"});
                }
                res.status(200).json({
                    userID: data[0].userID,
                    lastName: data[0].lastName,
                    token: jwt.sign(
                        {userID : data[0].userID, lastName: data[0].lastName},
                        process.env.SECRET_T,
                        {expiresIn: "24h"}
                    )}
                )
            })
            .catch(error => res.status(500).json({error}));  
    });
};

exports.deleteAccount = (req, res) => {

    let sql = `DELETE FROM User WHERE userID = ?`;
    connectDb.query(sql, [req.params.id], function(err) {
        if(err){
            res.status(400).json({err});
        }
        res.status(201).json({message: "votre compte a bien été supprimé, à bientôt."});
    })
};

exports.getOneUser = (req, res) => {

    let sql = `SELECT * FROM User WHERE userID = ?`;
    connectDb.query(sql, [req.params.id], function(err, data) {
    if (err) {
        return res.status(404).json({err});
    }
    res.status(200).json(data);
  });
};