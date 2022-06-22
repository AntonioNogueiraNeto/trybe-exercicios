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