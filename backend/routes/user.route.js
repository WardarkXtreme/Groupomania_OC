const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth")

//Requête POST pour inscription d'un nouveau user
router.post("/signup", userCtrl.signup); 
//Requête POST pour vérifier un user
router.post("/login", userCtrl.login); 
//requête POST pour suppression du compte
router.post("/deleteAccount",auth, userCtrl.deleteAccount)

module.exports = router;