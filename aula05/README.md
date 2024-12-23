# Exercícios - Escopo

1. O seguinte código não funciona por causa de um erro relacionado ao escopo. Corrija o código a seguir para que funcione sem remover nenhum código, apenas alterando a ordem das linhas:
```
function autonomiaVeiculo(tanque) {
    const kmPorLitro = 10;
    return tanque * kmPorLitro;
}

const autonomia = autonomiaVeiculo(20);
console.log(kmPorLitro);
console.log(autonomia);
```
