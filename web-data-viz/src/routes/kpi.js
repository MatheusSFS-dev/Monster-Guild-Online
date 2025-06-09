var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/listar/:idUsuario", function(req, res) {
    console.log("Cheguei na rota KPI /listar/:idUsuario com idUsuario:", req.params.idUsuario);
    kpiController.listar(req, res)
});

router.get("/listarLinha/:fkUsuario", function (req,res) {
    console.log("1 - Cheguei no route da linha do quiz");
     console.log("Cheguei na rota quiz /verTentativa/:fkUsuario com fkUsuario:", req.params.fkUsuario);
    // graficos/linha
    kpiController.listarLinha(req, res);
} );

router.get("/listarLinhaJogo/:fkUsuario", function (req,res) {
    console.log("1 - Cheguei no route da linha");
     console.log("Cheguei na rota jogo /verPartida/:fkUsuario com fkUsuario:", req.params.fkUsuario);
    // graficos/linha
    kpiController.listarLinhaJogo(req, res);
} );

module.exports = router;