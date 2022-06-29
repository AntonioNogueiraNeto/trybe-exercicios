let titulo = document.getElementById("header-container");

titulo.style.backgroundColor = "green"


let ladoEsquerdo = document.getElementsByClassName("emergency-tasks")[0]


ladoEsquerdo.style.backgroundColor = "orange"

let ladoDireito = document.getElementsByClassName("no-emergency-tasks")[0]

ladoDireito.style.backgroundColor = "yellow"


let tituloEsquerdo = document.querySelectorAll(".emergency-tasks h3");
tituloEsquerdo[0].style.backgroundColor = "purple"
tituloEsquerdo[1].style.backgroundColor = "purple"

let tituloDireito = document.querySelectorAll(".no-emergency-tasks h3")

tituloDireito[0].style.backgroundColor ="black"
tituloDireito[1].style.backgroundColor ="black"


let rodape = document.getElementById("footer-container")


rodape.style.background = "darkgreen"