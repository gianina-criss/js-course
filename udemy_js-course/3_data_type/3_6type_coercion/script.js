let a = 5 + "5";
console.log(a, typeof a); // 55 - because the last 5 is a string and it turns automat the first 5 into a string
// result -- 55 string
let b = 5 + null; // 5 - because null is coerc in to a 0
console.log(b, typeof b);
// result -- 5 `number`

let c = 5 + Number("5"); // 10 - converting the string in to a number you get 10
console.log(c, typeof c);
// result -- 10 `number`

// using multiply
let d = 5 * "5"; // 25 - in this case convertet the string into a number
console.log(d, typeof d);
// result -- 25 `number`

// //  plus null
let e = 5 + null;
console.log(e, typeof e);
// result -- 5 `number`

let f = Number(true); //  1 - true as a number is 1
console.log(f, typeof f);
// result -- 1 `number`
let g = Number(false); // 0 - false as a number si 0
console.log(f, typeof f);
// result -- 0 `number`
let i = 5 + true; // 6
console.log(i, typeof i);
// result -- 6 `number`
