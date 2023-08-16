export interface Passenger {
    name: string;
    // ?:Puede o no puede venir
    children?: string[];
}

const passenger1:Passenger = {
    name: 'Juan',
}

const passenger2:Passenger = {
    name:'David',
    children:['Candy', 'Layka'],
}

const returnChildrenNumber = (passenger: Passenger):number => {

    //Este es el optional chaining: ?
    const howManyChildren = passenger.children?.length || 0 ;

    //!
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}
returnChildrenNumber(passenger2)




