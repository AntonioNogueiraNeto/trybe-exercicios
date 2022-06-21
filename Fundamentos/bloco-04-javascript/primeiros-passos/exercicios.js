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

let nomepeca = "Torre";

if (nomepeca.toLowerCase() == "peao" || nomepeca.toLowerCase() == "pawn" || nomepeca.toLowerCase() == "peão") {
  console.log(nomepeca.toLowerCase() + "," + "move apenas um espaco para frente");
} else if (nomepeca.toLowerCase()== "cavalo" || nomepeca.toLowerCase() == "horse") {
  console.log(nomepeca.toLowerCase()+ "," + "move em L");
} else if (nomepeca.toLowerCase()== "bispo" || nomepeca.toLowerCase()== "bishop") {
  console.log(nomepeca.toLowerCase()+ "," + "move em diagonais");
} else if (nomepeca.toLowerCase() == "rainha" || nomepeca.toLowerCase() == "queen") {
  console.log(
    nomepeca.toLowerCase() +
      "," +
      "move tanto em diagonais quanto em fileiras horizontais e verticais"
  );
} else if (nomepeca.toLowerCase() == "rei" || nomepeca.toLowerCase() == "king") {
  console.log(
    nomepeca.toLowerCase() +
      ", " +
      "move apenas um espaço por vez, ou para frente ou para o lado"
  );
} else if (nomepeca.toLowerCase() == "torre" || nomepeca.toLowerCase() == "tower") {
  console.log(nomepeca.toLowerCase() + " ," + "move tanto na vertical quanto horizontal");
} else {
  console.log("erro nome da peça");
}




/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
 */



let nota = 80;

if (nota >= 90){
    console.log('A')
} else if(nota >= 80){
    console.log('B')
}else if(nota >= 70){
    console.log('C')
}else if(nota >= 60){
    console.log('D')
}else if(nota >= 50){
    console.log('E')
}else {
    console.log('F')
}

/* 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const numeroA = 3;
const numeroB = 5;
const numeroC = 5;

if ((numeroA / 2) % 2 == 0 || ( numeroB / 2) % 2 == 0 ||  ( numeroC / 2) % 2 == 0){
    console.log("true") 
}else {
    console.log("false")
}



/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const numeroAA = 3;
const numeroBB = 5;
const numeroCC = 5;

if ((numeroAA/ 2) % 2 == 0 || ( numeroBB / 2) % 2 == 0 ||  ( numeroCC / 2) % 2 == 0){
    console.log("false") 
}else {
    console.log("true")
}



/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};


/* Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */




let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));