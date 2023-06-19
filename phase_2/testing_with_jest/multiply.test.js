const multiply = require('./multiply')

describe('multiply', () => {
  it('multiplies 6 by 6', () => {
    expect(multiply(6, 6)).toBe(36);
  });
});