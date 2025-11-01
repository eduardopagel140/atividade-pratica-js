import readline from 'readline-sync'

/* Exercício 03:
    Para doar sangue é necessário ter entre 18 e 69 anos. 
    Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. 
    Escreva um Algoritmo que leia via teclado o nome do doador (string), 
    a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
    Conforme as Regras para a doação de sangue citadas acima, 
    mostre na tela se o doador está Apto ou Não Apto para doar sangue.
*/

let nome = readline.question("Informe o nome do doador: ");
let idade = readline.questionInt("Informe a idade do doador: ");
let opcao_doacao = readline.question("Primeira doação de sangue? (true/false): ");

let resposta_doacao;

// Converte a resposta para booleano
if (opcao_doacao === "true"){
    resposta_doacao = true;
} else if (opcao_doacao === "false") {
    resposta_doacao = false;
} else {
    console.log("Resposta inválida. Digite 'true' ou 'false'.");
    process.exit(); // encerra o programa
}

// Aplica as regras para verificar se o doador está apto
if (idade < 18 || idade > 69) {
    console.log(`${nome} não está apto(a) para doar sangue pois está fora da faixa etária.`);
} else if (idade >= 60 && idade <= 69 && resposta_doacao === true) {
    console.log(`${nome} não está apto(a) para doar sangue pois é a primeira doação e tem entre 60 e 69 anos.`);
} else {
    console.log(`${nome} está apto(a) para doar sangue.`);
}