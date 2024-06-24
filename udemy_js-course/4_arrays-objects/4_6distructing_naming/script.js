const firstName = "Jhon";
const lastName = "Doe";
const age = 30;

// const person = {
//     firstName = firstName,
//     lastName = lastName,
//     age = age,
// };

const person = {
    firstName, //shorter version
    lastName,
    age,
};

console.log(person.age);

// destructuring propertyes from the object
const todo = {
    id: 1,
    title: "take out the trash",
    user: {
        name: "Jhon",
    },
};

// const {
//     id,
//     title,
//     user: { name },
// } = todo;
// console.log(id, title, name);

const { id } = todo;
console.log(id);

// rename
const todo1 = {
    id1: 2,
    title1: "be happy",
    user1: {
        name1: "Maria",
    },
};

const {
    id1: renameId,
    title1,
    user1: { name1 },
} = todo1;

console.log(renameId, title1, name1);

// distructuring arrays
const numbers = [14, 24, 34, 44, 54];
const [first, second] = numbers;
console.log(first, second);

// rest operator aka spred operator using arrays
const numbers1 = [14, 24, 34, 44, 54];
const [...rest] = numbers;
console.log(rest);
