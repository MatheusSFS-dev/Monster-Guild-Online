var database = require("../database/config")


async function marcarPartida(fkUsuario, acertos) {
    console.log("ACESSEI O JOGO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function marcarPartida():");
    const jogo = await database.executar(`
        INSERT INTO jogo VALUES (DEFAULT, DEFAULT);
    `);
    const jogoId = jogo.insertId;

    await database.executar(`
 INSERT INTO tentativaBestiario(fkJogo, fkUsuario, acertos) VALUES 
 (${jogoId}, ${fkUsuario}, ${acertos});
 `);    
}


function verPartida(fkUsuario) {
     console.log("ID recebido:",fkUsuario);
    var instrucao = 
    `SELECT MAX(acertos) as Pontos FROM tentativaBestiario WHERE fkUsuario = ${fkUsuario};`;

    return database.executar(instrucao)
}

module.exports = {
    verPartida,
    marcarPartida
};