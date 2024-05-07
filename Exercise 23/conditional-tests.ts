//Question 23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let number = 10;

// Test 1: Check if number is equal to 10
console.log("Is number equal to 10? I predict True");
console.log(number === 10);

// Test 2: Check if number is greater than 5
console.log("Is number greater than 5? I predict True");
console.log(number > 5);

// Test 3: Check if number is less than 20
console.log("Is number less than 20? I predict True");
console.log(number < 20);

// Test 4: Check if number is not equal to 0
console.log("Is number not equal to 0? I predict True");
console.log(number !== 0);

// Test 5: Check if number is even
console.log("Is number even? I predict True");
console.log(number%2 === 0 );

// Test 6: Check if number is negative
console.log("Is number less than 0? I predict False");
console.log(number < 0 );

// Test 7: Check if number is a multiple of 7
console.log("Is number a multiple of 7? I predict False.");
console.log(number % 7 === 0);

// Test 8: Check if number is divisible by 3
console.log("Is number divisible by 3? I predict False");
console.log(number % 3 === 0);

// Test 9: Check if number is less than or equal to 5
console.log("Is number less than or equal to 5? I predict False");
console.log(number <= 5);

// Test 10: Check if number is greater than or equal to 20
console.log("Is number less than or equal to 20? I predict False");
console.log(number >= 20);