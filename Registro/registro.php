<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="CSS/style_header_registro.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384- GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Registro</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384- w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</head>

<body>
    <header class="mb-4">
        <nav class="navbar">
            <div class="logo">
                <img src="IMAGENES/logo_navbar.png" alt="Recorriendo mi pulgarcito">
            </div>
            <ul class="nav justify-content-center">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">Experiencias</a></li>
                <li><a href="#">Blog & Testimonios</a></li>
                <li><a href="#">Galería</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" id="accountDropdown">Mi Cuenta</a>
                    <ul class="dropdown-menu" id="accountDropdownMenu">
                        <li><a href="/Inicio de Sesión/login.html" id="loginLink">Inicio de Sesión</a></li>
                        <li><a href="/Registro/registro.html" id="registerLink">Registro</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>

    <form action="action_page.php">
        <h1>Registro</h1>
        <p>Completa la siguiente forma para crear una cuenta.</p>
        <hr>

        <div class="mb-3">
            <label for="email" class="form-label"><b>Correo</b></label>
            <input type="email" id="email" class="form-control" placeholder="Escribe un correo" name="email" required>
        </div>

        <div class="mb-3">
            <label for="psw" class="form-label"><b>Contraseña</b></label>
            <input type="password" id="psw" class="form-control" placeholder="Escribe una contraseña" name="psw" required>
        </div>

        <div class="mb-3">
            <label for="psw-repeat" class="form-label"><b>Repite contraseña</b></label>
            <input type="password" id="psw-repeat" class="form-control" placeholder="Escribe contraseña" name="psw-repeat" required>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="remember" checked="checked" name="remember">
            <label class="form-check-label" for="remember">Recordarme</label>
        </div>

        <p>Creando una cuenta estás de acuerdo con nuestros <a href="#" style="color:dodgerblue">Términos y condiciones de Privacidad</a>.</p>

        <div class="clearfix">
            <button type="button" class="btn btn-secondary">Cancelar</button>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </div>
    </form>

    <footer class="footer">
        <div class="container">
            <div class="column">
                <img src="IMAGENES/logo_footer.png" alt="Recorriendo mi Pulgarcito Logo" style="width: 200px;">
            </div>
            <div class="column">
                <h5>Dirección:</h5>
                <p>Edificio Century Tower, Nivel 10 y 11 #243 Col. San Benito San Salvador CP, 1101</p>
                <h5>Horario:</h5>
                <p>Lunes a viernes: 8:00 am - 5:00 pm</p>
                <h5>Teléfono:</h5>
                <p>+503 2257-7777</p>
                <h5>Correo:</h5>
                <p>recorriendo@mipulgarcito.com</p>
            </div>
            <div class="column">
                <h3>Acerca de</h3>
                <ul>
                    <li>Sobre nosotros</li>
                    <li>Blog</li>
                    <li>Destinos populares</li>
                    <li>Experiencias</li>
                </ul>
            </div>
            <div class="column">
                <h3>Información Legal</h3>
                <ul>
                    <li>Términos y condiciones</li>
                    <li>Política de Privacidad</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
        
        <!-- Línea separadora -->
        <div class="footer-separator"></div>
    
        <div class="social-icons">
            <a href="#"><img src="IMAGENES/facebook.png" alt="Facebook"></a>
            <a href="#"><img src="IMAGENES/insragram.png" alt="Instagram"></a>
            <a href="#"><img src="IMAGENES/spotify.png" alt="Spotify"></a>
            <a href="#"><img src="IMAGENES/whatsapp.png" alt="whatsapp"></a>
            <a href="#"><img src="IMAGENES/linkedin.png" alt="linkedin"></a>
        </div>
        <div class="copyright" >
            &copy;RECORRIENDO MI PULGARCITO 2024 | DERECHOS RESERVADOS
        </div>
    </footer>

<script src="/Registro/Javascript/script.js"></script>

</body>
</html>
