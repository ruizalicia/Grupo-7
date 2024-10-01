// Inicializa la animación al cargar la página
revealOnScroll();

// Función para cerrar el dropdown al hacer clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#accountDropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Función para abrir el dropdown al hacer clic en "Mi Cuenta"
document.getElementById('accountDropdown').onclick = function(event) {
    event.preventDefault();
    document.getElementById('accountDropdownMenu').classList.toggle('show');
}