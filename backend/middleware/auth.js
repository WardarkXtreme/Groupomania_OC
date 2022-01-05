/*MIDDLEWARE D'AUTHENTIFICATION ET D'AUTORISATION DU USER */

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        //Récupération du token contenu dans les headers
        const token = req.headers.authorization.split(" ")[1];
        //Décodage du token
        const decodedToken = jwt.verify(token, "DD49869BBAD47");
        //Extraction de l'id contenus dans le token
        req.user = decodedToken;
        const userId = req.user.userID;
        if (req.body.userID && req.body.userID !== userId) {
            throw "User ID non valable !";
        } else {
            next();
        }
    } 
    catch {
       res.status(401).json({error: new Error("Requête non authentifiée !")}); 
    }  
};
