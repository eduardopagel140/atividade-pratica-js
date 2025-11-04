import readline from 'readline-sync'

/* Exercício 04:
    Elabore um algoritmo que leia 10 números inteiros 
    e armazene em um vetor. Em seguida, mostre na tela:
        - Todos os elementos dos índices ímpares do vetor 
        - Todos os elementos do vetor que são números pares
        - A Soma de todos os elementos do vetor
        - A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
*/

let numerosVetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let numero = readline.questionInt(`Digite o ${i + 1}° número inteiro: `);
    numerosVetor.push(numero);
    soma += numero;
}

console.log("\nElementos nos índices ímpares do vetor:");
for (let i = 1; i < numerosVetor.length; i += 2) {
    console.log(`Índice ${i}: ${numerosVetor[i]}`);
}

console.log("\nElementos nos índices pares do vetor:");
for (let i = 0; i < numerosVetor.length; i++) {
    if (numerosVetor[i] % 2 === 0) {
        console.log(`Índice ${i}: ${numerosVetor[i]}`);
    }
}

let media = soma / numerosVetor.length;

console.log(`\nA soma de todos os elementos é: ${soma}`);
console.log(`A média de todos os elementos é: ${media.toFixed(2)}`);