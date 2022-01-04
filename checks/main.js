const checks = require('./checks');

const value = 5;
console.log('value: ', value);
console.log('isNull: ', checks.isNull(value));
console.log('isNullish: ', checks.isNullish(value));
console.log('isInt: ', checks.isInt(value));
console.log('isEmpty: ', checks.isEmpty(value));
console.log('isEmail: ', checks.isEmail(value));
