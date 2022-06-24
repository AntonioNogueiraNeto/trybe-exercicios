//imprimir todos os números pares entre 0 e 100 usando FOR tradicional
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

//decompor uma string e gerar um array com suas palavras
let arquivoTexto = "Rodrigo Fabiana Arthur Joussemar Pétala";
let arrayNomes = arquivoTexto.split(" ");
console.log(arrayNomes);
for (let nome of arrayNomes) {
  //caminhar do primeiro até o ultimo elemento
  console.log(nome);
}

//como Pegar o maior numero de um array de forma rápida

let numeros = [3, 7, 13, 9, 155, 45, 123, 3, 155];

let maiorNumero = Math.max.apply(null, numeros);
console.log(maiorNumero);

//percorrer uma string com for OF

let senha = "robot@1234";

for (letra of senha) {
  if (letra === "@") {
    letra = "!";
  }
  console.log(letra);
}

//O for of que nos permita caminhar por todos elementos do array do primeiro até o ultimo sem nessa sequencia

//for in traz o indice de cada elemento
for (let n in arrayNomes) {
  console.log(n);
}

//declarando e trabalhando objetos

let pessoa = {
  name: "Antonio Henriques",
  idade: 31,
  localNascimento: "Belo Horizonte",
  apelido: "tonhao",
};


//for in para caminhar por todas as chaves e valores do objeto
for( chave in pessoa){
    console.log('chave:', chave, 'valor:', pessoa[chave]);
}

console.log(pessoa['apelido'] + ' ' + pessoa.localNascimento);


//for of nao funciona para objetos

// incluir valor no objeto
pessoa.endereco = {
    logardouro: 'rua avaré',
    num: 123
}

console.table(pessoa)