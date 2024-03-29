// Desestructuracion de Argumentos

export interface Producto {
    Descripcion: string;
    Precio: number;
}

const Telefono: Producto = {
    Descripcion: "Samsung A23",
    Precio: 250
}

const Tablet: Producto = {
    Descripcion: "Ipad Air",
    Precio: 400
}

interface CalculoImpuestosOpciones {
    Impuesto: number;
    Productos: Producto[];
}

export function CalculoImpuestos( Opciones:CalculoImpuestosOpciones ): [number, number] {

    const { Impuesto, Productos } = Opciones ;

    let Total = 0;
    Productos.forEach( ({Precio}) => {
        Total += Precio;
    });


    return[Total, Total * Impuesto];

}

const CarritoCompra = [Telefono, Tablet];
const Impuesto = 0.20;

const  [total, Totalimpuesto] = CalculoImpuestos({
    Productos: CarritoCompra,
    Impuesto: Impuesto
});



console.log("Total: ", total );
console.log("Impuesto: ", Totalimpuesto);