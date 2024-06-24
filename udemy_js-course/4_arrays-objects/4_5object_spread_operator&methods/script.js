//  ways to create an object
// 1
let x;

const todo = {};
todo.id = 1;
todo.name = "buy milk";
todo.completed = false;
x = todo;
console.log(x);

// 2
const todo2 = new Object();
todo2.id = 1;
x = todo2;
console.log(x);

// nasting
const person = {
    address: {
        coords: {
            lat: 42.955,
            lng: -111155,
        },
    },
};
x = person.address.coords.lng;
console.log(x);

// spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 5, d: 8 };
const obj3 = { ...obj1, ...obj2 };
x = obj3;
console.log(x);

//assign method
const obj4 = Object.assign({}, obj1, obj2); // same thing like above
x = obj4;
console.log(x);

//create an object in a array
const todos = [
    { id: 1, name: "buy milk" },
    { id: 2, name: "pickup kods from school" },
    { id: 3, name: "take out trash" },
];
x = todos;
console.log(x);

// acces a specific object
x = todos[0];
console.log(x);

// acces a specific property
x = todos[0].name;
console.log(x);

// method get all of the keys and put them into array
x = Object.keys(todo);
console.log(x);

// method get the lenght
x = Object.keys(todo).length;
console.log(x);

// method get values
x = Object.values(todo);
console.log(x);

//method get id value pairs
x = Object.entries(todo);
console.log(x);

// method has own property
x = todo.hasOwnProperty("name");
console.log(x);
