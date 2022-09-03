const $contentSlideItems = document.querySelectorAll('.slider__item');
const $slide = document.querySelector('.slider')

let count = 0;
let width = 0;

document.querySelector('.arrow-next').addEventListener('click', () => {
    count++
    width = width + $slide.offsetWidth
    if (count > $contentSlideItems.length - 1) width = 0, count = 0
    rollSlider()
})

document.querySelector('.arrow-prev').addEventListener('click', () => {
    count--
    width = width - $slide.offsetWidth
    if (count < 0) width = 0, count = 0
    rollSlider()
})


function rollSlider() {
    $slide.style.transform = 'translate(-' + width + 'px)'
}
window.addEventListener('resize', rollSlider)
