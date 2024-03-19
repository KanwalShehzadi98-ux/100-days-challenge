"use strict";
/* Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
It should log each hobby with a statement saying you enjoy that hobby.*/
function my_rest_param_func(...hobbies) {
    hobbies.forEach((hobby) => {
        console.log(`I like ${hobby}`);
    });
}
my_rest_param_func("Eating", "Drinking", "Studying", "Coding");
