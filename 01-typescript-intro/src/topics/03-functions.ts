function addNumbers (a:any, b:any):number {
    return a + b;
}

//Funcion flecha:
const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply (firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}
                              

const result:number = addNumbers(1,2);
const result2:string = addNumbersArrow(1,2);
const multiplyResult:number = multiply(13);
console.log({result});
console.log({result2});
console.log({multiplyResult});



export{}