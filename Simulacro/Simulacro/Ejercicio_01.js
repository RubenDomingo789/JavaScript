
//--------------------------------------------------------------------------------------------------------//
//1.    Recoge los números introducidos por el usuario hasta que introduzca un número negativo.
//No me agarra el NULL :(
var numUsuario = new Array();
do {
    var num = parseInt(prompt("Introduce un numero positivo: "));
    numUsuario.push(num);

    if (num == undefined) {
        alert('No has introducido nada');
    }
    else if( num === null){
        alert('No has introducido nada');
    }


} while (num > 0 || (num===null));

//--------------------------------------------------------------------------------------------------------//
//           Los números introducidos por el usuario en el mismo orden en el que se han introducido.
function numerosIntroducidos() {
    for (let i = 0; i < numUsuario.length-1; i++) {
        console.log(numUsuario[i]);
        
    }
}
numerosIntroducidos();

//--------------------------------------------------------------------------------------------------------//
//                      Indicar cuantos números ha introducido el usuario.
function cantidadNumerosIntroducidos() {
    let contador = 0;
    for (let i = 0; i < numUsuario.length-1; i++) {
        //console.log(numUsuario[i]);
        contador++;

    }
    return contador;
}

console.log('Este es el total de numeros introducidos :)' + cantidadNumerosIntroducidos());

//--------------------------------------------------------------------------------------------------------//
// ·                     La suma de todos los números introducidos.
function sumaNumerosIntroducidos() {
    let suma = 0;
    for (let i = 0; i < numUsuario.length-1; i++) {
        suma = suma + numUsuario[i];

    }
    return suma;
}

console.log('Esta es la suma de todos los numeros introducidos ' + sumaNumerosIntroducidos());
//--------------------------------------------------------------------------------------------------------//
//                              La media de todos los números introducidos.

function mediaNumerosIntroducidos() {
    let contador = 0;
    let suma = 0;
    for (let i = 0; i < numUsuario.length-1; i++) {

        suma = suma + numUsuario[i];
        contador++;

    }
    let media = suma / contador;
    return media;
}

console.log('Esta es la media de los numeros introducidos ' + mediaNumerosIntroducidos());

//--------------------------------------------------------------------------------------------------------//

//La mediana de todos los números introducidos. La mediana de un conjunto de datos, es el dato central del conjunto ordenado;
// cuando el número de datos de un conjunto es un número par, la mediana es la media de los dos datos centrales.
/*
 Ejemplo 1: 2, 4, 6, 7, 9 -> mediana = 6
 Ejemplo 1: 2, 4, 6, 7, 7, 9 -> mediana = 6.5
 */

 function mediana() {
    numUsuario.sort((a,b) => a-b);
    const l=numUsuario.length;
    return l%2==0
        ? numUsuario.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
        : numUsuario.slice((l/2), l/2+1)[0];
}
console.log('Esta es la mediana de los numeros: '+mediana());


//--------------------------------------------------------------------------------------------------------//
//                       Los números introducidos ordenados de menor a mayor.

function numerosMenorAmayor(){
    
    let nuevo = numUsuario.sort(function(a, b) {
        return a - b;
      });
      
    return nuevo; 
}

console.log(numerosMenorAmayor());


//--------------------------------------------------------------------------------------------------------//
//·                      Los números introducidos ordenados de menor a mayor.
function numerosMayorAmenor(){
    
    let nuevo = numUsuario.sort(function(a, b) {
        return a - b;
      });
      nuevo=nuevo.reverse();
    return nuevo; 
}

console.log( numerosMayorAmenor());

//--------------------------------------------------------------------------------------------------------//
//                              El mayor de los números introducidos.

function numMayor(){
    let mayor=0; 
    for (let i = 0; i < numUsuario.length-1; i++) {
       
        if( numUsuario[i]>mayor){
            mayor=numUsuario[i];
        }

    }
    return mayor;

}
console.log('Este es el numero mayor'+ numMayor());

//--------------------------------------------------------------------------------------------------------//
//                              El menor de los números introducidos.

function numMenor(){
    let menor=0; 
    for (let i = 0; i < numUsuario.length-1; i++) {
       
        if( numUsuario[i]<menor){
            menor=numUsuario[i];
        }

    }
    return menor;

}
console.log('Este es el numero menor'+ numMenor());
//--------------------------------------------------------------------------------------------------------//
//           Los números enteros comprendidos entre el menor y el mayor de los números introducidos.

function numsEntreMayorMenor(){
    for (let i = numMenor(); i < numMayor(); i++) {
       
        console.log(i);

    }
    
}
console.log('Esto son los numeros comprendidos entre el numero mayor y el menor');
numsEntreMayorMenor();

//--------------------------------------------------------------------------------------------------------//