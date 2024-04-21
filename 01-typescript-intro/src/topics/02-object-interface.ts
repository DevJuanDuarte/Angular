const skills: string[] = ['Lanza', 'Velocidad', 'Resistencia'];
console.log(skills);

interface Character {
    name:string,
    hp:number,
    skills:string[],
    hometown?:string
}

const strider:Character = {
    name: 'Juan',
    hp: 100,
    skills: ['Velocidad', 'Resistencia', 'Lanza'],
    // hometown: 'Riverdell'
}

// strider.hometown = 'Riverdell'

console.log(strider);




 
export {}