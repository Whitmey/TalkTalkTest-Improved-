// spec.js
describe('TalkTalkApp', function() {

  beforeEach(function() {
    browser.get('http://www.willwhitmey.io/TalkTalkTest-Improved-/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('TalkTalk');
  });

  it('should have a list of contacts', function() {
    expect(element.all(by.repeater('main in main.all')).count()).toEqual(5);
  });

  it('should add a contact', function() {
    element(by.model('main.addUser.name')).sendKeys('Will Whitmey');
    element(by.model('main.addUser.email')).sendKeys('w.whitmey@outlook.com');
    element(by.model('main.addUser.job')).sendKeys('Web Developer');
    element(by.model('main.addUser.location')).sendKeys('London');
    element(by.model('main.addUser.tag')).sendKeys('Friend');
    element(by.id('addUserButton')).click();

    expect(element.all(by.repeater('main in main.all')).count()).toEqual(6);
  });

  it('should expand to show details', function() {
    // element(by.id('expand')).get(0).click();
    element.all(by.css('#expand')).get(0).click();

    // expect(element(by.id('shouldExpand')).get(0).isDisplayed()).toBe(true);
    expect(element.all(by.css('#shouldExpand')).get(0).isDisplayed()).toBe(true);
  });
});
