/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor.*/


// Función para analizar las edades ingresadas
function analizarEdades() {
    
    // Obtener las edades ingresadas por el usuario
    var edadesInput = document.getElementById("edades").value;
  
    
    // Convertir las edades en un array de enteros
    var edades = edadesInput.split(",").map(function (edad) {
      return parseInt(edad.trim(), 10);
    });
  
    // Validar que se ingresaron 10 edades
    if (edades.length !== 10) {
      alert("Debe ingresar 10 edades separadas por comas.");
      return;
    }
  
    // Variables para contar las diferentes categorías de edades
    var menores = 0;
    var mayores = 0;
    var adultosMayores = 0;
  
    // Variables para almacenar la edad mínima y máxima
    var edadMinima = edades[0];
    var edadMaxima = edades[0];
  
    // Variable para calcular el promedio de edades
    var sumaEdades = 0;
  
    // Recorrer las edades y realizar los cálculos
    for (var i = 0; i < edades.length; i++) {
      var edad = edades[i];
  
      // Validar que la edad esté dentro del rango válido
      if (edad < 1 || edad > 120) {
        alert("La edad ingresada en la posición " + (i + 1) + " está fuera del rango válido (1-120).");
        return;
      }
  
      sumaEdades += edad;
  
      if (edad < 18) {
        menores++;
      } else {
        mayores++;
        if (edad >= 60) {
          adultosMayores++;
        }
      }
  
      if (edad < edadMinima) {
        edadMinima = edad;
      }
  
      if (edad > edadMaxima) {
        edadMaxima = edad;
      }
    }
  
    // Calcular el promedio de edades
    var promedio = sumaEdades / edades.length;
  
    // Mostrar los resultados
     // Mostrar los resultados
  document.getElementById("menores").textContent = "Cantidad de personas menores de edad: " + menores;
  document.getElementById("mayores").textContent = "Cantidad de personas mayores de edad: " + mayores;
  document.getElementById("adultos-mayores").textContent = "Cantidad de adultos mayores: " + adultosMayores;
  document.getElementById("edad-minima").textContent = "Edad mínima: " + edadMinima;
  document.getElementById("edad-maxima").textContent = "Edad máxima: " + edadMaxima;
  document.getElementById("promedio").textContent = "Promedio de edades: " + promedio.toFixed(2);
}
