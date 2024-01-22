'use strict'
// La principal diferencia es que Map permite claves de cualquier tipo.
let map = new Map(); // Se crea un nuevo objeto Map llamado map.
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
// Se añaden pares clave-valor al Map.
let obj = Object.fromEntries(map.entries()); //Object.fromEntries para convertir ese iterable en un objeto.
alert(obj.orange); 