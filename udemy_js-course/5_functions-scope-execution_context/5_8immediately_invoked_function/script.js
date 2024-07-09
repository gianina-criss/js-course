// create a imediately invoked function expresion (IIFE)
(function () {
    const user = "Ana";
    console.log(user);
    // create a function inside
    const hello = () => console.log("Hello from the IIFE");
    hello();
})();

// add parameters
(function (name) {
    console.log("Hello " + name);
})("Shawn");
