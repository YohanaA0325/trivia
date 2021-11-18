function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var años = document.getElementById("años").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var condiciones = document.getElementById("condiciones").checked;

    var mensaje = "Nombre:" + nombres
    +"\nApellidos:" + apellidos
    +"\nCorreo:" + correo
    +"\nEdad:" + años
    +"\nEs mujer:" + f
    +"\nEs hombre:" + m
    +"\nCondiciones:" + condiciones;
    console.log(mensaje)
}
function funciona(){
    console.log("esto funciona");
}