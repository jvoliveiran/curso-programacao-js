/*
1. Imprima os números de 1 a 10 usando um loop `while`.
*/

function umAteDez() {
    let i = 1;
    while(i<=10){
        console.log(i);
        i++;
    }
}

umAteDez();

/*
2. Crie uma função que use um loop `while` para exibir todos os números ímpares entre 1 e 20. Dica: use o operador `%`
*/

function apenasImpares(){
    let i = 1;
    while(i<=20){
        if(i % 2 != 0) console.log(i);
        i++;
    }
}
console.log('apenasImpares');
apenasImpares();

/*
3. Crie uma função que utiliza um loop `while` para diminuir o valor de um argumento `n` de 10 até chegar a 1, e exiba cada valor.
*/

function menosDez(n) {
    let i = 10;
    while(i > 0){
        console.log(n - i);
        i--;
    }
}

console.log('menosDez');
menosDez(100);

/*
4. Com o loop while, percorra os elementos de um array de cidades e exiba cada um no console.
*/

function loopCidades(cidades){
    let i = 0;
    while (i<cidades.length){
        console.log(cidades[i]);
        i++
    }
}

loopCidades(['Natal', 'Recife', 'Fortaleza']);