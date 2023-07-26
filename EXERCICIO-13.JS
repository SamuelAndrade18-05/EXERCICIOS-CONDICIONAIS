const tipoDePagamento;
const valorDoProduto;
let descontoCredito = 0.05
let descontoCheque = 0.03
let descontoDebitoDinheiro = 0.1
let valorFinal;
let resultado;

if (tipoDePagamento === 'credito') {
    ValorFinal = valorDoProduto - (valorDoProduto * descontoCredito)
}
else if (tipoDePagamento === 'cheque') {
    ValorFinal = valorDoProduto - (valorDoProduto * descontoCheque)
}
else if (tipoDePagamento === 'Debito') {
    ValorFinal = valorDoProduto - (valorDoProduto * descontoDebitoDinheiro)
}
else {
    ValorFinal = valorDoProduto - (valorDoProduto * descontoDebitoDinheiro)
}

console.log(`Valor a ser pago: R$ ${ValorFinal.toFixed(2)}`)