function imprimeMsgBoasVindas (){
    console.log ('Seja muito bem vindo!!');
}
//chamando uma funcao
imprimeMsgBoasVindas();

//funcao que receba um parametro

function imprimeBoasvidasComNome(nome){
    console.log ('Seja muito bem vindo!!', nome);
}
imprimeBoasvidasComNome('Atanes')
imprimeBoasvidasComNome('Caleb')

//funcao que retorne alguma coisa 

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2,9));


//adicionando 2 arrays e contatenando em um objeto

let nomes = ['Marcos', 'Dirlei', 'Joseli', 'Leticia', 'Manoela', 'Carla']
let idades = [23, 51, 41, 18, 27, 33]



function nomesEIdades(arrayNomes, arrayIdades){
let arrayNomesEidades = [];
for(let index =0; index < arrayNomes.length; index +=1){
    arrayNomesEidades.push({ nome: arrayNomes[index], idade: arrayIdades[index]})
}
return arrayNomesEidades;
}
console.log(nomesEIdades(nomes, idades))


