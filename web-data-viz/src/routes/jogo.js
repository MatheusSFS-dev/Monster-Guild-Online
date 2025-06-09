var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");


router.post("/marcarPartida", function (req, res) {
    jogoController.marcarPartida(req, res);
})

router.get("/verPartida/:fkUsuario", function (req, res) {
     console.log("Cheguei na rota jogo /verPartida/:fkUsuario com fkUsuario:", req.params.fkUsuario);
     console.log("ID recebido:", req.params.fkUsuario);
    jogoController.verPartida(req, res);

})
module.exports = router;