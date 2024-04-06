let arrowLeft = document.querySelector('.arrow-left')

let arrowRight = document.querySelector('.arrow-right')

let slider = document.querySelector('.slider')

let sliderSlide = document.querySelectorAll('.slider__slide')

let currentIndex = 0

let markers = document.querySelectorAll('.slider-menu__nav-link')

let colors = [" #ffb663d8", "#fff", /* "#a95e13", */ "#c87018", "#3ad0f9e3"]



// function goToSlide(array) {  
//     currentIndex = array
// }   
function  showTheslide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
}

function colorChange() {
    document.body.style.backgroundColor = colors[currentIndex]
}
function whatTheSlide(slide){
    currentIndex = slide
    showTheslide(currentIndex)
    colorChange()
}

function goPrewSlide() {
    /* sliderSlide[currentIndex].classList.remove('new') */
    currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length
    /* sliderSlide[currentIndex].classList.add('new') */
    showTheslide(currentIndex)
}
/* arrowLeft.addEventListener('click', goPrewSlide) */

function goNextSlide() {
    /* sliderSlide[currentIndex].classList.remove('new') */
    currentIndex = (currentIndex + 1) % sliderSlide.length
    /* sliderSlide[currentIndex].classList.add('new') */
    showTheslide(currentIndex)
}
/* arrowRight.addEventListener('click' , goNextSlide) */

for(let i = 0; i < markers.length; i++){
    markers[i].addEventListener('click', function(){
        whatTheSlide(i)
    })
}


/* window.addEventListener('scroll', function(){
    let hIde = document.querySelector('.hide')
    if(scrollY > 10) {
        hIde.classList.add('block')
    }
    else {
        hIde.classList.remove('block')
    }
}) */

