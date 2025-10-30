import readline from 'readline-sync'

/* Atividade 01:
    Desenvolver um algoritmo JS que receba dois valores(entrada) 
    e informe(saída) a soma dos dois valores.
*/

let salario;
let abono;
let novo_salario;

salario = readline.questionInt("Informe o valor do seu salário atual: ");
abono = readline.questionInt("Informe o valor do seu abono salarial: ");

novo_salario = salario + abono;

console.log(`\n O valor do seu novo salário é de: ${novo_salario}`);