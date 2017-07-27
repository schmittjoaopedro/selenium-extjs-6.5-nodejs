var assert = require('chai').assert,
    test = require('selenium-webdriver/testing');
const { By, until } = require('selenium-webdriver');

module.exports = class FormRegisterTest {

    run(factory) {
        
        test.describe('Form Login', function () {
            
            this.timeout(5 * 1000 * 60);
            let driver = factory();

            test.it('Test valid form', function (done) {
                //Wait page loading
                driver.get("http://examples.sencha.com/extjs/6.5.0/examples/kitchensink/#form-register")
                .then(() => {
                    return driver.wait(until.elementLocated(By.name('user')), 600000);    
                })
                
                //Valid field name User ID:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='User ID:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'user'))
                //Valid field name Password:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Password:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'pass'))
                //Valid field name Verify:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Verify:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'pass'))
                //Valid field name First Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='First Name:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'first'))
                //Valid field name Last Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Last Name:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'last'))
                //Valid field name Company:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Company:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'company'))
                //Valid field name Email:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Email:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'email'))
                //Valid field name State:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='State:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'state'))
                //Valid field name Date of Birth:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Date of Birth:']]//input")))
                .then((element) => element.getAttribute('name')).then((text) => assert.equal(text, 'dob'))
                
                //Valid button is disabled
                .then(() => driver.findElement(By.xpath("//a[span/span/span[text()='Register']]")))
                .then((element) => element.getAttribute('class')).then((text) => assert.isTrue(text.indexOf("x-item-disabled") !== -1))
                
                //Valid place holder field User ID:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='User ID:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'user id'))
                //Valid place holder field User ID:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Password:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'password'))
                //Valid place holder field Verify:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Verify:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'password'))
                //Valid place holder field First Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='First Name:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'First Name'))
                //Valid place holder field Last Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Last Name:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'Last Name'))
                //Valid place holder field State:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='State:']]//input")))
                .then((element) => element.getAttribute('placeholder')).then((text) => assert.equal(text, 'Select a state...'))

                //Valid required field User ID:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='User ID:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Password:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='User ID:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(1, elements.length))
                //Valid required field Password:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Password:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Verify:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Password:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(1, elements.length))
                //Valid required field Verify:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Verify:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='First Name:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Verify:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(1, elements.length))
                //Valid required field First Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='First Name:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Last Name:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='First Name:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(0, elements.length))
                //Valid required field Last Name:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Last Name:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Company:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Last Name:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(0, elements.length))
                //Valid required field Company:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Company:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Email:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Company:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(0, elements.length))
                //Valid required field Email:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Email:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='State:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Email:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(0, elements.length))
                //Valid required field State:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='State:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Date of Birth:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='State:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(0, elements.length))
                //Valid required field Date of Birth:
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='Date of Birth:']]//input"))).then((element => element.click()))
                .then(() => driver.findElement(By.xpath("//div[label/span/span[text()='User ID:']]//input"))).then((element => element.click()))
                .then(() => driver.findElements(By.xpath("//div[label/span/span[text()='Date of Birth:']]//div[@data-ref='errorWrapEl']//li[text()='This field is required']")))
                .then((elements) => assert.equal(1, elements.length))

                //Finish tests
                .then(() => {
                    driver.quit();
                    done();
                });
            });
        });

    }

}