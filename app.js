
// Seleccionar el botón de contacto
const contactButton = document.getElementById("contactButton");

// Seleccionar el espacio donde aparecerá el mensaje
const mensaje = document.getElementById("mensaje");

// Crear evento para el botón
contactButton.addEventListener("click", function() {

    mensaje.textContent = "¡Gracias por tu interés! Pronto estaremos en contacto.";

    mensaje.style.color = "#754c75";
    mensaje.style.fontWeight = "bold";

});
