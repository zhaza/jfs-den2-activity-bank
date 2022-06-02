function itemPrice(item) {
  if (typeof item === "string") {
    switch (item) {
      case "computer":
        console.log(500);
        break;
      case "mouse":
        console.log(10);
        break;
      case "tablet":
        console.log(250);
        break;
      case "case":
        console.log(25);
        break;
      case "router":
        console.log(100);
        break;

      default:
        console.log("Item not in store.");
        break;
    }
  } else {
    console.log("Data type must be string");
  }
}

itemPrice("case");
