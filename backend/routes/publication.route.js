const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");
const auth = require("../middleware/auth");
const multer = require('../middleware/multerConfig');

//Requête POST pour nouvelle publication
router.post("/", auth, multer, publicationCtrl.createPublication); 
//requête Put pour mis a jour de publication
router.put("/:id", auth, publicationCtrl.modifyPublication);
//Requête delete pour suppression de publication
router.delete("/del/:id", auth, publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/", auth, publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/:id", auth, publicationCtrl.getOnePublication);
//Requête POST pour nouvelle reaction sur publication
router.post("/like/:id", auth, publicationCtrl.managementLike);
//Requête GET pour voir reaction sur publication
router.get("/like/:id", auth, publicationCtrl.getLike);

module.exports = router;