const $sliders = document.querySelectorAll(".slider");

$sliders.forEach($slider => {
    const $sliderWrapper = $slider.querySelector('.slider__wrapper');
    const $prevButton = $slider.querySelector('.slider__button_prev');
    const $nextButton = $slider.querySelector('.slider__button_next');

    let currentSlide = 0;
    const slideWidth = $sliderWrapper.children[0].offsetWidth;
    const sliderGap = parseFloat(getComputedStyle($sliderWrapper).gap);
    const amountOfVisibleSlides = document.body.clientWidth >= 1300 ? 3 : (document.body.clientWidth >= 850 && document.body.clientWidth < 1300) ? 2 : 1;
    const amountOfAllSlides = $sliderWrapper.children.length;
    const offsetTopButton = $sliderWrapper.querySelector("img").offsetHeight / 2;

    positionateButtons();
    addPaginationDots($slider);

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= $sliderWrapper.children.length) currentSlide = 0;
        updateCarousel();
    }
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = $sliderWrapper.children.length - amountOfVisibleSlides;
        updateCarousel();
    }
    function updateCarousel() {
        let translateX = -currentSlide * (slideWidth + sliderGap);
    
        if (currentSlide === amountOfAllSlides - (amountOfVisibleSlides - 1)) {
            currentSlide = 0;
            $sliderWrapper.style.transform = `translateX(0px)`;
        }
        else if (currentSlide === amountOfAllSlides - (amountOfVisibleSlides - 1)) {
            translateX = -(slideWidth + sliderGap) * (amountOfVisibleSlides - 1);
            $sliderWrapper.style.transform = `translateX(${translateX}px)`;
        }
        else $sliderWrapper.style.transform = `translateX(${translateX}px)`;
    
    
        $slider.querySelectorAll(".slider__pagination-item").forEach((dot, index) => {
            dot.classList.toggle('slider__pagination-item_active', index === currentSlide);
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
    }
    function addPaginationDots($slider) {
        const $pagination = $slider.querySelector(".slider__pagination");
        const amountsOfDots = amountOfAllSlides - (amountOfVisibleSlides - 1);
    
        for (let i = 0; i < amountsOfDots; i++) {
            const $dot = document.createElement("span");
            $dot.className = "slider__pagination-item";
            $pagination.append($dot);
        }
    }
    function positionateButtons() {
        $prevButton.style.top = `${offsetTopButton}px`;
        $nextButton.style.top = `${offsetTopButton}px`;
    }

    updateCarousel();
    $nextButton.addEventListener('click', nextSlide);
    $prevButton.addEventListener('click', prevSlide);

    let touchstartX = 0;
    let touchendX = 0;

    $sliderWrapper.addEventListener('touchstart', (event) => touchstartX = event.touches[0].clientX);
    $sliderWrapper.addEventListener('touchmove', (event) => touchendX = event.touches[0].clientX);
    $sliderWrapper.addEventListener('touchend', (event) => {
        if (touchendX < touchstartX) nextSlide();
        else if (touchendX > touchstartX) prevSlide();
    });
})