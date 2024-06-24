let x;

const person = {
    name: "jhon Doe",
    age: 30,
    isAdmin: true,
};
console.log(person);

//to acces a specific property from an object
x = person.name;
x = person["age"];
console.log(x);

//  an object inside an object
const person1 = {
    name: "jhon Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA",
    },
};
// to acces a property
x = person1.address.state;
console.log(x);

// add arrays in the object
const person3 = {
    name: "jhon Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA",
    },
    hobbies: ["music", "reading", "sports"],
};

// acces a specific index from array
x = person3.hobbies[0];
console.log(x);

// update property
person3.name = "Jane Doe";
x = person3;
console.log(x);

// remove a property from an object
delete person3.age;
x = person3;
console.log(x);

// add property
person3.hasChildren = true;
x = person3;
console.log(x);

// ad a function as a property
person3.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
// call the fnction
person3.greet();
