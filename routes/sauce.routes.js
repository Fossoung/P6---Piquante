
const express = require("express");
const router = express.Router();
const saucesCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
// ROUTES SAUCES
// intercepte les requetes get
router.get("/", auth, saucesCtrl.getAllSauce);
router.get("/:id", auth, saucesCtrl.getOneSauce);
// intercepte requete post de creation de sauce
router.post("/", auth, multer, saucesCtrl.createSauce);
// intercepte les requetes put (modification/mise à jour)
router.put("/:id", auth, multer, saucesCtrl.modifySauce);
// intercepte les requetes delete
router.delete("/:id", auth, saucesCtrl.deleteSauce);
// intercepte requete post de like
router.post("/:id/like", auth, saucesCtrl.likeSauce);
module.exports = router;
