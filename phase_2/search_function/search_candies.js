const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skittles', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (String, Number) => {
  
  uppercasedName = 
    String.charAt(0).toUpperCase()
    + String.slice(1);

  let result = 
    candies.filter(candy => candy.name.startsWith(uppercasedName) && Number >= candy.price);

  let candyList = 
    result.map(candy => candy.name);
  
  return candyList;
};

module.exports = searchCandies;