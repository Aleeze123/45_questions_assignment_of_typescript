// Make a list of users called current users
let current_users: string[] = ['sania', 'rania', 'hamna', 'noor', 'amna'];

// Make another list of users called new users
let new_users: string[] = ['Sania', 'Sarah', 'hamna', 'Hamza', 'ayesha'];
// Loop through the new_users list to see if each new username has already been used 
for(let new_user of new_users){
    let isAvailable = true;
    for (let current_user of current_users){
        if (new_user.toLowerCase() === current_user.toLowerCase()){
            // Print a message that the user is already taken
            console.log(`Username "${new_user}" is already taken. please choose a different username.`);
            isAvailable = false;
            break;
        }
    }
    //If a username has not been used
    if (isAvailable){
        // Print a message that the user is available
        console.log(`Username "${new_user}" is available`);
    }

}