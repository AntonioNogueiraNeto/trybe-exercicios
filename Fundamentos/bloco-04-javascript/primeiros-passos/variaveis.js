let age = 20;
let name = "antonio";
let Name = "toninho";
/* let é uma variavel  */

/* podemos reatribuir valores em variaveis tipo let */

age = 31;
/* caso uma variavel seja constate usamos o const */

const local = "Betim";


/* usamos o console.log para trazer a informacao gravada para o terminal */

console.log(age);
console.log(name);
console.log(Name);
console.log(local);



/* Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
 */

const myName = "Antonio";

/* Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
 */

const birthCity = "Belo Horizonte";

/* Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
 */

const birthYear = "1991"

/* Utilize o console.log() para imprimir as constantes e variáveis que você criou.
 */

console.log(birthCity)
console.log(myName)

/* Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
 */

birthYear = 2030
console.log(birthYear)
/* ERROR */
/* TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/antonio/Documentos/trybe/Fundamentos/bloco-04/primeiros-passos/scripts.js:47:11)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 */

birthCity = "São Paulo"
console.log(birthCity);

/* TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/antonio/Documentos/trybe/Fundamentos/bloco-04/primeiros-passos/scripts.js:47:11)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

[Done] exited with code=1 in 0.105 seconds
 */

/* Explicando o Erro -  Variaveis tipo const, são constantes e nao podem ter seu valor alterado depois de definidas, para isso poderiamos usar o var ou let */
