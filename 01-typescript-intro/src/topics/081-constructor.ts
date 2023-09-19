export class Person {

    constructor(public name:string, public address:string){}
}

// const person2 = new Person('David', 'Giron');

// console.log(person2);
const person = new Person('Juan', 'Giron');

export class Hero  extends Person {
    
}
console.log(person);