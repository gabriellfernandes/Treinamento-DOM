/* O Que o fabio fez
    let div = document.getElementById('minhaDiv')

    div.innerText = "Olá Mundo"
    div.style.color = 'red'
    div.className = 'minhaClass'

    let button = document.createElement('button')
    button.id = 'meuBotao'

    div.appendChild(button)

    button.innerText = 'aperta aqui e coxinha'

    let quadrado = document.createElement('div')

    quadrado.style.width = '50px'
    quadrado.style.height = '50px'
    quadrado.style.background = 'blue'

    div.appendChild(quadrado)

    document.getElementById('meuBotao').addEventListener('keydown', mudarCor(key))

    function mudarCor () {
        quadrado.style.background = 'purple'
        if ()
    } 
*/

let div1 = document.getElementById("minha-div")

/* let player = document.createElement("div")
player.style.width = "10px"
player.style.height = "40px"
player.style.backgroundColor = "red"
player.id = "player"

div1.appendChild(player)

document.getElementById("body").addEventListener("keydown",movimentar)

let vX = 10
let vY = 10



function movimentar(x){
    if(x.code == "KeyW" && player.style.marginTop >= "0px"){
        vY -= 5
        player.style.marginTop = vY + "px"
        player.style.width = "10px"
        player.style.height = "40px"
    }
    
    if(x.code == "KeyD"){
        vX += 5 
        player.style.marginLeft = vX + "px"
        player.style.width = "40px"
        player.style.height = "10px"
    }
    
    if(x.code == "KeyA" && player.style.marginLeft >= 0 + "px"){
        vX -= 5 
        player.style.marginLeft = vX + "px"
        player.style.width = "40px"
        player.style.height = "10px"
    }
    if(x.code == "KeyS" && player.style){
        vY += 5
        player.style.marginTop = vY + "px"
        player.style.width = "10px"
        player.style.height = "40px"
    }
    
    return n
} */

div1.style.display = "flex"
div1.style.width = "100%"
div1.style.height = "800px"
div1.style.justifyContent = "center"
div1.style.alignItems = "center"



let ola = document.createElement("div");

ola.style.display = "flex"
ola.style.width = "200px"
ola.style.height = "200px"
ola.style.textAlign = "center"
ola.style.background = "yellowgreen"
ola.style.alignItems = "center"
ola.style.fontSize = "20px"
ola.style.fontWeight = "bold"
ola.style.cursor = "pointer"
ola.innerText = "Pense em um número de 1 a 5 e depois click em mim."
ola.id = "S"

div1.appendChild(ola)

document.getElementById("S").addEventListener("click", aleatorio)

let controle = false

function aleatorio(){
    let numeroSorteado = Math.floor(Math.random() * 5) + 1;
    
    if(controle == false){
        controle = true
        reiniciar(1)
        return ola.innerText = `O numero que você pensou foi ${numeroSorteado}!`
    }
}

function reiniciar(x){
    let o = x * 10
    setInterval(function(){
        if(--o > 0){
            console.log(o)
        }else{
            window.location.reload(1)
        }
    },1000)
}

