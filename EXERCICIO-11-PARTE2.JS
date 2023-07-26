const valorCurso = 18000
const rendaMensalEmCentavos = 100000
const mesesDecorridos = 1
let parcela = (rendaMensalEmCentavos * 0.18) / 100
const totalJaPagoPeloAluno = [(rendaMensalEmCentavos * 0.18) * mesesDecorridos] / 100;
let saldoDevedor = valorCurso - totalJaPagoPeloAluno;

if (rendaMensalEmCentavos < 200000) {
    console.log('O valor da parcela desse mês é de 0 reais, pois a renda mensal do aluno ainda é inferior a mínima permitida.')
}
else if (saldoDevedor === 0) {
    console.log('O valor da parcela desse mês é de R$ 0 reais, pois o curso já foi quitado.')
}
else {
    console.log(`Ainda faltam parcelas de R$ ${parcela} reais a vencer do pagamento do curso, hoje o seu saldo devedor é de R$ ${saldoDevedor} reais.`)
}