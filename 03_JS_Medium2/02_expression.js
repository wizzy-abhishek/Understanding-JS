
const addTwo = function add(num){
    return num + 2;
}

console.log(addTwo(3));
// console.log(add(30)); This will an error because it is an expression which is referred by addTwo const

// We can not call this expression at line 1, but if it were a normal func it could have been called at line 1