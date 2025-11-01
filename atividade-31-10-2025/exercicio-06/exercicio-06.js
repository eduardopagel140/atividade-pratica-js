import readline from 'readline-sync'

/* Exercício 06:
    Com base na tabela exibida no arquivo de exercícios, 
    escreva um algoritmo que leia o Nome do Colaborador (string), 
    o Código do Cargo do Colaborador (número inteiro entre 1 e 6) 
    e o Salário (número real). 
    A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.
 */

let nome = readline.question("Informe o nome do colaborador: ");
let codigo = readline.questionInt("Informe o código do cargo (1 a 6): ");
let salario = readline.questionFloat("Informe o salário atual: ");

switch (codigo) {
    case 1:
        let salario_ajustado1 = salario + (salario * 0.10);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Gerente`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    case 2:
        let salario_ajustado2 = salario + (salario * 0.07);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Vendedor`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    case 3:
        let salario_ajustado3 = salario + (salario * 0.09);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Supervisor`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado3.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    case 4:
        let salario_ajustado4 = salario + (salario * 0.06);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Motorista`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado4.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    case 5:
        let salario_ajustado5 = salario + (salario * 0.05);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Estoquista`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado5.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    case 6:
        let salario_ajustado6 = salario + (salario * 0.08);

        console.log(`\nNome do Colaborador: ${nome}`);
        console.log(`Cargo: Técnico de TI`);
        console.log(`Salário Reajustado: R$ ${salario_ajustado6.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
    break;

    default:
        console.log("\nCódigo inválido! Digite um número entre 1 e 6.");
    break;
}