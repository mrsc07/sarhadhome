
const images = document.getElementById('carousel-images');
const totalImages = images.children.length;
const container = document.getElementById('carousel-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;
let autoScrollInterval;
let isTransitioning = false;

// Function to show a specific image
function showImage(index) {
  images.style.transform = `translateX(${-index * 100}%)`;
  isTransitioning = true;
}

// Next and previous functions
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Auto-scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!isTransitioning) nextImage();
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Event listeners
next.addEventListener('click', () => {
  stopAutoScroll();
  nextImage();
  startAutoScroll();
});

prev.addEventListener('click', () => {
  stopAutoScroll();
  prevImage();
  startAutoScroll();
});

container.addEventListener('mouseenter', stopAutoScroll);
container.addEventListener('mouseleave', startAutoScroll);

images.addEventListener('transitionend', () => {
  isTransitioning = false;
});

// Start auto-scroll
startAutoScroll();