const quantidadeDeAguaIngerida;
let explicacao;

if (quantidadeDeAguaIngerida < 1.5) {
    explicacao = 'Risco ALto - Você está ingerindo pouquíssima água, beba mais água!'
}
else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    explicacao = 'Risco Moderado - Você está ingerindo pouca água, beba mais!'
}
else {
    explicacao = 'Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!'
}

console.log(explicacao);