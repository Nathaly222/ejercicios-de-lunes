'use strict'
let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  /* Se crea un objeto llamado room con una propiedad number y un método toJSON(). 
  Este método se ha personalizado para que,cuando se llame durante la serialización a JSON, 
  devuelva solo el valor de la propiedad number. */
  let meetup = {
    title: "Conference",
    room
  };
  /*  Se crea otro objeto llamadomeetup con una propiedad title y 
  la propiedad room, que es el objeto room definido anteriormente.*/
  alert( JSON.stringify(room) ); 
  alert( JSON.stringify(meetup) );
  /*  Dado que el objeto room tiene un método toJSON(), este método se utilizará durante 
  la serialización y mostrará el valor de la propiedad number.*/