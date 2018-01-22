var calculator = require('../js/calculator')
var assert = require("assert")
describe('Calculadora', function() {
  it('Deberia sumar dos numeros', function () {
    assert.equal(5, calculator.addNumber(2, 3));
    assert.equal(9, calculator.addNumber(3, 6));
  });

  it('should substract two numbers', function () {
    assert.equal(5, calculator.substractNumber(8, 3));
    assert.equal(3, calculator.substractNumber(9, 6));
  });

  it('should multiply two numbers', function () {
    assert.equal(9, calculator.multiplyNumber(3, 3));
    assert.equal(10, calculator.multiplyNumber(2, 5));
  });

  it('should divide two numbers', function () {
    assert.equal(2, calculator.divideNumber(6, 3));
    assert.equal(1, calculator.divideNumber(9, 9));
  });
});