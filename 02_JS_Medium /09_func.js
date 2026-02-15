function restOp(val1, val2, ...val){
    return val
}

console.log(restOp(10,20,30,40,50));

function getThirdElement(myArr){
    return myArr[2]
}
console.log(getThirdElement([1,2])); // undefined

function getObjVal(myObj){
    return myObj["name"]
}

const obj = {
    name: "Abhishek"
}

console.log(getObjVal(obj));
