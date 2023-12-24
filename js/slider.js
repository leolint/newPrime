export function slider() {
    const wrapper = document.getElementById('menu');
    const image = document.getElementById('image');
    const imagesLength = document.querySelectorAll('.sliderImage').length
    const buttonPrev = document.getElementById('menuSliderPrev');
    const buttonNext = document.getElementById('menuSliderNext');
    image.style.transition = '0.3s'
    let imageWidth;
    let counter = 0;

    function handleElementAppearance() {
        const element = document.querySelector('.sliderImage');
        if (element) {
            imageWidth = element.offsetWidth;
            console.log(imageWidth);
        }
    }

    handleElementAppearance();

    function scrollNext() {
        ++counter
        image.style.transform = `translateX(${counter * -imageWidth}px)`
        if (counter > 2) {
            image.style.transform = `translateX(0px)`
            counter = 0
        }
    }

    function scrollPrev() {
        --counter;
        if (counter < 0) {
            counter = imagesLength - 1;
        }
        image.style.transform = `translateX(${counter * -imageWidth}px)`;
    }

    buttonNext.addEventListener('click', scrollNext);

    buttonPrev.addEventListener('click', scrollPrev);

    ///swipes

    const hammer = new Hammer(wrapper);

    hammer.on('swiperight', function (event) {
        scrollPrev()
    });

    hammer.on('swipeleft', function (event) {
        scrollNext()
    });

}
