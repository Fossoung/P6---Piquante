
const express = require("express");
const router = express.Router();
const raterLimit = require("express-rate-limit");
// définition de la limitation de requete
const limiter = raterLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // 50 essais
});

const userCtrl = require("../controllers/user");
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
module.exports = router;
