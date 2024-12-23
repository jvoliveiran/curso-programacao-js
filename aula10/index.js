/*
* 1. Crie uma função que receba um array de cores e retorne a cor na segunda posição do array.
* Caso o array tenha menos de dois elementos, retorne null
*/
function segundaCor(cores){
    if(cores.length < 2) return null;
    return cores[2];
}

const cor = segundaCor(['verde', 'branco', 'preto']);
console.log(cor);

const nulo = segundaCor(['verde']);
console.log(nulo);

/*
* 2. Adicione uma nova cor ao final de um array cores e exiba o array atualizado.
*/

function adicionarCor(cores, novaCor){
    cores.push(novaCor);
    return cores;
}

const cores = ['preto', 'branco']
const novasCores = adicionarCor(cores, 'verde');
console.log(novasCores);

/*
* 3. Remova o primeiro elemento de um array frutas e exiba o array após a remoção.
*/
const frutas = ['banana', 'laranja', 'uva'];

function removePrimeiroItem(array){
    array.shift();
    return array;
}
const resultadoFrutas = removePrimeiroItem(frutas);
console.log(resultadoFrutas);

/*
* 4. Encontre o comprimento de um array de nomes e exiba-o.
*/
const nomes = ['josé', 'maria', 'ana', 'pedro'];
function tamanhoArray(array){
    return array.length;
}
const tamanhoNomes = tamanhoArray(nomes);
console.log(tamanhoNomes);

/*
* 5. Crie um array de números e use um loop para exibir cada número multiplicado por 2.
*/
const numeros = [-1, 3.5, 8, 9, 1500];
function dobro(numeros){
    const numerosDobro = [];
    for(let index=0; index< numeros.length; index++){
        numerosDobro.push(numeros[index]*2);
    }
    return numerosDobro;
}

const numerosDobro = dobro(numeros);
console.log(numerosDobro);
