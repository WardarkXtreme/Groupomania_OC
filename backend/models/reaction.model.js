const mysql = require('mysql2');

//architecture base de donnée "likeDislike"
const LikeDislike = function (likeDislike) {

    this.likeDislikeID = likeDislike.likeDislikeID;
    this.like = likeDislike.like;
    this.dislike = likeDislike.dislike;
    this.likeDislikeUserID = likeDislike.likeDislikeUserID;
    this.likeDislikePublicationID = likeDislike.likeDislikePublicationID;
};

module.exports = LikeDislike;