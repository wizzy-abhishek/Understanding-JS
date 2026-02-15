// There are two types of objects 
// 1. created by contructor (Singleton)
// 2. Object literal

const mySymbol = Symbol("Key")

let user = {
    name: "Abhishek",
    "full name": "Abhishek Anand",
    age: 21,
    email: "Workspace.abhishek.08@gmail.com",
    logged_in: true,
    [mySymbol]: "*"
}

console.log(user);

// Accessing any field 

console.log(user.name);

console.log(user.mySymbol); // Symbols can't be accesed like this
console.log(user[mySymbol]);

console.log(user["full name"]);

user.greeting = function(){
    console.log(`Hello, ${this["full name"]}`);
}
user.greeting()

Object.freeze(user) // Now the user object is final

console.log(user);