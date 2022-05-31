// Create a class called Vehicle
class Vehicle {
    // This class should have 4 properties that are general to all vehicles. Example: type, hasMotor, color, weight
    constructor(manufacturer, color, type, hasMotor){
        this._manufacturer = manufacturer;
        this._color = color;
        this._type = type;
        this._hasMoter = hasMotor;
    }
    // The class should also have 2 methods, one method that checks if the vehicle has a motor, if it does it should return "vroom vroom"
    sound(){
        if(this._thisHasMoter) {
            return 'vroom vroom';
        }
    };
    // The second method is up to you. Could be a method that returns the color and weight of the vehicle
    changeColor(){
        this._color = 'gold';
        return `This car got an upgrade, and the color is now ${this._color}`;
    };
}
// Create 2 objects from your Vehicle class
const firstPersonal = new Vehicle('Nissan', 'Blue', 'Truck', true);
const firstBusiness = new Vehicle('Mercedes', 'Silver', 'sedan', true);

console.log(firstPersonal._hasMoter);
console.log(firstBusiness.changeColor());