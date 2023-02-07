const goButton = document.querySelector(".go-button")
const inputMain = document.querySelector(".input-main")

goButton.addEventListener('click', ()=>{  
    runInput()
})

const runInput = () => {
    inputMain.addEventListener('input',()=>{

    })
}



// CAROUSEL //

const images = ["/Assets/photo_1.jpg","/Assets/photo_2.jpg","/Assets/photo_3.jpg","/Assets/photo_4.jpg","/Assets/photo_5.jpg","/Assets/photo_6.jpg"]

const carousel = document.querySelector('.carousel')
const interval = setInterval(function(){
    startCarousel ()
},3000)

var index = 1

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]}) `
    carousel.classList.remove("fade")
    void carousel.offsetWidth
    carousel.classList.add("fade")

    if (index > images.length - 1) index = 0
}