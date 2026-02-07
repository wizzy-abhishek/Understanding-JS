const balance = 100.63478
console.log(balance.toFixed(2));
console.log(balance.toPrecision(3))
console.log(balance.toPrecision(2)) // Here it rounds up the number to 1.0e+2 which is 100 in this case, 1.0e+2 means 1.0 x 10^2 which is 100
console.log(balance.toPrecision(4)) // Here the output is 100.6 as it rounds up the number to 4 significant digits

const bigMoney = 1000000000;
console.log(bigMoney.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER); // The maximum safe integer in JavaScript is 9007199254740991 (2^53 - 1)
console.log(Number.MAX_VALUE); // The maximum representable number in JavaScript is approximately 1.7976931348623157e+308, which is the largest positive finite value that can be represented in JavaScript. It is different from MAX_SAFE_INTEGER, which is the largest integer that can be safely represented without losing precision. MAX_VALUE represents the upper limit for floating-point numbers in JavaScript, while MAX_SAFE_INTEGER represents the upper limit for integers that can be accurately represented.
