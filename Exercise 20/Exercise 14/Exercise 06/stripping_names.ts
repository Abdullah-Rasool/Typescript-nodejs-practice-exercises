//Question 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// \t: adds tab space
// \n: adds to next line

let whitespace : string = "\n\t Abdullah Rasool \t\n";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(whitespace);

let stripped_name : string = whitespace.trim();

// Print the stripped name
console.log("Name after stripping whitespace:");
console.log(stripped_name);