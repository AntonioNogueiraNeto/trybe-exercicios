<h1>JavaScript - Array e Loop For</h1>

<h2>O que verei</h2>

<p>
  Aprenderei duas das principais
  <strong>estruturas de dados </strong> disponíveis na linguagem e algumas
  formas de iterar sobre elas
</p>

<p>
  <em><strong> Array e For</strong></em>
</p>

<hr />

<h2>Serei capaz de:</h2>

<ol>
  <li>Manipular Arrays</li>
  <li>Utilizar o comando <strong>for</strong></li>
</ol>

<hr />

<h2>Por que isso é importante</h2>

<p>
  A manipulação de Arrays estará presente em toda sua carreira como pessoa
  desenvolvedora. Você irá usar arrays frequentemente para armazenar os dados
  que achar necessário. <br />
  Concentre-se em entender ao máximo o conceito de Array e como manipulá-los,
  pois essa base será importante para avançar seu conhecimento.
</p>

<hr />

<h2>Arrays</h2>

<p>
  Uso quando quero guardar um conjunto de informações que eu quero manter em um
  "link"
</p>

<p>
  para cada elemento dentro de um array eu tenho um index.
  <br />
  o primeiro elemento tera o index [0]
  <br />
</p>

<p>
  arrays sao demontrados -> let variavel = ["valor", "outro valor"] <br />
  para saber o tamanho do array -> variavel.lenght <br />
  para adicionar ao final do array um valor -> variavel.push()<br />
  para adicionar ao inicio do array um valor -> variavel.unshift()<br />
  para remover do final usamos -> variavel.pop()<br />
  para remover do inicio usamos -> vairavel.shift()<br />
  para descobrir o index de um valor -> let indexOfvariavel =
  variavel.indexOf('valor')
</p>

<hr />

<h2>Loop For</h2>

<img src="img/Captura de tela de 2022-06-22 16-29-17.png" alt="diferenca entre loop e condicao">

<p>
  loop for são laços de repetição que executam um bloco de notas inúmeras vezes.
  <br />

como escrever uma estrutura de repetição; <br />
let array = ["valor", "outro valor", "mais um valor"] --- criacao de um array
for (let index = 0; index < array.lenght; index += 1){
console.log(array[index]) } <br />

utilizamos o +=1 sempre <br />

</p>

<hr> 
<h2>for/of</h2>

<p>
  Com a chegada do ES6, ganhamos uma nova funcionalidade para iterar arrays e
  objetos. Objetos iteráveis são objetos ou uma estrutura de dados que permite
  acessar o seu conteúdo com um for. O for/of nos permite criar loops em objetos
  iteráveis como strings, arrays, entre outros
</p>
