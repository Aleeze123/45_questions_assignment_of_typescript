//Store a person name in a variable
var personName = "Aleeze Batool";
//Lower Case
console.log(personName.toLowerCase());
//Upper Case
console.log(personName.toUpperCase());
//Title Case
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
