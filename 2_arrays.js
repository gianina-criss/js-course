console.log("LEARNING ARRAYS");

// store multiple value with arrays
var ourArray = ["Manuela", 50];
console.log(ourArray);

// nested arrays
var myArray = [
    ["the universe", 42],
    ["everything", 101010],
];
console.log(myArray);

// acces array data with indexes
var ourArray = [50, 60, 70];
var ourFirstData = ourArray[0];
var ourSecondData = ourArray[1];
var ourThirdData = ourArray[2];
console.log(ourFirstData);
console.log(ourSecondData);
console.log(ourThirdData);

// modify array data with indexes
var ourArray = [18, 64, 99];
ourArray[0] = 22;
ourArray[1] = 45;
ourArray[2] = 100;
console.log(ourArray);

// acces multi-dimensionl arrays with indexes (indexarea se foloseste pentru a gasi un elemnet din array folosind pozitia aka index)
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
var myFirstBraketData = myArray[0];
console.log(myFirstBraketData);

mySecondNumberOfTheSecondBraket = myArray[1][1];
console.log(mySecondNumberOfTheSecondBraket);

myInererBraketLastNumber = myArray[3][0][2];
console.log(myInererBraketLastNumber);

myLastNumber = myArray[3][2];
console.log(myLastNumber);

// manipulate array with method push()
var myArray = ["Simpson", "J", "cat"];
myArray.push(["happy", "joy"]);
console.log(myArray);

var myArray = ["Mirabela", 30, "P"];
myArray.push(["Austria", 40]);
console.log(myArray);

// manipulate arrays with method pop() (removes the last element)
var myArray = [1, 2, 3];
var removeFromMyArray = myArray.pop();
console.log(removeFromMyArray);
console.log(myArray);

var myArray = ["Luna", 22, "C"];
myArray.push(["Romania", 40]);
var removedLastBraketFromMyArray = myArray.pop();
console.log(removedLastBraketFromMyArray);
console.log(myArray);

// manipulate arrays with method shift() (removes the first element)
var myArray = [["Crizantema", 11], ["Germania"]];
var removedFirstBraketFromMyArray = myArray.shift();
console.log(removedFirstBraketFromMyArray);
console.log(myArray);

// manipulate arrays with methode unshift()
var myArray = ["Elisabeta", "S", "femele"];
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("happy");
console.log(myArray);

// shoping list
var myList = [["cereal", 3], ["milk", 2 ], ["juice", 2], ["eggs", 10] ];
console.log(myList)
