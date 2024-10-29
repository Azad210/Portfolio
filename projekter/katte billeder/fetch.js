document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const textInput = document.getElementById('text-input');
    const catImage = document.getElementById('cat-image');

    btn.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            
            catImage.src = `https://cataas.com/cat/says/${encodeURIComponent(text)}`;
        }
    });
});


