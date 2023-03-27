const search = document.querySelector('.search')
const bolt = document.querySelector('.bolt')
const input = document.querySelector('.input')

bolt.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
