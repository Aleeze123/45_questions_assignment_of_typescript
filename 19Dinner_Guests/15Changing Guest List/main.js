var guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];
var dontCome = guestList[1];
console.log(dontCome, "nahi aa sakti");
guestList.splice(1, 1, "Nimra");
guestList.forEach(function (guest) { return console.log("Assalam-o-Alaikum ".concat(guest, ", would you like to dinner with me?")); });
