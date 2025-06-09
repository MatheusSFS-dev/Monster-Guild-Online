var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/marcarTentativa", function (req, res) {
    quizController.marcarTentativa(req, res);
})

router.get("/verTentativa/:fkUsuario", function (req, res) {
     console.log("Cheguei na rota quiz /verTentativa/:fkUsuario com fkUsuario:", req.params.fkUsuario);
     console.log("ID recebido:", req.params.fkUsuario);
    quizController.verTentativa(req, res);

})

router.get("/verMedia/:fkUsuario", function (req, res) {
     console.log("Cheguei na rota quiz /verMedia/:fkUsuario com fkUsuario:", req.params.fkUsuario);
     console.log("ID recebido:", req.params.fkUsuario);
    quizController.verMedia(req, res);

})

router.get("/verMediaErros/:fkUsuario", function (req, res) {
     console.log("Cheguei na rota quiz /verMediaErros/:fkUsuario com fkUsuario:", req.params.fkUsuario);
     console.log("ID recebido:", req.params.fkUsuario);
    quizController.verMediaErros(req, res);

})







module.exports = router;