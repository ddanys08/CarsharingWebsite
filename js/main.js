let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 350;
    if (offset > 1248) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 350;
    if (offset < 0) {
        offset = 1048;
    }
    sliderLine.style.left = -offset + 'px';
});