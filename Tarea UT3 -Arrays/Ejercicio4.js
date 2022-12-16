arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3, 1.38, 2.56];

function notaMedia(array) {
    let total = array.reduce((total, nota) => total += nota);
    return total / array.length;
}

console.log(notaMedia(arrayNotas));