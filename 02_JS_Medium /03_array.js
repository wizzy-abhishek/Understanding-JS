const arr1 = new Array(1,2,3)
const arr2 = new Array(4,5,6)

arr1.push(arr2)
console.log(arr1.length); // 4
console.log(arr1); // 4th element is an array, as array in JS is heterogenous, it can take object as element

let arr3 = [...arr1, ...arr2] // Spreading
console.log(arr3); 

arr3 = arr3.flat(Infinity)
console.log(arr3);