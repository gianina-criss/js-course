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

const person1 = {
    name: "brad",
    age: 40,
};
let newName1 = name;
newName1 = "jhonathan";
console.log(name, newName1);

const person2 = {
    name: "brad",
    age: 40,
};
let newName2 = name;
let newPerson = person2;
console.log(name, newName2);
console.log(person2, newPerson);

const person3 = {
    name: "brad",
    age: 40,
};
let newName3 = name;
let newPerson1 = person3;
newPerson1.name = "bradly";
console.log(name, newName2);
console.log(person3, newPerson1);

//cosmin exemplu
console.log("Cosmin exemplu");
console.log(person3);
console.log(person3["name"], person3["age"]);
console.log(person3.name, person3.age);
person3.name = "Gianina";
console.log(person3);
