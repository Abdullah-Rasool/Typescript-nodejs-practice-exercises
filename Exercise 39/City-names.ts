// Question 39
/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

// Define the city_country function
function city_country(city:string,country:string):string{
    // Return a formatted string with the city and country
    return `${city},${country}`
}

// Call the city_country function with three city-country pairs and print the returned values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));