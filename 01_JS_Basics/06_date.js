let date = new Date()

console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

let modifiedDate = new Date("2025-02-16")
console.log(modifiedDate.toDateString());

let anotherFormat = new Date("02-16-2026")
console.log(anotherFormat.toDateString());

let timeInMilli = Date.now()
console.log(timeInMilli);

let anotherFormatInMilli = anotherFormat.getTime()
console.log(anotherFormat - timeInMilli);
const millisecondsInADay = 1000 * 60 * 60 * 24;

console.log((anotherFormat - timeInMilli)/millisecondsInADay);