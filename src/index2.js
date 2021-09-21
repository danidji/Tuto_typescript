"use strict";
console.log("index 2 ");
// Types générique => doc : https://www.typescriptlang.org/docs/handbook/2/generics.html
// on définit une fonction qui accepte plusieurs types définit au moment où elle est appellé
function test(arg) {
    return arg;
}
var output = test(10);
console.log(output);
//Utilisation d'une gamme de type
function getAndReturnArray(arg) {
    console.log(arg.length);
    return arg;
}
var stringArray = getAndReturnArray(["salut", "oui", "2"]);
var numberArray = getAndReturnArray([0, 1, 2, 3, 4, 5]);
console.log(stringArray);
console.log(numberArray);
function test2(arg) {
    return arg;
}
var genericStringInterface = test2;
var genericNumberInterface = test2;
console.log("TEST String ==>", genericStringInterface("salut"));
console.log("TEST number ==>", genericNumberInterface(10));
function testLength(arg) {
    console.log(arg.length);
    return arg;
}
// testLength(2);
console.log(testLength({ length: 1, b: 2, g: 5 }));
