<!--Formulario de Registro-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMPARADOS Registro</title>
    <link rel="shortcut icon" href="../img/CLogo.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/formregistro.css">
</head>
<body>
    <div class="formulario">
        <h1>Registrarse</h1>
        <form action="registro.php" method="POST" class="row g-3">
            <div class="nombre">
                <input type="text" name="nombre" required>
                <label>Nombre</label>
            </div>
            <div class="correo">
                <input type="email" name="email" required>
                <label>Correo Electrónico</label>
            </div>
            <div class="contraseña">
                <input type="password" name="password" required>
                <label>Contraseña</label>
            </div>
            <input type="submit" value="Continuar" href="../html/index.html">
            <div class="iniciar-sesion">
                Ya tengo una cuenta, <a href="../html/form.html">iniciar sesión</a>
            </div>
        </form>
    </div>
</body>
</html>
