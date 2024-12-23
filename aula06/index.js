/*
1. Converta a seguinte frase numa expressão booleana que retorne `true`:
```
Se eu assistir todos os vídeos e fizer todos os exercícios, irei aprender javascript.
```
*/

const fazerExercicios = true;
const assistirVideos = true;
const aprenderJavascript = fazerExercicios && assistirVideos;
console.log(aprenderJavascript);

/*
2. Converta a seguinte frase numa expressão booleana que retorne `true`:
```
Para um aluno ser aprovado, precisará ter menos de 10 faltas e nota igual a 7 ou maior na média ou nota igual ou maior que 6 na recuperação
```
*/
const faltas = 2;
const media = 5;
const recuperacao = 9;
const aprovado = (faltas < 10) && (media >= 7 || recuperacao >= 6);
console.log(aprovado);