const sum = (a,b) => {
  return a + b;
}
const difference = (a,b) => {
  return a - b;
}

const product = (a,b) => {
  return a * b;
}

const oddOrEven = (a) => {
  if(a % 2 === 0){
    return `${a} is an even number`
  } else {
    return `${a} is an odd number`;
  }
}

  module.exports = {sum, difference, oddOrEven, product}