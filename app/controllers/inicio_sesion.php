<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores del formulario
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Ruta y nombre del archivo
    $ruta_archivo = "./baseDatos.txt";

    // Verificar si el archivo existe
    $archivo_existe = file_exists($ruta_archivo);

    // Verificar la validez de los datos
    if ($archivo_existe) {
        $lineas = file($ruta_archivo, FILE_SKIP_EMPTY_LINES);
        $credenciales_validas = false;
        foreach ($lineas as $linea) {
            // Verificar si las credenciales coinciden con algún registro en el archivo
            if (strpos($linea, $email) !== false && strpos($linea, $password) !== false) {
                $credenciales_validas = true;
                break;
            }
        }

        if ($credenciales_validas) {
            // Redirigir a una página específica si las credenciales son válidas
            header('Location: inicio_sesion_exitoso.php');
            exit();
        } else {
            echo "Credenciales inválidas. Por favor, inténtalo de nuevo.";
        }
    } else {
        echo "No se encontraron registros de usuarios.";
    }
} else {
    echo "Acceso inválido.";
}
?>

