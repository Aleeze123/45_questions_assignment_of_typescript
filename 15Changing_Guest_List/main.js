// Use GuestList of exercise 14
var guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];
// The guest not come
var dontCome = guestList[1];
// Print the message
console.log(dontCome, "nahi aa sakti");
// Remove and Add guest in list
guestList.splice(1, 1, "Aleeze");
// Print the inivitation message for new guest
guestList.forEach(function (guest) { return console.log("Assalam-o-Alaikum ".concat(guest, " would you like to dinner with me?")); });
