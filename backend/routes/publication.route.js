const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");

//Requête POST pour nuovelle publication
router.post("/createPublication", publicationCtrl.createPublication); 
//requête Put pour mis a jour de publication
//router.put("/modifyPublication", publicationCtrl.modifyPublication);


module.exports = router;