interface Product {
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


function taxCalculation( options:TaxCalculationsOptions ): number[] {
    let total = 0;
    options.products.forEach(product => {
        total += product.price;
    });
    return [total, total * options.tax];
}



 const shoppingCart = [phone, tablet];
 const tax = 0.15;

 const result = taxCalculation({
    products:shoppingCart,
    tax:tax
 });

 console.log('Total: ', result[0]);
 console.log('Tax: ', result[1]);


export{}