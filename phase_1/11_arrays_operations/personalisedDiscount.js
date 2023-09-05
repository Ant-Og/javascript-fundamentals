/*
## Challenge

Let's go back to our candy promotion texts. Your friend now wants to have a specific
discount percentage for each customer. After processing the list you're given, you end up
with the following array:

```javascript
// An array of objects!
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
```

To complete this exercise, you'll have to:
  * use Array's `map` method again.
  * access the properties of an object as seen previously.

### Questions

1. Modify the function `generateMessages` so it uses this new structure and write the
   correct discount percentage in each message.

Once your function is written, you should be able to type the following code and have the
exact same output:
```javascript
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
*/

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (name_discount) => {
  return `Hi ${name_discount.name}! ${name_discount.discount}% off our best candies for you today`;
}  

const personalisedMessage = namesAndDiscounts.map(generateMessages);

console.log(personalisedMessage);