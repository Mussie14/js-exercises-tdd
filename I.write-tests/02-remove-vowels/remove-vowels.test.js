const removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  const input = "Samuel";
  const expection = "sml";

  // Act
  const result = removeVowels(input);

  // Assert
  expect(result).toEqual(expection);
});
