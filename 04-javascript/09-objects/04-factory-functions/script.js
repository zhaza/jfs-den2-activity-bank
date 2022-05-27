// Create a function that will return an object every time it is called
// Copy and paste your object from the last activity "03-getters-setters"
// Add in some default properties and values that all objects will be assigned
//  
// Make sure you are returning the object from the function

function newObject(school, age, level) {
    return {
        school,
        age,
        level
    }
}

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

// Underneath the function, create 3 different objects by creating variables set to the value of the function you created and pass it arguments.
// print your objects to the console and also test out any of the methods on them
