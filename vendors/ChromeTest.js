require('chromedriver');
let webdriver = require('selenium-webdriver');

class ChromeTest {

  constructor() {
    this.driver = null;
    this.tests = [];
  }

  addTest(test) {
    this.tests.push(test);
  }

  run() {
    console.info('Starting tests for chrome');
    this.tests.forEach(
      (test) => test.run(
        () => new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
      )
    );
  }

}

module.exports = ChromeTest;