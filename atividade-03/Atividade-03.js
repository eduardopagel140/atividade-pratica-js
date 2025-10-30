import readline from 'readline-sync'

/* Atividade 03:
    Elabore um algoritmo em JS que leia o Salário Bruto, 
    o Adicional Noturno, as Horas Extras, os Descontos de um Colaborador 
    e exiba na tela o Salário Líquido.
*/

let salario_bruto;
let adicional_noturno;
let horas_extras;
let descontos;
let salario_liquido;

salario_bruto = readline.questionFloat("Informe o Salário Bruto do Colaborador: ");
adicional_noturno = readline.questionFloat("Informe o Adicional Noturno do Colaborador: ");
horas_extras = readline.questionFloat("Informe as Horas Extras do Colaborador: ");
descontos = readline.questionFloat("Informe os Descontos do Colaborador: ");

salario_liquido = salario_bruto + adicional_noturno + (horas_extras * 5) - descontos;

console.log(`\n O Salário Líquido do Colaborador é de: ${salario_liquido.toFixed(2)}`);