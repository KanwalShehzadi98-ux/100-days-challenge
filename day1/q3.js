"use strict";
let myName = "kAnwAl shEhzAdi";
console.log(`Lowercase : ${myName.toLowerCase()}`);
console.log(`Uppercase : ${myName.toUpperCase()}`);
let fullName = myName.split(' ');
let firstName = fullName[0].toLowerCase();
let lastName = fullName[1].toLowerCase();
console.log(`TitleCase : ${firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)}`);
