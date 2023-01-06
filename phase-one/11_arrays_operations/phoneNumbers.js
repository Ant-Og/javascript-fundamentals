/*
## Exercise - phone numbers

Your friend now wants to launch a special promotion. They give you a long list of phone
numbers so you can create a small program to text everyone. You notice some lines in the
file are not phone numbers, but some corrupted data:

```
1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)
```

However, you realise that most phone numbers on the list are no longer than 10 digits.
Maybe you could just implement a JavaScript function to do the filtering for you! 

To complete this exercise you will have to use Array's [filter
method](https://www.w3schools.com/jsref/jsref_filter.asp) to filter long numbers using
this function.

### Questions

1. Declare a function `checkLength` that takes a phone number (**as a string**) as
   argument, and returns `true` if this phone number contains **10 characters or less**.
2. Now declare a function `filterLongNumbers` that takes an array of phone numbers. This
   function should return only numbers that contain *10 characters or less*. It should
   make use of the function `checkLength` written previously.
*/

const numbers = ['1763687364',
'4763687363',
'7867867862',
'aaaaaaaabbbbbbbcccccdddddddd'];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = numbers.filter(checkLength);

console.log(filterLongNumbers);