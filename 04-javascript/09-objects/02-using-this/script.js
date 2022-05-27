// Create an object with 3 properties. 
let chicken = {
    thigh: 2,
    head: 1,
    wing: 2,
    // Create a method in the object that returns a string that contains all 3 properties in a sentence.
    sentance() {
        return `A chicken has ${this.thigh}`;
    }
}
// print the return value of the method to the console
console.log(chicken.sentance());