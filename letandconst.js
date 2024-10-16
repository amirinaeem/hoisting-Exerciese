// let behavior;

let destination = "Ancient Egypt";
destination = "Medival Europe";
console.log(destination);

//const behavior;
const travelDate = "2024-03-15";
travelDate = "2015-03-15"; // we can not reassign the const variable;
console.log(travelDate);

// variable hoisting;
console.log(timeMachineModel); //letandconst.js:15  Uncaught ReferenceError: timeMachineModel is not defined;
var timeMachineModel = "t-900"; // undefined,
//Variable hoisting means that when you declare a variable using var, the declaration is moved to
//the top of its scope (whether it's global or local), but only the declaration is hoisted, not the initialization.
//Because of this, the variable technically exists from the start, but it hasn't been assigned
// a value yet, so it's automatically initialized to undefined.
