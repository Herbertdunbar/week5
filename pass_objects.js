
const person = {
    first: "Kevin",
    last: "Long",
    age: 57,
    phone: "503-88-6879",
    DOB:new Date("9-13-1967")
};

const person2 = {
    first: "Nina",
    last: "Marie",
    age: 47,
    phone: "503-888-6879",
    DOB:new Date("9-13-1977")
};

function printLable(dude){ //recieve one whole object
    //cpmpose a template string based on the object's properties
    return`
    FULL NAME: ${dude.first} ${dude.last}
    PHONE NUMBER: ${dude.phone}
    `;
}

console.log(printLable(person));
console.log(printLable(person2));
console.log(printLable({first:"Dandy", last:"Boy", phone:"555-bone"}));

