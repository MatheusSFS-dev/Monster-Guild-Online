var express = require("express");
var router = express.Router();

var colecaoController = require("../controllers/colecaoController");


router.post("/coletarCard", function (req, res) {
    colecaoController.coletarCard(req, res);
})




module.exports = router;