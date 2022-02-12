const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment.controller");

// //Requête POST pour nouveau commentaire
router.post("/:id", auth, commentCtrl.createComment); 
// //requête Put pour mis a jour de commentaire
router.put("/:id", auth, commentCtrl.modifyComment);
// //Requête POST pour suppression de commentaire
 router.delete("/:id", auth, commentCtrl.deleteComment);
 // //Requête GET pour voir les commentaires d'une publication
router.get("/:id", auth, commentCtrl.getCommentForOnePublication);

module.exports = router;