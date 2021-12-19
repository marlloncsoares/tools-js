const checks = require('./checks');

describe('Checks', () => {
    test('should return true if a null value is provided.', () => {
        const value = null;
        expect(checks.isNull(value)).toBe(true);
        expect(checks.isNullish(value)).toBe(true);
    });

    test('should return true if a undefined is provided.', () => {
        const value = undefined;
        expect(checks.isNullish(value)).toBe(true);
    })

    test('should return false if a non-null value is provided.', () => {
        const value = 'value';
        expect(checks.isNull(value)).toBe(false);
    });

    test('should return true if a integer value is provided.', () => {
        const value = 5;
        expect(checks.isInt(value)).toBe(true);
    });
})
