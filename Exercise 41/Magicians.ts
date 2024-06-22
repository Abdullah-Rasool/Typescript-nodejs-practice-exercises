// Question 41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

// Define an array of magician names

let magicians : string[] = ["Doug Henning","Max Maven","Harry Houdini"];

// Define the function to show magicians

function show_magicians(magiciansList:string[]):void{
    for(let magician of magiciansList){
        console.log(magician);
    }
}

// Call the function with the array of magician names
show_magicians(magicians);