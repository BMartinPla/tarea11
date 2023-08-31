function saludo() {
    let nombre = prompt("Ingresa tu nombre y apellido")
    if (nombre != null) {
        alert("Hola " + nombre + ", bienvenido a nuestra pagina!");
    } else {
        alert("Ingrese su nombre")
    }
}

saludo();