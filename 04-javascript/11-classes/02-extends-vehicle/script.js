// Start by copying and pasting your Vehicle class from the last activity below
// Create a class called Vehicle
class Vehicle {
  // This class should have 4 properties that are general to all vehicles. Example: type, hasMotor, color, weight
  constructor(manufacturer, color, type, hasMotor) {
    this._manufacturer = manufacturer;
    this._color = color;
    this._type = type;
    this._hasMoter = hasMotor;
  }
  // The class should also have 2 methods, one method that checks if the vehicle has a motor, if it does it should return "vroom vroom"
  sound() {
    if (this._thisHasMoter) {
      return "vroom vroom";
    }
  }
  // The second method is up to you. Could be a method that returns the color and weight of the vehicle
  changeColor() {
    this._color = "gold";
    return `This car got an upgrade, and the color is now ${this._color}`;
  }
}
// Create 2 objects from your Vehicle class
// const firstPersonal = new Vehicle('Nissan', 'Blue', 'Truck', 'v6');
// const firstBusiness = new Vehicle('Mercedes', 'Silver', 'sedan', 'v8');

// console.log(firstPersonal._hasMoter);
// console.log(firstBusiness.changeColor());

// Create 2 child classes that extend the Vehicle class. Examples: Car, Bike, Boat, Airplane
// Give each child class at least 2 properties and 1 method
// Use the super() to pass information back to the parent class
class Car extends Vehicle {
  constructor(manufacturer, color, type, hasMotor, numOfDoors, hasSpoiler) {
    super(manufacturer, color, type, hasMotor);
    this._numOfDoors = numOfDoors;
    this._hasSpoiler = hasSpoiler;
  }
  electricMod() {
    return (this._hasMoter = "electric");
  }
}

const max = new Car("Nissan", "Blue", "Coupe", "v8", 2, true);
const chris = new Car("Toyota", "White", "Hatchback", "v8", 2, true);
console.log(max.electricMod());
console.log(chris);

class Boat extends Vehicle {
  constructor(manufacturer, color, type, hasMotor, numOfMotors, length) {
    super(manufacturer, color, type, hasMotor);
    this._numOfMotors = numOfMotors;
    this._length = length;
  }
  changeType() {
    this._type = "Yacht";
    this._length = "65m"
    return
  }
}
// create 2 objects from each child class
const maria = new Boat("SeaRay", "White", "Speed", "Jet", 1, "16m");
const delilah = new Boat("Bayliner", "Red", "Dingy", "Outboard", 2, "5m");
console.log(maria);
delilah.changeType();
console.log(delilah);
