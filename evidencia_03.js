/*Realizar un algoritmo que muestre por pantalla la tabla de multiplicar decreciente de cualquier número,
ingresado entre el 1 y el 10.*/

function mostrarTabla(){
    //obtener el numero ingresado por el usuario
    var numero= parseInt(document.getElementById("numero").value);

    //validar que el numero este dentro del rango valido

    if(isNaN(numero) || numero < 1 || numero > 10) {
        alert("Por favor, ingrese un número válido entre 1 y 10.");
        return;
    }

    //obtener el elemento de la tabla
    var tabla = document.getElementById("tabla-multiplicar");

    //limpiar la tabla 
    tabla.innerHTML="";
     //generar la tabla de multiplicar decreciente
     for (var i=10; i>= 1; i--) {
        var resultado = numero  *  i;

        var fila = document.createElement("tr");
        var celdaNumero = document.createElement("td");
        var celdaMultiplicador = document.createElement("td");
        var celdaResultado = document.createElement("td");

        celdaNumero.textContent= numero;
        celdaMultiplicador.textContent= i;
        celdaResultado.textContent=resultado;

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaMultiplicador);
        fila.appendChild(celdaResultado);


        tabla.appendChild(fila);
     }
}



