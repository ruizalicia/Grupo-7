    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el modal
        var modal = document.getElementById('id01');

        // Cuando el usuario haga clic en el botón de cerrar, cerrar el modal
        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.onclick = function() {
            modal.style.display = "none";
        };

        // Cuando el usuario haga clic en cualquier parte fuera del modal, cerrarlo
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    });
