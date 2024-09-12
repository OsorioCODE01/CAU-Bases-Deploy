interface Passenger{
    name : string;
    children?: string[];
}

const passenger1: Passenger ={
    name: 'Nicolas',
}
const passenger2 : Passenger = {
    name : 'Nicolas',
    children : ['Hijo 1', 'Hijo 2']
}

const printChildrenNumber = (passenger: Passenger):number =>{

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren)
    return howManyChildren
}

printChildrenNumber(passenger1)