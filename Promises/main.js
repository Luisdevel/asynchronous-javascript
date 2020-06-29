function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() *(max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Esse valor não pode');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexao com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Bucando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Exibe dados na tela', rand(1, 3));
    })
    .catch(e => {
        console.log('ERRO:', e);
    });

    console.log('Isso sera exibido antes da promisse');