const rendaMensalEmCentavos = 800000
const mesesDecorridos = 12
let parcela = (rendaMensalEmCentavos * 0.18) / 100
const totalJaPagoPeloAluno = [(rendaMensalEmCentavos * 0.18) * mesesDecorridos] / 100;
let saldoDevedor = 18000 - totalJaPagoPeloAluno;

console.log(`O valor da parcela é de R$ ${parcela.toFixed(2)} reais.`);




