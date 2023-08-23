const Candy = require('./candy');
const ShoppingBasket = require('./shopping_basket');

describe('Integration', () => {
  it('adds 2 new candies to the users basket, and returns a total price of 0.70', () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy('freddo', 0.10));
    basket.addItem(new Candy('Nestle Crunch', 0.60));

    expect(basket.getTotalPrice()).toEqual(0.70);
  });
});