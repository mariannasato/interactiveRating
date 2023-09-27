let i = 0
let rating

function selectRating(button){
    Array.from( checkGeral = document.getElementsByClassName("ratingButton")).forEach(Element => Element.classList.remove("clicked"))
    const ratingButton = button.classList.toggle('clicked')
    rating = button.innerHTML
    console.log(rating)
}

function thankYouScreen(){
    const thankScreen = document.querySelector(".resultScreen").classList.remove('hidden')
    const mainScreen = document.querySelector("main").classList.add('hidden')
    const ratingNumber = document.querySelector('span')
    ratingNumber.innerHTML = rating
}
