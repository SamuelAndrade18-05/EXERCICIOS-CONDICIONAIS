const idade = 22
const possuiPatologia = false
const altura = 169
const ehEstudante = false

if (possuiPatologia || idade < 12 || idade > 65 || altura < 150) {
    console.log('ACESSO NEGADO')
}
else if (ehEstudante || idade < 18) {
    console.log('10 reais')
}
else {
    console.log('20 reais')
}
