function addNumbers (a:any, b:any):number {
    return a + b;
}

//Funcion flecha:
const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply (firstNumber:number, secondNumber:number, base:number = 2) {
    return (firstNumber + secondNumber) * base;
}
const result:number = addNumbers(1,2);
const result2:string = addNumbersArrow(1,2);
const multiplyResult:number = multiply(13,2);
console.log({result});
console.log({result2});
console.log({multiplyResult});

// Se declara la interface del caracter
interface Character {
    name: string;
    hp:number;
    showHp: () => void;
}

// Curacion del personaje donde espera un objeto en este caso el personaje y un valor para curar en el caso de amount
const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

//Definir el personaje:
const emperador:Character = {
    name: 'Emperador',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

const sentinel:Character = {
    name: 'Sentinel',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(emperador, 500);
healCharacter(sentinel, 200);

emperador.showHp();
sentinel.showHp();


  
export{}