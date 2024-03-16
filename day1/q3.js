var myName = "kAnwAl shEhzAdi";
console.log("Lowercase : ".concat(myName.toLowerCase()));
console.log("Uppercase : ".concat(myName.toUpperCase()));
var fullName = myName.split(' ');
var firstName = fullName[0].toLowerCase();
var lastName = fullName[1].toLowerCase();
console.log("TitleCase : ".concat(firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)));
