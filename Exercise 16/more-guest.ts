//Question 16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/



let guest: string[] = ["Ubaid", "Junaid", "Mustafa"];

// Informing people about the bigger dinner table
console.log("Exciting news! We've found a bigger dinner table, so there's plenty of space for everyone");

// Add one new guest to the beginning of the array
guest.unshift("Bilal");

// Add one new guest to the middle of the array
guest.splice(Math.floor(guest.length/2),0,"Ahmed");

// Use push() method to add one new guest to the end of the list
guest.push("Ali");

// Print a new set of invitation messages using map method
guest.map(item => console.log(`Dear ${item}! We're throwing a dinner party and you're invited! Come join us for good company`));