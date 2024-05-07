"use strict";
//Question 23
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Task-01 (Tests for equality and inequality with strings)
//Check if a string is equal to another string 
let hello = "hello";
console.log("Is hello equal to 'hello'? I predict True.");
console.log(hello == "hello");
//Check if a string is not equal to another string
console.log("Is hello not equal to 'hello'? I predict False.");
console.log(hello != "hello");
// Task=02 (Tests using the lower case function)
//Check if a lowercase string is equal to another lowercase string
let upperCase = "Hello";
console.log("Is 'HELLO' lowercased equal to 'hello'? I predict True.");
console.log(upperCase.toLowerCase() === 'hello');
//Check if a lowercase string is not equal to another lowercase string
console.log("Is 'HELLO' lowercased not equal equal to 'hello'? I predict False.");
console.log(upperCase.toLowerCase() != 'hello');
// Task-03 (Numerical tests)
let x = 10;
let y = 5;
// Equality
console.log("Is x equal to y? I predict False.");
console.log(x === y);
// Inequality
console.log("Is x not equal to y? I predict True.");
console.log(x !== y);
// Greater than
console.log("Is x greater than y? I predict True.");
console.log(x > y);
// Less than
console.log("Is x less than y? I predict False.");
console.log(x < y);
// Greater than or equal to
console.log("Is x greater than or equal to y? I predict True.");
console.log(x >= y);
// Less than or equal to
console.log("Is x less than or equal to y? I predict False.");
console.log(x <= y);
// Task-04 (Tests using "and" and "or" operators) 
let a = true;
let b = false;
//and operator
console.log("Is a equal to true and b equal to false? I predict False.");
console.log(a && b);
//or operator
console.log("Is a equal to true or b equal to false? I predict True.");
console.log(a || b);
// Task-05 (Test whether an item is in a array)
let fruits = ["apple", "orange", "grapes"];
// Check if 'apple' is in the array
console.log("Is 'apple' in the array? I predict True");
console.log(fruits.includes("apple"));
// Check if 'banana' is not in the array
console.log("Is 'banana' not in the array? I predict False");
console.log(fruits.includes("banana"));
