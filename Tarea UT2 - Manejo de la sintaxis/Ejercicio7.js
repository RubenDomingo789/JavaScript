function bucleFor([notas]) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return (suma / notas.length).toFixed(1);
}

arrayNotas = [4,5,6,7,8,2,3,6,1,8,0,1,9,9,10];

console.log("Nota media a partir de bucle for: " + bucleFor([arrayNotas]));
