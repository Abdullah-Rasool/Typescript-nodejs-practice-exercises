"use strict";
// Question 30
/*Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting
to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
// Array of usernames
let usernames = ["admin", "user1", "user2", "user3", "user4"];
// Loop through the array of usernames
for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}