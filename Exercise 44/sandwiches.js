//Question 44
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter
that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.*/
// Define the function to summarize a sandwich order
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - Plain sandwich (no items specified)");
    }
    else {
        console.log("  - Sandwich with:");
        items.forEach(function (item_names) {
            return console.log("   \u2022 ".concat(item_names));
        });
    }
    console.log(); // Empty line for separation
}
// Call the function three times with different numbers of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly");
