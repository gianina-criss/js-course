// Numbers
const num = 5;
console.log(num);
// result -- 5

// to make the number --- string
x = num.toString();
console.log(x, typeof x);
// result -- 5 string

// lenght -- undefined
x = num.lenght;
console.log(x);
// result -- undefined

// turn the number in to a string to see the lenght
x = num.toString().length;
console.log(x);
// result -- 1

// get 2 decimals
x = num.toFixed(2);
console.log(x, typeof x);
// result -- 5.00 string

// toPrecision
x = num.toPrecision(3);
console.log(x);
// result -- 5.00

//toExponential
x = num.toExponential(2);
console.log(x);
// result -- 5.00e+0

//local string
x = num.toLocaleString("en-US");
console.log(x);
// result -- 5
console.log(num);
// result -- 5

// the maximumvalue of -- number
x = Number.MAX_VALUE;
console.log(x);
// result -- 1.7976931348623157e+308

// the minimum value
x = Number.MIN_VALUE;
console.log(x);
// result -- 5e-324
