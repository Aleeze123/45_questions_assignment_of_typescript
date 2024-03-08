// Repeat step of Exercise 42
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Call function make great 2 
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
var magicians3 = ['Ali raza', 'Afzaal Afridi', 'Sabir Ali', 'Shahrukh Zahoor'];
var greatMagicians2 = make_great2(magicians3);
// Print Orginal magicians names
console.log("\nOrginal magicians:");
show_magicians(magicians3);
// Print Great magicians names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians2);
