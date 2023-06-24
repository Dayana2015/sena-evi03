//un corredor de maraton (distancia 42.195 Km) ha recorrido la carrera en 2 horas 25 minutos, 
//se desea un algoritmo que calcule el tiempo medio en minutos por kilometros

var horas = 2;
var minutos = 25;
var distancia_km = 42.195;

// convertir el tiempo total de la carrera en minutos

var tiempo_total_minutos = horas * 60 + minutos;

//calcular el tiempo medio por kilometro

var tiempo_medio_por_km = tiempo_total_minutos/ distancia_km;

console.log("el tiempo medio por kilometro es de:" + tiempo_medio_por_km + "minutos"); 