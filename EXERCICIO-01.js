const pedra = 1;
const tesoura = 0;

const jogador1 = tesoura;
const jogador2 = pedra;


if (jogador1 === jogador2) {
    console.log('A jogada deu empate.');
}
else if (jogador1 === pedra) {
    console.log('Mao vencedora do jogador 1: pedra.')
}
else {
    console.log('Mao vencedora do jogador 2: pedra.')
}
