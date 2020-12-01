const url = "http://localhost:3000/practitioners"
let main = document.querySelector("#main")

document.addEventListener("DOMContentLoaded", ()=> {
    getPract()
 })

function getPract(){
fetch(url)
    .then(resp => resp.json())
    .then(practArray => practArray.forEach(practitioner => renderP(practitioner)))
}
function renderP(practitioner){
    let nameDiv = document.querySelector("#name")
    nameDiv.textContent = practitioner.name

    let image = document.querySelector("")



}

