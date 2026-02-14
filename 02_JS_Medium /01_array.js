let arr1 = [1,2,3,4]
console.log(arr1);

const arr2 = new Array('Abhishek', 100, 29.1, {'A':1, 'b':2})
console.log(arr2);

// Methods in array 

arr2.push(10)
arr2.shift()

let arr3 = arr2.concat(arr1)
console.log(arr3);

console.log(arr3.join()); // Returns a string of the array (Map is represented as Object)

arr3.pop()
arr3.unshift(1111)

console.log(arr3);