'use strict'
//Usamos Array.from para convertir una cadena en una matriz de caracteres.
let numeros = 'N😒';
let chars = Array.from(numeros);

alert(chars[0]);
alert(chars[1]);
alert(chars.length);

/*el código convierte la cadena de texto 'N😒' en un array llamado 
chars utilizando Array.from y luego muestra el primer elemento,
 el segundo elemento y la longitud del array en cuadros de alerta. Esto ayuda a ilustrar cómo 
Array.from puede manejar caracteres Unicode y crear un array de elementos individuales
 a partir de una cadena de texto.*/



