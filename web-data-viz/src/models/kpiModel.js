
var database = require("../database/config")

function listarLinha(fkUsuario) {
    console.log("1 - Cheguei no models da linha: /n");

    var instrucao = `
         SELECT q.data, t.acertos, t.fkUsuario
         FROM tentativa t JOIN quiz q 
         ON t.fkQuiz = q.idQuiz
         JOIN usuario u   
         ON t.fkUsuario = u.idUsuario
         WHERE idUsuario = ${fkUsuario};

    `;
    
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarLinhaJogo(fkUsuario) {
    console.log("1 - Cheguei no models da linha: /n");

    var instrucao = `
         SELECT j.data, t.acertos, t.fkUsuario
         FROM tentativaBestiario t JOIN jogo j
         ON t.fkjogo = j.idJogo
         JOIN usuario u   
         ON t.fkUsuario = u.idUsuario
         WHERE idUsuario = ${fkUsuario};

    `;
    
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}
module.exports = {
    listarLinha,
    listarLinhaJogo
};