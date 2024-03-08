// Making a Array of Countries and Print its Orginal Order
let countriresToVisit: string[] = ["Korea", "Lebanon", "Japan", "Iceland"];
console.log("Orginal Order:", countriresToVisit);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriresToVisit].sort());

// Show that the array is still in its Orginal order
console.log("Still in Orginal Order:", countriresToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriresToVisit].reverse());

// Show that the array is still in its Orginal order
console.log("Still in Orginal Order:", countriresToVisit);

// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriresToVisit.reverse());

// Print the array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriresToVisit.reverse());

// Print the array to show that  its order has been changed in Alphabetical order now
console.log("Sorted on Alphabetical Order:", countriresToVisit.sort());

// We have Changed again the Orginal Array Order Now in reverse order again
console.log("Orginal Array Reversed Again:", countriresToVisit.reverse());








