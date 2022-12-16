var lista = ["Peras", "Manzanas", "Kiwis", "Platanos", "Mandarinas"];

//Eliminar elemento
var borrado = lista.splice(1,1);
console.log(lista);

//Añadir elementos
var borrado = lista.splice(3, 0, "Naranjas", "Sandías");
console.log(lista);

//Sustituir elementos
var borrado = lista.splice(1, 1, "Cerezas", "Nísperos");
console.log(lista);
