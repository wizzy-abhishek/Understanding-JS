const nestedObj = {
    email: "my@email.com",
    "full name": {
        firstname: "Abhishek",
        lastname: "Anand"
    }
}

console.log(nestedObj);

const middlename = nestedObj?.["full name"]?.middle_name ?? "Kumar"
console.log(middlename);
