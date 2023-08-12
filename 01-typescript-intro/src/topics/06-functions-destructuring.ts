export interface Product {
    description:string;
    price:number;
}

const phone:Product = {
    description:'Iphone 14 Pro max',
    price:450
}

const tablet:Product ={
    description: 'Ipad Mini',
    price: 200
}

interface TaxCalculationsOptions {
    tax:number;
    products:Product[];
}


export function taxCalculation( options:TaxCalculationsOptions ): [number, number] {
    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}



 const shoppingCart = [phone, tablet];
 const tax = 0.15;

 const [total, totalTax] = taxCalculation({
    products:shoppingCart,
    tax:tax
 });

//  console.log('Total: ', total);
//  console.log('Tax: ', totalTax);


