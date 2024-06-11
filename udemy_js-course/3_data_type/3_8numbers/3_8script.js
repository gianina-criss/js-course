const num = new Number(5);
console.log(num);
// to make the number --- string
x = num.toString();
console.log(x, typeof x);

// lenght -- undefined
x = num.lenght;
console.log(x);

// turn the number in to a string to see the lenght
x = num.toString().length;
console.log(x);

// get 2 decimals
x = num.toFixed(2);
console.log(x, typeof x);

// toPrecision
x = num.toPrecision(3);
console.log(x);

//toExponential
x = num.toExponential(2);
console.log(x);

//
x = num.toLocaleString("en-US");
console.log(x);
console.log(num);

// the maximumvalue of -- number
x = Number.MAX_VALUE;
console.log(x);

// the minimum value
x = Number.MIN_VALUE;
console.log(x);
