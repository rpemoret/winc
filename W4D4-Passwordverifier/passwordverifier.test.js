const wordLengths = require("./passwordverifier.js");

test("Is password length 4-8", function() {
  // test input password
  const words = ["test324"];

  // define the expected password length
  const expected = [4] || [5] || [6] || [7] || [8];

  //
  const output = wordLengths(words);

  // call the test function, expected password length
  expect(output).toEqual(expected);
});
