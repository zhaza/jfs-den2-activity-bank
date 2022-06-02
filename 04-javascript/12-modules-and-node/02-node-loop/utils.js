// create a function that has one parameter
// The parameter will be an array of strings
// create a loop inside the function that prints each string to the terminal

const print = (arr) => {
  for (let str of arr) {
    console.log(str);
  }
};

// export your function
module.exports = { print };
