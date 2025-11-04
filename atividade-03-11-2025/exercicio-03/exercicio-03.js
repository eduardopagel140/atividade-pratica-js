import readline from 'readline-sync'

/* Exercício 03:
    Escreva um algoritmo, que leia números inteiros via teclado, 
    até que o número zero seja digitado. Ao final, mostre na tela 
    a média de todos os números digitados, que sejam múltiplos de 3.
*/

let somaMultiplos = 0;
let quantidadeMultiplos = 0;
let numero;

do {
    numero = readline.questionInt("Digite um número inteiro (para encerrar, digite 0): ");

    if (numero !== 0 && numero % 3 === 0) {
        somaMultiplos += numero;
        quantidadeMultiplos++;
    }
    
} while (numero !== 0);

if (quantidadeMultiplos > 0) {
    let media = somaMultiplos / quantidadeMultiplos;
    console.log(`\nA média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
    console.log("\nNenhum número múltiplo de 3 foi digitado.");
}