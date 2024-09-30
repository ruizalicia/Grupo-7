document.addEventListener("DOMContentLoaded", function() {
    const moreInfoLinks = document.querySelectorAll(".more-info-link"); // Falta el ;

    moreInfoLinks.forEach(function(link) { // Cambia a función regular
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const textContainer = this.previousElementSibling;

            // Alternar la clase 'expanded' en el contenedor de texto
            textContainer.classList.toggle("expanded");

            // Cambiar el texto del enlace dependiendo del estado
            if (textContainer.classList.contains("expanded")) {
                this.textContent = "Mostrar menos";
            } else {
                this.textContent = "Más información";
            }
        });
    });
});