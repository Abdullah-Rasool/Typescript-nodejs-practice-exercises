//Question 44
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.*/

// Define the function to summarize a sandwich order
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - Plain sandwich (no items specified)");
    } else {
        console.log("  - Sandwich with:");
       items.forEach(item_names => 
        console.log(`   • ${item_names}`));
    }
    console.log(); // Empty line for separation
}

// Call the function three times with different numbers of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly");
