// Question 36
/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

// Define the make_shirt function
function make_shirt(size:string,message:string):void{
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`The shirt size is ${size} and the message printed on it: "${message}".`);
}

// Call the make_shirt function with specific arguments
make_shirt("Large","I Love Typescript.");
make_shirt("Medium","Code is Poetry.");
make_shirt("Small","Hello, World!");