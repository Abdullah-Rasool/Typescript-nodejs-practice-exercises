// Question 32
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// List of current users
let current_users: string[] = ["Ubaid", "Ahmed", "Ali", "Rehan", "Zohaib"];

// List of new users
let new_users: string[] = ["Bilal", "Junaid", "Umair", "Ubaid", "Ahmed"];

// Convert current user names to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map((username) =>
  username.toLowerCase()
);

// Loop through the new_users list
for (let new_user of new_users) {
  // Convert new username to lowercase for case-insensitive comparison
  let new_users_lower: string = new_user.toLowerCase();

  // Check if the new username exists in the list of current users (case-insensitive)
  if (current_users_lower.includes(new_users_lower)) {
    console.log(
      `Sorry, the username "${new_user}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`Congratulations! The username "${new_user}" is available`);
  }
}
