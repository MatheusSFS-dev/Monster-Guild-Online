var jogoModel = require("../models/jogoModel");




function marcarPartida(req, res) {
    const pontos = req.body.pontosServer;
    const fkUsuario = req.body.fkUsuario;

    jogoModel.marcarPartida(fkUsuario, pontos)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao marcar a pontuação ! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function verPartida(req, res) {

    var fkUsuario = req.params.fkUsuario;

    jogoModel.verPartida(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao ver a pontuação do jogo ! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    marcarPartida,
    verPartida
}