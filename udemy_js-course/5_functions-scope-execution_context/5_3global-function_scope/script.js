// global  scope - the global variable are going to be accessible from anywhere
window.alert("hello");
alert("hy");

// width of the page
console.log(window.innerWidth, "in global scope");

// height of the page
console.log(window.innerHeight, "in global scope");

// function scope
function run() {
    console.log(window.innerHeight, "in function scope");
}
run();

// acces a value from global scope in a function local scope
const x = 100;
console.log(x, " in global scope");

function add() {
    console.log(x, "in function scope");
}
add();

// acces a value from global scope in execution block
if (true) {
    console.log(x, "in block");
}

//acces a variable in a function local scope
function innerScope() {
    const x = 1;
    const y = 50;
    console.log(x + y, "in function scope");
}
innerScope();
