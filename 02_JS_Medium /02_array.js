const arr = new Array(1,2,3,4.98,'A')

arr1 = arr.slice(2,7) // End index is excluded and if the end index is out of bound still it works till last index
console.log(arr1); 

arr2 = arr.splice(2,7)
console.log(arr2); // End index is inclusive and the main array is changed, original array losses all the element spliced

console.log(arr);
