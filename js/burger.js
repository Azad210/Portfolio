document.getElementById("burger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active"); 
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlider();
});

document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
});


function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 3000);
