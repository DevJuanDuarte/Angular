export class Person {
    public name: string;
    public address: string;

    constructor () {
        this.name = 'Juan David';
        this.address = 'Giron';
    }
}

const person = new Person();

console.log(person);