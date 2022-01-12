/*MIDDLEWARE D'AUTHENTIFICATION ET D'AUTORISATION DU USER */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const userID = decodedToken.userID;
        if (req.body.userID && req.body.userID !== userID) {
         throw 'User Id non Valable !' ;   
        } else {
            next()
        } 
    } catch (error) {
        res.status(401).json({ error: new error('invalide')});
    }
}