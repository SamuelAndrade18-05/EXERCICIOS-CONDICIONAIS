let ladoA;
let ladoB;
let resul;

if (ladoA > 6 || ladoB > 6) {
    console.log('Tente novamente');
}
else if (ladoA !== ladoB) {
    console.log('Não é uma bucha');
}
else if (ladoA === 0 && ladoB === 0) {
    console.log('É uma bucha de Branco')
}
else if (ladoA === 1 && ladoB === 1) {
    console.log('É uma bucha de Às')
}
else if (ladoA === 2 && ladoB === 2) {
    console.log('É uma bucha de Duque')
}
else if (ladoA === 3 && ladoB === 3) {
    console.log('É uma bucha de Terno')
}
else if (ladoA === 4 && ladoB === 4) {
    console.log('É uma bucha de Quadra')
}
else if (ladoA === 5 && ladoB === 5) {
    console.log('É uma bucha de Quina')
}
else if (ladoA === 6 && ladoB === 6) {
    console.log('É uma bucha de Sena')
}