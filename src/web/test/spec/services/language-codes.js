'use strict';

describe('Service: LanguageCodes', function () {

  // load the service's module
  beforeEach(module('WebApp'));

  // instantiate service
  var LanguageCodes;
  beforeEach(inject(function (_LanguageCodes_) {
    LanguageCodes = _LanguageCodes_;
  }));

  it('should do something', function () {
    expect(!!LanguageCodes).toBe(true);
  });

});
