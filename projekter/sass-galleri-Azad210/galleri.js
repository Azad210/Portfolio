function filterImages(event) {
    event.preventDefault(); 
    const category = event.target.getAttribute('billede-category');
    const images = document.querySelectorAll('.billeder');

    images.forEach(image => {
        if (image.getAttribute('data-category') === category || category === 'all') {
            image.style.display = 'inline-block'; 
        } else {
            image.style.display = 'none'; 
        }
    });
}

document.querySelectorAll('.filter').forEach(link => {
    link.addEventListener('click', filterImages);
});
