// string
// typeof --- to get the type from a variable in this case string is the type
const firstName = "Sara";
console.log(firstName, typeof firstName);
// rezult -- Sara string

const lastName = "Muller";
console.log(lastName, typeof lastName);
// rezult -- Muller string

// number
const age = 30;
const output = age;
console.log(output, typeof output);
// rezult -- 30 `number`

const temp = 35.5;
const output1 = temp;
console.log(output1, typeof output1);
// rezult -- 35,5 `number`

//boolean
const hasKids = true;
const output2 = hasKids;
console.log(output2, typeof output2);
// rezult -- true `boolean`

// null
const apartmentNumber = null;
const output3 = apartmentNumber;
console.log(output3, typeof output3);
// rezult -- null `object`

// undefined
let score;
const output4 = score;
console.log(output4, typeof output4);
// rezult -- undefined `undefined`

//symbol
const id = Symbol("id");
const output5 = id;
console.log(output5, typeof output5);
// rezult -- Symbol(id) `symbol`

// bigint
const n = 414545444555n;
const output6 = n;
console.log(output6, typeof output6);
// rezult -- 414545444555n `bigint`

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
