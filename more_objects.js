// A single object can have many different unrelated properties
const person = {
    first: "Kevin",
    last: "Long",
    age: 57,
    phone: "503-88-6879",
    DOB:new Date("9-13-1967")
};

person.hobby = "pool"; // add one more property and dfine its value

console.log(person.DOB)
console.log(person.phone)
console.log(person.hobby)

const fruit = [ // create a array literal of ordered individual items
    "apple",
    "banana",
    "cherry"
];
console.log(fruit[1]) //access by offset position

fruit.push("pineapple") // add more item to the end of the list
fruit.push("strawberry") //add one more item to the end of the list
fruit.push("AAA","ZZZ") // two at once??

console.log(fruit[4]);

empty_array = []
empty_object = {}