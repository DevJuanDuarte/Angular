// export interface Product {
//     description: string;
//     price: number;
// }

// const phone: Product = {
//     description: 'Iphone 14 Pro max',
//     price: 450
// }

// const tablet: Product = {
//     description: 'Ipad Mini',
//     price: 200
// }


// interface taxCalculationOption {
//     tax: number,
//     products: Product[]
// }

// function taxCalculation(options: taxCalculationOption): number[] {
    
//     let total = 0
//     options.products.forEach((product)=> {
//         total = total + product.price
//     })

//     return [ total, total * options.tax]
// }



// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax:tax
// })

// console.log('Total: ' + result[0]);
// console.log('Tax: ' + result[1]);


export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Iphone 14 Pro max',
    price: 450
}

const tablet: Product = {
    description: 'Ipad Mini',
    price: 200
}


interface taxCalculationOption {
    tax: number,
    products: Product[]
}

//Como options es  de tipo taxCalculationOption se puede desestructurar tax y products

// function taxCalculation({tax, products}: taxCalculationOption): [number, number] {
function taxCalculation(options: taxCalculationOption): [number, number] {

    const {products, tax} = options
    // se cambia number[] a [number, number] porque como es una tabla osea retorna dos valores los podemos especificar en lugar de mandar un array de numeros que puedan colocar muchos
    let total = 0
    products.forEach(({ price }) => {//Desestructuramos products para sacar price
        total += price
    })

    return [total, total * tax]
}



const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({//Desestructuramos result para en lugar de llamar por las posiciones del array se llamen por medio del nombre de las variables
    products: shoppingCart,
    tax: tax
})

console.log('Total: ' + total);
console.log('Tax: ' + totalTax);

