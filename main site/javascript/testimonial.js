// Scoped JavaScript for Testimonial Carousel
const testimonialCarousel = document.getElementById('testimonialCarousel');
const wrapper = testimonialCarousel.querySelector('.testimonial-wrapper');
const testimonials = wrapper.children;
const prevBtn = testimonialCarousel.querySelector('.left-btn_testimonial');
const nextBtn = testimonialCarousel.querySelector('.right-btn_testimonial');

let currentSlide = 0;
const slidesToShow = () => {
    if (window.innerWidth <= 768) return 1; // Mobile
    if (window.innerWidth <= 1024) return 3; // Tablet
    return 4; // Laptop/Desktop
};

function updateCarousel() {
    const slideWidth = testimonials[0].offsetWidth + 20; // Include margin
    wrapper.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < testimonials.length - slidesToShow()) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = testimonials.length - slidesToShow();
    }
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-scroll
let autoScroll = setInterval(nextSlide, 3000);

// Pause auto-scroll on hover
testimonialCarousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
testimonialCarousel.addEventListener('mouseleave', () => autoScroll = setInterval(nextSlide, 3000));

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);
updateCarousel();