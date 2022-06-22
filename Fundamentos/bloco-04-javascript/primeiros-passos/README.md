<h1> historia do javascript </h1>



1988 Tim berners-Lee cria a Web

1991 lei é aprovada por Al Gore

Mosaic é um dos primeiros navagadores, desvolvido por 2 pessoas. Popularizou a internet, trazendo video imagem som.

1993 é criado a NetScape. que contrata Brendan Eich em 1995, usando uma linguagem parecida como java e C ele cria a Mocha.

Linguagem multi paradigma e flexivel, em 1995 mocha e mudada para javascript - aproveitando o hype do nome java.


Netscape pede padronizacao da linguagem entao em 1997 a ECMA-262 ECMAScprit, criando padroes e guias para que o JavaScript seja implementado.

<hr>

<h2>JavaScript váriaveis</h2>

vamos aprender como funcionam e o que são variáveis e constantes.

let - variaveis que podem receber alguma alteracao

const - constantes (não podem receber alteracoes

<hr>

<h2>JavaScript tipos primitivos</h2>

Agora que você já sabe o que são variáveis e constantes, vamos entender quais são os tipos primitivos, como o JS escolhe o tipo de uma variável através da tipagem dinâmica e como realizar operações aritméticas.

+ , - , * , / , ** 

let salary = 3500;
/* console.log(salary - salary);
console.log(salary + salary);
console.log(salary / salary);
console.log(salary * salary);
console.log(5 ** 2);

console.log(typeof) para descobrir de que tipo é a variavel 

let movie = "Avengers"; //string literal - atribuindo o valor de string

let score = 10; //number literal - atribuindo inteiros ou numeros quebrados

let isValid = true; // boolean - true para verdadeiro e false para falso ou 1 ou 0

let name; // undefined - indefinida

let color = null; // nulo - podendo definir posteriormente - redefinicao de valor

/* tipagem dinamica é quando podemos mudar alguma variavel */

<hr>



<h2>JavaScript condições</h2>


/* if - se */
/* else - senão */

/* estrutura */

let trybe = 16.42;

if (trybe >= 14 && trybe < 14.4) {
  console.log("esquenta");
} else if (trybe >= 16.3 && trybe < 17.5) {
  console.log("aula vivo");
} else if (trybe >= 19.4 && trybe < 20) {
  console.log("fechamento");
} else {
  console.log("fora dos momentos sincronos");
}



/* exercicios */


const nota = 80;

if (nota >=80){
    console.log("Parabéns, você foi aprovada(o)!")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera")
}else{
    console.log("Você foi reprovada(o)")
}


<hr>

<h2>Operadores lógicos</h2>

Na linguagem JavaScript, temos três principais operadores lógicos: &&, || e o !. Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.

<h3>Operador AND</h3>

const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.

  const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);

  Retornara falso pois uma é verdadeira e a outra e falsa


<h3>  Operador OR </h3>

Com o operador OR (ou ||, no JavaScript), precisamos apenas que uma das condições sejam verdadeiras: isso ou aquilo.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

<h3>Operador NOT</h3>


! - operador not  Ele pode inverter o valor booleano de um elemento

Se tivermos uma variável ou valor considerado true, podemos gerar o resultado oposto simplesmente fazendo !variável.

Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:
Strings...Valores nulos, Numericos e indefinidos
<hr>
<h2>Switch e Case</h2>

outra forma de utilizar condicoes

