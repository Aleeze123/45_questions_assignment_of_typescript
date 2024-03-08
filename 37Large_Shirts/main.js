function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript!"; }
    console.log("I'm making a ".concat(size, " T-Shirt with the message\"").concat(message, "\"."));
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I Love Pakistan!");
