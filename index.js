module.exports = {
  verify: require('./verify.js'),
  sign: require('./sign.js'),
  JsonWebTokenError: require('./lib/JsonWebTokenError.js'),
  NotBeforeError: require('./lib/NotBeforeError.js'),
  TokenExpiredError: require('./lib/TokenExpiredError.js'),
};

Object.defineProperty(module.exports, 'decode', {
  enumerable: false,
  value: require('./decode.js'),
});
