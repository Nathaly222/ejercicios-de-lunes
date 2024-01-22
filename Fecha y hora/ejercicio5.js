'use strict'
/*Este código trabaja con el objeto Date en JavaScript para 
manipular la fecha y la hora y luego muestra los resultados en cuadros de alerta.*/
let today = new Date();

today.setHours(0);
/*Se utiliza el método setHours para establecer las horas del objeto today a 0. 
Esto significa que la hora actual se ajustará a la medianoche del día actual, manteniendo el mismo día.*/
alert(today); 
today.setHours(0, 0, 0, 0);
/* Se utiliza nuevamente el método setHours, 
pero en este caso, se establecen las horas, minutos, segundos y milisegundos a 0. */
alert(today);