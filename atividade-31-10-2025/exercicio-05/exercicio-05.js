import readline from 'readline-sync'

/* Exercício 05:
    Com base na tabela abaixo, escreva um algoritmo que leia o código 
    de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
    A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
 */

let codigo_produto = readline.questionInt("Digite o código do Produto (1 a 6): ");
let quantidade_produto = readline.questionInt("Digite a quantidade desejada: ");

let total = 0;

switch (codigo_produto) {
    case 1:
        total = quantidade_produto * 10.00;

        console.log(`\nProduto selecionado: Cachorro Quente`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    case 2:
        total = quantidade_produto * 15.00;

        console.log(`\nProduto selecionado: X-Salada`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    case 3:
        total = quantidade_produto * 18.00;

        console.log(`\nProduto selecionado: X-Bacon`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    case 4:
        total = quantidade_produto * 12.00;

        console.log(`\nProduto selecionado: Bauru`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    case 5:
        total = quantidade_produto * 8.00;

        console.log(`\nProduto selecionado: Refrigerante`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    case 6:
        total = quantidade_produto * 13.00;

        console.log(`\nProduto selecionado: Suco de Laranja`);
        console.log(`Quantidade: ${quantidade_produto}`);
        console.log(`Valor Total: R$ ${total.toFixed(2)}`);
    break;

    default:
        console.log("\nCódigo inválido! Digite um número entre 1 e 6.");
    break;
}