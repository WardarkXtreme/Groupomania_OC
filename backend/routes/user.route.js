const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const validatedEntrySignup = require("../middleware/validatedEntrySignup");
const validatedEntryLogin = require("../middleware/validatedEntryLogin");
const multer = require('../middleware/multerConfig')
const auth = require("../middleware/auth");
//Requête POST pour inscription d'un nouveau user
router.post("/signup", multer, validatedEntrySignup, userCtrl.signup); 
//Requête POST pour vérifier un user
router.post("/login", validatedEntryLogin, userCtrl.login); 
//requête DELETE pour suppression du compte
router.delete("/del/:id", auth, userCtrl.deleteAccount);
//requête GET pour info d'un utilisateur
router.get("/user/:id", auth, userCtrl.getOneUser);
//requête PUT pour modification utilisateur
router.put("/user/:id", auth, multer, userCtrl.modifyUser);

module.exports = router;