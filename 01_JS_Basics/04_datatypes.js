// There are 2 types of datatypes in JavaScript: Primitive and Non-Primitive (Reference) datatypes
// Primitive types: number, string, boolean, null, undefined, and symbol 

numbertype = 43.6
stringtype = '23'
numbertype2 = Number('23') // converts string to number
stringtype2 = '23a'
numbertype3 = Number('23a') // NaN because '23a' cannot be converted to a number

console.log(numbertype3); // NaN
console.log(typeof numbertype3)


boolean1 = Boolean('') // false because empty string is falsy
boolean2 = Boolean('0') // true because non-empty string is truthy
boolean3 = Boolean(0) // false because 0 is falsy
boolean4 = Boolean(1) // true because non-zero numbers are truthy

sym1 = Symbol(1)
sym2 = Symbol(1)

console.log(sym1 === sym2); // false because each symbol is unique even if they have the same description

// Non-Primitive (Reference) types: Object, Array, Funcation 

const hero = ['Ironman', 'Batman']
console.log(typeof hero);
console.log(hero);


let my_obj = {
    'name': 'Abhishek',
    'age': 21
}

console.log(my_obj);


