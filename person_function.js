

function Person(firstName, lastName, humanAge){
    //convert two strings and a number into ONE object
    return { //begin object literal
        first: firstName,
        last: lastName,
        age: humanAge
    };// return literal object
}

let personObject = Person("Kevin", "Long", 57)

console.log(`
    FIRST: ${personObject.first}
    LAST: ${personObject.last}
    AGE: ${personObject.age}
`);