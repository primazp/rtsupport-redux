'use strict'

const deepFreeze = (o) => {
  var prop, propKey;
  Object.freeze(o);
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }
    deepFreeze(prop);
  }
}

exports['default'] = deepFreeze
module.exports = deepFreeze
