export class Person {
    public name:string;
    public address: string;

    constructor(){
        this.name = 'Juan David Duarte';
        this.address = 'Giron';
    }
}

const person = new Person();

console.log(person);