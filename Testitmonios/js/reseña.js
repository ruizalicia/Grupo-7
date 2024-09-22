// Obtener elementos del DOM después de que la página cargue
window.onload = function() {
    const modals = document.querySelectorAll(".review-modal");
    const btns = document.querySelectorAll(".add-review-btn");
    const spans = document.querySelectorAll(".close");

    // Mostrar el modal al hacer clic en el botón
    btns.forEach((btn, index) => {
        btn.onclick = function() {
            modals[index].style.display = "block";
        }
    });

    // Cerrar el modal al hacer clic en la "X"
    spans.forEach((span) => {
        span.onclick = function() {
            modals.forEach((modal) => {
                modal.style.display = "none";
            });
        }
    });

    // Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target.classList.contains('review-modal')) {
            event.target.style.display = "none";
        }
    }
};
