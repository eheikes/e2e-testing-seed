module.exports = {
  beforeEach: function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementPresent('body', 1000);
  },
  'Basic search should return results': function(browser) {
    browser
      .setValue('input[type="text"]', 'nightwatch')
      .submitForm('form')
      .pause(1000)
      .assert.elementPresent('#search')
      .end();
  }
};
