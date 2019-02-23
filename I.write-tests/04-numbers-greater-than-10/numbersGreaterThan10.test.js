var largerThanTen = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function () {
    
    // Arrange
    const input = [4, 10, 32, 9, 21];
    const expection = [32, 21];

    // Act
    const result = largerThanTen(input);

    // Assert
    expect(result).toEqual(expection);

});




// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
