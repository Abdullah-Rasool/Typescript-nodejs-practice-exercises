//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
actually been modified.*/
// Define an array of magician names
var magicians = ["Doug Henning", "Max Maven", "Harry Houdini"];
// Define the function to show magicians
function show_magicians(magiciansList) {
    for (var _i = 0, magiciansList_1 = magiciansList; _i < magiciansList_1.length; _i++) {
        var magician = magiciansList_1[_i];
        console.log(magician);
    }
}
// Define the function to make magicians great
function make_great(magiciansList) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Call the function to modify the magicians' names
var great_magicians = make_great(magicians);
// Call the function with the array of magician names
show_magicians(great_magicians);
