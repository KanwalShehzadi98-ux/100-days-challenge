"use strict";
/* Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.*/
let myGrades = [88, 82, 83, 84, 99, 100];
let myAverageScore = myGrades.reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / myGrades.length;
console.log(myAverageScore);
