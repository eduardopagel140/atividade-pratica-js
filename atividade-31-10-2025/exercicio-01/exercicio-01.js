import readline from 'readline-sync'

/* Exercício 01:
    Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
    e imprima na tela se a soma de A + B é maior, menor ou igual a C.
*/

let numeroA, numeroB, numeroC, soma;

numeroA = readline.questionFloat("Digite o número A: ");
numeroB = readline.questionFloat("Digite o número B: ");
numeroC = readline.questionFloat("Digite o número C: ");

soma = numeroA + numeroB;

if(soma > numeroC){
    console.log(`A soma de A + B é "${soma}" e é maior que o número C "${numeroC}".`);
} 
else if (soma < numeroC) {
    console.log(`A soma de A + B é "${soma}" e é menor que o número C "${numeroC}".`);
} 
else {
    console.log(`A soma de A + B é "${soma}" e é igual ao número C "${numeroC}".`);
}