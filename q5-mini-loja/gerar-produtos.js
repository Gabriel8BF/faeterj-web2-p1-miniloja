const fs = require('fs');

const quantidade = process.argv[2];

if (!quantidade) {
    console.log('Erro: Informe a quantidade. Exemplo: node gerar-produtos.js 5');
    process.exit(1);
}

const produtos = [];
for (let i = 1; i <= quantidade; i++) {
    produtos.push({
        id: 100 + i,
        nome: `Produto Premium ${i}`,
        preco: (Math.random() * 100 + 10).toFixed(2)
    });
}

// O Next.js exige que arquivos estáticos acessíveis por fetch fiquem na pasta public
if (!fs.existsSync('./public')) fs.mkdirSync('./public');
fs.writeFileSync('./public/produtos.json', JSON.stringify(produtos, null, 2));

console.log(`Sucesso! ${quantidade} produtos criados em public/produtos.json.`);