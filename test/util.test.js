const util = require("../src/util");

// Util tests

test("creates an array of 6 elements lol", () => {
  // TODO implement
  expect(util.createArray(6).length).toBe(6);
});

test("gets the index of a given value", () => {
  var arrayColors = ["red", "blue", "green"];
  // TODO implement
  expect(util.getIndexOf(arrayColors, "blue")).toBe(1);
});

test("moves a string to camel case", () => {
  var string = "User name";
  // TODO implement
  expect(util.toCamelCase(string)).toBe("userName");
});
