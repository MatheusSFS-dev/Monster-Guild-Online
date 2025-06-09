var cardModel = require("../models/cardModel");
function coletarCard(req, res) {
   
    var idCarta = req.body.idCartaServer;
    var fkUsuario = req.body.idUsuario

        // Passe os valores como parâmetro e vá para o arquivo cardModel.js
        cardModel.marcarPontuacao(fkUsuario, acertos, erros)
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