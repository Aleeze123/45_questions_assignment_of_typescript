// Write a fuction stores informations about a car
function carInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Store additional options in the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required information and additional options
var myCar = carInfo('Toyota', 'Civic', { color: 'Black', year: '2024' });
console.log("returned object");
console.log(myCar);
