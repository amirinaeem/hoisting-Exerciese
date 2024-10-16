//no Parameters;
const activateHyperdrive = () => console.log("Hyperdrive Activated");
activateHyperdrive();

//implicit return;
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

//implicit return with Objects;
const currentCoordinates = (x, y, z) => ({ x, y, z });
console.log(currentCoordinates(1, 2, 3));

//this behavior with arrow function;
const spacecraft = {
  name: "Explorer 1",
  receiveMessage: (message) => {
    console.log("Message received: " + message);
    console.log("spacecraft name: " + this.name); // Observing 'this' behavior
  }
};

spacecraft.receiveMessage("Hello from Earth");
// In arrow functions, 'this' is lexically bound to the scope in which the function is defined.
// In this case, 'this' inside the arrow function is referring to the global scope, not the spacecraft object.
// Therefore, 'this.name' is undefined. To access spacecraft properties, use a regular function instead of an arrow function.
