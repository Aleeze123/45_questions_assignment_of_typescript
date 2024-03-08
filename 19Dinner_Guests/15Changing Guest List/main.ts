let guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];

let dontCome = guestList[1];

console.log(dontCome, "nahi aa sakti");

guestList.splice(1, 1, "Nimra");

guestList.forEach(guest => console.log(`Assalam-o-Alaikum ${guest}, would you like to dinner with me?`));

