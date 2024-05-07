//Question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Interface defining the structure of a Fruit object
interface Fruit {
    name : string;
    color : string;
    isTasty : boolean;
    pricePerKg : number;
}

// Creating an object representing a Fruit
let  Fruit = {
    name : "Apple",
    color : "Red",
    isTasty : true,
    pricePerKg : 400
};

// Displaying information about the apple object
console.log(Fruit);

