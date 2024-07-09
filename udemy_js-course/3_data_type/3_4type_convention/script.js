// convert a string to a number, methode parseInt
let amound = "100";
amound = parseInt(amound);
console.log(amound, typeof amound);
// rezult -- 100 'number'

// convert a string into a number ussing unery method
let amound1 = "100";
amound1 = +amound1;
console.log(amound1, typeof amound1);
// rezult -- 100 'number'

// convert a string into a number ussing the number or number constructor
let amound2 = "100";
amound2 = Number(amound2);
console.log(amound2, typeof amound2);
// rezult -- 100 'number'

// convert number to a string, methode toString
let amound3 = 100;
amound3 = amound3.toString();
console.log(amound3, typeof amound3);
// result -- 100 string

// convert a number into a string ussing string or string constructor
let amound4 = 100;
amound4 = String(amound4);
console.log(amound4, typeof amound4);
// result -- 100 string

// convert a string decimal to a number
let amound5 = "99.5";
amound5 = parseFloat(amound5);
console.log(amound5, typeof amound5);
// result -- 99.5 'number'

//convert number to boolean
let amound6 = 1;
amound6 = Boolean(amound6);
console.log(amound6, typeof amound6);
// result -- true 'boolean'
