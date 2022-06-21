/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

let a = 2;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const xablau = 20;
const xurastei = 10;

if (xablau > xurastei) {
  console.log("xablau é maior que xurastei");
} else if (xablau < xurastei) {
  console.log("xablau é menor que xurastei");
} else {
  console.log("xablau é igual a xurastei");
}

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const aa = 5;
const bb = 6;
const c = 4;

if (aa > bb && aa > c) {
  console.log("aa é a maior constante");
} else if (bb > aa && bb > c) {
  console.log("bb é a maior constante");
} else if (c > bb && c > aa) {
  console.log("c é a maior constante");
} else {
  console.log("não a constantes maiores que outras");
}

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const valor = 0;

if (valor > 0) {
  console.log("positivo");
} else if (valor < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

/* 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const anguloA = 1;
const anguloB = 60;
const anguloC = 90;

let triangulo;

if (anguloA + anguloB + anguloC == 180) {
  triangulo = true;
  console.log(triangulo);
} else if (
  anguloA + anguloB + anguloC > 180 ||
  anguloA + anguloB + anguloC < 180
) {
  triangulo = false;
  console.log(triangulo);
}

if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
  console.log("Os ângulos são validos");
} else {
  console.log("Algum ângulo é invalido, numero negativo");
}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let nomepeca = "queen";

if (nomepeca == "peao" || nomepeca == "pawn" || nomepeca == "peão") {
  console.log(nomepeca + "," + "move apenas um espaco para frente");
} else if (nomepeca == "cavalo" || nomepeca == "horse") {
  console.log(nomepeca + "," + "move em L");
} else if (nomepeca == "bispo" || nomepeca == "bishop") {
  console.log(nomepeca + "," + "move em diagonais");
} else if (nomepeca == "rainha" || nomepeca == "queen") {
  console.log(
    nomepeca +
      "," +
      "move tanto em diagonais quanto em fileiras horizontais e verticais"
  );
} else if (nomepeca == "rei" || nomepeca == "king") {
  console.log(
    nomepeca +
      ", " +
      "move apenas um espaço por vez, ou para frente ou para o lado"
  );
} else if (nomepeca == "torre" || nomepeca == "tower") {
  console.log(nomepeca + " ," + "move tanto na vertical quanto horizontal");
} else {
  console.log("erro nome da peça");
}
