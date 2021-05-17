const lampada = document.getElementById("lamp")
const on = document.getElementById("on")
const off = document.getElementById("off")


function lampadaacesa(){

    lampada.src ="imagens/lampada-acesa.jpg"
}

function lampadaapaga(){

    lampada.src ="imagens/lampada-apagada.jpg"
}


function lampadaquebra(){

    lampada.src ="imagens/lampada-quebrada.jpg"
}

on.addEventListener("click",lampadaacesa)
off.addEventListener("click",lampadaapaga)
lamp.addEventListener("mouseover",lampadaacesa)
lamp.addEventListener("mouseleave",lampadaapaga)
lamp.addEventListener("dblclick",lampadaquebra)