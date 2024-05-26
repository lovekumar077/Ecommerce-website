
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

// Create dots based on the number of slides
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentSlide) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
});

// Function to show a specific slide
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Function to update the active dot
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Initialize the first slide
showSlide(currentSlide);

// Automatically change slide every 2 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 2000);