function checkAdmin() {
    const password = prompt("Ingrese la contraseña de administrador:");
    if (password === "valencia") {
        document.getElementById("admin-area").style.display = "block";
        loadContent();
    } else {
        alert("Contraseña incorrecta");
    }
}

// Cargar contenido existente
function loadContent() {
    fetch("content.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blog-content").innerHTML = data;
            document.getElementById("editor").value = data;
        });
}

// Guardar contenido editado
function saveContent() {
    const newContent = document.getElementById("editor").value;
    fetch("save_content.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "content=" + encodeURIComponent(newContent)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadContent();
    });
}

window.onload = checkAdmin;