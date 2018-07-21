
// example of first lesson, doubly dereference an object:
let boat = {input: {boatThing: 'I am a boat'} }
driveBoat(boat)
function driveBoat ({input: {boatThing} }) {
  console.log('example one: ',boatThing)
}

// example of second lesson, omit prop values if key matches variable name:
let car = getCar('Kia', 'Sorento', 40000);
function getCar(make, model, value) {
  return {
    // with property value shorthand syntax, you can omit the property value if key matches variable name
    make,  // same as make: make
  }
}
console.log('example two: ',car.make); // output: 'Kia'

// example of third lesson, pass command line args to bash commands in package.json
var exec = require('child_process').exec, child;
// package.json
let execString='npm run argToBashFunction argOne'
exec(execString,
  function (error, stdout, stderr) {
    console.log("example three: creating then removing directory argOne: \n   command run for package json: ${execString}" + stdout);
  })
