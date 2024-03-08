// Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city:string, country = "Pakistan"):void{

    // Function should print a simple sentence
    console.log(`${city} is in ${country}. `);
}
describe_city("Karachi");
describe_city("Peshawar");
describe_city("Tokyo","Japan");