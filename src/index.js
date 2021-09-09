"use strict";
console.log("Yoooo");
// Déclaration d'un variable avec son type 
var str;
// Possibilité d'assigner plusieurs types à une variable
var numOrStr;
// déclaration de tableaux 
var tab = [];
//plusieurs types 
var tabNumberBool = [];
tabNumberBool = [1, false, 44,];
tabNumberBool.push(true);
console.log(tabNumberBool);
var newUser = {
    id: 1234,
    name: 'Toto',
    isConnected: true
};
// ne peut pas fonctionner ==>  newUser.phone = 0212457852;
// Déclaration des classes 
var Car = /** @class */ (function () {
    function Car(id, type, speedMax) {
        this.id = id;
        this.type = type;
        this.speedMax = speedMax;
    }
    return Car;
}());
var clio = new Car(50, 'Renault');
clio.speedMax = 150;
console.log(clio);
// Déclaration des fonctions 
//                               v-- On indique le retour de la fonction (void => ne retourne rien)
var sayHello = function (name) {
    console.log("Hello " + name);
};
sayHello('Toto');
// tuple & Enum
var Role;
(function (Role) {
    Role[Role["ACTOR"] = 0] = "ACTOR";
    Role[Role["SINGER"] = 1] = "SINGER";
})(Role || (Role = {}));
var newPeople = {
    name: "toto",
    attributes: [40, 'star'],
    role: Role.ACTOR
};
console.log(newPeople);
// NOTE 
// - déclaration des promesses ?
// - TS avec react => déclaration d'un composant ?
