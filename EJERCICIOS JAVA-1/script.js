//EJERCICIO 1
function verificarEdad() {
    var edad = parseInt(document.getElementById('edad').value);

    if (edad >= 18) {
        document.getElementById('mensaje').innerHTML = "¡Ya puedes conducir!";
    } else {
        document.getElementById('mensaje').innerHTML = "Debes ser mayor de 18 años para conducir.";
    }
}

//EJERCICIO 2

function calcularCalificacion() {
    var nota = parseFloat(document.getElementById("nota").value);
    var calificacion;

    if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    } else {
        calificacion = "Nota inválida";
    }

    document.getElementById("result").innerHTML = "Calificación: " + calificacion;
}

//EJERCICIO 3

let strings = [];

function addText() {
    const inputText = document.getElementById('inputText');
    const text = inputText.value.trim();
    
    if (text !== '') {
    strings.push(text);
    inputText.value = '';
}

inputText.focus();
}

function cancel() {
    const output = document.getElementById('output');
    output.textContent = strings.join(' - ');

strings = [];
}


//EJERCICIO 4

function calcularLetraDNI() {
    var dniInput = document.getElementById("dni");
    var dni = dniInput.value.trim();

    // Comprobar si se ha introducido un número
    if (isNaN(dni)) {
        alert("Debe introducir un número válido");
        dniInput.value = "";
        return;
    }

    // Comprobar si se ha cancelado
    if (dni === "") {
        return;
    }

    dni = parseInt(dni);

    // Comprobar si el número está en el rango válido
    if (dni < 0 || dni > 99999999) {
        alert("El número debe estar entre 0 y 99999999");
        dniInput.value = "";
        return;
    }

    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letra = letras.charAt(dni % 23);

    var resultado = document.getElementById("resultado");
    resultado.innerText = "La letra del DNI " + dni + " es: " + letra;

    dniInput.value = "";
}