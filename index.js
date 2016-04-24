'use strict';

var clamp       = require('clamp');
var assign      = require('object-assign');
var randomFloat = require('random-floating');

module.exports = function (options) {

  options = assign({
    fixed: 5,
    min: -180,
    max: 180
  }, options);

  options.min = clamp(options.min, -180, 180);
  options.max = clamp(options.max, -180, 180);

  return randomFloat(options);
};

