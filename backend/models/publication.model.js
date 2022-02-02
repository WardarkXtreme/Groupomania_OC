const mysql = require('mysql2');

//architecture de la base de donnée "publication"

const Publication = function (publication) {

    this.publicationID = publication.publicationID;
    this.userID = publication.userID;
    this.title = publication.title;
    this.article = publication.article;
    this.publicationPicture = publication.publicationPicture;
    this.createdOn =  publication.createdOn;
    this.updateOn = publication.updateOn;
    this.like = publication.like;
    this.dislike = publication.dislike;
    this.usersLiked = publication.usersLiked
    this.usersDisliked = publication.usersDisliked;
};

module.exports = Publication;