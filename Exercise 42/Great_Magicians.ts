//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
actually been modified.*/

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

// Call the function to modify the magicians' names
let great_magicians = make_great(magicians);

// Call the function with the array of magician names
show_magicians(great_magicians);



