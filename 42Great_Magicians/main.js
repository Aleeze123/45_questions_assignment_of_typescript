// Repeat exercise 41
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Make function called make great
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        // Add the great to each magician name
        magicians[i] = magicians[i] + ' the Great';
    }
}
var magicians2 = ['Ali raza', 'Afzaal Afridi', 'Sabir Ali', 'Shahrukh Zahoor'];
make_great(magicians2);
show_magicians(magicians2);
