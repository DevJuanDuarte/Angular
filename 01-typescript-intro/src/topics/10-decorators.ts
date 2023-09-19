function classDecorator(
    constructor:any 
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override'
    }
}

@classDecorator
export class SuperClass {

    public myProperty:string = 'Abc123';


    print(){
        console.log("Hola Mundo");
    }
}
//Imprime la definicion de la clase
console.log(SuperClass);

//Instancia creada de mi clase
const myClass = new SuperClass();
console.log( myClass);