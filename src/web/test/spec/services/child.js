'use strict';

describe('Service: Child', function () {

  // load the service's module
  beforeEach(module('WebApp'));

  // instantiate service
  var Child;
  beforeEach(inject(function (_Child_) {
    Child = _Child_;
  }));

  it('should do something', function () {
    expect(!!Child).toBe(true);
  });

});
