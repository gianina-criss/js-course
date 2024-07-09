// see the date
let d;
d = new Date();
console.log(d, typeof d);
// result -- Tue Jul 09 2024 20:58:27 GMT+0300 (Eastern European Summer Time) 'object'

// to make it a string
d = d.toString();
console.log(typeof d);
// result -- string

// set a specific date
d = new Date(2021, 10, 8);
console.log(d);
// result -- Mon Nov 08 2021 00:00:00 GMT+0200 (Eastern European Standard Time)

// add time
d = new Date(2021, 10, 8, 12, 22, 33);
console.log(d);
// result -- Mon Nov 08 2021 12:22:33 GMT+0200 (Eastern European Standard Time)

// pass in a string
d = new Date("2021-07-11");
console.log(d);
// result -- Sun Jul 11 2021 03:00:00 GMT+0300 (Eastern European Summer Time)

d = new Date("07/11/2014 12:30:00");
console.log(d);
// result -- Fri Jul 11 2014 12:30:00 GMT+0300 (Eastern European Summer Time)

//time stamps-- intiger that respresents the number of seconds that have past since jan 01 1970, expresed in milyseconds
d = Date.now();
console.log(d);
// result -- 1720548098943

//to use time stamp of a specific date
d = Date.now();
d = new Date("07-11-2022 12:30:00");
d = d.getTime();
d = d.valueOf(); //same thing
console.log(d);
// result -- 1657531800000

// the exact stamp time for right now
d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf(); //same thing
console.log(d);
// result -- 1720548140501

//create time object from a time stamp
d = new Date(1718268848150);
console.log(d);
// result -- Thu Jun 13 2024 11:54:08 GMT+0300 (Eastern European Summer Time)

// convert from miliseconds to seconds (1000 msec in 1sec)
d = Math.floor(Date.now() / 1000);
console.log(d);
// result -- 1720548165
