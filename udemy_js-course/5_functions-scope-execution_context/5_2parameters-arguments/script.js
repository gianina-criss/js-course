function registerUser(user) {
    return user + " is registret ";
}
console.log(registerUser("Jhon"));

// default value of the parametars
function registerUser(user) {
    if (!user) {
        user = "Bot";
    }
    return user + " is registered ";
}
console.log(registerUser());

// easyer way to have default parameters
function registerUser(user = "Bot") {
    return user + " is registret ";
}
console.log(registerUser());

// add another parameters value
function registerUser(user = "Bot", x = "y") {
    // return user + " is registret ",
    return x + " is ";
}
console.log(registerUser());

// rest params
function sum(...numbers) {
    return numbers;
}
console.log(sum(1, 2, 3));

//add all the number and make a total
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 6, 55));

// objects as params
function loginUser(user) {
    return `the user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: "jhon",
};
console.log(loginUser(user));

// another way to log in
console.log(
    loginUser({
        id: 2,
        name: "Sara",
    })
);

// arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
