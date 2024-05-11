//Question 27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

// Version 1: Alien is green

let alien_color : String = "green";

if(alien_color === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if(alien_color === "yellow"){
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else{
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

// Version 2: Alien is yellow

let alien_color2: string = "yellow";

if(alien_color2 === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if(alien_color2 === "yellow"){
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else{
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

// Version 3: Alien is red

let alien_color3: string = "red";

if(alien_color3 === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if(alien_color3 === "yellow"){
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else{
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}