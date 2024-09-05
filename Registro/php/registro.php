<?php
// Conexión a la base de datos
$conexion = new mysqli('localhost:3306', 'kathy_guevara', 'gm151902', 'recorriendo_mi_pulgarcito');

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

// Recoger los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Encriptar la contraseña

// Insertar datos en la base de datos
$sql = "INSERT INTO usuario (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

if ($conexion->query($sql) === TRUE) {
  echo "Registro exitoso";
} else {
  echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>
