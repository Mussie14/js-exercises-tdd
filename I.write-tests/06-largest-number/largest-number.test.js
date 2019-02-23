var getLargestNumbers = require('./Largest-number');

test('Get largest-number', function () {

    // Arrange
    const input = [3, 21, 88, 4, 36];
    const expection = 88;

    // Act
    const result = getLargestNumbers(input);

    // Assert
    expect(result).toEqual(expection);

});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed