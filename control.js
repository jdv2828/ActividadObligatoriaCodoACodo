document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarForm);
});
function validarForm(evento) {
    evento.preventDefault();
    var correo = document.getElementById("email").value;
    var contrasennia = document.getElementById("pass").value;
    if (correo.length == 0) {
        alert("Por favor ingrese un Correo");
        return;
    }
    if (!(correo.includes("@"))) {
        alert("Ingrese un correo valido ejemplo nombreCorreo@empresa.com");
        return;
    }
    if (contrasennia.length == 0) {
        alert("Por Favor ingrese una contraseña");
        return;
    }

    this.submit();
}