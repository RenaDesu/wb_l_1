const tooltips = document.querySelectorAll('.description__highlight--has-tooltip');
const slider = document.querySelector('.slider');
const before = slider.querySelector('.slider__before');
const beforeImage = before.querySelector('.slider__img');
const changeBar = slider.querySelector('.slider__change-bar');
const sliderContainer = document.querySelector('.container__mini-block');

//анимация тултипа
function onTooltipClick(evt) {
    //включает и выключает класс с анимацией у тултипа, на который кликаем
    evt.currentTarget.classList.toggle('description__highlight--animated-tooltip');
}
//вешаем обработчик на тултипы и передаем функцию, которую надо вызвать (onTooltipClick)
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', onTooltipClick);
});





// и в дополнение Cat slider, был ранее реализован в одном из моих pet-проектов :)
let isActive = false;

//устанавливаем ширину картинки (будет равна ширине слайдера), которая в before блоке
document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
});
//изменение ширины картинки и положения ползунка, главная функция
const beforeAfterSlider = (x) => {
    //сдвиг (максимальное значение между 0 и концом слайдера)
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    changeBar.style.left = `${shift}px`;
};

//отключает события поле того, как отработает функция в mousemove
const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

//обработчики нажатия мышки задают isActive
sliderContainer.addEventListener('mousedown', () => {
    isActive = true;
});

sliderContainer.addEventListener('mouseup', () => {
    isActive = false;
});

sliderContainer.addEventListener('mouseleave', () => {
    isActive = false;
});

//обработчик на движение (при нажатии) мышкой именно в слайдере
sliderContainer.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }
    //узнаем координаты мышки 
    let x = e.pageX;
    //уменьшаем x на величину за пределами контейнера слева
    x -= slider.getBoundingClientRect().left;
    //передаем x в главную функцию 
    beforeAfterSlider(x);
    pauseEvents(e);
});

//все аналогично делаем для мобильных устройств
sliderContainer.addEventListener('touchstart', () => {
    isActive = true;
});

sliderContainer.addEventListener('touchend', () => {
    isActive = false;
});

sliderContainer.addEventListener('touchcancel', () => {
    isActive = false;
});

sliderContainer.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return;
    }

    let x;
    let i;
    //проходим циклом по точкам касания
    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
});