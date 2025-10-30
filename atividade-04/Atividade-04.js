import readline from 'readline-sync'

/* Atividade 04:
    Leia quatro valores (n1, n2, n3, n4). 
    A seguir, calcule e mostre a diferença do 
    produto entre o n1 e n2 pelo produto entre o n3 e o n4.
*/

let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = readline.questionFloat("Informe o primeiro valor: ");
n2 = readline.questionFloat("Informe o segundo valor: ");
n3 = readline.questionFloat("Informe o terceiro valor: ");
n4 = readline.questionFloat("Informe o quarto valor: ");

diferenca = (n1 * n2) - (n3 * n4);

console.log(`\n A diferença do Produto é de: ${diferenca.toFixed(1)}`);