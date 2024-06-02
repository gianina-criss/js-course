// declare a variable
var a;

// declare and assign a variable
var a = 2;

// declare the var once and assign after many times
var a;
var b = 2;
console.log(a); //  to show in terminal

a = 7;
b = a;
console.log(a);

// initializing variable
var a = 5;
var b = 10;
var c = "i am a";

a = a + 1;
b = b + 5;
c = c + "string";
console.log(c);

// the declaration name must be the same with the assignment name, first letter of the word should be in lowerckase and next word with capital letter first
var studlyCapVar;
studlyCapVar = 10;
console.log(studlyCapVar);

// numbers start (intigers)

var sum = 10 + 10; //( + operator
var difference = 10 - 10; //( - operator
var multiplying = 10 * 10; //( * operator
var dividyng = 10 / 10; //( / operator
console.log(sum);

// incrementing numbers (add 1 to it)
var myVar = 87;
myVar = myVar + 1; //SHORTCUT  myVar++;
console.log(myVar);

// decimal numbers
var myDecimal = 0.22;
console.log(myDecimal);

// remainder ( % operator modulus
var remainder;
remainder = 11 % 3;
console.log(remainder);

// add/difference/multiply/divide a number to a variable
var a = 15;
var b = 20;
var c = 5;
var d = 10;

a = a + 5; //SHORTCUT a += 5;
b = b - 10; //SHORTCUT b -= 10;
c = 5 * c; //SHORTCUT c *= 5;
d = d / 5; //SHORTCUT d /= 5;
console.log(a);

// end number

//declaring string variable start

// string literals
var firstName = "Gianina";
var lastName = "Stefan";
console.log(firstName);
console.log(lastName);

// literals quotes
var myStr = 'i am a "double quoted" string inside';
var myStr = 'i am a "double quoted" string inside';
var myStr = `hello!'i am a "double quoted" another quoted' string ,bye`;
console.log(myStr);

// escape sequences in string
var newLine = "hello\nhow are you"; // newline \n splits the text
var carriageReturn = "hello\rhow are you"; // carriag return \r erreses what is in front
var tab = "hello\thow are you"; // tab \t  creates a tabspace betweeb words
var backSpace = "hello\bhow are you"; // backspace \b
var formFeed = "hello\fhow are you"; // form feed \f creates a form
console.log(formFeed);

// concateneting strings with plus operator
var myStr = "this is the start. " + "this is the end";
console.log(myStr);

// concateneting strings with plus equals operator
var myStr = "this is the first sentence. ";
myStr += "this is the last sentence";
console.log(myStr);

// concateneting strings with variable
var myName = "Gianina";
var myStr = "hello,my name is " + myName + " how are you?";
console.log(myStr);

// appending variables to string
var someAdjective = "worthwhile";
var myStr = "learning to code is ";
myStr += someAdjective;
console.log(myStr);

// find lenght of string with method lenght
var lastNameLength = 0;
var lastName = "Gianina";
lastNameLength = lastName.length;
console.log(lastNameLength);

// bracket notation to find first character in string [ ]
var firstLetterOfLastName = "";
var lastName = "Gianina";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

var firstName = "Cristina";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var familyName = "Stefan";
var thirdLetterOfTheFamilyName = familyName[2];
console.log(thirdLetterOfTheFamilyName);

// string imutability -----can change the name value
var myStr = "jello world";
myStr = "hello world";
console.log(myStr);

var myStr = "how are you";
myStr = "how are you today?";
console.log(myStr);

// brakets to find a letter in string
var firstName = "Gianina";
var lastLetterOfTheFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfTheFirstName);

var lastName = "Cristine";
var lastLetterOfTheLastName = lastName[lastName.length - 1];
console.log(lastLetterOfTheLastName);

var familyName = "Stefan";
var thirdLastNameOfTheFamilyName = familyName[familyName.length - 3];
console.log(thirdLastNameOfTheFamilyName);

// word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
