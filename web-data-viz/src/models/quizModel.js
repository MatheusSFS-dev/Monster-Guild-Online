var database = require("../database/config")


async function marcarTentativa(fkUsuario, acertos, erros) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcarTentativa():");
    const quiz = await database.executar(`
        INSERT INTO quiz VALUES (DEFAULT, DEFAULT);
    `);
    const quizId = quiz.insertId;

    await database.executar(`
 INSERT INTO tentativa (fkQuiz, fkUsuario, acertos, erros) VALUES 
 (${quizId}, ${fkUsuario}, ${erros}, ${acertos});
 `);    
}


function verTentativa(fkUsuario) {
     console.log("ID recebido:",fkUsuario);
    var instrucao = 
    `SELECT COUNT(idTentativa) as Tentativas FROM tentativa WHERE fkUsuario = ${fkUsuario};`;

    return database.executar(instrucao)
}


function verMedia(fkUsuario) {
    console.log("ID recebido na média:",fkUsuario);
    var instrucao = 
    ` SELECT TRUNCATE (AVG(acertos/(acertos + erros)) * 100, 2) AS Media from tentativa WHERE fkUsuario = ${fkUsuario};
 `;
    return database.executar(instrucao)
}

function verMediaErros(fkUsuario) {
    console.log("ID recebido na média de erros:",fkUsuario);
    var instrucao = 
    ` SELECT TRUNCATE (AVG(erros/(acertos + erros)) * 100, 2) AS MediaErros from tentativa WHERE fkUsuario = ${fkUsuario};`;
    return database.executar(instrucao)
}

module.exports = {
    verMediaErros,
    verMedia,
    verTentativa,
    marcarTentativa
};