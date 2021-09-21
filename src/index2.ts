console.log("index 2 ");

// Types générique => doc : https://www.typescriptlang.org/docs/handbook/2/generics.html
// on définit une fonction qui accepte plusieurs types définit au moment où elle est appellé
function test<Type>(arg: Type): Type {
  return arg;
}

let output = test<number>(10);

console.log(output);

//Utilisation d'une gamme de type

function getAndReturnArray<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);

  return arg;
}

let stringArray = getAndReturnArray<string>(["salut", "oui", "2"]);
let numberArray = getAndReturnArray<number>([0, 1, 2, 3, 4, 5]);

console.log(stringArray);
console.log(numberArray);

//Interface génériques

interface GenericType<Type> {
  (arg: Type): Type;
}

function test2<Type>(arg: Type): Type {
  return arg;
}

let genericStringInterface: GenericType<string> = test2;
let genericNumberInterface: GenericType<number> = test2;

console.log("TEST String ==>", genericStringInterface("salut"));
console.log("TEST number ==>", genericNumberInterface(10));

// Classes génériques

// class GenericClass<Type> {
//     value: Type;
//     add?: (x: Type, y: Type) => Type;
// }

// let classNumber = new GenericClass<number>();
// classNumber.value = 2;
// classNumber.add = (x,y)=> {
//     return x + y;
// }

// contrainte générique

interface LengthType {
  length: number;
}

function testLength<Type extends LengthType>(arg: Type): Type {
  console.log(arg.length);
    return arg;
}

// testLength(2);

console.log(testLength({ length: 1, b: 2, g: 5 }));
