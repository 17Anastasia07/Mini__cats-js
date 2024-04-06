let paralaxImage = document.querySelectorAll('.paralax')
function paralaxMove(event){
    let x = event.offsetX
    let y = event.offsetY 
    for(let i = 0; i < paralaxImage.length; i++){
        let oneElement = paralaxImage[i]
        oneElement.style.transform = `translate(${-x/50}px, ${-y/50}px)`
    }

}
window.addEventListener('mousemove', paralaxMove)

let paralaxImage1 = document.querySelectorAll('.paralax-1')
function paralaxMove1(event){
    let x = event.offsetX
    let y = event.offsetY 
    for(let i = 0; i < paralaxImage1.length; i++){
        let secElement = paralaxImage1[i]
        secElement.style.transform = `translate(${x/150}px, ${y/150}px)`
    }

}
window.addEventListener('mousemove', paralaxMove1)