var getEvenNumbers = require('./get-even-numbers');

test('Get getEven', function () {

    // Arrange
    const input = [22, 13, 73, 82, 4];
    const expection = [22, 82, 4];

    // Act
    const result = getEvenNumbers(input);

    // Assert
    expect(result).toEqual(expection);

});


// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];