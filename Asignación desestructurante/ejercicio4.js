'use strict'
/* Este código utiliza la destructuración de objetos en JavaScript para extraer las propiedades title, width, 
y height del objeto options y luego muestra cada una de estas propiedades en cuadros de alerta.*/
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  //Se utiliza la sintaxis de destructuración para extraer las propiedades del objeto options y asignarlas a variables del mismo nombre.
  alert(title);  
  alert(width);  
  alert(height); 