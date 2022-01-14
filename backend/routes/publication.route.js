const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication.controller");
const auth = require("../middleware/auth");
//Requête POST pour nuovelle publication
router.post("/createPublication", auth, publicationCtrl.createPublication); 
//Requête POST pour suppression de publication
router.post("/deletePublication", auth, publicationCtrl.deletePublication);
//requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/allPublication", auth, publicationCtrl.getAllPublication);
// Requête GET pour afficher une publication
router.get("/onePublication", auth, publicationCtrl.getOnePublication);
//requête Put pour mis a jour de publication
router.put("/modifyPublication", auth, publicationCtrl.modifyPublication);


module.exports = router;