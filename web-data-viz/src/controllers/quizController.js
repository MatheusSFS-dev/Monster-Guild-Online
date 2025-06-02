var quizModel = require("../models/quizModel");
function marcarPontuacao(req, res) {
   
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.marcarPontuacao(acertos, erros)
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

module.exports = {
    marcarPontuacao
}