import readline from 'readline-sync'

/* Exercício 04:
    Escreva um algoritmo que leia 3 palavras (string), 
    que definem as características de um tipo de animal, 
    seguindo o diagrama fornecido no arquivo de exercícios, 
    que deve ser lido da esquerda para a direita.
 */

let tipo_animal = readline.question("Informe se o animal é vertebrado ou invertebrado: ").toLowerCase();
let categoria_animal = readline.question("Informe a categoria do animal (ave, mamifero, inseto ou anelideo): ").toLowerCase();
let alimentacao_animal = readline.question("Informe o tipo de alimentação do animal (carnivoro, onivoro, herbivoro ou hematofago): ").toLowerCase();

let animal = "";

if (tipo_animal === "vertebrado" && categoria_animal === "ave" && alimentacao_animal === "carnivoro") {
  animal = "Águia";
  console.log(`Você escolheu um animal vertebrado, ave e carnívoro. Resultado: ${animal}`);
} else if (tipo_animal === "vertebrado" && categoria_animal === "ave" && alimentacao_animal === "onivoro") {
  animal = "Pomba";
  console.log(`Você escolheu um animal vertebrado, ave e onívoro. Resultado: ${animal}`);
} else if (tipo_animal === "vertebrado" && categoria_animal === "mamifero" && alimentacao_animal === "onivoro") {
  animal = "Homem";
  console.log(`Você escolheu um animal vertebrado, mamífero e onívoro. Resultado: ${animal}`);
} else if (tipo_animal === "vertebrado" && categoria_animal === "mamifero" && alimentacao_animal === "herbivoro") {
  animal = "Vaca";
  console.log(`Você escolheu um animal vertebrado, mamífero e herbívoro. Resultado: ${animal}`);
} else if (tipo_animal === "invertebrado" && categoria_animal === "inseto" && alimentacao_animal === "hematofago") {
  animal = "Pulga";
  console.log(`Você escolheu um animal invertebrado, inseto e hematófago. Resultado: ${animal}`);
} else if (tipo_animal === "invertebrado" && categoria_animal === "inseto" && alimentacao_animal === "herbivoro") {
  animal = "Lagarta";
  console.log(`Você escolheu um animal invertebrado, inseto e herbívoro. Resultado: ${animal}`);
} else if (tipo_animal === "invertebrado" && categoria_animal === "anelideo" && alimentacao_animal === "hematofago") {
  animal = "Sanguessuga";
  console.log(`Você escolheu um animal invertebrado, anelídeo e hematófago. Resultado: ${animal}`);
} else if (tipo_animal === "invertebrado" && categoria_animal === "anelideo" && alimentacao_animal === "onivoro") {
  animal = "Minhoca";
  console.log(`Você escolheu um animal invertebrado, anelídeo e onívoro. Resultado: ${animal}`);
} else {
  console.log("Combinação inválida de características.");
}