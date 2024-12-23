/*
1. Crie uma condição que exiba no console "Maior de idade" se uma variável `idade` for maior ou igual a 18, e "Menor de idade" caso contrário.
*/
//const idade = 10;
const idade = 18;

if(idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

/*
2. Escreva uma função que exiba no console "Par" se argumento da função for um número para e "Ímpar" caso o argumento seja um número ímpar. Dica: utilize o operador `%` para descobrir se um número é par ou ímpar
*/

function parOuImpar(numero) {
    if( numero % 2 === 0) {
        console.log('Par');
    } else {
        console.log('Ímpar');
    }
}

parOuImpar(1); // Ímpar
parOuImpar(2); // Par

/*
3. Escreva uma função que verifica se um aluno está aprovado ou reprovado com base em uma nota. Caso a nota seja 6 a 10, exiba "Aprovado" no console, e caso seja de 5 a 0, exiba "Reprovado"
*/

function calcularResultadoAluno(nota) {
    if (nota >= 6) 
        console.log("Aprovado");
    else 
        console.log("Reprovado");
}

calcularResultadoAluno(6); // Aprovado
calcularResultadoAluno(2); // Reprovado

/*
4. Escreva uma função que exiba "Bom dia", "Boa tarde" ou "Boa noite" de acordo com um argumento hora (entre 0 e 23).
*/

function saudacao(hora) {
    if(hora >= 1 && hora <= 12)
        console.log("Bom dia");
    else if(hora >= 12 && hora <= 17)
        console.log("Boa tarde");
    else
        console.log("Boa noite");
}

saudacao(5); // Bom dia
saudacao(14); // Boa tarde
saudacao(0); // Boa noite

function categoriaPorIdade(idade) {
    if(idade <= 12)
        console.log("criança");
    else if(idade <= 17)
        console.log("adolescente");
    else if(idade <= 59)
        console.log("adulto");
    else
        console.log("idoso");
}

categoriaPorIdade(0); // criança
categoriaPorIdade(13); // adolescente
categoriaPorIdade(59); // adulto
categoriaPorIdade(60); // idoso