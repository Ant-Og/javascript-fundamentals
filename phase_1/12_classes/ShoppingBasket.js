class ShoppingBasket {

  constructor() {
    this.basket = []
  }

  addItem(candyItem) {
    return this.basket.push(candyItem);
  }

  getTotalPrice() {
    let total = 0
    this.basket.forEach(candyItem => {
      total += candyItem.price;
    });
    return total;
  }
}

module.exports = ShoppingBasket;