// 1. O seguinte código não funciona por causa de um erro relacionado ao escopo. 
// Corrija o código a seguir para que funcione:
const kmPorLitro = 12;

function autonomiaVeiculo(tanque) {
    return tanque * kmPorLitro;
}

const autonomia = autonomiaVeiculo(35);
console.log(kmPorLitro);
console.log(autonomia);
