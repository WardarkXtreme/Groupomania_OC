const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");
const auth = require("../middleware/auth");

//Requête POST pour nuovelle publication
router.post("/add", auth, publicationCtrl.createPublication); 
//Requête POST pour suppression de publication
router.post("/del", auth, publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/all", auth, publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/:id", auth, publicationCtrl.getOnePublication);
//requête Put pour mis a jour de publication
router.put("/change", auth, publicationCtrl.modifyPublication);


module.exports = router;