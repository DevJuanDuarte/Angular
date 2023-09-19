export function whatsMyType <T>(argument: T): T {
    return argument;
}

let amString = whatsMyType<string>('Hola Mundo');
let amNumber = whatsMyType<number>(100);
let amArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amString.split(' '));
console.log(amNumber.toFixed());
console.log(amArray.join());