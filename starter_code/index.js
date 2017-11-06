const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();

let person = new Person("Jefe",1,10);
// let person2 = new Person("Limpiador",1,0);
// let person3 = new Person("Ana", 0, 7);
// let person4 = new Person("Pepito", 3, 9);

let movement = setInterval(()=>{
  if (elevator.direction=="up") elevator.floorUp();
  if (elevator.direction=="down") elevator.floorDown();
}, 1000);
