/* tipos primitivos */

let movie = "Avengers"; //string literal - atribuindo o valor de string

let score = 10; //number literal - atribuindo inteiros ou numeros quebrados

let isValid = true; // boolean - true para verdadeiro e false para falso ou 1 ou 0

let name; // undefined - indefinida

let color = null; // nulo - podendo definir posteriormente - redefinicao de valor

/* tipagem dinamica é quando podemos mudar alguma variavel */

/* operacoes aritimeticas - + - /divisao *multiplicacao **expodencial  */

let salary = 3500;
/* console.log(salary - salary);
console.log(salary + salary);
console.log(salary / salary);
console.log(salary * salary);
console.log(5 ** 2);
 */
salary++; /* adiciona mais 1, incremento  */
salary--; /* decrementa  */
console.log(salary);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log(typeof patientAge);


/* Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8. */

/* Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
 */

const base = 5;
let height = 8;

const area = (height * base);

console.log(area)/* 40 */

const perimeter = (height*2) + (base*2)
console.log(perimeter) /* 26 */