function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// rewrite as an arrow function
const add1 = (a, b) => {
    return a + b;
};
console.log(add1(1, 2));

// shorten version (implicit return)
const add2 = (a, b) => a - b;
console.log(add2(10, 2));

// function with a single parameter (can leave out () with a single parameter)
const add3 = (a) => a * 2;
console.log(add3(5));

// returning an object
const createObj = () => ({
    name: "Brad",
});
console.log(createObj());

// array
const numbers = [1, 2, 3, 4];
numbers.forEach(function (n) {
    console.log(n);
});

// shorter version (arrow function in a callback)
numbers.forEach((n) => console.log(n));
