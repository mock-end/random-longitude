'use strict';

var expect = require('chai').expect;


describe('random-longitude: ', function () {

  var randomLongitude = require('../../');

  it('common', function () {
    expect(randomLongitude())
      .to.be.within(-180, 180)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);
  });
});
