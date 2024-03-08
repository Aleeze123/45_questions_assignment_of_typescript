// Use GuestList of exercise 14
let guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];

// The guest not come
let dontCome = guestList[1];

// Print the message
console.log(dontCome, "nahi aa sakti");

// Remove and Add guest in list
guestList.splice(1 , 1, "Aleeze");

// Print the inivitation message for new guest
guestList.forEach(guest => console.log(`Assalam-o-Alaikum ${guest} would you like to dinner with me?`));
