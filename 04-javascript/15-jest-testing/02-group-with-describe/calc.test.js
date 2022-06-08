const { sum, difference } = require("./calc");

describe("This will describe the group of tests that will run", () => {
  // The tests will go in here
  test("should output sum of 2 numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  // we can even have nested describes to further group our tests so they read more like a story.
  describe("This is a nested describe, and will show up indented from the first one when ran in the console", () => {
    // Tests relating to this group would go here
    test("should output the difference of 2 numbers", () => {
      const result = difference(3, 2);
      expect(result).toBe(1);
    });
  });
});
