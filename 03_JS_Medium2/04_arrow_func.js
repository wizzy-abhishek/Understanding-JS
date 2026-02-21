() => {} // this is an arrow func

const f = (num) => {
    console.log(this);   // {}
    console.log(num);
    
}

f(10)

const in_line = (n1, n2) => n1+n2

console.log(in_line(10,20));

// Inline for obj

const il = (name, age) => ({"name":name, "age":age})
console.log(il("Abhishek", 22));


const exp = function() {
    console.log(this);
}

exp()
