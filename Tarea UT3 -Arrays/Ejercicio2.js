function ordenarNotas (array){
    array.sort(function(numero1, numero2) {
        if (numero1 > numero2) {
            return 1;
        }
        else {
            return -1;
        }
    })
}

var notas = [4, 8, 3, 10, 5, 1, 7, 5.55, 9, 4];
ordenarNotas(notas);
console.log(notas)