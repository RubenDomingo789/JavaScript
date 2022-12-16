var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Meses que empiezen por "M"
var mesesM = meses.filter(function(mes) {
    return mes.startsWith("M");
})
console.log("Meses que empiezen por 'M': " + mesesM);

//Primer mes que empieza por "M"
var mesM = meses.find(function(mes) {
    return mes.startsWith("M");
})
console.log("Primer mes que empieza por 'M': " + mesM);

//Posición del mes que empieza por "M"

var posMesM = meses.findIndex(function(mes) {
    return mes.startsWith("M");
})
console.log("Posición del mes que empieza por 'M': " +posMesM);

//Indicar si algún mes empieza por "S"
var mesesS = meses.some(function(mes) {
    return mes.startsWith("S");
})
console.log("Indicar si algún mes empieza por 'S': " + mesesS);

//Indicar si todos los meses acaban por "O"
var mesesO = meses.every(function(mes) {
    return mes.endsWith("O");
})
console.log("Indicar si todos los meses acaban por 'O': " + mesesO);

// Devuelve otro array con los meses en mayúsculas
var mesesMayus = meses.map(function(mes) {
    return mes.toUpperCase();
})
console.log("Array con meses en mayúsculas: " + mesesMayus);

//Indica si algún mes se llama "Octubre"
var mesOctubre = meses.some(function(mes) {
    return mes.includes("Octubre");
})
console.log("Indicar si algún mes se llama 'Octubre': " + mesOctubre);