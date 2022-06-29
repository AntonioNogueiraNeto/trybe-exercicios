//exercicio 1
console.log(document.getElementById("primeiroFilho").nextElementSibling);

//exericicio 2

const pai = document.getElementById("elementoOndeVoceEsta").parentElement;

pai.style.color = "red";

console.log(pai);

//exercicio 3

const primeiroFilhodoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhodoFilho.innerHTML = "Adicionando texto";

//exercicio 4

const primeiroFilho = document.getElementById("pai").firstElementChild;

console.log(primeiroFilho);

// exercicio 5

const primeiroFilho1 = document.getElementById(
  "elementoOndeVoceEsta"
).previousElementSibling;

console.log(primeiroFilho1);

// exercicio 6
const atencao = document.getElementById("elementoOndeVoceEsta");
const textElemente = atencao.nextSibling;


console.log(textElemente);


//exercicio 7

const terceiroFilho = atencao.nextElementSibling

console.log(terceiroFilho);

//exercicio 8

const paii = document.getElementById('pai');

const tercero = paii.lastElementChild.previousElementSibling
console.log(tercero);


//exercicio 9
const irmaoElementoOndeVoceEsta = document.createElement('section')
irmaoElementoOndeVoceEsta.id ='irmaoElementoOndeVoceEsta'
paii.appendChild(irmaoElementoOndeVoceEsta)

console.log(irmaoElementoOndeVoceEsta);




//exercicio 10

const filhoElementoOndeVoceEsta = document.createElement('section')

filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta'

atencao.appendChild(filhoElementoOndeVoceEsta)
console.log(filhoElementoOndeVoceEsta);


// exercicio 11

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

const filhoPirmeiroFilhoDoFilho = document.createElement('section')

filhoPirmeiroFilhoDoFilho.id = 'filhoPirmeiroFilhoDoFilho'

primeiroFilhoDoFilho.appendChild(filhoPirmeiroFilhoDoFilho)

console.log(filhoPirmeiroFilhoDoFilho);



//


const terceirofilho = filhoPirmeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

console.log(terceiroFilho);


// remover todos os elementos filhos de pai do pai, exeto pai, elemento onde voce esta e primeiro filho do filho


for (let index = paii.childNodes.length -1; index >= 0; index<= 1){
    const currentChild = paii.childNodes[index];
    if (currentChild.id !== 'elementoOndeVoceEsta') {
        currentChild.remove()
    }

     const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();