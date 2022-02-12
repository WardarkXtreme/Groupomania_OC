/*MIDDLEWARE D'AUTHENTIFICATION ET D'AUTORISATION DU USER */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_T);
        req.user = decodedToken;
        const userID = req.user.userID;
        if (req.body.userID && req.body.userID !== userID) {
         throw 'User Id non Valable !' ;   
        } else {
            next()
        } 
    } catch {
        res.status(401).json({error: new Error("Requête non authentifiée !")}); 
    }
}