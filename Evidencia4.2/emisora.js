

// Vector para almacenar la información de las personas
var personas = [];

// Función para agregar una persona
function agregarPersona() {
  // Obtener los datos de la persona ingresados por el usuario
  var nombre = document.getElementById("nombre").value;
  var cedula = document.getElementById("cedula").value;
  var fecha = document.getElementById("fecha").value;
  var correo = document.getElementById("correo").value;
  var residencia = document.getElementById("residencia").value;
  var origen = document.getElementById("origen").value;

  // Validar que se hayan ingresado todos los datos
  if (!nombre || !cedula || !fecha || !correo || !residencia || !origen) {
    alert("Debe ingresar todos los datos de la persona.");
    return;
  }

  // Crear un objeto con los datos de la persona
  var persona = {
    nombre: nombre,
    cedula: cedula,
    fecha: fecha,
    correo: correo,
    residencia: residencia,
    origen: origen
  };

  // Agregar la persona al vector
  personas.push(persona);

  // Mostrar un mensaje de éxito
  alert("Persona agregada exitosamente.");
}

// Función para mostrar la información de una persona
function mostrarInformacion() {
  // Obtener la posición en el vector ingresada por el usuario
  var posicion = document.getElementById("posicion").value;

  // Validar que se haya ingresado una posición válida
  if (!posicion || posicion < 0 || posicion >= personas.length) {
    alert("Debe ingresar una posición válida.");
    return;
  }

  // Obtener la información de la persona en la posición indicada
  var persona = personas[posicion];

  // Construir el mensaje con la información de la persona
  var mensaje = "Nombre: " + persona.nombre + "\n" +
                "Número de Identificación (Cédula): " + persona.cedula + "\n" +
                "Fecha de Nacimiento: " + persona.fecha + "\n" +
                "Correo Electrónico: " + persona.correo + "\n" +
                "Ciudad de Residencia: " + persona.residencia + "\n" +
                "Ciudad de Origen: " + persona.origen;

  // Mostrar la información de la persona en la pantalla
  document.getElementById("informacion").textContent = mensaje;
}