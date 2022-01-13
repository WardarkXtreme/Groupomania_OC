const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");

//Requête POST pour nuovelle publication
router.post("/createPublication", publicationCtrl.createPublication); 
//Requête POST pour suppression de publication
router.post("/deletePublication", publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/allPublication",  publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/onePublication", publicationCtrl.getOnePublication);
//requête Put pour mis a jour de publication
router.put("/modifyPublication", publicationCtrl.modifyPublication);


module.exports = router;