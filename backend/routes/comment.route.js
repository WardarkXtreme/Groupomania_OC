const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment.controller");

// //Requête POST pour nouveau commentaire
router.post("/:id", commentCtrl.createComment); 
// //requête Put pour mis a jour de commentaire
router.put("/:id", commentCtrl.modifyComment);
// //Requête POST pour suppression de commentaire
 router.delete("/:id", commentCtrl.deleteComment);
 // //Requête GET pour voir les commentaires d'une publication
router.get("/:id", commentCtrl.getCommentForOnePublication);

module.exports = router;