const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855970;

if (aposentada) {
    console.log('ISENTA')
}
else if (portadoraDeDoenca) {
    console.log('ISENTA')
}
else if (totalDeRendimentos < 2855970) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
}
else {
    console.log('PAGA LEAO')
}