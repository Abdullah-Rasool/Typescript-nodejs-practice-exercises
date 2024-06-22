//Question 45
/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a
model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two 
other name-value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.*/

// Define a function to store car information

function createCar(manufacturer:string, model:string, options:{[key:string]:any}){
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...options,
    };
    return car;
}

// Call the function with the required information and additional keyword arguments
let car1 = createCar("Toyota", "Camry", {color: "blue", year: 2020 });
let car2 = createCar("Tesla", "Model S", { color: "red", autopilot: true });
let car3 = createCar("Ford", "Mustang", { color: "black", convertible: true, year: 2018 });

// Print the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
console.log(car3);