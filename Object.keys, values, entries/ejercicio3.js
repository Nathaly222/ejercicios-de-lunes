'use strict'
let user = {
    name: "John",
    age: 30
  };
  for (let value of Object.values(user)) { // Este es un bucle for...of que itera sobre los valores de las propiedades del objeto user.
    alert(value); 
  }
/*Este código utiliza un bucle for...of para iterar sobre los valores 
de las propiedades de un objeto user y luego muestra cada valor en un cuadro de alerta.*/
