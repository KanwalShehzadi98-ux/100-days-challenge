/* Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make,
model, and year, use array destructuring to assign the first and second laptops to variables.
Then, log these variables.*/
var my_laptop_array = [
    {
        make: "Dell",
        model: "anyModel1",
        year: 2018
    },
    {
        make: "Lenovo",
        model: "anyModel2",
        year: 2019
    },
    {
        make: "HP",
        model: "anyModel3",
        year: 2020
    }
];
var laptop1 = my_laptop_array[0], laptop2 = my_laptop_array[1], laptop3 = my_laptop_array[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
