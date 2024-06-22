//Question 45
/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a
model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two
other name-value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define a function to store car information
function createCar(manufacturer, model, options) {
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
// Call the function with the required information and additional keyword arguments
var car1 = createCar("Toyota", "Camry", { color: "blue", year: 2020 });
var car2 = createCar("Tesla", "Model S", { color: "red", autopilot: true });
var car3 = createCar("Ford", "Mustang", { color: "black", convertible: true, year: 2018 });
// Print the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
