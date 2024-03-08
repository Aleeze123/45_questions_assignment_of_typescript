// Repeat step of Exercise 42
function show_magicians(magicians: string[]): void{
    for (let i = 0 ; i< magicians.length; i++)
          {
              console.log(magicians[i]);
          }
      }
  // Call function make great 2 
  function make_great2(magicians: string[]): string[] {
      const greatMagicians: string[] = [];
      for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
      }
      return greatMagicians;
    }
    
    const magicians3: string[] = ['Ali raza', 'Afzaal Afridi', 'Sabir Ali', 'Shahrukh Zahoor'];
    const greatMagicians2: string[] = make_great2(magicians3);

  // Print Orginal magicians names
    console.log("\nOrginal magicians:");
    show_magicians(magicians3);

    // Print Great magicians names
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians2);
    
  