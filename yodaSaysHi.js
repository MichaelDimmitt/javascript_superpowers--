// example of first lesson, doubly dereference an object:
let boat = {input: {boatThing: 'I am a boat'} }
driveBoat(boat)
function driveBoat ({input: {boatThing} }) {
  console.log(boatThing)
}

// example of second lesson, omit prop values if key matches variable name:
let car = getCar('Kia', 'Sorento', 40000);
function getCar(make, model, value) {
  return {
    // with property value shorthand syntax, you can omit the property value if key matches variable name
    make,  // same as make: make
  }
}
console.log(car.make); // output: 'Kia'
