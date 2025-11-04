import readline from 'readline-sync'

/* Exercício 02:
    Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
    via teclado e mostre na tela o total de pessoas cuja idade 
    seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
    A leitura dos dados deve ser finalizada ao digitar uma idade negativa.
*/

let menores21 = 0;
let maiores50 = 0;

let idade = readline.questionInt("Digite uma idade (caso deseje encerrar, informe um valor negativo): ");

while (idade >= 0) {
    if (idade < 21) {
        menores21++;
    } else if (idade > 50) {
        maiores50++;
    }

    idade = readline.questionInt("Digite outra idade (caso deseje encerrar, informe um valor negativo): ");
}

console.log("\n===== RESULTADO FINAL =====");
console.table(`Total de pessoas menores de 21 anos: ${menores21}`);
console.table(`Total de pessoas maiores de 50 anos: ${maiores50}`);