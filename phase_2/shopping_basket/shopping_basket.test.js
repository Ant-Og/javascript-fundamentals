const ShoppingBasket = require('./shopping_basket');

describe('ShoppingBasket', () => { 
  it('returns a total price of 0 when no candy is added', () => {
    const basket = new ShoppingBasket();

    expect(basket.getTotalPrice()).toBe(0)
  });
  
  it('returns a total price of 3.99 when a 3.99 valued candy is added', () => {
    const candyDouble = {
      getName: () => 'KitKat',
      getPrice: () => 3.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(candyDouble)

    expect(basket.getTotalPrice()).toBe(3.99)
  });

  it('returns a total price of 7.98 when a 2 pieces of candy valued at 3.99 are added', () => {
    const candyDouble = {
      getName: () => 'KitKat',
      getPrice: () => 3.99
    }

    const candyDouble2 = {
      getName: () => 'Snickers',
      getPrice: () => 3.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(candyDouble)
    basket.addItem(candyDouble2)

    expect(basket.getTotalPrice()).toBe(7.98)
  });
});