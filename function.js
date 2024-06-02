// write reusable code with function
function reusableFunction() {
    console.log("heloo world");
    console.log("be happy");
}
reusableFunction();

// passing values to functions with arguments
function functionWithtArguments(a, b) {
    console.log(a - b);
    console.log(a + b);
}
functionWithtArguments(10, 5);

// global scope and function
var myGlobal = 10;

function fun1() {}
function fun2() {
    var output = "";
    var oopsGlobal = 5;
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//local scope and functions
function myLocaleScope() {
    var myVar = 3;
    console.log(myVar);
}
myLocaleScope();

// global vs local scope in function
var outerWear = "t-shirt";

function myOutfit() {
    var outerWear = "sweater"
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear)

// return value from function with key word return

