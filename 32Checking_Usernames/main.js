// Make a list of users called current users
var current_users = ['sania', 'rania', 'hamna', 'noor', 'amna'];
// Make another list of users called new users
var new_users = ['Sania', 'Sarah', 'hamna', 'Hamza', 'ayesha'];
// Loop through the new_users list to see if each new username has already been used 
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isAvailable = true;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            // Print a message that the user is already taken
            console.log("Username \"".concat(new_user, "\" is already taken. please choose a different username."));
            isAvailable = false;
            break;
        }
    }
    //If a username has not been used
    if (isAvailable) {
        // Print a message that the user is available
        console.log("Username \"".concat(new_user, "\" is available"));
    }
}
