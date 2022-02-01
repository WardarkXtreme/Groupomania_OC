const mysql = require('mysql2');

//architecture base de donnée "comment"
const Comment = function (comment) {
    
    this.commentID = comment.commentID;
    this.userID = comment.userID;
    this.publicationID = comment.publicationID;
    this.commentText = comment.commentText;
    this.createdOn = comment.createdOn;
    this.updateOn = comment.updateOn;
};

module.exports = Comment;