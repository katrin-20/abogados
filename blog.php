<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = $_POST["content"];
    file_put_contents("content.txt", $content);
    echo "Contenido guardado exitosamente.";
} else {
    echo "Error al guardar el contenido.";
}
?>