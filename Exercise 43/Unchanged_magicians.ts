//Question 43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ 
names.Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

// Define an array of magician names

let magicians : string[] = ["Doug Henning","Max Maven","Harry Houdini"];

// Define the function to show magicians

function show_magicians(magiciansList:string[]):void{
    for(let magician of magiciansList){
        console.log(magician);
    }
}

// Define the function to make magicians great

function make_great(magiciansList:string[]){
       return magicians.map(name => `The Great ${name}`)
}

// Create a copy of the array

let copy_magicians = [...magicians];

// Call the function to get the modified list of magician names
let copy_great_magicians = make_great(copy_magicians);

// Show the original list of magician names
console.log("Original Magicians:");
show_magicians(magicians);

// Show the modified list of magician names
console.log("\nGreat Magicians:");
show_magicians(copy_great_magicians);