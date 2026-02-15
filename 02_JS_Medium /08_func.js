function addTwoNum(n1, n2){
    return n1 + n2
}

let result = addTwoNum(4,5)
console.log(result);

function greet(name = "Abhishek"){
    return `Hello, ${name}`
}

console.log(greet());
console.log(greet("Anand"));

function greet2(name){
    if(!name) return "Kindly enter your name"
    return `Hello, ${name}`
}

console.log(greet2());
console.log(greet2("Abhishek"));
