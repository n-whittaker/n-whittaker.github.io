// --- Navigation Active Link ---
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// --- Carousel Functionality ---
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 6000);
}

// Start auto slide on load
showImage(currentIndex);
startAutoSlide();

// --- Hamburger Menu (from hamburger.js) ---
const dropdownToggle = document.querySelector('.dropdown-toggle');
const nav = document.querySelector('nav');

if (dropdownToggle && nav) {
    dropdownToggle.addEventListener('click', () => {
        const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
        dropdownToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
    });
}