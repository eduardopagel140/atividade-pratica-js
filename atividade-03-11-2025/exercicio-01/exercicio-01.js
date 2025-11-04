import readline from 'readline-sync'

/* Exercício 01:
    Escreva um algoritmo, que leia 10 números inteiros via teclado 
    e mostre na tela quantos números são pares e quantos número são ímpares.
*/

let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = readline.questionInt(`Digite o ${i}º numero inteiro: `);

    if (numero % 2 === 0) {
        quantidadePares++;
        console.log(`O número "${numero}" é PAR`);
    } else {
        quantidadeImpares++;
        console.log(`O número "${numero}" é ÍMPAR`);
    }
}

console.log("\n===== RESULTADO FINAL =====");
console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);