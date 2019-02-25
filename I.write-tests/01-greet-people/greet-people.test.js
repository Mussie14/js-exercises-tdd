const greetPeople = require("./greet-people");

test(["Irina", "Ashleigh", "Etza"], function() {
  // Arrange
  const people = ["Irina", "Ashleigh", "Etza"];
  const expection = "Hello Irina, Ashleigh, Etza";

  // Act
  const result = greetPeople(people);

  // Assert
  expect(result).toEqual(expection);
});
