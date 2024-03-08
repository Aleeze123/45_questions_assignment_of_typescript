// Repeat exercise 41
function show_magicians(magicians: string[]): void{
  for (let i = 0 ; i< magicians.length; i++)
        {
            console.log(magicians[i]);
        }
    }
    // Make function called make great
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      // Add the great to each magician name
      magicians[i] = magicians[i] + ' the Great';
    }}
  const magicians2: string[] = ['Ali raza', 'Afzaal Afridi', 'Sabir Ali', 'Shahrukh Zahoor'];
  make_great(magicians2); 
  show_magicians(magicians2);


