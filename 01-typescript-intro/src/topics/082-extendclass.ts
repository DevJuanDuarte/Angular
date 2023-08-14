export class Person {

    constructor(public name:string, public address:string){}
}

// const person2 = new Person('David', 'Giron');

// console.log(person2);

export class Hero  extends Person {
    constructor (
        public alterEgo: string,
        public age: number,
        public realName:string,
    ){
        super(realName, 'Giron')
    }
}


const hero = new Hero('Ironman', 45, 'Tony');
console.log(hero);