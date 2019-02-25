var getSecondThird = require('./get-second-third');

test('Get get-second-third', function () {

    // Arrange
    const input = [90, 5, 11, 8, 6];
    const expection = [6, 8];

    // Act
    const result = getSecondThird(input);

    // Assert
    expect(result).toEqual(expection);

});


// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed