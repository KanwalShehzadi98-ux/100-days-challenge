"use strict";
/* Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model,
 year, and a method describe() that logs a sentence about the laptop.*/
let laptop = {
    make: "Lenovo",
    model: "PMLS",
    year: 2023,
    describe: function () {
        console.log(`This laptop is a ${this.make} ,${this.model} and ${this.year}`);
    }
};
laptop.describe();
