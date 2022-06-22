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