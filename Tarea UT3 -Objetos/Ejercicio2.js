class Producto {
    constructor(nombre, categoria, unidades, precio) { 
        this.nombre = nombre 
        this.categoria = categoria
        this.unidades = unidades 
        this.precio = precio
    }

    importe() {
        return this.unidades * this.precio;
    }

    getInfo() {
        return this.nombre + " (" + this.categoria + "): " + this.unidades + 
        " uds x " + this.precio + "€ = " + this.importe() 
    }
};

var leche = new Producto("Leche Pascual", "Lácteos", 25, 1.1);
var huevos =  new Producto("Huevos camperos", "Huevos", 70, 2.15);
var pan =  new Producto("Baguette", "Cereales", 50, 0.52);

var arrayProducts = [leche, huevos, pan];

arrayProducts.forEach(element => {
    console.log(element.getInfo());
});