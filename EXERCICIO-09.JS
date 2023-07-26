const nota = 3.75
let resultado;

if (nota >= 9) {
    resultado = 'O estudante obteve conceito A'
}
else if (nota >= 8 && nota <= 8.9) {
    resultado = 'O estudante obteve conceito B'
}
else if (nota >= 6 && nota <= 7.9) {
    resultado = 'O estudante obteve conceito C'
}
else if (nota >= 4 && nota <= 5.9) {
    resultado = 'O estudante obteve conceito D'
}
else {
    resultado = 'O estudante obteve conceito E'
}
console.log(resultado);
