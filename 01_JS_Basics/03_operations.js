let a = '1'
let b = 2
let c = 3
let d = '4'

console.log(b + a + c) // 213
console.log(b + c + a) // 5 + '1' = '51'
console.log(a + b + c) // '1' + 2 + 3 = '123'


console.log(d**b); // 4^2 = 16 Automatic type conversion to number

console.log(null >= 0); // true because null is converted to 0 and null == 0 is false because null is only equal to undefined
console.log(undefined == null)  // true because both undefined and null are considered equal in non-strict equality




