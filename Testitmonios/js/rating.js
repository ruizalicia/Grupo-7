// Selecciona todas las estrellas
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        // Obtiene el valor de la estrella clicada
        const value = star.getAttribute('data-value');
        
        // Selecciona todas las estrellas en el mismo contenedor
        const stars = star.parentElement.querySelectorAll('.star');
        
        // Recorre todas las estrellas y aplica la clase 'selected' según el valor
        stars.forEach(s => {
            s.classList.remove('selected');
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('selected');
            }
        });
        
        // Opcional: Guarda el valor de la reseña (esto podría enviarse a un servidor)
        console.log('Valor seleccionado:', value);
    });
});
