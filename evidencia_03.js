

function determinarAñoBisiesto() {
    var año = document.getElementById("inputYear").value;
    var esBisiesto = false;

    if (año % 4 === 0) {
        if (año % 100 === 0) {
            if (año % 400 === 0) {
                esBisiesto = true;
            }
        } else {
            esBisiesto = true;
        }
    }

    if (esBisiesto) {
        document.getElementById("resultado").textContent = año + " es un año bisiesto.";
    } else {
        document.getElementById("resultado").textContent = año + " no es un año bisiesto.";
    }
}