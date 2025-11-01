import readline from 'readline-sync'

/* Atividade 02:
    Elabore um algoritmo em JS que leia 4 notas de um participante 
    e exiba na tela a média final do participante.
*/

let nota1;
let nota2;
let nota3;
let nota4;
let media_final;

nota1 = readline.questionFloat("Informe a primeira nota do participante: ");
nota2 = readline.questionFloat("Informe a segunda nota do participante: ");
nota3 = readline.questionFloat("Informe a terceira nota do participante: ");
nota4 = readline.questionFloat("Informe a quarta nota do participante: ");

media_final = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`\n A média final do participante foi de: ${media_final.toFixed(1)}`);