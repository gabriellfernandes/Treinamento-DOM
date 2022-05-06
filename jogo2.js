let div1 = document.getElementById("minha-div")

let alvo = document.createElement("div")
aleatorio()
timer()
alvo.style.width = 120 + "px"
alvo.style.height = 120 + "px"
alvo.style.backgroundColor = "blue"
alvo.id = "S"
div1.appendChild(alvo)

var pontuacao = 0
let po = document.getElementById("po")



//mecanica do game
document.getElementById("S").addEventListener("click", boa)
function boa(){
    pontuacao++
    console.log("o")
    if(o > 4){
        o = o - 1
    }else if(o < 4){
        o = o - 0.5
    }
    
    return aleatorio()
}

function aleatorio(){
    alvo.style.marginTop =  Math.floor(Math.random() * 800) + 1 + "px"
    alvo.style.marginLeft =Math.floor(Math.random() * 1000) + 1 + "px"
   
}

var o = 20


function timer(){
    o = o - 1

    const myInterval = setInterval(contador, 1000);
    
    function contador(){
        o--

        console.log(o)

        if(o < 0){
            div1.style.display = "flex"
            div1.style.height = "800px"
            div1.style.width = "90%"
            div1.style.justifyContent = "center"
            div1.style.alignItems = "center"
            alvo.style.backgroundColor = "white"
            alvo.style.marginTop = "0px"
            alvo.style.marginLeft = "0px"
            po.style.fontSize = "24px"
            po.style.fontWeight = "bold"
            po.innerText = `Sua Pontuação: ${pontuacao}`
            perdeu()
            paraTempo()
        }  
    }

    function paraTempo(){
        clearInterval(myInterval);
    }
    
 

}

function perdeu(){
    let p = document.createElement("p")
    p.innerText = "Você perdeu!! \n Aperter F5 para recomeçar!!"
    p.style.fontSize = "24px"
    p.style.fontWeight = "bold"
    p.style.textAlign = "center"
    div1.appendChild(p)
}


