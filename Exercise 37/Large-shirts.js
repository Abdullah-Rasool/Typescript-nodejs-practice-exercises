"use strict";
// Question 37
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
// Define the make_shirt function with default parameters
function make_shirt(size = "Large", message = "I Love Typescript.") {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
// Call the make_shirt function with default size and message (Large shirt with default message)
make_shirt();
// Call the make_shirt function with a Medium shirt and default message
make_shirt("Medium");
// Call the make_shirt function with a custom size and custom message
make_shirt("Small", "Keep Calm and Code On.");
