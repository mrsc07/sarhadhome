  // JavaScript to switch between the slides
  const slides = document.querySelectorAll('.main-slide');
  let currentSlide_topper = 0;

  function showSlide(index) {
    slides[currentSlide_topper].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide_topper = index;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
      thumb.classList.toggle('active-thumbnail', i === index);
    });
  }

  function nextSlide() {
    let nextIndex = (currentSlide_topper + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Auto-rotate every 4 seconds
  setInterval(nextSlide, 4000);