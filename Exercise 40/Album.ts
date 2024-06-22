// Question 40
/* Write a function called make_album to create album objects with artist and title information. 
Accept two mandatory parameters: artist and title. Return an object containing this information. 
Extend the function to include an optional parameter for the number of tracks. 
Provide three examples of creating album objects, and demonstrate using the optional parameter once*/


// Define an interface for the Album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;  // Optional property
}




// Define the make_album function with an optional tracks parameter
function make_album(artist: string, title: string, tracks?: number): Album{
    // Create an album object with artist and title
    let album : Album = {
        artist: artist,
        title: title,
    };

    // If the number of tracks is provided, add it to the album object
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }

    return album;
}

// Create and print three different album objects without the tracks parameter
let album1 = make_album("Nusrat Fateh Ali Khan", "The Ultimate Collection");
let album2 = make_album("Atif Aslam", "Doorie");
let album3 = make_album("Abida Parveen", "Tere Ishq Nachaya");

console.log(album1);
console.log(album2);
console.log(album3);

// Create and print an album object with the tracks parameter
let album4 = make_album("Ali Zafar", "Jhoom", 10);
console.log(album4);



