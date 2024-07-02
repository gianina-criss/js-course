// nast a function in to a function
function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    second();
}
first();

// naste a if statement in to a if statement
if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
}
