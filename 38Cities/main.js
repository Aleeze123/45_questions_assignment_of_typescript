// Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    // Function should print a simple sentence
    console.log("".concat(city, " is in ").concat(country, ". "));
}
describe_city("Karachi");
describe_city("Peshawar");
describe_city("Tokyo", "Japan");
