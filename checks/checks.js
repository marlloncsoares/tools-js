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

module.exports = {
    isNull,
    isNullish,
    isInt,
    isEmpty,
    isEmail
};