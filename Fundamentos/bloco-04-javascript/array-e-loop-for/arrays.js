let variavel = "valor" // variavel simples

let pizza1 = '4 queijos';
let pizza2 = 'frango com catupiry'
let pizza3 = 'Marguerita'
let pizza4 = 'Palmito'
let pizza5 = 'frango molho pardo'


console.log(pizza1, pizza2, pizza3, pizza4, pizza5)


//variaveis compostas


let pizzas =['4 Queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Frango molho pardo']

// cada valor é chamado de indice e começa no 0 .

// index 0 seria 4 queijos 

/* console.log(pizzas) */

// adicionar valores no array - porem dessa forma temos que saber a posição exata

pizzas[5] = 'Chocolate';



//adicionando sem saber e colocando na ultima posição

pizzas.push('Peito de peru');

//saber o tamanho do array

/* pizzas.length */



console.log(pizzas.length)


//para colocar em forma ordenada usar o .sort

console.log(pizzas.sort());


//mostrar um unico elemento mostrando seu indice

console.log(pizzas[2]);


// mostrar todos os nomes da arrays com uma estrutura for


for (let index = 0; index < pizzas.length; index ++){
    console.log(pizzas[index])
}


// Como vimos no vídeo acima, uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura. Veja o exemplo e pratique:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3


//Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que por meio do .length, conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:


let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro


//Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0. Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1.
//Vamos agora adicionar uma nova atividade para nossa lista de arrays. Veja e pratique com o exemplo a seguir:



tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']



//adicionando no inicio

tasksList.unshift('comer pão')
console.log(tasksList)


//remover 

let startingDay = ['eat', 'shower', 'work']
console.log(startingDay.length) //tamanho
console.log(startingDay[2]) //posicao
startingDay.push('come home'); //adicionando ao final
console.log(startingDay[startingDay.length - 1]); //mostrando a ultimaposicao
startingDay.unshift('wake up'); //adicionando ao inicio
console.log(startingDay[0]) //mostrando a primeira posicao
startingDay.pop(); //remove a ultima posicao
console.log(startingDay[startingDay.length -1]) // 
startingDay.shift(); //remove a primeira posicao
console.log(startingDay[0]);



/* ---------------------------------------------------------------- */

let arrayNomes = ['MARCELO','CARLA','MARLENE', 'ADRIANA'];
let arrayNumeros = [1, 23, 55, 9, 0, 11];
let qualquerCoisa = [12, 'atanes', 6, true];