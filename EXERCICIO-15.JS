const primeiroNome = 'ss'
const sobrenome = 'ff'
const apelido = ''

if (!primeiroNome && !sobrenome && !apelido) {
    console.log('Erro 404')
}
else if (!sobrenome && !apelido) {
    console.log(primeiroNome)
}
else if (apelido) {
    console.log(apelido)
}
else if (primeiroNome && sobrenome) {
    console.log(primeiroNome, sobrenome)
}
else if (!primeiroNome && sobrenome && !apelido) {
    console.log('Erro 404')
}