const x = 100;

//block level scope
if (true) {
    const y = 200;
    console.log(x + y);
}

//for loop scope
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//var , let and const local scope
if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
    console.log(a);
    console.log(b);
}

console.log(c);

// accesing var variable from function scope
function scope() {
    var d = 100;
    console.log(d);
}
scope();
