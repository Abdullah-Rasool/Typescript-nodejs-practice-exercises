"use strict";
//Question 25
/*Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
let alien_color = "green";
// check if the alien's color is green 
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
//here's the program that fails the if test, assuming the alien's color is not 'green':
let alien_color_2 = "Red";
// Check if the alien's color is green
if (alien_color_2 === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
