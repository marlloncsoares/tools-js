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

    test('should return true if a float value is provided.', () => {
        const value = 5.5;
        expect(checks.isFloat(value)).toBe(true);
    })

    test('should return false if a not float value is provided.', () => {
        const value = 5;
        expect(checks.isFloat(value)).toBe(false);
    });

    test('should return true if a empty value is provided.', () => {
        const value = {};
        expect(checks.isEmpty(value)).toBe(true);
    });

    test('should return true if a email valid is provided.', () => {
        const value = 'any_email@test.com';
        expect(checks.isEmail(value)).toBe(true);
    });

    test('should return false if a email invalid is provided.', () => {
        const value = 'any_emailtest';
        expect(checks.isEmail(value)).toBe(false);
    });

    test('should return true if values euqal is provided.', () => {
        expect(checks.isEqual(5, 5)).toBe(true);
        expect(checks.isEqual(false, false)).toBe(true);
        expect(checks.isEqual('jose', 'jose')).toBe(true);
        expect(checks.isEqual(null, null)).toBe(true);
    });
})
