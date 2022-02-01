const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");
const auth = require("../middleware/auth");

//Requête POST pour nuovelle publication
router.post("/", publicationCtrl.createPublication); 
//Requête delete pour suppression de publication
router.delete("/del/:id", publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/", publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/:id", publicationCtrl.getOnePublication);
//requête Put pour mis a jour de publication
router.put("/:id", publicationCtrl.modifyPublication);
//Requête POST pour nouvelle reaction sur publication
router.post("/:id", publicationCtrl.managementLike); 

module.exports = router;