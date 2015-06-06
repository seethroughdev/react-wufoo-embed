// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');

var context = require.context('./__tests__', true, /-spec\.js$/);
context.keys().forEach(context);
