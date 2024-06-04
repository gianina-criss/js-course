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

// global vs local scope in function --------you can have a var with the same name, one can be in the local scope and one in the global,local var come first

var outerWear = "t-shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// return value from function with key word return
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(4));

// the importan of value return
var sum = 0;
function addFive() {
    return (sum = sum + 5);
}
console.log(addFive());

// assigning a variable with return
var changed = 0;

function change(num) {
    return (num + 10) / 3;
}
changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(9);
console.log(processed);

// stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after: " + JSON.stringify(testArr));

// bolean value
function welcomeToBooleans() {
    return true;
}

// use condition logic with if stataments
function myTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes, it's true";
    }
    return "no, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes, that was true";
    }
    return "no, that was false";
}
console.log(trueOrFalse(true));

// comparison with the equality operatr ==
function testEqual(val) {
    if (val === 12) {
        return "equal";
    }
    return "not equal";
}

console.log(testEqual(10));

// comparison with the strict equality operator ===
function testStrict(val) {
    if (val === 7);
    {
        return "equal";
    }
    return "not equal";
} 
console.log(testStrict(10));  

