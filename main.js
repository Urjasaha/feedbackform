const rating = document.querySelectorAll('.rating')
const ratings_container = document.querySelector('.ratings-container')
const send_button = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selected_ratings = "satisfied"
ratings_container.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})
send_button.addEventListener('click', (e) => {
            panel.innerHTML =
                ` <i class="fas fa-heart"></i> <strong>Thank You!</strong> <br> <strong>Feedback: ${selectedRating}</strong> <p>We'll use your feedback to improve our customer support</p>`
})

function removeActive() {
            for(i=0;i<rating.length;i++){
                rating[i].classList.remove('active')
            }
}