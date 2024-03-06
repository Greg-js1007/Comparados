<?php
    // Verificar si se ha enviado una consulta
    if (isset($_GET['query'])) {
        // Obtener la consulta del formulario
        $query = $_GET['query'];

        // Ruta al archivo de datos (puedes cambiarla según sea necesario)
        $archivo = 'datos.txt';

        // Verificar si el archivo existe
        if (file_exists($archivo)) {
            // Leer el contenido del archivo
            $contenido = file_get_contents($archivo);

            // Buscar la consulta en el contenido del archivo
            if (strpos($contenido, $query) !== false) {
                echo "<p>Se encontró una coincidencia para '$query'.</p>";
            } else {
                echo "<p>No se encontraron coincidencias para '$query'.</p>";
            }
        } else {
            echo "<p>El archivo de datos no existe.</p>";
        }
    } else {
        echo "<p>No se ha enviado ninguna consulta.</p>";
    }
    ?>