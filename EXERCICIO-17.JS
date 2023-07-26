const valorDoProduto = 15690
const quantidadeDoParcelamento = 24
let valorParcela = valorDoProduto / quantidadeDoParcelamento
const valorPago = 6537.50
let tempo = 24
let parcelasPagas = valorPago / valorParcela
let parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;
let saldoDevedor = valorDoProduto - valorPago


console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorParcela} reais.`);
