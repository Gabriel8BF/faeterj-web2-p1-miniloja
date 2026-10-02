const pc = require('picocolors');

const nome = process.argv[2];

if (!nome) {
    console.log(pc.red('Erro: Nenhum nome foi passado. Por favor, informe um nome no terminal.'));
} else {
    console.log(pc.green(`Olá, ${nome}! Bem-vinda ao curso de React.`));
}