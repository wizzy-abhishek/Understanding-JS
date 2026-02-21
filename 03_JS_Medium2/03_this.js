const user = {
    name : "Abhishek",
    age: 22, 
    welcome: function(){
        console.log(`${this.name}, you are welcome`); // this refers to the obj that is executing it
    }
}

// user.welcome()
// user.name = "Abhishek Anand"
// user.welcome()

console.log(this); //{}

function check (){
    let n = "Ab"
    console.log(this.n); // undefined
    console.log(this); // properties
}

check()