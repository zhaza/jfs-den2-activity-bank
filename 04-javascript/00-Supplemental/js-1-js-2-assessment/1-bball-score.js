function totalBasketballScore(freeThrows, midRange, threePointers) {
  let sum = freeThrows + midRange*2 + threePointers*3;
  if (
    typeof freeThrows === "number" &&
    typeof midRange === "number" &&
    typeof threePointers === "number"
  ) {
    console.log(sum);
  } else {
    console.log("All entries must be numbers");
  }
}

totalBasketballScore(2, 3, 4);

