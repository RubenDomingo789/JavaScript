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

    toString() {
        return this.nombre + " (" + this.categoria + "): " + this.unidades + 
        " uds x " + this.precio + "€ = " + this.importe() 
    }
};

class Televisores extends Producto {
    constructor(nombre, categoria, unidades, precio, tamaño) { 
        super(nombre, categoria, unidades, precio)
        this.tamaño = tamaño;
    }

    toString() {
        return this.nombre + " => " + this.tamaño + " pulgadas";  
    }
};