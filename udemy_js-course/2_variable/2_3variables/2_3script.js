// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";
console.log(firstName, lastName);

let age = 30;

console.log(age);

/*Naming Conventions
 * - Only letters, numbers, underscors and dollar signs
 * - the name Can't start with a number
 * */

/**Multi-Word Formatting
 *  firstName = camelCase
 *  first_name = underscore
 *  FirstName = PascalCase
 * firstname = lowercase
 * */

// Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}
console.log(score);

/**const variables can't be re-assign
 * const x = 100;
 * x = 200; -- can't do that
 */

/** can not declare and not initialize
 * const score; can,t do that
 */

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: "Brad",
};
person.name = "Jhon";
console.log(person);
person.email = "brad@gmail.com";
console.log(person);
