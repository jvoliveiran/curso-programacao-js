/*
1. Imprima os números de 1 a 10 usando um loop `for`.
*/

function umAteDez() {
    for(let i = 1; i <= 10; i++) console.log(i);
}

console.log('umAteDez');
umAteDez();

/*
2. Crie uma função que use um loop for para exibir todos os números pares entre 1 e 20. Dica: use o operador `%`.
*/
function apenasPares() {
    for(let i = 1; i<=20; i++) i % 2 === 0 ? console.log(i) : null ;
}

console.log('apenasPares');
apenasPares();

/*
3. Crie uma função que utiliza um loop for para imprimir a tabuada de um número `n` que é o argumento dessa função.
*/

function tabuada(n) {
    for(let i = 0; i <= 10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

console.log('tabuada');
tabuada(8);

/*
4. Cria uma função chamada `somatorio` que dado um valor `n`, que exibe no console a soma de todos os números, de 1 até `n`, utilizando um loop com for
*/

function somatorio(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) total += i;
    console.log(total);
}

console.log('somatorio');
somatorio(0); //0
somatorio(1); //1
somatorio(3); //6
somatorio(5); //15
