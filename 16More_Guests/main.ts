// Creating a Guest List Array
let guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];

// Making variable for those guest who cant come
let dontCome = guestList[1];

// Print the name of guest who cant come
console.log(dontCome, "nahi aa sakti");

// Add or Remove Values from Guest List Array
guestList.splice(1, 1, "Aleeze");

// Message Pint for Bigger Table
console.log("Good News ! We have found a bigger table for dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Rubaisha");

// Adding a new guest at ending index of array
guestList.push("Arbish");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Aizal");

// Print Message of Updated List
console.log("Update List of our Guests");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Assalam-o-Alaikum ${oneguest}, would you like to dinner with me?`));