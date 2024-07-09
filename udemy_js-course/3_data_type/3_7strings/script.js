// String
let a; //declare a variable
const name = "jhon";
const age = 31;
x = "hello, my name is " + name + " and i am " + age + " years old"; // concatenation
console.log(x);
// result -- hello, my name is jhon and i am 31 years old

// do the same thing using -- Tamplete Literals
let b; //declare a variable
const lastname = "jhon";
const number = 31;
b = `hello, my name is ${name} and i am number ${number} years old`;
console.log(b);
// result  -- hello, my name is jhon and i am 31 years old

// String Properties and Methods
const c = "hello"; //use a propertie
d = c.length;
console.log(d);
// result -- 5

// const e = "hello"; -- this is a string, the line below is how to change a string into a string object
const e = new String("hello"); //becomes an object - we use a method
f = typeof e;
console.log(f);
// result -- object

// acces value by key
const o = "bye";
g = o[0]; // find out the first latter
console.log(g);
// result -- b

// prototipe - shows the methods that can be used with string
const i = "hello you!";
h = i.__proto__;
console.log(h);
// result -- all methods and propertyes

// methods
const k = "good day";
h = k.toUpperCase(h); // all uppercase
console.log(h);
// result -- GOOD DAY
h = k.toLowerCase(h); // all lowercase
console.log(h);
// result -- good day
h = k.charAt(1); // shows a letter, index
console.log(h);
// result -- o
h = k.indexOf("d"); // shows the index from where is the letter
console.log(h);
// result -- 3
h = k.substring(1, 3); // shows the letters from an index to another index
console.log(h);
// result -- oo
h = k.substring(4); // starts at an index
console.log(h);
// result -- day
h = k.slice(-3); // the diference between this and substring is that this is able to start from a negetiv number
console.log(h);
// result -- day
h = k.replace("day", "all"); // replace a word
console.log(h);
// result -- good all
h = k.includes("day"); // search for a string, true if the word exist, false if not
console.log(h);
// result -- true
h = k.valueOf(); // return the primitive value of a string
console.log(h);
// result -- good day
h = k.split(" ");
console.log(h); // split the words
// result -- [`good`,`day`]
// 0: "good"
// 1: "day"

const t = "    aloha";
x = t.trim(); // get rid of spaces
console.log(x);
// result -- aloha
