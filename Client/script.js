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
    // image.style.height = "200px"

    let content = document.createElement('div')
    content.className = "content"

    let name = document.createElement('a')
    name.className = "header"
    name.textContent = practitioner.name

    let description = document.createElement('div')
    description.textContent = `${practitioner.about.slice(0, 35)}...`

    let likesDiv = document.createElement('div')
    likesDiv.className = "content"
    let upLikes = document.createElement('span')
    upLikes.className = "right floated"
    let heart = document.createElement('i')
    heart.className = "heart outline like icon"
    heart.textContent = practitioner.likes
    let comments = document.createElement('i')
    comments.className = "comment icon"
    comments.innerText = practitioner.reviews.length
    
    // heart.addEventListener("click", () => {
    //     incrementLikes(event, heart)
    // }) //should be just in show page

    name.addEventListener("click", ()=> {
        showPract(event, practitioner)
    })

    upLikes.append(heart)
    likesDiv.append(upLikes, comments)
    content.append(name, description)
    imgDiv.append(image)
    card.append(content, imgDiv, likesDiv)
    main.appendChild(card)

    
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
    heart.textContent = practitioner.likes
    let comments = document.createElement('i')
    comments.className = "comment icon"
    comments.innerText = practitioner.reviews.length
    let commentsForm = document.createElement('form')
    commentsForm.className = "extra content"
    commentsForm.id = "reviewForm"
    let placeHolder = document.createElement('div')
    placeHolder.className = "ui large transparent left icon input"
    let inputForm = document.createElement('input')
    inputForm.type ="text"
    inputForm.name ="review"
    inputForm.id ="review-input"
    inputForm.placeholder= "Add Review..."
    let button = document.createElement('button')
    button.id = "submit"
    button.innerText = "submit"

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
    
    heart.addEventListener("click", () => {
        incrementLikes(event, heart)
    })

    let reviewSegment = document.createElement('div')
    reviewSegment.className = "ui secondary segment"
    reviewSegment.innerText = "Reviews: "
    let reviewDiv = document.createElement('div')
    practitioner.reviews.forEach(review => {
        reviewDiv.innerText = review
    } )

    commentsForm.addEventListener('submit', function(event) {
        postReview(event, reviewSegment, commentsForm)
    })
    
    placeHolder.append(inputForm)
    commentsForm.append(placeHolder, button)
    // commentsForm.append(inputForm, button)
    upLikes.append(heart)
    likesDiv.append(upLikes, comments)
    
    specialtiesTitle.append(specialties)
    segment.append(about, specialtiesTitle, languages, zipCode)
    card.append(name, img, likesDiv, commentsForm)
    
    reviewSegment.append(reviewDiv)
    
    main.append(card, segment, reviewSegment)



}

function incrementLikes(event, heart) {
    //let plus = +event.target.textContent + 1
    //heart.textContent = plus
    let addLike = +heart.textContent + 1
    heart.textContent = addLike
}

function postReview(event, reviewSegment, commentsForm) {
    event.preventDefault();

    let newReview = event.target.review.value
    let newDiv = document.createElement('div')
    newDiv.innerText = newReview
    
    reviewSegment.append(newDiv)

    commentsForm.reset()
    

}

