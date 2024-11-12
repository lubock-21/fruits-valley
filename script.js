let currentIndex = 0;
const slides = document.querySelectorAll('#sliderWrapper img');
const totalSlides = slides.length;

function showSlide(index) {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}