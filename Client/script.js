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
    let card = document.createElement('div')
    card.className = "ui card"
    card.id = practitioner.id
    
    let imgDiv = document.createElement('div')
    imgDiv.className = "image"
    let image = document.createElement('img')
    image.src = practitioner.image
    image.style.width = "150px"
    image.style.height = "200px"

    let content = document.createElement('div')
    content.className = "content"

    let name = document.createElement('a')
    name.className = "header"
    name.textContent = practitioner.name

    let description = document.createElement('div')
    description.textContent = `${practitioner.about.slice(0, 35)}...`

    let likesDiv = document.createElement('div')
    likesDiv.className = "extra content"
    let upLikes = document.createElement('a')
    let thumbsUp = document.createElement('i')
    thumbsUp.className = "thumbs up icon"
    thumbsUp.textContent = "  0"
    let downLikes = document.createElement('a')
    let thumbsDown = document.createElement('i')
    thumbsDown.className = "thumbs down icon"
    thumbsDown.textContent = "  0"
    
    thumbsUp.addEventListener("click", () => {
        incrementThumbs(event, thumbsUp)
    })
    thumbsDown.addEventListener("click", () => {
        decrementThumbs(event, thumbsDown)
    })


    upLikes.append(thumbsUp)
    downLikes.appendChild(thumbsDown)
    likesDiv.append(upLikes, downLikes)
    content.append(name, description)
    imgDiv.append(image)
    card.append(content, imgDiv, likesDiv)
    main.appendChild(card)
}

function incrementThumbs(event, thumbsUp) {
    let plus = +event.target.textContent + 1
    thumbsUp.textContent = plus
    
}
function decrementThumbs(event, thumbsDown) {
    let minus = +event.target.textContent + 1
    thumbsDown.textContent = minus
    
}

