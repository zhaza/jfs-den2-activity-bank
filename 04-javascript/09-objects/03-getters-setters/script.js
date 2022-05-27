// Copy and paste the object from the last activity "02-using-this"

let chicken = {
    _thigh: 2,
    _head: 1,
    wing: 2,
    // Create a method in the object that returns a string that contains all 3 properties in a sentence.
    sentance() {
        return `A chicken has ${this.thigh}`;
    },
    // Create getters and setters for 2 different properties in your object
    // Use the privacy indicator on your properties that have getters and setters
    // Use the getters and setters under your object to change and display the values of the properties that they effect.
    get thigh() {
        return this._thigh;
    },
    set thigh(newThigh) {
        this._thigh = newThigh;
    }
}
// print the return value of the method to the console
console.log(chicken.sentance());
console.log(chicken.thigh);
chicken.thigh = 4
console.log(chicken.thigh)

