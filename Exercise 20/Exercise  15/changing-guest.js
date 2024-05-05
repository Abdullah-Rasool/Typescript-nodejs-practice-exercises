"use strict";
//Question 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
//***1st task***
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guest = ["Bilal", "Junaid", "Mustafa"];
let notInvited = guest.splice(0, 1)[0]; //splice is an array method used to add or remove elements from an array
console.log(`${notInvited} Sorry, you are not invited to dinner.`);
//***2nd task***
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guest.push("Ubaid"); //push method is used to add one or more elements to the end of an array
//***3rd task***
//Print a second set of invitation messages, one for each person who is still in your list.
guest.map((item) => console.log(`Dear ${item} You're invited to dinner! We'd love to have you join us for a delicious meal tonight.`));
