let currentIndex = 0;

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + step + items.length) % items.length;
    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        const stars = star.parentElement.querySelectorAll('.star');
        stars.forEach(s => {
            s.classList.remove('selected');
            if (s.getAttribute('data-value') <= rating) {
                s.classList.add('selected');
            }
        });
    });
});

