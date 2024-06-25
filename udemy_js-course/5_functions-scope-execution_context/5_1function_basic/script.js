// declare a function
function sayHello() {
    console.log("hello world");
}

// run the function
sayHello();

// passing data into a function
function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, 10);

// return a function
function substract(num1, num2) {
    return num1 - num2;
    console.log("after the return");
}
substract(10, 2);
const result = substract(10, 2);
console.log(result, substract(20, 5));
