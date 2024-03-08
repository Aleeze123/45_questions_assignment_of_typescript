// Write a function that accepts a array of items on a sandwich. 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a summary of the sandwich that is being ordered
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
    console.log("Enjoy your sandwich");
}
// Call the functions three times
make_sandwich('French bread', 'bonesless chicken', 'tomato');
make_sandwich('mayonnaise', 'butter');
make_sandwich('Grilled Chicken');
