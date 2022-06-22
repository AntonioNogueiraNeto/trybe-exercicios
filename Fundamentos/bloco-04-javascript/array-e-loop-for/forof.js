let numeros = [1,2,3,4,5,6,7]
for(let numero of numeros) {
    console.log(numero)
}
/* 
Simples, certo? O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
Vamos para outro exemplo: */
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}


/* Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:
 */


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

/* 

Exercício 1
Utilize o for/of para imprimir os elementos da lista names com o console.log() */



let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name)
}



for(let index = 0; index <= 10; index+=1 ){
    console.log('Oie');}
  