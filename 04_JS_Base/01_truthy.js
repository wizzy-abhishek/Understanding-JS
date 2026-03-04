if(" ") console.log("Blank string is true");
if([]) console.log("Empty array is true");
if(function(){}) console.log("Empty function");
if({}) console.log("Empty object");

let emObj = {}

if(Object.keys(emObj).length === 0) console.log("Object is empty ");

let val;
console.log(val);

val = null ?? undefined ?? 20
console.log(val);
