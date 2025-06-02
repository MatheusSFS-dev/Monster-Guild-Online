var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/marcarPontuacao", function (req, res) {
    quizController.marcarPontuacao(req, res);
})


module.exports = router;