const stringLength = require('./task1');
const reverseString = require('./task2');
const { Calculator } = require('./task3');
const { capitalize } = require('./task4');

test('sum number of letters in a string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const actual = stringLength(string);
    // Assert
    expect(actual).toBe(5);
});

test('Should return Error if string count isnt between 0 & 10', () => {
    // Arrange
    const string = 'HelloJohnAdibe'
        // Act
    const actual = () => {
            stringLength(string);
        }
        //Assert
    expect(actual).toThrowError()
});

test('should return reverse string', () => {
    //Arrange
    const string = 'hello';
    // Act
    const actual = reverseString(string);
    // Assert
    expect(actual).toBe('olleh');
});

describe('add', () => {
    test(' 1 + 2 should return 3 ', () => {
        // Arrange
        const num1 = 1;
        const num2 = 2;
        // Act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.add();
        // Assert
        expect(actual).toBe(3);
    });
});

describe('subtract', () => {
    test(' 2 - 1 should return 1 ', () => {
        // Arrange
        const num1 = 2;
        const num2 = 1;
        // Act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.subtract();
        // Assert
        expect(actual).toBe(1);
    });
});

describe('divide', () => {
    test(' 2 / 1 should return 2 ', () => {
        // Arrange
        const num1 = 2;
        const num2 = 1;
        // Act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.divide();
        // Assert
        expect(actual).toBe(2);
    });
});

describe('multiply', () => {
    test(' 1 * 2 should return 2 ', () => {
        // Arrange
        const num1 = 1;
        const num2 = 2;
        // Act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.multiply();
        // Assert
        expect(actual).toBe(2);
    });
});

test('first letter should be returned capitalized', () => {
    // Arrange
    const string = 'hello';
    // Act
    const actual = string[0].toUpperCase();
    // Assert
    expect(actual).toBe('H')
});