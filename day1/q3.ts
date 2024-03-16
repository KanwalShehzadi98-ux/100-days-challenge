let myName : string = "kAnwAl shEhzAdi";

console.log(`Lowercase : ${myName.toLowerCase()}`);
console.log(`Uppercase : ${myName.toUpperCase()}`);
let fullName : string[] = myName.split(' ');
let firstName : string = fullName[0].toLowerCase();
let lastName : string = fullName[1].toLowerCase();
console.log(`TitleCase : ${firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)}`)