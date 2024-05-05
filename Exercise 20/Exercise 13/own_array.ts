//Question 13
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation : string[] = ["Hyundai Sonata","Audi E-Tron GT","BMW i8"];
//map() function converts an existing arr into new arr
transportation.map((items) => console.log(`I would like to own a ${items}.`)); // arrow operator used to callback function