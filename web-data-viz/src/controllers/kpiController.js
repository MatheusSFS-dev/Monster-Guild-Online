var kpiModel = require("../models/kpiModel");

function listarLinha(req, res) {
    var fkUsuario = req.params.fkUsuario;

    console.log("1 - Cheguei no controller da linha!");
    kpiModel.listarLinha(fkUsuario).then(
        function (resultado) {
            console.log("1 - To na função do controller da linha quiz");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - falha no controller da linha: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarLinhaJogo(req, res) {
    var fkUsuario = req.params.fkUsuario;

    console.log("1 - Cheguei no controller da linha!");
    kpiModel.listarLinhaJogo(fkUsuario).then(
        function (resultado) {
            console.log("1 - To na função do controller da linha");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - falha no controller da linha: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    listarLinha,
    listarLinhaJogo
}
