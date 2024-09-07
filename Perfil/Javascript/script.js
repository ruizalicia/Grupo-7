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

// Simulación del estado de sesión del usuario
var userLoggedIn = false; // Cambiar a true si el usuario ha iniciado sesión

// Función para actualizar el menú de la cuenta basado en el estado de sesión
function updateAccountMenu() {
    var loginLink = document.getElementById('loginLink');
    var registerLink = document.getElementById('registerLink');

    if (userLoggedIn) {
        loginLink.textContent = 'Mi Perfil';
        loginLink.href = '/Perfil/perfil.html'; // Enlace al perfil del usuario
        registerLink.textContent = 'Cerrar Sesión';
        registerLink.href = '#'; // Enlace para cerrar sesión
        registerLink.onclick = function() {
            // Lógica para cerrar sesión
            alert('Sesión cerrada');
            userLoggedIn = false;
            updateAccountMenu(); // Actualiza el menú después de cerrar sesión
        }
    } else {
        loginLink.textContent = 'Inicio de Sesión';
        loginLink.href = '/Inicio de Sesión/login.html';
        registerLink.textContent = 'Registro';
        registerLink.href = '/Registro/registro.html';
        registerLink.onclick = null;
    }
}
const dropdown = document.querySelector('.dropdown-menu');
const rect = dropdown.getBoundingClientRect();

if (rect.right > window.innerWidth) {
    dropdown.style.left = 'auto';
    dropdown.style.right = '0';
}

// Llamar a la función para configurar el menú al cargar la página
updateAccountMenu();