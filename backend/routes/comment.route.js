const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment.controller");

// //Requête POST pour nouveau commentaire
router.post("/createcomment", commentCtrl.createComment); 
// //Requête POST pour suppression de commentaire
 router.post("/deleteComment", commentCtrl.deleteComment);
// //requête GET pour afficher toutes les publication et les auteurs des publication
router.get("/allComment", commentCtrl.getAllComment);
// // Requête GET pour afficher une publication
router.get("/oneComment", commentCtrl.getOneComment);
// //requête Put pour mis a jour de commentaire
router.put("/modifyComment", commentCtrl.modifyComment);


module.exports = router;