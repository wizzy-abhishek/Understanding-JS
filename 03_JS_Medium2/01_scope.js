var a = 10

if(true){
    var a = 20
    function one(){
        console.log(`The value of a is ${a}`);
    }
    one()
}

console.log(a); // Problem with var is that it doesn't have any idea about global or local scope.
