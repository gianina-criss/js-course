let x;

// array literal
const number = [12, 44, 33, 29, 39];
console.log(number, typeof number);

// mixed
const mixed = [12, "book", true, null];
console.log(mixed);

// array constructor
const fruits = new Array("apple", "grape", "orange");
console.log(fruits, typeof fruits);

// acces a specific item by the index
x = number[0];
console.log(x);

// add
x = number[0] + number[2];
console.log(x);

// add in to a templete literal
x = `My favorite fruit is an ${fruits[0]}`;
console.log(x);

// leght property
x = number.length;
console.log(x);

// change an element
fruits[1] = "pear";
console.log(fruits);

// lenght can be used to cut an element
fruits.length = 2;
console.log(fruits);

// add elements
fruits[2] = "lime";
console.log(fruits);

// add an element to the end
fruits[fruits.length] = "blueberry";
x = fruits;
console.log(x);
