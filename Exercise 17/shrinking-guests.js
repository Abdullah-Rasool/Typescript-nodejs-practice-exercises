"use strict";
//Question 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
   print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 • Print a message to each of the two people still on your list, letting them know they’re still invited.
 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guests = ["Bilal", "Ubaid", "Ahmed", "Junaid", "Mustafa", "Ali"];
// Informing people about the limited space
console.log("Attention: Due to limited space, we regret to inform you that our dinner plans have changed unexpectedly. we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (guests !== undefined) {
        console.log(`Sorry ${removedGuest} we can't invite you to dinner.`);
    }
}
// Print invitation messages to the remaining two people
guests.forEach((guests) => {
    console.log(`Dear ${guests}, you are still invited to dinner at our place!`);
});
//Remove the last two names from the list
guests.splice(0, guests.length);
// Print the empty list to confirm
console.log("Final guests list:", guests);
