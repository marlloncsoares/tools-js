const checks = require('./cheks');

const value = 5;
console.log('isNull: ', checks.isNull(value));
console.log('isNullish: ', checks.isNullish(value));
console.log('isInt: ', checks.isInt(value));