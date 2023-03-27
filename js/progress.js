const progress = document.getElementbyId('progress')
const prev = document.getElementbyId('prev')
const next = document.getElementbyId('next')
const circles = document.getElementbyId('.circle')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }

    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
})


function update() {

    progress.style.width = (currentActive -1) /3 *100 + '%'

    if (currentActiv == 1) {
        prev.disabled = true
    }
    else if(currentActive == 4) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }


    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
}
