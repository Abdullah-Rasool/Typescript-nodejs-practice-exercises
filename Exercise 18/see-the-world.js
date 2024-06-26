"use strict";
//Question 18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// Define an array of places to visit
let placesToVisit = ["Turkey", "Japan", "China", "Italy", "Australia"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort()); //spread operator(...) is used to create a copy of existing array
// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);
// Print the array in reverse alphabetical order
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show its order has changed
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
// Print the array to show it's back to its original order
console.log("Original order:", placesToVisit);
// Sort the array in alphabetical order
console.log("Sorted in Alphabetical Order:", [...placesToVisit].sort());
// Sort the array in reverse alphabetical order
console.log("Sorted in Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
