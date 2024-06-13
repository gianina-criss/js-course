// methods on the date objects
let x;
let d = new Date(); // initialize a date object in the d variable

// to string
x = d.toString();
console.log(x, typeof d);

// get time stamp
x = d.getTime();
x = d.valueOf();
console.log(x);

// get specific parths of the date
x = d.getFullYear();
console.log(x);

x = d.getMonth();
console.log(x);

x = d.getDay();
console.log(x);

x = d.getHours();
console.log(x);

x = d.getMinutes();
console.log(x);

x = d.getSeconds();
console.log(x);

//construct a date with methods
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

// format dates
x = Intl.DateTimeFormat("default").format(d);
console.log(x);
x = d.toLocaleString("default", { month: "short" }); //same thing as above
x = console.log(x);

// mont in long format
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
console.log(x);

x = d.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    second: "numeric",
    timeZone: "America/New_York",
});
console.log(x);
