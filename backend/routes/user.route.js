const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const validatedEntrySignup = require("../middleware/validatedEntrySignup");
const validatedEntryLogin = require("../middleware/validatedEntryLogin");
//Requête POST pour inscription d'un nouveau user
router.post("/signup", validatedEntrySignup, userCtrl.signup); 
//Requête POST pour vérifier un user
router.post("/login", validatedEntryLogin, userCtrl.login); 
//requête DELETE pour suppression du compte
router.delete("/del/:id", userCtrl.deleteAccount);
//requête GET pour info d'un utilisateur
router.get("/user/:id", userCtrl.getOneUser);

module.exports = router;