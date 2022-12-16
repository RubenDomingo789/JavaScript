
var tvSamsung = {
    nombre: 'Samsung 42',
    categoria: 'Televisores',
    unidades: 4,
    precio: 345.95,

    constructor(nombre, categoria, unidades, precio) { 
        this.nombre = nombre 
        this.categoria = categoria
        this.unidades = unidades 
        this.precio = precio
    },

    importe() {
        return this.unidades * this.precio;
    }
};

console.log(tvSamsung.importe());
