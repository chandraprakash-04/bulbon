

let btn = document.getElementById("btn")
let img = document.getElementById("bulboff")
btn.addEventListener("click",change)
function change(e){
    if (btn.textContent.includes("on")){
        img.src = "on.png"
        btn.style.backgroundColor ="green"
        btn.textContent = "Turn off"
    }else{
        img.src = "off.png"
         btn.style.backgroundColor ="red"
        btn.textContent = "Turn on"
    }
}