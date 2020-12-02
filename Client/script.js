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

    name.addEventListener("click", ()=> {
        showPract(event, practitioner)
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

function showPract(event, practitioner){
    main.innerHTML = ""

    let card = document.createElement('div')
    card.className = "ui centered card"

    let name = document.createElement('div')
    name.className = "centered"
    name.innerText = practitioner.name

    let img = document.createElement('img')
    img.src = practitioner.image

    let likesDiv = document.createElement('div')
    likesDiv.className = "content"
    let upLikes = document.createElement('span')
    upLikes.className = "right floated"
    let heart = document.createElement('i')
    heart.className = "heart outline like icon"
    heart.textContent = "0 likes"
    let comments = document.createElement('i')
    comments.className = "comment icon"
    comments.innerText = "0 comments"
    let commentsFrom = document.createElement('div')
    commentsFrom.className = "extra content"
    let placeHolder = document.createElement('div')
    placeHolder.className = "ui large transparent left icon input"
    let inputForm = document.createElement('input')
    inputForm.type ="text"
    inputForm.placeholder= "Add Comment..."

    let segment = document.createElement('div')
    segment.className = "ui raised segment"
    let about = document.createElement('p')
    about.innerText = practitioner.about
    let specialtiesTitle = document.createElement('ul')
    specialtiesTitle.innerText = 'Specialties:'
    let specialties = document.createElement('li')
    practitioner.specialties.forEach(specialty => {
        specialties.innerHTML += `<li>${specialty}</li>`})
    let languages = document.createElement('p')
    languages.innerText = `Languages Spoken: ${practitioner.languages}`
    let zipCode = document.createElement('p')
    zipCode.innerText = `Zip Code: ${practitioner.zip_code}`
    
    placeHolder.append(inputForm)
    commentsFrom.append(placeHolder)
    upLikes.append(heart)
    likesDiv.append(upLikes, comments)
    specialtiesTitle.append(specialties)
    segment.append(about, specialtiesTitle, languages, zipCode)
    card.append(name, img, likesDiv, commentsFrom)
    main.append(card, segment)

}


