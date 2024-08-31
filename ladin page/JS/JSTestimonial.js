let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const stars = document.querySelectorAll('.star');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        const parent = star.parentElement;
        parent.querySelectorAll('.star').forEach(s => {
            s.classList.remove('selected');
        });
        for (let i = 0; i < value; i++) {
            parent.children[i].classList.add('selected');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(currentTestimonial);
});
