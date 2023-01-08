const multiply = require('./multiply');

describe(multiply, () => {
  it('multiples 3 by 3', () => {
    expect(multiply(3, 3)).toBe(9)
  });
});