document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const favoriteButtons = document.querySelectorAll('.favorite');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            this.parentNode.querySelectorAll('.star').forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
});