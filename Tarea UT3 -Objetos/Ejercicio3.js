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

class Televisores extends Producto {
    constructor(nombre, categoria, unidades, precio, tamaño) { 
        super(nombre, categoria, unidades, precio)
        this.tamaño = tamaño;
    }

    getInfo() {
        return this.nombre + " => " + this.tamaño + " pulgadas";  
    }
};

var lg = new Televisores("Televisor LG", "Electrodomésticos",14, 342.15, 40);
var samsung = new Televisores("Televisor Samsung", "Electrodomésticos",8, 599.99, 55);

var teles = [lg, samsung];

teles.forEach(element => {
    console.log(element.getInfo());
});
