// see the date
let d;
d = new Date();
console.log(d, typeof d);

// to make it a string
d = d.toString();
console.log(typeof d);

// set a specific date
d = new Date(2021, 10, 8);
console.log(d);

// add time
d = new Date(2021, 10, 8, 12, 22, 33);
console.log(d);

// pass in a string
d = new Date("2021-07-11");
console.log(d);

d = new Date("07/11/2014 12:30:00");
console.log(d);

//time stamps-- intiger that respresents the number of seconds that have past since jan 01 1970, expresed in milyseconds
d = Date.now();
console.log(d);

//to use time stamp of a specific date
d = Date.now();
d = new Date("07-11-2022 12:30:00");
d = d.getTime();
d = d.valueOf(); //same thing
console.log(d);

// the exact stamp time for right now
d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf(); //same thing
console.log(d);

//create time object from a time stamp
d = new Date(1718268848150);
console.log(d);

// convert from miliseconds to seconds (1000 msec in 1sec)
d = Math.floor(Date.now() / 1000);
console.log(d);
