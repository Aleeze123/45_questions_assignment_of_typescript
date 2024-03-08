// Make a array called show magician
function show_magicians(magicians: string[]): void{
    for (let i = 0 ; i< magicians.length; i++)
    {
        // Print the name of each magician
        console.log(magicians[i]);
    }
}
const magicians: string[] = ['Ali raza', 'Afzaal Afridi','Sabir Ali', 'Shahrukh Zahoor'];
show_magicians(magicians);