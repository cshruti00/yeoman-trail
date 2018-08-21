var assert = require('chai').assert;
var app = require('./app.spec');

describe('Add', () => {
  it('should add two numbers and return the value', () => {
    assert(app.add(1,2),3);
  })
})