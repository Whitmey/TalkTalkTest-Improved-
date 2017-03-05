// spec.js
describe('TalkTalkApp', function() {
  // var firstNumber = element(by.model('first'));
  // var secondNumber = element(by.model('second'));
  // var goButton = element(by.id('gobutton'));
  // var latestResult = element(by.binding('latest'));

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
    element(by.id('expand')).get(0).click();

    expect(element(by.id('shouldExpand')).get(0).isDisplayed()).toBe(true);
  })

  // it('should add a contact', function() {
  //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   element(by.css('[value="add"]')).click();
  //
  //   var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual('write first protractor test');
  // });

  // it('should add one and two', function() {
  //   firstNumber.sendKeys(1);
  //   secondNumber.sendKeys(2);
  //
  //   goButton.click();
  //
  //   expect(latestResult.getText()).toEqual('3');
  // });
  //
  // it('should add four and six', function() {
  //   firstNumber.sendKeys(4);
  //   secondNumber.sendKeys(6);
  //
  //   goButton.click();
  //
  //   expect(latestResult.getText()).toEqual('10');
  // });
});
