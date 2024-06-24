// create an arary with 3 objects
const library = [
    {
        title: "Verros",
        author: "Maria Donan",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Arthur si sfoara de aur",
        author: "Joe Tod-Stanton",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Dublu autoportret",
        author: "Vraujan Vosganian",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// modify the key value from read
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// destruvturing and rename the title from the first object
const { title: firstBook } = library[0];
console.log(firstBook);

// turn the object into a Json string
const str = JSON.stringify(library);
console.log(str);
