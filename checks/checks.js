/**
 * Verifies if the value is null.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is equal to null, false returns otherwise.
 */
const isNull = (value = null) => value === null;

/**
 * Verifies if it is null or undefined.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is equal to null or undefined, 
 * false returns otherwise.
 */
const isNullish = (value = null) => (value === null) || (value === undefined);

/**
 * Verifies if value it is integer.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is integer, false returns otherwise.
 * 
 * Other forms
 * const isInt = (value) => !isNullish(value) && !isNaN(value) && (value % 1 === 0);
 */
const isInt = (value = null) => Number.isInteger(value);

/**
 * Verifies if value is is float.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is Float, false returns otherwise.
 */
const isFloat = (value = null) => !isNullish(value) && !isInt(value);

/**
 * Verifies if value is empty.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is empty, false returns otherwise.
 */
const isEmpty = (value = null) => Object.keys(value).length === 0;

/**
 * Verifies if value is email.
 * @param {*} value - Value to be verified.
 * @returns Returns true, if informed value is email, false returns otherwise.
 */
const isEmail = (value = null) => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);


/**
 * Verifies if value one is equal value two.
 * @param {*} valueOne - Value one to be verified.
 * @param {*} valueTwo - Value two to be verified.
 * @returns Returns true, if informed values equals, false returns otherwise.
 */
const isEqual = (valueOne = null, valueTwo = null) => Object.is(valueOne, valueTwo);

module.exports = {
    isNull,
    isNullish,
    isInt,
    isFloat,
    isEmpty,
    isEmail,
    isEqual
};