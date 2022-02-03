const mysql = require('mysql2');

//architecture de la base de donnée "like"

const Like = function (like) {

    this.likeID = like.likeID;
    this.userID = like.userID;
    this.publicationID = like.publicationID;

};

module.exports = Like;