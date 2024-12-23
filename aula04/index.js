//1. Crie uma função que exibe "Olá, Mundo!" quando chamada.
function olaMundo() {
    console.log('Olá mundo!');
}

olaMundo();

//2. Escreva uma função que receba um nome como argumento e exiba uma mensagem de boas-vindas usando o nome.
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('João');

//3. Crie uma função que receba dois números como argumentos e retorne sua soma.
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(3,2)) //5

//4. Faça uma função que verifique se um número é par e retorne true ou false.
function numeroPar(numero){
    return numero % 2 === 0; //Operador '%' retorna o resto da divisão.
}

console.log(numeroPar(1)); //false
console.log(numeroPar(2)); //true
