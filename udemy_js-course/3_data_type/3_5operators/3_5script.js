// 1 Arithmetic operators
let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5;
console.log(x);

//Concatenation
y = "hello" + " world";
console.log(y);

// Exponenet
z = 2 ** 3;
console.log(z);

// Increment
a = 1;
a = a + 1;
console.log(a);
a++;
console.log(a);

// decrement
console.group("num");
b = 2;
// b = b - 1;
// console.log(b);
b--;
console.log(b);
console.groupEnd;

// 2 Assigment Operators
c = 10;
// c = c + 5;
c += 5;
// c -= 5;
// c *= 5;
// c /= 5;
// c %= 5;
// c **= 5;
console.log(c);

// 3 Comparison Operators
// == - comaration operator of equal
g = 2 == 2; // only evaluets the value
console.log(g); //true 2=2
g = 2 == 4;
console.log(g); // false 2=4

// === - triple qual
d = 2 === 2; //evaluets the value and the typeof
console.log(d);

// not equal - !=
e = 3 != 3;
console.log(e); //false
e = 3 != 2;
console.log(e); //true

// grader - >
f = 10 > 5;
console.log(f);
f = 10 < 5;
console.log(f);
f = 10 <= 5;
console.log(f);
f = 10 >= 5;
console.log(f);
