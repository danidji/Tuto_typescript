console.log("Yoooo")
// Déclaration d'un variable avec son type 
let str:string; 

// Possibilité d'assigner plusieurs types à une variable
let numOrStr: number | string

// déclaration de tableaux 
let tab:number[] = []; 
//plusieurs types 
let tabNumberBool: (number | boolean)[] = [];

tabNumberBool = [1, false, 44,];
tabNumberBool.push(true);

console.log(tabNumberBool)

// déclaration des objets 
// on créé une interface qui sera le modèle de typage des valeur de notre objet 

interface User {
    id : number,
    name: string,
    isConnected: boolean,
    email?:string // <== Ici le ? signifie que l'on est pas obligé de déclarer le champs lors que l'on instancie un User
}

let newUser: User = {
    id: 1234,
    name: 'Toto',
    isConnected: true
}

// ne peut pas fonctionner ==>  newUser.phone = 0212457852;

// Déclaration des classes 

class Car {
    id: number;
    type: string;
    speedMax?: number;

    constructor(id:number, type:string, speedMax?: number) {
        this.id = id;
        this.type=type;
        this.speedMax=speedMax;
    }
}

const clio = new Car(50,'Renault')

clio.speedMax = 150

console.log(clio)

// Déclaration des fonctions 
//                               v-- On indique le retour de la fonction (void => ne retourne rien)
const sayHello = (name:string):void => {
    console.log(`Hello ${name}`);
}
sayHello('Toto');

// tuple & Enum
enum Role {ACTOR, SINGER}
interface People {
    name : string,
    attributes: [number, string],
    role: Role
}

const newPeople:People = {
    name:"toto",
    attributes: [40,'star'],
    role: Role.ACTOR
}

console.log(newPeople)

// NOTE 
// - déclaration des promesses ?
// - TS avec react => déclaration d'un composant ?


