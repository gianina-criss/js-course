// create a function that takes fahrenheit as an argument an returns the temp in celsius
function getCelsius(F) {
    return ((F - 32) * 5) / 9;
}
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

//arrow function
const getCelsius1 = (F) => ((F - 32) * 5) / 9;
console.log(`the temperature is ${getCelsius1(32)} \xB0C`);

//create an arrow function that takes in an array of numbers and return an object with the minumum and maximum numbers in the array
// solution 1
const minMax = (x) => ({
    min: Math.min(1, 2, 3, 4, 5),
    max: Math.max(1, 2, 3, 4, 5),
});

console.log(minMax([1, 2, 3, 4, 5]));

// solution 2
function minMax2(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}

console.log(minMax2([1, 2, 3, 4, 5, 6]));

// create an IIFE that takes the lenght and width of a rectangle output it to the console in a message as soon as the page loads
(function (lenght, width) {
    const rectangle = lenght * width;
    width, lenght, console.log(`The area of a rectangle with a lenght of ${lenght} and a width of  ${width} is ${rectangle} `);
})(5, 10);

// solution 2
((lenght, width) => {
    const area = lenght * width;
    const output = `The area of a rectangle with a lenght of ${lenght} and a width of  ${width} is ${area}.`;
    console.log(output);
})(100, 20);
