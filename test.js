let ChromeTest = require('./vendors/ChromeTest');
let FormRegisterTest = require('./tests/FormRegisterTest');

let chromeTest = new ChromeTest();
chromeTest.addTest(new FormRegisterTest());
chromeTest.run();