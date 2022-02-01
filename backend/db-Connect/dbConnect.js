const mysql = require('mysql2');


//architecture base de donnée "user"
const User = function (user) {
    
    this.userID = user.userID;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.pseudo = user.pseudo;
    this.password = user.password;
    this.profilePicture = user.profilePicture;
    this.createdOn = user.createdOn;
    this.updateOn = user.updateOn;
};
module.exports = User;