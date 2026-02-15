// Merging objects 

const obj1 = {
    1:'a',
    2:'b',
    3:'c',
    4:'d'
}

const obj2 = {
    5:'e',
    6:'f',
    7:'g',
    8:'h'
}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

let obj5 = Object.assign(obj1, obj2)
console.log(obj1 === obj5);

let keys = Object.keys(obj3)
console.log(keys);

let values = Object.values(obj3)
console.log(values);

let pairs = Object.entries(obj3)
console.log(pairs);