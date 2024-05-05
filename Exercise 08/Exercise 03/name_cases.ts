//Question 03
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_name : string = "abdullah rasool";

//lowercase

console.log(person_name.toLowerCase());

//UPPERCASE

console.log(person_name.toUpperCase());

//TitleCase

console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());