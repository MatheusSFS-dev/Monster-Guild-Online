var quizModel = require("../models/quizModel");




function marcarTentativa(req, res) {
    const acertos = req.body.acertosServer;
    const erros = req.body.errosServer;
    const fkUsuario = req.body.fkUsuario;

    quizModel.marcarTentativa(fkUsuario, erros, acertos)
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


function verTentativa(req, res) {

    var fkUsuario = req.params.fkUsuario;

    quizModel.verTentativa(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao ver a pontuação ! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}



function verMedia(req, res) {

    var fkUsuario = req.params.fkUsuario;

    quizModel.verMedia(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao ver a média ! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function verMediaErros(req, res) {

    var fkUsuario = req.params.fkUsuario;

    quizModel.verMediaErros(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao ver a média de erros! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}
module.exports = {
    verMediaErros,
    verMedia,
    verTentativa,
    marcarTentativa
}