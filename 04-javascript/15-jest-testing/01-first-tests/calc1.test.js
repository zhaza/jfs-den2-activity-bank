const { sum, difference } = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract 6 - 2 to equal 4", () => {
    expect(difference(6, 2)).toBe(4);
});
