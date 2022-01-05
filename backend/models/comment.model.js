const mysql = require('mysql2');

//architecture base de donnée "comment"
const Comment = function (comment) {
    
    this.commentID = comment.commentID;
    this.userID = comment.userID;
    this.commentID = comment.commentID;
    this.commentText = comment.commentText;
    this.commentPicture = comment.commentPicture;
    this.commentCreatedOn = new Date();
    this.commentUpdateOn = new Date();
};

module.exports = Comment;