/*
## Exercise - personalised messages

Your friend now would you like to also generate a personalised message for the SMS
promotion. Along with the phone numbers, you also now have a list of names:

```javascript
> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
```

To complete this exercise you'll have to:
 * create a function that takes a single name and generate the correct message for it.
 * use [Array's map
   method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   to generate the list of personalised messages using this function.

### Questions

1. Write a function `generateMessages` that takes an array of names and returns an array
   of personalised messages for each name. For example, when given the array above, the
   function should return an array with the first element being the string `'Hi Anna! 50%
   off our best candies for you today!'`, the second element the string `'Hi Laura! 50%
   off our best candies for you today!'`, and so on. 
*/

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (name) => {
  return `Hi ${name}! 50% off our best candies for you today`;
}  

const personalisedMessage = names.map(generateMessages);

console.log(personalisedMessage);