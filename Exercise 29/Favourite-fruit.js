"use strict";
// Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas!*/
// Array of favorite fruits
let favorite_fruits = ["Apple", "Orange", "Banana"];
// Check if 'apple' is in the array
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apples!");
}
// Check if 'Orange' is in the array
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Oranges!");
}
// Check if 'Banana' is in the array
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas!");
}
// Check if 'grapes' is in the array
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
// Check if 'kiwi' is in the array
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
