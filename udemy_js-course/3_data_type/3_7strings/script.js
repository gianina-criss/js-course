// String

let a; //declare a variable

const name = "jhon";
const age = 31;

x = "hello, my name is " + name + " and i am " + age + " years old"; // concatenation
console.log(x);

// do the same thing using -- Tamplete Literals
let b; //declare a variable

const lastname = "jhon";
const number = 31;
b = `hello, my name is ${name} and i am number ${number}`;
console.log(b);

// String Properties and Methods

const c = "hello"; //use a propertie
d = c.length;
console.log(d);

// const e = "hello"; -- this is a string, the line above is how to change a string into a string object
const e = new String("hello"); //becomes an object - we use a method
f = typeof e;
console.log(f); // object

// acces value by key
g = c[0]; // find out the first latter
console.log(g); // h

// Prototipe - shows the methods that can be used with string
const i = "hello you!";
h = i.__proto__;
console.log(h);

// methods
h = i.toUpperCase(i); // all uppercase
console.log(h);
h = i.toLowerCase(i); // all lowercase
console.log(h);
h = i.charAt(1); // shows a letter, index
console.log(h);
h = i.indexOf("l"); // shows the index from where is the letter
console.log(h);
h = i.substring(1, 5); // shows the letters from the first index to the second
console.log(h);
h = i.substring(3); // starts at 3
console.log(h);
h = i.slice(-11); // the diference between this and substring is that this is able to start from a negetiv number
console.log(h);
h = i.trim(); // get rid of spaces
console.log(h);
h = i.replace("you", "all"); // replace a word
console.log(h);
h = i.includes("you"); // serch for a string, true if the word exist, false if not
console.log(h);
h = i.valueOf(); // return the primitive value of a string
console.log(h);
h = i.split(" "); //
console.log(h);
