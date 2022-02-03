const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");
// const auth = require("../middleware/auth");
const multer = require('../middleware/multerConfig');

//Requête POST pour nouvelle publication
router.post("/", multer, publicationCtrl.createPublication); 
//requête Put pour mis a jour de publication
router.put("/:id", publicationCtrl.modifyPublication);
//Requête delete pour suppression de publication
router.delete("/del/:id", publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/", publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/:id", publicationCtrl.getOnePublication);
//Requête POST pour nouvelle reaction sur publication
router.post("/like/:id", publicationCtrl.managementLike); 

module.exports = router;