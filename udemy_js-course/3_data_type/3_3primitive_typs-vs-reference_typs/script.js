//  this values are stored on the stack
const name = "jhon";
const age = 30;

// reference value are stored on the heap
const person = {
    name: "brad",
    age: 40,
};
let newName = name;
console.log(name, newName);
// result -- jhon jhon

const person1 = {
    name: "brad",
    age: 40,
};
let newName1 = name;
newName1 = "jhonathan";
console.log(name, newName1);
// result -- jhon jhonathan

const person2 = {
    name: "brad",
    age: 40,
};
let newName2 = name;
let newPerson = person2;
console.log(name, newName2);
// result -- jhon jhon
console.log(person2, newPerson);
// result -- {name: 'brad', age: 40} {name: 'brad', age: 40}

const person3 = {
    name: "brad",
    age: 40,
};
let newName3 = name;
let newPerson1 = person3;
newPerson1.name = "bradly";
console.log(name, newName2);
// result -- jhon jhon
console.log(person3, newPerson1);
// result -- {name: 'bradly', age: 40} {name: 'bradly', age: 40}

//cosmin exemplu
console.log("Cosmin exemplu");
// result -- Cosmin exemplu
console.log(person3);
// result -- {name: 'bradly', age: 40}
console.log(person3["name"], person3["age"]);
// result -- bradly 40
console.log(person3.name, person3.age);
// result -- bradly 40
person3.name = "Gianina";
console.log(person3);
// result -- {name: 'Gianina', age: 40}
