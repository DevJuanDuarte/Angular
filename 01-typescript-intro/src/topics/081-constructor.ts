export class Person {

    constructor(public name:string, public address:string){}
}

const person = new Person('Juan', 'Giron');
const person2 = new Person('David', 'Giron');

console.log(person);
console.log(person2);