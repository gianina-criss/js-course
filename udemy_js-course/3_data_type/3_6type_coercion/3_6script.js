let a;
a = 5 + "5";
console.log(a, typeof a); // 55 - because the last 5 is a string and it turns automat the first 5 into a string
a = 5 + null; // 5 - because null is coerc in to a 0
console.log(a, typeof a);

a = 5 + Number("5"); // 10 - converting the string in to a number you get 10
console.log(a, typeof a);

// using multiply
let b;
b = 5 * "5"; // 25 - in this case convertet the string into a number
console.log(b, typeof b);

// //  plus null
let c;
c = 5 + null;
console.log(c, typeof c);

//
d = Number(true); //  1 - true as a number is 1
d = Number(false); // 0 - false as a number si 0
d = 5 + true;
console.log(d, typeof d); // 6
