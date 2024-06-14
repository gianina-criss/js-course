//  reference type
// array  --- evety reference type is an object
const number = [1, 2, 3, 4];
const output = number;
console.log(output, typeof number);

// object litteral
const person = {
    name: "Maia",
};
const output1 = person;
console.log(output1, typeof person);

// function
function sayHello() {
    console.log("Hello");
}
const output2 = sayHello;
console.log(output2, typeof output2);
