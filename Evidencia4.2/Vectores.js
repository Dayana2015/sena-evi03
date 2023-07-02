

// Función para mezclar los vectores ordenados
function mezclarVectores() {
    // Obtener los vectores ingresados por el usuario
    var vector1Input = document.getElementById("vector1").value;
    var vector2Input = document.getElementById("vector2").value;
  
    // Convertir los vectores en arrays de números enteros
    var vector1 = vector1Input.split(",").map(function (numero) {
      return parseInt(numero.trim(), 10);
    });
  
    var vector2 = vector2Input.split(",").map(function (numero) {
      return parseInt(numero.trim(), 10);
    });
  
    // Validar que los vectores tengan tamaño igual a 5
    if (vector1.length !== 5 || vector2.length !== 5) {
      alert("Los vectores deben tener tamaño igual a 5.");
      return;
    }
  
    // Validar que los vectores estén ordenados ascendentemente
    if (!esVectorOrdenadoAscendentemente(vector1) || !esVectorOrdenadoAscendentemente(vector2)) {
      alert("Los vectores deben estar ordenados ascendentemente.");
      return;
    }
  
    // Mezclar los vectores y ordenar el resultado
    var mezcla = vector1.concat(vector2).sort(function (a, b) {
      return a - b;
    });
  
    // Mostrar la mezcla de vectores en la pantalla
    document.getElementById("mezcla").textContent = mezcla.join(" ");
  }
  
  // Función para validar si un vector está ordenado ascendentemente
  function esVectorOrdenadoAscendentemente(vector) {
    for (var i = 0; i < vector.length - 1; i++) {
      if (vector[i] > vector[i + 1]) {
        return false;
      }
    }
    return true;
  }