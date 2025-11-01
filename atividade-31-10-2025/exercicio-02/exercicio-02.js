import readline from 'readline-sync'

/* Exercício 02:
    Escreva um algoritmo que leia um número inteiro via teclado 
    e mostre na tela uma mensagem indicando se este número é par ou ímpar 
    e se o número é positivo ou negativo.
*/

let numero;

numero = readline.questionFloat("Digite um número inteiro qualquer: ");

if (!Number.isInteger(numero)){
    console.log("O número informado não é inteiro.");
} else if (numero % 2 === 0 && numero > 0){
    console.log(`O número informado é "${numero}" e ele é par e positivo.`);
} else if (numero % 2 !== 0 && numero > 0){
    console.log(`O número informado é "${numero}" e ele é ímpar e positivo.`);
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`O número informado é "${numero}" e ele é par e negativo.`);
} else if (numero % 2 !== 0 && numero < 0) {
    console.log(`O número informado é "${numero}" e ele é ímpar e negativo.`);
} else {
    console.log(`O número informado é "${numero}" e ele é par.`);
}