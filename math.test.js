const sum = require('./sum');

test('Adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

const sum = require('./sum');

test('multiples 2 * 3 to equal 6', () => {
    expect(sum(2,3)).toBe(6);
})

test('divides 6 / 2 to equal 3', () => {
    expect(sum(6,2)).toBe(3);
})

test('divides by zero throws error', () => {
    expect(() => divide(6,0)).toThrow('Cannot divide by zero');
});