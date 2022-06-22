let n1 = Math.floor(Math.random() * 60) +1;
let n2 = Math.floor(Math.random() * 60) +1;
let n3 = Math.floor(Math.random() * 60) +1;
let n4 = Math.floor(Math.random() * 60) +1;
let n5 = Math.floor(Math.random() * 60) +1;
let n6 = Math.floor(Math.random() * 60) +1;



let numerosMegaSena = [n1, n2, n3, n4, n5, n6];

let meusNumeros = [33, 12, 24, 7, 59, 18, 40];

let numerosAcerto = 0;

for (let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
  /* console.log(numerosMegaSena[indexMega]) */
  for (
    let indexAposta = 0;
    indexAposta < meusNumeros.length;
    indexAposta += 1
  ) {
    /* console.log(meusNumeros[indexAposta]); */
    if (numerosMegaSena[indexMega] === meusNumeros[indexAposta]) {
      numerosAcerto += 1;
      console.log("acertou .....", meusNumeros[indexAposta]);
    }
  }
}

console.log(numerosAcerto);

/* comparar agora */
