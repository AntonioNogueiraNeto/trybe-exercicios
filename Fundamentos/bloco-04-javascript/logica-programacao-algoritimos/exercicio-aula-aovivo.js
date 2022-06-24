/*  1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:

A soma de 35 a 105 é: X. 
 */

let resultado = 0;
for (let i = 35; i <= 105; i += 1){
    resultado = resultado + i;
}
console.log("a soma de 35 a 105 é :", resultado)


// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
let intervalo = 0;
for (let index = 15; index <= 155; index += 1){
    if (index % 3 === 0){
        intervalo += 1;
    } else{

    }
}
 if (intervalo > 50){
    console.log("mais de 50 itens")
 }

    console.log(intervalo)








//3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
//“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 ="tesoura"
let jogador2 ="pedra"

if (jogador1 ===jogador2){
    console.log("empate");
}else if(jogador1 === "papel" && jogador2 ==="pedra"){
    console.log("jogador 1 vence");
} else if(jogador1 ==="pedra" && jogador2 === "tesoura"){
    console.log("jogador 1 vence");
}else if (jogador1 === "tesoura" && jogador2 === "papel" ){
    console.log("jogador 1 vence");
} else {
    console.log("jogador 2 vence");
}











//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
//Bônus: Crie a condição utilizando operador ternário.


let idade = "casa";
if (idade < 18){
    console.log("A pessoa é menor de idade");
}else if (idade >= 18) {
    console.log("A pessoa é maior de idade");
}else{
    console.log("erro na entrada de valores:");
}








//5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
//“Pessoa” é a mais nova

let ademar = 35;
let adriana = 22;
let julia = 10;

if (ademar < adriana && ademar <julia){
    console.log("ademar é a mais novo");
}else if (adriana < ademar && adriana < julia){
    console.log("adriana é a mais nova");
}else if (julia < ademar && julia < adriana){
    console.log("julia é a mais nova");
}else{
    console.log("erro na entrada de dados");
}