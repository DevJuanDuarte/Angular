import { Product, taxCalculation } from './06-functions-destructuring'

const shoppingCart: Product[] = [
    {
        description:  'Samsung S23 Ultra',
        price: 6000000
    },
    {
        description: 'Iphone 14 Pro Max',
        price: 5900000
    }
];

//Tax 0.15
const [total, tax] = taxCalculation ({
    products: shoppingCart,
    tax:0.15
});
 
console.log('Total: ', total);
console.log('Tax: ', tax);