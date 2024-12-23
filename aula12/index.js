/*
* 1. Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba o nome no console.
*/

const pessoa = {
    nome: 'Maria',
    idade: 20,
    cidade: 'São Paulo'
}

console.log(pessoa);

/*
* 2. Adicione uma nova propriedade profissao ao objeto pessoa e exiba o objeto completo.
*/

pessoa.profissao = 'Engenheira de Software'

console.log(pessoa);

/*
* 3. Crie uma função que receba um objeto carro com propriedades marca, modelo e ano, e exiba uma frase com esses dados.
*/

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1998
}

function exibirDados(carro){
    const { marca, modelo, ano } = carro;
    return `${marca} ${modelo}, ${ano}`;
}

const resultado = exibirDados(carro);
console.log(resultado);

/*
* 4. Acesse uma propriedade de um objeto produto usando a notação de colchetes e exiba o valor.
*/

const produto = {
    modelo: 'Macbook Pro M3',
    marca: 'Apple'
}

console.log(produto['modelo']);

/*
* 5. Crie um array de objetos alunos e use um loop para exibir o nome de cada aluno no console.
*/

const alunos = [
    { nome: 'Maria' },
    { nome: 'José' },
    { nome: 'Pedro' },
    { nome: 'Ana' }
];

function exibirNomes(alunos){
    alunos.forEach(aluno => {
        console.log(aluno.nome);
    });
}

exibirNomes(alunos);

