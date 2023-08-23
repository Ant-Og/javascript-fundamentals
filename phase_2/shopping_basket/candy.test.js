const Candy = require('./candy');

describe('Candy', () => {
  it('returns the name of the candy', () => {
    const myCandy = new Candy('Freddo', 0.10);

    expect(myCandy.getName()).toEqual('Freddo');
  });

  it('returns the price of the candy', () => {
    const myCandy = new Candy('Nestle Crunch', 0.60);

    expect(myCandy.getPrice()).toEqual(0.60);
  });
});