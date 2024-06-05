function addTwoNumbers(x, y) {
    const result = x + y;
    return result;
}

function addTwoNumbersAndPrint(x, y) {
    const result = x + y;
    console.log(result);
}

console.log(addTwoNumbers(2, 3));
addTwoNumbersAndPrint(2, 3);

console.log(addTwoNumbers(2, 3) + 10);

const person = {
    name: "brad",
    email: "email@gmail.com",
};
console.log(person);

person.email = "email2@gmail.com";
console.log(person);

person.address = "address";
console.log(person);

person.age = 33;
console.log(person);

person.favourites_movies = ["Star Trek", "Superman", "Batman"];
console.log(person);

person.hair = {
    color: "blonde",
    length: "long",
    painted: false,
};
console.log(person);

const a = [1, 2, 3];

a[0] = 5;
