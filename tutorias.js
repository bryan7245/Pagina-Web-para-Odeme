// JavaScript para manejar el envío del formulario
document.getElementById("tutoria-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Recoger los datos del formulario
    var materia = document.getElementById("materia").value;
    var profesor = document.getElementById("profesor").value;
    var topico = document.getElementById("topico").value;
    var tema = document.getElementById("tema").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var observaciones = document.getElementById("observaciones").value;

    // Aquí podrías enviar los datos a un servidor mediante una petición AJAX
    // En este ejemplo solo mostraremos un mensaje
    var mensaje = "Solicitud enviada:\n" +
                  "Materia: " + materia + "\n" +
                  "Profesor: " + profesor + "\n" +
                  "Tópico: " + topico + "\n" +
                  "Tema: " + tema + "\n" +
                  "Fecha: " + fecha + "\n" +
                  "Hora: " + hora + "\n" +
                  "Observaciones: " + observaciones;
    alert(mensaje);

    // Limpiar el formulario
    document.getElementById("tutoria-form").reset();
});